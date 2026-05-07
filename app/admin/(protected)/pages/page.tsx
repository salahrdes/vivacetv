import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { getPages, deletePage } from '@/lib/actions/pages';
import PagesTable from '@/components/admin/PagesTable';

export const metadata: Metadata = { title: 'Pages' };

export default async function PagesAdminPage() {
  const pages = await getPages();

  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-xl" style={{ color: '#111110' }}>Pages</h1>
          <p className="text-sm mt-0.5" style={{ color: '#9B9B95' }}>
            {pages.length} page{pages.length !== 1 ? 's' : ''} au total
          </p>
        </div>
        <Link
          href="/admin/pages/nouveau"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
        >
          <Plus size={15} />
          Nouvelle page
        </Link>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}>
        <PagesTable rows={pages} onDelete={deletePage} />
      </div>
    </div>
  );
}
