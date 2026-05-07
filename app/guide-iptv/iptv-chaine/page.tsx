import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Chaînes IPTV : Toutes les Chaînes Disponibles avec ClarioTV | ClarioTV',
  description:
    "Quelles chaînes sont disponibles en IPTV ? +22 000 chaînes : françaises (TF1, M6, Canal+), sports (beIN, RMC), internationales, arabes. Liste complète ClarioTV.",
  keywords: [
    'iptv chaine',
    'chaine iptv',
    'liste chaine iptv',
    'chaine française iptv',
    'chaine arabe iptv',
    'chaine sport iptv',
    'bein sports iptv',
    'canal plus iptv',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/iptv-chaine` },
  openGraph: {
    title: 'Chaînes IPTV : Toutes les Chaînes Disponibles avec ClarioTV | ClarioTV',
    description:
      "Découvrez les +22 000 chaînes disponibles avec ClarioTV : françaises, sportives, internationales, arabes et médiathèque VOD.",
    url: `${siteConfig.url}/guide-iptv/iptv-chaine`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "Combien de chaînes françaises sont disponibles en IPTV ?",
    answer:
      "ClarioTV propose l'intégralité des chaînes françaises gratuites (TF1, France 2, France 3, France 4, France 5, M6, C8, TMC, TFX, W9, Arte, LCI, BFM TV, CNews, etc.) et des chaînes payantes (Canal+, Canal+ Cinéma, Canal+ Sport, beIN Sports 1/2/3, RMC Sport 1/2, OCS, etc.). Au total, plus de 500 chaînes françaises sont disponibles.",
  },
  {
    question: "Est-ce que Canal+ est disponible en IPTV ?",
    answer:
      "Oui, Canal+ et ses déclinaisons (Canal+ Cinéma, Canal+ Séries, Canal+ Sport) font partie des chaînes disponibles sur ClarioTV. Vous accédez à ces chaînes premium sans avoir à souscrire un abonnement Canal+ séparé — elles sont incluses dans votre abonnement ClarioTV.",
  },
  {
    question: "Y a-t-il des chaînes arabes disponibles en IPTV ?",
    answer:
      "Oui, ClarioTV propose un vaste catalogue de chaînes arabes : MBC 1, MBC 2, MBC Drama, Al Jazeera, Rotana, Bein Sport Arabic, Dubai TV, Abu Dhabi TV, et des centaines d'autres chaînes du Moyen-Orient et d'Afrique du Nord. Le pack arabophone est l'un des plus complets du marché.",
  },
  {
    question: "L'IPTV inclut-il des chaînes de sport ?",
    answer:
      "Oui, les chaînes sportives sont l'un des points forts de l'IPTV. ClarioTV inclut beIN Sports 1, 2 et 3, RMC Sport 1 et 2, Canal+ Sport, Eurosport 1 et 2, L'Équipe TV, mais aussi des chaînes sportives internationales comme Sky Sports, BT Sport, DAZN et des chaînes dédiées à la Premier League, la Serie A, la Bundesliga et la NBA.",
  },
  {
    question: "Puis-je voir la liste complète des chaînes avant de m'abonner ?",
    answer:
      "Oui, ClarioTV peut vous fournir une liste de chaînes représentative sur simple demande via WhatsApp avant votre souscription. Nous proposons également un test gratuit de 24 heures pour que vous puissiez vérifier par vous-même la disponibilité et la qualité des chaînes qui vous intéressent.",
  },
  {
    question: "Les chaînes IPTV sont-elles en HD ou en 4K ?",
    answer:
      "La majorité des chaînes ClarioTV est disponible en HD (1080p). Les grandes chaînes sportives et les chaînes premium (Canal+, beIN Sports) sont disponibles en 4K UHD. Les chaînes locales et étrangères moins récentes peuvent être en 720p ou Full HD. Le catalogue 4K s'élargit continuellement.",
  },
];

const frenchChannels = [
  { category: 'Chaînes gratuites TNT', channels: ['TF1', 'France 2', 'France 3', 'France 4', 'France 5', 'M6', 'Arte', 'C8', 'W9', 'TMC', 'TFX', 'TPMP TV', '6ter', 'Gulli', 'France Ô'] },
  { category: "Chaînes d'info", channels: ['BFM TV', 'CNews', 'LCI', 'France Info TV', 'BFM Business', 'RMC Découverte'] },
  { category: 'Chaînes premium', channels: ['Canal+', 'Canal+ Cinéma', 'Canal+ Séries', 'OCS Max', 'OCS City', 'OCS Choc', 'OCS Géants'] },
];

const sportChannels = [
  'beIN Sports 1', 'beIN Sports 2', 'beIN Sports 3',
  'RMC Sport 1', 'RMC Sport 2',
  'Canal+ Sport', 'Canal+ Sport 2', 'Canal+ Sport 3',
  'Eurosport 1', 'Eurosport 2', "L'Équipe TV",
  'Sky Sports Main Event', 'Sky Sports Football',
  'BT Sport 1', 'BT Sport 2', 'BT Sport 3',
  'DAZN', 'NBA TV', 'NFL Network',
];

const internationalPacks = [
  {
    region: 'Arabophone',
    channels: '+500 chaînes',
    examples: 'MBC 1/2/Drama/4, Al Jazeera, Rotana, Bein Sport Arabic, Dubai TV, Abu Dhabi TV',
  },
  {
    region: 'Anglophone (UK/US)',
    channels: '+300 chaînes',
    examples: 'BBC One/Two/Three, ITV, Channel 4, Sky One, Sky Atlantic, HBO, CNN, Fox News',
  },
  {
    region: 'Hispanophone',
    channels: '+200 chaînes',
    examples: 'Antena 3, Telecinco, La 1, La 2, TV3 Cataluña, Canal Sur, Univision, Telemundo',
  },
  {
    region: 'Italophone',
    channels: '+150 chaînes',
    examples: 'RAI 1/2/3, Canale 5, Italia 1, Rete 4, Sky Italia, Mediaset Premium',
  },
  {
    region: 'Germanophone',
    channels: '+100 chaînes',
    examples: 'ARD, ZDF, RTL, Sat.1, ProSieben, VOX, ORF 1/2, SRF 1/2',
  },
  {
    region: 'Turcophone',
    channels: '+100 chaînes',
    examples: 'TRT 1, Kanal D, ATV, Fox TV Turkey, Show TV, Star TV',
  },
];

export default function IPTVChainePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: 'Chaînes IPTV', href: '/guide-iptv/iptv-chaine' },
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
          label="CATALOGUE CHAÎNES"
          title="Chaînes IPTV :"
          titleHighlight="Toutes les Chaînes Disponibles avec ClarioTV"
          subtitle="+22 000 chaînes françaises, sportives et internationales. Découvrez l'intégralité du catalogue ClarioTV et comment l'IPTV dépasse largement le câble ou le satellite."
        />

        {/* Section 1 — Vue d'ensemble */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Combien de Chaînes Propose l'IPTV ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un abonnement IPTV offre un catalogue de chaînes sans commune mesure avec les offres
              traditionnelles. Là où une box internet classique propose 200 à 400 chaînes et un
              bouquet satellite premium environ 500 à 1 000 chaînes, ClarioTV met à disposition
              <strong style={{ color: 'var(--color-ink)' }}> plus de 22 000 chaînes</strong> en live,
              issues de plus de 100 pays.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Cette richesse s'explique par la nature même de l'IPTV : contrairement au satellite
              qui est limité par sa bande de fréquences, l'IPTV est limité uniquement par la capacité
              des serveurs — et ClarioTV a investi massivement dans une infrastructure capable de
              maintenir simultanément ces 22 000 flux 24h/24.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { num: '+22 000', label: 'Chaînes live' },
                { num: '+160 000', label: 'Films & séries VOD' },
                { num: '+100', label: 'Pays représentés' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '2px solid var(--color-lime)',
                  }}
                >
                  <p
                    className="font-display font-bold text-3xl mb-1"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-ink-light)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Chaînes françaises */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Chaînes Françaises Disponibles en IPTV
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              L'intégralité des chaînes françaises est disponible avec ClarioTV, des chaînes gratuites
              de la TNT aux bouquets premium. Voici un aperçu :
            </p>
            <div className="flex flex-col gap-6">
              {frenchChannels.map((group) => (
                <div
                  key={group.category}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-semibold text-base mb-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: 'var(--color-lime-soft)',
                          color: 'var(--color-ink)',
                          border: '1px solid var(--color-border)',
                        }}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm" style={{ color: 'var(--color-ink-light)' }}>
              Cette liste est non exhaustive. ClarioTV propose également des chaînes régionales
              françaises, des chaînes thématiques (cuisine, voyage, documentaires, musique) et
              des chaînes locales.
            </p>
          </div>
        </section>

        {/* Section 3 — International */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Chaînes Internationales : Un Catalogue Mondial
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              ClarioTV est particulièrement adapté aux foyers multiculturels en France. Nos packs
              internationaux couvrent les grandes communautés présentes sur le territoire français :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {internationalPacks.map((pack) => (
                <div
                  key={pack.region}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {pack.region}
                    </h3>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                    >
                      {pack.channels}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {pack.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Sport */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Chaînes Sport : Les Meilleures Chaînes Sportives en IPTV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Le sport est la grande force de l'IPTV. Accédez aux plus grandes compétitions mondiales
              — Ligue des Champions, Premier League, Formule 1, Roland-Garros, NBA, NFL — sans
              multiplier les abonnements. Voici les chaînes sportives disponibles avec ClarioTV :
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {sportChannels.map((ch) => (
                <span
                  key={ch}
                  className="text-sm px-3 py-1.5 rounded-lg font-medium"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    color: 'var(--color-ink)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Notre technologie AntiFreeze 10.0 garantit un streaming sans interruption même lors
              des pics de trafic — finales de Ligue des Champions, Coupe du Monde, Roland-Garros.
              Vous ne manquerez plus jamais un but ou un point décisif à cause d'un freeze.
            </p>
          </div>
        </section>

        {/* Section 5 — VOD */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Médiathèque VOD et Replay : +160 000 Contenus
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En plus des chaînes live, ClarioTV propose une médiathèque VOD (Video on Demand) de
              <strong style={{ color: 'var(--color-ink)' }}> plus de 160 000 films et séries</strong>,
              accessible à tout moment. C'est l'équivalent de Netflix, Amazon Prime et Disney+ réunis
              — accessible depuis la même interface que vos chaînes live.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le catalogue VOD est organisé par genres (action, comédie, drame, science-fiction,
              documentaires), par langue et par nouveautés. Les films récents — souvent dans les
              semaines suivant leur sortie en salle — sont régulièrement ajoutés.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Le replay vous permet de revoir les émissions diffusées dans les 7 derniers jours sur
              les principales chaînes françaises et internationales. Plus besoin de programmer
              l'enregistrement — tout est disponible à la demande.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/abonnements"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Accéder au catalogue complet →
              </Link>
              <Link
                href="/commander/gold"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  backgroundColor: 'var(--color-card)',
                }}
              >
                Essai gratuit 24h →
              </Link>
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
              Questions Fréquentes — Chaînes IPTV
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
                { href: '/iptv-4k', label: 'IPTV 4K' },
                { href: '/meilleur-iptv', label: 'Comparatif IPTV' },
                { href: '/guide-iptv/comment-fonctionne-iptv', label: "Comment fonctionne l'IPTV" },
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
