import type { BankWord, GameBank, GameId } from '@/types/games'

export type GameCategory = 'words' | 'grammar' | 'listening' | 'sentences' | 'arcade'

export interface GameMeta {
  id: GameId
  /** German name, the same in every app language */
  name: string
  icon: string
  /** Card colors: [from, to] of the gradient, and whether text on it should be dark */
  colors: [string, string]
  darkText?: boolean
  category: GameCategory
  /** Timed games: round length in seconds; otherwise the number of rounds */
  seconds?: number
  rounds?: number
  /** A German word shown on the card, for flavor */
  sample: string
  /** Whether the bank has enough material for a round */
  playable: (bank: GameBank) => boolean
}

const count = (bank: GameBank, filter: (w: BankWord) => boolean) => bank.words.filter(filter).length
export const isNoun = (w: BankWord) => !!w.article
export const hasPlural = (w: BankWord) => !!w.plural
/** One word of 3–10 letters (for scrambling and spelling) */
export const isSingleWord = (w: BankWord) => /^[A-Za-zÄÖÜäöüß]{3,10}$/.test(w.noun ?? w.de)

export const GAMES: GameMeta[] = [
  {
    id: 'artikel', name: 'Der Die Das', icon: 'category', colors: ['#3A6FF8', '#7C5CFF'],
    category: 'grammar', seconds: 60, sample: 'die Küche',
    playable: (b) => count(b, isNoun) >= 10,
  },
  {
    id: 'match', name: 'Match-Rausch', icon: 'link', colors: ['#00A36C', '#1BC489'],
    category: 'words', seconds: 75, sample: 'der Apfel',
    playable: (b) => b.words.length >= 10,
  },
  {
    id: 'rain', name: 'Wortregen', icon: 'thunderstorm', colors: ['#5B3FD9', '#3A6FF8'],
    category: 'arcade', sample: 'regnen',
    playable: (b) => b.words.length >= 10,
  },
  {
    id: 'truefalse', name: 'Richtig oder Falsch', icon: 'rule', colors: ['#FF5C4D', '#FF8A00'],
    category: 'words', seconds: 60, sample: 'richtig',
    playable: (b) => b.words.length >= 10,
  },
  {
    id: 'listen', name: 'Hör-Blitz', icon: 'hearing', colors: ['#FF8A00', '#FFC233'], darkText: true,
    category: 'listening', rounds: 10, sample: 'hören',
    playable: (b) => b.words.length >= 8,
  },
  {
    id: 'memory', name: 'Memory', icon: 'style', colors: ['#E0457B', '#FF5C4D'],
    category: 'words', sample: 'das Spiel',
    playable: (b) => b.words.length >= 6,
  },
  {
    id: 'scramble', name: 'Buchstabensalat', icon: 'shuffle', colors: ['#FFC233', '#FFD66B'], darkText: true,
    category: 'words', seconds: 90, sample: 'Salat',
    playable: (b) => count(b, isSingleWord) >= 8,
  },
  {
    id: 'sentence', name: 'Satzbau', icon: 'reorder', colors: ['#0EA5A4', '#00A36C'],
    category: 'sentences', rounds: 6, sample: 'Ich lerne Deutsch.',
    playable: (b) => b.sentences.length >= 6,
  },
  {
    id: 'plural', name: 'Plural-Profi', icon: 'library_add', colors: ['#8B5CF6', '#E0457B'],
    category: 'grammar', rounds: 10, sample: 'die Äpfel',
    playable: (b) => count(b, hasPlural) >= 8,
  },
  {
    id: 'dictation', name: 'Diktat', icon: 'keyboard', colors: ['#2563EB', '#0EA5A4'],
    category: 'listening', rounds: 8, sample: 'schreiben',
    playable: (b) => count(b, isSingleWord) >= 8,
  },
  {
    id: 'wortle', name: 'Wörtle', icon: 'grid_view', colors: ['#16A34A', '#65A30D'],
    category: 'words', sample: 'RATEN',
    playable: () => true,
  },
  {
    id: 'review', name: 'Wiederholung', icon: 'psychology', colors: ['#F97316', '#FF5C4D'],
    category: 'words', sample: 'wiederholen',
    playable: (b) => b.due.length > 0,
  },
]

export const gameById = (id: string) => GAMES.find((g) => g.id === id)

export const gradientOf = (g: GameMeta) => `linear-gradient(135deg, ${g.colors[0]}, ${g.colors[1]})`
