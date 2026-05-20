import { Shield, Zap, Clock } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

const trustBadges = [
  { icon: <Shield size={15} aria-hidden="true" />, label: 'Sin permanencia' },
  { icon: <Zap size={15} aria-hidden="true" />,    label: 'Activación en 5 min' },
  { icon: <Clock size={15} aria-hidden="true" />,  label: 'Prueba gratis 24h' },
];

export default function AbonnementsHero() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)' }}
      aria-labelledby="abonnements-hero-heading"
    >
      {/* Lime glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(199,227,107,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">

        {/* Label */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase"
          style={{ backgroundColor: 'rgba(199,227,107,0.12)', color: 'var(--color-lime)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'var(--color-lime)' }}
            aria-hidden="true"
          />
          Suscripciones IPTV España
        </span>

        {/* H1 */}
        <h1
          id="abonnements-hero-heading"
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
          style={{ color: 'var(--color-ink)' }}
        >
          La mejor suscripción{' '}
          <span style={{ color: 'var(--color-lime)' }}>IPTV España</span>
          <br />
          HD, 4K &amp; 8K
        </h1>

        {/* Description */}
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-gray-400)' }}
        >
          Accede a más de 22 000 canales, 160 000 películas y series en calidad HD, 4K y 8K.
          Compatible con Smart TV, Android, iOS, PC, Firestick y Apple TV. Activación en menos de 5 minutos.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#abonnements"
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
          >
            Ver los planes
          </a>
          <a
            href={buildWhatsAppUrl('Hola VivaceTV, quiero una prueba gratis de 24h')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/10"
            style={{
              color: 'var(--color-ink)',
              border: '1.5px solid rgba(255,255,255,0.15)',
            }}
          >
            Prueba gratis 24h
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-2">
          {trustBadges.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--color-gray-400)' }}
            >
              <span style={{ color: 'var(--color-lime)' }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
