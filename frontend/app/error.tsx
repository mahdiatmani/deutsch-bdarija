'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4">
      <div className="flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 p-3">
        <span className="material-symbols-outlined text-4xl text-red-600 dark:text-red-400">
          error
        </span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Something went wrong!
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        {error.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary-dark transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
