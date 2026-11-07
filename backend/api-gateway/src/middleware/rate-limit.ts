import { Request, Response, NextFunction } from 'express';

interface Bucket {
  count: number;
  resetAt: number;
}

/**
 * Fixed-window, in-memory rate limiter. Good enough for a single API instance;
 * use a shared store (e.g. Redis) if the gateway is ever scaled horizontally.
 */
export function rateLimit(options: {
  windowMs: number;
  max: number;
  keyGenerator?: (req: Request) => string;
  message?: string;
}) {
  const buckets = new Map<string, Bucket>();
  const keyOf = options.keyGenerator ?? ((req: Request) => req.ip || 'unknown');

  setInterval(() => {
    const now = Date.now();
    buckets.forEach((bucket, key) => {
      if (bucket.resetAt <= now) buckets.delete(key);
    });
  }, options.windowMs).unref();

  return (req: Request, res: Response, next: NextFunction) => {
    const key = keyOf(req);
    const now = Date.now();
    let bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + options.windowMs };
      buckets.set(key, bucket);
    }

    bucket.count += 1;
    if (bucket.count > options.max) {
      const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      return res.status(429).json({
        success: false,
        message: options.message ?? 'Too many requests. Please try again later.',
        code: 'RATE_LIMIT_EXCEEDED',
        retryAfter,
      });
    }
    next();
  };
}

/** AI test/exercise generation is expensive: cap it per user. Use after `authenticate`. */
export const aiGenerationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  keyGenerator: req => (req as Request & { userId?: string }).userId || req.ip || 'unknown',
  message: 'You have generated a lot of tests recently. Please try again later.',
});
