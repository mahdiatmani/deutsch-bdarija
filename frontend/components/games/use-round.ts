'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { RoundResult } from '@/types/games'
import { multiplierFor } from './engine'
import { sfx } from './sfx'

/** Something to show as a floating "+20" or a combo banner */
export interface RoundEvent {
  id: number
  kind: 'hit' | 'miss' | 'combo'
  points: number
  combo: number
}

interface Item {
  de: string
  dar: string
}

/**
 * Score, combo and the answer log of one round. Every right answer in a row raises the
 * combo; each 5 in a row raises the multiplier (x2, x3, x4). A mistake resets the combo,
 * but never takes points away: wrong answers stay low-stakes.
 */
export function useRound() {
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [event, setEvent] = useState<RoundEvent | null>(null)
  const state = useRef({ score: 0, combo: 0, bestCombo: 0, correct: 0, total: 0, eventId: 0 })
  const answers = useRef<RoundResult['answers']>([])
  const mistakes = useRef<RoundResult['mistakes']>([])

  /** A right answer worth `base` points (before the multiplier). `word` feeds the spaced repetition. */
  const hit = useCallback((base = 10, word?: string) => {
    const s = state.current
    const multiplier = multiplierFor(s.combo)
    const points = Math.round(base * multiplier)
    s.combo += 1
    s.bestCombo = Math.max(s.bestCombo, s.combo)
    s.score += points
    s.correct += 1
    s.total += 1
    if (word) answers.current.push({ word, correct: true })
    setScore(s.score)
    setCombo(s.combo)
    const levelUp = s.combo % 5 === 0 && s.combo <= 15
    if (levelUp) sfx.combo()
    else sfx.correct(s.combo)
    setEvent({ id: ++s.eventId, kind: levelUp ? 'combo' : 'hit', points, combo: s.combo })
    return points
  }, [])

  /** A wrong (or missed) answer; `item` is shown with its right answer at the end */
  const miss = useCallback((item?: Item, given?: string, word?: string) => {
    const s = state.current
    s.combo = 0
    s.total += 1
    if (word ?? item?.de) answers.current.push({ word: word ?? item!.de, correct: false })
    if (item && !mistakes.current.some((m) => m.de === item.de)) mistakes.current.push({ de: item.de, dar: item.dar, given })
    setCombo(0)
    sfx.wrong()
    setEvent({ id: ++s.eventId, kind: 'miss', points: 0, combo: 0 })
  }, [])

  /** Points that are not an answer (time bonus, finishing a board) */
  const bonus = useCallback((points: number) => {
    state.current.score += Math.max(0, Math.round(points))
    setScore(state.current.score)
  }, [])

  /** Override the score entirely (games whose score is computed at the end) */
  const setFinalScore = useCallback((points: number) => {
    state.current.score = Math.max(0, Math.round(points))
    setScore(state.current.score)
  }, [])

  /** A word seen and solved without a choice (memory pairs): counts for repetition and accuracy */
  const record = useCallback((word: string, correct: boolean) => {
    answers.current.push({ word, correct })
    state.current.total += 1
    if (correct) state.current.correct += 1
  }, [])

  const result = useCallback(
    (): RoundResult => ({
      score: state.current.score,
      correct: state.current.correct,
      total: state.current.total,
      bestCombo: state.current.bestCombo,
      answers: answers.current.slice(0, 300),
      mistakes: mistakes.current,
    }),
    []
  )

  return { score, combo, multiplier: multiplierFor(combo), event, hit, miss, bonus, setFinalScore, record, result }
}

export type Round = ReturnType<typeof useRound>

/** Countdown in seconds; calls onEnd once when it reaches 0. Ticks in the last 5 seconds. */
export function useTimer(seconds: number, onEnd: () => void, running = true) {
  const [left, setLeft] = useState(seconds)
  const end = useRef(onEnd)
  end.current = onEnd

  useEffect(() => {
    if (!running) return
    const deadline = Date.now() + left * 1000
    let shown = left
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000))
      if (remaining !== shown) {
        shown = remaining
        if (remaining > 0 && remaining <= 5) sfx.tick()
        setLeft(remaining)
      }
      if (remaining <= 0) {
        clearInterval(id)
        end.current()
      }
    }, 200)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

  return left
}

/** Seconds since the round started */
export function useElapsed(running = true) {
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    if (!running) return
    const start = Date.now() - elapsed * 1000
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - start) / 1000)), 500)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])
  return elapsed
}
