import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { getOrder, updateOrderStatus, updateOrderNotes } from '@/lib/actions/orders';
import type { OrderStatus } from '@/lib/generated/prisma/client';

const ORDER_STATUS_STYLE: Record<OrderStatus, { color: string; bg: string; label: string }> = {
  PENDING:   { color: '#D97706', bg: '#FEF3C7', label: 'En attente' },
  CONTACTED: { color: '#3B82F6', bg: '#EFF6FF', label: 'Contacté' },
  ACTIVE:    { color: '#22C55E', bg: '#DCFCE7', label: 'Actif' },
  EXPIRED:   { color: '#9B9B95', bg: '#F4F4F2', label: 'Expiré' },
  CANCELLED: { color: '#EF4444', bg: '#FEF2F2', label: 'Annulé' },
};

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getOrder(id);
  if (!order) notFound();

  const waNumber = order.customerWhatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Bonjour ${order.customerName}, concernant votre commande ClarioTV ${order.plan} (${order.planDuration}).`
  )}`;

  async function saveStatus(fd: FormData) {
    'use server';
    const status = fd.get('status') as OrderStatus;
    await updateOrderStatus(id, status);
  }

  async function saveNotes(fd: FormData) {
    'use server';
    const notes = (fd.get('notes') as string) ?? '';
    await updateOrderNotes(id, notes);
  }

  const statusStyle = ORDER_STATUS_STYLE[order.status];

  return (
    <div className="p-8 max-w-4xl mx-auto w-full">

      {/* Back */}
      <Link
        href="/admin/commandes"
        className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-70"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        <ArrowLeft size={14} />
        Retour aux commandes
      </Link>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="font-display font-bold text-2xl" style={{ color: '#F5F5F1' }}>
              Commande de {order.customerName}
            </h1>
            <span
              className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg"
              style={{ color: statusStyle.color, backgroundColor: statusStyle.bg }}
            >
              {statusStyle.label}
            </span>
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Reçue le {new Date(order.createdAt).toLocaleDateString('fr-FR', {
              weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
            })}
          </p>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#25D366', color: '#fff' }}
        >
          <MessageCircle size={15} />
          Contacter sur WhatsApp
        </a>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">

        {/* Left — order details */}
        <div className="flex flex-col gap-5">

          {/* Customer info */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: '#fff', border: '1px solid #F0F0EE' }}
          >
            <h2 className="font-semibold text-sm mb-4" style={{ color: '#6B6B65' }}>
              Informations client
            </h2>
            <dl className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Nom', value: order.customerName },
                { label: 'WhatsApp', value: order.customerWhatsapp },
                { label: 'Appareil', value: order.device },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#C5C5C0' }}>
                    {label}
                  </dt>
                  <dd className="text-sm font-medium" style={{ color: '#111110' }}>{value}</dd>
                </div>
              ))}
            </dl>
            {order.message && (
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid #F0F0EE' }}>
                <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#C5C5C0' }}>
                  Message
                </dt>
                <dd className="text-sm leading-relaxed" style={{ color: '#3D382F' }}>
                  {order.message}
                </dd>
              </div>
            )}
          </div>

          {/* Plan info */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: '#fff', border: '1px solid #F0F0EE' }}
          >
            <h2 className="font-semibold text-sm mb-4" style={{ color: '#6B6B65' }}>
              Détails du forfait
            </h2>
            <dl className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Plan', value: <span className="capitalize font-bold">{order.plan}</span> },
                { label: 'Durée', value: order.planDuration },
                { label: 'Prix', value: `${order.planPrice.toFixed(2)}€` },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#C5C5C0' }}>
                    {label}
                  </dt>
                  <dd className="text-sm font-medium" style={{ color: '#111110' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Internal notes */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: '#fff', border: '1px solid #F0F0EE' }}
          >
            <h2 className="font-semibold text-sm mb-4" style={{ color: '#6B6B65' }}>
              Notes internes
            </h2>
            <form action={saveNotes} className="flex flex-col gap-3">
              <textarea
                name="notes"
                defaultValue={order.notes ?? ''}
                rows={4}
                placeholder="Notes privées sur cette commande…"
                className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2"
                style={{
                  border: '1px solid #E2E2DA',
                  backgroundColor: '#FBFBF7',
                  color: '#111110',
                  // @ts-ignore
                  '--tw-ring-color': '#C7E36B',
                }}
              />
              <button
                type="submit"
                className="self-start px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C7E36B', color: '#111110' }}
              >
                Sauvegarder
              </button>
            </form>
          </div>
        </div>

        {/* Right — status update */}
        <div>
          <div
            className="rounded-2xl p-6 sticky top-24"
            style={{ backgroundColor: '#1C1C1A', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <h2 className="font-semibold text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Changer le statut
            </h2>
            <form action={saveStatus} className="flex flex-col gap-3">
              <select
                name="status"
                defaultValue={order.status}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: '#111110',
                  color: '#F5F5F1',
                }}
              >
                {(Object.keys(ORDER_STATUS_STYLE) as OrderStatus[]).map((s) => (
                  <option key={s} value={s}>{ORDER_STATUS_STYLE[s].label}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C7E36B', color: '#111110' }}
              >
                Mettre à jour
              </button>
            </form>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>ID commande</p>
              <p className="text-xs font-mono break-all" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {order.id}
              </p>
              <p className="text-xs mt-3 mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Dernière mise à jour</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {new Date(order.updatedAt).toLocaleDateString('fr-FR', {
                  day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
