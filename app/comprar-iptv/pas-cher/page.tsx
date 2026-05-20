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
  title: 'IPTV Barato en España — Desde 22,99€ | VivaceTV',
  description:
    'IPTV barato con VivaceTV: acceso a +22.000 canales HD/4K desde 22,99€. Activación rápida, calidad garantizada, sin compromiso largo. Prueba gratis disponible.',
  keywords: [
    'iptv barato',
    'suscripción iptv barata',
    'iptv españa barato',
    'iptv precio',
    'iptv oferta',
  ],
  alternates: { canonical: `${siteConfig.url}/comprar-iptv/pas-cher` },
  openGraph: {
    title: 'IPTV Barato en España — Desde 22,99€ | VivaceTV',
    description:
      'IPTV barato desde 22,99€. +22.000 canales HD/4K, activación rápida, calidad garantizada. Prueba gratis 24h disponible.',
    url: `${siteConfig.url}/comprar-iptv/pas-cher`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Cuál es la suscripción IPTV más barata en VivaceTV?',
    answer:
      'Nuestra oferta Bronze es la más accesible, a 22,99€ por 3 meses de acceso completo a +22.000 canales en HD/4K. Es nuestra fórmula de entrada ideal para probar VivaceTV sin comprometerse a una larga duración.',
  },
  {
    question: '¿Una suscripción IPTV barata es de buena calidad?',
    answer:
      'Absolutamente. En VivaceTV, incluso nuestra suscripción más barata incluye la calidad HD y 4K, la tecnología AntiFreeze 10.0 contra los cortes, y nuestro soporte al cliente 24/7. El precio bajo no significa calidad reducida.',
  },
  {
    question: '¿El IPTV gratuito es una alternativa válida?',
    answer:
      'Los servicios IPTV gratuitos presentan riesgos importantes: calidad inestable, cortes frecuentes, contenido ilegal y ausencia de soporte. Una suscripción de pago como VivaceTV garantiza una experiencia estable y un servicio al cliente reactivo.',
  },
  {
    question: '¿Hay costes ocultos con vuestra suscripción IPTV?',
    answer:
      'No, ningún coste oculto. El precio mostrado es el precio final, pago único. Sin renovación automática, sin suscripción mensual impuesta.',
  },
  {
    question: '¿Cómo pago mi suscripción IPTV barata VivaceTV?',
    answer:
      'El pago se realiza de forma segura por WhatsApp. Nuestro equipo os contacta después de vuestra compra para finalizar el pago y activar vuestro acceso en menos de una hora.',
  },
];

const plans = [
  {
    id: 'bronze',
    label: 'Bronze',
    duration: '3 meses',
    price: '22,99€',
    pricePerMonth: '7,66€/mes',
    original: '39,99€',
    discount: '-43%',
    href: '/commander/bronze',
    featured: false,
  },
  {
    id: 'silver',
    label: 'Silver',
    duration: '6 meses',
    price: '34,99€',
    pricePerMonth: '5,83€/mes',
    original: '54,99€',
    discount: '-36%',
    href: '/commander/silver',
    featured: false,
  },
  {
    id: 'gold',
    label: 'Gold',
    duration: '12 meses',
    price: '44,99€',
    pricePerMonth: '3,75€/mes',
    original: '64,99€',
    discount: '-31%',
    href: '/commander/gold',
    featured: true,
  },
  {
    id: 'diamond',
    label: 'Diamond',
    duration: '24 meses',
    price: '74,99€',
    pricePerMonth: '3,12€/mes',
    original: '89,99€',
    discount: '-17%',
    href: '/commander/diamond',
    featured: false,
  },
];

const bronzeFeatures = [
  '+22.000 canales españoles e internacionales',
  'Calidad HD y 4K',
  'Tecnología AntiFreeze 10.0 (cero cortes)',
  'TV Replay incluido',
  'Compatible Smart TV, Android, iOS, PC, Fire TV, Apple TV',
  'Asistencia 24/7 por WhatsApp',
  'Activación en menos de una hora',
  'Pago único — sin renovación automática',
];

export default function AbonnementPasCherPage() {
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
          { name: 'Barato', href: '/comprar-iptv/pas-cher' },
        ]}
      />
      <Header />
      <main id="main-content">
        <PageHero
          label="MEJOR PRECIO"
          title="IPTV Barato"
          titleHighlight="España — Desde 22,99€"
          subtitle="Disfrutad de +22.000 canales en HD y 4K sin arruinaros. VivaceTV ofrece la mejor relación calidad/precio del mercado IPTV España."
        />

        {/* ── Section 1 : Qué significa barato ───────────────────────────── */}
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
              IPTV Barato: Lo que Realmente Significa
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Una suscripción IPTV barata nunca debería rimar con mala calidad. En VivaceTV, nuestra oferta de
              entrada a 22,99€ da acceso a la totalidad de nuestros +22.000 canales en HD y 4K — exactamente los
              mismos canales que en nuestras ofertas de larga duración. La diferencia reside en la duración del
              compromiso, no en el catálogo ni en la calidad del servicio. Consultad{' '}
              <Link href="/comprar-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                todos nuestros planes IPTV
              </Link>{' '}
              para comparar las fórmulas disponibles.
            </p>

            <div className="flex flex-col gap-10">
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  IPTV barato vs IPTV gratuito: atención a la diferencia
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
                  Existe una confusión frecuente entre "IPTV barato" e "IPTV gratuito". Los servicios gratuitos son
                  casi siempre ilegales, inestables y sin ningún soporte. Los flujos provienen de servidores no
                  seguros que cortan sin avisar, especialmente durante los eventos de gran audiencia. La ausencia de
                  contrato significa que en caso de problema, no tenéis ningún recurso. Para saber más sobre lo que es{' '}
                  <Link href="/guia-iptv/iptv-amende" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                    IPTV legal en España
                  </Link>,{' '}
                  consultad nuestra guía.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Una suscripción de pago como VivaceTV a 22,99€ por 3 meses — menos de 7,66€ al mes — os ofrece un
                  servicio profesional, una infraestructura estable y un servicio al cliente disponible 24/7 por
                  WhatsApp. El precio de una cerveza al mes por televisión ilimitada.
                </p>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-4"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Qué está incluido en nuestra oferta de entrada
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {bronzeFeatures.map((feature) => (
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
            </div>
          </div>
        </section>

        {/* ── Section 2 : Bronze ──────────────────────────────────────────── */}
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
              Nuestra Suscripción IPTV más Barata — Oferta Bronze a 22,99€
            </h2>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'var(--color-card)', border: '2px solid var(--color-border)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--color-gray-600)' }}
                  >
                    Oferta Bronze — 3 meses
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display font-extrabold text-5xl"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      22,99€
                    </span>
                    <span style={{ color: 'var(--color-gray-400)', textDecoration: 'line-through', fontSize: 18 }}>
                      39,99€
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: '#FFFFFF' }}
                    >
                      -43%
                    </span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-ink-light)' }}>
                    es decir 7,66€/mes — pago único
                  </p>
                </div>
                <Link
                  href="/commander/bronze"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
                  style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                >
                  Comprar Bronze
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {bronzeFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
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

              <p
                className="mt-6 text-sm p-4 rounded-xl"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: '#FFFFFF' }}
              >
                💡 Si queréis ahorrar aún más a largo plazo, la oferta Gold (12 meses) sale a solo
                3,75€/mes — casi la mitad de precio que el Bronze al costo mensual.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3 : Tabla comparativa ─────────────────────────────── */}
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
              Compara Nuestros Planes: ¿Qué Suscripción IPTV Elegir?
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Para una elección informada, consultad también nuestra guía del{' '}
              <Link href="/proveedor-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                proveedor IPTV fiable
              </Link>.
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
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-ink)' }}>VOD</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Bronze', duration: '3 meses', price: '22,99€', perMonth: '7,66€', vod: '+60.000', featured: false },
                    { label: 'Silver', duration: '6 meses', price: '34,99€', perMonth: '5,83€', vod: '+100.000', featured: false },
                    { label: 'Gold ★', duration: '12 meses', price: '44,99€', perMonth: '3,75€', vod: '+160.000', featured: true },
                    { label: 'Diamond', duration: '24 meses', price: '74,99€', perMonth: '3,12€', vod: '+160.000', featured: false },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: row.featured ? 'var(--color-lime-soft)' : i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
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
                        className="px-5 py-4 text-center"
                        style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.vod}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs mt-4" style={{ color: 'var(--color-gray-400)' }}>
              Todos los planes incluyen: +22.000 canales · HD/4K/8K · AntiFreeze 10.0 · TV Replay · Asistencia 24/7
            </p>
          </div>
        </section>

        {/* ── Section 4 : Ahorro larga duración ──────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section4-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section4-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Ahorra Más Eligiendo una Suscripción IPTV de Larga Duración
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              La forma más sencilla de pagar menos por el IPTV es optar por una duración más larga. Cuanto más larga es
              la duración, más baja es drásticamente el coste mensual. Con la oferta Diamond a 24 meses, accedéis al
              IPTV por solo 3,12€/mes — menos que un café.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex flex-col items-center text-center p-6 rounded-2xl gap-3"
                  style={{
                    backgroundColor: plan.featured ? 'var(--color-dark)' : 'var(--color-card)',
                    border: plan.featured ? '2px solid var(--color-lime)' : '1px solid var(--color-border)',
                    borderRadius: 16,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: plan.featured ? 'var(--color-lime)' : 'var(--color-gray-600)' }}
                  >
                    {plan.label}
                  </p>
                  <p
                    className="font-display font-extrabold text-2xl"
                    style={{ color: plan.featured ? 'var(--color-lime)' : 'var(--color-ink)' }}
                  >
                    {plan.pricePerMonth}
                  </p>
                  <p className="text-xs" style={{ color: plan.featured ? 'var(--color-gray-400)' : 'var(--color-ink-light)' }}>
                    {plan.price} / {plan.duration}
                  </p>
                  {plan.featured && (
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                    >
                      Mejor relación calidad/precio
                    </span>
                  )}
                  <Link
                    href={plan.href}
                    className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: plan.featured ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: plan.featured ? 'var(--color-dark)' : 'var(--color-ink)',
                      border: plan.featured ? 'none' : '1px solid var(--color-border)',
                    }}
                  >
                    Elegir
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              La oferta Gold 12 meses es la preferida de nuestros clientes: ofrece el mejor compromiso entre compromiso
              y ahorro, con un coste de solo 3,75€/mes por 12 meses de acceso completo. Descubrid también nuestra{' '}
              <Link href="/comprar-iptv/premium" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                suscripción IPTV premium
              </Link>{' '}
              para todas las opciones disponibles.
            </p>
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
              Preguntas Frecuentes sobre IPTV Barato
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
