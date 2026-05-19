/**
 * Seed script — creates the first Super Admin user.
 *
 * Usage (after DATABASE_URL is set in .env.local):
 *   npx tsx scripts/seed-admin.ts
 *
 * Or with custom credentials via env vars:
 *   ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=secret ADMIN_NAME="Your Name" \
 *     npx tsx scripts/seed-admin.ts
 */

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../lib/generated/prisma/client';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const db = new PrismaClient({ adapter });

async function main() {
  const email    = process.env.ADMIN_EMAIL    ?? 'admin@vivacetv.fr';
  const password = process.env.ADMIN_PASSWORD ?? 'ChangeMe123!';
  const name     = process.env.ADMIN_NAME     ?? 'Super Admin';

  const existing = await db.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log(`✓ Admin user already exists: ${email}`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await db.adminUser.create({
    data: {
      email,
      passwordHash,
      name,
      role: 'SUPER_ADMIN',
      active: true,
    },
  });

  console.log('✓ Super Admin created:');
  console.log(`  Email   : ${user.email}`);
  console.log(`  Name    : ${user.name}`);
  console.log(`  Role    : ${user.role}`);
  console.log(`  ID      : ${user.id}`);
  console.log('\n⚠️  Change the default password immediately after first login!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
