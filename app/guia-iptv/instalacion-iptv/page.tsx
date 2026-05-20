import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "Instalación IPTV : Guía Completa Paso a Paso 2026 | VivaceTV",
  description:
    "Cómo instalar IPTV en Android TV, Firestick, Smart TV Samsung y LG, PC y Mac. Guía completa de instalación IPTV con TiviMate e IPTV Smarters Pro.",
  keywords: [
    'instalación iptv',
    'instalar iptv',
    'iptv instalación',
    'instalar iptv android tv',
    'instalar iptv firestick',
    'instalar iptv smart tv',
    'tivimate instalación',
    'iptv smarters instalación',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/instalacion-iptv` },
  openGraph: {
    title: "Instalación IPTV : Guía Completa Paso a Paso 2026 | VivaceTV",
    description:
      "Guía completa de instalación IPTV para todos los dispositivos: Android TV, Firestick, Smart TV, PC y Mac. Configuración en menos de 5 minutos.",
    url: `${siteConfig.url}/guia-iptv/instalacion-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "¿Qué aplicación IPTV debo usar?",
    answer:
      "Para principiantes, IPTV Smarters Pro es la aplicación más sencilla de configurar. Para los usuarios que buscan la mejor interfaz, TiviMate en Android TV es la opción premium. En Smart TV Samsung, se recomienda la aplicación Smart IPTV o SSIPTV. VivaceTV es compatible con todas estas aplicaciones y os guiará durante la configuración.",
  },
  {
    question: "¿Cuánto tiempo se tarda en instalar IPTV?",
    answer:
      "La instalación suele tardar entre 5 y 15 minutos según vuestro dispositivo y vuestra familiaridad con las aplicaciones. Una vez activa vuestra suscripción VivaceTV, la configuración en sí solo lleva 2 o 3 minutos: instalar la aplicación, introducir la URL M3U o las credenciales, y esperar a que cargue la lista de canales.",
  },
  {
    question: "¿Tengo que configurar el EPG manualmente?",
    answer:
      "No, el EPG (guía de programas) suele estar incluido en vuestra suscripción VivaceTV y se carga automáticamente a través de la URL M3U. En algunas aplicaciones como TiviMate, hay que activar la opción de carga automática del EPG en los ajustes. Nuestro equipo de soporte puede guiaros en esta configuración.",
  },
  {
    question: "¿Qué hacer si el IPTV no funciona después de la instalación?",
    answer:
      "Verificad primero vuestra conexión a internet y la validez de vuestras credenciales. Si la lista de canales no carga, intentad forzar la actualización desde los ajustes de la aplicación. En caso de problema persistente, contactad al soporte VivaceTV por WhatsApp — nuestro equipo responde en menos de 15 minutos y os ayudará a resolver el problema paso a paso.",
  },
  {
    question: "¿Se puede instalar IPTV en Firestick sin pasar por la Amazon Store?",
    answer:
      "Sí, es posible mediante la instalación APK (fuentes desconocidas). En Firestick, debéis activar la opción 'Aplicaciones de fuentes desconocidas' en los ajustes del dispositivo, y luego usar la aplicación Downloader para descargar e instalar el APK de TiviMate o IPTV Smarters. Nuestra guía detallada está disponible por WhatsApp.",
  },
];

const troubleshootItems = [
  {
    problem: 'Buffering frecuente (almacenamiento en búfer)',
    solutions: [
      'Verificad vuestra velocidad de internet (mínimo 15 Mbps recomendado)',
      'Conectad vuestro dispositivo por Ethernet en lugar de Wi-Fi',
      'En TiviMate, aumentad el tamaño del búfer de reproducción (Settings > Player)',
      'Probad una calidad de stream inferior (HD en lugar de 4K)',
    ],
  },
  {
    problem: 'El EPG no se carga',
    solutions: [
      'Verificad que la URL del EPG esté correctamente introducida en los ajustes de la aplicación',
      'Forzad una actualización manual desde los ajustes',
      'Esperad entre 5 y 10 minutos tras añadir la lista — la primera carga puede tardar',
      'Contactad al soporte VivaceTV para verificar la validez de vuestro enlace EPG',
    ],
  },
  {
    problem: 'Error de autenticación',
    solutions: [
      'Verificad que hayáis copiado la URL M3U o las credenciales sin espacios ni caracteres adicionales',
      'Comprobad la fecha de caducidad de vuestra suscripción',
      'Probad desde otro dispositivo para aislar el problema',
      'Contactad al soporte VivaceTV para restablecer vuestros accesos',
    ],
  },
];

export default function InstallationIPTVPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: 'Instalación IPTV', href: '/guia-iptv/instalacion-iptv' },
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
          label="GUÍA DE INSTALACIÓN"
          title="Cómo Instalar"
          titleHighlight="el IPTV"
          subtitle="Guía paso a paso para instalar y configurar vuestro IPTV en todos vuestros dispositivos — Android TV, Firestick, Smart TV, PC y Mac. Configuración en menos de 10 minutos."
        />

        {/* Section 1 — Requisitos previos */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Lo que Necesitáis Antes de Empezar
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Antes de pasar a la instalación, aseguraos de disponer de estos tres elementos:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  num: '1',
                  title: 'Una suscripción VivaceTV activa',
                  desc: "Suscribíos a uno de nuestros planes (Bronze, Silver, Gold o Diamond) y recibiréis vuestras credenciales en menos de 30 minutos.",
                },
                {
                  num: '2',
                  title: 'Una aplicación IPTV compatible',
                  desc: 'TiviMate, IPTV Smarters Pro, Perfect Player o GSE Smart IPTV según vuestro dispositivo. La mayoría son gratuitas o muy económicas.',
                },
                {
                  num: '3',
                  title: 'Una conexión a internet estable',
                  desc: 'Mínimo 10 Mbps para HD, 25 Mbps para 4K. Una conexión Ethernet es preferible al Wi-Fi para mayor estabilidad.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-3"
                    style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="font-semibold text-sm mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/comprar-iptv"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
            >
              Obtener mi suscripción VivaceTV →
            </Link>
          </div>
        </section>

        {/* Section 2 — Android TV / Box */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Instalación IPTV en Android TV / Caja Android
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Android TV y las cajas Android (Xiaomi Mi Box, Nvidia Shield, etc.) ofrecen la mejor
              experiencia IPTV gracias a TiviMate, la aplicación IPTV más completa del mercado.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: 'Paso 1',
                  title: 'Instalar TiviMate',
                  desc: "Abrid el Google Play Store en vuestro Android TV. Buscad 'TiviMate IPTV Player' e instalad la aplicación gratuita. La versión gratuita es suficiente para empezar; TiviMate Premium (unos 5€/año) desbloquea funciones avanzadas como la grabación.",
                },
                {
                  step: 'Paso 2',
                  title: 'Añadir vuestra lista VivaceTV',
                  desc: "Lanzad TiviMate y seleccionad 'Añadir una lista'. Elegid 'URL M3U' y pegad la URL que habéis recibido de VivaceTV. Si tenéis credenciales Xtream Codes, seleccionad 'Xtream Codes' e introducid la URL del servidor, vuestro nombre de usuario y vuestra contraseña.",
                },
                {
                  step: 'Paso 3',
                  title: 'Cargar el EPG',
                  desc: "En los ajustes de TiviMate, activad la carga automática del EPG. La aplicación descargará automáticamente la guía de programas. Esta primera descarga puede tardar entre 2 y 5 minutos según el tamaño del EPG.",
                },
                {
                  step: 'Paso 4',
                  title: 'Navegar por vuestros canales',
                  desc: "Vuestra lista de canales ya está disponible, organizada por categorías (España, Deportes, Internacionales, VOD). Usad el mando a distancia para navegar y disfrutar de vuestro IPTV.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <span
                    className="text-xs font-bold px-2 py-1 rounded mb-2 inline-block"
                    style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-ink)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Firestick */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Instalación IPTV en Amazon Firestick / Fire TV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              El Firestick es uno de los dispositivos más populares para IPTV. Aunque la aplicación
              TiviMate no está disponible en la Amazon Appstore, IPTV Smarters Pro sí está disponible
              directamente o puede instalarse mediante APK.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: 'Paso 1',
                  title: 'Activar fuentes desconocidas (para APK)',
                  desc: "Si queréis instalar TiviMate mediante APK: id a Ajustes > Mi Fire TV > Opciones de desarrollador > Activar 'Aplicaciones de fuentes desconocidas'. Este paso solo es necesario para aplicaciones fuera de la Amazon Store.",
                },
                {
                  step: 'Paso 2',
                  title: 'Instalar IPTV Smarters Pro',
                  desc: "Desde la Amazon Appstore, buscad 'IPTV Smarters Pro' e instalad la aplicación. Está disponible gratuitamente. Alternativamente, instalad la aplicación Downloader desde la Amazon Store para descargar TiviMate en APK.",
                },
                {
                  step: 'Paso 3',
                  title: 'Configurar con vuestras credenciales VivaceTV',
                  desc: "En IPTV Smarters, seleccionad 'Login with Xtream Codes API' o 'Add URL/M3U URL' según el tipo de credenciales recibidas. Introducid vuestra información VivaceTV y validad. La lista de canales carga en 1 a 3 minutos.",
                },
                {
                  step: 'Paso 4',
                  title: 'Disfrutar de vuestros canales',
                  desc: "Navegad entre las pestañas Live TV, Movies y Series desde la interfaz principal de IPTV Smarters. El EPG se carga automáticamente si está incluido en vuestra URL M3U.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <span
                    className="text-xs font-bold px-2 py-1 rounded mb-2 inline-block"
                    style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-ink)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Smart TV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Instalación IPTV en Smart TV Samsung y LG
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Samsung Smart TV (Tizen OS)
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-ink-light)' }}>
                  En Samsung, instalad <strong style={{ color: 'var(--color-ink)' }}>Smart IPTV</strong>{' '}
                  o <strong style={{ color: 'var(--color-ink)' }}>SSIPTV</strong> desde la Samsung
                  App Store (buscad en la sección Mis Aplicaciones o Smart Hub). Una vez instalada,
                  la aplicación os pedirá vuestra URL M3U, que podéis introducir directamente o
                  configurar desde un ordenador mediante la interfaz web.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Nota: Smart IPTV ofrece un periodo de prueba gratuita de 7 días, y luego una licencia
                  única de aproximadamente 5,99€ por dispositivo. Es una inversión única que se amortiza
                  rápidamente.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  LG Smart TV (webOS)
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-ink-light)' }}>
                  En LG webOS, la aplicación{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>SS IPTV</strong> está disponible
                  directamente en el LG Content Store. Tras la instalación, configurad vuestra lista M3U
                  desde la interfaz web de la aplicación o directamente en el TV. El EPG se configura
                  en los ajustes de la aplicación.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Alternativa para LG: conectar un Firestick o una caja Android TV en el puerto HDMI
                  de vuestro LG para acceder a TiviMate — a menudo una mejor experiencia que las
                  aplicaciones nativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — PC/Mac */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Instalación IPTV en PC Windows y Mac
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En ordenador, hay varias soluciones disponibles. La más sencilla sigue siendo VLC Media
              Player, un programa gratuito y universal capaz de reproducir listas M3U directamente.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En VLC: id a Medio &gt; Abrir ubicación de red, pegad vuestra URL M3U y validad. Vuestros
              canales aparecerán en la lista de reproducción. Para una interfaz más completa, Kodi con
              el plugin IPTV Simple Client o una aplicación web IPTV como IPTV Smarters Web ofrecen
              una experiencia más completa con EPG y VOD.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Para una instalación detallada en PC y Mac, consultad nuestra{' '}
              <Link
                href="/guia-iptv/iptv-en-pc"
                style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}
              >
                guía completa IPTV en PC
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 6 — Resolución de problemas */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Resolución de Problemas Frecuentes
            </h2>
            <div className="flex flex-col gap-6">
              {troubleshootItems.map((item) => (
                <div
                  key={item.problem}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    Problema: {item.problem}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {item.solutions.map((sol, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <span style={{ color: 'var(--color-lime)', flexShrink: 0 }}>→</span>
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes — Instalación IPTV
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
                { href: '/mejor-app-iptv', label: 'Mejores aplicaciones IPTV' },
                { href: '/guia-iptv/como-funciona-iptv', label: "Cómo funciona el IPTV" },
                { href: '/guia-iptv/iptv-en-pc', label: 'IPTV en PC' },
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
