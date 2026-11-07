'use client'

import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { fetchLeaderboard } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { cn, formatXP } from '@/lib/utils'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import type { LeaderboardEntry } from '@/types'

// Podium order on screen: 2nd, 1st, 3rd
const PODIUM = [
  { place: 2, height: 'h-36 sm:h-44', ring: 'ring-gray-300', tile: 'bg-gray-300 text-ink', delay: 0.15 },
  { place: 1, height: 'h-48 sm:h-60', ring: 'ring-saffron', tile: 'bg-saffron text-ink', delay: 0 },
  { place: 3, height: 'h-28 sm:h-32', ring: 'ring-clay', tile: 'bg-clay text-white', delay: 0.3 },
]

function Avatar({ entry, className }: { entry: LeaderboardEntry; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700', className)}>
      {entry.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={entry.avatar} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-primary font-bold text-white">
          {entry.username[0]?.toUpperCase()}
        </div>
      )}
    </div>
  )
}

export default function LeaderboardPage() {
  const user = useAuthStore(s => s.user)
  const t = useLanguageStore(s => s.t)

  const { data: leaderboardData, isLoading } = useQuery({
    queryKey: ['leaderboard', 'all'],
    queryFn: () => fetchLeaderboard('all'),
  })

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="h-12 w-56 rounded-xl bg-gray-200/70 dark:bg-gray-800 animate-pulse mb-12" />
        <div className="flex items-end justify-center gap-3 mb-10">
          <div className="w-28 h-44 rounded-t-2xl bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
          <div className="w-32 h-60 rounded-t-2xl bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
          <div className="w-28 h-32 rounded-t-2xl bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-16 mb-2 rounded-xl bg-gray-200/70 dark:bg-gray-800 animate-pulse" />
        ))}
      </div>
    )
  }

  const data: LeaderboardEntry[] = leaderboardData?.data || leaderboardData || []
  const currentUserEntry = user ? data.find((entry) => entry.userId === user.id) : null
  const currentUserRank = currentUserEntry?.rank
  const currentUserPoints = currentUserEntry?.points ?? (user?.totalPoints || 0)
  const pointsToNext =
    currentUserRank && currentUserRank > 1 ? (data[currentUserRank - 2]?.points ?? 0) - currentUserPoints : null

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-12">
        <p className="eyebrow mb-3">{t.nav.leaderboard}</p>
        <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-gray-50">{t.leaderboard.title}</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">{t.leaderboard.subtitle}</p>
      </header>

      {data.length === 0 ? (
        <div className="paper py-16 text-center">
          <span className="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-700">groups</span>
          <p className="mt-3 text-gray-600 dark:text-gray-400">{t.leaderboard.noLearners}</p>
          <p className="mt-1 text-sm text-gray-500">{t.leaderboard.beFirst}</p>
        </div>
      ) : (
        <>
          {/* Podium */}
          <div className="mb-10 grid grid-cols-3 items-end gap-2 sm:gap-4">
            {PODIUM.map(({ place, height, ring, tile, delay }) => {
              const entry = data[place - 1]
              if (!entry) return <div key={place} />
              const isMe = entry.userId === user?.id
              return (
                <motion.div
                  key={place}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <div className="relative mb-3">
                    {place === 1 && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 material-symbols-outlined icon-fill text-3xl text-saffron animate-float">
                        crown
                      </span>
                    )}
                    <Avatar
                      entry={entry}
                      className={cn('ring-4 ring-offset-4 ring-offset-background-light dark:ring-offset-background-dark', ring, place === 1 ? 'size-20 sm:size-24' : 'size-16 sm:size-20')}
                    />
                  </div>
                  <p className={cn('max-w-full truncate px-1 text-sm font-semibold', isMe ? 'text-primary dark:text-saffron' : 'text-gray-900 dark:text-gray-50')}>
                    {entry.username}
                  </p>
                  <p className="mb-3 text-xs text-gray-500 tabular-nums">{formatXP(entry.points)} XP</p>

                  {/* Pillar */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'bottom' }}
                    className={cn('relative w-full overflow-hidden rounded-t-2xl bg-ink', height)}
                  >
                    <div className="absolute inset-0 zellige-white opacity-40" />
                    <span className={cn('absolute inset-x-0 top-0 h-1.5', tile)} />
                    <span className={cn('absolute left-1/2 top-5 -translate-x-1/2 flex size-11 items-center justify-center rounded-xl font-display text-2xl font-bold shadow-lg', tile)}>
                      {place}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Your position */}
          {currentUserEntry && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 flex items-center gap-4 rounded-2xl bg-primary p-4 sm:p-5 text-white shadow-lift"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white/15 font-display text-2xl font-semibold">
                #{currentUserRank}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-semibold">{t.leaderboard.yourPosition}</p>
                <p className="text-sm text-white/75">
                  <AnimatedCounter target={currentUserPoints} suffix={` ${t.common.points}`} />
                </p>
              </div>
              <div className="text-right text-sm">
                {pointsToNext !== null && (
                  <p className="flex items-center justify-end gap-1 font-semibold text-saffron-light">
                    <span className="material-symbols-outlined text-base">north</span>
                    {pointsToNext} {t.leaderboard.ptsTo} #{currentUserRank! - 1}
                  </p>
                )}
                <p className="text-xs text-white/60">{t.leaderboard.keepLearning}</p>
              </div>
            </motion.div>
          )}

          {/* Rankings ledger */}
          {data.length > 3 && (
            <section className="paper overflow-hidden">
              <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
                <h2 className="text-xl text-gray-900 dark:text-gray-50">{t.leaderboard.rankings}</h2>
                <span className="text-sm text-gray-500 tabular-nums">
                  {data.length} {t.leaderboard.learners}
                </span>
              </div>
              <ol>
                {data.slice(3).map((entry, idx) => {
                  const isMe = entry.userId === user?.id
                  return (
                    <motion.li
                      key={entry.userId}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.03 }}
                      className={cn(
                        'flex items-center gap-4 border-b border-dashed border-gray-200 px-5 py-3.5 last:border-0 dark:border-gray-800',
                        isMe && 'bg-saffron-50 dark:bg-saffron/10'
                      )}
                    >
                      <span className="w-8 font-display text-xl font-bold text-gray-400 tabular-nums">{entry.rank}</span>
                      <Avatar entry={entry} className="size-10" />
                      <div className="min-w-0 flex-1">
                        <p className={cn('truncate font-medium', isMe ? 'text-primary dark:text-saffron' : 'text-gray-900 dark:text-gray-50')}>
                          {entry.username}
                          {isMe && (
                            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                              {t.common.you}
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500">
                          {t.common.level} {entry.level}
                        </p>
                      </div>
                      <span className="font-display text-lg text-gray-900 dark:text-gray-50 tabular-nums">
                        {formatXP(entry.points)}
                        <span className="ml-1 font-sans text-xs text-gray-500">XP</span>
                      </span>
                    </motion.li>
                  )
                })}
              </ol>
            </section>
          )}
        </>
      )}
    </div>
  )
}
