'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn, interpolate } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import { useGermanSpeech } from '@/hooks/use-german-speech'
import { sfx } from '../sfx'
import { Hud } from '../ui'
import type { GameProps } from './types'

const TRIES = 6
const LENGTH = 5
const KEYS = ['QWERTZUIOPÜ', 'ASDFGHJKLÖÄ', '⏎YXCVBNM⌫']
type Mark = 'right' | 'present' | 'absent'

/** Wordle colors, handling repeated letters like the original */
function marks(guess: string, target: string): Mark[] {
  const result: Mark[] = Array(LENGTH).fill('absent')
  const left: Record<string, number> = {}
  for (let i = 0; i < LENGTH; i++) {
    if (guess[i] === target[i]) result[i] = 'right'
    else left[target[i]] = (left[target[i]] ?? 0) + 1
  }
  for (let i = 0; i < LENGTH; i++) {
    if (result[i] !== 'right' && left[guess[i]]) {
      result[i] = 'present'
      left[guess[i]]--
    }
  }
  return result
}

const storageKey = (date: string) => `wortle-${date}`

export default function WortleGame({ stats, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const { speak } = useGermanSpeech()
  const target = stats.wortle.word
  const [guesses, setGuesses] = useState<string[]>([])
  const [typing, setTyping] = useState('')
  const [shake, setShake] = useState(false)
  const [copied, setCopied] = useState(false)
  // Already played today (reopened): nothing new to save
  const [restored, setRestored] = useState(false)
  const solved = guesses.includes(target)
  const over = solved || guesses.length >= TRIES

  // Today's progress survives a reload
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(stats.daily.date)) ?? '[]')
      if (!Array.isArray(saved)) return
      const valid = saved.filter((g) => typeof g === 'string' && g.length === LENGTH)
      setGuesses(valid)
      if (valid.includes(target) || valid.length >= TRIES) setRestored(true)
    } catch {
      // No saved game
    }
  }, [stats.daily.date, target])

  const submit = useCallback(() => {
    if (over) return
    if (typing.length !== LENGTH) {
      setShake(true)
      setTimeout(() => setShake(false), 400)
      return
    }
    const next = [...guesses, typing]
    setGuesses(next)
    setTyping('')
    try {
      localStorage.setItem(storageKey(stats.daily.date), JSON.stringify(next))
    } catch {
      // Progress just isn't kept
    }
    const won = typing === target
    if (won || next.length >= TRIES) {
      if (won) {
        round.hit(0, stats.wortle.de)
        round.setFinalScore((TRIES + 1 - next.length) * 100)
      } else {
        round.miss({ de: stats.wortle.de, dar: stats.wortle.dar }, undefined, stats.wortle.de)
      }
      setTimeout(() => speak(stats.wortle.de), 600)
    } else {
      sfx.flip()
    }
  }, [over, typing, guesses, target, stats, round, speak])

  const press = useCallback(
    (key: string) => {
      if (over) return
      if (key === '⏎' || key === 'ENTER') return submit()
      if (key === '⌫' || key === 'BACKSPACE') return setTyping((v) => v.slice(0, -1))
      if (/^[A-ZÄÖÜ]$/.test(key)) setTyping((v) => (v.length < LENGTH ? v + key : v))
    },
    [over, submit]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      press(e.key.toUpperCase())
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [press])

  // Best color per letter for the keyboard
  const keyMarks: Record<string, Mark> = {}
  for (const g of guesses) {
    marks(g, target).forEach((m, i) => {
      const prev = keyMarks[g[i]]
      if (prev === 'right' || (prev === 'present' && m === 'absent')) return
      keyMarks[g[i]] = m
    })
  }

  const share = async () => {
    const grid = guesses
      .map((g) => marks(g, target).map((m) => (m === 'right' ? '🟩' : m === 'present' ? '🟨' : '⬛')).join(''))
      .join('\n')
    const text = `Wörtle ${stats.daily.date} ${solved ? guesses.length : 'X'}/${TRIES}\n${grid}\nDeutsch B'Darija`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked
    }
  }

  const color: Record<Mark, string> = {
    right: 'border-[#16A34A] bg-[#16A34A] text-white',
    present: 'border-saffron bg-saffron text-ink',
    absent: 'border-gray-400 bg-gray-400 text-white dark:border-gray-600 dark:bg-gray-600',
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: guesses.length, total: TRIES }} onQuit={quit} />

      <div className="mx-auto mb-6 grid w-fit gap-1.5">
        {Array.from({ length: TRIES }, (_, row) => {
          const guess = guesses[row]
          const live = row === guesses.length && !over
          const letters = guess ?? (live ? typing : '')
          const rowMarks = guess ? marks(guess, target) : null
          return (
            <div key={row} className={cn('grid grid-cols-5 gap-1.5', live && shake && 'animate-shake')}>
              {Array.from({ length: LENGTH }, (_, i) => (
                <motion.div
                  key={`${row}-${i}-${guess ? 'done' : 'open'}`}
                  initial={rowMarks ? { rotateX: 90 } : false}
                  animate={{ rotateX: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.25 }}
                  className={cn(
                    'flex size-14 items-center justify-center rounded-lg border-2 font-display text-2xl uppercase sm:size-16',
                    rowMarks ? color[rowMarks[i]] : letters[i] ? 'border-gray-500 text-gray-900 dark:text-gray-50' : 'border-gray-200 dark:border-gray-800'
                  )}
                >
                  {letters[i] ?? ''}
                </motion.div>
              ))}
            </div>
          )
        })}
      </div>

      {over ? (
        <div className="paper mb-4 p-6 text-center">
          <p className="font-display text-2xl text-gray-900 dark:text-gray-50">
            {solved ? interpolate(t.games.wortleSolved, { n: guesses.length }) : t.games.wortleFailed}
          </p>
          <p className="mt-2 text-xl">
            <button onClick={() => speak(stats.wortle.de)} className="inline-flex items-center gap-1 font-semibold text-[#16A34A]">
              {stats.wortle.de}
              <span className="material-symbols-outlined text-xl">volume_up</span>
            </button>
            <span className="text-gray-500"> = {stats.wortle.dar}</span>
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button onClick={share} className="btn-ghost flex items-center gap-1 !py-2">
              <span className="material-symbols-outlined text-lg">{copied ? 'check' : 'share'}</span>
              {copied ? t.games.copied : t.games.share}
            </button>
            <button onClick={restored ? quit : finish} className="btn-stamp !py-2">
              {t.games.next}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-lg space-y-1.5">
          {KEYS.map((row) => (
            <div key={row} className="flex justify-center gap-1">
              {Array.from(row).map((key) => (
                <button
                  key={key}
                  onClick={() => press(key)}
                  className={cn(
                    'flex h-12 min-w-0 flex-1 items-center justify-center rounded-md text-sm font-bold transition active:scale-95 sm:text-base',
                    (key === '⏎' || key === '⌫') && 'flex-[1.6]',
                    keyMarks[key] ? color[keyMarks[key]] : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50'
                  )}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
