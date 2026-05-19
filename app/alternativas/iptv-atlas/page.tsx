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
  title: 'IPTV Atlas Avis 2026 — Meilleure Alternative en France | VivaceTV',
  description:
    'IPTV Atlas avis 2025 : comparatif complet avec VivaceTV. Prix, chaînes, stabilité, support — qui offre le meilleur abonnement IPTV France ? Notre verdict.',
  keywords: [
    'iptv atlas',
    'iptv atlas avis',
    'alternative iptv atlas',
    'atlas iptv france',
    'iptv atlas vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/iptv-atlas` },
  openGraph: {
    title: 'IPTV Atlas Avis 2026 — Meilleure Alternative en France | VivaceTV',
    description:
      'Comparatif IPTV Atlas vs VivaceTV : prix, chaînes, qualité, support. Trouvez le meilleur abonnement IPTV France en 2025.',
    url: `${siteConfig.url}/alternatives/iptv-atlas`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'IPTV Atlas est-il fiable pour regarder des chaînes françaises ?',
    answer:
      "IPTV Atlas est davantage orienté vers les contenus arabes et internationaux. Les retours utilisateurs suggèrent que son catalogue de chaînes françaises est moins complet que celui de VivaceTV. Pour une expérience optimale en France, VivaceTV propose +22 000 chaînes dont l'intégralité des chaînes françaises gratuites et payantes.",
  },
  {
    question: 'Quelle est la différence entre IPTV Atlas et AtlasPro IPTV ?',
    answer:
      "IPTV Atlas et AtlasPro IPTV sont deux services distincts, même si leurs noms peuvent prêter à confusion. IPTV Atlas est un service généraliste, tandis qu'AtlasPro IPTV se positionne davantage sur le segment premium du contenu arabe. VivaceTV est une alternative supérieure aux deux pour les utilisateurs français.",
  },
  {
    question: 'IPTV Atlas propose-t-il un essai gratuit ?',
    answer:
      "À notre connaissance, IPTV Atlas ne propose pas d'essai gratuit. VivaceTV offre en revanche un test gratuit de 24 heures sur simple demande via WhatsApp, sans engagement ni carte bancaire requise.",
  },
  {
    question: 'Pourquoi choisir VivaceTV plutôt qu\'IPTV Atlas ?',
    answer:
      "VivaceTV surpasse IPTV Atlas sur tous les critères essentiels : catalogue plus large (+22 000 vs ~12 000 chaînes), qualité vidéo supérieure (8K vs HD/4K), interface moderne, prix plus avantageux sur 12 mois (3,75€/mois avec l'offre Gold), essai gratuit 24h et support WhatsApp 24/7 en français.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~12 000', vivacetv: '+22 000' },
  { label: 'Qualité max', competitor: 'HD/4K', vivacetv: '8K ✓' },
  { label: 'Interface', competitor: 'Datée', vivacetv: 'Moderne ✓' },
  { label: 'Prix', competitor: '~20€/mois', vivacetv: '3,75€/mois (Gold annuel) ✓' },
  { label: 'Essai gratuit', competitor: '❌', vivacetv: '✅' },
  { label: 'Support', competitor: 'Email uniquement', vivacetv: '✅ WhatsApp 24/7' },
  { label: 'Anti-freeze', competitor: 'Non précisé', vivacetv: '✅' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h VivaceTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  "Recevez vos accès en moins d'1h",
  'Profitez de VivaceTV sans coupure',
];

export default function IPTVAtlasPage() {
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
          { name: 'IPTV Atlas', href: '/alternatives/iptv-atlas' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="IPTV Atlas"
          titleHighlight="Avis & Comparaison avec VivaceTV"
          subtitle="Vous cherchez une alternative à IPTV Atlas ? Découvrez pourquoi VivaceTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Présentation */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce qu&apos;IPTV Atlas ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV Atlas est un service d&apos;abonnement IPTV disponible sur le marché français,
              principalement orienté vers les contenus arabes et internationaux. Il propose un
              catalogue d&apos;environ 12 000 chaînes avec une qualité vidéo allant jusqu&apos;au 4K sur les
              meilleures chaînes.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le service est compatible avec les principaux appareils (Smart TV, Android, iOS, PC),
              mais son interface est considérée comme datée par rapport aux standards actuels. Les
              utilisateurs francophones signalent également que le support client — disponible
              uniquement par email à notre connaissance — peut être lent à répondre.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              À noter : il ne faut pas confondre IPTV Atlas avec AtlasPro IPTV, qui est un service
              distinct. Les deux services partagent une orientation vers le contenu arabe, mais
              proposent des offres différentes.
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
              IPTV Atlas : Avantages et Inconvénients
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
                    'Marque connue dans la communauté IPTV',
                    'Bonne variété de contenus arabes et MENA',
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
                <h3
                  className="font-display font-bold text-lg mb-4"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Points négatifs
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'Interface datée, peu intuitive',
                    'Pas de qualité 8K disponible',
                    'Aucun essai gratuit à notre connaissance',
                    'Support uniquement par email (lent)',
                    'Catalogue de chaînes françaises moins complet',
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
              IPTV Atlas vs VivaceTV — Comparatif Détaillé
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>IPTV Atlas</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center', color: 'var(--color-lime)' }}>VivaceTV ✓</th>
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
                      <td style={{ padding: '10px 16px', textAlign: 'center', color: 'var(--color-lime)', fontWeight: 600 }}>{row.vivacetv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-3" style={{ color: 'var(--color-ink-light)' }}>
              * Données IPTV Atlas basées sur les informations publiquement disponibles et les retours
              utilisateurs. À titre indicatif.
            </p>
          </div>
        </section>

        {/* Section 4 — Pourquoi VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi VivaceTV est Meilleur qu&apos;IPTV Atlas ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV propose un catalogue presque deux fois plus large qu&apos;IPTV Atlas avec plus de
              22 000 chaînes, incluant l&apos;intégralité des chaînes françaises (TF1, France 2, France 3,
              M6, Canal+, beIN Sports, RMC Sport, etc.) mais aussi un large choix de chaînes arabes et
              internationales.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              L&apos;interface de VivaceTV est moderne et intuitive, optimisée pour toutes les résolutions
              d&apos;écran. Contrairement à l&apos;interface datée d&apos;IPTV Atlas, VivaceTV offre une expérience
              utilisateur soignée sur Smart TV, Android, iOS et PC.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur le plan financier, l&apos;écart est significatif. À ~20€ par mois pour IPTV Atlas contre
              3,75€ par mois pour VivaceTV (offre Gold 12 mois à 44,99€), le choix est évident en
              termes de rapport qualité/prix.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Le support client VivaceTV est disponible 24/7 via WhatsApp en français — un avantage
              considérable par rapport au support email uniquement d&apos;IPTV Atlas, qui peut entraîner
              des délais de réponse importants.
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
              Comment Passer d&apos;IPTV Atlas à VivaceTV ?
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
                Voir les offres VivaceTV →
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
              Questions Fréquentes — IPTV Atlas vs VivaceTV
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
