import { Tv, TvMinimal, Box, TabletSmartphone, Monitor, Clapperboard, Flame, Apple } from 'lucide-react';
import { compatibilityDevices } from '@/config/devices';
import SectionHeader from '@/components/ui/SectionHeader';

const iconMap: Record<string, React.ReactNode> = {
  'tv':                <Tv size={24} aria-hidden="true" />,
  'tv-minimal':        <TvMinimal size={24} aria-hidden="true" />,
  'box':               <Box size={24} aria-hidden="true" />,
  'tablet-smartphone': <TabletSmartphone size={24} aria-hidden="true" />,
  'monitor':           <Monitor size={24} aria-hidden="true" />,
  'clapperboard':      <Clapperboard size={24} aria-hidden="true" />,
  'flame':             <Flame size={24} aria-hidden="true" />,
  'apple':             <Apple size={24} aria-hidden="true" />,
};

export default function CompatibilitySection() {
  return (
    <section
      id="compatibilite"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="compat-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Compatibilidad"
          title="Compatible con tus dispositivos favoritos"
          description="Tu suscripción IPTV VivaceTV funciona en los dispositivos más utilizados en España. Nuestro equipo te ayuda a elegir la aplicación más adecuada para tu pantalla."
          className="mb-14"
        />

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          role="list"
          aria-label="Lista de dispositivos compatibles"
        >
          {compatibilityDevices.map((device) => (
            <div
              key={device.name}
              role="listitem"
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl text-center transition-all duration-200 hover:shadow-sm hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-200"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
              >
                {iconMap[device.icon]}
              </div>
              <span
                className="text-sm font-medium leading-tight"
                style={{ color: 'var(--color-ink-light)' }}
              >
                {device.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
