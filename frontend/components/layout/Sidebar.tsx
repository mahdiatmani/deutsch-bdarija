'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuthStore } from '@/store/auth-store'
import { useUIStore } from '@/store/ui-store'
import { cn, formatXP, interpolate } from '@/lib/utils'
import { useReviewStatus } from '@/hooks/use-review-status'
import { useLanguageStore } from '@/store/language-store'
import { Logo } from '@/components/shared/logo'
import { GoalRing } from '@/components/shared/goal-ring'

// Fallback for sessions persisted before the API returned cefrLevel
const getCefrLevel = (points: number) => {
  if (points >= 5000) return 'B2'
  if (points >= 2000) return 'B1'
  if (points >= 500) return 'A2'
  return 'A1'
}

/**
 * Dark "ink" sidebar styled like a book's table of contents: numbered
 * chapters, a saffron marker on the current one, and the daily goal ring.
 */
export function Sidebar() {
  const pathname = usePathname()
  const user = useAuthStore(s => s.user)
  const isSidebarOpen = useUIStore(s => s.isSidebarOpen)
  const toggleSidebar = useUIStore(s => s.toggleSidebar)
  const t = useLanguageStore(s => s.t)
  const reviewDue = useReviewStatus().data?.due ?? 0

  const navigation = [
    { name: t.nav.today, href: '/today', icon: 'wb_sunny', description: t.sidebar.desc.today },
    { name: t.nav.lessons, href: '/courses', icon: 'auto_stories', description: t.sidebar.desc.lessons },
    { name: t.nav.aiTeacher, href: '/ai-teacher', icon: 'record_voice_over', description: t.sidebar.desc.ai, badge: 'AI' },
    { name: t.nav.community, href: '/community', icon: 'forum', description: t.sidebar.desc.community },
    { name: t.nav.tests, href: '/tests', icon: 'edit_note', description: t.sidebar.desc.tests },
    { name: t.nav.games, href: '/games', icon: 'extension', description: t.sidebar.desc.games },
    { name: t.nav.leaderboard, href: '/leaderboard', icon: 'trophy', description: t.sidebar.desc.leaderboard },
    { name: t.nav.profile, href: '/profile', icon: 'badge', description: t.sidebar.desc.profile },
  ]

  const closeOnMobile = () => {
    if (window.innerWidth < 1024) toggleSidebar()
  }

  const dailyXP = user?.dailyXP || 0
  const dailyGoal = user?.dailyGoal || 50

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-ink/60 z-40 lg:hidden backdrop-blur-sm" onClick={toggleSidebar} />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-72 shrink-0 bg-ink text-gray-200 transform transition-transform duration-300 lg:translate-x-0 lg:relative lg:z-0 shadow-2xl lg:shadow-none',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Soft jade glow behind the learner card */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top_left,rgba(0,163,108,0.28),transparent_65%)]" />

        <div className="relative flex flex-col h-full">
          {/* Logo */}
          <div className="px-5 pt-5 pb-4">
            <Link href="/" className="block">
              <Logo tone="light" />
            </Link>
            <p className="mt-1.5 pl-[46px] text-[10px] uppercase tracking-[0.2em] text-gray-500">{t.common.tagline}</p>
          </div>

          {/* Learner card */}
          {user && (
            <div className="mx-4 mb-2 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <div className="size-11 shrink-0 rounded-full overflow-hidden ring-2 ring-saffron/60 ring-offset-2 ring-offset-ink bg-gray-700">
                  {user.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold">
                      {user.username[0].toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-50 truncate capitalize">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-saffron">
                    <span className="material-symbols-outlined icon-fill text-sm">local_fire_department</span>
                    {user.currentStreak || 0} {t.sidebar.stats.streak}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <GoalRing value={dailyXP} max={dailyGoal} size={58} stroke={5} trackClassName="!stroke-white/10">
                  <span className="text-[11px] font-bold text-gray-50 tabular-nums">
                    {Math.min(100, Math.round((dailyXP / dailyGoal) * 100))}%
                  </span>
                </GoalRing>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gray-500">{t.sidebar.stats.dailyGoal}</p>
                  <p className="font-display text-lg text-gray-50 tabular-nums leading-tight">
                    {dailyXP}
                    <span className="text-gray-500 text-sm"> / {dailyGoal} XP</span>
                  </p>
                  {dailyXP >= dailyGoal && (
                    <p className="text-[10px] text-saffron">{t.sidebar.stats.completed}</p>
                  )}
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-3 divide-x divide-white/[0.08] rounded-xl bg-black/20 py-2 text-center">
                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-gray-500">{t.sidebar.stats.totalXP}</dt>
                  <dd className="font-display text-base text-gray-50 tabular-nums">{formatXP(user.totalPoints || 0)}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-gray-500">{t.sidebar.stats.rank}</dt>
                  <dd className="font-display text-base text-gray-50 tabular-nums">{user.currentLevel || 1}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-gray-500">{t.sidebar.stats.cefrLevel}</dt>
                  <dd className="font-display text-base text-saffron">
                    {user.cefrLevel ?? getCefrLevel(user.totalPoints || 0)}
                  </dd>
                </div>
              </dl>
            </div>
          )}

          {/* Chapters */}
          <nav className="flex-1 overflow-y-auto px-3 py-3 scrollbar-hide" aria-label={t.nav.menu}>
            <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">{t.nav.menu}</p>
            <ul className="space-y-0.5">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeOnMobile}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors',
                        isActive ? 'text-gray-50' : 'text-gray-400 hover:text-gray-100 hover:bg-white/[0.04]'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-active"
                          className="absolute inset-0 rounded-xl bg-white/[0.07] ring-1 ring-white/[0.06]"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="sidebar-marker"
                          className="absolute -left-3 top-2 bottom-2 w-1 rounded-r-full bg-saffron"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      )}
                      <span
                        className={cn(
                          'relative w-5 font-display text-xs tabular-nums',
                          isActive ? 'text-saffron' : 'text-gray-600 group-hover:text-gray-400'
                        )}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={cn(
                          'relative material-symbols-outlined text-[22px] transition-colors',
                          isActive ? 'text-saffron icon-fill' : 'text-gray-500 group-hover:text-gray-300'
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="relative flex-1 min-w-0">
                        <span className={cn('block truncate', isActive && 'font-semibold')}>{item.name}</span>
                        <span className="block truncate text-[10px] text-gray-500">{item.description}</span>
                      </span>
                      {item.href === '/today' && reviewDue > 0 && (
                        <span
                          className="relative min-w-5 rounded-full bg-saffron px-1.5 py-0.5 text-center text-[10px] font-bold tabular-nums text-ink"
                          title={interpolate(t.today.words.badge, { count: reviewDue })}
                          aria-label={interpolate(t.today.words.badge, { count: reviewDue })}
                        >
                          {reviewDue > 99 ? '99+' : reviewDue}
                        </span>
                      )}
                      {item.badge && (
                        <span className="relative rounded-md border border-saffron/40 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-saffron">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer actions */}
          <div className="border-t border-white/[0.07] p-3 space-y-0.5">
            <Link
              href="/settings"
              onClick={closeOnMobile}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors',
                pathname === '/settings' ? 'bg-white/[0.07] text-gray-50' : 'text-gray-400 hover:bg-white/[0.04] hover:text-gray-100'
              )}
            >
              <span className="material-symbols-outlined text-[22px]">tune</span>
              {t.nav.settings}
            </Link>
            <button
              onClick={() => {
                useAuthStore.getState().logout()
                window.location.href = '/login'
              }}
              className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-400 hover:bg-clay/15 hover:text-clay-light transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">logout</span>
              {t.nav.logout}
            </button>
            <p className="pt-2 text-center text-[10px] tracking-wider text-gray-600">{t.nav.version}</p>
          </div>
        </div>
      </aside>
    </>
  )
}
