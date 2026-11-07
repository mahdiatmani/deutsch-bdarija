import { cn } from '@/lib/utils'

/** Eight-point zellige star (khatam) with a saffron heart: the brand mark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn('size-9', className)} aria-hidden="true">
      <g transform="translate(20 20)">
        <rect x="-13" y="-13" width="26" height="26" rx="3" className="fill-primary" />
        <rect x="-13" y="-13" width="26" height="26" rx="3" transform="rotate(45)" className="fill-primary" />
        <rect x="-8.5" y="-8.5" width="17" height="17" rx="1.5" className="fill-saffron" />
        <rect x="-8.5" y="-8.5" width="17" height="17" rx="1.5" transform="rotate(45)" className="fill-saffron" />
        <circle r="4.2" className="fill-ink" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  compact = false,
  tone = 'auto',
}: {
  className?: string
  compact?: boolean
  /** 'light' for use on dark backgrounds regardless of theme */
  tone?: 'auto' | 'light'
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <LogoMark />
      {!compact && (
        <span className="leading-none">
          <span
            className={cn(
              'block font-display text-[1.35rem] font-semibold tracking-tight',
              tone === 'light' ? 'text-gray-50' : 'text-gray-900 dark:text-gray-50'
            )}
          >
            Deutsch <span className={cn('de mr-px', tone === 'light' ? 'text-saffron' : 'text-primary dark:text-saffron')}>b’</span>Darija
          </span>
        </span>
      )}
    </span>
  )
}
