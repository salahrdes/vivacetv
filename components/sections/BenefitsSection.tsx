import { Server, Monitor, Smartphone, Zap, Headphones, Play } from 'lucide-react';
import { benefits } from '@/config/benefits';
import SectionHeader from '@/components/ui/SectionHeader';

const iconMap: Record<string, React.ReactNode> = {
  server:      <Server size={22} aria-hidden="true" />,
  monitor:     <Monitor size={22} aria-hidden="true" />,
  devices:     <Smartphone size={22} aria-hidden="true" />,
  zap:         <Zap size={22} aria-hidden="true" />,
  headphones:  <Headphones size={22} aria-hidden="true" />,
  play:        <Play size={22} aria-hidden="true" />,
};

export default function BenefitsSection() {
  return (
    <section
      id="avantages"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Pourquoi ClarioTV"
          title="Pourquoi choisir ClarioTV pour votre IPTV en France ?"
          description="Un abonnement IPTV France doit être simple, stable et compatible avec vos usages. ClarioTV réunit qualité d'image, activation rapide, assistance et expérience multi-appareils dans une interface claire et moderne."
          className="mb-14"
          titleClassName="max-w-3xl mx-auto"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group flex flex-col gap-4 p-7 rounded-2xl transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-200 group-hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-lime-soft)',
                  color: 'var(--color-dark)',
                  transform: 'none',
                }}
              >
                {iconMap[benefit.icon]}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
