'use client'

import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

interface MatchingExerciseProps {
  /** German words, in their canonical order */
  left: string[]
  /** Translations; right[i] is the correct match for left[i] */
  right: string[]
  /** Called with the chosen translation for each left item once all are paired, else null */
  onChange: (answer: string[] | null) => void
  /** After checking: show which pairs are right or wrong */
  revealed: boolean
}

const PAIR_COLORS = [
  'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
  'border-purple-500 bg-purple-50 dark:bg-purple-900/20',
  'border-amber-500 bg-amber-50 dark:bg-amber-900/20',
  'border-pink-500 bg-pink-50 dark:bg-pink-900/20',
  'border-teal-500 bg-teal-50 dark:bg-teal-900/20',
  'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20',
]

function shuffle<T extends { index: number }>(items: T[]): T[] {
  let copy = [...items]
  // Re-shuffle until no translation sits next to its own word (when possible)
  for (let tries = 0; tries < 20; tries++) {
    copy = [...items]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    if (copy.every((item, pos) => item.index !== pos)) break
  }
  return copy
}

/** Tap a word on the left, then its translation on the right. Tap a paired word to undo. */
export function MatchingExercise({ left, right, onChange, revealed }: MatchingExerciseProps) {
  const shuffledRight = useMemo(() => shuffle(right.map((text, index) => ({ text, index }))), [right])
  // pairs[leftIndex] = index into `right` (the original order), or undefined
  const [pairs, setPairs] = useState<(number | undefined)[]>(() => left.map(() => undefined))
  const [activeLeft, setActiveLeft] = useState<number | null>(0)

  useEffect(() => {
    const complete = pairs.length === left.length && pairs.every((p) => p !== undefined)
    onChange(complete ? pairs.map((p) => right[p!]) : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pairs])

  const pairIndexOfRight = (rightIndex: number) => pairs.findIndex((p) => p === rightIndex)

  const selectLeft = (i: number) => {
    if (revealed) return
    if (pairs[i] !== undefined) {
      setPairs((prev) => prev.map((p, idx) => (idx === i ? undefined : p)))
    }
    setActiveLeft(i)
  }

  const selectRight = (rightIndex: number) => {
    if (revealed) return
    const pairedLeft = pairIndexOfRight(rightIndex)
    if (pairedLeft !== -1) {
      // Undo an existing pair and let the user re-pick for that word
      setPairs((prev) => prev.map((p, idx) => (idx === pairedLeft ? undefined : p)))
      setActiveLeft(pairedLeft)
      return
    }
    if (activeLeft === null) return
    const next = pairs.map((p, idx) => (idx === activeLeft ? rightIndex : p))
    setPairs(next)
    const nextEmpty = next.findIndex((p) => p === undefined)
    setActiveLeft(nextEmpty === -1 ? null : nextEmpty)
  }

  const itemClass = (state: 'idle' | 'active' | 'paired' | 'correct' | 'wrong', pairIndex: number) =>
    cn(
      'w-full p-3 rounded-xl border-2 text-left font-medium transition-all',
      state === 'idle' && 'border-gray-200 dark:border-gray-700 hover:border-primary/50 text-gray-900 dark:text-white',
      state === 'active' && 'border-primary bg-primary/10 text-gray-900 dark:text-white ring-2 ring-primary/30',
      state === 'paired' && cn(PAIR_COLORS[pairIndex % PAIR_COLORS.length], 'text-gray-900 dark:text-white'),
      state === 'correct' && 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300',
      state === 'wrong' && 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
    )

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6">
      <div className="space-y-3">
        {left.map((word, i) => {
          const paired = pairs[i] !== undefined
          const state = revealed
            ? pairs[i] === i ? 'correct' : 'wrong'
            : activeLeft === i ? 'active' : paired ? 'paired' : 'idle'
          return (
            <button key={word} type="button" onClick={() => selectLeft(i)} disabled={revealed} className={itemClass(state, i)}>
              {word}
            </button>
          )
        })}
      </div>
      <div className="space-y-3">
        {shuffledRight.map(({ text, index }) => {
          const pairedLeft = pairIndexOfRight(index)
          const state = revealed
            ? pairedLeft === index ? 'correct' : 'wrong'
            : pairedLeft !== -1 ? 'paired' : 'idle'
          return (
            <button key={text} type="button" onClick={() => selectRight(index)} disabled={revealed} className={itemClass(state, pairedLeft)}>
              {text}
              {revealed && pairedLeft !== index && (
                <span className="block text-xs font-normal opacity-80">→ {left[index]}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
