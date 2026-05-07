export type Device = {
  name: string;
  icon: string;
};

export const heroDevices: string[] = [
  'Smart TV',
  'Android',
  'iOS',
  'PC & Mac',
  'Box TV',
  'Roku',
  'Fire TV',
  'Apple TV',
];

export const compatibilityDevices: Device[] = [
  { name: 'Smart TV Samsung', icon: 'tv' },
  { name: 'Smart TV LG',      icon: 'tv' },
  { name: 'Android TV',       icon: 'tv-minimal' },
  { name: 'Android Box',      icon: 'box' },
  { name: 'iPhone & iPad',    icon: 'tablet-smartphone' },
  { name: 'Windows & Mac',    icon: 'monitor' },
  { name: 'Roku',             icon: 'clapperboard' },
  { name: 'Fire TV',          icon: 'flame' },
  { name: 'Apple TV',         icon: 'apple' },
  { name: 'Box TV',           icon: 'box' },
];
