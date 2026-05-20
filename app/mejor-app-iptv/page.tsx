import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Mejor Aplicación IPTV 2026 — Top 7 Apps Probadas | VivaceTV',
  description:
    '¿Cuál es la mejor aplicación IPTV en 2026? Nuestro top 7: TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player, Kodi… Comparativa completa con VivaceTV.',
  keywords: [
    'mejor aplicación IPTV',
    'mejor app IPTV',
    'app IPTV Android',
    'IPTV player',
    'mejores aplicaciones IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/mejor-app-iptv` },
  openGraph: {
    title: 'Mejor Aplicación IPTV 2026 — Top 7 Apps Probadas | VivaceTV',
    description:
      'Nuestro top 7 de las mejores aplicaciones IPTV probadas con VivaceTV: TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player, Kodi y más.',
    url: `${siteConfig.url}/mejor-app-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Cuál es la mejor aplicación IPTV para Android TV?',
    answer:
      'TiviMate es unánimemente considerada la mejor aplicación IPTV para Android TV y Fire TV Stick. Su interfaz EPG, su estabilidad en 4K/8K y su gestión de múltiples listas la convierten en la elección ideal. La versión premium (aproximadamente 5€/año) es muy recomendable.',
  },
  {
    question: '¿Qué aplicación IPTV elegir para iPhone o iPad?',
    answer:
      'GSE Smart IPTV es la mejor opción para iOS. Soporta los formatos M3U y Xtream Codes, ofrece una guía EPG integrada y es compatible con Apple TV. La versión Pro está disponible en el App Store.',
  },
  {
    question: '¿Las aplicaciones IPTV son gratuitas?',
    answer:
      'La mayoría de las aplicaciones IPTV como IPTV Smarters Pro, GSE Smart IPTV (versión básica), OTT Navigator y VLC son gratuitas. TiviMate ofrece una versión gratuita con funcionalidades limitadas y una versión premium a aproximadamente 5€/año. Estas aplicaciones son distintas de tu suscripción IPTV.',
  },
  {
    question: '¿Mi aplicación IPTV es compatible con VivaceTV?',
    answer:
      'VivaceTV es compatible con todas las principales aplicaciones IPTV: TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player, OTT Navigator, Kodi, VLC y muchas más. Nuestras suscripciones proporcionan URL M3U e identificadores Xtream Codes universalmente compatibles.',
  },
  {
    question: '¿Qué conexión a internet se necesita para el IPTV?',
    answer:
      'Para ver el IPTV en HD: 10 Mbps mínimo. En 4K: 25 Mbps mínimo. En 8K: 50 Mbps recomendados. Una conexión de fibra óptica garantiza la mejor estabilidad y evita los cortes durante los picos de uso.',
  },
];

type App = {
  rank: number;
  name: string;
  rating: string;
  platforms: string;
  description: string;
  pros: string[];
  cons: string[];
  badge?: string;
};

const apps: App[] = [
  {
    rank: 1,
    name: 'TiviMate',
    rating: '⭐⭐⭐⭐⭐',
    platforms: 'Android TV / Fire TV',
    description:
      'La aplicación de referencia. Interfaz EPG perfecta, gestión de múltiples listas, reproducción fluida en 4K. Versión premium recomendada (~5€/año).',
    pros: ['Interfaz EPG muy completa', 'Gestión de múltiples listas M3U', 'Estabilidad 4K/8K excelente', 'Actualización automática de listas'],
    cons: ['Solo Android TV / Fire TV', 'Versión premium necesaria para todas las funciones'],
    badge: 'MEJOR APP',
  },
  {
    rank: 2,
    name: 'IPTV Smarters Pro',
    rating: '⭐⭐⭐⭐☆',
    platforms: 'Android / iOS / PC',
    description:
      'Interfaz amigable ideal para principiantes. Compatible con múltiples pantallas, gestión Xtream Codes. Gratuita.',
    pros: ['Multiplataforma (Android, iOS, PC)', 'Interfaz intuitiva para principiantes', 'Soporte Xtream Codes nativo', 'Gratuita'],
    cons: ['Menos estable que TiviMate en 4K', 'EPG básica'],
  },
  {
    rank: 3,
    name: 'GSE Smart IPTV',
    rating: '⭐⭐⭐⭐☆',
    platforms: 'iOS / Android / Apple TV',
    description:
      'La mejor opción para iPhone/iPad. Soporte M3U y Xtream, interfaz limpia. Versión pro recomendada.',
    pros: ['Mejor app iOS nativa', 'Compatible con Apple TV', 'Soporte M3U y Xtream Codes', 'EPG integrada'],
    cons: ['Versión pro de pago para funciones avanzadas', 'Interfaz menos cuidada que TiviMate'],
    badge: 'MEJOR iOS',
  },
  {
    rank: 4,
    name: 'Perfect Player',
    rating: '⭐⭐⭐½☆',
    platforms: 'Android',
    description:
      'Interfaz estilo TV clásica, ideal para usuarios acostumbrados a la televisión tradicional. Gratuita.',
    pros: ['Interfaz estilo TV tradicional', 'Gratuita', 'Fácil de usar'],
    cons: ['Solo Android', 'Desarrollo ralentizado', 'Sin soporte Xtream Codes nativo'],
  },
  {
    rank: 5,
    name: 'Kodi + add-on PVR',
    rating: '⭐⭐⭐½☆',
    platforms: 'Todas las plataformas',
    description:
      'Solución open-source muy flexible pero requiere configuración avanzada. Para usuarios experimentados.',
    pros: ['Multiplataforma completo', 'Muy personalizable', 'Open-source gratuito'],
    cons: ['Configuración compleja', 'Requiere conocimientos técnicos', 'Actualizaciones manuales'],
  },
  {
    rank: 6,
    name: 'OTT Navigator',
    rating: '⭐⭐⭐☆☆',
    platforms: 'Android',
    description:
      'Buena alternativa a TiviMate, interfaz EPG clara, pero menos estable. Gratuita con publicidad.',
    pros: ['Interfaz EPG clara', 'Gratuita', 'Alternativa viable a TiviMate'],
    cons: ['Publicidad en la versión gratuita', 'Menos estable que TiviMate', 'Solo Android'],
  },
  {
    rank: 7,
    name: 'VLC Media Player',
    rating: '⭐⭐½☆☆',
    platforms: 'PC / Mac / Móvil',
    description:
      'Reproduce flujos M3U directamente, pero sin EPG y sin interfaz dedicada a IPTV. Solución de emergencia.',
    pros: ['Disponible en todos los SO', 'Gratuito y open-source', 'Lee archivos M3U directamente'],
    cons: ['Sin interfaz IPTV dedicada', 'Sin EPG', 'Experiencia de usuario limitada'],
  },
];

const configSteps = [
  {
    step: '1',
    title: 'Obtén tu suscripción VivaceTV',
    desc: 'Elige tu plan en /comprar-iptv y contacta con nuestro equipo por WhatsApp para finalizar tu pedido.',
  },
  {
    step: '2',
    title: 'Recibe tus credenciales por WhatsApp',
    desc: 'Recibes tu URL M3U y/o tus credenciales Xtream Codes directamente por WhatsApp, generalmente en menos de 1 hora.',
  },
  {
    step: '3',
    title: 'Introduce tus credenciales en tu aplicación',
    desc: 'En tu aplicación IPTV preferida (TiviMate, IPTV Smarters Pro, GSE Smart IPTV…), añade tu lista mediante M3U o Xtream Codes.',
  },
  {
    step: '4',
    title: 'Disfruta de +22 000 canales',
    desc: 'Tus canales se cargan automáticamente. Si tienes alguna pregunta, nuestro soporte WhatsApp 24/7 te guía en cada paso.',
  },
];

export default function MeilleureApplicationIPTVPage() {
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
          { name: 'Mejor Aplicación IPTV', href: '/mejor-app-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="TOP APLICACIONES IPTV"
          title="¿Cuál es la Mejor"
          titleHighlight="Aplicación IPTV en 2026?"
          subtitle="La elección de la aplicación IPTV es tan importante como la del proveedor. Esta es nuestra clasificación de las 7 mejores apps probadas con VivaceTV."
        />

        {/* Section 1 — Importancia de la elección */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Por qué la Elección de la Aplicación IPTV es Crucial
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Incluso con la mejor suscripción IPTV del mundo, una mala aplicación puede arruinar
              tu experiencia. La aplicación IPTV — también llamada player — es la interfaz entre
              tu suscripción y tu pantalla. Gestiona la reproducción de los flujos, la visualización
              de la guía de programas (EPG), la gestión de varias listas de canales y la
              estabilidad del buffering.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un buen player IPTV debe ofrecer una EPG (guía de programas) completa y actualizada,
              soportar los formatos M3U y Xtream Codes, ofrecer una reproducción fluida en 4K/8K,
              y permitir gestionar varios perfiles o listas de canales. La estabilidad del player
              contribuye tanto a la ausencia de cortes como la calidad del servidor.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV proporciona credenciales compatibles con todas las aplicaciones principales.
              Nuestro equipo de soporte te guía en la configuración de tu aplicación por
              WhatsApp 24/7. Consulta nuestra{' '}
              <Link
                href="/guia-iptv/installation-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guía de instalación IPTV
              </Link>{' '}
              para instrucciones detalladas.
            </p>
          </div>
        </section>

        {/* Section 2 — Top 7 */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Nuestro Top 7 de las Mejores Aplicaciones IPTV
            </h2>
            <div className="flex flex-col gap-5">
              {apps.map((app) => (
                <div
                  key={app.rank}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: app.rank === 1 ? '2px solid var(--color-lime)' : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          backgroundColor: app.rank === 1 ? 'var(--color-lime)' : 'var(--color-border)',
                          color: app.rank === 1 ? 'var(--color-dark)' : 'var(--color-ink-light)',
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
                        {app.rank}
                      </span>
                      <div>
                        <h3
                          className="font-display font-bold text-lg"
                          style={{ color: 'var(--color-ink)' }}
                        >
                          {app.name}
                        </h3>
                        <span className="text-xs" style={{ color: 'var(--color-ink-light)' }}>
                          {app.platforms} · {app.rating}
                        </span>
                      </div>
                    </div>
                    {app.badge && (
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'var(--color-lime)',
                          color: '#FFFFFF',
                        }}
                      >
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
                    {app.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-lime)' }}>
                        PUNTOS FUERTES
                      </p>
                      <ul className="flex flex-col gap-1">
                        {app.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-ink-light)' }}>
                            <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-lime)' }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-gray-400)' }}>
                        PUNTOS DÉBILES
                      </p>
                      <ul className="flex flex-col gap-1">
                        {app.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-ink-light)' }}>
                            <span className="mt-0.5 flex-shrink-0 text-gray-400">–</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Android */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Mejor Aplicación IPTV Android en 2026
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En Android TV y Fire TV Stick, el duelo se disputa entre{' '}
              <strong style={{ color: 'var(--color-ink)' }}>TiviMate</strong> e{' '}
              <strong style={{ color: 'var(--color-ink)' }}>IPTV Smarters Pro</strong>. TiviMate
              se impone para los usuarios más exigentes gracias a su notable EPG, su gestión
              de múltiples perfiles y su reproducción ultra-estable en 4K y 8K. Su versión premium
              (~5€/año) desbloquea las funcionalidades avanzadas como la grabación y los favoritos.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV Smarters Pro es la alternativa gratuita ideal para principiantes. Su interfaz
              sencilla, su compatibilidad Xtream Codes nativa y su disponibilidad en Android, iOS
              y PC la convierten en una elección versátil. Para los usuarios en teléfono Android
              (no TV), OTT Navigator o Perfect Player son también excelentes opciones.
            </p>
            <Link
              href="/guia-iptv/application-iptv-android"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: 'var(--color-lime)' }}
            >
              Guía completa: configurar TiviMate con VivaceTV en Android →
            </Link>
          </div>
        </section>

        {/* Section 4 — iOS */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Mejor Aplicación IPTV iOS (iPhone/iPad)
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En iPhone e iPad,{' '}
              <strong style={{ color: 'var(--color-ink)' }}>GSE Smart IPTV</strong>{' '}
              es la referencia. Disponible en el App Store, soporta los formatos M3U y Xtream
              Codes, integra una guía EPG completa y es compatible con Apple TV para disfrutar
              de tus canales en pantalla grande.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Para configurar VivaceTV con GSE Smart IPTV, sigue estos pasos: abre la aplicación,
              selecciona &quot;Remote Playlists&quot;, luego &quot;Add M3U URL&quot; y pega la URL M3U
              recibida por WhatsApp tras tu suscripción. Tus +22 000 canales aparecen
              automáticamente. IPTV Smarters Pro también está disponible en iOS y es una buena
              alternativa gratuita.
            </p>
            <Link
              href="/comprar-iptv"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{
                backgroundColor: 'var(--color-lime)',
                color: '#FFFFFF',
              }}
            >
              Obtener mis credenciales VivaceTV →
            </Link>
          </div>
        </section>

        {/* Section 5 — Configuración */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Cómo Configurar tu Aplicación IPTV con VivaceTV?
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {configSteps.map((s) => (
                <div
                  key={s.step}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-3"
                    style={{
                      backgroundColor: 'var(--color-lime)',
                      color: '#FFFFFF',
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV es compatible con TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect
              Player, OTT Navigator, Kodi, VLC y cualquier aplicación que soporte M3U o Xtream
              Codes. Consulta nuestra{' '}
              <Link
                href="/guia-iptv/installation-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guía de instalación completa
              </Link>{' '}
              o nuestra sección{' '}
              <Link
                href="/iptv-4k"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                IPTV 4K
              </Link>{' '}
              para optimizar tu experiencia.
            </p>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — Aplicaciones IPTV
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
                { href: '/comprar-iptv', label: 'Ver las suscripciones' },
                { href: '/guia-iptv/application-iptv-android', label: 'Guía Android IPTV' },
                { href: '/guia-iptv/installation-iptv', label: 'Guía instalación IPTV' },
                { href: '/iptv-4k', label: 'IPTV 4K & 8K' },
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
