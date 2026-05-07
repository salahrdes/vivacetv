export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  review: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Karim',
    city: 'Lyon',
    rating: 5,
    review:
      'Service rapide, installation facile sur ma Smart TV Samsung. Le support m\'a guidé étape par étape.',
    initials: 'K',
  },
  {
    name: 'Nadia',
    city: 'Paris',
    rating: 5,
    review:
      'J\'ai choisi l\'abonnement 12 mois. Activation rapide et bonne qualité d\'image sur ma TV.',
    initials: 'N',
  },
  {
    name: 'Thomas',
    city: 'Marseille',
    rating: 5,
    review:
      'Interface claire, assistance réactive et configuration simple sur Android TV.',
    initials: 'T',
  },
  {
    name: 'Samira',
    city: 'Lille',
    rating: 5,
    review:
      'J\'ai demandé de l\'aide avant de commander, l\'équipe m\'a conseillé le bon forfait pour mon appareil.',
    initials: 'S',
  },
  {
    name: 'Julien',
    city: 'Bordeaux',
    rating: 4.9,
    review:
      'Bonne expérience sur Fire TV. Les explications d\'installation sont simples à suivre.',
    initials: 'J',
  },
  {
    name: 'Amine',
    city: 'Toulouse',
    rating: 5,
    review:
      'Le test m\'a permis de vérifier la compatibilité avant de prendre un abonnement plus long.',
    initials: 'A',
  },
];
