/**
 * Voice casting for lesson dialogues: every character gets their own neural voice
 * (Microsoft neural voices, pre-generated into the database and served by /api/tts),
 * and two speakers in the same dialogue never share one.
 */

export type Gender = 'f' | 'm'

/** Narrator / Herr Schmidt: vocabulary, examples and everything that is not a dialogue line */
export const NARRATOR_VOICE = 'conrad'

/** Voice id → neural voice, gender and a browser-voice pitch (used when a clip is missing) */
export const VOICES: Record<string, { neural: string; gender: Gender; pitch: number }> = {
  conrad: { neural: 'de-DE-ConradNeural', gender: 'm', pitch: 1 },
  florian: { neural: 'de-DE-FlorianMultilingualNeural', gender: 'm', pitch: 1.1 },
  killian: { neural: 'de-DE-KillianNeural', gender: 'm', pitch: 0.88 },
  // Only for the rare dialogue with more men than the three German male voices
  jonas: { neural: 'de-AT-JonasNeural', gender: 'm', pitch: 1.18 },
  katja: { neural: 'de-DE-KatjaNeural', gender: 'f', pitch: 1 },
  amala: { neural: 'de-DE-AmalaNeural', gender: 'f', pitch: 1.12 },
  seraphina: { neural: 'de-DE-SeraphinaMultilingualNeural', gender: 'f', pitch: 0.9 },
  ingrid: { neural: 'de-AT-IngridNeural', gender: 'f', pitch: 1.2 },
}

// Herr Schmidt's voice comes last among the men, so characters rarely sound like the narrator
const POOLS: Record<Gender, string[]> = {
  f: ['katja', 'amala', 'seraphina', 'ingrid'],
  m: ['florian', 'killian', NARRATOR_VOICE, 'jonas'],
}

/**
 * Position of a voice among its gender's voices (the narrator first), used to give each
 * character a different browser voice when a clip is missing.
 */
export function browserVoiceSlot(voiceId: string): number {
  if (voiceId === NARRATOR_VOICE) return 0
  const gender = VOICES[voiceId]?.gender ?? 'm'
  const pool = POOLS[gender].filter((v) => v !== NARRATOR_VOICE)
  return Math.max(0, pool.indexOf(voiceId)) + (gender === 'm' ? 1 : 0)
}

/** The recurring cast always sounds the same across all lessons */
const CAST: Record<string, string> = {
  Salma: 'katja',
  Olena: 'amala',
  Nina: 'seraphina',
  'Frau Weber': 'seraphina',
  Monika: 'amala',
  Mama: 'seraphina',
  'Oma (am Telefon)': 'seraphina',
  Youssef: 'florian',
  Lukas: 'killian',
  Mehmet: 'killian',
  Jonas: 'killian',
  Tim: 'killian',
  'Herr Brandt': NARRATOR_VOICE,
  'Herr Krüger': NARRATOR_VOICE,
  Ben: 'killian',
  'Dr. Kessler': 'seraphina',
  'Frau Kessler': 'seraphina',
  'Frau Lang': 'amala',
}

const FEMALE_NAMES = new Set([
  'salma', 'olena', 'nina', 'monika', 'anna', 'elif', 'mama', 'oma', 'leila', 'samira', 'katrin', 'sara', 'lena', 'fatima',
])
// Doctors and experts appear without "Frau" in some dialogues; some announcers are female too
const FEMALE_TITLES = new Set(['dr. kessler', 'dr. lorenz', 'dr. braun', 'stationsleitung', 'sprecherin', 'praxis', 'rezeption', 'bahnhof'])

/** Best guess from the speaker label: "Frau …", female names and role nouns in -in (Verkäuferin, Ärztin …) */
export function speakerGender(speaker: string): Gender {
  const s = speaker.trim().toLowerCase()
  if (s.startsWith('herr ') || s.startsWith('prof.')) return 'm'
  if (s.startsWith('frau ') || FEMALE_TITLES.has(s)) return 'f'
  const first = s.split(/[\s(]/)[0]
  if (FEMALE_NAMES.has(first)) return 'f'
  if (/^[a-zäöü]+(erin|orin|tin|in)$/.test(first) && first.length > 5) return 'f'
  return 'm'
}

const hash = (text: string) => [...text].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)

/** One voice per speaker of a dialogue, all different from each other */
export function castVoices(speakers: string[]): Record<string, string> {
  const unique = Array.from(new Set(speakers))
  const used = new Set<string>()
  const result: Record<string, string> = {}

  // Recurring characters first, so they keep their usual voice
  for (const speaker of unique) {
    const voice = CAST[speaker]
    if (voice && !used.has(voice)) {
      result[speaker] = voice
      used.add(voice)
    }
  }
  for (const speaker of unique) {
    if (result[speaker]) continue
    // Standard German voices first; the Austrian one only when all three are taken
    const pool = POOLS[speakerGender(speaker)]
    const german = pool.filter((v) => VOICES[v].neural.startsWith('de-DE'))
    const start = hash(speaker) % german.length
    const voice =
      [...german.slice(start), ...german.slice(0, start), ...pool].find((v) => !used.has(v)) ??
      [...POOLS.f, ...POOLS.m].find((v) => !used.has(v)) ??
      NARRATOR_VOICE
    result[speaker] = voice
    used.add(voice)
  }
  return result
}
