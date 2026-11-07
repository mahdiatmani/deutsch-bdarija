'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { generateTest, fetchTestHistory } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'
import type { TestHistory } from '@/types'

const levelColors: Record<string, string> = {
  A1: '#00A36C',
  A2: '#3b82f6',
  B1: '#8b5cf6',
  B2: '#f59e0b',
}

export default function TestsPage() {
  const { token } = useAuthStore()
  const { t } = useLanguageStore()

  const subjectSuggestions = [
    t.tests.subjects.food,
    t.tests.subjects.doctor,
    t.tests.subjects.shopping,
    t.tests.subjects.travel,
    t.tests.subjects.intro,
    t.tests.subjects.routine,
    t.tests.subjects.weather,
    t.tests.subjects.family,
  ]
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { data: historyData, isLoading: isLoadingHistory } = useQuery({
    queryKey: ['test-history'],
    queryFn: () => fetchTestHistory(token!),
    enabled: !!token,
  })

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject.trim() || !token) return

    setIsGenerating(true)
    setError(null)

    try {
      const data = await generateTest(subject.trim(), token)
      router.push(`/tests/${data.testId}`)
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Failed to generate test')
    } finally {
      setIsGenerating(false)
    }
  }

  const tests = historyData?.tests || []
  const totalTests = historyData?.total || 0

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-8">
        <p className="eyebrow mb-3">{t.nav.tests}</p>
        <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-gray-50 mb-3">
          {t.tests.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t.tests.subtitle}
        </p>
      </motion.div>

      {/* AI Test Generator */}
      <motion.div variants={scaleIn} initial="hidden" animate="visible" className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
          {t.tests.aiGenerator}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {t.tests.aiGeneratorDesc}
        </p>

        {/* Subject Suggestions */}
        <div className="flex flex-wrap gap-2 mb-4">
          {subjectSuggestions.map((s) => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        <form onSubmit={handleGenerate} className="flex gap-2">
          <input
            type="text"
            placeholder={t.tests.subjectPlaceholder}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isGenerating}
          />
          <button
            type="submit"
            disabled={isGenerating || !subject.trim()}
            className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {t.tests.generating}
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">psychology</span>
                {t.tests.generateTest}
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}
      </motion.div>

      {/* Placement Test Banner */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-6 mb-8 text-white">
        <div className="flex items-center gap-4">
          <div className="size-16 rounded-xl bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl">quiz</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{t.tests.placementTest}</h2>
            <p className="text-white/80">
              {t.tests.placementDesc}
            </p>
          </div>
          <Link
            href="/tests/placement"
            className="px-6 py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
          >
            {t.tests.startTest}
          </Link>
        </div>
      </motion.div>

      {/* Test History */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined">history</span>
          {t.tests.yourResults}
          {totalTests > 0 && (
            <span className="text-sm font-normal text-gray-500">({totalTests} {t.common.total})</span>
          )}
        </h2>

        {isLoadingHistory ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : tests.length === 0 ? (
          <div className="paper p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600 mb-2 block">
              history
            </span>
            <p className="text-gray-500 dark:text-gray-400">
              {t.tests.noResults}
            </p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {tests.map((test: TestHistory) => {
              const levelColor = levelColors[test.level] || '#6b7280'
              const isCompleted = test.status === 'completed'
              const date = new Date(test.createdAt)

              return (
                <motion.div
                  key={test.id}
                  variants={fadeInUp}
                  className="paper p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Score Circle */}
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <div
                          className="size-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                          style={{
                            backgroundColor: test.score! >= 70 ? '#00A36C' : test.score! >= 40 ? '#f59e0b' : '#ef4444',
                          }}
                        >
                          {test.score}%
                        </div>
                      ) : (
                        <div className="size-14 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                          <span className="material-symbols-outlined text-gray-400">pending</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white truncate">
                          {test.subject}
                        </h3>
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-bold text-white flex-shrink-0"
                          style={{ backgroundColor: levelColor }}
                        >
                          {test.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        {' '}{t.common.at} {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        {isCompleted && ` · ${test.score}/${test.totalPoints} ${t.common.pts}`}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isCompleted ? (
                        <>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(`${window.location.origin}/tests/${test.id}`)
                            }}
                            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title="Copy share link"
                          >
                            <span className="material-symbols-outlined text-lg">share</span>
                          </button>
                          <Link
                            href={`/tests/${test.id}`}
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {t.tests.review}
                          </Link>
                        </>
                      ) : (
                        <Link
                          href={`/tests/${test.id}`}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
                        >
                          {t.tests.continueTest}
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </div>
  )
}
