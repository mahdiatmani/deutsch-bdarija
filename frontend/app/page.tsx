'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useLanguageStore } from '@/store/language-store'
import { useAuthStore } from '@/store/auth-store'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HomePage() {
  const { t } = useLanguageStore()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  // Preview cards lead into the real course list (or signup first)
  const lessonHref = isAuthenticated ? '/today' : '/signup'

  const previewLessons = [
    {
      id: '1',
      title: t.preview.lessons.l1.title,
      description: t.preview.lessons.l1.desc,
      duration: 5,
      image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80&w=800',
      accent: 'bg-primary',
    },
    {
      id: '2',
      title: t.preview.lessons.l2.title,
      description: t.preview.lessons.l2.desc,
      duration: 8,
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
      accent: 'bg-saffron',
    },
    {
      id: '3',
      title: t.preview.lessons.l3.title,
      description: t.preview.lessons.l3.desc,
      duration: 10,
      image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&q=80&w=800',
      accent: 'bg-tile',
    },
  ]

  const features = [
    {
      icon: 'record_voice_over',
      title: t.features.items.ai.title,
      description: t.features.items.ai.desc,
      tile: 'bg-primary text-white',
    },
    {
      icon: 'sports_esports',
      title: t.features.items.game.title,
      description: t.features.items.game.desc,
      tile: 'bg-saffron text-ink',
    },
    {
      icon: 'auto_stories',
      title: t.features.items.courses.title,
      description: t.features.items.courses.desc,
      tile: 'bg-tile text-white',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex flex-col">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Beautiful German architecture with modern clean lines"
              src="https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?q=80&w=1920&auto=format&fit=crop"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Ink overlay, jade glow and dot grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,163,108,0.35),transparent_55%)]" />
            <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:22px_22px]" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="max-w-2xl flex flex-col gap-7">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75 animate-ping" />
                  <span className="relative inline-flex size-2 rounded-full bg-saffron" />
                </span>
                {t.hero.newBadge}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={1}
                className="text-5xl md:text-7xl text-white leading-[1.02]"
              >
                {t.hero.titleStart} <br />
                <span className="bg-gradient-to-r from-primary-light via-primary-light to-saffron bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={2}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                {t.hero.description}
              </motion.p>

              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="flex flex-wrap gap-3 pt-2">
                <Link href="/signup" className="btn-stamp h-14 px-7 text-base">
                  <span className="material-symbols-outlined">rocket_launch</span>
                  {t.hero.startBtn}
                </Link>
                <Link
                  href="/tests"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <span className="material-symbols-outlined">quiz</span>
                  {t.hero.testBtn}
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={4}
                className="flex items-center gap-4 pt-2 text-sm text-gray-400"
              >
                <div className="flex -space-x-2">
                  {['bg-primary', 'bg-saffron', 'bg-clay', 'bg-tile'].map((bg, i) => (
                    <span
                      key={bg}
                      className={`flex size-9 items-center justify-center rounded-full border-2 border-ink ${bg} text-xs font-bold ${bg === 'bg-saffron' ? 'text-ink' : 'text-white'}`}
                    >
                      {['Y', 'A', 'S', 'M'][i]}
                    </span>
                  ))}
                </div>
                <p>{t.hero.socialProof}</p>
              </motion.div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
            <div className="flex flex-col items-center gap-2 text-white/50 animate-bounce">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{t.hero.scroll}</span>
              <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
            </div>
          </div>
        </section>

        {/* ── Course preview ───────────────────────────────────── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow mb-2">{t.preview.subheading}</p>
                <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-gray-50">{t.preview.heading}</h2>
              </div>
              <Link
                href="/courses"
                className="group inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:border-primary/50 transition-colors"
              >
                {t.preview.viewAll}
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-0.5">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {previewLessons.map((lesson, idx) => (
                <motion.article
                  key={lesson.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group paper paper-hover overflow-hidden flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={lesson.image}
                      alt={lesson.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className={`absolute left-4 top-4 h-1.5 w-10 rounded-full ${lesson.accent}`} />
                    <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink backdrop-blur">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {lesson.duration} min
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl text-gray-900 dark:text-gray-50 mb-1.5">{lesson.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6">{lesson.description}</p>
                    <Link
                      href={lessonHref}
                      className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary-50 py-2.5 text-sm font-semibold text-primary-dark transition-colors group-hover:bg-primary group-hover:text-white dark:bg-primary/15 dark:text-primary-light dark:group-hover:text-white"
                    >
                      {t.preview.startLesson}
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────── */}
        <section className="py-24 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-14 items-center">
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-dark dark:bg-primary/15 dark:text-primary-light">
                  <span className="material-symbols-outlined icon-fill text-sm">bolt</span>
                  {t.features.tag}
                </span>
                <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-gray-50 leading-[1.05]">{t.features.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{t.features.description}</p>

                <div className="grid gap-4 mt-2">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-4 rounded-2xl border border-transparent p-3 -ml-3 transition-colors hover:border-gray-200 hover:bg-background-light dark:hover:border-gray-800 dark:hover:bg-background-dark"
                    >
                      <div className={`flex-shrink-0 size-12 rounded-2xl flex items-center justify-center shadow-paper ${feature.tile}`}>
                        <span className="material-symbols-outlined">{feature.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg text-gray-900 dark:text-gray-50">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-1/2 relative"
              >
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary/40 via-primary-light/20 to-saffron/40 blur-3xl opacity-60" />
                <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lift">
                  <Image
                    alt="Diverse group of students studying together in a modern library"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/85 p-4 backdrop-blur-md dark:border-white/10 dark:bg-ink/80">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-saffron text-ink">
                        <span className="material-symbols-outlined icon-fill text-xl">local_fire_department</span>
                      </span>
                      <span className="font-display text-base font-bold text-gray-900 dark:text-white">
                        {t.features.streak}: 12 {t.features.days}!
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
