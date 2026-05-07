/** Default values shown when a setting key has never been saved */
export const SETTING_DEFAULTS: Record<string, string> = {
  site_title:        'ClarioTV',
  site_tagline:      'Votre abonnement IPTV France en HD/4K',
  site_description:  'Découvrez ClarioTV, votre abonnement IPTV France compatible Smart TV, Android, iOS, PC, Roku, Fire TV et Apple TV.',
  seo_keywords:      'iptv france, abonnement iptv, iptv smart tv, iptv android',
  seo_og_image:      '',
  contact_email:     'contact@clariotv.fr',
  contact_whatsapp:  '447476614523',
  social_facebook:   '',
  social_instagram:  '',
  social_twitter:    '',
  analytics_gtag:    '',
  font_display:      'Mozilla Headline',
  font_body:         'Inter',
};

/** Curated Google Fonts available in the admin typography selector */
export const FONT_OPTIONS = [
  'Mozilla Headline',
  'Stack Sans Text',
  'Roboto',
  'Noto Sans',
  'Playfair Display',
  'Sen',
  'Signika Negative',
  'Hammersmith One',
  'Amaranth',
  'Blinker',
] as const;

export type FontOption = (typeof FONT_OPTIONS)[number];

/**
 * Maps each font name to its Google Fonts CSS API slug and weight list.
 * Used by app/layout.tsx to build the dynamic <link> URL.
 */
export const FONT_CONFIG: Record<string, { slug: string; weights: string }> = {
  'Mozilla Headline': { slug: 'Mozilla+Headline',  weights: '400' },
  'Stack Sans Text':  { slug: 'Stack+Sans+Text',   weights: '400;500;700' },
  'Roboto':           { slug: 'Roboto',            weights: '400;500;700' },
  'Noto Sans':        { slug: 'Noto+Sans',         weights: '400;500;700' },
  'Playfair Display': { slug: 'Playfair+Display',  weights: '400;600;700' },
  'Sen':              { slug: 'Sen',               weights: '400;700' },
  'Signika Negative': { slug: 'Signika+Negative',  weights: '300;400;600' },
  'Hammersmith One':  { slug: 'Hammersmith+One',   weights: '400' },
  'Amaranth':         { slug: 'Amaranth',          weights: '400;700' },
  'Blinker':          { slug: 'Blinker',           weights: '400;600;700' },
  'Inter':            { slug: 'Inter',             weights: '400;500;600;700' },
};
