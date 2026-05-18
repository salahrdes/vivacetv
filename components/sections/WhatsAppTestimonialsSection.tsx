'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

type Slide = {
  src: string;
  alt: string;
  /** Short pull-quote shown below the phone */
  quote: string;
};

const slides: Slide[] = [
  {
    src: '/testimonials/client-1.jpg',
    alt: 'Conversation WhatsApp — client satisfait : "Ah oui il est parfait, très commercial"',
    quote: '« C\'est la 1ère fois que je tombe sur un service commercial comme vous »',
  },
  {
    src: '/testimonials/client-2.jpg',
    alt: 'Conversation WhatsApp — client satisfait : "Très satisfait, Je vous recontacte dans 1ans"',
    quote: '« Très satisfait. Je vous recontacte dans 1 an alors 👍 »',
  },
  {
    src: '/testimonials/client-3.jpg',
    alt: 'Conversation WhatsApp — client satisfait : "Oui merci c\'est bon, sa fonctionne"',
    quote: '« Oui merci c\'est bon, sa fonctionne 👍 — Merci beaucoup ❤️ »',
  },
  {
    src: '/testimonials/client-4.jpg',
    alt: 'Conversation WhatsApp — client satisfait : "Cela fonctionne super"',
    quote: '« Cela fonctionne super. Du coup pour l\'installer sur l\'autre fire stick… »',
  },
];

export default function WhatsAppTestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), []);

  /* Swipe support */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      id="temoignages-whatsapp"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-dark)' }}
      aria-labelledby="wa-testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Avis réels WhatsApp"
          title="Ce que nos clients disent après l'activation"
          description="Des retours authentiques de clients en France — directement depuis leur messagerie WhatsApp, après avoir activé leur abonnement ClarioTV."
          dark
          className="mb-14"
        />

        <div className="flex flex-col items-center gap-8">

          {/* Carousel track */}
          <div
            className="relative w-full max-w-sm mx-auto select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-roledescription="carousel"
            aria-label="Témoignages WhatsApp"
          >
            {/* Phone frame */}
            <div
              className="relative mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl"
              style={{
                width: '280px',
                aspectRatio: '9/19',
                backgroundColor: '#111',
                border: '6px solid #2a2a2a',
                boxShadow: '0 0 0 1px #3a3a3a, 0 32px 80px rgba(0,0,0,0.6)',
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Notch */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 z-10 rounded-full"
                style={{ width: '80px', height: '22px', backgroundColor: '#111' }}
                aria-hidden="true"
              />

              {/* Screenshot images */}
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={slide.src}
                    className="relative shrink-0 w-full h-full"
                    aria-hidden={i !== current}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-top"
                      sizes="280px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 flex items-center justify-center w-11 h-11 rounded-full transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--color-surface)' }}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 flex items-center justify-center w-11 h-11 rounded-full transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'var(--color-surface)' }}
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Quote */}
          <p
            className="text-base text-center max-w-sm leading-relaxed italic"
            style={{ color: 'rgba(255,255,255,0.65)' }}
            aria-live="polite"
          >
            {slides[current].quote}
          </p>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Sélectionner un témoignage">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === current}
                aria-label={`Témoignage ${i + 1}`}
                onClick={() => setCurrent(i)}
                className="flex items-center justify-center"
                style={{
                  minWidth: '24px',
                  minHeight: '24px',
                  background: 'none',
                  padding: '8px 4px',
                }}
              >
                <span
                  className="rounded-full transition-all duration-200 block"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: i === current ? 'var(--color-lime)' : 'rgba(255,255,255,0.2)',
                  }}
                />
              </button>
            ))}
          </div>

          {/* WhatsApp authenticity badge */}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{ backgroundColor: 'rgba(37,211,102,0.12)', color: '#25D366', border: '1px solid rgba(37,211,102,0.25)' }}
          >
            {/* WhatsApp logo inline */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Conversations WhatsApp authentiques
          </div>
        </div>
      </div>
    </section>
  );
}
