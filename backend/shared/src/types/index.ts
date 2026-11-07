export * from './user'
export * from './course'
export * from './progress'
export * from './gamification'
export * from './ai'

export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  metadata?: {
    page?: number
    limit?: number
    total?: number
    hasMore?: boolean
  }
}

export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface FilterParams {
  search?: string
  level?: string
  isCompleted?: boolean
  dateFrom?: Date
  dateTo?: Date
}
