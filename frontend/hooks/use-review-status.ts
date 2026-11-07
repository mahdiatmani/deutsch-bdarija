'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchReviewStatus } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'

/**
 * Words due for spaced review, for the sidebar badge and notifications.
 * Under ['user', ...] so finishing a lesson or a game round refreshes it.
 */
export function useReviewStatus() {
  const token = useAuthStore((s) => s.token)
  return useQuery({
    queryKey: ['user', 'review'],
    queryFn: () => fetchReviewStatus(token!),
    enabled: !!token,
    staleTime: 60_000,
    // Words fall due over time, so check again now and then
    refetchInterval: 5 * 60_000,
    refetchOnWindowFocus: true,
  })
}
