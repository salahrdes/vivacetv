export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  review: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Carlos',
    city: 'Madrid',
    rating: 5,
    review:
      'Servicio rápido, instalación sencilla en mi Smart TV Samsung. El soporte me guió paso a paso sin ningún problema.',
    initials: 'C',
  },
  {
    name: 'Lucía',
    city: 'Barcelona',
    rating: 5,
    review:
      'Elegí la suscripción de 12 meses. Activación inmediata y una calidad de imagen excelente en la tele.',
    initials: 'L',
  },
  {
    name: 'Marcos',
    city: 'Valencia',
    rating: 5,
    review:
      'Interfaz clara, soporte muy reactivo y configuración simple en Android TV. Muy contento.',
    initials: 'M',
  },
  {
    name: 'Sofía',
    city: 'Sevilla',
    rating: 5,
    review:
      'Pedí ayuda antes de contratar y el equipo me recomendó el plan ideal para mi dispositivo. Gran atención al cliente.',
    initials: 'S',
  },
  {
    name: 'Javier',
    city: 'Bilbao',
    rating: 4.9,
    review:
      'Buena experiencia en Fire TV. Las instrucciones de instalación son muy fáciles de seguir.',
    initials: 'J',
  },
  {
    name: 'Adriana',
    city: 'Zaragoza',
    rating: 5,
    review:
      'La prueba gratuita me permitió verificar la compatibilidad antes de contratar un plan más largo. Totalmente recomendable.',
    initials: 'A',
  },
];
