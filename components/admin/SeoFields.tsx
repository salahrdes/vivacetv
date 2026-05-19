'use client';

import { useEffect, useState } from 'react';

type Props = {
  title: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  onSlugChange: (v: string) => void;
  onSeoTitleChange: (v: string) => void;
  onSeoDescChange: (v: string) => void;
  autoSlugSource?: string; // when set, slug auto-generates from this value
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function Field({ label, id, children, hint }: { label: string; id: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-xs font-semibold" style={{ color: '#6B6B65' }}>
        {label}
      </label>
      {children}
      {hint && <p className="text-xs" style={{ color: '#C5C5C0' }}>{hint}</p>}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  backgroundColor: '#FAFAF8',
  border: '1px solid #E5E5E3',
  borderRadius: 10,
  padding: '8px 12px',
  fontSize: 13,
  color: '#111110',
  outline: 'none',
  width: '100%',
};

export default function SeoFields({
  slug, seoTitle, seoDescription,
  onSlugChange, onSeoTitleChange, onSeoDescChange,
  autoSlugSource,
}: Props) {
  const [slugLocked, setSlugLocked] = useState(!!slug);

  // Auto-generate slug from source title when not locked
  useEffect(() => {
    if (!slugLocked && autoSlugSource) {
      onSlugChange(slugify(autoSlugSource));
    }
  }, [autoSlugSource, slugLocked, onSlugChange]);

  const titleLen = seoTitle.length;
  const descLen  = seoDescription.length;

  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-xl"
      style={{ backgroundColor: '#fff', border: '1px solid #E5E5E3' }}
    >
      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>SEO &amp; URL</p>

      {/* Slug */}
      <Field label="Slug (URL)" id="slug" hint="Généré automatiquement depuis le titre. Cliquez pour modifier.">
        <div className="flex items-center gap-2">
          <span className="text-xs shrink-0" style={{ color: '#C5C5C0' }}>/</span>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => { setSlugLocked(true); onSlugChange(e.target.value); }}
            onFocus={() => setSlugLocked(true)}
            style={inputStyle}
            placeholder="mon-article"
          />
          {slugLocked && (
            <button
              type="button"
              onClick={() => setSlugLocked(false)}
              className="shrink-0 text-xs px-2 py-1 rounded-lg"
              style={{ backgroundColor: '#F2F2F0', color: '#6B6B65' }}
            >
              Auto
            </button>
          )}
        </div>
      </Field>

      {/* SEO title */}
      <Field label={`Titre SEO (${titleLen}/60)`} id="seoTitle">
        <input
          id="seoTitle"
          name="seoTitle"
          value={seoTitle}
          onChange={(e) => onSeoTitleChange(e.target.value)}
          maxLength={70}
          placeholder="Titre affiché dans les résultats Google"
          style={{ ...inputStyle, borderColor: titleLen > 60 ? '#F59E0B' : '#E5E5E3' }}
        />
      </Field>

      {/* SEO description */}
      <Field label={`Description SEO (${descLen}/160)`} id="seoDescription">
        <textarea
          id="seoDescription"
          name="seoDescription"
          value={seoDescription}
          onChange={(e) => onSeoDescChange(e.target.value)}
          maxLength={200}
          rows={3}
          placeholder="Description affichée dans les résultats Google (150-160 caractères idéal)"
          style={{ ...inputStyle, resize: 'vertical', borderColor: descLen > 160 ? '#F59E0B' : '#E5E5E3' }}
        />
      </Field>

      {/* Google preview */}
      {(seoTitle || seoDescription) && (
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: '#F8F8F6', border: '1px solid #EBEBEA' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: '#C5C5C0' }}>Aperçu Google</p>
          <p className="text-sm font-medium" style={{ color: '#1a0dab' }}>{seoTitle || '(sans titre SEO)'}</p>
          <p className="text-xs" style={{ color: '#006621' }}>vivacetv.fr/{slug || '…'}</p>
          <p className="text-xs mt-0.5" style={{ color: '#545454' }}>{seoDescription || '(sans description)'}</p>
        </div>
      )}
    </div>
  );
}
