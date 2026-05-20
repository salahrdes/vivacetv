import { Check } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

type CellValue = string | boolean | string[];

type TableRow = {
  label: string;
  bronze: CellValue;
  silver: CellValue;
  gold: CellValue;
  diamond: CellValue;
};

const tableRows: TableRow[] = [
  {
    label: 'Precio',
    bronze: '22,99 €',
    silver: '34,99 €',
    gold: '44,99 €',
    diamond: '74,99 €',
  },
  {
    label: 'Duración',
    bronze: '3 meses',
    silver: '6 meses',
    gold: '12 meses',
    diamond: '24 meses',
  },
  {
    label: 'Número de canales',
    bronze: '+22 000',
    silver: '+22 000',
    gold: '+22 000',
    diamond: '+22 000',
  },
  {
    label: 'Películas y series',
    bronze: '+60 000',
    silver: '+100 000',
    gold: '+160 000',
    diamond: '+160 000',
  },
  {
    label: 'Calidad de vídeo',
    bronze: '4K / HD / SD',
    silver: 'SD / HD / 4K',
    gold: 'SD / HD / 4K / 8K',
    diamond: 'SD / HD / 4K / 8K',
  },
  {
    label: 'IPTV Smarters Pro',
    bronze: true,
    silver: true,
    gold: true,
    diamond: true,
  },
  {
    label: 'Netflix, Disney+',
    bronze: 'Netflix, Apple',
    silver: 'Netflix, Disney+, Apple',
    gold: 'Netflix, Disney+, Apple',
    diamond: 'Netflix, Disney+, Apple',
  },
  {
    label: 'AntiFreeze 10.0',
    bronze: true,
    silver: true,
    gold: true,
    diamond: true,
  },
  {
    label: 'TV en diferido',
    bronze: true,
    silver: true,
    gold: true,
    diamond: true,
  },
  {
    label: 'Actualizaciones gratuitas',
    bronze: true,
    silver: true,
    gold: true,
    diamond: true,
  },
  {
    label: 'Asistencia',
    bronze: '24/7',
    silver: '24/7',
    gold: '24/7',
    diamond: 'VIP 24/7',
  },
];

const plans = [
  { key: 'bronze' as const, name: 'Bronze',  isFeatured: false, waText: 'Hola VivaceTV, quiero comprar el plan Bronze (3 meses - 22,99€)' },
  { key: 'silver' as const, name: 'Silver',  isFeatured: false, waText: 'Hola VivaceTV, quiero comprar el plan Silver (6 meses - 34,99€)' },
  { key: 'gold'   as const, name: 'Gold',    isFeatured: true,  waText: 'Hola VivaceTV, quiero comprar el plan Gold (12 meses - 44,99€)' },
  { key: 'diamond'as const, name: 'Diamond', isFeatured: false, waText: 'Hola VivaceTV, quiero comprar el plan Diamond (24 meses - 74,99€)' },
];

function CellContent({ value, isFeatured }: { value: CellValue; isFeatured: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full"
        style={{ backgroundColor: isFeatured ? 'rgba(199,227,107,0.18)' : 'var(--color-lime-soft)' }}
      >
        <Check
          size={13}
          strokeWidth={3}
          style={{ color: isFeatured ? 'var(--color-lime)' : 'var(--color-dark)' }}
          aria-hidden="true"
        />
      </span>
    ) : (
      <span style={{ color: 'var(--color-gray-400)' }}>—</span>
    );
  }

  return (
    <span
      className="text-sm font-medium leading-snug"
      style={{ color: isFeatured ? 'var(--color-surface)' : 'var(--color-ink)' }}
    >
      {value}
    </span>
  );
}

export default function PlanComparisonTable() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface)' }}
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wider uppercase"
            style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
          >
            Comparativa completa
          </span>
          <h2
            id="comparison-heading"
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-3xl"
            style={{ color: 'var(--color-ink)' }}
          >
            Comparativa de Planes{' '}
            <span style={{ color: 'var(--color-lime)' }}>IPTV</span>
          </h2>
          <p
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-ink-light)' }}
          >
            Elige el plan adaptado a tu uso. Todos incluyen los mismos canales — la duración y los extras marcan la diferencia.
          </p>
        </div>

        {/* Table wrapper — horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--color-border)' }}>
          <table className="w-full min-w-[640px] border-collapse" aria-label="Comparativa de planes VivaceTV">
            <thead>
              <tr>
                {/* Feature label column */}
                <th
                  className="text-left text-sm font-semibold py-5 px-6"
                  style={{
                    color: 'var(--color-gray-600)',
                    backgroundColor: 'var(--color-card)',
                    borderBottom: '1px solid var(--color-border)',
                    width: '28%',
                  }}
                >
                  Característica
                </th>

                {/* Plan columns */}
                {plans.map((plan) => (
                  <th
                    key={plan.key}
                    className="py-5 px-4 text-center"
                    style={{
                      backgroundColor: plan.isFeatured ? 'var(--color-dark)' : 'var(--color-card)',
                      borderBottom: plan.isFeatured
                        ? '2px solid var(--color-lime)'
                        : '1px solid var(--color-border)',
                    }}
                    scope="col"
                  >
                    <div className="flex flex-col items-center gap-1">
                      {plan.isFeatured && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-1"
                          style={{ backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }}
                        >
                          ✦ Recomendado
                        </span>
                      )}
                      <span
                        className="font-display font-extrabold text-lg"
                        style={{ color: plan.isFeatured ? 'var(--color-surface)' : 'var(--color-ink)' }}
                      >
                        {plan.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {tableRows.map((row, rowIdx) => {
                const isEven = rowIdx % 2 === 0;
                return (
                  <tr key={row.label}>
                    {/* Label */}
                    <td
                      className="py-4 px-6 text-sm font-medium"
                      style={{
                        color: 'var(--color-ink-light)',
                        backgroundColor: isEven ? 'var(--color-surface)' : 'var(--color-card)',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      {row.label}
                    </td>

                    {/* Cells */}
                    {plans.map((plan) => (
                      <td
                        key={plan.key}
                        className="py-4 px-4 text-center align-middle"
                        style={{
                          backgroundColor: plan.isFeatured
                            ? isEven
                              ? 'rgba(28,26,23,1)'
                              : 'rgba(32,30,26,1)'
                            : isEven
                            ? 'var(--color-surface)'
                            : 'var(--color-card)',
                          borderBottom: plan.isFeatured
                            ? '1px solid rgba(255,255,255,0.06)'
                            : '1px solid var(--color-border)',
                          borderLeft: plan.isFeatured ? '1px solid rgba(199,227,107,0.15)' : undefined,
                          borderRight: plan.isFeatured ? '1px solid rgba(199,227,107,0.15)' : undefined,
                        }}
                      >
                        <CellContent value={row[plan.key]} isFeatured={plan.isFeatured} />
                      </td>
                    ))}
                  </tr>
                );
              })}

              {/* CTA row */}
              <tr>
                <td
                  className="py-6 px-6 text-sm font-semibold"
                  style={{
                    color: 'var(--color-ink)',
                    backgroundColor: 'var(--color-card)',
                    borderTop: '2px solid var(--color-border)',
                  }}
                >
                  Comprar
                </td>
                {plans.map((plan) => (
                  <td
                    key={plan.key}
                    className="py-6 px-4 text-center"
                    style={{
                      backgroundColor: plan.isFeatured ? 'var(--color-dark)' : 'var(--color-card)',
                      borderTop: plan.isFeatured ? '2px solid var(--color-lime)' : '2px solid var(--color-border)',
                      borderLeft: plan.isFeatured ? '1px solid rgba(199,227,107,0.15)' : undefined,
                      borderRight: plan.isFeatured ? '1px solid rgba(199,227,107,0.15)' : undefined,
                    }}
                  >
                    <a
                      href={buildWhatsAppUrl(plan.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={
                        plan.isFeatured
                          ? { backgroundColor: 'var(--color-lime)', color: 'var(--color-dark)' }
                          : {
                              backgroundColor: 'transparent',
                              color: 'var(--color-ink)',
                              border: '1.5px solid var(--color-border)',
                            }
                      }
                    >
                      Elegir {plan.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs" style={{ color: 'var(--color-gray-400)' }}>
          Todos los planes son activados manualmente por nuestro equipo vía WhatsApp. Pago único, sin suscripción recurrente.
        </p>
      </div>
    </section>
  );
}
