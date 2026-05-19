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
  title: 'IPTV AZ Avis 2026 — Meilleure Alternative IPTV France | VivaceTV',
  description:
    'IPTV AZ avis 2025 : notre comparatif complet avec VivaceTV. Stabilité, prix, catalogue, support — qui choisir pour votre abonnement IPTV France ?',
  keywords: [
    'iptv az',
    'iptv az avis',
    'alternative iptv az',
    'iptv az france',
    'iptv az vs vivacetv',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives/iptv-az` },
  openGraph: {
    title: 'IPTV AZ Avis 2026 — Meilleure Alternative IPTV France | VivaceTV',
    description:
      'Comparatif IPTV AZ vs VivaceTV : stabilité, prix, catalogue, support. Trouvez le meilleur abonnement IPTV France en 2025.',
    url: `${siteConfig.url}/alternatives/iptv-az`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'IPTV AZ est-il disponible en France ?',
    answer:
      "IPTV AZ est disponible en France, mais ses retours utilisateurs sont variables. Le service propose un catalogue d'environ 10 000 chaînes et prend en charge plusieurs appareils. Pour une expérience plus stable et un catalogue plus large, VivaceTV reste l'option recommandée avec +22 000 chaînes et la technologie AntiFreeze 10.0.",
  },
  {
    question: 'IPTV AZ est-il moins cher que VivaceTV ?',
    answer:
      "IPTV AZ affiche des prix variables selon les offres disponibles, ce qui rend la comparaison difficile. VivaceTV propose des tarifs transparents et compétitifs : dès 22,99€ pour 3 mois (offre Bronze) jusqu'à 44,99€ pour 12 mois (offre Gold), soit moins de 3,75€ par mois — l'un des meilleurs rapports qualité/prix du marché.",
  },
  {
    question: 'IPTV AZ propose-t-il un essai gratuit ?',
    answer:
      "IPTV AZ ne propose pas d'essai gratuit à notre connaissance. VivaceTV offre un test gratuit de 24 heures sur simple demande via WhatsApp, sans engagement et sans carte bancaire requise.",
  },
  {
    question: 'Comment migrer d\'IPTV AZ vers VivaceTV ?',
    answer:
      "La migration est simple : contactez VivaceTV via WhatsApp pour obtenir votre essai gratuit 24h. Testez le service sur vos appareils, puis choisissez l'offre adaptée à votre usage. Vos identifiants VivaceTV (URL M3U ou Xtream Codes) vous seront communiqués en moins d'une heure.",
  },
];

const tableRows = [
  { label: 'Chaînes disponibles', competitor: '~10 000', vivacetv: '+22 000' },
  { label: 'Qualité vidéo', competitor: 'HD/4K', vivacetv: 'HD/4K/8K ✓' },
  { label: 'Prix', competitor: 'Variable', vivacetv: 'Transparent dès 22,99€ ✓' },
  { label: 'Essai gratuit', competitor: '❌', vivacetv: '✅ 24h' },
  { label: 'Support', competitor: 'Limité', vivacetv: '✅ WhatsApp 24/7' },
  { label: 'Stabilité', competitor: 'Variable', vivacetv: '✅ AntiFreeze 10.0' },
  { label: 'Mise à jour catalogue', competitor: 'Non régulière', vivacetv: '✅ Régulière' },
];

const switchSteps = [
  'Demandez votre essai gratuit 24h VivaceTV via WhatsApp',
  'Testez la qualité sur votre appareil',
  'Choisissez votre offre (Bronze, Silver, Gold ou Diamond)',
  "Recevez vos accès en moins d'1h",
  'Profitez de VivaceTV sans coupure',
];

export default function IPTVAZPage() {
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
          { name: 'IPTV AZ', href: '/alternatives/iptv-az' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="ALTERNATIVE IPTV"
          title="IPTV AZ"
          titleHighlight="Avis & Meilleure Alternative France"
          subtitle="Vous cherchez une alternative à IPTV AZ ? Découvrez pourquoi VivaceTV est le meilleur choix pour votre abonnement IPTV France."
        />

        {/* Section 1 — Présentation */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce qu&apos;IPTV AZ ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              IPTV AZ est un service d&apos;abonnement IPTV disponible sur le marché français. Il propose
              un catalogue d&apos;environ 10 000 chaînes couvrant les contenus français, arabes et
              internationaux. Le service est compatible avec plusieurs appareils, dont les Smart TV,
              les boîtiers Android, iOS et PC.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Les utilisateurs apprécient sa compatibilité multi-appareils, mais signalent une
              stabilité variable selon les périodes et une tarification peu transparente. Le support
              client est également présenté comme limité dans les retours disponibles en ligne.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Si vous cherchez un service IPTV plus stable, avec un catalogue plus large et un support
              client réactif en français, VivaceTV est la meilleure alternative à IPTV AZ disponible
              sur le marché français en 2025.
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
              IPTV AZ : Avantages et Inconvénients
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
                    'Disponible en France',
                    'Compatible avec plusieurs appareils simultanément',
                    'Contenu varié français et international',
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
                    'Tarification variable et peu transparente',
                    'Support client limité selon les retours',
                    'Stabilité variable selon les périodes',
                    'Aucun essai gratuit à notre connaissance',
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
              IPTV AZ vs VivaceTV — Comparatif Détaillé
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-surface)' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Critère</th>
                    <th style={{ padding: '12px 16px', textAlign: 'center' }}>IPTV AZ</th>
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
              * Données IPTV AZ basées sur les informations publiquement disponibles et les retours
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
              Pourquoi VivaceTV est Meilleur qu&apos;IPTV AZ ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV propose plus de deux fois plus de chaînes qu&apos;IPTV AZ : +22 000 contre
              ~10 000. Ce catalogue inclut toutes les chaînes françaises (gratuites et payantes),
              les chaînes sportives premium, les chaînes arabes et internationales, ainsi qu&apos;un
              catalogue VOD de +160 000 films et séries en HD, 4K et 8K.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La transparence tarifaire est un autre point fort de VivaceTV. Contrairement à la
              tarification variable d&apos;IPTV AZ, VivaceTV affiche des prix clairs sans surprise :
              Bronze (22,99€/3 mois), Silver (34,99€/6 mois), Gold (44,99€/12 mois) et Diamond
              (74,99€/24 mois). Aucun frais caché, aucune hausse imprévue.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Sur la stabilité, la technologie <strong style={{ color: 'var(--color-ink)' }}>AntiFreeze 10.0</strong> de
              VivaceTV garantit une diffusion fluide en toutes circonstances — là où IPTV AZ peut
              présenter des interruptions selon les retours utilisateurs.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Enfin, le support WhatsApp 24/7 de VivaceTV répond en moins de 15 minutes en français —
              un niveau de service qui dépasse largement ce que propose IPTV AZ à notre connaissance.
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
              Comment Passer d&apos;IPTV AZ à VivaceTV ?
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
              Questions Fréquentes — IPTV AZ vs VivaceTV
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
