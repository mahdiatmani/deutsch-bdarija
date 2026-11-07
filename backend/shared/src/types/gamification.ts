import { z } from 'zod'

export const BadgeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  color: z.string(),
  requirement: z.string(),
  requiredValue: z.number().int().min(0),
  category: z.enum(['streak', 'points', 'lessons', 'perfect', 'special']),
})

export const UserBadgeSchema = z.object({
  badgeId: z.string().uuid(),
  userId: z.string().uuid(),
  isUnlocked: z.boolean().default(false),
  unlockedAt: z.date().optional(),
  progress: z.number().min(0).max(100).default(0),
})

export const AchievementTypeSchema = z.enum([
  'lesson-complete',
  'streak',
  'perfect-score',
  'level-up',
  'badge-unlock',
  'course-complete',
])

export const AchievementSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  type: AchievementTypeSchema,
  title: z.string(),
  description: z.string(),
  points: z.number().int().min(0),
  timestamp: z.date(),
  metadata: z.record(z.any()).optional(),
})

export const LeaderboardEntrySchema = z.object({
  rank: z.number().int().min(1),
  userId: z.string().uuid(),
  username: z.string(),
  avatar: z.string().url().optional(),
  points: z.number().int().min(0),
  level: z.number().int().min(1),
})

export const StreakSchema = z.object({
  userId: z.string().uuid(),
  currentStreak: z.number().int().min(0).default(0),
  longestStreak: z.number().int().min(0).default(0),
  lastActivityDate: z.date(),
  streakFreezes: z.number().int().min(0).default(0),
})

export type Badge = z.infer<typeof BadgeSchema>
export type UserBadge = z.infer<typeof UserBadgeSchema>
export type AchievementType = z.infer<typeof AchievementTypeSchema>
export type Achievement = z.infer<typeof AchievementSchema>
export type LeaderboardEntry = z.infer<typeof LeaderboardEntrySchema>
export type Streak = z.infer<typeof StreakSchema>
