import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-lime text-dark hover:bg-lime-hover font-semibold shadow-sm',
  secondary:
    'border-2 border-ink text-ink hover:bg-ink hover:text-surface bg-transparent font-semibold',
  ghost:
    'text-ink-light hover:text-ink hover:bg-border/50 font-medium',
  dark:
    'bg-dark text-lime hover:bg-dark/80 font-semibold',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm:  'px-4 py-2 text-sm rounded-xl',
  md:  'px-6 py-3 text-base rounded-xl',
  lg:  'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
