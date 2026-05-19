import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Series España — Catálogo Completo HD y 4K | VivaceTV',
  description: 'Ve todas tus series favoritas con IPTV en España. HBO, Netflix Originals, Amazon Prime, Disney+ y canales españoles. Calidad HD y 4K. Prueba gratis 24h.',
  keywords: ['iptv series españa', 'ver series iptv', 'iptv series hd', 'series iptv premium'],
  alternates: { canonical: `${siteConfig.url}/canales/series` },
  openGraph: { title: 'IPTV Series España — Catálogo Completo HD y 4K', locale: 'es_ES', url: `${siteConfig.url}/canales/series` },
};

export default function SeriesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <section className="py-20 px-4 text-center bg-[var(--color-dark)]">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ background: 'var(--color-lime-soft)', color: 'var(--color-lime)' }}>
          📺 Series Premium Incluidas
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-6 max-w-4xl mx-auto">
          IPTV Series España —{' '}
          <span style={{ color: 'var(--color-lime)' }}>Todo el Catálogo en HD y 4K</span>
        </h1>
        <p className="text-[var(--color-ink-light)] text-xl max-w-2xl mx-auto mb-10">
          Accede a miles de series de HBO, Netflix Originals, Amazon Prime, Disney+, Movistar+ y más.
          Todo en una sola suscripción. Sin límites. Calidad HD y 4K.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/prueba-gratis" className="px-8 py-4 rounded-xl font-semibold text-white" style={{ background: 'var(--color-lime)' }}>
            Prueba Gratis 24h
          </a>
          <a href="/comprar-iptv" className="px-8 py-4 rounded-xl font-semibold border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}>
            Ver Precios
          </a>
        </div>
      </section>
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-12">Plataformas Incluidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['HBO Max', 'Netflix', 'Amazon Prime', 'Disney+', 'Movistar+', 'Apple TV+', 'Antena 3', 'Telecinco'].map(p => (
            <div key={p} className="p-5 rounded-2xl border text-center font-semibold text-[var(--color-ink)]"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              {p}
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-dark)' }}>
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] mb-4">Empieza a Ver Ahora</h2>
        <p className="text-[var(--color-ink-light)] mb-8">Activación en 5 minutos. Compatible con todos tus dispositivos.</p>
        <a href="/comprar-iptv" className="inline-block px-10 py-4 rounded-xl font-bold text-white text-lg" style={{ background: 'var(--color-lime)' }}>
          Comprar IPTV España
        </a>
      </section>
    </main>
  );
}
