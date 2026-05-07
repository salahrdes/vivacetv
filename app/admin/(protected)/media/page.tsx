import type { Metadata } from 'next';
import { getMedia } from '@/lib/actions/media';
import MediaGallery from '@/components/admin/MediaGallery';

export const metadata: Metadata = { title: 'Médiathèque' };

export default async function MediaPage() {
  const media = await getMedia();

  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      <div>
        <h1 className="font-display font-bold text-xl" style={{ color: '#111110' }}>Médiathèque</h1>
        <p className="text-sm mt-0.5" style={{ color: '#9B9B95' }}>
          Importez et gérez vos images. Cliquez sur une image pour copier son URL.
        </p>
      </div>
      <MediaGallery initial={media} />
    </div>
  );
}
