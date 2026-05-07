import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { createPost } from '@/lib/actions/posts';
import PostForm from '@/components/admin/PostForm';

export const metadata: Metadata = { title: 'Nouvel article' };

export default function NouvelArticlePage() {
  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/blog" className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-60" style={{ color: '#9B9B95' }}>
          <ArrowLeft size={14} /> Articles
        </Link>
        <span style={{ color: '#E5E5E3' }}>/</span>
        <h1 className="font-display font-bold text-xl" style={{ color: '#111110' }}>Nouvel article</h1>
      </div>

      <PostForm onSave={createPost} />
    </div>
  );
}
