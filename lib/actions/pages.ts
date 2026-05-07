'use server';

import { db } from '@/lib/db';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { ContentStatus } from '@/lib/generated/prisma/client';

export type PageRow = {
  id: string;
  title: string;
  slug: string;
  status: string;
  author: string;
  updatedAt: Date;
};

export type PageDetail = {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: string;
  seoTitle: string | null;
  seoDescription: string | null;
  publishedAt: Date | null;
};

export async function getPages(): Promise<PageRow[]> {
  const pages = await db.page.findMany({
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true, title: true, slug: true, status: true, updatedAt: true,
      author: { select: { name: true } },
    },
  });
  return pages.map((p) => ({ ...p, author: p.author.name }));
}

export async function getPage(id: string): Promise<PageDetail | null> {
  return db.page.findUnique({
    where: { id },
    select: {
      id: true, title: true, slug: true, content: true,
      status: true, seoTitle: true, seoDescription: true, publishedAt: true,
    },
  });
}

export async function createPage(formData: FormData): Promise<void> {
  const session = await auth();
  if (!session?.user?.id) redirect('/admin/login');

  const title   = (formData.get('title')   as string).trim();
  const slug    = (formData.get('slug')    as string).trim();
  const content = (formData.get('content') as string) ?? '';
  const status  = ((formData.get('status') as string) ?? 'DRAFT') as ContentStatus;
  const seoTitle       = (formData.get('seoTitle')       as string | null)?.trim() ?? null;
  const seoDescription = (formData.get('seoDescription') as string | null)?.trim() ?? null;

  const page = await db.page.create({
    data: {
      title, slug, content, status, seoTitle, seoDescription,
      authorId: session.user.id,
      publishedAt: status === 'PUBLISHED' ? new Date() : null,
    },
  });

  revalidatePath('/admin/pages');
  redirect(`/admin/pages/${page.id}/modifier`);
}

export async function updatePage(id: string, formData: FormData): Promise<void> {
  const session = await auth();
  if (!session?.user?.id) redirect('/admin/login');

  const title   = (formData.get('title')   as string).trim();
  const slug    = (formData.get('slug')    as string).trim();
  const content = (formData.get('content') as string) ?? '';
  const status  = ((formData.get('status') as string) ?? 'DRAFT') as ContentStatus;
  const seoTitle       = (formData.get('seoTitle')       as string | null)?.trim() ?? null;
  const seoDescription = (formData.get('seoDescription') as string | null)?.trim() ?? null;

  const existing = await db.page.findUnique({ where: { id }, select: { publishedAt: true, status: true } });
  const publishedAt =
    status === 'PUBLISHED' && existing?.status !== 'PUBLISHED'
      ? new Date()
      : existing?.publishedAt ?? null;

  await db.page.update({
    where: { id },
    data: { title, slug, content, status, seoTitle, seoDescription, publishedAt },
  });

  revalidatePath('/admin/pages');
  revalidatePath(`/admin/pages/${id}/modifier`);
}

export async function deletePage(id: string): Promise<void> {
  await db.page.delete({ where: { id } });
  revalidatePath('/admin/pages');
}
