'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguageStore } from '@/store/language-store'
import { pickWords, pluralDistractors, shuffle } from '../engine'
import { hasPlural } from '../registry'
import { Choice, FloatingPoints, Hud, PromptCard, type ChoiceState } from '../ui'
import type { GameProps } from './types'

const ROUNDS = 10
const SECONDS_PER_WORD = 10

export default function PluralGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const [words] = useState(() => pickWords(bank, ROUNDS, hasPlural))
  const [index, setIndex] = useState(0)
  const word = words[index]
  const [options, setOptions] = useState<string[]>([])
  const [picked, setPicked] = useState<string | null>(null)
  const [left, setLeft] = useState(SECONDS_PER_WORD)
  const startedAt = useRef(Date.now())

  useEffect(() => {
    setOptions(shuffle([word.plural!, ...pluralDistractors(word.noun!, word.plural!, 2)]))
    setPicked(null)
    setLeft(SECONDS_PER_WORD)
    startedAt.current = Date.now()
  }, [word])

  const advance = (delay: number) =>
    setTimeout(() => {
      if (index + 1 >= words.length) finish()
      else setIndex(index + 1)
    }, delay)

  const answer = (option: string | null) => {
    if (picked !== null) return
    setPicked(option ?? '')
    if (option === word.plural) {
      const seconds = (Date.now() - startedAt.current) / 1000
      round.hit(10 + Math.max(0, Math.round((SECONDS_PER_WORD - seconds) * 1.5)), word.de)
      advance(600)
    } else {
      round.miss({ de: `${word.de} → die ${word.plural}`, dar: word.dar }, option ? `die ${option}` : undefined, word.de)
      advance(1600)
    }
  }

  // Per-word countdown: time out counts as a miss
  useEffect(() => {
    if (picked !== null) return
    const id = setInterval(() => {
      const remaining = SECONDS_PER_WORD - Math.floor((Date.now() - startedAt.current) / 1000)
      setLeft(Math.max(0, remaining))
      if (remaining <= 0) {
        clearInterval(id)
        answer(null)
      }
    }, 250)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picked, word])

  const stateOf = (o: string): ChoiceState => {
    if (picked === null) return 'idle'
    if (o === word.plural) return picked === o ? 'right' : 'reveal'
    return o === picked ? 'wrong' : 'dim'
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: index, total: words.length }} onQuit={quit} />
      <FloatingPoints event={round.event} />
      <PromptCard eyebrow={t.games.whichPlural} sub={word.dar}>
        {word.de}
        <div className="mx-auto mt-4 h-1.5 w-40 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          <div className="h-full rounded-full bg-[#8B5CF6] transition-all duration-300" style={{ width: `${(left / SECONDS_PER_WORD) * 100}%` }} />
        </div>
      </PromptCard>
      <div className="grid gap-3">
        {options.map((o) => (
          <Choice key={o} state={stateOf(o)} onClick={() => answer(o)}>
            die {o}
          </Choice>
        ))}
      </div>
    </div>
  )
}
