'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { SETTING_DEFAULTS } from '@/lib/settings-config';

export type SettingsMap = Record<string, string>;

/** Load all settings, merged with defaults for any missing keys */
export async function getSettings(): Promise<SettingsMap> {
  const rows = await db.siteSetting.findMany();
  const map: SettingsMap = { ...SETTING_DEFAULTS };
  for (const row of rows) {
    map[row.key] = row.value;
  }
  return map;
}

/** Upsert every key in the provided map */
export async function saveAllSettings(data: SettingsMap): Promise<void> {
  await Promise.all(
    Object.entries(data).map(([key, value]) =>
      db.siteSetting.upsert({
        where:  { key },
        update: { value },
        create: { key, value },
      }),
    ),
  );
  revalidatePath('/admin/parametres');
}
