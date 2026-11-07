'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface SpeakingAvatarProps {
  text?: string
  isThinking?: boolean
  isSpeaking?: boolean
  onSpeakingStart?: () => void
  onSpeakingEnd?: () => void
  language?: 'de-DE' | 'ar' | 'en-US'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  autoSpeak?: boolean
}

export function SpeakingAvatar({
  text,
  isThinking = false,
  isSpeaking: externalIsSpeaking,
  onSpeakingStart,
  onSpeakingEnd,
  language = 'de-DE',
  size = 'lg',
  className,
  autoSpeak = false,
}: SpeakingAvatarProps) {
  const [internalIsSpeaking, setInternalIsSpeaking] = useState(false)
  const [mouthOpen, setMouthOpen] = useState(false)
  const [eyesBlink, setEyesBlink] = useState(false)
  const [expression, setExpression] = useState<'neutral' | 'happy' | 'thinking'>('neutral')
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const blinkRef = useRef<NodeJS.Timeout | null>(null)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const isSpeaking = externalIsSpeaking ?? internalIsSpeaking

  const sizes = {
    sm: { container: 'size-24', face: 'size-20', eye: 'size-3', mouth: 'w-6' },
    md: { container: 'size-32', face: 'size-28', eye: 'size-4', mouth: 'w-8' },
    lg: { container: 'size-48', face: 'size-40', eye: 'size-5', mouth: 'w-10' },
    xl: { container: 'size-64', face: 'size-56', eye: 'size-6', mouth: 'w-14' },
  }

  const { container, face, eye, mouth } = sizes[size]

  // Random blinking
  useEffect(() => {
    const blink = () => {
      setEyesBlink(true)
      setTimeout(() => setEyesBlink(false), 150)
    }

    const scheduleBlink = () => {
      const delay = 2000 + Math.random() * 4000
      blinkRef.current = setTimeout(() => {
        blink()
        scheduleBlink()
      }, delay)
    }

    scheduleBlink()

    return () => {
      if (blinkRef.current) clearTimeout(blinkRef.current)
    }
  }, [])

  // Update expression based on state
  useEffect(() => {
    if (isThinking) {
      setExpression('thinking')
    } else if (isSpeaking) {
      setExpression('happy')
    } else {
      setExpression('neutral')
    }
  }, [isThinking, isSpeaking])

  // Mouth animation while speaking
  useEffect(() => {
    if (isSpeaking) {
      const animateMouth = () => {
        setMouthOpen((prev) => !prev)
        animationRef.current = setTimeout(animateMouth, 100 + Math.random() * 100)
      }
      animateMouth()
    } else {
      setMouthOpen(false)
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [isSpeaking])

  const speak = useCallback((textToSpeak: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utterance.lang = language
    utterance.rate = 0.9
    utterance.pitch = 1.1

    // Try to find a German voice
    const voices = window.speechSynthesis.getVoices()
    const germanVoice = voices.find(
      (voice) => voice.lang.startsWith('de') || voice.lang === 'de-DE'
    )
    if (germanVoice) {
      utterance.voice = germanVoice
    }

    utterance.onstart = () => {
      setInternalIsSpeaking(true)
      onSpeakingStart?.()
    }

    utterance.onend = () => {
      setInternalIsSpeaking(false)
      onSpeakingEnd?.()
    }

    utterance.onerror = () => {
      setInternalIsSpeaking(false)
      onSpeakingEnd?.()
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [language, onSpeakingStart, onSpeakingEnd])

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setInternalIsSpeaking(false)
      onSpeakingEnd?.()
    }
  }, [onSpeakingEnd])

  // Auto-speak when text changes
  useEffect(() => {
    if (autoSpeak && text) {
      speak(text)
    }
  }, [text, autoSpeak, speak])

  // Expose methods via ref if needed
  const handleClick = () => {
    if (isSpeaking) {
      stopSpeaking()
    } else if (text) {
      speak(text)
    }
  }

  return (
    <div className={cn('relative', className)}>
      {/* Main Avatar Container */}
      <button
        onClick={handleClick}
        className={cn(
          'relative rounded-full transition-all duration-300 cursor-pointer group',
          container,
          isSpeaking && 'animate-pulse-ring'
        )}
        title={isSpeaking ? 'Click to stop' : 'Click to speak'}
      >
        {/* Glow Effect */}
        <div
          className={cn(
            'absolute inset-0 rounded-full transition-all duration-500',
            isSpeaking
              ? 'bg-gradient-to-br from-primary/40 to-green-500/40 blur-xl scale-110'
              : isThinking
              ? 'bg-gradient-to-br from-yellow-500/30 to-orange-500/30 blur-lg scale-105'
              : 'bg-gradient-to-br from-primary/20 to-green-500/20 blur-md'
          )}
        />

        {/* Face Container */}
        <div
          className={cn(
            'absolute inset-0 m-auto rounded-full bg-gradient-to-br from-primary to-green-600 shadow-2xl flex items-center justify-center overflow-hidden',
            face,
            isSpeaking && 'shadow-primary/50',
            'transition-all duration-300'
          )}
        >
          {/* Face Inner */}
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Hair/Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/4 bg-green-800 rounded-t-full" />

            {/* Face Skin */}
            <div className="absolute top-[15%] w-[85%] h-[75%] bg-gradient-to-b from-amber-100 to-amber-200 rounded-[40%] shadow-inner">
              {/* Eyebrows */}
              <div className="absolute top-[20%] w-full flex justify-center gap-[30%]">
                <div
                  className={cn(
                    'w-[15%] h-1 bg-green-900 rounded-full transition-transform',
                    expression === 'thinking' && '-rotate-12',
                    expression === 'happy' && 'rotate-6'
                  )}
                />
                <div
                  className={cn(
                    'w-[15%] h-1 bg-green-900 rounded-full transition-transform',
                    expression === 'thinking' && 'rotate-12',
                    expression === 'happy' && '-rotate-6'
                  )}
                />
              </div>

              {/* Eyes */}
              <div className="absolute top-[30%] w-full flex justify-center gap-[25%]">
                {/* Left Eye */}
                <div
                  className={cn(
                    'bg-white rounded-full shadow-inner flex items-center justify-center transition-all',
                    eye,
                    eyesBlink && 'scale-y-[0.1]'
                  )}
                >
                  <div
                    className={cn(
                      'bg-green-900 rounded-full',
                      size === 'sm' ? 'size-1.5' : size === 'md' ? 'size-2' : size === 'lg' ? 'size-2.5' : 'size-3',
                      isSpeaking && 'animate-bounce'
                    )}
                  />
                </div>
                {/* Right Eye */}
                <div
                  className={cn(
                    'bg-white rounded-full shadow-inner flex items-center justify-center transition-all',
                    eye,
                    eyesBlink && 'scale-y-[0.1]'
                  )}
                >
                  <div
                    className={cn(
                      'bg-green-900 rounded-full',
                      size === 'sm' ? 'size-1.5' : size === 'md' ? 'size-2' : size === 'lg' ? 'size-2.5' : 'size-3',
                      isSpeaking && 'animate-bounce'
                    )}
                  />
                </div>
              </div>

              {/* Cheeks (blush when happy) */}
              {expression === 'happy' && (
                <>
                  <div className="absolute top-[45%] left-[10%] w-[15%] h-[10%] bg-pink-300/50 rounded-full blur-sm" />
                  <div className="absolute top-[45%] right-[10%] w-[15%] h-[10%] bg-pink-300/50 rounded-full blur-sm" />
                </>
              )}

              {/* Nose */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-[8%] h-[8%] bg-amber-300 rounded-full" />

              {/* Mouth */}
              <div className="absolute top-[62%] left-1/2 -translate-x-1/2">
                {isThinking ? (
                  // Thinking expression - small o mouth
                  <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500" />
                ) : (
                  // Speaking/Neutral mouth
                  <div
                    className={cn(
                      'bg-red-400 rounded-full transition-all duration-75 flex items-center justify-center overflow-hidden',
                      mouth,
                      mouthOpen ? 'h-4 rounded-[50%]' : 'h-2',
                      expression === 'happy' && !mouthOpen && 'rounded-b-full rounded-t-none'
                    )}
                  >
                    {mouthOpen && (
                      <>
                        {/* Teeth */}
                        <div className="absolute top-0 w-full h-1 bg-white" />
                        {/* Tongue */}
                        <div className="absolute bottom-0 w-1/2 h-1/2 bg-red-500 rounded-t-full" />
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Ears */}
            <div className="absolute top-[35%] left-0 w-[8%] h-[15%] bg-amber-200 rounded-full" />
            <div className="absolute top-[35%] right-0 w-[8%] h-[15%] bg-amber-200 rounded-full" />
          </div>
        </div>

        {/* Speaking Indicator */}
        {isSpeaking && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            <span className="size-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="size-2 bg-primary rounded-full animate-bounce [animation-delay:100ms]" />
            <span className="size-2 bg-primary rounded-full animate-bounce [animation-delay:200ms]" />
          </div>
        )}

        {/* Thinking Indicator */}
        {isThinking && !isSpeaking && (
          <div className="absolute -top-4 -right-2">
            <div className="relative">
              <div className="size-6 rounded-full bg-white shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-lg">💭</span>
              </div>
              <div className="absolute -bottom-2 -left-1 size-3 rounded-full bg-white shadow-md animate-bounce [animation-delay:100ms]" />
              <div className="absolute -bottom-4 -left-2 size-2 rounded-full bg-white shadow animate-bounce [animation-delay:200ms]" />
            </div>
          </div>
        )}

        {/* Click hint on hover */}
        <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl drop-shadow-lg">
            {isSpeaking ? 'stop_circle' : 'play_circle'}
          </span>
        </div>
      </button>

      {/* Status Text */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span
          className={cn(
            'text-xs font-medium px-3 py-1 rounded-full transition-all',
            isSpeaking
              ? 'bg-primary/20 text-primary'
              : isThinking
              ? 'bg-yellow-500/20 text-yellow-600'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
          )}
        >
          {isSpeaking ? 'Speaking...' : isThinking ? 'Thinking...' : 'Ready to help'}
        </span>
      </div>
    </div>
  )
}

// Separate component for avatar with speech bubble
interface AvatarWithBubbleProps extends SpeakingAvatarProps {
  message?: string
  showBubble?: boolean
}

export function AvatarWithBubble({
  message,
  showBubble = true,
  ...avatarProps
}: AvatarWithBubbleProps) {
  return (
    <div className="flex items-start gap-4">
      <SpeakingAvatar {...avatarProps} text={message} />
      {showBubble && message && (
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl rounded-bl-none p-4 shadow-lg border border-gray-200 dark:border-gray-700 max-w-md animate-fade-in">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {message}
          </p>
          {/* Speech bubble pointer */}
          <div className="absolute -left-2 bottom-4 w-4 h-4 bg-white dark:bg-gray-800 border-l border-b border-gray-200 dark:border-gray-700 transform rotate-45" />
        </div>
      )}
    </div>
  )
}
