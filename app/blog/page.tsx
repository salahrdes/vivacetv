import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/config/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import BlogCard from '@/components/ui/BlogCard';
import Pagination from '@/components/ui/Pagination';

export const metadata: Metadata = {
  title: 'Blog IPTV España : guías, consejos e instalación | VivaceTV',
  description:
    'Encuentra las guías VivaceTV para elegir, instalar y optimizar tu suscripción IPTV España en Smart TV, Android, iOS, PC, Fire TV y otros dispositivos compatibles.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: 'Blog IPTV España : guías, consejos e instalación | VivaceTV',
    description:
      'Guías, tutoriales y consejos para tu suscripción IPTV España.',
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
          label="Guía IPTV"
          title="Blog IPTV : guías, consejos"
          titleHighlight="e instalación"
          subtitle="Encontrad nuestros consejos para elegir vuestra suscripción IPTV España, instalar vuestras aplicaciones y mejorar vuestra experiencia en todos vuestros dispositivos."
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
              Blog IPTV España — Guías, Consejos y Novedades
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Bienvenido al blog VivaceTV, vuestra fuente de información sobre IPTV en España.
              Aquí encontraréis nuestras guías de instalación, comparativas de aplicaciones IPTV,
              consejos para optimizar vuestra experiencia de streaming y todas las novedades del mundo
              de la televisión conectada.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Tanto si sois principiantes como usuarios experimentados, nuestros artículos os ayudarán
              a sacar el máximo partido de vuestra suscripción IPTV. Desde la instalación en Smart TV
              hasta la configuración en Android, iOS, PC o Firestick, nuestros tutoriales paso a paso
              os acompañan en cada etapa.
            </p>
            <h3
              className="font-display font-semibold text-xl mb-3"
              style={{ color: 'var(--color-ink)' }}
            >
              Nuestras categorías
            </h3>
            <ul
              className="list-disc pl-6 flex flex-col gap-2 text-base"
              style={{ color: 'var(--color-ink-light)' }}
            >
              <li><strong>Guías de instalación</strong>: Cómo instalar IPTV en vuestro dispositivo favorito</li>
              <li><strong>Comparativas</strong>: Las mejores aplicaciones IPTV del mercado</li>
              <li><strong>Consejos</strong>: Resolver los problemas más habituales (cortes, buffering)</li>
              <li><strong>Novedades</strong>: Las últimas tendencias IPTV en España</li>
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
              <section aria-label="Artículo destacado">
                <BlogCard post={featured} featured />
              </section>
            )}

            {/* Grid */}
            <section aria-label="Artículos recientes">
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
