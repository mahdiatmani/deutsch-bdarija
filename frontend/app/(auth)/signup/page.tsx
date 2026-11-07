'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { cn } from '@/lib/utils'

export default function SignupPage() {
  const router = useRouter()
  const { signup, isLoading, error, errorCode, clearError } = useAuthStore()
  const { t, language } = useLanguageStore()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState<'male' | 'female' | ''>('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  // Don't show an error left over from another auth page
  useEffect(() => { clearError() }, [clearError])

  const passwordCriteria = [
    { label: t.auth.criteria.minLength, test: (p: string) => p.length >= 6 },
    { label: t.auth.criteria.uppercase, test: (p: string) => /[A-Z]/.test(p) },
    { label: t.auth.criteria.lowercase, test: (p: string) => /[a-z]/.test(p) },
    { label: t.auth.criteria.number, test: (p: string) => /[0-9]/.test(p) },
  ]

  const criteriaResults = useMemo(() =>
    passwordCriteria.map(c => ({ ...c, passed: c.test(password) })),
    [password]
  )

  const allCriteriaPassed = criteriaResults.every(c => c.passed)
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0
  const canSubmit = allCriteriaPassed && passwordsMatch && !!gender && !!firstName && !!lastName && !!email

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    clearError()
    const ok = await signup({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
      gender,
      appLanguage: language,
    })
    if (ok) router.replace('/today')
  }

  const errorMessage = error
    ? (errorCode && (t.auth.errors as Record<string, string>)[errorCode]) || error
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-md"
    >
      <div className="paper p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            {t.auth.createAccount}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {t.auth.startJourney}
          </p>
        </div>

        {errorMessage && (
          <div role="alert" className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.auth.firstName}
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t.auth.firstNamePlaceholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.auth.lastName}
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t.auth.lastNamePlaceholder}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.auth.emailAddress}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-12 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder={t.auth.emailPlaceholder}
            />
          </div>

          {/* Gender (moved above password) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.auth.gender}
            </label>
            <div className="flex gap-4">
              <label className={cn(
                "flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border cursor-pointer transition-all",
                gender === 'male'
                  ? "bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400"
              )}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                  className="hidden"
                />
                <span className="material-symbols-outlined text-xl">male</span>
                <span className="font-medium">{t.auth.male}</span>
              </label>
              <label className={cn(
                "flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border cursor-pointer transition-all",
                gender === 'female'
                  ? "bg-pink-50 dark:bg-pink-900/20 border-pink-500 text-pink-600 dark:text-pink-400"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-400"
              )}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                  className="hidden"
                />
                <span className="material-symbols-outlined text-xl">female</span>
                <span className="font-medium">{t.auth.female}</span>
              </label>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.auth.password}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 px-4 pr-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t.auth.createPasswordPlaceholder}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>

            {/* Password Criteria */}
            {password.length > 0 && (
              <div className="mt-2 space-y-1">
                {criteriaResults.map((c) => (
                  <div key={c.label} className="flex items-center gap-2 text-xs">
                    <span className={cn(
                      "material-symbols-outlined text-sm",
                      c.passed ? "text-green-500" : "text-gray-400"
                    )}>
                      {c.passed ? 'check_circle' : 'circle'}
                    </span>
                    <span className={c.passed ? "text-green-600 dark:text-green-400" : "text-gray-500"}>
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.auth.confirmPassword}
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={cn(
                  "w-full h-12 px-4 pr-12 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all",
                  confirmPassword.length > 0
                    ? passwordsMatch
                      ? "border-green-400 focus:ring-green-400"
                      : "border-red-400 focus:ring-red-400"
                    : "border-gray-300 dark:border-gray-700 focus:ring-primary"
                )}
                placeholder={t.auth.reenterPasswordPlaceholder}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">
                  {showConfirm ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            {confirmPassword.length > 0 && !passwordsMatch && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">error</span>
                {t.auth.passwordsDontMatch}
              </p>
            )}
            {passwordsMatch && (
              <p className="mt-1.5 text-xs text-green-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                {t.auth.passwordsMatch}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !canSubmit}
            className="w-full h-12 btn-stamp"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full animate-spin"></div>
            ) : (
              t.auth.createAccountBtn
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          {t.auth.alreadyHaveAccount}{' '}
          <Link href="/login" className="text-primary font-semibold hover:underline">
            {t.auth.signInLink}
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
