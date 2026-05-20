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
  title: 'Xenon IPTV Opiniones 2026 — Mejor Alternativa en España | VivaceTV',
  description:
    'Xenon IPTV opiniones 2026: ¿es la mejor opción para tu IPTV España? Comparativa Xenon vs VivaceTV: precio, calidad, estabilidad, soporte. Nuestro veredicto.',
  keywords: [
    'xenon iptv',
    'xenon iptv opiniones',
    'alternativa xenon iptv',
    'xenon iptv españa',
    'xenon iptv vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/xenon-iptv` },
  openGraph: {
    title: 'Xenon IPTV Opiniones 2026 — Mejor Alternativa en España | VivaceTV',
    description:
      'Comparativa Xenon IPTV vs VivaceTV: precio, calidad, estabilidad, soporte. Descubre por qué VivaceTV es la mejor alternativa a Xenon IPTV en España.',
    url: `${siteConfig.url}/alternativas/xenon-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Xenon IPTV es fiable?',
    answer:
      'Xenon IPTV es un servicio conocido en el mercado español, pero las valoraciones de usuarios señalan irregularidades de estabilidad y un soporte al cliente limitado. VivaceTV ofrece mejor estabilidad gracias a su tecnología AntiFreeze 10.0 y un soporte WhatsApp 24/7.',
  },
  {
    question: '¿Cuál es la mejor alternativa a Xenon IPTV en España?',
    answer:
      "VivaceTV es considerada la mejor alternativa a Xenon IPTV en España. Ofrece un catálogo más amplio (+22.000 canales vs ~15.000), calidad superior (hasta 8K), prueba gratuita de 24h y soporte WhatsApp reactivo 24/7.",
  },
  {
    question: '¿Xenon IPTV ofrece prueba gratuita?',
    answer:
      "No, Xenon IPTV no ofrece prueba gratuita según nuestro conocimiento. VivaceTV ofrece una prueba gratuita de 24 horas bajo simple solicitud por WhatsApp — ideal para evaluar la calidad antes de comprometerte.",
  },
  {
    question: '¿Cómo pasar de Xenon IPTV a VivaceTV?',
    answer:
      "Es sencillo: contacta con VivaceTV por WhatsApp para solicitar tu prueba gratuita de 24h, prueba en tu dispositivo, luego elige tu plan. Tus accesos VivaceTV se activan en menos de una hora. No se requiere ninguna configuración compleja.",
  },
];

const tableRows = [
  { label: 'Canales disponibles', competitor: '~15.000', vivacetv: '+22.000' },
  { label: 'Calidad máxima', competitor: '4K', vivacetv: '8K ✓' },
  { label: 'Precio de entrada', competitor: '~25€/mes', vivacetv: '22,99€/3 meses ✓' },
  { label: 'Prueba gratuita', competitor: '❌', vivacetv: '✅ 24h' },
  { label: 'Soporte 24/7', competitor: 'Limitado', vivacetv: '✅ WhatsApp' },
  { label: 'Anti-freeze', competitor: '❌', vivacetv: '✅' },
  { label: 'Actualización catálogo', competitor: 'Irregular', vivacetv: '✅ Regular' },
];

const switchSteps = [
  'Solicita tu prueba gratis de 24h de VivaceTV por WhatsApp',
  'Prueba la calidad en tu dispositivo',
  'Elige tu plan (Bronze, Silver, Gold o Diamond)',
  'Recibe tus accesos en menos de 1h',
  'Disfruta de VivaceTV sin cortes',
];

export default function XenonIPTVPage() {
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
          { name: 'Xenon IPTV', href: '/alternativas/xenon-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVA IPTV"
          title="Xenon IPTV"
          titleHighlight="Opiniones 2026 y Mejor Alternativa"
          subtitle="¿Buscas una alternativa a Xenon IPTV? Descubre por qué VivaceTV es la mejor opción para tu suscripción IPTV España."
        />

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Qué es Xenon IPTV?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Xenon IPTV es un servicio de suscripción IPTV presente en el mercado español desde hace algunos años. Ofrece un catálogo de canales españoles e internacionales, accesible en Smart TV, Android, iOS y PC. Según la información disponible, contaría con aproximadamente 15.000 canales con calidad de vídeo hasta 4K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El servicio es relativamente popular en España, especialmente gracias a su presencia en las comunidades IPTV hispanohablantes. Sin embargo, como muchos servicios IPTV, las valoraciones de usuarios son dispares, en particular en lo que respecta a la estabilidad durante los eventos deportivos en directo y la reactividad del soporte al cliente.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Si buscas una alternativa a Xenon IPTV con mejor rendimiento y un soporte más reactivo, esta comparativa te ayudará a tomar la mejor decisión.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Xenon IPTV: Ventajas e Inconvenientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>Puntos positivos</h3>
                <ul className="flex flex-col gap-3">
                  {['Base de usuarios importante en España', 'Servicio popular en la comunidad IPTV', 'Calidad HD correcta en los canales principales'].map((pro, i) => (
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
                  {['Sin prueba gratuita disponible según nuestro conocimiento', 'Soporte al cliente limitado según las valoraciones de usuarios', 'Calidad 8K ausente — máximo 4K', 'Precio mensual más elevado que VivaceTV a largo plazo', 'Actualizaciones de catálogo irregulares señaladas'].map((con, i) => (
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Xenon IPTV vs VivaceTV — Comparativa Detallada</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-ink)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Criterio</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Xenon IPTV</th>
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
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>* Datos de Xenon IPTV basados en información públicamente disponible y valoraciones de usuarios. A título orientativo.</p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Por qué VivaceTV es Mejor que Xenon IPTV?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV ha sido diseñado específicamente para el mercado español, con un catálogo optimizado para los telespectadores hispanohablantes. A diferencia de Xenon IPTV, VivaceTV ofrece más de 22.000 canales actualizados regularmente, incluyendo todos los canales españoles gratuitos y de pago, los paquetes deportivos y un amplio catálogo VOD.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La tecnología propietaria <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de VivaceTV garantiza una emisión sin cortes incluso durante los picos de tráfico — partidos de fútbol, finales deportivas — donde otros servicios presentan inestabilidades según las valoraciones de usuarios.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En cuanto al precio, la oferta Gold de 12 meses de VivaceTV a 44,99€ sale a menos de 3,75€ al mes — muy por debajo del coste mensual de Xenon IPTV. Y a diferencia de Xenon, VivaceTV ofrece una <strong style={{ color: 'var(--color-ink)' }}>prueba gratuita de 24 horas</strong> que permite probar la calidad antes de cualquier compromiso.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Finalmente, el soporte al cliente de VivaceTV está disponible 24h/24 por WhatsApp en español, con un tiempo de respuesta medio inferior a 15 minutos. Un nivel de servicio que Xenon IPTV no parece ofrecer según la información disponible.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>¿Cómo Pasarse de Xenon IPTV a VivaceTV?</h2>
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Preguntas Frecuentes — Xenon IPTV vs VivaceTV</h2>
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
