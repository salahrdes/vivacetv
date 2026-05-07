import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from '@/lib/generated/prisma/client';

// Prisma 7 requires a driver adapter — datasource URL is no longer embedded in the schema.
// See: https://pris.ly/d/driver-adapters
//
// We use a pg.Pool with extended timeouts to handle Neon's cold-start latency
// (free-tier databases sleep after 5 min of inactivity and need ~2-3 s to wake).

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set.');
  }

  const pool = new Pool({
    connectionString,
    connectionTimeoutMillis: 10_000, // 10 s — enough for Neon cold start
    idleTimeoutMillis:       30_000,
    max:                     5,
  });

  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

// Prevent multiple PrismaClient instances during hot-reload in development
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
