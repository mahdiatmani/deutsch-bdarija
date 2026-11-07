'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchUserProfile, updateProfile } from '@/lib/api'
import { cn, formatXP, getErrorMessage, interpolate } from '@/lib/utils'
import { staggerContainer, fadeInUp, popIn, pageTransition } from '@/lib/animations'
import { AvatarEditor, UserAvatar } from '@/components/shared/avatar-editor'
import { useToast } from '@/components/shared/toast'
import type { Achievement, UserProfile } from '@/types'

const ACHIEVEMENT_STYLE: Record<string, { icon: string; className: string }> = {
  'perfect-score': { icon: 'emoji_events', className: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30' },
  streak: { icon: 'local_fire_department', className: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' },
  'level-up': { icon: 'arrow_upward', className: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30' },
  'course-complete': { icon: 'school', className: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30' },
}

// Darija is written in Latin script here, so use French month names rather than Arabic script
const LOCALES = { en: 'en-US', fr: 'fr-FR', darija: 'fr-MA' } as const

export default function ProfilePage() {
  const { token, updateUser } = useAuthStore()
  const { t, language } = useLanguageStore()
  const { addToast } = useToast()
  const queryClient = useQueryClient()
  const [activeTab, setActiveTab] = useState<'overview' | 'badges'>('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const { data: profile, isLoading } = useQuery<UserProfile>({
    queryKey: ['user', 'profile'],
    queryFn: () => fetchUserProfile(token!),
    enabled: !!token,
    staleTime: 30_000,
  })

  // Keep the sidebar/header in sync with the freshest server data
  useEffect(() => {
    if (profile) {
      const { achievements, badges, stats, ...user } = profile
      updateUser(user)
    }
  }, [profile, updateUser])

  if (isLoading || !profile) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const startEditing = () => {
    setFirstName(profile.firstName || '')
    setLastName(profile.lastName || '')
    setIsEditing(true)
  }

  const nameValid = firstName.trim().length >= 2 && lastName.trim().length >= 2

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token || !nameValid) return
    setIsSaving(true)
    try {
      const updated = await updateProfile({ firstName: firstName.trim(), lastName: lastName.trim() }, token)
      updateUser(updated)
      queryClient.setQueryData<UserProfile>(['user', 'profile'], (old) => (old ? { ...old, ...updated } : old))
      setIsEditing(false)
      addToast({ type: 'success', message: t.settings.profileSaved })
    } catch (error) {
      addToast({ type: 'error', message: getErrorMessage(t.auth.errors, error) })
    } finally {
      setIsSaving(false)
    }
  }

  const levelProgress = profile.levelProgress ?? { current: 0, required: 100 }
  const levelPercent = Math.min(100, Math.round((levelProgress.current / levelProgress.required) * 100))
  const memberSince = profile.createdAt
    ? new Intl.DateTimeFormat(LOCALES[language], { month: 'long', year: 'numeric' }).format(new Date(profile.createdAt))
    : null

  const stats = [
    { label: t.profile.totalPoints, value: formatXP(profile.totalPoints), icon: 'stars', color: 'text-yellow-500' },
    { label: t.profile.currentLevel, value: `${profile.currentLevel} · ${profile.cefrLevel ?? 'A1'}`, icon: 'military_tech', color: 'text-primary' },
    { label: t.profile.currentStreak, value: `${profile.currentStreak} ${t.common.days}`, icon: 'local_fire_department', color: 'text-orange-500' },
    { label: t.profile.longestStreak, value: `${profile.longestStreak} ${t.common.days}`, icon: 'whatshot', color: 'text-red-500' },
    { label: t.profile.lessonsDone, value: profile.lessonsCompleted, icon: 'check_circle', color: 'text-green-500' },
    {
      label: t.profile.testsCompleted,
      value: profile.stats.testsCompleted,
      sub: profile.stats.averageTestScore !== null ? `${t.profile.averageScore}: ${profile.stats.averageTestScore}%` : undefined,
      icon: 'quiz',
      color: 'text-blue-500',
    },
  ]

  const achievementTitle = (a: Achievement) => {
    const template = (t.achievements as Record<string, string>)[a.type]
    return template ? interpolate(template, { value: a.value ?? '' }) : a.title
  }

  const badges = profile.badges.filter((ub) => ub.badge)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="paper p-6 mb-6">
        {isEditing ? (
          <form onSubmit={saveProfile} className="space-y-5">
            <AvatarEditor size="lg" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                ['firstName', t.auth.firstName, firstName, setFirstName, 'given-name'],
                ['lastName', t.auth.lastName, lastName, setLastName, 'family-name'],
              ] as const).map(([id, label, value, setter, autoComplete]) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
                  <input
                    id={id}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    autoComplete={autoComplete}
                    maxLength={50}
                    className={cn(
                      'w-full h-11 px-4 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                      value.trim().length < 2 ? 'border-red-400' : 'border-gray-300 dark:border-gray-700'
                    )}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                disabled={isSaving}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {t.common.cancel}
              </button>
              <button
                type="submit"
                disabled={isSaving || !nameValid}
                className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isSaving ? t.common.saving : t.profile.saveProfile}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <UserAvatar user={profile} className="size-24" />
              <div className="absolute -bottom-1 -right-1 size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold border-2 border-white dark:border-gray-800">
                {profile.currentLevel}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white capitalize truncate">
                  {profile.firstName} {profile.lastName}
                </h1>
                <button
                  onClick={startEditing}
                  className="size-8 shrink-0 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label={t.profile.editProfile}
                  title={t.profile.editProfile}
                >
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">@{profile.username} • {profile.email}</p>
              {memberSince && (
                <p className="text-xs text-gray-400 mt-0.5">{interpolate(t.profile.memberSince, { date: memberSince })}</p>
              )}
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="material-symbols-outlined text-base text-orange-500">local_fire_department</span>
                  {profile.currentStreak} {t.sidebar.stats.streak}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="material-symbols-outlined text-base text-primary">stars</span>
                  {formatXP(profile.totalPoints)} {t.common.points}
                </span>
              </div>
            </div>

            {/* Level Progress */}
            <div className="w-full sm:w-52">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-500">{t.common.level} {profile.currentLevel}</span>
                <span className="text-primary font-medium">{t.common.level} {profile.currentLevel + 1}</span>
              </div>
              <div
                className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={levelPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  className="h-2 bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${levelPercent}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 text-right">
                {interpolate(t.profile.xpToNextLevel, {
                  remaining: levelProgress.required - levelProgress.current,
                  next: profile.currentLevel + 1,
                })}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {([
          { key: 'overview', label: t.profile.overview },
          { key: 'badges', label: t.profile.badges },
        ] as const).map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize',
              activeTab === tab.key
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            )}
          >
            {tab.label}
          </button>
        ))}
        <Link
          href="/settings"
          className="ml-auto flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">settings</span>
          {t.profile.allSettings}
        </Link>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div key="overview" variants={pageTransition} initial="initial" animate="animate" exit="exit" className="space-y-6">
            {/* Stats Grid */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="paper p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-10 shrink-0 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className={cn('material-symbols-outlined', stat.color)}>{stat.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                      {stat.sub && <p className="text-[11px] text-gray-400 truncate">{stat.sub}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Recent Achievements */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.profile.recentAchievements}</h2>
              <div className="space-y-3">
                {profile.achievements.length > 0 ? (
                  profile.achievements.slice(0, 8).map((achievement) => {
                    const style = ACHIEVEMENT_STYLE[achievement.type] ?? { icon: 'check_circle', className: 'bg-primary/10 text-primary' }
                    return (
                      <div
                        key={achievement.id}
                        className="flex items-center gap-4 p-4 paper"
                      >
                        <div className={cn('size-10 shrink-0 rounded-full flex items-center justify-center', style.className)}>
                          <span className="material-symbols-outlined text-xl">{style.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 dark:text-white">{achievementTitle(achievement)}</p>
                          <p className="text-sm text-gray-500 truncate">
                            {new Intl.DateTimeFormat(LOCALES[language], { dateStyle: 'medium' }).format(new Date(achievement.timestamp))}
                          </p>
                        </div>
                        {achievement.points > 0 && (
                          <span className="text-sm font-medium text-primary">+{achievement.points} XP</span>
                        )}
                      </div>
                    )
                  })
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">{t.profile.noAchievements}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'badges' && (
          <motion.div key="badges" variants={pageTransition} initial="initial" animate="animate" exit="exit" className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.profile.yourBadges}</h2>
              {badges.length > 0 ? (
                <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {badges.map(({ badge }) => (
                    <motion.div
                      key={badge.id}
                      variants={popIn}
                      className="paper p-4 text-center"
                    >
                      <div
                        className="size-16 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden"
                        style={{ backgroundColor: `${badge.color || '#00A36C'}20` }}
                      >
                        {badge.icon.includes('/') ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={badge.icon} alt={badge.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="material-symbols-outlined text-3xl" style={{ color: badge.color || '#00A36C' }}>
                            {badge.icon}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{badge.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">{t.profile.noBadges}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
