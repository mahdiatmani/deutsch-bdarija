import type { LoginData, SignupData, User, UserProfile } from '@/types'
import type { GameBank, GameId, GameLevel, GameStats, RoundResult, ScoreResponse } from '@/types/games'

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'

// ==================== Core request helper ====================

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public data?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// The auth store registers a handler so an expired/invalid token logs the user out
let onUnauthorized: (() => void) | null = null
export function setUnauthorizedHandler(handler: () => void) {
  onUnauthorized = handler
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  body?: unknown
  token?: string | null
  timeoutMs?: number
}

async function request<T = any>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, token, timeoutMs = 30_000 } = options
  const isForm = typeof FormData !== 'undefined' && body instanceof FormData

  const headers: Record<string, string> = {}
  if (body !== undefined && !isForm) headers['Content-Type'] = 'application/json'
  if (token) headers['Authorization'] = `Bearer ${token}`

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  let res: Response
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : isForm ? (body as FormData) : JSON.stringify(body),
      signal: controller.signal,
    })
  } catch (error) {
    if ((error as Error)?.name === 'AbortError') {
      throw new ApiError(0, 'TIMEOUT', 'Request timed out. Please try again.')
    }
    throw new ApiError(0, 'NETWORK_ERROR', 'Cannot reach the server. Check your connection and try again.')
  } finally {
    clearTimeout(timeoutId)
  }

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    if (res.status === 401 && token) onUnauthorized?.()
    throw new ApiError(
      res.status,
      data?.code || 'HTTP_ERROR',
      data?.message || `Request failed (${res.status})`,
      data
    )
  }
  return data as T
}

// ==================== Auth ====================

export interface AuthResponse {
  user: User
  token: string
}

export const login = (data: LoginData & { rememberMe?: boolean }) =>
  request<AuthResponse>('/auth/login', { method: 'POST', body: data })

export const signup = (data: SignupData) =>
  request<AuthResponse>('/auth/signup', { method: 'POST', body: data })

export const fetchCurrentUser = (token: string) =>
  request<{ user: User }>('/auth/me', { token })

export const requestPasswordReset = (email: string) =>
  request<{ success: boolean; message: string }>('/auth/forgot-password', { method: 'POST', body: { email } })

export const resetPassword = (token: string, password: string) =>
  request<{ success: boolean; message: string }>('/auth/reset-password', { method: 'POST', body: { token, password } })

// ==================== User ====================

export const fetchUserProfile = (token: string) =>
  request<UserProfile>('/user/profile', { token })

export interface ProfileUpdate {
  firstName?: string
  lastName?: string
  avatar?: string
  dailyGoal?: number
  appLanguage?: 'en' | 'fr' | 'darija'
  emailNotifications?: boolean
  dailyReminders?: boolean
}

export const updateProfile = (data: ProfileUpdate, token: string) =>
  request<User>('/user/profile', { method: 'PATCH', body: data, token })

export const changePassword = (currentPassword: string, newPassword: string, token: string) =>
  request<{ success: boolean; token: string }>('/user/password', { method: 'PATCH', body: { currentPassword, newPassword }, token })

export const uploadAvatar = (formData: FormData, token: string) =>
  request<{ avatar: string; user: User }>('/user/avatar', { method: 'POST', body: formData, token, timeoutMs: 60_000 })

export const fetchUserProgress = (token: string) =>
  request('/user/progress', { token })

export const fetchUserLessonProgress = (token: string) =>
  request('/user/progress/lessons', { token })

export const updateLessonProgress = (
  data: { lessonId: string; courseId: string; score: number; missed?: number[] },
  token: string
) =>
  request<{
    success: boolean
    xpEarned: number
    isFirstCompletion: boolean
    bestScore: number
    /** Lesson words new in the review queue */
    wordsAdded: number
    /** Words sent back to review because of a wrong answer */
    wordsMissed: number
    user?: User
  }>(
    '/user/progress/lesson',
    { method: 'POST', body: data, token }
  )

/** The Today screen: next lesson, review queue, daily game and the past week */
export interface TodayPlan {
  user: User
  practisedToday: boolean
  streakAtRisk: boolean
  nextLesson: {
    id: string
    title: string
    description: string
    duration: number
    courseId: string
    courseTitle: string
    level: string
    number: number
    total: number
  } | null
  lessonsToday: number
  /** Spaced review, plus whether a review round was played today */
  review: ReviewStatus & { reviewedToday: boolean }
  daily: { gameId: GameId; done: boolean; bonus: number }
  wortlePlayed: boolean
  /** The last 7 days, oldest first, as YYYY-MM-DD in server time */
  week: { date: string; active: boolean }[]
}

export const fetchToday = (token: string) => request<TodayPlan>('/user/today', { token })

/** Spaced review: words due now, words coming back tomorrow, all words, and words per stage */
export interface ReviewStatus {
  due: number
  tomorrow: number
  total: number
  stages: { new: number; learning: number; known: number; mastered: number }
}

export const fetchReviewStatus = (token: string) => request<ReviewStatus>('/user/review', { token })

// ==================== Courses & lessons ====================

// With a token, units come back locked/unlocked for that learner
export const fetchCourses = (token?: string | null) => request('/courses', { token })

export const fetchCourseById = (id: string, token?: string | null) => request(`/courses/${id}`, { token })

/** Herr Schmidt corrects a free writing task (503 when the AI is unavailable) */
export const requestWritingFeedback = (
  data: { task: string; points: string[]; model?: string; level?: string; text: string },
  token: string
) => request<{ feedback: string }>('/lessons/writing-feedback', { method: 'POST', body: data, token, timeoutMs: 120_000 })

// Pass the token so locking reflects the user's progress
export const fetchLessons = (courseId: string, token?: string | null) =>
  request(`/courses/${courseId}/lessons`, { token })

export const fetchLessonById = (id: string, token: string) =>
  request(`/lessons/${id}`, { token })

export const createCourse = (data: any, token: string) =>
  request('/courses', { method: 'POST', body: data, token })

export const generateExercises = (subject: string, token: string) =>
  request('/courses/generate-exercises', { method: 'POST', body: { subject }, token, timeoutMs: 300_000 })

// ==================== Games, leaderboard, community ====================

export const fetchGameBank = (level: GameLevel, token: string) =>
  request<GameBank>(`/games/bank?level=${level}`, { token })

export const fetchGameStats = (token: string) => request<GameStats>('/games/stats', { token })

export const saveGameScore = (gameId: GameId, result: Omit<RoundResult, 'mistakes'>, token: string) =>
  request<ScoreResponse>(`/games/${gameId}/score`, { method: 'POST', body: result, token })

// The backend only ranks all-time points for now
export const fetchLeaderboard = (_period: 'all' | 'weekly' = 'all') => request('/leaderboard')

export const fetchChatRooms = (token: string) => request('/chat/rooms', { token })

export const fetchRoomMessages = (roomId: string, token: string) =>
  request(`/chat/rooms/${roomId}/messages`, { token })

// ==================== AI Teacher ====================

export interface AIConversation {
  id: string
  title: string | null
  messageCount: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface AIMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  germanText: string | null
  createdAt: string
  feedback?: { rating: number } | null
}

export interface AIChatResponse {
  id: string
  conversationId: string
  role: 'assistant'
  content: string
  germanText: string | null
  timestamp: string
  usage: {
    messagesUsedToday: number
    messagesRemaining: number
  }
}

export interface AIChatSettings {
  autoSpeak: boolean
  speechRate: number
  dailyMessageLimit: number
  messagesUsedToday: number
  messagesRemaining: number
}

export interface APIError {
  message: string
  code: string
  details?: any
  retryAfter?: number
}

export const fetchAIConversations = (token: string) =>
  request<{ data: AIConversation[]; total: number; page: number; limit: number }>('/ai/conversations?limit=50', { token })

export const fetchAIMessages = (conversationId: string, token: string) =>
  request<AIMessage[]>(`/ai/conversations/${conversationId}/messages`, { token })

export const fetchAIChatSettings = (token: string) =>
  request<AIChatSettings>('/ai/settings', { token })

export const updateAIChatSettings = (
  settings: Partial<Pick<AIChatSettings, 'autoSpeak' | 'speechRate'>>,
  token: string
) => request<AIChatSettings>('/ai/settings', { method: 'PATCH', body: settings, token })

export async function sendAIChatMessage(
  message: string,
  token: string,
  conversationId?: string
): Promise<AIChatResponse> {
  try {
    // LLM inference can be slow, especially on a cold model
    return await request<AIChatResponse>('/ai/chat', {
      method: 'POST',
      body: { message, conversationId },
      token,
      timeoutMs: 300_000,
    })
  } catch (error) {
    if (error instanceof ApiError && error.status === 429) {
      if (error.code === 'RATE_LIMIT_EXCEEDED') {
        throw new ApiError(429, error.code, `Too many messages. Please wait ${error.data?.retryAfter || 60} seconds.`, error.data)
      }
      if (error.code === 'DAILY_LIMIT_EXCEEDED') {
        throw new ApiError(429, error.code, 'Daily message limit reached. Try again tomorrow!', error.data)
      }
    }
    throw error
  }
}

export const submitAIMessageFeedback = (
  messageId: string,
  rating: number,
  feedback: string | undefined,
  token: string
) => request('/ai/feedback', { method: 'POST', body: { messageId, rating, feedback }, token })

export const deleteAIConversation = (conversationId: string, token: string) =>
  request(`/ai/conversations/${conversationId}`, { method: 'DELETE', token })

export const renameAIConversation = (conversationId: string, title: string, token: string) =>
  request<AIConversation>(`/ai/conversations/${conversationId}`, { method: 'PATCH', body: { title }, token })

export const clearAllAIConversations = (token: string) =>
  request('/ai/conversations', { method: 'DELETE', token })

// Legacy function - kept for backward compatibility
export const sendChatMessage = (message: string, token: string) => sendAIChatMessage(message, token)

// ==================== Generated Tests ====================

export const generateTest = (subject: string, token: string) =>
  request('/tests/generate', { method: 'POST', body: { subject }, token, timeoutMs: 300_000 })

export const fetchTest = (testId: string, token: string) =>
  request(`/tests/${testId}`, { token })

export const submitTest = (testId: string, answers: Record<string, string>, token: string) =>
  request<{ score: number; earnedPoints: number; totalPoints: number; xpEarned: number; exercises: any[]; user?: User }>(
    `/tests/${testId}/submit`,
    { method: 'POST', body: { answers }, token }
  )

export const fetchTestHistory = (token: string, page: number = 1, limit: number = 20) =>
  request(`/tests/history?page=${page}&limit=${limit}`, { token })

// ==================== Lesson audio ====================

/** Pre-generated neural audio (MP3) of a lesson text; 404 when no clip exists for it */
export async function fetchLessonAudio(text: string, rate: number, voice: string, token: string): Promise<Blob> {
  let res: Response
  try {
    res = await fetch(`${API_URL}/tts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ text, rate, voice }),
      signal: AbortSignal.timeout(15_000),
    })
  } catch {
    throw new ApiError(0, 'NETWORK_ERROR', 'Audio request failed')
  }
  if (!res.ok) {
    const data = await res.json().catch(() => null)
    throw new ApiError(res.status, data?.code || 'AUDIO_NOT_FOUND', data?.message || 'No audio for this text')
  }
  return res.blob()
}
