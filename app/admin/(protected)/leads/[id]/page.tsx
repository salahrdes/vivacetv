import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Mail } from 'lucide-react';
import { getLead, updateLeadStatus, updateLeadNotes } from '@/lib/actions/leads';
import type { LeadStatus, LeadType } from '@/lib/generated/prisma/client';

const LEAD_STATUS_STYLE: Record<LeadStatus, { color: string; bg: string; label: string }> = {
  NEW:       { color: '#D97706', bg: '#FEF3C7', label: 'Nouveau' },
  CONTACTED: { color: '#3B82F6', bg: '#EFF6FF', label: 'Contacté' },
  CONVERTED: { color: '#22C55E', bg: '#DCFCE7', label: 'Converti' },
  LOST:      { color: '#9B9B95', bg: '#F4F4F2', label: 'Perdu' },
};

const LEAD_TYPE_LABEL: Record<LeadType, string> = {
  CONTACT:      'Formulaire de contact',
  TEST_GRATUIT: 'Demande de test gratuit',
};

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await getLead(id);
  if (!lead) notFound();

  const waNumber = lead.whatsapp.replace(/\D/g, '');
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Bonjour ${lead.name}, suite à votre demande sur ClarioTV.`
  )}`;

  async function saveStatus(fd: FormData) {
    'use server';
    const status = fd.get('status') as LeadStatus;
    await updateLeadStatus(id, status);
  }

  async function saveNotes(fd: FormData) {
    'use server';
    const notes = (fd.get('notes') as string) ?? '';
    await updateLeadNotes(id, notes);
  }

  const statusStyle = LEAD_STATUS_STYLE[lead.status];

  return (
    <div className="p-8 max-w-4xl mx-auto w-full">

      {/* Back */}
      <Link
        href="/admin/leads"
        className="inline-flex items-center gap-2 text-sm mb-6 transition-opacity hover:opacity-70"
        style={{ color: 'rgba(255,255,255,0.4)' }}
      >
        <ArrowLeft size={14} />
        Retour aux leads
      </Link>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="font-display font-bold text-2xl" style={{ color: '#F5F5F1' }}>
              {lead.name}
            </h1>
            <span
              className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg"
              style={{ color: statusStyle.color, backgroundColor: statusStyle.bg }}
            >
              {statusStyle.label}
            </span>
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {LEAD_TYPE_LABEL[lead.type]} — reçu le{' '}
            {new Date(lead.createdAt).toLocaleDateString('fr-FR', {
              weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
            })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {lead.email && (
            <a
              href={`mailto:${lead.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#EFF6FF', color: '#3B82F6' }}
            >
              <Mail size={15} />
              Envoyer un email
            </a>
          )}
          {lead.whatsapp && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366', color: '#fff' }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">

        {/* Left */}
        <div className="flex flex-col gap-5">

          {/* Contact info */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: '#fff', border: '1px solid #F0F0EE' }}
          >
            <h2 className="font-semibold text-sm mb-4" style={{ color: '#6B6B65' }}>
              Informations de contact
            </h2>
            <dl className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Nom', value: lead.name },
                lead.email ? { label: 'Email', value: lead.email } : null,
                lead.whatsapp ? { label: 'WhatsApp', value: lead.whatsapp } : null,
                lead.device ? { label: 'Appareil', value: lead.device } : null,
                lead.app ? { label: 'Application', value: lead.app } : null,
                lead.subject ? { label: 'Sujet', value: lead.subject } : null,
              ]
                .filter(Boolean)
                .map((item) => (
                  <div key={item!.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#C5C5C0' }}>
                      {item!.label}
                    </dt>
                    <dd className="text-sm font-medium" style={{ color: '#111110' }}>{item!.value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          {/* Message */}
          {lead.message && (
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#fff', border: '1px solid #F0F0EE' }}
            >
              <h2 className="font-semibold text-sm mb-3" style={{ color: '#6B6B65' }}>
                Message
              </h2>
              <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#3D382F' }}>
                {lead.message}
              </p>
            </div>
          )}

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
                defaultValue={lead.notes ?? ''}
                rows={4}
                placeholder="Notes privées sur ce lead…"
                className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none focus:ring-2"
                style={{
                  border: '1px solid #E2E2DA',
                  backgroundColor: '#FBFBF7',
                  color: '#111110',
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
                defaultValue={lead.status}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: '#111110',
                  color: '#F5F5F1',
                }}
              >
                {(Object.keys(LEAD_STATUS_STYLE) as LeadStatus[]).map((s) => (
                  <option key={s} value={s}>{LEAD_STATUS_STYLE[s].label}</option>
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
              <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Type</p>
              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {LEAD_TYPE_LABEL[lead.type]}
              </p>
              <p className="text-xs mt-3 mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>ID</p>
              <p className="text-xs font-mono break-all" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {lead.id}
              </p>
              <p className="text-xs mt-3 mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Dernière mise à jour</p>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {new Date(lead.updatedAt).toLocaleDateString('fr-FR', {
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
