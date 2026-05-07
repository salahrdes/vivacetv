import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPreviews } from '@/config/blog-preview';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';

export default function BlogPreviewSection() {
  return (
    <section
      id="guides"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="guides-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeader
            label="Guides & ressources"
            title="Guides IPTV pour bien démarrer"
            description="Retrouvez nos conseils pour installer, configurer et optimiser votre abonnement IPTV sur vos appareils."
            align="left"
            className="flex-1"
          />
          <Link
            href="/guide-iptv"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold transition-colors duration-150 hover:opacity-70"
            style={{ color: 'var(--color-ink)' }}
          >
            Voir le guide IPTV
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPreviews.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Placeholder image area */}
              <div
                className="h-36 flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-lime-soft)' }}
                aria-hidden="true"
              >
                <div
                  className="w-12 h-12 rounded-xl"
                  style={{ backgroundColor: 'var(--color-lime)', opacity: 0.7 }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="lime-soft" className="text-xs">{post.category}</Badge>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: 'var(--color-gray-400)' }}
                  >
                    <Clock size={11} aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="font-display font-bold text-base leading-snug group-hover:underline"
                  style={{ color: 'var(--color-ink)' }}
                >
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-sm font-semibold mt-auto transition-opacity hover:opacity-70"
                  style={{ color: 'var(--color-ink)' }}
                  aria-label={`Lire : ${post.title}`}
                >
                  Lire la suite
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
