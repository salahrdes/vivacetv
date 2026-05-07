import { Shield, Zap, Clock } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

const trustBadges = [
  { icon: <Shield size={15} aria-hidden="true" />, label: 'Sans engagement' },
  { icon: <Zap size={15} aria-hidden="true" />,    label: 'Activation en 5 min' },
  { icon: <Clock size={15} aria-hidden="true" />,  label: 'Test gratuit 24h' },
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
          Abonnements IPTV France
        </span>

        {/* H1 */}
        <h1
          id="abonnements-hero-heading"
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
          style={{ color: 'var(--color-surface)' }}
        >
          Le meilleur abonnement{' '}
          <span style={{ color: 'var(--color-lime)' }}>IPTV France</span>
          <br />
          HD, 4K &amp; 8K
        </h1>

        {/* Description */}
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-gray-400)' }}
        >
          Accédez à plus de 22 000 chaînes, 160 000 films et séries en qualité HD, 4K et 8K.
          Compatible Smart TV, Android, iOS, PC, Firestick et Apple TV. Activation en moins de 5 minutes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#abonnements"
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
          >
            Voir les forfaits
          </a>
          <a
            href={buildWhatsAppUrl('Bonjour ClarioTV, je souhaite un test gratuit 24h')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/10"
            style={{
              color: 'var(--color-surface)',
              border: '1.5px solid rgba(255,255,255,0.15)',
            }}
          >
            Test gratuit 24h
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
