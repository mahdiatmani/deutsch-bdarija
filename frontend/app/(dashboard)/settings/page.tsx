'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { useTheme } from '@/hooks/use-theme'
import { useToast } from '@/components/shared/toast'
import { AvatarEditor } from '@/components/shared/avatar-editor'
import { PasswordInput, PasswordCriteria, isPasswordValid } from '@/components/shared/password-input'
import { changePassword, fetchAIChatSettings, updateAIChatSettings, updateProfile } from '@/lib/api'
import { cn, getErrorMessage } from '@/lib/utils'

type Language = 'en' | 'fr' | 'darija'

const GOAL_PRESETS = [
  { value: 20, key: 'goalCasual' },
  { value: 50, key: 'goalRegular' },
  { value: 100, key: 'goalSerious' },
  { value: 200, key: 'goalIntense' },
] as const

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="paper overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
        <h2 className="font-semibold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="p-4 space-y-4">{children}</div>
    </section>
  )
}

function Switch({ checked, onChange, label, description, disabled }: {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  description?: string
  disabled?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-medium text-gray-900 dark:text-white">{label}</p>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative w-12 h-7 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50',
          checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
        )}
      >
        <span
          className={cn(
            'absolute top-1 left-1 size-5 bg-white rounded-full shadow transition-transform',
            checked && 'translate-x-5'
          )}
        />
      </button>
    </div>
  )
}

const inputClass =
  'w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'

export default function SettingsPage() {
  const { user, token, logout, updateUser, setToken } = useAuthStore()
  const { t, setLanguage } = useLanguageStore()
  const { theme, setTheme } = useTheme()
  const { addToast } = useToast()
  const router = useRouter()
  const queryClient = useQueryClient()

  // ── Account & preferences (saved together) ──
  const initial = useMemo(() => ({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    dailyGoal: user?.dailyGoal || 50,
    appLanguage: (user?.appLanguage || 'darija') as Language,
    emailNotifications: user?.preferences?.emailNotifications ?? true,
    dailyReminders: user?.preferences?.dailyReminders ?? true,
  }), [user])
  const [form, setForm] = useState(initial)
  const [isSaving, setIsSaving] = useState(false)

  // Re-sync if the user changes elsewhere (e.g. language toggled in the header)
  useEffect(() => setForm(initial), [initial])

  const isDirty = (Object.keys(form) as (keyof typeof form)[]).some((k) => form[k] !== initial[k])
  const nameValid = form.firstName.trim().length >= 2 && form.lastName.trim().length >= 2
  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const handleSave = async () => {
    if (!token || !isDirty || !nameValid) return
    setIsSaving(true)
    try {
      const updated = await updateProfile({ ...form, firstName: form.firstName.trim(), lastName: form.lastName.trim() }, token)
      updateUser(updated)
      if (updated.appLanguage) setLanguage(updated.appLanguage)
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] })
      addToast({ type: 'success', message: t.settings.profileSaved })
    } catch (error) {
      addToast({ type: 'error', message: getErrorMessage(t.auth.errors, error) })
    } finally {
      setIsSaving(false)
    }
  }

  // ── AI teacher voice (saved immediately) ──
  const { data: aiSettings } = useQuery({
    queryKey: ['ai', 'settings'],
    queryFn: () => fetchAIChatSettings(token!),
    enabled: !!token,
  })
  const [speechRate, setSpeechRate] = useState<number | null>(null)

  const saveAISettings = async (patch: { autoSpeak?: boolean; speechRate?: number }) => {
    if (!token) return
    try {
      const updated = await updateAIChatSettings(patch, token)
      queryClient.setQueryData(['ai', 'settings'], updated)
    } catch (error) {
      addToast({ type: 'error', message: getErrorMessage(t.auth.errors, error) })
    }
  }

  // ── Password ──
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const passwordsMatch = newPassword === confirmPassword && confirmPassword.length > 0
  const canChangePassword = !!currentPassword && isPasswordValid(newPassword) && passwordsMatch && !isChangingPassword

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token || !canChangePassword) return
    setIsChangingPassword(true)
    try {
      // Other devices are logged out; this one continues with the new token
      const result = await changePassword(currentPassword, newPassword, token)
      if (result.token) setToken(result.token)
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      addToast({ type: 'success', message: t.settings.passwordChanged })
    } catch (error) {
      addToast({ type: 'error', message: getErrorMessage(t.auth.errors, error) })
    } finally {
      setIsChangingPassword(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="max-w-2xl mx-auto pb-24">
      <div className="mb-8">
        <p className="eyebrow mb-3">{t.nav.settings}</p>
        <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-gray-50 mb-3">{t.settings.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t.settings.subtitle}</p>
      </div>

      <div className="space-y-6">
        {/* Profile */}
        <Section title={t.settings.profileSection} icon="person">
          <AvatarEditor className="mb-2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.auth.firstName}
              </label>
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                maxLength={50}
                value={form.firstName}
                onChange={(e) => set('firstName', e.target.value)}
                className={cn(inputClass, form.firstName.trim().length < 2 && 'border-red-400 dark:border-red-500')}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.auth.lastName}
              </label>
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                maxLength={50}
                value={form.lastName}
                onChange={(e) => set('lastName', e.target.value)}
                className={cn(inputClass, form.lastName.trim().length < 2 && 'border-red-400 dark:border-red-500')}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t.settings.email}
            </label>
            <input id="email" type="email" value={user?.email || ''} readOnly disabled className={cn(inputClass, 'opacity-60 cursor-not-allowed')} />
          </div>
        </Section>

        {/* Learning goals */}
        <Section title={t.settings.learningGoals} icon="track_changes">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.settings.dailyXPGoal}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {GOAL_PRESETS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => set('dailyGoal', preset.value)}
                aria-pressed={form.dailyGoal === preset.value}
                className={cn(
                  'p-3 rounded-xl border-2 text-left transition-colors',
                  form.dailyGoal === preset.value
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                )}
              >
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.settings[preset.key]}</p>
                <p className="text-xs text-gray-500">{preset.value} {t.settings.xpPerDay}</p>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={form.dailyGoal}
              onChange={(e) => set('dailyGoal', parseInt(e.target.value))}
              aria-label={t.settings.dailyXPGoal}
              className="flex-1 accent-primary"
            />
            <span className="w-20 text-right font-bold text-primary">{form.dailyGoal} XP</span>
          </div>
        </Section>

        {/* Interface */}
        <Section title={t.settings.appInterface} icon="palette">
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t.profile.language}
            </label>
            <select
              id="language"
              value={form.appLanguage}
              onChange={(e) => set('appLanguage', e.target.value as Language)}
              className={inputClass}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="darija">Darija</option>
            </select>
          </div>
          <div>
            <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.settings.theme}</p>
            <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={t.settings.theme}>
              {([
                ['light', 'light_mode', t.settings.themeLight],
                ['dark', 'dark_mode', t.settings.themeDark],
                ['system', 'computer', t.settings.themeSystem],
              ] as const).map(([value, icon, label]) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={theme === value}
                  onClick={() => setTheme(value)}
                  className={cn(
                    'flex items-center justify-center gap-2 h-11 rounded-lg border-2 text-sm font-medium transition-colors',
                    theme === value
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary/50'
                  )}
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Section>

        {/* Notifications */}
        <Section title={t.settings.notificationsSection} icon="notifications">
          <Switch
            label={t.settings.dailyReminders}
            description={t.settings.dailyRemindersDesc}
            checked={form.dailyReminders}
            onChange={(v) => set('dailyReminders', v)}
          />
          <Switch
            label={t.settings.emailNotifications}
            description={t.settings.emailNotificationsDesc}
            checked={form.emailNotifications}
            onChange={(v) => set('emailNotifications', v)}
          />
        </Section>

        {/* AI teacher */}
        <Section title={t.settings.aiTeacherSection} icon="smart_toy">
          <Switch
            label={t.settings.autoSpeak}
            description={t.settings.autoSpeakDesc}
            checked={aiSettings?.autoSpeak ?? true}
            disabled={!aiSettings}
            onChange={(autoSpeak) => saveAISettings({ autoSpeak })}
          />
          <div>
            <label htmlFor="speechRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t.settings.speechRate}
            </label>
            <div className="flex items-center gap-4">
              <input
                id="speechRate"
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                disabled={!aiSettings}
                value={speechRate ?? aiSettings?.speechRate ?? 0.85}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                // Save once the user lets go, not on every step
                onPointerUp={() => speechRate !== null && saveAISettings({ speechRate })}
                onKeyUp={() => speechRate !== null && saveAISettings({ speechRate })}
                className="flex-1 accent-primary"
              />
              <span className="w-14 text-right font-bold text-primary">
                {(speechRate ?? aiSettings?.speechRate ?? 0.85).toFixed(2)}×
              </span>
            </div>
          </div>
        </Section>

        {/* Security */}
        <Section title={t.settings.securitySection} icon="lock">
          <form onSubmit={handleChangePassword} className="space-y-4">
            {/* Hidden username helps password managers associate the change */}
            <input type="email" autoComplete="username" value={user?.email || ''} readOnly hidden />
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.settings.currentPassword}
              </label>
              <PasswordInput
                id="currentPassword"
                autoComplete="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="h-11 rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.auth.newPassword}
              </label>
              <PasswordInput
                id="newPassword"
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-11 rounded-lg"
              />
              {newPassword && <PasswordCriteria password={newPassword} />}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t.settings.confirmNewPassword}
              </label>
              <PasswordInput
                id="confirmPassword"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-11 rounded-lg"
              />
              {confirmPassword && (
                <p className={cn('mt-1 text-xs', passwordsMatch ? 'text-green-600 dark:text-green-400' : 'text-red-500')}>
                  {passwordsMatch ? t.auth.passwordsMatch : t.auth.passwordsDontMatch}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={!canChangePassword}
              className="px-5 py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isChangingPassword ? t.settings.changingPassword : t.settings.changePassword}
            </button>
          </form>
        </Section>

        {/* Sign out */}
        <Section title={t.settings.actions} icon="logout">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">logout</span>
            {t.nav.logout}
          </button>
        </Section>
      </div>

      {/* Sticky save bar, shown only when there's something to save */}
      <div
        className={cn(
          'fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-xl transition-all duration-300',
          isDirty ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between gap-4 p-3 pl-5 rounded-2xl bg-gray-900 dark:bg-gray-800 text-white shadow-2xl border border-gray-700">
          <span className="text-sm">{t.settings.unsavedChanges}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setForm(initial)}
              disabled={isSaving}
              className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {t.common.cancel}
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || !nameValid}
              className="px-4 py-2 rounded-lg bg-primary text-sm font-bold hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {isSaving ? t.common.saving : t.settings.saveChanges}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
