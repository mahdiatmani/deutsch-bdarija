import { z } from 'zod'

export const CourseLevelSchema = z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])

export const CourseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  level: CourseLevelSchema,
  totalLessons: z.number().int().min(0),
  estimatedHours: z.number().min(0),
  icon: z.string(),
  color: z.string(),
  isPublished: z.boolean().default(false),
  isLocked: z.boolean().default(false),
  order: z.number().int().min(0),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const ExerciseTypeSchema = z.enum([
  'multiple-choice',
  'fill-blank',
  'matching',
  'listening',
  'speaking',
  'translation',
])

export const ExerciseSchema = z.object({
  id: z.string().uuid(),
  type: ExerciseTypeSchema,
  question: z.string(),
  germanText: z.string().optional(),
  darijaTranslation: z.string().optional(),
  options: z.array(z.string()).optional(),
  correctAnswer: z.union([z.string(), z.array(z.string())]),
  explanation: z.string().optional(),
  points: z.number().int().min(0).default(10),
  audioUrl: z.string().url().optional(),
})

export const LessonSchema = z.object({
  id: z.string().uuid(),
  courseId: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  duration: z.number().int().min(0),
  icon: z.string(),
  color: z.string(),
  order: z.number().int().min(0),
  isLocked: z.boolean().default(false),
  content: z.record(z.any()).optional(),
  exercises: z.array(ExerciseSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const LessonWithProgressSchema = LessonSchema.extend({
  progress: z.number().min(0).max(100).default(0),
  completed: z.boolean().default(false),
  score: z.number().min(0).max(100).optional(),
})

export type CourseLevel = z.infer<typeof CourseLevelSchema>
export type Course = z.infer<typeof CourseSchema>
export type ExerciseType = z.infer<typeof ExerciseTypeSchema>
export type Exercise = z.infer<typeof ExerciseSchema>
export type Lesson = z.infer<typeof LessonSchema>
export type LessonWithProgress = z.infer<typeof LessonWithProgressSchema>
