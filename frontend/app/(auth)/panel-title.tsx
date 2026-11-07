'use client'

import { useLanguageStore } from '@/store/language-store'

export function AuthPanelTitle() {
  const t = useLanguageStore((s) => s.t)
  return (
    <h2 className="font-display text-5xl leading-[1.05] font-medium text-gray-50 text-balance">
      {t.auth.panelLead} <span className="de text-saffron">{t.auth.panelEm}</span> {t.auth.panelTail}
    </h2>
  )
}
