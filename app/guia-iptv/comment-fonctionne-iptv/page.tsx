import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "Comment Fonctionne l'IPTV ? Explication Simple et Complète | VivaceTV",
  description:
    "Comment fonctionne l'IPTV ? Comprendre l'IPTV en 5 minutes : protocoles, M3U, EPG, VOD, équipement nécessaire et connexion requise. Guide complet pour débutants.",
  keywords: [
    'comment fonctionne iptv',
    'iptv comment ca marche',
    'iptv explication',
    'iptv m3u playlist',
    'iptv epg',
    'iptv vod',
    'iptv debutant',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/comment-fonctionne-iptv` },
  openGraph: {
    title: "Comment Fonctionne l'IPTV ? Explication Simple et Complète | VivaceTV",
    description:
      "Tout comprendre sur le fonctionnement de l'IPTV : technologie, équipement, connexion et premiers pas avec VivaceTV.",
    url: `${siteConfig.url}/guide-iptv/comment-fonctionne-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Ai-je besoin d'un équipement spécial pour utiliser l'IPTV ?",
    answer:
      "Non, il n'est pas nécessaire d'acheter du matériel spécifique. L'IPTV fonctionne sur des appareils que vous possédez probablement déjà : Smart TV Samsung ou LG, téléphone Android ou iPhone, tablette, ordinateur Windows ou Mac, ou encore un boîtier Amazon Firestick. Une application IPTV (comme TiviMate ou IPTV Smarters) suffit pour démarrer.",
  },
  {
    question: "Quelle vitesse internet faut-il pour l'IPTV ?",
    answer:
      "Pour une expérience optimale en HD, une connexion de 10 Mbps est suffisante. Pour la 4K, prévoyez au minimum 25 Mbps. VivaceTV est optimisé pour fonctionner correctement dès 15 Mbps pour la majorité des chaînes HD. La stabilité de la connexion est aussi importante que la vitesse brute.",
  },
  {
    question: "Quelle est la différence entre l'IPTV et Netflix ?",
    answer:
      "Netflix est une plateforme de streaming à la demande avec un catalogue de films et séries. L'IPTV propose en plus des chaînes en direct (comme la télévision traditionnelle), y compris les chaînes d'information, sportives et divertissement en temps réel. Un bon service IPTV combine chaînes live, replay et VOD, offrant ainsi bien plus qu'un service de SVOD classique.",
  },
  {
    question: "Qu'est-ce qu'une playlist M3U en IPTV ?",
    answer:
      "Une playlist M3U est un fichier texte qui contient les adresses URL de tous les flux de chaînes auxquels vous avez accès. Lorsque vous souscrivez à un abonnement IPTV comme VivaceTV, vous recevez une URL M3U ou des identifiants Xtream Codes à configurer dans votre application IPTV préférée. Ce fichier est automatiquement mis à jour pour refléter l'état actuel des chaînes disponibles.",
  },
  {
    question: "Peut-on regarder l'IPTV sur plusieurs appareils en même temps ?",
    answer:
      "Cela dépend de votre abonnement. La plupart des offres IPTV permettent 1 à 2 connexions simultanées. VivaceTV précise le nombre de connexions simultanées incluses dans chaque formule au moment de l'abonnement. Pour regarder sur plusieurs écrans en même temps, certaines formules proposent des connexions multiples.",
  },
];

const steps = [
  {
    num: '1',
    title: 'Choisissez votre abonnement VivaceTV',
    desc: "Sélectionnez la formule adaptée à vos besoins (Bronze 3 mois, Silver 6 mois, Gold 12 mois ou Diamond 24 mois) et effectuez votre paiement sécurisé.",
  },
  {
    num: '2',
    title: 'Recevez vos identifiants de connexion',
    desc: "Après validation, vous recevez votre URL M3U ou vos identifiants Xtream Codes par WhatsApp ou email — généralement en moins de 30 minutes.",
  },
  {
    num: '3',
    title: 'Installez une application IPTV',
    desc: "Téléchargez TiviMate, IPTV Smarters Pro ou Perfect Player sur votre appareil. Ces applications sont gratuites ou peu coûteuses et compatibles avec tous les systèmes.",
  },
  {
    num: '4',
    title: 'Configurez votre accès',
    desc: "Entrez votre URL M3U ou vos identifiants dans l'application. La liste de chaînes se charge automatiquement — généralement en 1 à 2 minutes.",
  },
  {
    num: '5',
    title: 'Profitez de vos chaînes',
    desc: "Naviguez parmi les chaînes françaises, internationales, sportives et accédez à la médiathèque VOD. Le guide des programmes (EPG) vous aide à planifier vos visionnages.",
  },
];

const devices = [
  { name: 'Smart TV Samsung / LG', note: 'Application native ou Tizen/webOS' },
  { name: 'Android TV / Box Android', note: 'TiviMate, IPTV Smarters Pro' },
  { name: 'Amazon Firestick / Fire TV', note: 'IPTV Smarters, Perfect Player' },
  { name: 'iPhone / iPad', note: 'GSE Smart IPTV, IPTV Smarters' },
  { name: 'PC Windows / Mac', note: 'VLC, Kodi, IPTV Smarters Web' },
  { name: 'Téléphone Android', note: 'TiviMate, GSE Smart IPTV' },
];

export default function CommentFonctionneIPTVPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: "Comment Fonctionne l'IPTV", href: '/guide-iptv/comment-fonctionne-iptv' },
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
          label="GUIDE TECHNIQUE"
          title="Comment Fonctionne"
          titleHighlight="l'IPTV ?"
          subtitle="Explication simple et complète de la technologie IPTV — de la transmission du signal à l'affichage sur votre écran, sans jargon technique inutile."
        />

        {/* Section 1 — Qu'est-ce que l'IPTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu'est-ce que l'IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              <strong style={{ color: 'var(--color-ink)' }}>IPTV</strong> signifie{' '}
              <em>Internet Protocol Television</em> — la télévision diffusée via le protocole
              internet. Contrairement à la télévision par câble ou satellite qui utilise des signaux
              hertziens ou des fréquences radio, l'IPTV transporte les contenus audiovisuels sous
              forme de paquets de données numériques, exactement comme un email ou une page web.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La différence fondamentale avec le satellite : vous n'avez besoin d'<strong style={{ color: 'var(--color-ink)' }}>aucune
              parabole</strong>, d'aucun décodeur propriétaire, et vous n'êtes pas limité à une zone
              géographique précise. Tant que vous disposez d'une connexion internet suffisante, vous
              pouvez regarder l'IPTV depuis n'importe où dans le monde.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              L'IPTV n'est pas une nouveauté : les opérateurs comme Free, Orange et SFR distribuent
              leurs chaînes via l'IPTV sur leurs box internet depuis plus de 15 ans. Ce que proposent
              les services IPTV indépendants comme VivaceTV, c'est un accès à un catalogue beaucoup
              plus large — incluant des chaînes internationales, sportives et du contenu VOD — via une
              application sur l'appareil de votre choix.
            </p>
          </div>
        </section>

        {/* Section 2 — Fonctionnement technique */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Le Fonctionnement Technique : M3U, EPG et VOD
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La Playlist M3U — La liste de toutes vos chaînes
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Lorsque vous souscrivez à un abonnement IPTV, vous recevez une{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>playlist M3U</strong> — un fichier
                  texte (ou une URL) qui contient les adresses de chaque flux de chaîne. Votre
                  application IPTV lit cette liste et vous présente un catalogue organisé par
                  catégories. Chaque chaîne correspond à un flux vidéo diffusé en temps réel depuis
                  les serveurs du fournisseur.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  L'EPG — Le Guide des Programmes Électronique
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  L'<strong style={{ color: 'var(--color-ink)' }}>EPG (Electronic Program Guide)</strong>{' '}
                  est l'équivalent du guide TV papier, mais intégré directement dans votre application.
                  Il affiche les émissions passées, en cours et à venir sur chaque chaîne — sur
                  généralement 7 à 14 jours. Avec un EPG complet, vous pouvez naviguer par programme
                  plutôt que par chaîne, et profiter du replay pour les émissions déjà diffusées.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La VOD — Médiathèque à la Demande
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  La <strong style={{ color: 'var(--color-ink)' }}>VOD (Video on Demand)</strong> est
                  la bibliothèque de films et séries disponibles à tout moment, contrairement aux
                  chaînes live qui suivent une grille de programmation. VivaceTV propose +160 000
                  contenus VOD en HD et 4K, accessibles depuis la même interface que les chaînes live.
                  C'est l'équivalent de Netflix intégré à votre service IPTV.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Xtream Codes — Le Protocole Professionnel
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Certains services IPTV utilisent le protocole{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>Xtream Codes</strong> (également
                  appelé XC ou Xtream API), qui fonctionne avec un nom d'utilisateur, un mot de passe
                  et une URL de serveur. Ce système offre une meilleure gestion des connexions et des
                  droits d'accès. Il est supporté par toutes les applications majeures comme TiviMate
                  et IPTV Smarters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Équipement */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Équipement Compatible avec l'IPTV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              L'un des grands avantages de l'IPTV est sa compatibilité universelle. Aucun achat de
              matériel spécifique n'est nécessaire dans la plupart des cas. Voici les appareils
              compatibles avec VivaceTV :
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
              Pour une expérience optimale sur grand écran sans Smart TV, un{' '}
              <strong style={{ color: 'var(--color-ink)' }}>Amazon Firestick 4K</strong> (environ 50€)
              ou un <strong style={{ color: 'var(--color-ink)' }}>boîtier Android TV</strong> est
              l'investissement le plus rentable. Ces appareils se connectent à n'importe quel téléviseur
              via HDMI et transforment n'importe quelle TV en Smart TV.
            </p>
          </div>
        </section>

        {/* Section 4 — Connexion */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Connexion Internet Requise pour l'IPTV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              La qualité de votre expérience IPTV dépend directement de votre connexion internet.
              Voici les débits recommandés selon la qualité souhaitée :
            </p>
            <div className="overflow-x-auto rounded-xl mb-6" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Qualité vidéo', 'Débit minimum', 'Débit recommandé'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: 'var(--color-surface)' }}
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
              Ces débits s'entendent par flux actif. Si plusieurs personnes regardent simultanément
              différentes chaînes dans votre foyer, multipliez par le nombre de connexions simultanées.
              La connexion filaire (Ethernet) est toujours préférable au Wi-Fi pour éviter les
              interruptions, en particulier pour la 4K.
            </p>
          </div>
        </section>

        {/* Section 5 — Démarrer avec VivaceTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Démarrer avec VivaceTV en 5 Étapes
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
                      color: 'var(--color-dark)',
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
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Choisir mon abonnement →
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

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Fonctionnement de l'IPTV
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
                { href: '/guide-iptv/installation-iptv', label: "Guide d'installation" },
                { href: '/guide-iptv/iptv-sur-pc', label: 'IPTV sur PC' },
                { href: '/meilleure-application-iptv', label: 'Meilleures applications IPTV' },
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
