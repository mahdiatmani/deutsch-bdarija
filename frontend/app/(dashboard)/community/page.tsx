'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { useToast } from '@/components/shared/toast'
import { fetchChatRooms, fetchRoomMessages } from '@/lib/api'
import type { Socket } from 'socket.io-client'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/shared/skeleton'

interface ChatRoom {
  id: string
  name: string
  description: string
  icon?: string
  memberCount?: number
}

interface RoomMessage {
  id: string
  content: string
  timestamp: string
  sender: {
    id: string
    username: string
    name: string
    avatar: string | null
  }
}

interface OnlineUser {
  id: string
  username: string
  avatar: string | null
}

interface TypingUser {
  id: string
  username: string
}

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:4000'

const roomIcons: Record<string, string> = {
  'general': 'forum',
  'help': 'help',
  'german': 'translate',
  'off-topic': 'chat_bubble',
}

export default function CommunityPage() {
  const { user, token } = useAuthStore()
  const t = useLanguageStore((s) => s.t)
  const { addToast } = useToast()
  const queryClient = useQueryClient()
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const [socket, setSocket] = useState<Socket | null>(null)
  const [realtimeMessages, setRealtimeMessages] = useState<RoomMessage[]>([])
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([])
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [showMobileRooms, setShowMobileRooms] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Fetch Rooms
  const { data: rooms, isLoading: isLoadingRooms } = useQuery({
    queryKey: ['chat', 'rooms'],
    queryFn: () => fetchChatRooms(token!),
    enabled: !!token,
  })

  // Fetch Messages for Selected Room
  const { data: historicalMessages, isLoading: isLoadingMessages } = useQuery({
    queryKey: ['chat', 'messages', selectedRoomId],
    queryFn: () => fetchRoomMessages(selectedRoomId!, token!),
    enabled: !!token && !!selectedRoomId,
    staleTime: 0, // always refetch when (re)entering a room
  })

  // Initialize Socket
  useEffect(() => {
    if (!token || !user) return

    let newSocket: Socket
    import('socket.io-client').then(({ io }) => {
    newSocket = io(SOCKET_URL, {
      auth: { token },
      transports: ['websocket', 'polling'],
    })

    newSocket.on('connect', () => {
      setIsConnected(true)
    })

    newSocket.on('error_message', (data: { code: string }) => {
      if (data?.code === 'RATE_LIMIT_EXCEEDED') addToast({ type: 'warning', message: t.community.sendingTooFast })
    })

    newSocket.on('disconnect', () => {
      setIsConnected(false)
    })

    newSocket.on('online_users', (users: OnlineUser[]) => {
      setOnlineUsers(users)
    })

    newSocket.on('user_joined', (userData: OnlineUser) => {
      setOnlineUsers((prev) => {
        if (prev.some((u) => u.id === userData.id)) return prev
        return [...prev, userData]
      })
    })

    newSocket.on('user_left', (userId: string) => {
      setOnlineUsers((prev) => prev.filter((u) => u.id !== userId))
    })

    setSocket(newSocket)
    }) // end dynamic import .then()

    return () => {
      if (newSocket) newSocket.disconnect()
    }
    // Reconnect only when the session changes, not on every user update (XP, avatar...)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, user?.id])

  // Join Room & Listen for Messages
  useEffect(() => {
    if (!socket || !selectedRoomId) return

    socket.emit('join_room', selectedRoomId)
    setRealtimeMessages([])
    setTypingUsers([])

    const handleMessage = (message: RoomMessage) => {
      setRealtimeMessages((prev) => [...prev, message])
      // Remove sender from typing
      setTypingUsers((prev) => prev.filter((u) => u.id !== message.sender.id))
    }

    const handleTyping = (data: { userId: string; username: string; roomId: string }) => {
      if (data.roomId !== selectedRoomId || data.userId === user?.id) return
      setTypingUsers((prev) => {
        if (prev.some((u) => u.id === data.userId)) return prev
        return [...prev, { id: data.userId, username: data.username }]
      })

      // Auto-remove after 3 seconds
      setTimeout(() => {
        setTypingUsers((prev) => prev.filter((u) => u.id !== data.userId))
      }, 3000)
    }

    const handleStopTyping = (data: { userId: string; roomId: string }) => {
      if (data.roomId !== selectedRoomId) return
      setTypingUsers((prev) => prev.filter((u) => u.id !== data.userId))
    }

    socket.on('receive_message', handleMessage)
    socket.on('user_typing', handleTyping)
    socket.on('user_stop_typing', handleStopTyping)

    return () => {
      socket.emit('leave_room', selectedRoomId)
      socket.off('receive_message', handleMessage)
      socket.off('user_typing', handleTyping)
      socket.off('user_stop_typing', handleStopTyping)
    }
  }, [socket, selectedRoomId, user?.id])

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [historicalMessages, realtimeMessages])

  // Select first room by default
  useEffect(() => {
    if (rooms && rooms.length > 0 && !selectedRoomId) {
      setSelectedRoomId(rooms[0].id)
    }
  }, [rooms, selectedRoomId])

  // Handle typing indicator
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)

    if (!socket || !selectedRoomId || !user) return

    // Emit typing event
    socket.emit('typing', {
      roomId: selectedRoomId,
      userId: user.id,
      username: user.username,
    })

    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set timeout to stop typing
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit('stop_typing', {
        roomId: selectedRoomId,
        userId: user.id,
      })
    }, 2000)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !socket || !selectedRoomId || !user) return

    const messageData = {
      roomId: selectedRoomId,
      userId: user.id,
      content: input.trim(),
    }

    socket.emit('send_message', messageData)
    socket.emit('stop_typing', { roomId: selectedRoomId, userId: user.id })
    setInput('')
    inputRef.current?.focus()
  }

  // Combine messages
  // A message can be in both lists after the history refetches; keep the first copy
  const seen = new Set<string>()
  const allMessages = [...(historicalMessages || []), ...realtimeMessages].filter((m: RoomMessage) => {
    if (seen.has(m.id)) return false
    seen.add(m.id)
    return true
  })

  const selectedRoom = rooms?.find((r: ChatRoom) => r.id === selectedRoomId)

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) return t.common.today
    if (date.toDateString() === yesterday.toDateString()) return t.common.yesterday
    return date.toLocaleDateString()
  }

  // Group messages by date
  const groupedMessages: { date: string; messages: RoomMessage[] }[] = []
  let currentDate = ''
  allMessages.forEach((msg) => {
    const msgDate = formatDate(msg.timestamp)
    if (msgDate !== currentDate) {
      currentDate = msgDate
      groupedMessages.push({ date: msgDate, messages: [msg] })
    } else {
      groupedMessages[groupedMessages.length - 1].messages.push(msg)
    }
  })

  if (isLoadingRooms) {
    return (
      <div className="flex h-[calc(100vh-6rem)] paper overflow-hidden shadow-xl">
        <div className="w-64 border-r border-gray-200 dark:border-gray-800 p-4 space-y-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-16 rounded-xl" />
          ))}
        </div>
        <div className="flex-1 p-4">
          <Skeleton className="h-16 rounded-xl mb-4" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="size-8 rounded-full" />
                <Skeleton className="h-16 flex-1 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-[calc(100vh-6rem)] paper overflow-hidden shadow-xl">
      {/* Mobile Room Toggle */}
      <button
        onClick={() => setShowMobileRooms(!showMobileRooms)}
        className="lg:hidden fixed bottom-24 left-4 z-50 size-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center"
      >
        <span className="material-symbols-outlined">
          {showMobileRooms ? 'close' : 'menu'}
        </span>
      </button>

      {/* Sidebar - Rooms List */}
      <div className={cn(
        'w-72 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex flex-col',
        'fixed lg:static inset-y-0 left-0 z-40 lg:z-0 transform transition-transform duration-300',
        showMobileRooms ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white">{t.community.title}</h2>
            <div className={cn(
              'flex items-center gap-1.5 px-2 py-1 rounded-full text-xs',
              isConnected ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700'
            )}>
              <span className={cn('size-2 rounded-full', isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500')} />
              {isConnected ? t.community.connected : t.community.offline}
            </div>
          </div>

          {/* Online Users */}
          {onlineUsers.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {onlineUsers.slice(0, 5).map((onlineUser) => (
                  <div
                    key={onlineUser.id}
                    className="size-7 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gray-200"
                    title={onlineUser.username}
                  >
                    {onlineUser.avatar ? (
                      <img src={onlineUser.avatar} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary text-white text-xs font-bold">
                        {onlineUser.username[0].toUpperCase()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {onlineUsers.length} {t.common.online}
              </span>
            </div>
          )}
        </div>

        {/* Rooms */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <p className="text-xs font-medium text-gray-400 uppercase px-3 py-2">{t.community.chatRooms}</p>
          {rooms?.map((room: ChatRoom) => (
            <button
              key={room.id}
              onClick={() => {
                setSelectedRoomId(room.id)
                setShowMobileRooms(false)
              }}
              className={cn(
                'w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3',
                selectedRoomId === room.id
                  ? 'bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <div className={cn(
                'size-10 rounded-lg flex items-center justify-center',
                selectedRoomId === room.id ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              )}>
                <span className="material-symbols-outlined text-lg">
                  {roomIcons[room.name.toLowerCase()] || 'tag'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  'font-medium text-sm truncate',
                  selectedRoomId === room.id ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
                )}>
                  {room.name}
                </p>
                <p className="text-xs text-gray-400 truncate">{room.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Current User */}
        {user && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="size-10 rounded-full overflow-hidden bg-gray-200">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary text-white font-bold">
                      {user.username[0].toUpperCase()}
                    </div>
                  )}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {[user.firstName, user.lastName].filter(Boolean).join(' ') || user.username}
                </p>
                <p className="text-xs text-gray-500 truncate">@{user.username}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Room Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-surface-light dark:bg-surface-dark">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                {selectedRoom ? roomIcons[selectedRoom.name.toLowerCase()] || 'tag' : 'forum'}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                {selectedRoom?.name || t.community.selectRoom}
              </h3>
              <p className="text-xs text-gray-500">
                {selectedRoom?.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">group</span>
              {onlineUsers.length} {t.common.online}
            </div>
            <div className="flex items-center gap-2 text-xs text-green-600 bg-green-100 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              Live
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 bg-background-light/50 dark:bg-background-dark/50">
          {isLoadingMessages ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="size-8 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-16 w-full rounded-xl" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {groupedMessages.map((group, groupIdx) => (
                <div key={groupIdx}>
                  {/* Date Separator */}
                  <div className="flex items-center gap-4 my-4">
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                    <span className="text-xs text-gray-400 font-medium">{group.date}</span>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                  </div>

                  {/* Messages */}
                  <div className="space-y-4">
                    {group.messages.map((msg, idx) => {
                      const isMe = msg.sender.id === user?.id
                      const showAvatar = idx === 0 || group.messages[idx - 1].sender.id !== msg.sender.id

                      return (
                        <div
                          key={`${msg.id}-${idx}`}
                          className={cn(
                            'flex gap-3 max-w-[85%] animate-fade-in',
                            isMe ? 'ml-auto flex-row-reverse' : ''
                          )}
                        >
                          <div className="flex-shrink-0 w-8">
                            {showAvatar && (
                              <div className="size-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm">
                                {msg.sender.avatar ? (
                                  <img src={msg.sender.avatar} alt={msg.sender.username} className="w-full h-full object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-primary text-white text-xs font-bold">
                                    {msg.sender.username[0].toUpperCase()}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            {showAvatar && (
                              <div className={cn('flex items-baseline gap-2 mb-1', isMe ? 'flex-row-reverse' : '')}>
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                                  {isMe ? 'You' : msg.sender.name}
                                </span>
                                <span className="text-[10px] text-gray-400">
                                  {formatTime(msg.timestamp)}
                                </span>
                              </div>
                            )}
                            <div
                              className={cn(
                                'px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm',
                                isMe
                                  ? 'bg-primary text-white rounded-tr-sm'
                                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-tl-sm'
                              )}
                            >
                              {msg.content}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {typingUsers.length > 0 && (
                <div className="flex items-center gap-3 text-sm text-gray-500 animate-fade-in">
                  <div className="flex gap-1">
                    <span className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </div>
                  <span>
                    {typingUsers.map((u) => u.username).join(', ')} {typingUsers.length === 1 ? t.community.isTyping : t.community.areTyping}
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <button
              type="button"
              className="size-12 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder={t.community.typePlaceholder}
              maxLength={1000}
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              type="button"
              className="size-12 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined">mood</span>
            </button>
            <button
              type="submit"
              disabled={!input.trim()}
              className="size-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
