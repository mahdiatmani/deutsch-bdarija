// Re-export shared types from backend
// In development, these will be copied or linked
// For now, we'll define them directly to avoid build issues

export type CourseLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export interface User {
  id: string
  email: string
  username: string
  firstName?: string | null
  lastName?: string | null
  gender?: 'male' | 'female' | null
  avatar?: string | null
  role?: string
  appLanguage?: 'en' | 'fr' | 'darija'
  totalPoints: number
  dailyGoal: number
  dailyXP: number
  currentLevel: number
  /** XP earned inside the current level, and XP needed to reach the next one */
  levelProgress?: { current: number; required: number }
  cefrLevel?: 'A1' | 'A2' | 'B1' | 'B2'
  currentStreak: number
  longestStreak?: number
  lessonsCompleted?: number
  createdAt?: string
  preferences?: {
    emailNotifications: boolean
    dailyReminders: boolean
  }
}

export interface UserProfile extends User {
  longestStreak: number
  lessonsCompleted: number
  achievements: Achievement[]
  badges: { id: string; badgeId: string; earnedAt: string; badge: Badge }[]
  stats: {
    testsCompleted: number
    averageTestScore: number | null
  }
}

export interface Course {
  id: string
  title: string
  description: string
  level: CourseLevel
  totalLessons: number
  estimatedHours: number
  icon: string
  color: string
  isPublished: boolean
  isLocked: boolean
  order: number
  /** Can-do statements of a unit */
  objectives?: string[]
  createdAt: Date
  updatedAt: Date
}

export type ExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'matching'
  | 'listening'
  | 'speaking'
  | 'translation'

export interface Exercise {
  id: string
  type: ExerciseType
  question: string
  germanText?: string
  darijaTranslation?: string
  options?: string[]
  correctAnswer: string | string[]
  explanation?: string
  points: number
  audioUrl?: string
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
  duration: number
  icon: string
  color: string
  order: number
  isLocked: boolean
  content?: Record<string, any>
  exercises: Exercise[]
  /** From the lesson list: lesson type and how many items count toward the score */
  kind?: 'input' | 'grammar' | 'skills' | 'review' | 'exam' | null
  scoredItems?: number
  createdAt: Date
  updatedAt: Date
}

export interface LessonWithProgress extends Lesson {
  progress: number
  completed: boolean
  score?: number
}

export interface LessonProgress {
  id: string
  userId: string
  lessonId: string
  status: 'not_started' | 'in_progress' | 'completed'
  score: number
  lastPlayed: Date
}

export interface UserProgress {
  id: string
  userId: string
  lessonId: string
  courseId: string
  progress: number
  completed: boolean
  score?: number
  timeSpentMinutes: number
  attempts: number
  lastAccessed: Date
  completedAt?: Date
}

export interface CourseProgress {
  courseId: string
  totalLessons: number
  completedLessons: number
  progress: number
  totalPoints: number
  lastAccessed?: Date
}

export type BadgeCategory =
  | 'streak'
  | 'points'
  | 'lessons'
  | 'perfect'
  | 'special'

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  color: string
  requirement: string
  requiredValue: number
  category: BadgeCategory
}

export interface UserBadge {
  badgeId: string
  userId: string
  isUnlocked: boolean
  unlockedAt?: Date
  progress: number
}

export type AchievementType =
  | 'lesson-complete'
  | 'streak'
  | 'perfect-score'
  | 'level-up'
  | 'badge-unlock'
  | 'course-complete'

export interface Achievement {
  id: string
  userId: string
  type: AchievementType
  title: string
  description: string
  points: number
  /** Type-specific number: level reached, streak length, ... */
  value?: number | null
  timestamp: string
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  username: string
  avatar?: string
  points: number
  level: number
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  metadata?: {
    lessonId?: string
    courseId?: string
    germanText?: string
    darijaTranslation?: string
  }
}

export interface SignupData {
  email: string
  password: string
  firstName: string
  lastName: string
  gender: 'male' | 'female'
  appLanguage?: string
}

export interface LoginData {
  email: string
  password: string
}

export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  metadata?: {
    page?: number
    limit?: number
    total?: number
    hasMore?: boolean
  }
}

// ==================== Generated Tests ====================

export type TestExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'translation'
  | 'matching'
  | 'listening'
  | 'reading'
  | 'true-false'
  | 'short-answer'
  | 'sentence-correction'
  | 'writing'
  | 'speaking'

export type TestSection = 'reading' | 'listening' | 'grammar' | 'writing' | 'speaking'

export interface TestExercise {
  id: number
  type: TestExerciseType
  section?: TestSection
  question: string
  options?: string[]
  correctAnswer?: string
  explanation?: string
  modelAnswer?: string
  userAnswer?: string
  isCorrect?: boolean
  points: number
  matchPairs?: { german: string; darija: string }[]
  passage?: string
}

export interface GeneratedTest {
  id: string
  subject: string
  level: string
  exercises: TestExercise[]
  score: number | null
  totalPoints: number
  status: 'in_progress' | 'completed'
  createdAt: string
  completedAt: string | null
}

export interface TestHistory {
  id: string
  subject: string
  level: string
  score: number | null
  totalPoints: number
  status: string
  createdAt: string
  completedAt: string | null
}
