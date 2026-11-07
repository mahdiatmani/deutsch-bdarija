'use client'

import { forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'

type PasswordInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput({ className, ...props }, ref) {
    const [visible, setVisible] = useState(false)
    const t = useLanguageStore((s) => s.t)

    return (
      <div className="relative">
        <input
          ref={ref}
          type={visible ? 'text' : 'password'}
          className={cn(
            'w-full h-12 pl-4 pr-12 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all',
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2 size-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={visible ? t.auth.hidePassword : t.auth.showPassword}
          title={visible ? t.auth.hidePassword : t.auth.showPassword}
        >
          <span className="material-symbols-outlined text-xl">
            {visible ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>
    )
  }
)

/** Mirrors the backend password rules (schemas/auth.schema.ts). */
export function getPasswordChecks(password: string) {
  return {
    minLength: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  }
}

export const isPasswordValid = (password: string) =>
  Object.values(getPasswordChecks(password)).every(Boolean)

export function PasswordCriteria({ password }: { password: string }) {
  const t = useLanguageStore((s) => s.t)
  const checks = getPasswordChecks(password)

  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
      {(Object.keys(checks) as (keyof typeof checks)[]).map((key) => (
        <li
          key={key}
          className={cn(
            'flex items-center gap-1.5 text-xs transition-colors',
            checks[key] ? 'text-green-600 dark:text-green-400' : 'text-gray-400'
          )}
        >
          <span className="material-symbols-outlined text-sm">
            {checks[key] ? 'check_circle' : 'radio_button_unchecked'}
          </span>
          {t.auth.criteria[key]}
        </li>
      ))}
    </ul>
  )
}
