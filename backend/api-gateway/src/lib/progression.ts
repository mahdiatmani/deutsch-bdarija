import type { User } from '@prisma/client';
import prisma from './prisma';

const DAY_MS = 24 * 60 * 60 * 1000;
const STREAK_MILESTONES = [3, 7, 14, 30, 60, 100, 365];

const startOfDay = (d: Date) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

/** Whole calendar days from `from` to `to` (server local time, DST-safe). */
export const daysBetween = (from: Date, to: Date) =>
  Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / DAY_MS);

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2';

/** CEFR level used for content difficulty (tests, AI teacher, exercises). */
export function getCefrLevel(totalPoints: number): CefrLevel {
  if (totalPoints >= 5000) return 'B2';
  if (totalPoints >= 2000) return 'B1';
  if (totalPoints >= 500) return 'A2';
  return 'A1';
}

/** XP needed to reach `level` (level 1 = 0 XP, 2 = 100, 3 = 400, 4 = 900, ...). */
export const pointsForLevel = (level: number) => 100 * (level - 1) ** 2;

export const getLevel = (totalPoints: number) =>
  Math.floor(Math.sqrt(Math.max(0, totalPoints) / 100)) + 1;

export function getLevelProgress(totalPoints: number) {
  const level = getLevel(totalPoints);
  const floor = pointsForLevel(level);
  return {
    level,
    currentLevelXP: totalPoints - floor,
    nextLevelXP: pointsForLevel(level + 1) - floor,
  };
}

export async function recordAchievement(
  userId: string,
  type: string,
  title: string,
  description: string,
  points = 0,
  value?: number
) {
  await prisma.achievement.create({ data: { userId, type, title, description, points, value } });
}

/**
 * Bring time-dependent user fields up to date: reset daily XP on a new day,
 * break the streak if a whole day was missed, and backfill the level.
 */
export async function refreshDailyState(user: User): Promise<User> {
  const now = new Date();
  const data: Partial<User> = {};

  if (daysBetween(user.lastDailyActivity, now) > 0) {
    data.dailyXP = 0;
    data.lastDailyActivity = now;
  }
  if (user.currentStreak > 0 && (!user.lastStreakDate || daysBetween(user.lastStreakDate, now) > 1)) {
    data.currentStreak = 0;
  }
  const level = getLevel(user.totalPoints);
  if (level !== user.currentLevel) data.currentLevel = level;

  if (Object.keys(data).length === 0) return user;
  return prisma.user.update({ where: { id: user.id }, data });
}

export async function refreshDailyStateById(userId: string): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user ? refreshDailyState(user) : null;
}

/**
 * Award XP for a learning activity. Also handles the daily XP reset, the
 * streak (first activity of the day extends it), level-ups and achievements.
 * An amount of 0 still counts as activity for the streak.
 */
export async function awardXP(userId: string, amount: number): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return null;

  const now = new Date();
  const xp = Math.max(0, Math.round(amount));
  const isNewDay = daysBetween(user.lastDailyActivity, now) > 0;
  const gap = user.lastStreakDate ? daysBetween(user.lastStreakDate, now) : null;

  let currentStreak = user.currentStreak;
  if (gap === null || gap > 1 || currentStreak === 0) currentStreak = 1;
  else if (gap === 1) currentStreak += 1;

  const totalPoints = user.totalPoints + xp;
  const newLevel = getLevel(totalPoints);
  const oldLevel = getLevel(user.totalPoints);

  const updated = await prisma.user.update({
    where: { id: userId },
    data: {
      totalPoints: { increment: xp },
      dailyXP: isNewDay ? xp : { increment: xp },
      lastDailyActivity: now,
      lastStreakDate: now,
      currentStreak,
      longestStreak: Math.max(user.longestStreak, currentStreak),
      currentLevel: newLevel,
    },
  });

  if (newLevel > oldLevel) {
    await recordAchievement(userId, 'level-up', `Reached level ${newLevel}`, `You reached level ${newLevel}!`, xp, newLevel);
  }
  if (currentStreak !== user.currentStreak && STREAK_MILESTONES.includes(currentStreak)) {
    await recordAchievement(userId, 'streak', `${currentStreak}-day streak`, `You learned ${currentStreak} days in a row!`, 0, currentStreak);
  }

  return updated;
}
