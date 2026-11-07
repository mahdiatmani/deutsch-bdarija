'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn, interpolate } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import type { Round, RoundEvent } from './use-round'
import { isMuted, setMuted } from './sfx'

/** Top bar of a running game: quit, timer bar, lives, combo and score */
export function Hud({
  round,
  timeLeft,
  totalTime,
  lives,
  maxLives,
  progress,
  onQuit,
}: {
  round: Round
  timeLeft?: number
  totalTime?: number
  lives?: number
  maxLives?: number
  /** Rounds (shows the current one, 3/10) or, with `done`, things finished so far (2/6 pairs) */
  progress?: { current: number; total: number; done?: boolean }
  onQuit: () => void
}) {
  const t = useLanguageStore((s) => s.t)
  const fraction = timeLeft !== undefined && totalTime ? timeLeft / totalTime : progress ? progress.current / progress.total : null
  const urgent = timeLeft !== undefined && timeLeft <= 5

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onQuit}
          aria-label={t.games.quit}
          title={t.games.quit}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
          {fraction !== null && (
            <div
              className={cn('h-full rounded-full transition-all duration-300', urgent ? 'bg-clay' : 'bg-primary')}
              style={{ width: `${Math.max(0, Math.min(1, fraction)) * 100}%` }}
            />
          )}
        </div>

        {timeLeft !== undefined && (
          <span className={cn('w-10 text-right font-display text-lg tabular-nums', urgent ? 'animate-pulse text-clay' : 'text-gray-600 dark:text-gray-300')}>
            {timeLeft}
          </span>
        )}
        {progress && timeLeft === undefined && (
          <span className="font-display text-sm tabular-nums text-gray-500">
            {progress.done ? progress.current : Math.min(progress.current + 1, progress.total)}/{progress.total}
          </span>
        )}
        {maxLives !== undefined && (
          <span className="flex" aria-label={`${lives}/${maxLives}`}>
            {Array.from({ length: maxLives }, (_, i) => (
              <span key={i} className={cn('material-symbols-outlined icon-fill text-xl transition-all', i < (lives ?? 0) ? 'text-clay' : 'scale-75 text-gray-300 dark:text-gray-700')}>
                favorite
              </span>
            ))}
          </span>
        )}
        <SoundToggle />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <ComboBadge combo={round.combo} multiplier={round.multiplier} />
        <motion.span
          key={round.score}
          initial={{ scale: 1.25 }}
          animate={{ scale: 1 }}
          className="font-display text-3xl tabular-nums text-gray-900 dark:text-gray-50"
        >
          {round.score}
        </motion.span>
      </div>
    </div>
  )
}

function SoundToggle() {
  const t = useLanguageStore((s) => s.t)
  const [off, setOff] = useState(false)
  useEffect(() => setOff(isMuted()), [])
  return (
    <button
      onClick={() => {
        setMuted(!off)
        setOff(!off)
      }}
      aria-label={off ? t.games.soundOff : t.games.soundOn}
      title={off ? t.games.soundOff : t.games.soundOn}
      className="flex size-10 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <span className="material-symbols-outlined text-xl">{off ? 'volume_off' : 'volume_up'}</span>
    </button>
  )
}

/** Flame with the current streak of right answers; grows hotter with the multiplier */
export function ComboBadge({ combo, multiplier }: { combo: number; multiplier: number }) {
  const hot = ['', 'bg-saffron-50 text-saffron-dark', 'bg-saffron text-ink', 'bg-[#FF8A00] text-white', 'bg-clay text-white'][multiplier] ?? ''
  return (
    <AnimatePresence mode="popLayout">
      {combo >= 2 ? (
        <motion.span
          key={multiplier}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          className={cn('inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-bold', hot || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200')}
        >
          <span className="material-symbols-outlined icon-fill text-base">local_fire_department</span>
          {combo}
          {multiplier > 1 && <span className="ml-1 rounded-full bg-black/10 px-1.5 text-xs">x{multiplier}</span>}
        </motion.span>
      ) : (
        <span />
      )}
    </AnimatePresence>
  )
}

/** "+20" rising from the play area, and a big banner when the multiplier goes up */
export function FloatingPoints({ event }: { event: RoundEvent | null }) {
  const t = useLanguageStore((s) => s.t)
  const [shown, setShown] = useState<RoundEvent | null>(null)
  useEffect(() => {
    if (!event || event.kind === 'miss') return
    setShown(event)
    const id = setTimeout(() => setShown(null), 900)
    return () => clearTimeout(id)
  }, [event])

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center">
      <AnimatePresence>
        {shown && (
          <motion.div
            key={shown.id}
            initial={{ y: 10, opacity: 0, scale: 0.8 }}
            animate={{ y: -30, opacity: 1, scale: shown.kind === 'combo' ? 1.15 : 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={cn(
              'rounded-full px-4 py-1.5 font-display shadow-stamp-sm',
              shown.kind === 'combo' ? 'bg-clay text-xl text-white' : 'bg-saffron text-lg text-ink'
            )}
          >
            {shown.kind === 'combo' ? interpolate(t.games.comboUp, { n: Math.min(4, 1 + Math.floor(shown.combo / 5)) }) : `+${shown.points}`}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** A short burst of confetti, for records and perfect rounds */
export function Confetti({ fire }: { fire: boolean }) {
  const reduce = useReducedMotion()
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 700,
        y: -(Math.random() * 380 + 120),
        rotate: Math.random() * 720 - 360,
        color: ['#00A36C', '#FFC233', '#FF5C4D', '#3A6FF8', '#E0457B', '#8B5CF6'][i % 6],
        size: 6 + Math.random() * 7,
        delay: Math.random() * 0.15,
      })),
    []
  )
  if (!fire || reduce) return null
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/3 z-30" aria-hidden>
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block rounded-sm"
          style={{ width: p.size, height: p.size * 0.6, background: p.color }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: p.x, y: [0, p.y, p.y + 520], opacity: [1, 1, 0], rotate: p.rotate }}
          transition={{ duration: 1.8, delay: p.delay, ease: 'easeOut', times: [0, 0.35, 1] }}
        />
      ))}
    </div>
  )
}

export type ChoiceState = 'idle' | 'right' | 'wrong' | 'reveal' | 'dim'

/** A big answer button with right/wrong feedback */
export function Choice({
  state = 'idle',
  onClick,
  children,
  className,
  style,
  disabled,
  shortcut,
}: {
  state?: ChoiceState
  onClick: () => void
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  shortcut?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={state === 'idle' ? style : undefined}
      className={cn(
        'relative w-full rounded-2xl border-2 px-4 py-4 text-lg font-semibold transition-all active:scale-[0.97] disabled:cursor-default',
        state === 'idle' && 'border-gray-200 bg-white text-gray-900 shadow-paper hover:-translate-y-0.5 hover:border-primary/60 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-50',
        state === 'right' && 'animate-pop border-primary bg-primary text-white',
        state === 'reveal' && 'border-primary bg-primary-50 text-primary-dark dark:bg-primary/15 dark:text-primary-light',
        state === 'wrong' && 'animate-shake border-clay bg-clay text-white',
        state === 'dim' && 'border-gray-200 bg-white text-gray-400 opacity-60 dark:border-gray-800 dark:bg-surface-dark',
        className
      )}
    >
      {shortcut && <span className="absolute left-3 top-2 text-[10px] font-bold opacity-40">{shortcut}</span>}
      {children}
    </button>
  )
}

/** The prompt card at the center of a game */
export function PromptCard({ eyebrow, children, sub, className }: { eyebrow?: string; children: ReactNode; sub?: ReactNode; className?: string }) {
  return (
    <div className={cn('paper relative mb-6 px-6 py-8 text-center', className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <div className="font-display text-3xl text-gray-900 dark:text-gray-50 sm:text-4xl">{children}</div>
      {sub && <div className="mt-3 text-gray-500 dark:text-gray-400">{sub}</div>}
    </div>
  )
}
