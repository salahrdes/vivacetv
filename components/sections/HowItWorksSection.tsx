import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Choisissez votre forfait IPTV',
    description:
      'Sélectionnez l\'abonnement qui correspond à votre durée, votre appareil et votre usage.',
  },
  {
    number: '02',
    title: 'Indiquez votre appareil et votre contact WhatsApp',
    description:
      'Nous vous envoyons les informations adaptées à votre configuration et à votre application IPTV.',
  },
  {
    number: '03',
    title: 'Recevez vos informations via WhatsApp',
    description:
      'Après votre demande, notre équipe vous contacte sur WhatsApp pour finaliser votre abonnement et vous envoyer les informations nécessaires.',
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
          label="Comment ça marche"
          title="Comment démarrer avec VivaceTV ?"
          description="En quelques étapes simples, vous pouvez choisir votre forfait, recevoir vos accès et commencer à regarder sur votre appareil préféré."
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
