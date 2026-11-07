import { useEffect, useState } from 'react'
import { useUIStore } from '@/store/ui-store'

export function useTheme() {
  const { theme, setTheme } = useUIStore()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
      setIsDark(systemTheme === 'dark')
    } else {
      root.classList.add(theme)
      setIsDark(theme === 'dark')
    }
  }, [theme])

  return {
    theme,
    setTheme,
    isDark,
  }
}
