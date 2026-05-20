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
  title: 'IPTV Atlas Opiniones 2026 — Mejor Alternativa en España | VivaceTV',
  description:
    'IPTV Atlas opiniones 2026: comparativa completa con VivaceTV. Precio, canales, estabilidad, soporte — ¿quién ofrece la mejor suscripción IPTV España? Nuestro veredicto.',
  keywords: [
    'iptv atlas',
    'iptv atlas opiniones',
    'alternativa iptv atlas',
    'atlas iptv españa',
    'iptv atlas vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/iptv-atlas` },
  openGraph: {
    title: 'IPTV Atlas Opiniones 2026 — Mejor Alternativa en España | VivaceTV',
    description:
      'Comparativa IPTV Atlas vs VivaceTV: precio, canales, calidad, soporte. Encuentra la mejor suscripción IPTV España en 2026.',
    url: `${siteConfig.url}/alternativas/iptv-atlas`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿IPTV Atlas es fiable para ver canales españoles?',
    answer:
      'IPTV Atlas está más orientado hacia contenidos árabes e internacionales. Las valoraciones de usuarios sugieren que su catálogo de canales españoles es menos completo que el de VivaceTV. Para una experiencia óptima en España, VivaceTV ofrece +22.000 canales con la totalidad de los canales españoles gratuitos y de pago.',
  },
  {
    question: '¿Cuál es la diferencia entre IPTV Atlas y AtlasPro IPTV?',
    answer:
      'IPTV Atlas y AtlasPro IPTV son dos servicios distintos, aunque sus nombres puedan confundir. IPTV Atlas es un servicio generalista, mientras que AtlasPro IPTV se posiciona más en el segmento premium del contenido árabe. VivaceTV es una alternativa superior a ambos para los usuarios españoles.',
  },
  {
    question: '¿IPTV Atlas ofrece prueba gratuita?',
    answer:
      'Según nuestro conocimiento, IPTV Atlas no ofrece prueba gratuita. VivaceTV ofrece en cambio una prueba gratuita de 24 horas bajo simple solicitud por WhatsApp, sin compromiso ni tarjeta bancaria requerida.',
  },
  {
    question: '¿Por qué elegir VivaceTV en lugar de IPTV Atlas?',
    answer:
      'VivaceTV supera a IPTV Atlas en todos los criterios esenciales: catálogo más amplio (+22.000 vs ~12.000 canales), calidad de vídeo superior (8K vs HD/4K), interfaz moderna, precio más ventajoso a 12 meses (3,75€/mes con la oferta Gold), prueba gratuita de 24h y soporte WhatsApp 24/7 en español.',
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~12.000', vivacetv: '+22.000' },
  { label: 'Calidad máxima', competitor: 'HD/4K', vivacetv: '8K ✓' },
  { label: 'Interfaz', competitor: 'Desactualizada', vivacetv: 'Moderna ✓' },
  { label: 'Precio', competitor: '~20€/mes', vivacetv: '3,75€/mes (Gold anual) ✓' },
  { label: 'Prueba gratuita', competitor: '❌', vivacetv: '✅' },
  { label: 'Soporte', competitor: 'Solo email', vivacetv: '✅ WhatsApp 24/7' },
  { label: 'Anti-freeze', competitor: 'No especificado', vivacetv: '✅' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function IPTVAtlasPage() {
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
          { name: 'IPTV Atlas', href: '/alternativas/iptv-atlas' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="IPTV Atlas"
          titleHighlight="Opiniones y Comparativa con VivaceTV"
          subtitle="¿Buscas una alternativa a IPTV Atlas? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        {/* Sección 1 — Presentación */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es IPTV Atlas?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV Atlas es un servicio de suscripción IPTV disponible en el mercado español,
              principalmente orientado hacia contenidos árabes e internacionales. Ofrece un
              catálogo de aproximadamente 12.000 canales con calidad de vídeo hasta 4K en los
              mejores canales.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El servicio es compatible con los principales dispositivos (Smart TV, Android, iOS,
              PC), pero su interfaz se considera desactualizada respecto a los estándares actuales.
              Los usuarios hispanohablantes señalan también que el soporte al cliente —disponible
              únicamente por email según nuestro conocimiento— puede ser lento.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              A tener en cuenta: no hay que confundir IPTV Atlas con AtlasPro IPTV, que es un
              servicio distinto. Ambos servicios comparten orientación hacia el contenido árabe,
              pero ofrecen propuestas diferentes.
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
              IPTV Atlas: Ventajas e Inconvenientes
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
                    'Marca conocida en la comunidad IPTV',
                    'Buena variedad de contenidos árabes y MENA',
                    'Compatible con los principales dispositivos',
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
                    'Interfaz desactualizada, poco intuitiva',
                    'Sin calidad 8K disponible',
                    'Sin prueba gratuita conocida',
                    'Soporte solo por email (lento)',
                    'Catálogo de canales españoles menos completo',
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
              IPTV Atlas vs VivaceTV — Comparativa Detallada
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-ink)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>IPTV Atlas</th>
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
              * Datos de IPTV Atlas basados en información públicamente disponible y valoraciones de usuarios. A título orientativo.
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
              ¿Por qué VivaceTV es Mejor que IPTV Atlas?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV ofrece un catálogo casi dos veces más amplio que IPTV Atlas con más de
              22.000 canales, incluyendo la totalidad de los canales españoles (La 1, Antena 3,
              Telecinco, Cuatro, La Sexta, Canal+, DAZN, Movistar+, etc.) pero también una amplia
              selección de canales árabes e internacionales.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La interfaz de VivaceTV es moderna e intuitiva, optimizada para todas las
              resoluciones de pantalla. A diferencia de la interfaz desactualizada de IPTV Atlas,
              VivaceTV ofrece una experiencia de usuario cuidada en Smart TV, Android, iOS y PC.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En el plano económico, la diferencia es significativa. A ~20€ al mes por IPTV Atlas
              frente a 3,75€ al mes por VivaceTV (oferta Gold 12 meses a 44,99€), la elección es
              evidente en términos de relación calidad/precio.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              El soporte al cliente de VivaceTV está disponible 24/7 por WhatsApp en español —
              una ventaja considerable respecto al soporte solo por email de IPTV Atlas, que puede
              generar demoras importantes.
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
              ¿Cómo Pasarse de IPTV Atlas a VivaceTV?
            </h2>
            <div className="flex flex-col gap-4">
              {switchSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    style={{
                      backgroundColor: 'var(--color-lime)',
                      color: '#FFFFFF',
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
                style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
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
              Preguntas Frecuentes — IPTV Atlas vs VivaceTV
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
