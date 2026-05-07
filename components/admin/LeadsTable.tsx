'use client';

import AdminTable, { Column } from '@/components/admin/AdminTable';
import type { LeadRow } from '@/lib/actions/leads';
import type { LeadStatus, LeadType } from '@/lib/generated/prisma/client';

const LEAD_STATUS_STYLE: Record<LeadStatus, { color: string; bg: string; label: string }> = {
  NEW:       { color: '#D97706', bg: '#FEF3C7', label: 'Nouveau' },
  CONTACTED: { color: '#3B82F6', bg: '#EFF6FF', label: 'Contacté' },
  CONVERTED: { color: '#22C55E', bg: '#DCFCE7', label: 'Converti' },
  LOST:      { color: '#9B9B95', bg: '#F4F4F2', label: 'Perdu' },
};

const LEAD_TYPE_STYLE: Record<LeadType, { color: string; bg: string; label: string }> = {
  CONTACT:      { color: '#6B6B65', bg: '#F4F4F2', label: 'Contact' },
  TEST_GRATUIT: { color: '#8B5CF6', bg: '#EDE9FE', label: 'Test gratuit' },
};

function LeadStatusBadge({ status }: { status: LeadStatus }) {
  const s = LEAD_STATUS_STYLE[status] ?? LEAD_STATUS_STYLE.NEW;
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg"
      style={{ color: s.color, backgroundColor: s.bg }}>
      {s.label}
    </span>
  );
}

function LeadTypeBadge({ type }: { type: LeadType }) {
  const t = LEAD_TYPE_STYLE[type] ?? LEAD_TYPE_STYLE.CONTACT;
  return (
    <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg"
      style={{ color: t.color, backgroundColor: t.bg }}>
      {t.label}
    </span>
  );
}

const columns: Column<LeadRow>[] = [
  {
    key: 'name',
    label: 'Contact',
    render: (row) => (
      <div>
        <p className="font-medium text-sm" style={{ color: '#111110' }}>{row.name}</p>
        {row.email ? (
          <a href={`mailto:${row.email}`} className="text-xs hover:underline" style={{ color: '#3B82F6' }}>
            {row.email}
          </a>
        ) : (
          <a
            href={`https://wa.me/${row.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline"
            style={{ color: '#22C55E' }}
          >
            {row.whatsapp}
          </a>
        )}
      </div>
    ),
  },
  {
    key: 'type',
    label: 'Type',
    render: (row) => <LeadTypeBadge type={row.type} />,
  },
  {
    key: 'subject',
    label: 'Sujet',
    render: (row) => (
      <span className="text-sm" style={{ color: '#6B6B65' }}>
        {row.subject ?? '—'}
      </span>
    ),
  },
  {
    key: 'status',
    label: 'Statut',
    render: (row) => <LeadStatusBadge status={row.status} />,
  },
  {
    key: 'createdAt',
    label: 'Reçu le',
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
  rows: LeadRow[];
  onDelete: (id: string) => Promise<void>;
};

export default function LeadsTable({ rows, onDelete }: Props) {
  return (
    <AdminTable<LeadRow>
      columns={columns}
      rows={rows}
      editHref={(id) => `/admin/leads/${id}`}
      onDelete={onDelete}
      emptyMessage="Aucun lead pour l'instant."
    />
  );
}
