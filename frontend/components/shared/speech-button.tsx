'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpeechButtonProps {
  onResult: (transcript: string) => void
  className?: string
  disabled?: boolean
  language?: 'ar-MA' | 'de-DE' | 'en-US'
}

export function SpeechButton({ onResult, className, disabled, language = 'de-DE' }: SpeechButtonProps) {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = language

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      onResult(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition
  }, [language, onResult])

  const toggleListening = () => {
    if (!recognitionRef.current) return

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <button
      type="button"
      onClick={toggleListening}
      disabled={disabled}
      className={cn(
        'relative size-12 rounded-xl flex items-center justify-center transition-all',
        isListening
          ? 'bg-red-500 text-white animate-pulse'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      title={isListening ? 'Stop recording' : 'Start voice input'}
    >
      <span className="material-symbols-outlined">
        {isListening ? 'stop' : 'mic'}
      </span>
      {isListening && (
        <span className="absolute -top-1 -right-1 size-3 bg-red-500 rounded-full animate-ping" />
      )}
    </button>
  )
}

interface TextToSpeechButtonProps {
  text: string
  language?: 'de-DE' | 'ar' | 'en-US'
  className?: string
}

export function TextToSpeechButton({ text, language = 'de-DE', className }: TextToSpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)

  const speak = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language
    utterance.rate = 0.9

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return (
    <button
      type="button"
      onClick={isSpeaking ? stop : speak}
      className={cn(
        'p-2 rounded-lg transition-colors',
        isSpeaking
          ? 'bg-primary text-white'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500',
        className
      )}
      title={isSpeaking ? 'Stop speaking' : 'Listen to pronunciation'}
    >
      <span className="material-symbols-outlined text-lg">
        {isSpeaking ? 'stop' : 'volume_up'}
      </span>
    </button>
  )
}
