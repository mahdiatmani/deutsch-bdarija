'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/lib/query-client'
import { useEffect } from 'react'
import { useUIStore } from '@/store/ui-store'
import { ToastProvider } from '@/components/shared/toast'
import { useLanguageStore } from '@/store/language-store'
import { OfflineBanner, ServiceWorkerRegistration } from '@/components/shared/pwa'

function ThemeInitializer() {
  const theme = useUIStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  return null
}

function LanguageInitializer() {
  const { detectLanguage } = useLanguageStore()
  
  useEffect(() => {
    // Check if we already have a language saved in local storage to avoid overriding user preference
    const hasStored = typeof window !== 'undefined' && localStorage.getItem('language-storage')
    if (!hasStored) {
      detectLanguage()
    }
  }, [detectLanguage])

  return null
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageInitializer />
      <ToastProvider>
        <ThemeInitializer />
        {children}
        <OfflineBanner />
      </ToastProvider>
      <ServiceWorkerRegistration />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}