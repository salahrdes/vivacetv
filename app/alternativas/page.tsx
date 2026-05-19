import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Alternatives IPTV France 2026 — Comparatif des Meilleurs Services | VivaceTV',
  description:
    'Comparez VivaceTV aux principales alternatives IPTV : Xenon, King, Atlas, Smarter One, IPTV AZ, AtlasPro, IPTV Hottest, Televizo. Trouvez le meilleur service.',
  keywords: [
    'alternatives iptv france',
    'comparatif iptv 2025',
    'meilleur iptv france',
    'xenon iptv alternative',
    'king iptv alternative',
    'atlas iptv alternative',
  ],
  alternates: { canonical: `${siteConfig.url}/alternatives` },
  openGraph: {
    title: 'Alternatives IPTV France 2026 — Comparatif des Meilleurs Services | VivaceTV',
    description:
      'Comparez VivaceTV aux principales alternatives IPTV disponibles en France. Trouvez le service le mieux adapté à vos besoins.',
    url: `${siteConfig.url}/alternatives`,
    type: 'website',
  },
};

const competitors = [
  {
    name: 'Xenon IPTV',
    slug: 'xenon-iptv',
    description: 'Service populaire en France avec un large catalogue de chaînes internationales.',
    tag: '1 900 recherches/mois',
  },
  {
    name: 'King IPTV',
    slug: 'king-iptv',
    description: 'Fournisseur connu pour son important volume de chaînes disponibles.',
    tag: '1 300 recherches/mois',
  },
  {
    name: 'IPTV Atlas',
    slug: 'iptv-atlas',
    description: 'Service orienté contenu arabe et international, présent sur le marché français.',
    tag: '1 300 recherches/mois',
  },
  {
    name: 'Smarter One IPTV',
    slug: 'smarter-one-iptv',
    description: 'Offre internationale multi-langues avec diverses options de contenus.',
    tag: '1 300 recherches/mois',
  },
  {
    name: 'IPTV AZ',
    slug: 'iptv-az',
    description: 'Service disponible en France à prix variable, compatible avec plusieurs appareils.',
    tag: '1 300 recherches/mois',
  },
  {
    name: 'AtlasPro IPTV',
    slug: 'atlaspro-iptv',
    description: 'Fournisseur spécialisé dans le contenu arabe premium et les chaînes MENA.',
    tag: '480 recherches/mois',
  },
  {
    name: 'IPTV Hottest',
    slug: 'iptv-hottest',
    description: 'Service IPTV disponible sur le marché français, peu connu des consommateurs.',
    tag: '880 recherches/mois',
  },
  {
    name: 'Televizo',
    slug: 'televizo',
    description: 'Application lecteur IPTV pour Android — nécessite un abonnement séparé.',
    tag: '390 recherches/mois',
  },
];

const whyVivaceTV = [
  'Plus de 22 000 chaînes françaises et internationales constamment mises à jour',
  'Qualité vidéo HD, 4K et 8K — la meilleure du marché IPTV France',
  'Essai gratuit 24h sur simple demande via WhatsApp — sans engagement',
  'Support client WhatsApp 24/7 en français, réponse en moins de 15 minutes',
];

const faqItems = [
  {
    question: 'Quelle est la meilleure alternative IPTV en France en 2025 ?',
    answer:
      "VivaceTV est considéré comme la meilleure alternative aux autres services IPTV en France. Il propose un catalogue de +22 000 chaînes, une qualité jusqu'au 8K, la technologie AntiFreeze 10.0 pour une diffusion sans coupure, et un support WhatsApp 24/7 réactif. Son essai gratuit 24h permet de tester avant de s'engager.",
  },
  {
    question: 'Comment choisir entre les différents services IPTV disponibles en France ?',
    answer:
      "Pour choisir votre service IPTV, évaluez ces cinq critères : la stabilité du serveur (anti-freeze, uptime), le nombre et la variété des chaînes, la qualité vidéo proposée (HD, 4K, 8K), la réactivité du support client, et le rapport qualité/prix sur 12 mois. La disponibilité d'un essai gratuit est un bon indicateur de confiance du fournisseur.",
  },
  {
    question: 'Les alternatives IPTV sont-elles aussi bonnes que VivaceTV ?',
    answer:
      "Selon les retours utilisateurs, la plupart des alternatives IPTV présentent des lacunes par rapport à VivaceTV : catalogue plus limité, stabilité variable, absence d'essai gratuit ou support client peu réactif. VivaceTV se distingue notamment par sa technologie AntiFreeze 10.0 et son support WhatsApp francophone disponible 24h/24.",
  },
];

export default function AlternativesPage() {
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
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="COMPARATIF IPTV"
          title="Alternatives IPTV France —"
          titleHighlight="Comparatif 2025"
          subtitle="Vous cherchez la meilleure alternative IPTV en France ? Comparez VivaceTV aux principaux services disponibles et faites le bon choix."
        />

        {/* Intro + Grid */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le marché de l&apos;IPTV en France est animé par de nombreux fournisseurs, chacun avec ses
              forces et ses faiblesses. Xenon IPTV, King IPTV, IPTV Atlas, Smarter One, IPTV AZ,
              AtlasPro, IPTV Hottest et Televizo sont parmi les services les plus recherchés par les
              utilisateurs français. Mais lequel offre réellement la meilleure expérience ?
            </p>
            <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--color-ink-light)' }}>
              Nous avons comparé chaque service à VivaceTV sur les critères qui comptent vraiment :
              stabilité, qualité vidéo, catalogue, support client et rapport qualité/prix. Sélectionnez
              un service ci-dessous pour accéder à notre comparatif détaillé.
            </p>

            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comparatif par Service IPTV
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {competitors.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/alternatives/${comp.slug}`}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                    display: 'block',
                    transition: 'border-color 0.2s',
                    textDecoration: 'none',
                  }}
                  className="group hover:border-[var(--color-lime)]"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {comp.name}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: 'rgba(199,227,107,0.12)',
                        color: 'var(--color-lime)',
                        fontSize: 11,
                      }}
                    >
                      {comp.tag}
                    </span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-ink-light)' }}>
                    {comp.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    Voir la comparaison <ChevronRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi VivaceTV est la Meilleure Alternative IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Après avoir comparé l&apos;ensemble des services disponibles sur le marché français, VivaceTV
              se distingue sur tous les critères essentiels. Voici ce qui fait la différence :
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {whyVivaceTV.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    size={20}
                    style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }}
                  />
                  <span className="text-base" style={{ color: 'var(--color-ink)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Voir les abonnements VivaceTV →
              </Link>
              <Link
                href="/meilleur-iptv"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  backgroundColor: 'var(--color-card)',
                  color: 'var(--color-ink)',
                  border: '1px solid var(--color-border)',
                }}
              >
                Comparatif complet 2025 →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Alternatives IPTV France
            </h2>
            <div className="flex flex-col gap-4">
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
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
