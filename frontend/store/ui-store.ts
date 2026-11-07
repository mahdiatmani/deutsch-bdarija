import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  isSidebarOpen: boolean
  isMobileMenuOpen: boolean
  theme: 'light' | 'dark' | 'system'

  // Actions
  toggleSidebar: () => void
  closeSidebar: () => void
  openSidebar: () => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      // Only matters on phones (the sidebar is always shown on desktop): start with the page, not the menu
      isSidebarOpen: false,
      isMobileMenuOpen: false,
      theme: 'system',

      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

      closeSidebar: () => set({ isSidebarOpen: false }),

      openSidebar: () => set({ isSidebarOpen: true }),

      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

      closeMobileMenu: () => set({ isMobileMenuOpen: false }),

      setTheme: (theme) => {
        set({ theme })
      },
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
)
