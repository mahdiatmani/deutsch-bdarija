'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useLanguageStore } from '@/store/language-store'
import { resetPassword } from '@/lib/api'
import { cn, getErrorMessage } from '@/lib/utils'
import { PasswordInput, PasswordCriteria, isPasswordValid } from '@/components/shared/password-input'

function ResetPasswordForm() {
  const t = useLanguageStore((s) => s.t)
  const token = useSearchParams().get('token')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const passwordsMatch = password === confirm && confirm.length > 0
  const canSubmit = !!token && isPasswordValid(password) && passwordsMatch && !isSubmitting

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit || !token) return
    setError(null)
    setIsSubmitting(true)
    try {
      await resetPassword(token, password)
      setDone(true)
    } catch (err) {
      setError(getErrorMessage(t.auth.errors, err))
    } finally {
      setIsSubmitting(false)
    }
  }

  const body = !token ? (
    <div className="text-center space-y-4">
      <p className="text-sm text-red-600 dark:text-red-400">{t.auth.missingResetToken}</p>
      <Link href="/forgot-password" className="inline-block text-primary font-semibold hover:underline">
        {t.auth.requestNewLink}
      </Link>
    </div>
  ) : done ? (
    <div className="space-y-6">
      <div role="status" className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
        <p className="text-sm text-green-700 dark:text-green-400">{t.auth.resetSuccess}</p>
      </div>
      <Link
        href="/login"
        className="w-full h-12 btn-stamp"
      >
        {t.auth.signIn}
      </Link>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div role="alert" className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          {error === t.auth.errors.INVALID_RESET_TOKEN && (
            <Link href="/forgot-password" className="mt-2 inline-block text-sm text-primary font-semibold hover:underline">
              {t.auth.requestNewLink}
            </Link>
          )}
        </div>
      )}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t.auth.newPassword}
        </label>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t.auth.createPasswordPlaceholder}
        />
        <PasswordCriteria password={password} />
      </div>
      <div>
        <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {t.auth.confirmPassword}
        </label>
        <PasswordInput
          id="confirm"
          autoComplete="new-password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder={t.auth.reenterPasswordPlaceholder}
        />
        {confirm.length > 0 && (
          <p className={cn('mt-1 text-xs', passwordsMatch ? 'text-green-600 dark:text-green-400' : 'text-red-500')}>
            {passwordsMatch ? t.auth.passwordsMatch : t.auth.passwordsDontMatch}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full h-12 btn-stamp"
      >
        {isSubmitting && <div className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin" />}
        {isSubmitting ? t.auth.resettingPassword : t.auth.resetPasswordBtn}
      </button>
    </form>
  )

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
            <span className="material-symbols-outlined text-3xl">{done ? 'task_alt' : 'password'}</span>
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{t.auth.resetTitle}</h1>
          {!done && token && <p className="text-gray-500 dark:text-gray-400">{t.auth.resetSubtitle}</p>}
        </div>
        {body}
      </div>
    </motion.div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  )
}
