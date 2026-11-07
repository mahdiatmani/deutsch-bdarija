'use client'

import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { speechSimilarity } from '@/lib/answer-check'
import { FormattedMessage } from '@/components/shared/formatted-message'
import { SpeechButton } from '@/components/shared/speech-button'
import type { TranslationsType } from '@/lib/translations'
import { AudioButton } from './audio-button'

interface SpeakTaskProps {
  text: string
  model: string[]
  t: TranslationsType
}

/** Say it out loud: speech recognition compares the learner with the model answers. */
export function SpeakTask({ text, model, t }: SpeakTaskProps) {
  const [supported, setSupported] = useState(true)
  const [transcript, setTranscript] = useState<string | null>(null)

  useEffect(() => {
    setSupported(!!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition))
  }, [])

  const onResult = useCallback((said: string) => setTranscript(said), [])

  const best = transcript === null ? null : model.reduce((m, s) => Math.max(m, speechSimilarity(transcript, s)), 0)
  const good = best !== null && best >= 0.75

  return (
    <div className="space-y-6">
      <div className="text-gray-800 dark:text-gray-200">
        <FormattedMessage content={text} />
      </div>

      <div>
        <p className="eyebrow mb-2">{t.player.speak.model}</p>
        <ul className="space-y-2">
          {model.map((m, i) => (
            <li key={i} className="flex items-center gap-2 rounded-xl bg-gray-100/80 px-4 py-3 dark:bg-gray-800/60">
              <p className="de flex-1 text-lg text-gray-900 dark:text-gray-50">{m}</p>
              <AudioButton text={m} rate={0.65} label={t.player.slow} />
              <AudioButton text={m} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center dark:border-gray-700">
        {supported ? (
          <>
            <SpeechButton onResult={onResult} language="de-DE" className="!size-16 !rounded-full" />
            <p className="text-sm text-gray-500">{t.player.speak.tapToSpeak}</p>
          </>
        ) : (
          <p className="text-sm text-gray-500">{t.player.speak.unsupported}</p>
        )}
        {transcript !== null && (
          <div className={cn('w-full rounded-xl p-4 text-left', good ? 'bg-primary-50 dark:bg-primary/15' : 'bg-saffron-50 dark:bg-saffron/10')}>
            <p className="text-xs uppercase tracking-wider text-gray-500">{t.player.speak.youSaid}</p>
            <p className="de text-lg text-gray-900 dark:text-gray-50">{transcript || '…'}</p>
            <p className={cn('mt-1 text-sm font-medium', good ? 'text-primary' : 'text-saffron-dark dark:text-saffron')}>
              {good ? t.player.speak.great : t.player.speak.almost}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
