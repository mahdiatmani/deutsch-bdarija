import { Router, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';
import { authenticate, AuthRequest } from '../middleware/auth';
import { formatRoomMessage } from '../socket';

const router = Router();

router.get('/rooms', authenticate, async (_req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    res.json(await prisma.chatRoom.findMany({ orderBy: { createdAt: 'asc' } }));
  } catch (error) {
    next(error);
  }
});

// The most recent 50 messages, oldest first
router.get('/rooms/:id/messages', authenticate, async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const messages = await prisma.roomMessage.findMany({
      where: { roomId: req.params.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: {
        user: { select: { id: true, username: true, firstName: true, lastName: true, avatar: true } },
      },
    });

    res.json(messages.reverse().map(formatRoomMessage));
  } catch (error) {
    next(error);
  }
});

export default router;
