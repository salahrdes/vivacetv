import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AtlasPro IPTV Opiniones 2026 — Mejor Alternativa | VivaceTV',
  description:
    'AtlasPro IPTV opiniones 2026: ¿es el proveedor IPTV adecuado para España? Comparativa AtlasPro vs VivaceTV — precio, canales, calidad y soporte.',
  keywords: [
    'atlaspro iptv',
    'atlaspro iptv opiniones',
    'alternativa atlaspro iptv',
    'atlaspro iptv españa',
    'atlaspro vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/atlaspro-iptv` },
  openGraph: {
    title: 'AtlasPro IPTV Opiniones 2026 — Mejor Alternativa | VivaceTV',
    description:
      'Comparativa AtlasPro IPTV vs VivaceTV: precio, canales, calidad, soporte. Encuentra la mejor suscripción IPTV España en 2026.',
    url: `${siteConfig.url}/alternativas/atlaspro-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿AtlasPro IPTV es bueno para los canales españoles?',
    answer:
      'AtlasPro IPTV es principalmente conocido por su contenido árabe y MENA. Su catálogo de canales españoles es limitado según las valoraciones disponibles. VivaceTV ofrece un catálogo completo de canales españoles (+22.000 canales en total), incluyendo todos los canales de TDT, paquetes deportivos y canales regionales.',
  },
  {
    question: '¿Cuál es la diferencia entre AtlasPro IPTV e IPTV Atlas?',
    answer:
      'AtlasPro IPTV e IPTV Atlas son dos servicios distintos. AtlasPro IPTV se posiciona en el segmento premium con énfasis en contenido árabe de alta gama. IPTV Atlas es un servicio más generalista. Ambos son diferentes de VivaceTV, que está especializado para el mercado español con un catálogo completo de canales españoles e internacionales.',
  },
  {
    question: '¿AtlasPro IPTV ofrece prueba gratuita?',
    answer:
      'AtlasPro IPTV no ofrece prueba gratuita según nuestro conocimiento. VivaceTV ofrece una prueba gratuita de 24 horas bajo simple solicitud por WhatsApp, lo que permite verificar la compatibilidad con tus dispositivos y la calidad de los canales que te interesan antes de comprometerte.',
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~13.000', vivacetv: '+22.000' },
  { label: 'Contenido árabe', competitor: '✅', vivacetv: '✅ ✓' },
  { label: 'Contenido español', competitor: 'Limitado', vivacetv: '✅ Completo ✓' },
  { label: 'Calidad máxima', competitor: 'HD/4K', vivacetv: 'HD/4K/8K ✓' },
  { label: 'Precio', competitor: '~22€/mes', vivacetv: 'Desde 3,75€/mes ✓' },
  { label: 'Prueba gratuita', competitor: '❌', vivacetv: '✅ 24h' },
  { label: 'Soporte', competitor: 'Limitado', vivacetv: '✅ WhatsApp 24/7' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function AtlasProIPTVPage() {
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
          { name: 'AtlasPro IPTV', href: '/alternativas/atlaspro-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="AtlasPro IPTV"
          titleHighlight="Opiniones y Mejor Alternativa"
          subtitle="¿Buscas una alternativa a AtlasPro IPTV? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        {/* Sección 1 — Presentación */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es AtlasPro IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              AtlasPro IPTV es un servicio de suscripción IPTV especializado en contenido árabe
              premium y canales de la región MENA (Oriente Medio y Norte de África). Ofrece un
              catálogo de aproximadamente 13.000 canales con calidad de vídeo hasta 4K y es
              compatible con los principales dispositivos del mercado.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              AtlasPro IPTV se distingue de IPTV Atlas por su posicionamiento más premium y su
              énfasis en la calidad del contenido arabófono. Sin embargo, para los usuarios
              españoles que desean acceder a un catálogo completo de canales españoles, su oferta
              resulta más limitada.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              A ~22€ al mes según la información disponible, AtlasPro IPTV es también
              considerablemente más caro que VivaceTV, que ofrece tarifas desde 3,75€ al mes con
              una oferta anual y un catálogo mucho más amplio.
            </p>
          </div>
        </section>

        {/* Sección 2 — Ventajas e inconvenientes */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              AtlasPro IPTV: Ventajas e Inconvenientes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>
                  Puntos positivos
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Reconocido por la calidad del contenido árabe',
                    'Catálogo de canales MENA amplio',
                    'Calidad 4K en canales premium',
                  ].map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>
                  Puntos negativos
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Catálogo de canales españoles limitado',
                    'Sin prueba gratuita conocida',
                    'Soporte al cliente limitado',
                    'Sin calidad 8K disponible',
                    'Precio elevado (~22€/mes) para el servicio ofrecido',
                  ].map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X size={16} style={{ color: 'var(--color-gray-400)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3 — Tabla comparativa */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              AtlasPro IPTV vs VivaceTV — Comparativa Detallada
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>AtlasPro IPTV</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-lime)' }}>VivaceTV ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <td style={{ padding: '10px 16px', color: 'var(--color-ink)', fontWeight: 500 }}>{row.label}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-ink-light)' }}>{row.competitor}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-lime)', fontWeight: 600 }}>{row.vivacetv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>
              * Datos de AtlasPro IPTV basados en información públicamente disponible y valoraciones de usuarios. A título orientativo.
            </p>
          </div>
        </section>

        {/* Sección 4 — Por qué VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Por qué VivaceTV es Mejor que AtlasPro IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV ofrece un catálogo mucho más amplio que AtlasPro IPTV (+22.000 canales
              frente a ~13.000), con cobertura completa de ambos mercados: contenido árabe y MENA,
              pero también la totalidad de los canales españoles. Para los usuarios hispano-árabes,
              VivaceTV es la elección evidente.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La diferencia de precio es también determinante: ~22€ al mes por AtlasPro frente a
              3,75€ al mes con la oferta Gold anual de VivaceTV. En un año, eso supone un ahorro de
              más de 220€ por un servicio de mejor calidad.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La calidad de vídeo es también superior en VivaceTV, con streams disponibles en 8K —
              una resolución ausente en AtlasPro IPTV. La tecnología AntiFreeze 10.0 garantiza además
              una estabilidad superior durante los eventos en directo.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              A diferencia de AtlasPro IPTV, VivaceTV ofrece una prueba gratuita de 24 horas bajo
              simple solicitud por WhatsApp. Es la ocasión ideal para verificar la calidad de los
              canales árabes y españoles que te interesan antes de comprometerte.
            </p>
          </div>
        </section>

        {/* Sección 5 — Cómo cambiar */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Cómo Pasarse de AtlasPro IPTV a VivaceTV?
            </h2>
            <div className="flex flex-col gap-4">
              {switchSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    style={{
                      backgroundColor: 'var(--color-lime)',
                      color: 'var(--color-dark)',
                      borderRadius: 999,
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-base pt-1" style={{ color: 'var(--color-ink)' }}>{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Ver los planes de VivaceTV →
              </Link>
            </div>
          </div>
        </section>

        {/* Sección 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — AtlasPro IPTV vs VivaceTV
            </h2>
            <div className="flex flex-col gap-4 mb-10">
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
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-ink)' }}>
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/alternativas', label: 'Todas las alternativas IPTV' },
                { href: '/mejor-iptv-espana', label: 'Mejor IPTV España 2026' },
                { href: '/comprar-iptv', label: 'Suscripciones VivaceTV' },
                { href: '/opiniones-iptv', label: 'Opiniones clientes VivaceTV' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm px-4 py-2 rounded-lg font-medium"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    color: 'var(--color-ink)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {l.label} →
                </Link>
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
