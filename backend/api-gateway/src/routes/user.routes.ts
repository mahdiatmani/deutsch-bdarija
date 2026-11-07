import { Router, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma';
import { updateProfileSchema, changePasswordSchema } from '../schemas/user.schema';
import { lessonProgressSchema } from '../schemas/course.schema';
import { validate } from '../middleware/validate';
import { authenticate, AuthRequest } from '../middleware/auth';
import { awardXP, daysBetween, recordAchievement, refreshDailyStateById } from '../lib/progression';
import { toPublicUser } from '../lib/user';
import { revokeSessions, signToken } from '../lib/session';
import { countScoredItems } from '../lib/lesson-content';
import { getLockedCourseIds } from '../lib/course-access';
import { DAILY_BONUS_XP, dailyGame, dayKey } from '../data/games';
import { addLessonWords, reviewCounts } from '../lib/word-review';

const router = Router();

// ── Avatar uploads ──────────────────────────────────────────────────
const uploadsDir = path.join(__dirname, '../../uploads');
fs.mkdirSync(uploadsDir, { recursive: true });

const IMAGE_EXTENSIONS: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/gif': '.gif',
  'image/webp': '.webp',
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    // Never trust the client's file name or extension
    filename: (_req, file, cb) => cb(null, `${crypto.randomUUID()}${IMAGE_EXTENSIONS[file.mimetype]}`),
  }),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (_req, file, cb) => {
    if (IMAGE_EXTENSIONS[file.mimetype]) cb(null, true);
    else cb(new Error('Only image files are allowed (jpeg, png, gif, webp)'));
  },
});

/** Delete a previously uploaded avatar file, if the URL points at our uploads dir. */
function removeUploadedAvatar(avatarUrl: string | null) {
  const match = avatarUrl?.match(/\/uploads\/([\w-]+\.\w+)$/);
  if (!match) return;
  fs.promises.unlink(path.join(uploadsDir, match[1])).catch(() => {});
}

router.post('/avatar', authenticate, upload.single('avatar'), async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded', code: 'NO_FILE' });

    const previous = await prisma.user.findUnique({ where: { id: req.userId }, select: { avatar: true } });
    const avatarUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    const user = await prisma.user.update({ where: { id: req.userId }, data: { avatar: avatarUrl } });
    removeUploadedAvatar(previous?.avatar ?? null);

    res.json({ avatar: user.avatar, user: toPublicUser(user) });
  } catch (error) {
    if (req.file) fs.promises.unlink(req.file.path).catch(() => {});
    next(error);
  }
});

// ── Profile ─────────────────────────────────────────────────────────
router.get('/profile', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const user = await refreshDailyStateById(req.userId!);
    if (!user) return res.status(404).json({ success: false, message: 'User not found', code: 'NOT_FOUND' });

    const [achievements, badges, lessonsCompleted, testStats] = await Promise.all([
      prisma.achievement.findMany({ where: { userId: user.id }, orderBy: { timestamp: 'desc' }, take: 20 }),
      prisma.userBadge.findMany({ where: { userId: user.id }, include: { badge: true } }),
      prisma.lessonProgress.count({ where: { userId: user.id, status: 'completed' } }),
      prisma.generatedTest.aggregate({
        where: { userId: user.id, status: 'completed' },
        _count: true,
        _avg: { score: true },
      }),
    ]);

    res.json({
      ...toPublicUser(user),
      lessonsCompleted,
      achievements,
      badges,
      stats: {
        testsCompleted: testStats._count,
        averageTestScore: testStats._avg.score === null ? null : Math.round(testStats._avg.score),
      },
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/profile', authenticate, validate(updateProfileSchema), async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const previous = req.body.avatar !== undefined
      ? await prisma.user.findUnique({ where: { id: req.userId }, select: { avatar: true } })
      : null;

    const user = await prisma.user.update({ where: { id: req.userId }, data: req.body });

    if (previous && previous.avatar !== user.avatar) removeUploadedAvatar(previous.avatar);
    res.json(toPublicUser(user));
  } catch (error) {
    next(error);
  }
});

router.patch('/password', authenticate, validate(changePasswordSchema), async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await prisma.user.findUnique({ where: { id: req.userId } });
    if (!user) return res.status(404).json({ success: false, message: 'User not found', code: 'NOT_FOUND' });

    if (!(await bcrypt.compare(currentPassword, user.password))) {
      return res.status(400).json({ success: false, message: 'Current password is incorrect', code: 'WRONG_PASSWORD' });
    }

    // Logs out every other device; this one gets a fresh token so it stays signed in
    const updated = await revokeSessions(user.id, { password: await bcrypt.hash(newPassword, 10) });
    res.json({ success: true, message: 'Password updated', token: signToken(updated, req.user?.rememberMe ?? true) });
  } catch (error) {
    next(error);
  }
});

// ── Progress ────────────────────────────────────────────────────────
router.get('/progress', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    res.json(await prisma.courseProgress.findMany({ where: { userId: req.userId } }));
  } catch (error) {
    next(error);
  }
});

router.get('/progress/lessons', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    res.json(await prisma.lessonProgress.findMany({ where: { userId: req.userId } }));
  } catch (error) {
    next(error);
  }
});

// ── Today ───────────────────────────────────────────────────────────
/** Words due for review (sidebar badge and notifications poll this) */
router.get('/review', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    res.json(await reviewCounts(req.userId!));
  } catch (error) {
    next(error);
  }
});

/**
 * Everything the Today screen needs in one call: the next lesson, words due for
 * review, the daily game and which days of the past week had any practice.
 */
router.get('/today', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId!;
    const user = await refreshDailyStateById(userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found', code: 'NOT_FOUND' });

    const now = new Date();
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const weekStart = new Date(today);
    weekStart.setDate(weekStart.getDate() - 6);

    const [courses, locked, lessonRows, courseRows, review, scores] = await Promise.all([
      prisma.course.findMany({
        orderBy: { order: 'asc' },
        select: {
          id: true, title: true, level: true,
          lessons: { orderBy: { order: 'asc' }, select: { id: true, title: true, description: true, duration: true } },
        },
      }),
      getLockedCourseIds(userId, user.role === 'admin'),
      prisma.lessonProgress.findMany({ where: { userId }, select: { lessonId: true, status: true, lastPlayed: true } }),
      prisma.courseProgress.findMany({ where: { userId }, orderBy: { lastAccessed: 'desc' }, select: { courseId: true } }),
      reviewCounts(userId),
      prisma.gameScore.findMany({ where: { userId, createdAt: { gte: weekStart } }, select: { gameId: true, isDaily: true, createdAt: true } }),
    ]);

    // Next lesson: the first unfinished one in the unit touched last, else in the first open unit
    const completed = new Set(lessonRows.filter(p => p.status === 'completed').map(p => p.lessonId));
    const openLesson = (course: (typeof courses)[number]) => course.lessons.find(l => !completed.has(l.id));
    const isCandidate = (course?: (typeof courses)[number]) => !!course && !locked.has(course.id) && !!openLesson(course);
    const course =
      courseRows.map(p => courses.find(c => c.id === p.courseId)).find(isCandidate) ?? courses.find(c => isCandidate(c));
    const lesson = course && openLesson(course);

    const scoresToday = scores.filter(s => s.createdAt >= today);
    // One round a day counts as done, so a big backlog does not block the rest of the plan
    const reviewedToday = scoresToday.some(s => s.gameId === 'review');

    // Practice days this week: game rounds, lessons, and the days covered by the current streak
    const active = new Set<string>();
    scores.forEach(s => active.add(dayKey(s.createdAt)));
    lessonRows.filter(p => p.lastPlayed >= weekStart).forEach(p => active.add(dayKey(p.lastPlayed)));
    if (user.currentStreak > 0 && user.lastStreakDate) {
      for (let i = 0; i < Math.min(user.currentStreak, 7); i++) {
        const d = new Date(user.lastStreakDate);
        d.setDate(d.getDate() - i);
        active.add(dayKey(d));
      }
    }
    const week = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const date = dayKey(d);
      return { date, active: active.has(date) };
    });

    const daysSincePractice = user.lastStreakDate ? daysBetween(user.lastStreakDate, now) : null;

    res.json({
      user: toPublicUser(user),
      practisedToday: daysSincePractice === 0,
      streakAtRisk: user.currentStreak > 0 && daysSincePractice === 1,
      nextLesson:
        course && lesson
          ? {
              id: lesson.id,
              title: lesson.title,
              description: lesson.description,
              duration: lesson.duration,
              courseId: course.id,
              courseTitle: course.title,
              level: course.level,
              number: course.lessons.indexOf(lesson) + 1,
              total: course.lessons.length,
            }
          : null,
      lessonsToday: lessonRows.filter(p => p.status === 'completed' && p.lastPlayed >= today).length,
      review: { ...review, reviewedToday },
      daily: { gameId: dailyGame(), done: scoresToday.some(s => s.isDaily), bonus: DAILY_BONUS_XP },
      wortlePlayed: scoresToday.some(s => s.gameId === 'wortle'),
      week,
    });
  } catch (error) {
    next(error);
  }
});

const XP_PER_LESSON = 10;
const XP_PER_CORRECT_ANSWER = 5;

router.post('/progress/lesson', authenticate, validate(lessonProgressSchema), async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId!;
    const { lessonId, courseId } = req.body;

    const lesson = await prisma.lesson.findUnique({ where: { id: lessonId } });
    if (!lesson || lesson.courseId !== courseId) {
      return res.status(404).json({ success: false, message: 'Lesson not found', code: 'NOT_FOUND' });
    }

    // The score is the number of correct answers; it can't exceed the number of scored items
    const score = Math.min(req.body.score, countScoredItems(lesson.content));

    const existing = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });
    const isFirstCompletion = existing?.status !== 'completed';
    const previousBest = existing?.score ?? 0;

    // Full XP the first time; replays only earn XP for beating the previous best
    const xpEarned = isFirstCompletion
      ? XP_PER_LESSON + score * XP_PER_CORRECT_ANSWER
      : Math.max(0, score - previousBest) * XP_PER_CORRECT_ANSWER;

    await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: { status: 'completed', score: Math.max(previousBest, score), lastPlayed: new Date() },
      create: { userId, lessonId, status: 'completed', score },
    });

    if (isFirstCompletion) {
      await prisma.user.update({ where: { id: userId }, data: { lessonsCompleted: { increment: 1 } } });
    }

    const [totalLessons, completedLessons] = await Promise.all([
      prisma.lesson.count({ where: { courseId } }),
      prisma.lessonProgress.count({ where: { userId, status: 'completed', lesson: { courseId } } }),
    ]);
    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    const previousCourseProgress = await prisma.courseProgress.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
    await prisma.courseProgress.upsert({
      where: { userId_courseId: { userId, courseId } },
      update: { completedLessons, progress: progressPercent, lastAccessed: new Date(), totalPoints: { increment: xpEarned } },
      create: { userId, courseId, completedLessons, progress: progressPercent, totalPoints: xpEarned },
    });

    if (progressPercent === 100 && (previousCourseProgress?.progress ?? 0) < 100) {
      const course = await prisma.course.findUnique({ where: { id: courseId }, select: { title: true } });
      await recordAchievement(userId, 'course-complete', `Completed ${course?.title ?? 'a course'}`, 'You finished every lesson in this course!', xpEarned);
    }

    const user = await awardXP(userId, xpEarned);
    const review = await addLessonWords(userId, lessonId, lesson.content, req.body.missed);

    res.json({
      success: true,
      xpEarned,
      isFirstCompletion,
      bestScore: Math.max(previousBest, score),
      wordsAdded: review.added,
      wordsMissed: review.missed,
      user: user ? toPublicUser(user) : undefined,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
