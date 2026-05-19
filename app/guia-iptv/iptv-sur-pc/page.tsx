import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: "IPTV sur PC : Les Meilleures Méthodes pour Regarder l'IPTV sur Ordinateur | VivaceTV",
  description:
    "Comment regarder l'IPTV sur PC Windows et Mac ? Guide complet : VLC Media Player, IPTV Smarters Web, Kodi. Configuration et réglages pour la meilleure qualité.",
  keywords: [
    'iptv sur pc',
    'iptv pc',
    'iptv sur ordinateur',
    'iptv vlc',
    'iptv kodi',
    'iptv smarters pc',
    'regarder iptv ordinateur',
    'iptv windows',
    'iptv mac',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv/iptv-sur-pc` },
  openGraph: {
    title: "IPTV sur PC : Les Meilleures Méthodes pour Regarder l'IPTV sur Ordinateur | VivaceTV",
    description:
      "Tout pour regarder l'IPTV sur votre ordinateur Windows ou Mac : VLC, Kodi, IPTV Smarters Web. Méthodes testées et configuration optimale.",
    url: `${siteConfig.url}/guide-iptv/iptv-sur-pc`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "VLC Media Player est-il gratuit pour regarder l'IPTV ?",
    answer:
      "Oui, VLC Media Player est entièrement gratuit et open source. Il est disponible pour Windows, Mac et Linux. C'est la solution la plus simple pour démarrer avec l'IPTV sur PC : il suffit d'ouvrir votre URL M3U depuis le menu Média > Ouvrir un fichier réseau. Aucune configuration complexe n'est nécessaire.",
  },
  {
    question: "L'IPTV fonctionne-t-il sur Mac ?",
    answer:
      "Oui, l'IPTV fonctionne parfaitement sur Mac. VLC est disponible pour macOS et fonctionne identiquement à la version Windows. Kodi est également disponible pour Mac. IPTV Smarters dispose d'une version web accessible depuis n'importe quel navigateur, y compris Safari sur Mac.",
  },
  {
    question: "Quelle est la meilleure application IPTV pour PC ?",
    answer:
      "Pour les débutants, VLC est la solution la plus simple. Pour une interface complète avec EPG et VOD, Kodi avec le plugin IPTV Simple Client est la meilleure option. Pour une expérience intermédiaire sans installation complexe, un lecteur IPTV web comme IPTV Smarters Web est une excellente alternative.",
  },
  {
    question: "L'IPTV dans le navigateur est-il possible ?",
    answer:
      "Oui, certains services IPTV proposent un lecteur web accessible directement depuis votre navigateur (Chrome, Firefox, Edge). VivaceTV peut vous fournir les informations nécessaires pour accéder à un player web si disponible. Cette solution ne nécessite aucune installation et fonctionne sur tous les systèmes d'exploitation.",
  },
  {
    question: "Y a-t-il du décalage (latence) avec l'IPTV sur PC ?",
    answer:
      "Un léger décalage de quelques secondes est normal sur les chaînes live en IPTV — c'est inhérent à la technologie de streaming. VLC permet d'ajuster le cache (buffer) dans les paramètres réseau pour trouver le bon équilibre entre fluidité et latence. Pour les événements sportifs, un câble Ethernet plutôt que le Wi-Fi réduit significativement ce décalage.",
  },
];

const methods = [
  {
    id: 'vlc',
    title: 'Méthode 1 : VLC Media Player',
    badge: 'RECOMMANDÉ DÉBUTANTS',
    badgeColor: 'var(--color-lime)',
    pros: ['100% gratuit', 'Disponible Windows/Mac/Linux', 'Aucune configuration complexe', 'Codec universel'],
    cons: ['Interface basique', "Pas d'EPG intégré", 'Navigation dans les chaînes limitée'],
    steps: [
      "Téléchargez VLC depuis videolan.org (gratuit, sécurisé)",
      "Lancez VLC et allez dans Média > Ouvrir un fichier réseau",
      "Collez votre URL M3U VivaceTV dans le champ URL et validez",
      "La liste de chaînes s'ouvre dans la fenêtre Playlist (Affichage > Playlist)",
      "Double-cliquez sur une chaîne pour démarrer la lecture",
    ],
  },
  {
    id: 'smarters',
    title: 'Méthode 2 : IPTV Smarters Web',
    badge: 'INTERFACE COMPLÈTE',
    badgeColor: 'var(--color-ink)',
    pros: ["Interface moderne avec EPG", 'Accessible en navigateur', 'VOD et replay intégrés', 'Multi-plateformes'],
    cons: ['Connexion internet requise', 'Performances dépendent du navigateur'],
    steps: [
      "Accédez à l'URL web de votre lecteur IPTV Smarters",
      "Sélectionnez 'Xtream Codes' ou 'M3U URL' selon vos identifiants",
      "Entrez vos identifiants VivaceTV et connectez-vous",
      "Naviguez entre Live TV, Films et Séries depuis l'interface",
      "Utilisez l'EPG intégré pour voir la grille des programmes",
    ],
  },
  {
    id: 'kodi',
    title: 'Méthode 3 : Kodi avec IPTV Simple Client',
    badge: 'PLUS PUISSANT',
    badgeColor: 'var(--color-gray-600)',
    pros: ['Interface TV professionnelle', 'EPG complet', 'Extensions et personnalisation', 'VOD et catch-up'],
    cons: ['Configuration plus complexe', 'Requiert une installation du plugin'],
    steps: [
      "Téléchargez et installez Kodi depuis kodi.tv (gratuit)",
      "Dans Kodi : Paramètres > Extensions > Installer depuis un dépôt",
      "Accédez à Extensions Kodi.tv > Extensions PVR clients > IPTV Simple Client",
      "Activez l'extension et entrez votre URL M3U dans la configuration",
      "Redémarrez Kodi — vos chaînes apparaissent dans la section TV",
    ],
  },
];

const settings = [
  {
    title: "Accélération matérielle (Hardware Decoding)",
    desc: "Activez le décodage matériel dans VLC (Outils > Préférences > Entrée / Codecs) pour utiliser votre carte graphique. Réduit la charge CPU et améliore la fluidité, en particulier pour la 4K.",
  },
  {
    title: "Taille du tampon réseau (Cache)",
    desc: "Dans VLC, augmentez la mise en cache réseau à 2000-3000 ms (Outils > Préférences > Tout > Entrée > Mise en cache). Réduit les interruptions mais augmente légèrement la latence.",
  },
  {
    title: "Résolution d'affichage",
    desc: "Pour la 4K, assurez-vous que votre moniteur supporte la résolution 3840×2160 et que votre connexion internet dépasse 25 Mbps. En dessous, préférez le Full HD (1080p).",
  },
  {
    title: "Connexion Ethernet vs Wi-Fi",
    desc: "Une connexion filaire RJ45 est toujours préférable au Wi-Fi pour l'IPTV sur PC. Elle offre une latence plus faible et une stabilité supérieure, essentielle pour les contenus 4K et les événements en direct.",
  },
];

export default function IPTVSurPCPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
          { name: 'IPTV sur PC', href: '/guide-iptv/iptv-sur-pc' },
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
          label="IPTV SUR ORDINATEUR"
          title="IPTV sur PC :"
          titleHighlight="Les Meilleures Méthodes"
          subtitle="Regardez l'IPTV sur votre ordinateur Windows ou Mac avec VLC, Kodi ou un lecteur web. Guide complet avec étapes détaillées et réglages optimaux."
        />

        {/* Section 1 — Pourquoi PC */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Pourquoi Regarder l'IPTV sur PC ?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Regarder l'IPTV sur votre ordinateur présente plusieurs avantages concrets. D'abord,
              votre PC est probablement déjà connecté en Ethernet — la connexion idéale pour un
              streaming stable et sans interruption. Ensuite, la puissance de calcul d'un ordinateur
              moderne gère facilement des flux 4K sans aucun signe de ralentissement.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Le PC offre également un contrôle plus précis grâce au clavier et à la souris,
              particulièrement utile pour naviguer dans de grandes listes de chaînes ou configurer
              des options avancées. Vous pouvez également afficher l'IPTV dans une fenêtre tout en
              continuant à utiliser d'autres applications en parallèle.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Enfin, si vous disposez d'un grand écran de moniteur ou d'un PC connecté à un
              téléviseur via HDMI, l'expérience est comparable à celle d'une Smart TV, avec en
              plus la flexibilité d'un ordinateur.
            </p>
          </div>
        </section>

        {/* Section 2-4 — Methods */}
        {methods.map((method, idx) => (
          <section
            key={method.id}
            className="py-16 lg:py-20"
            style={{
              backgroundColor: idx % 2 === 0 ? 'var(--color-surface-alt)' : 'var(--color-surface)',
            }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                    style={{
                      backgroundColor: method.badgeColor === 'var(--color-lime)' ? 'var(--color-lime)' : 'var(--color-surface-alt)',
                      color: method.badgeColor === 'var(--color-lime)' ? 'var(--color-dark)' : 'var(--color-ink-light)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {method.badge}
                  </span>
                  <h2
                    className="font-display font-bold text-2xl lg:text-3xl"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {method.title}
                  </h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-ink)' }}>
                    Avantages
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {method.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <span style={{ color: 'var(--color-lime)' }}>✓</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <h3 className="font-semibold text-sm mb-3" style={{ color: 'var(--color-ink)' }}>
                    Limites
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {method.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--color-ink-light)' }}
                      >
                        <span style={{ color: 'var(--color-gray-400)' }}>–</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="font-semibold text-base mb-4" style={{ color: 'var(--color-ink)' }}>
                Étapes de configuration
              </h3>
              <ol className="flex flex-col gap-3">
                {method.steps.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--color-ink-light)' }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-ink)' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}

        {/* Section 5 — Réglages */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Réglages Recommandés pour la Meilleure Performance
            </h2>
            <div className="flex flex-col gap-5">
              {settings.map((setting) => (
                <div
                  key={setting.title}
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
                    {setting.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {setting.desc}
                  </p>
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
              Questions Fréquentes — IPTV sur PC
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
                { href: '/guide-iptv/installation-iptv', label: "Guide d'installation" },
                { href: '/meilleure-application-iptv', label: 'Meilleures applications IPTV' },
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
