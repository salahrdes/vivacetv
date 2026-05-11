import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, Star } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Meilleur Abonnement IPTV France 2026 — Comparatif & Avis | ClarioTV',
  description:
    'Quel est le meilleur abonnement IPTV en France en 2025 ? Comparatif complet : ClarioTV, Xenon IPTV, King IPTV, Atlas IPTV. Avis, prix, qualité. Notre verdict.',
  keywords: [
    'meilleur abonnement IPTV',
    'meilleure IPTV 2025',
    'comparatif IPTV France',
    'meilleurs abonnements IPTV',
    'quel IPTV choisir',
  ],
  alternates: { canonical: `${siteConfig.url}/meilleur-iptv` },
  openGraph: {
    title: 'Meilleur Abonnement IPTV France 2026 — Comparatif & Avis | ClarioTV',
    description:
      'Comparatif complet des meilleurs abonnements IPTV en France 2025. ClarioTV, Xenon, King, Atlas — notre classement objectif.',
    url: `${siteConfig.url}/meilleur-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Quel est le meilleur fournisseur IPTV en France en 2025 ?',
    answer:
      "D'après nos tests, ClarioTV est le meilleur fournisseur IPTV en France en 2025 pour son rapport qualité/prix, sa stabilité (technologie AntiFreeze 10.0), la richesse de son catalogue (+22 000 chaînes, +160 000 films et séries en HD/4K/8K) et la réactivité de son support WhatsApp 24/7.",
  },
  {
    question: 'Comment choisir le meilleur abonnement IPTV ?',
    answer:
      "Évaluez cinq critères : la stabilité du serveur (anti-freeze, uptime), la qualité vidéo (HD, 4K, 8K), le catalogue de chaînes françaises et internationales, la compatibilité avec vos appareils, et le prix. Un essai gratuit avant achat est toujours un bon signe.",
  },
  {
    question: 'Le meilleur IPTV est-il forcément le plus cher ?',
    answer:
      "Non. ClarioTV propose des abonnements dès 22,99€ pour 3 mois, ce qui est compétitif tout en offrant une qualité supérieure à des services plus coûteux. Le prix seul n'est pas un indicateur de qualité dans l'IPTV.",
  },
  {
    question: 'Quelle est la différence entre un bon et un mauvais service IPTV ?',
    answer:
      "Un bon service IPTV garantit une stabilité serveur avec peu ou pas de coupures, propose des mises à jour régulières des listes de chaînes, offre un support client réactif et dispose d'une technologie anti-freeze. Un mauvais service présente des coupures fréquentes, des chaînes manquantes et aucun support.",
  },
  {
    question: "L'IPTV est-il légal en France ?",
    answer:
      "L'IPTV en lui-même est une technologie légale. Ce qui détermine la légalité est la source des contenus diffusés. ClarioTV opère dans le respect de la réglementation en vigueur. Pour plus d'informations sur la légalité de l'IPTV en France, consultez notre article dédié.",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur ${max}`}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            size={16}
            style={{
              color: filled || half ? 'var(--color-lime)' : 'var(--color-border)',
              fill: filled ? 'var(--color-lime)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

const rankings = [
  {
    rank: 1,
    name: 'ClarioTV',
    subtitle: 'Meilleur Rapport Qualité/Prix',
    rating: 5,
    ratingLabel: '⭐⭐⭐⭐⭐',
    description:
      "La meilleure option globale. +22 000 chaînes, HD/4K/8K, anti-freeze, prix compétitifs, support WhatsApp 24/7. Dès 22,99€ pour 3 mois.",
    link: '/abonnements',
    linkLabel: 'Voir les offres ClarioTV',
    highlight: true,
  },
  {
    rank: 2,
    name: 'Xenon IPTV',
    subtitle: 'Service populaire',
    rating: 3,
    ratingLabel: '⭐⭐⭐☆☆',
    description:
      "Service populaire mais interface moins intuitive. Prix similaires, support moins réactif. Pas d'essai gratuit disponible.",
    link: '/alternatives/xenon-iptv',
    linkLabel: 'Lire notre avis Xenon IPTV',
    highlight: false,
  },
  {
    rank: 3,
    name: 'King IPTV',
    subtitle: 'Stabilité irrégulière',
    rating: 3,
    ratingLabel: '⭐⭐⭐☆☆',
    description:
      "Bonne variété de chaînes, mais stabilité irrégulière selon les retours utilisateurs. Support limité.",
    link: '/alternatives/king-iptv',
    linkLabel: 'Lire notre avis King IPTV',
    highlight: false,
  },
  {
    rank: 4,
    name: 'IPTV Atlas',
    subtitle: 'Offre correcte',
    rating: 2.5,
    ratingLabel: '⭐⭐½☆☆',
    description:
      "Offre correcte mais catalogue moins fourni. Interface datée. Convient aux utilisateurs peu exigeants.",
    link: '/alternatives/iptv-atlas',
    linkLabel: 'Lire notre avis Atlas IPTV',
    highlight: false,
  },
  {
    rank: 5,
    name: 'Smarter One IPTV',
    subtitle: 'Marché international',
    rating: 2,
    ratingLabel: '⭐⭐☆☆☆',
    description:
      "Service axé sur les chaînes arabes et internationales. Moins adapté au marché français.",
    link: '/alternatives/smarter-one-iptv',
    linkLabel: 'Lire notre avis Smarter One',
    highlight: false,
  },
];

const tableRows = [
  { critere: 'Nombre de chaînes', clariotv: '+22 000', xenon: '~15 000', king: '~18 000', atlas: '~12 000' },
  { critere: 'Qualité max', clariotv: '8K', xenon: '4K', king: '4K', atlas: 'HD' },
  { critere: 'Prix entrée', clariotv: '22,99€/3 mois', xenon: '~25€/mois', king: '~20€/mois', atlas: '~15€/mois' },
  { critere: 'Essai gratuit', clariotv: true, xenon: false, king: false, atlas: false },
  { critere: 'Support 24/7', clariotv: 'WhatsApp', xenon: false, king: 'Limité', atlas: false },
  { critere: 'Anti-freeze', clariotv: true, xenon: false, king: false, atlas: false },
];

const criteria = [
  {
    num: '1',
    title: 'La stabilité du serveur',
    body: "La stabilité est le critère numéro un. Un bon service IPTV doit garantir un uptime de 99,9% et intégrer une technologie anti-freeze qui élimine les coupures lors des pics de trafic. ClarioTV utilise sa technologie propriétaire AntiFreeze 10.0 pour offrir une diffusion ininterrompue, même lors des grands événements sportifs.",
  },
  {
    num: '2',
    title: 'La qualité vidéo',
    body: "La qualité vidéo va de la SD à la 8K en passant par la HD et la 4K. Pour une expérience optimale sur grand écran, privilégiez un fournisseur proposant la 4K minimum. ClarioTV offre des flux en HD, 4K et 8K sur l'ensemble de ses abonnements, sans surcoût.",
  },
  {
    num: '3',
    title: 'Le nombre et la variété des chaînes',
    body: "Un bon catalogue IPTV doit inclure les chaînes françaises (TF1, France 2, Canal+), les chaînes sportives (beIN Sports, RMC Sport), les chaînes internationales et un vaste catalogue de films et séries en VOD. ClarioTV propose +22 000 chaînes et +160 000 contenus VOD en constante mise à jour.",
  },
  {
    num: '4',
    title: 'La compatibilité des appareils',
    body: "Votre service IPTV doit être compatible avec tous vos appareils : Smart TV Samsung et LG, boîtiers Android TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad et PC. ClarioTV fournit des URL M3U et des identifiants Xtream Codes compatibles avec toutes les applications majeures.",
  },
  {
    num: '5',
    title: 'Le rapport qualité/prix',
    body: "Comparez le coût total sur 12 mois plutôt que le prix mensuel affiché. Un abonnement 12 mois à 44,99€ revient à moins de 4€/mois, bien en dessous de la plupart des offres mensuelles. Méfiez-vous des prix inférieurs à 3€/mois qui signalent souvent un service peu fiable.",
  },
  {
    num: '6',
    title: 'La qualité du support client',
    body: "Un bon fournisseur IPTV répond en moins de 30 minutes, en français, sur le canal de votre choix. ClarioTV offre un support WhatsApp 24/7 avec un temps de réponse moyen inférieur à 15 minutes, couvrant l'installation, la configuration et les problèmes techniques.",
  },
];

export default function MeilleurIPTVPage() {
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
          { name: 'Meilleur IPTV France 2025', href: '/meilleur-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="COMPARATIF 2025"
          title="Quel est le Meilleur"
          titleHighlight="Abonnement IPTV en France en 2025 ?"
          subtitle="Nous avons testé et comparé les principaux services IPTV disponibles en France. Voici notre classement objectif basé sur la qualité, la stabilité, le prix et le support client."
        />

        {/* Section 1 — Méthode */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Notre Méthode de Comparaison
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Notre comparatif est fondé sur six critères objectifs évalués lors de tests réels : le
              nombre de chaînes disponibles et leur mise à jour régulière, la qualité vidéo proposée
              (HD, 4K, 8K), la stabilité des serveurs mesurée sur plusieurs semaines, la compatibilité
              avec les appareils du marché, le rapport qualité/prix global sur 12 mois, et enfin la
              qualité du support client testée en conditions réelles.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Chaque service a été testé sur au minimum deux appareils différents pendant une période
              de 30 jours, avec une attention particulière portée à la stabilité lors des événements
              sportifs en direct — moment où les serveurs IPTV sont le plus sollicités.
            </p>
            <div
              className="p-5 rounded-xl"
              style={{
                border: '2px solid var(--color-lime)',
                backgroundColor: 'var(--color-lime-soft)',
              }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
                Notre classement est basé sur des tests réels effectués sur Smart TV, Android,
                Firestick et PC. Nous mettons à jour ce comparatif régulièrement pour refléter
                l'évolution des services.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Top 5 */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Top 5 des Meilleurs Abonnements IPTV France 2025
            </h2>

            <div className="flex flex-col gap-4">
              {rankings.map((r) => (
                <div
                  key={r.rank}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: r.highlight
                      ? '2px solid var(--color-lime)'
                      : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  {r.highlight && (
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                      style={{
                        backgroundColor: 'var(--color-lime)',
                        color: 'var(--color-dark)',
                      }}
                    >
                      NOTRE CHOIX N°1
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      style={{
                        backgroundColor: r.highlight ? 'var(--color-lime)' : 'var(--color-border)',
                        color: r.highlight ? 'var(--color-dark)' : 'var(--color-ink-light)',
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
                      {r.rank}
                    </span>
                    <div>
                      <h3
                        className="font-display font-bold text-xl"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {r.name} — {r.subtitle}
                      </h3>
                      <StarRating rating={r.rating} />
                    </div>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--color-ink-light)' }}
                  >
                    {r.description}
                  </p>
                  <Link
                    href={r.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    {r.linkLabel} →
                  </Link>
                </div>
              ))}
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
              Tableau Comparatif des Services IPTV France
            </h2>
            <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Critère', 'ClarioTV', 'Xenon IPTV', 'King IPTV', 'Atlas IPTV'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: h === 'ClarioTV' ? 'var(--color-lime)' : 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, idx) => (
                    <tr
                      key={row.critere}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-ink)' }}>
                        {row.critere}
                      </td>
                      {[row.clariotv, row.xenon, row.king, row.atlas].map((val, vi) => (
                        <td key={vi} className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                          {typeof val === 'boolean' ? (
                            val ? (
                              <Check size={16} style={{ color: 'var(--color-lime)' }} />
                            ) : (
                              <X size={16} style={{ color: 'var(--color-gray-400)' }} />
                            )
                          ) : (
                            <span style={vi === 0 ? { color: 'var(--color-ink)', fontWeight: 600 } : {}}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4 — Critères */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Les Critères pour Choisir le Meilleur Abonnement IPTV
            </h2>
            <div className="flex flex-col gap-6">
              {criteria.map((c) => (
                <div key={c.num}>
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {c.num}. {c.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Verdict */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Verdict Final : Quel Abonnement IPTV Choisir en 2025 ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Après avoir testé les principaux services IPTV disponibles en France, notre verdict est
              clair : <strong style={{ color: 'var(--color-ink)' }}>ClarioTV est le meilleur abonnement IPTV en 2025</strong> pour
              les utilisateurs français. Il combine le catalogue le plus riche (+22 000 chaînes,
              +160 000 films et séries), la meilleure qualité vidéo (HD, 4K et 8K), une stabilité
              serveur garantie par la technologie AntiFreeze 10.0, et un support WhatsApp 24/7 en
              français répondant en moins de 15 minutes.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Les tarifs sont parmi les plus compétitifs du marché : dès 22,99€ pour 3 mois, soit
              moins de 8€ par mois pour une qualité que ses concurrents peinent à égaler. L'offre
              Gold 12 mois à 44,99€ représente le meilleur rapport qualité/durée à moins de 4€/mois.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Pour les utilisateurs hésitants, ClarioTV propose un{' '}
              <strong style={{ color: 'var(--color-ink)' }}>test gratuit de 24 heures</strong> sur
              simple demande via WhatsApp — une pratique rare dans l'industrie qui témoigne de la
              confiance du service en sa propre qualité.
            </p>
            <Link
              href="/abonnements"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{
                backgroundColor: 'var(--color-lime)',
                color: 'var(--color-dark)',
              }}
            >
              Voir tous les abonnements ClarioTV →
            </Link>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Meilleur IPTV France
            </h2>
            <div className="flex flex-col gap-6">
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
                    {item.question.includes('légal') && (
                      <>
                        {' '}
                        <Link
                          href="/guide-iptv/iptv-amende"
                          className="underline"
                          style={{ color: 'var(--color-lime)' }}
                        >
                          En savoir plus sur la légalité de l&apos;IPTV
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/abonnements', label: 'Voir les abonnements' },
                { href: '/alternatives/xenon-iptv', label: 'Avis Xenon IPTV' },
                { href: '/alternatives/king-iptv', label: 'Avis King IPTV' },
                { href: '/avis-iptv', label: 'Avis clients ClarioTV' },
                { href: '/guide-iptv/iptv-amende', label: 'IPTV légal en France' },
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
