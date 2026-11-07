import { beforeEach, describe, expect, it, vi } from 'vitest';
import jwt from 'jsonwebtoken';
import { prismaMock, resetPrismaMock } from './prisma-mock';

vi.mock('../src/lib/prisma', () => ({ default: prismaMock, prisma: prismaMock }));

import { clearSessionCache, revokeSessions, signToken, verifySession } from '../src/lib/session';

/** The "database": one user whose tokenVersion and role the tests change */
let dbUser: { id: string; role: string; tokenVersion: number } | null;

beforeEach(() => {
  resetPrismaMock();
  clearSessionCache();
  dbUser = { id: 'u1', role: 'user', tokenVersion: 0 };
  prismaMock.user.findUnique.mockImplementation(async () => (dbUser ? { ...dbUser } : null));
  prismaMock.user.update.mockImplementation(async ({ data }: any) => {
    dbUser = { ...dbUser!, tokenVersion: dbUser!.tokenVersion + data.tokenVersion.increment };
    return { ...dbUser };
  });
});

describe('verifySession', () => {
  it('accepts a fresh token', async () => {
    expect(await verifySession(signToken(dbUser!))).toEqual({ userId: 'u1', role: 'user', rememberMe: true });
  });

  it('knows a 1-day token from a "remember me" one', async () => {
    expect((await verifySession(signToken(dbUser!, false)))?.rememberMe).toBe(false);
  });

  it('rejects missing, malformed, forged and expired tokens', async () => {
    expect(await verifySession(undefined)).toBeNull();
    expect(await verifySession('not-a-jwt')).toBeNull();
    expect(await verifySession(jwt.sign({ userId: 'u1', role: 'admin', tv: 0 }, 'wrong-secret'))).toBeNull();
    const expired = jwt.sign({ userId: 'u1', role: 'user', tv: 0, exp: Math.floor(Date.now() / 1000) - 10 }, 'test-secret');
    expect(await verifySession(expired)).toBeNull();
  });

  it('still accepts tokens issued before token versions existed', async () => {
    const legacy = jwt.sign({ userId: 'u1', role: 'user' }, 'test-secret', { expiresIn: '30d' });
    expect(await verifySession(legacy)).not.toBeNull();
  });

  it('rejects the token of a deleted user', async () => {
    const token = signToken(dbUser!);
    dbUser = null;
    expect(await verifySession(token)).toBeNull();
  });

  it('takes the role from the database, not from the token', async () => {
    const token = jwt.sign({ userId: 'u1', role: 'admin', tv: 0 }, 'test-secret');
    expect((await verifySession(token))?.role).toBe('user');
  });

  it('caches the lookup between requests', async () => {
    const token = signToken(dbUser!);
    await verifySession(token);
    await verifySession(token);
    expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(1);
  });
});

describe('revokeSessions', () => {
  it('logs out every existing token at once, even cached ones', async () => {
    const phone = signToken(dbUser!);
    const laptop = signToken(dbUser!, false);
    expect(await verifySession(phone)).not.toBeNull(); // now cached

    const updated = await revokeSessions('u1', { password: 'new-hash' });
    expect(prismaMock.user.update.mock.calls[0][0].data).toEqual({ password: 'new-hash', tokenVersion: { increment: 1 } });

    expect(await verifySession(phone)).toBeNull();
    expect(await verifySession(laptop)).toBeNull();
    expect(await verifySession(signToken(updated))).not.toBeNull();
  });

  it('also logs out tokens from before token versions existed', async () => {
    const legacy = jwt.sign({ userId: 'u1', role: 'user' }, 'test-secret');
    await revokeSessions('u1');
    expect(await verifySession(legacy)).toBeNull();
  });
});
