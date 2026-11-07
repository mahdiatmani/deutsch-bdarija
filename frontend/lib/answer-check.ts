import type { AnswerResult, Exercise } from '@/types/lesson'

/** Punctuation, quotes and extra spaces never make an answer wrong */
const strip = (s: string) =>
  s
    .normalize('NFC')
    .replace(/[’‘`´]/g, "'")
    .replace(/[.,!?;:„“"«»()…–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/** Learners without a German keyboard type ae/oe/ue/ss */
const flattenSpelling = (s: string) =>
  s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue').replace(/ß/g, 'ss')

/**
 * Compare one typed answer against the accepted forms.
 * Exact (ignoring punctuation) → correct; differs only in capital letters → correct with a "case" note;
 * differs only in ä/ö/ü/ß spelled ae/oe/ue/ss → correct with a "spelling" note.
 */
export function matchText(given: string, accepted: string[]): { correct: boolean; note?: 'case' | 'spelling' } {
  const g = strip(given)
  if (!g) return { correct: false }
  for (const a of accepted) {
    if (strip(a) === g) return { correct: true }
  }
  for (const a of accepted) {
    if (strip(a).toLowerCase() === g.toLowerCase()) return { correct: true, note: 'case' }
  }
  const gf = flattenSpelling(g).toLowerCase()
  for (const a of accepted) {
    if (flattenSpelling(strip(a)).toLowerCase() === gf) return { correct: true, note: 'spelling' }
  }
  return { correct: false }
}

/** Check an exercise answer. `given` is a string, a list of gap answers, or a list of tiles/matches. */
export function checkAnswer(exercise: Exercise, given: string | string[]): AnswerResult {
  switch (exercise.kind) {
    case 'choice': {
      const idx = Number(given)
      return {
        correct: idx === exercise.answer,
        given,
        expected: exercise.options[exercise.answer],
      }
    }
    case 'gap': {
      const values = Array.isArray(given) ? given : [given]
      let note: AnswerResult['note']
      const correct = exercise.answers.every((accepted, i) => {
        const r = matchText(values[i] ?? '', accepted)
        if (r.note && !note) note = r.note
        return r.correct
      })
      return { correct, note: correct ? note : undefined, given, expected: exercise.answers.map((a) => a[0]).join(' … ') }
    }
    case 'order': {
      const sentence = Array.isArray(given) ? given.join(' ') : given
      const r = matchText(sentence, exercise.accept)
      return { ...r, given, expected: exercise.accept[0] }
    }
    case 'match': {
      const chosen = Array.isArray(given) ? given : []
      const correct = exercise.pairs.every(([, right], i) => chosen[i] === right)
      return { correct, given }
    }
    case 'translate':
    case 'dictation': {
      const r = matchText(Array.isArray(given) ? given.join(' ') : given, exercise.accept)
      return { ...r, given, expected: exercise.accept[0] }
    }
  }
}

/** Similarity (0–1) between a spoken transcript and a model sentence, by shared words */
export function speechSimilarity(transcript: string, model: string): number {
  const words = (s: string) => flattenSpelling(strip(s)).toLowerCase().split(' ').filter(Boolean)
  const said = words(transcript)
  const target = words(model)
  if (!target.length) return 0
  const pool = [...said]
  let hits = 0
  for (const w of target) {
    const i = pool.indexOf(w)
    if (i !== -1) {
      hits++
      pool.splice(i, 1)
    }
  }
  return hits / Math.max(target.length, said.length)
}
