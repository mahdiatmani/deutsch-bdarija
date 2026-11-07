import en from './en'
import type { TranslationsType } from './en'

export type { TranslationsType }
export type Language = 'en' | 'fr' | 'darija'

export async function loadTranslations(lang: Language): Promise<TranslationsType> {
  switch (lang) {
    case 'fr':
      return (await import('./fr')).default
    case 'darija':
      return (await import('./darija')).default
    case 'en':
    default:
      return en
  }
}

// Backward compatibility: sync access to all translations for the language store's initial state
export const translations = {
  en,
  // fr and darija are loaded dynamically via loadTranslations()
  // But we need sync access for initial hydration, so we alias en as fallback
  get fr() { return en },
  get darija() { return en },
} as Record<Language, TranslationsType>

export default en
