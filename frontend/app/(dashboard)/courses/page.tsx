'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchCourses, fetchUserProgress, createCourse } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { cn } from '@/lib/utils'
import type { CourseLevel, Course, CourseProgress } from '@/types'

const levels: CourseLevel[] = ['A1', 'A2', 'B1', 'B2']

// Each CEFR level gets its own ink colour for stamps and accents
const LEVEL_TONE: Record<string, { text: string; border: string; bar: string }> = {
  A1: { text: 'text-primary', border: 'border-primary', bar: 'bg-primary' },
  A2: { text: 'text-tile', border: 'border-tile', bar: 'bg-tile' },
  B1: { text: 'text-clay', border: 'border-clay', bar: 'bg-clay' },
  B2: { text: 'text-saffron-dark', border: 'border-saffron-dark', bar: 'bg-saffron-dark' },
}

const emptyCourse = {
  title: '',
  description: '',
  level: 'A1',
  totalLessons: 10,
  estimatedHours: 5,
  icon: 'school',
  color: '#00A36C',
  isPublished: true,
  isLocked: false,
}

const fieldClass =
  'h-11 px-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-surface-light dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'

function CourseCover({ course, index, animationIndex, progress, t }: {
  course: Course
  index: number
  animationIndex: number
  progress?: CourseProgress
  t: ReturnType<typeof useLanguageStore.getState>['t']
}) {
  const tone = LEVEL_TONE[course.level] ?? LEVEL_TONE.A1
  const percent = progress?.progress ?? 0
  const isImage = course.icon.includes('/') || course.icon.includes('http')

  const card = (
    <article
      className={cn(
        'group paper overflow-hidden h-full flex flex-col',
        course.isLocked ? 'opacity-70' : 'paper-hover'
      )}
    >
      {/* Cover */}
      <div className="relative h-40 overflow-hidden bg-ink">
        {isImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={course.icon}
            alt=""
            className={cn(
              'absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700',
              course.isLocked ? 'grayscale opacity-50' : 'group-hover:scale-105 group-hover:opacity-100'
            )}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center zellige-fill">
            <span className="material-symbols-outlined text-7xl text-saffron/60">{course.icon}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

        {/* Chapter number */}
        <span className="absolute left-5 bottom-3 font-display text-5xl font-extrabold tracking-tighter text-gray-50/90 leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Passport-style level stamp */}
        <span
          className={cn(
            'absolute right-4 top-4 rounded-full border bg-white/95 px-2.5 py-0.5 text-xs font-bold tracking-wider shadow-sm backdrop-blur',
            tone.text,
            tone.border
          )}
        >
          {course.level}
        </span>

        {course.isLocked && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-100 backdrop-blur">
              <span className="material-symbols-outlined text-sm">lock</span>
              {t.courses.locked}
            </span>
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 group-hover:text-primary dark:group-hover:text-saffron transition-colors">
          {course.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
          {course.description}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">auto_stories</span>
              {course.totalLessons} {t.common.lessons}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-base">schedule</span>
              {course.estimatedHours} {t.common.hours}
            </span>
          </div>

          {course.isLocked ? (
            <p className="mt-4 flex items-center gap-1.5 text-xs text-gray-500">
              <span className="material-symbols-outlined text-sm">lock</span>
              {t.courses.unlockPreviousUnit}
            </p>
          ) : (
            <div className="mt-4">
              <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <motion.div
                  className={cn('h-full rounded-full', tone.bar)}
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.9, delay: 0.2 + Math.min(animationIndex, 12) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-gray-500 tabular-nums">
                  {progress?.completedLessons ?? 0}/{course.totalLessons} {t.common.lessons}
                </span>
                <span className={cn('font-semibold tabular-nums', tone.text)}>{percent}%</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(animationIndex, 12) * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {course.isLocked ? (
        <div aria-disabled="true" className="cursor-not-allowed h-full">{card}</div>
      ) : (
        <Link href={`/courses/${course.id}`} className="block h-full rounded-2xl">
          {card}
        </Link>
      )}
    </motion.div>
  )
}

export default function CoursesPage() {
  const user = useAuthStore(s => s.user)
  const token = useAuthStore(s => s.token)
  const t = useLanguageStore(s => s.t)
  const queryClient = useQueryClient()
  const isAdmin = user?.role === 'admin'
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | 'all'>('all')
  const [isCreating, setIsCreating] = useState(false)
  const [newCourse, setNewCourse] = useState(emptyCourse)

  const { data: coursesData, isLoading: isLoadingCourses } = useQuery({
    // Locks depend on the learner's progress
    queryKey: ['courses', token ?? 'guest'],
    queryFn: () => fetchCourses(token),
  })

  const { data: progressData, isLoading: isLoadingProgress } = useQuery({
    queryKey: ['user', 'progress'],
    queryFn: () => fetchUserProgress(token!),
    enabled: !!token,
  })

  const createCourseMutation = useMutation({
    mutationFn: (data: typeof emptyCourse) => createCourse(data, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      setIsCreating(false)
      setNewCourse(emptyCourse)
    },
  })

  if (isLoadingCourses || isLoadingProgress) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="h-10 w-64 rounded-xl bg-gray-200/70 dark:bg-gray-800 animate-pulse mb-3" />
        <div className="h-5 w-96 max-w-full rounded-lg bg-gray-200/70 dark:bg-gray-800 animate-pulse mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="paper h-80 animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  const courses: Course[] = coursesData || []
  const progressList: CourseProgress[] = progressData || []
  const getCourseProgress = (courseId: string) => progressList.find((p) => p.courseId === courseId)

  const filteredCourses = selectedLevel === 'all' ? courses : courses.filter((c) => c.level === selectedLevel)

  // "Continue" target: the course touched most recently, else the first unlocked one
  const continueCourse =
    [...progressList]
      .filter((p) => (p.progress ?? 0) < 100)
      .sort((a, b) => new Date(b.lastAccessed ?? 0).getTime() - new Date(a.lastAccessed ?? 0).getTime())
      .map((p) => courses.find((c) => c.id === p.courseId))
      .find(Boolean) ?? courses.find((c) => !c.isLocked)
  const continueProgress = continueCourse ? getCourseProgress(continueCourse.id) : undefined

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-10 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
        <div>
          <p className="eyebrow mb-3">{t.nav.lessons}</p>
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-gray-50">{t.courses.title}</h1>
          <p className="mt-3 max-w-xl text-gray-600 dark:text-gray-400">{t.courses.subtitle}</p>
        </div>

        {continueCourse && (
          <Link
            href={`/courses/${continueCourse.id}`}
            className="group relative overflow-hidden rounded-2xl bg-primary p-5 text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 zellige-white" />
            <div className="relative flex items-center gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-saffron-light">{t.courses.continueLearning}</p>
                <p className="mt-1 font-display text-xl font-semibold truncate">{continueCourse.title}</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full rounded-full bg-saffron" style={{ width: `${continueProgress?.progress ?? 0}%` }} />
                </div>
              </div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-saffron text-ink transition-transform group-hover:translate-x-1">
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </div>
          </Link>
        )}
      </header>

      {/* Toolbar: CEFR ladder + admin action */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label={t.courses.allLevels} className="inline-flex rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark p-1">
          {(['all', ...levels] as const).map((level) => {
            const active = selectedLevel === level
            return (
              <button
                key={level}
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedLevel(level)}
                className={cn(
                  'relative px-4 py-2 text-sm font-semibold rounded-xl transition-colors',
                  active ? 'text-white' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="level-pill"
                    className="absolute inset-0 rounded-xl bg-ink dark:bg-primary"
                    transition={{ type: 'spring', stiffness: 450, damping: 36 }}
                  />
                )}
                <span className="relative">{level === 'all' ? t.courses.allLevels : level}</span>
              </button>
            )
          })}
        </div>

        {isAdmin && (
          <button onClick={() => setIsCreating(!isCreating)} className={isCreating ? 'btn-ghost' : 'btn-stamp !py-2'}>
            <span className="material-symbols-outlined text-lg">{isCreating ? 'close' : 'add'}</span>
            {isCreating ? t.common.cancel : t.courses.createCourse}
          </button>
        )}
      </div>

      {/* Admin creation form */}
      {isCreating && (
        <motion.form
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={(e) => {
            e.preventDefault()
            createCourseMutation.mutate(newCourse)
          }}
          className="paper mb-10 p-6"
        >
          <h3 className="text-xl font-semibold mb-5">{t.courses.addNew}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <input type="text" placeholder={t.courses.titleLabel} value={newCourse.title} onChange={e => setNewCourse({ ...newCourse, title: e.target.value })} className={fieldClass} required />
            <select value={newCourse.level} onChange={e => setNewCourse({ ...newCourse, level: e.target.value })} className={fieldClass}>
              {levels.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <input type="number" min={1} placeholder={t.courses.totalLessonsLabel} value={newCourse.totalLessons} onChange={e => setNewCourse({ ...newCourse, totalLessons: parseInt(e.target.value) || 0 })} className={fieldClass} required />
            <input type="number" min={1} placeholder={t.courses.estimatedHoursLabel} value={newCourse.estimatedHours} onChange={e => setNewCourse({ ...newCourse, estimatedHours: parseInt(e.target.value) || 0 })} className={fieldClass} required />
            <input type="text" placeholder={t.courses.iconLabel} value={newCourse.icon} onChange={e => setNewCourse({ ...newCourse, icon: e.target.value })} className={fieldClass} required />
            <input type="text" placeholder={t.courses.colorLabel} value={newCourse.color} onChange={e => setNewCourse({ ...newCourse, color: e.target.value })} className={fieldClass} required />
            <textarea placeholder={t.courses.descriptionLabel} value={newCourse.description} onChange={e => setNewCourse({ ...newCourse, description: e.target.value })} className={cn(fieldClass, 'md:col-span-2 h-auto py-3')} rows={2} required />
          </div>
          <button type="submit" disabled={createCourseMutation.isPending} className="btn-primary">
            {createCourseMutation.isPending ? t.courses.creating : t.courses.saveCourse}
          </button>
        </motion.form>
      )}

      {/* Course grid */}
      {filteredCourses.length === 0 ? (
        <div className="paper flex flex-col items-center justify-center gap-3 py-16 text-center">
          <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-700">menu_book</span>
          <p className="text-gray-500">{t.courses.noCourses}</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, idx) => (
            <CourseCover
              key={course.id}
              course={course}
              // Units are numbered within their level (A1 · 01, A2 · 01 …)
              index={courses.filter((c) => c.level === course.level).indexOf(course)}
              animationIndex={idx}
              progress={getCourseProgress(course.id)}
              t={t}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}
