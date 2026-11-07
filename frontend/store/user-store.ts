import { create } from 'zustand'
import type { UserProfile, CourseProgress, Badge, UserBadge } from '@/types'

interface UserState {
  profile: UserProfile | null
  courseProgress: CourseProgress[]
  badges: UserBadge[]
  availableBadges: Badge[]

  // Actions
  setProfile: (profile: UserProfile) => void
  updateProgress: (courseId: string, progress: Partial<CourseProgress>) => void
  addPoints: (points: number) => void
  incrementStreak: () => void
  resetStreak: () => void
  unlockBadge: (badgeId: string) => void
  completeLesson: (courseId: string) => void
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  courseProgress: [],
  badges: [],
  availableBadges: [],

  setProfile: (profile) => set({ profile }),

  updateProgress: (courseId, progress) =>
    set((state) => ({
      courseProgress: state.courseProgress.map((cp) =>
        cp.courseId === courseId ? { ...cp, ...progress } : cp
      ),
    })),

  addPoints: (points) =>
    set((state) => {
      if (!state.profile) return state

      const newPoints = state.profile.totalPoints + points
      const newLevel = Math.floor(Math.sqrt(newPoints / 100)) + 1

      return {
        profile: {
          ...state.profile,
          totalPoints: newPoints,
          currentLevel: newLevel,
        },
      }
    }),

  incrementStreak: () =>
    set((state) => {
      if (!state.profile) return state

      const newStreak = state.profile.currentStreak + 1

      return {
        profile: {
          ...state.profile,
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, state.profile.longestStreak),
        },
      }
    }),

  resetStreak: () =>
    set((state) => {
      if (!state.profile) return state

      return {
        profile: {
          ...state.profile,
          currentStreak: 0,
        },
      }
    }),

  unlockBadge: (badgeId) =>
    set((state) => ({
      badges: state.badges.map((badge) =>
        badge.badgeId === badgeId
          ? { ...badge, isUnlocked: true, unlockedAt: new Date() }
          : badge
      ),
    })),

  completeLesson: (courseId) =>
    set((state) => {
      if (!state.profile) return state

      return {
        profile: {
          ...state.profile,
          lessonsCompleted: state.profile.lessonsCompleted + 1,
        },
        courseProgress: state.courseProgress.map((cp) =>
          cp.courseId === courseId
            ? {
                ...cp,
                completedLessons: cp.completedLessons + 1,
                progress: Math.round(
                  ((cp.completedLessons + 1) / cp.totalLessons) * 100
                ),
              }
            : cp
        ),
      }
    }),
}))
