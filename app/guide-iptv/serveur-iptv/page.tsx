import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Serveur IPTV : Tout Comprendre pour Choisir le Meilleur en 2026 | ClarioTV',
  description:
    "Qu'est-ce qu'un serveur IPTV ? Comment évaluer la qualité d'un serveur IPTV : uptime, anti-freeze, CDN, temps de réponse. Guide complet pour choisir le meilleur fournisseur.",
  keywords: [
    'serveur iptv',
    'iptv serveur',
    'meilleur serveur iptv',
    'serveur iptv france',
    'uptime iptv',
    'anti freeze iptv',
    'qualite serveur iptv',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/serveur-iptv` },
  openGraph: {
    title: 'Serveur IPTV : Tout Comprendre pour Choisir le Meilleur en 2026 | ClarioTV',
    description:
      "Guide complet sur les serveurs IPTV : fonctionnement, indicateurs de qualité, signaux d'alarme et infrastructure ClarioTV.",
    url: `${siteConfig.url}/guide-iptv/serveur-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Combien de serveurs doit avoir un bon fournisseur IPTV ?",
    answer:
      "Un bon fournisseur IPTV dispose généralement de plusieurs serveurs répartis dans différentes localisations géographiques (Europe, Amérique du Nord, Asie). Cette architecture multi-serveurs garantit la continuité de service en cas de défaillance d'un nœud et réduit la latence pour les utilisateurs en routant les connexions vers le serveur le plus proche.",
  },
  {
    question: "Qu'est-ce que l'uptime d'un serveur IPTV ?",
    answer:
      "L'uptime désigne le pourcentage de temps pendant lequel le serveur est opérationnel et accessible. Un uptime de 99,9% signifie que le serveur n'est indisponible que 8,7 heures par an maximum. Un bon fournisseur IPTV doit garantir un uptime d'au moins 99,5%. ClarioTV vise un uptime de 99,9% grâce à son infrastructure redondante.",
  },
  {
    question: "Pourquoi mon IPTV buffe-t-il constamment ?",
    answer:
      "Le buffering constant est généralement dû à l'un de ces facteurs : serveur surchargé ou de mauvaise qualité, connexion internet insuffisante (moins de 10 Mbps pour la HD), Wi-Fi instable (préférez l'Ethernet), ou cache trop petit dans votre application. Commencez par tester votre débit internet et connectez votre appareil en Ethernet pour isoler la cause.",
  },
  {
    question: "Qu'est-ce que la technologie anti-freeze en IPTV ?",
    answer:
      "La technologie anti-freeze (ou anti-gel) est un ensemble de mécanismes côté serveur qui prévient les interruptions de flux lors des pics de trafic — notamment pendant les matchs sportifs où des milliers d'utilisateurs regardent la même chaîne simultanément. Elle inclut la mise en tampon intelligente, la redirection automatique vers des serveurs moins chargés et la détection proactive des saturations.",
  },
  {
    question: "Comment savoir si mon serveur IPTV est de bonne qualité ?",
    answer:
      "Testez votre service pendant au moins 7 jours, en incluant un week-end (pour tester la charge lors des événements sportifs). Un bon serveur doit offrir : zéro buffering sur les chaînes HD pendant les heures de pointe, chargement des chaînes en moins de 3 secondes, EPG mis à jour quotidiennement, et disponibilité des chaînes promises sans absence inexpliquée.",
  },
  {
    question: "Qu'est-ce qu'un CDN dans le contexte de l'IPTV ?",
    answer:
      "Un CDN (Content Delivery Network) est un réseau de serveurs distribués géographiquement qui stocke et livre les contenus depuis le point le plus proche de l'utilisateur final. En IPTV, un CDN réduit la latence, améliore la stabilité et permet de gérer de grands volumes d'utilisateurs simultanés sans dégradation de qualité. Les meilleurs fournisseurs IPTV s'appuient sur des CDN professionnels.",
  },
];

const redFlags = [
  {
    flag: 'Buffering pendant plus de 5 secondes',
    explanation: "Un buffering occasionnel est acceptable. S'il dure plus de 5 secondes ou se produit plus de 3 fois par heure sur des chaînes HD, le serveur est insuffisant.",
  },
  {
    flag: 'Chaînes indisponibles fréquemment',
    explanation: "Des chaînes temporairement absentes lors de pannes sont normales. Si 5% ou plus de votre liste de chaînes est régulièrement hors ligne, c'est un signal d'alarme.",
  },
  {
    flag: "Aucune information sur l'infrastructure",
    explanation: "Un bon fournisseur communique sur son uptime, ses localisations de serveurs et sa technologie. L'absence totale d'information technique est suspect.",
  },
  {
    flag: "Pas de période d'essai possible",
    explanation: "Un fournisseur confiant dans la qualité de ses serveurs propose toujours une période d'essai ou un test gratuit. Le refus suggère une qualité insuffisante.",
  },
  {
    flag: 'Support inexistant en cas de panne',
    explanation: "En cas de problème serveur, la réactivité du support est cruciale. Un support injoignable ou qui répond en plusieurs jours témoigne d'une infrastructure peu professionnelle.",
  },
];

const qualityIndicators = [
  {
    indicator: 'Uptime',
    good: '99,9% ou plus',
    average: '99% à 99,5%',
    bad: 'Inférieur à 99%',
  },
  {
    indicator: "Temps de démarrage d'une chaîne",
    good: 'Moins de 2 secondes',
    average: '2 à 5 secondes',
    bad: 'Plus de 5 secondes',
  },
  {
    indicator: 'Buffering (heures de pointe)',
    good: 'Aucun',
    average: 'Occasionnel (< 1/heure)',
    bad: 'Fréquent',
  },
  {
    indicator: 'Anti-freeze technologie',
    good: 'Inclus et actif',
    average: 'Partiel',
    bad: 'Absent',
  },
  {
    indicator: 'Localisations des serveurs',
    good: 'Multi-continents',
    average: '2 à 3 pays',
    bad: 'Serveur unique',
  },
];

export default function ServeurIPTVPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: 'Serveur IPTV', href: '/guide-iptv/serveur-iptv' },
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
          label="INFRASTRUCTURE IPTV"
          title="Serveur IPTV :"
          titleHighlight="Tout Comprendre pour Choisir le Meilleur"
          subtitle="Le serveur IPTV est le cœur de votre expérience de streaming. Comprendre comment l'évaluer vous permettra de choisir un fournisseur qui ne vous décevra jamais."
        />

        {/* Section 1 — Qu'est-ce qu'un serveur IPTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu'est-ce qu'un Serveur IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un <strong style={{ color: 'var(--color-ink)' }}>serveur IPTV</strong> est l'infrastructure
              informatique qui capture, encode et diffuse les flux vidéo vers les abonnés. Concrètement,
              c'est une batterie d'ordinateurs haute performance, hébergés dans des datacenters, qui
              reçoivent les signaux des chaînes TV, les convertissent en flux numériques, et les
              transmettent simultanément à des milliers d'utilisateurs via internet.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La qualité de ce serveur détermine directement la qualité de votre expérience : stabilité
              du flux, résolution vidéo, temps de chargement des chaînes, et comportement lors des
              événements à forte audience (finales sportives, émissions populaires). Un mauvais serveur
              se traduit invariablement par du buffering, des coupures et des chaînes indisponibles.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Les meilleurs fournisseurs IPTV investissent massivement dans leur infrastructure :
              bande passante dédiée en Gbps, redondance des connexions, systèmes anti-DDoS et
              technologies de streaming adaptatives qui ajustent automatiquement la qualité vidéo
              en fonction de la connexion de l'utilisateur.
            </p>
          </div>
        </section>

        {/* Section 2 — Indicateurs de qualité */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Les Indicateurs Clés de Qualité d'un Serveur IPTV
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Voici les métriques à examiner pour évaluer objectivement la qualité d'un serveur IPTV :
            </p>
            <div className="overflow-x-auto rounded-xl mb-8" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Indicateur', 'Bon', 'Moyen', 'Insuffisant'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: h === 'Bon' ? 'var(--color-lime)' : 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {qualityIndicators.map((row, idx) => (
                    <tr
                      key={row.indicator}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--color-ink)' }}>
                        {row.indicator}
                      </td>
                      <td className="px-4 py-3 font-semibold" style={{ color: 'var(--color-lime)' }}>
                        {row.good}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                        {row.average}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--color-gray-400)' }}>
                        {row.bad}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  L'Uptime — Disponibilité du Serveur
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  L'uptime est exprimé en pourcentage et mesure la disponibilité du service sur une
                  période donnée. Un uptime de 99,9% correspond à moins de 9 heures d'interruption
                  par an — acceptable pour un service de divertissement. En dessous de 99%, cela
                  représente potentiellement plusieurs jours d'indisponibilité annuelle, ce qui est
                  inacceptable pour un abonnement payant.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La Localisation des Serveurs
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Des serveurs géographiquement proches de l'utilisateur réduisent la latence et
                  améliorent la fluidité du streaming. Un fournisseur disposant de serveurs en France
                  ou en Europe de l'Ouest offre une meilleure expérience aux utilisateurs français.
                  La redondance géographique (plusieurs sites de données) garantit la continuité
                  en cas de panne d'un datacenter.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La Bande Passante
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  La bande passante détermine combien d'utilisateurs peuvent regarder des flux en
                  simultané sans dégradation. Un flux 4K nécessite environ 25 Mbps par utilisateur.
                  Un fournisseur avec 100 000 abonnés et 10 Gbps de bande passante ne peut servir
                  que 400 utilisateurs en 4K simultanément — soit 0,4% de sa base. Les meilleurs
                  fournisseurs investissent dans des capacités dépassant leur usage moyen pour
                  absorber les pics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Signaux d'alarme */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Signaux d'Alarme : Comment Identifier un Mauvais Serveur IPTV
            </h2>
            <div className="flex flex-col gap-4">
              {redFlags.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    className="text-lg flex-shrink-0"
                    style={{ color: 'var(--color-gray-400)' }}
                  >
                    ✗
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-base mb-1"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {item.flag}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                      {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — ClarioTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              L'Infrastructure Serveur de ClarioTV
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              ClarioTV a construit son infrastructure autour d'un principe simple : la qualité ne
              doit jamais se dégrader, même lors des moments les plus chargés. Voici les piliers de
              notre architecture serveur :
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'Technologie AntiFreeze 10.0',
                  desc: "Notre technologie propriétaire anti-freeze prévient les interruptions de flux en anticipant et redistribuant la charge automatiquement. Résultat : zéro buffering même lors des finales de Ligue des Champions.",
                },
                {
                  title: 'Uptime 99,9%',
                  desc: "Notre SLA garantit une disponibilité de 99,9% — soit moins de 9 heures d'interruption maximale sur 12 mois. Notre infrastructure redondante assure la continuité même en cas de panne matérielle.",
                },
                {
                  title: 'Serveurs CDN multi-localisations',
                  desc: "Nos serveurs sont distribués sur plusieurs points de présence en Europe pour minimiser la latence et maximiser la qualité pour les utilisateurs français et francophones.",
                },
                {
                  title: '+22 000 chaînes maintenues',
                  desc: "Notre équipe technique surveille et maintient la disponibilité de chaque chaîne 24h/24. Les flux cassés sont détectés et remplacés automatiquement ou dans les plus brefs délais.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-lime)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/abonnements"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
            >
              Tester ClarioTV →
            </Link>
          </div>
        </section>

        {/* Section 5 — Tester un serveur */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Comment Tester un Serveur IPTV Avant de s'Engager
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Ne souscrivez jamais un abonnement IPTV de longue durée sans avoir testé la qualité du
              serveur au préalable. Voici comment procéder méthodiquement :
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: '1',
                  title: "Demandez un test gratuit de 24 à 48 heures",
                  desc: "ClarioTV propose un test gratuit sur simple demande via WhatsApp. Cette période vous permet d'évaluer la stabilité du serveur dans vos conditions réelles d'utilisation.",
                },
                {
                  step: '2',
                  title: "Testez pendant les heures de pointe",
                  desc: "Les problèmes de serveur se manifestent principalement en soirée (20h-22h) et lors des événements sportifs. Testez impérativement pendant ces périodes pour avoir une image réaliste des performances.",
                },
                {
                  step: '3',
                  title: "Vérifiez la disponibilité des chaînes que vous regardez",
                  desc: "Contrôlez spécifiquement les chaînes qui vous sont importantes (Canal+, beIN Sports, France TV, etc.) et vérifiez qu'elles sont disponibles et de bonne qualité.",
                },
                {
                  step: '4',
                  title: "Testez sur votre connexion et votre appareil habituels",
                  desc: "Un test effectué sur un appareil ou une connexion différente de votre usage quotidien ne reflète pas votre expérience réelle. Testez dans vos conditions normales.",
                },
                {
                  step: '5',
                  title: "Évaluez la réactivité du support",
                  desc: "Contactez le support pendant le test pour évaluer son temps de réponse et sa qualité. Un bon support résout les problèmes en minutes, pas en jours.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
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
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--color-ink)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — Serveur IPTV
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
                { href: '/abonnements', label: 'Voir les abonnements' },
                { href: '/meilleur-iptv', label: 'Comparatif IPTV France' },
                { href: '/fournisseur-iptv', label: 'Présentation ClarioTV' },
                { href: '/iptv-4k', label: 'IPTV 4K' },
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
