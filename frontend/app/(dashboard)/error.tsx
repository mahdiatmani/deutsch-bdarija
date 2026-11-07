'use client'

import { useEffect } from 'react'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Dashboard error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
      <div className="flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 p-4">
        <span className="material-symbols-outlined text-5xl text-red-600 dark:text-red-400">
          error
        </span>
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-primary px-6 py-2.5 text-white font-medium hover:bg-primary-dark transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/courses'}
          className="rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-2.5 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          Go to Courses
        </button>
      </div>
    </div>
  )
}
