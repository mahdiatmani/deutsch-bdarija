import { z } from 'zod'

export const UserProgressSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  lessonId: z.string().uuid(),
  courseId: z.string().uuid(),
  progress: z.number().min(0).max(100).default(0),
  completed: z.boolean().default(false),
  score: z.number().min(0).max(100).optional(),
  timeSpentMinutes: z.number().int().min(0).default(0),
  attempts: z.number().int().min(0).default(0),
  lastAccessed: z.date(),
  completedAt: z.date().optional(),
})

export const ExerciseResultSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  lessonId: z.string().uuid(),
  exerciseId: z.string().uuid(),
  isCorrect: z.boolean(),
  userAnswer: z.union([z.string(), z.array(z.string())]),
  pointsEarned: z.number().int().min(0),
  completedAt: z.date(),
})

export const CourseProgressSchema = z.object({
  courseId: z.string().uuid(),
  totalLessons: z.number().int().min(0),
  completedLessons: z.number().int().min(0),
  progress: z.number().min(0).max(100),
  totalPoints: z.number().int().min(0),
  lastAccessed: z.date().optional(),
})

export type UserProgress = z.infer<typeof UserProgressSchema>
export type ExerciseResult = z.infer<typeof ExerciseResultSchema>
export type CourseProgress = z.infer<typeof CourseProgressSchema>
