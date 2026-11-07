'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface OrderExerciseProps {
  /** Tiles in the correct order */
  words: string[]
  onChange: (sentence: string[] | null) => void
  disabled: boolean
  /** Tiles to show as already placed (when revisiting an answered exercise) */
  initial?: string[]
  hint: string
}

function shuffled(words: string[]): number[] {
  const idx = words.map((_, i) => i)
  // Re-shuffle until the order differs from the solution (when that is possible)
  for (let tries = 0; tries < 10; tries++) {
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[idx[i], idx[j]] = [idx[j], idx[i]]
    }
    if (idx.some((v, i) => words[v] !== words[i])) break
  }
  return idx
}

/** Build a sentence by tapping word tiles; tap a placed tile to put it back. */
export function OrderExercise({ words, onChange, disabled, initial, hint }: OrderExerciseProps) {
  const bank = useMemo(() => shuffled(words), [words])
  const [placed, setPlaced] = useState<number[]>(() => {
    if (!initial) return []
    // Map the given words back to tile indices
    const free = [...bank]
    return initial.flatMap((w) => {
      const k = free.findIndex((i) => words[i] === w)
      if (k === -1) return []
      return free.splice(k, 1)
    })
  })

  useEffect(() => {
    onChange(placed.length ? placed.map((i) => words[i]) : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placed])

  const remaining = bank.filter((i) => !placed.includes(i))

  return (
    <div className="space-y-6">
      <div
        className={cn(
          'min-h-[4.5rem] rounded-2xl border-2 border-dashed p-3 flex flex-wrap gap-2 items-start content-start transition-colors',
          placed.length ? 'border-gray-300 dark:border-gray-700' : 'border-gray-200 dark:border-gray-800'
        )}
      >
        {placed.length === 0 && <p className="w-full py-3 text-center text-sm text-gray-400">{hint}</p>}
        {placed.map((i) => (
          <motion.button
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
            key={i}
            type="button"
            disabled={disabled}
            onClick={() => setPlaced((p) => p.filter((x) => x !== i))}
            className="de rounded-xl border-2 border-ink bg-saffron-50 px-3 py-2 text-lg text-gray-900 shadow-stamp-sm disabled:cursor-default dark:border-saffron dark:bg-saffron/10 dark:text-gray-50 dark:shadow-none"
          >
            {words[i]}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {remaining.map((i) => (
          <motion.button
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
            key={i}
            type="button"
            disabled={disabled}
            onClick={() => setPlaced((p) => [...p, i])}
            className="de rounded-xl border-2 border-gray-200 bg-surface-light px-3 py-2 text-lg text-gray-900 hover:border-gray-400 disabled:opacity-50 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50"
          >
            {words[i]}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
