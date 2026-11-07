'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import type { BankWord } from '@/types/games'
import { shuffle, wordStream } from '../engine'
import { FloatingPoints, Hud } from '../ui'
import { useTimer } from '../use-round'
import type { GameProps } from './types'

const SECONDS = 75
const ROWS = 5

type Side = 'de' | 'dar'
interface Slot {
  word: BankWord
  key: number
  state: 'idle' | 'selected' | 'done' | 'wrong'
}

export default function MatchGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const keyRef = useRef(0)
  // Distinct meanings on the board, so every Darija card has exactly one German partner
  const next = useRef(wordStream(bank)).current
  const draw = (taken: BankWord[]) => {
    for (let i = 0; i < 30; i++) {
      const w = next()
      if (!taken.some((x) => x.de === w.de || x.dar === w.dar)) return w
    }
    return next()
  }
  const [board, setBoard] = useState(() => {
    const words: BankWord[] = []
    for (let i = 0; i < ROWS; i++) words.push(draw(words))
    const slots = (list: BankWord[]) => list.map((word) => ({ word, key: keyRef.current++, state: 'idle' as const }))
    return { de: slots(shuffle(words)), dar: slots(shuffle(words)) } as Record<Side, Slot[]>
  })
  const [selected, setSelected] = useState<{ side: Side; index: number } | null>(null)
  const timeLeft = useTimer(SECONDS, finish)

  const setState = (side: Side, index: number, state: Slot['state']) =>
    setBoard((b) => ({ ...b, [side]: b[side].map((s, i) => (i === index ? { ...s, state } : s)) }))

  const tap = (side: Side, index: number) => {
    const slot = board[side][index]
    if (slot.state === 'done' || slot.state === 'wrong') return
    if (!selected || selected.side === side) {
      if (selected) setState(selected.side, selected.index, 'idle')
      setSelected({ side, index })
      setState(side, index, 'selected')
      return
    }

    const other = board[selected.side][selected.index]
    const deIndex = side === 'de' ? index : selected.index
    const darIndex = side === 'dar' ? index : selected.index
    setSelected(null)

    if (other.word.de === slot.word.de) {
      round.hit(10, slot.word.de)
      setState('de', deIndex, 'done')
      setState('dar', darIndex, 'done')
      // Refill both slots with a new pair (at different rows, so it is not given away)
      setTimeout(() => {
        setBoard((b) => {
          const onBoard = b.de.filter((_, i) => i !== deIndex).map((s) => s.word)
          const fresh = draw(onBoard)
          return {
            de: b.de.map((s, i) => (i === deIndex ? { word: fresh, key: keyRef.current++, state: 'idle' } : s)),
            dar: b.dar.map((s, i) => (i === darIndex ? { word: fresh, key: keyRef.current++, state: 'idle' } : s)),
          }
        })
      }, 350)
    } else {
      const deWord = board.de[deIndex].word
      round.miss(deWord, board.dar[darIndex].word.dar)
      setState('de', deIndex, 'wrong')
      setState('dar', darIndex, 'wrong')
      setTimeout(() => {
        setState('de', deIndex, 'idle')
        setState('dar', darIndex, 'idle')
      }, 500)
    }
  }

  const card = (side: Side, slot: Slot, index: number) => (
    <button
      key={slot.key}
      onClick={() => tap(side, index)}
      className={cn(
        'min-h-[64px] w-full animate-pop rounded-2xl border-2 px-3 py-3 text-base font-semibold transition-all sm:text-lg',
        slot.state === 'idle' && 'border-gray-200 bg-white text-gray-900 shadow-paper hover:border-primary/60 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50',
        slot.state === 'selected' && 'border-primary bg-primary-50 text-primary-dark ring-4 ring-primary/20 dark:bg-primary/15 dark:text-primary-light',
        slot.state === 'done' && 'scale-95 border-primary bg-primary text-white opacity-0 duration-300',
        slot.state === 'wrong' && 'animate-shake border-clay bg-clay text-white'
      )}
    >
      {side === 'de' ? slot.word.de : slot.word.dar}
    </button>
  )

  return (
    <div className="relative">
      <Hud round={round} timeLeft={timeLeft} totalTime={SECONDS} onQuit={quit} />
      <FloatingPoints event={round.event} />
      <p className="eyebrow mb-4 text-center">{t.games.list.match.tagline}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">{board.de.map((s, i) => card('de', s, i))}</div>
        <div className="space-y-3">{board.dar.map((s, i) => card('dar', s, i))}</div>
      </div>
    </div>
  )
}
