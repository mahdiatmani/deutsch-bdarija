import { vi, type Mock } from 'vitest';

/**
 * In-memory stand-in for the Prisma client: every model method is a vi.fn().
 * update/upsert resolve to the arguments they were called with and $transaction
 * resolves the writes it is given, so a test can check exactly what would be written.
 */
const METHODS = ['findUnique', 'findMany', 'count', 'create', 'createMany', 'update', 'upsert', 'deleteMany', 'groupBy'] as const;
const MODELS = ['user', 'achievement', 'gameWord'] as const;

type Model = Record<(typeof METHODS)[number], Mock>;

export const prismaMock = {
  ...(Object.fromEntries(MODELS.map(m => [m, Object.fromEntries(METHODS.map(fn => [fn, vi.fn()]))])) as Record<
    (typeof MODELS)[number],
    Model
  >),
  $transaction: vi.fn(),
};

/** Forget calls and queued return values, and restore the default behaviour */
export function resetPrismaMock() {
  for (const m of MODELS) {
    for (const fn of METHODS) prismaMock[m][fn].mockReset();
    prismaMock[m].update.mockImplementation(async (args: unknown) => args);
    prismaMock[m].upsert.mockImplementation(async (args: unknown) => args);
  }
  prismaMock.$transaction.mockReset();
  prismaMock.$transaction.mockImplementation(async (ops: Promise<unknown>[]) => Promise.all(ops));
}
