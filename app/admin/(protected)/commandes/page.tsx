import { getOrders, deleteOrder } from '@/lib/actions/orders';
import OrdersTable from '@/components/admin/OrdersTable';
import type { OrderRow } from '@/lib/actions/orders';
import { ShoppingCart } from 'lucide-react';

export default async function CommandesPage() {
  const orders = await getOrders();

  const pendingCount   = orders.filter((o) => o.status === 'PENDING').length;
  const contactedCount = orders.filter((o) => o.status === 'CONTACTED').length;
  const activeCount    = orders.filter((o) => o.status === 'ACTIVE').length;

  return (
    <div className="p-8 max-w-7xl mx-auto w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-2xl" style={{ color: '#F5F5F1' }}>
            Commandes
          </h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {orders.length} commande{orders.length !== 1 ? 's' : ''} au total
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'En attente', value: pendingCount, color: '#D97706', bg: '#FEF3C7' },
          { label: 'Contactés',  value: contactedCount, color: '#3B82F6', bg: '#EFF6FF' },
          { label: 'Actifs',     value: activeCount, color: '#22C55E', bg: '#DCFCE7' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#1C1C1A', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-2xl font-bold font-display" style={{ color: stat.color }}>
              {stat.value}
            </p>
            <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Table card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#fff', border: '1px solid #F0F0EE' }}
      >
        <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: '1px solid #F0F0EE' }}>
          <ShoppingCart size={16} style={{ color: '#C5C5C0' }} />
          <h2 className="font-semibold text-sm" style={{ color: '#111110' }}>
            Toutes les commandes
          </h2>
        </div>
        <OrdersTable rows={orders} onDelete={deleteOrder} />
      </div>
    </div>
  );
}
