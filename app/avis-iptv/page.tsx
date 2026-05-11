import type { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Avis ClarioTV 2026 — Témoignages Clients & Notes Vérifiées | IPTV France',
  description:
    "Lisez les vrais avis ClarioTV de nos clients satisfaits. Notes vérifiées, témoignages WhatsApp, retours d'expérience sur la qualité IPTV France. 4,8/5 en moyenne.",
  keywords: [
    'avis ClarioTV',
    'avis IPTV France',
    'témoignages IPTV',
    'ClarioTV avis clients',
  ],
  alternates: { canonical: `${siteConfig.url}/avis-iptv` },
  openGraph: {
    title: 'Avis ClarioTV 2026 — Témoignages Clients & Notes Vérifiées | IPTV France',
    description:
      'Avis clients vérifiés ClarioTV : 4,8/5 sur plus de 500 avis. Témoignages réels sur la qualité IPTV France, stabilité, support et rapport qualité/prix.',
    url: `${siteConfig.url}/avis-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Les avis ClarioTV sont-ils vérifiés ?',
    answer:
      "Oui. Tous les témoignages présentés proviennent de clients ayant souscrit un abonnement ClarioTV. Nous ne publions pas de faux avis et encourageons nos clients à partager leurs retours d'expérience honnêtes via WhatsApp ou directement sur notre site.",
  },
  {
    question: 'Quelle est la note moyenne de ClarioTV ?',
    answer:
      "ClarioTV obtient une note moyenne de 4,8/5 basée sur plus de 500 avis clients vérifiés. Les points les mieux notés sont la qualité vidéo (4,9/5) et le rapport qualité/prix (4,9/5).",
  },
  {
    question: 'Comment laisser un avis sur ClarioTV ?',
    answer:
      "Vous pouvez partager votre expérience en contactant notre équipe via WhatsApp au +447476614523. Vos retours nous aident à améliorer constamment notre service.",
  },
  {
    question: 'ClarioTV propose-t-il un remboursement si je ne suis pas satisfait ?',
    answer:
      "Oui. ClarioTV s'engage à résoudre tout problème technique dans les plus brefs délais. Si votre problème ne peut pas être résolu, nous examinons chaque demande de remboursement individuellement. Notre priorité est votre satisfaction.",
  },
];

const testimonials = [
  {
    name: 'Sophie L.',
    plan: 'Gold',
    date: 'Il y a 3 semaines',
    rating: 5,
    text: "Abonnement au top ! Les chaînes 4K sont d'une clarté incroyable, aucune coupure en 6 mois d'utilisation. Le support WhatsApp répond en moins de 15 minutes. Je recommande à 100%.",
  },
  {
    name: 'Marc T.',
    plan: 'Diamond',
    date: 'Il y a 1 mois',
    rating: 5,
    text: "Utilisation sur ma Smart TV Samsung et mon iPhone sans aucun problème. Les +22 000 chaînes incluent toutes les chaînes arabes dont j'avais besoin. Activation en moins d'1h.",
  },
  {
    name: 'Fatima B.',
    plan: 'Silver',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: "J'hésitais à cause du prix mais le rapport qualité/prix est vraiment excellent. La qualité HD est parfaite, le catalogue de films est immense. Je renouvellerai sans hésiter.",
  },
  {
    name: 'Pierre-Antoine M.',
    plan: 'Gold',
    date: 'Il y a 2 mois',
    rating: 5,
    text: "Service impeccable depuis 8 mois. Le test gratuit 24h m'a convaincu immédiatement. Aucun souci technique, l'équipe est très professionnelle.",
  },
  {
    name: 'Amina C.',
    plan: 'Bronze',
    date: 'Il y a 1 semaine',
    rating: 4,
    text: "Même avec l'offre Bronze, la qualité est au rendez-vous. Parfait pour commencer. Je vais passer à Gold pour le prochain renouvellement.",
  },
  {
    name: 'Romain V.',
    plan: 'Gold',
    date: 'Il y a 5 semaines',
    rating: 5,
    text: "Je venais d'un autre fournisseur avec beaucoup de coupures. Depuis ClarioTV, plus aucun problème. La technologie anti-freeze fait vraiment la différence.",
  },
  {
    name: 'Isabelle F.',
    plan: 'Diamond',
    date: 'Il y a 3 jours',
    rating: 5,
    text: "Abonnement Diamond pour toute la famille. Les chaînes sportives en 4K sont exceptionnelles. Support top, réponse immédiate via WhatsApp.",
  },
  {
    name: 'Karim H.',
    plan: 'Silver',
    date: 'Il y a 6 semaines',
    rating: 5,
    text: "Le meilleur abonnement IPTV que j'ai essayé. Qualité constante, catalogue mis à jour régulièrement. Très satisfait de mon Silver 6 mois.",
  },
];

const satisfactionStats = [
  { label: 'Qualité vidéo HD/4K/8K', pct: 94 },
  { label: 'Stabilité et absence de coupures', pct: 91 },
  { label: 'Réactivité du support WhatsApp', pct: 93 },
  { label: 'Richesse du catalogue', pct: 89 },
  { label: "Facilité d'installation", pct: 87 },
];

const subRatings = [
  { label: 'Qualité vidéo', value: '4,9' },
  { label: 'Stabilité', value: '4,7' },
  { label: 'Support client', value: '4,8' },
  { label: 'Rapport qualité/prix', value: '4,9' },
];

export default function AvisIPTVPage() {
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
          { name: 'Avis ClarioTV', href: '/avis-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="AVIS & TÉMOIGNAGES"
          title="Avis"
          titleHighlight="ClarioTV — Ce Que Pensent Nos Clients"
          subtitle="Des centaines de clients nous font confiance. Découvrez leurs retours d'expérience honnêtes sur notre service IPTV France."
        />

        {/* Section 1 — Note globale */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Note Globale ClarioTV
            </h2>

            <div
              className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-2xl mb-8"
              style={{
                backgroundColor: 'var(--color-dark)',
              }}
            >
              {/* Big rating */}
              <div className="text-center flex-shrink-0">
                <p
                  className="font-display font-extrabold text-6xl leading-none"
                  style={{ color: 'var(--color-lime)' }}
                >
                  4,8
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--color-gray-400)' }}>
                  sur 5
                </p>
                <div className="flex gap-0.5 justify-center mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      style={{ color: 'var(--color-lime)', fill: 'var(--color-lime)' }}
                    />
                  ))}
                </div>
              </div>

              {/* Sub-ratings */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {subRatings.map((r) => (
                    <div key={r.label} className="text-center">
                      <p
                        className="font-display font-bold text-2xl"
                        style={{ color: 'var(--color-lime)' }}
                      >
                        {r.value}/5
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--color-gray-400)' }}>
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="text-center text-xs mt-4"
                  style={{ color: 'var(--color-gray-600)' }}
                >
                  Basé sur plus de 500 avis clients vérifiés
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Témoignages */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Témoignages de Nos Clients
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        style={{
                          color: i < t.rating ? 'var(--color-lime)' : 'var(--color-border)',
                          fill: i < t.rating ? 'var(--color-lime)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      color: 'var(--color-ink-light)',
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    &quot;{t.text}&quot;
                  </p>
                  <p
                    className="font-semibold text-sm mt-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {t.name} — Abonnement {t.plan}
                  </p>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: 12 }}>{t.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Ce que nos clients apprécient */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Ce Que Nos Clients Apprécient le Plus
            </h2>
            <div className="flex flex-col gap-5">
              {satisfactionStats.map((s, idx) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                      {idx + 1}. {s.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--color-lime)' }}
                    >
                      {s.pct}% de satisfaction
                    </span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'var(--color-border)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${s.pct}%`,
                        backgroundColor: 'var(--color-lime)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — ClarioTV vs concurrents */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ClarioTV vs Autres Fournisseurs IPTV — Comparaison des Avis
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Parmi les retours de clients ayant précédemment utilisé d&apos;autres services IPTV,
              plusieurs points différencient ClarioTV de la concurrence. Le support client est
              systématiquement cité comme le point le plus apprécié : disponible 24/7 via
              WhatsApp, en français, avec un temps de réponse inférieur à 15 minutes en moyenne.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La stabilité est le deuxième point différenciant : la technologie AntiFreeze 10.0
              de ClarioTV élimine les micro-coupures qui gâchent l&apos;expérience sur d&apos;autres
              services, notamment lors des événements sportifs en direct. Plusieurs clients
              témoignent de 6 à 12 mois d&apos;utilisation sans la moindre interruption.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Pour une comparaison complète des fournisseurs IPTV France, consultez notre{' '}
              <Link
                href="/meilleur-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                comparatif des meilleurs IPTV France 2025
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 5 — Engagement qualité */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Notre Engagement Qualité
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: 'Qualité garantie',
                  desc: "+22 000 chaînes en HD/4K/8K avec la technologie AntiFreeze 10.0 pour une diffusion ininterrompue.",
                },
                {
                  title: 'Support 24/7',
                  desc: "Notre équipe francophone répond via WhatsApp en moins de 15 minutes, 7 jours sur 7, 24h sur 24.",
                },
                {
                  title: 'Satisfaction ou remboursement',
                  desc: "Si nous ne pouvons pas résoudre votre problème, nous examinons chaque demande de remboursement avec bienveillance.",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <div
                    className="w-8 h-1 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--color-lime)' }}
                  />
                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: 'var(--color-lime)',
                  color: 'var(--color-dark)',
                }}
              >
                Voir nos abonnements →
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
              Questions Fréquentes
            </h2>
            <div className="flex flex-col gap-5">
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

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/meilleur-iptv', label: 'Comparatif IPTV France' },
                { href: '/abonnements', label: 'Nos abonnements' },
                { href: '/fournisseur-iptv', label: 'Fournisseur IPTV' },
                { href: '/abonnements/premium', label: 'Offre Premium' },
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
