export const COURSE_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const

export const EXERCISE_TYPES = [
  'multiple-choice',
  'fill-blank',
  'matching',
  'listening',
  'speaking',
  'translation',
] as const

export const ACHIEVEMENT_TYPES = [
  'lesson-complete',
  'streak',
  'perfect-score',
  'level-up',
  'badge-unlock',
  'course-complete',
] as const

export const POINTS = {
  LESSON_COMPLETE: 50,
  PERFECT_SCORE: 100,
  DAILY_STREAK: 20,
  WEEKLY_STREAK: 150,
  COURSE_COMPLETE: 500,
  BADGE_UNLOCK: 75,
} as const

export const LEVELS = {
  POINTS_PER_LEVEL: 100,
  MAX_LEVEL: 100,
} as const

export const STREAKS = {
  FREEZE_LIMIT: 3,
  DAYS_FOR_WEEKLY: 7,
  DAYS_FOR_MONTHLY: 30,
} as const

export const FEATURES = {
  AI_TEACHER: process.env.ENABLE_AI_TEACHER === 'true',
  SPEECH_RECOGNITION: process.env.ENABLE_SPEECH === 'true',
  REALTIME_FEATURES: process.env.ENABLE_REALTIME === 'true',
  ADAPTIVE_LEARNING: process.env.ENABLE_ADAPTIVE === 'true',
} as const
