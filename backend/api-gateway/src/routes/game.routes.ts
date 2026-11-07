import { Router, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';
import { gameScoreSchema } from '../schemas/game.schema';
import { validate } from '../middleware/validate';
import { authenticate, AuthRequest } from '../middleware/auth';
import { awardXP } from '../lib/progression';
import { toPublicUser } from '../lib/user';
import { updateWordBoxes } from '../lib/word-review';
import {
  DAILY_BONUS_XP, GAME_IDS, LEVELS, MAX_GAME_XP_PER_DAY, MAX_XP_PER_ROUND,
  dailyGame, dailyWortle, dayKey, gameBank, isGameId, type BankWord, type Level,
} from '../data/games';

const router = Router();
router.use(authenticate);

const DAY_MS = 24 * 60 * 60 * 1000;

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/**
 * Words and sentences of one CEFR level (A1–B2) for the games. `due` lists the words
 * the spaced repetition wants reviewed now, from any level.
 */
router.get('/bank', async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId!;
    const requested = String(req.query.level ?? 'A1').toUpperCase();
    const level: Level = LEVELS.includes(requested as Level) ? (requested as Level) : 'A1';
    const { words, sentences } = gameBank();

    const dueRows = await prisma.gameWord.findMany({
      where: { userId, dueAt: { lte: new Date() } },
      orderBy: [{ box: 'asc' }, { dueAt: 'asc' }],
      take: 60,
      select: { word: true },
    });
    const byText = new Map(words.map(w => [w.de, w]));
    const due = dueRows.map(r => byText.get(r.word)).filter((w): w is BankWord => !!w);

    res.json({
      level,
      words: words.filter(w => w.level === level),
      sentences: sentences.filter(s => s.level === level),
      due,
    });
  } catch (error) {
    next(error);
  }
});

/** Personal bests, today's challenge, Wörtle word, review count and the weekly top 5 per game */
router.get('/stats', async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId!;
    const today = startOfToday();
    const weekAgo = new Date(Date.now() - 7 * DAY_MS);

    const [bests, todayScores, reviewDue, weekly] = await Promise.all([
      prisma.gameScore.groupBy({ by: ['gameId'], where: { userId }, _max: { score: true }, _count: { _all: true } }),
      prisma.gameScore.findMany({ where: { userId, createdAt: { gte: today } }, select: { gameId: true, xp: true, isDaily: true, score: true } }),
      prisma.gameWord.count({ where: { userId, dueAt: { lte: new Date() } } }),
      prisma.gameScore.groupBy({ by: ['gameId', 'userId'], where: { createdAt: { gte: weekAgo } }, _max: { score: true } }),
    ]);

    const games: Record<string, { best: number; plays: number; playedToday: boolean }> = {};
    for (const id of GAME_IDS) games[id] = { best: 0, plays: 0, playedToday: false };
    for (const b of bests) if (games[b.gameId]) Object.assign(games[b.gameId], { best: b._max.score ?? 0, plays: b._count._all });
    for (const s of todayScores) if (games[s.gameId]) games[s.gameId].playedToday = true;

    // Weekly top 5 per game
    const topIds = new Set<string>();
    const top: Record<string, { userId: string; score: number }[]> = {};
    for (const row of weekly) (top[row.gameId] ??= []).push({ userId: row.userId, score: row._max.score ?? 0 });
    for (const id of Object.keys(top)) {
      top[id] = top[id].sort((a, b) => b.score - a.score).slice(0, 5);
      top[id].forEach(t => topIds.add(t.userId));
    }
    const users = await prisma.user.findMany({ where: { id: { in: [...topIds] } }, select: { id: true, username: true, avatar: true } });
    const byId = new Map(users.map(u => [u.id, u]));
    const leaders: Record<string, { username: string; avatar: string | null; score: number; isMe: boolean }[]> = {};
    for (const [id, rows] of Object.entries(top)) {
      leaders[id] = rows.map(r => ({
        username: byId.get(r.userId)?.username ?? '—',
        avatar: byId.get(r.userId)?.avatar ?? null,
        score: r.score,
        isMe: r.userId === userId,
      }));
    }

    const wortle = dailyWortle();
    res.json({
      games,
      leaders,
      reviewDue,
      xpToday: todayScores.reduce((n, s) => n + s.xp, 0),
      xpDailyCap: MAX_GAME_XP_PER_DAY,
      daily: { date: dayKey(), gameId: dailyGame(), done: todayScores.some(s => s.isDaily), bonus: DAILY_BONUS_XP },
      wortle: { word: (wortle.noun ?? wortle.de).toUpperCase(), de: wortle.de, dar: wortle.dar },
    });
  } catch (error) {
    next(error);
  }
});

/** Save a finished round: XP (capped per round and day), daily bonus, personal best, spaced repetition */
router.post('/:gameId/score', validate(gameScoreSchema), async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId!;
    const { gameId } = req.params;
    if (!isGameId(gameId)) return res.status(404).json({ success: false, message: 'Unknown game', code: 'NOT_FOUND' });
    const { score, correct, total, bestCombo, answers } = req.body as {
      score: number; correct: number; total: number; bestCombo: number; answers: { word: string; correct: boolean }[];
    };

    const today = startOfToday();
    const [previous, todayScores] = await Promise.all([
      prisma.gameScore.aggregate({ where: { userId, gameId }, _max: { score: true } }),
      prisma.gameScore.findMany({ where: { userId, createdAt: { gte: today } }, select: { xp: true, isDaily: true, gameId: true } }),
    ]);

    // Wörtle counts once a day
    const wortleRepeat = gameId === 'wortle' && todayScores.some(s => s.gameId === 'wortle');
    const xpToday = todayScores.reduce((n, s) => n + s.xp, 0);
    // Wörtle is one answer a day, so its XP follows the score (fewer guesses, more XP)
    const earned = gameId === 'wortle' ? score / 20 : correct * 1.5 + bestCombo / 2;
    const roundXP = wortleRepeat ? 0 : Math.min(MAX_XP_PER_ROUND, Math.round(earned));
    let xp = Math.max(0, Math.min(roundXP, MAX_GAME_XP_PER_DAY - xpToday));

    const isDaily = gameId === dailyGame() && !todayScores.some(s => s.isDaily) && correct >= 5;
    const dailyBonus = isDaily ? DAILY_BONUS_XP : 0;
    xp += dailyBonus;

    const previousBest = previous._max.score ?? 0;
    await prisma.gameScore.create({ data: { userId, gameId, score, correct, total, bestCombo, xp, isDaily } });
    await updateWordBoxes(userId, answers);
    const user = await awardXP(userId, xp);

    res.json({
      success: true,
      xpEarned: xp,
      dailyBonus,
      capped: roundXP > 0 && xp - dailyBonus < roundXP,
      best: Math.max(previousBest, score),
      isNewBest: score > previousBest && previousBest > 0,
      firstPlay: previous._max.score === null,
      user: user ? toPublicUser(user) : undefined,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
