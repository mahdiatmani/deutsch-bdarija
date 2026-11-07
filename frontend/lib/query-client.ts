import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
})

export const queryKeys = {
  courses: ['courses'] as const,
  course: (id: string) => ['courses', id] as const,
  lessons: (courseId: string) => ['courses', courseId, 'lessons'] as const,
  lesson: (id: string) => ['lessons', id] as const,
  userProgress: ['user', 'progress'] as const,
  courseProgress: (courseId: string) => ['user', 'progress', courseId] as const,
  leaderboard: (period: string) => ['leaderboard', period] as const,
  profile: ['user', 'profile'] as const,
  badges: ['badges'] as const,
  userBadges: ['user', 'badges'] as const,
  chatHistory: (conversationId?: string) =>
    ['chat', conversationId || 'default'] as const,
}
