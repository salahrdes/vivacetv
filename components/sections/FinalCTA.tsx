import Button from '@/components/ui/Button';
import { buildWhatsAppUrl } from '@/lib/utils';

export default function FinalCTA() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-dark)' }}
      aria-label="Appel à l'action final"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <div
          className="w-12 h-1 rounded-full"
          style={{ backgroundColor: 'var(--color-lime)' }}
          aria-hidden="true"
        />

        <h2
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
          style={{ color: 'var(--color-surface)' }}
        >
          Prêt à profiter d'une expérience{' '}
          <span style={{ color: 'var(--color-lime)' }}>IPTV simple</span>{' '}
          et moderne ?
        </h2>

        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-gray-400)' }}
        >
          Choisissez votre abonnement IPTV France, vérifiez la compatibilité de votre appareil
          et recevez vos informations directement via WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href={buildWhatsAppUrl('Bonjour VivaceTV, je souhaite commander maintenant')}
            size="lg"
            variant="primary"
            external
          >
            Commander maintenant
          </Button>
          <Button
            href={buildWhatsAppUrl('Bonjour VivaceTV, j\'ai une question')}
            size="lg"
            variant="ghost"
            external
            className="text-surface border border-surface/20 hover:bg-surface/10 hover:text-surface"
          >
            Contacter un conseiller
          </Button>
        </div>
      </div>
    </section>
  );
}
