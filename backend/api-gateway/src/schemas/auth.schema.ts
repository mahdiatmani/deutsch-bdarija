import { z } from 'zod';

const email = z.string().trim().toLowerCase().email().max(254);

export const passwordSchema = z.string()
  .min(6, 'Password must be at least 6 characters')
  .max(100)
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const loginSchema = z.object({
  email,
  password: z.string().min(1).max(100),
  rememberMe: z.boolean().optional(),
});

export const signupSchema = z.object({
  firstName: z.string().trim().min(2).max(50),
  lastName: z.string().trim().min(2).max(50),
  email,
  password: passwordSchema,
  gender: z.enum(['male', 'female']),
  appLanguage: z.enum(['en', 'fr', 'darija']).optional(),
});

export const forgotPasswordSchema = z.object({
  email,
});

export const resetPasswordSchema = z.object({
  token: z.string().min(32).max(128),
  password: passwordSchema,
});
