import { z } from 'zod';
import { passwordSchema } from './auth.schema';

export const updateProfileSchema = z.object({
  firstName: z.string().trim().min(2).max(50).optional(),
  lastName: z.string().trim().min(2).max(50).optional(),
  avatar: z.string().url().max(500).refine(url => /^https?:\/\//i.test(url), 'Avatar must be an http(s) URL').optional(),
  dailyGoal: z.number().int().min(10).max(500).optional(),
  appLanguage: z.enum(['en', 'fr', 'darija']).optional(),
  emailNotifications: z.boolean().optional(),
  dailyReminders: z.boolean().optional(),
}).strict();

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1).max(100),
  newPassword: passwordSchema,
}).refine(d => d.currentPassword !== d.newPassword, {
  message: 'New password must be different from the current one',
  path: ['newPassword'],
});
