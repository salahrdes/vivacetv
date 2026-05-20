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
  title: 'King IPTV Opiniones 2026 — Mejor Alternativa en España | VivaceTV',
  description:
    'King IPTV opiniones 2026: ¿es la mejor opción IPTV España? Comparativa King IPTV vs VivaceTV: precio, calidad, soporte. Encuentra la mejor oferta.',
  keywords: [
    'king iptv',
    'king iptv opiniones',
    'alternativa king iptv',
    'king iptv españa',
    'king iptv vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/king-iptv` },
  openGraph: {
    title: 'King IPTV Opiniones 2026 — Mejor Alternativa en España | VivaceTV',
    description:
      'Comparativa King IPTV vs VivaceTV: estabilidad, precio, calidad, soporte. Descubre por qué VivaceTV es la mejor alternativa a King IPTV en España.',
    url: `${siteConfig.url}/alternativas/king-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿King IPTV es fiable?',
    answer:
      'King IPTV es un servicio conocido por su amplio catálogo de canales, pero las valoraciones de usuarios señalan problemas de estabilidad recurrentes, especialmente durante eventos deportivos en directo. VivaceTV ofrece una estabilidad superior gracias a la tecnología AntiFreeze 10.0 y un tiempo de disponibilidad del servidor optimizado.',
  },
  {
    question: '¿King IPTV ofrece replay?',
    answer:
      'King IPTV ofrece un replay parcial según las valoraciones de usuarios. VivaceTV ofrece un replay completo en los canales disponibles, permitiendo ver los programas perdidos hasta 7 días atrás.',
  },
  {
    question: '¿Cuál es la diferencia entre King IPTV y VivaceTV?',
    answer:
      'Las principales diferencias son la estabilidad (VivaceTV usa AntiFreeze 10.0 frente a una estabilidad irregular de King IPTV), la calidad de vídeo (8K en VivaceTV vs 4K máx en King), el soporte al cliente (WhatsApp 24/7 en español en VivaceTV vs solo Telegram en King) y la disponibilidad de prueba gratuita de 24h en VivaceTV.',
  },
  {
    question: '¿Cómo pasar de King IPTV a VivaceTV?',
    answer:
      'Es sencillo y rápido: contacta con VivaceTV por WhatsApp para solicitar tu prueba gratuita de 24h. Prueba la calidad en tus dispositivos y luego elige la oferta adaptada a tu duración deseada. Tus accesos VivaceTV te serán proporcionados en menos de una hora. No se requiere ninguna configuración compleja.',
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~18.000', vivacetv: '+22.000' },
  { label: 'Calidad máxima', competitor: '4K', vivacetv: '8K ✓' },
  { label: 'Estabilidad', competitor: 'Irregular', vivacetv: '✅ AntiFreeze 10.0' },
  { label: 'Precio de entrada', competitor: '~20€/mes', vivacetv: '22,99€/3 meses ✓' },
  { label: 'Prueba gratuita', competitor: '❌', vivacetv: '✅ 24h' },
  { label: 'Soporte', competitor: 'Telegram', vivacetv: '✅ WhatsApp 24/7' },
  { label: 'Replay', competitor: 'Parcial', vivacetv: '✅ Completo' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function KingIPTVPage() {
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
          { name: 'King IPTV', href: '/alternativas/king-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="King IPTV"
          titleHighlight="Opiniones 2026 y Alternativa Recomendada"
          subtitle="¿Buscas una alternativa a King IPTV? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Qué es King IPTV?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              King IPTV es un servicio de suscripción IPTV popular en el mercado español. Ofrece un catálogo de aproximadamente 18.000 canales que cubre contenidos españoles, árabes, deportivos e internacionales. El servicio es accesible en Smart TV, Android, iOS y PC, con calidad de vídeo hasta 4K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              King IPTV es frecuentemente recomendado en las comunidades IPTV por su volumen de canales. Sin embargo, según las valoraciones de usuarios disponibles, el servicio presenta problemas de estabilidad regulares, especialmente durante eventos deportivos de gran audiencia. El soporte al cliente, disponible únicamente por Telegram, puede también carecer de reactividad.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Si buscas un servicio IPTV con mejor estabilidad, un catálogo aún más amplio y un soporte al cliente reactivo en español, VivaceTV es la mejor alternativa a King IPTV disponible en España.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>King IPTV: Ventajas e Inconvenientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>Puntos positivos</h3>
                <ul className="flex flex-col gap-3">
                  {['Amplio catálogo de aproximadamente 18.000 canales', 'Servicio popular en la comunidad IPTV', 'Compatible con los principales dispositivos'].map((pro, i) => (
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
                  {['Problemas de estabilidad reportados por los usuarios', 'Sin prueba gratuita disponible', 'Soporte solo por Telegram', 'Calidad limitada a 4K — sin 8K', 'Replay solo parcial'].map((con, i) => (
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>King IPTV vs VivaceTV — Comparativa Detallada</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-ink)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>King IPTV</th>
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
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>* Datos de King IPTV basados en información públicamente disponible y valoraciones de usuarios. A título orientativo.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Por qué VivaceTV es Mejor que King IPTV?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Aunque King IPTV ofrece un catálogo relativamente amplio (~18.000 canales), VivaceTV va aún más lejos con +22.000 canales, actualizados regularmente. La diferencia más notable se sitúa sin embargo a nivel de estabilidad: la tecnología propietaria <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de VivaceTV garantiza una emisión sin cortes incluso durante los partidos más vistos, donde King IPTV falla frecuentemente según las valoraciones de usuarios.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La calidad de vídeo es también superior en VivaceTV, que ofrece streams en 8K — una resolución ausente en la oferta King IPTV actualmente. Combinado con el replay completo (frente a un replay parcial de King), la experiencia VivaceTV es significativamente mejor.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El soporte al cliente es otro punto de diferenciación clave. VivaceTV ofrece un soporte WhatsApp 24/7 en español, con un tiempo de respuesta medio inferior a 15 minutos. King IPTV ofrece soporte únicamente por Telegram, menos inmediato y frecuentemente menos accesible para los usuarios hispanohablantes.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              En cuanto a la relación calidad/precio, la oferta Gold VivaceTV a 44,99€ por 12 meses (es decir, 3,75€/mes) está muy por debajo del coste mensual de King IPTV, que asciende a aproximadamente 20€/mes.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>¿Cómo Pasarse de King IPTV a VivaceTV?</h2>
            <div className="flex flex-col gap-4">
              {switchSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF', borderRadius: 999, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                  <p className="text-base pt-1" style={{ color: 'var(--color-ink)' }}>{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/comprar-iptv" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm" style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}>
                Ver los planes de VivaceTV →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Preguntas Frecuentes — King IPTV vs VivaceTV</h2>
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
