import Link from 'next/link'
import { Logo } from '@/components/shared/logo'
import { AuthPanelTitle } from './panel-title'

const FLASHCARDS = [
  { de: 'Guten Morgen', da: "Sba7 l'khir", rotate: '-rotate-6', offset: 'translate-x-0 translate-y-0' },
  { de: 'Wie geht’s?', da: 'Labas 3lik?', rotate: 'rotate-3', offset: 'translate-x-28 translate-y-20' },
  { de: 'Danke schön', da: 'Chokran bzaf', rotate: '-rotate-2', offset: 'translate-x-6 translate-y-40' },
]

/** Large eight-fold rosette built from rotated squares and rings. */
function Rosette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g transform="translate(200 200)" fill="none" strokeWidth="1.2">
        {[170, 130, 90, 50].map((r, i) => (
          <g key={r} className={i % 2 ? 'stroke-saffron/50' : 'stroke-primary-light/60'}>
            <rect x={-r / 1.414} y={-r / 1.414} width={r * 1.414} height={r * 1.414} />
            <rect x={-r / 1.414} y={-r / 1.414} width={r * 1.414} height={r * 1.414} transform="rotate(45)" />
            <circle r={r} strokeDasharray={i === 0 ? '2 6' : undefined} />
          </g>
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1="0" y1="-50" x2="0" y2="-170" transform={`rotate(${i * 22.5})`} className="stroke-white/10" />
        ))}
        <circle r="14" className="fill-saffron stroke-none" />
      </g>
    </svg>
  )
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Form side */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="p-6 lg:px-10">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">{children}</div>
        </main>

        <footer className="p-6 lg:px-10 text-center lg:text-left text-xs text-gray-500">
          © {new Date().getFullYear()} Deutsch B&apos;Darija
        </footer>
      </div>

      {/* Illustration side */}
      <aside className="hidden lg:flex lg:w-[46%] xl:w-1/2 relative overflow-hidden bg-ink text-gray-100 items-center justify-center">
        <Rosette className="absolute -right-24 -top-24 w-[640px] animate-spin-slow opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,107,74,0.45),transparent_60%)]" />

        <div className="relative w-full max-w-md px-10">
          <p className="eyebrow !text-saffron mb-4">Deutsch · Darija</p>
          <AuthPanelTitle />

          {/* Fanned flashcards */}
          <div className="relative mt-10 h-80">
            {FLASHCARDS.map((card, i) => (
              // Outer element positions/rotates; inner one animates (both use `transform`)
              <div key={card.de} className={`absolute left-4 ${card.rotate} ${card.offset}`}>
                <div
                  className="w-64 rounded-2xl border border-white/10 bg-white p-5 text-ink shadow-2xl animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Deutsch</p>
                  <p className="de text-2xl text-primary">{card.de}</p>
                  <div className="my-3 rule-dashed text-gray-300" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Darija</p>
                  <p className="font-semibold text-lg">{card.da}</p>
                </div>
              </div>
            ))}
          </div>

          <figure className="mt-6 border-l-2 border-saffron pl-4">
            <blockquote className="de text-lg text-gray-200">
              &ldquo;Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.&rdquo;
            </blockquote>
            <figcaption className="mt-1 text-xs text-gray-400">Ludwig Wittgenstein</figcaption>
          </figure>
        </div>
      </aside>
    </div>
  )
}
