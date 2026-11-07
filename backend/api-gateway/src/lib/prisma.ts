import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function createPrismaClient(url?: string): PrismaClient {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
    ...(url ? { datasources: { db: { url } } } : {}),
  });
}

let prisma: PrismaClient;

if (globalForPrisma.prisma) {
  prisma = globalForPrisma.prisma;
} else {
  prisma = createPrismaClient();
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

/**
 * Try connecting to the current database. If it fails and SUPABASE_DATABASE_URL
 * is set, reconnect using Supabase as a fallback.
 */
export async function ensureConnection(): Promise<void> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('Database connected (primary)');
  } catch (err) {
    const supabaseUrl = process.env.SUPABASE_DATABASE_URL;
    if (!supabaseUrl) {
      throw new Error('Primary database unavailable and no SUPABASE_DATABASE_URL configured');
    }

    console.warn('Primary database unavailable, switching to Supabase fallback...');
    await prisma.$disconnect().catch(() => {});

    prisma = createPrismaClient(supabaseUrl);
    globalForPrisma.prisma = prisma;

    try {
      await prisma.$queryRaw`SELECT 1`;
      console.log('Database connected (Supabase fallback)');
    } catch (fallbackErr) {
      throw new Error('Both primary and Supabase databases are unavailable');
    }
  }
}

export { prisma };
export default prisma;
