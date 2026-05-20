import type { Metadata } from 'next';
import { Shield, Zap, Tv2, MessageCircle, UserX, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buildWhatsAppUrl } from '@/lib/utils';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/ui/PageHero';
import TestRequestForm from '@/components/sections/TestRequestForm';

export const metadata: Metadata = {
  title: 'Prueba IPTV Gratis 24h España — Sin Pago ni Tarjeta | VivaceTV',
  description:
    'Prueba IPTV gratis 24 horas en España. Sin pago, sin tarjeta, sin contrato. Comprueba la calidad HD/4K, LaLiga y +22.000 canales antes de comprar tu suscripción IPTV.',
  keywords: [
    'prueba iptv gratis',
    'prueba iptv gratis 24h',
    'test iptv gratis españa',
    'iptv gratis españa',
    'prueba gratuita iptv',
    'trial iptv españa',
    'probar iptv españa',
    'iptv demo gratis',
  ],
  alternates: { canonical: `${siteConfig.url}/prueba-gratis` },
  openGraph: {
    title: 'Prueba IPTV Gratis 24h España — Sin Pago ni Tarjeta | VivaceTV',
    description:
      'Prueba IPTV gratis 24h en España. Sin pago ni tarjeta. +22.000 canales HD/4K, LaLiga, Champions. Activa tu prueba por WhatsApp en minutos.',
    url: `${siteConfig.url}/prueba-gratis`,
    type: 'website',
  },
};

const benefits = [
  {
    icon: <Tv2 size={22} aria-hidden="true" />,
    title: 'Verificación de compatibilidad',
    desc: 'Prueba VivaceTV en tu dispositivo exacto antes de comprometerte.',
  },
  {
    icon: <MessageCircle size={22} aria-hidden="true" />,
    title: 'Asistencia en la instalación',
    desc: 'Nuestro equipo te guía en tiempo real por WhatsApp para la instalación.',
  },
  {
    icon: <Zap size={22} aria-hidden="true" />,
    title: 'Experiencia HD/4K',
    desc: 'Disfruta de una vista previa de la calidad según tu dispositivo y conexión.',
  },
  {
    icon: <UserX size={22} aria-hidden="true" />,
    title: 'Sin cuenta de cliente',
    desc: 'Sin registro, sin contraseña. Solo un acceso de prueba de 24h.',
  },
  {
    icon: <Shield size={22} aria-hidden="true" />,
    title: 'Sin compromiso',
    desc: 'La prueba expira automáticamente. Sin pago, sin renovación automática.',
  },
  {
    icon: <MessageCircle size={22} aria-hidden="true" />,
    title: 'Respuesta rápida por WhatsApp',
    desc: 'Recibes tus accesos en pocos minutos directamente en WhatsApp.',
  },
];

const steps = [
  { n: 1, title: 'Rellena el formulario', desc: 'Indica tu nombre, tu número de WhatsApp y el tipo de dispositivo.' },
  { n: 2, title: 'Indica tu dispositivo', desc: 'Smart TV, Firestick, Android, iPhone, PC — adaptamos la configuración.' },
  { n: 3, title: 'Recibe las instrucciones', desc: 'Nuestro equipo te envía tus accesos y una guía de instalación por WhatsApp.' },
  { n: 4, title: 'Prueba durante 24h', desc: 'Disfruta libremente del servicio. Elige después la tarifa que más te convenga.' },
];

const testFaq = [
  {
    q: '¿La prueba gratuita es realmente sin compromiso?',
    a: 'Sí, totalmente. El acceso de prueba expira después de 24 horas sin ningún cargo ni renovación automática.',
  },
  {
    q: '¿Tengo que crear una cuenta para la prueba?',
    a: 'No. Sin cuenta, sin contraseña. Recibes credenciales temporales directamente por WhatsApp.',
  },
  {
    q: '¿Qué dispositivos son compatibles para la prueba?',
    a: 'La prueba está disponible en Smart TV Samsung/LG, Fire TV Stick, Android, iPhone/iPad, PC Windows, Mac y Apple TV.',
  },
  {
    q: '¿Cómo recibiré la información de conexión?',
    a: 'Nuestro equipo te envía la URL del servidor, tu nombre de usuario y tu contraseña directamente por WhatsApp.',
  },
  {
    q: '¿Cuánto dura la prueba?',
    a: '24 horas a partir de la activación. Suficiente para verificar la calidad, la estabilidad y la compatibilidad.',
  },
  {
    q: '¿Puedo obtener ayuda con la instalación durante la prueba?',
    a: 'Sí, nuestro soporte está disponible durante toda la duración de la prueba por WhatsApp para guiarte.',
  },
];

export default function PruebaGratisPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <PageHero
          label="Prueba gratis 24h"
          title="Prueba IPTV gratis 24h"
          titleHighlight="con VivaceTV"
          subtitle="Comprueba la compatibilidad de tu dispositivo y descubre la experiencia VivaceTV antes de elegir tu suscripción IPTV España."
        >
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="#test-form"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
            >
              Solicitar mi prueba gratis
            </a>
            <a
              href={buildWhatsAppUrl('Hola VivaceTV, quiero una prueba gratis de 24h')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/10"
              style={{ color: 'var(--color-surface)', border: '1.5px solid rgba(255,255,255,0.15)' }}
            >
              Por WhatsApp directamente
            </a>
          </div>
        </PageHero>

        {/* ── Beneficios ────────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 flex flex-col items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
              >
                Lo que obtienes
              </span>
              <h2
                id="benefits-heading"
                className="font-display font-extrabold text-3xl sm:text-4xl leading-tight"
                style={{ color: 'var(--color-ink)' }}
              >
                ¿Por qué probar antes de suscribirte?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                    style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--color-ink)' }}>{b.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cómo funciona ────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="steps-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="steps-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl text-center mb-12 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Cómo funciona?
            </h2>
            <ol className="flex flex-col gap-5" aria-label="Pasos para obtener la prueba gratis">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-5 items-start">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full text-base font-bold shrink-0"
                    style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                    aria-hidden="true"
                  >
                    {step.n}
                  </div>
                  <div
                    className="flex-1 p-5 rounded-2xl"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                  >
                    <p className="font-semibold text-base mb-1" style={{ color: 'var(--color-ink)' }}>{step.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Formulario ────────────────────────────────────────────────────── */}
        <section
          id="test-form"
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="form-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                id="form-heading"
                className="font-display font-extrabold text-3xl sm:text-4xl mb-3 leading-tight"
                style={{ color: 'var(--color-ink)' }}
              >
                Solicitar mi prueba gratis
              </h2>
              <p className="text-base" style={{ color: 'var(--color-ink-light)' }}>
                Rellena el formulario y nuestro equipo te contacta por WhatsApp en pocos minutos.
              </p>
            </div>
            <TestRequestForm />
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface)' }}
          aria-labelledby="test-faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="test-faq-heading"
              className="font-display font-extrabold text-2xl sm:text-3xl mb-8 text-center leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              Preguntas sobre la prueba gratis
            </h2>
            <div className="flex flex-col gap-3">
              {testFaq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none font-semibold text-sm"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.q}
                    <ChevronDown
                      size={16}
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      style={{ color: 'var(--color-lime)' }}
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Por qué probar VivaceTV ─────────────────────────────────── */}
        <section
          className="py-16 lg:py-24"
          style={{ backgroundColor: 'var(--color-surface-alt)' }}
          aria-labelledby="pourquoi-tester-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="pourquoi-tester-heading"
              className="font-display font-extrabold text-2xl sm:text-3xl mb-6 leading-tight"
              style={{ color: 'var(--color-ink)' }}
            >
              ¿Por qué probar VivaceTV gratis?
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <p>
                Antes de suscribirte a un servicio IPTV, es fundamental asegurarte de que el servicio funciona perfectamente en tu dispositivo y con tu conexión a internet. VivaceTV ofrece un acceso de prueba gratuito de 24 horas para que puedas verificarlo todo sin ningún riesgo económico.
              </p>
              <p>
                Durante estas 24 horas, accedes a los mismos canales y funcionalidades que los suscriptores de pago: canales españoles, internacionales, deportivos en HD y 4K, así como la función de replay en los canales disponibles. Es la ocasión ideal para probar la estabilidad de la señal, la fluidez de los streams y la calidad de imagen en tu televisión, smartphone o PC.
              </p>
              <p>
                Nuestro equipo de soporte está disponible durante toda la prueba por WhatsApp para ayudarte a configurar tu aplicación IPTV y responder a tus preguntas. Si encuentras cualquier problema técnico, intervenimos en tiempo real para acompañarte hasta que todo funcione correctamente.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA Final ───────────────────────────────────────────────────── */}
        <section
          className="py-16 lg:py-20"
          style={{ backgroundColor: 'var(--color-dark)' }}
          aria-label="Llamada a la acción final"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2
              className="font-display font-extrabold text-3xl sm:text-4xl leading-tight"
              style={{ color: 'var(--color-surface)' }}
            >
              ¿Listo para probar <span style={{ color: 'var(--color-lime)' }}>VivaceTV</span>?
            </h2>
            <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
              Obtén tu prueba gratis de 24h ahora. Sin pago, sin compromiso, activación en pocos minutos.
            </p>
            <a
              href="#test-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
            >
              Solicitar mi prueba gratis
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
