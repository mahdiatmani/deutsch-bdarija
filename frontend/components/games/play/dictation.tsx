'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { matchText } from '@/lib/answer-check'
import { useLanguageStore } from '@/store/language-store'
import { useGermanSpeech } from '@/hooks/use-german-speech'
import { pickWords } from '../engine'
import { isSingleWord } from '../registry'
import { FloatingPoints, Hud } from '../ui'
import type { GameProps } from './types'

const ROUNDS = 8
const SPECIAL = ['ä', 'ö', 'ü', 'ß']

export default function DictationGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const { speak, stop, current } = useGermanSpeech()
  const [words] = useState(() => pickWords(bank, ROUNDS, isSingleWord))
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState('')
  const [result, setResult] = useState<'right' | 'wrong' | null>(null)
  const input = useRef<HTMLInputElement>(null)
  const word = words[index]

  const play = useCallback((rate?: number) => speak(word.de, rate), [speak, word])

  useEffect(() => {
    setValue('')
    setResult(null)
    input.current?.focus()
    const id = setTimeout(() => play(), 300)
    return () => clearTimeout(id)
  }, [word, play])

  useEffect(() => () => stop(), [stop])

  const check = () => {
    if (result || !value.trim()) return
    // The noun alone is fine too ("Tisch" for "der Tisch")
    const accepted = word.noun ? [word.de, word.noun] : [word.de]
    if (matchText(value, accepted).correct) {
      setResult('right')
      round.hit(15, word.de)
    } else {
      setResult('wrong')
      round.miss(word, value)
    }
  }

  const goNext = () => {
    if (index + 1 >= words.length) finish()
    else setIndex(index + 1)
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: index, total: words.length }} onQuit={quit} />
      <FloatingPoints event={round.event} />

      <div className="paper mb-5 flex flex-col items-center px-6 py-8">
        <p className="eyebrow mb-5">{t.games.typeWhatYouHear}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => play()}
            aria-label={t.games.replay}
            className="flex size-20 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-stamp transition active:scale-95"
          >
            <span className={cn('material-symbols-outlined text-4xl', current === word.de && 'animate-pulse')}>
              {current === word.de ? 'graphic_eq' : 'volume_up'}
            </span>
          </button>
          <button
            onClick={() => play(0.65)}
            aria-label={t.games.slow}
            className="flex size-12 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] transition active:scale-95"
          >
            <span className="material-symbols-outlined">slow_motion_video</span>
          </button>
        </div>
        {result && (
          <p className={cn('mt-5 text-center text-lg font-semibold', result === 'right' ? 'text-primary' : 'text-clay-dark dark:text-clay-light')}>
            {word.de} <span className="font-normal text-gray-500">= {word.dar}</span>
          </p>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (result) goNext()
          else check()
        }}
      >
        <input
          ref={input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={!!result}
          placeholder={t.games.typeHere}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className={cn(
            'w-full rounded-2xl border-2 bg-white px-5 py-4 text-center font-display text-2xl outline-none transition dark:bg-surface-dark',
            !result && 'border-gray-200 focus:border-[#2563EB] dark:border-gray-700',
            result === 'right' && 'animate-pop border-primary text-primary',
            result === 'wrong' && 'animate-shake border-clay text-clay line-through'
          )}
        />
        <div className="mt-3 flex justify-center gap-2">
          {SPECIAL.map((ch) => (
            <button
              key={ch}
              type="button"
              disabled={!!result}
              onClick={() => {
                setValue((v) => v + ch)
                input.current?.focus()
              }}
              className="size-11 rounded-xl border border-gray-200 bg-white font-display text-xl text-gray-800 hover:border-[#2563EB] disabled:opacity-40 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-100"
            >
              {ch}
            </button>
          ))}
        </div>
        <button type="submit" className="btn-stamp mx-auto mt-5 flex" disabled={!result && !value.trim()}>
          {result ? t.games.next : t.games.check}
          <span className="material-symbols-outlined">{result ? 'arrow_forward' : 'check'}</span>
        </button>
      </form>
    </div>
  )
}
