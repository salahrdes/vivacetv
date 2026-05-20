'use client';

import { useState } from 'react';
import { Tv, Flame, TabletSmartphone, Apple, Monitor, Box, Check, AlertCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';
import { cn } from '@/lib/utils';

type Step = {
  title: string;
  description: string;
};

type Device = {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
  appName: string;
  appBadge: string;
  steps: Step[];
  tip?: string;
  warning?: string;
};

const devices: Device[] = [
  {
    id: 'firestick',
    label: 'Fire TV Stick',
    shortLabel: 'Firestick',
    icon: <Flame size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Recomendado',
    steps: [
      {
        title: 'Activar fuentes desconocidas',
        description:
          'Desde la pantalla de inicio, ve a Ajustes → Mi Fire TV → Opciones para desarrolladores. Activa "Aplicaciones de fuentes desconocidas".',
      },
      {
        title: 'Instalar la aplicación Downloader',
        description:
          'Vuelve al inicio y busca "Downloader" en la barra de búsqueda de Amazon. Instala la aplicación gratuita.',
      },
      {
        title: 'Descargar IPTV Smarters Pro',
        description:
          'Abre Downloader e introduce el código 6578878 en la barra de direcciones, luego pulsa Ir. La aplicación se descarga automáticamente.',
      },
      {
        title: 'Instalar y abrir la aplicación',
        description:
          'Una vez completada la descarga, pulsa Instalar y luego Abrir para lanzar IPTV Smarters Pro.',
      },
      {
        title: 'Iniciar sesión con tus credenciales',
        description:
          'Selecciona "Conexión mediante Xtream Codes API". Introduce la URL del servidor, el nombre de usuario y la contraseña que recibiste por WhatsApp.',
      },
      {
        title: 'Disfruta de tus canales',
        description:
          'Tus canales, películas y series se cargan automáticamente. Navega por categorías o usa la búsqueda para encontrar tu contenido.',
      },
    ],
    tip: 'Usa tu conexión Wi-Fi en lugar de Ethernet para una configuración más sencilla. Reinicia tu Fire Stick tras la instalación para un mejor rendimiento.',
  },
  {
    id: 'smart-tv',
    label: 'Smart TV Samsung / LG',
    shortLabel: 'Smart TV',
    icon: <Tv size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Recomendado',
    steps: [
      {
        title: 'Acceder a la tienda de tu TV',
        description:
          'Pulsa el botón Inicio de tu mando. Abre Samsung Apps Store (Samsung) o LG Content Store (LG).',
      },
      {
        title: 'Buscar IPTV Smarters Pro',
        description:
          'En la barra de búsqueda de la tienda, escribe "IPTV Smarters Pro". Selecciona la aplicación en los resultados.',
      },
      {
        title: 'Descargar e instalar',
        description:
          'Haz clic en Descargar o Instalar. Espera a que finalice la descarga (unos segundos según tu conexión).',
      },
      {
        title: 'Lanzar la aplicación',
        description:
          'Vuelve al menú principal y abre IPTV Smarters Pro desde la lista de tus aplicaciones instaladas.',
      },
      {
        title: 'Introducir tus credenciales',
        description:
          'Elige "Conexión mediante Xtream Codes API". Introduce la URL del servidor, tu nombre de usuario y contraseña proporcionados por VivaceTV.',
      },
      {
        title: 'Ver en directo',
        description:
          'La lista completa de tus canales y contenidos VOD se carga automáticamente. Disfruta del contenido en HD, 4K o 8K según tu plan.',
      },
    ],
    tip: 'Si tu Smart TV no encuentra IPTV Smarters Pro en su tienda, contáctanos por WhatsApp — tenemos soluciones alternativas para cada modelo de TV.',
    warning: 'Algunos modelos de Smart TV más antiguos pueden necesitar la aplicación Smart IPTV o una configuración mediante dirección MAC. Contacta con nuestro soporte para una guía personalizada.',
  },
  {
    id: 'android',
    label: 'Android (teléfono / tablet)',
    shortLabel: 'Android',
    icon: <TabletSmartphone size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Gratis en Play Store',
    steps: [
      {
        title: 'Abrir Google Play Store',
        description:
          'Desde tu dispositivo Android, abre la aplicación Google Play Store. Asegúrate de estar conectado con tu cuenta de Google.',
      },
      {
        title: 'Buscar IPTV Smarters Pro',
        description:
          'En la barra de búsqueda, escribe "IPTV Smarters Pro". Selecciona la aplicación oficial en los resultados.',
      },
      {
        title: 'Instalar la aplicación',
        description:
          'Pulsa "Instalar". La aplicación es gratuita y se descarga en pocos segundos.',
      },
      {
        title: 'Lanzar IPTV Smarters Pro',
        description:
          'Una vez instalada, abre la aplicación desde tu pantalla de inicio o el cajón de aplicaciones.',
      },
      {
        title: 'Conexión con Xtream Codes',
        description:
          'Selecciona "Conexión mediante Xtream Codes API" e introduce la URL del servidor, tu nombre de usuario y contraseña recibidos por WhatsApp.',
      },
      {
        title: 'Acceder a tus contenidos',
        description:
          'Tus canales y contenidos VOD se cargan al instante. Navega por categorías, busca un canal o película y disfruta del streaming.',
      },
    ],
    tip: 'Para una mejor experiencia, usa Wi-Fi en lugar de datos móviles, especialmente para contenidos en 4K. La aplicación también funciona en boxes Android TV.',
  },
  {
    id: 'ios',
    label: 'iPhone / iPad (iOS)',
    shortLabel: 'iPhone / iPad',
    icon: <Apple size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Disponible en App Store',
    steps: [
      {
        title: 'Abrir la App Store',
        description:
          'En tu iPhone o iPad, abre la App Store desde tu pantalla de inicio.',
      },
      {
        title: 'Buscar la aplicación',
        description:
          'Pulsa la pestaña Buscar en la parte inferior de la pantalla y escribe "IPTV Smarters Pro". También puedes buscar "GSE Smart IPTV" como alternativa.',
      },
      {
        title: 'Descargar gratis',
        description:
          'Pulsa "Obtener" para descargar la aplicación. Puede solicitarse autenticación con Face ID, Touch ID o contraseña de Apple.',
      },
      {
        title: 'Abrir la aplicación',
        description:
          'Una vez completada la descarga, pulsa "Abrir" o lanza la app desde tu pantalla de inicio.',
      },
      {
        title: 'Añadir tu suscripción',
        description:
          'Elige "Xtream Codes API" como método de conexión. Introduce la URL del servidor, el nombre de usuario y la contraseña proporcionados por VivaceTV.',
      },
      {
        title: 'Ver en tu iPhone',
        description:
          'Tus contenidos están listos. También puedes emitir en tu televisión mediante AirPlay si tienes un Apple TV o un televisor compatible con AirPlay.',
      },
    ],
    tip: 'Compatible con iPhone 8 y versiones posteriores, y todos los iPad con iOS 14 o superior. Para ver en tu TV, usa AirPlay 2 o un cable Lightning/USB-C a HDMI.',
  },
  {
    id: 'pc-windows',
    label: 'PC Windows',
    shortLabel: 'Windows',
    icon: <Monitor size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Microsoft Store',
    steps: [
      {
        title: 'Abrir Microsoft Store',
        description:
          'Haz clic en el botón Inicio de Windows y busca "Microsoft Store", o pulsa la tecla Windows y escribe "Store".',
      },
      {
        title: 'Buscar IPTV Smarters Pro',
        description:
          'En la barra de búsqueda de Microsoft Store, escribe "IPTV Smarters Pro" y selecciona la aplicación en los resultados.',
      },
      {
        title: 'Descargar e instalar',
        description:
          'Haz clic en "Obtener" o "Instalar". La aplicación se descarga e instala automáticamente.',
      },
      {
        title: 'Lanzar desde el menú Inicio',
        description:
          'Una vez instalada, encuentra IPTV Smarters Pro en tu menú Inicio y ábrela.',
      },
      {
        title: 'Conexión con tus credenciales',
        description:
          'Selecciona "Xtream Codes API", e introduce la URL del servidor, tu nombre de usuario y contraseña recibidos por WhatsApp.',
      },
      {
        title: 'Disfruta del contenido',
        description:
          'Navega por tus canales y películas directamente desde tu PC. Para una mejor experiencia, usa la aplicación en modo pantalla completa.',
      },
    ],
    tip: 'Compatible con Windows 10 y Windows 11 (32 y 64 bits). VLC Media Player también puede usarse como reproductor IPTV cargando tu enlace M3U directamente.',
  },
  {
    id: 'mac',
    label: 'Mac (macOS)',
    shortLabel: 'Mac',
    icon: <Box size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'App Store Mac',
    steps: [
      {
        title: 'Abrir la App Store en Mac',
        description:
          'Haz clic en el icono App Store de tu Dock o desde Launchpad. Asegúrate de estar conectado con tu ID de Apple.',
      },
      {
        title: 'Buscar la aplicación',
        description:
          'En la barra de búsqueda de la App Store, escribe "IPTV Smarters Pro" o "GSE Smart IPTV" y pulsa Intro.',
      },
      {
        title: 'Descargar',
        description:
          'Haz clic en "Obtener" y luego "Descargar". La aplicación se instala automáticamente en tu carpeta Aplicaciones.',
      },
      {
        title: 'Autorizar la aplicación',
        description:
          'En el primer lanzamiento, macOS puede pedirte que autorices la app. Ve a Ajustes del Sistema → Privacidad y seguridad para autorizarla.',
      },
      {
        title: 'Introducir tus credenciales',
        description:
          'Elige "Xtream Codes API" e introduce la URL del servidor, tu nombre de usuario y contraseña proporcionados por VivaceTV.',
      },
      {
        title: 'Iniciar el streaming',
        description:
          'Tus canales y contenidos VOD están disponibles de inmediato. La aplicación está optimizada para Mac con Apple Silicon (M1/M2/M3).',
      },
    ],
    tip: 'Compatible con macOS 11 Big Sur y versiones posteriores, incluidos los Mac Apple Silicon M1/M2/M3. También puedes usar VLC con un enlace M3U para una solución 100% gratuita.',
  },
];

export default function InstallationGuideSection() {
  const [activeId, setActiveId] = useState(devices[0].id);
  const active = devices.find((d) => d.id === activeId) ?? devices[0];

  return (
    <section
      id="installation"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="installation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase"
            style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-lime)' }}
          >
            Instalación paso a paso
          </span>
          <h2
            id="installation-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            style={{ color: 'var(--color-ink)' }}
          >
            Elige tu{' '}
            <span style={{ color: 'var(--color-lime)' }}>dispositivo</span>
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
            Selecciona tu dispositivo a continuación para ver la guía de instalación personalizada.
          </p>
        </div>

        {/* Device tabs — horizontal scroll on mobile */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none"
          role="tablist"
          aria-label="Seleccionar un dispositivo"
        >
          {devices.map((device) => (
            <button
              key={device.id}
              type="button"
              role="tab"
              aria-selected={device.id === activeId}
              aria-controls={`panel-${device.id}`}
              id={`tab-${device.id}`}
              onClick={() => setActiveId(device.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0',
                device.id === activeId
                  ? ''
                  : 'hover:opacity-80',
              )}
              style={
                device.id === activeId
                  ? { backgroundColor: 'var(--color-dark)', color: 'var(--color-lime)' }
                  : {
                      backgroundColor: 'var(--color-card)',
                      color: 'var(--color-ink-light)',
                      border: '1px solid var(--color-border)',
                    }
              }
            >
              {device.icon}
              {device.shortLabel}
            </button>
          ))}
        </div>

        {/* Active panel */}
        {devices.map((device) => (
          <div
            key={device.id}
            id={`panel-${device.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${device.id}`}
            hidden={device.id !== activeId}
            className={device.id === activeId ? 'block' : 'hidden'}
          >
            <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

              {/* Steps */}
              <div className="flex flex-col gap-6">

                {/* Panel heading */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                    style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-lime)' }}
                  >
                    {device.icon}
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-xl leading-tight"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {device.label}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-gray-600)' }}>
                      Aplicación recomendada:{' '}
                      <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                        {device.appName}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Step list */}
                <ol className="flex flex-col gap-4" aria-label={`Pasos para ${device.label}`}>
                  {device.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      {/* Step number */}
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 mt-0.5"
                        style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                        aria-hidden="true"
                      >
                        {idx + 1}
                      </div>
                      {/* Step content */}
                      <div
                        className="flex-1 p-5 rounded-2xl"
                        style={{
                          backgroundColor: 'var(--color-card)',
                          border: '1px solid var(--color-border)',
                        }}
                      >
                        <p
                          className="font-semibold text-sm mb-1 leading-snug"
                          style={{ color: 'var(--color-ink)' }}
                        >
                          {step.title}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Warning */}
                {device.warning && (
                  <div
                    className="flex gap-3 p-4 rounded-2xl text-sm"
                    style={{
                      backgroundColor: 'rgba(234,179,8,0.06)',
                      border: '1px solid rgba(234,179,8,0.2)',
                      color: 'var(--color-ink-light)',
                    }}
                  >
                    <AlertCircle
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: '#ca8a04' }}
                      aria-hidden="true"
                    />
                    {device.warning}
                  </div>
                )}
              </div>

              {/* Sidebar: tip + CTA */}
              <div className="flex flex-col gap-5">

                {/* Tip card */}
                {device.tip && (
                  <div
                    className="flex gap-3 p-5 rounded-2xl text-sm leading-relaxed"
                    style={{
                      backgroundColor: 'var(--color-lime-soft)',
                      border: '1px solid rgba(123,47,190,0.4)',
                      color: 'var(--color-lime)',
                    }}
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold mb-1">Consejo</p>
                      <p>{device.tip}</p>
                    </div>
                  </div>
                )}

                {/* App badge */}
                <div
                  className="p-5 rounded-2xl flex flex-col gap-3"
                  style={{
                    backgroundColor: 'var(--color-dark)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-gray-600)' }}>
                    Aplicación recomendada
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {device.appName}
                    </span>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                    >
                      {device.appBadge}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
                    La aplicación más estable y completa para disfrutar de tu suscripción IPTV VivaceTV en {device.label}.
                  </p>
                </div>

                {/* WhatsApp help CTA */}
                <a
                  href={buildWhatsAppUrl(
                    `Hola VivaceTV, necesito ayuda para instalar IPTV en ${device.label}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#25D366', color: '#fff' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Ayuda con la instalación — {device.shortLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
