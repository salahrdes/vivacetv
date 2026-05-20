import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Aplicación IPTV Android : Las 5 Mejores Apps en 2026 | VivaceTV',
  description:
    '¿Cuál es la mejor aplicación IPTV Android en 2026? Comparativa completa: TiviMate, IPTV Smarters Pro, Perfect Player, GSE Smart IPTV, Kodi. Guía e instalación.',
  keywords: [
    'aplicación iptv android',
    'iptv android',
    'mejor aplicación iptv android',
    'tivimate android',
    'iptv smarters android',
    'perfect player iptv',
    'gse smart iptv',
    'kodi iptv android',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/application-iptv-android` },
  openGraph: {
    title: 'Aplicación IPTV Android : Las 5 Mejores Apps en 2026 | VivaceTV',
    description:
      'Comparativa completa de las mejores aplicaciones IPTV para Android y Firestick en 2026: TiviMate, IPTV Smarters, Perfect Player, GSE Smart IPTV y Kodi.',
    url: `${siteConfig.url}/guia-iptv/application-iptv-android`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Qué aplicación IPTV Android se recomienda para principiantes?',
    answer:
      'Para principiantes, IPTV Smarters Pro es la aplicación más fácil de configurar. Su interfaz intuitiva y su asistente de configuración guiado permiten estar operativo en menos de 5 minutos. Está disponible gratuitamente en Google Play Store y admite URLs M3U e identificadores Xtream Codes.',
  },
  {
    question: '¿TiviMate es gratuito?',
    answer:
      'TiviMate tiene una versión gratuita funcional, pero la versión Premium (aproximadamente 5€/año o 19€ de por vida) es muy recomendable para acceder a las funciones avanzadas: grabación PVR, catch-up, paneles múltiples, personalización avanzada de la interfaz. La relación calidad/precio de TiviMate Premium es excelente.',
  },
  {
    question: '¿Puedo usar varias aplicaciones IPTV con la misma suscripción?',
    answer:
      'Sí, vuestros datos de acceso VivaceTV (URL M3U o Xtream Codes) pueden usarse simultáneamente en varias aplicaciones, dentro del límite de conexiones simultáneas incluidas en vuestra suscripción. Podéis por ejemplo usar TiviMate en vuestro Android TV e IPTV Smarters en vuestro teléfono.',
  },
  {
    question: '¿Qué aplicación funciona mejor en Firestick?',
    answer:
      'IPTV Smarters Pro está disponible directamente en Amazon Appstore y está optimizado para la interfaz de mando a distancia del Firestick. TiviMate, aunque requiere instalación APK en Firestick, ofrece una mejor experiencia global una vez configurado. Nuestro soporte VivaceTV puede guiaros en la instalación en Firestick.',
  },
  {
    question: '¿VivaceTV es compatible con todas las aplicaciones IPTV Android?',
    answer:
      'Sí, VivaceTV es compatible con todas las principales aplicaciones IPTV en Android: TiviMate, IPTV Smarters Pro, Perfect Player, GSE Smart IPTV, Kodi, VLC y muchas más. Proporcionamos tanto URLs M3U como identificadores Xtream Codes, los dos formatos de autenticación más utilizados.',
  },
];

const apps = [
  {
    rank: 1,
    name: 'TiviMate',
    badge: 'MEJOR GLOBAL',
    rating: '5/5',
    price: 'Gratis / Premium ~5€/año',
    playstore: true,
    apk: true,
    highlights: [
      'Interfaz Material Design premium',
      'EPG completo con guía de 14 días',
      'Multi-playlist (varias suscripciones)',
      'Grabación PVR (versión Premium)',
      'Catch-up / Replay integrado',
      'Paneles multi-pantalla',
    ],
    verdict: 'TiviMate es la aplicación IPTV Android más completa del mercado. Su elegante interfaz, su rendimiento y sus funciones avanzadas la convierten en la elección premium para los usuarios exigentes en Android TV y cajas Android. La versión Premium merece totalmente su bajo coste anual.',
    ideal: 'Android TV, cajas Android (Nvidia Shield, Xiaomi Mi Box)',
  },
  {
    rank: 2,
    name: 'IPTV Smarters Pro',
    badge: 'MEJOR PARA PRINCIPIANTES',
    rating: '4.5/5',
    price: 'Gratis',
    playstore: true,
    apk: false,
    highlights: [
      'Configuración en 2 minutos',
      'Admite M3U y Xtream Codes',
      'Multi-dispositivo en una cuenta',
      'Interfaz clara e intuitiva',
      'VOD y replay integrados',
      'Disponible en Amazon Store',
    ],
    verdict: 'IPTV Smarters Pro es la aplicación ideal para quienes empiezan con IPTV. Su interfaz clara y su proceso de configuración simplificado permiten estar operativo en pocos minutos. Está disponible gratuitamente en Play Store y Amazon Appstore (Firestick).',
    ideal: 'Todos los dispositivos Android, Firestick, tabletas',
  },
  {
    rank: 3,
    name: 'Perfect Player',
    badge: 'MEJOR GRATUITA',
    rating: '4/5',
    price: 'Completamente gratuito',
    playstore: true,
    apk: true,
    highlights: [
      '100% gratuito sin limitaciones',
      'Interfaz TV clásica',
      'Personalización avanzada',
      'Admite M3U y XSPF',
      'Ligera y rápida',
      'Compatible con mandos a distancia',
    ],
    verdict: 'Perfect Player es la mejor opción completamente gratuita. Su interfaz de TV tradicional (similar a la presentación de un canal de satélite) resultará familiar a los usuarios que no quieren aprender nuevos hábitos. Ideal en dispositivos con recursos limitados.',
    ideal: 'Todos los dispositivos Android, cajas Android de entrada de gama',
  },
  {
    rank: 4,
    name: 'GSE Smart IPTV',
    badge: 'FUNCIONES AVANZADAS',
    rating: '4/5',
    price: 'Gratis (compras integradas)',
    playstore: true,
    apk: false,
    highlights: [
      'Catch-up avanzado por canal',
      'Soporte multi-formato (M3U, JSON)',
      'Interfaz personalizable',
      'Estadísticas de reproducción',
      'Gestión avanzada de playlists',
      'Compatible iOS y Android',
    ],
    verdict: 'GSE Smart IPTV destaca por sus funciones de catch-up avanzadas y su amplia compatibilidad con diferentes formatos de playlist. Es la elección de los usuarios que desean una gestión precisa de su contenido y un control avanzado sobre su experiencia de visualización.',
    ideal: 'Smartphones Android e iPhone/iPad (multiplataforma)',
  },
  {
    rank: 5,
    name: 'Kodi con IPTV Simple Client',
    badge: 'MÁS POTENTE',
    rating: '4/5',
    price: 'Gratis (código abierto)',
    playstore: false,
    apk: true,
    highlights: [
      'Mediacenter completo',
      'Extensiones y plugins ilimitados',
      'EPG completo con PVR',
      'Interfaz 10-foot TV',
      'Comunidad masiva',
      'Personalización total',
    ],
    verdict: 'Kodi es el mediacenter de código abierto más potente disponible. A través del plugin IPTV Simple Client, se convierte en una solución IPTV completa con EPG, catch-up y grabación. La configuración es más compleja, pero el resultado es una experiencia inigualable para usuarios avanzados.',
    ideal: 'Usuarios avanzados, Android TV, PC, Raspberry Pi',
  },
];

export default function ApplicationIPTVAndroidPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: 'Aplicación IPTV Android', href: '/guia-iptv/application-iptv-android' },
        ]}
      />
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
      <Header />

      <main id="main-content">
        <PageHero
          label="APLICACIONES ANDROID"
          title="Aplicación IPTV Android:"
          titleHighlight="Las 5 Mejores Apps en 2026"
          subtitle="Comparativa completa y honesta de las mejores aplicaciones IPTV para Android, Android TV y Firestick. Elegid la app que corresponde a vuestro nivel y vuestro dispositivo."
        />

        {/* Section 1 — Vista general */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Las Mejores Aplicaciones IPTV Android: Vista General
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El ecosistema Android ofrece la mayor selección de aplicaciones IPTV del mercado. A diferencia
              de iOS donde las restricciones de Apple limitan las opciones disponibles, Android permite
              instalar cualquier aplicación desde Play Store o mediante un archivo APK.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Todas las aplicaciones presentadas aquí son compatibles con VivaceTV y admiten los dos métodos
              de autenticación que ofrecemos: la URL M3U directa y los identificadores Xtream Codes. La elección
              de aplicación no afectará la calidad de vuestros flujos — únicamente determinará vuestra experiencia
              de interfaz.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Nuestra recomendación rápida: <strong style={{ color: 'var(--color-ink)' }}>TiviMate para
              Android TV</strong>, <strong style={{ color: 'var(--color-ink)' }}>IPTV Smarters Pro para
              Firestick y principiantes</strong>, y{' '}
              <strong style={{ color: 'var(--color-ink)' }}>Perfect Player</strong> si preferís una solución
              completamente gratuita.
            </p>
          </div>
        </section>

        {/* Sections — Apps */}
        {apps.map((app, idx) => (
          <section
            key={app.name}
            className="py-16 lg:py-20"
            style={{
              backgroundColor: idx % 2 === 0 ? 'var(--color-surface-alt)' : 'var(--color-surface)',
            }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    style={{
                      backgroundColor: app.rank === 1 ? 'var(--color-lime)' : 'var(--color-surface-alt)',
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
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {app.rank}
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: app.rank === 1 ? 'var(--color-lime)' : 'var(--color-lime-soft)',
                      color: 'var(--color-dark)',
                    }}
                  >
                    {app.badge}
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-2xl lg:text-3xl"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {app.name}
                </h2>
                <div className="flex gap-4 mt-2">
                  <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    Nota: <strong style={{ color: 'var(--color-ink)' }}>{app.rating}</strong>
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    Precio: <strong style={{ color: 'var(--color-ink)' }}>{app.price}</strong>
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <h3
                    className="font-semibold text-sm mb-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    Puntos fuertes
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {app.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <span style={{ color: 'var(--color-lime)', flexShrink: 0 }}>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div>
                    <h3
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      Ideal para
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                      {app.ideal}
                    </p>
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-sm mb-1"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      Disponibilidad
                    </h3>
                    <div className="flex gap-2">
                      {app.playstore && (
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                        >
                          Play Store
                        </span>
                      )}
                      {app.apk && (
                        <span
                          className="text-xs px-2 py-1 rounded"
                          style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                        >
                          APK directo
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                {app.verdict}
              </p>
            </div>
          </section>
        ))}

        {/* Section — Instalación Firestick vs Android TV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Instalación en Firestick / Android TV vs Smartphone Android
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  En Android TV y cajas Android
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-ink-light)' }}>
                  En Android TV (Nvidia Shield, Xiaomi Mi Box, cajas genéricas), instalad TiviMate directamente
                  desde Google Play Store. La aplicación está optimizada para mandos a distancia y grandes pantallas.
                  La configuración con vuestros datos de acceso VivaceTV tarda menos de 3 minutos.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Para las cajas sin Google Play, usad la aplicación APK de TiviMate o Perfect Player, descargable
                  desde su sitio oficial. Activad previamente la opción "Fuentes desconocidas" en los ajustes de
                  seguridad de vuestro dispositivo.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  En Amazon Firestick / Fire TV
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-ink-light)' }}>
                  IPTV Smarters Pro está disponible directamente en Amazon Appstore — no se necesita ninguna
                  manipulación adicional. Buscad simplemente "IPTV Smarters Pro" desde la barra de búsqueda de
                  vuestro Firestick e instalad la aplicación.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Para instalar TiviMate en Firestick (recomendado para la mejor experiencia), activad primero
                  "Aplicaciones de fuentes desconocidas" en Configuración &gt; Mi Fire TV &gt; Opciones de
                  desarrollador, luego usad la aplicación Downloader para descargar el APK de TiviMate.
                  Nuestro soporte VivaceTV os acompaña paso a paso por WhatsApp.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  En Smartphone y Tableta Android
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  En teléfono Android, TiviMate, IPTV Smarters y GSE Smart IPTV están todos disponibles en
                  Play Store. La experiencia es idéntica a Android TV para la calidad de los flujos, pero la
                  interfaz está adaptada a las pantallas táctiles y al uso móvil. Perfect Player también es una
                  buena opción para uso ocasional en smartphone.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Comprar una suscripción VivaceTV →
              </Link>
              <Link
                href="/guia-iptv/installation-iptv"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  backgroundColor: 'var(--color-card)',
                }}
              >
                Guía de instalación completa →
              </Link>
            </div>
          </div>
        </section>

        {/* Section — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — Aplicaciones IPTV Android
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
                { href: '/comprar-iptv', label: 'Ver los planes' },
                { href: '/mejor-app-iptv', label: 'Guía aplicaciones IPTV' },
                { href: '/guia-iptv/installation-iptv', label: 'Guía de instalación' },
                { href: '/guia-iptv/iptv-sur-pc', label: 'IPTV en PC' },
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
