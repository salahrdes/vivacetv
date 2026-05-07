/** ─── Contact page data ───────────────────────────────────────────────────
 *  TODO (admin): Connect to site settings once admin dashboard is built.
 * ─────────────────────────────────────────────────────────────────────────── */

export const deviceOptions = [
  'Smart TV Samsung',
  'Smart TV LG',
  'Android TV',
  'Android Box',
  'iPhone / iPad',
  'Windows / Mac',
  'Fire TV',
  'Roku',
  'Apple TV',
  'Autre',
] as const;

export type DeviceOption = (typeof deviceOptions)[number];

export type ContactCard = {
  icon: 'whatsapp' | 'email' | 'clock' | 'globe';
  title: string;
  value: string;
  note: string;
};

export const contactCards: ContactCard[] = [
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    value: '+44 747 661 4523',
    note: 'Réponse rapide sous 15 minutes',
  },
  {
    icon: 'email',
    title: 'Email',
    value: 'support@clariotv.com',
    note: 'Réponse sous 24 heures',
  },
  {
    icon: 'clock',
    title: 'Horaires',
    value: '24h/24 — 7j/7',
    note: 'Support disponible en permanence',
  },
  {
    icon: 'globe',
    title: 'Service',
    value: 'France & Europe',
    note: 'Service disponible dans toute l\'Europe',
  },
];
