'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn, interpolate } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import type { BankWord } from '@/types/games'
import { scramble, wordStream } from '../engine'
import { isSingleWord } from '../registry'
import { FloatingPoints, Hud } from '../ui'
import { useTimer } from '../use-round'
import type { GameProps } from './types'

const SECONDS = 90

const targetOf = (w: BankWord) => (w.noun ?? w.de).toUpperCase()

export default function ScrambleGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const next = useRef(wordStream(bank, isSingleWord)).current
  const [word, setWord] = useState<BankWord>(() => next())
  const [tiles, setTiles] = useState(() => scramble(targetOf(word)))
  const [chosen, setChosen] = useState<number[]>([])
  const [hints, setHints] = useState(0)
  const [feedback, setFeedback] = useState<'right' | 'wrong' | null>(null)
  const locked = useRef(false)
  const timeLeft = useTimer(SECONDS, finish)
  const target = targetOf(word)

  const nextWord = useCallback(() => {
    const w = next()
    setWord(w)
    setTiles(scramble(targetOf(w)))
    setChosen([])
    setHints(0)
    setFeedback(null)
    locked.current = false
  }, [next])

  // Check when every letter is placed
  useEffect(() => {
    if (chosen.length !== target.length || locked.current) return
    const guess = chosen.map((i) => tiles[i]).join('')
    if (guess === target) {
      locked.current = true
      setFeedback('right')
      round.hit(Math.max(5, 10 + target.length * 2 - hints * 5), word.de)
      setTimeout(nextWord, 700)
    } else {
      setFeedback('wrong')
      setTimeout(() => {
        setFeedback(null)
        setChosen([])
      }, 500)
    }
  }, [chosen, target, tiles, hints, round, word, nextWord])

  const pick = useCallback(
    (i: number) => {
      if (locked.current || chosen.includes(i) || chosen.length >= target.length) return
      setChosen((c) => [...c, i])
    },
    [chosen, target.length]
  )

  const hint = () => {
    if (locked.current) return
    // Keep the right beginning, then place the next right letter
    let keep = 0
    while (keep < chosen.length && tiles[chosen[keep]] === target[keep]) keep++
    const kept = chosen.slice(0, keep)
    const tile = tiles.findIndex((l, i) => l === target[keep] && !kept.includes(i))
    if (tile < 0) return
    setHints((h) => h + 1)
    setChosen([...kept, tile])
  }

  const skip = () => {
    if (locked.current) return
    locked.current = true
    round.miss(word, chosen.map((i) => tiles[i]).join(''))
    setFeedback('wrong')
    // Show the answer: each letter of the word on its own tile
    const solution: number[] = []
    for (const letter of target) solution.push(tiles.findIndex((l, i) => l === letter && !solution.includes(i)))
    setChosen(solution)
    setTimeout(nextWord, 1200)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') return setChosen((c) => c.slice(0, -1))
      if (e.key.length !== 1) return
      const letter = e.key.toUpperCase()
      const i = tiles.findIndex((l, idx) => l === letter && !chosen.includes(idx))
      if (i >= 0) pick(i)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tiles, chosen, pick])

  return (
    <div className="relative">
      <Hud round={round} timeLeft={timeLeft} totalTime={SECONDS} onQuit={quit} />
      <FloatingPoints event={round.event} />

      <div className="paper mb-6 px-4 py-6 text-center">
        <p className="eyebrow mb-2">{t.games.unscramble}</p>
        <p className="mb-5 text-xl text-gray-700 dark:text-gray-200">
          {word.article && <span className="mr-2 rounded-md bg-gray-100 px-2 py-0.5 font-semibold dark:bg-gray-800">{word.article}</span>}
          {word.dar}
        </p>
        <div className={cn('flex flex-wrap justify-center gap-1.5', feedback === 'wrong' && 'animate-shake')}>
          {Array.from(target).map((_, pos) => {
            const tileIndex = chosen[pos]
            return (
              <button
                key={pos}
                onClick={() => !locked.current && setChosen((c) => c.slice(0, pos))}
                className={cn(
                  'flex size-11 items-center justify-center rounded-xl border-2 font-display text-xl sm:size-12',
                  tileIndex === undefined && 'border-dashed border-gray-300 dark:border-gray-700',
                  tileIndex !== undefined && !feedback && 'border-saffron bg-saffron-50 text-ink dark:bg-saffron/15 dark:text-saffron',
                  feedback === 'right' && 'animate-pop border-primary bg-primary text-white',
                  feedback === 'wrong' && 'border-clay bg-clay-50 text-clay-dark'
                )}
              >
                {tileIndex !== undefined ? tiles[tileIndex] : ''}
              </button>
            )
          })}
        </div>
        {feedback === 'wrong' && locked.current && (
          <p className="mt-3 text-sm font-semibold text-clay-dark dark:text-clay-light">{interpolate(t.games.answerWas, { answer: word.de })}</p>
        )}
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {tiles.map((letter, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            disabled={chosen.includes(i)}
            className="flex size-12 items-center justify-center rounded-xl bg-saffron font-display text-2xl text-ink shadow-stamp-sm transition active:scale-90 disabled:scale-90 disabled:opacity-20"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        <button onClick={hint} className="btn-ghost flex items-center gap-1 !py-2 text-sm">
          <span className="material-symbols-outlined text-lg">lightbulb</span>
          {t.games.hint}
        </button>
        <button onClick={skip} className="btn-ghost flex items-center gap-1 !py-2 text-sm">
          <span className="material-symbols-outlined text-lg">skip_next</span>
          {t.games.skip}
        </button>
      </div>
    </div>
  )
}
