export type BlogPreviewCard = {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  readTime: string;
};

export const blogPreviews: BlogPreviewCard[] = [
  {
    title: 'Installer IPTV sur Smart TV',
    excerpt:
      'Découvrez les étapes essentielles pour configurer votre abonnement IPTV sur une Smart TV compatible.',
    slug: 'installer-iptv-smart-tv',
    category: 'Installation',
    readTime: '4 min',
  },
  {
    title: 'Configurer IPTV sur Android TV',
    excerpt:
      'Suivez un guide simple pour utiliser ClarioTV sur Android TV ou Android Box.',
    slug: 'configurer-iptv-android-tv',
    category: 'Guide',
    readTime: '5 min',
  },
  {
    title: 'IPTV sur iPhone et iPad',
    excerpt:
      'Comprenez comment regarder vos contenus avec une application IPTV compatible iOS.',
    slug: 'iptv-iphone-ipad',
    category: 'Guide',
    readTime: '4 min',
  },
  {
    title: 'Résoudre les coupures IPTV',
    excerpt:
      'Quelques conseils pour améliorer la stabilité, la connexion et la qualité de votre streaming.',
    slug: 'resoudre-coupures-iptv',
    category: 'Dépannage',
    readTime: '6 min',
  },
];
