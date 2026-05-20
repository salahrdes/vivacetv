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
  title: 'IPTV Hottest Opiniones 2026 — Mejor Alternativa España | VivaceTV',
  description:
    'IPTV Hottest opiniones 2026: comparativa con VivaceTV para tu suscripción IPTV España. Calidad, precio, estabilidad — nuestro análisis completo.',
  keywords: [
    'iptv hottest',
    'iptv hottest opiniones',
    'alternativa iptv hottest',
    'iptv hottest españa',
    'iptv hottest vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/iptv-hottest` },
  openGraph: {
    title: 'IPTV Hottest Opiniones 2026 — Mejor Alternativa España | VivaceTV',
    description:
      'Comparativa IPTV Hottest vs VivaceTV: calidad, precio, estabilidad, soporte. Encuentra la mejor suscripción IPTV España en 2026.',
    url: `${siteConfig.url}/alternativas/iptv-hottest`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿IPTV Hottest está disponible en España?',
    answer:
      'IPTV Hottest está presente en el mercado español, pero la información disponible sobre este servicio es limitada. Su catálogo sería de aproximadamente 10.000 canales con calidad HD/4K. VivaceTV ofrece un servicio mejor documentado con +22.000 canales, calidad hasta 8K y una prueba gratuita de 24h para probar antes de comprometerse.',
  },
  {
    question: '¿IPTV Hottest es fiable?',
    answer:
      'La información sobre la fiabilidad de IPTV Hottest es limitada. Las valoraciones de usuarios disponibles no permiten establecer un juicio definitivo sobre su estabilidad. Para un servicio cuya fiabilidad está documentada y garantizada, VivaceTV ofrece la tecnología AntiFreeze 10.0 y un uptime de servidor optimizado.',
  },
  {
    question: '¿Cuál es la mejor alternativa a IPTV Hottest?',
    answer:
      'VivaceTV es la mejor alternativa a IPTV Hottest en España. Ofrece un catálogo de +22.000 canales (frente a ~10.000 de IPTV Hottest), calidad hasta 8K, precios transparentes desde 22,99€ por 3 meses, prueba gratuita de 24h y soporte WhatsApp 24/7 en español.',
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~10.000', vivacetv: '+22.000' },
  { label: 'Calidad de vídeo', competitor: 'HD/4K', vivacetv: 'HD/4K/8K ✓' },
  { label: 'Precio', competitor: 'Variable', vivacetv: 'Transparente ✓' },
  { label: 'Prueba gratuita', competitor: 'No conocida', vivacetv: '✅ 24h' },
  { label: 'Soporte', competitor: 'Limitado', vivacetv: '✅ WhatsApp 24/7' },
  { label: 'Anti-freeze', competitor: 'No especificado', vivacetv: '✅' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function IPTVHottestPage() {
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
          { name: 'IPTV Hottest', href: '/alternativas/iptv-hottest' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="IPTV Hottest"
          titleHighlight="Opiniones y Comparativa VivaceTV"
          subtitle="¿Buscas una alternativa a IPTV Hottest? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Qué es IPTV Hottest?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV Hottest es un servicio de suscripción IPTV disponible en el mercado español. Relativamente poco documentado comparado con servicios más consolidados, ofrece un catálogo de aproximadamente 10.000 canales con calidad de vídeo hasta 4K. Su compatibilidad con los dispositivos habituales (Smart TV, Android, iOS) está asegurada, pero hay pocos detalles disponibles sobre sus funcionalidades avanzadas.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La información sobre IPTV Hottest sigue siendo limitada en las valoraciones de usuarios disponibles. Su tarificación se presenta como variable, y su soporte al cliente parece limitado según los testimonios disponibles en línea. La ausencia de prueba gratuita conocida representa también un freno para los nuevos usuarios que desean probar la calidad antes de comprometerse.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Frente a la falta de transparencia de IPTV Hottest, VivaceTV destaca por una oferta clara, documentada y contrastada en el mercado español desde hace varios años.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>IPTV Hottest: Lo que Sabemos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>Puntos positivos</h3>
                <ul className="flex flex-col gap-3">
                  {['Accesible desde España', 'Calidad HD disponible en los canales principales', 'Compatible con los dispositivos habituales'].map((pro, i) => (
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
                  {['Catálogo limitado (~10.000 canales)', 'Información pública muy limitada', 'Tarificación variable poco transparente', 'Soporte al cliente limitado según las valoraciones', 'Sin prueba gratuita conocida'].map((con, i) => (
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>IPTV Hottest vs VivaceTV — Comparativa</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-ink)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>IPTV Hottest</th>
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
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>* Datos de IPTV Hottest basados en información públicamente disponible. Algunos datos no son conocidos a fecha de hoy. A título orientativo.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Por qué Elegir VivaceTV en lugar de IPTV Hottest?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La transparencia es la primera razón para elegir VivaceTV. A diferencia de IPTV Hottest, cuya información pública es limitada, VivaceTV muestra claramente su catálogo (+22.000 canales), su tarificación (Bronze 22,99€, Silver 34,99€, Gold 44,99€, Diamond 74,99€) y sus funcionalidades (8K, AntiFreeze 10.0, replay, soporte WhatsApp 24/7).
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Con más del doble de canales disponibles (+22.000 vs ~10.000) y una calidad de vídeo superior (hasta 8K frente a HD/4K para IPTV Hottest), VivaceTV ofrece una experiencia IPTV significativamente más rica.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La tecnología <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de VivaceTV garantiza una estabilidad documentada y contrastada, donde IPTV Hottest no especifica sus soluciones técnicas para evitar los cortes.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Finalmente, VivaceTV ofrece una prueba gratuita de 24 horas bajo simple solicitud por WhatsApp — una garantía de calidad que IPTV Hottest no parece ofrecer. Es la mejor manera de formarte tu propia opinión antes de comprometerte.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Pasarse a VivaceTV en 5 Pasos</h2>
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Preguntas Frecuentes — IPTV Hottest</h2>
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
