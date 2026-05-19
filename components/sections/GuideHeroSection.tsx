import { BookOpen, MessageCircle, Clock } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

const badges = [
  { icon: <BookOpen size={14} aria-hidden="true" />,    label: 'Guide complet étape par étape' },
  { icon: <Clock size={14} aria-hidden="true" />,       label: 'Installation en moins de 5 min' },
  { icon: <MessageCircle size={14} aria-hidden="true" />, label: 'Support WhatsApp inclus' },
];

export default function GuideHeroSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-dark)' }}
      aria-labelledby="guide-hero-heading"
    >
      {/* Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(199,227,107,0.09) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">

        {/* Label */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase"
          style={{ backgroundColor: 'rgba(199,227,107,0.12)', color: 'var(--color-lime)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-lime)' }} aria-hidden="true" />
          Guide d'installation IPTV
        </span>

        {/* H1 */}
        <h1
          id="guide-hero-heading"
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight"
          style={{ color: 'var(--color-surface)' }}
        >
          Installer VivaceTV{' '}
          <span style={{ color: 'var(--color-lime)' }}>en 5 minutes</span>
          <br />
          sur n'importe quel appareil
        </h1>

        {/* Description */}
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-gray-400)' }}
        >
          Smart TV Samsung, LG, Fire TV Stick, Android, iPhone, iPad, PC ou Mac — suivez notre
          guide pas à pas pour configurer votre abonnement IPTV France en quelques clics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#installation"
            className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
          >
            Voir le guide
          </a>
          <a
            href={buildWhatsAppUrl('Bonjour VivaceTV, j\'ai besoin d\'aide pour l\'installation')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/10"
            style={{ color: 'var(--color-surface)', border: '1.5px solid rgba(255,255,255,0.15)' }}
          >
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Assistance WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
          {badges.map(({ icon, label }) => (
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
