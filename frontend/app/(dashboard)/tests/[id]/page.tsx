'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchTest, submitTest } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { fadeInUp, scaleIn } from '@/lib/animations'
import type { TestExercise, TestSection } from '@/types'

const levelColors: Record<string, string> = {
  A1: '#00A36C',
  A2: '#3b82f6',
  B1: '#8b5cf6',
  B2: '#f59e0b',
}

const typeIcons: Record<string, string> = {
  'multiple-choice': 'radio_button_checked',
  'fill-blank': 'edit_note',
  'translation': 'translate',
  'matching': 'compare_arrows',
  'listening': 'headphones',
  'reading': 'menu_book',
  'true-false': 'check_box',
  'short-answer': 'short_text',
  'sentence-correction': 'spellcheck',
  'writing': 'draw',
  'speaking': 'record_voice_over',
}

const sectionIcons: Record<string, string> = {
  reading: 'menu_book',
  listening: 'headphones',
  grammar: 'spellcheck',
  writing: 'draw',
  speaking: 'record_voice_over',
}

const sectionOrder: TestSection[] = ['reading', 'listening', 'grammar', 'writing', 'speaking']

// Types that use MCQ-style options
const mcqTypes = ['multiple-choice', 'listening', 'reading']
// Types graded by participation (any non-empty = correct)
const participationTypes = ['writing', 'speaking']

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const queryClient = useQueryClient()
  const { token } = useAuthStore()
  const { t } = useLanguageStore()
  const testId = params.id as string

  const typeLabels: Record<string, string> = {
    'multiple-choice': t.tests.types.multipleChoice,
    'fill-blank': t.tests.types.fillBlank,
    'translation': t.tests.types.translation,
    'matching': t.tests.types.matching,
    'listening': t.tests.types.listening,
    'reading': t.tests.types.reading,
    'true-false': t.tests.types.trueFalse,
    'short-answer': t.tests.types.shortAnswer,
    'sentence-correction': t.tests.types.sentenceCorrection,
    'writing': t.tests.types.writing,
    'speaking': t.tests.types.speaking,
  }

  const sectionLabels: Record<string, string> = {
    reading: t.tests.sections.reading,
    listening: t.tests.sections.listening,
    grammar: t.tests.sections.grammar,
    writing: t.tests.sections.writing,
    speaking: t.tests.sections.speaking,
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [copied, setCopied] = useState(false)

  const { data: test, isLoading, error } = useQuery({
    queryKey: ['test', testId],
    queryFn: () => fetchTest(testId, token!),
    enabled: !!token && !!testId,
  })

  const isCompleted = test?.status === 'completed'
  const exercises: TestExercise[] = useMemo(() => test?.exercises || [], [test])

  // Timer for taking mode
  useEffect(() => {
    if (isCompleted || isLoading || !test) return
    const interval = setInterval(() => {
      setElapsedSeconds(s => s + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [isCompleted, isLoading, test])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const setAnswer = (exerciseId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [String(exerciseId)]: value }))
  }

  const answeredCount = useMemo(() => {
    return exercises.filter(ex => answers[String(ex.id)]?.trim()).length
  }, [answers, exercises])

  // Group exercises by section for review mode
  const groupedExercises = useMemo(() => {
    const groups: { section: TestSection; label: string; icon: string; exercises: { ex: TestExercise; globalIdx: number }[] }[] = []
    const seen = new Set<TestSection>()

    exercises.forEach((ex, idx) => {
      const section = (ex.section || 'grammar') as TestSection
      if (!seen.has(section)) {
        seen.add(section)
        groups.push({
          section,
          label: sectionLabels[section] || section,
          icon: sectionIcons[section] || 'quiz',
          exercises: [],
        })
      }
      const group = groups.find(g => g.section === section)
      group?.exercises.push({ ex, globalIdx: idx })
    })

    // Sort by section order
    groups.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section))
    return groups
  }, [exercises])

  const handleSubmit = async () => {
    if (!token || isSubmitting) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await submitTest(testId, answers, token)
      queryClient.invalidateQueries({ queryKey: ['test', testId] })
      queryClient.invalidateQueries({ queryKey: ['test-history'] })
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] })
      // Refresh auth store user data
      useAuthStore.getState().checkAuth()
    } catch (err: any) {
      console.error(err)
      setSubmitError(err.message || 'Failed to submit test')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(`${window.location.origin}/tests/${testId}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading test...</p>
        </div>
      </div>
    )
  }

  if (error || !test) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <span className="material-symbols-outlined text-5xl text-red-400 mb-4 block">error</span>
        <h2 className="text-xl font-bold mb-2">{t.tests.testNotFound}</h2>
        <p className="text-gray-500 mb-6">{(error as any)?.message || t.tests.testNotFoundDesc}</p>
        <Link href="/tests" className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors">
          {t.tests.backToTests}
        </Link>
      </div>
    )
  }

  // ==================== REVIEW MODE ====================
  if (isCompleted) {
    const scoreColor = test.score >= 70 ? '#00A36C' : test.score >= 40 ? '#f59e0b' : '#ef4444'
    const correctCount = exercises.filter((ex: TestExercise) => ex.isCorrect).length

    return (
      <div className="max-w-3xl mx-auto">
        {/* Score Header */}
        <motion.div variants={scaleIn} initial="hidden" animate="visible" className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center size-28 rounded-full text-white text-4xl font-bold mb-4"
            style={{ backgroundColor: scoreColor }}
          >
            {test.score}%
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {test.subject}
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: levelColors[test.level] || '#6b7280' }}
            >
              {test.level}
            </span>
            <span>{correctCount}/{exercises.length} {t.common.correct}</span>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">share</span>
            {copied ? t.common.linkCopied : t.common.share}
          </button>
          <Link
            href="/tests"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            {t.tests.newTest}
          </Link>
        </div>

        {/* Grouped Exercise Review */}
        <div className="space-y-8">
          {groupedExercises.map((group) => (
            <div key={group.section}>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-gray-200 dark:border-gray-700">
                {group.icon.includes('/') || group.icon.includes('http') ? (
                  <img src={group.icon} alt="" className="size-6 object-cover rounded-md" />
                ) : (
                  <span className="material-symbols-outlined text-primary text-xl">{group.icon}</span>
                )}
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{group.label}</h2>
                <span className="text-xs text-gray-500 ml-auto">
                  {group.exercises.filter(e => e.ex.isCorrect).length}/{group.exercises.length} {t.common.correct}
                </span>
              </div>

              <div className="space-y-4">
                {group.exercises.map(({ ex, globalIdx }) => (
                  <ReviewExerciseCard key={ex.id} ex={ex} idx={globalIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/tests" className="text-sm text-primary hover:underline">
            {t.tests.backToTests}
          </Link>
        </div>
      </div>
    )
  }

  // ==================== TAKING MODE ====================
  const currentExercise = exercises[currentIndex]
  if (!currentExercise) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <p className="text-gray-500">{t.tests.noExercises}</p>
        <Link href="/tests" className="mt-4 text-primary hover:underline">{t.tests.backToTests}</Link>
      </div>
    )
  }

  const currentAnswer = answers[String(currentExercise.id)] || ''
  const currentSection = currentExercise.section || 'grammar'
  // Check if this is the first exercise in a new section
  const prevSection = currentIndex > 0 ? (exercises[currentIndex - 1].section || 'grammar') : null
  const isNewSection = currentSection !== prevSection

  return (
    <div className="max-w-3xl mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/tests" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          {t.tests.exit}
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">timer</span>
            {formatTime(elapsedSeconds)}
          </span>
          <span
            className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: levelColors[test.level] || '#6b7280' }}
          >
            {test.level}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t.tests.question} {currentIndex + 1} {t.common.of} {exercises.length}
          </span>
          <span className="text-sm text-gray-500">{answeredCount}/{exercises.length} {t.tests.answered}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>
        {/* Question dots */}
        <div className="flex gap-1 mt-2 justify-center flex-wrap">
          {exercises.map((ex, idx) => (
            <button
              key={ex.id}
              onClick={() => setCurrentIndex(idx)}
              className={`size-3 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-primary scale-125'
                  : answers[String(ex.id)]?.trim()
                  ? 'bg-primary/50'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Section Header (shows when entering a new section) */}
      {isNewSection && (
        <div className="flex items-center gap-2 mb-3 text-sm font-bold text-primary">
          <span className="material-symbols-outlined text-lg">{sectionIcons[currentSection] || 'quiz'}</span>
          {sectionLabels[currentSection] || currentSection}
        </div>
      )}

      {/* Exercise Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6"
        >
          {/* Type Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-2 py-1 rounded-md bg-primary/10 text-primary uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">{typeIcons[currentExercise.type] || 'help'}</span>
              {typeLabels[currentExercise.type] || currentExercise.type}
            </span>
            <span className="text-xs text-gray-500">{currentExercise.points} {t.common.pts}</span>
          </div>

          {/* Passage for listening/reading */}
          {currentExercise.passage && (
            <div className="mb-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                <span className="material-symbols-outlined text-lg">
                  {currentExercise.type === 'listening' ? 'headphones' : 'menu_book'}
                </span>
                {currentExercise.type === 'listening' ? t.tests.input.listenPassage : t.tests.input.readPassage}
              </div>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{currentExercise.passage}</p>
            </div>
          )}

          {/* Question */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
            {currentExercise.question}
          </h3>

          {/* Answer Input based on type */}
          <TakingModeInput
            exercise={currentExercise}
            currentAnswer={currentAnswer}
            setAnswer={(val) => setAnswer(currentExercise.id, val)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
          Previous
        </button>

        {currentIndex === exercises.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || answeredCount === 0}
            className="px-6 py-3 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">send</span>
                Submit Test ({answeredCount}/{exercises.length})
              </>
            )}
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex(i => Math.min(exercises.length - 1, i + 1))}
            className="px-4 py-2 rounded-xl text-sm font-medium text-primary hover:bg-primary/10 transition-colors flex items-center gap-1"
          >
            Next
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        )}
      </div>

      {submitError && (
        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm text-center">
          {submitError}
        </div>
      )}
    </div>
  )
}

// ==================== TAKING MODE INPUT COMPONENT ====================
function TakingModeInput({ exercise, currentAnswer, setAnswer }: {
  exercise: TestExercise
  currentAnswer: string
  setAnswer: (val: string) => void
}) {
  const { t } = useLanguageStore()
  const type = exercise.type

  // MCQ types: multiple-choice, listening, reading
  if (mcqTypes.includes(type)) {
    return (
      <div className="grid gap-3">
        {(exercise.options || []).map((opt: string, i: number) => (
          <button
            key={i}
            onClick={() => setAnswer(opt)}
            className={`p-4 rounded-xl text-left text-sm font-medium border-2 transition-all ${
              currentAnswer === opt
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`size-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                currentAnswer === opt ? 'border-primary' : 'border-gray-300 dark:border-gray-600'
              }`}>
                {currentAnswer === opt && <div className="size-2.5 rounded-full bg-primary" />}
              </div>
              {opt}
            </div>
          </button>
        ))}
      </div>
    )
  }

  // True/False
  if (type === 'true-false') {
    const tfLabels: Record<string, string> = { 'True': t.tests.input.true, 'False': t.tests.input.false }
    return (
      <div className="grid grid-cols-2 gap-4">
        {['True', 'False'].map((val) => (
          <button
            key={val}
            onClick={() => setAnswer(val)}
            className={`p-5 rounded-xl text-center text-lg font-bold border-2 transition-all ${
              currentAnswer === val
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="material-symbols-outlined text-2xl mb-1 block">
              {val === 'True' ? 'check_circle' : 'cancel'}
            </span>
            {tfLabels[val]}
          </button>
        ))}
      </div>
    )
  }

  // Fill in the blank
  if (type === 'fill-blank') {
    return (
      <input
        type="text"
        value={currentAnswer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={t.tests.input.typeMissing}
        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-lg"
        autoFocus
      />
    )
  }

  // Short answer
  if (type === 'short-answer') {
    return (
      <input
        type="text"
        value={currentAnswer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={t.tests.input.typeShortAnswer}
        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-lg"
        autoFocus
      />
    )
  }

  // Sentence correction
  if (type === 'sentence-correction') {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-3">
          {t.tests.input.writeCorrected}
        </p>
        <input
          type="text"
          value={currentAnswer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={t.tests.input.typeCorrected}
          className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-lg"
          autoFocus
        />
      </div>
    )
  }

  // Translation
  if (type === 'translation') {
    return (
      <textarea
        value={currentAnswer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={t.tests.input.typeTranslation}
        rows={3}
        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-lg resize-none"
        autoFocus
      />
    )
  }

  // Writing
  if (type === 'writing') {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">info</span>
          {t.tests.input.writeResponseInfo}
        </p>
        <textarea
          value={currentAnswer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={t.tests.input.writeResponsePlaceholder}
          rows={6}
          className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-base resize-none"
          autoFocus
        />
      </div>
    )
  }

  // Speaking (text-based)
  if (type === 'speaking') {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-3 flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">info</span>
          {t.tests.input.speakResponseInfo}
        </p>
        <textarea
          value={currentAnswer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={t.tests.input.speakResponsePlaceholder}
          rows={4}
          className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-base resize-none"
          autoFocus
        />
      </div>
    )
  }

  // Matching
  if (type === 'matching') {
    return (
      <div>
        <p className="text-sm text-gray-500 mb-3">
          {t.tests.input.matchInstruction}
        </p>
        {exercise.matchPairs && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase mb-2 block">{t.tests.input.german}</span>
              {exercise.matchPairs.map((pair, i) => (
                <div key={i} className="p-2 mb-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm font-medium">
                  {pair.german}
                </div>
              ))}
            </div>
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase mb-2 block">{t.tests.input.darija}</span>
              {[...exercise.matchPairs].sort(() => 0.5 - Math.random()).map((pair, i) => (
                <div key={i} className="p-2 mb-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm">
                  {pair.darija}
                </div>
              ))}
            </div>
          </div>
        )}
        <input
          type="text"
          value={currentAnswer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={t.tests.input.matchPlaceholder}
          className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary"
        />
      </div>
    )
  }

  // Fallback
  return (
    <input
      type="text"
      value={currentAnswer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder={t.tests.input.typeAnswer}
      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 focus:outline-none focus:border-primary text-lg"
    />
  )
}

// ==================== REVIEW EXERCISE CARD ====================
function ReviewExerciseCard({ ex, idx }: { ex: TestExercise; idx: number }) {
  const { t } = useLanguageStore()
  const typeLabels: Record<string, string> = {
    'multiple-choice': t.tests.types.multipleChoice,
    'fill-blank': t.tests.types.fillBlank,
    'translation': t.tests.types.translation,
    'matching': t.tests.types.matching,
    'listening': t.tests.types.listening,
    'reading': t.tests.types.reading,
    'true-false': t.tests.types.trueFalse,
    'short-answer': t.tests.types.shortAnswer,
    'sentence-correction': t.tests.types.sentenceCorrection,
    'writing': t.tests.types.writing,
    'speaking': t.tests.types.speaking,
  }
  const isParticipation = participationTypes.includes(ex.type)

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: idx * 0.03 }}
      className={`p-5 rounded-xl border-2 ${
        isParticipation
          ? ex.isCorrect
            ? 'border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/10'
            : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/10'
          : ex.isCorrect
          ? 'border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/10'
          : 'border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 uppercase tracking-wider flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">{typeIcons[ex.type] || 'help'}</span>
            {typeLabels[ex.type] || ex.type}
          </span>
          <span className="text-xs text-gray-500">{ex.points} pts</span>
        </div>
        {isParticipation ? (
          <span className="material-symbols-outlined text-xl" style={{ color: ex.isCorrect ? '#3b82f6' : '#9ca3af' }}>
            {ex.isCorrect ? 'task_alt' : 'remove_circle_outline'}
          </span>
        ) : (
          <span className="material-symbols-outlined text-xl" style={{ color: ex.isCorrect ? '#00A36C' : '#ef4444' }}>
            {ex.isCorrect ? 'check_circle' : 'cancel'}
          </span>
        )}
      </div>

      {/* Passage */}
      {ex.passage && (
        <div className="mb-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm italic">
          {ex.passage}
        </div>
      )}

      {/* Question */}
      <p className="font-medium text-gray-900 dark:text-white mb-3">{idx + 1}. {ex.question}</p>

      {/* Match pairs display */}
      {ex.matchPairs && (
        <div className="mb-3 grid grid-cols-2 gap-2">
          {ex.matchPairs.map((pair, i) => (
            <div key={i} className="p-2 rounded-lg bg-white dark:bg-black/20 text-sm border border-gray-200 dark:border-gray-700">
              <span className="font-medium">{pair.german}</span> = <span className="text-gray-500">{pair.darija}</span>
            </div>
          ))}
        </div>
      )}

      {/* === TYPE-SPECIFIC REVIEW === */}

      {/* MCQ types with options */}
      {ex.options && (
        <div className="grid gap-2 mb-3">
          {ex.options.map((opt: string, i: number) => {
            const isUserPick = ex.userAnswer === opt
            const isCorrectOpt = ex.correctAnswer === opt
            return (
              <div
                key={i}
                className={`p-3 rounded-lg text-sm border ${
                  isCorrectOpt
                    ? 'border-green-400 bg-green-100 dark:bg-green-900/30 font-medium'
                    : isUserPick
                    ? 'border-red-400 bg-red-100 dark:bg-red-900/30'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {isCorrectOpt && <span className="material-symbols-outlined text-green-600 text-sm">check</span>}
                  {isUserPick && !isCorrectOpt && <span className="material-symbols-outlined text-red-600 text-sm">close</span>}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* True/False review */}
      {ex.type === 'true-false' && !ex.options && (
        <div className="grid grid-cols-2 gap-3 mb-3">
          {['True', 'False'].map((val) => {
            const isUserPick = ex.userAnswer === val
            const isCorrectVal = ex.correctAnswer === val
            return (
              <div
                key={val}
                className={`p-3 rounded-lg text-sm text-center font-medium border ${
                  isCorrectVal
                    ? 'border-green-400 bg-green-100 dark:bg-green-900/30'
                    : isUserPick
                    ? 'border-red-400 bg-red-100 dark:bg-red-900/30'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20'
                }`}
              >
                {val}
                {isCorrectVal && <span className="material-symbols-outlined text-green-600 text-sm ml-1">check</span>}
                {isUserPick && !isCorrectVal && <span className="material-symbols-outlined text-red-600 text-sm ml-1">close</span>}
              </div>
            )
          })}
        </div>
      )}

      {/* Writing/Speaking review — show user answer + model answer */}
      {isParticipation && (
        <div className="space-y-3 mb-3">
          <div className="p-3 rounded-lg text-sm border border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium block mb-1">{t.tests.reviewLabels.yourResponse}</span>
            <span className="whitespace-pre-wrap">{ex.userAnswer || t.common.noAnswer}</span>
          </div>
          {ex.modelAnswer && (
            <div className="p-3 rounded-lg text-sm border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <span className="text-xs text-gray-500 font-medium block mb-1">{t.tests.reviewLabels.exampleResponse}</span>
              <span className="whitespace-pre-wrap">{ex.modelAnswer}</span>
            </div>
          )}
        </div>
      )}

      {/* Text answer display (non-MCQ, non-participation, non-true-false) */}
      {!ex.options && !isParticipation && ex.type !== 'true-false' && (
        <div className="space-y-2 mb-3">
          <div className={`p-3 rounded-lg text-sm border ${
            ex.isCorrect ? 'border-green-400 bg-green-100 dark:bg-green-900/30' : 'border-red-400 bg-red-100 dark:bg-red-900/30'
          }`}>
            <span className="text-xs text-gray-500 block mb-1">{t.tests.reviewLabels.yourAnswer}</span>
            <span className="font-medium">{ex.userAnswer || t.common.noAnswer}</span>
          </div>
          {!ex.isCorrect && ex.correctAnswer && (
            <div className="p-3 rounded-lg text-sm border border-green-400 bg-green-100 dark:bg-green-900/30">
              <span className="text-xs text-gray-500 block mb-1">{t.tests.reviewLabels.correctAnswer}</span>
              <span className="font-medium">{ex.correctAnswer}</span>
            </div>
          )}
        </div>
      )}

      {/* Explanation */}
      {ex.explanation && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            <span className="font-medium not-italic">{t.tests.reviewLabels.explanation}</span> {ex.explanation}
          </p>
        </div>
      )}
    </motion.div>
  )
}
