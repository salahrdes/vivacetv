import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Illégal en France : Amendes, Risques et Comment Rester Légal | VivaceTV',
  description:
    "L'IPTV est-il illégal en France ? Quelles amendes risquez-vous ? Comprendre la différence entre IPTV légal et pirate, le rôle d'ARCOM, et comment choisir un service légitimement opéré.",
  keywords: [
    'iptv amende',
    'iptv amende france',
    'iptv illegal france',
    'iptv legal france',
    'amende streaming illégal',
    'arcom iptv',
    'risque iptv pirate',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/iptv-amende` },
  openGraph: {
    title: 'IPTV Illégal en France : Amendes, Risques et Comment Rester Légal | VivaceTV',
    description:
      "Tout savoir sur la légalité de l'IPTV en France : amendes possibles, rôle d'ARCOM, et comment identifier un service IPTV légal.",
    url: `${siteConfig.url}/guide-iptv/iptv-amende`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "L'IPTV est-il illégal en France ?",
    answer:
      "L'IPTV en tant que technologie est tout à fait légale en France. Ce qui est illégal, c'est d'utiliser un service IPTV qui diffuse des contenus sans détenir les droits de diffusion appropriés — ce qu'on appelle l'IPTV pirate. Un service IPTV légitimement opéré, avec facturation officielle et contenus sous licence, est parfaitement légal.",
  },
  {
    question: "Quelle amende risque-t-on en utilisant un IPTV pirate en France ?",
    answer:
      "En France, la consommation de contenus piratés peut exposer à des amendes pouvant atteindre plusieurs milliers d'euros, voire des poursuites pénales dans les cas les plus graves. ARCOM (ex-HADOPI) peut adresser des avertissements, et les tribunaux peuvent prononcer des condamnations pour contrefaçon. Les risques varient selon la gravité et la répétition des infractions.",
  },
  {
    question: "Quelle est la différence entre IPTV légal et IPTV pirate ?",
    answer:
      "Un IPTV légal dispose d'accords commerciaux avec les ayants droit, émet des factures officielles, et opère de manière transparente. Un IPTV pirate redistribue des flux de chaînes sans autorisation, à des prix anormalement bas, sans facturation officielle ni service après-vente identifié. Si un abonnement vous coûte moins de 5€/mois pour des milliers de chaînes sans aucune facture, c'est probablement illégal.",
  },
  {
    question: "Comment ARCOM détecte-t-elle les utilisateurs d'IPTV illégal ?",
    answer:
      "ARCOM (Autorité de Régulation de la Communication Audiovisuelle et Numérique) dispose de plusieurs moyens de détection : surveillance des adresses IP se connectant à des serveurs pirates connus, coopération avec les fournisseurs d'accès à Internet (FAI), et opérations judiciaires ciblant les grands réseaux de distribution. Les utilisateurs finals sont moins ciblés que les distributeurs, mais le risque existe et augmente.",
  },
  {
    question: "Existe-t-il un IPTV de qualité équivalente à Netflix mais légal ?",
    answer:
      "Oui. Des services IPTV légitimement opérés comme VivaceTV proposent des abonnements avec facturation officielle, un vaste catalogue de chaînes françaises et internationales en HD et 4K, ainsi qu'une médiathèque VOD. Ce type de service combine la richesse d'un IPTV avec le cadre rassurant d'un abonnement officiel.",
  },
  {
    question: "Mon fournisseur internet peut-il savoir que j'utilise un IPTV ?",
    answer:
      "Votre fournisseur d'accès à Internet peut voir les connexions vers des serveurs identifiés comme pirates et peut être contraint par la loi de transmettre ces informations aux autorités en cas d'enquête. L'utilisation d'un service IPTV légitimement opéré vous protège de ce risque en vous connectant à des infrastructures conformes.",
  },
];

const legalMarkers = [
  {
    icon: '✓',
    title: 'Facturation officielle',
    desc: 'Le service émet une facture ou un reçu avec des coordonnées légales identifiables.',
    ok: true,
  },
  {
    icon: '✓',
    title: 'Tarif cohérent avec le marché',
    desc: "Les prix reflètent un coût réel de licence et d'infrastructure (généralement dès 20-25€/3 mois).",
    ok: true,
  },
  {
    icon: '✓',
    title: 'Support client identifié',
    desc: "Une équipe joignable par WhatsApp, email ou chat avec un temps de réponse raisonnable.",
    ok: true,
  },
  {
    icon: '✗',
    title: 'Prix anormalement bas',
    desc: "Moins de 5€/mois pour des milliers de chaînes sans aucune explication — signal d'alerte fort.",
    ok: false,
  },
  {
    icon: '✗',
    title: 'Aucune facturation ni reçu',
    desc: 'Paiement uniquement par crypto ou virement sans aucun document officiel.',
    ok: false,
  },
  {
    icon: '✗',
    title: 'Site ou revendeur anonyme',
    desc: 'Aucune mention légale, aucune adresse, aucune identité visible derrière le service.',
    ok: false,
  },
];

export default function IPTVAmendePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: 'IPTV Amende France', href: '/guide-iptv/iptv-amende' },
        ]}
      />
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
      <Header />

      <main id="main-content">
        <PageHero
          label="LÉGALITÉ IPTV"
          title="IPTV Illégal en France :"
          titleHighlight="Risques, Amendes et Comment Rester Légal"
          subtitle="L'IPTV est une technologie légale — mais tout dépend du service que vous utilisez. Comprendre la différence entre IPTV légal et pirate peut vous éviter des amendes sévères."
        />

        {/* Section 1 — Cadre légal */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Cadre Légal de l'IPTV en France
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              L'<strong style={{ color: 'var(--color-ink)' }}>IPTV (Internet Protocol Television)</strong>{' '}
              est une technologie parfaitement légale qui permet de diffuser des contenus audiovisuels
              via internet. De la même façon qu'un opérateur télécom peut proposer des chaînes via une
              box, l'IPTV est un vecteur de distribution — pas une infraction en soi.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Ce qui détermine la légalité, c'est la <strong style={{ color: 'var(--color-ink)' }}>source
              des contenus diffusés</strong>. En France, la loi sur le droit d'auteur (notamment les
              articles L122-1 et L335-4 du Code de la propriété intellectuelle) protège les contenus
              audiovisuels. Diffuser ou consommer des contenus sans autorisation des ayants droit
              constitue une contrefaçon passible de sanctions.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              L'<strong style={{ color: 'var(--color-ink)' }}>ARCOM</strong> (Autorité de Régulation
              de la Communication Audiovisuelle et Numérique, anciennement HADOPI), créée par la
              fusion de l'HADOPI et du CSA en 2022, est l'organisme chargé de lutter contre le piratage
              audiovisuel en France. Elle dispose de pouvoirs d'enquête renforcés et coopère activement
              avec Europol et les FAI pour identifier les réseaux de distribution pirates.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Depuis la loi du 25 octobre 2021 renforçant les pouvoirs d'ARCOM, les autorités ont
              obtenu de nouveaux outils pour bloquer rapidement les sites et serveurs pirates, y compris
              des injonctions dynamiques permettant de bloquer les miroirs de sites en quelques heures.
              Cette réglementation s'est durcie progressivement, notamment pour protéger les droits
              sportifs — un domaine particulièrement exposé.
            </p>
            <div
              className="p-5 rounded-xl mt-6"
              style={{
                border: '2px solid var(--color-lime)',
                backgroundColor: 'var(--color-lime-soft)',
              }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
                Résumé : L'IPTV est légal. L'IPTV pirate (redistribution non autorisée de chaînes
                sous copyright) est illégal et peut exposer à des sanctions civiles et pénales.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Amendes */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Quelles Amendes pour l'Utilisation d'un IPTV Pirate en France ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En France, les sanctions pour piratage audiovisuel sont prévues par le Code de la
              propriété intellectuelle. Pour un utilisateur final, la responsabilité peut être engagée
              à plusieurs niveaux :
            </p>
            <div className="flex flex-col gap-4 mb-6">
              {[
                {
                  level: 'Niveau 1 — Avertissement ARCOM',
                  desc: "ARCOM peut envoyer une recommandation (anciennement appelée 'avertissement HADOPI') à votre adresse email ou postale via votre FAI. Ce n'est pas encore une sanction, mais un signal d'alerte formel.",
                },
                {
                  level: 'Niveau 2 — Poursuite civile',
                  desc: "Les ayants droit (chaînes TV, studios, fédérations sportives) peuvent engager des poursuites civiles. Des dommages et intérêts peuvent être réclamés, parfois plusieurs milliers d'euros selon le préjudice estimé.",
                },
                {
                  level: 'Niveau 3 — Sanction pénale',
                  desc: "En cas de récidive ou de participation à un réseau de distribution, les sanctions pénales pour contrefaçon peuvent atteindre 300 000 € d'amende et 3 ans d'emprisonnement selon l'article L335-2 du Code de la propriété intellectuelle.",
                },
              ].map((item) => (
                <div
                  key={item.level}
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
                    {item.level}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              À noter : les sanctions sont plus sévères pour les revendeurs et distributeurs de flux
              pirates que pour les consommateurs finals. Néanmoins, la tendance législative est à
              durcissement progressif, et le risque pour les utilisateurs augmente chaque année avec
              les progrès technologiques de détection.
            </p>
          </div>
        </section>

        {/* Section 3 — Identifier un service légal */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Identifier si un Service IPTV est Légal ?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Il n'est pas toujours facile de distinguer un service IPTV légitimement opéré d'un
              service pirate. Voici les indicateurs clés à vérifier avant de souscrire :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {legalMarkers.map((marker) => (
                <div
                  key={marker.title}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: `1px solid ${marker.ok ? 'var(--color-lime)' : 'var(--color-border)'}`,
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-lg font-bold flex-shrink-0"
                      style={{ color: marker.ok ? 'var(--color-lime)' : 'var(--color-gray-400)' }}
                    >
                      {marker.icon}
                    </span>
                    <div>
                      <h3
                        className="font-semibold text-sm mb-1"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {marker.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                        {marker.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — VivaceTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi VivaceTV est un Service Légitimement Opéré
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV est un service IPTV <strong style={{ color: 'var(--color-ink)' }}>légitimement
              opéré</strong> proposant des abonnements avec <strong style={{ color: 'var(--color-ink)' }}>
              facturation officielle</strong>. Contrairement aux services pirates anonymes, VivaceTV
              vous fournit un reçu pour chaque paiement, dispose d'un support client identifié, et
              opère dans le respect de la réglementation en vigueur.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Les abonnements VivaceTV sont proposés à des tarifs cohérents avec le marché : à partir
              de 22,99€ pour 3 mois (offre Bronze), ce qui reflète un coût réel d'infrastructure et
              de service. Ces tarifs s'éloignent radicalement des offres pirates à 3-5€/mois qui ne
              peuvent mathématiquement pas couvrir le coût de contenus sous licence.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              En choisissant VivaceTV, vous bénéficiez d'un service stable et documenté — sans exposer
              votre foyer aux risques légaux associés à l'IPTV pirate. Le support WhatsApp 24/7
              témoigne également d'une structure opérationnelle réelle, impossible à trouver chez les
              revendeurs anonymes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Voir les abonnements VivaceTV →
              </Link>
              <Link
                href="/fournisseur-iptv"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  backgroundColor: 'var(--color-card)',
                }}
              >
                Pourquoi choisir VivaceTV →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5 — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — IPTV et Légalité en France
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
                { href: '/abonnements', label: 'Voir les offres VivaceTV' },
                { href: '/fournisseur-iptv', label: 'Présentation VivaceTV' },
                { href: '/meilleur-iptv', label: 'Comparatif IPTV France' },
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
