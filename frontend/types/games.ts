/**
 * Learning games. Mirrors backend/api-gateway/src/data/games.ts and routes/game.routes.ts.
 */
import type { User } from './index'

export type GameId =
  | 'artikel' | 'match' | 'rain' | 'truefalse' | 'listen' | 'memory'
  | 'scramble' | 'sentence' | 'plural' | 'dictation' | 'wortle' | 'review'

export type GameLevel = 'A1' | 'A2' | 'B1' | 'B2'
export const GAME_LEVELS: GameLevel[] = ['A1', 'A2', 'B1', 'B2']

export interface BankWord {
  de: string
  dar: string
  level: GameLevel
  lessonId: string
  article?: 'der' | 'die' | 'das'
  noun?: string
  plural?: string
}

export interface BankSentence {
  de: string
  dar: string
  level: GameLevel
  lessonId: string
  speaker?: string
  speakers?: string[]
}

export interface GameBank {
  level: GameLevel
  words: BankWord[]
  sentences: BankSentence[]
  /** Words the spaced repetition wants reviewed now */
  due: BankWord[]
}

export interface GameLeader {
  username: string
  avatar: string | null
  score: number
  isMe: boolean
}

export interface GameStats {
  games: Record<GameId, { best: number; plays: number; playedToday: boolean }>
  leaders: Partial<Record<GameId, GameLeader[]>>
  reviewDue: number
  xpToday: number
  xpDailyCap: number
  daily: { date: string; gameId: GameId; done: boolean; bonus: number }
  wortle: { word: string; de: string; dar: string }
}

/** What a round reports when it ends */
export interface RoundResult {
  score: number
  correct: number
  total: number
  bestCombo: number
  /** Every answered word (German text from the bank) for the spaced repetition */
  answers: { word: string; correct: boolean }[]
  /** Items answered wrong, shown with the right answer on the results screen */
  mistakes: { de: string; dar: string; given?: string }[]
}

export interface ScoreResponse {
  success: boolean
  xpEarned: number
  dailyBonus: number
  capped: boolean
  best: number
  isNewBest: boolean
  firstPlay: boolean
  user?: User
}
