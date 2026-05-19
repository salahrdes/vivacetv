import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV en Smart TV España — Instalación Paso a Paso | VivaceTV',
  description: 'Cómo instalar IPTV en tu Smart TV en España. Compatible con Samsung, LG, Sony, Philips y más. Guía fácil paso a paso. Activación en 5 minutos. Prueba gratis.',
  keywords: ['iptv smart tv españa', 'instalar iptv smart tv', 'iptv samsung tv', 'iptv lg tv españa', 'configurar iptv smart tv'],
  alternates: { canonical: `${siteConfig.url}/dispositivos/smart-tv` },
  openGraph: { title: 'IPTV en Smart TV España — Instalación Paso a Paso', locale: 'es_ES', url: `${siteConfig.url}/dispositivos/smart-tv` },
};

export default function SmartTVPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <section className="py-20 px-4 text-center bg-[var(--color-dark)]">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ background: 'var(--color-lime-soft)', color: 'var(--color-lime)' }}>
          📺 Compatible con Smart TV
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-6 max-w-4xl mx-auto">
          IPTV en Smart TV España —{' '}
          <span style={{ color: 'var(--color-lime)' }}>Instalación en 5 Minutos</span>
        </h1>
        <p className="text-[var(--color-ink-light)] text-xl max-w-2xl mx-auto mb-10">
          Compatible con Samsung, LG, Sony, Philips, Hisense y cualquier Smart TV con Android TV.
          Guía de instalación incluida. Soporte 24/7 por WhatsApp.
        </p>
        <a href="/prueba-gratis" className="inline-block px-8 py-4 rounded-xl font-semibold text-white" style={{ background: 'var(--color-lime)' }}>
          Prueba Gratis 24h — Sin Tarjeta
        </a>
      </section>

      {/* Installation Steps */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-12">
          Cómo Instalar IPTV en Smart TV
        </h2>
        <div className="space-y-6">
          {[
            { step: '1', title: 'Suscríbete a VivaceTV', desc: 'Elige tu plan, realiza el pago y recibes tus credenciales por WhatsApp en minutos.' },
            { step: '2', title: 'Descarga la App IPTV', desc: 'Instala IPTV Smarters Pro o Smart IPTV desde la App Store de tu Smart TV (Samsung, LG, etc.).' },
            { step: '3', title: 'Introduce tus Credenciales', desc: 'Abre la app e introduce el usuario y contraseña que recibiste por WhatsApp.' },
            { step: '4', title: '¡Disfruta!', desc: 'Accede a miles de canales HD y 4K directamente desde tu televisión.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-6 p-6 rounded-2xl border" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                style={{ background: 'var(--color-lime)' }}>
                {step}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] text-lg mb-1">{title}</h3>
                <p className="text-[var(--color-ink-light)]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compatible Brands */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-10">Marcas Compatibles</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {['Samsung', 'LG', 'Sony', 'Philips', 'Hisense', 'TCL'].map(brand => (
            <div key={brand} className="p-4 rounded-xl border text-center font-semibold text-[var(--color-ink)]"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              {brand}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-dark)' }}>
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] mb-4">¿Tienes alguna duda?</h2>
        <p className="text-[var(--color-ink-light)] mb-8">Nuestro equipo de soporte te ayuda por WhatsApp 24/7.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/prueba-gratis" className="px-8 py-4 rounded-xl font-bold text-white" style={{ background: 'var(--color-lime)' }}>
            Prueba Gratis 24h
          </a>
          <a href="/comprar-iptv" className="px-8 py-4 rounded-xl font-semibold border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}>
            Comprar IPTV España
          </a>
        </div>
      </section>
    </main>
  );
}
