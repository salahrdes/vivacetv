import { cn } from '@/lib/utils';

type PageHeroProps = {
  label?: string;
  title: string;
  titleHighlight?: string;   // appended to title in lime color
  subtitle?: string;
  className?: string;
  children?: React.ReactNode; // for extra CTAs / badges
};

/** Reusable dark hero used on all inner pages: /blog, /faq, /contact, etc. */
export default function PageHero({
  label,
  title,
  titleHighlight,
  subtitle,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn('py-16 lg:py-24 relative overflow-hidden', className)}
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      {/* Subtle lime glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(199,227,107,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
        {label && (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest uppercase"
            style={{ backgroundColor: 'rgba(199,227,107,0.12)', color: 'var(--color-lime)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-lime)' }}
              aria-hidden="true"
            />
            {label}
          </span>
        )}

        <h1
          className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight"
          style={{ color: 'var(--color-surface)' }}
        >
          {title}
          {titleHighlight && (
            <>
              {' '}
              <span style={{ color: 'var(--color-lime)' }}>{titleHighlight}</span>
            </>
          )}
        </h1>

        {subtitle && (
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-gray-400)' }}
          >
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
