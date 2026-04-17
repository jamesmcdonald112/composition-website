# Theme Creation Guide

Read this file in full before writing any theme file.
Read `src/styles/themes/theme-navy-gold-green.css` as the structural reference.
Read `src/styles/tokens.css` for the full token contract.

---

## Step 1 — Calculate contrast before writing anything

Run all pairs below using the WCAG 2.1 relative luminance formula.
Use `scripts/verify-contrast.mjs` (runs via `node scripts/verify-contrast.mjs`).

### Text on light surfaces — need 4.5:1 minimum

| Pair | Notes |
|---|---|
| brand-900 on neutral-100 | Page body text — usually easy |
| brand-900 on white | Page body text on surface |
| brand-700 on neutral-100 | Muted/secondary text |
| neutral-600 on neutral-100 | Caption/subtle text |
| **accent-600 on neutral-100** | Hardest to pass — accent text on page bg |
| accent-600 on white | Accent text on card surface |
| **tertiary-700 on neutral-100** | Hardest to pass — tertiary text on page bg |

### Text on dark surfaces — need 4.5:1 minimum

| Pair | Notes |
|---|---|
| white on brand-900 | Primary text on hero/footer/navbar |
| **accent-400 on brand-900** | Gold/accent text on dark brand |
| tertiary-700 on brand-900 | Only if tertiary is used on dark surfaces |

### Interactive — need 4.5:1 minimum

| Pair | Notes |
|---|---|
| **white on accent-500** | Button label text — often fails |
| white on accent-600 | Button hover label text |

### UI elements — need 3:1 minimum

| Pair | Notes |
|---|---|
| neutral-300 on white | Default border on card surface |
| accent-400 on neutral-100 | Accent border on page background |

---

## Step 2 — The two-accent-token rule

No single gold/copper/accent shade passes AA text on BOTH light and dark surfaces.
Always define two accent foreground shades:

- `--color-fg-accent` (accent-600) → light surfaces only (bg-page, bg-surface, bg-subtle)
- `--color-fg-accent-on-brand` (accent-400) → dark/brand surfaces only (bg-brand, bg-brand-muted)

Verify each passes 4.5:1 on its intended surface before finalising.

---

## Step 3 — Neutral scale checks

- `neutral-100` vs `white`: must be visually distinct (different enough to see a card on a page)
- `neutral-300` as border on white: must pass 3:1 UI contrast
- `neutral-50` as subtle section background: must be readable but clearly softer than white

---

## Step 4 — Auto-adjust procedure

If any pair fails:

| Failing pair | Fix |
|---|---|
| accent-600 on light | Decrease accent-600 lightness by 0.02, recalculate |
| accent-400 on dark | Increase accent-400 lightness by 0.02, recalculate |
| tertiary-700 on light | Decrease tertiary-700 lightness by 0.02, recalculate |
| white on accent-500 | Decrease accent-500 lightness by 0.01, recalculate |

Repeat until the pair passes. Record the adjusted value with a comment in the theme file.

---

## Step 5 — Write the theme file

Only after all contrast pairs pass. Follow this exact structure (three sections):

```css
/*
  THEME: [Name]
  ─────────────────────────────────
  LAYER 1 — PRIMITIVES AND ROLE ALIASES ONLY.
  ...header comment with palette summary and verified contrast ratios...
*/

:root {

  /* ── SECTION 1: COLOUR PRIMITIVES ──────────────────── */
  /* Raw OKLCH values. Never used directly in components. */
  /* Include hex comment on every line for readability.   */

  /* Brand — [colour name], hue [N] */
  --brand-900: oklch(...); /* #hex */
  /* ... all 10 stops: 900 800 700 600 500 400 300 200 100 50 */

  /* Accent — [colour name], hue [N] */
  /* ... */

  /* Tertiary — [colour name], hue [N] */
  /* ... */

  /* Neutral — [colour name], hue [N], low chroma */
  /* ... */

  /* State colours */
  --red-600:   oklch(...);
  --red-100:   oklch(...);
  --amber-600: oklch(...);
  --amber-100: oklch(...);
  --green-600: ...; /* use tertiary-600 or a dedicated green */
  --green-100: ...;

  /* Absolute */
  --white: oklch(1 0 0);
  --black: oklch(0 0 0);


  /* ── SECTION 2: ROLE ALIASES ────────────────────────── */
  /* Map primitives to brand/accent/tertiary/neutral slots. */
  /* These names NEVER change between themes.              */

  --color-brand-900: var(--[primitive]-900);
  /* ... through --color-brand-50 */

  --color-accent-900: var(--[primitive]-900);
  /* ... through --color-accent-50 */

  --color-tertiary-900: var(--[primitive]-900);
  /* ... through --color-tertiary-50 */

  --color-neutral-900: var(--[primitive]-900);
  /* ... through --color-neutral-50 (no 800) */

  --color-absolute-white: var(--white);
  --color-absolute-black: var(--black);


  /* ── SECTION 3: NON-COLOUR PRIMITIVES ──────────────── */
  /* Copy exactly from theme-navy-gold-green.css.         */
  /* Font stacks and size scale are theme-agnostic.       */

  --font-stack-serif: ...;
  --font-stack-sans:  ...;
  --font-stack-mono:  ...;

  --size-0-5: 0.125rem;
  /* ... full size scale through --size-64 */

}
```

---

## Step 6 — Run verification

```bash
node scripts/verify-contrast.mjs
```

All 10 pairs must pass before the theme is considered complete.

---

## Step 7 — Report

Show the full contrast table.
Flag every value adjusted from the original specification and explain why.
Confirm the file is ready to activate.

---

## To switch themes

Change one line in `src/styles/global.css`:

```css
@import './themes/theme-navy-gold-green.css';
/* → */
@import './themes/theme-midnight-copper-sage.css';
```

No other files need to change. The semantic token layer (`tokens.css`) is theme-agnostic.

---

## Role alias names — never change these

These are the role alias variable names that `tokens.css` depends on.
They must be identical across every theme file:

```
--color-brand-50  through  --color-brand-900
--color-accent-50 through  --color-accent-900
--color-tertiary-50 through --color-tertiary-900
--color-neutral-50 through --color-neutral-900
  (note: neutral has no -800 stop)
--color-absolute-white
--color-absolute-black
```

State primitives used directly by `tokens.css`:
```
--red-600   --red-100
--amber-600 --amber-100
--green-600 --green-100
```
