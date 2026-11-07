import type { User } from '@prisma/client';
import { getCefrLevel, getLevelProgress } from './progression';

/**
 * The only shape in which a user leaves the API. Never spread a Prisma user
 * into a response directly: it contains the password hash.
 */
export function toPublicUser(user: User) {
  const levelProgress = getLevelProgress(user.totalPoints);
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    avatar: user.avatar,
    role: user.role,
    appLanguage: user.appLanguage,
    totalPoints: user.totalPoints,
    currentLevel: levelProgress.level,
    levelProgress: {
      current: levelProgress.currentLevelXP,
      required: levelProgress.nextLevelXP,
    },
    cefrLevel: getCefrLevel(user.totalPoints),
    currentStreak: user.currentStreak,
    longestStreak: user.longestStreak,
    lessonsCompleted: user.lessonsCompleted,
    dailyGoal: user.dailyGoal,
    dailyXP: user.dailyXP,
    preferences: {
      emailNotifications: user.emailNotifications,
      dailyReminders: user.dailyReminders,
    },
    createdAt: user.createdAt,
  };
}

export type PublicUser = ReturnType<typeof toPublicUser>;
