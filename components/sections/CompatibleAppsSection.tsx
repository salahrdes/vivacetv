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
    tagline: 'Le lecteur IPTV le plus populaire',
    platforms: ['Smart TV', 'Firestick', 'Android', 'iOS', 'Windows', 'Mac'],
    badge: 'Recommandé',
    badgeColor: 'lime',
    storeLabel: 'Disponible sur tous les stores',
    storeUrl: 'https://www.iptvsmarters.com',
    description:
      'Application disponible sur l\'ensemble des plateformes. Supporte Xtream Codes, M3U, guide EPG, rattrapage TV et gestion multi-playlists. Interface intuitive, stabilité éprouvée.',
  },
  {
    name: 'TiviMate',
    tagline: 'La référence Android & Firestick',
    platforms: ['Firestick', 'Android TV', 'Android Box'],
    badge: 'Premium',
    badgeColor: 'dark',
    storeLabel: 'Google Play / Amazon Store',
    storeUrl: 'https://tivimate.com',
    description:
      'Interface télévisée élégante avec guide des programmes, enregistrement, favoris et multi-flux. Version gratuite disponible, version Premium recommandée pour une expérience optimale.',
  },
  {
    name: 'GSE Smart IPTV',
    tagline: 'Idéal pour iPhone, iPad et Mac',
    platforms: ['iPhone', 'iPad', 'Mac'],
    storeLabel: 'App Store Apple',
    storeUrl: 'https://apps.apple.com',
    description:
      'Application native iOS et macOS avec support M3U et Xtream Codes, EPG intégré, interface soignée et compatibilité AirPlay pour diffuser sur votre TV depuis votre iPhone ou Mac.',
  },
  {
    name: 'Smart IPTV (SIPTV)',
    tagline: 'Pour Samsung et LG Smart TV',
    platforms: ['Samsung Smart TV', 'LG Smart TV'],
    storeLabel: 'Samsung Apps / LG Store',
    storeUrl: 'https://siptv.app',
    description:
      'Application spécialement conçue pour les Smart TV Samsung et LG. Fonctionne via adresse MAC envoyée à notre équipe pour activation. Très stable sur les TV récentes.',
  },
  {
    name: 'VLC Media Player',
    tagline: 'Solution universelle PC et Mac',
    platforms: ['Windows', 'Mac', 'Linux'],
    storeLabel: 'Téléchargement gratuit',
    storeUrl: 'https://www.videolan.org',
    description:
      'Le célèbre lecteur vidéo open-source supporte les flux M3U directement. Solution 100 % gratuite pour PC et Mac. Ouvrez simplement le lien M3U fourni avec votre abonnement.',
  },
  {
    name: 'Perfect Player',
    tagline: 'Alternative légère pour Android',
    platforms: ['Android', 'Android TV'],
    storeLabel: 'Google Play Store',
    storeUrl: 'https://play.google.com',
    description:
      'Lecteur léger et rapide pour Android avec interface style zapping, support EPG et M3U. Idéal pour les appareils moins puissants ou comme alternative à IPTV Smarters.',
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
          label="Applications compatibles"
          title="Choisissez l'application adaptée à votre appareil"
          description="VivaceTV fonctionne avec les lecteurs IPTV les plus populaires du marché. Voici les applications que nous recommandons selon votre appareil."
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
          Vous ne savez pas quelle application choisir ? Notre équipe vous guide via WhatsApp selon
          votre appareil et votre forfait — c'est inclus dans votre abonnement VivaceTV.
        </p>
      </div>
    </section>
  );
}
