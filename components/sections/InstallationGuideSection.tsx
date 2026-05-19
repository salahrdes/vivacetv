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
    appBadge: 'Recommandé',
    steps: [
      {
        title: 'Activer les sources inconnues',
        description:
          'Depuis l\'écran d\'accueil, allez dans Paramètres → Ma Fire TV → Options pour développeurs. Activez "Applications de sources inconnues".',
      },
      {
        title: 'Installer l\'application Downloader',
        description:
          'Retournez à l\'accueil et recherchez "Downloader" dans la barre de recherche Amazon. Installez l\'application gratuite.',
      },
      {
        title: 'Télécharger IPTV Smarters Pro',
        description:
          'Ouvrez Downloader et entrez le code 6578878 dans la barre d\'adresse, puis appuyez sur Aller. L\'application se télécharge automatiquement.',
      },
      {
        title: 'Installer et ouvrir l\'application',
        description:
          'Une fois le téléchargement terminé, appuyez sur Installer, puis sur Ouvrir pour lancer IPTV Smarters Pro.',
      },
      {
        title: 'Se connecter avec vos identifiants',
        description:
          'Sélectionnez "Connexion via Xtream Codes API". Entrez l\'URL du serveur, le nom d\'utilisateur et le mot de passe que vous avez reçus par WhatsApp.',
      },
      {
        title: 'Profitez de vos chaînes',
        description:
          'Vos chaînes, films et séries sont chargés automatiquement. Naviguez par catégorie ou utilisez la recherche pour trouver votre contenu.',
      },
    ],
    tip: 'Utilisez votre connexion Wi-Fi plutôt que l\'Ethernet pour une configuration plus simple. Redémarrez votre Fire Stick après l\'installation pour de meilleures performances.',
  },
  {
    id: 'smart-tv',
    label: 'Smart TV Samsung / LG',
    shortLabel: 'Smart TV',
    icon: <Tv size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Recommandé',
    steps: [
      {
        title: 'Accéder au store de votre TV',
        description:
          'Appuyez sur le bouton Home de votre télécommande. Ouvrez le Samsung Apps Store (Samsung) ou le LG Content Store (LG).',
      },
      {
        title: 'Rechercher IPTV Smarters Pro',
        description:
          'Dans la barre de recherche du store, tapez "IPTV Smarters Pro". Sélectionnez l\'application dans les résultats.',
      },
      {
        title: 'Télécharger et installer',
        description:
          'Cliquez sur Télécharger ou Installer. Attendez la fin du téléchargement (quelques secondes selon votre connexion).',
      },
      {
        title: 'Lancer l\'application',
        description:
          'Retournez au menu principal et ouvrez IPTV Smarters Pro depuis la liste de vos applications installées.',
      },
      {
        title: 'Entrer vos identifiants',
        description:
          'Choisissez "Connexion via Xtream Codes API". Saisissez l\'URL du serveur, votre nom d\'utilisateur et votre mot de passe fournis par VivaceTV.',
      },
      {
        title: 'Regarder en direct',
        description:
          'La liste de toutes vos chaînes et contenus VOD se charge automatiquement. Profitez du contenu en HD, 4K ou 8K selon votre forfait.',
      },
    ],
    tip: 'Si votre Smart TV ne trouve pas IPTV Smarters Pro dans son store, contactez-nous sur WhatsApp — nous avons des solutions alternatives pour chaque modèle de TV.',
    warning: 'Certains modèles de Smart TV plus anciens peuvent nécessiter l\'application Smart IPTV ou une configuration via adresse MAC. Contactez notre support pour un guide personnalisé.',
  },
  {
    id: 'android',
    label: 'Android (téléphone / tablette)',
    shortLabel: 'Android',
    icon: <TabletSmartphone size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Gratuit sur Play Store',
    steps: [
      {
        title: 'Ouvrir le Google Play Store',
        description:
          'Depuis votre appareil Android, ouvrez l\'application Google Play Store. Assurez-vous d\'être connecté à votre compte Google.',
      },
      {
        title: 'Rechercher IPTV Smarters Pro',
        description:
          'Dans la barre de recherche, tapez "IPTV Smarters Pro". Sélectionnez l\'application officielle dans les résultats.',
      },
      {
        title: 'Installer l\'application',
        description:
          'Appuyez sur "Installer". L\'application est gratuite et se télécharge en quelques secondes.',
      },
      {
        title: 'Lancer IPTV Smarters Pro',
        description:
          'Une fois installée, ouvrez l\'application depuis votre écran d\'accueil ou le tiroir d\'applications.',
      },
      {
        title: 'Connexion Xtream Codes',
        description:
          'Sélectionnez "Connexion via Xtream Codes API" puis entrez l\'URL du serveur, votre nom d\'utilisateur et votre mot de passe reçus via WhatsApp.',
      },
      {
        title: 'Accéder à vos contenus',
        description:
          'Vos chaînes et contenus VOD se chargent instantanément. Naviguez par catégorie, recherchez une chaîne ou un film, et profitez du streaming.',
      },
    ],
    tip: 'Pour une meilleure expérience, utilisez le Wi-Fi plutôt que les données mobiles, surtout pour les contenus en 4K. L\'application fonctionne aussi sur les box Android TV.',
  },
  {
    id: 'ios',
    label: 'iPhone / iPad (iOS)',
    shortLabel: 'iPhone / iPad',
    icon: <Apple size={18} aria-hidden="true" />,
    appName: 'IPTV Smarters Pro',
    appBadge: 'Disponible sur App Store',
    steps: [
      {
        title: 'Ouvrir l\'App Store',
        description:
          'Sur votre iPhone ou iPad, ouvrez l\'App Store depuis votre écran d\'accueil.',
      },
      {
        title: 'Rechercher l\'application',
        description:
          'Appuyez sur l\'onglet Rechercher en bas de l\'écran et tapez "IPTV Smarters Pro". Vous pouvez aussi chercher "GSE Smart IPTV" comme alternative.',
      },
      {
        title: 'Télécharger gratuitement',
        description:
          'Appuyez sur "Obtenir" pour télécharger l\'application. Une authentification Face ID, Touch ID ou mot de passe Apple peut être demandée.',
      },
      {
        title: 'Ouvrir l\'application',
        description:
          'Une fois le téléchargement terminé, appuyez sur "Ouvrir" ou lancez l\'app depuis votre écran d\'accueil.',
      },
      {
        title: 'Ajouter votre abonnement',
        description:
          'Choisissez "Xtream Codes API" comme méthode de connexion. Entrez l\'URL du serveur, le nom d\'utilisateur et le mot de passe fournis par VivaceTV.',
      },
      {
        title: 'Regarder sur votre iPhone',
        description:
          'Vos contenus sont prêts. Vous pouvez aussi diffuser sur votre télévision via AirPlay si vous avez une Apple TV ou un téléviseur compatible AirPlay.',
      },
    ],
    tip: 'Compatible iPhone 8 et versions ultérieures, tous les iPad sous iOS 14 ou plus. Pour regarder sur votre TV, utilisez AirPlay 2 ou un câble Lightning/USB-C vers HDMI.',
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
        title: 'Ouvrir le Microsoft Store',
        description:
          'Cliquez sur le bouton Démarrer de Windows et cherchez "Microsoft Store", ou appuyez sur la touche Windows et tapez "Store".',
      },
      {
        title: 'Rechercher IPTV Smarters Pro',
        description:
          'Dans la barre de recherche du Microsoft Store, tapez "IPTV Smarters Pro" et sélectionnez l\'application dans les résultats.',
      },
      {
        title: 'Télécharger et installer',
        description:
          'Cliquez sur "Obtenir" ou "Installer". L\'application se télécharge et s\'installe automatiquement.',
      },
      {
        title: 'Lancer depuis le menu Démarrer',
        description:
          'Une fois installée, trouvez IPTV Smarters Pro dans votre menu Démarrer et lancez-la.',
      },
      {
        title: 'Connexion avec vos identifiants',
        description:
          'Sélectionnez "Xtream Codes API", puis entrez l\'URL du serveur, votre nom d\'utilisateur et votre mot de passe reçus par WhatsApp.',
      },
      {
        title: 'Profitez du contenu',
        description:
          'Naviguez dans vos chaînes et films directement depuis votre PC. Pour une meilleure expérience, utilisez l\'application en mode plein écran.',
      },
    ],
    tip: 'Compatible Windows 10 et Windows 11 (32-bit et 64-bit). VLC Media Player peut aussi être utilisé comme lecteur IPTV en chargeant votre lien M3U directement.',
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
        title: 'Ouvrir l\'App Store sur Mac',
        description:
          'Cliquez sur l\'icône App Store dans votre Dock ou depuis Launchpad. Assurez-vous d\'être connecté avec votre identifiant Apple.',
      },
      {
        title: 'Rechercher l\'application',
        description:
          'Dans la barre de recherche de l\'App Store, tapez "IPTV Smarters Pro" ou "GSE Smart IPTV" et appuyez sur Entrée.',
      },
      {
        title: 'Télécharger',
        description:
          'Cliquez sur "Obtenir" puis "Télécharger". L\'application s\'installe automatiquement dans votre dossier Applications.',
      },
      {
        title: 'Autoriser l\'application',
        description:
          'Au premier lancement, macOS peut vous demander d\'autoriser l\'app. Allez dans Réglages Système → Confidentialité et sécurité pour l\'autoriser.',
      },
      {
        title: 'Entrer vos identifiants',
        description:
          'Choisissez "Xtream Codes API" et entrez l\'URL du serveur, votre nom d\'utilisateur et mot de passe fournis par VivaceTV.',
      },
      {
        title: 'Démarrer le streaming',
        description:
          'Vos chaînes et contenus VOD sont disponibles immédiatement. L\'application est optimisée pour les Mac avec Apple Silicon (M1/M2/M3).',
      },
    ],
    tip: 'Compatible macOS 11 Big Sur et versions ultérieures, y compris les Mac Apple Silicon M1/M2/M3. Vous pouvez aussi utiliser VLC avec un lien M3U pour une solution 100% gratuite.',
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
            style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
          >
            Installation pas à pas
          </span>
          <h2
            id="installation-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
            style={{ color: 'var(--color-ink)' }}
          >
            Choisissez votre{' '}
            <span style={{ color: 'var(--color-lime)' }}>appareil</span>
          </h2>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
            Sélectionnez votre appareil ci-dessous pour afficher le guide d'installation personnalisé.
          </p>
        </div>

        {/* Device tabs — horizontal scroll on mobile */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none"
          role="tablist"
          aria-label="Sélectionner un appareil"
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
                    style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
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
                      Application recommandée :{' '}
                      <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>
                        {device.appName}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Step list */}
                <ol className="flex flex-col gap-4" aria-label={`Étapes pour ${device.label}`}>
                  {device.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      {/* Step number */}
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 mt-0.5"
                        style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
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
                      border: '1px solid rgba(199,227,107,0.5)',
                      color: 'var(--color-dark)',
                    }}
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold mb-1">Conseil</p>
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
                    Application recommandée
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: 'var(--color-surface)' }}
                    >
                      {device.appName}
                    </span>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                    >
                      {device.appBadge}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
                    L'application la plus stable et complète pour profiter de votre abonnement IPTV VivaceTV sur {device.label}.
                  </p>
                </div>

                {/* WhatsApp help CTA */}
                <a
                  href={buildWhatsAppUrl(
                    `Bonjour VivaceTV, j'ai besoin d'aide pour installer IPTV sur ${device.label}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#25D366', color: '#fff' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  Aide à l'installation — {device.shortLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
