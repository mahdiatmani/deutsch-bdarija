'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { fetchGameStats } from '@/lib/api'
import { cn, interpolate } from '@/lib/utils'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { GAMES, gameById, gradientOf, type GameCategory, type GameMeta } from '@/components/games/registry'
import { LEVEL_STORAGE_KEY, storedLevel } from '@/components/games/game-runner'
import { GAME_LEVELS, type GameLevel, type GameStats } from '@/types/games'

const CATEGORIES: ('all' | GameCategory)[] = ['all', 'words', 'grammar', 'listening', 'sentences', 'arcade']

export default function GamesPage() {
  const token = useAuthStore((s) => s.token)
  const user = useAuthStore((s) => s.user)
  const t = useLanguageStore((s) => s.t)
  const [level, setLevel] = useState<GameLevel>('A1')
  const [category, setCategory] = useState<'all' | GameCategory>('all')

  // The last level picked, else the learner's own CEFR level
  useEffect(() => setLevel(storedLevel() ?? user?.cefrLevel ?? 'A1'), [user?.cefrLevel])
  const chooseLevel = (l: GameLevel) => {
    setLevel(l)
    try {
      localStorage.setItem(LEVEL_STORAGE_KEY, l)
    } catch {
      // Not remembered, still used for this visit
    }
  }

  const { data: stats, isLoading } = useQuery({ queryKey: ['games-stats'], queryFn: () => fetchGameStats(token!), enabled: !!token })

  if (isLoading || !stats) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  const href = (id: string) => `/games/${id}?level=${level}`
  const grid = GAMES.filter((g) => g.id !== 'wortle' && g.id !== 'review' && (category === 'all' || g.category === category))
  const daily = gameById(stats.daily.gameId)!

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">{t.nav.games}</p>
          <h1 className="mb-3 text-4xl text-gray-900 dark:text-gray-50 sm:text-5xl">{t.games.title}</h1>
          <p className="max-w-xl text-gray-600 dark:text-gray-400">{t.games.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          {user && user.currentStreak > 0 && (
            <div className="flex items-center gap-1 rounded-2xl bg-saffron-50 px-4 py-3 dark:bg-saffron/10">
              <span className="material-symbols-outlined icon-fill text-2xl text-[#FF8A00]">local_fire_department</span>
              <span className="font-display text-2xl tabular-nums text-gray-900 dark:text-gray-50">{user.currentStreak}</span>
            </div>
          )}
          <div className="min-w-[160px] rounded-2xl bg-white px-4 py-3 shadow-paper dark:bg-surface-dark">
            <p className="text-xs uppercase tracking-wider text-gray-500">{t.games.xpToday}</p>
            <p className="font-display text-xl tabular-nums text-gray-900 dark:text-gray-50">
              {stats.xpToday}
              <span className="text-sm text-gray-400"> / {stats.xpDailyCap}</span>
            </p>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
              <div className="h-full rounded-full bg-saffron" style={{ width: `${Math.min(100, (stats.xpToday / stats.xpDailyCap) * 100)}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Level */}
      <div className="mb-8">
        <p className="eyebrow mb-3">{t.games.levelLabel}</p>
        <div role="tablist" aria-label={t.games.levelLabel} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {GAME_LEVELS.map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={level === l}
              onClick={() => chooseLevel(l)}
              className={cn(
                'flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all',
                level === l
                  ? 'border-ink bg-ink text-white shadow-lift dark:border-white dark:bg-white dark:text-ink'
                  : 'border-transparent bg-white text-gray-800 shadow-paper hover:border-primary/40 dark:bg-surface-dark dark:text-gray-100'
              )}
            >
              <span className="font-display text-2xl">{l}</span>
              <span className={cn('text-sm leading-tight', level === l ? 'opacity-80' : 'text-gray-500 dark:text-gray-400')}>{t.games.levelNames[l]}</span>
              {user?.cefrLevel === l && <span className={cn('ml-auto size-2 shrink-0 rounded-full', level === l ? 'bg-saffron' : 'bg-primary')} />}
            </button>
          ))}
        </div>
      </div>

      {/* Today */}
      <div className="mb-10 grid gap-5 lg:grid-cols-3">
        <DailyCard meta={daily} stats={stats} href={href(daily.id)} />
        <WortleCard stats={stats} href={href('wortle')} />
        <ReviewCard stats={stats} href={href('review')} />
      </div>

      {/* Categories */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
              category === c ? 'border-primary bg-primary text-white' : 'border-gray-200 text-gray-600 hover:border-primary/50 dark:border-gray-700 dark:text-gray-300'
            )}
          >
            {t.games.categories[c]}
          </button>
        ))}
      </div>

      {/* Games */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {grid.map((g, i) => (
          <GameCard key={g.id} meta={g} stats={stats} href={href(g.id)} index={i} />
        ))}
      </div>

      {/* Leaderboard */}
      <div className="paper mt-10 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{t.games.compete}</h2>
          <p className="text-gray-500 dark:text-gray-400">{t.games.competeDesc}</p>
        </div>
        <Link href="/leaderboard" className="btn-primary flex items-center gap-2">
          <span className="material-symbols-outlined">leaderboard</span>
          {t.games.viewLeaderboard}
        </Link>
      </div>
    </div>
  )
}

function DailyCard({ meta, stats, href }: { meta: GameMeta; stats: GameStats; href: string }) {
  const t = useLanguageStore((s) => s.t)
  const done = stats.daily.done
  return (
    <Link
      href={href}
      className={cn('group relative overflow-hidden rounded-3xl p-6 shadow-lift transition hover:-translate-y-1', meta.darkText ? 'text-ink' : 'text-white')}
      style={{ background: gradientOf(meta) }}
    >
      <span className="material-symbols-outlined icon-fill pointer-events-none absolute -bottom-6 -right-4 text-[140px] opacity-15 transition-transform group-hover:rotate-12">
        {meta.icon}
      </span>
      <p className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider opacity-90">
        <span className="material-symbols-outlined icon-fill text-lg">bolt</span>
        {t.games.dailyChallenge}
      </p>
      <h2 className="mt-2 font-display text-3xl">{meta.name}</h2>
      <p className="mt-2 max-w-[85%] text-sm opacity-90">
        {done ? t.games.dailyDone : interpolate(t.games.dailyChallengeDesc, { game: meta.name, xp: stats.daily.bonus })}
      </p>
      <span className={cn('mt-5 inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold', done ? 'bg-white/25' : 'bg-white text-ink')}>
        <span className="material-symbols-outlined icon-fill text-lg">{done ? 'check_circle' : 'play_arrow'}</span>
        {done ? t.games.playAgain : `${t.games.play} · +${stats.daily.bonus} XP`}
      </span>
    </Link>
  )
}

function WortleCard({ stats, href }: { stats: GameStats; href: string }) {
  const t = useLanguageStore((s) => s.t)
  const played = stats.games.wortle.playedToday
  const meta = gameById('wortle')!
  return (
    <Link href={href} className="group paper relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-lift">
      <p className="eyebrow mb-2">{t.games.wortleTitle}</p>
      <div className="mb-4 flex gap-1.5">
        {'WÖRTL'.split('').map((_, i) => (
          <motion.span
            key={i}
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className={cn(
              'flex size-10 items-center justify-center rounded-md font-display text-lg text-white',
              played ? 'bg-[#16A34A]' : i === 1 ? 'bg-saffron text-ink' : i === 3 ? 'bg-[#16A34A]' : 'bg-gray-300 dark:bg-gray-700'
            )}
          >
            {played ? stats.wortle.word[i] : '?'}
          </motion.span>
        ))}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{played ? t.games.wortleDone : t.games.wortleDesc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: meta.colors[0] }}>
        {played ? t.games.share : t.games.play}
        <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
      </span>
    </Link>
  )
}

function ReviewCard({ stats, href }: { stats: GameStats; href: string }) {
  const t = useLanguageStore((s) => s.t)
  const due = stats.reviewDue
  const content = (
    <>
      <p className="eyebrow mb-2">{t.games.reviewTitle}</p>
      <div className="mb-3 flex items-end gap-2">
        <span className={cn('font-display text-5xl tabular-nums', due ? 'text-[#F97316]' : 'text-gray-300 dark:text-gray-700')}>{due}</span>
        <span className="material-symbols-outlined mb-2 text-3xl text-gray-300 dark:text-gray-700">psychology</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{due ? interpolate(t.games.reviewDue, { count: due }) : t.games.reviewEmpty}</p>
      {due > 0 && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#F97316]">
          {t.games.play}
          <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
        </span>
      )}
    </>
  )
  return due ? (
    <Link href={href} className="group paper relative p-6 transition hover:-translate-y-1 hover:shadow-lift">
      {content}
    </Link>
  ) : (
    <div className="paper relative p-6">{content}</div>
  )
}

function GameCard({ meta, stats, href, index }: { meta: GameMeta; stats: GameStats; href: string; index: number }) {
  const t = useLanguageStore((s) => s.t)
  const mine = stats.games[meta.id]
  const isDaily = stats.daily.gameId === meta.id && !stats.daily.done
  return (
    <Link
      href={href}
      className="animate-stagger-in group paper flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={cn('relative flex h-32 items-center justify-center overflow-hidden', meta.darkText ? 'text-ink' : 'text-white')} style={{ background: gradientOf(meta) }}>
        <span className="pointer-events-none absolute -left-2 top-2 whitespace-nowrap font-display text-3xl opacity-15">{meta.sample}</span>
        <span className="pointer-events-none absolute -right-3 bottom-1 whitespace-nowrap font-display text-2xl opacity-15">{meta.sample}</span>
        <span className="material-symbols-outlined icon-fill text-6xl drop-shadow transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">{meta.icon}</span>
        <div className="absolute left-3 top-3 flex gap-1.5">
          {mine.plays === 0 && <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold uppercase text-ink">{t.games.new}</span>}
          {isDaily && (
            <span className="flex items-center rounded-full bg-ink/80 px-2 py-0.5 text-[11px] font-bold text-saffron">
              <span className="material-symbols-outlined icon-fill text-sm">bolt</span>+{stats.daily.bonus}
            </span>
          )}
        </div>
        {mine.playedToday && (
          <span className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-primary" title={t.games.playedToday}>
            <span className="material-symbols-outlined icon-fill text-lg">check_circle</span>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-gray-900 dark:text-white">{meta.name}</h3>
        <p className="mb-4 mt-1 flex-1 text-sm text-gray-500 dark:text-gray-400">{t.games.list[meta.id].tagline}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-3 text-gray-500">
            {meta.seconds ? (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">timer</span>
                {interpolate(t.games.seconds, { n: meta.seconds })}
              </span>
            ) : meta.rounds ? (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">repeat</span>
                {meta.rounds}
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">all_inclusive</span>
              </span>
            )}
            {mine.best > 0 && (
              <span className="flex items-center gap-1 font-semibold text-saffron-dark dark:text-saffron">
                <span className="material-symbols-outlined icon-fill text-base">emoji_events</span>
                {mine.best}
              </span>
            )}
          </span>
          <span className="rounded-full px-4 py-1.5 font-bold" style={{ background: meta.colors[0], color: meta.darkText ? '#0D1015' : 'white' }}>
            {t.games.play}
          </span>
        </div>
      </div>
    </Link>
  )
}
