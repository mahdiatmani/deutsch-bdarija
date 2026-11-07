'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguageStore } from '@/store/language-store'
import { useGermanSpeech } from '@/hooks/use-german-speech'
import type { BankWord } from '@/types/games'
import { distractors, pickWords, shuffle } from '../engine'
import { Choice, FloatingPoints, Hud, type ChoiceState } from '../ui'
import type { GameProps } from './types'

const ROUNDS = 10

export default function ListenGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const { speak, stop, current } = useGermanSpeech()
  const [words] = useState(() => pickWords(bank, ROUNDS))
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const startedAt = useRef(Date.now())
  const word = words[index]
  const [options, setOptions] = useState<BankWord[]>([])

  const play = useCallback((rate?: number) => speak(word.de, rate), [speak, word])

  useEffect(() => {
    setOptions(shuffle([word, ...distractors(word, bank.words, 3)]))
    setPicked(null)
    startedAt.current = Date.now()
    const id = setTimeout(() => play(), 300)
    return () => clearTimeout(id)
  }, [word, bank.words, play])

  useEffect(() => () => stop(), [stop])

  const answer = (option: BankWord) => {
    if (picked) return
    setPicked(option.de)
    if (option.de === word.de) {
      // Up to 10 bonus points for answering within a few seconds
      const seconds = (Date.now() - startedAt.current) / 1000
      round.hit(10 + Math.max(0, Math.round(10 - seconds * 2)), word.de)
    } else {
      round.miss(word, option.de)
    }
    setTimeout(() => {
      if (index + 1 >= words.length) finish()
      else setIndex(index + 1)
    }, option.de === word.de ? 600 : 1500)
  }

  const stateOf = (option: BankWord): ChoiceState => {
    if (!picked) return 'idle'
    if (option.de === word.de) return picked === option.de ? 'right' : 'reveal'
    return option.de === picked ? 'wrong' : 'dim'
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: index, total: words.length }} onQuit={quit} />
      <FloatingPoints event={round.event} />

      <div className="paper mb-6 flex flex-col items-center px-6 py-8">
        <p className="eyebrow mb-5">{t.games.whatDidYouHear}</p>
        <button
          onClick={() => play()}
          aria-label={t.games.replay}
          className="flex size-24 items-center justify-center rounded-full bg-[#FF8A00] text-white shadow-stamp transition active:scale-95"
        >
          <span className={`material-symbols-outlined text-5xl ${current === word.de ? 'animate-pulse' : ''}`}>
            {current === word.de ? 'graphic_eq' : 'volume_up'}
          </span>
        </button>
        <button onClick={() => play(0.65)} className="mt-4 flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
          <span className="material-symbols-outlined text-lg">slow_motion_video</span>
          {t.games.slow}
        </button>
        {picked && <p className="mt-4 text-gray-500 dark:text-gray-400">{word.de} = {word.dar}</p>}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <Choice key={o.de} state={stateOf(o)} onClick={() => answer(o)}>
            {o.de}
          </Choice>
        ))}
      </div>
    </div>
  )
}
