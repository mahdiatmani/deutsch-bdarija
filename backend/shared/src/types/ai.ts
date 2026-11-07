import { z } from 'zod'

export const ChatMessageSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
  timestamp: z.date(),
  metadata: z
    .object({
      lessonId: z.string().uuid().optional(),
      courseId: z.string().uuid().optional(),
      germanText: z.string().optional(),
      darijaTranslation: z.string().optional(),
    })
    .optional(),
})

export const ChatRequestSchema = z.object({
  message: z.string().min(1),
  userId: z.string().uuid(),
  conversationId: z.string().uuid().optional(),
  context: z
    .object({
      lessonId: z.string().uuid().optional(),
      courseId: z.string().uuid().optional(),
      userLevel: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).optional(),
    })
    .optional(),
})

export const SpeechAnalysisSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  audioUrl: z.string().url(),
  transcription: z.string(),
  targetText: z.string(),
  accuracy: z.number().min(0).max(100),
  pronunciationScore: z.number().min(0).max(100),
  feedback: z.string(),
  detectedLanguage: z.string(),
  createdAt: z.date(),
})

export const RecommendationSchema = z.object({
  lessonId: z.string().uuid(),
  courseId: z.string().uuid(),
  reason: z.string(),
  priority: z.number().min(0).max(1),
  difficulty: z.enum(['easy', 'medium', 'hard']),
})

export type ChatMessage = z.infer<typeof ChatMessageSchema>
export type ChatRequest = z.infer<typeof ChatRequestSchema>
export type SpeechAnalysis = z.infer<typeof SpeechAnalysisSchema>
export type Recommendation = z.infer<typeof RecommendationSchema>
