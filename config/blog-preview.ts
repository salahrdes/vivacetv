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
    title: 'Installer IPTV sur Smart TV : guide simple',
    excerpt:
      'Découvrez les étapes essentielles pour configurer votre abonnement IPTV sur une Smart TV Samsung ou LG compatible.',
    slug: 'installer-iptv-smart-tv-guide-simple',
    category: 'Installation',
    readTime: '4 min',
    image: '/blog/iptv-smart-tv.jpg',
    coverGradient: 'linear-gradient(135deg, #1a2340 0%, #1C1A17 100%)',
  },
  {
    title: 'Configurer IPTV sur Android TV',
    excerpt:
      'Suivez un guide simple pour utiliser VivaceTV sur Android TV ou Android Box avec IPTV Smarters Pro.',
    slug: 'configurer-iptv-android-tv',
    category: 'Guide',
    readTime: '5 min',
    image: '/blog/iptv-android-tv.jpg',
    coverGradient: 'linear-gradient(135deg, #1e1a2d 0%, #1C1A17 100%)',
  },
  {
    title: 'Quelle application IPTV utiliser ?',
    excerpt:
      'Comparatif des meilleures applications IPTV : IPTV Smarters Pro, TiviMate, GSE Smart IPTV et alternatives selon votre appareil.',
    slug: 'quelle-application-iptv-utiliser',
    category: 'Application',
    readTime: '5 min',
    image: '/blog/applications-iptv.jpg',
    coverGradient: 'linear-gradient(135deg, #1a2d2a 0%, #1C1A17 100%)',
  },
  {
    title: 'IPTV Smarters Pro : guide d\'installation',
    excerpt:
      'Installez et configurez IPTV Smarters Pro sur votre appareil en moins de 5 minutes avec ce guide détaillé.',
    slug: 'iptv-smarters-pro-guide-installation',
    category: 'Installation',
    readTime: '5 min',
    image: '/blog/iptv-smarters-pro.jpg',
    coverGradient: 'linear-gradient(135deg, #1a2340 0%, #1C1A17 100%)',
  },
];
