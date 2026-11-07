'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthStore } from '@/store/auth-store'
import { useUIStore } from '@/store/ui-store'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { LogoMark } from '@/components/shared/logo'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import { updateProfile } from '@/lib/api'

// Text labels: flag emoji don't render on Windows
const FLAGS = { en: 'EN', fr: 'FR', darija: 'DA' } as const

export function Header() {
  const pathname = usePathname()
  const isAuthenticated = useAuthStore(s => s.isAuthenticated)
  const user = useAuthStore(s => s.user)
  const token = useAuthStore(s => s.token)
  const updateUser = useAuthStore(s => s.updateUser)
  const isMobileMenuOpen = useUIStore(s => s.isMobileMenuOpen)
  const toggleMobileMenu = useUIStore(s => s.toggleMobileMenu)
  const closeMobileMenu = useUIStore(s => s.closeMobileMenu)
  const t = useLanguageStore(s => s.t)
  const language = useLanguageStore(s => s.language)
  const setLanguage = useLanguageStore(s => s.setLanguage)

  // A persisted session may be stale (expired token, deleted account): validate it
  useEffect(() => {
    if (useAuthStore.getState().token) useAuthStore.getState().checkAuth()
  }, [])

  // Sync language store with user preference on mount/user change
  useEffect(() => {
    if (user?.appLanguage && user.appLanguage !== language) {
      setLanguage(user.appLanguage)
    }
  }, [user?.appLanguage])

  const navigation = [
    { name: t.nav.home, href: '/', icon: 'home' },
    { name: t.nav.lessons, href: '/courses', icon: 'school' },
    { name: t.nav.tests, href: '/tests', icon: 'quiz' },
    { name: t.nav.games, href: '/games', icon: 'sports_esports' },
    { name: t.nav.aiTeacher, href: '/ai-teacher', icon: 'smart_toy' },
  ]

  const toggleLanguage = async () => {
    let nextLang: 'en' | 'fr' | 'darija'
    if (language === 'en') nextLang = 'fr'
    else if (language === 'fr') nextLang = 'darija'
    else nextLang = 'en'

    setLanguage(nextLang)

    // Sync with backend if logged in
    if (isAuthenticated && token) {
      try {
        const updated = await updateProfile({ appLanguage: nextLang }, token)
        updateUser(updated)
      } catch (error) {
        console.error('Failed to sync language preference:', error)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2.5" aria-label={t.common.appName}>
            <LogoMark />
            <span className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">
              {t.common.appName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-gray-200 dark:border-gray-800 bg-surface-light/70 dark:bg-surface-dark/70 p-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors flex items-center gap-1.5 rounded-full px-3.5 py-2',
                  pathname === item.href
                    ? 'bg-ink text-white dark:bg-white dark:text-ink'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                )}
              >
                {item.icon.includes('/') || item.icon.includes('http') ? (
                  <img src={item.icon} alt="" className="size-5 object-cover rounded-sm" />
                ) : (
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="hidden sm:flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-xs font-bold tracking-wider text-gray-600 dark:text-gray-300 transition-colors"
              title="Switch Language"
            >
              {FLAGS[language]}
            </button>

            <ThemeToggle />

            {isAuthenticated && user ? (
              <>
                <Link
                  href="/profile"
                  className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark pr-3.5 pl-1 py-1 hover:border-primary/40 transition-colors"
                >
                  <div className="size-8 rounded-full bg-gray-400 overflow-hidden">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary text-white text-sm font-bold">
                        {user.username[0].toUpperCase()}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.username}
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden sm:flex h-10 px-5 items-center justify-center rounded-full text-gray-700 dark:text-gray-200 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/signup"
                  className="btn-stamp h-10 !px-5 !py-0 text-sm"
                >
                  {t.nav.signup}
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              aria-label={t.greetings.openMenu}
              className="md:hidden flex items-center justify-center size-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    'px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-3',
                    pathname === item.href
                      ? 'bg-ink text-white dark:bg-white dark:text-ink'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  {item.icon.includes('/') || item.icon.includes('http') ? (
                    <img src={item.icon} alt="" className="size-6 object-cover rounded-md" />
                  ) : (
                    <span className="material-symbols-outlined">{item.icon}</span>
                  )}
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={() => {
                  toggleLanguage()
                  // closeMobileMenu()
                }}
                 className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3"
              >
                 <span className="flex size-6 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-[10px] font-bold tracking-wider">{FLAGS[language]}</span>
                 {t.greetings.switchLanguage}
              </button>

              {isAuthenticated && user && (
                <Link
                  href="/profile"
                  onClick={closeMobileMenu}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">person</span>
                  {t.nav.profile}
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}