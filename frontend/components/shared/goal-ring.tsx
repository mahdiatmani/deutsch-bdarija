'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GoalRingProps {
  value: number
  max: number
  size?: number
  stroke?: number
  className?: string
  trackClassName?: string
  children?: React.ReactNode
}

/** Circular progress ring; turns saffron once the goal is reached. */
export function GoalRing({ value, max, size = 56, stroke = 5, className, trackClassName, children }: GoalRingProps) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const pct = max > 0 ? Math.min(1, value / max) : 0
  const done = pct >= 1

  return (
    <div className={cn('relative shrink-0', className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className={cn('stroke-gray-200 dark:stroke-gray-800', trackClassName)}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference * (1 - pct) }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={done ? 'stroke-saffron' : 'stroke-primary'}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}
