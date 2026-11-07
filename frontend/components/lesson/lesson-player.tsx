'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useQueryClient } from '@tanstack/react-query'
import { updateLessonProgress } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { cn, interpolate } from '@/lib/utils'
import { stopGerman } from '@/hooks/use-german-speech'
import type { TranslationsType } from '@/lib/translations'
import type { AnswerResult, LessonContent, Step } from '@/types/lesson'
import { TeachingStep } from './teaching-step'
import { ExerciseView } from './exercise-view'
import { SpeakTask } from './speak-task'
import { WriteTask } from './write-task'

interface LessonPlayerProps {
  lessonId: string
  lessonTitle: string
  courseId: string
  level?: string
  content: LessonContent
  nextLessonId?: string
  t: TranslationsType
}

type Phase = keyof TranslationsType['player']['phases']

const phaseOf = (step: Step, isRetry: boolean): Phase =>
  step.type === 'exercise' ? (step.graded ? 'test' : isRetry ? 'retry' : 'practice') : step.type

const PHASE_ICON: Record<Phase, string> = {
  intro: 'flag',
  vocab: 'dictionary',
  dialogue: 'forum',
  reading: 'menu_book',
  listening: 'headphones',
  explain: 'school',
  pron: 'record_voice_over',
  culture: 'travel_explore',
  practice: 'edit_note',
  test: 'quiz',
  retry: 'replay',
  speak: 'mic',
  write: 'edit',
  summary: 'task_alt',
}

/** A practice item that was answered wrong comes back at most this many times */
const MAX_RETRIES = 2

const isPractice = (step: Step | undefined) => step?.type === 'exercise' && !step.graded

export function LessonPlayer({ lessonId, lessonTitle, courseId, level, content, nextLessonId, t }: LessonPlayerProps) {
  const { token, updateUser } = useAuthStore()
  const queryClient = useQueryClient()
  const steps = content.steps

  // queue = the order in which steps are shown (missed practice items get re-inserted)
  const [queue, setQueue] = useState<number[]>(() => steps.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [results, setResults] = useState<Record<number, AnswerResult>>({})
  const [pendingRetry, setPendingRetry] = useState<number[]>([])
  const [retryCount, setRetryCount] = useState<Record<number, number>>({})
  const [finished, setFinished] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveFailed, setSaveFailed] = useState(false)
  const [saved, setSaved] = useState<{ xpEarned: number; isFirstCompletion: boolean; wordsAdded: number } | null>(null)

  // What Enter does right now, tagged with the step that set it: a step that is still
  // animating out must not clear the action of the step that replaced it
  const actionRef = useRef<{ owner: string; action: () => void } | null>(null)
  const registerAction = useCallback((owner: string, action: (() => void) | null) => {
    if (action) actionRef.current = { owner, action }
    else if (actionRef.current?.owner === owner) actionRef.current = null
  }, [])

  const stepIndex = queue[pos]
  const step = steps[stepIndex]
  const isRetry = queue.indexOf(stepIndex) !== pos

  const gradedTotal = useMemo(() => steps.filter((s) => s.type === 'exercise' && s.graded).length, [steps])
  const score = Object.entries(results).filter(([p, r]) => {
    const s = steps[queue[Number(p)]]
    return s?.type === 'exercise' && s.graded && r.correct
  }).length

  // Exercises answered wrong at least once: their words come back in the review
  const missed = useMemo(
    () => [...new Set(Object.entries(results).filter(([, r]) => !r.correct).map(([p]) => queue[Number(p)]))],
    [results, queue]
  )

  const save = useCallback(async () => {
    if (!token) return
    setSaving(true)
    setSaveFailed(false)
    try {
      const response = await updateLessonProgress({ lessonId, courseId, score, missed }, token)
      setSaved({ xpEarned: response.xpEarned, isFirstCompletion: response.isFirstCompletion, wordsAdded: response.wordsAdded ?? 0 })
      if (response.user) updateUser(response.user)
      queryClient.invalidateQueries({ queryKey: ['lessons', courseId] })
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      queryClient.invalidateQueries({ queryKey: ['course', courseId] })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    } catch (error) {
      console.error('Failed to update progress', error)
      setSaveFailed(true)
    } finally {
      setSaving(false)
    }
  }, [token, lessonId, courseId, score, missed, updateUser, queryClient])

  const advance = useCallback(() => {
    stopGerman()
    const next = pos + 1
    let q = queue
    // End of a practice block: bring back the items the learner got wrong
    if (pendingRetry.length && !isPractice(steps[q[next]])) {
      q = [...q.slice(0, next), ...pendingRetry, ...q.slice(next)]
      setQueue(q)
      setPendingRetry([])
    }
    if (next >= q.length) {
      setFinished(true)
      save()
      return
    }
    setPos(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pos, queue, pendingRetry, steps, save])

  const goBack = () => {
    stopGerman()
    if (pos > 0) setPos(pos - 1)
  }

  const onCheck = (result: AnswerResult) => {
    setResults((r) => ({ ...r, [pos]: result }))
    if (!result.correct && step.type === 'exercise' && !step.graded && (retryCount[stepIndex] ?? 0) < MAX_RETRIES) {
      setPendingRetry((p) => [...p, stepIndex])
      setRetryCount((c) => ({ ...c, [stepIndex]: (c[stepIndex] ?? 0) + 1 }))
    }
  }

  // Teaching steps: Enter continues
  useEffect(() => {
    if (!step || step.type === 'exercise') return
    const owner = `step-${pos}`
    registerAction(owner, advance)
    return () => registerAction(owner, null)
  }, [step, pos, advance, registerAction])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' || e.repeat || finished) return
      const target = e.target as HTMLElement
      // Free-writing boxes keep Enter for new lines
      if (target.tagName === 'TEXTAREA' && !target.hasAttribute('data-enter-submits')) return
      const current = actionRef.current
      if (current) {
        // Also stops a focused button from clicking itself
        e.preventDefault()
        current.action()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [finished])

  useEffect(() => () => stopGerman(), [])

  if (finished) {
    const percentage = gradedTotal ? Math.round((score / gradedTotal) * 100) : 100
    const isPerfect = percentage === 100
    return (
      <div className="mx-auto max-w-xl py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="paper relative overflow-hidden p-8 text-center sm:p-10"
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
            className={cn('relative mx-auto mb-6 flex size-24 items-center justify-center rounded-full', isPerfect ? 'bg-saffron text-ink' : 'bg-primary text-white')}
          >
            <span className="material-symbols-outlined icon-fill text-5xl">{isPerfect ? 'workspace_premium' : 'task_alt'}</span>
          </motion.div>

          <p className="eyebrow mb-2">{lessonTitle}</p>
          <h1 className="text-4xl text-gray-900 dark:text-gray-50">{isPerfect ? t.lesson.perfectScore : t.lesson.lessonComplete}</h1>

          <div className="mt-8 grid grid-cols-3 divide-x divide-dashed divide-gray-300 overflow-hidden rounded-2xl border border-gray-200 dark:divide-gray-700 dark:border-gray-800">
            <div className="py-4">
              <p className="font-display text-3xl tabular-nums text-gray-900 dark:text-gray-50">
                {score}/{gradedTotal}
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-500">{t.player.testScore}</p>
            </div>
            <div className="py-4">
              <p className="font-display text-3xl tabular-nums text-gray-900 dark:text-gray-50">{percentage}%</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">{t.lesson.score}</p>
            </div>
            <div className="bg-saffron-50 py-4 dark:bg-saffron/10">
              {saving || (!saved && !saveFailed) ? (
                <div className="flex h-9 items-center justify-center">
                  <div className="size-5 animate-spin rounded-full border-2 border-saffron border-t-transparent" />
                </div>
              ) : (
                <p className="font-display text-3xl tabular-nums text-saffron-dark dark:text-saffron">
                  {saved ? interpolate(t.lesson.xpEarned, { xp: saved.xpEarned }) : '—'}
                </p>
              )}
              <p className="text-xs uppercase tracking-wider text-gray-500">XP</p>
            </div>
          </div>

          {content.goals.length > 0 && (
            <div className="mt-6 rounded-2xl bg-primary-50 p-4 text-left dark:bg-primary/10">
              <p className="eyebrow mb-2">{t.player.canDo}</p>
              <ul className="space-y-1.5 text-sm text-gray-800 dark:text-gray-200">
                {content.goals.map((g, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="material-symbols-outlined icon-fill text-base text-primary">check_circle</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {saveFailed && (
            <div role="alert" className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-clay/30 bg-clay-50 p-4 text-left dark:bg-clay/15 sm:flex-row">
              <p className="text-sm text-clay-dark dark:text-clay-light">{t.lesson.saveProgressFailed}</p>
              <button onClick={save} className="btn-primary !bg-clay !py-2 text-sm">
                {t.lesson.retrySave}
              </button>
            </div>
          )}

          {saved && saved.wordsAdded > 0 && (
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="material-symbols-outlined icon-fill text-lg text-primary">psychology</span>
              {interpolate(t.lesson.wordsAdded, { count: saved.wordsAdded })}
            </p>
          )}

          {saved && saved.xpEarned === 0 && !saved.isFirstCompletion && (
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">{t.lesson.noNewXP}</p>
          )}

          <div className="mt-8 flex flex-col-reverse justify-center gap-3 sm:flex-row">
            <Link href={`/courses/${courseId}`} className="btn-ghost">
              {t.lesson.backToCourse}
            </Link>
            {nextLessonId ? (
              <Link href={`/courses/${courseId}/lessons/${nextLessonId}`} className="btn-stamp">
                {t.lesson.nextLesson}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            ) : (
              <Link href={`/courses`} className="btn-stamp">
                {t.lesson.exploreMore}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  if (!step) {
    return (
      <div className="paper mx-auto max-w-xl px-6 py-14 text-center">
        <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-700">hourglass_empty</span>
        <p className="mt-3 text-gray-500">{t.lesson.noExercises}</p>
        <Link href={`/courses/${courseId}`} className="btn-primary mt-6">
          {t.lesson.backToCourse}
        </Link>
      </div>
    )
  }

  const phase = phaseOf(step, isRetry)
  const progress = ((pos + 1) / queue.length) * 100
  const isLast = pos === queue.length - 1 && pendingRetry.length === 0

  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col">
      {/* Header: exit, back, progress */}
      <div className="mb-6 flex items-center gap-3">
        <Link
          href={`/courses/${courseId}`}
          aria-label={t.lesson.backToCourse}
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-200/60 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
        >
          <span className="material-symbols-outlined">close</span>
        </Link>
        <button
          type="button"
          onClick={goBack}
          disabled={pos === 0}
          aria-label={t.player.back}
          title={t.player.back}
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition-colors hover:bg-gray-200/60 hover:text-gray-900 disabled:opacity-30 dark:hover:bg-gray-800 dark:hover:text-gray-100"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800" role="progressbar" aria-valuenow={pos + 1} aria-valuemin={1} aria-valuemax={queue.length}>
          <motion.div className="h-full rounded-full bg-primary" animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} />
        </div>
        <span className="font-display text-sm tabular-nums text-gray-500">
          {pos + 1}/{queue.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={pos}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col"
        >
          <p
            className={cn(
              'mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
              phase === 'test' ? 'bg-ink text-saffron' : phase === 'retry' ? 'bg-clay/15 text-clay-dark dark:text-clay-light' : 'bg-primary/10 text-primary dark:text-primary-light'
            )}
          >
            <span className="material-symbols-outlined text-sm">{PHASE_ICON[phase]}</span>
            {t.player.phases[phase]}
          </p>

          {step.type === 'exercise' ? (
            <ExerciseView
              exercise={step.exercise}
              graded={step.graded}
              isRetry={isRetry}
              result={results[pos]}
              onCheck={onCheck}
              onContinue={advance}
              registerAction={registerAction}
              t={t}
            />
          ) : (
            <>
              <h1 className="mb-6 text-3xl text-gray-900 text-balance dark:text-gray-50 sm:text-4xl">{step.title}</h1>
              <div className="flex-1">
                {step.type === 'speak' ? (
                  <SpeakTask text={step.text} model={step.model} t={t} />
                ) : step.type === 'write' ? (
                  <WriteTask text={step.text} points={step.points} model={step.model} minWords={step.minWords} level={level} t={t} />
                ) : (
                  <TeachingStep step={step} t={t} />
                )}
              </div>
              <div className="sticky bottom-0 mt-10 pb-2">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-background-light/90 p-3 pl-5 backdrop-blur dark:border-gray-800 dark:bg-background-dark/90">
                  <span className="hidden text-xs text-gray-500 sm:inline">
                    <kbd className="rounded border border-gray-300 px-1.5 py-0.5 font-sans dark:border-gray-700">Enter ↵</kbd>
                  </span>
                  <button type="button" onClick={advance} className="btn-stamp w-full sm:w-auto sm:min-w-48">
                    {isLast ? t.player.finish : t.lesson.continue}
                    <span className="material-symbols-outlined">{isLast ? 'flag' : 'arrow_forward'}</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  )
}
