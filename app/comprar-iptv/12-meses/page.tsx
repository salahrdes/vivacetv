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
  title: 'IPTV 12 Meses — Mejor Precio Anual | VivaceTV Gold',
  description:
    'Suscripción IPTV 12 meses VivaceTV Gold a 44,99€: acceso completo +22.000 canales HD/4K/8K para todo el año. Ahorra un 31% vs el precio normal. Activación rápida.',
  keywords: [
    'iptv suscripción 12 meses',
    'suscripción iptv anual',
    'iptv 12 meses españa',
    'suscripción iptv gold',
    'iptv un año',
  ],
  alternates: { canonical: `${siteConfig.url}/comprar-iptv/12-meses` },
  openGraph: {
    title: 'IPTV 12 Meses — Mejor Precio Anual | VivaceTV Gold',
    description:
      'Suscripción IPTV 12 meses VivaceTV Gold a 44,99€. +22.000 canales HD/4K/8K, 3,75€/mes. Ahorra un 31%. Activación rápida.',
    url: `${siteConfig.url}/comprar-iptv/12-meses`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿La suscripción IPTV 12 meses se renueva automáticamente?',
    answer:
      'No. La suscripción VivaceTV Gold 12 meses es un pago único sin renovación automática. Al vencer, elegís libremente si queréis renovar vuestro acceso.',
  },
  {
    question: '¿Qué pasa si no estoy satisfecho con mi suscripción de 12 meses?',
    answer:
      'VivaceTV ofrece una garantía de satisfacción. Si no estáis satisfechos, nuestro equipo hace todo lo posible para resolver el problema o os propone un reembolso según nuestras condiciones. Contactad con nuestro soporte por WhatsApp.',
  },
  {
    question: '¿Puedo cambiar de dispositivo durante mis 12 meses de suscripción?',
    answer:
      'Sí. Vuestra suscripción está vinculada a vuestra cuenta, no a un dispositivo específico. En caso de cambio de dispositivo, contactad con nuestro soporte por WhatsApp y actualizaremos vuestra configuración gratuitamente.',
  },
  {
    question: '¿La oferta Gold 12 meses incluye realmente los canales 8K?',
    answer:
      'Sí, la suscripción Gold incluye los canales en calidad SD, HD, 4K y 8K — la totalidad de nuestro catálogo. La calidad mostrada también depende de vuestra conexión a internet y de vuestro dispositivo.',
  },
];

const goldFeatures = [
  '+22.000 canales españoles e internacionales',
  '+160.000 películas y series en VOD',
  'Calidad SD, HD, 4K y 8K Ultra',
  'Tecnología AntiFreeze 10.0',
  'TV Replay — ve en diferido',
  'Asistencia 24/7 por WhatsApp',
  'Activación en menos de una hora',
  'Pago único — sin renovación automática',
  'Compatible Smart TV, Android, iOS, PC, Fire TV, Apple TV',
  'Cambio de dispositivo gratuito a petición',
];

const testimonials = [
  {
    name: 'Rachid A.',
    location: 'Bilbao',
    text: 'Tomé la suscripción Gold en enero y no me he arrepentido ni una vez. 12 meses, un solo pago, sin ningún problema. Los canales deportivos están todos, en perfecta calidad. Ya no me imagino ver la tele de otra manera.',
  },
  {
    name: 'Céline V.',
    location: 'Málaga',
    text: 'La relación calidad/precio es imbatible. 44,99€ por todo un año de acceso a +160.000 películas y series además de los canales. Toda mi familia ve en distintos dispositivos y nunca ha fallado ni una sola vez.',
  },
  {
    name: 'Mehdi K.',
    location: 'Zaragoza',
    text: 'Dudaba entre Gold y Diamond. Al final tomé Gold para empezar. Francamente, es perfecto. Los servidores son ultra-estables, la calidad 4K en mi LG es magnífica, y el soporte de WhatsApp me ayudó en 5 minutos cuando cambié de televisor.',
  },
];

export default function Abonnement12MoisPage() {
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
          { name: 'Suscripción 12 Meses', href: '/comprar-iptv/12-meses' },
        ]}
      />
      <Header />
      <main id="main-content">
        <PageHero
          label="GOLD — 12 MESES"
          title="IPTV 12 Meses"
          titleHighlight="El Mejor Precio del Año"
          subtitle="La oferta anual VivaceTV — un solo pago, 12 meses de acceso completo. La fórmula preferida de nuestros clientes."
        />

        {/* ── Section 1 : Por qué 12 meses ─────────────────────────────── */}
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
              ¿Por Qué Elegir una Suscripción IPTV de 12 Meses?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              La suscripción anual es la solución más inteligente para los usuarios habituales de IPTV. En lugar de
              renovar cada 3 o 6 meses con la carga mental que eso implica, pagáis una sola vez y disfrutáis
              tranquilamente de vuestro servicio durante todo el año. Consultad{' '}
              <Link href="/comprar-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                todos nuestros planes
              </Link>{' '}
              para comparar las duraciones disponibles.
            </p>

            <div className="flex flex-col gap-8">
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Ahorros significativos
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Si renovarais la oferta Bronze (3 meses a 22,99€) cuatro veces seguidas para cubrir un año
                  completo, gastaríais 91,96€. La oferta Gold 12 meses está a 44,99€ — es decir un ahorro de casi
                  47€, casi la mitad. Volviendo al coste mensual, el Gold sale a solo 3,75€/mes frente a 7,66€/mes
                  para el Bronze renovado. La diferencia es considerable a lo largo de todo un año.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Un solo pago, cero preocupaciones
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Ya no necesitáis pensar en renovar vuestra suscripción cada trimestre. Con la oferta Gold, pagáis
                  una sola vez y os olvidáis — vuestro servicio funciona durante 12 meses completos, sin interrupción,
                  sin renovación automática impuesta. Sin cargo sorpresa, sin notificación de vencimiento inoportuna.
                  Y si queréis renovar al final de vuestra suscripción,{' '}
                  <Link href="/pedir/gold" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                    comprar la suscripción Gold
                  </Link>{' '}
                  se hace en pocos minutos por WhatsApp.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Más contenido incluido
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  La oferta Gold desbloquea la totalidad del catálogo VOD de VivaceTV: +160.000 películas y series en
                  acceso ilimitado, frente a unos 60.000 del plan Bronze. De las películas recientes a las grandes
                  series internacionales, pasando por documentales y dibujos animados — el Gold es la fórmula
                  completa. Para saber más sobre nuestra{' '}
                  <Link href="/comprar-iptv/premium" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                    oferta premium VivaceTV
                  </Link>,{' '}
                  consultad nuestra página dedicada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2 : Oferta Gold showcase ─────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section2-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section2-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-8 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              La Oferta Gold VivaceTV — Todo lo que Está Incluido
            </h2>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--color-dark)',
                border: '2px solid var(--color-lime)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    Gold — El Más Popular
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display font-extrabold text-5xl"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      44,99€
                    </span>
                    <span style={{ color: 'var(--color-gray-400)', textDecoration: 'line-through', fontSize: 18 }}>
                      64,99€
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                    >
                      -31%
                    </span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-gray-400)' }}>
                    12 meses · 3,75€/mes · pago único
                  </p>
                </div>
                <Link
                  href="/pedir/gold"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
                  style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                >
                  Comprar Gold
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {goldFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'var(--color-lime)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: 'var(--color-gray-400)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3 : Comparación duraciones ──────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section3-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section3-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              IPTV 12 Meses vs Otras Duraciones — Comparativa
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Elegir la duración correcta es elegir el presupuesto correcto. Así se comparan nuestras ofertas al coste mensual real.
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    <th className="px-5 py-4 text-left font-semibold" style={{ color: 'var(--color-ink)' }}>Plan</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-ink)' }}>Duración</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-ink)' }}>Precio total</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-lime)' }}>Por mes</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-ink)' }}>Ahorro vs Bronze</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Bronze', duration: '3 meses', price: '22,99€', perMonth: '7,66€', saving: '—', featured: false },
                    { label: 'Silver', duration: '6 meses', price: '34,99€', perMonth: '5,83€', saving: '-24%/mes', featured: false },
                    { label: 'Gold ★', duration: '12 meses', price: '44,99€', perMonth: '3,75€', saving: '-51%/mes', featured: true },
                    { label: 'Diamond', duration: '24 meses', price: '74,99€', perMonth: '3,12€', saving: '-59%/mes', featured: false },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: row.featured
                          ? 'var(--color-lime-soft)'
                          : i % 2 === 0
                          ? 'var(--color-card)'
                          : 'var(--color-surface-alt)',
                      }}
                    >
                      <td
                        className="px-5 py-4 font-semibold"
                        style={{ color: row.featured ? 'var(--color-dark)' : 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.label}
                      </td>
                      <td
                        className="px-5 py-4 text-center"
                        style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.duration}
                      </td>
                      <td
                        className="px-5 py-4 text-center font-semibold"
                        style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.price}
                      </td>
                      <td
                        className="px-5 py-4 text-center font-bold"
                        style={{
                          color: row.featured ? 'var(--color-dark)' : 'var(--color-lime)',
                          borderBottom: '1px solid var(--color-border)',
                        }}
                      >
                        {row.perMonth}
                      </td>
                      <td
                        className="px-5 py-4 text-center text-xs font-semibold"
                        style={{
                          color: row.featured ? 'var(--color-dark)' : 'var(--color-ink-light)',
                          borderBottom: '1px solid var(--color-border)',
                        }}
                      >
                        {row.saving}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-xs mt-4" style={{ color: 'var(--color-gray-400)' }}>
              Para una vista completa del{' '}
              <Link href="/mejor-iptv-espana" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                mejor IPTV España
              </Link>,{' '}
              consultad nuestro comparativo completo.
            </p>
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
              className="font-display font-bold text-3xl sm:text-4xl mb-10 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Lo que Nuestros Clientes Piensan de la Suscripción Anual
            </h2>

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
              Preguntas Frecuentes — Suscripción IPTV 12 Meses
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
