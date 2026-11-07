'use client'

import { useRef, useState } from 'react'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { useToast } from '@/components/shared/toast'
import { updateProfile, uploadAvatar } from '@/lib/api'
import { cn } from '@/lib/utils'
import type { User } from '@/types'

const MAX_SIZE = 5 * 1024 * 1024
const ACCEPTED = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

interface AvatarEditorProps {
  size?: 'md' | 'lg'
  /** Called with the updated user after a successful change */
  onUpdated?: (user: User) => void
  className?: string
}

export function UserAvatar({ user, className }: { user: Pick<User, 'avatar' | 'username' | 'firstName'>; className?: string }) {
  const initial = (user.firstName || user.username || '?')[0].toUpperCase()
  return (
    <div className={cn('rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden', className)}>
      {user.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary text-white text-3xl font-bold">
          {initial}
        </div>
      )}
    </div>
  )
}

/** Avatar with upload and "random avatar" actions. Updates the auth store itself. */
export function AvatarEditor({ size = 'md', onUpdated, className }: AvatarEditorProps) {
  const user = useAuthStore((s) => s.user)
  const token = useAuthStore((s) => s.token)
  const updateUser = useAuthStore((s) => s.updateUser)
  const t = useLanguageStore((s) => s.t)
  const { addToast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isBusy, setIsBusy] = useState(false)

  if (!user) return null

  const apply = (updated: User) => {
    updateUser(updated)
    onUpdated?.(updated)
    addToast({ type: 'success', message: t.settings.avatarUpdated })
  }

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = '' // allow re-selecting the same file
    if (!file || !token) return

    if (!ACCEPTED.includes(file.type)) {
      addToast({ type: 'error', message: t.settings.invalidImage })
      return
    }
    if (file.size > MAX_SIZE) {
      addToast({ type: 'error', message: t.settings.imageTooLarge })
      return
    }

    setIsBusy(true)
    try {
      const formData = new FormData()
      formData.append('avatar', file)
      const { user: updated } = await uploadAvatar(formData, token)
      apply(updated)
    } catch {
      addToast({ type: 'error', message: t.settings.uploadFailed })
    } finally {
      setIsBusy(false)
    }
  }

  const handleRandom = async () => {
    if (!token) return
    setIsBusy(true)
    try {
      const seed = Math.random().toString(36).slice(2, 10)
      apply(await updateProfile({ avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}` }, token))
    } catch {
      addToast({ type: 'error', message: t.settings.saveFailed })
    } finally {
      setIsBusy(false)
    }
  }

  return (
    <div className={cn('flex items-center gap-5', className)}>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={isBusy}
        className={cn(
          'relative shrink-0 rounded-full group focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40',
          size === 'lg' ? 'size-24' : 'size-20'
        )}
        aria-label={t.profile.changePhoto}
        title={t.profile.changePhoto}
      >
        <UserAvatar user={user} className="w-full h-full border-2 border-primary" />
        <span className="absolute inset-0 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">photo_camera</span>
        </span>
        {isBusy && (
          <span className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center">
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </span>
        )}
      </button>
      <input ref={fileInputRef} type="file" className="hidden" accept={ACCEPTED.join(',')} onChange={handleFile} />
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isBusy}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
        >
          {t.settings.uploadPhoto}
        </button>
        <button
          type="button"
          onClick={handleRandom}
          disabled={isBusy}
          className="text-xs text-primary hover:underline font-medium disabled:opacity-50"
        >
          {t.settings.randomAvatar}
        </button>
      </div>
    </div>
  )
}
