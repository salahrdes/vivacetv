import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Check, Info } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { blogPosts, getBlogPost, getSimilarPosts, type ContentBlock } from '@/config/blog';
import { buildWhatsAppUrl } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/ui/BlogCard';
import ShareButtons from '@/components/sections/ShareButtons';
import { ArticleSchema, BreadcrumbSchema, BlogPostFAQSchema } from '@/components/seo/JsonLd';

/* ─── Static params ─────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ─── Dynamic metadata ──────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | VivaceTV`,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(post.updatedAt ? { modifiedTime: post.updatedAt } : {}),
      ...(post.image ? { images: [{ url: `${siteConfig.url}${post.image}`, width: 1376, height: 768, alt: post.coverAlt }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(post.image ? { images: [`${siteConfig.url}${post.image}`] } : {}),
    },
  };
}

/* ─── Content block renderer ─────────────────────────────────────────────── */
function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          className="font-display font-bold text-2xl lg:text-3xl mt-10 mb-4 leading-tight"
          style={{ color: 'var(--color-ink)' }}
        >
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3
          className="font-display font-bold text-xl mt-6 mb-3 leading-tight"
          style={{ color: 'var(--color-ink)' }}
        >
          {block.text}
        </h3>
      );

    case 'p':
      return (
        <p
          className="text-base leading-relaxed mb-4"
          style={{ color: 'var(--color-ink-light)' }}
        >
          {block.text}
        </p>
      );

    case 'ul':
      return (
        <ul className="flex flex-col gap-2 mb-4 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: 'var(--color-lime)' }}
                aria-hidden="true"
              />
              <span className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="flex flex-col gap-2 mb-4 pl-1 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                {item}
              </span>
            </li>
          ))}
        </ol>
      );

    case 'info':
      return (
        <div
          className="flex gap-3 p-4 rounded-2xl my-6 text-sm leading-relaxed"
          style={{
            backgroundColor: 'rgba(199,227,107,0.08)',
            border: '1px solid rgba(199,227,107,0.25)',
            color: 'var(--color-ink-light)',
          }}
          role="note"
        >
          <Info size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-lime)' }} aria-hidden="true" />
          <span>{block.text}</span>
        </div>
      );

    case 'checklist':
      return (
        <ul
          className="flex flex-col gap-2 my-6 p-5 rounded-2xl"
          style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
          }}
        >
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: 'var(--color-lime-soft)' }}
              >
                <Check size={11} style={{ color: 'var(--color-dark)' }} aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote
          className="my-6 pl-5 py-4 rounded-r-2xl"
          style={{
            borderLeft: '3px solid var(--color-lime)',
            backgroundColor: 'var(--color-surface-alt)',
          }}
        >
          <p
            className="text-base italic leading-relaxed"
            style={{ color: 'var(--color-ink)' }}
          >
            « {block.text} »
          </p>
          {block.author && (
            <footer
              className="mt-2 text-xs font-medium"
              style={{ color: 'var(--color-gray-600)' }}
            >
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case 'cta':
      return (
        <div
          className="my-8 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundColor: 'var(--color-dark)' }}
        >
          <div>
            <p
              className="font-display font-bold text-lg"
              style={{ color: 'var(--color-surface)' }}
            >
              {block.heading}
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-gray-400)' }}>
              {block.body}
            </p>
          </div>
          <Link
            href={block.href}
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
          >
            {block.label}
          </Link>
        </div>
      );

    case 'faq':
      return (
        <div className="my-8 flex flex-col gap-3">
          <h3
            className="font-display font-bold text-xl mb-2"
            style={{ color: 'var(--color-ink)' }}
          >
            Questions fréquentes
          </h3>
          {block.items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p className="font-semibold text-sm mb-1.5" style={{ color: 'var(--color-ink)' }}>
                {item.q}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

/* ─── Read-also box (internal linking) ───────────────────────────────────── */
function ReadAlso({ posts }: { posts: { slug: string; title: string }[] }) {
  if (!posts.length) return null;
  return (
    <div
      className="my-6 p-4 rounded-2xl"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        border: '1px solid var(--color-border)',
      }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: 'var(--color-gray-600)' }}
      >
        À lire aussi
      </p>
      <ul className="flex flex-col gap-1.5">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--color-lime)' }}
            >
              → {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Formatted date ─────────────────────────────────────────────────────── */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const similar = getSimilarPosts(post.slug, 3);

  // Extract FAQ items for schema
  const faqBlocks = post.content
    ?.filter((b): b is Extract<typeof b, { type: 'faq' }> => b.type === 'faq')
    .flatMap((b) => b.items) ?? [];

  return (
    <>
      <BlogPostFAQSchema items={faqBlocks} />
      <ArticleSchema
        title={post.title}
        excerpt={post.excerpt}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        slug={post.slug}
        image={post.image}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <Header />

      <main id="main-content">

        {/* ── Article hero ───────────────────────────────────────────────── */}
        <div
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-dark)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-gray-600)' }}>
                <li><Link href="/" className="hover:underline" style={{ color: 'var(--color-gray-400)' }}>Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:underline" style={{ color: 'var(--color-gray-400)' }}>Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li style={{ color: 'var(--color-gray-600)' }} aria-current="page">{post.category}</li>
              </ol>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-gray-400)' }}>
                <Calendar size={12} aria-hidden="true" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-gray-400)' }}>
                <Clock size={12} aria-hidden="true" />
                {post.readTime} de lecture
              </span>
              <span className="text-xs" style={{ color: 'var(--color-gray-400)' }}>
                Par {post.author}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-5"
              style={{ color: 'var(--color-surface)' }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* ── Cover visual ───────────────────────────────────────────────── */}
        {post.image ? (
          <div className="w-full relative" style={{ height: '360px' }}>
            <Image
              src={post.image}
              alt={post.coverAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ) : (
          <div
            className="w-full"
            style={{ height: '220px', background: post.coverGradient }}
            role="img"
            aria-label={post.coverAlt}
          >
            <div className="w-full h-full flex items-center justify-center opacity-30" aria-hidden="true">
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="rounded-full"
                    style={{ width: 12, height: 12, backgroundColor: 'var(--color-lime)', opacity: 1 - i * 0.12 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Article body ───────────────────────────────────────────────── */}
        <div className="py-12 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {post.content ? (
              <article>
                {post.content.map((block, i) => {
                  const rendered = <RenderBlock key={i} block={block} />;
                  if (i === 3 && similar.length > 0) {
                    return [rendered, <ReadAlso key="read-also" posts={similar.slice(0, 2)} />];
                  }
                  return rendered;
                })}
              </article>
            ) : (
              /* Placeholder for posts without full content yet */
              <div
                className="p-8 rounded-2xl text-center"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <p className="text-lg font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>
                  Article complet bientôt disponible
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--color-ink-light)' }}>
                  {post.excerpt}
                </p>
                <a
                  href={buildWhatsAppUrl(`Bonjour VivaceTV, j'ai une question sur : ${post.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                >
                  Poser une question via WhatsApp
                </a>
              </div>
            )}

            {/* Back link */}
            <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:opacity-70"
                style={{ color: 'var(--color-ink-light)' }}
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Retour au blog
              </Link>
            </div>
          </div>
        </div>

        {/* ── Share buttons ──────────────────────────────────────────────── */}
        <div className="pb-4" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </div>

        {/* ── Similar posts ──────────────────────────────────────────────── */}
        {similar.length > 0 && (
          <section
            className="py-16 lg:py-24"
            style={{ backgroundColor: 'var(--color-surface-alt)' }}
            aria-labelledby="similar-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="similar-heading"
                className="font-display font-bold text-2xl mb-8"
                style={{ color: 'var(--color-ink)' }}
              >
                Articles similaires
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similar.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
