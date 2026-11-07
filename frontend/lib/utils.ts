import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export function calculateProgress(current: number, total: number): number {
  if (total === 0) return 0
  return Math.round((current / total) * 100)
}

export function formatXP(xp: number): string {
  if (xp >= 1000) {
    // 1000 -> 1k, 1540 -> 1.5k, 12345 -> 12.3k
    return `${(Math.floor(xp / 100) / 10).toString()}k`
  }
  return xp.toString()
}

/** Fill `{name}` placeholders in a translation string. */
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match))
}

/** Translated message for an API error code, falling back to the server's message. */
export function getErrorMessage(
  errors: Record<string, string> & { generic: string },
  error: unknown
): string {
  const code = (error as { code?: string } | null)?.code
  if (code && errors[code]) return errors[code]
  return error instanceof Error && error.message ? error.message : errors.generic
}
