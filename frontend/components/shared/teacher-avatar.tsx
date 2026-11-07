'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/store/language-store'
import { pickGermanVoice } from '@/lib/german-voice'

interface TeacherAvatarProps {
  text?: string
  /** Changes on every request to speak, so the same text can be heard again */
  speakKey?: number
  isThinking?: boolean
  onSpeakingChange?: (speaking: boolean) => void
  /** Speech speed (user setting), 1 = normal */
  rate?: number
  className?: string
}

// ── Lip-sync ────────────────────────────────────────────────────────
// Mouth shape per letter: open (0-1), width (relative), round (0-1)
type Viseme = { open: number; width: number; round: number }
const REST: Viseme = { open: 0.04, width: 1, round: 0 }
const VISEMES: Record<string, Viseme> = {
  a: { open: 0.95, width: 1.08, round: 0 },
  ä: { open: 0.8, width: 1.12, round: 0 },
  e: { open: 0.5, width: 1.2, round: 0 },
  i: { open: 0.38, width: 1.25, round: 0 },
  y: { open: 0.38, width: 1.2, round: 0 },
  o: { open: 0.72, width: 0.72, round: 1 },
  ö: { open: 0.55, width: 0.75, round: 0.8 },
  u: { open: 0.42, width: 0.58, round: 1 },
  ü: { open: 0.4, width: 0.6, round: 0.9 },
  m: { open: 0, width: 0.95, round: 0 },
  b: { open: 0, width: 0.95, round: 0 },
  p: { open: 0, width: 0.95, round: 0 },
  f: { open: 0.14, width: 1.02, round: 0 },
  v: { open: 0.14, width: 1.02, round: 0 },
  w: { open: 0.18, width: 0.9, round: 0.3 },
}
const CONSONANT: Viseme = { open: 0.3, width: 1, round: 0 }

const visemeFor = (ch: string | undefined): Viseme => {
  if (!ch) return REST
  const c = ch.toLowerCase()
  if (VISEMES[c]) return VISEMES[c]
  return /[a-zß]/.test(c) ? CONSONANT : REST
}

const mouthPath = (open: number, width: number, round: number) => {
  const cx = 120
  const cy = 144
  const w = 11 * width * (1 - 0.25 * round)
  const h = 1.5 + 15 * open
  const lift = 1.5 + h * 0.25 + round * 2
  return (
    `M ${cx - w} ${cy} ` +
    `C ${cx - w * 0.55} ${cy - lift}, ${cx + w * 0.55} ${cy - lift}, ${cx + w} ${cy} ` +
    `C ${cx + w * 0.62} ${cy + h}, ${cx - w * 0.62} ${cy + h}, ${cx - w} ${cy} Z`
  )
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

// ── Palette ─────────────────────────────────────────────────────────
const SKIN = '#E7B48C'
const SKIN_SHADE = '#CF9168'
const HAIR = '#2E2119'
const FEZ = '#C8102E'
const FEZ_TOP = '#9E0B22'
const JACKET = '#0A7A52'
const JACKET_DARK = '#075C3E'
const INK = '#1B1E24'

function Arm({ side, upperRef, foreRef }: {
  side: 'left' | 'right'
  upperRef: React.RefObject<SVGGElement>
  foreRef: React.RefObject<SVGGElement>
}) {
  const x = side === 'left' ? 64 : 176
  return (
    <g transform={`translate(${x} 212)`}>
      <g ref={upperRef}>
        <rect x={-11} y={-8} width={22} height={54} rx={11} fill={JACKET} />
        <g ref={foreRef} transform="translate(0 42)">
          <rect x={-10} y={-4} width={20} height={42} rx={10} fill={JACKET} />
          <rect x={-10} y={32} width={20} height={6} rx={3} fill="#F8FAFC" />
          {/* Hand: palm, thumb and finger hints */}
          <circle cx={0} cy={47} r={10.5} fill={SKIN} />
          <ellipse cx={side === 'left' ? 8 : -8} cy={42} rx={4} ry={6.5} fill={SKIN} transform={`rotate(${side === 'left' ? -35 : 35} ${side === 'left' ? 8 : -8} 42)`} />
          <path d="M -6 53 L -6 57 M -2 54 L -2 58.5 M 2 54 L 2 58.5 M 6 53 L 6 57" stroke={SKIN_SHADE} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      </g>
    </g>
  )
}

/**
 * Herr Schmidt: an animated SVG teacher. Lips follow the German text being
 * spoken (resynced on speech word boundaries), the head nods on each word,
 * hands gesture while talking, wave hello and go to the chin while thinking.
 */
export function TeacherAvatar({ text, speakKey, isThinking = false, onSpeakingChange, rate = 0.85, className }: TeacherAvatarProps) {
  const t = useLanguageStore((s) => s.t)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voicesLoaded, setVoicesLoaded] = useState(false)
  const synthRef = useRef<SpeechSynthesis | null>(null)

  // Animated parts (updated directly in the animation loop, no re-render)
  const bodyRef = useRef<SVGGElement>(null)
  const headRef = useRef<SVGGElement>(null)
  const tasselRef = useRef<SVGGElement>(null)
  const mouthRef = useRef<SVGPathElement>(null)
  const teethRef = useRef<SVGRectElement>(null)
  const eyeRefs = [useRef<SVGEllipseElement>(null), useRef<SVGEllipseElement>(null)]
  const pupilRefs = [useRef<SVGCircleElement>(null), useRef<SVGCircleElement>(null)]
  const browRefs = [useRef<SVGPathElement>(null), useRef<SVGPathElement>(null)]
  const leftUpper = useRef<SVGGElement>(null)
  const leftFore = useRef<SVGGElement>(null)
  const rightUpper = useRef<SVGGElement>(null)
  const rightFore = useRef<SVGGElement>(null)

  // Live state read by the animation loop
  const live = useRef({
    speaking: false,
    thinking: false,
    text: '',
    cps: 11,
    anchorIndex: 0,
    anchorTime: 0,
    speechStart: 0,
    beat: 0,
  })
  live.current.thinking = isThinking
  live.current.cps = 13 * rate

  // ── Speech ──────────────────────────────────────────────────────────

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    synthRef.current = window.speechSynthesis
    const loadVoices = () => {
      if (synthRef.current?.getVoices().length) setVoicesLoaded(true)
    }
    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  const setSpeaking = useCallback(
    (value: boolean) => {
      live.current.speaking = value
      setIsSpeaking(value)
      onSpeakingChange?.(value)
    },
    [onSpeakingChange]
  )

  /** Browser speech, using the most natural German voice available. */
  const speak = useCallback(
    (textToSpeak: string) => {
      const synth = synthRef.current
      if (!synth || !textToSpeak) return
      synth.cancel()
      const utterance = new SpeechSynthesisUtterance(textToSpeak)
      utterance.lang = 'de-DE'
      utterance.rate = rate
      utterance.pitch = 1
      const voice = pickGermanVoice(synth)
      if (voice) utterance.voice = voice

      utterance.onstart = () => {
        const now = performance.now()
        Object.assign(live.current, { text: textToSpeak, anchorIndex: 0, anchorTime: now, speechStart: now, beat: 1 })
        setSpeaking(true)
      }
      // Resync lips on every word the engine reports, and give the head a "beat"
      utterance.onboundary = (e) => {
        if (e.name && e.name !== 'word') return
        Object.assign(live.current, { anchorIndex: e.charIndex, anchorTime: performance.now() })
        live.current.beat = 1
      }
      utterance.onend = () => setSpeaking(false)
      utterance.onerror = () => setSpeaking(false)
      setTimeout(() => synth.speak(utterance), 50)
    },
    [rate, setSpeaking]
  )

  const stopSpeaking = useCallback(() => {
    synthRef.current?.cancel()
    setSpeaking(false)
  }, [setSpeaking])

  // Auto-speak when new text arrives (browser voices may still be loading, so wait a bit longer then)
  useEffect(() => {
    if (!text) return
    const timer = setTimeout(() => speak(text), voicesLoaded ? 300 : 900)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speakKey])

  useEffect(() => () => synthRef.current?.cancel(), [])

  // ── Animation loop ──────────────────────────────────────────────────
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const amp = reduce ? 0.25 : 1
    let frame = 0
    let last = performance.now()
    let nextBlink = last + 2500
    let blinkUntil = 0
    let gazeX = 0
    let gazeY = 0
    let gazeTargetX = 0
    let gazeTargetY = 0
    let nextGaze = last + 1500
    const mouth = { ...REST }
    const w = { speak: 0, think: 0, wave: 0 }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const s = now / 1000
      const L = live.current

      // Smoothly blend between poses
      const waveTarget = L.speaking && now - L.speechStart < 1600 && !reduce ? 1 : 0
      w.speak = lerp(w.speak, L.speaking ? 1 : 0, Math.min(1, dt * 4))
      w.think = lerp(w.think, L.thinking && !L.speaking ? 1 : 0, Math.min(1, dt * 3))
      w.wave = lerp(w.wave, waveTarget, Math.min(1, dt * 5))
      L.beat = Math.max(0, L.beat - dt * 5)

      // Body: breathing
      bodyRef.current?.setAttribute('transform', `translate(0 ${Math.sin(s * 1.9) * 0.9 * amp})`)

      // Head: idle sway + talking bob + word beats + thinking tilt
      const headRot =
        (Math.sin(s * 0.7) * 1.4 +
          w.speak * (Math.sin(s * 2.9) * 3.2 + Math.sin(s * 5.1) * 1.3 - L.beat * 2.5) +
          w.think * (7 + Math.sin(s * 1.2) * 1.5)) * amp
      const headY = (w.speak * (Math.sin(s * 6.2) * 1.1 + L.beat * 1.6) - w.think * 1) * amp
      headRef.current?.setAttribute('transform', `rotate(${headRot.toFixed(2)} 120 172) translate(0 ${headY.toFixed(2)})`)

      // Fez tassel lags behind the head
      const tassel = (-headRot * 1.6 + Math.sin(s * 2.3) * 5 * amp).toFixed(2)
      tasselRef.current?.setAttribute('transform', `rotate(${tassel} 140 33)`)

      // Eyes: blink + gaze
      if (now > nextBlink) {
        blinkUntil = now + 140
        nextBlink = now + 2200 + Math.random() * 3200
      }
      const lid = now < blinkUntil ? 0.12 : 1
      eyeRefs.forEach((r) => r.current?.setAttribute('ry', (7 * lid).toFixed(2)))
      if (now > nextGaze) {
        gazeTargetX = (Math.random() - 0.5) * 3.5
        gazeTargetY = (Math.random() - 0.5) * 2
        nextGaze = now + 900 + Math.random() * 2200
      }
      const tx = w.think > 0.5 ? 2.2 : L.speaking ? gazeTargetX * 0.4 : gazeTargetX
      const ty = w.think > 0.5 ? -2.6 : L.speaking ? 0 : gazeTargetY
      gazeX = lerp(gazeX, tx, Math.min(1, dt * 6))
      gazeY = lerp(gazeY, ty, Math.min(1, dt * 6))
      pupilRefs.forEach((r, i) => {
        r.current?.setAttribute('cx', (i === 0 ? 101 : 139 + 0) + gazeX + '')
        r.current?.setAttribute('cy', 109 + gazeY + '')
        r.current?.setAttribute('opacity', lid < 1 ? '0' : '1')
      })

      // Eyebrows: raise on word beats and when thinking
      const brow = -(L.beat * 2.2 + w.think * 2.5 + w.speak * Math.max(0, Math.sin(s * 1.7)) * 1.2) * amp
      browRefs.forEach((r, i) =>
        r.current?.setAttribute('transform', `translate(0 ${brow.toFixed(2)}) rotate(${(i === 0 ? -1 : 1) * w.think * 6} ${i === 0 ? 101 : 139} 92)`)
      )

      // Mouth: estimated character position in the spoken text
      let target = REST
      if (L.speaking) {
        const idx = Math.floor(L.anchorIndex + ((now - L.anchorTime) / 1000) * L.cps)
        target =
          idx < L.text.length
            ? visemeFor(L.text[idx])
            : { open: 0.25 + 0.25 * Math.abs(Math.sin(s * 13)), width: 1, round: 0 } // engine ran past our estimate
        const jitter = 0.88 + 0.12 * Math.sin(s * 23)
        target = { ...target, open: target.open * jitter }
      } else if (w.think > 0.5) {
        target = { open: 0.06, width: 0.75, round: 0.4 } // "hmm"
      }
      const k = Math.min(1, dt * 20)
      mouth.open = lerp(mouth.open, target.open, k)
      mouth.width = lerp(mouth.width, target.width, k)
      mouth.round = lerp(mouth.round, target.round, k)
      mouthRef.current?.setAttribute('d', mouthPath(mouth.open, mouth.width, mouth.round))
      teethRef.current?.setAttribute('opacity', mouth.open > 0.35 ? '1' : '0')
      teethRef.current?.setAttribute('width', (14 * mouth.width).toFixed(1))
      teethRef.current?.setAttribute('x', (120 - 7 * mouth.width).toFixed(1))

      // Arms. Angles in degrees around the shoulder / elbow (0 = hanging down).
      // Viewer-left arm: secondary gestures, hand to chin when thinking.
      const altPhase = (Math.sin(s * 0.45) + 1) / 2 // alternates which hand leads
      // Gesture angles solved so the hands come up to about chin height (~y 185)
      const lSpeakU = -58 + Math.sin(s * 2.3 + 1) * 8 - L.beat * 5
      const lSpeakF = -130 + Math.sin(s * 3.1) * 14
      // Thinking: hand on the chin (solved: upper -84, fore -92)
      const lU = lerp(lerp(8, lSpeakU, w.speak * (0.35 + 0.65 * (1 - altPhase))), -84, w.think)
      const lF = lerp(lerp(-5, lSpeakF, w.speak * (0.35 + 0.65 * (1 - altPhase))), -92 + Math.sin(s * 1.5) * 3, w.think)
      // Viewer-right arm: main explaining hand, waves hello when speech starts
      const rSpeakU = 56 + Math.sin(s * 2.1) * 9 + L.beat * 6
      const rSpeakF = 130 + Math.sin(s * 3.6 + 0.5) * 16
      const rWaveU = -150
      const rWaveF = -35 + Math.sin(s * 13) * 22
      let rU = lerp(-8, rSpeakU, w.speak * (0.35 + 0.65 * altPhase))
      let rF = lerp(5, rSpeakF, w.speak * (0.35 + 0.65 * altPhase))
      rU = lerp(rU, rWaveU, w.wave)
      rF = lerp(rF, rWaveF, w.wave)

      const set = (ref: React.RefObject<SVGGElement>, angle: number, extra = '') =>
        ref.current?.setAttribute('transform', `${extra}rotate(${(angle * (reduce ? 0.6 : 1)).toFixed(2)})`)
      set(leftUpper, lU)
      set(leftFore, lF, 'translate(0 42) ')
      set(rightUpper, rU)
      set(rightFore, rF, 'translate(0 42) ')

      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // Refs are stable; the loop reads live state from `live`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    if (isSpeaking) stopSpeaking()
    else if (text) speak(text)
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <button
        onClick={handleClick}
        className="relative group cursor-pointer rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        title={isSpeaking ? t.aiTeacher.clickToStop : t.aiTeacher.clickToSpeak}
        aria-label={isSpeaking ? t.aiTeacher.clickToStop : t.aiTeacher.clickToSpeak}
      >
        {/* Glow */}
        <div
          className={cn(
            'absolute inset-2 rounded-full blur-2xl transition-all duration-500',
            isSpeaking ? 'bg-primary/45 scale-110' : isThinking ? 'bg-saffron/40 scale-105' : 'bg-primary/20'
          )}
        />

        <div className="relative z-10 size-52 overflow-hidden rounded-full border-4 border-white bg-gradient-to-b from-primary-50 to-[#BFE8D6] shadow-lift dark:border-gray-700 dark:from-[#123528] dark:to-[#0B2219]">
          <svg viewBox="0 0 240 250" className="h-full w-full" role="img" aria-label="Herr Schmidt">
            {/* Backdrop pattern */}
            <g opacity={0.18} stroke={JACKET} fill="none" strokeWidth={1}>
              <rect x={95} y={-10} width={50} height={50} transform="rotate(45 120 15)" />
              <circle cx={120} cy={15} r={46} />
            </g>

            <g ref={bodyRef}>
              {/* Torso */}
              <path d="M36 252 C 40 216, 66 196, 96 191 L 144 191 C 174 196, 200 216, 204 252 Z" fill={JACKET} />
              <path d="M96 191 L 112 191 L 120 222 L 104 252 L 86 252 Z" fill={JACKET_DARK} />
              <path d="M144 191 L 128 191 L 120 222 L 136 252 L 154 252 Z" fill={JACKET_DARK} />
              <path d="M106 191 L 120 220 L 134 191 Z" fill="#F8FAFC" />
              {/* Bow tie */}
              <path d="M108 196 L 120 202 L 108 208 Z M132 196 L 120 202 L 132 208 Z" fill="#FFC233" />
              <circle cx={120} cy={202} r={3} fill="#E0A100" />
              {/* Neck */}
              <rect x={107} y={164} width={26} height={32} rx={9} fill={SKIN_SHADE} />

              {/* Head */}
              <g ref={headRef}>
                <ellipse cx={73} cy={118} rx={7} ry={11} fill={SKIN_SHADE} />
                <ellipse cx={167} cy={118} rx={7} ry={11} fill={SKIN_SHADE} />
                <ellipse cx={120} cy={115} rx={47} ry={55} fill={SKIN} />
                {/* Side hair */}
                <path d="M74 98 C 74 84, 80 76, 88 72 L 86 102 Z M166 98 C 166 84, 160 76, 152 72 L 154 102 Z" fill={HAIR} />
                {/* Beard */}
                <path d="M74 112 C 74 156, 96 172, 120 172 C 144 172, 166 156, 166 112 C 162 138, 148 152, 120 152 C 92 152, 78 138, 74 112 Z" fill={HAIR} />
                {/* Cheeks */}
                <circle cx={90} cy={128} r={7} fill="#E88B7A" opacity={0.35} />
                <circle cx={150} cy={128} r={7} fill="#E88B7A" opacity={0.35} />
                {/* Nose */}
                <path d="M120 104 C 115 117, 113 124, 119 126 C 123 127, 127 125, 125 121" stroke={SKIN_SHADE} strokeWidth={2.4} fill="none" strokeLinecap="round" />

                {/* Mouth (shape animated) */}
                <path ref={mouthRef} d={mouthPath(REST.open, REST.width, REST.round)} fill="#5B1B1B" stroke="#A44545" strokeWidth={2.2} strokeLinejoin="round" />
                <rect ref={teethRef} x={113} y={141.5} width={14} height={3.2} rx={1.2} fill="#FFFFFF" opacity={0} />
                {/* Moustache */}
                <path d="M98 137 C 104 128, 115 130, 120 134 C 125 130, 136 128, 142 137 C 134 136.5, 126 137, 120 139 C 114 137, 106 136.5, 98 137 Z" fill={HAIR} />

                {/* Eyes */}
                <ellipse ref={eyeRefs[0]} cx={101} cy={108} rx={7.5} ry={7} fill="#FFFFFF" />
                <ellipse ref={eyeRefs[1]} cx={139} cy={108} rx={7.5} ry={7} fill="#FFFFFF" />
                <circle ref={pupilRefs[0]} cx={101} cy={109} r={3.6} fill={INK} />
                <circle ref={pupilRefs[1]} cx={139} cy={109} r={3.6} fill={INK} />
                {/* Glasses */}
                <g stroke={INK} strokeWidth={2.6} fill="#FFFFFF" fillOpacity={0.08}>
                  <circle cx={101} cy={108} r={13} />
                  <circle cx={139} cy={108} r={13} />
                  <path d="M114 106 Q 120 101, 126 106 M 88 106 L 76 103 M 152 106 L 164 103" fill="none" />
                </g>
                {/* Eyebrows */}
                <path ref={browRefs[0]} d="M89 92 Q 101 85, 113 91" stroke={HAIR} strokeWidth={3.6} fill="none" strokeLinecap="round" />
                <path ref={browRefs[1]} d="M127 91 Q 139 85, 151 92" stroke={HAIR} strokeWidth={3.6} fill="none" strokeLinecap="round" />

                {/* Fez (tarbouche) with swinging tassel */}
                <path d="M83 72 L 92 34 Q 120 26, 148 34 L 157 72 Q 120 80, 83 72 Z" fill={FEZ} />
                <ellipse cx={120} cy={33} rx={28} ry={6} fill={FEZ_TOP} />
                <g ref={tasselRef}>
                  <path d="M120 31 Q 132 30, 140 33 L 140 58" stroke={INK} strokeWidth={2} fill="none" />
                  <path d="M136 56 L 144 56 L 147 70 L 133 70 Z" fill={INK} />
                </g>
              </g>
            </g>

            {/* Arms are drawn last so gesturing hands pass in front of the body */}
            <Arm side="left" upperRef={leftUpper} foreRef={leftFore} />
            <Arm side="right" upperRef={rightUpper} foreRef={rightFore} />
          </svg>
        </div>

        {/* Hover hint */}
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-full bg-black/0 transition-colors group-hover:bg-black/10">
          <span className="material-symbols-outlined text-4xl text-white opacity-0 drop-shadow-lg transition-opacity group-hover:opacity-100">
            {isSpeaking ? 'stop_circle' : 'play_circle'}
          </span>
        </div>
      </button>

      {/* Status */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Herr Schmidt</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{t.aiTeacher.teacherRole}</p>
        <div
          className={cn(
            'mt-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all',
            isSpeaking
              ? 'bg-primary text-white'
              : isThinking
              ? 'bg-saffron-50 text-saffron-dark dark:bg-saffron/15 dark:text-saffron'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
          )}
        >
          <span
            className={cn(
              'size-2 rounded-full',
              isSpeaking ? 'bg-white animate-pulse' : isThinking ? 'bg-saffron animate-pulse' : 'bg-primary'
            )}
          />
          {isSpeaking ? t.aiTeacher.statusSpeaking : isThinking ? t.aiTeacher.thinking : t.aiTeacher.statusReady}
        </div>
      </div>
    </div>
  )
}
