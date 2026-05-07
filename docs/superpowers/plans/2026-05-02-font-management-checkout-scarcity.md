# Font Management + Checkout Scarcity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add admin-controlled Google Fonts selector (display + body) that applies site-wide at runtime, and layer urgency/conversion elements onto the 4 checkout pages.

**Architecture:** Font settings are stored as key-value pairs in the existing `SiteSetting` DB table. `app/layout.tsx` (Server Component) fetches them at request time and injects a dynamic Google Fonts `<link>` + `:root` CSS variable override. Scarcity elements are pure client components with no DB dependency — countdown ticks client-side, viewer count fluctuates via `setInterval`, social proof cycles through a hardcoded list.

**Tech Stack:** Next.js 16 App Router, React, TypeScript, Tailwind CSS v4, Prisma 7 (existing), Lucide icons (existing)

---

## Task 1: Extend settings config with font options

**Files:**
- Modify: `lib/settings-config.ts`

- [ ] **Step 1: Replace the file contents**

```ts
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
```

- [ ] **Step 2: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

---

## Task 2: Add Typographie section to SettingsForm

**Files:**
- Modify: `components/admin/SettingsForm.tsx`

Read the current file first, then add the Typographie section. The section uses two `<select>` elements with a live font preview beneath each. All 10 fonts are pre-loaded for admin preview via a `<style>` block with a single `@import`.

- [ ] **Step 1: Read current file**

```bash
# Confirm current structure before editing
```

- [ ] **Step 2: Add imports at the top of the file**

Add to the existing imports:
```ts
import { FONT_OPTIONS, FONT_CONFIG } from '@/lib/settings-config';
```

- [ ] **Step 3: Add the Google Fonts preload style block**

Inside the returned JSX, at the very top (before `<form>`), add:

```tsx
{/* Preload all 10 fonts for live admin preview only */}
<style>{`@import url('https://fonts.googleapis.com/css2?${
  Object.values(FONT_CONFIG)
    .map(({ slug, weights }) => `family=${slug}:wght@${weights}`)
    .join('&')
}&display=swap');`}</style>
```

- [ ] **Step 4: Add the Typographie section inside the form**

Add this new section block after the Analytics section and before the save button:

```tsx
{/* ── Typographie ─────────────────────────────────────────────────── */}
<section>
  <h2 className="font-semibold text-sm mb-4" style={{ color: '#111110' }}>
    Typographie
  </h2>
  <div className="grid sm:grid-cols-2 gap-5">

    {/* Display font */}
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9B9B95' }}>
        Police d&apos;affichage (titres)
      </label>
      <select
        name="font_display"
        defaultValue={initial.font_display ?? 'Mozilla Headline'}
        className="rounded-xl px-4 py-3 text-sm outline-none border"
        style={{ borderColor: '#E2E2DA', backgroundColor: '#FBFBF7', color: '#111110' }}
      >
        {FONT_OPTIONS.map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>
      <FontPreview fontKey="font_display" initial={initial.font_display ?? 'Mozilla Headline'} />
    </div>

    {/* Body font */}
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#9B9B95' }}>
        Police du corps (texte)
      </label>
      <select
        name="font_body"
        defaultValue={initial.font_body ?? 'Inter'}
        className="rounded-xl px-4 py-3 text-sm outline-none border"
        style={{ borderColor: '#E2E2DA', backgroundColor: '#FBFBF7', color: '#111110' }}
      >
        <option value="Inter">Inter (défaut)</option>
        {FONT_OPTIONS.map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>
      <FontPreview fontKey="font_body" initial={initial.font_body ?? 'Inter'} />
    </div>
  </div>
</section>
```

- [ ] **Step 5: Add the FontPreview helper component**

Add this above the main `SettingsForm` export (still inside the same file, since it's small):

```tsx
/** Reads a sibling <select> by name and previews the selected font live */
function FontPreview({ fontKey, initial }: { fontKey: string; initial: string }) {
  const [font, setFont] = useState(initial);

  useEffect(() => {
    const select = document.querySelector<HTMLSelectElement>(`select[name="${fontKey}"]`);
    if (!select) return;
    const handler = () => setFont(select.value);
    select.addEventListener('change', handler);
    return () => select.removeEventListener('change', handler);
  }, [fontKey]);

  return (
    <p
      className="text-base px-3 py-2 rounded-lg"
      style={{
        fontFamily: `'${font}', system-ui, sans-serif`,
        color: '#3D382F',
        backgroundColor: '#F5F5F1',
        border: '1px solid #E2E2DA',
      }}
    >
      ClarioTV — Abonnement IPTV France HD/4K
    </p>
  );
}
```

Make sure `useState` and `useEffect` are imported (they should already be from existing form code).

- [ ] **Step 6: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

---

## Task 3: Dynamic font injection in root layout

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton';
import { getSettings } from '@/lib/actions/settings';
import { FONT_CONFIG } from '@/lib/settings-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'IPTV France : Abonnement IPTV Premium HD & 4K | ClarioTV',
    template: '%s | ClarioTV',
  },
  description: siteConfig.description,
  keywords: [
    'IPTV France',
    'abonnement IPTV France',
    'meilleur IPTV France',
    'IPTV Smart TV',
    'IPTV HD 4K',
  ],
  authors: [{ name: 'ClarioTV' }],
  creator: 'ClarioTV',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'IPTV France : Abonnement IPTV Premium HD & 4K | ClarioTV',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV France : Abonnement IPTV Premium HD & 4K | ClarioTV',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

/** Build a Google Fonts CSS2 URL for up to 2 font families, deduped. */
function buildFontsUrl(displayFont: string, bodyFont: string): string | null {
  const seen = new Set<string>();
  const parts: string[] = [];

  for (const name of [displayFont, bodyFont]) {
    const cfg = FONT_CONFIG[name];
    if (!cfg || seen.has(name)) continue;
    seen.add(name);
    parts.push(`family=${cfg.slug}:wght@${cfg.weights}`);
  }

  if (!parts.length) return null;
  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=swap`;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSettings();
  const displayFont = settings.font_display || 'Mozilla Headline';
  const bodyFont    = settings.font_body    || 'Inter';
  const fontsUrl    = buildFontsUrl(displayFont, bodyFont);

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {fontsUrl && <link href={fontsUrl} rel="stylesheet" />}
        {/* Override Tailwind @theme CSS vars with admin-selected fonts */}
        <style>{`:root{--font-display:'${displayFont}',system-ui,sans-serif;--font-body:'${bodyFont}',system-ui,sans-serif;}`}</style>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Verify in browser**

Navigate to any public page. Open DevTools → Elements → `<html>` → `<head>`. Confirm:
- A `<link>` pointing to `fonts.googleapis.com` with `Mozilla+Headline` in the URL
- A `<style>` tag containing `--font-display:'Mozilla Headline'`

---

## Task 4: Make checkout device field optional

**Files:**
- Modify: `components/sections/CheckoutForm.tsx`

- [ ] **Step 1: Remove `required` from device validation**

Find this block in `validate()`:
```ts
if (!form.device) e.device = 'Veuillez sélectionner votre appareil principal.';
```
Delete that line entirely.

- [ ] **Step 2: Remove `required` prop from the SelectField**

Find:
```tsx
<SelectField
  id="checkout-device"
  label="Appareil principal"
  options={deviceOptions}
  required
  value={form.device}
  onChange={set('device')}
  error={errors.device}
/>
```

Replace with:
```tsx
<SelectField
  id="checkout-device"
  label="Appareil principal (optionnel)"
  options={deviceOptions}
  value={form.device}
  onChange={set('device')}
/>
```

- [ ] **Step 3: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

---

## Task 5: ScarcityStrip component

**Files:**
- Create: `components/sections/ScarcityStrip.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client';

import { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

// ── Per-plan urgency config ───────────────────────────────────────────────────
const SCARCITY: Record<string, { urgency: string; spots?: number }> = {
  bronze:  { urgency: 'Idéal pour découvrir ClarioTV sans engagement long' },
  silver:  { urgency: 'Meilleur rapport qualité/prix — 6 mois offerts' },
  gold:    { urgency: '⭐ Le plus commandé ce mois — quantités limitées', spots: 5 },
  diamond: { urgency: '💎 Accès VIP prioritaire — places très limitées',  spots: 2 },
};

// ── Seeded initial viewer counts (consistent per plan within a session) ───────
const INITIAL_VIEWERS: Record<string, number> = {
  bronze: 18, silver: 24, gold: 37, diamond: 21,
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getSecondsUntilMidnight(): number {
  const now      = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
}

function formatCountdown(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

// ── Component ─────────────────────────────────────────────────────────────────
type Props = { planSlug: string };

export default function ScarcityStrip({ planSlug }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(getSecondsUntilMidnight);
  const [viewers, setViewers]         = useState(INITIAL_VIEWERS[planSlug] ?? 22);

  // Countdown — ticks every second
  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(getSecondsUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  // Viewer count — fluctuates ±1 every 8–15 s
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const schedule = () => {
      id = setTimeout(() => {
        setViewers((v) => Math.max(10, Math.min(50, v + (Math.random() < 0.55 ? 1 : -1))));
        schedule();
      }, 8000 + Math.random() * 7000);
    };
    schedule();
    return () => clearTimeout(id);
  }, []);

  const meta = SCARCITY[planSlug] ?? { urgency: 'Offre à durée limitée' };

  return (
    <div
      className="rounded-xl p-4 mb-6 flex flex-col gap-3"
      style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A' }}
      role="status"
      aria-live="polite"
    >
      {/* Countdown row */}
      <div className="flex items-center gap-2">
        <Clock size={15} aria-hidden="true" style={{ color: '#D97706' }} />
        <span className="text-sm font-semibold" style={{ color: '#92400E' }}>
          Offre expire dans{' '}
          <span className="font-mono tracking-widest">{formatCountdown(secondsLeft)}</span>
        </span>
      </div>

      {/* Viewers row */}
      <div className="flex items-center gap-2">
        <Flame size={15} aria-hidden="true" style={{ color: '#D97706' }} />
        <span className="text-sm" style={{ color: '#92400E' }}>
          <strong>{viewers}</strong> personnes regardent cette offre en ce moment
        </span>
      </div>

      {/* Urgency + spots row */}
      <div className="flex items-center gap-2 flex-wrap">
        {meta.spots !== undefined && (
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
            style={{ backgroundColor: '#D97706', color: '#fff' }}
          >
            {meta.spots} restant{meta.spots > 1 ? 's' : ''}
          </span>
        )}
        <span className="text-sm font-medium" style={{ color: '#92400E' }}>
          {meta.urgency}
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

---

## Task 6: SocialProofTicker component

**Files:**
- Create: `components/sections/SocialProofTicker.tsx`

- [ ] **Step 1: Create the file**

```tsx
'use client';

import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const NOTIFICATIONS = [
  { name: 'Marie L.',    plan: 'Gold',    time: '2 min'  },
  { name: 'Thomas B.',   plan: 'Silver',  time: '5 min'  },
  { name: 'Camille R.',  plan: 'Diamond', time: '9 min'  },
  { name: 'Julien M.',   plan: 'Bronze',  time: '13 min' },
  { name: 'Sophie D.',   plan: 'Gold',    time: '17 min' },
  { name: 'Antoine P.',  plan: 'Silver',  time: '21 min' },
  { name: 'Isabelle F.', plan: 'Gold',    time: '26 min' },
  { name: 'Lucas V.',    plan: 'Diamond', time: '30 min' },
  { name: 'Emma C.',     plan: 'Bronze',  time: '34 min' },
  { name: 'Nicolas G.',  plan: 'Gold',    time: '38 min' },
];

export default function SocialProofTicker() {
  const [index,   setIndex]   = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      // Fade out → swap → fade in
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 500);
    }, 12000);
    return () => clearInterval(id);
  }, []);

  const n = NOTIFICATIONS[index];

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg max-w-xs transition-opacity duration-500"
        style={{
          backgroundColor: '#fff',
          border: '1px solid var(--color-border)',
          opacity: visible ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <CheckCircle size={18} className="shrink-0" style={{ color: '#22C55E' }} />
        <p className="text-xs leading-snug" style={{ color: 'var(--color-ink-light)' }}>
          <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{n.name}</span>
          {' '}vient de commander{' '}
          <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{n.plan}</span>
          {' '}· il y a {n.time}
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

---

## Task 7: Wire scarcity components into the checkout page

**Files:**
- Modify: `app/commander/[plan]/page.tsx`

- [ ] **Step 1: Add imports**

At the top of the file, add:
```tsx
import ScarcityStrip     from '@/components/sections/ScarcityStrip';
import SocialProofTicker from '@/components/sections/SocialProofTicker';
```

- [ ] **Step 2: Add ScarcityStrip above the form**

Find:
```tsx
<h2
  className="font-display font-bold text-xl mb-6"
  style={{ color: 'var(--color-ink)' }}
>
  Vos informations de commande
</h2>
<CheckoutForm
```

Replace with:
```tsx
<h2
  className="font-display font-bold text-xl mb-6"
  style={{ color: 'var(--color-ink)' }}
>
  Vos informations de commande
</h2>

<ScarcityStrip planSlug={plan.slug} />

<CheckoutForm
```

- [ ] **Step 3: Add SocialProofTicker just before `</main>`**

Find `</main>` and replace with:
```tsx
        <SocialProofTicker />
      </main>
```

- [ ] **Step 4: Add guarantee badge + countdown pill to the sidebar**

Find the plan summary card footer section:
```tsx
{/* Card footer */}
<div
  className="px-6 py-4"
  style={{ borderTop: '1px solid var(--color-border)' }}
>
```

Replace with:
```tsx
{/* Sidebar urgency pill */}
<SidebarCountdown />

{/* Card footer */}
<div
  className="px-6 py-4"
  style={{ borderTop: '1px solid var(--color-border)' }}
>
```

- [ ] **Step 5: Add the SidebarCountdown client component**

Create a new file `components/sections/SidebarCountdown.tsx`:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { Clock, Shield } from 'lucide-react';

function getSecondsUntilMidnight(): number {
  const now      = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
}

function formatCountdown(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

export default function SidebarCountdown() {
  const [secondsLeft, setSecondsLeft] = useState(getSecondsUntilMidnight);

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(getSecondsUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="px-6 py-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--color-border)' }}>
      {/* Countdown pill */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{ backgroundColor: '#FFFBEB', border: '1px solid #FDE68A' }}
      >
        <Clock size={13} style={{ color: '#D97706' }} aria-hidden="true" />
        <span className="text-xs font-semibold" style={{ color: '#92400E' }}>
          Ce prix expire dans{' '}
          <span className="font-mono">{formatCountdown(secondsLeft)}</span>
        </span>
      </div>

      {/* Guarantee badge */}
      <div className="flex items-center gap-2">
        <Shield size={14} style={{ color: '#22C55E' }} aria-hidden="true" />
        <span className="text-xs font-medium" style={{ color: 'var(--color-gray-600)' }}>
          Activation garantie ou remboursement
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Update checkout page to import SidebarCountdown**

Add to imports at top of `app/commander/[plan]/page.tsx`:
```tsx
import SidebarCountdown from '@/components/sections/SidebarCountdown';
```

- [ ] **Step 7: TypeScript check**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npx tsc --noEmit
```
Expected: no errors.

---

## Task 8: Final build verification

- [ ] **Step 1: Full production build**

```bash
cd D:\claude\ProjectClarioTV\clariotv && npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Generating static pages (44/44)
```
All routes should show as before. `app/layout.tsx` becomes dynamic (ƒ) — that is correct and expected.

- [ ] **Step 2: Manual smoke test — Font Management**

1. Start dev server: `npm run dev`
2. Go to `http://localhost:3000/admin/parametres`
3. Find the "Typographie" section
4. Change "Police d'affichage" to "Playfair Display"
5. Verify the preview text beneath the select renders in Playfair Display
6. Click "Sauvegarder"
7. Navigate to `http://localhost:3000` — headings should render in Playfair Display

- [ ] **Step 3: Manual smoke test — Checkout Scarcity**

1. Go to `http://localhost:3000/commander/gold`
2. Verify ScarcityStrip is visible above the form (amber background, countdown ticking, "37 personnes regardent", "⭐ Le plus commandé" copy)
3. Check sidebar: countdown pill + "Activation garantie ou remboursement" badge visible
4. Wait 12 seconds — a social proof notification should appear in bottom-left corner
5. Verify device field has no asterisk (optional)
6. Go to `http://localhost:3000/commander/diamond` — spots badge should say "2 restants"

- [ ] **Step 4: Restart preview server**

```bash
# Kill current server and restart to pick up any env/layout changes
taskkill /F /IM node.exe (Windows) or pkill node (Mac/Linux)
npm run dev
```
