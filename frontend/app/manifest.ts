import type { MetadataRoute } from 'next'

/** Web app manifest: lets learners install Deutsch B'Darija on their phone */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: "Deutsch B'Darija",
    short_name: "B'Darija",
    description: 'T3allem l-almaniya b d-darija: lessons, review games and an AI teacher.',
    lang: 'ary',
    dir: 'ltr',
    start_url: '/today',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#0D1015',
    theme_color: '#0D1015',
    categories: ['education'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Today', url: '/today', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'Review words', url: '/games/review', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'AI teacher', url: '/ai-teacher', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
    ],
  }
}
