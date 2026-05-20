export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Inicio',        href: '/' },
  { label: 'Comprar IPTV',  href: '/comprar-iptv' },
  { label: 'Guía IPTV',    href: '/guia-iptv' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Contacto',      href: '/contact' },
];
