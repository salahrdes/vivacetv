'use client';

import { useState, useRef, useTransition } from 'react';
import { Upload, Trash2, Copy, Check, Loader2, Image as ImageIcon } from 'lucide-react';
import { deleteMedia, type MediaRow } from '@/lib/actions/media';
import { useRouter } from 'next/navigation';

type Props = { initial: MediaRow[] };

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaGallery({ initial }: Props) {
  const router = useRouter();
  const [assets, setAssets] = useState<MediaRow[]>(initial);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.set('file', file);
        const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
        if (res.ok) {
          const data = await res.json() as { id: string; url: string; filename: string };
          setAssets((prev) => [{
            id: data.id, url: data.url, filename: data.filename,
            mimeType: file.type, size: file.size, altText: null,
            createdAt: new Date(),
          }, ...prev]);
        }
      }
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    uploadFiles(e.dataTransfer.files);
  }

  function copyUrl(id: string, url: string) {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  function handleDelete(id: string) {
    if (!window.confirm('Supprimer ce fichier ?')) return;
    setDeletingId(id);
    startTransition(async () => {
      await deleteMedia(id);
      setAssets((prev) => prev.filter((a) => a.id !== id));
      setDeletingId(null);
      router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Upload zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-3 py-12 rounded-2xl cursor-pointer transition-all"
        style={{
          border: `2px dashed ${dragOver ? 'var(--color-lime)' : '#D5D5D3'}`,
          backgroundColor: dragOver ? 'rgba(199,227,107,0.05)' : '#FAFAF8',
        }}
        role="button"
        aria-label="Déposer des fichiers ici ou cliquer pour parcourir"
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => uploadFiles(e.target.files)}
        />
        {uploading ? (
          <Loader2 size={28} className="animate-spin" style={{ color: 'var(--color-lime)' }} />
        ) : (
          <Upload size={28} style={{ color: dragOver ? 'var(--color-lime)' : '#C5C5C0' }} />
        )}
        <div className="text-center">
          <p className="text-sm font-semibold" style={{ color: '#6B6B65' }}>
            {uploading ? 'Upload en cours…' : 'Glissez-déposez vos images ici'}
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#C5C5C0' }}>
            ou cliquez pour parcourir — JPG, PNG, WebP, GIF, SVG (max 10 MB)
          </p>
        </div>
      </div>

      {/* Count */}
      {assets.length > 0 && (
        <p className="text-sm" style={{ color: '#9B9B95' }}>
          {assets.length} fichier{assets.length > 1 ? 's' : ''}
        </p>
      )}

      {/* Grid */}
      {assets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
          <ImageIcon size={32} style={{ color: '#E5E5E3' }} />
          <p className="text-sm" style={{ color: '#C5C5C0' }}>Aucun fichier uploadé pour l&apos;instant.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="group relative flex flex-col rounded-xl overflow-hidden"
              style={{ border: '1px solid #E5E5E3', backgroundColor: '#fff', opacity: deletingId === asset.id ? 0.4 : 1 }}
            >
              {/* Thumbnail */}
              <div className="relative bg-gray-50" style={{ height: 140 }}>
                {asset.mimeType.startsWith('image/') ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={asset.url}
                    alt={asset.altText ?? asset.filename}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={32} style={{ color: '#C5C5C0' }} />
                  </div>
                )}

                {/* Hover actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => copyUrl(asset.id, asset.url)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/90"
                    title="Copier l'URL"
                  >
                    {copiedId === asset.id ? <Check size={14} style={{ color: '#22C55E' }} /> : <Copy size={14} style={{ color: '#111110' }} />}
                  </button>
                  <button
                    onClick={() => handleDelete(asset.id)}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/90"
                    title="Supprimer"
                  >
                    <Trash2 size={14} style={{ color: '#EF4444' }} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="px-2.5 py-2">
                <p className="text-xs font-medium truncate" style={{ color: '#111110' }}>{asset.filename}</p>
                <p className="text-xs" style={{ color: '#C5C5C0' }}>{formatBytes(asset.size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
