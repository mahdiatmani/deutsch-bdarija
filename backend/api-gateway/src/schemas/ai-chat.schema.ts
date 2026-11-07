import { z } from 'zod';

export const chatMessageSchema = z.object({
  message: z.string()
    .min(1, 'Message cannot be empty')
    .max(2000, 'Message too long (max 2000 characters)')
    .transform(val => val.trim()),
  conversationId: z.string().uuid().optional(),
});

export const chatFeedbackSchema = z.object({
  messageId: z.string().uuid(),
  rating: z.number().min(1).max(5),
  feedback: z.string().max(500).optional(),
});

export const conversationUpdateSchema = z.object({
  title: z.string()
    .transform(val => val.trim())
    .pipe(z.string().min(1, 'Title cannot be empty').max(100, 'Title too long (max 100 characters)')),
}).strict();

export const chatSettingsSchema = z.object({
  autoSpeak: z.boolean().optional(),
  speechRate: z.number().min(0.5).max(2).optional(),
}).strict(); // dailyMessageLimit is server-controlled, never user-editable
