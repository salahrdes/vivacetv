'use client';

import AdminTable, { Column } from '@/components/admin/AdminTable';
import type { OrderRow } from '@/lib/actions/orders';
import type { OrderStatus } from '@/lib/generated/prisma/client';

const ORDER_STATUS_STYLE: Record<OrderStatus, { color: string; bg: string; label: string }> = {
  PENDING:   { color: '#D97706', bg: '#FEF3C7', label: 'En attente' },
  CONTACTED: { color: '#3B82F6', bg: '#EFF6FF', label: 'Contacté' },
  ACTIVE:    { color: '#22C55E', bg: '#DCFCE7', label: 'Actif' },
  EXPIRED:   { color: '#9B9B95', bg: '#F4F4F2', label: 'Expiré' },
  CANCELLED: { color: '#EF4444', bg: '#FEF2F2', label: 'Annulé' },
};

function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const s = ORDER_STATUS_STYLE[status] ?? ORDER_STATUS_STYLE.PENDING;
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg"
      style={{ color: s.color, backgroundColor: s.bg }}
    >
      {s.label}
    </span>
  );
}

const columns: Column<OrderRow>[] = [
  {
    key: 'customerName',
    label: 'Client',
    render: (row) => (
      <div>
        <p className="font-medium text-sm" style={{ color: '#111110' }}>{row.customerName}</p>
        <a
          href={`https://wa.me/${row.customerWhatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:underline"
          style={{ color: '#22C55E' }}
        >
          {row.customerWhatsapp}
        </a>
      </div>
    ),
  },
  {
    key: 'plan',
    label: 'Forfait',
    render: (row) => (
      <div>
        <p className="font-semibold text-sm capitalize" style={{ color: '#111110' }}>{row.plan}</p>
        <p className="text-xs" style={{ color: '#9B9B95' }}>{row.planDuration} — {row.planPrice.toFixed(2)}€</p>
      </div>
    ),
  },
  { key: 'device', label: 'Appareil' },
  {
    key: 'status',
    label: 'Statut',
    render: (row) => <OrderStatusBadge status={row.status} />,
  },
  {
    key: 'createdAt',
    label: 'Reçue le',
    render: (row) => (
      <span className="text-xs" style={{ color: '#9B9B95' }}>
        {new Date(row.createdAt).toLocaleDateString('fr-FR', {
          day: '2-digit', month: 'short', year: 'numeric',
        })}
      </span>
    ),
  },
];

type Props = {
  rows: OrderRow[];
  onDelete: (id: string) => Promise<void>;
};

export default function OrdersTable({ rows, onDelete }: Props) {
  return (
    <AdminTable<OrderRow>
      columns={columns}
      rows={rows}
      editHref={(id) => `/admin/commandes/${id}`}
      onDelete={onDelete}
      emptyMessage="Aucune commande pour l'instant."
    />
  );
}
