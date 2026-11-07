import { PrismaClient } from '@prisma/client';
import { badges } from '../src/data/seed-data';
import { curriculum } from '../src/data/curriculum';
import { validateUnits } from '../src/data/curriculum/validate';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

/** Courses seeded before the A1–B2 curriculum existed */
const LEGACY_COURSE_IDS = [
  'a1-basics',
  'a1-everyday',
  'a2-grammar',
  'a2-conversations',
  'b1-professional',
  'b1-culture',
  'b2-advanced',
  'exam-prep',
];

async function main() {
  console.log('Seeding database...');

  // Seed the curriculum: one course per unit, A1 → B2
  const problems = validateUnits(curriculum);
  if (problems.length) {
    throw new Error(`Curriculum has ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  }

  const LEVEL_ORDER: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4 };
  for (const unit of curriculum) {
    const minutes = unit.lessons.reduce((sum, l) => sum + l.minutes, 0);
    const data = {
      title: unit.title,
      description: unit.description,
      level: unit.level,
      totalLessons: unit.lessons.length,
      estimatedHours: Math.max(1, Math.round(minutes / 60)),
      icon: unit.icon,
      color: unit.color,
      isPublished: true,
      isLocked: false,
      order: LEVEL_ORDER[unit.level] * 100 + unit.number,
      objectives: JSON.stringify(unit.objectives),
    };
    await prisma.course.upsert({ where: { id: unit.id }, update: data, create: { id: unit.id, ...data } });

    for (const [index, lesson] of unit.lessons.entries()) {
      const lessonData = {
        courseId: unit.id,
        title: lesson.title,
        description: lesson.description,
        type: lesson.content.kind,
        order: index + 1,
        duration: lesson.minutes,
        content: JSON.stringify(lesson.content),
      };
      await prisma.lesson.upsert({ where: { id: lesson.id }, update: lessonData, create: { id: lesson.id, ...lessonData } });
    }

    // Lessons that were removed from this unit
    const keep = unit.lessons.map(l => l.id);
    const stale = await prisma.lesson.findMany({ where: { courseId: unit.id, id: { notIn: keep } }, select: { id: true } });
    if (stale.length) {
      const ids = stale.map(l => l.id);
      await prisma.lessonProgress.deleteMany({ where: { lessonId: { in: ids } } });
      await prisma.lesson.deleteMany({ where: { id: { in: ids } } });
    }
  }
  const lessonTotal = curriculum.reduce((n, u) => n + u.lessons.length, 0);
  console.log(`  Seeded ${curriculum.length} units with ${lessonTotal} lessons`);

  // The placeholder courses from before the curriculum (and their 2 demo lessons)
  const legacyCourses = await prisma.course.findMany({
    where: { id: { in: LEGACY_COURSE_IDS } },
    select: { id: true, lessons: { select: { id: true } } },
  });
  if (legacyCourses.length) {
    const legacyLessonIds = legacyCourses.flatMap(c => c.lessons.map(l => l.id));
    await prisma.lessonProgress.deleteMany({ where: { lessonId: { in: legacyLessonIds } } });
    await prisma.lesson.deleteMany({ where: { id: { in: legacyLessonIds } } });
    await prisma.courseProgress.deleteMany({ where: { courseId: { in: LEGACY_COURSE_IDS } } });
    await prisma.course.deleteMany({ where: { id: { in: LEGACY_COURSE_IDS } } });
    console.log(`  Removed ${legacyCourses.length} placeholder courses`);
  }

  // Seed Badges
  for (const badge of badges) {
    await prisma.badge.upsert({
      where: { id: badge.id },
      update: {
        name: badge.name,
        description: badge.description,
        icon: badge.icon,
        category: badge.category,
      },
      create: {
        id: badge.id,
        name: badge.name,
        description: badge.description,
        icon: badge.icon,
        category: badge.category,
      },
    });
  }
  console.log(`  Seeded ${badges.length} badges`);

  // Seed Admin User
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123!';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@dushbdarija.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@dushbdarija.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'admin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      totalPoints: 9999,
      currentLevel: 10,
    },
  });
  console.log(`  Seeded admin user: ${admin.email}`);

  // Seed Chat Rooms
  const rooms = [
    { name: 'General Chat', description: 'Talk about anything related to learning German!' },
    { name: 'Grammar Help', description: 'Ask questions about German grammar.' },
    { name: 'Culture & Integration', description: 'Discuss German culture, customs, and integration tips.' },
  ];

  for (const room of rooms) {
    const existing = await prisma.chatRoom.findFirst({ where: { name: room.name } });
    if (!existing) {
      await prisma.chatRoom.create({ data: room });
    }
  }
  console.log(`  Seeded ${rooms.length} chat rooms`);

  console.log('Database seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
