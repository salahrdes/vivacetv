import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Canales IPTV : Todos los Canales Disponibles con VivaceTV | VivaceTV',
  description:
    "¿Qué canales están disponibles en IPTV? +22.000 canales: españoles (La 1, Antena 3, Telecinco), deportes (DAZN, Movistar+), internacionales, árabes. Lista completa VivaceTV.",
  keywords: [
    'iptv canales',
    'canales iptv',
    'lista canales iptv',
    'canales españoles iptv',
    'canales arabes iptv',
    'canales deporte iptv',
    'dazn iptv',
    'movistar plus iptv',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/canales-iptv` },
  openGraph: {
    title: 'Canales IPTV : Todos los Canales Disponibles con VivaceTV | VivaceTV',
    description:
      "Descubrid los +22.000 canales disponibles con VivaceTV: españoles, deportivos, internacionales, árabes y mediateca VOD.",
    url: `${siteConfig.url}/guia-iptv/canales-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "¿Cuántos canales españoles están disponibles en IPTV?",
    answer:
      "VivaceTV ofrece la totalidad de los canales españoles en abierto (La 1, La 2, Antena 3, Telecinco, Cuatro, La Sexta, La 7, FDF, Neox, Energy, Divinity, Be Mad, etc.) y canales de pago (Movistar+, DAZN, LaLiga TV, etc.). En total, más de 500 canales españoles están disponibles.",
  },
  {
    question: "¿Está Movistar+ disponible en IPTV?",
    answer:
      "Sí, Movistar+ y sus canales (Movistar Cine, Movistar Series, Movistar Deportes) forman parte de los canales disponibles en VivaceTV. Accedéis a estos canales premium sin necesidad de suscribiros por separado a Movistar — están incluidos en vuestra suscripción VivaceTV.",
  },
  {
    question: "¿Hay canales árabes disponibles en IPTV?",
    answer:
      "Sí, VivaceTV ofrece un amplio catálogo de canales árabes: MBC 1, MBC 2, MBC Drama, Al Jazeera, Rotana, Bein Sport Arabic, Dubai TV, Abu Dhabi TV, y cientos de otros canales de Oriente Medio y el Norte de África. El paquete arabófono es uno de los más completos del mercado.",
  },
  {
    question: "¿El IPTV incluye canales deportivos?",
    answer:
      "Sí, los canales deportivos son uno de los puntos fuertes del IPTV. VivaceTV incluye DAZN, LaLiga TV, Movistar Deportes, Eurosport 1 y 2, beIN Sports, pero también canales deportivos internacionales como Sky Sports, BT Sport y canales dedicados a la Premier League, Serie A, Bundesliga y NBA.",
  },
  {
    question: "¿Puedo ver la lista completa de canales antes de suscribirme?",
    answer:
      "Sí, VivaceTV puede proporcionaros una lista de canales representativa bajo petición por WhatsApp antes de vuestra suscripción. También ofrecemos una prueba gratuita de 24 horas para que podáis comprobar por vosotros mismos la disponibilidad y la calidad de los canales que os interesan.",
  },
  {
    question: "¿Los canales IPTV están en HD o en 4K?",
    answer:
      "La mayoría de los canales VivaceTV están disponibles en HD (1080p). Los grandes canales deportivos y los canales premium (Movistar+, DAZN) están disponibles en 4K UHD. Los canales locales y extranjeros menos recientes pueden estar en 720p o Full HD. El catálogo 4K se amplía continuamente.",
  },
];

const spanishChannels = [
  { category: 'Canales en abierto TDT', channels: ['La 1', 'La 2', 'Antena 3', 'Telecinco', 'Cuatro', 'La Sexta', 'La 7', 'FDF', 'Neox', 'Energy', 'Divinity', 'Be Mad', 'Paramount Network', 'TRECE'] },
  { category: 'Canales de noticias', channels: ['24h (RTVE)', 'La Sexta Noticias 24h', 'Euronews España', 'CNN en Español', 'TVE Internacional', 'Canal 24 Horas'] },
  { category: 'Canales premium', channels: ['Movistar+', 'Movistar Cine', 'Movistar Series', 'DAZN', 'LaLiga TV', 'Canal+ España'] },
];

const sportChannels = [
  'DAZN 1', 'DAZN 2', 'DAZN 3',
  'LaLiga TV', 'LaLiga TV Bar',
  'Movistar Deportes', 'Movistar Deportes 2',
  'Eurosport 1', 'Eurosport 2', 'Canal+ Deportes',
  'Sky Sports Main Event', 'Sky Sports Football',
  'BT Sport 1', 'BT Sport 2', 'BT Sport 3',
  'beIN Sports', 'NBA TV', 'NFL Network',
];

const internationalPacks = [
  {
    region: 'Arabófono',
    channels: '+500 canales',
    examples: 'MBC 1/2/Drama/4, Al Jazeera, Rotana, Bein Sport Arabic, Dubai TV, Abu Dhabi TV',
  },
  {
    region: 'Anglófono (UK/US)',
    channels: '+300 canales',
    examples: 'BBC One/Two/Three, ITV, Channel 4, Sky One, Sky Atlantic, HBO, CNN, Fox News',
  },
  {
    region: 'Latinoamérica',
    channels: '+200 canales',
    examples: 'Televisa, TV Azteca, Canal 13, Univision, Telemundo, RCN, Caracol, Canal América',
  },
  {
    region: 'Italófono',
    channels: '+150 canales',
    examples: 'RAI 1/2/3, Canale 5, Italia 1, Rete 4, Sky Italia, Mediaset Premium',
  },
  {
    region: 'Germanófono',
    channels: '+100 canales',
    examples: 'ARD, ZDF, RTL, Sat.1, ProSieben, VOX, ORF 1/2, SRF 1/2',
  },
  {
    region: 'Turcófono',
    channels: '+100 canales',
    examples: 'TRT 1, Kanal D, ATV, Fox TV Turkey, Show TV, Star TV',
  },
];

export default function IPTVChainePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: 'Canales IPTV', href: '/guia-iptv/canales-iptv' },
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
          label="CATÁLOGO DE CANALES"
          title="Canales IPTV:"
          titleHighlight="Todos los Canales Disponibles con VivaceTV"
          subtitle="+22.000 canales españoles, deportivos e internacionales. Descubrid el catálogo completo VivaceTV y cómo el IPTV supera ampliamente al cable o al satélite."
        />

        {/* Section 1 — Visión general */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Cuántos Canales Ofrece el IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Una suscripción IPTV ofrece un catálogo de canales sin comparación con las ofertas
              tradicionales. Mientras que un operador de cable clásico propone entre 200 y 400 canales
              y un paquete de satélite premium entre 500 y 1.000 canales, VivaceTV pone a vuestra
              disposición <strong style={{ color: 'var(--color-ink)' }}>más de 22.000 canales</strong> en
              directo, procedentes de más de 100 países.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Esta riqueza se explica por la naturaleza del IPTV: a diferencia del satélite, limitado
              por su ancho de banda, el IPTV solo está limitado por la capacidad de los servidores —
              y VivaceTV ha invertido masivamente en una infraestructura capaz de mantener
              simultáneamente estos 22.000 flujos 24h/24.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { num: '+22.000', label: 'Canales en directo' },
                { num: '+160.000', label: 'Películas y series VOD' },
                { num: '+100', label: 'Países representados' },
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

        {/* Section 2 — Canales españoles */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Canales Españoles Disponibles en IPTV
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              La totalidad de los canales españoles está disponible con VivaceTV, desde los canales
              gratuitos de la TDT hasta los paquetes premium. Aquí tenéis una muestra:
            </p>
            <div className="flex flex-col gap-6">
              {spanishChannels.map((group) => (
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
              Esta lista no es exhaustiva. VivaceTV ofrece también canales regionales españoles
              (TV3, Canal Sur, TVG, À Punt, etc.), canales temáticos (cocina, viajes, documentales,
              música) y canales locales.
            </p>
          </div>
        </section>

        {/* Section 3 — Internacional */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Canales Internacionales: Un Catálogo Mundial
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV es especialmente adecuado para hogares multiculturales en España. Nuestros
              paquetes internacionales cubren las grandes comunidades presentes en el territorio español:
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

        {/* Section 4 — Deporte */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Canales Deporte: Los Mejores Canales Deportivos en IPTV
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              El deporte es el gran punto fuerte del IPTV. Acceded a las mayores competiciones mundiales
              — Champions League, LaLiga, Fórmula 1, Roland Garros, NBA, NFL — sin multiplicar las
              suscripciones. Aquí están los canales deportivos disponibles con VivaceTV:
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
              Nuestra tecnología AntiFreeze 10.0 garantiza un streaming sin interrupciones incluso
              en los picos de tráfico — finales de Champions League, Copa del Mundo, Roland Garros.
              Nunca volveréis a perderos un gol o un punto decisivo por culpa de un corte.
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
              Mediateca VOD y Replay: +160.000 Contenidos
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Además de los canales en directo, VivaceTV ofrece una mediateca VOD (Video on Demand) de
              <strong style={{ color: 'var(--color-ink)' }}> más de 160.000 películas y series</strong>,
              accesible en cualquier momento. Es el equivalente de Netflix, Amazon Prime y Disney+
              reunidos — accesible desde la misma interfaz que vuestros canales en directo.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El catálogo VOD está organizado por géneros (acción, comedia, drama, ciencia ficción,
              documentales), por idioma y por novedades. Las películas recientes — a menudo pocas
              semanas después de su estreno en cines — se añaden regularmente.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              El replay os permite volver a ver los programas emitidos en los últimos 7 días en los
              principales canales españoles e internacionales. Sin necesidad de programar la grabación
              — todo está disponible a la carta.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
              >
                Acceder al catálogo completo →
              </Link>
              <Link
                href="/pedir/gold"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  backgroundColor: 'var(--color-card)',
                }}
              >
                Prueba gratis 24h →
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
              Preguntas Frecuentes — Canales IPTV
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
                { href: '/comprar-iptv', label: 'Ver los planes' },
                { href: '/iptv-4k', label: 'IPTV 4K' },
                { href: '/mejor-iptv-espana', label: 'Comparativa IPTV' },
                { href: '/guia-iptv/como-funciona-iptv', label: "Cómo funciona el IPTV" },
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
