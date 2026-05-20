import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, Star } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Mejor IPTV España 2026 — Comparativa de Proveedores | VivaceTV',
  description:
    '¿Cuál es el mejor IPTV en España en 2026? Comparativa completa: VivaceTV, Xenon IPTV, King IPTV, Atlas IPTV. Precios, calidad, canales y soporte. Elige el mejor proveedor IPTV España.',
  keywords: [
    'mejor iptv españa',
    'mejor iptv españa 2026',
    'mejor proveedor iptv españa',
    'comparativa iptv españa',
    'que iptv comprar españa',
    'mejores servicios iptv españa',
    'iptv recomendado españa',
    'top iptv españa',
  ],
  alternates: { canonical: `${siteConfig.url}/mejor-iptv-espana` },
  openGraph: {
    title: 'Mejor IPTV España 2026 — Comparativa de Proveedores | VivaceTV',
    description:
      'Comparativa completa del mejor IPTV en España 2026. VivaceTV, Xenon, King, Atlas — precios, canales y calidad. Elige el mejor proveedor.',
    url: `${siteConfig.url}/mejor-iptv-espana`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Cuál es el mejor proveedor IPTV en España en 2026?',
    answer:
      'Según nuestras pruebas, VivaceTV es el mejor proveedor IPTV en España en 2026 por su relación calidad/precio, su estabilidad (tecnología AntiFreeze 10.0), la riqueza de su catálogo (+22 000 canales, +160 000 películas y series en HD/4K/8K) y la reactividad de su soporte WhatsApp 24/7.',
  },
  {
    question: '¿Cómo elegir la mejor suscripción IPTV?',
    answer:
      'Evalúa cinco criterios: la estabilidad del servidor (anti-freeze, uptime), la calidad de vídeo (HD, 4K, 8K), el catálogo de canales españoles e internacionales, la compatibilidad con tus dispositivos, y el precio. Una prueba gratuita antes de comprar siempre es una buena señal.',
  },
  {
    question: '¿El mejor IPTV es necesariamente el más caro?',
    answer:
      'No. VivaceTV ofrece suscripciones desde 22,99€ por 3 meses, lo que es competitivo ofreciendo al mismo tiempo una calidad superior a servicios más costosos. El precio solo no es un indicador de calidad en el IPTV.',
  },
  {
    question: '¿Cuál es la diferencia entre un buen y un mal servicio IPTV?',
    answer:
      'Un buen servicio IPTV garantiza estabilidad del servidor con pocas o ninguna interrupción, propone actualizaciones regulares de las listas de canales, ofrece un soporte al cliente reactivo y dispone de una tecnología anti-freeze. Un mal servicio presenta cortes frecuentes, canales faltantes y ningún soporte.',
  },
  {
    question: '¿Es legal el IPTV en España?',
    answer:
      'El IPTV en sí mismo es una tecnología legal. Lo que determina la legalidad es la fuente de los contenidos emitidos. VivaceTV opera en cumplimiento de la normativa vigente. Para más información sobre la legalidad del IPTV en España, consulta nuestro artículo dedicado.',
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} estrellas sobre ${max}`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            size={16}
            style={{
              color: filled || half ? 'var(--color-lime)' : 'var(--color-border)',
              fill: filled ? 'var(--color-lime)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

const rankings = [
  {
    rank: 1,
    name: 'VivaceTV',
    subtitle: 'Mejor Relación Calidad/Precio',
    rating: 5,
    ratingLabel: '⭐⭐⭐⭐⭐',
    description:
      'La mejor opción global. +22 000 canales, HD/4K/8K, anti-freeze, precios competitivos, soporte WhatsApp 24/7. Desde 22,99€ por 3 meses.',
    link: '/comprar-iptv',
    linkLabel: 'Ver las ofertas VivaceTV',
    highlight: true,
  },
  {
    rank: 2,
    name: 'Xenon IPTV',
    subtitle: 'Servicio popular',
    rating: 3,
    ratingLabel: '⭐⭐⭐☆☆',
    description:
      'Servicio popular pero interfaz menos intuitiva. Precios similares, soporte menos reactivo. Sin prueba gratuita disponible.',
    link: '/alternativas/xenon-iptv',
    linkLabel: 'Leer nuestra opinión sobre Xenon IPTV',
    highlight: false,
  },
  {
    rank: 3,
    name: 'King IPTV',
    subtitle: 'Estabilidad irregular',
    rating: 3,
    ratingLabel: '⭐⭐⭐☆☆',
    description:
      'Buena variedad de canales, pero estabilidad irregular según los comentarios de usuarios. Soporte limitado.',
    link: '/alternativas/king-iptv',
    linkLabel: 'Leer nuestra opinión sobre King IPTV',
    highlight: false,
  },
  {
    rank: 4,
    name: 'IPTV Atlas',
    subtitle: 'Oferta correcta',
    rating: 2.5,
    ratingLabel: '⭐⭐½☆☆',
    description:
      'Oferta correcta pero catálogo menos completo. Interfaz anticuada. Adecuado para usuarios poco exigentes.',
    link: '/alternativas/iptv-atlas',
    linkLabel: 'Leer nuestra opinión sobre Atlas IPTV',
    highlight: false,
  },
  {
    rank: 5,
    name: 'Smarter One IPTV',
    subtitle: 'Mercado internacional',
    rating: 2,
    ratingLabel: '⭐⭐☆☆☆',
    description:
      'Servicio orientado a canales árabes e internacionales. Menos adaptado al mercado español.',
    link: '/alternativas/smarter-one-iptv',
    linkLabel: 'Leer nuestra opinión sobre Smarter One',
    highlight: false,
  },
];

const tableRows = [
  { critere: 'Canales disponibles', vivacetv: '+22 000', xenon: '~15 000', king: '~18 000', atlas: '~12 000' },
  { critere: 'Calidad máxima', vivacetv: '8K', xenon: '4K', king: '4K', atlas: 'HD' },
  { critere: 'Precio de entrada', vivacetv: '22,99€/3 meses', xenon: '~25€/mes', king: '~20€/mes', atlas: '~15€/mes' },
  { critere: 'Prueba gratuita', vivacetv: true, xenon: false, king: false, atlas: false },
  { critere: 'Soporte 24/7', vivacetv: 'WhatsApp', xenon: false, king: 'Limitado', atlas: false },
  { critere: 'Anti-freeze', vivacetv: true, xenon: false, king: false, atlas: false },
];

const criteria = [
  {
    num: '1',
    title: 'La estabilidad del servidor',
    body: 'La estabilidad es el criterio número uno. Un buen servicio IPTV debe garantizar un uptime del 99,9% e integrar una tecnología anti-freeze que elimine los cortes durante los picos de tráfico. VivaceTV utiliza su tecnología propietaria AntiFreeze 10.0 para ofrecer una emisión ininterrumpida, incluso durante los grandes eventos deportivos.',
  },
  {
    num: '2',
    title: 'La calidad de vídeo',
    body: 'La calidad de vídeo va de la SD a la 8K pasando por la HD y la 4K. Para una experiencia óptima en pantalla grande, prioriza un proveedor que ofrezca 4K como mínimo. VivaceTV ofrece flujos en HD, 4K y 8K en todas sus suscripciones, sin coste adicional.',
  },
  {
    num: '3',
    title: 'El número y la variedad de canales',
    body: 'Un buen catálogo IPTV debe incluir los canales españoles (La 1, Antena 3, Telecinco), los canales deportivos (DAZN, Movistar+ Deportes), los canales internacionales y un amplio catálogo de películas y series en VOD. VivaceTV propone +22 000 canales y +160 000 contenidos VOD en constante actualización.',
  },
  {
    num: '4',
    title: 'La compatibilidad de dispositivos',
    body: 'Tu servicio IPTV debe ser compatible con todos tus dispositivos: Smart TV Samsung y LG, cajas Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad y PC. VivaceTV proporciona URL M3U e identificadores Xtream Codes compatibles con todas las principales aplicaciones.',
  },
  {
    num: '5',
    title: 'La relación calidad/precio',
    body: 'Compara el coste total a 12 meses en lugar del precio mensual mostrado. Una suscripción de 12 meses a 44,99€ sale a menos de 4€/mes, muy por debajo de la mayoría de ofertas mensuales. Ten cuidado con los precios inferiores a 3€/mes que a menudo señalan un servicio poco fiable.',
  },
  {
    num: '6',
    title: 'La calidad del soporte al cliente',
    body: 'Un buen proveedor IPTV responde en menos de 30 minutos, en español, por el canal de tu elección. VivaceTV ofrece soporte WhatsApp 24/7 con un tiempo de respuesta medio inferior a 15 minutos, cubriendo la instalación, la configuración y los problemas técnicos.',
  },
];

export default function MeilleurIPTVPage() {
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
          { name: 'Mejor IPTV España 2026', href: '/mejor-iptv-espana' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="COMPARATIVA 2026"
          title="¿Cuál es la Mejor"
          titleHighlight="Suscripción IPTV en España en 2026?"
          subtitle="Hemos probado y comparado los principales servicios IPTV disponibles en España. Esta es nuestra clasificación objetiva basada en calidad, estabilidad, precio y soporte al cliente."
        />

        {/* Section 1 — Metodología */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Nuestro Método de Comparación
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Nuestra comparativa se basa en seis criterios objetivos evaluados durante pruebas
              reales: el número de canales disponibles y su actualización regular, la calidad de
              vídeo ofrecida (HD, 4K, 8K), la estabilidad de los servidores medida durante varias
              semanas, la compatibilidad con los dispositivos del mercado, la relación calidad/precio
              global a 12 meses, y finalmente la calidad del soporte al cliente probado en
              condiciones reales.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Cada servicio fue probado en un mínimo de dos dispositivos diferentes durante un
              período de 30 días, con especial atención a la estabilidad durante los eventos
              deportivos en directo — momento en que los servidores IPTV son más solicitados.
            </p>
            <div
              className="p-5 rounded-xl"
              style={{
                border: '2px solid var(--color-lime)',
                backgroundColor: 'var(--color-lime-soft)',
              }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
                Nuestra clasificación se basa en pruebas reales realizadas en Smart TV, Android,
                Firestick y PC. Actualizamos esta comparativa regularmente para reflejar la
                evolución de los servicios.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Top 5 */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Top 5 de las Mejores Suscripciones IPTV España 2026
            </h2>

            <div className="flex flex-col gap-4">
              {rankings.map((r) => (
                <div
                  key={r.rank}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: r.highlight
                      ? '2px solid var(--color-lime)'
                      : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  {r.highlight && (
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor: 'var(--color-lime)',
                        color: 'var(--color-dark)',
                      }}
                    >
                      NUESTRA ELECCIÓN N°1
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      style={{
                        backgroundColor: r.highlight ? 'var(--color-lime)' : 'var(--color-border)',
                        color: r.highlight ? 'var(--color-dark)' : 'var(--color-ink-light)',
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
                      {r.rank}
                    </span>
                    <div>
                      <h3
                        className="font-display font-bold text-xl"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {r.name} — {r.subtitle}
                      </h3>
                      <StarRating rating={r.rating} />
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--color-ink-light)' }}
                  >
                    {r.description}
                  </p>
                  <Link
                    href={r.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    {r.linkLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Tabla comparativa */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Tabla Comparativa de Servicios IPTV España
            </h2>
            <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Criterio', 'VivaceTV', 'Xenon IPTV', 'King IPTV', 'Atlas IPTV'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: h === 'VivaceTV' ? 'var(--color-lime)' : 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, idx) => (
                    <tr
                      key={row.critere}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-ink)' }}>
                        {row.critere}
                      </td>
                      {[row.vivacetv, row.xenon, row.king, row.atlas].map((val, vi) => (
                        <td key={vi} className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                          {typeof val === 'boolean' ? (
                            val ? (
                              <Check size={16} style={{ color: 'var(--color-lime)' }} />
                            ) : (
                              <X size={16} style={{ color: 'var(--color-gray-400)' }} />
                            )
                          ) : (
                            <span style={vi === 0 ? { color: 'var(--color-ink)', fontWeight: 600 } : {}}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 — Criterios */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Los Criterios para Elegir la Mejor Suscripción IPTV
            </h2>
            <div className="flex flex-col gap-6">
              {criteria.map((c) => (
                <div key={c.num}>
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {c.num}. {c.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Veredicto */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Veredicto Final: ¿Qué Suscripción IPTV Elegir en 2026?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Después de probar los principales servicios IPTV disponibles en España, nuestro
              veredicto es claro:{' '}
              <strong style={{ color: 'var(--color-ink)' }}>VivaceTV es la mejor suscripción IPTV en 2026</strong>{' '}
              para los usuarios españoles. Combina el catálogo más rico (+22 000 canales,
              +160 000 películas y series), la mejor calidad de vídeo (HD, 4K y 8K), una
              estabilidad del servidor garantizada por la tecnología AntiFreeze 10.0, y un
              soporte WhatsApp 24/7 en español que responde en menos de 15 minutos.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Las tarifas están entre las más competitivas del mercado: desde 22,99€ por 3 meses,
              es decir menos de 8€ al mes por una calidad que sus competidores tienen dificultades
              para igualar. La oferta Gold de 12 meses a 44,99€ representa la mejor relación
              calidad/duración a menos de 4€/mes.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Para los usuarios indecisos, VivaceTV ofrece una{' '}
              <strong style={{ color: 'var(--color-ink)' }}>prueba gratuita de 24 horas</strong>{' '}
              bajo simple solicitud por WhatsApp — una práctica poco habitual en la industria que
              demuestra la confianza del servicio en su propia calidad.
            </p>
            <Link
              href="/comprar-iptv"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{
                backgroundColor: 'var(--color-lime)',
                color: 'var(--color-dark)',
              }}
            >
              Ver todas las suscripciones VivaceTV →
            </Link>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — Mejor IPTV España
            </h2>
            <div className="flex flex-col gap-6">
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
                    {item.question.includes('legal') && (
                      <>
                        {' '}
                        <Link
                          href="/guia-iptv/iptv-amende"
                          className="underline"
                          style={{ color: 'var(--color-lime)' }}
                        >
                          Más información sobre la legalidad del IPTV
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/comprar-iptv', label: 'Ver las suscripciones' },
                { href: '/alternativas/xenon-iptv', label: 'Opinión Xenon IPTV' },
                { href: '/alternativas/king-iptv', label: 'Opinión King IPTV' },
                { href: '/opiniones-iptv', label: 'Opiniones clientes VivaceTV' },
                { href: '/guia-iptv/iptv-amende', label: 'IPTV legal en España' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm px-4 py-2 rounded-lg font-medium"
                  style={{
                    backgroundColor: 'var(--color-lime-soft)',
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
