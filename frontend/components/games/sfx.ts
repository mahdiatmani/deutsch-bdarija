/**
 * Small synthesized game sounds (no audio files): a rising "ding" whose pitch climbs
 * with the combo, a soft buzz for mistakes, and a fanfare at the end.
 */

const STORAGE_KEY = 'games-sound'
let ctx: AudioContext | null = null
let muted: boolean | null = null

export function isMuted(): boolean {
  if (muted === null) {
    try {
      muted = localStorage.getItem(STORAGE_KEY) === 'off'
    } catch {
      muted = false
    }
  }
  return muted
}

export function setMuted(value: boolean) {
  muted = value
  try {
    localStorage.setItem(STORAGE_KEY, value ? 'off' : 'on')
  } catch {
    // Storage unavailable: the setting lasts for this page only
  }
}

function audio(): AudioContext | null {
  if (typeof window === 'undefined' || isMuted()) return null
  try {
    ctx ??= new AudioContext()
    if (ctx.state === 'suspended') ctx.resume().catch(() => {})
    return ctx
  } catch {
    return null
  }
}

function tone(freq: number, start: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) {
  const c = audio()
  if (!c) return
  const osc = c.createOscillator()
  const gain = c.createGain()
  osc.type = type
  osc.frequency.value = freq
  const t = c.currentTime + start
  gain.gain.setValueAtTime(0, t)
  gain.gain.linearRampToValueAtTime(volume, t + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration)
  osc.connect(gain).connect(c.destination)
  osc.start(t)
  osc.stop(t + duration + 0.02)
}

export const sfx = {
  correct(combo = 0) {
    const base = 660 * Math.pow(2, Math.min(combo, 12) / 12) // one semitone higher per answer in a row
    tone(base, 0, 0.12, 'triangle')
    tone(base * 1.5, 0.07, 0.16, 'triangle')
  },
  wrong() {
    tone(180, 0, 0.18, 'sawtooth', 0.07)
    tone(140, 0.08, 0.22, 'sawtooth', 0.06)
  },
  combo() {
    ;[880, 1108, 1318, 1760].forEach((f, i) => tone(f, i * 0.06, 0.14, 'square', 0.06))
  },
  tick() {
    tone(1200, 0, 0.05, 'square', 0.04)
  },
  flip() {
    tone(520, 0, 0.06, 'triangle', 0.08)
  },
  finish(newBest = false) {
    const notes = newBest ? [523, 659, 784, 1047, 1319] : [523, 659, 784, 1047]
    notes.forEach((f, i) => tone(f, i * 0.11, 0.3, 'triangle', 0.12))
  },
}
