import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "IPTV en PC : Los Mejores Métodos para Ver IPTV en Ordenador | VivaceTV",
  description:
    "¿Cómo ver IPTV en PC Windows y Mac? Guía completa: VLC Media Player, IPTV Smarters Web, Kodi. Configuración y ajustes para la mejor calidad.",
  keywords: [
    'iptv en pc',
    'iptv pc',
    'iptv en ordenador',
    'iptv vlc',
    'iptv kodi',
    'iptv smarters pc',
    'ver iptv ordenador',
    'iptv windows',
    'iptv mac',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/iptv-sur-pc` },
  openGraph: {
    title: "IPTV en PC : Los Mejores Métodos para Ver IPTV en Ordenador | VivaceTV",
    description:
      "Todo para ver IPTV en vuestro ordenador Windows o Mac: VLC, Kodi, IPTV Smarters Web. Métodos probados y configuración óptima.",
    url: `${siteConfig.url}/guia-iptv/iptv-sur-pc`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "¿Es gratuito VLC Media Player para ver IPTV?",
    answer:
      "Sí, VLC Media Player es completamente gratuito y de código abierto. Está disponible para Windows, Mac y Linux. Es la solución más sencilla para empezar con IPTV en PC: basta con abrir vuestra URL M3U desde el menú Medio > Abrir ubicación de red. No se necesita ninguna configuración compleja.",
  },
  {
    question: "¿Funciona el IPTV en Mac?",
    answer:
      "Sí, el IPTV funciona perfectamente en Mac. VLC está disponible para macOS y funciona de forma idéntica a la versión Windows. Kodi también está disponible para Mac. IPTV Smarters dispone de una versión web accesible desde cualquier navegador, incluyendo Safari en Mac.",
  },
  {
    question: "¿Cuál es la mejor aplicación IPTV para PC?",
    answer:
      "Para principiantes, VLC es la solución más sencilla. Para una interfaz completa con EPG y VOD, Kodi con el plugin IPTV Simple Client es la mejor opción. Para una experiencia intermedia sin instalación compleja, un reproductor IPTV web como IPTV Smarters Web es una excelente alternativa.",
  },
  {
    question: "¿Es posible el IPTV en el navegador?",
    answer:
      "Sí, algunos servicios IPTV ofrecen un reproductor web accesible directamente desde vuestro navegador (Chrome, Firefox, Edge). VivaceTV puede proporcionaros la información necesaria para acceder a un player web si está disponible. Esta solución no requiere ninguna instalación y funciona en todos los sistemas operativos.",
  },
  {
    question: "¿Hay retraso (latencia) con el IPTV en PC?",
    answer:
      "Un ligero retraso de unos pocos segundos es normal en los canales en directo de IPTV — es inherente a la tecnología de streaming. VLC permite ajustar la caché (buffer) en los parámetros de red para encontrar el equilibrio correcto entre fluidez y latencia. Para eventos deportivos, un cable Ethernet en lugar de Wi-Fi reduce significativamente este retraso.",
  },
];

const methods = [
  {
    id: 'vlc',
    title: 'Método 1: VLC Media Player',
    badge: 'RECOMENDADO PRINCIPIANTES',
    badgeColor: 'var(--color-lime)',
    pros: ['100% gratuito', 'Disponible Windows/Mac/Linux', 'Sin configuración compleja', 'Códec universal'],
    cons: ['Interfaz básica', 'Sin EPG integrado', 'Navegación entre canales limitada'],
    steps: [
      "Descargad VLC desde videolan.org (gratuito, seguro)",
      "Lanzad VLC y id a Medio > Abrir ubicación de red",
      "Pegad vuestra URL M3U VivaceTV en el campo URL y validad",
      "La lista de canales se abre en la ventana Lista de reproducción (Ver > Lista de reproducción)",
      "Haced doble clic en un canal para iniciar la reproducción",
    ],
  },
  {
    id: 'smarters',
    title: 'Método 2: IPTV Smarters Web',
    badge: 'INTERFAZ COMPLETA',
    badgeColor: 'var(--color-ink)',
    pros: ["Interfaz moderna con EPG", 'Accesible en navegador', 'VOD y replay integrados', 'Multiplataforma'],
    cons: ['Requiere conexión a internet', 'Rendimiento depende del navegador'],
    steps: [
      "Acceded a la URL web de vuestro reproductor IPTV Smarters",
      "Seleccionad 'Xtream Codes' o 'M3U URL' según vuestras credenciales",
      "Introducid vuestras credenciales VivaceTV y conectaos",
      "Navegad entre TV en Directo, Películas y Series desde la interfaz",
      "Usad el EPG integrado para ver la parrilla de programas",
    ],
  },
  {
    id: 'kodi',
    title: 'Método 3: Kodi con IPTV Simple Client',
    badge: 'MÁS POTENTE',
    badgeColor: 'var(--color-gray-600)',
    pros: ['Interfaz TV profesional', 'EPG completo', 'Extensiones y personalización', 'VOD y catch-up'],
    cons: ['Configuración más compleja', 'Requiere instalar el plugin'],
    steps: [
      "Descargad e instalad Kodi desde kodi.tv (gratuito)",
      "En Kodi: Ajustes > Extensiones > Instalar desde repositorio",
      "Acceded a Extensiones Kodi.tv > Clientes PVR > IPTV Simple Client",
      "Activad la extensión e introducid vuestra URL M3U en la configuración",
      "Reiniciad Kodi — vuestros canales aparecen en la sección TV",
    ],
  },
];

const settings = [
  {
    title: "Aceleración de hardware (Hardware Decoding)",
    desc: "Activad la decodificación por hardware en VLC (Herramientas > Preferencias > Entrada / Códecs) para usar vuestra tarjeta gráfica. Reduce la carga de la CPU y mejora la fluidez, especialmente para contenido 4K.",
  },
  {
    title: "Tamaño del búfer de red (Caché)",
    desc: "En VLC, aumentad la caché de red a 2000-3000 ms (Herramientas > Preferencias > Todo > Entrada > Caché). Reduce las interrupciones pero aumenta ligeramente la latencia.",
  },
  {
    title: "Resolución de pantalla",
    desc: "Para 4K, aseguraos de que vuestro monitor admite la resolución 3840×2160 y que vuestra conexión a internet supera los 25 Mbps. Por debajo, preferid el Full HD (1080p).",
  },
  {
    title: "Conexión Ethernet vs Wi-Fi",
    desc: "Una conexión por cable RJ45 es siempre preferible al Wi-Fi para IPTV en PC. Ofrece menor latencia y mayor estabilidad, esencial para contenido 4K y eventos en directo.",
  },
];

export default function IPTVSurPCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: 'IPTV en PC', href: '/guia-iptv/iptv-sur-pc' },
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
          label="IPTV EN ORDENADOR"
          title="IPTV en PC:"
          titleHighlight="Los Mejores Métodos"
          subtitle="Ved IPTV en vuestro ordenador Windows o Mac con VLC, Kodi o un reproductor web. Guía completa con pasos detallados y ajustes óptimos."
        />

        {/* Section 1 — Por qué PC */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Por qué Ver IPTV en PC?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Ver IPTV en vuestro ordenador tiene varias ventajas concretas. Primero, vuestro PC
              probablemente ya está conectado por Ethernet — la conexión ideal para un streaming
              estable y sin interrupciones. Además, la potencia de cálculo de un ordenador moderno
              gestiona fácilmente flujos en 4K sin ningún signo de ralentización.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El PC también ofrece un control más preciso gracias al teclado y al ratón, especialmente
              útil para navegar en grandes listas de canales o configurar opciones avanzadas. También
              podéis mostrar el IPTV en una ventana mientras continuáis usando otras aplicaciones
              en paralelo.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Finalmente, si disponéis de un gran monitor o de un PC conectado a una televisión por
              HDMI, la experiencia es comparable a la de una Smart TV, con la flexibilidad adicional
              de un ordenador.
            </p>
          </div>
        </section>

        {/* Sections 2-4 — Métodos */}
        {methods.map((method, idx) => (
          <section
            key={method.id}
            className="py-16 lg:py-20"
            style={{
              backgroundColor: idx % 2 === 0 ? 'var(--color-surface-alt)' : 'var(--color-surface)',
            }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                    style={{
                      backgroundColor: method.badgeColor === 'var(--color-lime)' ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: method.badgeColor === 'var(--color-lime)' ? 'var(--color-dark)' : 'var(--color-ink-light)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {method.badge}
                  </span>
                  <h2
                    className="font-display font-bold text-2xl lg:text-3xl"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {method.title}
                  </h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-ink)' }}>
                    Ventajas
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {method.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <span style={{ color: 'var(--color-lime)' }}>✓</span> {pro}
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
                  }}
                >
                  <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-ink)' }}>
                    Limitaciones
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {method.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <span style={{ color: 'var(--color-gray-400)' }}>–</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-4" style={{ color: 'var(--color-ink)' }}>
                Pasos de configuración
              </h3>
              <ol className="flex flex-col gap-3">
                {method.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--color-ink-light)' }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}

        {/* Section 5 — Ajustes */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Ajustes Recomendados para el Mejor Rendimiento
            </h2>
            <div className="flex flex-col gap-5">
              {settings.map((setting) => (
                <div
                  key={setting.title}
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
                    {setting.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {setting.desc}
                  </p>
                </div>
              ))}
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
              Preguntas Frecuentes — IPTV en PC
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
                { href: '/guia-iptv/installation-iptv', label: "Guía de instalación" },
                { href: '/mejor-app-iptv', label: 'Mejores aplicaciones IPTV' },
                { href: '/guia-iptv/comment-fonctionne-iptv', label: "Cómo funciona el IPTV" },
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
