export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Accueil',      href: '/' },
  { label: 'Abonnements',  href: '/abonnements' },
  { label: 'Guide IPTV',   href: '/guide-iptv' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Contact',      href: '/contact' },
];
