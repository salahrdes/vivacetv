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
  title: 'IPTV 4K France 2025 — Chaînes Ultra HD Sans Coupure | ClarioTV',
  description:
    'Regardez la TV en 4K avec ClarioTV IPTV : +22 000 chaînes en HD, 4K et 8K, technologie anti-freeze, compatible Smart TV, Firestick, Android. Dès 22,99€.',
  keywords: [
    'IPTV 4K',
    '4K IPTV France',
    'chaînes IPTV 4K',
    'IPTV Ultra HD',
    'IPTV 8K',
  ],
  alternates: { canonical: `${siteConfig.url}/iptv-4k` },
  openGraph: {
    title: 'IPTV 4K France 2025 — Chaînes Ultra HD Sans Coupure | ClarioTV',
    description:
      'IPTV 4K et 8K avec ClarioTV : +22 000 chaînes Ultra HD, anti-freeze, compatible Smart TV 4K, Fire Stick 4K, Android TV. Dès 22,99€.',
    url: `${siteConfig.url}/iptv-4k`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Tous les abonnements ClarioTV incluent-ils la qualité 4K ?',
    answer:
      "Oui. Tous nos abonnements (Bronze, Silver, Gold, Diamond) incluent les chaînes en qualité HD, 4K et 8K. La qualité affichée dépend également de votre connexion internet (25 Mbps minimum recommandés pour le 4K) et de la capacité 4K de votre écran.",
  },
  {
    question: 'Quelle est la différence entre 4K et 8K en IPTV ?',
    answer:
      "Le 4K (Ultra HD) offre une résolution de 3840×2160 pixels, soit 4 fois la résolution du Full HD. Le 8K double encore cette résolution à 7680×4320 pixels. En pratique, la différence est perceptible principalement sur des écrans de 65 pouces et plus, et nécessite une connexion de 50 Mbps minimum.",
  },
  {
    question: "Mon IPTV 4K s'arrête souvent — comment résoudre ce problème ?",
    answer:
      "Les coupures en IPTV 4K sont généralement dues à une connexion internet insuffisante ou instable. Vérifiez votre débit (test sur speedtest.net), rapprochez votre appareil du routeur ou utilisez un câble Ethernet. ClarioTV intègre la technologie AntiFreeze 10.0 qui réduit significativement les bufferings.",
  },
  {
    question: "L'IPTV 4K est-il disponible sur iPhone et iPad ?",
    answer:
      "Oui. Avec l'application GSE Smart IPTV ou IPTV Smarters Pro sur votre iPhone ou iPad compatible 4K, vous pouvez profiter des chaînes ClarioTV en 4K. L'Apple TV 4K est également une excellente option pour regarder l'IPTV en 4K sur votre téléviseur.",
  },
  {
    question: "Ai-je besoin d'un équipement spécial pour l'IPTV 4K ?",
    answer:
      "Non. Vous avez seulement besoin d'un écran 4K (TV, moniteur), d'une connexion internet de 25 Mbps minimum, et d'une application IPTV compatible 4K comme TiviMate ou GSE Smart IPTV. Un abonnement ClarioTV fait le reste.",
  },
];

const devices = [
  {
    title: 'Smart TV 4K (Samsung, LG, Sony, Philips)',
    desc: "Les Smart TV 4K modernes supportent nativement l'IPTV via leurs applications intégrées ou via des applications téléchargeables (IPTV Smarters, Smart IPTV). Aucun boîtier supplémentaire n'est nécessaire. Compatible avec tous les modèles récents de Samsung (Tizen), LG (webOS) et Sony (Android TV).",
  },
  {
    title: 'Boîtiers Android TV 4K',
    desc: "Les boîtiers Android TV 4K comme le NVIDIA Shield TV Pro ou le Xiaomi Mi Box S offrent les meilleures performances pour l'IPTV 4K. Ils permettent d'installer TiviMate, la meilleure application IPTV du marché, et offrent une fluidité de lecture exceptionnelle.",
  },
  {
    title: 'Amazon Fire TV Stick 4K',
    desc: "L'Amazon Fire TV Stick 4K Max est un accessoire abordable (~50€) qui transforme n'importe quelle TV HDMi en Smart TV 4K. Compatible avec TiviMate et IPTV Smarters Pro via sideloading. Recommandé pour son excellent rapport performance/prix.",
  },
  {
    title: 'Apple TV 4K',
    desc: "L'Apple TV 4K (3e génération) est la meilleure option pour les utilisateurs Apple. Compatible avec GSE Smart IPTV disponible sur l'App Store. Offre une qualité de diffusion 4K HDR remarquable et s'intègre parfaitement dans l'écosystème Apple.",
  },
  {
    title: 'PC et ordinateurs',
    desc: "Sur PC (Windows/Mac) et Linux, vous pouvez regarder l'IPTV 4K via VLC Media Player (gratuit), IPTV Smarters (version web) ou Kodi avec l'add-on PVR IPTV Simple Client. Une carte graphique récente et une connexion stable de 25 Mbps sont recommandées.",
  },
];

const speedRows = [
  { quality: 'SD (480p)', speed: '3 Mbps', desc: 'Qualité de base' },
  { quality: 'HD (720p / 1080p)', speed: '10 Mbps', desc: 'Recommandé minimum' },
  { quality: '4K Ultra HD', speed: '25 Mbps', desc: 'Recommandé fibre' },
  { quality: '8K', speed: '50 Mbps', desc: 'Fibre nécessaire' },
];

const channels4K = [
  { cat: 'Sports', channels: ['beIN Sports 4K', 'Canal+ Sport 4K', 'RMC Sport 4K', 'Eurosport 4K'] },
  { cat: 'Cinéma & Séries', channels: ['Canal+ Cinéma 4K', 'OCS 4K', 'Chaînes UHD Premium', 'VOD 4K ClarioTV'] },
  { cat: 'Généralistes & Internationales', channels: ['Chaînes françaises HD/4K', 'Chaînes européennes 4K', 'Chaînes arabes 4K', 'Chaînes américaines 4K'] },
];

const comparisonRows = [
  { critere: 'Prix mensuel', iptv: 'Dès 3,75€/mois', cable: '~25-40€/mois', satellite: '~30-50€/mois' },
  { critere: 'Installation', iptv: 'Immédiate (5 min)', cable: 'Technicien requis', satellite: 'Technicien + parabole' },
  { critere: 'Contenu 4K', iptv: '+22 000 chaînes + 8K', cable: 'Limité (quelques chaînes)', satellite: 'Limité (quelques chaînes)' },
  { critere: 'Engagement', iptv: 'Sans engagement', cable: '12-24 mois', satellite: '12-24 mois' },
  { critere: 'Multi-appareils', iptv: true, cable: false, satellite: false },
  { critere: 'VOD incluse', iptv: '+160 000 contenus', cable: 'Option payante', satellite: 'Option payante' },
];

const plans = [
  { name: 'Bronze', duration: '3 mois', price: '22,99€', href: '/commander/bronze' },
  { name: 'Silver', duration: '6 mois', price: '34,99€', href: '/commander/silver' },
  { name: 'Gold', duration: '12 mois', price: '44,99€', href: '/commander/gold', popular: true },
  { name: 'Diamond', duration: '24 mois', price: '74,99€', href: '/commander/diamond' },
];

export default function IPTV4KPage() {
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
          { name: 'IPTV 4K France', href: '/iptv-4k' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="IPTV 4K & 8K"
          title="IPTV 4K en France —"
          titleHighlight="Qualité Cinéma sur Tous Vos Appareils"
          subtitle="ClarioTV propose des chaînes en HD, 4K et 8K pour une expérience télévisuelle sans compromis. Compatible avec tous les appareils 4K du marché."
        />

        {/* Section 1 — Qu'est-ce que l'IPTV 4K */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce que l&apos;IPTV 4K ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              L&apos;IPTV 4K désigne la diffusion de chaînes de télévision et de contenus vidéo
              en résolution Ultra HD (UHD) via internet. La résolution 4K correspond à
              3840×2160 pixels, soit quatre fois plus de détails qu&apos;une image Full HD
              (1920×1080). Le résultat : des images d&apos;une netteté exceptionnelle, des couleurs
              plus riches grâce au HDR, et une profondeur visuelle proche de l&apos;expérience
              cinéma.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Par rapport à la HD classique (720p ou 1080p), la 4K offre un niveau de détail
              incomparable sur les grands écrans. Les textures, les visages et les paysages
              apparaissent avec une précision impressionnante. Sur un écran de 55 pouces et plus,
              la différence est immédiatement perceptible.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              ClarioTV va encore plus loin en proposant des flux en{' '}
              <strong style={{ color: 'var(--color-ink)' }}>8K (7680×4320 pixels)</strong> — la
              résolution la plus haute disponible, idéale pour les écrans de 65 pouces et plus.
              Tous nos abonnements (Bronze, Silver, Gold, Diamond) incluent l&apos;accès aux
              chaînes HD, 4K et 8K sans surcoût. Découvrez notre{' '}
              <Link
                href="/abonnements/premium"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                offre premium
              </Link>{' '}
              pour la meilleure expérience 4K/8K.
            </p>
          </div>
        </section>

        {/* Section 2 — Appareils compatibles */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Quels Appareils Supportent l&apos;IPTV 4K ?
            </h2>
            <div className="flex flex-col gap-4">
              {devices.map((d, idx) => (
                <div
                  key={d.title}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-display font-bold text-base mb-2 flex items-center gap-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        backgroundColor: 'var(--color-lime)',
                        color: 'var(--color-dark)',
                      }}
                    >
                      {idx + 1}
                    </span>
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              Pour le détail de la configuration sur chaque appareil, consultez notre{' '}
              <Link
                href="/meilleure-application-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guide des meilleures applications IPTV
              </Link>{' '}
              et notre{' '}
              <Link
                href="/guide-iptv/installation-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                guide d&apos;installation complet
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 3 — Connexion internet */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Quelle Connexion Internet pour l&apos;IPTV 4K ?
            </h2>
            <div className="overflow-x-auto rounded-xl mb-6" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Qualité', 'Débit minimal', 'Type de connexion'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {speedRows.map((row, idx) => (
                    <tr
                      key={row.quality}
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-card)' : 'var(--color-surface-alt)',
                        borderTop: '1px solid var(--color-border)',
                      }}
                    >
                      <td
                        className="px-4 py-3 font-medium"
                        style={{
                          color: row.quality.includes('4K') ? 'var(--color-ink)' : 'var(--color-ink-light)',
                          fontWeight: row.quality.includes('4K') ? 600 : 400,
                        }}
                      >
                        {row.quality}
                      </td>
                      <td
                        className="px-4 py-3 font-semibold"
                        style={{ color: 'var(--color-lime)' }}
                      >
                        {row.speed}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--color-ink-light)' }}>
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                border: '2px solid var(--color-lime)',
                backgroundColor: 'var(--color-lime-soft)',
              }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>
                Conseils pour optimiser votre connexion IPTV 4K :
              </p>
              <ul className="flex flex-col gap-1">
                {[
                  'Utilisez la bande 5 GHz de votre Wi-Fi plutôt que la 2,4 GHz pour moins d\'interférences',
                  'Rapprochez votre appareil du routeur ou utilisez un câble Ethernet pour une stabilité maximale',
                  'Évitez les téléchargements en parallèle lors du visionnage en 4K',
                  'Redémarrez votre routeur régulièrement pour maintenir des performances optimales',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-lime)' }} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 — Chaînes 4K disponibles */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Les Chaînes 4K Disponibles avec ClarioTV
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {channels4K.map((cat) => (
                <div
                  key={cat.cat}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-display font-bold text-base mb-4"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {cat.cat}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {cat.channels.map((ch) => (
                      <li
                        key={ch}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-lime)' }}
                        />
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              Le catalogue de chaînes 4K est mis à jour régulièrement. Notre équipe ajoute
              constamment de nouvelles chaînes Ultra HD pour enrichir votre expérience. Le
              catalogue complet est disponible sur notre{' '}
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

        {/* Section 5 — IPTV vs câble vs satellite */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              IPTV 4K vs Câble 4K vs Satellite 4K — Comparaison
            </h2>
            <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Critère', 'IPTV ClarioTV', 'Câble (Freebox/SFR)', 'Satellite (Canal+)'].map((h, i) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: i === 1 ? 'var(--color-lime)' : 'var(--color-surface)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
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
                      {[row.iptv, row.cable, row.satellite].map((val, vi) => (
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
            <p className="mt-4 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              L&apos;IPTV s&apos;impose comme la solution la plus flexible et la plus économique
              pour accéder au 4K. Sans installation technique, sans engagement et à un prix
              bien inférieur aux offres câble et satellite, ClarioTV offre un catalogue 4K bien
              plus riche. Comparez nos offres avec le{' '}
              <Link
                href="/meilleur-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                comparatif des meilleurs IPTV France
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 6 — Commander */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-4"
              style={{ color: 'var(--color-ink)' }}
            >
              Commander Votre Abonnement IPTV 4K
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Tous nos abonnements incluent l&apos;accès aux chaînes HD, 4K et 8K. Choisissez
              la durée qui vous convient le mieux. Plus l&apos;abonnement est long, meilleur est
              le rapport qualité/prix.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: plan.popular ? '2px solid var(--color-lime)' : '1px solid var(--color-border)',
                    borderRadius: 16,
                    padding: 20,
                    position: 'relative',
                  }}
                >
                  {plan.popular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: 'var(--color-lime)',
                        color: 'var(--color-dark)',
                      }}
                    >
                      POPULAIRE
                    </span>
                  )}
                  <p
                    className="font-display font-bold text-lg mb-1"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {plan.name}
                  </p>
                  <p className="text-xs mb-3" style={{ color: 'var(--color-ink-light)' }}>
                    {plan.duration}
                  </p>
                  <p
                    className="font-display font-extrabold text-2xl mb-4"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    {plan.price}
                  </p>
                  <Link
                    href={plan.href}
                    className="block text-center text-sm font-bold py-2 rounded-lg"
                    style={{
                      backgroundColor: plan.popular ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: plan.popular ? 'var(--color-dark)' : 'var(--color-ink)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    Commander
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-center" style={{ color: 'var(--color-ink-light)' }}>
              Tous les plans incluent : +22 000 chaînes · HD/4K/8K · AntiFreeze 10.0 · Support WhatsApp 24/7 · Essai gratuit 24h disponible
            </p>
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Questions Fréquentes — IPTV 4K
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
                { href: '/abonnements/premium', label: 'Offre Premium 4K/8K' },
                { href: '/meilleure-application-iptv', label: 'Meilleures apps IPTV' },
                { href: '/guide-iptv/installation-iptv', label: 'Guide installation' },
                { href: '/abonnements', label: 'Tous les abonnements' },
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
