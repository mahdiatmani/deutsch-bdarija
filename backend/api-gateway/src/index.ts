import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import { createServer } from 'http';

dotenv.config();

// ── Environment validation ──────────────────────────────────────────
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(v => !process.env[v]);
if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
  console.error('Please check your .env file. See .env.example for reference.');
  process.exit(1);
}

// Fail loudly if JWT_SECRET is the fallback value
if (process.env.JWT_SECRET === 'fallback-secret-key') {
  console.error('FATAL: JWT_SECRET must not be "fallback-secret-key". Set a proper secret.');
  process.exit(1);
}

// ── Imports (after dotenv so env vars are available) ─────────────────
import prisma, { ensureConnection } from './lib/prisma';
import { errorHandler } from './middleware/error-handler';
import authRoutes from './routes/auth.routes';
import courseRoutes, { lessonRouter } from './routes/course.routes';
import userRoutes from './routes/user.routes';
import aiChatRoutes from './routes/ai-chat.routes';
import chatRoutes from './routes/chat.routes';
import gameRoutes from './routes/game.routes';
import leaderboardRoutes from './routes/leaderboard.routes';
import testRoutes from './routes/test.routes';
import ttsRoutes from './routes/tts.routes';
import { setupSocket } from './socket';

// ── App setup ───────────────────────────────────────────────────────
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 4000;

// Behind a reverse proxy (nginx, Render, Fly...) set TRUST_PROXY=1 so req.ip and
// req.protocol reflect the real client; rate limiting and avatar URLs rely on them.
if (process.env.TRUST_PROXY) {
  const value = process.env.TRUST_PROXY;
  app.set('trust proxy', /^\d+$/.test(value) ? Number(value) : value === 'true' ? true : value);
}

// ── CORS ────────────────────────────────────────────────────────────
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
  : ['http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// ── Security middleware ─────────────────────────────────────────────
app.use(helmet({
  crossOriginResourcePolicy: false,
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  contentSecurityPolicy: false, // Let frontend handle CSP
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ── Static files ────────────────────────────────────────────────────
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ── Health checks ───────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/health/ready', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    // AI provider status (non-blocking: degraded AI is still "ready")
    let ai: { provider: string; status: string } = { provider: 'unknown', status: 'unavailable' };
    try {
      const { checkRAGHealth } = await import('./lib/ai');
      const health = await checkRAGHealth();
      ai = {
        provider: health.provider,
        status: health.ok ? 'ok' : health.provider === 'openrouter' ? 'missing OPENROUTER_API_KEY' : 'unavailable',
      };
    } catch {
      // keep defaults
    }

    res.json({
      status: 'ready',
      database: 'connected',
      ai,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(503).json({ status: 'not ready', database: 'disconnected', timestamp: new Date().toISOString() });
  }
});

// ── Routes ──────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRouter);
app.use('/api/user', userRoutes);
app.use('/api/ai', aiChatRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/tts', ttsRoutes);

// Legacy redirects
app.post('/api/chat', (req, res) => {
  req.url = '/api/ai/chat';
  app._router.handle(req, res, () => {});
});

app.delete('/api/chat/history', (req, res) => {
  req.url = '/api/ai/conversations';
  req.method = 'DELETE';
  app._router.handle(req, res, () => {});
});

// Unknown API routes get a JSON 404 instead of Express's HTML page
app.use('/api', (_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found', code: 'NOT_FOUND' });
});

// ── Error handler (must be last) ────────────────────────────────────
app.use(errorHandler);

// ── Socket.io ───────────────────────────────────────────────────────
const io = setupSocket(httpServer, allowedOrigins);

// ── Start server ────────────────────────────────────────────────────
async function start() {
  try {
    await ensureConnection();
  } catch (err) {
    console.error('Failed to connect to any database:', err);
    process.exit(1);
  }

  httpServer.listen(port, () => {
    console.log(`API Gateway running on http://localhost:${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

start();

// ── Graceful shutdown ───────────────────────────────────────────────
const gracefulShutdown = async (signal: string) => {
  console.log(`\n${signal} received. Starting graceful shutdown...`);

  // Stop accepting new connections
  httpServer.close(() => {
    console.log('HTTP server closed');
  });

  // Close Socket.io connections
  io.close(() => {
    console.log('Socket.io connections closed');
  });

  // Disconnect Prisma
  try {
    await prisma.$disconnect();
    console.log('Database disconnected');
  } catch (error) {
    console.error('Error disconnecting database:', error);
  }

  // Give ongoing requests time to complete
  setTimeout(() => {
    console.log('Shutdown complete');
    process.exit(0);
  }, 5000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

export default app;
