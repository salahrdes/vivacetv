'use client';

import Link from 'next/link';
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type Props<T extends { id: string }> = {
  columns: Column<T>[];
  rows: T[];
  editHref: (id: string) => string;
  onDelete: (id: string) => Promise<void>;
  emptyMessage?: string;
};

const statusColors: Record<string, { color: string; bg: string }> = {
  DRAFT:     { color: '#9B9B95', bg: '#F4F4F2' },
  PUBLISHED: { color: '#22C55E', bg: '#DCFCE7' },
  ARCHIVED:  { color: '#6B6B65', bg: '#EBEBEA' },
};

export function StatusBadge({ status }: { status: string }) {
  const { color, bg } = statusColors[status] ?? statusColors.DRAFT;
  const labels: Record<string, string> = { DRAFT: 'Brouillon', PUBLISHED: 'Publié', ARCHIVED: 'Archivé' };
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg"
      style={{ color, backgroundColor: bg }}
    >
      {labels[status] ?? status}
    </span>
  );
}

export default function AdminTable<T extends { id: string }>({
  columns, rows, editHref, onDelete, emptyMessage = 'Aucun élément.',
}: Props<T>) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!window.confirm('Supprimer cet élément ?')) return;
    setDeletingId(id);
    try { await onDelete(id); } finally { setDeletingId(null); }
  }

  if (!rows.length) {
    return (
      <div className="flex items-center justify-center py-20 text-sm" style={{ color: '#C5C5C0' }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: '1px solid #F0F0EE' }}>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                style={{ color: '#C5C5C0' }}
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 w-24" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.id}
              className="transition-colors hover:bg-black/[0.015]"
              style={{ borderBottom: i < rows.length - 1 ? '1px solid #F0F0EE' : 'none', opacity: deletingId === row.id ? 0.4 : 1 }}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3.5" style={{ color: '#111110' }}>
                  {col.render
                    ? col.render(row)
                    : String((row as Record<string, unknown>)[String(col.key)] ?? '—')}
                </td>
              ))}
              {/* Actions */}
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-1 justify-end">
                  <Link
                    href={editHref(row.id)}
                    className="inline-flex items-center justify-center w-7 h-7 rounded-lg transition-colors hover:bg-black/5"
                    style={{ color: '#6B6B65' }}
                    aria-label="Modifier"
                  >
                    <Pencil size={13} />
                  </Link>
                  <button
                    onClick={() => handleDelete(row.id)}
                    disabled={deletingId === row.id}
                    className="inline-flex items-center justify-center w-7 h-7 rounded-lg transition-colors hover:bg-red-50"
                    style={{ color: '#EF4444' }}
                    aria-label="Supprimer"
                  >
                    <Trash2 size={13} />
                  </button>
                  <button
                    className="inline-flex items-center justify-center w-7 h-7 rounded-lg transition-colors hover:bg-black/5"
                    style={{ color: '#C5C5C0' }}
                    aria-label="Plus d'options"
                  >
                    <MoreHorizontal size={13} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
