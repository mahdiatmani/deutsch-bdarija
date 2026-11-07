import { Router, Response } from 'express';
import prisma from '../lib/prisma';
import { chatWithRAG, extractGermanText, generateConversationTitle } from '../lib/ai';
import { checkRateLimit, checkDailyMessageLimit, incrementDailyMessageCount, CHAT_RATE_LIMIT, DAILY_MESSAGE_LIMIT } from '../lib/rate-limiter';
import { chatMessageSchema, chatFeedbackSchema, chatSettingsSchema, conversationUpdateSchema } from '../schemas/ai-chat.schema';
import { validate } from '../middleware/validate';
import { authenticate, AuthRequest } from '../middleware/auth';
import { AIServiceError } from '../lib/errors';
import { getCefrLevel } from '../lib/progression';

const router = Router();

// Get user's conversations list
router.get('/conversations', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 20));
    const skip = (page - 1) * limit;

    const [conversations, total] = await Promise.all([
      prisma.aIConversation.findMany({
        where: { userId: req.userId },
        orderBy: { updatedAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          messageCount: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.aIConversation.count({ where: { userId: req.userId } }),
    ]);

    res.json({ data: conversations, total, page, limit });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching conversations', code: 'FETCH_ERROR' });
  }
});

// Get messages for a conversation
router.get('/conversations/:id/messages', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const conversation = await prisma.aIConversation.findFirst({
      where: { id: req.params.id, userId: req.userId },
    });

    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found', code: 'NOT_FOUND' });
    }

    const messages = await prisma.aIMessage.findMany({
      where: { conversationId: req.params.id },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        role: true,
        content: true,
        germanText: true,
        createdAt: true,
        feedback: { select: { rating: true } },
      },
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching messages', code: 'FETCH_ERROR' });
  }
});

// Rename a conversation
router.patch('/conversations/:id', authenticate, validate(conversationUpdateSchema), async (req: AuthRequest, res: Response) => {
  try {
    const conversation = await prisma.aIConversation.findFirst({
      where: { id: req.params.id, userId: req.userId },
    });

    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found', code: 'NOT_FOUND' });
    }

    const updated = await prisma.aIConversation.update({
      where: { id: req.params.id },
      // Keep updatedAt so a rename doesn't reorder the session list
      data: { title: req.body.title, updatedAt: conversation.updatedAt },
      select: {
        id: true,
        title: true,
        messageCount: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating conversation', code: 'UPDATE_ERROR' });
  }
});

// Get chat settings
router.get('/settings', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    let settings = await prisma.userChatSettings.findUnique({ where: { userId: req.userId } });

    if (!settings) {
      settings = await prisma.userChatSettings.create({
        data: { userId: req.userId!, dailyMessageLimit: DAILY_MESSAGE_LIMIT },
      });
    }

    const now = new Date();
    const lastReset = new Date(settings.lastResetDate);
    if (now.toDateString() !== lastReset.toDateString()) {
      settings = await prisma.userChatSettings.update({
        where: { userId: req.userId },
        data: { messagesUsedToday: 0, lastResetDate: now },
      });
    }

    res.json({
      autoSpeak: settings.autoSpeak,
      speechRate: settings.speechRate,
      dailyMessageLimit: settings.dailyMessageLimit,
      messagesUsedToday: settings.messagesUsedToday,
      messagesRemaining: settings.dailyMessageLimit - settings.messagesUsedToday,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching settings', code: 'FETCH_ERROR' });
  }
});

// Update chat settings
router.patch('/settings', authenticate, validate(chatSettingsSchema), async (req: AuthRequest, res: Response) => {
  try {
    const data = req.body;
    const settings = await prisma.userChatSettings.upsert({
      where: { userId: req.userId },
      update: data,
      create: { userId: req.userId!, ...data, dailyMessageLimit: DAILY_MESSAGE_LIMIT },
    });

    res.json({
      autoSpeak: settings.autoSpeak,
      speechRate: settings.speechRate,
      dailyMessageLimit: settings.dailyMessageLimit,
      messagesUsedToday: settings.messagesUsedToday,
      messagesRemaining: settings.dailyMessageLimit - settings.messagesUsedToday,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating settings', code: 'UPDATE_ERROR' });
  }
});

// Main AI Chat endpoint
router.post('/chat', authenticate, validate(chatMessageSchema), async (req: AuthRequest, res: Response) => {
  const userId = req.userId!;

  try {
    const { message, conversationId } = req.body;

    const rateLimit = await checkRateLimit(userId, 'ai-chat', CHAT_RATE_LIMIT);
    if (!rateLimit.allowed) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please slow down.',
        code: 'RATE_LIMIT_EXCEEDED',
        retryAfter: rateLimit.retryAfter,
      });
    }

    const dailyLimit = await checkDailyMessageLimit(userId);
    if (!dailyLimit.allowed) {
      return res.status(429).json({
        success: false,
        message: 'Daily message limit reached. Try again tomorrow!',
        code: 'DAILY_LIMIT_EXCEEDED',
        limit: dailyLimit.limit,
        remaining: 0,
      });
    }

    let conversation;
    if (conversationId) {
      conversation = await prisma.aIConversation.findFirst({
        where: { id: conversationId, userId },
      });
      if (!conversation) {
        return res.status(404).json({ success: false, message: 'Conversation not found', code: 'NOT_FOUND' });
      }
    } else {
      conversation = await prisma.aIConversation.create({
        data: { userId, title: generateConversationTitle(message) },
      });
    }

    await prisma.aIMessage.create({
      data: { conversationId: conversation.id, userId, role: 'user', content: message },
    });

    let responseText: string;
    let germanText: string | null = null;
    let ragSources: any[] = [];

    try {
      const recentMessages = await prisma.aIMessage.findMany({
        where: { conversationId: conversation.id },
        orderBy: { createdAt: 'desc' },
        take: 10,
      });

      const history = recentMessages
        .reverse()
        .slice(0, -1)
        .map(m => ({
          role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
          parts: [{ text: m.content }],
        }));

      // CEFR level for RAG filtering (same thresholds as tests and the sidebar badge)
      const userProfile = await prisma.user.findUnique({
        where: { id: userId },
        select: { totalPoints: true },
      });
      const userLevel = getCefrLevel(userProfile?.totalPoints || 0);

      // Use RAG pipeline (falls back to direct Ollama if unavailable)
      const aiResponse = await chatWithRAG(message, history, userLevel);
      responseText = aiResponse.text;
      germanText = aiResponse.germanText;
      ragSources = (aiResponse as any).sources || [];
    } catch (aiError: any) {
      console.error('AI Service error:', aiError.message);
      responseText = 'Sme7 liya, wqe3 chi mochkil. 3awed 7awel men b3d chwiya!';
    }

    germanText = extractGermanText(responseText);

    const assistantMessage = await prisma.aIMessage.create({
      data: { conversationId: conversation.id, userId, role: 'assistant', content: responseText, germanText },
    });

    await prisma.aIConversation.update({
      where: { id: conversation.id },
      data: { messageCount: { increment: 2 }, updatedAt: new Date() },
    });

    await incrementDailyMessageCount(userId);

    const settings = await prisma.userChatSettings.findUnique({ where: { userId } });

    res.json({
      id: assistantMessage.id,
      conversationId: conversation.id,
      role: 'assistant',
      content: responseText,
      germanText,
      timestamp: assistantMessage.createdAt,
      sources: ragSources,
      usage: {
        messagesUsedToday: settings?.messagesUsedToday || 1,
        messagesRemaining: (settings?.dailyMessageLimit || DAILY_MESSAGE_LIMIT) - (settings?.messagesUsedToday || 1),
      },
    });
  } catch (error: any) {
    if (error instanceof AIServiceError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        code: error.code,
      });
    }

    console.error('AI Chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing message',
      code: 'INTERNAL_ERROR',
      fallbackResponse: {
        role: 'assistant',
        content: 'Sme7 liya, wqe3 chi mochkil. 3awed 7awel men b3d chwiya! 🙏',
        timestamp: new Date(),
      },
    });
  }
});

// Submit feedback
router.post('/feedback', authenticate, validate(chatFeedbackSchema), async (req: AuthRequest, res: Response) => {
  try {
    const { messageId, rating, feedback } = req.body;

    const message = await prisma.aIMessage.findFirst({
      where: { id: messageId, userId: req.userId },
    });

    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found', code: 'NOT_FOUND' });
    }

    const feedbackRecord = await prisma.aIMessageFeedback.upsert({
      where: { messageId },
      update: { rating, feedback },
      create: { messageId, rating, feedback },
    });

    res.json({ success: true, feedback: feedbackRecord });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting feedback', code: 'SUBMIT_ERROR' });
  }
});

// Delete a conversation
router.delete('/conversations/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const conversation = await prisma.aIConversation.findFirst({
      where: { id: req.params.id, userId: req.userId },
    });

    if (!conversation) {
      return res.status(404).json({ success: false, message: 'Conversation not found', code: 'NOT_FOUND' });
    }

    await prisma.aIConversation.delete({ where: { id: req.params.id } });
    res.json({ success: true, message: 'Conversation deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting conversation', code: 'DELETE_ERROR' });
  }
});

// Clear all conversations
router.delete('/conversations', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    await prisma.aIConversation.deleteMany({ where: { userId: req.userId } });
    res.json({ success: true, message: 'All conversations cleared' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error clearing conversations', code: 'DELETE_ERROR' });
  }
});

export default router;
