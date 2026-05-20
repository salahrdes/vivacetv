import { Tv2, Sparkles, Wifi, ShieldCheck, HeadphonesIcon, RefreshCw } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    icon: <Tv2 size={24} aria-hidden="true" />,
    title: '+22 000 Canales',
    description:
      'Accede a más de 22 000 canales españoles e internacionales — TDT, deporte, cine, documentales y mucho más.',
  },
  {
    icon: <Sparkles size={24} aria-hidden="true" />,
    title: 'Calidad 4K Ultra HD',
    description:
      'Disfruta de una imagen nítida en SD, HD, 4K y 8K según tu plan. Una calidad adaptada a cada pantalla.',
  },
  {
    icon: <Wifi size={24} aria-hidden="true" />,
    title: 'Conexión Estable',
    description:
      'Nuestra infraestructura AntiFreeze 10.0 garantiza una transmisión continua sin cortes ni buffering, incluso en horas pico.',
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: 'Seguro y Privado',
    description:
      'Sin cuenta que crear, sin contraseña. Tu información permanece confidencial. Sin permanencia.',
  },
  {
    icon: <HeadphonesIcon size={24} aria-hidden="true" />,
    title: 'Soporte 24/7',
    description:
      'Un asesor humano disponible a cualquier hora por WhatsApp — para la instalación, la configuración y cualquier consulta.',
  },
  {
    icon: <RefreshCw size={24} aria-hidden="true" />,
    title: 'Actualizaciones Gratuitas',
    description:
      'Nuevos canales, nuevas funciones, nuevas aplicaciones — todas las actualizaciones incluidas sin coste adicional.',
  },
];

export default function AbonnementsFeaturesGrid() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--color-surface-alt)' }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="¿Por qué VivaceTV?"
          title="Todo lo que necesitas en una sola suscripción"
          description="VivaceTV reúne la mejor selección de contenido, la más alta calidad de imagen y un soporte reactivo — en un solo plan IPTV España."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 p-7 rounded-2xl transition-all duration-200 hover:shadow-md"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Icon bubble */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-2xl shrink-0"
                style={{ backgroundColor: 'var(--color-lime-soft)', color: 'var(--color-dark)' }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-display font-bold text-lg leading-snug"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-ink-light)' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
