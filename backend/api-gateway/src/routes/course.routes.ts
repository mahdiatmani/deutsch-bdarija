import { Router, Response } from 'express';
import { z } from 'zod';
import prisma from '../lib/prisma';
import { generateAIExercises } from '../lib/ai';
import { courseSchema, lessonProgressSchema } from '../schemas/course.schema';
import { validate } from '../middleware/validate';
import { authenticate, authorizeAdmin, optionalAuthenticate, AuthRequest } from '../middleware/auth';
import { aiGenerationLimiter, rateLimit } from '../middleware/rate-limit';
import { getCefrLevel } from '../lib/progression';
import { getLockedCourseIds, parseObjectives } from '../lib/course-access';
import { countScoredItems } from '../lib/lesson-content';
import { openRouterChat, LLMError } from '../lib/llm';

const router = Router();

router.post('/generate-exercises', authenticate, aiGenerationLimiter, async (req: AuthRequest, res: Response) => {
  try {
    const { subject } = req.body;
    const userId = req.userId!;

    if (!subject) {
      return res.status(400).json({ success: false, message: 'Subject is required' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    const level = getCefrLevel(user?.totalPoints || 0);

    const exercisesData = await generateAIExercises(subject, level);

    res.json({ level, exercises: exercisesData.exercises });

  } catch (error: any) {
    console.error('Generate exercises error:', error);
    res.status(500).json({ success: false, message: error.message || 'Error generating exercises' });
  }
});

router.get('/', optionalAuthenticate, async (req: AuthRequest, res: Response) => {
  try {
    const [courses, locked] = await Promise.all([
      prisma.course.findMany({
        orderBy: { order: 'asc' },
        include: { lessons: { select: { id: true } } },
      }),
      getLockedCourseIds(req.userId, req.user?.role === 'admin'),
    ]);
    res.json(
      courses.map(c => ({
        ...c,
        objectives: parseObjectives(c.objectives),
        totalLessons: c.lessons.length || c.totalLessons,
        isLocked: locked.has(c.id),
      }))
    );
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching courses' });
  }
});

router.post('/', authenticate, authorizeAdmin, validate(courseSchema), async (req: AuthRequest, res: Response) => {
  try {
    const data = req.body;
    if (!data.id) {
      return res.status(400).json({ success: false, message: 'Course ID is required' });
    }
    const course = await prisma.course.create({
      data: {
        id: data.id,
        title: data.title,
        description: data.description,
        level: data.level,
        totalLessons: data.totalLessons,
        estimatedHours: data.estimatedHours,
        icon: data.icon,
        color: data.color,
        isPublished: data.isPublished,
        isLocked: data.isLocked,
        order: data.order,
      },
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating course' });
  }
});

router.get('/:id', optionalAuthenticate, async (req: AuthRequest, res: Response) => {
  try {
    const course = await prisma.course.findUnique({
      where: { id: req.params.id },
      include: {
        lessons: { orderBy: { order: 'asc' }, select: { id: true, title: true, description: true, order: true, duration: true, type: true } },
      },
    });
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

    const locked = await getLockedCourseIds(req.userId, req.user?.role === 'admin');
    res.json({ ...course, objectives: parseObjectives(course.objectives), isLocked: locked.has(course.id) });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching course' });
  }
});

/** Lesson list for the course page: no content, just what the trail needs */
router.get('/:courseId/lessons', optionalAuthenticate, async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;
    const isAdmin = req.user?.role === 'admin';
    const [lessons, locked] = await Promise.all([
      prisma.lesson.findMany({
        where: { courseId: req.params.courseId },
        orderBy: { order: 'asc' },
      }),
      getLockedCourseIds(userId, isAdmin),
    ]);
    const courseLocked = locked.has(req.params.courseId);

    const lessonProgressMap: Record<string, string> = {};
    if (userId) {
      const progress = await prisma.lessonProgress.findMany({
        where: { userId, lessonId: { in: lessons.map(l => l.id) } },
      });
      progress.forEach(p => (lessonProgressMap[p.lessonId] = p.status));
    }

    const listed = lessons.map(({ content, ...l }, index) => {
      // A lesson unlocks once the previous one is completed (and the unit itself is open)
      let isLocked = courseLocked;
      if (!isLocked && index > 0 && !isAdmin) {
        const prevStatus = lessonProgressMap[lessons[index - 1].id];
        if (!userId || prevStatus !== 'completed') isLocked = true;
      }
      return { ...l, kind: lessonKind(content), scoredItems: countScoredItems(content), isLocked };
    });

    res.json(listed);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching lessons' });
  }
});

const lessonKind = (raw: string): string | null => {
  try {
    return JSON.parse(raw)?.kind ?? null;
  } catch {
    return null;
  }
};

// Single lesson by ID - mounted at /api/lessons/:id via separate mount
export const lessonRouter = Router();

const writingFeedbackSchema = z.object({
  task: z.string().trim().min(1).max(1500),
  points: z.array(z.string().max(300)).max(10).default([]),
  model: z.string().max(3000).optional(),
  level: z.enum(['A1', 'A2', 'B1', 'B2']).optional(),
  text: z.string().trim().min(1, 'Write something first').max(3000),
});

const writingFeedbackLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 30,
  keyGenerator: req => (req as AuthRequest).userId || req.ip || 'unknown',
  message: 'Too many feedback requests. Please try again later.',
});

/**
 * Herr Schmidt corrects a learner's free writing task. Free models can be
 * unavailable: the client then falls back to the model answer and checklist.
 */
lessonRouter.post(
  '/writing-feedback',
  authenticate,
  writingFeedbackLimiter,
  validate(writingFeedbackSchema),
  async (req: AuthRequest, res: Response) => {
    const { task, points, model, level, text } = req.body as z.infer<typeof writingFeedbackSchema>;
    const system = [
      'You are "Herr Schmidt", a kind German teacher for Moroccans. Explain in Moroccan Darija written in Latin letters',
      "(3=ع, 7=ح, 9=ق, kh=خ, gh=غ, ch=ش). Never use Arabic script. Keep German examples in German.",
      `The learner's level is ${level ?? 'A1'}: judge with that level's expectations and keep explanations simple.`,
      'Answer in Markdown with exactly these sections:',
      '**Chno mzyan** (1-2 bullet points of what is good),',
      '**Les fautes** (a bullet per real mistake: the wrong part → the correct German, with a very short reason in Darija; max 6),',
      '**N-nass msa77e7** (the full corrected German text),',
      '**Nasi7a** (one short tip for next time).',
      'If the text does not answer the task, say so kindly in "Les fautes".',
    ].join(' ');
    const user = [
      `Task (Darija): ${task}`,
      points.length ? `Content points the text should cover: ${points.join(' | ')}` : '',
      model ? `Example answer (for your reference only): ${model}` : '',
      `Learner's text:\n${text}`,
    ]
      .filter(Boolean)
      .join('\n\n');

    try {
      const reply = await openRouterChat(
        [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        { maxTokens: 900, temperature: 0.3, timeoutMs: 90_000 }
      );
      res.json({ feedback: reply.text });
    } catch (error) {
      const code = error instanceof LLMError ? error.code : 'UNAVAILABLE';
      res.status(503).json({ success: false, message: 'Feedback is not available right now', code: `AI_${code}` });
    }
  }
);

lessonRouter.get('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const lesson = await prisma.lesson.findUnique({ where: { id: req.params.id } });
    if (!lesson) return res.status(404).json({ success: false, message: 'Lesson not found', code: 'NOT_FOUND' });

    if (req.user?.role !== 'admin') {
      const locked = await getLockedCourseIds(req.userId, false);
      if (locked.has(lesson.courseId)) {
        return res.status(403).json({ success: false, message: 'Finish the previous unit first', code: 'LESSON_LOCKED' });
      }

      // Same rule as the lesson list: a lesson unlocks once the previous one is completed
      const previous = await prisma.lesson.findFirst({
        where: { courseId: lesson.courseId, order: { lt: lesson.order } },
        orderBy: { order: 'desc' },
        select: { id: true },
      });
      if (previous) {
        const previousProgress = await prisma.lessonProgress.findUnique({
          where: { userId_lessonId: { userId: req.userId!, lessonId: previous.id } },
        });
        if (previousProgress?.status !== 'completed') {
          return res.status(403).json({ success: false, message: 'Complete the previous lesson first', code: 'LESSON_LOCKED' });
        }
      }
    }

    res.json({ ...lesson, content: JSON.parse(lesson.content) });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching lesson' });
  }
});

export default router;
