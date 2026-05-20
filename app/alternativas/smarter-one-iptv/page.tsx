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
  title: 'Smarter One IPTV Opiniones 2026 — Mejor Alternativa | VivaceTV',
  description:
    'Smarter One IPTV opiniones 2026: comparativa con VivaceTV. Precio, catálogo, estabilidad, soporte — toma la mejor decisión para tu suscripción IPTV España.',
  keywords: [
    'smarter one iptv',
    'smarter one iptv opiniones',
    'alternativa smarter one iptv',
    'smarter one iptv españa',
    'smarter one vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/smarter-one-iptv` },
  openGraph: {
    title: 'Smarter One IPTV Opiniones 2026 — Mejor Alternativa | VivaceTV',
    description:
      'Comparativa Smarter One IPTV vs VivaceTV: catálogo, precio, contenido español, soporte. Encuentra la mejor suscripción IPTV España en 2026.',
    url: `${siteConfig.url}/alternativas/smarter-one-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Smarter One IPTV está disponible en España?',
    answer:
      'Smarter One IPTV es accesible desde España, pero está más orientado a un público internacional y multilingüe. Su catálogo de canales españoles es limitado según las valoraciones disponibles, lo que puede ser problemático para los telespectadores españoles que desean acceder a La 1, Antena 3, Canal+, Movistar+ o los canales deportivos españoles.',
  },
  {
    question: '¿Smarter One IPTV ofrece soporte en español?',
    answer:
      'Según nuestro conocimiento, Smarter One IPTV no ofrece soporte al cliente en español. VivaceTV ofrece en cambio un soporte WhatsApp 24/7 completamente en español, con agentes disponibles para ayudarte en la instalación, configuración y resolución de cualquier problema técnico.',
  },
  {
    question: '¿Cuál es el precio de Smarter One IPTV respecto a VivaceTV?',
    answer:
      'Smarter One IPTV ofrece tarifas de aproximadamente 18€ al mes según la información disponible. VivaceTV es mucho más ventajoso: la oferta Gold 12 meses a 44,99€ sale a solo 3,75€ al mes, lo que supone un ahorro considerable por un servicio de mejor calidad.',
  },
  {
    question: '¿Por qué elegir VivaceTV en lugar de Smarter One IPTV para los canales españoles?',
    answer:
      'VivaceTV ha sido diseñado específicamente para el mercado español. Su catálogo de +22.000 canales incluye todos los canales españoles gratuitos y de pago (La 1, RTVE, Antena 3, Telecinco, Cuatro, La Sexta, Canal+, DAZN, Movistar+, etc.), los canales locales y regionales, y el contenido VOD en español. El soporte es hispanohablante 24/7. Smarter One IPTV está menos bien adaptado al mercado español.',
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~14.000', vivacetv: '+22.000' },
  { label: 'Contenido español', competitor: 'Limitado', vivacetv: '✅ Completo' },
  { label: 'Calidad de vídeo', competitor: 'HD/4K', vivacetv: 'HD/4K/8K ✓' },
  { label: 'Precio', competitor: '~18€/mes', vivacetv: 'Desde 3,75€/mes (Gold) ✓' },
  { label: 'Prueba gratuita', competitor: '❌', vivacetv: '✅ 24h' },
  { label: 'Soporte en español', competitor: '❌', vivacetv: '✅ En español' },
  { label: 'Replay', competitor: '❌', vivacetv: '✅' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function SmarterOneIPTVPage() {
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
          { name: 'Smarter One IPTV', href: '/alternativas/smarter-one-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="Smarter One IPTV"
          titleHighlight="Opiniones y Mejor Alternativa"
          subtitle="¿Buscas una alternativa a Smarter One IPTV? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Qué es Smarter One IPTV?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Smarter One IPTV es un servicio de suscripción IPTV con vocación internacional, que ofrece contenido en varios idiomas. Dispone de un catálogo de aproximadamente 14.000 canales que cubren diferentes regiones del mundo, con calidad de vídeo hasta 4K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Si su oferta internacional es su principal fortaleza, Smarter One IPTV muestra sus limitaciones para los usuarios españoles: el catálogo de canales españoles es menos completo que en servicios especializados como VivaceTV, y el soporte al cliente no está disponible en español según nuestro conocimiento.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Para un usuario español que desea acceder a la totalidad de los canales del panorama audiovisual español — canales gratuitos, paquetes deportivos, canales regionales — VivaceTV es una alternativa claramente superior.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Smarter One IPTV: Ventajas e Inconvenientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>Puntos positivos</h3>
                <ul className="flex flex-col gap-3">
                  {['Contenido internacional variado en varios idiomas', 'Compatible con varios dispositivos', 'Accesible desde España'].map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>Puntos negativos</h3>
                <ul className="flex flex-col gap-3">
                  {['Poco adaptado al mercado español específicamente', 'Catálogo de canales españoles limitado', 'Sin soporte en español según nuestro conocimiento', 'Sin prueba gratuita disponible', 'Sin función replay disponible'].map((con, i) => (
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

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Smarter One IPTV vs VivaceTV — Comparativa Detallada</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Smarter One IPTV</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-lime)' }}>VivaceTV ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)', borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px 16px', color: 'var(--color-ink)', fontWeight: 500 }}>{row.label}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-ink-light)' }}>{row.competitor}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-lime)', fontWeight: 600 }}>{row.vivacetv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>* Datos de Smarter One IPTV basados en información públicamente disponible y valoraciones de usuarios. A título orientativo.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Por qué VivaceTV es Mejor que Smarter One IPTV para España?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV es un servicio IPTV pensado y optimizado para el mercado español. Su catálogo de +22.000 canales incluye la totalidad del panorama audiovisual español: TDT completa (La 1, La 2, Antena 3, Telecinco, Cuatro, La Sexta, etc.), canales de pago (Canal+, DAZN, Movistar+), canales regionales, y por supuesto una amplia selección de canales árabes e internacionales.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              A diferencia de Smarter One IPTV, cuyo catálogo español es limitado, VivaceTV ofrece también un replay completo, permitiendo ver los programas perdidos. La calidad de vídeo es también superior con streams disponibles en HD, 4K y 8K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La diferencia de precio es elocuente: ~18€ al mes por Smarter One frente a 3,75€ al mes con la oferta Gold anual de VivaceTV. En 12 meses, eso representa un ahorro de más de 170€ por un servicio de mejor calidad.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Finalmente, el soporte al cliente hispanohablante 24/7 de VivaceTV por WhatsApp es una ventaja decisiva para los usuarios españoles que prefieren ser atendidos en su idioma.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>¿Cómo Pasarse de Smarter One IPTV a VivaceTV?</h2>
            <div className="flex flex-col gap-4">
              {switchSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)', borderRadius: 999, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                  <p className="text-base pt-1" style={{ color: 'var(--color-ink)' }}>{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/comprar-iptv" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm" style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}>
                Ver los planes de VivaceTV →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Preguntas Frecuentes — Smarter One IPTV vs VivaceTV</h2>
            <div className="flex flex-col gap-4 mb-10">
              {faqItems.map((item) => (
                <div key={item.question} style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-ink)' }}>{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{item.answer}</p>
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
                <Link key={l.href} href={l.href} className="text-sm px-4 py-2 rounded-lg font-medium" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-ink)', border: '1px solid var(--color-border)' }}>
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
