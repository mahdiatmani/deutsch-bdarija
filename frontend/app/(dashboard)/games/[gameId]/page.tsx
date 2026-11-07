'use client'

import { useEffect, useState } from 'react'
import { notFound, useSearchParams } from 'next/navigation'
import { GameRunner, storedLevel } from '@/components/games/game-runner'
import { gameById } from '@/components/games/registry'
import { useAuthStore } from '@/store/auth-store'
import { GAME_LEVELS, type GameLevel } from '@/types/games'

export default function GamePage({ params }: { params: { gameId: string } }) {
  const searchParams = useSearchParams()
  const cefrLevel = useAuthStore((s) => s.user?.cefrLevel)
  const [level, setLevel] = useState<GameLevel | null>(null)

  // The level in the link, else the last one picked, else the learner's own level
  useEffect(() => {
    const requested = searchParams.get('level') as GameLevel | null
    setLevel(requested && GAME_LEVELS.includes(requested) ? requested : storedLevel() ?? cefrLevel ?? 'A1')
  }, [searchParams, cefrLevel])

  const meta = gameById(params.gameId)
  if (!meta) notFound()
  if (!level) return null
  return <GameRunner gameId={meta.id} level={level} />
}
