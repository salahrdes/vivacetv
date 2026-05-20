import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Zap, Star, Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Proveedor IPTV España Fiable — ¿Quién es VivaceTV? | IPTV España',
  description:
    'Descubre VivaceTV, tu proveedor IPTV España de confianza. +22 000 canales HD/4K/8K, servidores estables, soporte WhatsApp 24/7. ¿Cómo elegir un buen proveedor IPTV?',
  keywords: [
    'proveedor iptv españa',
    'mejor proveedor iptv españa',
    'proveedor iptv fiable',
    'servicio iptv españa',
    'empresa iptv españa',
    'comprar iptv proveedor',
    'iptv espana proveedor oficial',
    'elegir proveedor iptv',
  ],
  alternates: { canonical: `${siteConfig.url}/proveedor-iptv` },
  openGraph: {
    title: 'Proveedor IPTV España Fiable — ¿Quién es VivaceTV? | IPTV España',
    description:
      "VivaceTV: proveedor IPTV España fiable. +22 000 canales, HD/4K/8K, AntiFreeze 10.0, soporte WhatsApp 24/7. Todo lo que necesitas saber para elegir un buen proveedor IPTV.",
    url: `${siteConfig.url}/proveedor-iptv`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Qué distingue a un buen proveedor IPTV de uno malo?',
    answer:
      'Un buen proveedor IPTV se reconoce por su estabilidad de servidor (pocas o ninguna interrupción), la regularidad de las actualizaciones de las listas de canales, la reactividad de su soporte al cliente, la disponibilidad de una prueba gratuita y las opiniones positivas verificables de sus clientes. VivaceTV cumple todos estos criterios.',
  },
  {
    question: '¿VivaceTV es un proveedor IPTV legal?',
    answer:
      'VivaceTV opera en cumplimiento de la normativa vigente y se compromete a ofrecer un servicio de calidad a sus usuarios. Te recomendamos consultar nuestro artículo sobre la legalidad del IPTV en España para más información.',
  },
  {
    question: '¿Cómo contactar con el soporte de VivaceTV?',
    answer:
      'Nuestro soporte está disponible 24/7 por WhatsApp al +447476614523. Nuestro equipo hispanohablante responde generalmente en menos de 15 minutos para cualquier pregunta técnica o de pedido.',
  },
  {
    question: '¿VivaceTV ofrece una prueba gratuita?',
    answer:
      'Sí, VivaceTV ofrece una prueba gratuita de 24 horas bajo simple solicitud. Contacta con nuestro equipo por WhatsApp para beneficiarte de ella antes de comprometerte con una suscripción.',
  },
  {
    question: '¿Cuánto cuesta una suscripción en un proveedor IPTV serio?',
    answer:
      "Una suscripción IPTV seria se sitúa entre 20€ y 80€ según la duración. En VivaceTV, nuestras ofertas empiezan en 22,99€ por 3 meses y van hasta 74,99€ por 24 meses — tarifas competitivas por una calidad premium.",
  },
];

const trustPillars = [
  {
    icon: Star,
    title: '+22 000 canales estables',
    desc: 'Un catálogo completo y constantemente actualizado: canales españoles, internacionales, deportivos, cine y documentales. Todo en una sola suscripción.',
  },
  {
    icon: Zap,
    title: 'AntiFreeze 10.0',
    desc: 'Nuestra tecnología propietaria elimina los micro-cortes y el buffering, incluso durante los eventos deportivos más vistos. Uptime garantizado al 99,9%.',
  },
  {
    icon: Shield,
    title: 'Soporte WhatsApp 24/7',
    desc: 'Un equipo hispanohablante disponible 24h/24, 7d/7. Tiempo de respuesta medio inferior a 15 minutos para instalación, configuración o cualquier problema técnico.',
  },
  {
    icon: Check,
    title: 'Prueba gratuita 24 horas',
    desc: 'Prueba VivaceTV gratuitamente antes de comprometerte. Una práctica poco habitual en nuestro sector, que demuestra nuestra confianza en la calidad de nuestro servicio.',
  },
];

const selectionCriteria = [
  {
    num: '1',
    title: 'Verifica la estabilidad del servicio',
    body: "La estabilidad es el criterio n°1. Un proveedor IPTV fiable debe mostrar un uptime cercano al 99,9% e integrar una tecnología anti-freeze. Antes de suscribirte, infórmate sobre los cortes consultando las opiniones recientes de clientes. VivaceTV utiliza la tecnología AntiFreeze 10.0 probada y validada por miles de usuarios.",
  },
  {
    num: '2',
    title: 'Prueba antes de comprar',
    body: "Todo proveedor IPTV serio ofrece una prueba gratuita. Un servicio que rechaza cualquier prueba o que exige pago inmediato sin período de prueba es una señal de alarma. VivaceTV ofrece 24 horas de prueba gratuita bajo simple solicitud por WhatsApp.",
  },
  {
    num: '3',
    title: 'Evalúa el soporte al cliente',
    body: 'Un buen soporte debe estar disponible 24/7, responder en español, y dominar los aspectos técnicos (configuración, diagnóstico). Prueba el tiempo de respuesta antes de comprar. Nuestro equipo responde generalmente en menos de 15 minutos.',
  },
  {
    num: '4',
    title: 'Compara los catálogos',
    body: 'Verifica el número de canales (españoles + internacionales + deportivos), la disponibilidad del 4K/8K, y la extensión del catálogo VOD (películas y series). VivaceTV propone +22 000 canales y +160 000 contenidos en HD/4K/8K.',
  },
  {
    num: '5',
    title: 'Lee las opiniones de clientes',
    body: 'Las opiniones verificadas son el mejor indicador de la calidad real de un servicio. Ten cuidado con los servicios sin ninguna opinión o con únicamente comentarios genéricos. VivaceTV muestra una nota de 4,8/5 sobre más de 500 opiniones verificadas.',
  },
  {
    num: '6',
    title: 'Desconfía de los precios demasiado bajos',
    body: "Una suscripción IPTV a 3€/mes es una señal de alarma. Estos servicios son a menudo inestables, sin soporte y desaparecen en pocos meses con tu dinero. Un proveedor serio invierte en sus servidores y su equipo — lo que tiene un coste mínimo.",
  },
];

export default function FournisseurIPTVPage() {
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
          { name: 'Inicio', href: '/' },
          { name: 'Proveedor IPTV España', href: '/proveedor-iptv' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="PROVEEDOR IPTV"
          title="VivaceTV —"
          titleHighlight="Tu Proveedor IPTV España de Confianza"
          subtitle="Con miles de clientes satisfechos, VivaceTV se impone como el proveedor IPTV España de referencia. Descubre por qué y cómo elegir un buen proveedor."
        />

        {/* Section 1 — Qué es un proveedor IPTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Qué es un Proveedor IPTV?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Un proveedor IPTV (Internet Protocol Television) es una empresa o servicio que te
              da acceso a canales de televisión, películas y series mediante internet, en lugar
              de por cable, fibra TV o antena parabólica tradicional. Recibes un identificador
              (URL M3U o Xtream Codes) que usas en una aplicación IPTV de tu elección para
              acceder al catálogo.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Es importante distinguir los proveedores IPTV serios — que invierten en servidores
              estables, equipos de soporte y actualizaciones regulares — de los servicios a bajo
              precio que a menudo desaparecen después de pocas semanas. Un proveedor de confianza
              ofrece sistemáticamente una prueba gratuita, muestra opiniones de clientes
              verificables y dispone de un soporte reactivo.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Un proveedor IPTV serio debe ofrecer: flujos estables en HD, 4K y 8K, un catálogo
              regularmente actualizado, soporte técnico disponible, e infraestructura de servidor
              redundante para garantizar la continuidad del servicio incluso durante los picos de
              tráfico (finales deportivas, estrenos de películas). Consulta nuestras{' '}
              <Link
                href="/opiniones-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                opiniones verificadas de clientes
              </Link>{' '}
              para evaluar la fiabilidad de VivaceTV.
            </p>
          </div>
        </section>

        {/* Section 2 — Cómo elegir */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Cómo Elegir un Proveedor IPTV Fiable en España?
            </h2>
            <div className="flex flex-col gap-6">
              {selectionCriteria.map((c) => (
                <div
                  key={c.num}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {c.num}. {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Por qué VivaceTV */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Por qué VivaceTV es un Proveedor IPTV de Confianza
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {trustPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    style={{
                      backgroundColor: 'var(--color-card)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 16,
                      padding: 24,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'var(--color-lime-soft)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--color-lime)' }} />
                    </div>
                    <h3
                      className="font-display font-bold text-base mb-2"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4 — Proveedores IPTV en España */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Los Proveedores IPTV en España — ¿Cómo Funciona el Mercado?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              El mercado IPTV funciona en dos niveles: los proveedores de flujos (que poseen y
              gestionan los servidores) y los revendedores o agencias IPTV (que compran
              suscripciones al por mayor y las revenden). Este modelo de distribución crea a veces
              una cadena larga entre el servidor y el usuario final, lo que puede afectar a la
              calidad del soporte y la reactividad en caso de problema.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              <strong style={{ color: 'var(--color-ink)' }}>VivaceTV opera directamente</strong>,
              sin intermediarios. Gestionamos directamente nuestra infraestructura de servidores y
              nuestro equipo de soporte. Esto nos permite ofrecer precios más competitivos,
              intervenir rápidamente en caso de problema técnico y mantener un nivel de calidad
              constante.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Las ventajas de trabajar directamente con el proveedor: sin margen de intermediario
              (precios más bajos), soporte técnico de primera línea (sin transmisión de tickets),
              actualizaciones más rápidas de las listas de canales, y compromiso directo con la
              satisfacción del cliente. Para más información sobre nuestras ofertas, consulta la{' '}
              <Link
                href="/comprar-iptv"
                style={{ color: 'var(--color-lime)' }}
                className="underline"
              >
                página de suscripciones
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 5 — Infraestructura */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-6"
              style={{ color: 'var(--color-ink)' }}
            >
              Nuestra Infraestructura Técnica
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: 'Estabilidad del servidor',
                  desc: 'Infraestructura redundante con un uptime garantizado del 99,9%. En caso de fallo de un servidor, la conmutación automática asegura la continuidad del servicio.',
                },
                {
                  label: 'Tecnología AntiFreeze 10.0',
                  desc: 'Nuestro algoritmo propietario anticipa y elimina los micro-cortes causados por los picos de tráfico, especialmente durante los eventos deportivos.',
                },
                {
                  label: 'Actualizaciones regulares',
                  desc: 'Las listas de canales se actualizan diariamente para garantizar el acceso a los últimos canales y corregir los posibles cambios de flujo.',
                },
                {
                  label: 'Soporte multi-dispositivo',
                  desc: 'Nuestras credenciales son compatibles con Smart TV, Android, iOS, PC, Amazon Fire Stick, Apple TV y cualquier aplicación IPTV principal del mercado.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 12,
                    padding: 20,
                  }}
                >
                  <div
                    className="w-6 h-1 rounded-full mb-3"
                    style={{ backgroundColor: 'var(--color-lime)' }}
                  />
                  <h3
                    className="font-semibold text-base mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl sm:text-3xl mb-8"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas Frecuentes
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
                    {item.question.includes('legal') && (
                      <>
                        {' '}
                        <Link
                          href="/guia-iptv/iptv-espana-legal"
                          className="underline"
                          style={{ color: 'var(--color-lime)' }}
                        >
                          Consultar nuestro artículo sobre la legalidad del IPTV
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { href: '/comprar-iptv', label: 'Ver las suscripciones' },
                { href: '/opiniones-iptv', label: 'Opiniones clientes' },
                { href: '/mejor-iptv-espana', label: 'Comparativa IPTV' },
                { href: '/guia-iptv/iptv-espana-legal', label: 'IPTV legal en España' },
                { href: '/faq', label: 'FAQ completa' },
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
