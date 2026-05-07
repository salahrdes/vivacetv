import { cn } from '@/lib/utils';

/* ─── Input ─────────────────────────────────────────────────────────────── */
type InputFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  className?: string;
};

export function InputField({
  id,
  label,
  type = 'text',
  placeholder,
  required,
  value,
  onChange,
  error,
  className,
}: InputFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: 'var(--color-ink)' }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: 'var(--color-lime)' }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'off'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
        style={{
          backgroundColor: 'var(--color-card)',
          border: `1.5px solid ${error ? '#dc2626' : 'var(--color-border)'}`,
          color: 'var(--color-ink)',
        }}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs" style={{ color: '#dc2626' }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Select ─────────────────────────────────────────────────────────────── */
type SelectFieldProps = {
  id: string;
  label: string;
  options: readonly string[];
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  className?: string;
};

export function SelectField({
  id,
  label,
  options,
  placeholder = 'Sélectionner…',
  required,
  value,
  onChange,
  error,
  className,
}: SelectFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: 'var(--color-ink)' }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: 'var(--color-lime)' }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 appearance-none cursor-pointer"
        style={{
          backgroundColor: 'var(--color-card)',
          border: `1.5px solid ${error ? '#dc2626' : 'var(--color-border)'}`,
          color: value ? 'var(--color-ink)' : 'var(--color-gray-400)',
        }}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : undefined}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="text-xs" style={{ color: '#dc2626' }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Textarea ───────────────────────────────────────────────────────────── */
type TextareaFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  className?: string;
};

export function TextareaField({
  id,
  label,
  placeholder,
  required,
  rows = 4,
  value,
  onChange,
  error,
  className,
}: TextareaFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium"
        style={{ color: 'var(--color-ink)' }}
      >
        {label}
        {required && (
          <span className="ml-1" style={{ color: 'var(--color-lime)' }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 resize-y"
        style={{
          backgroundColor: 'var(--color-card)',
          border: `1.5px solid ${error ? '#dc2626' : 'var(--color-border)'}`,
          color: 'var(--color-ink)',
          minHeight: `${rows * 1.75}rem`,
        }}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={error ? 'true' : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs" style={{ color: '#dc2626' }} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
