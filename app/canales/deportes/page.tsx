import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'IPTV Deportes España — Fútbol, La Liga, Champions League en Vivo | VivaceTV',
  description:
    'Disfruta de todos los deportes en vivo con IPTV: La Liga, Champions League, NBA, Fórmula 1, MotoGP, Tenis y más. Calidad HD y 4K sin cortes. Prueba gratis 24h.',
  keywords: ['iptv futbol españa', 'iptv deportes españa', 'iptv la liga', 'iptv champions league', 'ver futbol iptv'],
  alternates: { canonical: `${siteConfig.url}/canales/deportes` },
  openGraph: {
    title: 'IPTV Deportes España — Fútbol, La Liga, Champions League en Vivo',
    description: 'Todos los deportes en vivo con calidad HD y 4K. La Liga, Champions, NBA, F1 y más.',
    locale: 'es_ES',
    url: `${siteConfig.url}/canales/deportes`,
  },
};

export default function DeportesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)]">

      {/* Hero */}
      <section className="py-20 px-4 text-center bg-[var(--color-dark)]">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ background: 'var(--color-lime-soft)', color: 'var(--color-lime)' }}>
          🏆 Canales Deportivos Premium
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-ink)] mb-6 max-w-4xl mx-auto">
          IPTV Deportes España —{' '}
          <span style={{ color: 'var(--color-lime)' }}>Fútbol, La Liga y Champions en Vivo</span>
        </h1>
        <p className="text-[var(--color-ink-light)] text-xl max-w-2xl mx-auto mb-10">
          Accede a todos los canales deportivos de España y el mundo. La Liga, Champions League,
          NBA, Fórmula 1, MotoGP, Tenis y mucho más. Calidad HD y 4K sin interrupciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/prueba-gratis"
            className="px-8 py-4 rounded-xl font-semibold text-white transition-all"
            style={{ background: 'var(--color-lime)' }}>
            Prueba Gratis 24h — Sin Tarjeta
          </a>
          <a href="/comprar-iptv"
            className="px-8 py-4 rounded-xl font-semibold border transition-all"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-ink)' }}>
            Ver Planes y Precios
          </a>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-12">
          Todos los Deportes Incluidos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { sport: '⚽ Fútbol', desc: 'La Liga, Champions, Europa League, Copa del Rey' },
            { sport: '🏀 Baloncesto', desc: 'NBA, ACB Liga, Euroliga' },
            { sport: '🏎️ Fórmula 1', desc: 'Todos los Grandes Premios en HD' },
            { sport: '🏍️ MotoGP', desc: 'MotoGP, Moto2, Moto3 en vivo' },
            { sport: '🎾 Tenis', desc: 'Roland Garros, Wimbledon, US Open, Australian Open' },
            { sport: '🥊 Boxeo & UFC', desc: 'Combates en vivo y PPV' },
            { sport: '⛳ Golf', desc: 'PGA Tour, Ryder Cup y más' },
            { sport: '🏊 Olimpiadas', desc: 'Juegos Olímpicos completos' },
          ].map(({ sport, desc }) => (
            <div key={sport}
              className="p-6 rounded-2xl border text-center"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              <div className="text-4xl mb-3">{sport.split(' ')[0]}</div>
              <h3 className="font-semibold text-[var(--color-ink)] mb-2">{sport.split(' ').slice(1).join(' ')}</h3>
              <p className="text-sm text-[var(--color-ink-light)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] text-center mb-10">
          Preguntas Frecuentes — IPTV Deportes
        </h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Puedo ver La Liga con VivaceTV?',
              a: 'Sí, VivaceTV incluye todos los canales que retransmiten La Liga en España: Movistar+, DAZN, ESPN y más. Todos en HD y 4K.',
            },
            {
              q: '¿Se puede ver la Champions League en vivo?',
              a: 'Absolutamente. Incluimos todos los partidos de la UEFA Champions League y Europa League en directo, sin interrupciones.',
            },
            {
              q: '¿Funciona en Smart TV para ver el fútbol?',
              a: 'Sí, compatible con Samsung, LG, Sony y todas las Smart TV. También funciona en Android TV, Firestick, iPhone, iPad y PC.',
            },
            {
              q: '¿Hay retrasos en los partidos en vivo?',
              a: 'Nuestros servidores anti-freeze garantizan latencia mínima (<3 segundos), ideal para deportes en directo.',
            },
          ].map(({ q, a }) => (
            <div key={q}
              className="p-6 rounded-2xl border"
              style={{ background: 'var(--color-card)', borderColor: 'var(--color-border)' }}>
              <h3 className="font-semibold text-[var(--color-ink)] mb-3">{q}</h3>
              <p className="text-[var(--color-ink-light)]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: 'var(--color-dark)' }}>
        <h2 className="font-display text-3xl font-bold text-[var(--color-ink)] mb-4">
          ¿Listo para ver todos los deportes?
        </h2>
        <p className="text-[var(--color-ink-light)] mb-8 max-w-xl mx-auto">
          Activa tu suscripción en minutos. Prueba gratis 24 horas sin tarjeta de crédito.
        </p>
        <a href="/comprar-iptv"
          className="inline-block px-10 py-4 rounded-xl font-bold text-white text-lg transition-all"
          style={{ background: 'var(--color-lime)' }}>
          Comprar IPTV España — Desde €9.99/mes
        </a>
      </section>

    </main>
  );
}
