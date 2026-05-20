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
  title: 'Guía IPTV España : Todo sobre IPTV en 2026 | VivaceTV',
  description:
    'Guía completa sobre IPTV en España: cómo funciona, instalación paso a paso, canales disponibles, mejores aplicaciones y legalidad. Todo lo que necesitáis saber antes de suscribiros.',
  keywords: [
    'guía IPTV',
    'guía IPTV España',
    'cómo funciona IPTV',
    'instalación IPTV',
    'IPTV legal España',
    'canales IPTV',
    'aplicación IPTV',
    'IPTV en PC',
    'servidor IPTV',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv` },
  openGraph: {
    title: 'Guía IPTV España : Todo sobre IPTV en 2026 | VivaceTV',
    description:
      'Guía completa sobre IPTV: funcionamiento, instalación, aplicaciones, canales y legalidad en España.',
    url: `${siteConfig.url}/guia-iptv`,
    type: 'website',
  },
};

const guides = [
  {
    slug: 'comment-fonctionne-iptv',
    icon: <BookOpen size={22} aria-hidden="true" />,
    label: 'Las bases',
    title: '¿Cómo funciona el IPTV?',
    description:
      'Entender el IPTV, la diferencia con el cable o el satélite, y todo lo necesario para empezar.',
    readTime: '5 min',
  },
  {
    slug: 'installation-iptv',
    icon: <Download size={22} aria-hidden="true" />,
    label: 'Instalación',
    title: 'Guía de instalación IPTV',
    description:
      'Instalación paso a paso en Android TV, Firestick, Smart TV Samsung/LG, PC e iPhone.',
    readTime: '7 min',
  },
  {
    slug: 'iptv-sur-pc',
    icon: <Monitor size={22} aria-hidden="true" />,
    label: 'PC y Mac',
    title: 'IPTV en PC: todos los métodos',
    description:
      'VLC, IPTV Smarters Web, Kodi — las mejores formas de ver IPTV en ordenador.',
    readTime: '5 min',
  },
  {
    slug: 'application-iptv-android',
    icon: <Smartphone size={22} aria-hidden="true" />,
    label: 'Android',
    title: 'Mejores aplicaciones IPTV Android',
    description:
      'TiviMate, IPTV Smarters Pro, Perfect Player — comparativa de las mejores apps Android en 2026.',
    readTime: '6 min',
  },
  {
    slug: 'iptv-chaine',
    icon: <Tv2 size={22} aria-hidden="true" />,
    label: 'Canales',
    title: 'Canales IPTV disponibles',
    description:
      '+22.000 canales españoles, internacionales y deportivos — todo lo que está incluido con VivaceTV.',
    readTime: '4 min',
  },
  {
    slug: 'serveur-iptv',
    icon: <Layers size={22} aria-hidden="true" />,
    label: 'Infraestructura',
    title: '¿Qué es un servidor IPTV?',
    description:
      'Cómo elegir un buen servidor IPTV: uptime, anti-freeze, CDN e indicadores de calidad.',
    readTime: '5 min',
  },
  {
    slug: 'iptv-amende',
    icon: <Shield size={22} aria-hidden="true" />,
    label: 'Legalidad',
    title: 'IPTV ilegal en España: riesgos y sanciones',
    description:
      'Qué dice la ley española sobre IPTV, los riesgos para los usuarios y cómo mantenerse en la legalidad.',
    readTime: '6 min',
  },
];

export default function GuideIptvPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="GUÍA IPTV"
          title="Todo sobre"
          titleHighlight="IPTV en España"
          subtitle="Guías prácticas, consejos de instalación y respuestas a todas vuestras preguntas sobre IPTV — redactadas por expertos para ayudaros a empezar con total confianza."
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
              ¿Qué es el IPTV?
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <p>
                El IPTV (Internet Protocol Television) es una tecnología que permite ver canales de televisión en directo,
                películas y series a través de vuestra conexión a internet, sin antena ni satélite. A diferencia de la
                televisión clásica, el IPTV emite los flujos de vídeo en tiempo real gracias a los protocolos de internet,
                lo que ofrece una calidad de imagen superior y una flexibilidad total en vuestros dispositivos: Smart TV,
                smartphone, tableta, PC, Fire TV Stick o caja Android.
              </p>
              <p>
                Nuestras guías a continuación cubren todos los aspectos del IPTV en España: desde el funcionamiento técnico
                hasta las mejores aplicaciones, pasando por la instalación paso a paso y las cuestiones de legalidad. Tanto
                si descubrís el IPTV por primera vez como si queréis optimizar vuestra configuración, aquí encontraréis todas
                las respuestas necesarias para disfrutar de una experiencia televisiva moderna y sin restricciones.
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
              Todas nuestras guías IPTV
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guia-iptv/${guide.slug}`}
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
                    Leer la guía
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
              ¿Listos para pasaros al IPTV?
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Recorred nuestras guías y elegid el plan VivaceTV que se adapte a vuestras necesidades.
              Nuestro equipo está disponible 24h/24 por WhatsApp para acompañaros.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center justify-center py-3.5 px-8 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Ver los planes
              </Link>
              <Link
                href="/guia-iptv/comment-fonctionne-iptv"
                className="inline-flex items-center justify-center py-3.5 px-8 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-75"
                style={{ color: 'var(--color-ink)', border: '1.5px solid var(--color-border)' }}
              >
                Empezar por las bases
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
