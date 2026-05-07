import { cn } from '@/lib/utils';

type BadgeVariant = 'lime' | 'lime-soft' | 'dark' | 'surface' | 'discount';

type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<BadgeVariant, string> = {
  'lime':      'bg-lime text-dark',
  'lime-soft': 'bg-lime-soft text-dark',
  'dark':      'bg-dark text-lime',
  'surface':   'bg-card border border-border text-ink-light',
  'discount':  'bg-lime-soft text-dark font-bold',
};

export default function Badge({ variant = 'lime-soft', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
