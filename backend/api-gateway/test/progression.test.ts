import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { prismaMock, resetPrismaMock } from './prisma-mock';

vi.mock('../src/lib/prisma', () => ({ default: prismaMock, prisma: prismaMock }));

import {
  awardXP,
  daysBetween,
  getCefrLevel,
  getLevel,
  getLevelProgress,
  pointsForLevel,
  refreshDailyState,
} from '../src/lib/progression';

// Local time, so the tests mean the same thing in every time zone
const NOW = new Date(2026, 4, 20, 12, 0, 0);
const daysAgo = (n: number, hour = 12) => new Date(2026, 4, 20 - n, hour, 0, 0);

const makeUser = (overrides: Record<string, unknown> = {}) =>
  ({
    id: 'u1',
    totalPoints: 0,
    dailyXP: 0,
    currentLevel: 1,
    currentStreak: 0,
    longestStreak: 0,
    lastStreakDate: null,
    lastDailyActivity: NOW,
    ...overrides,
  }) as any;

/** The `data` passed to the one prisma.user.update call */
const updateData = () => {
  expect(prismaMock.user.update).toHaveBeenCalledTimes(1);
  return prismaMock.user.update.mock.calls[0][0].data;
};

beforeEach(() => {
  resetPrismaMock();
  vi.useFakeTimers();
  vi.setSystemTime(NOW);
});
afterEach(() => vi.useRealTimers());

describe('levels', () => {
  it('starts at level 1 and needs 100 * (level - 1)^2 XP per level', () => {
    expect(getLevel(0)).toBe(1);
    expect(getLevel(99)).toBe(1);
    expect(getLevel(100)).toBe(2);
    expect(getLevel(399)).toBe(2);
    expect(getLevel(400)).toBe(3);
    expect(getLevel(900)).toBe(4);
  });

  it('never goes below level 1', () => {
    expect(getLevel(-500)).toBe(1);
  });

  it('getLevel and pointsForLevel agree at every level boundary', () => {
    for (let level = 1; level <= 50; level++) {
      expect(getLevel(pointsForLevel(level))).toBe(level);
      if (level > 1) expect(getLevel(pointsForLevel(level) - 1)).toBe(level - 1);
    }
  });

  it('reports progress inside the current level', () => {
    expect(getLevelProgress(150)).toEqual({ level: 2, currentLevelXP: 50, nextLevelXP: 300 });
    expect(getLevelProgress(0)).toEqual({ level: 1, currentLevelXP: 0, nextLevelXP: 100 });
  });

  it('maps XP to CEFR levels', () => {
    expect(getCefrLevel(0)).toBe('A1');
    expect(getCefrLevel(499)).toBe('A1');
    expect(getCefrLevel(500)).toBe('A2');
    expect(getCefrLevel(2000)).toBe('B1');
    expect(getCefrLevel(5000)).toBe('B2');
  });
});

describe('daysBetween', () => {
  it('counts calendar days, not 24-hour periods', () => {
    expect(daysBetween(new Date(2026, 4, 20, 0, 1), new Date(2026, 4, 20, 23, 59))).toBe(0);
    expect(daysBetween(new Date(2026, 4, 19, 23, 59), new Date(2026, 4, 20, 0, 1))).toBe(1);
    expect(daysBetween(daysAgo(7), NOW)).toBe(7);
  });

  it('is negative for dates in the future', () => {
    expect(daysBetween(daysAgo(-2), NOW)).toBe(-2);
  });
});

describe('awardXP', () => {
  it('returns null for an unknown user', async () => {
    prismaMock.user.findUnique.mockResolvedValue(null);
    expect(await awardXP('missing', 10)).toBeNull();
    expect(prismaMock.user.update).not.toHaveBeenCalled();
  });

  it('starts a streak on the very first activity', async () => {
    prismaMock.user.findUnique.mockResolvedValue(makeUser({ lastDailyActivity: daysAgo(3) }));
    await awardXP('u1', 20);
    expect(updateData()).toMatchObject({
      totalPoints: { increment: 20 },
      dailyXP: 20, // new day: daily XP restarts from this amount
      currentStreak: 1,
      longestStreak: 1,
      lastStreakDate: NOW,
    });
  });

  it('extends the streak when the last activity was yesterday', async () => {
    prismaMock.user.findUnique.mockResolvedValue(
      makeUser({ currentStreak: 4, longestStreak: 4, lastStreakDate: daysAgo(1), lastDailyActivity: daysAgo(1) })
    );
    await awardXP('u1', 10);
    expect(updateData()).toMatchObject({ currentStreak: 5, longestStreak: 5, dailyXP: 10 });
  });

  it('keeps the streak and adds to daily XP for a second activity on the same day', async () => {
    prismaMock.user.findUnique.mockResolvedValue(
      makeUser({ currentStreak: 4, longestStreak: 9, dailyXP: 30, lastStreakDate: daysAgo(0, 8) })
    );
    await awardXP('u1', 10);
    expect(updateData()).toMatchObject({ currentStreak: 4, longestStreak: 9, dailyXP: { increment: 10 } });
  });

  it('restarts the streak after a missed day but keeps the longest streak', async () => {
    prismaMock.user.findUnique.mockResolvedValue(
      makeUser({ currentStreak: 12, longestStreak: 12, lastStreakDate: daysAgo(2), lastDailyActivity: daysAgo(2) })
    );
    await awardXP('u1', 10);
    expect(updateData()).toMatchObject({ currentStreak: 1, longestStreak: 12 });
  });

  it('rounds XP and never subtracts it', async () => {
    prismaMock.user.findUnique.mockResolvedValue(makeUser());
    await awardXP('u1', -40);
    expect(updateData().totalPoints).toEqual({ increment: 0 });

    resetPrismaMock();
    prismaMock.user.findUnique.mockResolvedValue(makeUser());
    await awardXP('u1', 12.6);
    expect(updateData().totalPoints).toEqual({ increment: 13 });
  });

  it('records a level-up achievement when the level changes', async () => {
    prismaMock.user.findUnique.mockResolvedValue(makeUser({ totalPoints: 90, lastStreakDate: NOW, currentStreak: 1 }));
    await awardXP('u1', 20);
    expect(updateData().currentLevel).toBe(2);
    expect(prismaMock.achievement.create).toHaveBeenCalledTimes(1);
    expect(prismaMock.achievement.create.mock.calls[0][0].data).toMatchObject({ type: 'level-up', value: 2 });
  });

  it('records a streak milestone once, on the day it is reached', async () => {
    prismaMock.user.findUnique.mockResolvedValue(
      makeUser({ currentStreak: 6, longestStreak: 6, lastStreakDate: daysAgo(1) })
    );
    await awardXP('u1', 0);
    expect(prismaMock.achievement.create.mock.calls[0][0].data).toMatchObject({ type: 'streak', value: 7 });

    // A second activity the same day must not record it again
    resetPrismaMock();
    prismaMock.user.findUnique.mockResolvedValue(makeUser({ currentStreak: 7, longestStreak: 7, lastStreakDate: NOW }));
    await awardXP('u1', 0);
    expect(prismaMock.achievement.create).not.toHaveBeenCalled();
  });
});

describe('refreshDailyState', () => {
  it('does not write anything when nothing changed', async () => {
    const user = makeUser({ currentStreak: 3, lastStreakDate: daysAgo(1) });
    expect(await refreshDailyState(user)).toBe(user);
    expect(prismaMock.user.update).not.toHaveBeenCalled();
  });

  it('resets daily XP on a new day', async () => {
    await refreshDailyState(makeUser({ dailyXP: 80, lastDailyActivity: daysAgo(1) }));
    expect(updateData()).toMatchObject({ dailyXP: 0, lastDailyActivity: NOW });
  });

  it('keeps a streak whose last day was yesterday, so it can still be extended today', async () => {
    await refreshDailyState(makeUser({ currentStreak: 5, lastStreakDate: daysAgo(1), lastDailyActivity: daysAgo(1) }));
    expect(updateData().currentStreak).toBeUndefined();
  });

  it('breaks the streak when a whole day was missed', async () => {
    await refreshDailyState(makeUser({ currentStreak: 5, lastStreakDate: daysAgo(2) }));
    expect(updateData().currentStreak).toBe(0);
  });

  it('backfills a stored level that is out of date', async () => {
    await refreshDailyState(makeUser({ totalPoints: 450, currentLevel: 1 }));
    expect(updateData().currentLevel).toBe(3);
  });
});
