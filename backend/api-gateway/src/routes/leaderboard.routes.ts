import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 20));
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        orderBy: { totalPoints: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          username: true,
          firstName: true,
          lastName: true,
          avatar: true,
          totalPoints: true,
          currentLevel: true,
        },
      }),
      prisma.user.count(),
    ]);

    const leaderboard = users.map((u, index) => ({
      rank: skip + index + 1,
      userId: u.id,
      username: `${u.firstName || u.username} ${u.lastName || ''}`.trim(),
      avatar: u.avatar,
      points: u.totalPoints,
      level: u.currentLevel,
    }));

    res.json({ data: leaderboard, total, page, limit });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching leaderboard' });
  }
});

export default router;
