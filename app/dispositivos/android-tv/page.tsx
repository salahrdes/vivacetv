import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Android TV España — Mejor App y Configuración | VivaceTV',
  description: 'Instala IPTV en Android TV o Android Box en España. Compatible con NVIDIA Shield, Chromecast, Xiaomi Box y más. Guía completa. Prueba gratis 24h.',
  keywords: ['iptv android tv españa', 'mejor app iptv android', 'iptv android box españa', 'configurar iptv android tv'],
  alternates: { canonical: `${siteConfig.url}/dispositivos/android-tv` },
  openGraph: { title: 'IPTV Android TV España — Mejor App y Configuración', locale: 'es_ES', url: `${siteConfig.url}/dispositivos/android-tv` },
};

export default function AndroidTVPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <section className="py-20 px-4 text-center bg-[var(--color-dark)]">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-6 max-w-4xl mx-auto">
          IPTV Android TV España —{' '}
          <span style={{ color: 'var(--color-lime)' }}>Mejor App y Configuración</span>
        </h1>
        <p className="text-[var(--color-ink-light)] text-xl max-w-2xl mx-auto mb-10">
          Compatible con Android TV, Android Box, NVIDIA Shield, Chromecast con Google TV,
          Xiaomi Mi Box y cualquier dispositivo con Android 5.0+.
        </p>
        <a href="/prueba-gratis" className="inline-block px-8 py-4 rounded-xl font-semibold text-white" style={{ background: 'var(--color-lime)' }}>
          Prueba Gratis 24h — Sin Tarjeta
        </a>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-10">Apps Recomendadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { app: 'IPTV Smarters Pro', desc: 'La app más popular. Fácil de configurar, soporte M3U y Xtream Codes.', rating: '⭐⭐⭐⭐⭐' },
            { app: 'TiviMate', desc: 'Interfaz premium, EPG completo, múltiples perfiles. La favorita de expertos.', rating: '⭐⭐⭐⭐⭐' },
            { app: 'GSE Smart IPTV', desc: 'Gratuita y potente. Compatible con todos los formatos M3U.', rating: '⭐⭐⭐⭐' },
          ].map(({ app, desc, rating }) => (
            <div key={app} className="p-6 rounded-2xl border" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold text-[var(--color-ink)] mb-2">{app}</h3>
              <p className="text-sm text-[var(--color-ink-light)] mb-3">{desc}</p>
              <span className="text-sm">{rating}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 text-center" style={{ background: 'var(--color-dark)' }}>
        <a href="/comprar-iptv" className="inline-block px-10 py-4 rounded-xl font-bold text-white" style={{ background: 'var(--color-lime)' }}>
          Comprar IPTV España
        </a>
      </section>
    </main>
  );
}
