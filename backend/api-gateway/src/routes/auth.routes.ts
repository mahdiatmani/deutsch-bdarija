import { Router, Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';
import { loginSchema, signupSchema, forgotPasswordSchema, resetPasswordSchema } from '../schemas/auth.schema';
import { validate } from '../middleware/validate';
import { rateLimit } from '../middleware/rate-limit';
import { authenticate, AuthRequest } from '../middleware/auth';
import { refreshDailyState } from '../lib/progression';
import { toPublicUser } from '../lib/user';
import { sendEmail } from '../lib/email';
import { revokeSessions, signToken } from '../lib/session';

const router = Router();
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour
const MINUTE = 60 * 1000;

// Compared against when the email is unknown, so response time doesn't reveal which emails exist
const DUMMY_HASH = bcrypt.hashSync('timing-safe-dummy-password', 10);

const hashToken = (token: string) => crypto.createHash('sha256').update(token).digest('hex');

const findUserByEmail = (email: string) =>
  prisma.user.findFirst({ where: { email: { equals: email, mode: 'insensitive' } } });

const loginLimiter = rateLimit({
  windowMs: 15 * MINUTE,
  max: 10,
  keyGenerator: req => `${req.ip}:${String(req.body?.email || '').toLowerCase()}`,
  message: 'Too many login attempts. Please try again in a few minutes.',
});
const signupLimiter = rateLimit({ windowMs: 60 * MINUTE, max: 10 });
const passwordResetLimiter = rateLimit({ windowMs: 60 * MINUTE, max: 5 });

router.post('/login', loginLimiter, validate(loginSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, rememberMe } = req.body;
    const user = await findUserByEmail(email);
    const passwordOk = await bcrypt.compare(password, user?.password ?? DUMMY_HASH);

    if (!user || !passwordOk) {
      return res.status(401).json({ success: false, message: 'Invalid email or password', code: 'INVALID_CREDENTIALS' });
    }

    const fresh = await refreshDailyState(user);
    res.json({ user: toPublicUser(fresh), token: signToken(fresh, rememberMe ?? true) });
  } catch (error) {
    next(error);
  }
});

function buildUsername(firstName: string, lastName: string) {
  const base = `${firstName}${lastName}`
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .slice(0, 20) || 'learner';
  return `${base}${Math.floor(1000 + Math.random() * 9000)}`;
}

router.post('/signup', signupLimiter, validate(signupSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, password, gender, appLanguage } = req.body;

    if (await findUserByEmail(email)) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists', code: 'EMAIL_TAKEN' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Retry on the (rare) random username collision
    for (let attempt = 0; attempt < 5; attempt++) {
      const username = buildUsername(firstName, lastName);
      const topType = gender === 'female'
        ? 'longHair,bob,curly,curvy,straight01,straight02'
        : 'shortHair,classic01,classic02,frizzle,shaggy,shaggyMullet';
      const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}&topType=${topType}`;

      try {
        const user = await prisma.user.create({
          data: {
            username,
            firstName,
            lastName,
            email,
            password: hashedPassword,
            gender,
            avatar,
            appLanguage: appLanguage || 'darija',
          },
        });
        return res.status(201).json({ user: toPublicUser(user), token: signToken(user) });
      } catch (error) {
        const target = (error as Prisma.PrismaClientKnownRequestError).meta?.target;
        const isUsernameClash = error instanceof Prisma.PrismaClientKnownRequestError
          && error.code === 'P2002'
          && String(target).includes('username');
        if (!isUsernameClash) throw error;
      }
    }
    throw new Error('Could not generate a unique username');
  } catch (error) {
    next(error);
  }
});

router.get('/me', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.userId } });
    if (!user) return res.status(404).json({ success: false, message: 'User not found', code: 'NOT_FOUND' });
    res.json({ user: toPublicUser(await refreshDailyState(user)) });
  } catch (error) {
    next(error);
  }
});

// Always answers the same way, whether or not the email exists
router.post('/forgot-password', passwordResetLimiter, validate(forgotPasswordSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await findUserByEmail(req.body.email);

    if (user) {
      const token = crypto.randomBytes(32).toString('hex');
      await prisma.$transaction([
        prisma.passwordResetToken.deleteMany({ where: { userId: user.id } }),
        prisma.passwordResetToken.create({
          data: { userId: user.id, tokenHash: hashToken(token), expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS) },
        }),
      ]);

      const frontendUrl = (process.env.FRONTEND_URL || 'http://localhost:3000').split(',')[0].trim();
      const resetUrl = `${frontendUrl}/reset-password?token=${token}`;
      await sendEmail(
        user.email,
        "Reset your Deutsch B'Darija password",
        `Salam ${user.firstName || user.username},\n\n` +
          `Click the link below to choose a new password. It expires in 1 hour.\n\n${resetUrl}\n\n` +
          `If you didn't ask for this, you can ignore this email.`
      );
    }

    res.json({ success: true, message: 'If an account exists for this email, a reset link has been sent.' });
  } catch (error) {
    next(error);
  }
});

router.post('/reset-password', passwordResetLimiter, validate(resetPasswordSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, password } = req.body;
    const record = await prisma.passwordResetToken.findUnique({ where: { tokenHash: hashToken(token) } });

    if (!record || record.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: 'This reset link is invalid or has expired', code: 'INVALID_RESET_TOKEN' });
    }

    const hash = await bcrypt.hash(password, 10);
    // Use up the link first, so it can never be used twice
    await prisma.passwordResetToken.deleteMany({ where: { userId: record.userId } });
    // New password, and every device that was logged in has to sign in again
    await revokeSessions(record.userId, { password: hash });

    res.json({ success: true, message: 'Password updated. You can now sign in.' });
  } catch (error) {
    next(error);
  }
});

export default router;
