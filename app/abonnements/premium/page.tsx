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
  title: 'Abonnement IPTV Premium France — HD, 4K & 8K Ultra | ClarioTV',
  description:
    'Profitez de l\'abonnement IPTV premium ClarioTV : +22 000 chaînes en HD, 4K et 8K, +160 000 films et séries, stabilité 99,9%. Activation rapide via WhatsApp dès 22,99€.',
  keywords: [
    'premium iptv',
    'abonnement iptv premium',
    'iptv hd 4k 8k',
    'meilleur iptv france',
    'iptv qualité premium',
  ],
  alternates: { canonical: `${siteConfig.url}/abonnements/premium` },
  openGraph: {
    title: 'Abonnement IPTV Premium France — HD, 4K & 8K Ultra | ClarioTV',
    description:
      'Abonnement IPTV premium ClarioTV : +22 000 chaînes HD/4K/8K, +160 000 films et séries, stabilité 99,9%. Dès 22,99€ via WhatsApp.',
    url: `${siteConfig.url}/abonnements/premium`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Qu'est-ce qui différencie un abonnement IPTV premium d'un abonnement basique ?",
    answer:
      "Un abonnement IPTV premium offre une qualité d'image supérieure (HD, 4K, 8K), une plus grande bibliothèque de contenu, une meilleure stabilité serveur et un support client prioritaire. Chez ClarioTV, même notre offre d'entrée de gamme inclut la qualité 4K, mais nos abonnements longs (Gold et Diamond) offrent un accès à +160 000 films et séries versus +60 000 pour le Bronze.",
  },
  {
    question: "L'abonnement IPTV premium ClarioTV est-il compatible avec ma Smart TV ?",
    answer:
      'Oui, ClarioTV est compatible avec toutes les Smart TV (Samsung, LG, Philips, Sony), les boîtiers Android TV, Fire TV Stick, Apple TV, ainsi que PC Windows/Mac, iPhone et iPad. Aucun matériel spécifique n\'est requis.',
  },
  {
    question: "Combien de connexions simultanées inclut l'abonnement premium ?",
    answer:
      'Chaque abonnement ClarioTV inclut 1 connexion simultanée. Si vous souhaitez utiliser l\'IPTV sur plusieurs appareils en même temps, nous proposons des solutions adaptées — contactez notre équipe via WhatsApp.',
  },
  {
    question: 'Quelle connexion internet est nécessaire pour profiter de la qualité 4K ?',
    answer:
      'Pour une expérience IPTV en 4K optimale, nous recommandons une connexion internet d\'au moins 25 Mbps. Pour le HD, 10 Mbps suffisent. La fibre optique garantit la meilleure stabilité.',
  },
  {
    question: "Puis-je essayer l'abonnement premium avant de m'engager ?",
    answer:
      'Oui, ClarioTV propose un test gratuit de 24 heures. Contactez notre équipe via WhatsApp pour en bénéficier et évaluer la qualité sur votre appareil avant de commander.',
  },
];

const plans = [
  {
    id: 'bronze',
    label: 'Bronze',
    duration: '3 mois',
    price: '22,99€',
    original: '39,99€',
    discount: '-43%',
    featured: false,
    href: '/commander/bronze',
  },
  {
    id: 'silver',
    label: 'Silver',
    duration: '6 mois',
    price: '34,99€',
    original: '54,99€',
    discount: '-36%',
    featured: false,
    href: '/commander/silver',
  },
  {
    id: 'gold',
    label: 'Gold',
    sublabel: 'Le Plus Populaire',
    duration: '12 mois',
    price: '44,99€',
    original: '64,99€',
    discount: '-31%',
    featured: true,
    href: '/commander/gold',
  },
  {
    id: 'diamond',
    label: 'Diamond',
    duration: '24 mois',
    price: '74,99€',
    original: '89,99€',
    discount: '-17%',
    featured: false,
    href: '/commander/diamond',
  },
];

const testimonials = [
  {
    name: 'Karim B.',
    location: 'Lyon',
    text: "J'ai testé plusieurs services IPTV avant ClarioTV. La différence est flagrante : zéro coupure depuis 8 mois, image en 4K impeccable sur ma LG OLED. Le support répond en quelques minutes sur WhatsApp. Vraiment premium.",
  },
  {
    name: 'Nathalie D.',
    location: 'Marseille',
    text: "Ce qui m'a convaincu c'est la qualité en 8K sur mon téléviseur Samsung. Les chaînes françaises, arabes et sportives sont toutes là, en HD parfaite. L'abonnement Gold vaut largement son prix pour une année entière.",
  },
  {
    name: 'Sébastien M.',
    location: 'Paris',
    text: "Après deux ans avec un opérateur classique, je ne reviendrai jamais en arrière. +22 000 chaînes dont toutes les BeIN Sports, Canal+ et les chaînes étrangères. La technologie AntiFreeze fait vraiment la différence pendant les matchs.",
  },
];

const allFeatures = [
  '+22 000 chaînes françaises et internationales',
  '+160 000 films et séries (Gold & Diamond)',
  'Qualité SD, HD, 4K et 8K Ultra',
  'Technologie AntiFreeze 10.0',
  'TV Replay — regardez en différé',
  'Assistance 24/7 via WhatsApp',
  'Activation en moins d\'une heure',
  'Compatible Smart TV, Android, iOS, PC, Fire TV, Apple TV',
];

export default function AbonnementPremiumPage() {
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
          { name: 'Premium', href: '/abonnements/premium' },
        ]}
      />
      <Header />
      <main id="main-content">
        <PageHero
          label="IPTV PREMIUM"
          title="Abonnement IPTV Premium"
          titleHighlight="HD, 4K & 8K Sans Coupure"
          subtitle="La meilleure qualité d'image, la plus grande bibliothèque de contenus, une stabilité serveur inégalée — ClarioTV Premium, c'est l'IPTV sans compromis."
        />

        {/* ── Section 1 : Qu'est-ce qu'un abonnement IPTV premium ─────────── */}
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
              Qu'est-ce qu'un Abonnement IPTV Premium ?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Un abonnement IPTV premium, c'est bien plus qu'un simple accès à des chaînes de télévision. C'est une
              expérience de visionnage complète, sans compromis sur la qualité d'image ni sur la stabilité. Chez
              ClarioTV, notre offre premium repose sur des serveurs haute performance, une technologie anti-freeze
              exclusive et une bibliothèque colossale de contenus. Finies les coupures en plein match, les pixellisations
              au moment le plus intense d'un film — notre infrastructure garantit un flux continu, quelle que soit la
              chaîne regardée. Pour <Link href="/abonnements" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>voir toutes nos offres</Link>, consultez notre page abonnements.
            </p>

            <div className="flex flex-col gap-10">
              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Qualité d'image supérieure : HD, 4K et 8K
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  L'IPTV en qualité HD, 4K et 8K transforme radicalement l'expérience télévisuelle. Là où une offre
                  basique affiche une image en définition standard souvent dégradée, notre offre premium diffuse des
                  flux en haute définition vraie — jusqu'à la résolution 8K sur les chaînes compatibles. Chaque détail
                  est restitué avec précision, que ce soit sur un téléviseur 55 pouces ou sur un écran de projection.
                  Découvrez notre page dédiée à l'<Link href="/iptv-4k" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>IPTV en qualité 4K</Link> pour en savoir plus.
                </p>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  +22 000 chaînes françaises et internationales
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Notre catalogue dépasse les 22 000 chaînes couvrant la France entière — TF1, M6, France 2 à 5,
                  Arte, Canal+, BeIN Sports — ainsi que des centaines de chaînes étrangères : arabes, anglaises,
                  espagnoles, turques, allemandes et bien d'autres. Chaînes sportives, cinéma, jeunesse, information
                  en continu : chaque membre de la famille trouve son compte. Les offres Gold et Diamond incluent
                  également +160 000 films et séries en accès à la demande.
                </p>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Stabilité serveur 99,9% — Technologie AntiFreeze 10.0
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  La principale plainte des utilisateurs IPTV concerne les freezes et les coupures. ClarioTV a
                  développé la technologie AntiFreeze 10.0 qui anticipe les congestions réseau et redirige
                  automatiquement le flux vers le serveur le plus disponible, en temps réel. Résultat : une
                  disponibilité serveur de 99,9% mesurée sur les 12 derniers mois. Pas de ralentissement en
                  soirée, pas de coupure lors des événements sportifs à forte audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2 : Offres ──────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section2-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section2-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-3 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Nos Offres d'Abonnement IPTV Premium
            </h2>
            <p className="text-center text-base mb-12" style={{ color: 'var(--color-ink-light)' }}>
              Tous les forfaits incluent l'accès complet aux +22 000 chaînes, la qualité HD/4K/8K et l'assistance 24/7.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: plan.featured
                      ? '2px solid var(--color-lime)'
                      : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {plan.featured && plan.sublabel && (
                    <p
                      style={{
                        color: 'var(--color-lime)',
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {plan.label} — {plan.sublabel}
                    </p>
                  )}
                  {!plan.featured && (
                    <p
                      style={{
                        color: 'var(--color-ink)',
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {plan.label}
                    </p>
                  )}

                  <div>
                    <p
                      className="font-display font-extrabold text-3xl"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {plan.price}
                    </p>
                    <p style={{ color: 'var(--color-gray-600)', fontSize: 13 }}>
                      {plan.duration}
                    </p>
                    <p style={{ color: 'var(--color-gray-400)', fontSize: 12, textDecoration: 'line-through' }}>
                      {plan.original}
                    </p>
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-lime-soft)',
                        color: 'var(--color-dark)',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 6,
                      }}
                    >
                      {plan.discount}
                    </span>
                  </div>

                  <Link
                    href={plan.href}
                    className="inline-flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 text-center"
                    style={{
                      backgroundColor: plan.featured ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: plan.featured ? 'var(--color-dark)' : 'var(--color-ink)',
                      border: plan.featured ? 'none' : '1px solid var(--color-border)',
                    }}
                  >
                    Choisir ce forfait
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-sm mt-8" style={{ color: 'var(--color-ink-light)' }}>
              Tous les plans incluent : +22 000 chaînes · HD/4K/8K · AntiFreeze 10.0 · TV Replay · Assistance 24/7
            </p>
          </div>
        </section>

        {/* ── Section 3 : Premium vs Basique ─────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="section3-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section3-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi Choisir un Abonnement IPTV Premium Plutôt qu'une Offre Basique ?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Face aux dizaines d'offres disponibles sur le marché, il est tentant de se tourner vers les prix
              les plus bas. Mais un service IPTV basique peut rapidement devenir frustrant : qualité d'image
              médiocre, serveurs surchargés, aucun support en cas de problème. Voici ce qui distingue concrètement
              une offre premium d'une offre d'entrée de gamme. Pour un{' '}
              <Link href="/meilleur-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                comparatif des meilleurs abonnements IPTV
              </Link>{' '}
              du marché, consultez notre guide complet.
            </p>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface-alt)' }}>
                    <th
                      className="px-5 py-4 text-left font-semibold"
                      style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                    >
                      Critère
                    </th>
                    <th
                      className="px-5 py-4 text-center font-semibold"
                      style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                    >
                      IPTV Basique
                    </th>
                    <th
                      className="px-5 py-4 text-center font-semibold"
                      style={{ color: 'var(--color-lime)', borderBottom: '1px solid var(--color-border)' }}
                    >
                      ClarioTV Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Qualité vidéo', basic: 'SD / HD variable', premium: 'HD, 4K et 8K garantis' },
                    { label: 'Nombre de chaînes', basic: '5 000 – 10 000', premium: '+22 000 chaînes' },
                    { label: 'Films & séries VOD', basic: 'Limité ou absent', premium: '+160 000 titres (Gold/Diamond)' },
                    { label: 'Stabilité serveur', basic: 'Coupures fréquentes', premium: '99,9% de disponibilité' },
                    { label: 'Anti-freeze', basic: 'Non', premium: 'Technologie AntiFreeze 10.0' },
                    { label: 'TV Replay', basic: 'Non', premium: 'Oui, inclus' },
                    { label: 'Support client', basic: 'Email lent ou absent', premium: 'WhatsApp 24/7' },
                    { label: 'Activation', basic: 'Parfois plusieurs jours', premium: 'En moins d\'une heure' },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{ backgroundColor: i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)' }}
                    >
                      <td
                        className="px-5 py-4 font-medium"
                        style={{ color: 'var(--color-ink)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.label}
                      </td>
                      <td
                        className="px-5 py-4 text-center"
                        style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.basic}
                      </td>
                      <td
                        className="px-5 py-4 text-center font-semibold"
                        style={{ color: 'var(--color-dark)', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-lime-soft)' }}
                      >
                        {row.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {allFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="shrink-0 mt-0.5"
                    style={{ color: 'var(--color-lime)' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
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
              className="font-display font-bold text-3xl sm:text-4xl mb-3 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Ce Que Nos Clients Disent de l'Abonnement Premium
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Lisez également les{' '}
              <Link href="/avis-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                avis de nos clients
              </Link>{' '}
              sur notre page dédiée.
            </p>

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
              Questions Fréquentes sur l'Abonnement IPTV Premium
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
