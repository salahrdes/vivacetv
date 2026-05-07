'use client';

import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Marie L.',    plan: 'Gold',    time: '2 min'  },
  { name: 'Thomas B.',   plan: 'Silver',  time: '5 min'  },
  { name: 'Camille R.',  plan: 'Diamond', time: '9 min'  },
  { name: 'Julien M.',   plan: 'Bronze',  time: '13 min' },
  { name: 'Sophie D.',   plan: 'Gold',    time: '17 min' },
  { name: 'Antoine P.',  plan: 'Silver',  time: '21 min' },
  { name: 'Isabelle F.', plan: 'Gold',    time: '26 min' },
  { name: 'Lucas V.',    plan: 'Diamond', time: '30 min' },
  { name: 'Emma C.',     plan: 'Bronze',  time: '34 min' },
  { name: 'Nicolas G.',  plan: 'Gold',    time: '38 min' },
];

export default function SocialProofTicker() {
  const [index,   setIndex]   = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      // Fade out → swap → fade in
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 500);
    }, 12000);
    return () => clearInterval(id);
  }, []);

  const n = NOTIFICATIONS[index];

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg max-w-xs transition-opacity duration-500"
        style={{
          backgroundColor: '#fff',
          border: '1px solid var(--color-border)',
          opacity: visible ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <CheckCircle size={18} className="shrink-0" style={{ color: '#22C55E' }} />
        <p className="text-xs leading-snug" style={{ color: 'var(--color-ink-light)' }}>
          <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{n.name}</span>
          {' '}vient de commander{' '}
          <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{n.plan}</span>
          {' '}· il y a {n.time}
        </p>
      </div>
    </div>
  );
}
