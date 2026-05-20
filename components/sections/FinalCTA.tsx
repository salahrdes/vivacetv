import Button from '@/components/ui/Button';
import { buildWhatsAppUrl } from '@/lib/utils';

export default function FinalCTA() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-dark)' }}
      aria-label="Llamada a la acción final"
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
          ¿Listo para disfrutar de una experiencia{' '}
          <span style={{ color: 'var(--color-lime)' }}>IPTV sencilla</span>{' '}
          y moderna?
        </h2>

        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-gray-400)' }}
        >
          Elige tu suscripción IPTV España, comprueba la compatibilidad de tu dispositivo
          y recibe tus datos directamente por WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href={buildWhatsAppUrl('Hola VivaceTV, quiero comprar ahora')}
            size="lg"
            variant="primary"
            external
          >
            Comprar ahora
          </Button>
          <Button
            href={buildWhatsAppUrl('Hola VivaceTV, tengo una pregunta')}
            size="lg"
            variant="ghost"
            external
            className="text-surface border border-surface/20 hover:bg-surface/10 hover:text-surface"
          >
            Contactar con un asesor
          </Button>
        </div>
      </div>
    </section>
  );
}
