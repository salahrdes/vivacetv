'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Globe, FileText, Loader2 } from 'lucide-react';
import TiptapEditor from './TiptapEditor';
import SeoFields from './SeoFields';
import type { PageDetail } from '@/lib/actions/pages';

type Props = {
  page?: PageDetail;
  onSave: (formData: FormData) => Promise<void>;
};

const inputStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  border: '1px solid #E5E5E3',
  borderRadius: 10,
  padding: '8px 12px',
  fontSize: 14,
  color: '#111110',
  outline: 'none',
  width: '100%',
};

export default function PageForm({ page, onSave }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [title,          setTitle]          = useState(page?.title          ?? '');
  const [slug,           setSlug]           = useState(page?.slug           ?? '');
  const [content,        setContent]        = useState(page?.content        ?? '');
  const [status,         setStatus]         = useState(page?.status         ?? 'DRAFT');
  const [seoTitle,       setSeoTitle]       = useState(page?.seoTitle       ?? '');
  const [seoDescription, setSeoDescription] = useState(page?.seoDescription ?? '');

  function handleSubmit(e: React.FormEvent, nextStatus?: string) {
    e.preventDefault();
    startTransition(async () => {
      const fd = new FormData();
      fd.set('title',          title);
      fd.set('slug',           slug);
      fd.set('content',        content);
      fd.set('status',         nextStatus ?? status);
      fd.set('seoTitle',       seoTitle);
      fd.set('seoDescription', seoDescription);
      await onSave(fd);
      router.refresh();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-6 items-start">
      {/* ── Left: main content ── */}
      <div className="flex-1 min-w-0 flex flex-col gap-5">
        {/* Title */}
        <div
          className="flex flex-col gap-2 p-5 rounded-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}
        >
          <label htmlFor="page-title" className="text-xs font-semibold" style={{ color: '#6B6B65' }}>
            Titre de la page *
          </label>
          <input
            id="page-title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Ma page…"
            style={{ ...inputStyle, fontSize: 18, fontWeight: 700 }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold px-1" style={{ color: '#6B6B65' }}>Contenu</p>
          <TiptapEditor value={content} onChange={setContent} />
          <input type="hidden" name="content" value={content} />
        </div>

        {/* SEO */}
        <SeoFields
          title={title}
          slug={slug}
          seoTitle={seoTitle}
          seoDescription={seoDescription}
          onSlugChange={setSlug}
          onSeoTitleChange={setSeoTitle}
          onSeoDescChange={setSeoDescription}
          autoSlugSource={title}
        />
      </div>

      {/* ── Right sidebar ── */}
      <div className="w-72 shrink-0 flex flex-col gap-4">
        <div
          className="flex flex-col gap-3 p-5 rounded-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}
        >
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>Publication</p>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="page-status" className="text-xs font-semibold" style={{ color: '#6B6B65' }}>Statut</label>
            <select
              id="page-status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              <option value="DRAFT">Brouillon</option>
              <option value="PUBLISHED">Publiée</option>
              <option value="ARCHIVED">Archivée</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: 'var(--color-lime)', color: '#111110' }}
            >
              {isPending ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              Enregistrer
            </button>
            {status !== 'PUBLISHED' && (
              <button
                type="button"
                disabled={isPending}
                onClick={(e) => handleSubmit(e as unknown as React.FormEvent, 'PUBLISHED')}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: '#111110', color: '#fff' }}
              >
                <Globe size={14} />
                Publier
              </button>
            )}
            {status === 'PUBLISHED' && (
              <button
                type="button"
                disabled={isPending}
                onClick={(e) => handleSubmit(e as unknown as React.FormEvent, 'DRAFT')}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: '#F4F4F2', color: '#6B6B65' }}
              >
                <FileText size={14} />
                Dépublier
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
