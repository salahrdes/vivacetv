import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Ilegal en España : Multas, Riesgos y Cómo Mantenerse Legal | VivaceTV',
  description:
    "¿Es ilegal el IPTV en España? ¿Qué multas arriesgáis? Entender la diferencia entre IPTV legal y pirata, el papel de la CNMC, y cómo elegir un servicio legítimamente operado.",
  keywords: [
    'iptv multa',
    'iptv multa españa',
    'iptv ilegal españa',
    'iptv legal españa',
    'multa streaming ilegal',
    'cnmc iptv',
    'riesgo iptv pirata',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/iptv-amende` },
  openGraph: {
    title: 'IPTV Ilegal en España : Multas, Riesgos y Cómo Mantenerse Legal | VivaceTV',
    description:
      "Todo lo que necesitáis saber sobre la legalidad del IPTV en España: multas posibles, papel de la CNMC, y cómo identificar un servicio IPTV legal.",
    url: `${siteConfig.url}/guia-iptv/iptv-amende`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "¿Es ilegal el IPTV en España?",
    answer:
      "El IPTV como tecnología es perfectamente legal en España. Lo que es ilegal es utilizar un servicio IPTV que emite contenidos sin contar con los derechos de emisión adecuados — lo que se denomina IPTV pirata. Un servicio IPTV legítimamente operado, con facturación oficial y contenidos bajo licencia, es completamente legal.",
  },
  {
    question: "¿Qué multa se arriesga por usar un IPTV pirata en España?",
    answer:
      "En España, el consumo de contenidos pirateados puede acarrear multas de varios miles de euros e incluso acciones penales en los casos más graves. La CNMC y la Ley de Propiedad Intelectual española protegen los contenidos audiovisuales. Los tribunales pueden dictar condenas por infracción de derechos de autor. Los riesgos varían según la gravedad y la reincidencia de las infracciones.",
  },
  {
    question: "¿Cuál es la diferencia entre IPTV legal e IPTV pirata?",
    answer:
      "Un IPTV legal tiene acuerdos comerciales con los titulares de derechos, emite facturas oficiales y opera de forma transparente. Un IPTV pirata redistribuye señales de canales sin autorización, a precios anormalmente bajos, sin facturación oficial ni servicio postventa identificado. Si una suscripción os cuesta menos de 5€/mes por miles de canales sin ninguna factura, probablemente sea ilegal.",
  },
  {
    question: "¿Cómo detecta la CNMC a los usuarios de IPTV ilegal?",
    answer:
      "La CNMC (Comisión Nacional de los Mercados y la Competencia) y la AEPD disponen de varios medios de detección: vigilancia de direcciones IP que se conectan a servidores piratas conocidos, cooperación con los proveedores de servicios de internet (ISP), y operaciones judiciales dirigidas a las grandes redes de distribución. Los usuarios finales son menos objetivo que los distribuidores, pero el riesgo existe y crece cada año.",
  },
  {
    question: "¿Existe un IPTV de calidad equivalente a Netflix pero legal?",
    answer:
      "Sí. Servicios IPTV legítimamente operados como VivaceTV ofrecen suscripciones con facturación oficial, un amplio catálogo de canales españoles e internacionales en HD y 4K, así como una mediateca VOD. Este tipo de servicio combina la riqueza de un IPTV con el marco tranquilizador de una suscripción oficial.",
  },
  {
    question: "¿Puede mi proveedor de internet saber que uso un IPTV?",
    answer:
      "Vuestro proveedor de acceso a internet puede ver las conexiones hacia servidores identificados como piratas y puede verse obligado por ley a transmitir esta información a las autoridades en caso de investigación. El uso de un servicio IPTV legítimamente operado os protege de este riesgo al conectaros a infraestructuras conformes.",
  },
];

const legalMarkers = [
  {
    icon: '✓',
    title: 'Facturación oficial',
    desc: 'El servicio emite una factura o un recibo con datos legales identificables.',
    ok: true,
  },
  {
    icon: '✓',
    title: 'Precio coherente con el mercado',
    desc: "Los precios reflejan un coste real de licencia e infraestructura (generalmente desde 20-25€/3 meses).",
    ok: true,
  },
  {
    icon: '✓',
    title: 'Soporte al cliente identificado',
    desc: "Un equipo accesible por WhatsApp, email o chat con un tiempo de respuesta razonable.",
    ok: true,
  },
  {
    icon: '✗',
    title: 'Precio anormalmente bajo',
    desc: "Menos de 5€/mes por miles de canales sin ninguna explicación — señal de alarma clara.",
    ok: false,
  },
  {
    icon: '✗',
    title: 'Sin facturación ni recibo',
    desc: 'Pago únicamente por crypto o transferencia sin ningún documento oficial.',
    ok: false,
  },
  {
    icon: '✗',
    title: 'Sitio o revendedor anónimo',
    desc: 'Sin menciones legales, sin dirección, sin identidad visible detrás del servicio.',
    ok: false,
  },
];

export default function IPTVAmendePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: 'IPTV Ilegal España', href: '/guia-iptv/iptv-amende' },
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
          label="LEGALIDAD IPTV"
          title="IPTV Ilegal en España:"
          titleHighlight="Riesgos, Multas y Cómo Mantenerse Legal"
          subtitle="El IPTV es una tecnología legal — pero todo depende del servicio que utilicéis. Entender la diferencia entre IPTV legal y pirata puede evitaros multas severas."
        />

        {/* Section 1 — Marco legal */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Marco Legal del IPTV en España
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El <strong style={{ color: 'var(--color-ink)' }}>IPTV (Internet Protocol Television)</strong>{' '}
              es una tecnología perfectamente legal que permite distribuir contenidos audiovisuales
              a través de internet. Del mismo modo que un operador de telecomunicaciones puede ofrecer
              canales a través de una caja de TV, el IPTV es un canal de distribución — no una infracción
              en sí misma.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Lo que determina la legalidad es la <strong style={{ color: 'var(--color-ink)' }}>fuente
              de los contenidos emitidos</strong>. En España, la Ley de Propiedad Intelectual (Real
              Decreto Legislativo 1/1996) protege los contenidos audiovisuales. Emitir o consumir
              contenidos sin autorización de los titulares de derechos constituye una infracción
              sujeta a sanciones.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La <strong style={{ color: 'var(--color-ink)' }}>CNMC</strong> (Comisión Nacional de los
              Mercados y la Competencia) y la <strong style={{ color: 'var(--color-ink)' }}>AEPD</strong>{' '}
              (Agencia Española de Protección de Datos) son los organismos encargados de supervisar el
              sector audiovisual en España. Cooperan activamente con Europol y los ISP para identificar
              redes de distribución piratas.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La legislación española en materia de propiedad intelectual se ha endurecido progresivamente,
              con nuevos instrumentos para bloquear sitios y servidores piratas con rapidez, incluyendo
              medidas cautelares que permiten actuar en horas. Esto es especialmente relevante en el
              ámbito de los derechos deportivos.
            </p>
            <div
              className="p-5 rounded-xl mt-6"
              style={{
                border: '2px solid var(--color-lime)',
                backgroundColor: 'var(--color-lime-soft)',
              }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
                Resumen: El IPTV es legal. El IPTV pirata (redistribución no autorizada de canales
                protegidos por derechos de autor) es ilegal y puede acarrear sanciones civiles y penales.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Multas */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué Multas hay por Usar un IPTV Pirata en España?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              En España, las sanciones por piratería audiovisual están previstas en la Ley de Propiedad
              Intelectual. Para un usuario final, la responsabilidad puede establecerse en varios niveles:
            </p>
            <div className="flex flex-col gap-4 mb-6">
              {[
                {
                  level: 'Nivel 1 — Advertencia administrativa',
                  desc: "La CNMC puede enviar una notificación formal a vuestra dirección a través de vuestro ISP. No es todavía una sanción, pero sí una señal de alerta oficial que queda registrada.",
                },
                {
                  level: 'Nivel 2 — Acción civil',
                  desc: "Los titulares de derechos (cadenas de TV, estudios, federaciones deportivas) pueden interponer acciones civiles. Se pueden reclamar daños y perjuicios, en ocasiones varios miles de euros según el perjuicio estimado.",
                },
                {
                  level: 'Nivel 3 — Sanción penal',
                  desc: "En caso de reincidencia o participación en una red de distribución, las sanciones penales por infracción de derechos de autor pueden alcanzar multas muy elevadas y penas de prisión según los artículos 270 y siguientes del Código Penal español.",
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
              Las sanciones son más severas para los revendedores y distribuidores de señales piratas
              que para los consumidores finales. No obstante, la tendencia legislativa es de
              endurecimiento progresivo, y el riesgo para los usuarios aumenta cada año con los avances
              tecnológicos de detección.
            </p>
          </div>
        </section>

        {/* Section 3 — Identificar un servicio legal */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Cómo Identificar si un Servicio IPTV es Legal?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              No siempre es fácil distinguir un servicio IPTV legítimamente operado de un servicio
              pirata. Aquí están los indicadores clave que debéis verificar antes de suscribiros:
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
              Por qué VivaceTV es un Servicio Legítimamente Operado
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV es un servicio IPTV <strong style={{ color: 'var(--color-ink)' }}>legítimamente
              operado</strong> que ofrece suscripciones con <strong style={{ color: 'var(--color-ink)' }}>
              facturación oficial</strong>. A diferencia de los servicios piratas anónimos, VivaceTV
              os proporciona un recibo por cada pago, dispone de un soporte al cliente identificado, y
              opera en cumplimiento de la normativa vigente.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Las suscripciones VivaceTV se ofrecen a precios coherentes con el mercado: desde 22,99€
              por 3 meses (oferta Bronze), lo que refleja un coste real de infraestructura y servicio.
              Estos precios se alejan radicalmente de las ofertas piratas a 3-5€/mes que matemáticamente
              no pueden cubrir el coste de contenidos bajo licencia.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Al elegir VivaceTV, disfrutáis de un servicio estable y documentado — sin exponer vuestro
              hogar a los riesgos legales asociados al IPTV pirata. El soporte por WhatsApp 24/7
              también demuestra una estructura operativa real, imposible de encontrar en los revendedores
              anónimos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/comprar-iptv"
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
                style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
              >
                Ver los planes VivaceTV →
              </Link>
              <Link
                href="/proveedor-iptv"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl text-sm"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  backgroundColor: 'var(--color-card)',
                }}
              >
                Por qué elegir VivaceTV →
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
              Preguntas Frecuentes — IPTV y Legalidad en España
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
                { href: '/comprar-iptv', label: 'Ver las ofertas VivaceTV' },
                { href: '/proveedor-iptv', label: 'Presentación VivaceTV' },
                { href: '/mejor-iptv-espana', label: 'Comparativa IPTV España' },
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
