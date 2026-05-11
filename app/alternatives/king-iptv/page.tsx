import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'King IPTV Avis 2026 — Meilleure Alternative en France | ClarioTV',
  description:
    'King IPTV avis 2025 : est-il le meilleur choix IPTV France ? Comparatif King IPTV vs ClarioTV : prix, qualité, support. Trouvez la meilleure offre.',
  keywords: [
    'king iptv',
    'king iptv avis',
    'alternative king iptv',
    'king iptv france',
    'king iptv vs clariotv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/king-iptv` },
  openGraph: {
    title: 'King IPTV Avis 2026 — Meilleure Alternative en France | ClarioTV',
    description:
      'Comparatif King IPTV vs ClarioTV : stabilité, prix, qualité, support. Découvrez pourquoi ClarioTV est la meilleure alternative à King IPTV en France.',
    url: `${siteConfig.url}/alternatives/king-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'King IPTV est-il fiable ?',
    answer:
      "King IPTV est un service connu pour son large catalogue de chaînes, mais les retours utilisateurs signalent des problèmes de stabilité récurrents, notamment lors des événements sportifs en direct. ClarioTV propose une stabilité supérieure grâce à la technologie AntiFreeze 10.0 et un temps de disponibilité serveur optimisé.",
  },
  {
    question: 'King IPTV propose-t-il le replay ?',
    answer:
      "King IPTV propose un replay partiel selon les retours utilisateurs. ClarioTV offre un replay complet sur les chaînes disponibles, permettant de regarder les émissions manquées jusqu'à 7 jours en arrière.",
  },
  {
    question: 'Quelle est la différence entre King IPTV et ClarioTV ?',
    answer:
      "Les principales différences sont la stabilité (ClarioTV utilise AntiFreeze 10.0 contre une stabilité irrégulière pour King IPTV), la qualité vidéo (8K chez ClarioTV vs 4K max pour King), le support client (WhatsApp 24/7 en français chez ClarioTV vs Telegram uniquement pour King) et la disponibilité d'un essai gratuit 24h chez ClarioTV.",
  },
  {
    question: 'Comment passer de King IPTV à ClarioTV ?',
    answer:
      "C'est simple et rapide : contactez ClarioTV via WhatsApp pour demander votre essai gratuit 24h. Testez la qualité sur vos appareils, puis choisissez l'offre adaptée à votre durée souhaitée. Vos accès ClarioTV vous seront fournis en moins d'une heure. Aucune configuration complexe n'est requise.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~18 000', clariotv: '+22 000' },
  { label: 'Qualité max', competitor: '4K', clariotv: '8K ✓' },
  { label: 'Stabilité', competitor: 'Irrégulière', clariotv: '✅ AntiFreeze 10.0' },
  { label: 'Prix entrée', competitor: '~20€/mois', clariotv: '22,99€/3 mois ✓' },
  { label: 'Essai gratuit', competitor: '❌', clariotv: '✅ 24h' },
  { label: 'Support', competitor: 'Telegram', clariotv: '✅ WhatsApp 24/7' },
  { label: 'Replay', competitor: 'Partiel', clariotv: '✅ Complet' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h ClarioTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  "Recevez vos accès en moins d'1h",
  'Profitez de ClarioTV sans coupure',
];

export default function KingIPTVPage() {
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
          { name: 'King IPTV', href: '/alternatives/king-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="King IPTV"
          titleHighlight="Avis 2025 & Alternative Recommandée"
          subtitle="Vous cherchez une alternative à King IPTV ? Découvrez pourquoi ClarioTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Présentation */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce que King IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              King IPTV est un service d&apos;abonnement IPTV populaire sur le marché français. Il
              propose un catalogue d&apos;environ 18 000 chaînes couvrant les contenus français,
              arabes, sportifs et internationaux. Le service est accessible sur Smart TV, Android,
              iOS et PC, avec une qualité vidéo allant jusqu&apos;au 4K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              King IPTV est souvent recommandé dans les communautés IPTV pour son volume de chaînes.
              Cependant, selon les retours utilisateurs disponibles, le service présente des
              problèmes de stabilité réguliers, notamment lors des événements sportifs à forte
              audience. Le support client, disponible uniquement via Telegram, peut également
              manquer de réactivité.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Si vous cherchez un service IPTV avec une meilleure stabilité, un catalogue encore
              plus large et un support client réactif en français, ClarioTV est la meilleure
              alternative à King IPTV disponible en France.
            </p>
          </div>
        </section>

        {/* Section 2 — Avantages et inconvénients */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              King IPTV : Avantages et Inconvénients
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>
                  Points positifs
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Large catalogue d\'environ 18 000 chaînes',
                    'Service populaire dans la communauté IPTV',
                    'Compatible avec les principaux appareils',
                  ].map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>{pro}</span>
                    </li>
                  ))}
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
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: 'var(--color-ink)' }}>
                  Points négatifs
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Problèmes de stabilité rapportés par les utilisateurs',
                    'Aucun essai gratuit disponible',
                    'Support uniquement via Telegram',
                    'Qualité limitée au 4K — pas de 8K',
                    'Replay partiel uniquement',
                  ].map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X size={16} style={{ color: 'var(--color-gray-400)', flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Tableau comparatif */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              King IPTV vs ClarioTV — Comparatif Détaillé
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>King IPTV</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-lime)' }}>ClarioTV ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      <td style={{ padding: '10px 16px', color: 'var(--color-ink)', fontWeight: 500 }}>{row.label}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-ink-light)' }}>{row.competitor}</td>
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-lime)', fontWeight: 600 }}>{row.clariotv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>
              * Données King IPTV basées sur les informations publiquement disponibles et les retours
              utilisateurs. À titre indicatif.
            </p>
          </div>
        </section>

        {/* Section 4 — Pourquoi ClarioTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi ClarioTV est Meilleur que King IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Bien que King IPTV propose un catalogue relativement large (~18 000 chaînes), ClarioTV
              va encore plus loin avec +22 000 chaînes, régulièrement mises à jour. La différence
              la plus notable se situe toutefois au niveau de la stabilité : la technologie
              propriétaire <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de
              ClarioTV garantit une diffusion sans coupure même lors des matchs les plus regardés,
              là où King IPTV est souvent mis en défaut selon les retours utilisateurs.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La qualité vidéo est également supérieure chez ClarioTV, qui propose des flux en 8K
              — une résolution absente de l&apos;offre King IPTV actuellement. Associée au replay
              complet (contre un replay partiel pour King), l&apos;expérience ClarioTV est
              significativement meilleure.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le support client est un autre point de différenciation majeur. ClarioTV propose un
              support WhatsApp 24/7 en français, avec un temps de réponse moyen inférieur à 15
              minutes. King IPTV propose un support uniquement via Telegram, moins immédiat et
              souvent moins accessible pour les utilisateurs francophones.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Sur le rapport qualité/prix enfin, l&apos;offre Gold ClarioTV à 44,99€ pour 12 mois
              (soit 3,75€/mois) reste bien en dessous du coût mensuel de King IPTV affiché à
              environ 20€/mois.
            </p>
          </div>
        </section>

        {/* Section 5 — Comment passer */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Passer de King IPTV à ClarioTV ?
            </h2>
            <div className="flex flex-col gap-4">
              {switchSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    style={{
                      backgroundColor: 'var(--color-lime)',
                      color: 'var(--color-dark)',
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
                    {i + 1}
                  </span>
                  <p className="text-base pt-1" style={{ color: 'var(--color-ink)' }}>{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Voir les offres ClarioTV →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — King IPTV vs ClarioTV
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
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-ink)' }}>
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
                { href: '/abonnements', label: 'Abonnements ClarioTV' },
                { href: '/avis-iptv', label: 'Avis clients ClarioTV' },
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
