import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Zap, Star, Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Fournisseur IPTV France Fiable — Qui est VivaceTV ? | IPTV France',
  description:
    'Découvrez VivaceTV, votre fournisseur IPTV France de confiance. +22 000 chaînes HD/4K/8K, serveurs stables, support WhatsApp 24/7. Comment choisir un bon fournisseur IPTV ?',
  keywords: [
    'fournisseur IPTV France',
    'agences IPTV',
    'meilleur fournisseur IPTV',
    'choisir fournisseur IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/fournisseur-iptv` },
  openGraph: {
    title: 'Fournisseur IPTV France Fiable — Qui est VivaceTV ? | IPTV France',
    description:
      'VivaceTV : fournisseur IPTV France fiable. +22 000 chaînes, HD/4K/8K, AntiFreeze 10.0, support WhatsApp 24/7. Tout ce qu\'il faut savoir pour choisir un bon fournisseur IPTV.',
    url: `${siteConfig.url}/fournisseur-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Qu'est-ce qui distingue un bon fournisseur IPTV d'un mauvais ?",
    answer:
      "Un bon fournisseur IPTV se reconnaît à sa stabilité serveur (peu ou pas de coupures), à la régularité des mises à jour des listes de chaînes, à la réactivité de son support client, à la disponibilité d'un essai gratuit et à des avis clients positifs vérifiables. VivaceTV coche tous ces critères.",
  },
  {
    question: 'VivaceTV est-il un fournisseur IPTV légal ?',
    answer:
      "VivaceTV opère dans le respect de la réglementation en vigueur et s'engage à proposer un service de qualité à ses utilisateurs. Nous vous recommandons de consulter notre article sur la légalité de l'IPTV en France pour plus d'informations.",
  },
  {
    question: 'Comment contacter le support VivaceTV ?',
    answer:
      "Notre support est disponible 24/7 via WhatsApp au +447476614523. Notre équipe francophone répond généralement en moins de 15 minutes pour toute question technique ou de commande.",
  },
  {
    question: 'VivaceTV propose-t-il un essai gratuit ?',
    answer:
      "Oui, VivaceTV propose un test gratuit de 24 heures sur simple demande. Contactez notre équipe via WhatsApp pour en bénéficier avant de vous engager dans un abonnement.",
  },
  {
    question: "Combien coûte un abonnement chez un fournisseur IPTV sérieux ?",
    answer:
      "Un abonnement IPTV sérieux se situe entre 20€ et 80€ selon la durée. Chez VivaceTV, nos offres démarrent à 22,99€ pour 3 mois et vont jusqu'à 74,99€ pour 24 mois — des tarifs compétitifs pour une qualité premium.",
  },
];

const trustPillars = [
  {
    icon: Star,
    title: '+22 000 chaînes stables',
    desc: "Un catalogue complet et constamment mis à jour : chaînes françaises, internationales, sportives, cinéma et documentaires. Tout en un seul abonnement.",
  },
  {
    icon: Zap,
    title: 'AntiFreeze 10.0',
    desc: "Notre technologie propriétaire élimine les micro-coupures et le buffering, même lors des événements sportifs les plus regardés. Uptime garanti à 99,9%.",
  },
  {
    icon: Shield,
    title: 'Support WhatsApp 24/7',
    desc: "Une équipe francophone disponible 24h/24, 7j/7. Temps de réponse moyen inférieur à 15 minutes pour l'installation, la configuration ou tout problème technique.",
  },
  {
    icon: Check,
    title: 'Test gratuit 24 heures',
    desc: "Testez VivaceTV gratuitement avant de vous engager. Une pratique rare dans notre secteur, qui témoigne de notre confiance en la qualité de notre service.",
  },
];

const selectionCriteria = [
  {
    num: '1',
    title: 'Vérifiez la stabilité du service',
    body: "La stabilité est le critère n°1. Un fournisseur IPTV fiable doit afficher un uptime proche de 99,9% et intégrer une technologie anti-freeze. Avant de vous abonner, renseignez-vous sur les coupures en consultant les avis clients récents. VivaceTV utilise la technologie AntiFreeze 10.0 testée et validée par des milliers d'utilisateurs.",
  },
  {
    num: '2',
    title: 'Testez avant d\'acheter',
    body: "Tout fournisseur IPTV sérieux propose un essai gratuit. Un service qui refuse tout test ou qui exige un paiement immédiat sans période d'essai est un signal d'alarme. VivaceTV offre 24 heures de test gratuit sur simple demande via WhatsApp.",
  },
  {
    num: '3',
    title: 'Évaluez le support client',
    body: "Un bon support doit être disponible 24/7, répondre en français, et maîtriser les aspects techniques (configuration, dépannage). Testez le temps de réponse avant d'acheter. Notre équipe répond généralement en moins de 15 minutes.",
  },
  {
    num: '4',
    title: 'Comparez les catalogues',
    body: "Vérifiez le nombre de chaînes (françaises + internationales + sportives), la disponibilité de la 4K/8K, et l'étendue du catalogue VOD (films et séries). VivaceTV propose +22 000 chaînes et +160 000 contenus en HD/4K/8K.",
  },
  {
    num: '5',
    title: 'Lisez les avis clients',
    body: "Les avis vérifiés sont le meilleur indicateur de la qualité réelle d'un service. Méfiez-vous des services sans aucun avis ou avec uniquement des commentaires génériques. VivaceTV affiche une note de 4,8/5 sur plus de 500 avis vérifiés.",
  },
  {
    num: '6',
    title: 'Méfiez-vous des prix trop bas',
    body: "Un abonnement IPTV à 3€/mois est un signal d'alarme. Ces services sont souvent instables, sans support et disparaissent en quelques mois avec votre argent. Un fournisseur sérieux investit dans ses serveurs et son équipe — ce qui a un coût minimal.",
  },
];

export default function FournisseurIPTVPage() {
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
          { name: 'Fournisseur IPTV France', href: '/fournisseur-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="FOURNISSEUR IPTV"
          title="VivaceTV —"
          titleHighlight="Votre Fournisseur IPTV France de Confiance"
          subtitle="Avec des milliers de clients satisfaits, VivaceTV s'impose comme le fournisseur IPTV France de référence. Découvrez pourquoi et comment choisir un bon fournisseur."
        />

        {/* Section 1 — Qu'est-ce qu'un fournisseur IPTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce qu&apos;un Fournisseur IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un fournisseur IPTV (Internet Protocol Television) est une société ou un service qui
              vous donne accès à des chaînes de télévision, des films et des séries via internet,
              plutôt que par le câble, la fibre TV ou la parabole satellite traditionnelle. Vous
              recevez un identifiant (URL M3U ou Xtream Codes) que vous utilisez dans une
              application IPTV de votre choix pour accéder au catalogue.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Il est important de distinguer les fournisseurs IPTV sérieux — qui investissent dans
              des serveurs stables, des équipes support et des mises à jour régulières — des
              services à bas prix qui disparaissent souvent après quelques semaines. Un fournisseur
              de confiance offre systématiquement un essai gratuit, affiche des avis clients
              vérifiables et dispose d&apos;un support réactif.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Un fournisseur IPTV sérieux doit fournir : des flux stables en HD, 4K et 8K, un
              catalogue régulièrement mis à jour, un support technique disponible, et une
              infrastructure serveur redondante pour garantir la continuité du service même lors
              des pics de trafic (finales sportives, sorties de films). Consultez nos{' '}
              <Link
                href="/avis-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                avis clients vérifiés
              </Link>{' '}
              pour évaluer la fiabilité de VivaceTV.
            </p>
          </div>
        </section>

        {/* Section 2 — Comment choisir */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Choisir un Fournisseur IPTV Fiable en France ?
            </h2>
            <div className="flex flex-col gap-6">
              {selectionCriteria.map((c) => (
                <div
                  key={c.num}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {c.num}. {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Pourquoi VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi VivaceTV est un Fournisseur IPTV de Confiance
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {trustPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    style={{
                      backgroundColor: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 16,
                      padding: 24,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'var(--color-lime-soft)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--color-lime)' }} />
                    </div>
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4 — Agences IPTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Les Agences IPTV en France — Comment Ça Fonctionne ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le marché IPTV fonctionne à deux niveaux : les fournisseurs de flux (qui possèdent
              et gèrent les serveurs) et les revendeurs ou agences IPTV (qui achètent des
              abonnements en gros et les revendent). Ce modèle de distribution crée parfois une
              chaîne longue entre le serveur et l&apos;utilisateur final, ce qui peut affecter
              la qualité du support et la réactivité en cas de problème.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              <strong style={{ color: 'var(--color-ink)' }}>VivaceTV opère en direct</strong>,
              sans intermédiaires. Nous gérons directement notre infrastructure serveur et notre
              équipe support. Cela nous permet de proposer des prix plus compétitifs, d&apos;intervenir
              rapidement en cas de problème technique et de maintenir un niveau de qualité constant.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Les avantages de travailler directement avec le fournisseur : pas de marge
              d&apos;intermédiaire (prix plus bas), support technique de première ligne (pas de
              transmission de tickets), mises à jour plus rapides des listes de chaînes, et
              engagement direct envers la satisfaction client. Pour en savoir plus sur nos offres,
              consultez la{' '}
              <Link
                href="/abonnements"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                page abonnements
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 5 — Infrastructure */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Notre Infrastructure Technique
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: 'Stabilité serveur',
                  desc: "Infrastructure redondante avec un uptime garanti de 99,9%. En cas de défaillance d'un serveur, la bascule automatique assure la continuité du service.",
                },
                {
                  label: 'Technologie AntiFreeze 10.0',
                  desc: "Notre algorithme propriétaire anticipe et élimine les micro-coupures causées par les pics de trafic, particulièrement lors des événements sportifs.",
                },
                {
                  label: 'Mises à jour régulières',
                  desc: "Les listes de chaînes sont mises à jour quotidiennement pour garantir l'accès aux dernières chaînes et corriger les éventuels changements de flux.",
                },
                {
                  label: 'Support multi-appareils',
                  desc: "Nos identifiants sont compatibles avec Smart TV, Android, iOS, PC, Amazon Fire Stick, Apple TV et toute application IPTV majeure du marché.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div
                    className="w-6 h-1 rounded-full mb-3"
                    style={{ backgroundColor: 'var(--color-lime)' }}
                  />
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
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
                    {item.question.includes('légal') && (
                      <>
                        {' '}
                        <Link
                          href="/guide-iptv/iptv-amende"
                          className="underline"
                          style={{ color: 'var(--color-lime)' }}
                        >
                          Consulter notre article sur la légalité de l&apos;IPTV
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/abonnements', label: 'Voir les abonnements' },
                { href: '/avis-iptv', label: 'Avis clients' },
                { href: '/meilleur-iptv', label: 'Comparatif IPTV' },
                { href: '/guide-iptv/iptv-amende', label: 'IPTV légal en France' },
                { href: '/faq', label: 'FAQ complète' },
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
