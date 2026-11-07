'use client'

import { cn } from '@/lib/utils'
import { useGermanSpeech } from '@/hooks/use-german-speech'

interface AudioButtonProps {
  text: string
  /** Speech rate; 0.7 for a slow repeat */
  rate?: number
  /** Character voice for dialogue lines (defaults to the narrator) */
  voice?: string
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

/** Plays a German text; tap again to stop. */
export function AudioButton({ text, rate, voice, size = 'sm', label, className }: AudioButtonProps) {
  const { current, speak, stop } = useGermanSpeech()
  const isPlaying = current === text

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        if (isPlaying) stop()
        else speak(text, rate, voice)
      }}
      aria-label={label ?? text}
      title={label}
      className={cn(
        'inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full transition-colors',
        size === 'sm' && 'size-8 text-primary hover:bg-primary/10 dark:text-primary-light',
        size === 'md' && 'size-11 bg-primary/10 text-primary hover:bg-primary/20 dark:text-primary-light',
        size === 'lg' && 'h-14 px-6 bg-primary text-white shadow-lift hover:bg-primary-dark',
        isPlaying && size !== 'lg' && 'bg-primary text-white hover:bg-primary-dark dark:text-white',
        className
      )}
    >
      <span className={cn('material-symbols-outlined', size === 'sm' ? 'text-xl' : 'text-2xl', isPlaying && 'animate-pulse')}>
        {isPlaying ? 'graphic_eq' : rate && rate < 0.8 ? 'slow_motion_video' : 'volume_up'}
      </span>
      {size === 'lg' && label && <span className="font-semibold">{label}</span>}
    </button>
  )
}
