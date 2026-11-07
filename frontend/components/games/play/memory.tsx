'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import { useGermanSpeech } from '@/hooks/use-german-speech'
import type { BankWord } from '@/types/games'
import { pickWords, shuffle } from '../engine'
import { sfx } from '../sfx'
import { FloatingPoints, Hud } from '../ui'
import { useElapsed } from '../use-round'
import type { GameProps } from './types'

const PAIRS = 6

interface Card {
  id: number
  word: BankWord
  side: 'de' | 'dar'
}

export default function MemoryGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const { speak } = useGermanSpeech()
  const [cards] = useState<Card[]>(() => {
    // Distinct meanings, so every pair has exactly one match
    const words = Array.from(new Map(pickWords(bank, PAIRS * 2).map((w) => [w.dar, w])).values()).slice(0, PAIRS)
    return shuffle(words.flatMap((word, i) => [
      { id: i * 2, word, side: 'de' as const },
      { id: i * 2 + 1, word, side: 'dar' as const },
    ]))
  })
  const [open, setOpen] = useState<number[]>([])
  const [solved, setSolved] = useState<Set<string>>(new Set())
  const [moves, setMoves] = useState(0)
  const [done, setDone] = useState(false)
  const elapsed = useElapsed(!done)
  const busy = useRef(false)
  const pairs = cards.length / 2

  useEffect(() => {
    if (solved.size === pairs && pairs > 0 && !done) {
      setDone(true)
      // Finishing fast earns a time bonus
      round.bonus(Math.max(0, 300 - elapsed * 4))
      setTimeout(finish, 900)
    }
  }, [solved, pairs, done, elapsed, round, finish])

  const flip = (card: Card) => {
    if (busy.current || open.includes(card.id) || solved.has(card.word.de)) return
    sfx.flip()
    if (card.side === 'de') speak(card.word.de)
    const nowOpen = [...open, card.id]
    setOpen(nowOpen)
    if (nowOpen.length < 2) return

    setMoves((m) => m + 1)
    const [a, b] = nowOpen.map((id) => cards.find((c) => c.id === id)!)
    busy.current = true
    if (a.word.de === b.word.de) {
      round.hit(20, a.word.de)
      setTimeout(() => {
        setSolved((s) => new Set(s).add(a.word.de))
        setOpen([])
        busy.current = false
      }, 450)
    } else {
      round.miss()
      setTimeout(() => {
        setOpen([])
        busy.current = false
      }, 1000)
    }
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: solved.size, total: pairs, done: true }} onQuit={quit} />
      <FloatingPoints event={round.event} />
      <div className="mb-4 flex justify-between text-sm text-gray-500">
        <span>{t.games.findPairs}</span>
        <span className="tabular-nums">
          {t.games.moves}: {moves} · {t.games.time}: {elapsed}s
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {cards.map((card) => {
          const faceUp = open.includes(card.id) || solved.has(card.word.de)
          const isSolved = solved.has(card.word.de)
          return (
            <button key={card.id} onClick={() => flip(card)} className="aspect-[4/5] [perspective:800px]" aria-label={faceUp ? (card.side === 'de' ? card.word.de : card.word.dar) : '?'}>
              <motion.div
                animate={{ rotateY: faceUp ? 180 : 0 }}
                transition={{ duration: 0.35 }}
                className="relative h-full w-full [transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-paper [backface-visibility:hidden]" style={{ background: 'linear-gradient(135deg, #E0457B, #FF5C4D)' }}>
                  <span className="material-symbols-outlined text-4xl text-white/70">style</span>
                </div>
                <div
                  className={cn(
                    'absolute inset-0 flex items-center justify-center rounded-2xl border-2 p-2 text-center text-sm font-semibold shadow-paper [backface-visibility:hidden] [transform:rotateY(180deg)] sm:text-base',
                    isSolved ? 'border-primary bg-primary-50 text-primary-dark dark:bg-primary/15 dark:text-primary-light' : 'border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50',
                    card.side === 'dar' && !isSolved && 'text-tile dark:text-tile'
                  )}
                >
                  {card.side === 'de' ? card.word.de : card.word.dar}
                </div>
              </motion.div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
