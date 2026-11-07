import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4">
      <div className="flex items-center justify-center rounded-full bg-primary/10 p-3">
        <span className="material-symbols-outlined text-6xl text-primary">
          search_off
        </span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">404</h2>
      <p className="text-center text-xl text-gray-500 dark:text-gray-400">
        Page not found
      </p>
      <p className="text-center text-gray-500 dark:text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary-dark transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}
