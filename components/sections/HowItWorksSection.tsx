import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Elige tu plan IPTV',
    description:
      'Selecciona la suscripción que se adapta a tu duración, dispositivo y uso.',
  },
  {
    number: '02',
    title: 'Indica tu dispositivo y tu contacto de WhatsApp',
    description:
      'Te enviamos la información adaptada a tu configuración y a tu aplicación IPTV.',
  },
  {
    number: '03',
    title: 'Recibe tus datos por WhatsApp',
    description:
      'Tras tu solicitud, nuestro equipo te contacta por WhatsApp para finalizar tu suscripción y enviarte los datos necesarios.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="comment-ca-marche"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Cómo funciona"
          title="¿Cómo empezar con VivaceTV?"
          description="En unos pocos pasos sencillos puedes elegir tu plan, recibir tus accesos y empezar a ver contenido en tu dispositivo favorito."
          className="mb-16"
        />

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px z-0"
            style={{ backgroundColor: 'var(--color-border)' }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center gap-5"
            >
              {/* Step number circle */}
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full font-display font-extrabold text-2xl shrink-0 shadow-sm"
                style={
                  index === 1
                    ? { backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }
                    : { backgroundColor: 'var(--color-card)', color: 'var(--color-ink)', border: '2px solid var(--color-border)' }
                }
              >
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-[260px] mx-auto"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
