import type { BankWord, GameBank } from '@/types/games'

export const shuffle = <T,>(items: readonly T[]): T[] => {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Words for a round: up to half are words the spaced repetition says are due
 * (retrieval at the right time is what makes words stick), the rest random.
 */
export function pickWords(bank: GameBank, count: number, filter: (w: BankWord) => boolean = () => true): BankWord[] {
  const due = shuffle(bank.due.filter(filter)).slice(0, Math.ceil(count / 2))
  const taken = new Set(due.map((w) => w.de))
  const rest = shuffle(bank.words.filter((w) => filter(w) && !taken.has(w.de)))
  return shuffle([...due, ...rest.slice(0, count - due.length)])
}

/** An endless supply of words: reshuffles the pool when it runs out */
export function wordStream(bank: GameBank, filter: (w: BankWord) => boolean = () => true) {
  const pool = [...bank.due.filter(filter), ...bank.words.filter(filter)]
  const unique = Array.from(new Map(pool.map((w) => [w.de, w])).values())
  let queue = pickWords(bank, unique.length, filter)
  return () => {
    if (!queue.length) queue = shuffle(unique)
    return queue.pop()!
  }
}

/** `count` wrong options for `answer`: different text, preferably the same kind of word */
export function distractors(answer: BankWord, pool: BankWord[], count: number, key: (w: BankWord) => string = (w) => w.de): BankWord[] {
  const target = key(answer)
  const sameKind = (w: BankWord) => !!w.noun === !!answer.noun
  const candidates = shuffle(pool.filter((w) => key(w) !== target && w.dar !== answer.dar))
  const unique = (list: BankWord[]) => Array.from(new Map(list.map((w) => [key(w), w])).values())
  return unique([...candidates.filter(sameKind), ...candidates]).slice(0, count)
}

/** Text shown for a word in German: nouns with their article */
export const germanOf = (w: BankWord) => w.de

/** Plausible but wrong plurals for a noun (Apfel → Apfels, Apfeln, Apfele …) */
export function pluralDistractors(noun: string, correct: string, count: number): string[] {
  const umlaut = (s: string) => {
    const m = s.match(/^(.*?)(au|a|o|u)([^aouäöü]*)$/i)
    if (!m) return s
    const map: Record<string, string> = { au: 'äu', a: 'ä', o: 'ö', u: 'ü', Au: 'Äu', A: 'Ä', O: 'Ö', U: 'Ü' }
    return m[1] + (map[m[2]] ?? m[2]) + m[3]
  }
  const endsE = /e$/.test(noun)
  const options = endsE
    ? [noun + 'n', noun + 's', noun, umlaut(noun) + 'n', noun + 'en']
    : [noun + 'e', noun + 'en', noun + 'n', noun + 'er', noun + 's', noun, umlaut(noun) + 'e', umlaut(noun) + 'er', umlaut(noun)]
  return shuffle(Array.from(new Set(options)).filter((o) => o !== correct)).slice(0, count)
}

/** Combo → score multiplier: x2 from 5 in a row, x3 from 10, x4 from 15 */
export const multiplierFor = (combo: number) => Math.min(4, 1 + Math.floor(combo / 5))

/** Letters of a word in a different order (never the original order) */
export function scramble(word: string): string[] {
  const letters = [...word]
  if (new Set(letters).size < 2) return letters
  let mixed = shuffle(letters)
  while (mixed.join('') === word) mixed = shuffle(letters)
  return mixed
}
