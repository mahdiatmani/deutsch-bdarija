import { z } from 'zod';

export const gameScoreSchema = z.object({
  score: z.number().int().min(0).max(1_000_000),
  correct: z.number().int().min(0).max(1000),
  total: z.number().int().min(0).max(1000),
  bestCombo: z.number().int().min(0).max(1000).default(0),
  /** Every word the learner answered, for the spaced repetition */
  answers: z
    .array(z.object({ word: z.string().min(1).max(200), correct: z.boolean() }))
    .max(300)
    .default([]),
}).refine(d => d.correct <= d.total, { message: 'correct cannot exceed total', path: ['correct'] });
