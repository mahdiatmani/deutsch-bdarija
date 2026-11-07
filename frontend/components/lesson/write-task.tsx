'use client'

import { useState } from 'react'
import { cn, interpolate } from '@/lib/utils'
import { requestWritingFeedback } from '@/lib/api'
import { FormattedMessage } from '@/components/shared/formatted-message'
import { useAuthStore } from '@/store/auth-store'
import type { TranslationsType } from '@/lib/translations'

interface WriteTaskProps {
  text: string
  points: string[]
  model: string
  minWords: number
  level?: string
  t: TranslationsType
}

const countWords = (s: string) => s.trim().split(/\s+/).filter(Boolean).length

/** Free writing: checklist + model text, and optional AI correction by Herr Schmidt. */
export function WriteTask({ text, points, model, minWords, level, t }: WriteTaskProps) {
  const token = useAuthStore((s) => s.token)
  const [draft, setDraft] = useState('')
  const [showModel, setShowModel] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [state, setState] = useState<'idle' | 'loading' | 'unavailable'>('idle')
  const words = countWords(draft)

  const askFeedback = async () => {
    if (!token || !draft.trim()) return
    setState('loading')
    try {
      const res = await requestWritingFeedback({ task: text, points, model, level, text: draft }, token)
      setFeedback(res.feedback)
      setState('idle')
    } catch {
      setState('unavailable')
      setShowModel(true)
    }
  }

  return (
    <div className="space-y-5">
      <div className="text-gray-800 dark:text-gray-200">
        <FormattedMessage content={text} />
      </div>

      {points.length > 0 && (
        <div className="rounded-2xl border border-gray-200 p-4 dark:border-gray-800">
          <p className="eyebrow mb-2">{t.player.write.checklist}</p>
          <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            {points.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="material-symbols-outlined text-base text-primary">check_box_outline_blank</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={7}
          spellCheck={false}
          placeholder={t.player.write.placeholder}
          className="w-full resize-y rounded-2xl border-2 border-gray-300 bg-surface-light p-4 text-lg leading-relaxed text-gray-900 focus:border-saffron focus:outline-none dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50"
        />
        <p className={cn('mt-1 text-right text-xs', words >= minWords ? 'text-primary' : 'text-gray-500')}>
          {interpolate(t.player.write.words, { n: words })} · {interpolate(t.player.write.minWords, { n: minWords })}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={askFeedback} disabled={!draft.trim() || state === 'loading'} className="btn-primary !py-2.5">
          <span className={cn('material-symbols-outlined', state === 'loading' && 'animate-spin')}>
            {state === 'loading' ? 'progress_activity' : 'rate_review'}
          </span>
          {state === 'loading' ? t.player.write.checking : t.player.write.getFeedback}
        </button>
        <button type="button" onClick={() => setShowModel((v) => !v)} className="btn-ghost border border-gray-300 dark:border-gray-700">
          <span className="material-symbols-outlined">visibility</span>
          {t.player.write.showModel}
        </button>
      </div>

      {state === 'unavailable' && <p className="text-sm text-clay-dark dark:text-clay-light">{t.player.write.unavailable}</p>}

      {feedback && (
        <div className="rounded-2xl border-2 border-primary/30 bg-primary-50 p-5 text-gray-800 dark:bg-primary/10 dark:text-gray-200">
          <p className="eyebrow mb-2">{t.player.write.feedback}</p>
          <FormattedMessage content={feedback} />
        </div>
      )}

      {showModel && (
        <div className="rounded-2xl bg-ink p-5 text-gray-100">
          <p className="eyebrow !text-saffron mb-2">{t.player.write.model}</p>
          <p className="whitespace-pre-line text-lg leading-relaxed">{model}</p>
        </div>
      )}
    </div>
  )
}
