export type Plan = {
  id: string;
  name: string;
  slug: string;
  duration: string;
  priceOriginal: number;
  priceSale: number;
  discountPercent: number;
  features: string[];
  isFeatured: boolean;
  featuredLabel?: string;
  ctaText: string;
  href: string;
};

export const plans: Plan[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    slug: 'bronze',
    duration: '3 mois',
    priceOriginal: 39.99,
    priceSale: 22.99,
    discountPercent: 43,
    features: [
      '+22 000 chaînes',
      '+60 000 films et séries',
      'Qualité 4K/HD/SD',
      'Compatibilité IPTV Smarters',
      'Mises à jour gratuites',
      'Netflix, Apple et plus',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Assistance 24/7',
    ],
    isFeatured: false,
    ctaText: 'Commander maintenant',
    href: '/commander/bronze',
  },
  {
    id: 'silver',
    name: 'Silver',
    slug: 'silver',
    duration: '6 mois',
    priceOriginal: 54.99,
    priceSale: 34.99,
    discountPercent: 36,
    features: [
      '+22 000 chaînes',
      '+100 000 films et séries',
      'Qualité SD/HD/4K',
      'Compatibilité totale',
      'Mises à jour gratuites',
      'Netflix, Disney, Apple et plus',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Assistance 24/7',
    ],
    isFeatured: false,
    ctaText: 'Commander maintenant',
    href: '/commander/silver',
  },
  {
    id: 'gold',
    name: 'Gold',
    slug: 'gold',
    duration: '12 mois',
    priceOriginal: 64.99,
    priceSale: 44.99,
    discountPercent: 31,
    features: [
      '+22 000 chaînes',
      '+160 000 films et séries',
      'Qualité SD/HD/4K/8K',
      'Compatibilité totale',
      'Mises à jour gratuites',
      'Netflix, Disney, Apple et plus',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Assistance 24/7',
    ],
    isFeatured: true,
    featuredLabel: 'Le Plus Populaire',
    ctaText: 'Choisir le forfait recommandé',
    href: '/commander/gold',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    slug: 'diamond',
    duration: '24 mois',
    priceOriginal: 89.99,
    priceSale: 74.99,
    discountPercent: 17,
    features: [
      '+22 000 chaînes',
      '+160 000 films et séries',
      'Qualité SD/HD/4K/8K',
      'Compatibilité totale',
      'Mises à jour gratuites',
      'Netflix, Disney, Apple et plus',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Assistance VIP 24/7',
    ],
    isFeatured: false,
    ctaText: 'Commander maintenant',
    href: '/commander/diamond',
  },
];
