import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import { BreadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Televizo IPTV Opiniones 2026 — ¿App o Suscripción? | VivaceTV',
  description:
    'Televizo es una aplicación IPTV, no un proveedor de suscripción. Descubre cómo usarla con VivaceTV para la mejor experiencia IPTV España.',
  keywords: [
    'televizo iptv',
    'televizo aplicación iptv',
    'televizo suscripción',
    'televizo vivacetv',
    'mejor suscripción para televizo',
  ],
  alternates: { canonical: `${siteConfig.url}/alternativas/televizo` },
  openGraph: {
    title: 'Televizo IPTV Opiniones 2026 — ¿App o Suscripción? | VivaceTV',
    description:
      'Televizo es un reproductor IPTV Android gratuito. Descubre cómo configurarlo con VivaceTV para una experiencia IPTV España óptima.',
    url: `${siteConfig.url}/alternativas/televizo`,
    type: 'website',
  },
};

const faqItems = [
  {
    question: '¿Televizo IPTV es gratuito?',
    answer:
      'La aplicación Televizo está disponible gratuitamente en Android. Sin embargo, requiere una suscripción IPTV activa para funcionar. Televizo es únicamente un reproductor multimedia — no proporciona canales por sí misma.',
  },
  {
    question: '¿Cómo configurar VivaceTV con la aplicación Televizo?',
    answer:
      "Después de suscribirte a VivaceTV, recibes tus credenciales Xtream Codes o tu URL M3U por WhatsApp. En Televizo, ve a 'Añadir lista' e introduce la URL M3U proporcionada. Tu lista de canales VivaceTV se importará automáticamente.",
  },
  {
    question: '¿Televizo es mejor que TiviMate para IPTV?',
    answer:
      'TiviMate sigue siendo la aplicación de referencia para Android TV, especialmente por su avanzada interfaz EPG. Televizo es una buena alternativa gratuita, particularmente en dispositivos Android móviles. Ambas son totalmente compatibles con VivaceTV.',
  },
  {
    question: '¿Qué suscripción IPTV usar con Televizo?',
    answer:
      'VivaceTV es 100% compatible con Televizo. Nuestra suscripción proporciona una URL M3U o credenciales Xtream Codes directamente utilizables en la aplicación. Con nuestra tecnología AntiFreeze 10.0, disfrutarás de una reproducción sin cortes.',
  },
];

const configSteps = [
  {
    step: 1,
    title: 'Suscribirte a VivaceTV',
    description:
      'Contacta con VivaceTV por WhatsApp para solicitar tu prueba gratuita de 24h o elige directamente tu plan (Bronze, Silver, Gold o Diamond). Tus credenciales te serán comunicadas en menos de una hora.',
  },
  {
    step: 2,
    title: 'Descargar Televizo en tu dispositivo Android',
    description:
      'Ve a Google Play Store o Amazon Appstore e instala la aplicación Televizo IPTV Player gratuitamente. La aplicación está disponible en todos los dispositivos Android, incluidos los Fire TV Stick.',
  },
  {
    step: 3,
    title: "Abrir Televizo y acceder a 'Mis listas'",
    description:
      "Lanza la aplicación Televizo. En la pantalla de inicio, pulsa en 'Mis listas' y luego en el botón '+' para añadir una nueva lista IPTV.",
  },
  {
    step: 4,
    title: 'Introducir tu URL M3U o credenciales Xtream Codes de VivaceTV',
    description:
      "VivaceTV proporciona dos formatos: una URL M3U para pegar directamente, o credenciales Xtream Codes (servidor, nombre de usuario, contraseña). Elige el formato que prefieras e introduce la información recibida por WhatsApp.",
  },
  {
    step: 5,
    title: 'Cargar tu lista de canales y disfrutar',
    description:
      'Valida la configuración. Televizo importará automáticamente todos tus canales VivaceTV (+22.000 canales). Una vez cargado, puedes navegar por el catálogo, usar la guía de TV (EPG) y ver en HD, 4K o 8K.',
  },
];

const vivacetvAdvantages = [
  'URL M3U y credenciales Xtream Codes proporcionados instantáneamente por WhatsApp',
  '+22.000 canales españoles e internacionales, perfectamente compatibles con Televizo',
  'Guía EPG (programa de TV) proporcionada automáticamente para todos tus dispositivos',
  'Tecnología AntiFreeze 10.0: reproducción fluida sin cortes en Televizo',
  'Soporte WhatsApp 24/7 para ayudarte a configurar Televizo si lo necesitas',
  'Compatible con todas las versiones de Televizo en Android móvil y TV',
];

export default function TelevizoIPTVPage() {
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
          { name: 'Alternativas IPTV', href: '/alternativas' },
          { name: 'Televizo', href: '/alternativas/televizo' },
        ]}
      />
      <Header />

      <main id="main-content">
        <PageHero
          label="APLICACIÓN IPTV"
          title="Televizo IPTV —"
          titleHighlight="¿Aplicación o Suscripción?"
          subtitle="Televizo es un reproductor IPTV gratuito para Android. Para ver canales, necesitas una suscripción IPTV — y VivaceTV es la mejor opción."
        />

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Qué es Televizo IPTV?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Televizo IPTV es una <strong style={{ color: 'var(--color-ink)' }}>aplicación reproductora de IPTV</strong> disponible gratuitamente en Android (Google Play Store y Amazon Appstore). Permite reproducir streams IPTV desde cualquier lista de canales en formato M3U o mediante credenciales Xtream Codes.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Televizo se compara frecuentemente con TiviMate IPTV Player, otra aplicación popular en el mundo del IPTV. Ambas son <em>reproductores</em> — no proporcionan ningún canal por sí mismas. Para ver canales de televisión mediante Televizo, es imprescindible contar con una suscripción IPTV activa de un proveedor como VivaceTV.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Sus funcionalidades principales incluyen la reproducción de streams en HD, 4K y 8K, una guía de programas (EPG) integrada, la gestión de varias listas IPTV, y una interfaz adaptada a dispositivos Android móviles y tablets.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>Televizo es una Aplicación, No una Suscripción IPTV</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>
              Este es el punto esencial que hay que entender: <strong style={{ color: 'var(--color-ink)' }}>Televizo no proporciona ningún canal de televisión</strong>. Es únicamente un reproductor multimedia, como VLC en el ordenador. La aplicación reproduce los streams que le proporcionas mediante una URL M3U o credenciales Xtream Codes.
            </p>
            <div style={{ backgroundColor: 'var(--color-card)', border: '2px solid var(--color-lime)', borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-ink)' }}>En resumen: ¿cómo funciona Televizo?</p>
              <p className="text-sm" style={{ color: 'var(--color-ink-light)' }}>
                <strong style={{ color: 'var(--color-lime)' }}>Televizo (gratuito)</strong> +
                <strong style={{ color: 'var(--color-lime)' }}> VivaceTV (suscripción)</strong> =
                acceso a +22.000 canales en HD/4K/8K en tu dispositivo Android.
              </p>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              Para disfrutar de Televizo, debes suscribirte a un proveedor IPTV de confianza. VivaceTV es 100% compatible con Televizo y proporciona la URL M3U o las credenciales Xtream Codes necesarias para configurar la aplicación en pocos minutos.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>¿Por qué VivaceTV es la Mejor Suscripción para Televizo?</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-ink-light)' }}>
              Para sacar el máximo partido de la aplicación Televizo, necesitas una suscripción IPTV de calidad. VivaceTV es el socio ideal por varias razones:
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {vivacetvAdvantages.map((advantage, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} style={{ color: 'var(--color-lime)', flexShrink: 0, marginTop: 2 }} />
                  <span className="text-base" style={{ color: 'var(--color-ink)' }}>{advantage}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              VivaceTV también ofrece una <strong style={{ color: 'var(--color-ink)' }}>prueba gratuita de 24 horas</strong> bajo simple solicitud por WhatsApp. Es la ocasión ideal para probar la compatibilidad con Televizo en tu dispositivo antes de suscribirte.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Guía de Configuración: Televizo + VivaceTV</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-ink-light)' }}>
              Configurar VivaceTV en la aplicación Televizo es sencillo y rápido. Sigue estos 5 pasos para acceder a +22.000 canales en pocos minutos:
            </p>
            <div className="flex flex-col gap-6">
              {configSteps.map((item) => (
                <div key={item.step} style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                  <div className="flex items-start gap-4">
                    <span style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)', borderRadius: 999, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>{item.step}</span>
                    <div>
                      <h3 className="font-display font-bold text-base mb-2" style={{ color: 'var(--color-ink)' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/comprar-iptv" className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-sm" style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}>
                Obtener mi suscripción VivaceTV →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: 'var(--color-ink)' }}>Televizo vs TiviMate: ¿Qué Aplicación Elegir?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-ink-light)' }}>Televizo y TiviMate son las dos aplicaciones IPTV más usadas en Android. Estas son sus principales diferencias:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-base mb-3" style={{ color: 'var(--color-ink)' }}>Televizo</h3>
                <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                  <li>✅ Gratuita en Google Play</li>
                  <li>✅ Ideal en Android móvil y tablet</li>
                  <li>✅ Interfaz simple e intuitiva</li>
                  <li>✅ Compatible M3U y Xtream Codes</li>
                  <li>⚠️ Funcionalidades EPG limitadas frente a TiviMate</li>
                </ul>
              </div>
              <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                <h3 className="font-display font-bold text-base mb-3" style={{ color: 'var(--color-ink)' }}>TiviMate</h3>
                <ul className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-ink-light)' }}>
                  <li>✅ Referencia en Android TV y Fire TV</li>
                  <li>✅ Guía de TV (EPG) muy avanzada</li>
                  <li>✅ Interfaz premium en pantalla grande</li>
                  <li>⚠️ Versión premium de pago (~5€/año)</li>
                  <li>⚠️ Menos adaptada a dispositivos móviles</li>
                </ul>
              </div>
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <strong style={{ color: 'var(--color-ink)' }}>Buenas noticias:</strong> VivaceTV es totalmente compatible con ambas aplicaciones. Ya uses Televizo en tu teléfono Android o TiviMate en tu Android TV, tus credenciales VivaceTV funcionarán perfectamente en ambas plataformas.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-surface-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>Preguntas Frecuentes — Televizo y VivaceTV</h2>
            <div className="flex flex-col gap-4 mb-10">
              {faqItems.map((item) => (
                <div key={item.question} style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 12, padding: 20 }}>
                  <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-ink)' }}>{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/alternativas', label: 'Todas las alternativas IPTV' },
                { href: '/mejor-iptv-espana', label: 'Mejor IPTV España 2026' },
                { href: '/comprar-iptv', label: 'Suscripciones VivaceTV' },
                { href: '/opiniones-iptv', label: 'Opiniones clientes VivaceTV' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm px-4 py-2 rounded-lg font-medium" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-ink)', border: '1px solid var(--color-border)' }}>
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
