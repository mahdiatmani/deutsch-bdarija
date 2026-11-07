'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { ApiError, fetchLessonAudio } from '@/lib/api'
import { germanVoicesOf, pickGermanVoice } from '@/lib/german-voice'
import { NARRATOR_VOICE, VOICES, browserVoiceSlot } from '@/lib/character-voices'
import { useAuthStore } from '@/store/auth-store'

/** A German text and the voice that speaks it (dialogue characters each have their own) */
export type SpeechItem = string | { text: string; voice?: string }

/**
 * One German player for the whole page: starting a clip stops the previous one.
 * Plays the neural clips pre-generated into the database (/api/tts, see
 * backend/api-gateway/scripts/generate-lesson-audio.ts) and falls back to the browser
 * voice for a text without a clip. The browser keeps a copy of each clip in Cache Storage.
 */

const cache = new Map<string, string>() // `${voice}|${rate}|${text}` -> object URL
let neuralRetryAt = 0
const missing = new Set<string>() // texts the database has no clip for
let generation = 0
let audio: HTMLAudioElement | null = null
let playing: string | null = null
const listeners = new Set<() => void>()

const setPlaying = (text: string | null) => {
  playing = text
  listeners.forEach((l) => l())
}

export function stopGerman() {
  generation++
  if (audio) {
    audio.onended = null
    audio.onerror = null
    audio.pause()
    audio = null
  }
  if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
  setPlaying(null)
}

function speakWithBrowser(text: string, rate: number, voiceId: string, gen: number): Promise<void> {
  return new Promise((resolve) => {
    const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined
    if (!synth) return resolve()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = rate
    // No neural voices: keep characters apart with a different browser voice of their gender
    // where the browser has several, and a different pitch
    const profile = VOICES[voiceId] ?? VOICES[NARRATOR_VOICE]
    utterance.pitch = profile.pitch
    const sameGender = germanVoicesOf(synth, profile.gender)
    const voice = sameGender.length
      ? sameGender[browserVoiceSlot(voiceId) % sameGender.length]
      : pickGermanVoice(synth, profile.gender)
    if (voice) utterance.voice = voice
    const done = () => {
      if (gen === generation) setPlaying(null)
      resolve()
    }
    utterance.onend = done
    utterance.onerror = done
    synth.speak(utterance)
  })
}

// Clips are also kept in the browser's Cache Storage, so a lesson played before needs no request at all
const AUDIO_CACHE = 'lesson-audio-v2'
if (typeof caches !== 'undefined') caches.delete('lesson-audio-v1').catch(() => {})
const cacheRequest = (key: string) => new Request(`/__lesson-audio/${encodeURIComponent(key)}`)

async function readStoredClip(key: string): Promise<Blob | null> {
  try {
    if (typeof caches === 'undefined') return null
    const hit = await (await caches.open(AUDIO_CACHE)).match(cacheRequest(key))
    return hit ? await hit.blob() : null
  } catch {
    return null
  }
}

async function keepClip(key: string, blob: Blob): Promise<void> {
  try {
    if (typeof caches === 'undefined') return
    await (await caches.open(AUDIO_CACHE)).put(cacheRequest(key), new Response(blob, { headers: { 'Content-Type': blob.type || 'audio/wav' } }))
  } catch {
    // Storage full or unavailable (private window): the server still has the clip
  }
}

async function neuralUrl(text: string, rate: number, voice: string, token: string): Promise<string | null> {
  const key = `${voice}|${rate}|${text}`
  const cached = cache.get(key)
  if (cached) return cached

  const kept = await readStoredClip(key)
  if (kept) {
    const url = URL.createObjectURL(kept)
    cache.set(key, url)
    return url
  }

  if (missing.has(key) || Date.now() < neuralRetryAt) return null
  try {
    const blob = await fetchLessonAudio(text, rate, voice, token)
    const url = URL.createObjectURL(blob)
    cache.set(key, url)
    void keepClip(key, blob)
    return url
  } catch (error) {
    // No clip for this text (new content not generated yet): browser voice from now on.
    // API unreachable: browser voice, and try again in a minute
    if (error instanceof ApiError && error.status === 404) missing.add(key)
    else neuralRetryAt = Date.now() + 60_000
    return null
  }
}

/** Speak one German text; resolves when it finished (or was interrupted). */
export async function speakGerman(text: string, token: string | null, rate = 0.9, voice = NARRATOR_VOICE): Promise<void> {
  stopGerman()
  const gen = generation
  setPlaying(text)

  const url = token ? await neuralUrl(text, rate, voice, token) : null
  if (gen !== generation) return
  if (!url) return speakWithBrowser(text, rate, voice, gen)

  return new Promise((resolve) => {
    const player = new Audio(url)
    audio = player
    const done = () => {
      if (gen === generation) {
        audio = null
        setPlaying(null)
      }
      resolve()
    }
    player.onended = done
    player.onerror = done
    player.play().catch(() => {
      // Autoplay blocked or broken file: fall back to the browser voice
      if (gen !== generation) return resolve()
      audio = null
      speakWithBrowser(text, rate, voice, gen).then(resolve)
    })
  })
}

/** Speak several texts one after the other; stops if anything else starts playing. */
export async function speakGermanSequence(items: SpeechItem[], token: string | null, rate = 0.9): Promise<void> {
  for (const item of items) {
    const { text, voice } = typeof item === 'string' ? { text: item, voice: undefined } : item
    const before = generation
    await speakGerman(text, token, rate, voice)
    // speakGerman bumps the generation once; any further change means the user started something else
    if (generation !== before + 1) return
    await new Promise((r) => setTimeout(r, 250))
    if (generation !== before + 1) return
  }
}

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** The text currently being spoken (or null), plus helpers bound to the user's token */
export function useGermanSpeech() {
  const token = useAuthStore((s) => s.token)
  const current = useSyncExternalStore(subscribe, () => playing, () => null)
  const speak = useCallback((text: string, rate?: number, voice?: string) => speakGerman(text, token, rate, voice), [token])
  const speakAll = useCallback((items: SpeechItem[], rate?: number) => speakGermanSequence(items, token, rate), [token])
  return { current, speak, speakAll, stop: stopGerman }
}
