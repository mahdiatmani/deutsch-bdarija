import prisma from './prisma';

export const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
export const CHAT_RATE_LIMIT = 20; // 20 messages per minute
export const DAILY_MESSAGE_LIMIT = 100;

export const checkRateLimit = async (
  userId: string,
  endpoint: string,
  limit: number
): Promise<{ allowed: boolean; retryAfter?: number }> => {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);

  await prisma.rateLimitLog.deleteMany({
    where: { windowStart: { lt: windowStart } }
  });

  const count = await prisma.rateLimitLog.count({
    where: {
      userId,
      endpoint,
      windowStart: { gte: windowStart }
    }
  });

  if (count >= limit) {
    const oldestInWindow = await prisma.rateLimitLog.findFirst({
      where: { userId, endpoint, windowStart: { gte: windowStart } },
      orderBy: { windowStart: 'asc' }
    });
    const retryAfter = oldestInWindow
      ? Math.ceil((oldestInWindow.windowStart.getTime() + RATE_LIMIT_WINDOW_MS - Date.now()) / 1000)
      : 60;
    return { allowed: false, retryAfter };
  }

  await prisma.rateLimitLog.create({
    data: { userId, ip: '', endpoint, windowStart: new Date() }
  });

  return { allowed: true };
};

export const checkDailyMessageLimit = async (
  userId: string
): Promise<{ allowed: boolean; remaining: number; limit: number }> => {
  let settings = await prisma.userChatSettings.findUnique({ where: { userId } });

  if (!settings) {
    settings = await prisma.userChatSettings.create({
      data: { userId, dailyMessageLimit: DAILY_MESSAGE_LIMIT }
    });
  }

  const now = new Date();
  const lastReset = new Date(settings.lastResetDate);
  const isDifferentDay = now.toDateString() !== lastReset.toDateString();

  if (isDifferentDay) {
    settings = await prisma.userChatSettings.update({
      where: { userId },
      data: { messagesUsedToday: 0, lastResetDate: now }
    });
  }

  const remaining = settings.dailyMessageLimit - settings.messagesUsedToday;
  return { allowed: remaining > 0, remaining, limit: settings.dailyMessageLimit };
};

export const incrementDailyMessageCount = async (userId: string) => {
  await prisma.userChatSettings.update({
    where: { userId },
    data: { messagesUsedToday: { increment: 1 } }
  });
};
