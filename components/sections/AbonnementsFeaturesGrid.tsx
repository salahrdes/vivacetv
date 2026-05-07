import { Tv2, Sparkles, Wifi, ShieldCheck, HeadphonesIcon, RefreshCw } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    icon: <Tv2 size={24} aria-hidden="true" />,
    title: '+22 000 Chaînes',
    description:
      'Accédez à plus de 22 000 chaînes françaises et internationales — TNT, sport, cinéma, documentaires et plus encore.',
  },
  {
    icon: <Sparkles size={24} aria-hidden="true" />,
    title: 'Qualité 4K Ultra HD',
    description:
      'Profitez d\'une image cristalline en SD, HD, 4K et 8K selon votre forfait. Une qualité adaptée à chaque écran.',
  },
  {
    icon: <Wifi size={24} aria-hidden="true" />,
    title: 'Connexion Stable',
    description:
      'Notre infrastructure AntiFreeze 10.0 garantit un flux continu sans coupure ni buffering, même en heure de pointe.',
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: 'Sécurisé & Privé',
    description:
      'Aucun compte à créer, aucun mot de passe. Vos informations restent confidentielles. Pas d\'engagement.',
  },
  {
    icon: <HeadphonesIcon size={24} aria-hidden="true" />,
    title: 'Support 24/7',
    description:
      'Un conseiller humain disponible à toute heure via WhatsApp — pour l\'installation, la configuration et toute question.',
  },
  {
    icon: <RefreshCw size={24} aria-hidden="true" />,
    title: 'Mises à Jour Gratuites',
    description:
      'Nouvelles chaînes, nouvelles fonctionnalités, nouvelles applications — toutes les mises à jour incluses sans frais.',
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
          label="Pourquoi ClarioTV ?"
          title="Tout ce qu'il vous faut dans un seul abonnement"
          description="ClarioTV réunit la meilleure sélection de contenu, la plus haute qualité d'image et un support réactif — en un seul forfait IPTV France."
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
