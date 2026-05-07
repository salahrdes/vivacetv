import type { Metadata } from 'next';
import { getSettings } from '@/lib/actions/settings';
import SettingsForm from '@/components/admin/SettingsForm';

export const metadata: Metadata = { title: 'Paramètres' };

export default async function ParametresPage() {
  const settings = await getSettings();

  return (
    <div className="p-6 lg:p-8 flex flex-col gap-6">
      <div>
        <h1 className="font-display font-bold text-xl" style={{ color: '#111110' }}>Paramètres</h1>
        <p className="text-sm mt-0.5" style={{ color: '#9B9B95' }}>
          Gérez les paramètres généraux du site, le SEO et les réseaux sociaux.
        </p>
      </div>
      <SettingsForm initial={settings} />
    </div>
  );
}
