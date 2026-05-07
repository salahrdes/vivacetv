'use client';

import { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

// ── Per-plan urgency config ───────────────────────────────────────────────────
const SCARCITY: Record<string, { urgency: string; spots?: number }> = {
  bronze:  { urgency: 'Idéal pour découvrir ClarioTV sans engagement long' },
  silver:  { urgency: 'Meilleur rapport qualité/prix — 6 mois offerts' },
  gold:    { urgency: '⭐ Le plus commandé ce mois — quantités limitées', spots: 5 },
  diamond: { urgency: '💎 Accès VIP prioritaire — places très limitées',  spots: 2 },
};

// ── Seeded initial viewer counts (consistent per plan within a session) ───────
const INITIAL_VIEWERS: Record<string, number> = {
  bronze: 18, silver: 24, gold: 37, diamond: 21,
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getSecondsUntilMidnight(): number {
  const now      = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
}

function formatCountdown(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

// ── Component ─────────────────────────────────────────────────────────────────
type Props = { planSlug: string };

export default function ScarcityStrip({ planSlug }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(getSecondsUntilMidnight);
  const [viewers, setViewers]         = useState(INITIAL_VIEWERS[planSlug] ?? 22);

  // Countdown — ticks every second
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(getSecondsUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  // Viewer count — fluctuates ±1 every 8–15 s
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const schedule = () => {
      id = setTimeout(() => {
        setViewers((v) => Math.max(10, Math.min(50, v + (Math.random() < 0.55 ? 1 : -1))));
        schedule();
      }, 8000 + Math.random() * 7000);
    };
    schedule();
    return () => clearTimeout(id);
  }, []);

  const meta = SCARCITY[planSlug] ?? { urgency: 'Offre à durée limitée' };

  return (
    <div
      className="rounded-xl p-4 mb-6 flex flex-col gap-3"
      style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A' }}
      role="status"
      aria-live="polite"
    >
      {/* Countdown row */}
      <div className="flex items-center gap-2">
        <Clock size={15} aria-hidden="true" style={{ color: '#D97706' }} />
        <span className="text-sm font-semibold" style={{ color: '#92400E' }}>
          Offre expire dans{' '}
          <span className="font-mono tracking-widest">{formatCountdown(secondsLeft)}</span>
        </span>
      </div>

      {/* Viewers row */}
      <div className="flex items-center gap-2">
        <Flame size={15} aria-hidden="true" style={{ color: '#D97706' }} />
        <span className="text-sm" style={{ color: '#92400E' }}>
          <strong>{viewers}</strong> personnes regardent cette offre en ce moment
        </span>
      </div>

      {/* Urgency + spots row */}
      <div className="flex items-center gap-2 flex-wrap">
        {meta.spots !== undefined && (
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
            style={{ backgroundColor: '#D97706', color: '#fff' }}
          >
            {meta.spots} restant{meta.spots > 1 ? 's' : ''}
          </span>
        )}
        <span className="text-sm font-medium" style={{ color: '#92400E' }}>
          {meta.urgency}
        </span>
      </div>
    </div>
  );
}
