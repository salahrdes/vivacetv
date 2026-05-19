import type { Metadata } from 'next';
import { auth } from '@/lib/auth';
import {
  ShoppingCart,
  Users,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Eye,
  Check,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = { title: 'Dashboard' };

/* ─── Types ──────────────────────────────────────────────────────────────────── */
type StatCard = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ElementType;
  accent: string;
};

type RecentOrder = {
  id: string;
  name: string;
  plan: string;
  date: string;
  status: 'pending' | 'active' | 'expired';
  amount: string;
};

/* ─── Mock data (replaced by DB queries in Phase 1) ─────────────────────────── */
const stats: StatCard[] = [
  { label: 'Commandes ce mois', value: '—',      change: 'Disponible avec DB', positive: true,  icon: ShoppingCart, accent: 'var(--color-lime)' },
  { label: 'Leads / Tests',     value: '—',      change: 'Disponible avec DB', positive: true,  icon: Users,        accent: '#60A5FA'            },
  { label: 'Articles publiés',  value: '8',      change: 'Tout le contenu',    positive: true,  icon: FileText,     accent: '#F59E0B'            },
  { label: 'Revenus estimés',   value: '—',      change: 'Disponible avec DB', positive: false, icon: TrendingUp,   accent: '#34D399'            },
];

const recentOrders: RecentOrder[] = [
  { id: '#00001', name: 'Jean Dupont',      plan: 'Gold — 12 mois',   date: '1 mai 2026, 10:23', status: 'pending',  amount: '44.99€' },
  { id: '#00002', name: 'Marie Martin',     plan: 'Silver — 6 mois',  date: '1 mai 2026, 09:11', status: 'active',   amount: '34.99€' },
  { id: '#00003', name: 'Karim Bensalem',   plan: 'Diamond — 24 mois',date: '30 avr 2026, 18:45',status: 'active',   amount: '74.99€' },
  { id: '#00004', name: 'Sophie Leclerc',   plan: 'Bronze — 3 mois',  date: '30 avr 2026, 14:30',status: 'pending',  amount: '22.99€' },
  { id: '#00005', name: 'Thomas Girard',    plan: 'Gold — 12 mois',   date: '29 avr 2026, 22:05',status: 'expired',  amount: '44.99€' },
];

/* ─── Sub-components ─────────────────────────────────────────────────────────── */
function KpiCard({ stat }: { stat: StatCard }) {
  const { label, value, change, positive, icon: Icon, accent } = stat;
  return (
    <div
      className="flex flex-col gap-4 p-5 rounded-2xl"
      style={{ backgroundColor: '#fff', border: '1px solid #EBEBEA', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
    >
      <div className="flex items-start justify-between">
        <span
          className="inline-flex items-center justify-center w-9 h-9 rounded-xl"
          style={{ backgroundColor: accent + '18' }}
          aria-hidden="true"
        >
          <Icon size={16} style={{ color: accent }} />
        </span>
        <button className="opacity-30 hover:opacity-60 transition-opacity" aria-label="Options">
          <MoreHorizontal size={15} style={{ color: '#111110' }} />
        </button>
      </div>
      <div>
        <p className="text-2xl font-display font-bold" style={{ color: '#111110' }}>{value}</p>
        <p className="text-xs mt-0.5" style={{ color: '#9B9B95' }}>{label}</p>
      </div>
      <div className="flex items-center gap-1">
        {positive
          ? <ArrowUpRight size={13} style={{ color: '#22C55E' }} aria-hidden="true" />
          : <ArrowDownRight size={13} style={{ color: '#EF4444' }} aria-hidden="true" />}
        <span className="text-xs" style={{ color: '#9B9B95' }}>{change}</span>
      </div>
    </div>
  );
}

const statusConfig = {
  pending:  { label: 'En attente', color: '#F59E0B', bg: '#FEF3C7', icon: Clock   },
  active:   { label: 'Actif',      color: '#22C55E', bg: '#DCFCE7', icon: Check   },
  expired:  { label: 'Expiré',     color: '#9B9B95', bg: '#F4F4F4', icon: Clock   },
};

function StatusBadge({ status }: { status: RecentOrder['status'] }) {
  const { label, color, bg, icon: Icon } = statusConfig[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg"
      style={{ color, backgroundColor: bg }}
    >
      <Icon size={10} aria-hidden="true" />
      {label}
    </span>
  );
}

/* ─── Bar chart (CSS-only) ───────────────────────────────────────────────────── */
const monthlyData = [
  { month: 'Jan', h: 40 }, { month: 'Fév', h: 60 }, { month: 'Mar', h: 45 },
  { month: 'Avr', h: 80 }, { month: 'Mai', h: 100 }, { month: 'Jun', h: 70 },
];

function MiniBarChart({ accent = 'var(--color-lime)' }: { accent?: string }) {
  const max = Math.max(...monthlyData.map((d) => d.h));
  return (
    <div className="flex items-end gap-1 h-16 mt-3" aria-hidden="true">
      {monthlyData.map(({ month, h }, i) => {
        const isLast = i === monthlyData.length - 2; // highlight peak
        return (
          <div key={month} className="flex flex-col items-center gap-1 flex-1">
            <div
              className="w-full rounded-t-sm transition-all"
              style={{
                height: `${(h / max) * 56}px`,
                backgroundColor: isLast ? accent : accent + '35',
              }}
            />
            <span style={{ fontSize: 9, color: '#C5C5C0' }}>{month}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────────── */
export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="flex gap-6 h-full">
      {/* ── Left + Center ─────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0 flex flex-col gap-6 p-6 lg:p-8 overflow-y-auto">

        {/* Page title */}
        <div>
          <h1 className="font-display font-bold text-xl" style={{ color: '#111110' }}>
            Tableau de bord
          </h1>
          <p className="text-sm mt-0.5" style={{ color: '#9B9B95' }}>
            Bienvenue, {session?.user?.name} — voici l&apos;activité VivaceTV.
          </p>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((s) => <KpiCard key={s.label} stat={s} />)}
        </div>

        {/* Recent orders table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#fff', border: '1px solid #EBEBEA', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
        >
          {/* Table header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #EBEBEA' }}>
            <div>
              <p className="font-semibold text-sm" style={{ color: '#111110' }}>Commandes récentes</p>
              <p className="text-xs mt-0.5" style={{ color: '#9B9B95' }}>Dernières commandes reçues via WhatsApp</p>
            </div>
            <button
              className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors hover:bg-black/5"
              style={{ color: '#111110', border: '1px solid #EBEBEA' }}
            >
              Voir tout
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid #F5F5F3' }}>
                  {['Nom', 'Forfait', 'Date', 'Statut', 'Montant', ''].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#C5C5C0' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr
                    key={order.id}
                    className="transition-colors hover:bg-black/[0.02]"
                    style={{ borderBottom: i < recentOrders.length - 1 ? '1px solid #F5F5F3' : 'none' }}
                  >
                    <td className="px-5 py-3.5">
                      <div>
                        <p className="font-medium text-sm" style={{ color: '#111110' }}>{order.name}</p>
                        <p className="text-xs" style={{ color: '#C5C5C0' }}>{order.id}</p>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm" style={{ color: '#6B6B65' }}>{order.plan}</td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: '#9B9B95' }}>{order.date}</td>
                    <td className="px-5 py-3.5"><StatusBadge status={order.status} /></td>
                    <td className="px-5 py-3.5 font-semibold text-sm" style={{ color: '#111110' }}>{order.amount}</td>
                    <td className="px-5 py-3.5">
                      <button className="opacity-20 hover:opacity-50 transition-opacity" aria-label="Voir">
                        <Eye size={14} style={{ color: '#111110' }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Right panel ───────────────────────────────────────────────── */}
      <div
        className="w-[280px] shrink-0 flex flex-col gap-5 p-5 overflow-y-auto"
        style={{ borderLeft: '1px solid #EBEBEA', backgroundColor: '#fff' }}
      >
        {/* Revenue card */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>
              Revenus totaux
            </p>
            <button className="opacity-30 hover:opacity-60 transition-opacity" aria-label="Options">
              <MoreHorizontal size={14} style={{ color: '#111110' }} />
            </button>
          </div>
          <p className="font-display font-bold text-2xl" style={{ color: '#111110' }}>—</p>
          <p className="text-xs mt-0.5" style={{ color: '#22C55E' }}>Disponible après activation DB</p>
          <MiniBarChart accent="var(--color-lime)" />
        </div>

        <div style={{ borderTop: '1px solid #EBEBEA' }} />

        {/* Leads card */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#C5C5C0' }}>
              Tests gratuits
            </p>
            <button className="opacity-30 hover:opacity-60 transition-opacity" aria-label="Options">
              <MoreHorizontal size={14} style={{ color: '#111110' }} />
            </button>
          </div>
          <p className="font-display font-bold text-2xl" style={{ color: '#111110' }}>—</p>
          <p className="text-xs mt-0.5" style={{ color: '#60A5FA' }}>Demandes de test gratuit 24h</p>
          <MiniBarChart accent="#60A5FA" />
        </div>

        <div style={{ borderTop: '1px solid #EBEBEA' }} />

        {/* Quick actions */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C5C5C0' }}>
            Actions rapides
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Nouvel article blog',    href: '/admin/blog/nouveau'    },
              { label: 'Voir les commandes',     href: '/admin/commandes'       },
              { label: 'Gérer les forfaits',     href: '/admin/parametres'      },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-black/[0.03]"
                style={{ color: '#111110', border: '1px solid #EBEBEA' }}
              >
                {label}
                <ArrowUpRight size={13} style={{ color: '#C5C5C0' }} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #EBEBEA' }} />

        {/* Setup checklist */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C5C5C0' }}>
            Configuration
          </p>
          <div className="flex flex-col gap-2">
            {[
              { done: true,  label: 'Base de données connectée'    },
              { done: true,  label: 'AUTH_SECRET configuré'        },
              { done: true,  label: 'Migration appliquée'          },
              { done: true,  label: 'Super Admin créé'             },
              { done: false, label: 'Changer le mot de passe'      },
              { done: false, label: 'Connecter le domaine Hostinger'},
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span
                  className="flex items-center justify-center w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: item.done ? 'var(--color-lime)' : '#EBEBEA' }}
                  aria-hidden="true"
                >
                  {item.done && <Check size={9} style={{ color: '#111110' }} />}
                </span>
                <span
                  className="text-xs"
                  style={{ color: item.done ? '#6B6B65' : '#111110', textDecoration: item.done ? 'line-through' : 'none' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
