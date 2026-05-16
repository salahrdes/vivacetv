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

        {/* Blog intro section */}
        <section
          className="py-12 lg:py-16"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-4"
              style={{ color: 'var(--color-ink)' }}
            >
              Blog IPTV France — Guides, Conseils et Actualités
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Bienvenue sur le blog ClarioTV, votre source d&apos;information sur l&apos;IPTV en France.
              Retrouvez ici nos guides d&apos;installation, nos comparatifs d&apos;applications IPTV, nos
              conseils pour optimiser votre expérience de streaming et toutes les actualités du monde
              de la télévision connectée.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Que vous soyez débutant ou utilisateur confirmé, nos articles vous aideront à tirer le
              meilleur parti de votre abonnement IPTV. De l&apos;installation sur Smart TV à la
              configuration sur Android, iOS, PC ou Firestick, nos tutoriels pas à pas vous
              accompagnent à chaque étape.
            </p>
            <h3
              className="font-display font-semibold text-xl mb-3"
              style={{ color: 'var(--color-ink)' }}
            >
              Nos catégories
            </h3>
            <ul
              className="list-disc pl-6 flex flex-col gap-2 text-base"
              style={{ color: 'var(--color-ink-light)' }}
            >
              <li><strong>Guides d&apos;installation</strong> : Comment installer IPTV sur votre appareil préféré</li>
              <li><strong>Comparatifs</strong> : Les meilleures applications IPTV du marché</li>
              <li><strong>Conseils</strong> : Résoudre les problèmes courants (coupures, buffering)</li>
              <li><strong>Actualités</strong> : Les dernières tendances IPTV en France</li>
            </ul>
          </div>
        </section>

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
