'use client'

import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import type { BankWord } from '@/types/games'
import { distractors, shuffle, wordStream } from '../engine'
import { FloatingPoints, Hud } from '../ui'
import type { GameProps } from './types'

const LIVES = 3
const FIELD = 400 // px the words fall
const START_SECONDS = 7
const MIN_SECONDS = 2.6

interface Wave {
  id: number
  answer: BankWord
  options: BankWord[]
  seconds: number
}

export default function RainGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const next = useRef(wordStream(bank)).current
  const waveId = useRef(0)
  const makeWave = useCallback(
    (seconds: number): Wave => {
      const answer = next()
      return { id: ++waveId.current, answer, options: shuffle([answer, ...distractors(answer, bank.words, 2)]), seconds }
    },
    [next, bank.words]
  )
  const [wave, setWave] = useState<Wave>(() => makeWave(START_SECONDS))
  const [lives, setLives] = useState(LIVES)
  const [gone, setGone] = useState<Record<string, 'right' | 'wrong'>>({})
  const over = useRef(false)
  const settled = useRef(false)

  const loseLife = useCallback(() => {
    setLives((l) => {
      const left = l - 1
      if (left <= 0 && !over.current) {
        over.current = true
        setTimeout(finish, 900)
      }
      return left
    })
  }, [finish])

  const nextWave = useCallback(
    (delay: number) => {
      setTimeout(() => {
        if (over.current) return
        settled.current = false
        setGone({})
        setWave((w) => makeWave(Math.max(MIN_SECONDS, w.seconds * 0.94)))
      }, delay)
    },
    [makeWave]
  )

  const tap = (option: BankWord) => {
    if (settled.current || gone[option.de] || over.current) return
    if (option.de === wave.answer.de) {
      settled.current = true
      setGone((g) => ({ ...g, [option.de]: 'right' }))
      round.hit(10, option.de)
      nextWave(350)
    } else {
      setGone((g) => ({ ...g, [option.de]: 'wrong' }))
      round.miss(wave.answer, option.de)
      loseLife()
    }
  }

  const landed = () => {
    if (settled.current || over.current) return
    settled.current = true
    round.miss(wave.answer)
    setGone((g) => ({ ...g, [wave.answer.de]: 'right' }))
    loseLife()
    nextWave(1100)
  }

  return (
    <div className="relative">
      <Hud round={round} lives={lives} maxLives={LIVES} onQuit={quit} />
      <FloatingPoints event={round.event} />

      <div
        className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800"
        style={{ height: FIELD + 90, background: 'linear-gradient(180deg, rgba(91,63,217,0.10), rgba(58,111,248,0.04))' }}
      >
        <div className="grid h-full grid-cols-3 gap-2 px-2">
          {wave.options.map((option, lane) => (
            <div key={`${wave.id}-${lane}`} className="relative">
              <motion.button
                onClick={() => tap(option)}
                initial={{ y: -70 }}
                // Caught (or landed) words stop where they are; wrong ones vanish
                animate={
                  gone[option.de] === 'wrong'
                    ? { opacity: 0, scale: 0.6 }
                    : gone[option.de] === 'right'
                      ? { scale: 1.12 }
                      : { y: FIELD - 10 }
                }
                transition={
                  gone[option.de]
                    ? { duration: 0.25 }
                    : { duration: wave.seconds * (0.92 + lane * 0.06), ease: 'linear' }
                }
                onAnimationComplete={() => {
                  if (option.de === wave.answer.de && !gone[option.de]) landed()
                }}
                className={cn(
                  'absolute inset-x-0 top-0 mx-auto w-full rounded-2xl border-2 px-2 py-3 text-sm font-semibold shadow-paper sm:text-base',
                  !gone[option.de] && 'border-white/60 bg-white text-gray-900 hover:border-tile dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50',
                  gone[option.de] === 'right' && 'animate-pop border-primary bg-primary text-white',
                  gone[option.de] === 'wrong' && 'border-clay bg-clay text-white'
                )}
              >
                {option.de}
              </motion.button>
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 border-t-4 border-dashed border-tile/40 bg-white/80 px-4 py-4 text-center backdrop-blur dark:bg-ink/70">
          <p className="text-xs uppercase tracking-wider text-gray-500">{t.games.tapTranslation}</p>
          <p className="font-display text-2xl text-gray-900 dark:text-gray-50">{wave.answer.dar}</p>
        </div>
      </div>
    </div>
  )
}
