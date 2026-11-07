# Deutsch B'Darija - Frontend

AI-powered learning platform for teaching German to Moroccan students in Darija.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + Shadcn/ui
- **State Management**: Zustand + React Query
- **Icons**: Material Symbols
- **Fonts**: Lexend

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── providers.tsx      # React Query provider
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   └── shared/            # Reusable components
├── store/                 # Zustand stores
│   ├── auth-store.ts
│   ├── user-store.ts
│   └── ui-store.ts
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities
├── types/                 # TypeScript types
└── data/                  # Mock data (temporary)
```

## Features Implemented

### ✅ Completed
- Next.js 14 with App Router
- TailwindCSS with custom design tokens
- Zustand state management
- React Query setup
- Root layout with theme provider
- Header with navigation and auth
- Footer with links
- Landing page (hero, lesson preview, features)
- Dark mode support
- Responsive design

### 🚧 In Progress
- Authentication pages (login/signup)
- Course catalog
- Lesson viewer
- AI Teacher chat interface
- Dashboard with sidebar
- Profile page with gamification
- Leaderboard

## Available Scripts

```bash
# Development
pnpm dev          # Start dev server

# Build
pnpm build        # Production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_MOCK_MODE=true
NEXT_PUBLIC_ENABLE_AI_TEACHER=true
```

## Design System

### Colors
- **Primary**: `#06a75f` (Green)
- **Background Light**: `#f5f8f7`
- **Background Dark**: `#10221a`
- **Surface Light**: `#ffffff`
- **Surface Dark**: `#1c2e26`

### Typography
- **Font Family**: Lexend
- **Icons**: Material Symbols Outlined

## Next Steps

1. Install dependencies: `pnpm install`
2. Run dev server: `pnpm dev`
3. Open http://localhost:3000
4. Start building remaining pages!

## Contributing

This is a private project. Contact the maintainers for contribution guidelines.
