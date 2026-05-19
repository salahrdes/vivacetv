# Design Spec: Font Management + Checkout Scarcity
**Date:** 2026-05-02  
**Project:** VivaceTV  
**Status:** Approved

---

## 1. Overview

Two independent features:

1. **Font Management** — Admin panel setting that controls site-wide typography (display + body font) from a curated list of 10 Google Fonts. Changes persist to DB and apply instantly on next page load with no code changes required.

2. **Checkout Scarcity Enhancement** — Layer urgency/conversion elements onto the existing `/commander/[plan]` checkout pages: live countdown timer, viewer count, social proof ticker, and per-plan scarcity copy.

---

## 2. Font Management

### 2.1 Available Fonts

All 10 fonts below are available for both the display font and body font selectors:

| Font Name | Google Fonts Slug |
|---|---|
| Mozilla Headline | `Mozilla+Headline` |
| Stack Sans Text | `Stack` |
| Roboto | `Roboto` |
| Noto Sans | `Noto+Sans` |
| Playfair Display | `Playfair+Display` |
| Sen | `Sen` |
| Signika Negative | `Signika+Negative` |
| Hammersmith One | `Hammersmith+One` |
| Amaranth | `Amaranth` |
| Blinker | `Blinker` |

### 2.2 Settings Layer

**File:** `lib/settings-config.ts`

Add two new keys to `SETTING_DEFAULTS`:
- `font_display` → `"Mozilla Headline"` (current default)
- `font_body` → `"Inter"` (current default — kept for backward compat even though Inter is not in the curated list; the layout handles it gracefully)

### 2.3 Admin UI

**File:** `components/admin/SettingsForm.tsx`

Add a new "Typographie" section with:
- **Display font** `<select>` — label "Police d'affichage (titres)"
- **Body font** `<select>` — label "Police du corps (texte)"
- Each option renders the font name; below each select, a live preview line renders in the selected font using an inline `<style>` scoped to that element (loads the font lazily via a small `@import`)
- Saved alongside all other settings via the existing `saveAllSettings()` server action

### 2.4 Runtime Injection

**File:** `app/layout.tsx`

`RootLayout` is already a Server Component. At request time:
1. Call `getSettings()` → get `font_display` and `font_body` values
2. Map each font name to its Google Fonts URL slug using a lookup table
3. Build a single combined Google Fonts `<link>` URL:  
   `https://fonts.googleapis.com/css2?family=<slug1>&family=<slug2>&display=swap`
4. Inject a `<style>` tag setting CSS vars:  
   `html { --font-display: 'Mozilla Headline'; --font-body: 'Roboto'; }`
5. Keep the existing preconnect links

Since `globals.css` uses `var(--font-display)` and `var(--font-body)` site-wide, the entire site responds to changes with no further code changes.

**Fallback:** If a setting key is missing or blank, fall back to `Mozilla Headline` / `Inter`.

---

## 3. Checkout Scarcity Enhancement

### 3.1 No New Routes

The existing `/commander/[plan]` dynamic route stays. All 4 plans (bronze, silver, gold, diamond) are handled through the same page. Scarcity elements receive the `plan` object as props and render plan-specific copy.

### 3.2 Form Changes

**File:** `components/sections/CheckoutForm.tsx`

- Device type field: change from **required** to **optional** (remove `required` prop and validation rule)
- No other form field changes

### 3.3 Scarcity Strip Component

**New file:** `components/sections/ScarcityStrip.tsx` (client component)

A lime-accent banner rendered above the checkout form containing:

**Countdown timer:**
- Counts down to midnight (00:00:00) local time
- Format: `"Offre expire dans HH:MM:SS"`
- Ticks every second via `setInterval`
- Resets automatically at midnight

**Viewer count:**
- Initialises at a seeded random number in range 15–40 (seeded by plan slug for consistency within a session)
- Every 8–15 seconds, fluctuates by ±1 (never below 10, never above 50)
- Display: `"🔥 X personnes regardent cette offre en ce moment"`

**Per-plan urgency copy** (prop-driven, defined in component):
- Bronze: `"Idéal pour découvrir VivaceTV sans engagement long"`
- Silver: `"6 mois d'accès — le meilleur rapport qualité/prix"`
- Gold: `"⭐ Le plus commandé ce mois — stock limité"`
- Diamond: `"💎 Offre VIP — 2 accès prioritaires restants"`

### 3.4 Social Proof Ticker Component

**New file:** `components/sections/SocialProofTicker.tsx` (client component)

Positioned at the bottom of the checkout page (inside `<main>`, above `<Footer>`).

- Cycles through a hardcoded list of ~10 believable "recent orders":  
  e.g. `"Marie L. vient de commander Gold · il y a 2 min"`
- One notification visible at a time, fades in/out every 12 seconds
- Uses CSS `opacity` transition for smooth appearance
- List is shuffled on mount to vary order across sessions

### 3.5 Right Sidebar Upgrades

**File:** `app/commander/[plan]/page.tsx`

Add to the existing plan summary card:
- **"Ce prix expire à minuit"** pill — mirrors the countdown from the strip (shared via a lightweight client wrapper or duplicated simpler countdown)
- **Garantie satisfaction badge** — "Activation garantie ou remboursement" with a shield icon

### 3.6 Plan-Specific Scarcity Data

Defined inline in `ScarcityStrip.tsx` as a record keyed by plan slug — no DB, no API. Example:

```ts
const SCARCITY: Record<string, { urgency: string; spotsLeft?: number }> = {
  bronze:  { urgency: 'Idéal pour découvrir VivaceTV' },
  silver:  { urgency: 'Meilleur rapport qualité/prix' },
  gold:    { urgency: '⭐ Le plus commandé ce mois', spotsLeft: 5 },
  diamond: { urgency: '💎 Offre VIP — places limitées', spotsLeft: 2 },
};
```

---

## 4. File Change Summary

| File | Action |
|---|---|
| `lib/settings-config.ts` | Add `font_display`, `font_body` defaults |
| `components/admin/SettingsForm.tsx` | Add Typographie section with font selects + live preview |
| `app/layout.tsx` | Fetch settings at runtime, inject dynamic font link + CSS vars |
| `components/sections/CheckoutForm.tsx` | Make device optional |
| `components/sections/ScarcityStrip.tsx` | New — countdown + viewer count + urgency copy |
| `components/sections/SocialProofTicker.tsx` | New — cycling social proof notifications |
| `app/commander/[plan]/page.tsx` | Add ScarcityStrip, SocialProofTicker, sidebar upgrades |

---

## 5. Out of Scope

- No A/B testing framework
- No analytics on scarcity element interactions
- No real-time DB tracking of page views or order counts
- No font upload (Google Fonts CDN only)
- No per-page font overrides (site-wide only)
