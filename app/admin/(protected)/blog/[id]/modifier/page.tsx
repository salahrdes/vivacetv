import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPost, updatePost } from '@/lib/actions/posts';
import PostForm from '@/components/admin/PostForm';

export const metadata: Metadata = { title: 'Modifier l\'article' };

export default async function ModifierArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  async function save(fd: FormData) {
    'use server';
    await updatePost(id, fd);
  }

  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog" className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-60" style={{ color: '#9B9B95' }}>
          <ArrowLeft size={14} /> Articles
        </Link>
        <span style={{ color: '#E5E5E3' }}>/</span>
        <h1 className="font-display font-bold text-xl truncate" style={{ color: '#111110' }}>{post.title}</h1>
      </div>

      <PostForm post={post} onSave={save} />
    </div>
  );
}
