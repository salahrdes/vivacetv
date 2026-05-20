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
  'Otro',
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
    note: 'Respuesta rápida en menos de 15 minutos',
  },
  {
    icon: 'email',
    title: 'Email',
    value: 'support@vivacetv.com',
    note: 'Respuesta en menos de 24 horas',
  },
  {
    icon: 'clock',
    title: 'Horario',
    value: '24h — 7 días',
    note: 'Soporte disponible en todo momento',
  },
  {
    icon: 'globe',
    title: 'Servicio',
    value: 'España y Europa',
    note: 'Servicio disponible en toda Europa',
  },
];
