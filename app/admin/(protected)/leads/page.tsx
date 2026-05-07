import { getLeads, deleteLead } from '@/lib/actions/leads';
import LeadsTable from '@/components/admin/LeadsTable';
import type { LeadRow } from '@/lib/actions/leads';
import { Users } from 'lucide-react';

export default async function LeadsPage() {
  const leads = await getLeads();

  const newCount       = leads.filter((l) => l.status === 'NEW').length;
  const contactedCount = leads.filter((l) => l.status === 'CONTACTED').length;
  const convertedCount = leads.filter((l) => l.status === 'CONVERTED').length;
  const testCount      = leads.filter((l) => l.type === 'TEST_GRATUIT').length;

  return (
    <div className="p-8 max-w-7xl mx-auto w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-2xl" style={{ color: '#F5F5F1' }}>
            Leads
          </h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {leads.length} lead{leads.length !== 1 ? 's' : ''} au total
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Nouveaux',  value: newCount,       color: '#D97706' },
          { label: 'Contactés', value: contactedCount, color: '#3B82F6' },
          { label: 'Convertis', value: convertedCount, color: '#22C55E' },
          { label: 'Tests gratuits', value: testCount, color: '#8B5CF6' },
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
          <Users size={16} style={{ color: '#C5C5C0' }} />
          <h2 className="font-semibold text-sm" style={{ color: '#111110' }}>
            Tous les leads
          </h2>
        </div>
        <LeadsTable rows={leads} onDelete={deleteLead} />
      </div>
    </div>
  );
}
