import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Figtree } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import { Providers } from './providers'

// Display: contemporary grotesk with a bit of character
const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  axes: ['opsz', 'wdth'],
  display: 'swap',
})

// Body: friendly, highly legible sans (covers German umlauts and ß)
const figtree = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Deutsch B'Darija - Learn German in Moroccan Darija",
  description: 'AI-powered learning platform for teaching German to Moroccan students in Darija',
  applicationName: "Deutsch B'Darija",
  icons: {
    icon: '/favicon.svg',
    apple: '/icons/apple-touch-icon.png',
  },
  // Installed on iOS: full screen, with the app's own name under the icon
  appleWebApp: {
    capable: true,
    title: "B'Darija",
    statusBarStyle: 'black-translucent',
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F6F8' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0D11' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ary" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${bricolage.variable} ${figtree.variable} min-h-[100dvh] flex flex-col font-sans antialiased overflow-x-hidden`}
      >
        <NextTopLoader color="#00A36C" height={3} showSpinner={false} shadow="0 0 10px #00A36C" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
