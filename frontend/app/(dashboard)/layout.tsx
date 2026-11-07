'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Sidebar } from '@/components/layout/Sidebar'
import { useAuthStore } from '@/store/auth-store'
import { useUIStore } from '@/store/ui-store'
import { useLanguageStore } from '@/store/language-store'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { NotificationsMenu } from '@/components/layout/NotificationsMenu'
import Link from 'next/link'
import { updateProfile } from '@/lib/api'
import { interpolate } from '@/lib/utils'
import { GoalRing } from '@/components/shared/goal-ring'

// Text labels: flag emoji don't render on Windows
const LANGUAGE_LABELS = { en: 'EN', fr: 'FR', darija: 'DA' } as const

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)
  const isLoading = useAuthStore(s => s.isLoading)
  const user = useAuthStore(s => s.user)
  const token = useAuthStore(s => s.token)
  const updateUser = useAuthStore(s => s.updateUser)
  const checkAuth = useAuthStore(s => s.checkAuth)
  const toggleSidebar = useUIStore(s => s.toggleSidebar)
  const isSidebarOpen = useUIStore(s => s.isSidebarOpen)
  const language = useLanguageStore(s => s.language)
  const setLanguage = useLanguageStore(s => s.setLanguage)
  const t = useLanguageStore(s => s.t)

  // During hydration zustand renders the server snapshot (logged out), so wait
  // for the first client render before trusting isAuthenticated. Without this,
  // a page refresh redirects to /login, which middleware then bounces to /courses.
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])

  useEffect(() => {
    if (hasMounted && !isLoading && !isAuthenticated) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`)
    }
  }, [hasMounted, isAuthenticated, isLoading, router, pathname])

  // Refresh the persisted user (XP, streak, daily goal reset) and validate the token
  useEffect(() => {
    checkAuth()
    const onFocus = () => checkAuth()
    window.addEventListener('focus', onFocus)
    return () => window.removeEventListener('focus', onFocus)
  }, [checkAuth])

  // Sync language store with user preference on mount
  useEffect(() => {
    if (user?.appLanguage && user.appLanguage !== language) {
      setLanguage(user.appLanguage)
    }
  }, [user?.appLanguage])

  const toggleLanguage = async () => {
    let nextLang: 'en' | 'fr' | 'darija'
    if (language === 'en') nextLang = 'fr'
    else if (language === 'fr') nextLang = 'darija'
    else nextLang = 'en'

    setLanguage(nextLang)

    if (token) {
      try {
        const updated = await updateProfile({ appLanguage: nextLang }, token)
        updateUser(updated)
      } catch (error) {
        console.error('Failed to sync language preference:', error)
      }
    }
  }

  if (!hasMounted || isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const firstName = user?.firstName || user?.username || ''
  const hour = new Date().getHours()
  const greeting = interpolate(
    hour < 12 ? t.greetings.morning : hour < 18 ? t.greetings.afternoon : t.greetings.evening,
    { name: firstName }
  )
  const today = new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : 'fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date())

  // overflow-clip (not hidden): an overflow-hidden box can still be
  // scrolled sideways by focus/scrollIntoView
  return (
    <div className="flex h-[100dvh] relative overflow-clip">
      <Sidebar />

      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative z-10">
        {/* Top bar */}
        <header className="h-[72px] shrink-0 border-b border-gray-200/80 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md flex items-center justify-between gap-3 px-4 lg:px-8">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={toggleSidebar}
              aria-label={t.greetings.openMenu}
              className="lg:hidden flex items-center justify-center size-10 rounded-xl text-gray-600 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="min-w-0">
              <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] text-gray-500">{today}</p>
              <p className="font-display text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-50 truncate">
                {greeting}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {user && (
              <Link
                href="/today"
                className="hidden md:flex items-center gap-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark py-1 pl-1 pr-4 hover:border-primary/40 transition-colors"
              >
                <GoalRing value={user.dailyXP || 0} max={user.dailyGoal || 50} size={32} stroke={3.5}>
                  <span className="material-symbols-outlined icon-fill text-[14px] text-saffron">bolt</span>
                </GoalRing>
                <span className="text-sm text-gray-600 dark:text-gray-300 tabular-nums">
                  <span className="font-semibold text-gray-900 dark:text-gray-50">{user.dailyXP || 0}</span>
                  {' / '}{user.dailyGoal || 50} XP
                </span>
              </Link>
            )}

            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center h-10 min-w-10 px-2.5 rounded-xl border border-transparent text-xs font-bold tracking-wider text-gray-600 hover:border-gray-200 hover:bg-surface-light dark:text-gray-300 dark:hover:border-gray-800 dark:hover:bg-surface-dark transition-colors"
              title={t.greetings.switchLanguage}
              aria-label={t.greetings.switchLanguage}
            >
              {LANGUAGE_LABELS[language]}
            </button>

            <ThemeToggle />
            <NotificationsMenu />
          </div>
        </header>

        {/* Main content */}
        <main key={pathname} className="flex-1 overflow-y-auto px-4 py-6 lg:px-8 lg:py-8 animate-page-enter">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-96">
                <div className="w-8 h-8 border-[3px] border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
      </div>
    </div>
  )
}
