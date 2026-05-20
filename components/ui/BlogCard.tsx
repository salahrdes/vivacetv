import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/config/blog';

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

/** Formatted date — e.g. "1 avril 2026" */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Decorative gradient cover used in place of a real cover image */
function CoverPlaceholder({
  gradient,
  alt,
  featured,
}: {
  gradient: string;
  alt: string;
  featured?: boolean;
}) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: gradient }}
      role="img"
      aria-label={alt}
    >
      {/* Lime dot cluster — purely decorative */}
      <div className="flex gap-2 opacity-30" aria-hidden="true">
        {Array.from({ length: featured ? 5 : 3 }).map((_, i) => (
          <span
            key={i}
            className="rounded-full"
            style={{
              width: featured ? '10px' : '8px',
              height: featured ? '10px' : '8px',
              backgroundColor: 'var(--color-lime)',
              opacity: 1 - i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** Category pill */
function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className="inline-flex text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{ backgroundColor: 'var(--color-lime-soft)', color: '#FFFFFF' }}
    >
      {category}
    </span>
  );
}

/** Standard blog grid card */
export default function BlogCard({ post, featured }: BlogCardProps) {
  if (featured) {
    return (
      <article
        className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg"
        style={{
          backgroundColor: 'var(--color-card)',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Cover — left on desktop */}
        <Link
          href={`/blog/${post.slug}`}
          className="block relative overflow-hidden"
          style={{ minHeight: '260px' }}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="absolute inset-0">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.coverAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <CoverPlaceholder gradient={post.coverGradient} alt={post.coverAlt} featured />
            )}
          </div>
        </Link>

        {/* Content — right */}
        <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
          <div className="flex items-center gap-3 flex-wrap">
            <CategoryBadge category={post.category} />
            <span
              className="inline-flex items-center gap-1 text-xs"
              style={{ color: 'var(--color-gray-600)' }}
            >
              <Clock size={12} aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <h2
            className="font-display font-bold text-2xl lg:text-3xl leading-tight"
            style={{ color: 'var(--color-ink)' }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline underline-offset-4 decoration-lime"
            >
              {post.title}
            </Link>
          </h2>

          <p
            className="text-base leading-relaxed line-clamp-3"
            style={{ color: 'var(--color-ink-light)' }}
          >
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <span
              className="inline-flex items-center gap-1 text-xs"
              style={{ color: 'var(--color-gray-600)' }}
            >
              <Calendar size={12} aria-hidden="true" />
              {formatDate(post.publishedAt)}
            </span>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150"
              style={{ color: 'var(--color-ink)' }}
            >
              Lire l'article
              <ArrowRight
                size={15}
                className="transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  /* Standard grid card */
  return (
    <article
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md"
      style={{
        backgroundColor: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
    >
      {/* Cover */}
      <Link
        href={`/blog/${post.slug}`}
        className="block relative overflow-hidden shrink-0"
        style={{ height: '160px' }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="absolute inset-0">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.coverAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <CoverPlaceholder gradient={post.coverGradient} alt={post.coverAlt} />
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <div className="flex items-center gap-2 flex-wrap">
          <CategoryBadge category={post.category} />
          <span
            className="inline-flex items-center gap-1 text-xs"
            style={{ color: 'var(--color-gray-600)' }}
          >
            <Clock size={11} aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        <h2
          className="font-display font-bold text-base leading-snug"
          style={{ color: 'var(--color-ink)' }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="hover:underline underline-offset-4 decoration-lime"
          >
            {post.title}
          </Link>
        </h2>

        <p
          className="text-sm leading-relaxed line-clamp-2 flex-1"
          style={{ color: 'var(--color-ink-light)' }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-1">
          <span
            className="text-xs"
            style={{ color: 'var(--color-gray-600)' }}
          >
            {formatDate(post.publishedAt)}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-150"
            style={{ color: 'var(--color-ink)' }}
            aria-label={`Lire l'article : ${post.title}`}
          >
            Lire
            <ArrowRight
              size={13}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
