import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import en from '@/lib/translations/en'
import darija from '@/lib/translations/darija'
import { loadTranslations } from '@/lib/translations/index'
import type { Language, TranslationsType } from '@/lib/translations/index'

/** Darija is the app's default language; English and French are opt-in. */
export const DEFAULT_LANGUAGE: Language = 'darija'

interface LanguageState {
  language: Language
  t: TranslationsType
  setLanguage: (lang: Language) => void
  detectLanguage: () => void
  isInitialized: boolean
}

// Darija and English are bundled so the first paint is never in the wrong
// language; French is loaded on demand.
const syncTranslations: Partial<Record<Language, TranslationsType>> = { en, darija }

// Valid BCP 47 tags for <html lang> ("ary" = Moroccan Arabic / Darija)
const HTML_LANG: Record<Language, string> = { en: 'en', fr: 'fr', darija: 'ary' }

const applyTranslations = (lang: Language, set: (partial: Partial<LanguageState>) => void) => {
  if (typeof document !== 'undefined') document.documentElement.lang = HTML_LANG[lang]
  const bundled = syncTranslations[lang]
  if (bundled) {
    set({ t: bundled })
  } else {
    loadTranslations(lang).then((translations) => set({ t: translations }))
  }
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: DEFAULT_LANGUAGE,
      t: darija,
      isInitialized: false,

      setLanguage: (lang: Language) => {
        set({ language: lang })
        applyTranslations(lang, set)
      },

      // First visit (nothing stored yet): start in Darija
      detectLanguage: () => {
        set({ language: DEFAULT_LANGUAGE, t: darija, isInitialized: true })
      },
    }),
    {
      name: 'language-storage',
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true
          applyTranslations(state.language, (partial) => useLanguageStore.setState(partial))
        }
      },
    }
  )
)
