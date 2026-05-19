import { Star } from 'lucide-react';
import { testimonials } from '@/config/testimonials';
import SectionHeader from '@/components/ui/SectionHeader';

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`} role="img">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < full ? 'var(--color-lime)' : 'none'}
          strokeWidth={i < full ? 0 : 1.5}
          style={{ color: i < full ? 'var(--color-lime)' : 'var(--color-gray-400)' }}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1.5 text-xs font-semibold" style={{ color: 'var(--color-ink-light)' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="avis"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Avis clients"
          title="Ils font confiance à VivaceTV pour leur IPTV en France"
          description="Des utilisateurs en France choisissent VivaceTV pour une expérience simple, rapide et compatible avec leurs appareils."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={`${t.name}-${t.city}`}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review text */}
              <blockquote>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
                  &ldquo;{t.review}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full font-display font-bold text-sm shrink-0"
                  style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-gray-600)' }}>
                    {t.city}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
