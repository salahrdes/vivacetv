import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Meilleure Application IPTV 2026 — Top 7 Apps Testées | VivaceTV',
  description:
    'Quelle est la meilleure application IPTV en 2025 ? Notre top 7 : TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player, Kodi… Comparatif complet avec VivaceTV.',
  keywords: [
    'meilleure application IPTV',
    'meilleur appli IPTV',
    'app IPTV Android',
    'IPTV player',
    'meilleurs applications IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/meilleure-application-iptv` },
  openGraph: {
    title: 'Meilleure Application IPTV 2026 — Top 7 Apps Testées | VivaceTV',
    description:
      'Notre top 7 des meilleures applications IPTV testées avec VivaceTV : TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player, Kodi et plus.',
    url: `${siteConfig.url}/meilleure-application-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Quelle est la meilleure application IPTV pour Android TV ?',
    answer:
      "TiviMate est unanimement considérée comme la meilleure application IPTV pour Android TV et Fire TV Stick. Son interface EPG, sa stabilité en 4K/8K et sa gestion multi-listes en font le choix idéal. La version premium (environ 5€/an) est fortement recommandée.",
  },
  {
    question: 'Quelle application IPTV choisir pour iPhone ou iPad ?',
    answer:
      "GSE Smart IPTV est la meilleure option pour iOS. Elle supporte les formats M3U et Xtream Codes, propose un guide EPG intégré et est compatible avec Apple TV. La version Pro est disponible sur l'App Store.",
  },
  {
    question: 'Les applications IPTV sont-elles gratuites ?',
    answer:
      "La plupart des applications IPTV comme IPTV Smarters Pro, GSE Smart IPTV (version basique), OTT Navigator et VLC sont gratuites. TiviMate propose une version gratuite avec des fonctionnalités limitées et une version premium à environ 5€/an. Ces applications sont distinctes de votre abonnement IPTV.",
  },
  {
    question: 'Mon application IPTV est-elle compatible avec VivaceTV ?',
    answer:
      "VivaceTV est compatible avec toutes les applications IPTV majeures : TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player, OTT Navigator, Kodi, VLC et bien d'autres. Nos abonnements fournissent des URL M3U et des identifiants Xtream Codes universellement compatibles.",
  },
  {
    question: "Quelle connexion internet est nécessaire pour l'IPTV ?",
    answer:
      "Pour regarder l'IPTV en HD : 10 Mbps minimum. En 4K : 25 Mbps minimum. En 8K : 50 Mbps recommandés. Une connexion fibre optique garantit la meilleure stabilité et évite les coupures lors des pics d'utilisation.",
  },
];

type App = {
  rank: number;
  name: string;
  rating: string;
  platforms: string;
  description: string;
  pros: string[];
  cons: string[];
  badge?: string;
};

const apps: App[] = [
  {
    rank: 1,
    name: 'TiviMate',
    rating: '⭐⭐⭐⭐⭐',
    platforms: 'Android TV / Fire TV',
    description:
      "L'application de référence. Interface EPG parfaite, gestion multi-listes, lecture fluide en 4K. Version premium recommandée (~5€/an).",
    pros: ['Interface EPG très complète', 'Gestion multi-listes M3U', 'Stabilité 4K/8K excellente', 'Mise à jour automatique des listes'],
    cons: ['Uniquement Android TV / Fire TV', 'Version premium requise pour toutes les fonctions'],
    badge: 'MEILLEURE APP',
  },
  {
    rank: 2,
    name: 'IPTV Smarters Pro',
    rating: '⭐⭐⭐⭐☆',
    platforms: 'Android / iOS / PC',
    description:
      "Interface conviviale idéale pour débutants. Compatible multi-écrans, gestion Xtream Codes. Gratuite.",
    pros: ['Multiplateforme (Android, iOS, PC)', 'Interface intuitive pour débutants', 'Support Xtream Codes natif', 'Gratuite'],
    cons: ["Moins stable que TiviMate en 4K", 'EPG basique'],
  },
  {
    rank: 3,
    name: 'GSE Smart IPTV',
    rating: '⭐⭐⭐⭐☆',
    platforms: 'iOS / Android / Apple TV',
    description:
      "La meilleure option pour iPhone/iPad. Support M3U et Xtream, interface propre. Version pro recommandée.",
    pros: ['Meilleure app iOS native', 'Compatible Apple TV', 'Support M3U et Xtream Codes', 'EPG intégré'],
    cons: ['Version pro payante pour fonctions avancées', 'Interface moins soignée que TiviMate'],
    badge: 'MEILLEURE iOS',
  },
  {
    rank: 4,
    name: 'Perfect Player',
    rating: '⭐⭐⭐½☆',
    platforms: 'Android',
    description:
      "Interface style TV classique, idéale pour les utilisateurs habitués à la télévision traditionnelle. Gratuite.",
    pros: ['Interface style TV traditionnelle', 'Gratuite', 'Facile à prendre en main'],
    cons: ['Android uniquement', 'Développement ralenti', 'Pas de support Xtream Codes natif'],
  },
  {
    rank: 5,
    name: 'Kodi + add-on PVR',
    rating: '⭐⭐⭐½☆',
    platforms: 'Toutes plateformes',
    description:
      "Solution open-source très flexible mais nécessite une configuration avancée. Pour utilisateurs expérimentés.",
    pros: ['Multiplateforme complet', 'Très personnalisable', 'Open-source gratuit'],
    cons: ['Configuration complexe', 'Nécessite des connaissances techniques', 'Mises à jour manuelles'],
  },
  {
    rank: 6,
    name: 'OTT Navigator',
    rating: '⭐⭐⭐☆☆',
    platforms: 'Android',
    description:
      "Bonne alternative à TiviMate, interface EPG claire, mais moins stable. Gratuite avec publicités.",
    pros: ['Interface EPG claire', 'Gratuite', 'Alternative viable à TiviMate'],
    cons: ['Publicités dans la version gratuite', 'Moins stable que TiviMate', 'Android uniquement'],
  },
  {
    rank: 7,
    name: 'VLC Media Player',
    rating: '⭐⭐½☆☆',
    platforms: 'PC / Mac / Mobile',
    description:
      "Lit les flux M3U directement, mais pas d'EPG et pas d'interface dédiée IPTV. Solution de dépannage.",
    pros: ['Disponible sur tous les OS', 'Gratuit et open-source', 'Lit les fichiers M3U directement'],
    cons: ["Pas d'interface IPTV dédiée", "Pas d'EPG", 'Expérience utilisateur limitée'],
  },
];

const configSteps = [
  {
    step: '1',
    title: 'Obtenez votre abonnement VivaceTV',
    desc: "Choisissez votre formule sur /abonnements et contactez notre équipe via WhatsApp pour finaliser votre commande.",
  },
  {
    step: '2',
    title: 'Recevez vos identifiants via WhatsApp',
    desc: "Vous recevez votre URL M3U et/ou vos identifiants Xtream Codes directement sur WhatsApp, généralement en moins d'1 heure.",
  },
  {
    step: '3',
    title: 'Entrez vos identifiants dans votre application',
    desc: "Dans votre application IPTV préférée (TiviMate, IPTV Smarters Pro, GSE Smart IPTV…), ajoutez votre liste via M3U ou Xtream Codes.",
  },
  {
    step: '4',
    title: "Profitez de +22 000 chaînes",
    desc: "Vos chaînes se chargent automatiquement. En cas de question, notre support WhatsApp 24/7 vous guide à chaque étape.",
  },
];

export default function MeilleureApplicationIPTVPage() {
  return (
    <>
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
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Meilleure Application IPTV', href: '/meilleure-application-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="TOP APPLICATIONS IPTV"
          title="Quelle est la Meilleure"
          titleHighlight="Application IPTV en 2025 ?"
          subtitle="Le choix de l'application IPTV est aussi important que celui du fournisseur. Voici notre classement des 7 meilleures apps testées avec VivaceTV."
        />

        {/* Section 1 — Importance du choix */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi le Choix de l&apos;Application IPTV Est Crucial
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Même avec le meilleur abonnement IPTV du monde, une mauvaise application peut
              ruiner votre expérience. L&apos;application IPTV — aussi appelée player — est
              l&apos;interface entre votre abonnement et votre écran. Elle gère la lecture des
              flux, l&apos;affichage du guide des programmes (EPG), la gestion de plusieurs
              listes de chaînes et la stabilité du buffering.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un bon player IPTV doit proposer un EPG (guide des programmes) complet et mis à
              jour, supporter les formats M3U et Xtream Codes, offrir une lecture fluide en
              4K/8K, et permettre de gérer plusieurs profils ou listes de chaînes. La stabilité
              du player contribue autant à l&apos;absence de coupures que la qualité du serveur.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV fournit des identifiants compatibles avec toutes les applications majeures.
              Notre équipe support vous guide dans la configuration de votre application via
              WhatsApp 24/7. Consultez notre{' '}
              <Link
                href="/guide-iptv/installation-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guide d&apos;installation IPTV
              </Link>{' '}
              pour des instructions détaillées.
            </p>
          </div>
        </section>

        {/* Section 2 — Top 7 */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Notre Top 7 des Meilleures Applications IPTV
            </h2>
            <div className="flex flex-col gap-5">
              {apps.map((app) => (
                <div
                  key={app.rank}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: app.rank === 1 ? '2px solid var(--color-lime)' : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          backgroundColor: app.rank === 1 ? 'var(--color-lime)' : 'var(--color-border)',
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
                        }}
                      >
                        {app.rank}
                      </span>
                      <div>
                        <h3
                          className="font-display font-bold text-lg"
                          style={{ color: 'var(--color-ink)' }}
                        >
                          {app.name}
                        </h3>
                        <span className="text-xs" style={{ color: 'var(--color-ink-light)' }}>
                          {app.platforms} · {app.rating}
                        </span>
                      </div>
                    </div>
                    {app.badge && (
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'var(--color-lime)',
                          color: 'var(--color-dark)',
                        }}
                      >
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
                    {app.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-lime)' }}>
                        POINTS FORTS
                      </p>
                      <ul className="flex flex-col gap-1">
                        {app.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-ink-light)' }}>
                            <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-lime)' }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-gray-400)' }}>
                        POINTS FAIBLES
                      </p>
                      <ul className="flex flex-col gap-1">
                        {app.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-ink-light)' }}>
                            <span className="mt-0.5 flex-shrink-0 text-gray-400">–</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Android */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Meilleure Application IPTV Android en 2025
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur Android TV et Fire TV Stick, le duel se joue entre{' '}
              <strong style={{ color: 'var(--color-ink)' }}>TiviMate</strong> et{' '}
              <strong style={{ color: 'var(--color-ink)' }}>IPTV Smarters Pro</strong>. TiviMate
              s&apos;impose pour les utilisateurs exigeants grâce à son EPG remarquable, sa
              gestion multi-profils et sa lecture ultra-stable en 4K et 8K. Sa version premium
              (~5€/an) débloque les fonctionnalités avancées comme l&apos;enregistrement et les
              favoris.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV Smarters Pro est l&apos;alternative gratuite idéale pour les débutants. Son
              interface simple, sa compatibilité Xtream Codes native et sa disponibilité sur
              Android, iOS et PC en font un choix polyvalent. Pour les utilisateurs sur téléphone
              Android (non TV), OTT Navigator ou Perfect Player sont également d&apos;excellentes
              options.
            </p>
            <Link
              href="/guide-iptv/application-iptv-android"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: 'var(--color-lime)' }}
            >
              Guide complet : configurer TiviMate avec VivaceTV sur Android →
            </Link>
          </div>
        </section>

        {/* Section 4 — iOS */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Meilleure Application IPTV iOS (iPhone/iPad)
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur iPhone et iPad, <strong style={{ color: 'var(--color-ink)' }}>GSE Smart IPTV</strong>{' '}
              est la référence. Disponible sur l&apos;App Store, elle supporte les formats M3U et
              Xtream Codes, intègre un guide EPG complet et est compatible avec Apple TV pour
              profiter de vos chaînes sur grand écran.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Pour configurer VivaceTV avec GSE Smart IPTV, suivez ces étapes : ouvrez
              l&apos;application, sélectionnez &quot;Remote Playlists&quot;, puis &quot;Add M3U URL&quot; et
              collez l&apos;URL M3U reçue via WhatsApp après votre abonnement. Vos +22 000 chaînes
              apparaissent automatiquement. IPTV Smarters Pro est également disponible sur iOS
              et constitue une bonne alternative gratuite.
            </p>
            <Link
              href="/abonnements"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{
                backgroundColor: 'var(--color-lime)',
                color: 'var(--color-dark)',
              }}
            >
              Obtenir mes identifiants VivaceTV →
            </Link>
          </div>
        </section>

        {/* Section 5 — Configuration */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Configurer Votre Application IPTV avec VivaceTV ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {configSteps.map((s) => (
                <div
                  key={s.step}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-3"
                    style={{
                      backgroundColor: 'var(--color-lime)',
                      color: 'var(--color-dark)',
                    }}
                  >
                    {s.step}
                  </div>
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV est compatible avec TiviMate, IPTV Smarters Pro, GSE Smart IPTV, Perfect
              Player, OTT Navigator, Kodi, VLC et toute application supportant M3U ou Xtream
              Codes. Consultez notre{' '}
              <Link
                href="/guide-iptv/installation-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guide d&apos;installation complet
              </Link>{' '}
              ou notre section{' '}
              <Link
                href="/iptv-4k"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                IPTV 4K
              </Link>{' '}
              pour optimiser votre expérience.
            </p>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Applications IPTV
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
                { href: '/guide-iptv/application-iptv-android', label: 'Guide Android IPTV' },
                { href: '/guide-iptv/installation-iptv', label: 'Guide installation IPTV' },
                { href: '/iptv-4k', label: 'IPTV 4K & 8K' },
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
