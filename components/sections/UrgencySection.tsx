import { buildWhatsAppUrl } from '@/lib/utils';
import { ShieldCheck, Zap, MessageCircle, Gift, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { value: '+500',   label: 'Clients satisfaits',  sub: 'en France' },
  { value: '+22K',   label: 'Chaînes disponibles',  sub: 'incluses dans tous les forfaits' },
  { value: '< 5min', label: 'Délai d\'activation',  sub: 'après confirmation' },
  { value: '24/7',   label: 'Support WhatsApp',     sub: 'toujours disponible' },
];

const reasons = [
  {
    icon: <Gift size={20} aria-hidden="true" />,
    title: 'Test gratuit 24h sans risque',
    description:
      'Essayez ClarioTV avant de vous engager. Si la qualité ne vous convient pas, vous ne payez rien.',
  },
  {
    icon: <Zap size={20} aria-hidden="true" />,
    title: 'Activation en moins de 5 minutes',
    description:
      'Envoyez votre demande via WhatsApp et recevez vos informations d\'accès rapidement. Pas d\'attente.',
  },
  {
    icon: <ShieldCheck size={20} aria-hidden="true" />,
    title: 'Aucun compte, aucun engagement',
    description:
      'Pas de mot de passe, pas de profil à créer. Vous choisissez la durée qui vous convient.',
  },
  {
    icon: <MessageCircle size={20} aria-hidden="true" />,
    title: 'Support humain via WhatsApp',
    description:
      'Un conseiller réel vous répond — pour l\'installation, la configuration ou toute question.',
  },
  {
    icon: <TrendingUp size={20} aria-hidden="true" />,
    title: 'Plus vous prenez long, plus vous économisez',
    description:
      'Le forfait 12 mois Gold est à 44,99 € — soit moins de 3,75 €/mois pour une qualité HD/4K/8K.',
  },
  {
    icon: <Clock size={20} aria-hidden="true" />,
    title: 'Recommandé et renouvelé par nos clients',
    description:
      '« Je vous recontacte dans 1 an alors » — la majorité de nos clients renouvellent leur abonnement.',
  },
];

export default function UrgencySection() {
  return (
    <section
      id="pourquoi-maintenant"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="urgency-heading"
    >
      {/* Lime glow accent */}
      <div
        className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(199,227,107,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label + heading */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-lime)' }}
              aria-hidden="true"
            />
            Ne manquez pas cette opportunité
          </span>

          <h2
            id="urgency-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-3xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Pourquoi commander{' '}
            <span style={{ color: 'var(--color-lime)' }}>ClarioTV maintenant</span>{' '}
            plutôt que demain ?
          </h2>

          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
            Chaque jour sans abonnement, c'est un jour sans accès à des milliers de chaînes, de films
            et de séries. La configuration prend moins de 5 minutes.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-14 rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--color-border)' }}
          aria-label="Chiffres ClarioTV"
        >
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-7 px-4 text-center gap-1"
              style={{ backgroundColor: 'var(--color-card)' }}
            >
              <span
                className="font-display font-extrabold text-3xl sm:text-4xl"
                style={{ color: 'var(--color-ink)' }}
              >
                {value}
              </span>
              <span className="text-sm font-semibold" style={{ color: 'var(--color-ink-light)' }}>
                {label}
              </span>
              <span className="text-xs" style={{ color: 'var(--color-gray-400)' }}>
                {sub}
              </span>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-2xl transition-all duration-200 hover:shadow-sm"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
              >
                {reason.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-display font-bold text-base mb-1 leading-snug"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
          style={{ backgroundColor: 'var(--color-dark)' }}
        >
          <div>
            <p className="font-display font-extrabold text-xl sm:text-2xl" style={{ color: 'var(--color-surface)' }}>
              Commencez avec un test gratuit 24h
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-gray-400)' }}>
              Vérifiez la compatibilité sur votre appareil avant de vous engager.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl('Bonjour ClarioTV, je souhaite un test gratuit 24h')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
            style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
          >
            {/* WhatsApp icon inline */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Démarrer mon test gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
