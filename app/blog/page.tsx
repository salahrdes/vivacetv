import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/config/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import BlogCard from '@/components/ui/BlogCard';
import Pagination from '@/components/ui/Pagination';

export const metadata: Metadata = {
  title: 'Blog IPTV France : guides, conseils et installation | ClarioTV',
  description:
    'Retrouvez les guides ClarioTV pour choisir, installer et optimiser votre abonnement IPTV France sur Smart TV, Android, iOS, PC, Fire TV et autres appareils compatibles.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Blog IPTV France : guides, conseils et installation | ClarioTV',
    description:
      'Guides, tutoriels et conseils pour votre abonnement IPTV France.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
};

const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? '1', 10));
  const totalPages = Math.ceil((blogPosts.length - 1) / POSTS_PER_PAGE); // -1 for featured

  const [featured, ...rest] = blogPosts;
  const paginated = rest.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <PageHero
          label="Guide IPTV"
          title="Blog IPTV : guides, conseils"
          titleHighlight="et installation"
          subtitle="Retrouvez nos conseils pour choisir votre abonnement IPTV France, installer vos applications et améliorer votre expérience sur tous vos appareils."
        />

        <div
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

            {/* Featured post */}
            {currentPage === 1 && featured && (
              <section aria-label="Article à la une">
                <BlogCard post={featured} featured />
              </section>
            )}

            {/* Grid */}
            <section aria-label="Articles récents">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginated.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/blog"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
