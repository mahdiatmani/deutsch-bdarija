'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { interpolate } from '@/lib/utils'
import { useReviewStatus } from '@/hooks/use-review-status'

interface Notice {
  id: string
  icon: string
  iconClass: string
  message: string
  action?: { href: string; label: string }
}

/** Reminders derived from the user's daily progress (respects the "daily reminders" setting). */
export function NotificationsMenu() {
  const user = useAuthStore((s) => s.user)
  const t = useLanguageStore((s) => s.t)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const reviewDue = useReviewStatus().data?.due ?? 0

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  if (!user) return null

  const notices: Notice[] = []
  if (user.preferences?.dailyReminders !== false) {
    const remaining = Math.max(0, (user.dailyGoal || 50) - (user.dailyXP || 0))
    if (user.currentStreak > 0 && (user.dailyXP || 0) === 0) {
      notices.push({
        id: 'streak',
        icon: 'local_fire_department',
        iconClass: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30',
        message: interpolate(t.notifications.streakAtRisk, { streak: user.currentStreak }),
        action: { href: '/today', label: t.notifications.startLearning },
      })
    }
    if (reviewDue > 0) {
      notices.push({
        id: 'review',
        icon: 'psychology',
        iconClass: 'bg-saffron/15 text-saffron-dark dark:text-saffron',
        message: interpolate(t.notifications.reviewDue, { count: reviewDue }),
        action: { href: `/games/review?level=${user.cefrLevel ?? 'A1'}`, label: t.notifications.startReview },
      })
    }
    notices.push(
      remaining > 0
        ? {
            id: 'goal',
            icon: 'track_changes',
            iconClass: 'bg-primary/10 text-primary',
            message: interpolate(t.notifications.goalRemaining, { remaining }),
            action: { href: '/today', label: t.notifications.startLearning },
          }
        : {
            id: 'goal',
            icon: 'celebration',
            iconClass: 'bg-green-100 text-green-600 dark:bg-green-900/30',
            message: t.notifications.goalReached,
          }
    )
  }
  const hasPending = notices.some((n) => n.action)

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center size-10 rounded-xl border border-transparent text-gray-600 hover:border-gray-200 hover:bg-surface-light dark:text-gray-300 dark:hover:border-gray-800 dark:hover:bg-surface-dark relative transition-colors"
        aria-label={t.notifications.title}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="material-symbols-outlined">notifications</span>
        {hasPending && <span className="absolute top-2 right-2 size-2 rounded-full bg-clay ring-2 ring-background-light dark:ring-background-dark" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] z-50 paper shadow-lift overflow-hidden"
            role="menu"
          >
            <p className="px-4 py-3 font-display text-base font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800">
              {t.notifications.title}
            </p>
            {notices.length === 0 ? (
              <p className="px-4 py-6 text-sm text-center text-gray-500">{t.notifications.empty}</p>
            ) : (
              <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                {notices.map((n) => (
                  <li key={n.id} className="flex gap-3 px-4 py-3">
                    <span className={`size-9 shrink-0 rounded-full flex items-center justify-center ${n.iconClass}`}>
                      <span className="material-symbols-outlined text-lg">{n.icon}</span>
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-700 dark:text-gray-200">{n.message}</p>
                      {n.action && (
                        <Link
                          href={n.action.href}
                          onClick={() => setOpen(false)}
                          className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                        >
                          {n.action.label}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
