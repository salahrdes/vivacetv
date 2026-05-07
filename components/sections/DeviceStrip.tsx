import { heroDevices } from '@/config/devices';
import { Tv, Smartphone, Apple, Monitor, Box, Flame } from 'lucide-react';

const deviceIcons: Record<string, React.ReactNode> = {
  'Smart TV':  <Tv size={18} aria-hidden="true" />,
  'Android':   <Smartphone size={18} aria-hidden="true" />,
  'iOS':       <Apple size={18} aria-hidden="true" />,
  'PC & Mac':  <Monitor size={18} aria-hidden="true" />,
  'Box TV':    <Box size={18} aria-hidden="true" />,
  'Roku':      <Monitor size={18} aria-hidden="true" />,
  'Fire TV':   <Flame size={18} aria-hidden="true" />,
  'Apple TV':  <Apple size={18} aria-hidden="true" />,
};

export default function DeviceStrip() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-dark)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
      aria-label="Appareils compatibles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">

          {/* Label */}
          <p
            className="shrink-0 text-sm font-semibold pr-0 sm:pr-8 sm:border-r"
            style={{
              color: 'var(--color-gray-400)',
              borderColor: 'rgba(255,255,255,0.1)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '11px',
            }}
          >
            Compatible avec
          </p>

          {/* Devices — horizontal scroll on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar sm:pl-8 pb-1 sm:pb-0 w-full">
            {heroDevices.map((device, i) => (
              <div key={device} className="flex items-center gap-1 shrink-0">
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
                  style={{
                    color: 'var(--color-gray-400)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span style={{ color: 'var(--color-lime)' }}>
                    {deviceIcons[device]}
                  </span>
                  {device}
                </span>
                {i < heroDevices.length - 1 && (
                  <span className="w-0.5 h-0.5 rounded-full mx-1" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
