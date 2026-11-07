import type { Config } from 'tailwindcss'

/*
 * Design language: modern, high-contrast product UI.
 * Cool neutrals, vivid jade green (Morocco), electric yellow accent and coral
 * for errors. Headings in Bricolage Grotesque, body in Figtree.
 */

// Cool neutral scale. Overrides Tailwind's gray so every existing `gray-*`
// class across the app picks it up.
const sand = {
  50: '#F7F8FA',
  100: '#EFF1F4',
  200: '#E3E6EB',
  300: '#CDD2DA',
  400: '#9AA1AD',
  500: '#6B7280',
  600: '#4B5261',
  700: '#343A46',
  800: '#232833',
  900: '#161A21',
  950: '#0D1015',
}

// Brand-tuned versions of Tailwind's status colours, so legacy classes like
// bg-green-100 or text-red-600 across the app match the palette.
const jade = {
  50: '#E6F8F0', 100: '#C6EEDD', 200: '#93DFC0', 300: '#57CC9F', 400: '#1BC489',
  500: '#00A36C', 600: '#008B5C', 700: '#00714B', 800: '#08583C', 900: '#0B4130', 950: '#062A1F',
}
const coral = {
  50: '#FFEEEC', 100: '#FFD9D5', 200: '#FFB5AD', 300: '#FF8A7E', 400: '#FF6F61',
  500: '#FF5C4D', 600: '#E8402F', 700: '#C23023', 800: '#9B2920', 900: '#7D261F', 950: '#44100C',
}
const sun = {
  50: '#FFF8E1', 100: '#FFEDB5', 200: '#FFE083', 300: '#FFD66B', 400: '#FFC94A',
  500: '#FFC233', 600: '#E0A100', 700: '#B07B00', 800: '#8A5F06', 900: '#714E0B', 950: '#412B02',
}
const ember = {
  50: '#FFF3EC', 100: '#FFE2D1', 200: '#FFC4A3', 300: '#FF9F6E', 400: '#FF7F45',
  500: '#FF6A2B', 600: '#E8531A', 700: '#C03F13', 800: '#993416', 900: '#7C2E16', 950: '#431409',
}

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: sand,
        green: jade,
        emerald: jade,
        red: coral,
        yellow: sun,
        amber: sun,
        orange: ember,
        sand,
        ink: '#0D1015',
        primary: {
          DEFAULT: '#00A36C', // jade
          dark: '#008556',
          light: '#1BC489',
          50: '#E6F8F0',
          100: '#C6EEDD',
        },
        saffron: {
          DEFAULT: '#FFC233', // electric yellow
          light: '#FFD66B',
          dark: '#C98F00',
          50: '#FFF8E1',
        },
        clay: {
          DEFAULT: '#FF5C4D', // coral
          light: '#FF8A7E',
          dark: '#D93B2D',
          50: '#FFEEEC',
        },
        tile: '#3A6FF8', // electric blue
        secondary: {
          DEFAULT: '#FFC233',
          foreground: '#0D1015',
        },
        destructive: {
          DEFAULT: '#FF5C4D',
          foreground: '#ffffff',
        },
        background: {
          light: '#F5F6F8',
          dark: '#0B0D11',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#14171D',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.875rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        paper: '0 1px 2px rgba(13,16,21,0.04), 0 6px 20px -8px rgba(13,16,21,0.10)',
        lift: '0 2px 4px rgba(13,16,21,0.04), 0 20px 40px -16px rgba(13,16,21,0.28)',
        stamp: '0 10px 28px -10px rgba(13,16,21,0.45)',
        'stamp-sm': '0 6px 16px -6px rgba(13,16,21,0.35)',
        glow: '0 0 0 1px rgba(255,194,51,0.5), 0 10px 30px -10px rgba(255,194,51,0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'page-enter': 'page-enter 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        float: 'float 3s ease-in-out infinite',
        'stagger-in': 'stagger-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'spin-slow': 'spin 40s linear infinite',
        'draw-in': 'draw-in 1.2s cubic-bezier(0.65, 0, 0.35, 1) both',
        shake: 'shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        pop: 'pop 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'page-enter': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'stagger-in': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-in': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        shake: {
          '10%, 90%': { transform: 'translateX(-2px)' },
          '20%, 80%': { transform: 'translateX(4px)' },
          '30%, 50%, 70%': { transform: 'translateX(-7px)' },
          '40%, 60%': { transform: 'translateX(7px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
}

export default config
