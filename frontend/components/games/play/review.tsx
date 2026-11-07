'use client'

import { useEffect, useState } from 'react'
import { useLanguageStore } from '@/store/language-store'
import { useGermanSpeech } from '@/hooks/use-german-speech'
import type { BankWord } from '@/types/games'
import { distractors, shuffle } from '../engine'
import { Choice, FloatingPoints, Hud, PromptCard, type ChoiceState } from '../ui'
import type { GameProps } from './types'

const MAX_WORDS = 15

/** Spaced repetition: the due words, Darija → German, with the answer spoken after each */
export default function ReviewGame({ bank, round, finish, quit }: GameProps) {
  const t = useLanguageStore((s) => s.t)
  const { speak, stop } = useGermanSpeech()
  const [words] = useState(() => shuffle(bank.due).slice(0, MAX_WORDS))
  const [index, setIndex] = useState(0)
  const [options, setOptions] = useState<BankWord[]>([])
  const [picked, setPicked] = useState<string | null>(null)
  const word = words[index]

  useEffect(() => {
    setOptions(shuffle([word, ...distractors(word, [...bank.words, ...bank.due], 3)]))
    setPicked(null)
  }, [word, bank])

  useEffect(() => () => stop(), [stop])

  const answer = (option: BankWord) => {
    if (picked) return
    setPicked(option.de)
    if (option.de === word.de) round.hit(10, word.de)
    else round.miss(word, option.de)
    speak(word.de)
  }

  const goNext = () => {
    if (index + 1 >= words.length) finish()
    else setIndex(index + 1)
  }

  const stateOf = (o: BankWord): ChoiceState => {
    if (!picked) return 'idle'
    if (o.de === word.de) return picked === o.de ? 'right' : 'reveal'
    return o.de === picked ? 'wrong' : 'dim'
  }

  return (
    <div className="relative">
      <Hud round={round} progress={{ current: index, total: words.length }} onQuit={quit} />
      <FloatingPoints event={round.event} />
      <PromptCard eyebrow={t.games.tapTranslation}>{word.dar}</PromptCard>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <Choice key={o.de} state={stateOf(o)} onClick={() => answer(o)}>
            {o.de}
          </Choice>
        ))}
      </div>
      {picked && (
        <button onClick={goNext} className="btn-stamp mx-auto mt-6 flex">
          {t.games.next}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      )}
    </div>
  )
}
