import type { Metadata } from 'next';
import { Check, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Suscripción IPTV Premium España — HD, 4K y 8K Ultra | VivaceTV',
  description:
    'Disfruta de la suscripción IPTV premium VivaceTV: +22.000 canales en HD, 4K y 8K, +160.000 películas y series, estabilidad 99,9%. Activación rápida por WhatsApp desde 22,99€.',
  keywords: [
    'premium iptv',
    'suscripción iptv premium',
    'iptv hd 4k 8k',
    'mejor iptv españa',
    'iptv calidad premium',
  ],
  alternates: { canonical: `${siteConfig.url}/comprar-iptv/premium` },
  openGraph: {
    title: 'Suscripción IPTV Premium España — HD, 4K y 8K Ultra | VivaceTV',
    description:
      'Suscripción IPTV premium VivaceTV: +22.000 canales HD/4K/8K, +160.000 películas y series, estabilidad 99,9%. Desde 22,99€ por WhatsApp.',
    url: `${siteConfig.url}/comprar-iptv/premium`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Qué diferencia una suscripción IPTV premium de una básica?',
    answer:
      'Una suscripción IPTV premium ofrece una calidad de imagen superior (HD, 4K, 8K), una biblioteca de contenido más amplia, mejor estabilidad del servidor y soporte al cliente prioritario. En VivaceTV, incluso nuestra oferta de entrada incluye calidad 4K, pero las suscripciones largas (Gold y Diamond) ofrecen acceso a +160.000 películas y series frente a +60.000 del Bronze.',
  },
  {
    question: '¿La suscripción IPTV premium VivaceTV es compatible con mi Smart TV?',
    answer:
      'Sí, VivaceTV es compatible con todas las Smart TV (Samsung, LG, Philips, Sony), los decodificadores Android TV, Fire TV Stick, Apple TV, así como PC Windows/Mac, iPhone e iPad. No se requiere ningún hardware específico.',
  },
  {
    question: '¿Cuántas conexiones simultáneas incluye la suscripción premium?',
    answer:
      'Cada suscripción VivaceTV incluye 1 conexión simultánea. Si queréis usar IPTV en varios dispositivos al mismo tiempo, ofrecemos soluciones adaptadas — contactad con nuestro equipo por WhatsApp.',
  },
  {
    question: '¿Qué conexión a internet necesito para disfrutar de la calidad 4K?',
    answer:
      'Para una experiencia IPTV en 4K óptima, recomendamos una conexión a internet de al menos 25 Mbps. Para HD, 10 Mbps son suficientes. La fibra óptica garantiza la mejor estabilidad.',
  },
  {
    question: '¿Puedo probar la suscripción premium antes de comprometerme?',
    answer:
      'Sí, VivaceTV ofrece una prueba gratuita de 24 horas. Contactad con nuestro equipo por WhatsApp para beneficiaros de ella y evaluar la calidad en vuestro dispositivo antes de comprar.',
  },
];

const plans = [
  {
    id: 'bronze',
    label: 'Bronze',
    duration: '3 meses',
    price: '22,99€',
    original: '39,99€',
    discount: '-43%',
    featured: false,
    href: '/pedir/bronze',
  },
  {
    id: 'silver',
    label: 'Silver',
    duration: '6 meses',
    price: '34,99€',
    original: '54,99€',
    discount: '-36%',
    featured: false,
    href: '/pedir/silver',
  },
  {
    id: 'gold',
    label: 'Gold',
    sublabel: 'El Más Popular',
    duration: '12 meses',
    price: '44,99€',
    original: '64,99€',
    discount: '-31%',
    featured: true,
    href: '/pedir/gold',
  },
  {
    id: 'diamond',
    label: 'Diamond',
    duration: '24 meses',
    price: '74,99€',
    original: '89,99€',
    discount: '-17%',
    featured: false,
    href: '/pedir/diamond',
  },
];

const testimonials = [
  {
    name: 'Karim B.',
    location: 'Madrid',
    text: 'He probado varios servicios IPTV antes de VivaceTV. La diferencia es abismal: cero cortes desde hace 8 meses, imagen en 4K impecable en mi LG OLED. El soporte responde en pocos minutos por WhatsApp. Realmente premium.',
  },
  {
    name: 'Nathalie D.',
    location: 'Barcelona',
    text: 'Lo que me convenció fue la calidad en 8K en mi televisor Samsung. Los canales españoles, árabes y deportivos están todos, en HD perfecta. La suscripción Gold merece totalmente su precio para todo un año.',
  },
  {
    name: 'Sébastien M.',
    location: 'Valencia',
    text: 'Tras dos años con un operador clásico, nunca volvería atrás. +22.000 canales incluyendo todos los DAZN, Movistar+ y canales extranjeros. La tecnología AntiFreeze marca la diferencia durante los partidos.',
  },
];

const allFeatures = [
  '+22.000 canales españoles e internacionales',
  '+160.000 películas y series (Gold y Diamond)',
  'Calidad SD, HD, 4K y 8K Ultra',
  'Tecnología AntiFreeze 10.0',
  'TV Replay — ve en diferido',
  'Asistencia 24/7 por WhatsApp',
  'Activación en menos de una hora',
  'Compatible Smart TV, Android, iOS, PC, Fire TV, Apple TV',
];

export default function AbonnementPremiumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Comprar IPTV', href: '/comprar-iptv' },
          { name: 'Premium', href: '/comprar-iptv/premium' },
        ]}
      />
      <Header />
      <main id="main-content">
        <PageHero
          label="IPTV PREMIUM"
          title="Suscripción IPTV Premium"
          titleHighlight="HD, 4K y 8K Sin Cortes"
          subtitle="La mejor calidad de imagen, la mayor biblioteca de contenidos, una estabilidad de servidor inigualable — VivaceTV Premium, el IPTV sin compromisos."
        />

        {/* ── Section 1 : Qué es una suscripción IPTV premium ─────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section1-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section1-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es una Suscripción IPTV Premium?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Una suscripción IPTV premium es mucho más que un simple acceso a canales de televisión. Es una
              experiencia de visualización completa, sin compromisos de calidad de imagen ni de estabilidad. En
              VivaceTV, nuestra oferta premium se basa en servidores de alto rendimiento, una tecnología antifreeze
              exclusiva y una colosal biblioteca de contenidos. Adiós a los cortes en pleno partido, a las
              pixelaciones en el momento más intenso de una película — nuestra infraestructura garantiza un flujo
              continuo, sea cual sea el canal. Para{' '}
              <Link href="/comprar-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>ver todos nuestros planes</Link>,
              consultad nuestra página de compra.
            </p>

            <div className="flex flex-col gap-10">
              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Calidad de imagen superior: HD, 4K y 8K
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  El IPTV en calidad HD, 4K y 8K transforma radicalmente la experiencia televisiva. Mientras que una
                  oferta básica muestra una imagen en definición estándar a menudo degradada, nuestra oferta premium
                  emite flujos en alta definición real — hasta resolución 8K en los canales compatibles. Cada detalle
                  se restituye con precisión, tanto en un televisor de 55 pulgadas como en una pantalla de proyección.
                  Descubrid nuestra página dedicada al{' '}
                  <Link href="/iptv-4k" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>IPTV en calidad 4K</Link>{' '}
                  para saber más.
                </p>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  +22.000 canales españoles e internacionales
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Nuestro catálogo supera los 22.000 canales cubriendo toda España — La 1, La 2, Antena 3, Telecinco,
                  Cuatro, La Sexta, Movistar+, DAZN — así como cientos de canales extranjeros: árabes, ingleses,
                  franceses, turcos, alemanes y muchos más. Canales deportivos, cine, infantiles, información continua:
                  cada miembro de la familia encuentra lo suyo. Las ofertas Gold y Diamond incluyen además +160.000
                  películas y series en acceso bajo demanda.
                </p>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Estabilidad de servidor 99,9% — Tecnología AntiFreeze 10.0
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  La principal queja de los usuarios IPTV son los freezes y los cortes. VivaceTV ha desarrollado la
                  tecnología AntiFreeze 10.0 que anticipa las congestiones de red y redirige automáticamente el flujo
                  hacia el servidor más disponible, en tiempo real. Resultado: una disponibilidad de servidor del 99,9%
                  medida en los últimos 12 meses. Sin ralentizaciones por la noche, sin cortes durante los eventos
                  deportivos de gran audiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2 : Planes ──────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section2-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section2-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-3 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Nuestros Planes de Suscripción IPTV Premium
            </h2>
            <p className="text-center text-base mb-12" style={{ color: 'var(--color-ink-light)' }}>
              Todos los planes incluyen acceso completo a +22.000 canales, calidad HD/4K/8K y asistencia 24/7.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: plan.featured
                      ? '2px solid var(--color-lime)'
                      : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {plan.featured && plan.sublabel && (
                    <p
                      style={{
                        color: 'var(--color-lime)',
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {plan.label} — {plan.sublabel}
                    </p>
                  )}
                  {!plan.featured && (
                    <p
                      style={{
                        color: 'var(--color-ink)',
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {plan.label}
                    </p>
                  )}

                  <div>
                    <p
                      className="font-display font-extrabold text-3xl"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {plan.price}
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', fontSize: 13 }}>
                      {plan.duration}
                    </p>
                    <p style={{ color: 'var(--color-gray-400)', fontSize: 12, textDecoration: 'line-through' }}>
                      {plan.original}
                    </p>
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-lime-soft)',
                        color: '#FFFFFF',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 6,
                      }}
                    >
                      {plan.discount}
                    </span>
                  </div>

                  <Link
                    href={plan.href}
                    className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 text-center"
                    style={{
                      backgroundColor: plan.featured ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: plan.featured ? 'var(--color-dark)' : 'var(--color-ink)',
                      border: plan.featured ? 'none' : '1px solid var(--color-border)',
                    }}
                  >
                    Elegir este plan
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-sm mt-8" style={{ color: 'var(--color-ink-light)' }}>
              Todos los planes incluyen: +22.000 canales · HD/4K/8K · AntiFreeze 10.0 · TV Replay · Asistencia 24/7
            </p>
          </div>
        </section>

        {/* ── Section 3 : Premium vs Básico ─────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section3-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section3-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Por Qué Elegir una Suscripción IPTV Premium en Lugar de una Básica?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Ante las decenas de ofertas disponibles en el mercado, es tentador optar por los precios más bajos.
              Pero un servicio IPTV básico puede volverse frustrante rápidamente: calidad de imagen mediocre, servidores
              sobrecargados, ningún soporte en caso de problema. Aquí lo que diferencia concretamente una oferta premium
              de una de entrada. Para un{' '}
              <Link href="/mejor-iptv-espana" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                comparativo de los mejores IPTV España
              </Link>{' '}
              del mercado, consultad nuestra guía completa.
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                    <th
                      className="px-5 py-4 text-left font-semibold"
                      style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                    >
                      Criterio
                    </th>
                    <th
                      className="px-5 py-4 text-center font-semibold"
                      style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                    >
                      IPTV Básico
                    </th>
                    <th
                      className="px-5 py-4 text-center font-semibold"
                      style={{ color: 'var(--color-lime)', borderBottom: '1px solid var(--color-border)' }}
                    >
                      VivaceTV Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Calidad de vídeo', basic: 'SD / HD variable', premium: 'HD, 4K y 8K garantizados' },
                    { label: 'Número de canales', basic: '5.000 – 10.000', premium: '+22.000 canales' },
                    { label: 'Películas y series VOD', basic: 'Limitado o inexistente', premium: '+160.000 títulos (Gold/Diamond)' },
                    { label: 'Estabilidad de servidor', basic: 'Cortes frecuentes', premium: '99,9% de disponibilidad' },
                    { label: 'Anti-freeze', basic: 'No', premium: 'Tecnología AntiFreeze 10.0' },
                    { label: 'TV Replay', basic: 'No', premium: 'Sí, incluido' },
                    { label: 'Soporte al cliente', basic: 'Email lento o inexistente', premium: 'WhatsApp 24/7' },
                    { label: 'Activación', basic: 'A veces varios días', premium: 'En menos de una hora' },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{ backgroundColor: i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)' }}
                    >
                      <td
                        className="px-5 py-4 font-medium"
                        style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.label}
                      </td>
                      <td
                        className="px-5 py-4 text-center"
                        style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.basic}
                      </td>
                      <td
                        className="px-5 py-4 text-center font-semibold"
                        style={{ color: '#FFFFFF', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-lime-soft)' }}
                      >
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {allFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--color-lime)' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4 : Testimonios ─────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section4-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section4-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-3 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Lo Que Nuestros Clientes Dicen de la Suscripción Premium
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Lee también las{' '}
              <Link href="/opiniones-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                opiniones de nuestros clientes
              </Link>{' '}
              en nuestra página dedicada.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <div className="flex gap-1" aria-label="5 estrellas de 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--color-lime)', fontSize: 14 }} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-ink-light)' }}>
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--color-gray-400)' }}>{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5 : FAQ ─────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section5-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section5-heading"
              className="font-display font-bold text-2xl sm:text-3xl mb-8 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes sobre la Suscripción IPTV Premium
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none font-semibold text-sm"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.question}
                    <ChevronDown
                      size={16}
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      style={{ color: 'var(--color-lime)' }}
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.answer}
                  </div>
                </details>
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
