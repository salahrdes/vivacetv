import type { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Opiniones VivaceTV 2026 — Testimonios Clientes y Notas Verificadas | IPTV España',
  description:
    'Lee las opiniones reales de VivaceTV de nuestros clientes satisfechos. Notas verificadas, testimonios WhatsApp, experiencias sobre la calidad IPTV España. 4,8/5 de media.',
  keywords: [
    'opiniones VivaceTV',
    'opiniones IPTV España',
    'testimonios IPTV',
    'VivaceTV opiniones clientes',
  ],
  alternates: { canonical: `${siteConfig.url}/opiniones-iptv` },
  openGraph: {
    title: 'Opiniones VivaceTV 2026 — Testimonios Clientes y Notas Verificadas | IPTV España',
    description:
      'Opiniones de clientes verificados VivaceTV: 4,8/5 sobre más de 500 opiniones. Testimonios reales sobre la calidad IPTV España, estabilidad, soporte y relación calidad/precio.',
    url: `${siteConfig.url}/opiniones-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Las opiniones de VivaceTV están verificadas?',
    answer:
      'Sí. Todos los testimonios presentados provienen de clientes que han suscrito una suscripción VivaceTV. No publicamos opiniones falsas y animamos a nuestros clientes a compartir sus experiencias honestas por WhatsApp o directamente en nuestro sitio.',
  },
  {
    question: '¿Cuál es la nota media de VivaceTV?',
    answer:
      'VivaceTV obtiene una nota media de 4,8/5 basada en más de 500 opiniones de clientes verificados. Los puntos mejor valorados son la calidad de vídeo (4,9/5) y la relación calidad/precio (4,9/5).',
  },
  {
    question: '¿Cómo dejar una opinión sobre VivaceTV?',
    answer:
      'Puedes compartir tu experiencia contactando con nuestro equipo por WhatsApp al +447476614523. Tus comentarios nos ayudan a mejorar constantemente nuestro servicio.',
  },
  {
    question: '¿VivaceTV ofrece un reembolso si no estoy satisfecho?',
    answer:
      'Sí. VivaceTV se compromete a resolver cualquier problema técnico en el menor tiempo posible. Si tu problema no puede resolverse, examinamos cada solicitud de reembolso individualmente. Nuestra prioridad es tu satisfacción.',
  },
];

const testimonials = [
  {
    name: 'Sofía L.',
    plan: 'Gold',
    date: 'Hace 3 semanas',
    rating: 5,
    text: '¡Suscripción de primera! Los canales 4K son de una claridad increíble, ningún corte en 6 meses de uso. El soporte WhatsApp responde en menos de 15 minutos. Lo recomiendo al 100%.',
  },
  {
    name: 'Marcos T.',
    plan: 'Diamond',
    date: 'Hace 1 mes',
    rating: 5,
    text: 'Uso en mi Smart TV Samsung y en mi iPhone sin ningún problema. Los +22 000 canales incluyen todos los canales árabes que necesitaba. Activación en menos de 1h.',
  },
  {
    name: 'Fátima B.',
    plan: 'Silver',
    date: 'Hace 2 semanas',
    rating: 5,
    text: 'Dudaba por el precio pero la relación calidad/precio es realmente excelente. La calidad HD es perfecta, el catálogo de películas es enorme. Renovaré sin dudarlo.',
  },
  {
    name: 'Pedro A. M.',
    plan: 'Gold',
    date: 'Hace 2 meses',
    rating: 5,
    text: 'Servicio impecable desde hace 8 meses. La prueba gratuita de 24h me convenció de inmediato. Ningún problema técnico, el equipo es muy profesional.',
  },
  {
    name: 'Amina C.',
    plan: 'Bronze',
    date: 'Hace 1 semana',
    rating: 4,
    text: 'Incluso con la oferta Bronze, la calidad está a la altura. Perfecto para empezar. Voy a pasar a Gold en la próxima renovación.',
  },
  {
    name: 'Román V.',
    plan: 'Gold',
    date: 'Hace 5 semanas',
    rating: 5,
    text: 'Venía de otro proveedor con muchos cortes. Desde VivaceTV, ningún problema. La tecnología anti-freeze marca realmente la diferencia.',
  },
  {
    name: 'Isabel F.',
    plan: 'Diamond',
    date: 'Hace 3 días',
    rating: 5,
    text: 'Suscripción Diamond para toda la familia. Los canales deportivos en 4K son excepcionales. Soporte excelente, respuesta inmediata por WhatsApp.',
  },
  {
    name: 'Karim H.',
    plan: 'Silver',
    date: 'Hace 6 semanas',
    rating: 5,
    text: 'La mejor suscripción IPTV que he probado. Calidad constante, catálogo actualizado regularmente. Muy satisfecho con mi Silver de 6 meses.',
  },
];

const satisfactionStats = [
  { label: 'Calidad de vídeo HD/4K/8K', pct: 94 },
  { label: 'Estabilidad y ausencia de cortes', pct: 91 },
  { label: 'Reactividad del soporte WhatsApp', pct: 93 },
  { label: 'Riqueza del catálogo', pct: 89 },
  { label: 'Facilidad de instalación', pct: 87 },
];

const subRatings = [
  { label: 'Calidad de vídeo', value: '4,9' },
  { label: 'Estabilidad', value: '4,7' },
  { label: 'Soporte al cliente', value: '4,8' },
  { label: 'Relación calidad/precio', value: '4,9' },
];

export default function AvisIPTVPage() {
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
          { name: 'Opiniones VivaceTV', href: '/opiniones-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="OPINIONES Y TESTIMONIOS"
          title="Opiniones"
          titleHighlight="VivaceTV — Lo Que Piensan Nuestros Clientes"
          subtitle="Cientos de clientes nos confían su entretenimiento. Descubre sus experiencias honestas sobre nuestro servicio IPTV España."
        />

        {/* Section 1 — Nota global */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Nota Global VivaceTV
            </h2>

            <div
              className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-2xl mb-8"
              style={{
                backgroundColor: 'var(--color-dark)',
              }}
            >
              {/* Big rating */}
              <div className="text-center flex-shrink-0">
                <p
                  className="font-display font-extrabold text-6xl leading-none"
                  style={{ color: 'var(--color-lime)' }}
                >
                  4,8
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--color-gray-400)' }}>
                  sobre 5
                </p>
                <div className="flex gap-0.5 justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      style={{ color: 'var(--color-lime)', fill: 'var(--color-lime)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Sub-ratings */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {subRatings.map((r) => (
                    <div key={r.label} className="text-center">
                      <p
                        className="font-display font-bold text-2xl"
                        style={{ color: 'var(--color-lime)' }}
                      >
                        {r.value}/5
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-gray-400)' }}>
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="text-center text-xs mt-4"
                  style={{ color: 'var(--color-gray-600)' }}
                >
                  Basado en más de 500 opiniones de clientes verificados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Testimonios */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Testimonios de Nuestros Clientes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        style={{
                          color: i < t.rating ? 'var(--color-lime)' : 'var(--color-border)',
                          fill: i < t.rating ? 'var(--color-lime)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      color: 'var(--color-ink-light)',
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    &quot;{t.text}&quot;
                  </p>
                  <p
                    className="font-semibold text-sm mt-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {t.name} — Plan {t.plan}
                  </p>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: 12 }}>{t.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Lo que más valoran nuestros clientes */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Lo Que Más Valoran Nuestros Clientes
            </h2>
            <div className="flex flex-col gap-5">
              {satisfactionStats.map((s, idx) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                      {idx + 1}. {s.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--color-lime)' }}
                    >
                      {s.pct}% de satisfacción
                    </span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--color-border)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${s.pct}%`,
                        backgroundColor: 'var(--color-lime)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — VivaceTV vs competidores */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              VivaceTV vs Otros Proveedores IPTV — Comparación de Opiniones
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Entre los comentarios de clientes que anteriormente usaron otros servicios IPTV,
              varios puntos diferencian a VivaceTV de la competencia. El soporte al cliente es
              sistemáticamente citado como el punto más apreciado: disponible 24/7 por
              WhatsApp, en español, con un tiempo de respuesta inferior a 15 minutos de media.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La estabilidad es el segundo punto diferenciador: la tecnología AntiFreeze 10.0
              de VivaceTV elimina los micro-cortes que arruinan la experiencia en otros
              servicios, especialmente durante los eventos deportivos en directo. Varios clientes
              relatan 6 a 12 meses de uso sin la menor interrupción.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Para una comparación completa de los proveedores IPTV España, consulta nuestra{' '}
              <Link
                href="/mejor-iptv-espana"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                comparativa de los mejores IPTV España 2026
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 5 — Compromiso de calidad */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Nuestro Compromiso de Calidad
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: 'Calidad garantizada',
                  desc: '+22 000 canales en HD/4K/8K con la tecnología AntiFreeze 10.0 para una emisión ininterrumpida.',
                },
                {
                  title: 'Soporte 24/7',
                  desc: 'Nuestro equipo hispanohablante responde por WhatsApp en menos de 15 minutos, los 7 días de la semana, las 24 horas del día.',
                },
                {
                  title: 'Satisfacción o reembolso',
                  desc: 'Si no podemos resolver tu problema, examinamos cada solicitud de reembolso con atención.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <div
                    className="w-8 h-1 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--color-lime)' }}
                  />
                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: 'var(--color-lime)',
                  color: 'var(--color-dark)',
                }}
              >
                Ver nuestras suscripciones →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes
            </h2>
            <div className="flex flex-col gap-5">
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
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/mejor-iptv-espana', label: 'Comparativa IPTV España' },
                { href: '/comprar-iptv', label: 'Nuestras suscripciones' },
                { href: '/proveedor-iptv', label: 'Proveedor IPTV' },
                { href: '/comprar-iptv/premium', label: 'Oferta Premium' },
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
