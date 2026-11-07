import { z } from 'zod';

export const courseSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3),
  description: z.string().min(10),
  level: z.string(),
  totalLessons: z.number().default(0),
  estimatedHours: z.number().default(0),
  icon: z.string(),
  color: z.string(),
  isPublished: z.boolean().default(false),
  isLocked: z.boolean().default(false),
  order: z.number().default(0),
});

export const lessonProgressSchema = z.object({
  lessonId: z.string().min(1),
  courseId: z.string().min(1),
  score: z.number().min(0).max(100).default(0),
  /** Indexes of the exercise steps answered wrong at least once (their words go back to review) */
  missed: z.array(z.number().int().min(0).max(1000)).max(200).default([]),
});
