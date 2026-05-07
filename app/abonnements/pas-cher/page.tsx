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
  title: 'Abonnement IPTV Pas Cher en France — Dès 22,99€ | ClarioTV',
  description:
    'Abonnement IPTV pas cher avec ClarioTV : accès à +22 000 chaînes HD/4K dès 22,99€. Activation rapide, qualité garantie, sans engagement long. Essai gratuit disponible.',
  keywords: [
    'iptv pas cher',
    'abonnement iptv pas cher',
    'iptv france pas cher',
    'iptv moins cher',
    'abonnement iptv prix',
  ],
  alternates: { canonical: `${siteConfig.url}/abonnements/pas-cher` },
  openGraph: {
    title: 'Abonnement IPTV Pas Cher en France — Dès 22,99€ | ClarioTV',
    description:
      'Abonnement IPTV pas cher dès 22,99€. +22 000 chaînes HD/4K, activation rapide, qualité garantie. Essai gratuit 24h disponible.',
    url: `${siteConfig.url}/abonnements/pas-cher`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Quel est l\'abonnement IPTV le moins cher chez ClarioTV ?',
    answer:
      'Notre offre Bronze est la plus accessible, à 22,99€ pour 3 mois d\'accès complet à +22 000 chaînes en HD/4K. C\'est notre formule d\'entrée de gamme idéale pour tester ClarioTV sans s\'engager sur une longue durée.',
  },
  {
    question: 'Un abonnement IPTV pas cher est-il de bonne qualité ?',
    answer:
      'Absolument. Chez ClarioTV, même notre abonnement le moins cher inclut la qualité HD et 4K, la technologie AntiFreeze 10.0 contre les coupures, et notre support client 24/7. Le prix bas ne signifie pas qualité réduite.',
  },
  {
    question: "L'IPTV gratuit est-il une alternative valable ?",
    answer:
      "Les services IPTV gratuits présentent des risques importants : qualité instable, coupures fréquentes, contenu illégal et absence de support. Un abonnement payant légal comme ClarioTV garantit une expérience stable et un service client réactif.",
  },
  {
    question: 'Y a-t-il des frais cachés avec votre abonnement IPTV ?',
    answer:
      'Non, aucun frais caché. Le prix affiché est le prix final, paiement unique. Aucun renouvellement automatique, aucun abonnement mensuel imposé.',
  },
  {
    question: 'Comment payer mon abonnement IPTV pas cher ClarioTV ?',
    answer:
      'Le paiement s\'effectue de manière sécurisée via WhatsApp. Notre équipe vous contacte après votre commande pour finaliser le règlement et activer votre accès en moins d\'une heure.',
  },
];

const plans = [
  {
    id: 'bronze',
    label: 'Bronze',
    duration: '3 mois',
    price: '22,99€',
    pricePerMonth: '7,66€/mois',
    original: '39,99€',
    discount: '-43%',
    href: '/commander/bronze',
    featured: false,
  },
  {
    id: 'silver',
    label: 'Silver',
    duration: '6 mois',
    price: '34,99€',
    pricePerMonth: '5,83€/mois',
    original: '54,99€',
    discount: '-36%',
    href: '/commander/silver',
    featured: false,
  },
  {
    id: 'gold',
    label: 'Gold',
    duration: '12 mois',
    price: '44,99€',
    pricePerMonth: '3,75€/mois',
    original: '64,99€',
    discount: '-31%',
    href: '/commander/gold',
    featured: true,
  },
  {
    id: 'diamond',
    label: 'Diamond',
    duration: '24 mois',
    price: '74,99€',
    pricePerMonth: '3,12€/mois',
    original: '89,99€',
    discount: '-17%',
    href: '/commander/diamond',
    featured: false,
  },
];

const bronzeFeatures = [
  '+22 000 chaînes françaises et internationales',
  'Qualité HD et 4K',
  'Technologie AntiFreeze 10.0 (zéro freeze)',
  'TV Replay inclus',
  'Compatible Smart TV, Android, iOS, PC, Fire TV, Apple TV',
  'Assistance 24/7 via WhatsApp',
  'Activation en moins d\'une heure',
  'Paiement unique — aucun renouvellement automatique',
];

export default function AbonnementPasCherPage() {
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
          { name: 'Pas Cher', href: '/abonnements/pas-cher' },
        ]}
      />
      <Header />
      <main id="main-content">
        <PageHero
          label="MEILLEUR PRIX"
          title="Abonnement IPTV"
          titleHighlight="Pas Cher — Dès 22,99€"
          subtitle="Profitez de +22 000 chaînes en HD et 4K sans vous ruiner. ClarioTV propose le meilleur rapport qualité/prix du marché IPTV France."
        />

        {/* ── Section 1 : Ce que veut dire pas cher ───────────────────────── */}
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
              L'IPTV Pas Cher : Ce Que Ça Veut Vraiment Dire
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Un abonnement IPTV pas cher ne devrait jamais rimer avec qualité médiocre. Chez ClarioTV, notre offre
              d'entrée de gamme à 22,99€ donne accès à l'intégralité de nos +22 000 chaînes en HD et 4K — exactement
              les mêmes chaînes que dans nos offres longue durée. La différence réside dans la durée d'engagement, pas
              dans le catalogue ou la qualité du service. Consultez{' '}
              <Link href="/abonnements" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                toutes nos offres d'abonnement IPTV
              </Link>{' '}
              pour comparer les formules disponibles.
            </p>

            <div className="flex flex-col gap-10">
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}
              >
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  IPTV pas cher vs IPTV gratuit : attention à la différence
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
                  Il existe une confusion fréquente entre "IPTV pas cher" et "IPTV gratuit". Les services gratuits
                  sont presque toujours illégaux, instables et sans aucun support. Les flux proviennent de serveurs
                  non sécurisés qui coupent sans prévenir, notamment lors des événements à forte audience. L'absence
                  de contrat signifie qu'en cas de problème, vous n'avez aucun recours. Pour en savoir plus sur ce
                  qui est{' '}
                  <Link href="/guide-iptv/iptv-amende" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                    IPTV légal en France
                  </Link>,{' '}
                  consultez notre guide.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Un abonnement payant comme ClarioTV à 22,99€ pour 3 mois — soit moins de 7,66€ par mois — vous offre
                  un service professionnel, une infrastructure stable et un service client disponible 24/7 sur WhatsApp.
                  C'est le prix d'une bière par mois pour une télévision illimitée.
                </p>
              </div>

              <div>
                <h3
                  className="font-display font-bold text-xl sm:text-2xl mb-4"
                  style={{ color: 'var(--color-ink)' }}
                >
                  Ce qui est inclus dans notre offre d'entrée de gamme
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {bronzeFeatures.map((feature) => (
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
            </div>
          </div>
        </section>

        {/* ── Section 2 : Bronze ──────────────────────────────────────────── */}
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
              Notre Abonnement IPTV le Moins Cher — Offre Bronze à 22,99€
            </h2>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'var(--color-card)', border: '2px solid var(--color-border)' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--color-gray-600)' }}
                  >
                    Offre Bronze — 3 mois
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display font-extrabold text-5xl"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      22,99€
                    </span>
                    <span style={{ color: 'var(--color-gray-400)', textDecoration: 'line-through', fontSize: 18 }}>
                      39,99€
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
                    >
                      -43%
                    </span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-ink-light)' }}>
                    soit 7,66€/mois — paiement unique
                  </p>
                </div>
                <Link
                  href="/commander/bronze"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
                  style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                >
                  Commander Bronze
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {bronzeFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
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

              <p
                className="mt-6 text-sm p-4 rounded-xl"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
              >
                💡 Si vous souhaitez économiser encore plus sur le long terme, l'offre Gold (12 mois) revient à
                seulement 3,75€/mois — soit deux fois moins cher que le Bronze au prorata mensuel.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3 : Tableau comparatif ─────────────────────────────── */}
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
              Comparez Nos Offres : Quel Abonnement IPTV Choisir ?
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: 'var(--color-ink-light)' }}>
              Pour un choix éclairé, consultez aussi notre guide du{' '}
              <Link href="/fournisseur-iptv" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                fournisseur IPTV fiable
              </Link>.
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
                    <th className="px-5 py-4 text-center font-semibold" style={{ color: 'var(--color-surface)' }}>VOD</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Bronze', duration: '3 mois', price: '22,99€', perMonth: '7,66€', vod: '+60 000', featured: false },
                    { label: 'Silver', duration: '6 mois', price: '34,99€', perMonth: '5,83€', vod: '+100 000', featured: false },
                    { label: 'Gold ★', duration: '12 mois', price: '44,99€', perMonth: '3,75€', vod: '+160 000', featured: true },
                    { label: 'Diamond', duration: '24 mois', price: '74,99€', perMonth: '3,12€', vod: '+160 000', featured: false },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: row.featured ? 'var(--color-lime-soft)' : i % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
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
                        className="px-5 py-4 text-center"
                        style={{ color: 'var(--color-ink-light)', borderBottom: '1px solid var(--color-border)' }}
                      >
                        {row.vod}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs mt-4" style={{ color: 'var(--color-gray-400)' }}>
              Tous les forfaits incluent : +22 000 chaînes · HD/4K/8K · AntiFreeze 10.0 · TV Replay · Assistance 24/7
            </p>
          </div>
        </section>

        {/* ── Section 4 : Économies longue durée ──────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="section4-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="section4-heading"
              className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Économisez Plus en Choisissant un Abonnement IPTV Longue Durée
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              La façon la plus simple de payer son IPTV moins cher est d'opter pour une durée plus longue. Plus la
              période est longue, plus le coût mensuel diminue drastiquement. Avec l'offre Diamond à 24 mois, vous
              accédez à l'IPTV pour seulement 3,12€/mois — moins qu'un café.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex flex-col items-center text-center p-6 rounded-2xl gap-3"
                  style={{
                    backgroundColor: plan.featured ? 'var(--color-dark)' : 'var(--color-card)',
                    border: plan.featured ? '2px solid var(--color-lime)' : '1px solid var(--color-border)',
                    borderRadius: 16,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: plan.featured ? 'var(--color-lime)' : 'var(--color-gray-600)' }}
                  >
                    {plan.label}
                  </p>
                  <p
                    className="font-display font-extrabold text-2xl"
                    style={{ color: plan.featured ? 'var(--color-lime)' : 'var(--color-ink)' }}
                  >
                    {plan.pricePerMonth}
                  </p>
                  <p className="text-xs" style={{ color: plan.featured ? 'var(--color-gray-400)' : 'var(--color-ink-light)' }}>
                    {plan.price} / {plan.duration}
                  </p>
                  {plan.featured && (
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                    >
                      Meilleur rapport qualité/prix
                    </span>
                  )}
                  <Link
                    href={plan.href}
                    className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: plan.featured ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: plan.featured ? 'var(--color-dark)' : 'var(--color-ink)',
                      border: plan.featured ? 'none' : '1px solid var(--color-border)',
                    }}
                  >
                    Choisir
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              L'offre Gold 12 mois est la préférée de nos clients : elle offre le meilleur compromis entre engagement
              et économies, avec un coût de seulement 3,75€/mois pour 12 mois d'accès complet. Découvrez aussi notre{' '}
              <Link href="/abonnements/premium" style={{ color: 'var(--color-lime)', textDecoration: 'underline' }}>
                abonnement IPTV premium
              </Link>{' '}
              pour toutes les options disponibles.
            </p>
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
              Questions Fréquentes sur l'Abonnement IPTV Pas Cher
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
