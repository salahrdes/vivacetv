'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import * as fs from 'fs';
import * as path from 'path';

export type MediaRow = {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  altText: string | null;
  createdAt: Date;
};

export async function getMedia(): Promise<MediaRow[]> {
  return db.mediaAsset.findMany({
    orderBy: { createdAt: 'desc' },
    select: { id: true, filename: true, url: true, mimeType: true, size: true, altText: true, createdAt: true },
  });
}

export async function deleteMedia(id: string): Promise<void> {
  const asset = await db.mediaAsset.findUnique({ where: { id }, select: { url: true } });
  if (asset) {
    // Remove physical file if it's in /public/uploads
    if (asset.url.startsWith('/uploads/')) {
      const filePath = path.join(process.cwd(), 'public', asset.url);
      try { fs.unlinkSync(filePath); } catch { /* file already gone */ }
    }
    await db.mediaAsset.delete({ where: { id } });
  }
  revalidatePath('/admin/media');
}

export async function updateMediaAlt(id: string, altText: string): Promise<void> {
  await db.mediaAsset.update({ where: { id }, data: { altText } });
  revalidatePath('/admin/media');
}
