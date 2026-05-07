'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Globe, FileText, Loader2 } from 'lucide-react';
import TiptapEditor from './TiptapEditor';
import SeoFields from './SeoFields';
import type { PostDetail } from '@/lib/actions/posts';

type Props = {
  post?: PostDetail;
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

export default function PostForm({ post, onSave }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [title,          setTitle]          = useState(post?.title          ?? '');
  const [slug,           setSlug]           = useState(post?.slug           ?? '');
  const [excerpt,        setExcerpt]        = useState(post?.excerpt        ?? '');
  const [content,        setContent]        = useState(post?.content        ?? '');
  const [status,         setStatus]         = useState(post?.status         ?? 'DRAFT');
  const [featuredImage,  setFeaturedImage]  = useState(post?.featuredImage  ?? '');
  const [seoTitle,       setSeoTitle]       = useState(post?.seoTitle       ?? '');
  const [seoDescription, setSeoDescription] = useState(post?.seoDescription ?? '');

  function handleSubmit(e: React.FormEvent, nextStatus?: string) {
    e.preventDefault();
    startTransition(async () => {
      const fd = new FormData();
      fd.set('title',          title);
      fd.set('slug',           slug);
      fd.set('excerpt',        excerpt);
      fd.set('content',        content);
      fd.set('status',         nextStatus ?? status);
      fd.set('featuredImage',  featuredImage);
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
          <label htmlFor="title" className="text-xs font-semibold" style={{ color: '#6B6B65' }}>
            Titre de l&apos;article *
          </label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Mon super article…"
            style={{ ...inputStyle, fontSize: 18, fontWeight: 700 }}
          />
        </div>

        {/* Excerpt */}
        <div
          className="flex flex-col gap-2 p-5 rounded-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}
        >
          <label htmlFor="excerpt" className="text-xs font-semibold" style={{ color: '#6B6B65' }}>
            Résumé (affiché sur la liste du blog)
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            placeholder="Un court résumé de l'article…"
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold px-1" style={{ color: '#6B6B65' }}>Contenu</p>
          <TiptapEditor value={content} onChange={setContent} />
          {/* Hidden input so FormData captures content */}
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

      {/* ── Right: sidebar ── */}
      <div className="w-72 shrink-0 flex flex-col gap-4">

        {/* Publish card */}
        <div
          className="flex flex-col gap-3 p-5 rounded-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}
        >
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>Publication</p>

          {/* Status */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="status" className="text-xs font-semibold" style={{ color: '#6B6B65' }}>Statut</label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              <option value="DRAFT">Brouillon</option>
              <option value="PUBLISHED">Publié</option>
              <option value="ARCHIVED">Archivé</option>
            </select>
          </div>

          {/* Actions */}
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

        {/* Featured image */}
        <div
          className="flex flex-col gap-3 p-5 rounded-xl"
          style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}
        >
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>Image à la une</p>
          <input
            name="featuredImage"
            value={featuredImage}
            onChange={(e) => setFeaturedImage(e.target.value)}
            placeholder="/uploads/mon-image.jpg"
            style={{ ...inputStyle, fontSize: 12 }}
          />
          {featuredImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={featuredImage} alt="Aperçu" className="w-full rounded-lg object-cover" style={{ height: 120 }} />
          )}
        </div>
      </div>
    </form>
  );
}
