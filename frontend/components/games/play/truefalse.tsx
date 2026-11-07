'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import type { BankWord } from '@/types/games'
import { distractors, wordStream } from '../engine'
import { FloatingPoints, Hud } from '../ui'
import { useTimer } from '../use-round'
import type { GameProps } from './types'

const SECONDS = 60

interface Card {
  word: BankWord
  shown: string
  isTrue: boolean
}

export default function TrueFalseGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const next = useRef(wordStream(bank)).current
  const deal = useCallback((): Card => {
    const word = next()
    const isTrue = Math.random() < 0.5
    const fake = distractors(word, bank.words, 1)[0]
    return { word, isTrue: isTrue || !fake, shown: isTrue || !fake ? word.dar : fake.dar }
  }, [next, bank.words])
  const [card, setCard] = useState<Card>(deal)
  const [feedback, setFeedback] = useState<'right' | 'wrong' | null>(null)
  const locked = useRef(false)
  const timeLeft = useTimer(SECONDS, finish)

  const answer = useCallback(
    (sayTrue: boolean) => {
      if (locked.current) return
      locked.current = true
      const right = sayTrue === card.isTrue
      setFeedback(right ? 'right' : 'wrong')
      if (right) round.hit(10, card.word.de)
      else round.miss(card.word, card.shown)
      setTimeout(() => {
        setFeedback(null)
        setCard(deal())
        locked.current = false
      }, right ? 220 : 1000)
    },
    [card, round, deal]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') answer(false)
      if (e.key === 'ArrowRight') answer(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [answer])

  return (
    <div className="relative">
      <Hud round={round} timeLeft={timeLeft} totalTime={SECONDS} onQuit={quit} />
      <FloatingPoints event={round.event} />

      <div
        className={cn(
          'paper mb-6 px-6 py-10 text-center transition-colors',
          feedback === 'right' && 'animate-pop !border-primary bg-primary-50 dark:bg-primary/10',
          feedback === 'wrong' && 'animate-shake !border-clay bg-clay-50 dark:bg-clay/10'
        )}
      >
        <p className="eyebrow mb-4">{t.games.isItRight}</p>
        <p className="font-display text-4xl text-gray-900 dark:text-gray-50">{card.word.de}</p>
        <p className="my-3 text-2xl text-gray-400">=</p>
        <p className="font-display text-3xl text-tile">{card.shown}</p>
        {feedback === 'wrong' && !card.isTrue && (
          <p className="mt-4 text-sm font-semibold text-clay-dark dark:text-clay-light">
            {card.word.de} = {card.word.dar}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => answer(false)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-clay py-5 text-xl font-bold text-white shadow-stamp-sm transition active:scale-95"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
          {t.games.wrong}
        </button>
        <button
          onClick={() => answer(true)}
          className="flex items-center justify-center gap-2 rounded-2xl bg-primary py-5 text-xl font-bold text-white shadow-stamp-sm transition active:scale-95"
        >
          <span className="material-symbols-outlined text-3xl">check</span>
          {t.games.right}
        </button>
      </div>
    </div>
  )
}
