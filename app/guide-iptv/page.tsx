import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import {
  BookOpen,
  Monitor,
  Download,
  Shield,
  Tv2,
  Layers,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Guide IPTV France : Tout Savoir sur l'IPTV en 2026 | ClarioTV",
  description:
    "Guide complet sur l'IPTV en France : comment ça marche, installation étape par étape, chaînes disponibles, meilleures applications et légalité. Tout ce qu'il faut savoir avant de s'abonner.",
  keywords: [
    'guide IPTV',
    'guide IPTV France',
    'comment fonctionne IPTV',
    'installation IPTV',
    'IPTV légal France',
    'chaînes IPTV',
    'application IPTV',
    'IPTV sur PC',
    'serveur IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/guide-iptv` },
  openGraph: {
    title: "Guide IPTV France : Tout Savoir sur l'IPTV en 2026 | ClarioTV",
    description:
      "Guide complet sur l'IPTV : fonctionnement, installation, applications, chaînes et légalité en France.",
    url: `${siteConfig.url}/guide-iptv`,
    type: 'website',
  },
};

const guides = [
  {
    slug: 'comment-fonctionne-iptv',
    icon: <BookOpen size={22} aria-hidden="true" />,
    label: 'Les bases',
    title: "Comment fonctionne l'IPTV ?",
    description:
      "Comprendre l'IPTV, la différence avec le câble ou le satellite, et tout ce qu'il faut pour commencer.",
    readTime: '5 min',
  },
  {
    slug: 'installation-iptv',
    icon: <Download size={22} aria-hidden="true" />,
    label: 'Installation',
    title: "Guide d'installation IPTV",
    description:
      'Installation pas à pas sur Android TV, Firestick, Smart TV Samsung/LG, PC et iPhone.',
    readTime: '7 min',
  },
  {
    slug: 'iptv-sur-pc',
    icon: <Monitor size={22} aria-hidden="true" />,
    label: 'PC & Mac',
    title: "IPTV sur PC : toutes les méthodes",
    description:
      "VLC, IPTV Smarters Web, Kodi — les meilleures façons de regarder l'IPTV sur ordinateur.",
    readTime: '5 min',
  },
  {
    slug: 'application-iptv-android',
    icon: <Smartphone size={22} aria-hidden="true" />,
    label: 'Android',
    title: 'Meilleures applications IPTV Android',
    description:
      'TiviMate, IPTV Smarters Pro, Perfect Player — comparatif des meilleures apps Android en 2025.',
    readTime: '6 min',
  },
  {
    slug: 'iptv-chaine',
    icon: <Tv2 size={22} aria-hidden="true" />,
    label: 'Chaînes',
    title: 'Chaînes IPTV disponibles',
    description:
      '20 000+ chaînes françaises, internationales et sportives — tout ce qui est inclus avec ClarioTV.',
    readTime: '4 min',
  },
  {
    slug: 'serveur-iptv',
    icon: <Layers size={22} aria-hidden="true" />,
    label: 'Infrastructure',
    title: "Qu'est-ce qu'un serveur IPTV ?",
    description:
      "Comment choisir un bon serveur IPTV : uptime, anti-freeze, CDN et indicateurs de qualité.",
    readTime: '5 min',
  },
  {
    slug: 'iptv-amende',
    icon: <Shield size={22} aria-hidden="true" />,
    label: 'Légalité',
    title: "IPTV illégal en France : risques et amendes",
    description:
      "Ce que dit la loi française sur l'IPTV, les risques pour les utilisateurs et comment rester dans la légalité.",
    readTime: '6 min',
  },
];

export default function GuideIptvPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Guide IPTV', href: '/guide-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="GUIDE IPTV"
          title="Tout savoir sur"
          titleHighlight="l'IPTV en France"
          subtitle="Guides pratiques, conseils d'installation et réponses à toutes vos questions sur l'IPTV — rédigés par des experts pour vous aider à démarrer en toute confiance."
        />

        {/* ── Intro IPTV ──────────────────────────────────────────────── */}
        <section
          className="py-12 lg:py-16"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="intro-iptv-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="intro-iptv-heading"
              className="font-display font-bold text-2xl lg:text-3xl mb-5"
              style={{ color: 'var(--color-ink)' }}
            >
              Qu&apos;est-ce que l&apos;IPTV ?
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <p>
                L&apos;IPTV (Internet Protocol Television) est une technologie qui permet de regarder des chaînes de télévision en direct, des films et des séries via votre connexion internet, sans antenne ni satellite. Contrairement à la télévision classique, l&apos;IPTV diffuse les flux vidéo en temps réel grâce à des protocoles internet, ce qui offre une qualité d&apos;image supérieure et une flexibilité totale sur vos appareils : Smart TV, smartphone, tablette, PC, Fire TV Stick ou box Android.
              </p>
              <p>
                Nos guides ci-dessous couvrent tous les aspects de l&apos;IPTV en France : du fonctionnement technique aux meilleures applications, en passant par l&apos;installation étape par étape et les questions de légalité. Que vous découvriez l&apos;IPTV pour la première fois ou que vous souhaitiez optimiser votre configuration, vous trouverez ici toutes les réponses nécessaires pour profiter d&apos;une expérience télévisuelle moderne et sans contrainte.
              </p>
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="guides-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="guides-heading"
              className="font-display font-bold text-2xl lg:text-3xl mb-10"
              style={{ color: 'var(--color-ink)' }}
            >
              Tous nos guides IPTV
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guide-iptv/${guide.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-200 hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {/* Icon + label */}
                  <div className="flex items-center justify-between">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                      style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
                    >
                      {guide.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: 'var(--color-surface-alt)', color: 'var(--color-gray-600)' }}
                      >
                        {guide.label}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--color-gray-400)' }}>
                        {guide.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="font-display font-bold text-lg mb-2 group-hover:opacity-75 transition-opacity"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {guide.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                      {guide.description}
                    </p>
                  </div>

                  {/* Read link */}
                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold mt-1 group-hover:gap-2.5 transition-all"
                    style={{ color: 'var(--color-lime)' }}
                  >
                    Lire le guide
                    <ChevronRight size={15} aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick-start CTA section */}
        <section
          className="py-14 lg:py-16"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-4"
              style={{ color: 'var(--color-ink)' }}
            >
              Prêt à passer à l&apos;IPTV ?
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Parcourez nos guides, puis choisissez le forfait ClarioTV qui correspond à vos besoins.
              Notre équipe est disponible 24h/24 via WhatsApp pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/abonnements"
                className="inline-flex items-center justify-center py-3.5 px-8 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Voir les abonnements
              </Link>
              <Link
                href="/guide-iptv/comment-fonctionne-iptv"
                className="inline-flex items-center justify-center py-3.5 px-8 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-75"
                style={{ color: 'var(--color-ink)', border: '1.5px solid var(--color-border)' }}
              >
                Commencer par les bases
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
