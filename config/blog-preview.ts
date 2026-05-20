export type BlogPreviewCard = {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: string;
  image?: string;
  coverGradient: string;
};

export const blogPreviews: BlogPreviewCard[] = [
  {
    title: 'Instalar IPTV en Smart TV: guía sencilla',
    excerpt:
      'Descubre los pasos esenciales para configurar tu suscripción IPTV en una Smart TV Samsung o LG compatible.',
    slug: 'instalar-iptv-smart-tv-guia-sencilla',
    category: 'Instalación',
    readTime: '4 min',
    image: '/blog/iptv-smart-tv.jpg',
    coverGradient: 'linear-gradient(135deg, #1a2340 0%, #1C1A17 100%)',
  },
  {
    title: 'Configurar IPTV en Android TV',
    excerpt:
      'Sigue una guía sencilla para usar VivaceTV en Android TV o Android Box con IPTV Smarters Pro.',
    slug: 'configurar-iptv-android-tv',
    category: 'Guía',
    readTime: '5 min',
    image: '/blog/iptv-android-tv.jpg',
    coverGradient: 'linear-gradient(135deg, #1e1a2d 0%, #1C1A17 100%)',
  },
  {
    title: '¿Qué aplicación IPTV usar?',
    excerpt:
      'Comparativa de las mejores aplicaciones IPTV: IPTV Smarters Pro, TiviMate, GSE Smart IPTV y alternativas según tu dispositivo.',
    slug: 'que-aplicacion-iptv-usar',
    category: 'Aplicación',
    readTime: '5 min',
    image: '/blog/applications-iptv.jpg',
    coverGradient: 'linear-gradient(135deg, #1a2d2a 0%, #1C1A17 100%)',
  },
  {
    title: 'IPTV Smarters Pro: guía de instalación',
    excerpt:
      'Instala y configura IPTV Smarters Pro en tu dispositivo en menos de 5 minutos con esta guía detallada.',
    slug: 'iptv-smarters-pro-guia-instalacion',
    category: 'Instalación',
    readTime: '5 min',
    image: '/blog/iptv-smarters-pro.jpg',
    coverGradient: 'linear-gradient(135deg, #1a2340 0%, #1C1A17 100%)',
  },
];
