'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { PasswordInput } from '@/components/shared/password-input'

/** Only allow same-site relative redirects (blocks "//evil.com" and absolute URLs). */
function safeRedirect(target: string | null) {
  return target && target.startsWith('/') && !target.startsWith('//') ? target : '/today'
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, isLoading, error, errorCode, clearError } = useAuthStore()
  const { t } = useLanguageStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  // Don't show an error left over from another auth page
  useEffect(() => { clearError() }, [clearError])

  const errorMessage = error
    ? (errorCode && (t.auth.errors as Record<string, string>)[errorCode]) || error
    : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()
    const ok = await login({ email: email.trim(), password }, rememberMe)
    if (ok) router.replace(safeRedirect(searchParams.get('redirect')))
  }

  const onFieldChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value)
    if (error) clearError()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-md"
    >
      <div className="paper p-8 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            {t.auth.welcomeBack}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {t.auth.signInContinue}
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3"
          >
            <span className="material-symbols-outlined text-red-500 text-xl">error</span>
            <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t.auth.emailAddress}
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={onFieldChange(setEmail)}
              required
              aria-invalid={errorCode === 'INVALID_CREDENTIALS'}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder={t.auth.emailPlaceholder}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.auth.password}
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                {t.auth.forgotPassword}
              </Link>
            </div>
            <PasswordInput
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onFieldChange(setPassword)}
              required
              aria-invalid={errorCode === 'INVALID_CREDENTIALS'}
              placeholder={t.auth.passwordPlaceholder}
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer w-fit">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {t.auth.rememberMe}
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading || !email || !password}
            className="w-full h-12 btn-stamp"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin"></div>
                {t.auth.signingIn}
              </>
            ) : (
              t.auth.signIn
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {t.auth.noAccount}{' '}
          <Link href="/signup" className="text-primary font-semibold hover:underline">
            {t.auth.signUpFree}
          </Link>
        </p>
      </div>
    </motion.div>
  )
}

export default function LoginPage() {
  // useSearchParams needs a Suspense boundary for static rendering
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
