import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: '¿Cómo Funciona el IPTV? Explicación Simple y Completa | VivaceTV',
  description:
    '¿Cómo funciona el IPTV? Entender el IPTV en 5 minutos: protocolos, M3U, EPG, VOD, equipo necesario y conexión requerida. Guía completa para principiantes.',
  keywords: [
    'cómo funciona iptv',
    'iptv cómo funciona',
    'iptv explicación',
    'iptv m3u playlist',
    'iptv epg',
    'iptv vod',
    'iptv principiantes',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/comment-fonctionne-iptv` },
  openGraph: {
    title: '¿Cómo Funciona el IPTV? Explicación Simple y Completa | VivaceTV',
    description:
      'Todo sobre el funcionamiento del IPTV: tecnología, equipo, conexión y primeros pasos con VivaceTV.',
    url: `${siteConfig.url}/guia-iptv/comment-fonctionne-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Necesito un equipo especial para usar IPTV?',
    answer:
      'No, no es necesario comprar hardware específico. El IPTV funciona en dispositivos que probablemente ya tenéis: Smart TV Samsung o LG, teléfono Android o iPhone, tableta, ordenador Windows o Mac, o incluso un dispositivo Amazon Firestick. Una aplicación IPTV (como TiviMate o IPTV Smarters) es suficiente para empezar.',
  },
  {
    question: '¿Qué velocidad de internet se necesita para IPTV?',
    answer:
      'Para una experiencia óptima en HD, una conexión de 10 Mbps es suficiente. Para 4K, preved al menos 25 Mbps. VivaceTV está optimizado para funcionar correctamente desde 15 Mbps para la mayoría de canales HD. La estabilidad de la conexión es tan importante como la velocidad bruta.',
  },
  {
    question: '¿Cuál es la diferencia entre IPTV y Netflix?',
    answer:
      'Netflix es una plataforma de streaming bajo demanda con un catálogo de películas y series. El IPTV ofrece además canales en directo (como la televisión tradicional), incluyendo canales de información, deportivos y entretenimiento en tiempo real. Un buen servicio IPTV combina canales en directo, replay y VOD, ofreciendo así mucho más que un servicio de SVOD clásico.',
  },
  {
    question: '¿Qué es una playlist M3U en IPTV?',
    answer:
      'Una playlist M3U es un archivo de texto que contiene las URLs de todos los flujos de canales a los que tenéis acceso. Cuando os suscribís a una suscripción IPTV como VivaceTV, recibís una URL M3U o identificadores Xtream Codes para configurar en vuestra aplicación IPTV preferida. Este archivo se actualiza automáticamente para reflejar el estado actual de los canales disponibles.',
  },
  {
    question: '¿Se puede ver IPTV en varios dispositivos a la vez?',
    answer:
      'Depende de vuestra suscripción. La mayoría de las ofertas IPTV permiten 1 a 2 conexiones simultáneas. VivaceTV especifica el número de conexiones simultáneas incluidas en cada fórmula en el momento de la suscripción. Para ver en varias pantallas a la vez, algunas fórmulas ofrecen conexiones múltiples.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Elegid vuestra suscripción VivaceTV',
    desc: 'Seleccionad la fórmula adaptada a vuestras necesidades (Bronze 3 meses, Silver 6 meses, Gold 12 meses o Diamond 24 meses) y realizad vuestro pago seguro.',
  },
  {
    num: '2',
    title: 'Recibid vuestros datos de acceso',
    desc: 'Tras la validación, recibís vuestra URL M3U o identificadores Xtream Codes por WhatsApp o email — generalmente en menos de 30 minutos.',
  },
  {
    num: '3',
    title: 'Instalad una aplicación IPTV',
    desc: 'Descargad TiviMate, IPTV Smarters Pro o Perfect Player en vuestro dispositivo. Estas aplicaciones son gratuitas o económicas y compatibles con todos los sistemas.',
  },
  {
    num: '4',
    title: 'Configurad vuestro acceso',
    desc: 'Introducid vuestra URL M3U o identificadores en la aplicación. La lista de canales se carga automáticamente — generalmente en 1 a 2 minutos.',
  },
  {
    num: '5',
    title: 'Disfrutad de vuestros canales',
    desc: 'Navegad entre los canales españoles, internacionales, deportivos y acceded a la mediateca VOD. La guía de programas (EPG) os ayuda a planificar vuestras sesiones.',
  },
];

const devices = [
  { name: 'Smart TV Samsung / LG', note: 'Aplicación nativa o Tizen/webOS' },
  { name: 'Android TV / Caja Android', note: 'TiviMate, IPTV Smarters Pro' },
  { name: 'Amazon Firestick / Fire TV', note: 'IPTV Smarters, Perfect Player' },
  { name: 'iPhone / iPad', note: 'GSE Smart IPTV, IPTV Smarters' },
  { name: 'PC Windows / Mac', note: 'VLC, Kodi, IPTV Smarters Web' },
  { name: 'Teléfono Android', note: 'TiviMate, GSE Smart IPTV' },
];

export default function CommentFonctionneIPTVPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: '¿Cómo Funciona el IPTV?', href: '/guia-iptv/comment-fonctionne-iptv' },
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
          label="GUÍA TÉCNICA"
          title="¿Cómo Funciona"
          titleHighlight="el IPTV?"
          subtitle="Explicación simple y completa de la tecnología IPTV — desde la transmisión de la señal hasta la visualización en vuestra pantalla, sin tecnicismos innecesarios."
        />

        {/* Section 1 — Qué es IPTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es el IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              <strong style={{ color: 'var(--color-ink)' }}>IPTV</strong> significa{' '}
              <em>Internet Protocol Television</em> — la televisión difundida a través del protocolo
              de internet. A diferencia de la televisión por cable o satélite que utiliza señales
              hertzianas o frecuencias de radio, el IPTV transporta los contenidos audiovisuales en
              forma de paquetes de datos digitales, exactamente como un email o una página web.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La diferencia fundamental con el satélite: no necesitáis{' '}
              <strong style={{ color: 'var(--color-ink)' }}>ninguna parabólica</strong>, ningún
              decodificador propietario, y no estáis limitados a una zona geográfica concreta. Mientras
              tengáis una conexión a internet suficiente, podéis ver IPTV desde cualquier lugar del
              mundo.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El IPTV no es una novedad: operadores como Movistar, Orange y Vodafone distribuyen
              sus canales via IPTV en sus cajas de internet desde hace más de 15 años. Lo que ofrecen
              los servicios IPTV independientes como VivaceTV es el acceso a un catálogo mucho más
              amplio — incluyendo canales internacionales, deportivos y contenido VOD — a través de
              una aplicación en el dispositivo de vuestra elección.
            </p>
          </div>
        </section>

        {/* Section 2 — Funcionamiento técnico */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              El Funcionamiento Técnico: M3U, EPG y VOD
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La Playlist M3U — La lista de todos vuestros canales
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Cuando os suscribís a una suscripción IPTV, recibís una{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>playlist M3U</strong> — un archivo
                  de texto (o una URL) que contiene las direcciones de cada flujo de canal. Vuestra
                  aplicación IPTV lee esta lista y os presenta un catálogo organizado por categorías.
                  Cada canal corresponde a un flujo de vídeo difundido en tiempo real desde los
                  servidores del proveedor.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  El EPG — La Guía de Programas Electrónica
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  El{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>EPG (Electronic Program Guide)</strong>{' '}
                  es el equivalente de la guía de TV en papel, pero integrado directamente en vuestra
                  aplicación. Muestra los programas pasados, en curso y próximos en cada canal —
                  generalmente para 7 a 14 días. Con un EPG completo, podéis navegar por programa
                  en lugar de por canal, y disfrutar del replay para los programas ya emitidos.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La VOD — Mediateca bajo Demanda
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  La{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>VOD (Video on Demand)</strong> es
                  la biblioteca de películas y series disponibles en cualquier momento, a diferencia
                  de los canales en directo que siguen una parrilla de programación. VivaceTV ofrece
                  +160.000 contenidos VOD en HD y 4K, accesibles desde la misma interfaz que los
                  canales en directo. Es el equivalente de Netflix integrado en vuestro servicio IPTV.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Xtream Codes — El Protocolo Profesional
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Algunos servicios IPTV usan el protocolo{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>Xtream Codes</strong> (también llamado
                  XC o Xtream API), que funciona con un nombre de usuario, una contraseña y una URL
                  de servidor. Este sistema ofrece una mejor gestión de las conexiones y los derechos
                  de acceso. Es compatible con todas las aplicaciones principales como TiviMate e
                  IPTV Smarters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Equipos */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Equipos Compatibles con IPTV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Una de las grandes ventajas del IPTV es su compatibilidad universal. En la mayoría de
              los casos no es necesario comprar hardware específico. Aquí los dispositivos compatibles
              con VivaceTV:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {devices.map((device) => (
                <div
                  key={device.name}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  <span className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>
                    {device.name}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--color-ink-light)' }}>
                    {device.note}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Para una experiencia óptima en gran pantalla sin Smart TV, un{' '}
              <strong style={{ color: 'var(--color-ink)' }}>Amazon Firestick 4K</strong> (unos 50€)
              o una{' '}
              <strong style={{ color: 'var(--color-ink)' }}>caja Android TV</strong> es la inversión
              más rentable. Estos dispositivos se conectan a cualquier televisor via HDMI y convierten
              cualquier TV en Smart TV.
            </p>
          </div>
        </section>

        {/* Section 4 — Conexión */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Conexión a Internet Necesaria para IPTV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              La calidad de vuestra experiencia IPTV depende directamente de vuestra conexión a
              internet. Aquí las velocidades recomendadas según la calidad deseada:
            </p>
            <div className="overflow-x-auto rounded-xl mb-6" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Calidad de vídeo', 'Velocidad mínima', 'Velocidad recomendada'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { quality: 'SD (480p)', min: '3 Mbps', rec: '5 Mbps' },
                    { quality: 'HD (720p)', min: '5 Mbps', rec: '10 Mbps' },
                    { quality: 'Full HD (1080p)', min: '10 Mbps', rec: '15 Mbps' },
                    { quality: '4K UHD', min: '25 Mbps', rec: '35 Mbps' },
                  ].map((row, idx) => (
                    <tr
                      key={row.quality}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-ink)' }}>
                        {row.quality}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                        {row.min}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                        {row.rec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Estas velocidades son por flujo activo. Si varias personas ven simultáneamente diferentes
              canales en vuestro hogar, multiplicad por el número de conexiones simultáneas. La conexión
              por cable (Ethernet) siempre es preferible al Wi-Fi para evitar interrupciones, especialmente
              para 4K.
            </p>
          </div>
        </section>

        {/* Section 5 — Empezar con VivaceTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Cómo Empezar con VivaceTV en 5 Pasos
            </h2>
            <div className="flex flex-col gap-5">
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'var(--color-lime)',
                      color: '#FFFFFF',
                      borderRadius: 999,
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-base mb-1"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
              >
                Elegir mi suscripción →
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

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — Funcionamiento del IPTV
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
                { href: '/guia-iptv/installation-iptv', label: 'Guía de instalación' },
                { href: '/guia-iptv/iptv-sur-pc', label: 'IPTV en PC' },
                { href: '/mejor-app-iptv', label: 'Mejores aplicaciones IPTV' },
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
