'use client'

import { useTheme } from '@/hooks/use-theme'

export function ThemeToggle() {
  const { theme, setTheme, isDark } = useTheme()

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-gray-600 hover:border-gray-200 hover:bg-surface-light dark:text-gray-300 dark:hover:border-gray-800 dark:hover:bg-surface-dark transition-colors"
      aria-label="Toggle theme"
    >
      <span className="material-symbols-outlined">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
