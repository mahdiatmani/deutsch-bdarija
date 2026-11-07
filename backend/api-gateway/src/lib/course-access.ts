import prisma from './prisma';

/**
 * Units (courses) unlock in order inside a CEFR level: the first unit of every
 * level is open, each next one opens once all lessons of the previous unit are
 * completed. Learners who already know a level can start the next level directly.
 * A course with the static `isLocked` flag stays locked for everyone but admins.
 */
export async function getLockedCourseIds(userId: string | undefined, isAdmin: boolean): Promise<Set<string>> {
  const courses = await prisma.course.findMany({
    orderBy: { order: 'asc' },
    select: { id: true, level: true, isLocked: true, lessons: { select: { id: true } } },
  });
  if (isAdmin) return new Set();

  const completed = new Set(
    userId
      ? (
          await prisma.lessonProgress.findMany({
            where: { userId, status: 'completed' },
            select: { lessonId: true },
          })
        ).map(p => p.lessonId)
      : []
  );

  const locked = new Set<string>();
  courses.forEach((course, i) => {
    const previous = courses[i - 1];
    const previousDone =
      !previous ||
      previous.level !== course.level ||
      previous.lessons.every(l => completed.has(l.id));
    if (course.isLocked || !previousDone) locked.add(course.id);
  });
  return locked;
}

export const parseObjectives = (raw: string | null | undefined): string[] => {
  try {
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};
