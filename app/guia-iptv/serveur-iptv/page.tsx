import type { Metadata } from 'next';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Servidor IPTV : Todo para Elegir el Mejor en 2026 | VivaceTV',
  description:
    "¿Qué es un servidor IPTV? Cómo evaluar la calidad de un servidor IPTV: uptime, anti-freeze, CDN, tiempo de respuesta. Guía completa para elegir el mejor proveedor.",
  keywords: [
    'servidor iptv',
    'iptv servidor',
    'mejor servidor iptv',
    'servidor iptv españa',
    'uptime iptv',
    'anti freeze iptv',
    'calidad servidor iptv',
  ],
  alternates: { canonical: `${siteConfig.url}/guia-iptv/serveur-iptv` },
  openGraph: {
    title: 'Servidor IPTV : Todo para Elegir el Mejor en 2026 | VivaceTV',
    description:
      "Guía completa sobre los servidores IPTV: funcionamiento, indicadores de calidad, señales de alarma e infraestructura VivaceTV.",
    url: `${siteConfig.url}/guia-iptv/serveur-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: "¿Cuántos servidores debe tener un buen proveedor IPTV?",
    answer:
      "Un buen proveedor IPTV dispone generalmente de varios servidores distribuidos en distintas ubicaciones geográficas (Europa, América del Norte, Asia). Esta arquitectura multi-servidor garantiza la continuidad del servicio en caso de fallo de un nodo y reduce la latencia al enrutar las conexiones hacia el servidor más cercano.",
  },
  {
    question: "¿Qué es el uptime de un servidor IPTV?",
    answer:
      "El uptime designa el porcentaje de tiempo durante el cual el servidor está operativo y accesible. Un uptime del 99,9% significa que el servidor no está disponible más de 8,7 horas al año como máximo. Un buen proveedor IPTV debe garantizar un uptime de al menos el 99,5%. VivaceTV apunta a un uptime del 99,9% gracias a su infraestructura redundante.",
  },
  {
    question: "¿Por qué mi IPTV hace buffering constantemente?",
    answer:
      "El buffering constante se debe generalmente a uno de estos factores: servidor sobrecargado o de mala calidad, conexión a internet insuficiente (menos de 10 Mbps para HD), Wi-Fi inestable (preferid Ethernet), o caché demasiado pequeña en vuestra aplicación. Empezad por comprobar vuestra velocidad de internet y conectad vuestro dispositivo por Ethernet para aislar la causa.",
  },
  {
    question: "¿Qué es la tecnología anti-freeze en IPTV?",
    answer:
      "La tecnología anti-freeze (o anti-corte) es un conjunto de mecanismos del lado del servidor que previene las interrupciones de flujo durante los picos de tráfico — especialmente durante los partidos deportivos donde miles de usuarios ven el mismo canal simultáneamente. Incluye el almacenamiento en búfer inteligente, la redirección automática hacia servidores menos cargados y la detección proactiva de saturaciones.",
  },
  {
    question: "¿Cómo saber si mi servidor IPTV es de buena calidad?",
    answer:
      "Probad vuestro servicio durante al menos 7 días, incluyendo un fin de semana (para probar la carga durante eventos deportivos). Un buen servidor debe ofrecer: cero buffering en canales HD durante las horas punta, carga de canales en menos de 3 segundos, EPG actualizado diariamente, y disponibilidad de los canales prometidos sin ausencias inexplicables.",
  },
  {
    question: "¿Qué es una CDN en el contexto del IPTV?",
    answer:
      "Una CDN (Content Delivery Network) es una red de servidores distribuidos geográficamente que almacena y entrega los contenidos desde el punto más cercano al usuario final. En IPTV, una CDN reduce la latencia, mejora la estabilidad y permite gestionar grandes volúmenes de usuarios simultáneos sin degradación de calidad. Los mejores proveedores IPTV se apoyan en CDN profesionales.",
  },
];

const redFlags = [
  {
    flag: 'Buffering durante más de 5 segundos',
    explanation: "Un buffering ocasional es aceptable. Si dura más de 5 segundos o se produce más de 3 veces por hora en canales HD, el servidor es insuficiente.",
  },
  {
    flag: 'Canales no disponibles con frecuencia',
    explanation: "Los canales temporalmente ausentes durante averías son normales. Si el 5% o más de vuestra lista de canales está regularmente fuera de línea, es una señal de alarma.",
  },
  {
    flag: "Sin información sobre la infraestructura",
    explanation: "Un buen proveedor comunica su uptime, las ubicaciones de sus servidores y su tecnología. La ausencia total de información técnica es sospechosa.",
  },
  {
    flag: "Sin período de prueba posible",
    explanation: "Un proveedor seguro de la calidad de sus servidores siempre ofrece un período de prueba o una prueba gratuita. El rechazo sugiere calidad insuficiente.",
  },
  {
    flag: 'Soporte inexistente en caso de avería',
    explanation: "En caso de problema con el servidor, la capacidad de respuesta del soporte es crucial. Un soporte inaccesible o que responde en varios días demuestra una infraestructura poco profesional.",
  },
];

const qualityIndicators = [
  {
    indicator: 'Uptime',
    good: '99,9% o más',
    average: '99% a 99,5%',
    bad: 'Por debajo del 99%',
  },
  {
    indicator: "Tiempo de inicio de un canal",
    good: 'Menos de 2 segundos',
    average: '2 a 5 segundos',
    bad: 'Más de 5 segundos',
  },
  {
    indicator: 'Buffering (horas punta)',
    good: 'Ninguno',
    average: 'Ocasional (< 1/hora)',
    bad: 'Frecuente',
  },
  {
    indicator: 'Tecnología anti-freeze',
    good: 'Incluida y activa',
    average: 'Parcial',
    bad: 'Ausente',
  },
  {
    indicator: 'Ubicaciones de los servidores',
    good: 'Multi-continente',
    average: '2 a 3 países',
    bad: 'Servidor único',
  },
];

export default function ServeurIPTVPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', href: '/' },
          { name: 'Guía IPTV', href: '/guia-iptv' },
          { name: 'Servidor IPTV', href: '/guia-iptv/serveur-iptv' },
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
          label="INFRAESTRUCTURA IPTV"
          title="Servidor IPTV:"
          titleHighlight="Todo para Elegir el Mejor"
          subtitle="El servidor IPTV es el corazón de vuestra experiencia de streaming. Entender cómo evaluarlo os permitirá elegir un proveedor que nunca os decepcione."
        />

        {/* Section 1 — Qué es un servidor IPTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es un Servidor IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un <strong style={{ color: 'var(--color-ink)' }}>servidor IPTV</strong> es la
              infraestructura informática que captura, codifica y distribuye los flujos de vídeo a
              los abonados. Concretamente, es una batería de ordenadores de alto rendimiento, alojados
              en centros de datos, que reciben las señales de los canales de televisión, las convierten
              en flujos digitales y las transmiten simultáneamente a miles de usuarios a través de
              internet.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              La calidad de este servidor determina directamente la calidad de vuestra experiencia:
              estabilidad del flujo, resolución de vídeo, tiempo de carga de los canales, y
              comportamiento durante los eventos de gran audiencia (finales deportivas, programas
              populares). Un servidor deficiente se traduce invariablemente en buffering, cortes y
              canales no disponibles.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Los mejores proveedores IPTV invierten masivamente en su infraestructura: ancho de banda
              dedicado en Gbps, redundancia de conexiones, sistemas anti-DDoS y tecnologías de
              streaming adaptativas que ajustan automáticamente la calidad de vídeo en función de la
              conexión del usuario.
            </p>
          </div>
        </section>

        {/* Section 2 — Indicadores de calidad */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Los Indicadores Clave de Calidad de un Servidor IPTV
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Aquí están las métricas que debéis examinar para evaluar objetivamente la calidad de
              un servidor IPTV:
            </p>
            <div className="overflow-x-auto rounded-xl mb-8" style={{ border: '1px solid var(--color-border)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-dark)' }}>
                    {['Indicador', 'Bueno', 'Medio', 'Insuficiente'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-semibold"
                        style={{ color: h === 'Bueno' ? 'var(--color-lime)' : 'var(--color-surface)' }}
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
                  El Uptime — Disponibilidad del Servidor
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  El uptime se expresa en porcentaje y mide la disponibilidad del servicio en un
                  período determinado. Un uptime del 99,9% equivale a menos de 9 horas de interrupción
                  al año — aceptable para un servicio de entretenimiento. Por debajo del 99%, eso
                  representa potencialmente varios días de indisponibilidad anual, inaceptable para
                  una suscripción de pago.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  La Ubicación de los Servidores
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  Los servidores geográficamente cercanos al usuario reducen la latencia y mejoran la
                  fluidez del streaming. Un proveedor con servidores en España o en Europa occidental
                  ofrece una mejor experiencia a los usuarios españoles. La redundancia geográfica
                  (varios centros de datos) garantiza la continuidad en caso de avería de un
                  datacenter.
                </p>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: 'var(--color-ink)' }}
                >
                  El Ancho de Banda
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  El ancho de banda determina cuántos usuarios pueden ver flujos en simultáneo sin
                  degradación. Un flujo 4K necesita unos 25 Mbps por usuario. Un proveedor con
                  100.000 abonados y 10 Gbps de ancho de banda solo puede servir a 400 usuarios en
                  4K simultáneamente — el 0,4% de su base. Los mejores proveedores invierten en
                  capacidades que superan su uso medio para absorber los picos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Señales de alarma */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Señales de Alarma: Cómo Identificar un Mal Servidor IPTV
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

        {/* Section 4 — VivaceTV */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              La Infraestructura de Servidores de VivaceTV
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV ha construido su infraestructura en torno a un principio simple: la calidad
              no debe degradarse nunca, ni siquiera en los momentos de mayor carga. Aquí están los
              pilares de nuestra arquitectura de servidores:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: 'Tecnología AntiFreeze 10.0',
                  desc: "Nuestra tecnología propietaria anti-freeze previene las interrupciones de flujo anticipando y redistribuyendo la carga automáticamente. Resultado: cero buffering incluso durante las finales de Champions League.",
                },
                {
                  title: 'Uptime 99,9%',
                  desc: "Nuestro SLA garantiza una disponibilidad del 99,9% — menos de 9 horas de interrupción máxima en 12 meses. Nuestra infraestructura redundante asegura la continuidad incluso en caso de fallo de hardware.",
                },
                {
                  title: 'Servidores CDN multi-ubicación',
                  desc: "Nuestros servidores están distribuidos en varios puntos de presencia en Europa para minimizar la latencia y maximizar la calidad para los usuarios españoles y de habla hispana.",
                },
                {
                  title: '+22.000 canales mantenidos',
                  desc: "Nuestro equipo técnico supervisa y mantiene la disponibilidad de cada canal las 24h/24. Los flujos interrumpidos se detectan y se reemplazan automáticamente o en el menor tiempo posible.",
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
              href="/comprar-iptv"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm"
              style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
            >
              Probar VivaceTV →
            </Link>
          </div>
        </section>

        {/* Section 5 — Probar un servidor */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl lg:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Cómo Probar un Servidor IPTV Antes de Comprometeros
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Nunca os suscribáis a una suscripción IPTV de larga duración sin haber probado antes la
              calidad del servidor. Aquí está cómo proceder metódicamente:
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: '1',
                  title: "Solicitad una prueba gratuita de 24 a 48 horas",
                  desc: "VivaceTV ofrece una prueba gratuita bajo petición por WhatsApp. Este período os permite evaluar la estabilidad del servidor en vuestras condiciones reales de uso.",
                },
                {
                  step: '2',
                  title: "Probad durante las horas punta",
                  desc: "Los problemas de servidor se manifiestan principalmente por la noche (20h-22h) y durante eventos deportivos. Probad obligatoriamente durante estos períodos para tener una imagen realista del rendimiento.",
                },
                {
                  step: '3',
                  title: "Verificad la disponibilidad de los canales que veis",
                  desc: "Comprobad específicamente los canales que os son importantes (Movistar+, DAZN, La 1, etc.) y verificad que están disponibles y de buena calidad.",
                },
                {
                  step: '4',
                  title: "Probad con vuestra conexión y vuestro dispositivo habituales",
                  desc: "Una prueba realizada en un dispositivo o conexión diferente a vuestro uso cotidiano no refleja vuestra experiencia real. Probad en vuestras condiciones normales.",
                },
                {
                  step: '5',
                  title: "Evaluad la capacidad de respuesta del soporte",
                  desc: "Contactad al soporte durante la prueba para evaluar su tiempo de respuesta y su calidad. Un buen soporte resuelve los problemas en minutos, no en días.",
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
                      color: '#FFFFFF',
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
              Preguntas Frecuentes — Servidor IPTV
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
                { href: '/mejor-iptv-espana', label: 'Comparativa IPTV España' },
                { href: '/proveedor-iptv', label: 'Presentación VivaceTV' },
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
