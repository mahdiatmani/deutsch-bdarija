import { create } from 'zustand'
import { persist, createJSONStorage, type StateStorage } from 'zustand/middleware'
import type { User, LoginData, SignupData } from '@/types'
import {
  ApiError,
  login as apiLogin,
  signup as apiSignup,
  fetchCurrentUser,
  setUnauthorizedHandler,
} from '@/lib/api'
import { queryClient } from '@/lib/query-client'
import { useLanguageStore } from '@/store/language-store'
import { clearOfflineData } from '@/components/shared/pwa'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  errorCode: string | null

  // Actions
  login: (data: LoginData, rememberMe?: boolean) => Promise<boolean>
  signup: (data: SignupData) => Promise<boolean>
  logout: () => void
  checkAuth: () => Promise<void>
  clearError: () => void
  updateUser: (user: Partial<User>) => void
  /** Swap in a new token for this session (e.g. after a password change) */
  setToken: (token: string) => void
}

const REMEMBER_KEY = 'auth-remember'
const STORAGE_NAME = 'auth-storage'
const THIRTY_DAYS = 30 * 24 * 60 * 60

const isBrowser = () => typeof window !== 'undefined'
const shouldRemember = () => !isBrowser() || localStorage.getItem(REMEMBER_KEY) !== 'false'

/**
 * "Remember me" keeps the session in localStorage (survives browser restarts);
 * otherwise it lives in sessionStorage and ends when the browser closes.
 */
const authStorage: StateStorage = {
  getItem: (name) => (isBrowser() ? localStorage.getItem(name) ?? sessionStorage.getItem(name) : null),
  setItem: (name, value) => {
    if (!isBrowser()) return
    const [keep, drop] = shouldRemember() ? [localStorage, sessionStorage] : [sessionStorage, localStorage]
    keep.setItem(name, value)
    drop.removeItem(name)
  },
  removeItem: (name) => {
    if (!isBrowser()) return
    localStorage.removeItem(name)
    sessionStorage.removeItem(name)
  },
}

// Read by middleware.ts to guard routes server-side
const setAuthCookie = (token: string | null) => {
  if (!isBrowser()) return
  if (!token) {
    document.cookie = 'auth-token=; path=/; max-age=0; SameSite=Lax'
    return
  }
  const maxAge = shouldRemember() ? `; max-age=${THIRTY_DAYS}` : ''
  document.cookie = `auth-token=${token}; path=/${maxAge}; SameSite=Lax`
}

const syncLanguage = (user: User) => {
  if (user.appLanguage) useLanguageStore.getState().setLanguage(user.appLanguage)
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      errorCode: null,

      updateUser: (userData) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }))
      },

      login: async (data, rememberMe = true) => {
        set({ isLoading: true, error: null, errorCode: null })
        try {
          if (isBrowser()) localStorage.setItem(REMEMBER_KEY, String(rememberMe))
          const response = await apiLogin({ ...data, rememberMe })
          queryClient.clear()
          setAuthCookie(response.token)
          set({ user: response.user, token: response.token, isAuthenticated: true, isLoading: false })
          syncLanguage(response.user)
          return true
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            errorCode: error instanceof ApiError ? error.code : null,
            isLoading: false,
          })
          return false
        }
      },

      signup: async (data) => {
        set({ isLoading: true, error: null, errorCode: null })
        try {
          if (isBrowser()) localStorage.setItem(REMEMBER_KEY, 'true')
          const response = await apiSignup(data)
          queryClient.clear()
          setAuthCookie(response.token)
          set({ user: response.user, token: response.token, isAuthenticated: true, isLoading: false })
          syncLanguage(response.user)
          return true
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Signup failed',
            errorCode: error instanceof ApiError ? error.code : null,
            isLoading: false,
          })
          return false
        }
      },

      logout: () => {
        setAuthCookie(null)
        clearOfflineData()
        queryClient.clear()
        set({ user: null, token: null, isAuthenticated: false, isLoading: false, error: null, errorCode: null })
      },

      // Refresh the user from the server (XP, streak, daily goal, ...)
      checkAuth: async () => {
        const { token } = get()
        if (!token) {
          set({ isAuthenticated: false, isLoading: false })
          return
        }

        try {
          const { user } = await fetchCurrentUser(token)
          setAuthCookie(token)
          set({ user, isAuthenticated: true })
          syncLanguage(user)
        } catch (error) {
          // Only a rejected token ends the session; stay logged in through network hiccups
          if (error instanceof ApiError && (error.status === 401 || error.status === 404)) {
            get().logout()
          }
        }
      },

      clearError: () => set({ error: null, errorCode: null }),

      setToken: (token) => {
        setAuthCookie(token)
        set({ token })
      },
    }),
    {
      name: STORAGE_NAME,
      storage: createJSONStorage(() => authStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

setUnauthorizedHandler(() => {
  if (useAuthStore.getState().isAuthenticated) useAuthStore.getState().logout()
})
