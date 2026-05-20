import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const trustBadges = [
  'Activación rápida',
  'Soporte 24/7',
  'Compatible con todos los dispositivos',
  'Calidad HD y 4K',
  'Sin permanencia',
];

const contentTiles = [
  { label: 'Deporte',          color: '#8B5CF6', textColor: '#FFFFFF' },
  { label: 'Películas',        color: '#1E1248', textColor: '#C4C4E8' },
  { label: 'Series',           color: '#101032', textColor: '#A78BFA' },
  { label: 'Documentales',     color: '#180F42', textColor: '#C4C4E8' },
  { label: 'Infantil',         color: '#7C3AED', textColor: '#FFFFFF' },
  { label: 'Entretenimiento',  color: '#1E1E4A', textColor: '#C4C4E8' },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-label="Presentación VivaceTV"
    >
      {/* Subtle background grain pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 20%, var(--color-lime-soft) 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">

            {/* Label badge */}
            <div>
              <Badge variant="lime-soft" className="text-sm font-semibold">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-lime)' }}
                  aria-hidden="true"
                />
                IPTV España Premium
              </Badge>
            </div>

            {/* H1 */}
            <h1 className="font-display font-extrabold leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-ink">
              IPTV España: suscripción premium{' '}
              <span style={{ color: 'var(--color-lime)' }}>HD, 4K</span>{' '}
              y multidispositivo
            </h1>

            {/* Description */}
            <p className="text-lg text-ink-light leading-relaxed max-w-xl">
              VivaceTV te ofrece una experiencia IPTV fluida y moderna en España, con calidad
              HD/4K, activación rápida, asistencia 24/7 y compatibilidad con Smart TV, Android,
              iOS, PC, Box TV, Roku, Fire TV y Apple TV.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/prueba-gratis" size="lg" variant="primary">
                Iniciar prueba gratis 24h
              </Button>
              <Button href="#precios" size="lg" variant="secondary">
                Ver suscripciones
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-ink-light)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--color-lime)' }}
                    aria-hidden="true"
                  />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Abstract Device Mockup ── */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">

              {/* Main TV screen */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  backgroundColor: 'var(--color-dark)',
                  aspectRatio: '16/10',
                }}
                role="img"
                aria-label="Suscripción IPTV España en Smart TV y dispositivos compatibles"
              >
                {/* Top bar (faux title bar) */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  aria-hidden="true"
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28C840' }} />
                  </div>
                  <div className="flex-1 mx-4 h-4 rounded-md" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                  <span className="text-xs font-medium" style={{ color: 'var(--color-lime)', fontFamily: 'var(--font-display)' }}>VivaceTV</span>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-3 gap-2 p-4 h-full" aria-hidden="true">
                  {contentTiles.map((tile) => (
                    <div
                      key={tile.label}
                      className="rounded-xl flex items-end p-3 relative overflow-hidden"
                      style={{ backgroundColor: tile.color, minHeight: '72px' }}
                    >
                      {/* Abstract content lines */}
                      <div className="absolute top-3 left-3 right-3 space-y-1.5">
                        <div className="h-1.5 rounded-full opacity-20" style={{ backgroundColor: tile.textColor, width: '60%' }} />
                        <div className="h-1.5 rounded-full opacity-15" style={{ backgroundColor: tile.textColor, width: '40%' }} />
                      </div>
                      <span
                        className="relative text-xs font-semibold leading-none z-10"
                        style={{ color: tile.textColor, fontFamily: 'var(--font-display)' }}
                      >
                        {tile.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom "Now Playing" bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center gap-3"
                  style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
                  aria-hidden="true"
                >
                  <div
                    className="w-8 h-8 rounded-lg shrink-0"
                    style={{ backgroundColor: 'var(--color-lime)' }}
                  />
                  <div className="flex-1 space-y-1">
                    <div className="h-2 rounded-full w-32" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
                    <div className="h-1.5 rounded-full w-20" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                  </div>
                  <div className="text-xs font-bold" style={{ color: 'var(--color-lime)', fontFamily: 'var(--font-display)' }}>
                    HD
                  </div>
                </div>
              </div>

              {/* Floating phone card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl shadow-xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-dark)',
                  width: '120px',
                  height: '160px',
                  border: '2px solid rgba(255,255,255,0.1)',
                }}
                aria-hidden="true"
              >
                {/* Phone notch */}
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-10 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
                </div>
                {/* Phone content tiles */}
                <div className="grid grid-cols-2 gap-1.5 px-2">
                  <div className="rounded-lg h-12" style={{ backgroundColor: 'var(--color-lime)', opacity: 0.9 }} />
                  <div className="rounded-lg h-12" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
                  <div className="rounded-lg h-12" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
                  <div className="rounded-lg h-12" style={{ backgroundColor: 'var(--color-lime-soft)', opacity: 0.6 }} />
                </div>
                {/* Phone bottom bar */}
                <div className="mt-2 mx-2 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
              </div>

              {/* Floating badge: HD 4K */}
              <div
                className="absolute -top-4 -right-2 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg text-xs font-bold"
                style={{
                  backgroundColor: 'var(--color-lime)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-display)',
                }}
                aria-hidden="true"
              >
                <span>⚡</span> HD / 4K
              </div>

              {/* Floating badge: Support */}
              <div
                className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-xl px-3 py-2 shadow-lg text-xs font-semibold"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-body)',
                }}
                aria-hidden="true"
              >
                <div className="font-bold text-sm" style={{ color: 'var(--color-ink)' }}>Soporte 24/7</div>
                <div style={{ color: 'var(--color-gray-400)' }}>WhatsApp</div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -bottom-8 right-12 flex gap-2" aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: i === 1 ? 'var(--color-lime)' : 'var(--color-border)' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
