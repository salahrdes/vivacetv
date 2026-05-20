import { ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

type AppCard = {
  name: string;
  tagline: string;
  platforms: string[];
  badge?: string;
  badgeColor?: 'lime' | 'dark';
  storeLabel: string;
  storeUrl: string;
  description: string;
};

const apps: AppCard[] = [
  {
    name: 'IPTV Smarters Pro',
    tagline: 'El reproductor IPTV más popular',
    platforms: ['Smart TV', 'Firestick', 'Android', 'iOS', 'Windows', 'Mac'],
    badge: 'Recomendado',
    badgeColor: 'lime',
    storeLabel: 'Disponible en todas las tiendas',
    storeUrl: 'https://www.iptvsmarters.com',
    description:
      'Aplicación disponible en todas las plataformas. Admite Xtream Codes, M3U, guía EPG, TV a la carta y gestión de múltiples listas. Interfaz intuitiva y estabilidad comprobada.',
  },
  {
    name: 'TiviMate',
    tagline: 'La referencia en Android y Firestick',
    platforms: ['Firestick', 'Android TV', 'Android Box'],
    badge: 'Premium',
    badgeColor: 'dark',
    storeLabel: 'Google Play / Amazon Store',
    storeUrl: 'https://tivimate.com',
    description:
      'Interfaz de TV elegante con guía de programas, grabación, favoritos y múltiples flujos. Versión gratuita disponible; versión Premium recomendada para una experiencia óptima.',
  },
  {
    name: 'GSE Smart IPTV',
    tagline: 'Ideal para iPhone, iPad y Mac',
    platforms: ['iPhone', 'iPad', 'Mac'],
    storeLabel: 'App Store de Apple',
    storeUrl: 'https://apps.apple.com',
    description:
      'Aplicación nativa para iOS y macOS con soporte M3U y Xtream Codes, EPG integrado, interfaz cuidada y compatibilidad AirPlay para emitir en tu TV desde tu iPhone o Mac.',
  },
  {
    name: 'Smart IPTV (SIPTV)',
    tagline: 'Para Samsung y LG Smart TV',
    platforms: ['Samsung Smart TV', 'LG Smart TV'],
    storeLabel: 'Samsung Apps / LG Store',
    storeUrl: 'https://siptv.app',
    description:
      'Aplicación diseñada específicamente para Smart TV Samsung y LG. Funciona mediante dirección MAC enviada a nuestro equipo para la activación. Muy estable en televisores recientes.',
  },
  {
    name: 'VLC Media Player',
    tagline: 'Solución universal para PC y Mac',
    platforms: ['Windows', 'Mac', 'Linux'],
    storeLabel: 'Descarga gratuita',
    storeUrl: 'https://www.videolan.org',
    description:
      'El famoso reproductor de vídeo de código abierto admite flujos M3U directamente. Solución 100% gratuita para PC y Mac. Abre simplemente el enlace M3U incluido con tu suscripción.',
  },
  {
    name: 'Perfect Player',
    tagline: 'Alternativa ligera para Android',
    platforms: ['Android', 'Android TV'],
    storeLabel: 'Google Play Store',
    storeUrl: 'https://play.google.com',
    description:
      'Reproductor ligero y rápido para Android con interfaz estilo zapping, soporte EPG y M3U. Ideal para dispositivos menos potentes o como alternativa a IPTV Smarters.',
  },
];

const platformColors: Record<string, { bg: string; color: string }> = {
  default: { bg: 'var(--color-surface-alt)', color: 'var(--color-ink-light)' },
};

export default function CompatibleAppsSection() {
  return (
    <section
      id="applications"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="apps-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Aplicaciones compatibles"
          title="Elige la aplicación adecuada para tu dispositivo"
          description="VivaceTV funciona con los reproductores IPTV más populares del mercado. Aquí están las aplicaciones que recomendamos según tu dispositivo."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3
                      className="font-display font-bold text-base leading-snug"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {app.name}
                    </h3>
                    {app.badge && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={
                          app.badgeColor === 'lime'
                            ? { backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }
                            : { backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }
                        }
                      >
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-gray-600)' }}>
                    {app.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: 'var(--color-ink-light)' }}
              >
                {app.description}
              </p>

              {/* Platform pills */}
              <div className="flex flex-wrap gap-1.5">
                {app.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-lime-soft)',
                      color: 'var(--color-dark)',
                    }}
                  >
                    {platform}
                  </span>
                ))}
              </div>

              {/* Store link */}
              <a
                href={app.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity duration-150 hover:opacity-70"
                style={{ color: 'var(--color-ink-light)' }}
              >
                <ExternalLink size={12} aria-hidden="true" />
                {app.storeLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="mt-10 text-center text-sm max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-gray-600)' }}
        >
          ¿No sabes qué aplicación elegir? Nuestro equipo te orienta por WhatsApp según
          tu dispositivo y tu plan — está incluido en tu suscripción VivaceTV.
        </p>
      </div>
    </section>
  );
}
