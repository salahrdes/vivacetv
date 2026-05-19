import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Películas España — Miles de Títulos HD y 4K | VivaceTV',
  description: 'Accede a miles de películas en HD y 4K con tu suscripción IPTV en España. Últimos estrenos, clásicos, cine internacional. Sin límites. Prueba gratis 24h.',
  keywords: ['iptv peliculas españa', 'ver peliculas iptv', 'iptv vod españa', 'peliculas hd iptv'],
  alternates: { canonical: `${siteConfig.url}/canales/peliculas` },
  openGraph: { title: 'IPTV Películas España — Miles de Títulos HD y 4K', locale: 'es_ES', url: `${siteConfig.url}/canales/peliculas` },
};

export default function PeliculasPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <section className="py-20 px-4 text-center bg-[var(--color-dark)]">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ background: 'var(--color-lime-soft)', color: 'var(--color-lime)' }}>
          🎬 Catálogo de Películas Premium
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-6 max-w-4xl mx-auto">
          IPTV Películas España —{' '}
          <span style={{ color: 'var(--color-lime)' }}>50.000+ Títulos HD y 4K</span>
        </h1>
        <p className="text-[var(--color-ink-light)] text-xl max-w-2xl mx-auto mb-10">
          Accede a miles de películas en HD y 4K. Últimos estrenos, clásicos del cine,
          películas en español e internacionales. Todo incluido en tu suscripción VivaceTV.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/prueba-gratis" className="px-8 py-4 rounded-xl font-semibold text-white" style={{ background: 'var(--color-lime)' }}>
            Prueba Gratis 24h
          </a>
          <a href="/comprar-iptv" className="px-8 py-4 rounded-xl font-semibold border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}>
            Ver Planes
          </a>
        </div>
      </section>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-12">Categorías Disponibles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {['🎭 Acción y Aventura', '💕 Comedia y Romance', '😱 Terror y Thriller', '🎬 Drama y Oscar', '🚀 Ciencia Ficción', '👨‍👩‍👧 Familiar e Infantil'].map(cat => (
            <div key={cat} className="p-6 rounded-2xl border text-center" style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              <div className="text-3xl mb-2">{cat.split(' ')[0]}</div>
              <p className="font-medium text-[var(--color-ink)]">{cat.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-dark)' }}>
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] mb-4">Miles de Películas te Esperan</h2>
        <p className="text-[var(--color-ink-light)] mb-8">Activa tu cuenta en 5 minutos. Sin contrato. Sin tarjeta para la prueba.</p>
        <a href="/comprar-iptv" className="inline-block px-10 py-4 rounded-xl font-bold text-white text-lg" style={{ background: 'var(--color-lime)' }}>
          Comprar IPTV España
        </a>
      </section>
    </main>
  );
}
