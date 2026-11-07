/**
 * Login tokens (JWT). Each token carries the user's tokenVersion; raising that
 * number (password change/reset) makes every older token invalid on all devices.
 */
import jwt from 'jsonwebtoken';
import prisma from './prisma';

const JWT_SECRET = process.env.JWT_SECRET!;
const DAY_S = 24 * 60 * 60;

export interface Session {
  userId: string;
  role: string;
  /** Long-lived "remember me" token (30 days) rather than a 1-day one */
  rememberMe: boolean;
}

interface TokenPayload {
  userId: string;
  role: string;
  /** Missing in tokens issued before versions existed; they count as version 0 */
  tv?: number;
  iat?: number;
  exp?: number;
}

export const signToken = (user: { id: string; role: string; tokenVersion: number }, rememberMe = true) =>
  jwt.sign({ userId: user.id, role: user.role, tv: user.tokenVersion } satisfies TokenPayload, JWT_SECRET, {
    expiresIn: rememberMe ? '30d' : '1d',
  });

/**
 * Version and role per user, cached briefly so not every request hits the database.
 * A revoke on this server takes effect at once; on other instances within CACHE_MS.
 */
const CACHE_MS = 30_000;
const MAX_CACHED = 5_000;
const cache = new Map<string, { tokenVersion: number; role: string; at: number }>();

async function currentState(userId: string) {
  const hit = cache.get(userId);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit;

  const user = await prisma.user.findUnique({ where: { id: userId }, select: { tokenVersion: true, role: true } });
  if (!user) {
    cache.delete(userId);
    return null;
  }
  if (cache.size >= MAX_CACHED) cache.delete(cache.keys().next().value!);
  const state = { ...user, at: Date.now() };
  cache.set(userId, state);
  return state;
}

/** The session behind a token, or null if it is invalid, expired, revoked or its user is gone */
export async function verifySession(token: string | undefined | null): Promise<Session | null> {
  if (!token) return null;
  let payload: TokenPayload;
  try {
    payload = jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
  if (!payload?.userId) return null;

  const state = await currentState(payload.userId);
  if (!state || (payload.tv ?? 0) !== state.tokenVersion) return null;

  const lifetime = payload.exp && payload.iat ? payload.exp - payload.iat : 0;
  // Role comes from the database, so a changed role applies without logging in again
  return { userId: payload.userId, role: state.role, rememberMe: lifetime > DAY_S };
}

/** Log the user out everywhere. Returns the user as updated, to sign a fresh token if needed. */
export async function revokeSessions(userId: string, data: { password?: string } = {}) {
  cache.delete(userId);
  const user = await prisma.user.update({ where: { id: userId }, data: { ...data, tokenVersion: { increment: 1 } } });
  cache.delete(userId);
  return user;
}

/** For tests */
export const clearSessionCache = () => cache.clear();
