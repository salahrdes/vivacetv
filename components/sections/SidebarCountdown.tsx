'use client';

import { useState, useEffect } from 'react';
import { Clock, Shield } from 'lucide-react';

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

export default function SidebarCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(getSecondsUntilMidnight);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(getSecondsUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="px-6 py-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--color-border)' }}>
      {/* Countdown pill */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A' }}
      >
        <Clock size={13} style={{ color: '#D97706' }} aria-hidden="true" />
        <span className="text-xs font-semibold" style={{ color: '#92400E' }}>
          Ce prix expire dans{' '}
          <span className="font-mono">{formatCountdown(secondsLeft)}</span>
        </span>
      </div>

      {/* Guarantee badge */}
      <div className="flex items-center gap-2">
        <Shield size={14} style={{ color: '#22C55E' }} aria-hidden="true" />
        <span className="text-xs font-medium" style={{ color: 'var(--color-gray-600)' }}>
          Activation garantie ou remboursement
        </span>
      </div>
    </div>
  );
}
