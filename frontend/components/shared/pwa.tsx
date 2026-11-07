'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { API_URL } from '@/lib/api'
import { useLanguageStore } from '@/store/language-store'

/**
 * Registers the service worker (public/sw.js) in production builds. In development
 * it removes any worker left over from a production run, so hot reload is never stale.
 */
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return
    if (process.env.NODE_ENV !== 'production') {
      navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((reg) => reg.unregister()))
      return
    }
    const register = () =>
      navigator.serviceWorker.register(`/sw.js?api=${encodeURIComponent(API_URL)}`, { scope: '/' }).catch(() => {
        // The app works without it, just not offline
      })
    if (document.readyState === 'complete') register()
    else window.addEventListener('load', register, { once: true })
  }, [])
  return null
}

/** Forget the signed-in learner's saved pages and data (the worker's caches) */
export function clearOfflineData() {
  if (typeof window === 'undefined') return
  navigator.serviceWorker?.controller?.postMessage({ type: 'logout' })
  // Also directly, in case no worker controls this page yet
  window.caches
    ?.keys()
    .then((keys) => keys.filter((k) => k.startsWith('pages-') || k.startsWith('data-')).forEach((k) => caches.delete(k)))
    .catch(() => {})
}

/** A slim banner while the device is offline, and a short "back online" when it returns */
export function OfflineBanner() {
  const t = useLanguageStore((s) => s.t)
  const [status, setStatus] = useState<'online' | 'offline' | 'back'>('online')

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    const onOffline = () => {
      clearTimeout(timer)
      setStatus('offline')
    }
    const onOnline = () => {
      setStatus('back')
      timer = setTimeout(() => setStatus('online'), 2500)
    }
    if (!navigator.onLine) onOffline()
    window.addEventListener('offline', onOffline)
    window.addEventListener('online', onOnline)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('offline', onOffline)
      window.removeEventListener('online', onOnline)
    }
  }, [])

  return (
    <AnimatePresence>
      {status !== 'online' && (
        <motion.div
          role="status"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="fixed inset-x-0 bottom-4 z-[60] mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-white shadow-lift"
        >
          <span className={`material-symbols-outlined text-lg ${status === 'offline' ? 'text-saffron' : 'text-primary'}`}>
            {status === 'offline' ? 'cloud_off' : 'cloud_done'}
          </span>
          {status === 'offline' ? t.pwa.offline : t.pwa.backOnline}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
