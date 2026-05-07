'use server';

import { db } from '@/lib/db';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { ContentStatus } from '@/lib/generated/prisma/client';

export type PostRow = {
  id: string;
  title: string;
  slug: string;
  status: string;
  author: string;
  publishedAt: Date | null;
  updatedAt: Date;
};

export type PostDetail = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  status: string;
  featuredImage: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  publishedAt: Date | null;
};

/** List all posts for the admin table */
export async function getPosts(): Promise<PostRow[]> {
  const posts = await db.post.findMany({
    orderBy: { updatedAt: 'desc' },
    select: {
      id: true, title: true, slug: true, status: true,
      publishedAt: true, updatedAt: true,
      author: { select: { name: true } },
    },
  });
  return posts.map((p) => ({ ...p, author: p.author.name }));
}

/** Single post for the edit form */
export async function getPost(id: string): Promise<PostDetail | null> {
  return db.post.findUnique({
    where: { id },
    select: {
      id: true, title: true, slug: true, excerpt: true, content: true,
      status: true, featuredImage: true, seoTitle: true, seoDescription: true,
      publishedAt: true,
    },
  });
}

/** Create a new post and redirect to its edit page */
export async function createPost(formData: FormData): Promise<void> {
  const session = await auth();
  if (!session?.user?.id) redirect('/admin/login');

  const title   = (formData.get('title')          as string).trim();
  const slug    = (formData.get('slug')           as string).trim();
  const excerpt = (formData.get('excerpt')        as string | null)?.trim() ?? null;
  const content = (formData.get('content')        as string) ?? '';
  const status  = ((formData.get('status') as string) ?? 'DRAFT') as ContentStatus;
  const seoTitle       = (formData.get('seoTitle')       as string | null)?.trim() ?? null;
  const seoDescription = (formData.get('seoDescription') as string | null)?.trim() ?? null;
  const featuredImage  = (formData.get('featuredImage')  as string | null)?.trim() ?? null;

  const post = await db.post.create({
    data: {
      title, slug, excerpt, content, status,
      seoTitle, seoDescription, featuredImage,
      authorId: session.user.id,
      publishedAt: status === 'PUBLISHED' ? new Date() : null,
    },
  });

  revalidatePath('/admin/blog');
  redirect(`/admin/blog/${post.id}/modifier`);
}

/** Update an existing post */
export async function updatePost(id: string, formData: FormData): Promise<void> {
  const session = await auth();
  if (!session?.user?.id) redirect('/admin/login');

  const title   = (formData.get('title')   as string).trim();
  const slug    = (formData.get('slug')    as string).trim();
  const excerpt = (formData.get('excerpt') as string | null)?.trim() ?? null;
  const content = (formData.get('content') as string) ?? '';
  const status  = ((formData.get('status') as string) ?? 'DRAFT') as ContentStatus;
  const seoTitle       = (formData.get('seoTitle')       as string | null)?.trim() ?? null;
  const seoDescription = (formData.get('seoDescription') as string | null)?.trim() ?? null;
  const featuredImage  = (formData.get('featuredImage')  as string | null)?.trim() ?? null;

  const existing = await db.post.findUnique({ where: { id }, select: { publishedAt: true, status: true } });
  const publishedAt =
    status === 'PUBLISHED' && existing?.status !== 'PUBLISHED'
      ? new Date()
      : existing?.publishedAt ?? null;

  await db.post.update({
    where: { id },
    data: { title, slug, excerpt, content, status, seoTitle, seoDescription, featuredImage, publishedAt },
  });

  revalidatePath('/admin/blog');
  revalidatePath(`/admin/blog/${id}/modifier`);
}

/** Delete a post */
export async function deletePost(id: string): Promise<void> {
  await db.post.delete({ where: { id } });
  revalidatePath('/admin/blog');
}
