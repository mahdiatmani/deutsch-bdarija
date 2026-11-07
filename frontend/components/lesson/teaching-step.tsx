'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FormattedMessage } from '@/components/shared/formatted-message'
import { useGermanSpeech, type SpeechItem } from '@/hooks/use-german-speech'
import { castVoices } from '@/lib/character-voices'
import type { TranslationsType } from '@/lib/translations'
import type { DialogueLine, Step, Word } from '@/types/lesson'
import { AudioButton } from './audio-button'

type T = TranslationsType

/** der = blue, die = red, das = green: the classic gender colours from German classrooms */
const GENDER_TONE: Record<string, string> = {
  der: 'text-tile',
  die: 'text-clay',
  das: 'text-primary dark:text-primary-light',
}

function GermanNoun({ text, className }: { text: string; className?: string }) {
  const m = text.match(/^(der|die|das)\s+(.+)$/)
  if (!m) return <span className={cn('de', className)}>{text}</span>
  return (
    <span className={cn('de', className)}>
      <span className={GENDER_TONE[m[1]]}>{m[1]}</span> {m[2]}
    </span>
  )
}

function ToggleButton({ on, onClick, labelOn, labelOff, icon }: { on: boolean; onClick: () => void; labelOn: string; labelOff: string; icon: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
    >
      <span className="material-symbols-outlined text-base">{icon}</span>
      {on ? labelOn : labelOff}
    </button>
  )
}

function PlayAllButton({ items, t }: { items: SpeechItem[]; t: T }) {
  const { current, speakAll, stop } = useGermanSpeech()
  const active = current !== null && items.some((item) => (typeof item === 'string' ? item : item.text) === current)
  return (
    <button
      type="button"
      onClick={() => (active ? stop() : speakAll(items))}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors',
        active ? 'bg-clay text-white' : 'bg-primary text-white hover:bg-primary-dark'
      )}
    >
      <span className="material-symbols-outlined text-base">{active ? 'stop' : 'play_arrow'}</span>
      {active ? t.player.stop : t.player.listenAll}
    </button>
  )
}

function Lead({ text }: { text?: string }) {
  if (!text) return null
  return (
    <div className="mb-6 text-gray-700 dark:text-gray-300">
      <FormattedMessage content={text} />
    </div>
  )
}

function WordCard({ word, t }: { word: Word; t: T }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-surface-light p-4 dark:border-gray-800 dark:bg-surface-dark">
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <GermanNoun text={word.de} className="text-xl text-gray-900 dark:text-gray-50" />
          {word.plural && (
            <p className="text-xs text-gray-500">
              {t.player.plural}: <span className="font-medium text-gray-700 dark:text-gray-300">{word.plural}</span>
            </p>
          )}
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{word.dar}</p>
        </div>
        <AudioButton text={word.de} />
      </div>
      {word.example && (
        <div className="mt-3 flex items-start gap-2 border-t border-dashed border-gray-200 pt-3 dark:border-gray-700">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{word.example.de}</p>
            <p className="text-xs text-gray-500">{word.example.dar}</p>
          </div>
          <AudioButton text={word.example.de} />
        </div>
      )}
    </div>
  )
}

const NO_LINES: DialogueLine[] = []

const SPEAKER_TONES = ['bg-primary text-white', 'bg-saffron text-ink', 'bg-tile text-white', 'bg-clay text-white']

/** "Frau Weber" → "FW", "Youssef" → "Yo" */
const initials = (name: string) => {
  const parts = name.split(/\s+/).filter(Boolean)
  return parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : name.slice(0, 2)
}

/** Each speaker of a dialogue gets their own voice */
const useLineVoices = (lines: DialogueLine[]) => useMemo(() => castVoices(lines.map((l) => l.speaker)), [lines])

const lineItems = (lines: DialogueLine[], voices: Record<string, string>): SpeechItem[] =>
  lines.map((l) => ({ text: l.de, voice: voices[l.speaker] }))

function Lines({ lines, showDar, voices }: { lines: DialogueLine[]; showDar: boolean; voices: Record<string, string> }) {
  const speakers = Array.from(new Set(lines.map((l) => l.speaker)))
  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        const who = speakers.indexOf(line.speaker)
        const right = who % 2 === 1
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.04, 0.4) }}
            className={cn('flex gap-2', right && 'flex-row-reverse')}
          >
            <span
              className={cn(
                'mt-1 flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold',
                SPEAKER_TONES[who % SPEAKER_TONES.length]
              )}
              title={line.speaker}
            >
              {initials(line.speaker)}
            </span>
            <div
              className={cn(
                'max-w-[85%] rounded-2xl px-4 py-2.5',
                right ? 'rounded-tr-sm bg-saffron-50 dark:bg-saffron/10' : 'rounded-tl-sm bg-gray-100 dark:bg-gray-800'
              )}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">{line.speaker}</p>
              <div className="flex items-start gap-1">
                <p className="flex-1 text-base text-gray-900 dark:text-gray-50">{line.de}</p>
                <AudioButton text={line.de} voice={voices[line.speaker]} />
              </div>
              {showDar && <p className="text-sm text-gray-500 dark:text-gray-400">{line.dar}</p>}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export function TeachingStep({ step, t }: { step: Exclude<Step, { type: 'exercise' }>; t: T }) {
  const [showDar, setShowDar] = useState(false)
  const [showText, setShowText] = useState(false)
  const voices = useLineVoices(step.type === 'dialogue' || step.type === 'listening' ? step.lines : NO_LINES)

  switch (step.type) {
    case 'intro':
      return (
        <div>
          <Lead text={step.text} />
          {step.goals.length > 0 && (
            <div className="rounded-2xl bg-ink p-6 text-gray-100">
              <p className="eyebrow !text-saffron mb-3">{t.player.goalsTitle}</p>
              <ul className="space-y-2">
                {step.goals.map((g, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="material-symbols-outlined text-saffron">flag</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )

    case 'vocab':
      return (
        <div>
          <Lead text={step.text} />
          <div className="mb-4 flex justify-end">
            <PlayAllButton items={step.words.map((w) => w.de)} t={t} />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {step.words.map((w, i) => (
              <WordCard key={i} word={w} t={t} />
            ))}
          </div>
        </div>
      )

    case 'dialogue':
      return (
        <div>
          <Lead text={step.text} />
          <div className="mb-4 flex flex-wrap justify-end gap-2">
            <ToggleButton on={showDar} onClick={() => setShowDar(!showDar)} labelOn={t.player.hideTranslation} labelOff={t.player.showTranslation} icon="translate" />
            <PlayAllButton items={lineItems(step.lines, voices)} t={t} />
          </div>
          <Lines lines={step.lines} showDar={showDar} voices={voices} />
        </div>
      )

    case 'listening':
      return (
        <div>
          <Lead text={step.text} />
          <div className="mb-6 flex flex-col items-center gap-3 rounded-2xl bg-ink p-8 text-center text-gray-200">
            <span className="material-symbols-outlined text-5xl text-saffron">headphones</span>
            <PlayAllButton items={lineItems(step.lines, voices)} t={t} />
            <p className="text-sm text-gray-400">{t.player.listenFirst}</p>
          </div>
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            <ToggleButton on={showText} onClick={() => setShowText(!showText)} labelOn={t.player.hideTranscript} labelOff={t.player.showTranscript} icon="subject" />
            {showText && (
              <ToggleButton on={showDar} onClick={() => setShowDar(!showDar)} labelOn={t.player.hideTranslation} labelOff={t.player.showTranslation} icon="translate" />
            )}
          </div>
          {showText && <Lines lines={step.lines} showDar={showDar} voices={voices} />}
        </div>
      )

    case 'reading':
      return (
        <div>
          <Lead text={step.text} />
          <div className="mb-3 flex flex-wrap justify-end gap-2">
            {step.dar && (
              <ToggleButton on={showDar} onClick={() => setShowDar(!showDar)} labelOn={t.player.hideTranslation} labelOff={t.player.showTranslation} icon="translate" />
            )}
            <PlayAllButton items={step.de.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)} t={t} />
          </div>
          <article className="space-y-3 rounded-2xl border border-gray-200 bg-surface-light p-6 text-lg leading-relaxed text-gray-900 shadow-paper dark:border-gray-800 dark:bg-surface-dark dark:text-gray-50">
            {step.de.split(/\n\s*\n/).map((p, i) => (
              <p key={i} className="whitespace-pre-line">
                {p.trim()}
              </p>
            ))}
          </article>
          {showDar && step.dar && (
            <div className="mt-3 rounded-2xl bg-gray-100 p-5 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <FormattedMessage content={step.dar} />
            </div>
          )}
          {step.glossary && step.glossary.length > 0 && (
            <div className="mt-5">
              <p className="eyebrow mb-2">{t.player.glossary}</p>
              <dl className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {step.glossary.map((g, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <dt className="font-semibold text-gray-900 dark:text-gray-100">{g.de}</dt>
                    <dd className="text-gray-500">= {g.dar}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      )

    case 'explain':
      return (
        <div>
          <div className="text-gray-800 dark:text-gray-200">
            <FormattedMessage content={step.text} />
          </div>
          {step.examples && step.examples.length > 0 && (
            <ul className="mt-6 space-y-2">
              {step.examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-gray-100/80 px-4 py-3 dark:bg-gray-800/60">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-50">{ex.de}</p>
                    <p className="text-sm text-gray-500">{ex.dar}</p>
                  </div>
                  <AudioButton text={ex.de} />
                </li>
              ))}
            </ul>
          )}
          {step.tip && (
            <div className="mt-6 flex gap-3 rounded-2xl border border-saffron/40 bg-saffron-50 p-4 dark:bg-saffron/10">
              <span className="material-symbols-outlined text-saffron-dark dark:text-saffron">lightbulb</span>
              <div className="min-w-0 text-sm text-gray-800 dark:text-gray-200">
                <p className="mb-1 font-semibold">{t.player.tip}</p>
                <FormattedMessage content={step.tip} />
              </div>
            </div>
          )}
        </div>
      )

    case 'pron':
      return (
        <div>
          <Lead text={step.text} />
          <ul className="space-y-2">
            {step.items.map((it, i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-800">
                <div className="min-w-0 flex-1">
                  <p className="de text-xl text-gray-900 dark:text-gray-50">{it.de}</p>
                  <p className="text-sm text-gray-500">{it.dar}</p>
                </div>
                <AudioButton text={it.de} rate={0.65} label={t.player.slow} />
                <AudioButton text={it.de} size="md" />
              </li>
            ))}
          </ul>
        </div>
      )

    case 'culture':
      return (
        <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-gray-100 sm:p-8">
          <div className="absolute inset-0 zellige-white opacity-30" />
          <div className="relative">
            <span className="material-symbols-outlined mb-3 text-4xl text-saffron">travel_explore</span>
            <div className="[&_strong]:!text-saffron">
              <FormattedMessage content={step.text} />
            </div>
          </div>
        </div>
      )

    case 'summary':
      return (
        <div className="space-y-6">
          <ul className="space-y-2">
            {step.points.map((p, i) => (
              <li key={i} className="flex gap-3 rounded-xl bg-gray-100/80 px-4 py-3 dark:bg-gray-800/60">
                <span className="material-symbols-outlined text-primary">bookmark</span>
                <div className="min-w-0 flex-1 text-gray-800 dark:text-gray-200">
                  <FormattedMessage content={p} />
                </div>
              </li>
            ))}
          </ul>
          {step.canDo.length > 0 && (
            <div className="rounded-2xl border-2 border-primary/30 bg-primary-50 p-5 dark:bg-primary/10">
              <p className="eyebrow mb-3">{t.player.canDo}</p>
              <ul className="space-y-2">
                {step.canDo.map((c, i) => (
                  <li key={i} className="flex gap-3 text-gray-800 dark:text-gray-200">
                    <span className="material-symbols-outlined icon-fill text-primary">check_circle</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )

    default:
      return null
  }
}
