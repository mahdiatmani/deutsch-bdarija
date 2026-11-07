'use client'

import Link from 'next/link'
import { useLanguageStore } from '@/store/language-store'
import { LogoMark } from '@/components/shared/logo'

export function Footer() {
  const { t } = useLanguageStore()

  // Only routes that exist in the app
  const footerLinks = {
    platform: [
      { name: t.footer.links.courses, href: '/courses' },
      { name: t.footer.links.aiTutor, href: '/ai-teacher' },
      { name: t.footer.links.placementTest, href: '/tests' },
    ],
    resources: [
      { name: t.footer.links.community, href: '/community' },
      { name: t.nav.leaderboard, href: '/leaderboard' },
      { name: t.nav.games, href: '/games' },
    ],
  }

  const columns = [
    { title: t.footer.platform, links: footerLinks.platform },
    { title: t.footer.resources, links: footerLinks.resources },
  ]

  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <LogoMark />
              <span className="font-display text-lg font-bold text-gray-900 dark:text-white">{t.common.appName}</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{column.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-800 gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {t.common.appName}
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-display font-bold text-primary dark:text-primary-light">Viel Erfolg</span>
            <span className="size-1 rounded-full bg-saffron" />
            <span>Bsa77a</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
