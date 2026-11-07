'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { fetchCourseById, fetchLessons, fetchUserLessonProgress } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { cn } from '@/lib/utils'
import { GoalRing } from '@/components/shared/goal-ring'
import type { Lesson, LessonProgress } from '@/types'

export default function CourseDetailPage({
  params,
}: {
  params: { courseId: string }
}) {
  const { courseId } = params
  const { token } = useAuthStore()
  const { t } = useLanguageStore()

  const { data: course, isLoading: isLoadingCourse } = useQuery({
    queryKey: ['course', courseId],
    queryFn: () => fetchCourseById(courseId, token),
  })

  const { data: lessons, isLoading: isLoadingLessons } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: () => fetchLessons(courseId, token),
  })

  const { data: lessonsProgress } = useQuery({
    queryKey: ['user', 'progress', 'lessons'],
    queryFn: () => fetchUserLessonProgress(token!),
    enabled: !!token,
  })

  if (isLoadingCourse || isLoadingLessons) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!course) {
    notFound()
  }

  const getLessonStatus = (lessonId: string) => {
    if (!lessonsProgress) return 'not_started'
    const progress = lessonsProgress.find((p: any) => p.lessonId === lessonId)
    return progress?.status || 'not_started'
  }

  const getLessonScore = (lessonId: string) => {
    if (!lessonsProgress) return 0
    const progress = lessonsProgress.find((p: any) => p.lessonId === lessonId)
    return progress?.score || 0
  }

  const completedCount = lessons?.filter((l: Lesson) => getLessonStatus(l.id) === 'completed').length || 0
  const totalCount = lessons?.length || 0
  const overallProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  // The next lesson to take: first one that is unlocked and not yet completed
  const currentLessonId = lessons?.find((l: Lesson) => !l.isLocked && getLessonStatus(l.id) !== 'completed')?.id
  const isImage = course.icon.includes('/') || course.icon.includes('http')
  const objectives: string[] = Array.isArray(course.objectives) ? course.objectives : []
  const unitNumber = Number(course.id.match(/-u(\d+)$/)?.[1] ?? 0)

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/courses"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary dark:hover:text-saffron mb-6 transition-colors"
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        {t.courses.backToCourses}
      </Link>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl bg-ink text-gray-100 p-8 sm:p-10 mb-12 shadow-lift"
      >
        {isImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={course.icon} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 zellige-white opacity-40 [mask-image:linear-gradient(to_left,black,transparent_60%)]" />

        <div className="relative flex flex-col sm:flex-row sm:items-end gap-8">
          <div className="flex-1 min-w-0">
            <span className="inline-block rounded-full border border-saffron/40 bg-saffron/10 px-3 py-1 text-xs font-bold tracking-wider text-saffron mb-5">
              {course.level}
              {unitNumber > 0 && ` · ${t.courses.unit} ${unitNumber}`}
            </span>
            <h1 className="text-4xl sm:text-5xl text-gray-50 text-balance">{course.title}</h1>
            <p className="mt-3 max-w-xl text-gray-300 leading-relaxed">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg text-saffron">auto_stories</span>
                {totalCount || course.totalLessons} {t.common.lessons}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg text-saffron">schedule</span>
                {course.estimatedHours} {t.common.hours}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:flex-col sm:items-center">
            <GoalRing value={completedCount} max={totalCount || 1} size={104} stroke={7} trackClassName="!stroke-white/10">
              <span className="text-center leading-none">
                <span className="block font-display text-3xl text-gray-50 tabular-nums">{overallProgress}%</span>
              </span>
            </GoalRing>
            <p className="text-xs text-gray-400 tabular-nums">
              {completedCount}/{totalCount} {t.courses.lessonsCompleted}
            </p>
          </div>
        </div>

        {objectives.length > 0 && (
          <div className="relative mt-8 border-t border-white/10 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-saffron">{t.courses.unitGoals}:</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {objectives.map((goal, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-200">
                  <span className="material-symbols-outlined text-base text-saffron">flag</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.header>

      {course.isLocked && (
        <div className="mb-8 flex items-center gap-3 rounded-2xl border border-dashed border-gray-300 p-4 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
          <span className="material-symbols-outlined">lock</span>
          {t.courses.unlockPreviousUnit}
        </div>
      )}

      {/* Lesson trail */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-2xl text-gray-900 dark:text-gray-50">{t.courses.lessonPath}</h2>
        <span className="text-sm text-gray-500 tabular-nums">{totalCount} {t.common.lessons}</span>
      </div>

      <ol className="relative">
        {/* The trail line */}
        <span aria-hidden="true" className="absolute left-7 top-7 bottom-7 w-px border-l-2 border-dashed border-gray-300 dark:border-gray-700" />

        {lessons?.map((lesson: Lesson, index: number) => {
          const isCompleted = getLessonStatus(lesson.id) === 'completed'
          const isCurrent = lesson.id === currentLessonId
          const score = getLessonScore(lesson.id)
          const exerciseCount = lesson.scoredItems ?? 0
          const kindLabel = lesson.kind ? t.courses.lessonKinds[lesson.kind as keyof typeof t.courses.lessonKinds] : undefined

          const node = (
            <span
              className={cn(
                'relative z-10 flex size-14 shrink-0 items-center justify-center',
                isCurrent && 'drop-shadow-[0_6px_14px_rgba(227,161,58,0.55)]'
              )}
            >
              <svg viewBox="0 0 40 40" className="absolute inset-0" aria-hidden="true">
                <g transform="translate(20 20)">
                  {[0, 45].map((r) => (
                    <rect
                      key={r}
                      x="-13"
                      y="-13"
                      width="26"
                      height="26"
                      rx="3.5"
                      transform={`rotate(${r})`}
                      className={cn(
                        'stroke-[1.5]',
                        isCompleted
                          ? 'fill-primary stroke-primary'
                          : isCurrent
                          ? 'fill-saffron stroke-saffron'
                          : lesson.isLocked
                          ? 'fill-background-light dark:fill-background-dark stroke-gray-300 dark:stroke-gray-700'
                          : 'fill-surface-light dark:fill-surface-dark stroke-primary'
                      )}
                    />
                  ))}
                </g>
              </svg>
              {isCurrent && <span className="absolute inset-1 rounded-full bg-saffron/40 animate-ping" />}
              <span
                className={cn(
                  'relative font-display text-base font-semibold',
                  isCompleted ? 'text-white' : isCurrent ? 'text-ink' : lesson.isLocked ? 'text-gray-400' : 'text-primary'
                )}
              >
                {isCompleted ? (
                  <span className="material-symbols-outlined text-xl">check</span>
                ) : lesson.isLocked ? (
                  <span className="material-symbols-outlined text-lg">lock</span>
                ) : (
                  index + 1
                )}
              </span>
            </span>
          )

          const card = (
            <div
              className={cn(
                'flex-1 min-w-0 flex items-center gap-4 rounded-2xl border p-4 sm:p-5 transition-all',
                lesson.isLocked
                  ? 'border-dashed border-gray-300 dark:border-gray-800 bg-transparent'
                  : isCurrent
                  ? 'border-saffron/60 bg-surface-light dark:bg-surface-dark shadow-glow'
                  : 'border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark shadow-paper group-hover:-translate-y-0.5 group-hover:shadow-lift'
              )}
            >
              <div className="flex-1 min-w-0">
                <h3
                  className={cn(
                    'text-lg font-semibold truncate',
                    lesson.isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-gray-50'
                  )}
                >
                  {lesson.title}
                </h3>
                <p className={cn('text-sm truncate', lesson.isLocked ? 'text-gray-400 dark:text-gray-600' : 'text-gray-600 dark:text-gray-400')}>
                  {lesson.description}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                  {kindLabel && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 font-semibold uppercase tracking-wider text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      {kindLabel}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {lesson.duration} {t.courses.minutes}
                  </span>
                  {isCompleted && exerciseCount > 0 && (
                    <span className="inline-flex items-center gap-1 font-medium text-primary dark:text-primary-light">
                      <span className="material-symbols-outlined icon-fill text-sm">verified</span>
                      {score}/{exerciseCount}
                    </span>
                  )}
                </div>
              </div>

              {!lesson.isLocked && (
                <span
                  className={cn(
                    'shrink-0 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-colors',
                    isCurrent
                      ? 'bg-ink text-saffron dark:bg-saffron dark:text-ink'
                      : 'bg-gray-100 text-gray-700 group-hover:bg-primary group-hover:text-white dark:bg-gray-800 dark:text-gray-300'
                  )}
                >
                  {isCompleted ? t.courses.reviewLesson : t.courses.startLesson}
                  <span className="material-symbols-outlined text-lg">{isCompleted ? 'replay' : 'arrow_forward'}</span>
                </span>
              )}
            </div>
          )

          return (
            <motion.li
              key={lesson.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-4 last:mb-0"
            >
              {lesson.isLocked ? (
                <div className="flex items-center gap-4 cursor-not-allowed" aria-disabled="true">
                  {node}
                  {card}
                </div>
              ) : (
                <Link href={`/courses/${courseId}/lessons/${lesson.id}`} className="group flex items-center gap-4 rounded-2xl">
                  {node}
                  {card}
                </Link>
              )}
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
