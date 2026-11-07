'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguageStore } from '@/store/language-store'
import { requestPasswordReset } from '@/lib/api'
import { getErrorMessage } from '@/lib/utils'

export default function ForgotPasswordPage() {
  const t = useLanguageStore((s) => s.t)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    try {
      await requestPasswordReset(email.trim())
      setSent(true)
    } catch (err) {
      setError(getErrorMessage(t.auth.errors, err))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-md"
    >
      <div className="paper p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">{sent ? 'mark_email_read' : 'lock_reset'}</span>
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{t.auth.forgotTitle}</h1>
          {!sent && <p className="text-gray-500 dark:text-gray-400">{t.auth.forgotSubtitle}</p>}
        </div>

        {sent ? (
          <div role="status" className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <p className="text-sm text-green-700 dark:text-green-400">{t.auth.resetLinkSent}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div role="alert" className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.auth.emailAddress}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.auth.emailPlaceholder}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full h-12 btn-stamp"
            >
              {isSubmitting && <div className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin" />}
              {isSubmitting ? t.auth.sendingResetLink : t.auth.sendResetLink}
            </button>
          </form>
        )}

        <p className="mt-8 text-center text-sm">
          <Link href="/login" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            {t.auth.backToSignIn}
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
