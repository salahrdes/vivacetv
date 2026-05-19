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
  title: 'Televizo IPTV Avis 2026 — App ou Abonnement ? | VivaceTV',
  description:
    "Televizo est une application IPTV, pas un fournisseur d'abonnement. Découvrez comment l'utiliser avec VivaceTV pour la meilleure expérience IPTV France.",
  keywords: [
    'televizo iptv',
    'televizo application iptv',
    'televizo abonnement',
    'televizo vivacetv',
    'meilleur abonnement pour televizo',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/televizo` },
  openGraph: {
    title: 'Televizo IPTV Avis 2026 — App ou Abonnement ? | VivaceTV',
    description:
      "Televizo est un lecteur IPTV Android gratuit. Découvrez comment le configurer avec VivaceTV pour une expérience IPTV France optimale.",
    url: `${siteConfig.url}/alternatives/televizo`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Televizo IPTV est-il gratuit ?',
    answer:
      "L'application Televizo est disponible gratuitement sur Android. Elle nécessite cependant un abonnement IPTV actif pour fonctionner. Televizo est uniquement un lecteur multimédia — il ne fournit pas de chaînes par lui-même.",
  },
  {
    question: "Comment configurer VivaceTV avec l'application Televizo ?",
    answer:
      "Après avoir souscrit votre abonnement VivaceTV, vous recevez vos identifiants Xtream Codes ou votre URL M3U via WhatsApp. Dans Televizo, allez dans 'Ajouter une liste' et entrez l'URL M3U fournie. Votre liste de chaînes VivaceTV s'importera automatiquement.",
  },
  {
    question: "Televizo est-il meilleur que TiviMate pour l'IPTV ?",
    answer:
      "TiviMate reste l'application de référence pour Android TV, notamment pour son interface EPG avancée. Televizo est une bonne alternative gratuite, particulièrement sur les appareils Android mobiles. Les deux sont entièrement compatibles avec VivaceTV.",
  },
  {
    question: 'Quel abonnement IPTV utiliser avec Televizo ?',
    answer:
      "VivaceTV est compatible à 100% avec Televizo. Notre abonnement fournit une URL M3U ou des identifiants Xtream Codes directement utilisables dans l'application. Avec notre technologie AntiFreeze 10.0, vous profiterez d'une lecture sans coupure.",
  },
];

const configSteps = [
  {
    step: 1,
    title: 'Souscrire un abonnement VivaceTV',
    description:
      "Contactez VivaceTV via WhatsApp pour demander votre essai gratuit 24h ou choisissez directement votre offre (Bronze, Silver, Gold ou Diamond). Vos identifiants vous seront communiqués en moins d'une heure.",
  },
  {
    step: 2,
    title: 'Télécharger Televizo sur votre appareil Android',
    description:
      "Rendez-vous sur le Google Play Store ou l'Amazon Appstore et installez l'application Televizo IPTV Player gratuitement. L'application est disponible sur tous les appareils Android, y compris les Fire TV Stick.",
  },
  {
    step: 3,
    title: "Ouvrir Televizo et accéder à 'Mes listes'",
    description:
      "Lancez l'application Televizo. Sur l'écran d'accueil, appuyez sur 'Mes listes' puis sur le bouton '+' pour ajouter une nouvelle liste IPTV.",
  },
  {
    step: 4,
    title: "Entrer votre URL M3U ou identifiants Xtream Codes VivaceTV",
    description:
      "VivaceTV fournit deux formats : une URL M3U à coller directement, ou des identifiants Xtream Codes (serveur, nom d'utilisateur, mot de passe). Choisissez le format qui vous convient et saisissez les informations reçues via WhatsApp.",
  },
  {
    step: 5,
    title: 'Charger votre liste de chaînes et profiter',
    description:
      "Validez la configuration. Televizo va importer automatiquement toutes vos chaînes VivaceTV (+22 000 chaînes). Une fois chargé, vous pouvez naviguer dans le catalogue, utiliser le guide TV (EPG) et regarder en HD, 4K ou 8K.",
  },
];

const vivacetvAdvantages = [
  'URL M3U et identifiants Xtream Codes fournis instantanément via WhatsApp',
  '+22 000 chaînes françaises et internationales, parfaitement compatibles Televizo',
  'Guide EPG (programme TV) fourni automatiquement pour tous vos appareils',
  'Technologie AntiFreeze 10.0 : lecture fluide sans coupure dans Televizo',
  'Support WhatsApp 24/7 pour vous aider à configurer Televizo si besoin',
  'Compatible avec toutes les versions de Televizo sur Android mobile et TV',
];

export default function TelevizoIPTVPage() {
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
          { name: 'Alternatives IPTV', href: '/alternatives' },
          { name: 'Televizo', href: '/alternatives/televizo' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="APPLICATION IPTV"
          title="Televizo IPTV —"
          titleHighlight="Application ou Abonnement ?"
          subtitle="Televizo est un lecteur IPTV gratuit pour Android. Pour regarder des chaînes, il vous faut un abonnement IPTV — et VivaceTV est le meilleur choix."
        />

        {/* Section 1 — Qu'est-ce que Televizo */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce que Televizo IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Televizo IPTV est une <strong style={{ color: 'var(--color-ink)' }}>application lecteur IPTV</strong> disponible
              gratuitement sur Android (Google Play Store et Amazon Appstore). Elle permet de lire
              des flux IPTV depuis n&apos;importe quelle liste de chaînes au format M3U ou via des
              identifiants Xtream Codes.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Televizo est souvent comparée à TiviMate IPTV Player, une autre application populaire
              dans l&apos;univers de l&apos;IPTV. Toutes deux sont des <em>lecteurs</em> — elles ne
              fournissent aucune chaîne par elles-mêmes. Pour regarder des chaînes de télévision
              via Televizo, vous avez impérativement besoin d&apos;un abonnement IPTV actif auprès
              d&apos;un fournisseur comme VivaceTV.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Ses fonctionnalités principales incluent la lecture de flux en HD, 4K et 8K, un guide
              de programmes (EPG) intégré, la gestion de plusieurs listes IPTV, et une interface
              adaptée aux appareils Android mobiles et tablettes.
            </p>
          </div>
        </section>

        {/* Section 2 — App vs Abonnement */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Televizo est une Application, Pas un Abonnement IPTV
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              C&apos;est le point essentiel à comprendre : <strong style={{ color: 'var(--color-ink)' }}>Televizo ne fournit
              aucune chaîne de télévision</strong>. C&apos;est uniquement un lecteur multimédia, comme
              VLC sur ordinateur. L&apos;application lit les flux que vous lui fournissez via une URL
              M3U ou des identifiants Xtream Codes.
            </p>
            <div
              style={{
                backgroundColor: 'var(--color-card)',
                border: '2px solid var(--color-lime)',
                borderRadius: 12,
                padding: 20,
                marginBottom: 24,
              }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-ink)' }}>
                En résumé : comment fonctionne Televizo ?
              </p>
              <p className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                <strong style={{ color: 'var(--color-lime)' }}>Televizo (gratuit)</strong> +
                <strong style={{ color: 'var(--color-lime)' }}> VivaceTV (abonnement)</strong> =
                accès à +22 000 chaînes en HD/4K/8K sur votre appareil Android.
              </p>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Pour profiter de Televizo, vous devez donc souscrire un abonnement IPTV auprès d&apos;un
              fournisseur de confiance. VivaceTV est 100% compatible avec Televizo et fournit
              l&apos;URL M3U ou les identifiants Xtream Codes nécessaires à la configuration de
              l&apos;application en quelques minutes.
            </p>
          </div>
        </section>

        {/* Section 3 — Pourquoi VivaceTV avec Televizo */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi VivaceTV est le Meilleur Abonnement pour Televizo ?
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Pour tirer le meilleur parti de l&apos;application Televizo, il vous faut un abonnement
              IPTV de qualité. VivaceTV est le partenaire idéal pour plusieurs raisons :
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {vivacetvAdvantages.map((advantage, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    size={20}
                    style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }}
                  />
                  <span className="text-base" style={{ color: 'var(--color-ink)' }}>
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV propose également un <strong style={{ color: 'var(--color-ink)' }}>essai gratuit de 24 heures</strong> sur
              simple demande via WhatsApp. C&apos;est l&apos;occasion idéale pour tester la compatibilité
              avec Televizo sur votre appareil avant de souscrire un abonnement.
            </p>
          </div>
        </section>

        {/* Section 4 — Guide de configuration */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Guide de Configuration : Televizo + VivaceTV
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Configurer VivaceTV dans l&apos;application Televizo est simple et rapide. Suivez ces
              5 étapes pour accéder à +22 000 chaînes en quelques minutes :
            </p>
            <div className="flex flex-col gap-6">
              {configSteps.map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div className="flex items-start gap-4">
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
                        fontSize: 16,
                        flexShrink: 0,
                      }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h3
                        className="font-display font-bold text-base mb-2"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Obtenir mon abonnement VivaceTV →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5 — Televizo vs TiviMate */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Televizo vs TiviMate : Quelle Application Choisir ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Televizo et TiviMate sont les deux applications IPTV les plus utilisées sur Android.
              Voici leurs principales différences :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  className="font-display font-bold text-base mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Televizo
                </h3>
                <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                  <li>✅ Gratuit sur Google Play</li>
                  <li>✅ Idéal sur Android mobile et tablette</li>
                  <li>✅ Interface simple et intuitive</li>
                  <li>✅ Compatible M3U et Xtream Codes</li>
                  <li>⚠️ Fonctionnalités EPG limitées vs TiviMate</li>
                </ul>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3
                  className="font-display font-bold text-base mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  TiviMate
                </h3>
                <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                  <li>✅ Référence sur Android TV et Fire TV</li>
                  <li>✅ Guide TV (EPG) très avancé</li>
                  <li>✅ Interface premium sur grand écran</li>
                  <li>⚠️ Version premium payante (~5€/an)</li>
                  <li>⚠️ Moins adapté aux appareils mobiles</li>
                </ul>
              </div>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <strong style={{ color: 'var(--color-ink)' }}>Bonne nouvelle :</strong> VivaceTV est
              entièrement compatible avec les deux applications. Que vous utilisiez Televizo sur
              votre téléphone Android ou TiviMate sur votre Android TV, vos identifiants VivaceTV
              fonctionneront parfaitement sur les deux plateformes.
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
              Questions Fréquentes — Televizo et VivaceTV
            </h2>
            <div className="flex flex-col gap-4 mb-10">
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
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/alternatives', label: 'Toutes les alternatives IPTV' },
                { href: '/meilleur-iptv', label: 'Meilleur IPTV France 2025' },
                { href: '/abonnements', label: 'Abonnements VivaceTV' },
                { href: '/avis-iptv', label: 'Avis clients VivaceTV' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm px-4 py-2 rounded-lg font-medium"
                  style={{
                    backgroundColor: 'var(--color-card)',
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
