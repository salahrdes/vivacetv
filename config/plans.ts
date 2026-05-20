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
    duration: '3 meses',
    priceOriginal: 39.99,
    priceSale: 22.99,
    discountPercent: 43,
    features: [
      '+22 000 canales',
      '+60 000 películas y series',
      'Calidad 4K/HD/SD',
      'Compatible con IPTV Smarters',
      'Actualizaciones gratuitas',
      'Netflix, Apple y más',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Soporte 24/7',
    ],
    isFeatured: false,
    ctaText: 'Comprar ahora',
    href: '/pedir/bronze',
  },
  {
    id: 'silver',
    name: 'Silver',
    slug: 'silver',
    duration: '6 meses',
    priceOriginal: 54.99,
    priceSale: 34.99,
    discountPercent: 36,
    features: [
      '+22 000 canales',
      '+100 000 películas y series',
      'Calidad SD/HD/4K',
      'Compatibilidad total',
      'Actualizaciones gratuitas',
      'Netflix, Disney, Apple y más',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Soporte 24/7',
    ],
    isFeatured: false,
    ctaText: 'Comprar ahora',
    href: '/pedir/silver',
  },
  {
    id: 'gold',
    name: 'Gold',
    slug: 'gold',
    duration: '12 meses',
    priceOriginal: 64.99,
    priceSale: 44.99,
    discountPercent: 31,
    features: [
      '+22 000 canales',
      '+160 000 películas y series',
      'Calidad SD/HD/4K/8K',
      'Compatibilidad total',
      'Actualizaciones gratuitas',
      'Netflix, Disney, Apple y más',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Soporte 24/7',
    ],
    isFeatured: true,
    featuredLabel: 'El Más Popular',
    ctaText: 'Elegir el plan recomendado',
    href: '/pedir/gold',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    slug: 'diamond',
    duration: '24 meses',
    priceOriginal: 89.99,
    priceSale: 74.99,
    discountPercent: 17,
    features: [
      '+22 000 canales',
      '+160 000 películas y series',
      'Calidad SD/HD/4K/8K',
      'Compatibilidad total',
      'Actualizaciones gratuitas',
      'Netflix, Disney, Apple y más',
      'AntiFreeze 10.0',
      'TV en Replay',
      'Soporte VIP 24/7',
    ],
    isFeatured: false,
    ctaText: 'Comprar ahora',
    href: '/pedir/diamond',
  },
];
