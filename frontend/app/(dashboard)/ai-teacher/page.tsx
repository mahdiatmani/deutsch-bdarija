'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/lib/animations'
import {
  sendAIChatMessage,
  fetchAIChatSettings,
  fetchAIConversations,
  fetchAIMessages,
  renameAIConversation,
  deleteAIConversation,
  clearAllAIConversations,
  submitAIMessageFeedback,
  type AIChatSettings,
  type AIChatResponse,
  type AIConversation,
  type AIMessage,
} from '@/lib/api'
import dynamic from 'next/dynamic'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import type { TranslationsType } from '@/lib/translations'
import { FormattedMessage } from '@/components/shared/formatted-message'

const SpeechButton = dynamic(
  () => import('@/components/shared/speech-button').then(mod => ({ default: mod.SpeechButton })),
  { ssr: false, loading: () => <div className="size-12 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" /> }
)

const TeacherAvatar = dynamic(
  () => import('@/components/shared/teacher-avatar').then(mod => ({ default: mod.TeacherAvatar })),
  { ssr: false, loading: () => <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" /> }
)

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  language?: 'darija' | 'german' | 'mixed'
  germanText?: string
  conversationId?: string
  feedbackRating?: number
}


interface ErrorState {
  message: string
  type: 'error' | 'warning' | 'info'
  retryable?: boolean
}

type DeleteTarget = { kind: 'all' } | { kind: 'one'; id: string }

// Only the active session id is cached locally; messages live on the server
const ACTIVE_SESSION_KEY = 'ai-chat-active-session'
const LEGACY_HISTORY_KEY = 'ai-chat-history'

const detectLanguage = (text: string): 'darija' | 'german' | 'mixed' => {
  const arabicPattern = /[\u0600-\u06FF]/
  const germanPattern = /[äöüßÄÖÜ]|(?:sch|ch|ie|ei)/i
  const hasArabic = arabicPattern.test(text)
  const hasGerman = germanPattern.test(text) || /\b(ich|du|sie|wir|ist|und|der|die|das|ein|eine)\b/i.test(text)

  if (hasArabic && hasGerman) return 'mixed'
  if (hasArabic) return 'darija'
  return 'german'
}

const toMessage = (m: AIMessage, conversationId: string): Message => ({
  id: m.id,
  role: m.role,
  content: m.content,
  timestamp: new Date(m.createdAt),
  language: detectLanguage(m.content),
  germanText: m.germanText || undefined,
  conversationId,
  feedbackRating: m.feedback?.rating,
})

const formatSessionDate = (iso: string) => {
  const date = new Date(iso)
  const now = new Date()
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  return date.toLocaleDateString([], { day: 'numeric', month: 'short' })
}

const readActiveSession = () => {
  try {
    localStorage.removeItem(LEGACY_HISTORY_KEY)
    return localStorage.getItem(ACTIVE_SESSION_KEY)
  } catch {
    return null
  }
}

const writeActiveSession = (id: string | null) => {
  try {
    if (id) localStorage.setItem(ACTIVE_SESSION_KEY, id)
    else localStorage.removeItem(ACTIVE_SESSION_KEY)
  } catch {
    // Storage unavailable (private mode etc.) — the session just won't be restored
  }
}

const suggestedQuestions = (t: TranslationsType) => [
  { text: t.aiTeacher.suggestedQuestions.hello, icon: 'waving_hand' },
  { text: t.aiTeacher.suggestedQuestions.grammar, icon: 'help' },
  { text: t.aiTeacher.suggestedQuestions.numbers, icon: 'pin' },
  { text: t.aiTeacher.suggestedQuestions.food, icon: 'restaurant' },
]

const germanPhrases = (t: TranslationsType) => [
  { german: t.aiTeacher.quickPhrases.gutenTag.german, translation: t.aiTeacher.quickPhrases.gutenTag.translation },
  { german: t.aiTeacher.quickPhrases.wieGehtEs.german, translation: t.aiTeacher.quickPhrases.wieGehtEs.translation },
  { german: t.aiTeacher.quickPhrases.verstehe.german, translation: t.aiTeacher.quickPhrases.verstehe.translation },
  { german: t.aiTeacher.quickPhrases.wiederholen.german, translation: t.aiTeacher.quickPhrases.wiederholen.translation },
]

export default function AITeacherPage() {
  const token = useAuthStore(s => s.token)
  const t = useLanguageStore(s => s.t)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentSpeakText, setCurrentSpeakText] = useState('')
  // Bumped on every request, so "listen" works again for a text that was already spoken
  const [speakKey, setSpeakKey] = useState(0)
  const speakText = (text: string) => {
    setCurrentSpeakText(text)
    setSpeakKey((k) => k + 1)
  }
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [selectedPhrase, setSelectedPhrase] = useState<any>(null)
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [settings, setSettings] = useState<AIChatSettings | null>(null)
  const [error, setError] = useState<ErrorState | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null)
  const [retryMessage, setRetryMessage] = useState<string | null>(null)
  const [conversations, setConversations] = useState<AIConversation[]>([])
  const [isLoadingMessages, setIsLoadingMessages] = useState(false)
  const [showSessions, setShowSessions] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  // Bumped on every session switch so a slow fetch can't overwrite a newer session
  const loadSeqRef = useRef(0)
  const restoredRef = useRef(false)
  const renameCancelledRef = useRef(false)

  const questions = suggestedQuestions(t)
  const phrases = germanPhrases(t)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  // Load chat settings
  useEffect(() => {
    if (token) {
      fetchAIChatSettings(token)
        .then(setSettings)
        .catch(err => console.error('Failed to load settings:', err))
    }
  }, [token])

  const loadConversations = useCallback(async () => {
    if (!token) return []
    try {
      const res = await fetchAIConversations(token)
      setConversations(res.data)
      return res.data
    } catch (err) {
      console.error('Failed to load sessions:', err)
      return []
    }
  }, [token])

  const openConversation = useCallback(async (id: string) => {
    if (!token) return
    const seq = ++loadSeqRef.current
    setCurrentConversationId(id)
    writeActiveSession(id)
    setMessages([])
    setCurrentSpeakText('')
    setRetryMessage(null)
    setShowSessions(false)
    setIsLoadingMessages(true)

    try {
      const data = await fetchAIMessages(id, token)
      if (seq !== loadSeqRef.current) return
      setMessages(data.map(m => toMessage(m, id)))
    } catch (err) {
      if (seq !== loadSeqRef.current) return
      console.error('Failed to load session:', err)
      setError({ message: t.aiTeacher.loadSessionError, type: 'error' })
    } finally {
      if (seq === loadSeqRef.current) setIsLoadingMessages(false)
    }
  }, [token, t])

  const startNewSession = useCallback(() => {
    loadSeqRef.current++
    setCurrentConversationId(null)
    writeActiveSession(null)
    setMessages([])
    setCurrentSpeakText('')
    setRetryMessage(null)
    setIsLoadingMessages(false)
    setShowSessions(false)
    inputRef.current?.focus()
  }, [])

  // Load the session list and reopen the last active session
  useEffect(() => {
    if (!token || restoredRef.current) return
    restoredRef.current = true
    loadConversations().then(list => {
      const saved = readActiveSession()
      if (saved && list.some(c => c.id === saved)) {
        openConversation(saved)
      }
    })
  }, [token, loadConversations, openConversation])

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const sendMessage = async (content: string, isRetry = false) => {
    if (!content.trim() || !token) return

    // Check daily limit
    if (settings && settings.messagesRemaining <= 0) {
      setError({
        message: t.aiTeacher.dailyLimit,
        type: 'warning',
        retryable: false
      })
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
      language: detectLanguage(content),
    }

    if (!isRetry) {
      setMessages((prev) => [...prev, userMessage])
    }
    setInput('')
    setIsTyping(true)
    setCurrentSpeakText('')
    setError(null)
    setRetryMessage(null)
    inputRef.current?.focus()
    const seq = loadSeqRef.current

    try {
      const response: AIChatResponse = await sendAIChatMessage(
        content,
        token,
        currentConversationId || undefined
      )

      // Refresh titles, counts and ordering in the session list
      loadConversations()

      // The user switched sessions while waiting — don't mix replies into another session
      if (seq !== loadSeqRef.current) return

      // Update conversation ID if new
      if (!currentConversationId) {
        setCurrentConversationId(response.conversationId)
        writeActiveSession(response.conversationId)
      }

      // Update settings with new usage
      if (response.usage) {
        setSettings(prev => prev ? {
          ...prev,
          messagesUsedToday: response.usage.messagesUsedToday,
          messagesRemaining: response.usage.messagesRemaining,
        } : null)
      }

      const assistantMessage: Message = {
        id: response.id,
        role: 'assistant',
        content: response.content,
        timestamp: new Date(response.timestamp),
        language: detectLanguage(response.content),
        germanText: response.germanText || undefined,
        conversationId: response.conversationId,
      }
      setMessages((prev) => [...prev, assistantMessage])

      // Read the German text aloud unless the user turned auto-speak off
      if (response.germanText && settings?.autoSpeak !== false) {
        setTimeout(() => {
          speakText(response.germanText!)
        }, 500)
      }
    } catch (err: any) {
      console.error('Failed to send message:', err)
      if (seq !== loadSeqRef.current) return

      const errorMessage = err.message || 'Something went wrong. Please try again.'
      const isRetryable = !errorMessage.includes('limit') && !errorMessage.includes('tomorrow')

      setError({
        message: errorMessage,
        type: 'error',
        retryable: isRetryable
      })

      if (isRetryable) {
        setRetryMessage(content)
      }

      // Only add error message to chat if not retrying
      if (!isRetry) {
        setMessages((prev) => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Smeh liya, we9e3 chi mochkil. 3awed 7awel mra khora.',
          timestamp: new Date(),
          language: 'darija',
        }])
      }
    } finally {
      setIsTyping(false)
    }
  }

  const handleRetry = () => {
    if (retryMessage) {
      sendMessage(retryMessage, true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handlePhraseClick = (phrase: any) => {
    setSelectedPhrase(phrase)
    speakText(phrase.german)
  }

  const handleVoiceResult = (transcript: string) => {
    setInput(transcript)
    inputRef.current?.focus()
  }

  const handleConfirmDelete = async () => {
    if (!token || !deleteTarget) return

    try {
      if (deleteTarget.kind === 'all') {
        await clearAllAIConversations(token)
        setConversations([])
        startNewSession()

        // Refresh settings
        const newSettings = await fetchAIChatSettings(token)
        setSettings(newSettings)
      } else {
        await deleteAIConversation(deleteTarget.id, token)
        setConversations(prev => prev.filter(c => c.id !== deleteTarget.id))
        if (deleteTarget.id === currentConversationId) {
          startNewSession()
        }
      }
      setDeleteTarget(null)
    } catch (err) {
      console.error('Failed to delete:', err)
      setError({
        message: deleteTarget.kind === 'all' ? t.aiTeacher.clearError : t.aiTeacher.sessionActionError,
        type: 'error',
      })
    }
  }

  const startRename = (conversation: AIConversation) => {
    renameCancelledRef.current = false
    setEditingId(conversation.id)
    setEditingTitle(conversation.title || '')
  }

  const finishRename = async () => {
    const id = editingId
    const title = editingTitle.trim()
    setEditingId(null)
    if (renameCancelledRef.current || !id || !token) return

    const previous = conversations.find(c => c.id === id)?.title ?? null
    if (!title || title === previous) return

    setConversations(prev => prev.map(c => (c.id === id ? { ...c, title } : c)))
    try {
      await renameAIConversation(id, title.slice(0, 100), token)
    } catch (err) {
      console.error('Failed to rename session:', err)
      setConversations(prev => prev.map(c => (c.id === id ? { ...c, title: previous } : c)))
      setError({ message: t.aiTeacher.sessionActionError, type: 'error' })
    }
  }

  const handleFeedback = async (messageId: string, rating: number) => {
    if (!token) return

    try {
      await submitAIMessageFeedback(messageId, rating, undefined, token)
      setMessages(prev => prev.map(m =>
        m.id === messageId ? { ...m, feedbackRating: rating } : m
      ))
    } catch (err) {
      console.error('Failed to submit feedback:', err)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const currentConversation = conversations.find(c => c.id === currentConversationId)

  const lastGermanText = messages
    .filter(m => m.role === 'assistant' && m.germanText)
    .pop()?.germanText

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col gap-4">
      {/* Error Banner */}
      {error && (
        <div className={cn(
          'px-4 py-3 rounded-xl flex items-center justify-between animate-fade-in',
          error.type === 'error' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800' :
          error.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800' :
          'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
        )}>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">
              {error.type === 'error' ? 'error' : error.type === 'warning' ? 'warning' : 'info'}
            </span>
            <span className="text-sm font-medium">{error.message}</span>
          </div>
          <div className="flex items-center gap-2">
            {error.retryable && retryMessage && (
              <button
                onClick={handleRetry}
                className="px-3 py-1 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {t.common.retry}
              </button>
            )}
            <button
              onClick={() => setError(null)}
              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Teacher Section */}
      <div className="bg-gradient-to-br from-primary/5 via-green-500/5 to-emerald-500/5 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <TeacherAvatar
              text={currentSpeakText}
              speakKey={speakKey}
              isThinking={isTyping}
              onSpeakingChange={setIsSpeaking}
              rate={settings?.speechRate}
            />
          </div>

          {/* Teacher Info & Controls */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <h1 className="text-3xl text-gray-900 dark:text-gray-50">
                {t.aiTeacher.title}
              </h1>
              {settings && (
                <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {settings.messagesRemaining} {t.aiTeacher.messagesLeft}
                </span>
              )}
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {t.aiTeacher.hint}
            </p>

            {/* Quick Phrases */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {t.aiTeacher.quickPhrasesLabel}
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
              >
                {phrases.map((phrase, idx) => (
                  <motion.button
                    key={idx}
                    variants={fadeInUp}
                    onClick={() => handlePhraseClick(phrase)}
                    disabled={isSpeaking}
                    className={cn(
                      'px-4 py-2 rounded-xl text-sm font-medium transition-all',
                      selectedPhrase?.german === phrase.german && isSpeaking
                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-md'
                    )}
                  >
                    <span className="block font-bold">{phrase.german}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {phrase.translation}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Repeat Button */}
            {lastGermanText && (
              <button
                onClick={() => speakText(lastGermanText)}
                disabled={isSpeaking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-lg">replay</span>
                {t.aiTeacher.repeatLast}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex gap-4 relative">
        {/* Sessions backdrop (mobile) */}
        {showSessions && (
          <div
            className="lg:hidden absolute inset-0 z-30 rounded-2xl bg-black/40"
            onClick={() => setShowSessions(false)}
          />
        )}

        {/* Sessions Panel */}
        <aside
          className={cn(
            'paper w-72 max-w-[85%] flex-shrink-0 flex-col overflow-hidden',
            'absolute inset-y-0 left-0 z-40 lg:static lg:z-auto',
            showSessions ? 'flex' : 'hidden lg:flex'
          )}
        >
          <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-2">
            <h2 className="font-bold text-gray-900 dark:text-white">{t.aiTeacher.sessions}</h2>
            <button
              onClick={startNewSession}
              disabled={isTyping}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              <span className="material-symbols-outlined text-base">add</span>
              {t.aiTeacher.newSession}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {conversations.length === 0 ? (
              <p className="px-3 py-6 text-sm text-center text-gray-500 dark:text-gray-400">
                {t.aiTeacher.noSessions}
              </p>
            ) : (
              conversations.map((conversation) => {
                const isActive = conversation.id === currentConversationId
                const isEditing = conversation.id === editingId
                return (
                  <div
                    key={conversation.id}
                    className={cn(
                      'group flex items-center gap-1 rounded-xl transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                  >
                    {isEditing ? (
                      <input
                        autoFocus
                        value={editingTitle}
                        onChange={(e) => setEditingTitle(e.target.value)}
                        onBlur={finishRename}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') e.currentTarget.blur()
                          if (e.key === 'Escape') {
                            renameCancelledRef.current = true
                            e.currentTarget.blur()
                          }
                        }}
                        maxLength={100}
                        dir="auto"
                        className="flex-1 min-w-0 mx-1 my-1 px-2 py-1.5 rounded-lg border border-primary bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none"
                      />
                    ) : (
                      <button
                        onClick={() => !isActive && openConversation(conversation.id)}
                        onDoubleClick={() => startRename(conversation)}
                        disabled={isTyping && !isActive}
                        className="flex-1 min-w-0 px-3 py-2 text-left disabled:opacity-50"
                      >
                        <span className="block truncate text-sm font-medium" dir="auto">
                          {conversation.title || t.aiTeacher.untitledSession}
                        </span>
                        <span className="block text-[11px] text-gray-400">
                          {formatSessionDate(conversation.updatedAt)} · {conversation.messageCount} {t.aiTeacher.sessionMessages}
                        </span>
                      </button>
                    )}
                    {!isEditing && (
                      <div className="flex items-center pr-1 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-opacity">
                        <button
                          onClick={() => startRename(conversation)}
                          title={t.aiTeacher.renameSession}
                          aria-label={t.aiTeacher.renameSession}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10"
                        >
                          <span className="material-symbols-outlined text-base">edit</span>
                        </button>
                        <button
                          onClick={() => setDeleteTarget({ kind: 'one', id: conversation.id })}
                          disabled={isTyping && isActive}
                          title={t.aiTeacher.deleteSession}
                          aria-label={t.aiTeacher.deleteSession}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-50"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>

          {conversations.length > 0 && (
            <div className="p-2 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setDeleteTarget({ kind: 'all' })}
                disabled={isTyping}
                className="w-full px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">delete_sweep</span>
                {t.aiTeacher.clearAll}
              </button>
            </div>
          )}
        </aside>

      {/* Chat Section */}
      <div className="flex-1 min-w-0 paper flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setShowSessions(true)}
              title={t.aiTeacher.showSessions}
              aria-label={t.aiTeacher.showSessions}
              className="lg:hidden p-2 -ml-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined">history</span>
            </button>
            <div className="size-10 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-white">chat</span>
            </div>
            <div className="min-w-0">
              <h2 className="font-bold text-gray-900 dark:text-white truncate" dir="auto">
                {currentConversation?.title || t.aiTeacher.chatTitle}
              </h2>
              <p className="text-xs text-gray-500">{t.aiTeacher.chatSubtitle}</p>
            </div>
          </div>
          {currentConversationId && (
            <button
              onClick={() => setDeleteTarget({ kind: 'one', id: currentConversationId })}
              disabled={isTyping}
              className="flex-shrink-0 px-3 py-1.5 rounded-lg text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">delete</span>
              <span className="hidden sm:inline">{t.aiTeacher.deleteSession}</span>
            </button>
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        {deleteTarget && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-sm mx-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-500 text-2xl">delete_forever</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {deleteTarget.kind === 'all' ? t.aiTeacher.clearHistory : t.aiTeacher.deleteSessionTitle}
                  </h3>
                  <p className="text-sm text-gray-500">{t.aiTeacher.clearWarning}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteTarget(null)}
                  className="flex-1 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {t.common.cancel}
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 px-4 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                >
                  {deleteTarget.kind === 'all' ? t.aiTeacher.clearAll : t.aiTeacher.deleteSession}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {isLoadingMessages ? (
            <div className="h-full flex items-center justify-center">
              <span className="size-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl text-primary">forum</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {t.aiTeacher.startConversation}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                {t.aiTeacher.startHint}
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl"
              >
                {questions.map((question, idx) => (
                  <motion.button
                    key={idx}
                    variants={fadeInUp}
                    onClick={() => sendMessage(question.text)}
                    disabled={isTyping}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:border-primary hover:bg-primary/5 transition-all text-right flex items-center gap-3 disabled:opacity-50"
                  >
                    {question.icon.includes('/') || question.icon.includes('http') ? (
                      <img src={question.icon} alt="" className="size-6 object-cover rounded-md" />
                    ) : (
                      <span className="material-symbols-outlined text-primary">{question.icon}</span>
                    )}
                    <span className="flex-1">{question.text}</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={message.role === 'user' ? slideInRight : slideInLeft}
                  initial="hidden"
                  animate="visible"
                  className={cn(
                    'flex gap-3 max-w-[85%]',
                    message.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                  )}
                >
                  <div
                    className={cn(
                      'size-9 rounded-full flex-shrink-0 flex items-center justify-center',
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-primary text-white'
                    )}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {message.role === 'user' ? 'person' : 'smart_toy'}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      className={cn(
                        'px-4 py-3 rounded-2xl text-sm leading-relaxed',
                        message.role === 'user'
                          ? 'bg-blue-500 text-white rounded-tr-sm'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-sm'
                      )}
                      dir={message.language === 'darija' ? 'rtl' : 'ltr'}
                    >
                      {message.role === 'assistant' ? (
                        <FormattedMessage content={message.content} />
                      ) : (
                        message.content
                      )}
                    </div>

                    {/* Actions for assistant messages */}
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 flex-wrap">
                        {message.germanText && (
                          <button
                            onClick={() => speakText(message.germanText!)}
                            disabled={isSpeaking}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-primary hover:bg-primary/10 disabled:opacity-50 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">volume_up</span>
                            {t.aiTeacher.hearGerman}
                          </button>
                        )}

                        {/* Feedback buttons */}
                        {message.id && message.id.length > 10 && (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleFeedback(message.id, 5)}
                              className={cn(
                                'p-1.5 rounded-lg transition-colors',
                                message.feedbackRating === 5
                                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400'
                              )}
                              title={t.aiTeacher.helpful}
                            >
                              <span className="material-symbols-outlined text-sm">thumb_up</span>
                            </button>
                            <button
                              onClick={() => handleFeedback(message.id, 1)}
                              className={cn(
                                'p-1.5 rounded-lg transition-colors',
                                message.feedbackRating === 1
                                  ? 'bg-red-100 dark:bg-red-900/30 text-red-600'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400'
                              )}
                              title={t.aiTeacher.notHelpful}
                            >
                              <span className="material-symbols-outlined text-sm">thumb_down</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    <span className={cn(
                      'text-[10px] text-gray-400',
                      message.role === 'user' ? 'text-right' : 'text-left'
                    )}>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="size-9 rounded-full bg-primary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg">smart_toy</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-xs text-gray-400">{t.aiTeacher.thinking}</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <SpeechButton
              onResult={handleVoiceResult}
              disabled={isTyping}
              language="de-DE"
            />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.aiTeacher.typePlaceholder}
              maxLength={2000}
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              dir="auto"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping || isLoadingMessages || (settings?.messagesRemaining ?? 1) <= 0}
              className="size-12 rounded-xl bg-primary text-white flex items-center justify-center disabled:opacity-50 hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
          {input.length > 1800 && (
            <p className="text-xs text-yellow-500 mt-2">
              {2000 - input.length} {t.aiTeacher.charsRemaining}
            </p>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}
