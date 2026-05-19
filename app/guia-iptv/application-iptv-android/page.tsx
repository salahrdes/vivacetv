import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Application IPTV Android : Les 5 Meilleures Apps en 2026 | VivaceTV',
  description:
    "Quelle est la meilleure application IPTV Android en 2025 ? Comparatif complet : TiviMate, IPTV Smarters Pro, Perfect Player, GSE Smart IPTV, Kodi. Guide et installation.",
  keywords: [
    'application iptv android',
    'iptv android',
    'meilleure application iptv android',
    'tivimate android',
    'iptv smarters android',
    'perfect player iptv',
    'gse smart iptv',
    'kodi iptv android',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/application-iptv-android` },
  openGraph: {
    title: 'Application IPTV Android : Les 5 Meilleures Apps en 2026 | VivaceTV',
    description:
      "Comparatif complet des meilleures applications IPTV pour Android et Firestick en 2025 : TiviMate, IPTV Smarters, Perfect Player, GSE Smart IPTV et Kodi.",
    url: `${siteConfig.url}/guide-iptv/application-iptv-android`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Quelle application IPTV Android est recommandée pour les débutants ?",
    answer:
      "Pour les débutants, IPTV Smarters Pro est l'application la plus simple à configurer. Son interface intuitive et son assistant de configuration guidé permettent d'être opérationnel en moins de 5 minutes. Elle est disponible gratuitement sur le Google Play Store et supporte les URL M3U et les identifiants Xtream Codes.",
  },
  {
    question: "TiviMate est-il gratuit ?",
    answer:
      "TiviMate dispose d'une version gratuite fonctionnelle, mais la version Premium (environ 5€/an ou 19€ à vie) est fortement recommandée pour accéder aux fonctionnalités avancées : enregistrement PVR, catch-up, panneaux multiples, personnalisation avancée de l'interface. Le rapport qualité/prix de TiviMate Premium est excellent.",
  },
  {
    question: "Puis-je utiliser plusieurs applications IPTV avec le même abonnement ?",
    answer:
      "Oui, vos identifiants VivaceTV (URL M3U ou Xtream Codes) peuvent être utilisés simultanément sur plusieurs applications, dans la limite du nombre de connexions simultanées incluses dans votre abonnement. Vous pouvez par exemple utiliser TiviMate sur votre Android TV et IPTV Smarters sur votre téléphone.",
  },
  {
    question: "Quelle application fonctionne le mieux sur Firestick ?",
    answer:
      "IPTV Smarters Pro est disponible directement sur l'Amazon Appstore et optimisé pour l'interface télécommande du Firestick. TiviMate, bien que nécessitant une installation APK sur Firestick, offre une meilleure expérience globale une fois configuré. Notre support VivaceTV peut vous guider pour l'installation sur Firestick.",
  },
  {
    question: "VivaceTV est-il compatible avec toutes les applications IPTV Android ?",
    answer:
      "Oui, VivaceTV est compatible avec toutes les applications IPTV majeures sur Android : TiviMate, IPTV Smarters Pro, Perfect Player, GSE Smart IPTV, Kodi, VLC et bien d'autres. Nous fournissons à la fois des URL M3U et des identifiants Xtream Codes, les deux formats d'authentification les plus répandus.",
  },
];

const apps = [
  {
    rank: 1,
    name: 'TiviMate',
    badge: 'MEILLEURE GLOBALE',
    rating: '5/5',
    price: 'Gratuit / Premium ~5€/an',
    playstore: true,
    apk: true,
    highlights: [
      'Interface Material Design premium',
      'EPG complet avec guide sur 14 jours',
      'Multi-playlist (plusieurs abonnements)',
      'Enregistrement PVR (version Premium)',
      'Catch-up / Replay intégré',
      'Panneaux multi-écrans',
    ],
    verdict: "TiviMate est l'application IPTV Android la plus aboutie du marché. Son interface élégante, ses performances et ses fonctionnalités avancées en font le choix premium pour les utilisateurs exigeants sur Android TV et boîtiers Android. La version Premium vaut largement son faible coût annuel.",
    ideal: 'Android TV, boîtiers Android (Nvidia Shield, Xiaomi Mi Box)',
  },
  {
    rank: 2,
    name: 'IPTV Smarters Pro',
    badge: 'MEILLEURE DÉBUTANTS',
    rating: '4.5/5',
    price: 'Gratuit',
    playstore: true,
    apk: false,
    highlights: [
      'Configuration en 2 minutes',
      'Supporte M3U et Xtream Codes',
      'Multi-appareils sur un compte',
      'Interface claire et intuitive',
      'VOD et replay intégrés',
      'Disponible sur Amazon Store',
    ],
    verdict: "IPTV Smarters Pro est l'application idéale pour ceux qui débutent avec l'IPTV. Son interface claire et son processus de configuration simplifié permettent d'être opérationnel en quelques minutes. Elle est disponible gratuitement sur le Play Store et l'Amazon Appstore (Firestick).",
    ideal: 'Tous appareils Android, Firestick, tablettes',
  },
  {
    rank: 3,
    name: 'Perfect Player',
    badge: 'MEILLEURE GRATUITE',
    rating: '4/5',
    price: 'Entièrement gratuit',
    playstore: true,
    apk: true,
    highlights: [
      '100% gratuit sans limitations',
      'Interface TV classique',
      'Personnalisation avancée',
      'Supporte M3U et XSPF',
      'Légère et rapide',
      'Compatible avec les télécommandes',
    ],
    verdict: "Perfect Player est la meilleure option entièrement gratuite. Son interface TV traditionnelle (similaire à la présentation d'une chaîne satellite) sera familière aux utilisateurs qui ne souhaitent pas désapprendre de nouvelles habitudes. Idéale sur les appareils à ressources limitées.",
    ideal: "Tous appareils Android, boîtiers Android d'entrée de gamme",
  },
  {
    rank: 4,
    name: 'GSE Smart IPTV',
    badge: 'FONCTIONNALITÉS AVANCÉES',
    rating: '4/5',
    price: 'Gratuit (achats intégrés)',
    playstore: true,
    apk: false,
    highlights: [
      'Catch-up avancé par chaîne',
      'Support multi-formats (M3U, JSON)',
      'Interface personnalisable',
      'Statistiques de lecture',
      'Gestion avancée des playlists',
      'Compatible iOS et Android',
    ],
    verdict: "GSE Smart IPTV se distingue par ses fonctionnalités de catch-up avancées et sa compatibilité étendue avec différents formats de playlist. C'est le choix des utilisateurs qui souhaitent une gestion fine de leur contenu et un contrôle avancé sur leur expérience de visionnage.",
    ideal: 'Smartphones Android et iPhone/iPad (cross-plateforme)',
  },
  {
    rank: 5,
    name: 'Kodi avec IPTV Simple Client',
    badge: 'PLUS PUISSANT',
    rating: '4/5',
    price: 'Gratuit (open source)',
    playstore: false,
    apk: true,
    highlights: [
      'Mediacenter complet',
      'Extensions et plugins illimités',
      'EPG full avec PVR',
      'Interface 10-foot TV',
      'Communauté massive',
      'Personnalisation totale',
    ],
    verdict: "Kodi est le mediacenter open source le plus puissant disponible. Via le plugin IPTV Simple Client, il se transforme en une solution IPTV complète avec EPG, catch-up et enregistrement. La configuration est plus complexe, mais le résultat est une expérience inégalée pour les utilisateurs avancés.",
    ideal: 'Utilisateurs avancés, Android TV, PC, Raspberry Pi',
  },
];

export default function ApplicationIPTVAndroidPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: 'Application IPTV Android', href: '/guide-iptv/application-iptv-android' },
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
          label="APPLICATIONS ANDROID"
          title="Application IPTV Android :"
          titleHighlight="Les 5 Meilleures Apps en 2025"
          subtitle="Comparatif complet et honnête des meilleures applications IPTV pour Android, Android TV et Firestick. Choisissez l'app qui correspond à votre niveau et à votre appareil."
        />

        {/* Section 1 — Vue d'ensemble */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Les Meilleures Applications IPTV Android : Vue d'Ensemble
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              L'écosystème Android offre le plus large choix d'applications IPTV du marché. Contrairement
              à iOS où les restrictions d'Apple limitent les options disponibles, Android permet
              d'installer n'importe quelle application via le Play Store ou via un fichier APK.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Toutes les applications présentées ici sont compatibles avec VivaceTV et supportent
              les deux méthodes d'authentification que nous proposons : l'URL M3U directe et les
              identifiants Xtream Codes. Votre choix d'application n'affectera pas la qualité
              de vos flux — elle déterminera uniquement votre expérience d'interface.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Notre recommandation rapide : <strong style={{ color: 'var(--color-ink)' }}>TiviMate
              pour Android TV</strong>, <strong style={{ color: 'var(--color-ink)' }}>IPTV Smarters
              Pro pour Firestick et débutants</strong>, et{' '}
              <strong style={{ color: 'var(--color-ink)' }}>Perfect Player</strong> si vous préférez
              une solution entièrement gratuite.
            </p>
          </div>
        </section>

        {/* Sections 2-6 — Apps */}
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
                    Note : <strong style={{ color: 'var(--color-ink)' }}>{app.rating}</strong>
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    Prix : <strong style={{ color: 'var(--color-ink)' }}>{app.price}</strong>
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
                    Points forts
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
                      Idéal pour
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
                      Disponibilité
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
                          APK direct
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

        {/* Section 7 — Installation Firestick vs Android TV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Installation sur Firestick / Android TV vs Smartphone Android
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Sur Android TV et boîtiers Android
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-ink-light)' }}>
                  Sur Android TV (Nvidia Shield, Xiaomi Mi Box, boîtiers génériques), installez
                  TiviMate directement depuis le Google Play Store. L'application est optimisée
                  pour les télécommandes et les grands écrans. La configuration avec vos identifiants
                  VivaceTV prend moins de 3 minutes.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Pour les boîtiers sans Google Play, utilisez l'application APK de TiviMate ou
                  Perfect Player, téléchargeable depuis leur site officiel. Activez au préalable
                  l'option "Sources inconnues" dans les paramètres de sécurité de votre appareil.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Sur Amazon Firestick / Fire TV
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: 'var(--color-ink-light)' }}>
                  IPTV Smarters Pro est disponible directement sur l'Amazon Appstore — aucune
                  manipulation supplémentaire n'est nécessaire. Cherchez simplement "IPTV Smarters Pro"
                  depuis la barre de recherche de votre Firestick et installez l'application.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Pour installer TiviMate sur Firestick (recommandé pour la meilleure expérience),
                  activez d'abord "Applications de sources inconnues" dans Paramètres &gt; Mon Fire
                  TV &gt; Options développeur, puis utilisez l'application Downloader pour télécharger
                  l'APK TiviMate. Notre support VivaceTV vous accompagne pas à pas via WhatsApp.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Sur Smartphone et Tablette Android
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Sur téléphone Android, TiviMate, IPTV Smarters et GSE Smart IPTV sont tous
                  disponibles sur le Play Store. L'expérience est identique à Android TV pour
                  la qualité des flux, mais l'interface est adaptée aux écrans tactiles et à
                  l'utilisation mobile. Perfect Player est également une bonne option pour un
                  usage occasionnel sur smartphone.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Prendre un abonnement VivaceTV →
              </Link>
              <Link
                href="/guide-iptv/installation-iptv"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  backgroundColor: 'var(--color-card)',
                }}
              >
                Guide d'installation complet →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 8 — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Applications IPTV Android
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
                { href: '/abonnements', label: 'Voir les abonnements' },
                { href: '/meilleure-application-iptv', label: 'Guide applications IPTV' },
                { href: '/guide-iptv/installation-iptv', label: "Guide d'installation" },
                { href: '/guide-iptv/iptv-sur-pc', label: 'IPTV sur PC' },
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
