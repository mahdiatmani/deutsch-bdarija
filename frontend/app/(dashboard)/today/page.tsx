'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { fetchToday, type TodayPlan } from '@/lib/api'
import { cn, interpolate } from '@/lib/utils'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { GoalRing } from '@/components/shared/goal-ring'
import { gameById, gradientOf } from '@/components/games/registry'

type StepKey = 'lesson' | 'review' | 'daily'

interface Step {
  key: StepKey
  icon: string
  title: string
  meta: string
  done: boolean
  href: string
}

/**
 * The learner's home: one clear next step, today's short plan (lesson, review,
 * daily game), the daily goal and the week's streak.
 */
export default function TodayPage() {
  const token = useAuthStore((s) => s.token)
  const updateUser = useAuthStore((s) => s.updateUser)
  const t = useLanguageStore((s) => s.t)

  // ['user', ...] so finishing a lesson or a game round refreshes the plan
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['user', 'today'],
    queryFn: () => fetchToday(token!),
    enabled: !!token,
    staleTime: 0,
  })

  // The plan comes with a fresh user (daily XP reset, streak), so keep the sidebar in sync
  useEffect(() => {
    if (data?.user) updateUser(data.user)
  }, [data?.user, updateUser])

  if (isLoading) return <TodaySkeleton />

  if (isError || !data) {
    return (
      <div className="paper mx-auto max-w-md p-8 text-center">
        <span className="material-symbols-outlined mb-2 text-4xl text-gray-400">cloud_off</span>
        <p className="mb-5 text-gray-600 dark:text-gray-400">{t.today.loadError}</p>
        <button onClick={() => refetch()} className="btn-primary mx-auto">
          {t.today.retry}
        </button>
      </div>
    )
  }

  const level = data.user.cefrLevel ?? 'A1'
  const daily = gameById(data.daily.gameId)!
  const { nextLesson, review } = data

  const lessonStep: Step = nextLesson
    ? {
        key: 'lesson',
        icon: 'auto_stories',
        title: t.today.steps.lesson,
        meta: `${nextLesson.title} · ${interpolate(t.today.minutes, { n: nextLesson.duration })}`,
        done: data.lessonsToday > 0,
        href: `/courses/${nextLesson.courseId}/lessons/${nextLesson.id}`,
      }
    : {
        key: 'lesson',
        icon: 'auto_stories',
        title: t.today.steps.lessonsFinished,
        meta: t.today.steps.lessonsFinishedMeta,
        done: true,
        href: '/courses',
      }
  // Words enter the review queue from finished lessons and game rounds.
  // One round a day counts as done, so a big backlog never blocks the plan.
  const reviewStep: Step | null =
    review.total > 0
      ? {
          key: 'review',
          icon: 'psychology',
          title: review.due ? interpolate(t.today.steps.review, { count: review.due }) : t.today.steps.reviewNone,
          meta:
            review.due && review.reviewedToday
              ? interpolate(t.today.steps.reviewedToday, { count: review.due })
              : !review.due && review.tomorrow
                ? interpolate(t.today.steps.reviewTomorrow, { count: review.tomorrow })
                : t.today.steps.reviewMeta,
          done: review.due === 0 || review.reviewedToday,
          href: `/games/review?level=${level}`,
        }
      : null
  const dailyStep: Step = {
    key: 'daily',
    icon: 'bolt',
    title: interpolate(t.today.steps.daily, { game: daily.name }),
    meta: interpolate(t.today.steps.dailyMeta, { xp: data.daily.bonus }),
    done: data.daily.done,
    href: `/games/${daily.id}?level=${level}`,
  }
  // Due words come first: a few minutes of review before new material is what makes words stick
  const reviewFirst = !!reviewStep && !reviewStep.done
  const steps = (reviewFirst ? [reviewStep, lessonStep, dailyStep] : [lessonStep, reviewStep, dailyStep]).filter(
    (step): step is Step => step !== null
  )
  const nextStep = steps.find((s) => !s.done)
  const doneCount = steps.filter((s) => s.done).length

  return (
    <div className="mx-auto max-w-6xl">
      <header className="mb-8">
        <p className="eyebrow mb-3">{t.nav.today}</p>
        <h1 className="text-4xl text-gray-900 dark:text-gray-50 sm:text-5xl">
          {nextStep ? t.today.headingPlan : t.today.headingDone}
        </h1>
        <p className="mt-3 max-w-xl text-gray-600 dark:text-gray-400">
          {nextStep ? t.today.subtitlePlan : t.today.subtitleDone}
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="flex min-w-0 flex-col gap-6">
          <NextStepCard step={nextStep} data={data} />

          {/* Today's plan */}
          <section className="paper p-5 sm:p-6" aria-labelledby="plan-title">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 id="plan-title" className="font-display text-xl text-gray-900 dark:text-gray-50">
                {t.today.planTitle}
              </h2>
              <span className="text-sm tabular-nums text-gray-500">
                {interpolate(t.today.planProgress, { done: doneCount, total: steps.length })}
              </span>
            </div>
            <ol className="space-y-2">
              {steps.map((step, i) => (
                <li key={step.key} className="animate-stagger-in" style={{ animationDelay: `${i * 60}ms` }}>
                  <Link
                    href={step.href}
                    className={cn(
                      'group flex items-center gap-4 rounded-2xl border p-3 transition-colors sm:p-4',
                      step === nextStep
                        ? 'border-primary/40 bg-primary/[0.04] hover:border-primary'
                        : 'border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700'
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-11 shrink-0 items-center justify-center rounded-full',
                        step.done ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                      )}
                    >
                      <span className="material-symbols-outlined icon-fill text-xl">{step.done ? 'check' : step.icon}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          'block font-semibold',
                          step.done ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-gray-50'
                        )}
                      >
                        {step.title}
                      </span>
                      <span className="block truncate text-sm text-gray-500">{step.meta}</span>
                    </span>
                    <span className="material-symbols-outlined text-gray-400 transition-transform group-hover:translate-x-1">
                      chevron_right
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="flex flex-col gap-6 self-start">
          <GoalCard data={data} />
          <WordsCard review={review} level={level} />
        </div>
      </div>

      {/* More ways to practise */}
      <section className="mt-10" aria-labelledby="more-title">
        <h2 id="more-title" className="eyebrow mb-4">
          {t.today.more.title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <MoreTile
            href={`/games/wortle?level=${level}`}
            icon="grid_view"
            title={t.games.wortleTitle}
            desc={data.wortlePlayed ? t.today.more.wortlePlayed : t.today.more.wortle}
            done={data.wortlePlayed}
          />
          <MoreTile href="/ai-teacher" icon="record_voice_over" title={t.nav.aiTeacher} desc={t.today.more.aiTeacher} />
          <MoreTile href="/games" icon="extension" title={t.nav.games} desc={t.today.more.games} />
        </div>
      </section>
    </div>
  )
}

function NextStepCard({ step, data }: { step?: Step; data: TodayPlan }) {
  const t = useLanguageStore((s) => s.t)

  if (!step) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white shadow-lift sm:p-8">
        <div className="absolute inset-0 zellige-white" />
        <div className="relative">
          <span className="material-symbols-outlined icon-fill mb-3 text-5xl text-saffron">celebration</span>
          <h2 className="font-display text-3xl">{t.today.allDoneTitle}</h2>
          <p className="mt-2 max-w-md text-white/75">{t.today.allDoneDesc}</p>
          <Link href="/games" className="mt-6 inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 font-bold text-ink transition-transform hover:-translate-y-0.5">
            {t.today.practiseMore}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    )
  }

  // The daily game keeps its own colors so it looks the same as on the games page
  const game = step.key === 'daily' ? gameById(data.daily.gameId)! : null
  const lesson = data.nextLesson

  let eyebrow = t.today.nextStep
  let title = step.title
  let desc = ''
  let cta = t.today.start
  if (step.key === 'lesson' && lesson) {
    eyebrow = interpolate(t.today.lessonMeta, { level: lesson.level, course: lesson.courseTitle, n: lesson.number, total: lesson.total })
    title = lesson.title
    desc = lesson.description
    cta = t.today.startLesson
  } else if (step.key === 'review') {
    desc = t.today.reviewDesc
    cta = t.today.startReview
  } else if (game) {
    title = game.name
    desc = interpolate(t.games.dailyChallengeDesc, { game: game.name, xp: data.daily.bonus })
    cta = `${t.games.play} · +${data.daily.bonus} XP`
  }

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link
        href={step.href}
        className={cn(
          'group relative block overflow-hidden rounded-3xl p-6 shadow-lift transition-transform hover:-translate-y-1 sm:p-8',
          game ? (game.darkText ? 'text-ink' : 'text-white') : 'bg-primary text-white'
        )}
        style={game ? { background: gradientOf(game) } : undefined}
      >
        {!game && <div className="absolute inset-0 zellige-white" />}
        <span className="material-symbols-outlined icon-fill pointer-events-none absolute -bottom-8 -right-6 text-[170px] opacity-15 transition-transform duration-300 group-hover:-rotate-6">
          {game?.icon ?? step.icon}
        </span>
        <div className="relative">
          <p className={cn('flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]', game ? 'opacity-90' : 'text-saffron-light')}>
            <span className="material-symbols-outlined icon-fill text-base">{step.key === 'daily' ? 'bolt' : 'flag'}</span>
            <span className="truncate">{eyebrow}</span>
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h2>
          {desc && <p className="mt-2 max-w-lg opacity-85">{desc}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2.5 font-bold text-ink transition-transform group-hover:translate-x-1">
              <span className="material-symbols-outlined icon-fill text-lg">play_arrow</span>
              {cta}
            </span>
            {step.key === 'lesson' && lesson && (
              <span className="inline-flex items-center gap-1 text-sm opacity-80">
                <span className="material-symbols-outlined text-base">schedule</span>
                {interpolate(t.today.minutes, { n: lesson.duration })}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function GoalCard({ data }: { data: TodayPlan }) {
  const t = useLanguageStore((s) => s.t)
  const language = useLanguageStore((s) => s.language)
  const { dailyXP, dailyGoal, currentStreak } = data.user
  const reached = dailyXP >= dailyGoal
  const weekday = new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : 'fr-FR', { weekday: 'narrow' })

  const streakNote = data.streakAtRisk
    ? interpolate(t.today.streakAtRisk, { n: currentStreak })
    : data.practisedToday
      ? t.today.streakSafe
      : t.today.streakStart

  return (
    <aside className="paper flex flex-col items-center p-6 text-center">
      <p className="eyebrow mb-4 self-start">{t.today.goal}</p>
      <GoalRing value={dailyXP} max={dailyGoal} size={148} stroke={11}>
        <div>
          <p className="font-display text-4xl tabular-nums text-gray-900 dark:text-gray-50">{dailyXP}</p>
          <p className="text-xs text-gray-500">/ {dailyGoal} XP</p>
        </div>
      </GoalRing>
      <p className={cn('mt-4 font-semibold', reached ? 'text-saffron-dark dark:text-saffron' : 'text-gray-700 dark:text-gray-300')}>
        {reached ? t.today.goalReached : interpolate(t.today.xpLeft, { xp: dailyGoal - dailyXP })}
      </p>

      <div className="my-6 h-px w-full bg-gray-200 dark:bg-gray-800" />

      <div className="flex items-center gap-2">
        <span className={cn('material-symbols-outlined icon-fill text-4xl', currentStreak > 0 ? 'text-[#FF8A00]' : 'text-gray-300 dark:text-gray-700')}>
          local_fire_department
        </span>
        <span className="font-display text-4xl tabular-nums text-gray-900 dark:text-gray-50">{currentStreak}</span>
        <span className="text-sm text-gray-500">{t.sidebar.stats.streak}</span>
      </div>
      <p className={cn('mt-1 text-sm', data.streakAtRisk ? 'font-semibold text-[#F97316]' : 'text-gray-500')}>{streakNote}</p>

      <ol className="mt-5 grid w-full grid-cols-7 gap-1" aria-label={t.today.thisWeek}>
        {data.week.map((day, i) => {
          const [y, m, d] = day.date.split('-').map(Number)
          const isToday = i === data.week.length - 1
          return (
            <li key={day.date} className="flex flex-col items-center gap-1.5">
              <span className={cn('text-[11px] uppercase', isToday ? 'font-bold text-gray-900 dark:text-gray-50' : 'text-gray-500')}>
                {weekday.format(new Date(y, m - 1, d))}
              </span>
              <span
                className={cn(
                  'flex size-8 items-center justify-center rounded-full',
                  day.active ? 'bg-[#FF8A00] text-white' : 'bg-gray-100 dark:bg-gray-800',
                  isToday && !day.active && 'ring-2 ring-[#FF8A00]/50'
                )}
              >
                {day.active && <span className="material-symbols-outlined icon-fill text-base">local_fire_department</span>}
              </span>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

const STAGES = [
  { key: 'new', color: 'bg-gray-300 dark:bg-gray-600' },
  { key: 'learning', color: 'bg-saffron' },
  { key: 'known', color: 'bg-primary/55' },
  { key: 'mastered', color: 'bg-primary' },
] as const

/** How well the learner knows their words: one bar split by Leitner stage, and what is due */
function WordsCard({ review, level }: { review: TodayPlan['review']; level: string }) {
  const t = useLanguageStore((s) => s.t)

  return (
    <section className="paper p-6" aria-labelledby="words-title">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id="words-title" className="eyebrow">
          {t.today.words.title}
        </h2>
        {review.total > 0 && (
          <span className="text-sm tabular-nums text-gray-500">{interpolate(t.today.words.summary, { total: review.total })}</span>
        )}
      </div>

      {review.total === 0 ? (
        <p className="text-sm text-gray-500">{t.today.words.empty}</p>
      ) : (
        <>
          <div className="flex h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800" aria-hidden="true">
            {STAGES.map(({ key, color }) =>
              review.stages[key] > 0 ? (
                <motion.span
                  key={key}
                  className={cn('h-full', color)}
                  initial={{ width: 0 }}
                  animate={{ width: `${(review.stages[key] / review.total) * 100}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              ) : null
            )}
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
            {STAGES.map(({ key, color }) => (
              <div key={key} className="flex items-center gap-2 text-sm">
                <span className={cn('size-2.5 shrink-0 rounded-full', color)} />
                <dt className="flex-1 text-gray-600 dark:text-gray-400">{t.today.words.stages[key]}</dt>
                <dd className="font-semibold tabular-nums text-gray-900 dark:text-gray-50">{review.stages[key]}</dd>
              </div>
            ))}
          </dl>

          <div className="my-5 h-px w-full bg-gray-200 dark:bg-gray-800" />

          {review.due > 0 ? (
            <Link
              href={`/games/review?level=${level}`}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-primary/[0.06] px-4 py-3 transition-colors hover:bg-primary/10"
            >
              <span>
                <span className="block font-semibold text-gray-900 dark:text-gray-50">
                  {interpolate(t.today.words.due, { count: review.due })}
                </span>
                {review.tomorrow > 0 && (
                  <span className="block text-xs text-gray-500">{interpolate(t.today.words.tomorrow, { count: review.tomorrow })}</span>
                )}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                {t.today.words.review}
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-0.5">arrow_forward</span>
              </span>
            </Link>
          ) : (
            <p className="flex items-center gap-2 text-sm text-gray-500">
              <span className="material-symbols-outlined icon-fill text-lg text-primary">check_circle</span>
              {review.tomorrow > 0
                ? interpolate(t.today.steps.reviewTomorrow, { count: review.tomorrow })
                : t.today.words.nothingDue}
            </p>
          )}
        </>
      )}
    </section>
  )
}

function MoreTile({ href, icon, title, desc, done }: { href: string; icon: string; title: string; desc: string; done?: boolean }) {
  return (
    <Link href={href} className="group paper paper-hover flex items-center gap-4 p-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <span className="material-symbols-outlined icon-fill">{done ? 'check_circle' : icon}</span>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-gray-900 dark:text-gray-50">{title}</span>
        <span className="block text-sm text-gray-500">{desc}</span>
      </span>
      <span className="material-symbols-outlined text-gray-400 transition-transform group-hover:translate-x-1">arrow_forward</span>
    </Link>
  )
}

function TodaySkeleton() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 h-4 w-24 animate-pulse rounded bg-gray-200/70 dark:bg-gray-800" />
      <div className="mb-3 h-12 w-80 max-w-full animate-pulse rounded-xl bg-gray-200/70 dark:bg-gray-800" />
      <div className="mb-8 h-5 w-96 max-w-full animate-pulse rounded-lg bg-gray-200/70 dark:bg-gray-800" />
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col gap-6">
          <div className="h-56 animate-pulse rounded-3xl bg-gray-200/70 dark:bg-gray-800" />
          <div className="paper h-64 animate-pulse" />
        </div>
        <div className="paper h-[420px] animate-pulse" />
      </div>
    </div>
  )
}
