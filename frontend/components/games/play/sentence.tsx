'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import { useGermanSpeech } from '@/hooks/use-german-speech'
import { castVoices } from '@/lib/character-voices'
import type { BankSentence } from '@/types/games'
import { shuffle } from '../engine'
import { FloatingPoints, Hud } from '../ui'
import type { GameProps } from './types'

const ROUNDS = 6

const tokensOf = (s: string) => s.split(/\s+/).filter(Boolean)

/** Words in a different order than the sentence */
function mix(tokens: string[]): string[] {
  let mixed = shuffle(tokens)
  for (let i = 0; i < 10 && mixed.join(' ') === tokens.join(' '); i++) mixed = shuffle(tokens)
  return mixed
}

export default function SentenceGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const { speak, stop } = useGermanSpeech()
  const [sentences] = useState<BankSentence[]>(() => shuffle(bank.sentences).slice(0, ROUNDS))
  const [index, setIndex] = useState(0)
  const sentence = sentences[index]
  const tokens = useMemo(() => tokensOf(sentence.de), [sentence])
  const [pool, setPool] = useState<string[]>(() => mix(tokensOf(sentences[0].de)))
  const [placed, setPlaced] = useState<number[]>([])
  const [result, setResult] = useState<'right' | 'wrong' | null>(null)

  useEffect(() => () => stop(), [stop])

  const voice = sentence.speakers && sentence.speaker ? castVoices(sentence.speakers)[sentence.speaker] : undefined

  // Check once every word is placed
  useEffect(() => {
    if (placed.length !== tokens.length || result) return
    const built = placed.map((i) => pool[i]).join(' ')
    if (built === sentence.de) {
      setResult('right')
      round.hit(5 * tokens.length)
    } else {
      setResult('wrong')
      round.miss({ de: sentence.de, dar: sentence.dar }, built)
    }
    speak(sentence.de, undefined, voice)
  }, [placed, tokens, pool, sentence, result, round, speak, voice])

  const goNext = () => {
    stop()
    if (index + 1 >= sentences.length) return finish()
    const n = index + 1
    setIndex(n)
    setPool(mix(tokensOf(sentences[n].de)))
    setPlaced([])
    setResult(null)
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: index, total: sentences.length }} onQuit={quit} />
      <FloatingPoints event={round.event} />

      <div className="paper mb-5 px-5 py-6">
        <p className="eyebrow mb-2">{t.games.buildSentence}</p>
        <p className="text-xl text-gray-800 dark:text-gray-100">{sentence.dar}</p>
        {sentence.speaker && <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">{sentence.speaker}</p>}
      </div>

      <div
        className={cn(
          'mb-5 flex min-h-[72px] flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed p-3 transition-colors',
          !result && 'border-gray-300 dark:border-gray-700',
          result === 'right' && 'border-primary bg-primary-50 dark:bg-primary/10',
          result === 'wrong' && 'animate-shake border-clay bg-clay-50 dark:bg-clay/10'
        )}
      >
        {placed.map((tokenIndex, pos) => (
          <motion.button
            layout
            key={tokenIndex}
            onClick={() => !result && setPlaced((p) => p.filter((_, i) => i !== pos))}
            className="rounded-xl border-2 border-gray-200 bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-paper dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50"
          >
            {pool[tokenIndex]}
          </motion.button>
        ))}
      </div>

      {result === 'wrong' && (
        <p className="mb-4 rounded-xl bg-primary-50 px-4 py-3 font-semibold text-primary-dark dark:bg-primary/10 dark:text-primary-light">{sentence.de}</p>
      )}

      {!result ? (
        <div className="flex flex-wrap justify-center gap-2">
          {pool.map((token, i) => (
            <motion.button
              layout
              key={i}
              onClick={() => setPlaced((p) => [...p, i])}
              disabled={placed.includes(i)}
              className="rounded-xl bg-[#0EA5A4] px-3 py-2 text-lg font-semibold text-white shadow-stamp-sm transition active:scale-95 disabled:opacity-20"
            >
              {token}
            </motion.button>
          ))}
        </div>
      ) : (
        <button onClick={goNext} className="btn-stamp mx-auto flex">
          {t.games.next}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      )}
    </div>
  )
}
