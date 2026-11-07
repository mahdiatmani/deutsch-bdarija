import type { GameBank, GameStats } from '@/types/games'
import type { Round } from '../use-round'

export interface GameProps {
  bank: GameBank
  stats: GameStats
  round: Round
  /** The round is over: show the results */
  finish: () => void
  /** Leave without results */
  quit: () => void
}
