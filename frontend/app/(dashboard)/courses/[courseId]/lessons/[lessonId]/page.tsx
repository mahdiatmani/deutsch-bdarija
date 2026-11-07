'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { ApiError, fetchLessonById, fetchCourseById, fetchLessons } from '@/lib/api'
import { useAuthStore } from '@/store/auth-store'
import { useLanguageStore } from '@/store/language-store'
import { LessonPlayer } from '@/components/lesson/lesson-player'
import { toLessonContent } from '@/components/lesson/legacy-content'
import type { Lesson } from '@/types'

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string }
}) {
  const { courseId, lessonId } = params
  const token = useAuthStore((s) => s.token)
  const t = useLanguageStore((s) => s.t)

  const { data: lesson, isLoading: isLoadingLesson, error: lessonError } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: () => fetchLessonById(lessonId, token!),
    enabled: !!token,
    retry: (count, error) => !(error instanceof ApiError && error.status < 500) && count < 1,
  })

  const { data: course, isLoading: isLoadingCourse } = useQuery({
    queryKey: ['course', courseId],
    queryFn: () => fetchCourseById(courseId, token),
  })

  const { data: courseLessons, isLoading: isLoadingLessons } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: () => fetchLessons(courseId, token),
  })

  if (isLoadingLesson || isLoadingCourse || isLoadingLessons) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (lessonError instanceof ApiError && lessonError.code === 'LESSON_LOCKED') {
    return (
      <div className="mx-auto max-w-2xl py-16 text-center">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <span className="material-symbols-outlined text-4xl text-gray-400">lock</span>
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{t.lesson.locked}</p>
        <Link
          href={`/courses/${courseId}`}
          className="inline-block rounded-xl bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
        >
          {t.lesson.backToCourse}
        </Link>
      </div>
    )
  }

  if (!lesson || !course) {
    notFound()
  }

  const currentIndex = courseLessons?.findIndex((l: Lesson) => l.id === lessonId) ?? -1
  const nextLesson =
    currentIndex !== -1 && courseLessons && currentIndex < courseLessons.length - 1 ? courseLessons[currentIndex + 1] : undefined

  return (
    <LessonPlayer
      key={lessonId}
      lessonId={lessonId}
      lessonTitle={lesson.title}
      courseId={courseId}
      level={course.level}
      content={toLessonContent(lesson.content)}
      nextLessonId={nextLesson?.id}
      t={t}
    />
  )
}
