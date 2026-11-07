'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguageStore } from '@/store/language-store'
import type { BankWord } from '@/types/games'
import { wordStream } from '../engine'
import { isNoun } from '../registry'
import { Choice, FloatingPoints, Hud, PromptCard, type ChoiceState } from '../ui'
import { useTimer } from '../use-round'
import type { GameProps } from './types'

const SECONDS = 60
const ARTICLES = ['der', 'die', 'das'] as const
// The colors German classrooms use for the genders
const COLORS: Record<(typeof ARTICLES)[number], string> = { der: '#3A6FF8', die: '#FF5C4D', das: '#00A36C' }

export default function ArtikelGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const next = useRef(wordStream(bank, isNoun)).current
  const [word, setWord] = useState<BankWord>(() => next())
  const [picked, setPicked] = useState<string | null>(null)
  const locked = useRef(false)
  const timeLeft = useTimer(SECONDS, finish)

  const answer = useCallback(
    (article: string) => {
      if (locked.current) return
      locked.current = true
      setPicked(article)
      const right = article === word.article
      if (right) round.hit(10, word.de)
      else round.miss(word, `${article} ${word.noun}`)
      setTimeout(() => {
        setPicked(null)
        setWord(next())
        locked.current = false
      }, right ? 250 : 900)
    },
    [word, round, next]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const i = ['1', '2', '3'].indexOf(e.key)
      if (i >= 0) answer(ARTICLES[i])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [answer])

  const stateOf = (a: string): ChoiceState => {
    if (!picked) return 'idle'
    if (a === word.article) return picked === a ? 'right' : 'reveal'
    return a === picked ? 'wrong' : 'dim'
  }

  return (
    <div className="relative">
      <Hud round={round} timeLeft={timeLeft} totalTime={SECONDS} onQuit={quit} />
      <FloatingPoints event={round.event} />
      <PromptCard eyebrow={t.games.whichArticle} sub={word.dar}>
        <span
          className="transition-colors"
          style={picked && word.article ? { color: COLORS[word.article] } : undefined}
        >
          {picked ? `${word.article} ` : '___ '}
          {word.noun}
        </span>
      </PromptCard>
      <div className="grid grid-cols-3 gap-3">
        {ARTICLES.map((a, i) => (
          <Choice
            key={a}
            state={stateOf(a)}
            onClick={() => answer(a)}
            shortcut={String(i + 1)}
            className="!py-6 font-display text-2xl !text-white"
            style={{ background: COLORS[a], borderColor: COLORS[a] }}
          >
            {a}
          </Choice>
        ))}
      </div>
    </div>
  )
}
