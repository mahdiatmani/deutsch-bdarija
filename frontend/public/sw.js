/*
 * Deutsch B'Darija service worker: makes the app installable and keeps
 * what a learner already opened (pages, lessons, audio) working offline.
 *
 *   /_next/static (hashed files) ....... cache first, they never change
 *   pages ................................ network first, cached copy offline
 *   API GET (lessons, courses, today) ..... network first, cached copy offline
 *   Google fonts (icons) .................. cache, refreshed in the background
 *   offline page, logo .................... precached
 *
 * Lesson audio is not handled here: hooks/use-german-speech.ts keeps every clip
 * in its own cache (lesson-audio-v*), which this worker must leave alone.
 *
 * Bump VERSION to drop the page and data caches on the next deploy.
 * The page and API caches belong to the signed-in learner and are cleared on logout.
 */
const VERSION = 'v2'
const SHELL = `shell-${VERSION}`
const STATIC = 'static'
const PAGES = `pages-${VERSION}`
const DATA = `data-${VERSION}`
const FONTS = 'fonts'
const KEEP = [SHELL, STATIC, PAGES, DATA, FONTS]
/** Caches this worker made (now or in earlier versions); only these are ever cleaned up */
const isOwnCache = (key) => /^(shell|pages|data)-v\d+$/.test(key) || ['static', 'fonts', 'audio'].includes(key)

const OFFLINE_URL = '/offline.html'
const SHELL_FILES = [OFFLINE_URL, '/favicon.svg', '/icons/icon-192.png']
const MAX_ENTRIES = { [STATIC]: 400, [PAGES]: 60, [DATA]: 300, [FONTS]: 30 }

// The API lives on its own origin, passed in when the page registers this worker
const API_URL = new URL(location.href).searchParams.get('api') || ''
const api = API_URL ? new URL(API_URL) : null

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((cache) => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => isOwnCache(key) && !KEEP.includes(key)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('message', (event) => {
  if (event.data?.type === 'logout') {
    event.waitUntil(Promise.all([caches.delete(PAGES), caches.delete(DATA)]))
  }
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  const isApi = api && url.origin === api.origin && url.pathname.startsWith(api.pathname)

  if (request.method !== 'GET') return

  if (isApi) {
    // Never keep auth answers; everything else is the learner's own content
    if (url.pathname.includes('/auth/')) return
    event.respondWith(networkFirst(request, DATA))
    return
  }

  if (url.origin === location.origin) {
    if (SHELL_FILES.includes(url.pathname)) {
      event.respondWith(cacheFirst(request, SHELL))
      return
    }
    if (url.pathname.startsWith('/_next/static/')) {
      event.respondWith(cacheFirst(request, STATIC))
      return
    }
    if (request.mode === 'navigate') {
      event.respondWith(page(request))
      return
    }
    // Next.js data requests for client-side navigation vary per build; let them go to the network
    return
  }

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(request, FONTS))
  }
})

// ── Strategies ──────────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request)
  if (cached) return cached
  const response = await fetch(request)
  if (response.ok) put(cacheName, request, response.clone())
  return response
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request)
    if (response.ok) put(cacheName, request, response.clone())
    return response
  } catch (error) {
    const cached = await caches.match(request, { cacheName })
    if (cached) return cached
    throw error
  }
}

async function page(request) {
  try {
    const response = await fetch(request)
    // A redirect (e.g. to /login) can't be replayed for a navigation, so don't keep it
    if (response.ok && !response.redirected) put(PAGES, request, response.clone())
    return response
  } catch {
    return (
      (await caches.match(request, { cacheName: PAGES, ignoreSearch: true })) ||
      (await caches.match(OFFLINE_URL, { cacheName: SHELL })) ||
      Response.error()
    )
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request, { cacheName })
  const refresh = fetch(request)
    .then((response) => {
      // Stylesheets from <link> are opaque (status 0): fine to keep for the icons font
      if (response.ok || response.type === 'opaque') put(cacheName, request, response.clone())
      return response
    })
    .catch(() => cached)
  return cached || refresh
}

// ── Cache helpers ───────────────────────────────────────────────────

async function put(cacheName, request, response) {
  try {
    const cache = await caches.open(cacheName)
    await cache.put(request, response)
    await trim(cache, MAX_ENTRIES[cacheName])
  } catch {
    // Storage full or the response can't be stored: the app works without it
  }
}

/** Keep a cache under `max` entries by dropping the oldest ones */
async function trim(cache, max) {
  if (!max) return
  const keys = await cache.keys()
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i])
}
