'use client'

import { useCallback, useEffect, useRef, useState, type ComponentType } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchGameBank, fetchGameStats, saveGameScore } from '@/lib/api'
import { cn, interpolate } from '@/lib/utils'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { AudioButton } from '@/components/lesson/audio-button'
import { GAME_LEVELS, type GameBank, type GameId, type GameLevel, type GameStats, type RoundResult, type ScoreResponse } from '@/types/games'
import { gameById, gradientOf, type GameMeta } from './registry'
import { sfx } from './sfx'
import { Confetti } from './ui'
import { useRound } from './use-round'
import type { GameProps } from './play/types'
import ArtikelGame from './play/artikel'
import MatchGame from './play/match'
import RainGame from './play/rain'
import TrueFalseGame from './play/truefalse'
import ListenGame from './play/listen'
import MemoryGame from './play/memory'
import ScrambleGame from './play/scramble'
import SentenceGame from './play/sentence'
import PluralGame from './play/plural'
import DictationGame from './play/dictation'
import WortleGame from './play/wortle'
import ReviewGame from './play/review'

const COMPONENTS: Record<GameId, ComponentType<GameProps>> = {
  artikel: ArtikelGame,
  match: MatchGame,
  rain: RainGame,
  truefalse: TrueFalseGame,
  listen: ListenGame,
  memory: MemoryGame,
  scramble: ScrambleGame,
  sentence: SentenceGame,
  plural: PluralGame,
  dictation: DictationGame,
  wortle: WortleGame,
  review: ReviewGame,
}

export const LEVEL_STORAGE_KEY = 'games-level'

/** The level the learner last picked for games, if any */
export function storedLevel(): GameLevel | null {
  try {
    const v = localStorage.getItem(LEVEL_STORAGE_KEY)
    if (GAME_LEVELS.includes(v as GameLevel)) return v as GameLevel
  } catch {
    // Storage unavailable
  }
  return null
}

type Phase = 'intro' | 'countdown' | 'play' | 'results'

export function GameRunner({ gameId, level }: { gameId: GameId; level: GameLevel }) {
  const meta = gameById(gameId)!
  const t = useLanguageStore((s) => s.t)
  const token = useAuthStore((s) => s.token)
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('intro')
  const [runId, setRunId] = useState(0)
  const [result, setResult] = useState<RoundResult | null>(null)

  const stats = useQuery({ queryKey: ['games-stats'], queryFn: () => fetchGameStats(token!), enabled: !!token })
  const bank = useQuery({ queryKey: ['game-bank', level], queryFn: () => fetchGameBank(level, token!), enabled: !!token })
  // Too little material at this level for this game: use A1 words for this round
  const thin = !!bank.data && !meta.playable(bank.data) && bank.data.level !== 'A1' && gameId !== 'review'
  const fallback = useQuery({ queryKey: ['game-bank', 'A1'], queryFn: () => fetchGameBank('A1', token!), enabled: !!token && thin })
  const activeBank: GameBank | undefined = thin ? fallback.data : bank.data

  const quit = useCallback(() => router.push('/games'), [router])
  const start = () => {
    setResult(null)
    setRunId((n) => n + 1)
    setPhase('countdown')
  }

  if (!stats.data || !activeBank) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  const Game = COMPONENTS[gameId]

  return (
    <div className="mx-auto max-w-2xl">
      {phase === 'intro' && (
        <Intro meta={meta} stats={stats.data} bank={activeBank} thin={thin} onStart={start} />
      )}
      {phase === 'countdown' && <Countdown onDone={() => setPhase('play')} />}
      {phase === 'play' && (
        <Session
          key={runId}
          Game={Game}
          bank={activeBank}
          stats={stats.data}
          onQuit={quit}
          onFinish={(r) => {
            setResult(r)
            setPhase('results')
          }}
        />
      )}
      {phase === 'results' && result && <Results meta={meta} result={result} stats={stats.data} onPlayAgain={start} />}
      {phase === 'intro' && (
        <div className="mt-6 text-center">
          <Link href="/games" className="text-sm font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            ← {t.games.allGames}
          </Link>
        </div>
      )}
    </div>
  )
}

function Session({
  Game,
  bank,
  stats,
  onFinish,
  onQuit,
}: {
  Game: ComponentType<GameProps>
  bank: GameBank
  stats: GameStats
  onFinish: (result: RoundResult) => void
  onQuit: () => void
}) {
  const round = useRound()
  const done = useRef(false)
  const finish = useCallback(() => {
    if (done.current) return
    done.current = true
    onFinish(round.result())
  }, [onFinish, round])
  return <Game bank={bank} stats={stats} round={round} finish={finish} quit={onQuit} />
}

function Intro({
  meta,
  stats,
  bank,
  thin,
  onStart,
}: {
  meta: GameMeta
  stats: GameStats
  bank: GameBank
  thin: boolean
  onStart: () => void
}) {
  const t = useLanguageStore((s) => s.t)
  const info = t.games.list[meta.id]
  const mine = stats.games[meta.id]
  const isDaily = stats.daily.gameId === meta.id && !stats.daily.done
  const playable = meta.playable(bank)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && playable) onStart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onStart, playable])

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="paper overflow-hidden">
      <div className={cn('relative px-8 pb-8 pt-10 text-center', meta.darkText ? 'text-ink' : 'text-white')} style={{ background: gradientOf(meta) }}>
        <motion.span
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
          className="material-symbols-outlined icon-fill mb-3 block text-7xl"
        >
          {meta.icon}
        </motion.span>
        <h1 className="font-display text-4xl sm:text-5xl">{meta.name}</h1>
        <p className="mt-2 opacity-90">{info.tagline}</p>
        {meta.id !== 'wortle' && meta.id !== 'review' && (
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-black/15 px-3 py-1 text-sm font-bold">
            {bank.level} · {t.games.levelNames[bank.level]}
          </span>
        )}
        {isDaily && (
          <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/25 px-3 py-1 text-sm font-bold backdrop-blur">
            <span className="material-symbols-outlined icon-fill text-base">bolt</span>
            {t.games.dailyChallenge} · +{stats.daily.bonus} XP
          </span>
        )}
      </div>

      <div className="p-8">
        <p className="eyebrow mb-2">{t.games.howToPlay}</p>
        <p className="mb-6 text-gray-700 dark:text-gray-300">{info.how}</p>

        {thin && (
          <p className="mb-6 rounded-xl bg-saffron-50 px-4 py-3 text-sm text-saffron-dark dark:bg-saffron/10 dark:text-saffron">
            {t.games.thinLevel}
          </p>
        )}

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
          {meta.seconds && (
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
              <span className="material-symbols-outlined text-base">timer</span>
              {interpolate(t.games.seconds, { n: meta.seconds })}
            </span>
          )}
          {meta.rounds && (
            <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-800">
              <span className="material-symbols-outlined text-base">repeat</span>
              {interpolate(t.games.rounds, { n: meta.rounds })}
            </span>
          )}
          {mine.best > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-saffron-50 px-3 py-1 font-semibold text-saffron-dark dark:bg-saffron/10 dark:text-saffron">
              <span className="material-symbols-outlined icon-fill text-base">emoji_events</span>
              {interpolate(t.games.yourBest, { score: mine.best })}
            </span>
          )}
        </div>

        {playable ? (
          <button onClick={onStart} className="btn-stamp mx-auto flex !px-10 text-lg">
            <span className="material-symbols-outlined icon-fill">play_arrow</span>
            {t.games.start}
          </button>
        ) : (
          <p className="text-center text-gray-500">{meta.id === 'review' ? t.games.reviewEmpty : t.games.notEnoughWords}</p>
        )}
      </div>
    </motion.div>
  )
}

function Countdown({ onDone }: { onDone: () => void }) {
  const t = useLanguageStore((s) => s.t)
  const [n, setN] = useState(3)
  useEffect(() => {
    if (n === 0) {
      const id = setTimeout(onDone, 500)
      return () => clearTimeout(id)
    }
    sfx.tick()
    const id = setTimeout(() => setN(n - 1), 650)
    return () => clearTimeout(id)
  }, [n, onDone])

  return (
    <div className="flex h-96 items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={n}
          initial={{ scale: 2.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className={cn('font-display', n === 0 ? 'text-6xl text-primary' : 'text-9xl text-gray-900 dark:text-gray-50')}
        >
          {n === 0 ? t.games.go : n}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function Results({ meta, result, stats, onPlayAgain }: { meta: GameMeta; result: RoundResult; stats: GameStats; onPlayAgain: () => void }) {
  const t = useLanguageStore((s) => s.t)
  const token = useAuthStore((s) => s.token)
  const updateUser = useAuthStore((s) => s.updateUser)
  const queryClient = useQueryClient()
  const [saved, setSaved] = useState<ScoreResponse | null>(null)
  const [failed, setFailed] = useState(false)
  const sent = useRef(false)

  const save = useCallback(async () => {
    if (!token) return
    setFailed(false)
    try {
      const { mistakes: _mistakes, ...payload } = result
      const response = await saveGameScore(meta.id, payload, token)
      setSaved(response)
      if (response.user) updateUser(response.user)
      sfx.finish(response.isNewBest)
      queryClient.invalidateQueries({ queryKey: ['games-stats'] })
      queryClient.invalidateQueries({ queryKey: ['game-bank'] })
      queryClient.invalidateQueries({ queryKey: ['user'] })
    } catch {
      setFailed(true)
    }
  }, [token, result, meta.id, updateUser, queryClient])

  useEffect(() => {
    if (sent.current) return
    sent.current = true
    save()
  }, [save])

  const accuracy = result.total ? Math.round((result.correct / result.total) * 100) : 0
  const perfect = result.total >= 5 && result.correct === result.total
  const celebrate = !!saved && (saved.isNewBest || perfect)
  const headline = saved?.isNewBest ? t.games.newBest : perfect ? t.games.noMistakes : meta.seconds ? t.games.timeUp : meta.id === 'rain' ? t.games.gameOver : t.games.wellDone
  // Refetched after saving, so the learner's new score shows up in the weekly top 5
  const fresh = useQuery({ queryKey: ['games-stats'], queryFn: () => fetchGameStats(token!), enabled: !!token })
  const leaders = (fresh.data ?? stats).leaders[meta.id] ?? []

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative">
      <Confetti fire={celebrate} />
      <div className="paper overflow-hidden text-center">
        <div className={cn('px-8 py-8', meta.darkText ? 'text-ink' : 'text-white')} style={{ background: gradientOf(meta) }}>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80">{meta.name}</p>
          <h1 className="mt-1 font-display text-3xl">{headline}</h1>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.15 }}
            className="mt-3 font-display text-7xl tabular-nums"
          >
            {result.score}
          </motion.p>
          {saved && !saved.isNewBest && !saved.firstPlay && saved.best > 0 && <p className="mt-1 text-sm opacity-80">{interpolate(t.games.yourBest, { score: saved.best })}</p>}
        </div>

        <div className="grid grid-cols-3 divide-x divide-dashed divide-gray-300 border-b border-gray-200 dark:divide-gray-700 dark:border-gray-800">
          <Stat value={`${result.correct}/${result.total}`} label={t.games.correct} />
          <Stat value={`${accuracy}%`} label={t.games.accuracy} />
          <Stat value={`${result.bestCombo}`} label={t.games.bestCombo} />
        </div>

        <div className="p-6">
          {!saved && !failed && <p className="text-sm text-gray-500">{t.games.saving}</p>}
          {failed && (
            <div className="flex items-center justify-center gap-3 text-sm text-clay-dark dark:text-clay-light">
              {t.games.saveFailed}
              <button onClick={save} className="font-bold underline">
                {t.games.retry}
              </button>
            </div>
          )}
          {saved && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="inline-flex items-center gap-1 rounded-full bg-saffron px-4 py-1.5 font-display text-lg text-ink"
              >
                <span className="material-symbols-outlined icon-fill text-lg">bolt</span>
                {interpolate(t.games.xpEarned, { xp: saved.xpEarned })}
              </motion.span>
              {saved.dailyBonus > 0 && (
                <span className="rounded-full bg-clay px-3 py-1.5 text-sm font-bold text-white">{interpolate(t.games.dailyBonus, { xp: saved.dailyBonus })}</span>
              )}
            </div>
          )}
          {saved?.capped && <p className="mt-3 text-xs text-gray-500">{t.games.capReached}</p>}

          <div className="mt-8 flex flex-col-reverse justify-center gap-3 sm:flex-row">
            <Link href="/games" className="btn-ghost">
              {t.games.allGames}
            </Link>
            {meta.id !== 'wortle' && (
              <button onClick={onPlayAgain} className="btn-stamp">
                <span className="material-symbols-outlined">replay</span>
                {t.games.playAgain}
              </button>
            )}
          </div>
        </div>
      </div>

      {result.mistakes.length > 0 ? (
        <div className="paper mt-6 p-6">
          <p className="eyebrow mb-4">{t.games.mistakes}</p>
          <ul className="space-y-2">
            {result.mistakes.slice(0, 12).map((m) => {
              const spoken = m.de.split(' → ')[0]
              return (
                <li key={m.de} className="flex items-center gap-3 rounded-xl bg-gray-50 px-3 py-2 dark:bg-gray-800/60">
                  <AudioButton text={spoken} />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 dark:text-gray-50">{m.de}</p>
                    <p className="text-sm text-gray-500">{m.dar}</p>
                  </div>
                  {m.given && <span className="shrink-0 text-sm text-clay line-through">{m.given}</span>}
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        result.total > 0 && <p className="mt-6 text-center text-sm font-semibold text-primary">{t.games.noMistakes}</p>
      )}

      <div className="paper mt-6 p-6">
        <p className="eyebrow mb-4">{t.games.weeklyTop}</p>
        {leaders.length ? (
          <ol className="space-y-2">
            {leaders.map((l, i) => (
              <li key={`${l.username}-${i}`} className={cn('flex items-center gap-3 rounded-xl px-3 py-2', l.isMe ? 'bg-primary-50 dark:bg-primary/10' : '')}>
                <span className={cn('flex size-7 items-center justify-center rounded-full text-sm font-bold', i === 0 ? 'bg-saffron text-ink' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300')}>
                  {i + 1}
                </span>
                <span className="flex-1 truncate font-semibold text-gray-900 dark:text-gray-50">
                  {l.username}
                  {l.isMe && <span className="ml-2 text-xs font-normal text-primary">({t.games.you})</span>}
                </span>
                <span className="font-display tabular-nums text-gray-700 dark:text-gray-200">{l.score}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-sm text-gray-500">{t.games.nobodyYet}</p>
        )}
      </div>
    </motion.div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="py-4">
      <p className="font-display text-2xl tabular-nums text-gray-900 dark:text-gray-50">{value}</p>
      <p className="text-xs uppercase tracking-wider text-gray-500">{label}</p>
    </div>
  )
}
