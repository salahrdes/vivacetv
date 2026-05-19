import type { Metadata } from 'next';
import { Check, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abonnement IPTV 12 Mois — Meilleur Prix Annuel | VivaceTV Gold',
  description:
    'Abonnement IPTV 12 mois VivaceTV Gold à 44,99€ : accès complet +22 000 chaînes HD/4K/8K pour toute l\'année. Économisez 31% vs le tarif normal. Activation rapide.',
  keywords: [
    'iptv abonnement 12 mois',
    'abonnement iptv annuel',
    'iptv 12 mois france',
    'abonnement iptv gold',
    'iptv un an',
  ],
  alternates: { canonical: `${siteConfig.url}/abonnements/12-mois` },
  openGraph: {
    title: 'Abonnement IPTV 12 Mois — Meilleur Prix Annuel | VivaceTV Gold',
    description:
      'Abonnement IPTV 12 mois VivaceTV Gold à 44,99€. +22 000 chaînes HD/4K/8K, 3,75€/mois. Économisez 31%. Activation rapide.',
    url: `${siteConfig.url}/abonnements/12-mois`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "L'abonnement IPTV 12 mois se renouvelle-t-il automatiquement ?",
    answer:
      "Non. L'abonnement VivaceTV Gold 12 mois est un paiement unique sans renouvellement automatique. À l'expiration, vous choisissez librement si vous souhaitez renouveler votre accès.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait de mon abonnement 12 mois ?",
    answer:
      "VivaceTV propose une garantie satisfaction. Si vous n'êtes pas satisfait, notre équipe fait tout son possible pour résoudre le problème ou vous propose un remboursement selon nos conditions. Contactez notre support via WhatsApp.",
  },
  {
    question: "Puis-je changer d'appareil pendant mes 12 mois d'abonnement ?",
    answer:
      "Oui. Votre abonnement est lié à votre compte, pas à un appareil spécifique. En cas de changement d'appareil, contactez notre support via WhatsApp et nous mettrons à jour votre configuration gratuitement.",
  },
  {
    question: "L'offre Gold 12 mois inclut-elle vraiment les chaînes 8K ?",
    answer:
      "Oui, l'abonnement Gold inclut les chaînes en qualité SD, HD, 4K et 8K — la totalité de notre catalogue. La qualité affichée dépend aussi de votre connexion internet et de votre appareil.",
  },
];

const goldFeatures = [
  '+22 000 chaînes françaises et internationales',
  '+160 000 films et séries en VOD',
  'Qualité SD, HD, 4K et 8K Ultra',
  'Technologie AntiFreeze 10.0',
  'TV Replay — regardez en différé',
  'Assistance 24/7 via WhatsApp',
  'Activation en moins d\'une heure',
  'Paiement unique — aucun renouvellement automatique',
  'Compatible Smart TV, Android, iOS, PC, Fire TV, Apple TV',
  'Changement d\'appareil gratuit sur demande',
];

const testimonials = [
  {
    name: 'Rachid A.',
    location: 'Bordeaux',
    text: "J'ai pris l'abonnement Gold en janvier et je ne l'ai pas regretté une seule fois. 12 mois, un seul paiement, aucun souci. Les chaînes sportives sont toutes là, en parfaite qualité. Je n'imagine plus regarder la TV autrement.",
  },
  {
    name: 'Céline V.',
    location: 'Toulouse',
    text: "Le rapport qualité/prix est imbattable. 44,99€ pour toute une année d'accès à +160 000 films et séries en plus des chaînes. Ma famille entière regarde sur différents appareils et ça n'a jamais planté une seule fois.",
  },
  {
    name: 'Mehdi K.',
    location: 'Strasbourg',
    text: "J'hésitais entre Gold et Diamond. J'ai finalement pris Gold pour commencer. Franchement, c'est parfait. Les serveurs sont ultra-stables, la qualité 4K sur ma LG est magnifique, et le support WhatsApp m'a aidé en 5 minutes quand j'ai changé de TV.",
  },
];

export default function Abonnement12MoisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Abonnements', href: '/abonnements' },
          { name: 'Abonnement 12 Mois', href: '/abonnements/12-mois' },
        ]}
      />
      <Header />
      <main id="main-content">
        <PageHero
          label="GOLD — 12 MOIS"
          title="Abonnement IPTV 12 Mois"
          titleHighlight="Le Meilleur Prix de l'Année"
          subtitle="L'offre annuelle VivaceTV — un seul paiement, 12 mois d'accès complet. La formule préférée de nos clients."
        />

        {/* ── Section 1 : Pourquoi 12 mois ─────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section1-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section1-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi Choisir un Abonnement IPTV sur 12 Mois ?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              L'abonnement annuel est la solution la plus intelligente pour les utilisateurs réguliers d'IPTV. Plutôt
              que de renouveler tous les 3 ou 6 mois avec la contrainte mentale que cela implique, vous payez une
              seule fois et profitez sereinement de votre service pendant toute l'année. Consultez{' '}
              <Link href="/abonnements" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                toutes nos offres
              </Link>{' '}
              pour comparer les durées disponibles.
            </p>

            <div className="flex flex-col gap-8">
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Des économies significatives
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Si vous renouveliez l'offre Bronze (3 mois à 22,99€) quatre fois de suite pour couvrir une année
                  complète, vous dépenseriez 91,96€. L'offre Gold 12 mois est à 44,99€ — soit une économie de près
                  de 47€, presque la moitié. En revenant au coût mensuel, le Gold revient à seulement 3,75€/mois
                  contre 7,66€/mois pour le Bronze renouvelé. La différence est considérable sur une année entière.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Un seul paiement, zéro souci
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Plus besoin de penser à renouveler votre abonnement tous les trimestres. Avec l'offre Gold, vous
                  payez une seule fois et vous oubliez — votre service fonctionne pendant 12 mois complets, sans
                  interruption, sans renouvellement automatique imposé. Aucun prélèvement surprise, aucune
                  notification d'expiration inopportune. Et si vous souhaitez renouveler à la fin de votre
                  abonnement,{' '}
                  <Link href="/commander/gold" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                    commander l'abonnement Gold
                  </Link>{' '}
                  se fait en quelques minutes via WhatsApp.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Plus de contenu inclus
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  L'offre Gold débloque l'intégralité du catalogue VOD de VivaceTV : +160 000 films et séries en
                  accès illimité, contre environ 60 000 pour le forfait Bronze. Des films récents aux grandes séries
                  internationales, en passant par les documentaires et les dessins animés — le Gold est la formule
                  complète. Pour en savoir plus sur notre{' '}
                  <Link href="/abonnements/premium" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                    offre premium VivaceTV
                  </Link>,{' '}
                  consultez notre page dédiée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2 : Offre Gold showcase ─────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section2-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section2-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-8 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              L'Offre Gold VivaceTV — Tout Ce Qui Est Inclus
            </h2>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--color-dark)',
                border: '2px solid var(--color-lime)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    Gold — Le Plus Populaire
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display font-extrabold text-5xl"
                      style={{ color: 'var(--color-surface)' }}
                    >
                      44,99€
                    </span>
                    <span style={{ color: 'var(--color-gray-400)', textDecoration: 'line-through', fontSize: 18 }}>
                      64,99€
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                    >
                      -31%
                    </span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-gray-400)' }}>
                    12 mois · 3,75€/mois · paiement unique
                  </p>
                </div>
                <Link
                  href="/commander/gold"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
                  style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                >
                  Commander Gold
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {goldFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: 'var(--color-lime)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: 'var(--color-gray-400)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3 : Comparaison durées ──────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section3-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section3-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Abonnement IPTV 12 Mois vs Autres Durées — Comparaison
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Choisir la bonne durée, c'est choisir le bon budget. Voici comment nos offres se comparent au coût mensuel réel.
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    <th className="px-5 py-4 text-left font-semibold" style={{ color: 'var(--color-surface)' }}>Forfait</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-surface)' }}>Durée</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-surface)' }}>Prix total</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-lime)' }}>Par mois</th>
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-surface)' }}>Économie vs Bronze</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Bronze', duration: '3 mois', price: '22,99€', perMonth: '7,66€', saving: '—', featured: false },
                    { label: 'Silver', duration: '6 mois', price: '34,99€', perMonth: '5,83€', saving: '-24%/mois', featured: false },
                    { label: 'Gold ★', duration: '12 mois', price: '44,99€', perMonth: '3,75€', saving: '-51%/mois', featured: true },
                    { label: 'Diamond', duration: '24 mois', price: '74,99€', perMonth: '3,12€', saving: '-59%/mois', featured: false },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: row.featured
                          ? 'var(--color-lime-soft)'
                          : i % 2 === 0
                          ? 'var(--color-card)'
                          : 'var(--color-surface-alt)',
                      }}
                    >
                      <td
                        className="px-5 py-4 font-semibold"
                        style={{ color: row.featured ? 'var(--color-dark)' : 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.label}
                      </td>
                      <td
                        className="px-5 py-4 text-center"
                        style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.duration}
                      </td>
                      <td
                        className="px-5 py-4 text-center font-semibold"
                        style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.price}
                      </td>
                      <td
                        className="px-5 py-4 text-center font-bold"
                        style={{
                          color: row.featured ? 'var(--color-dark)' : 'var(--color-lime)',
                          borderBottom: '1px solid var(--color-border)',
                        }}
                      >
                        {row.perMonth}
                      </td>
                      <td
                        className="px-5 py-4 text-center text-xs font-semibold"
                        style={{
                          color: row.featured ? 'var(--color-dark)' : 'var(--color-ink-light)',
                          borderBottom: '1px solid var(--color-border)',
                        }}
                      >
                        {row.saving}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-xs mt-4" style={{ color: 'var(--color-gray-400)' }}>
              Pour une vue complète du{' '}
              <Link href="/meilleur-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                meilleur abonnement IPTV France
              </Link>,{' '}
              consultez notre comparatif complet.
            </p>
          </div>
        </section>

        {/* ── Section 4 : Témoignages ─────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section4-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section4-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-10 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Ce Que Nos Clients Pensent de l'Abonnement Annuel
            </h2>

            <div className="grid sm:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <div className="flex gap-1" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--color-lime)', fontSize: 14 }} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-ink-light)' }}>
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--color-gray-400)' }}>{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5 : FAQ ─────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section5-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section5-heading"
              className="font-display font-bold text-2xl sm:text-3xl mb-8 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Abonnement IPTV 12 Mois
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none font-semibold text-sm"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.question}
                    <ChevronDown
                      size={16}
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      style={{ color: 'var(--color-lime)' }}
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.answer}
                  </div>
                </details>
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
