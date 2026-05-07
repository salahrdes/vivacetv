import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { createPage } from '@/lib/actions/pages';
import PageForm from '@/components/admin/PageForm';

export const metadata: Metadata = { title: 'Nouvelle page' };

export default function NouvellePage() {
  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/pages" className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-60" style={{ color: '#9B9B95' }}>
          <ArrowLeft size={14} /> Pages
        </Link>
        <span style={{ color: '#E5E5E3' }}>/</span>
        <h1 className="font-display font-bold text-xl" style={{ color: '#111110' }}>Nouvelle page</h1>
      </div>
      <PageForm onSave={createPage} />
    </div>
  );
}
