'use client'

import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { checkAnswer } from '@/lib/answer-check'
import { FormattedMessage, InlineMarkdown } from '@/components/shared/formatted-message'
import type { TranslationsType } from '@/lib/translations'
import type { AnswerResult, Exercise } from '@/types/lesson'
import { AudioButton } from './audio-button'
import { MatchingExercise } from './matching-exercise'
import { OrderExercise } from './order-exercise'

type Value = string | string[] | null

interface ExerciseViewProps {
  exercise: Exercise
  graded: boolean
  isRetry: boolean
  /** Set when this exercise was already answered (e.g. the learner came back to it) */
  result?: AnswerResult
  onCheck: (result: AnswerResult) => void
  onContinue: () => void
  /** The player triggers this on Enter */
  registerAction: (owner: string, action: (() => void) | null) => void
  t: TranslationsType
}

const isReady = (exercise: Exercise, value: Value) => {
  if (value === null) return false
  if (exercise.kind === 'gap') return Array.isArray(value) && value.length === exercise.answers.length && value.every((v) => v.trim())
  if (exercise.kind === 'order') return Array.isArray(value) && value.length === exercise.words.length
  if (Array.isArray(value)) return value.length > 0
  return value.trim().length > 0
}

const fieldClass = (answered: boolean, correct: boolean) =>
  cn(
    'w-full rounded-xl border-2 bg-surface-light px-4 py-3 text-lg text-gray-900 transition-colors focus:outline-none dark:bg-surface-dark dark:text-gray-50',
    answered
      ? correct
        ? 'border-primary'
        : 'border-clay'
      : 'border-gray-300 focus:border-saffron dark:border-gray-700'
  )

export function ExerciseView({ exercise, graded, isRetry, result, onCheck, onContinue, registerAction, t }: ExerciseViewProps) {
  const [value, setValue] = useState<Value>(() => result?.given ?? (exercise.kind === 'gap' ? exercise.answers.map(() => '') : null))
  const answered = !!result
  // Answered before this view mounted: the learner navigated back to it
  const [revisited] = useState(() => !!result)
  // Stable arrays: the matching game shuffles once per new `right` array
  const matchSides = useMemo(
    () => (exercise.kind === 'match' ? { left: exercise.pairs.map((p) => p[0]), right: exercise.pairs.map((p) => p[1]) } : { left: [], right: [] }),
    [exercise]
  )
  const firstInput = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  const check = () => {
    if (answered || !isReady(exercise, value)) return
    onCheck(checkAnswer(exercise, value as string | string[]))
  }

  // Enter = check, then continue
  const owner = useId()
  useEffect(() => {
    registerAction(owner, answered ? onContinue : isReady(exercise, value) ? check : null)
  })
  useEffect(() => () => registerAction(owner, null), [owner, registerAction])

  // Keys 1–4 pick a multiple-choice option
  useEffect(() => {
    if (exercise.kind !== 'choice' || answered) return
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
      const idx = Number(e.key) - 1
      if (Number.isInteger(idx) && idx >= 0 && idx < exercise.options.length) setValue(String(idx))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [exercise, answered])

  useEffect(() => {
    if (!answered) firstInput.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderInput = () => {
    switch (exercise.kind) {
      case 'choice': {
        const chosen = value === null ? -1 : Number(value)
        return (
          <div className="grid gap-3 sm:grid-cols-2">
            {exercise.options.map((option, idx) => {
              const isRight = idx === exercise.answer
              const state = answered
                ? isRight
                  ? 'right'
                  : idx === chosen
                  ? 'wrong'
                  : 'muted'
                : idx === chosen
                ? 'selected'
                : 'idle'
              return (
                <motion.button
                  key={idx}
                  type="button"
                  whileTap={!answered ? { scale: 0.98 } : undefined}
                  onClick={() => !answered && setValue(String(idx))}
                  disabled={answered}
                  className={cn(
                    'flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-all',
                    state === 'idle' && 'border-gray-200 bg-surface-light hover:border-gray-400 dark:border-gray-800 dark:bg-surface-dark dark:hover:border-gray-600',
                    state === 'selected' && 'border-ink bg-saffron-50 shadow-stamp-sm dark:border-saffron dark:bg-saffron/10 dark:shadow-none',
                    state === 'right' && 'border-primary bg-primary-50 dark:bg-primary/15',
                    state === 'wrong' && 'border-clay bg-clay-50 dark:bg-clay/15',
                    state === 'muted' && 'border-gray-200 opacity-50 dark:border-gray-800'
                  )}
                >
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg border text-xs font-bold',
                      state === 'selected' && 'border-ink bg-ink text-saffron dark:border-saffron dark:bg-saffron dark:text-ink',
                      state === 'right' && 'border-primary bg-primary text-white',
                      state === 'wrong' && 'border-clay bg-clay text-white',
                      (state === 'idle' || state === 'muted') && 'border-gray-300 text-gray-500 dark:border-gray-700'
                    )}
                  >
                    {state === 'right' ? (
                      <span className="material-symbols-outlined text-base">check</span>
                    ) : state === 'wrong' ? (
                      <span className="material-symbols-outlined text-base">close</span>
                    ) : (
                      idx + 1
                    )}
                  </span>
                  <span className="text-lg font-medium text-gray-900 dark:text-gray-50">{option}</span>
                </motion.button>
              )
            })}
          </div>
        )
      }

      case 'gap': {
        const parts = exercise.text.split('___')
        const values = (value as string[]) ?? []
        return (
          <div className="rounded-2xl border border-gray-200 bg-surface-light p-5 text-xl leading-[3rem] text-gray-900 dark:border-gray-800 dark:bg-surface-dark dark:text-gray-50">
            {parts.map((part, i) => (
              <Fragment key={i}>
                <span className="whitespace-pre-line">{part}</span>
                {i < parts.length - 1 && (
                  <input
                    ref={i === 0 ? (el) => { firstInput.current = el } : undefined}
                    type="text"
                    value={values[i] ?? ''}
                    disabled={answered}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    onChange={(e) => {
                      const next = [...values]
                      next[i] = e.target.value
                      setValue(next)
                    }}
                    style={{ width: `${Math.max(5, Math.max(...exercise.answers[i].map((a) => a.length)) + 2)}ch` }}
                    className={cn(
                      'de mx-1 inline-block border-0 border-b-2 bg-transparent px-1 text-center focus:outline-none focus:ring-0',
                      answered ? (result?.correct ? 'border-primary text-primary' : 'border-clay text-clay') : 'border-gray-400 focus:border-saffron'
                    )}
                  />
                )}
              </Fragment>
            ))}
            {exercise.dar && <p className="mt-1 text-sm leading-normal text-gray-500">{t.player.meaning}: {exercise.dar}</p>}
          </div>
        )
      }

      case 'order':
        return (
          <div>
            {exercise.dar && <p className="mb-4 text-center text-gray-600 dark:text-gray-400">{t.player.meaning}: {exercise.dar}</p>}
            <OrderExercise
              words={exercise.words}
              onChange={setValue}
              disabled={answered}
              initial={Array.isArray(result?.given) ? (result!.given as string[]) : undefined}
              hint={t.player.orderHint}
            />
          </div>
        )

      case 'match':
        // A revisited match exercise shows the solution instead of re-mounting the game
        return revisited ? (
          <ul className="grid gap-2 sm:grid-cols-2">
            {exercise.pairs.map(([l, r]) => (
              <li key={l} className="rounded-xl border-2 border-primary/40 bg-primary-50 px-4 py-2 dark:bg-primary/10">
                <span className="de">{l}</span> <span className="text-gray-500">→ {r}</span>
              </li>
            ))}
          </ul>
        ) : (
          <MatchingExercise
            left={matchSides.left}
            right={matchSides.right}
            onChange={setValue}
            revealed={answered}
          />
        )

      case 'translate':
        return (
          <div className="space-y-4">
            <div className="rounded-2xl bg-ink p-5 text-center text-lg text-gray-50">{exercise.source}</div>
            <textarea
              ref={(el) => { firstInput.current = el }}
              rows={2}
              value={(value as string) ?? ''}
              disabled={answered}
              autoCapitalize="off"
              spellCheck={false}
              onChange={(e) => setValue(e.target.value)}
              data-enter-submits
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) e.preventDefault()
              }}
              placeholder={t.lesson.typeTranslation}
              className={cn(fieldClass(answered, !!result?.correct), 'de resize-none text-center')}
            />
          </div>
        )

      case 'dictation':
        return (
          <div className="space-y-4">
            <div className="flex justify-center gap-3">
              <AudioButton text={exercise.audio} size="lg" label="▶" />
              <AudioButton text={exercise.audio} rate={0.65} size="md" label={t.player.slow} />
            </div>
            <input
              ref={(el) => { firstInput.current = el }}
              type="text"
              value={(value as string) ?? ''}
              disabled={answered}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t.lesson.typeYourAnswer}
              className={cn(fieldClass(answered, !!result?.correct), 'de text-center')}
            />
          </div>
        )
    }
  }

  const prompt =
    exercise.kind === 'translate' ? exercise.prompt || t.player.translatePrompt : exercise.kind === 'dictation' ? exercise.prompt || t.player.dictationPrompt : exercise.prompt

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex-1">
        {graded && !answered && (
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-saffron">
            <span className="material-symbols-outlined text-sm">quiz</span>
            {t.player.gradedHint}
          </p>
        )}
        <h2 className="mb-6 text-2xl text-gray-900 text-balance dark:text-gray-50 sm:text-3xl">
          <InlineMarkdown content={prompt} />
        </h2>

        {exercise.kind === 'choice' && exercise.audio && (
          <div className="mb-6 flex flex-col items-center gap-3">
            <div className="flex gap-3">
              <AudioButton text={exercise.audio} size="lg" label="▶" />
              <AudioButton text={exercise.audio} rate={0.65} size="md" label={t.player.slow} />
            </div>
            {answered && <p className="de text-center text-lg text-gray-700 dark:text-gray-300">{exercise.audio}</p>}
          </div>
        )}
        {exercise.kind === 'choice' && exercise.de && (
          <div className="mb-6 flex items-center justify-center gap-2 rounded-2xl bg-ink px-6 py-5 text-center">
            <p className="de text-2xl text-saffron sm:text-3xl">{exercise.de}</p>
            <AudioButton text={exercise.de} className="!text-saffron hover:!bg-white/10" />
          </div>
        )}

        {renderInput()}
      </div>

      {/* Action bar / feedback */}
      <div className="sticky bottom-0 mt-8 pb-2">
        <AnimatePresence mode="wait">
          {answered && result ? (
            <motion.div
              key="feedback"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              role="status"
              className={cn(
                'rounded-2xl border-2 p-5 shadow-lift',
                result.correct ? 'border-primary bg-primary-50 dark:bg-[#0F2A20]' : 'border-clay bg-clay-50 dark:bg-[#2E1A12]'
              )}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-start gap-3">
                  <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-full text-white', result.correct ? 'bg-primary' : 'bg-clay')}>
                    <span className="material-symbols-outlined">{result.correct ? 'check' : 'priority_high'}</span>
                  </span>
                  <div className="min-w-0 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <p className={cn('font-display text-xl font-semibold', result.correct ? 'text-primary dark:text-primary-light' : 'text-clay-dark dark:text-clay-light')}>
                      {result.correct ? t.lesson.correctAnswer : t.lesson.notQuiteRight}
                    </p>
                    {result.correct && result.note && <p>{result.note === 'case' ? t.player.caseNote : t.player.spellingNote}</p>}
                    {!result.correct && result.expected && exercise.kind !== 'choice' && (
                      <p>
                        {t.lesson.correctAnswerLabel} <span className="de text-base text-gray-900 dark:text-gray-50">{result.expected}</span>
                      </p>
                    )}
                    {exercise.why && <FormattedMessage content={exercise.why} />}
                    {!result.correct && !graded && !isRetry && <p className="text-xs text-gray-500">{t.player.seeAgainHint}</p>}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onContinue}
                  className={cn('btn-primary shrink-0 sm:min-w-40', !result.correct && '!bg-clay hover:!bg-clay-dark')}
                >
                  {t.lesson.continue}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="check"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200/80 bg-background-light/90 p-3 pl-5 backdrop-blur dark:border-gray-800 dark:bg-background-dark/90"
            >
              <span className="hidden text-xs text-gray-500 sm:inline">
                <kbd className="rounded border border-gray-300 px-1.5 py-0.5 font-sans dark:border-gray-700">Enter ↵</kbd>
              </span>
              <button type="button" onClick={check} disabled={!isReady(exercise, value)} className="btn-stamp w-full sm:w-auto sm:min-w-48">
                {t.lesson.checkAnswer}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
