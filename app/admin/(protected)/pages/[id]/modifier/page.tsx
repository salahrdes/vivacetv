import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPage, updatePage } from '@/lib/actions/pages';
import PageForm from '@/components/admin/PageForm';

export const metadata: Metadata = { title: 'Modifier la page' };

export default async function ModifierPagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = await getPage(id);
  if (!page) notFound();

  async function save(fd: FormData) {
    'use server';
    await updatePage(id, fd);
  }

  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/pages" className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-60" style={{ color: '#9B9B95' }}>
          <ArrowLeft size={14} /> Pages
        </Link>
        <span style={{ color: '#E5E5E3' }}>/</span>
        <h1 className="font-display font-bold text-xl truncate" style={{ color: '#111110' }}>{page.title}</h1>
      </div>
      <PageForm page={page} onSave={save} />
    </div>
  );
}
