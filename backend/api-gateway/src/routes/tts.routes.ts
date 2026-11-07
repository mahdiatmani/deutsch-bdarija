import { Router, Response, NextFunction } from 'express';
import { z } from 'zod';
import { authenticate, AuthRequest } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { lessonAudioId } from '../lib/lesson-audio';
import prisma from '../lib/prisma';

/**
 * Lesson audio: neural speech generated once by scripts/generate-lesson-audio.ts and
 * stored in the LessonAudio table. Nothing is synthesized here; a text without a clip
 * gets 404 and the frontend speaks it with the browser voice instead.
 */
const router = Router();

const ttsSchema = z.object({
  text: z.string().trim().min(1).max(2000),
  rate: z.number().min(0.5).max(1.5).optional(),
  /** Character voice (e.g. "katja"); defaults to the narrator */
  voice: z.string().regex(/^[a-z0-9_-]{1,32}$/).optional(),
});

router.post('/', authenticate, validate(ttsSchema), async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { text, voice, rate } = req.body;
    const clip = await prisma.lessonAudio.findUnique({
      where: { id: lessonAudioId(text, voice, rate) },
      select: { audio: true },
    });
    if (!clip) {
      return res.status(404).json({ success: false, message: 'No audio for this text', code: 'AUDIO_NOT_FOUND' });
    }

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', String(clip.audio.length));
    res.setHeader('Cache-Control', 'private, max-age=86400');
    res.send(Buffer.from(clip.audio));
  } catch (error) {
    next(error);
  }
});

export default router;
