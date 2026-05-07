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
  title: 'IPTV Hottest Avis 2025 — Meilleure Alternative France | ClarioTV',
  description:
    'IPTV Hottest avis 2025 : comparatif avec ClarioTV pour votre abonnement IPTV France. Qualité, prix, stabilité — notre analyse complète.',
  keywords: [
    'iptv hottest',
    'iptv hottest avis',
    'alternative iptv hottest',
    'iptv hottest france',
    'iptv hottest vs clariotv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/iptv-hottest` },
  openGraph: {
    title: 'IPTV Hottest Avis 2025 — Meilleure Alternative France | ClarioTV',
    description:
      'Comparatif IPTV Hottest vs ClarioTV : qualité, prix, stabilité, support. Trouvez le meilleur abonnement IPTV France en 2025.',
    url: `${siteConfig.url}/alternatives/iptv-hottest`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'IPTV Hottest est-il disponible en France ?',
    answer:
      "IPTV Hottest est présent sur le marché français, mais les informations disponibles sur ce service sont limitées. Son catalogue serait d'environ 10 000 chaînes avec une qualité HD/4K. ClarioTV propose un service mieux documenté avec +22 000 chaînes, une qualité jusqu'au 8K et un essai gratuit 24h pour tester avant de s'engager.",
  },
  {
    question: 'IPTV Hottest est-il fiable ?',
    answer:
      "Les informations sur la fiabilité d'IPTV Hottest sont limitées. Les retours utilisateurs disponibles ne permettent pas d'établir un jugement définitif sur sa stabilité. Pour un service dont la fiabilité est documentée et garantie, ClarioTV propose la technologie AntiFreeze 10.0 et un uptime serveur optimisé.",
  },
  {
    question: 'Quelle est la meilleure alternative à IPTV Hottest ?',
    answer:
      "ClarioTV est la meilleure alternative à IPTV Hottest en France. Il offre un catalogue de +22 000 chaînes (contre ~10 000 pour IPTV Hottest), une qualité jusqu'au 8K, des prix transparents dès 22,99€ pour 3 mois, un essai gratuit 24h et un support WhatsApp 24/7 en français.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~10 000', clariotv: '+22 000' },
  { label: 'Qualité vidéo', competitor: 'HD/4K', clariotv: 'HD/4K/8K ✓' },
  { label: 'Prix', competitor: 'Variable', clariotv: 'Transparent ✓' },
  { label: 'Essai gratuit', competitor: 'Non connu', clariotv: '✅ 24h' },
  { label: 'Support', competitor: 'Limité', clariotv: '✅ WhatsApp 24/7' },
  { label: 'Anti-freeze', competitor: 'Non précisé', clariotv: '✅' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h ClarioTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  "Recevez vos accès en moins d'1h",
  'Profitez de ClarioTV sans coupure',
];

export default function IPTVHottestPage() {
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
          { name: 'IPTV Hottest', href: '/alternatives/iptv-hottest' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="IPTV Hottest"
          titleHighlight="Avis & Comparaison ClarioTV"
          subtitle="Vous cherchez une alternative à IPTV Hottest ? Découvrez pourquoi ClarioTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Présentation */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce qu&apos;IPTV Hottest ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV Hottest est un service d&apos;abonnement IPTV disponible sur le marché français.
              Relativement peu documenté par rapport à des services plus établis, il propose un
              catalogue d&apos;environ 10 000 chaînes avec une qualité vidéo allant jusqu&apos;au 4K.
              Sa compatibilité avec les appareils courants (Smart TV, Android, iOS) est assurée,
              mais peu de détails sont disponibles sur ses fonctionnalités avancées.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Les informations sur IPTV Hottest restent limitées dans les retours utilisateurs
              disponibles. Sa tarification est présentée comme variable, et son support client
              semble limité selon les témoignages disponibles en ligne. L&apos;absence d&apos;essai
              gratuit connu représente également un frein pour les nouveaux utilisateurs souhaitant
              tester la qualité avant de s&apos;engager.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Face au manque de transparence d&apos;IPTV Hottest, ClarioTV se distingue par une
              offre claire, documentée et éprouvée sur le marché français depuis plusieurs années.
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
              IPTV Hottest : Ce que l&apos;on Sait
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
                    'Accessible depuis la France',
                    'Qualité HD disponible sur les chaînes principales',
                    'Compatible avec les appareils courants',
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
                    'Catalogue limité (~10 000 chaînes)',
                    'Informations publiques très limitées',
                    'Tarification variable peu transparente',
                    'Support client limité selon les retours',
                    'Aucun essai gratuit connu',
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
              IPTV Hottest vs ClarioTV — Comparatif
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>IPTV Hottest</th>
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
              * Données IPTV Hottest basées sur les informations publiquement disponibles. Certaines
              données ne sont pas connues à ce jour. À titre indicatif.
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
              Pourquoi Choisir ClarioTV plutôt qu&apos;IPTV Hottest ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La transparence est la première raison de choisir ClarioTV. Contrairement à IPTV
              Hottest dont les informations publiques sont limitées, ClarioTV affiche clairement
              son catalogue (+22 000 chaînes), sa tarification (Bronze 22,99€, Silver 34,99€,
              Gold 44,99€, Diamond 74,99€) et ses fonctionnalités (8K, AntiFreeze 10.0, replay,
              support WhatsApp 24/7).
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Avec plus du double de chaînes disponibles (+22 000 vs ~10 000) et une qualité
              vidéo supérieure (jusqu&apos;au 8K contre HD/4K pour IPTV Hottest), ClarioTV offre
              une expérience IPTV significativement plus riche.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La technologie <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de ClarioTV
              garantit une stabilité documentée et éprouvée, là où IPTV Hottest ne précise pas
              ses solutions techniques pour éviter les coupures.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Enfin, ClarioTV propose un essai gratuit de 24 heures sur simple demande via
              WhatsApp — une garantie de qualité qu&apos;IPTV Hottest ne semble pas offrir. C&apos;est
              le meilleur moyen de vous forger votre propre opinion avant tout engagement.
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
              Passer à ClarioTV en 5 Étapes
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
              Questions Fréquentes — IPTV Hottest
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
