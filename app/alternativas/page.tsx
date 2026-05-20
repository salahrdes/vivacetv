import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Alternativas IPTV España 2026 — Comparativa de los Mejores Servicios | VivaceTV',
  description:
    'Compara VivaceTV con las principales alternativas IPTV: Xenon, King, Atlas, Smarter One, IPTV AZ, AtlasPro, IPTV Hottest, Televizo. Encuentra el mejor servicio IPTV en España.',
  keywords: [
    'alternativas iptv españa',
    'comparativa iptv 2026',
    'mejor iptv españa',
    'xenon iptv alternativa',
    'king iptv alternativa',
    'atlas iptv alternativa',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas` },
  openGraph: {
    title: 'Alternativas IPTV España 2026 — Comparativa de los Mejores Servicios | VivaceTV',
    description:
      'Compara VivaceTV con las principales alternativas IPTV disponibles en España. Encuentra el servicio mejor adaptado a tus necesidades.',
    url: `${siteConfig.url}/alternativas`,
    type: 'website',
  },
};

const competitors = [
  {
    name: 'Xenon IPTV',
    slug: 'xenon-iptv',
    description: 'Servicio popular con un amplio catálogo de canales internacionales, presente en el mercado español.',
    tag: '1 900 búsquedas/mes',
  },
  {
    name: 'King IPTV',
    slug: 'king-iptv',
    description: 'Proveedor conocido por su importante volumen de canales disponibles.',
    tag: '1 300 búsquedas/mes',
  },
  {
    name: 'IPTV Atlas',
    slug: 'iptv-atlas',
    description: 'Servicio orientado al contenido árabe e internacional, presente en el mercado español.',
    tag: '1 300 búsquedas/mes',
  },
  {
    name: 'Smarter One IPTV',
    slug: 'smarter-one-iptv',
    description: 'Oferta internacional multilingüe con diversas opciones de contenido.',
    tag: '1 300 búsquedas/mes',
  },
  {
    name: 'IPTV AZ',
    slug: 'iptv-az',
    description: 'Servicio disponible en España a precio variable, compatible con varios dispositivos.',
    tag: '1 300 búsquedas/mes',
  },
  {
    name: 'AtlasPro IPTV',
    slug: 'atlaspro-iptv',
    description: 'Proveedor especializado en contenido árabe premium y canales MENA.',
    tag: '480 búsquedas/mes',
  },
  {
    name: 'IPTV Hottest',
    slug: 'iptv-hottest',
    description: 'Servicio IPTV disponible en el mercado español, poco conocido entre los consumidores.',
    tag: '880 búsquedas/mes',
  },
  {
    name: 'Televizo',
    slug: 'televizo',
    description: 'Aplicación reproductora IPTV para Android — requiere una suscripción separada.',
    tag: '390 búsquedas/mes',
  },
];

const whyVivaceTV = [
  'Más de 22 000 canales españoles e internacionales constantemente actualizados',
  'Calidad de vídeo HD, 4K y 8K — la mejor del mercado IPTV España',
  'Prueba gratuita 24h bajo simple solicitud por WhatsApp — sin compromiso',
  'Soporte al cliente WhatsApp 24/7 en español, respuesta en menos de 15 minutos',
];

const faqItems = [
  {
    question: '¿Cuál es la mejor alternativa IPTV en España en 2026?',
    answer:
      'VivaceTV es considerado la mejor alternativa a otros servicios IPTV en España. Ofrece un catálogo de +22 000 canales, calidad hasta 8K, la tecnología AntiFreeze 10.0 para una emisión sin cortes, y un soporte WhatsApp 24/7 reactivo. Su prueba gratuita de 24h permite probar antes de comprometerse.',
  },
  {
    question: '¿Cómo elegir entre los diferentes servicios IPTV disponibles en España?',
    answer:
      'Para elegir tu servicio IPTV, evalúa estos cinco criterios: la estabilidad del servidor (anti-freeze, uptime), el número y la variedad de canales, la calidad de vídeo ofrecida (HD, 4K, 8K), la reactividad del soporte al cliente, y la relación calidad/precio a 12 meses. La disponibilidad de una prueba gratuita es una buena señal de confianza del proveedor.',
  },
  {
    question: '¿Las alternativas IPTV son tan buenas como VivaceTV?',
    answer:
      'Según los comentarios de usuarios, la mayoría de las alternativas IPTV presentan carencias frente a VivaceTV: catálogo más limitado, estabilidad variable, ausencia de prueba gratuita o soporte al cliente poco reactivo. VivaceTV se distingue especialmente por su tecnología AntiFreeze 10.0 y su soporte WhatsApp en español disponible 24h/24.',
  },
];

export default function AlternativesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((i) => ({
              '@type': 'Question',
              name: i.question,
              acceptedAnswer: { '@type': 'Answer', text: i.answer },
            })),
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Alternativas IPTV', href: '/alternativas' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="COMPARATIVA IPTV"
          title="Alternativas IPTV España —"
          titleHighlight="Comparativa 2026"
          subtitle="¿Buscas la mejor alternativa IPTV en España? Compara VivaceTV con los principales servicios disponibles y toma la mejor decisión."
        />

        {/* Intro + Grid */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El mercado IPTV en España está animado por numerosos proveedores, cada uno con sus
              fortalezas y debilidades. Xenon IPTV, King IPTV, IPTV Atlas, Smarter One, IPTV AZ,
              AtlasPro, IPTV Hottest y Televizo están entre los servicios más buscados por los
              usuarios españoles. Pero, ¿cuál ofrece realmente la mejor experiencia?
            </p>
            <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--color-ink-light)' }}>
              Hemos comparado cada servicio con VivaceTV en los criterios que realmente importan:
              estabilidad, calidad de vídeo, catálogo, soporte al cliente y relación calidad/precio.
              Selecciona un servicio a continuación para acceder a nuestra comparativa detallada.
            </p>

            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comparativa por Servicio IPTV
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competitors.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/alternativas/${comp.slug}`}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                    display: 'block',
                    transition: 'border-color 0.2s',
                    textDecoration: 'none',
                  }}
                  className="group hover:border-[var(--color-lime)]"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {comp.name}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: 'rgba(199,227,107,0.12)',
                        color: 'var(--color-lime)',
                        fontSize: 11,
                      }}
                    >
                      {comp.tag}
                    </span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-ink-light)' }}>
                    {comp.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    Ver la comparativa <ChevronRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Por qué VivaceTV es la Mejor Alternativa IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Después de comparar todos los servicios disponibles en el mercado español, VivaceTV
              se destaca en todos los criterios esenciales. Esto es lo que marca la diferencia:
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {whyVivaceTV.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    size={20}
                    style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }}
                  />
                  <span className="text-base" style={{ color: 'var(--color-ink)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Ver las suscripciones VivaceTV →
              </Link>
              <Link
                href="/mejor-iptv-espana"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: 'var(--color-card)',
                  color: 'var(--color-ink)',
                  border: '1px solid var(--color-border)',
                }}
              >
                Comparativa completa 2026 →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — Alternativas IPTV España
            </h2>
            <div className="flex flex-col gap-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
