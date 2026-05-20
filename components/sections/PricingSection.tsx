import Link from 'next/link';
import { Check, Shield, Zap, CreditCard } from 'lucide-react';
import { plans } from '@/config/plans';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const trustItems = [
  { icon: <Shield size={15} aria-hidden="true" />, label: 'Pago 100% seguro' },
  { icon: <Zap size={15} aria-hidden="true" />,    label: 'Activación instantánea' },
  { icon: <CreditCard size={15} aria-hidden="true" />, label: 'Varios métodos de pago' },
];

function formatPrice(price: number) {
  return price.toFixed(2).replace('.', ',');
}

export default function PricingSection() {
  return (
    <section
      id="precios"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="NUESTRAS OFERTAS IPTV"
          title="Elige el plan IPTV que mejor se adapta a ti"
          description="Planes IPTV flexibles, en HD/4K/8K, compatibles con todos los dispositivos. Disfruta del mejor streaming con nuestra suscripción IPTV España."
          className="mb-14"
        />

        {/* Cards grid — items-start so non-featured cards don't stretch */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((plan) => {
            return (
              /*
               * FIX: Badge sits here (wrapper = grid item, NO overflow-hidden).
               * Only the inner card div has overflow-hidden.
               * The wrapper's pt-6 on featured cards creates vertical room for the badge.
               */
              <div
                key={plan.id}
                className={cn('relative', plan.isFeatured ? 'pt-6' : '')}
              >
                {/* ── Featured badge ─────────────────────────────────────
                    Positioned relative to the wrapper (not the card),
                    so overflow-hidden on the card cannot clip it.
                ─────────────────────────────────────────────────────── */}
                {plan.isFeatured && (
                  <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-md whitespace-nowrap"
                      style={{ backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }}
                    >
                      ✦ {plan.featuredLabel}
                    </span>
                  </div>
                )}

                {/* ── Card (overflow-hidden is safe here) ────────────── */}
                <div
                  className={cn(
                    'relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200',
                    plan.isFeatured
                      ? 'shadow-2xl ring-2'
                      : 'shadow-sm hover:shadow-md',
                  )}
                  style={{
                    backgroundColor: plan.isFeatured ? 'var(--color-dark)' : 'var(--color-card)',
                    border: plan.isFeatured ? 'none' : '1px solid var(--color-border)',
                    ...(plan.isFeatured
                      ? ({ outline: '2px solid var(--color-lime)', outlineOffset: '-2px' } as React.CSSProperties)
                      : {}),
                  }}
                >
                  <div className="p-6 flex flex-col gap-5 flex-1">

                    {/* Discount badge */}
                    <div className="flex items-start justify-between">
                      <span
                        className="inline-block text-xs font-bold px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: plan.isFeatured ? 'rgba(139,92,246,0.15)' : 'var(--color-lime-soft)',
                          color: 'var(--color-lime)',
                        }}
                      >
                        -{plan.discountPercent}%
                      </span>
                    </div>

                    {/* Plan name + duration */}
                    <div className="text-center pt-1">
                      <h3
                        className="font-display font-extrabold text-2xl mb-1"
                        style={{ color: 'var(--color-ink)' }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-gray-600)' }}
                      >
                        {plan.duration}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center">
                      <div
                        className="text-sm mb-0.5 price-original"
                        style={{ color: 'var(--color-gray-600)' }}
                      >
                        {formatPrice(plan.priceOriginal)} €
                      </div>
                      <div className="flex items-baseline justify-center gap-1">
                        <span
                          className="font-display font-extrabold text-4xl"
                          style={{ color: 'var(--color-ink)' }}
                        >
                          {formatPrice(plan.priceSale)}
                        </span>
                        <span
                          className="text-lg font-semibold"
                          style={{ color: 'var(--color-gray-600)' }}
                        >
                          €
                        </span>
                      </div>
                      <p
                        className="text-xs mt-1"
                        style={{ color: 'var(--color-gray-600)' }}
                      >
                        Pago único
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      className="h-px w-full"
                      style={{ backgroundColor: plan.isFeatured ? 'rgba(255,255,255,0.08)' : 'var(--color-border)' }}
                    />

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 flex-1" aria-label={`Características ${plan.name}`}>
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check
                            size={15}
                            className="shrink-0 mt-0.5"
                            style={{ color: 'var(--color-lime)' }}
                            aria-hidden="true"
                          />
                          <span
                            className="text-sm leading-snug"
                            style={{ color: 'var(--color-ink-light)' }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA — links to checkout page */}
                    <Link
                      href={`/pedir/${plan.slug}`}
                      className={cn(
                        'mt-2 w-full inline-flex items-center justify-center text-center py-3.5 px-5 rounded-xl font-semibold text-sm transition-all duration-200',
                        plan.isFeatured
                          ? 'hover:opacity-90 active:scale-95'
                          : 'hover:bg-ink hover:text-surface active:scale-95',
                      )}
                      style={
                        plan.isFeatured
                          ? { backgroundColor: 'var(--color-lime)', color: '#FFFFFF' }
                          : {
                              backgroundColor: 'transparent',
                              color: 'var(--color-ink)',
                              border: '1.5px solid var(--color-border)',
                            }
                      }
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          {trustItems.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--color-gray-600)' }}
            >
              <span style={{ color: 'var(--color-lime)' }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: 'var(--color-gray-600)' }}>
          El rendimiento puede variar según tu conexión a Internet, tu dispositivo y la aplicación utilizada.
        </p>
      </div>
    </section>
  );
}
