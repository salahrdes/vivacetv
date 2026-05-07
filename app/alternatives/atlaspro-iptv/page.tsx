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
  title: 'AtlasPro IPTV Avis 2025 — Meilleure Alternative | ClarioTV',
  description:
    'AtlasPro IPTV avis 2025 : est-ce le bon fournisseur IPTV France ? Comparatif AtlasPro vs ClarioTV — prix, chaînes, qualité et support.',
  keywords: [
    'atlaspro iptv',
    'atlaspro iptv avis',
    'alternative atlaspro iptv',
    'atlaspro iptv france',
    'atlaspro vs clariotv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/atlaspro-iptv` },
  openGraph: {
    title: 'AtlasPro IPTV Avis 2025 — Meilleure Alternative | ClarioTV',
    description:
      'Comparatif AtlasPro IPTV vs ClarioTV : prix, chaînes, qualité, support. Trouvez le meilleur abonnement IPTV France en 2025.',
    url: `${siteConfig.url}/alternatives/atlaspro-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'AtlasPro IPTV est-il bon pour les chaînes françaises ?',
    answer:
      "AtlasPro IPTV est principalement connu pour son contenu arabe et MENA. Son catalogue de chaînes françaises est limité selon les retours disponibles. ClarioTV propose un catalogue complet de chaînes françaises (+22 000 chaînes au total), incluant toutes les chaînes de la TNT, les bouquets sportifs et les chaînes régionales.",
  },
  {
    question: 'Quelle est la différence entre AtlasPro IPTV et IPTV Atlas ?',
    answer:
      "AtlasPro IPTV et IPTV Atlas sont deux services distincts. AtlasPro IPTV se positionne sur le segment premium avec un accent sur le contenu arabe haut de gamme. IPTV Atlas est un service plus généraliste. Les deux sont différents de ClarioTV, qui est spécialisé pour le marché français avec un catalogue complet de chaînes françaises et internationales.",
  },
  {
    question: 'AtlasPro IPTV propose-t-il un essai gratuit ?',
    answer:
      "AtlasPro IPTV ne propose pas d'essai gratuit à notre connaissance. ClarioTV propose un test gratuit de 24 heures sur simple demande via WhatsApp, permettant de vérifier la compatibilité avec vos appareils et la qualité des chaînes qui vous intéressent avant tout engagement.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~13 000', clariotv: '+22 000' },
  { label: 'Contenu arabe', competitor: '✅', clariotv: '✅ ✓' },
  { label: 'Contenu français', competitor: 'Limité', clariotv: '✅ Complet ✓' },
  { label: 'Qualité max', competitor: 'HD/4K', clariotv: 'HD/4K/8K ✓' },
  { label: 'Prix', competitor: '~22€/mois', clariotv: 'Dès 3,75€/mois ✓' },
  { label: 'Essai gratuit', competitor: '❌', clariotv: '✅ 24h' },
  { label: 'Support', competitor: 'Limité', clariotv: '✅ WhatsApp 24/7' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h ClarioTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  "Recevez vos accès en moins d'1h",
  'Profitez de ClarioTV sans coupure',
];

export default function AtlasProIPTVPage() {
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
          { name: 'AtlasPro IPTV', href: '/alternatives/atlaspro-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="AtlasPro IPTV"
          titleHighlight="Avis & Meilleure Alternative"
          subtitle="Vous cherchez une alternative à AtlasPro IPTV ? Découvrez pourquoi ClarioTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Présentation */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce qu&apos;AtlasPro IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              AtlasPro IPTV est un service d&apos;abonnement IPTV spécialisé dans le contenu arabe
              premium et les chaînes de la région MENA (Moyen-Orient et Afrique du Nord). Il
              propose un catalogue d&apos;environ 13 000 chaînes avec une qualité vidéo allant
              jusqu&apos;au 4K, et est compatible avec les principaux appareils du marché.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              AtlasPro IPTV se distingue d&apos;IPTV Atlas par son positionnement plus premium et son
              accent sur la qualité du contenu arabophone. Cependant, pour les utilisateurs
              français souhaitant accéder à un catalogue complet de chaînes françaises, son
              offre est plus limitée.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              À ~22€ par mois selon les informations disponibles, AtlasPro IPTV est également
              bien plus coûteux que ClarioTV, qui propose des tarifs dès 3,75€ par mois avec
              une offre annuelle et un catalogue beaucoup plus large.
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
              AtlasPro IPTV : Avantages et Inconvénients
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
                    'Reconnu pour la qualité du contenu arabe',
                    'Catalogue de chaînes MENA étoffé',
                    'Qualité 4K sur les chaînes premium',
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
                    'Catalogue de chaînes françaises limité',
                    'Aucun essai gratuit à notre connaissance',
                    'Support client limité',
                    'Pas de qualité 8K disponible',
                    'Prix élevé (~22€/mois) pour le service proposé',
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
              AtlasPro IPTV vs ClarioTV — Comparatif Détaillé
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>AtlasPro IPTV</th>
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
              * Données AtlasPro IPTV basées sur les informations publiquement disponibles et les
              retours utilisateurs. À titre indicatif.
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
              Pourquoi ClarioTV est Meilleur qu&apos;AtlasPro IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              ClarioTV propose un catalogue bien plus large qu&apos;AtlasPro IPTV (+22 000 chaînes
              contre ~13 000), avec une couverture complète des deux marchés : le contenu arabe
              et MENA, mais également l&apos;intégralité des chaînes françaises. Pour les utilisateurs
              franco-arabes, ClarioTV est le choix évident.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La différence tarifaire est également déterminante : ~22€ par mois pour AtlasPro
              contre 3,75€ par mois avec l&apos;offre Gold annuelle de ClarioTV. Sur un an, c&apos;est
              une économie de plus de 220€ pour un service de meilleure qualité.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La qualité vidéo est également supérieure chez ClarioTV avec des flux disponibles
              en 8K — une résolution absente d&apos;AtlasPro IPTV. La technologie AntiFreeze 10.0
              garantit en outre une stabilité supérieure lors des événements en direct.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Contrairement à AtlasPro IPTV, ClarioTV propose un essai gratuit de 24 heures sur
              simple demande via WhatsApp. C&apos;est l&apos;occasion idéale pour vérifier la qualité des
              chaînes arabes et françaises qui vous intéressent avant de vous engager.
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
              Comment Passer d&apos;AtlasPro IPTV à ClarioTV ?
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
              Questions Fréquentes — AtlasPro IPTV vs ClarioTV
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
