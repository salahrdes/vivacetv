import { cn } from '@/lib/utils';
import Badge from './Badge';

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  dark?: boolean;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {label && (
        <Badge variant={dark ? 'dark' : 'lime-soft'}>{label}</Badge>
      )}
      <h2
        className={cn(
          'font-display font-bold leading-tight tracking-tight',
          'text-3xl sm:text-4xl lg:text-5xl',
          'text-ink',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg max-w-2xl leading-relaxed',
            'text-ink-light',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
