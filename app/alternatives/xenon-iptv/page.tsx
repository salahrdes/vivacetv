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
  title: 'Xenon IPTV Avis 2025 — Meilleure Alternative en France | ClarioTV',
  description:
    'Xenon IPTV avis 2025 : est-ce le bon choix pour votre IPTV France ? Comparatif Xenon vs ClarioTV : prix, qualité, stabilité, support. Notre verdict.',
  keywords: [
    'xenon iptv',
    'xenon iptv avis',
    'alternative xenon iptv',
    'xenon iptv france',
    'xenon iptv vs clariotv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/xenon-iptv` },
  openGraph: {
    title: 'Xenon IPTV Avis 2025 — Meilleure Alternative en France | ClarioTV',
    description:
      'Comparatif Xenon IPTV vs ClarioTV : prix, qualité, stabilité, support. Découvrez pourquoi ClarioTV est la meilleure alternative à Xenon IPTV en France.',
    url: `${siteConfig.url}/alternatives/xenon-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Xenon IPTV est-il fiable ?',
    answer:
      "Xenon IPTV est un service connu sur le marché français, mais les retours utilisateurs signalent des irrégularités de stabilité et un support client limité. ClarioTV offre une meilleure stabilité grâce à sa technologie AntiFreeze 10.0 et un support WhatsApp 24/7.",
  },
  {
    question: 'Quelle est la meilleure alternative à Xenon IPTV en France ?',
    answer:
      "ClarioTV est considéré comme la meilleure alternative à Xenon IPTV en France. Il propose un catalogue plus large (+22 000 chaînes vs ~15 000), une qualité supérieure (jusqu'au 8K), un essai gratuit 24h et un support WhatsApp réactif 24/7.",
  },
  {
    question: 'Xenon IPTV propose-t-il un essai gratuit ?',
    answer:
      "Non, Xenon IPTV ne propose pas d'essai gratuit à notre connaissance. ClarioTV propose un test gratuit de 24 heures sur simple demande via WhatsApp — idéal pour évaluer la qualité avant de s'engager.",
  },
  {
    question: 'Comment passer de Xenon IPTV à ClarioTV ?',
    answer:
      "C'est simple : contactez ClarioTV via WhatsApp pour demander votre essai gratuit 24h, testez sur votre appareil, puis choisissez votre offre. Vos accès ClarioTV sont activés en moins d'une heure. Aucune configuration complexe n'est nécessaire.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~15 000', clariotv: '+22 000' },
  { label: 'Qualité max', competitor: '4K', clariotv: '8K ✓' },
  { label: 'Prix entrée', competitor: '~25€/mois', clariotv: '22,99€/3 mois ✓' },
  { label: 'Essai gratuit', competitor: '❌', clariotv: '✅ 24h' },
  { label: 'Support 24/7', competitor: 'Limité', clariotv: '✅ WhatsApp' },
  { label: 'Anti-freeze', competitor: '❌', clariotv: '✅' },
  { label: 'Mise à jour catalogue', competitor: 'Irrégulière', clariotv: '✅ Régulière' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h ClarioTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  'Recevez vos accès en moins d\'1h',
  'Profitez de ClarioTV sans coupure',
];

export default function XenonIPTVPage() {
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
          { name: 'Xenon IPTV', href: '/alternatives/xenon-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="Xenon IPTV"
          titleHighlight="Avis 2025 & Meilleure Alternative"
          subtitle="Vous cherchez une alternative à Xenon IPTV ? Découvrez pourquoi ClarioTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Qu'est-ce que Xenon IPTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce que Xenon IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Xenon IPTV est un service d&apos;abonnement IPTV présent sur le marché français depuis
              quelques années. Il propose un catalogue de chaînes françaises et internationales,
              accessible sur Smart TV, Android, iOS et PC. Selon les informations disponibles, il
              compterait environ 15 000 chaînes avec une qualité vidéo allant jusqu&apos;au 4K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le service est relativement populaire en France, notamment grâce à sa présence dans les
              communautés IPTV francophones. Cependant, comme beaucoup de services IPTV, les retours
              utilisateurs sont mitigés, en particulier concernant la stabilité lors des événements
              sportifs en direct et la réactivité du support client.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Si vous recherchez une alternative à Xenon IPTV avec de meilleures performances et un
              support plus réactif, ce comparatif vous aidera à faire le bon choix.
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
              Xenon IPTV : Avantages et Inconvénients
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
                <h3
                  className="font-display font-bold text-lg mb-4"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Points positifs
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Base d\'utilisateurs importante en France',
                    'Service populaire dans la communauté IPTV',
                    'Qualité HD correcte sur les chaînes principales',
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
                <h3
                  className="font-display font-bold text-lg mb-4"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Points négatifs
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Pas d\'essai gratuit disponible à notre connaissance',
                    'Support client limité selon les retours utilisateurs',
                    'Qualité 8K absente — maximum 4K',
                    'Prix mensuel plus élevé que ClarioTV sur le long terme',
                    'Mises à jour de catalogue irrégulières signalées',
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
              Xenon IPTV vs ClarioTV — Comparatif Détaillé
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Xenon IPTV</th>
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
              * Données Xenon IPTV basées sur les informations publiquement disponibles et les retours
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
              Pourquoi ClarioTV est Meilleur que Xenon IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              ClarioTV a été conçu spécifiquement pour le marché français, avec un catalogue optimisé
              pour les téléspectateurs francophones. Contrairement à Xenon IPTV, ClarioTV propose plus
              de 22 000 chaînes mises à jour régulièrement, incluant toutes les chaînes françaises
              gratuites et payantes, les bouquets sportifs et un vaste catalogue VOD.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La technologie propriétaire <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de ClarioTV
              garantit une diffusion sans coupure même lors des pics de trafic — matchs de football,
              finales sportives — là où d&apos;autres services présentent des instabilités selon les retours
              utilisateurs.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur le plan tarifaire, l&apos;offre Gold 12 mois de ClarioTV à 44,99€ revient à moins de
              3,75€ par mois — bien en dessous du coût mensuel de Xenon IPTV. Et contrairement à
              Xenon, ClarioTV propose un <strong style={{ color: 'var(--color-ink)' }}>essai gratuit de 24 heures</strong> permettant
              de tester la qualité avant tout engagement.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Enfin, le support client ClarioTV est disponible 24h/24 via WhatsApp en français, avec
              un temps de réponse moyen inférieur à 15 minutes. Un niveau de service que Xenon IPTV
              ne semble pas proposer selon les informations disponibles.
            </p>
          </div>
        </section>

        {/* Section 5 — Comment passer à ClarioTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Passer de Xenon IPTV à ClarioTV ?
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
              Questions Fréquentes — Xenon IPTV vs ClarioTV
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

            {/* Internal links */}
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
