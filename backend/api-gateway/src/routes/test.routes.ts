import { Router, Response } from 'express';
import prisma from '../lib/prisma';
import { generateAIExercises } from '../lib/ai';
import { authenticate, AuthRequest } from '../middleware/auth';
import { aiGenerationLimiter } from '../middleware/rate-limit';
import { awardXP, getCefrLevel, recordAchievement } from '../lib/progression';
import { toPublicUser } from '../lib/user';

const router = Router();

// Case-, whitespace- and trailing-punctuation-insensitive comparison
function normalizeAnswer(answer: string): string {
  return answer.toLowerCase().replace(/[.!?]+\s*$/, '').replace(/\s+/g, ' ').trim();
}

// Helper: strip answers from exercises for test-taking mode
function stripAnswers(exercises: any[]) {
  return exercises.map(({ correctAnswer, explanation, modelAnswer, ...rest }) => rest);
}

// POST /generate - Generate a new test
router.post('/generate', authenticate, aiGenerationLimiter, async (req: AuthRequest, res: Response) => {
  try {
    const { subject } = req.body;
    const userId = req.userId!;

    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return res.status(400).json({ success: false, message: 'Subject is required' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const level = getCefrLevel(user.totalPoints);
    const data = await generateAIExercises(subject.trim(), level, 14);
    const exercises = data.exercises || [];

    // Calculate total possible points
    const totalPoints = exercises.reduce((sum: number, ex: any) => sum + (ex.points || 10), 0);

    const test = await prisma.generatedTest.create({
      data: {
        userId,
        subject: subject.trim(),
        level,
        exercises: JSON.stringify(exercises),
        totalPoints,
        status: 'in_progress',
      },
    });

    res.status(201).json({
      testId: test.id,
      level,
      exercises: stripAnswers(exercises),
    });
  } catch (error: any) {
    console.error('Generate test error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error generating test' });
  }
});

// GET /history - Get user's test history
router.get('/history', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 20));
    const skip = (page - 1) * limit;

    const [tests, total] = await Promise.all([
      prisma.generatedTest.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          subject: true,
          level: true,
          score: true,
          totalPoints: true,
          status: true,
          createdAt: true,
          completedAt: true,
        },
      }),
      prisma.generatedTest.count({ where: { userId } }),
    ]);

    res.json({ tests, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching test history' });
  }
});

// GET /:id - Get a test by ID
router.get('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const test = await prisma.generatedTest.findUnique({
      where: { id: req.params.id },
    });

    if (!test) return res.status(404).json({ success: false, message: 'Test not found' });

    // Only the owner can view their test (shared link = same logged-in requirement)
    if (test.userId !== userId) {
      // Allow viewing completed tests for sharing
      if (test.status !== 'completed') {
        return res.status(403).json({ success: false, message: 'Access denied' });
      }
    }

    const exercises = JSON.parse(test.exercises);

    if (test.status === 'completed') {
      // Return everything including answers for review
      res.json({
        id: test.id,
        subject: test.subject,
        level: test.level,
        exercises,
        score: test.score,
        totalPoints: test.totalPoints,
        status: test.status,
        createdAt: test.createdAt,
        completedAt: test.completedAt,
      });
    } else {
      // Strip answers for test-taking mode
      res.json({
        id: test.id,
        subject: test.subject,
        level: test.level,
        exercises: stripAnswers(exercises),
        totalPoints: test.totalPoints,
        status: test.status,
        createdAt: test.createdAt,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching test' });
  }
});

// POST /:id/submit - Submit test answers
router.post('/:id/submit', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { answers } = req.body; // { [exerciseId]: userAnswer }

    if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
      return res.status(400).json({ success: false, message: 'Answers object is required' });
    }

    const test = await prisma.generatedTest.findUnique({
      where: { id: req.params.id },
    });

    if (!test) return res.status(404).json({ success: false, message: 'Test not found' });
    if (test.userId !== userId) return res.status(403).json({ success: false, message: 'Access denied' });
    if (test.status === 'completed') return res.status(400).json({ success: false, message: 'Test already submitted' });

    const exercises = JSON.parse(test.exercises);
    let earnedPoints = 0;

    // Grade each exercise and merge user answers
    const participationTypes = ['writing', 'speaking'];
    const gradedExercises = exercises.map((ex: any) => {
      const rawAnswer = answers[String(ex.id)];
      const userAnswer = typeof rawAnswer === 'string' ? rawAnswer.slice(0, 5000) : '';
      let isCorrect: boolean;

      if (participationTypes.includes(ex.type)) {
        // Writing/Speaking: any non-empty answer gets full points
        isCorrect = userAnswer.trim().length > 0;
      } else {
        // All other types: exact string match (case-insensitive)
        isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(String(ex.correctAnswer ?? ''));
      }

      if (isCorrect) earnedPoints += (ex.points || 10);

      return {
        ...ex,
        userAnswer,
        isCorrect,
      };
    });

    const scorePercent = test.totalPoints > 0
      ? Math.round((earnedPoints / test.totalPoints) * 100)
      : 0;

    // Only transition in_progress -> completed once, even if two submits race
    const { count } = await prisma.generatedTest.updateMany({
      where: { id: test.id, status: 'in_progress' },
      data: {
        exercises: JSON.stringify(gradedExercises),
        score: scorePercent,
        status: 'completed',
        completedAt: new Date(),
      },
    });
    if (count === 0) return res.status(400).json({ success: false, message: 'Test already submitted' });

    const xpEarned = Math.round(earnedPoints * 0.5);
    const user = await awardXP(userId, xpEarned);
    if (scorePercent === 100) {
      await recordAchievement(userId, 'perfect-score', `Perfect score: ${test.subject}`, `You aced a ${test.level} test about ${test.subject}!`, xpEarned);
    }

    res.json({
      score: scorePercent,
      earnedPoints,
      totalPoints: test.totalPoints,
      xpEarned,
      exercises: gradedExercises,
      user: user ? toPublicUser(user) : undefined,
    });
  } catch (error) {
    console.error('Submit test error:', error);
    res.status(500).json({ success: false, message: 'Error submitting test' });
  }
});

export default router;
