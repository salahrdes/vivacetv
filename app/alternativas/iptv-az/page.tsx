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
  title: 'IPTV AZ Opiniones 2026 — Mejor Alternativa IPTV España | VivaceTV',
  description:
    'IPTV AZ opiniones 2026: nuestra comparativa completa con VivaceTV. Estabilidad, precio, catálogo, soporte — ¿a quién elegir para tu suscripción IPTV España?',
  keywords: [
    'iptv az',
    'iptv az opiniones',
    'alternativa iptv az',
    'iptv az españa',
    'iptv az vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/iptv-az` },
  openGraph: {
    title: 'IPTV AZ Opiniones 2026 — Mejor Alternativa IPTV España | VivaceTV',
    description:
      'Comparativa IPTV AZ vs VivaceTV: estabilidad, precio, catálogo, soporte. Encuentra la mejor suscripción IPTV España en 2026.',
    url: `${siteConfig.url}/alternativas/iptv-az`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿IPTV AZ está disponible en España?',
    answer:
      'IPTV AZ está disponible en España, pero sus valoraciones de usuarios son variables. El servicio ofrece un catálogo de aproximadamente 10.000 canales y admite varios dispositivos. Para una experiencia más estable y un catálogo más amplio, VivaceTV sigue siendo la opción recomendada con +22.000 canales y la tecnología AntiFreeze 10.0.',
  },
  {
    question: '¿IPTV AZ es más barato que VivaceTV?',
    answer:
      'IPTV AZ muestra precios variables según las ofertas disponibles, lo que dificulta la comparación. VivaceTV ofrece precios transparentes y competitivos: desde 22,99€ por 3 meses (oferta Bronze) hasta 44,99€ por 12 meses (oferta Gold), es decir, menos de 3,75€ al mes — una de las mejores relaciones calidad/precio del mercado.',
  },
  {
    question: '¿IPTV AZ ofrece prueba gratuita?',
    answer:
      'IPTV AZ no ofrece prueba gratuita según nuestro conocimiento. VivaceTV ofrece una prueba gratuita de 24 horas bajo simple solicitud por WhatsApp, sin compromiso y sin tarjeta bancaria requerida.',
  },
  {
    question: '¿Cómo migrar de IPTV AZ a VivaceTV?',
    answer:
      'La migración es sencilla: contacta con VivaceTV por WhatsApp para obtener tu prueba gratuita de 24h. Prueba el servicio en tus dispositivos, luego elige la oferta adaptada a tu uso. Tus credenciales VivaceTV (URL M3U o Xtream Codes) te serán comunicadas en menos de una hora.',
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~10.000', vivacetv: '+22.000' },
  { label: 'Calidad de vídeo', competitor: 'HD/4K', vivacetv: 'HD/4K/8K ✓' },
  { label: 'Precio', competitor: 'Variable', vivacetv: 'Transparente desde 22,99€ ✓' },
  { label: 'Prueba gratuita', competitor: '❌', vivacetv: '✅ 24h' },
  { label: 'Soporte', competitor: 'Limitado', vivacetv: '✅ WhatsApp 24/7' },
  { label: 'Estabilidad', competitor: 'Variable', vivacetv: '✅ AntiFreeze 10.0' },
  { label: 'Actualización catálogo', competitor: 'No regular', vivacetv: '✅ Regular' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function IPTVAZPage() {
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
          { name: 'IPTV AZ', href: '/alternativas/iptv-az' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="IPTV AZ"
          titleHighlight="Opiniones y Mejor Alternativa España"
          subtitle="¿Buscas una alternativa a IPTV AZ? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        {/* Sección 1 — Presentación */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>
              ¿Qué es IPTV AZ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV AZ es un servicio de suscripción IPTV disponible en el mercado español. Ofrece
              un catálogo de aproximadamente 10.000 canales que cubre contenidos españoles, árabes
              e internacionales. El servicio es compatible con varios dispositivos, incluyendo
              Smart TV, cajas Android, iOS y PC.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Los usuarios aprecian su compatibilidad multidispositivo, pero señalan una estabilidad
              variable según los períodos y una tarificación poco transparente. El soporte al
              cliente también se presenta como limitado en las valoraciones disponibles en línea.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Si buscas un servicio IPTV más estable, con un catálogo más amplio y un soporte al
              cliente reactivo en español, VivaceTV es la mejor alternativa a IPTV AZ disponible
              en el mercado español en 2026.
            </p>
          </div>
        </section>

        {/* Sección 2 — Ventajas e inconvenientes */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>
              IPTV AZ: Ventajas e Inconvenientes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>Puntos positivos</h3>
                <ul className="flex flex-col gap-3">
                  {['Disponible en España', 'Compatible con varios dispositivos simultáneamente', 'Contenido variado español e internacional'].map((pro, i) => (
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
                  {['Catálogo limitado (~10.000 canales)', 'Tarificación variable y poco transparente', 'Soporte al cliente limitado según las valoraciones', 'Estabilidad variable según los períodos', 'Sin prueba gratuita conocida'].map((con, i) => (
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>
              IPTV AZ vs VivaceTV — Comparativa Detallada
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>IPTV AZ</th>
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
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>* Datos de IPTV AZ basados en información públicamente disponible y valoraciones de usuarios. A título orientativo.</p>
          </div>
        </section>

        {/* Sección 4 — Por qué VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>
              ¿Por qué VivaceTV es Mejor que IPTV AZ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV ofrece más del doble de canales que IPTV AZ: +22.000 frente a ~10.000. Este
              catálogo incluye todos los canales españoles (gratuitos y de pago), los canales
              deportivos premium, los canales árabes e internacionales, así como un catálogo VOD
              de +160.000 películas y series en HD, 4K y 8K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La transparencia de precios es otro punto fuerte de VivaceTV. A diferencia de la
              tarificación variable de IPTV AZ, VivaceTV muestra precios claros sin sorpresas:
              Bronze (22,99€/3 meses), Silver (34,99€/6 meses), Gold (44,99€/12 meses) y Diamond
              (74,99€/24 meses). Sin cargos ocultos, sin subidas imprevistas.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En cuanto a la estabilidad, la tecnología <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de
              VivaceTV garantiza una emisión fluida en todas las circunstancias — donde IPTV AZ
              puede presentar interrupciones según las valoraciones de usuarios.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Finalmente, el soporte WhatsApp 24/7 de VivaceTV responde en menos de 15 minutos en
              español — un nivel de servicio que supera ampliamente lo que ofrece IPTV AZ según
              nuestro conocimiento.
            </p>
          </div>
        </section>

        {/* Sección 5 — Cómo cambiar */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>
              ¿Cómo Pasarse de IPTV AZ a VivaceTV?
            </h2>
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

        {/* Sección 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>
              Preguntas Frecuentes — IPTV AZ vs VivaceTV
            </h2>
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
