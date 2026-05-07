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
  title: 'Smarter One IPTV Avis 2025 — Meilleure Alternative | ClarioTV',
  description:
    'Smarter One IPTV avis 2025 : comparatif avec ClarioTV. Prix, catalogue, stabilité, support — faites le bon choix pour votre abonnement IPTV France.',
  keywords: [
    'smarter one iptv',
    'smarter one iptv avis',
    'alternative smarter one iptv',
    'smarter one iptv france',
    'smarter one vs clariotv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/smarter-one-iptv` },
  openGraph: {
    title: 'Smarter One IPTV Avis 2025 — Meilleure Alternative | ClarioTV',
    description:
      'Comparatif Smarter One IPTV vs ClarioTV : catalogue, prix, contenu français, support. Trouvez le meilleur abonnement IPTV France en 2025.',
    url: `${siteConfig.url}/alternatives/smarter-one-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Smarter One IPTV est-il disponible en France ?',
    answer:
      "Smarter One IPTV est accessible depuis la France, mais il est davantage orienté vers un public international et multi-langues. Son catalogue de chaînes françaises est limité selon les retours disponibles, ce qui peut être problématique pour les téléspectateurs français souhaitant accéder à TF1, France 2, Canal+ ou les chaînes sportives françaises.",
  },
  {
    question: 'Smarter One IPTV propose-t-il un support en français ?',
    answer:
      "À notre connaissance, Smarter One IPTV ne propose pas de support client en français. ClarioTV offre en revanche un support WhatsApp 24/7 entièrement en français, avec des agents disponibles pour vous aider à l'installation, la configuration et la résolution de tout problème technique.",
  },
  {
    question: 'Quel est le prix de Smarter One IPTV par rapport à ClarioTV ?',
    answer:
      "Smarter One IPTV propose des tarifs autour de 18€ par mois selon les informations disponibles. ClarioTV est bien plus avantageux : l'offre Gold 12 mois à 44,99€ revient à seulement 3,75€ par mois, soit une économie considérable pour un service de meilleure qualité.",
  },
  {
    question: 'Pourquoi choisir ClarioTV plutôt que Smarter One IPTV pour les chaînes françaises ?',
    answer:
      "ClarioTV a été conçu spécifiquement pour le marché français. Son catalogue de +22 000 chaînes inclut l'intégralité des chaînes françaises gratuites et payantes (TF1, France TV, M6, Canal+, beIN Sports, RMC Sport, etc.), les chaînes locales et régionales, et le contenu français VOD. Le support est francophone 24/7. Smarter One IPTV est moins bien adapté au marché français.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~14 000', clariotv: '+22 000' },
  { label: 'Contenu français', competitor: 'Limité', clariotv: '✅ Complet' },
  { label: 'Qualité vidéo', competitor: 'HD/4K', clariotv: 'HD/4K/8K ✓' },
  { label: 'Prix', competitor: '~18€/mois', clariotv: 'Dès 3,75€/mois (Gold) ✓' },
  { label: 'Essai gratuit', competitor: '❌', clariotv: '✅ 24h' },
  { label: 'Support francophone', competitor: '❌', clariotv: '✅ Francophone' },
  { label: 'Replay', competitor: '❌', clariotv: '✅' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h ClarioTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  "Recevez vos accès en moins d'1h",
  'Profitez de ClarioTV sans coupure',
];

export default function SmarterOneIPTVPage() {
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
          { name: 'Smarter One IPTV', href: '/alternatives/smarter-one-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="Smarter One IPTV"
          titleHighlight="Avis & Meilleure Alternative"
          subtitle="Vous cherchez une alternative à Smarter One IPTV ? Découvrez pourquoi ClarioTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Présentation */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce que Smarter One IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Smarter One IPTV est un service d&apos;abonnement IPTV à vocation internationale,
              proposant du contenu en plusieurs langues. Il dispose d&apos;un catalogue d&apos;environ
              14 000 chaînes couvrant différentes régions du monde, avec une qualité vidéo allant
              jusqu&apos;au 4K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Si son offre internationale est sa principale force, Smarter One IPTV montre ses
              limites pour les utilisateurs français : le catalogue de chaînes françaises est moins
              complet que chez des services spécialisés comme ClarioTV, et le support client n&apos;est
              pas disponible en français à notre connaissance.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Pour un utilisateur français souhaitant accéder à l&apos;intégralité des chaînes du
              paysage audiovisuel français — chaînes gratuites, bouquets sportifs, chaînes
              régionales — ClarioTV est une alternative nettement supérieure.
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
              Smarter One IPTV : Avantages et Inconvénients
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
                    'Contenu international varié en plusieurs langues',
                    'Compatible avec plusieurs appareils',
                    'Accessible depuis la France',
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
                    'Peu adapté au marché français spécifiquement',
                    'Catalogue de chaînes françaises limité',
                    'Pas de support francophone à notre connaissance',
                    'Pas d\'essai gratuit disponible',
                    'Pas de fonction replay disponible',
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
              Smarter One IPTV vs ClarioTV — Comparatif Détaillé
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>Smarter One IPTV</th>
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
              * Données Smarter One IPTV basées sur les informations publiquement disponibles et les
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
              Pourquoi ClarioTV est Meilleur que Smarter One IPTV pour la France ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              ClarioTV est un service IPTV pensé et optimisé pour le marché français. Son catalogue
              de +22 000 chaînes inclut l&apos;intégralité du paysage audiovisuel français : TNT
              complète (TF1, France 2, France 3, France 4, M6, C8, TMC, TFX, etc.), chaînes
              payantes (Canal+, beIN Sports, RMC Sport, OCS), chaînes régionales, et bien sûr un
              vaste choix de chaînes arabes et internationales.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Contrairement à Smarter One IPTV dont le catalogue français est limité, ClarioTV
              propose également un replay complet, permettant de visionner les émissions manquées.
              La qualité vidéo est également supérieure avec des flux disponibles en HD, 4K et 8K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La différence tarifaire est éloquente : ~18€ par mois pour Smarter One contre 3,75€
              par mois avec l&apos;offre Gold annuelle de ClarioTV. Sur 12 mois, cela représente une
              économie de plus de 170€ pour un service de meilleure qualité.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Enfin, le support client francophone 24/7 de ClarioTV via WhatsApp est un avantage
              décisif pour les utilisateurs français qui préfèrent être aidés dans leur langue.
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
              Comment Passer de Smarter One IPTV à ClarioTV ?
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
              Questions Fréquentes — Smarter One IPTV vs ClarioTV
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
