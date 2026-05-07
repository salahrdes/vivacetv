'use client';

import AdminTable, { Column, StatusBadge } from '@/components/admin/AdminTable';
import type { PageRow } from '@/lib/actions/pages';

const columns: Column<PageRow>[] = [
  {
    key: 'title',
    label: 'Titre',
    render: (row) => (
      <div>
        <p className="font-medium text-sm" style={{ color: '#111110' }}>{row.title}</p>
        <p className="text-xs" style={{ color: '#C5C5C0' }}>/{row.slug}</p>
      </div>
    ),
  },
  {
    key: 'status',
    label: 'Statut',
    render: (row) => <StatusBadge status={row.status} />,
  },
  {
    key: 'author',
    label: 'Auteur',
    render: (row) => <span style={{ color: '#6B6B65' }}>{row.author}</span>,
  },
  {
    key: 'updatedAt',
    label: 'Modifié',
    render: (row) => (
      <span className="text-xs" style={{ color: '#9B9B95' }}>
        {new Date(row.updatedAt).toLocaleDateString('fr-FR')}
      </span>
    ),
  },
];

type Props = {
  rows: PageRow[];
  onDelete: (id: string) => Promise<void>;
};

export default function PagesTable({ rows, onDelete }: Props) {
  return (
    <AdminTable<PageRow>
      columns={columns}
      rows={rows}
      editHref={(id) => `/admin/pages/${id}/modifier`}
      onDelete={onDelete}
      emptyMessage="Aucune page. Créez votre première page !"
    />
  );
}
