import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "Installation IPTV : Guide Complet Étape par Étape 2026 | VivaceTV",
  description:
    "Comment installer l'IPTV sur Android TV, Firestick, Smart TV Samsung & LG, PC et Mac. Guide d'installation IPTV complet avec TiviMate et IPTV Smarters Pro.",
  keywords: [
    'installation iptv',
    'installer iptv',
    'iptv installation',
    'installer iptv android tv',
    'installer iptv firestick',
    'installer iptv smart tv',
    'tivimate installation',
    'iptv smarters installation',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/installation-iptv` },
  openGraph: {
    title: "Installation IPTV : Guide Complet Étape par Étape 2026 | VivaceTV",
    description:
      "Guide d'installation IPTV complet pour tous les appareils : Android TV, Firestick, Smart TV, PC et Mac. Configuration en moins de 5 minutes.",
    url: `${siteConfig.url}/guide-iptv/installation-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Quelle application IPTV dois-je utiliser ?",
    answer:
      "Pour les débutants, IPTV Smarters Pro est l'application la plus simple à configurer. Pour les utilisateurs souhaitant la meilleure interface, TiviMate sur Android TV est le choix premium. Sur Smart TV Samsung, l'application Smart IPTV ou SSIPTV est recommandée. VivaceTV supporte toutes ces applications et vous guidera lors de la configuration.",
  },
  {
    question: "Combien de temps faut-il pour installer l'IPTV ?",
    answer:
      "L'installation prend généralement 5 à 15 minutes selon votre appareil et votre familiarité avec les applications. Une fois votre abonnement VivaceTV actif, la configuration elle-même ne prend que 2 à 3 minutes : installer l'application, entrer l'URL M3U ou les identifiants, et attendre le chargement de la liste de chaînes.",
  },
  {
    question: "Dois-je configurer l'EPG manuellement ?",
    answer:
      "Non, l'EPG (guide des programmes) est généralement inclus dans votre abonnement VivaceTV et se charge automatiquement via l'URL M3U. Dans certaines applications comme TiviMate, il faut activer l'option de chargement automatique de l'EPG dans les paramètres. Notre équipe support peut vous guider pour cette configuration.",
  },
  {
    question: "Que faire si l'IPTV ne fonctionne pas après l'installation ?",
    answer:
      "Vérifiez d'abord votre connexion internet et la validité de vos identifiants. Si la liste de chaînes ne se charge pas, essayez de forcer la mise à jour depuis les paramètres de l'application. En cas de problème persistant, contactez le support VivaceTV via WhatsApp — notre équipe répond en moins de 15 minutes et vous aidera à résoudre le problème étape par étape.",
  },
  {
    question: "Peut-on installer l'IPTV sur Firestick sans passer par l'Amazon Store ?",
    answer:
      "Oui, c'est possible via l'installation APK (sources inconnues). Sur Firestick, vous devez activer l'option 'Applications de sources inconnues' dans les paramètres de l'appareil, puis utiliser l'application Downloader pour télécharger et installer l'APK de TiviMate ou IPTV Smarters. Notre guide détaillé est disponible sur WhatsApp.",
  },
];

const troubleshootItems = [
  {
    problem: 'Buffering fréquent (mise en tampon)',
    solutions: [
      'Vérifiez votre débit internet (minimum 15 Mbps recommandé)',
      "Connectez votre appareil en Ethernet plutôt qu'en Wi-Fi",
      'Dans TiviMate, augmentez la taille du tampon de lecture (Settings > Player)',
      'Essayez une qualité de flux inférieure (HD plutôt que 4K)',
    ],
  },
  {
    problem: "L'EPG ne se charge pas",
    solutions: [
      "Vérifiez que l'URL EPG est bien renseignée dans les paramètres de l'application",
      "Forcez une actualisation manuelle depuis les paramètres",
      "Attendez 5 à 10 minutes après l'ajout de la playlist — le premier chargement peut prendre du temps",
      'Contactez le support VivaceTV pour vérifier la validité de votre lien EPG',
    ],
  },
  {
    problem: "Erreur d'authentification",
    solutions: [
      "Vérifiez que vous avez copié l'URL M3U ou les identifiants sans espace ni caractère supplémentaire",
      "Vérifiez la date d'expiration de votre abonnement",
      'Essayez depuis un autre appareil pour isoler le problème',
      'Contactez le support VivaceTV pour réinitialiser vos accès',
    ],
  },
];

export default function InstallationIPTVPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: 'Installation IPTV', href: '/guide-iptv/installation-iptv' },
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
          label="GUIDE D'INSTALLATION"
          title="Comment Installer"
          titleHighlight="l'IPTV"
          subtitle="Guide étape par étape pour installer et configurer votre IPTV sur tous vos appareils — Android TV, Firestick, Smart TV, PC et Mac. Configuration en moins de 10 minutes."
        />

        {/* Section 1 — Prérequis */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Ce Dont Vous Avez Besoin Avant de Commencer
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Avant de passer à l'installation, assurez-vous de disposer des trois éléments suivants :
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  num: '1',
                  title: 'Un abonnement VivaceTV actif',
                  desc: "Souscrivez à l'une de nos formules (Bronze, Silver, Gold ou Diamond) et recevez vos identifiants en moins de 30 minutes.",
                },
                {
                  num: '2',
                  title: 'Une application IPTV compatible',
                  desc: 'TiviMate, IPTV Smarters Pro, Perfect Player ou GSE Smart IPTV selon votre appareil. La plupart sont gratuites ou très peu coûteuses.',
                },
                {
                  num: '3',
                  title: 'Une connexion internet stable',
                  desc: 'Minimum 10 Mbps pour la HD, 25 Mbps pour la 4K. Une connexion Ethernet est préférable au Wi-Fi pour plus de stabilité.',
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
                    style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
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
              href="/abonnements"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
            >
              Obtenir mon abonnement VivaceTV →
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
              Installation IPTV sur Android TV / Box Android
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Android TV et les boîtiers Android (Xiaomi Mi Box, Nvidia Shield, etc.) offrent la
              meilleure expérience IPTV grâce à TiviMate, l'application IPTV la plus aboutie du
              marché.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: 'Étape 1',
                  title: 'Installer TiviMate',
                  desc: "Ouvrez le Google Play Store sur votre Android TV. Recherchez 'TiviMate IPTV Player' et installez l'application gratuite. La version gratuite est suffisante pour commencer ; TiviMate Premium (environ 5€/an) débloque des fonctions avancées comme l'enregistrement.",
                },
                {
                  step: 'Étape 2',
                  title: 'Ajouter votre playlist VivaceTV',
                  desc: "Lancez TiviMate et sélectionnez 'Ajouter une playlist'. Choisissez 'URL M3U' et collez l'URL que vous avez reçue de VivaceTV. Si vous avez des identifiants Xtream Codes, sélectionnez 'Xtream Codes' et entrez l'URL du serveur, votre nom d'utilisateur et votre mot de passe.",
                },
                {
                  step: 'Étape 3',
                  title: "Charger l'EPG",
                  desc: "Dans les paramètres de TiviMate, activez le chargement automatique de l'EPG. L'application téléchargera automatiquement le guide des programmes. Ce premier téléchargement peut prendre 2 à 5 minutes selon la taille de l'EPG.",
                },
                {
                  step: 'Étape 4',
                  title: 'Naviguer dans vos chaînes',
                  desc: "Votre liste de chaînes est maintenant disponible, organisée par catégories (France, Sports, Internationales, VOD). Utilisez la télécommande pour naviguer et profiter de votre IPTV.",
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
              Installation IPTV sur Amazon Firestick / Fire TV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Le Firestick est l'un des appareils les plus populaires pour l'IPTV. Bien que
              l'application TiviMate ne soit pas disponible sur l'Amazon Appstore, IPTV Smarters Pro
              y est disponible directement ou peut être installée via APK.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: 'Étape 1',
                  title: 'Activer les sources inconnues (pour APK)',
                  desc: "Si vous souhaitez installer TiviMate via APK : allez dans Paramètres > Mon Fire TV > Options développeur > Activer 'Applications de sources inconnues'. Cette étape est nécessaire uniquement pour les applications hors Amazon Store.",
                },
                {
                  step: 'Étape 2',
                  title: 'Installer IPTV Smarters Pro',
                  desc: "Depuis l'Amazon Appstore, recherchez 'IPTV Smarters Pro' et installez l'application. Elle est disponible gratuitement. Alternativement, installez l'application Downloader depuis l'Amazon Store pour télécharger TiviMate en APK.",
                },
                {
                  step: 'Étape 3',
                  title: 'Configurer avec vos identifiants VivaceTV',
                  desc: "Dans IPTV Smarters, sélectionnez 'Login with Xtream Codes API' ou 'Add URL/M3U URL' selon le type d'identifiants reçus. Entrez vos informations VivaceTV et validez. La liste de chaînes se charge en 1 à 3 minutes.",
                },
                {
                  step: 'Étape 4',
                  title: 'Profitez de vos chaînes',
                  desc: "Naviguez entre les onglets Live TV, Movies et Series depuis l'interface principale d'IPTV Smarters. L'EPG est chargé automatiquement si inclus dans votre URL M3U.",
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
              Installation IPTV sur Smart TV Samsung et LG
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
                  Sur Samsung, installez <strong style={{ color: 'var(--color-ink)' }}>Smart IPTV</strong>{' '}
                  ou <strong style={{ color: 'var(--color-ink)' }}>SSIPTV</strong> depuis le Samsung
                  App Store (recherchez dans la section Mes Applications ou Smart Hub). Une fois
                  installée, l'application vous demandera votre URL M3U que vous pouvez saisir
                  directement ou configurer depuis un ordinateur via l'interface web.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Note : Smart IPTV propose une période d'essai gratuite de 7 jours, puis une licence
                  unique d'environ 5,99€ par appareil. C'est un investissement unique qui se rentabilise
                  rapidement.
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
                  Sur LG webOS, l'application{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>SS IPTV</strong> est disponible
                  directement dans le LG Content Store. Après installation, configurez votre liste M3U
                  depuis l'interface web de l'application ou directement sur la TV. L'EPG se configure
                  dans les paramètres de l'application.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Alternative pour LG : brancher un Firestick ou un boîtier Android TV sur le port
                  HDMI de votre LG pour accéder à TiviMate — souvent une meilleure expérience que
                  les applications natives.
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
              Installation IPTV sur PC Windows et Mac
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur ordinateur, plusieurs solutions sont disponibles. La plus simple reste VLC Media
              Player, un logiciel gratuit et universel capable de lire des playlists M3U directement.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur VLC : allez dans Média &gt; Ouvrir un fichier réseau, collez votre URL M3U et
              validez. Vos chaînes apparaissent dans la liste de lecture. Pour une meilleure interface,
              Kodi avec le plugin IPTV Simple Client ou une application web IPTV comme IPTV Smarters
              Web offrent une expérience plus complète avec EPG et VOD.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Pour une installation détaillée sur PC et Mac, consultez notre{' '}
              <Link
                href="/guide-iptv/iptv-sur-pc"
                style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}
              >
                guide complet IPTV sur PC
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 6 — Dépannage */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Résolution des Problèmes Courants
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
                    Problème : {item.problem}
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
              Questions Fréquentes — Installation IPTV
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
                { href: '/meilleure-application-iptv', label: 'Meilleures applications IPTV' },
                { href: '/guide-iptv/comment-fonctionne-iptv', label: "Comment fonctionne l'IPTV" },
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
