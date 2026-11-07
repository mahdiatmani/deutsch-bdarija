import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  username: z.string().min(3).max(30),
  avatar: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  lastLogin: z.date().optional(),
  preferences: z
    .object({
      theme: z.enum(['light', 'dark', 'system']).default('system'),
      language: z.enum(['en', 'fr', 'ar']).default('en'),
      notifications: z.boolean().default(true),
    })
    .optional(),
})

export const UserProfileSchema = UserSchema.extend({
  totalPoints: z.number().int().min(0).default(0),
  currentLevel: z.number().int().min(1).default(1),
  currentStreak: z.number().int().min(0).default(0),
  longestStreak: z.number().int().min(0).default(0),
  lessonsCompleted: z.number().int().min(0).default(0),
  timeSpentMinutes: z.number().int().min(0).default(0),
})

export const SignupDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  username: z.string().min(3).max(30),
})

export const LoginDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type User = z.infer<typeof UserSchema>
export type UserProfile = z.infer<typeof UserProfileSchema>
export type SignupData = z.infer<typeof SignupDataSchema>
export type LoginData = z.infer<typeof LoginDataSchema>
