# Mary Molloy Solicitor — Project Overview

A production website for Mary Molloy Solicitor, a Kilkenny-based Irish solicitors practice established in 1979. The firm is family-run — Mary Molloy is the principal, with her sons Nicholas and Richard also practising. The site is designed to the quality level of an Awwwards-winning studio: premium, authoritative, warm — not a generic legal template.

---

## Business Details

- **Practice name:** Mary Molloy Solicitor
- **Location:** 2 Rose Inn St, Kilkenny, R95 W58D, Ireland
- **Phone:** (056) 776 5829
- **Established:** 1979 (46+ years in practice)
- **URL (staging):** https://test-mary-m.netlify.app/
- **Core focus:** Conveyancing (buying & selling property)
- **Google Place ID:** ChIJeTRDMZ4wXUgRwZoAUIYc-30

---

## Services (8 total)

Each service has a dedicated config file at `src/config/services/[slug].ts` containing: title, tag, slug, href, icon (SVG raw), image (webp), SEO metadata, hero, article content, FAQs, process steps, trust strip copy, and CTAs.

| Title | Tag | Slug |
|---|---|---|
| Buying & Selling Property | Conveyancing | buying-and-selling-property |
| Wills & Estate Administration | Probate & Trusts | wills-and-estate-administration |
| Family & Childcare Law | Family & Child Law | family-and-childcare-law |
| Personal Injury / Litigation | Personal Injury | personal-injury-litigation |
| Road Traffic Accidents | Road Traffic Accidents | road-traffic-accidents |
| Leases & Tenancy Agreements | Landlord & Tenant | leases-and-tenancy-agreements |
| Employment Law | Employment & Equality | employment-law |
| Debt Collection | Debt Recovery | debt-collection |

Service order is controlled by the array in `src/config/services/index.ts`.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Astro 6 |
| Styling | Plain CSS in `<style>` blocks — no Tailwind, no CSS modules |
| Animation | GSAP + ScrollTrigger + DrawSVGPlugin (Club GSAP — available in `node_modules`) |
| TypeScript | Strict, throughout |
| Validation | Zod |
| Email | Resend |
| Linting | Biome |
| Testing | Vitest (unit) + Playwright (e2e) |
| Deployment | Netlify |

---

## Design System — Three-Layer Token Architecture

```
src/styles/global.css          ← load order controller
src/styles/themes/
  theme-amber-navy.css         ← Layer 1: primitives (raw values, never used in components)
src/styles/tokens.css          ← Layer 2: semantic tokens (use these in components)
src/styles/compositions.css    ← CUBE CSS layout classes
src/styles/utilities.css
src/styles/blocks.css
src/styles/exceptions.css
```

**Rule:** Components use semantic tokens only — never primitive values, never raw hex/px.

### Colour Tokens (key ones)

```
--color-bg                  stone-100   Page background (warm off-white)
--color-bg-surface          white       Cards, panels
--color-bg-brand            navy-900    Dark sections (hero, footer)
--color-text                navy-900    Primary body text
--color-text-inverse        white       Text on dark backgrounds
--color-text-inverse-muted  white 80%   Secondary text on dark
--color-text-accent         gold-500    Accent text on light backgrounds
--color-accent              gold-500    Primary accent
--color-accent-light        gold-400    Lighter accent (#c19a2e) — decorative on light
--color-accent-on-light     gold-600    WCAG AA compliant accent on light surfaces
--color-border-accent       gold-400    Accent borders
```

### Palette

- **Navy** (brand): `navy-900` = `#0d1825` → `navy-50` = `#eef1f7`
- **Gold** (accent): `gold-300` = `#d4af37` (metallic, dark bg only) · `gold-400` = `#c19a2e` · `gold-500` = `#a48111` (WCAG AA on light) · `gold-600` = `#89690d`
- **Stone** (surfaces): `stone-50` = `#fafaf9` · `stone-100` = `#f5f3f0` · `stone-200` = `#ede9e4`

### Typography

- **Serif:** Cormorant Garamond — headings, display, blockquotes
- **Sans:** DM Sans — body copy, UI, navigation
- **Scale anchored at:** `--font-size-base` = 16px (`--size-4`)

### Spacing Scale

```
--space-xs   8px     --space-xl   32px
--space-sm   12px    --space-2xl  48px
--space-md   16px    --space-3xl  64px
--space-lg   24px    --space-4xl  96px  (= --space-section)
--space-5xl  128px   --space-6xl  160px
```

### Layout

```
--width-narrow   672px   article body, forms
--width-content  1152px  standard sections
--width-wide     1440px  hero, footer, full-bleed

--gutter         24px (mobile)
--gutter-md      32px (tablet 768px+)
--gutter-lg      48px (desktop 1024px+)
```

### Breakpoints (literal px — CSS cannot use var() in @media)

```
768px   tablet
1024px  small desktop
1280px  standard desktop
```

### Composition Classes (from `compositions.css`)

```
.section              padding-block: --space-section (96px)
.section[data-size="sm"]   64px
.section[data-size="lg"]  160px
.wrapper              max-width: --width-content, centred, responsive gutters
.wrapper--wide        max-width: --width-wide
.wrapper--narrow      max-width: --width-narrow
.stack                vertical flex, spacing via > * + *
.cluster              horizontal wrapping flex
.grid                 auto-fit responsive grid
.sidebar              two-column, fixed-min first child
.flow                 prose margin rhythm
```

---

## File Structure

```
src/
  assets/
    icons/          SVG icons (imported as ?raw, injected via set:html)
    images/new/     Photographic webp images (one per service + hero)
    team/           Team portrait images
  components/
    navbar/         Navbar.astro, NavMobile.astro
    HeroHome/       HeroHome.astro, ScrollIndicator.astro
    footer/         Footer.astro
    ui/
      SectionHeader/  SectionHeader.astro (eyebrow + heading + rule)
      Eyebrow.astro
      SectionRule.astro
      BrandLogo.astro
      CtaLink.astro
    CTAPanel/       CTAPanel.astro
    TestimonialBlock/ TestimonialBlock.astro
    services/
      ServiceCard/    (existing — row layout, no images)
      ServiceGrid/    ServiceGrid.astro (image cards, preview/full modes)
    contact/        ContactPanel.astro
    layout/         SplitPage.astro
    Intro/          Intro.astro
  config/
    firm.ts         Business details (phone, address, hours)
    home.ts         Homepage section content
    services/
      index.ts      Master service list (controls order)
      services-index.ts  Services page hero/cta + allServices array
      [slug].ts     Per-service full config
    testimonials.ts 6 client testimonials + section heading
    ctas.ts         CTA panel content
    nav.ts          Navigation links
    team.ts         Team members
    about.ts        About page content
    service-areas.ts  Geographic service areas
  features/
    contact-form/   Form logic — DO NOT MODIFY (complete)
  layouts/
    BaseLayout.astro
  pages/
    index.astro           Homepage
    services/
      index.astro         Services index page
      [slug].astro        Individual service pages
    about.astro
    contact.astro
    thank-you.astro
    [legal pages].astro   privacy, terms, accessibility, etc.
  scripts/
    gsap.ts         GSAP + ScrollTrigger setup (always import from here)
  styles/           DO NOT MODIFY — finalised
```

---

## Component Conventions

### File structure

```
src/components/[category]/[ComponentName]/
  ComponentName.astro     markup + <style> + <script> if animated
  component-name.gsap.ts  only if animation is extracted
```

CSS lives inside the `<style>` block of the `.astro` file. Never create sibling `.css` files. Astro scopes styles automatically.

### Three layout layers — always

```html
<section class="section my-section">     <!-- Layer 1: full-width bg + vertical padding -->
  <div class="wrapper">                  <!-- Layer 2: max-width + gutters (use composition) -->
    <div class="my-section__content">    <!-- Layer 3: actual content -->
    </div>
  </div>
</section>
```

### Media queries — nested inside selector, never top-level

```css
/* ✅ correct */
.my-component {
  font-size: var(--font-size-base);
  @media (min-width: 768px) {
    font-size: var(--font-size-lg);
  }
}
```

### JS/animation targeting — data attributes, not classes or IDs

```html
<div data-navbar-toggle>   <!-- ✅ -->
<div id="navbar-toggle">   <!-- ✗ -->
<div class="js-toggle">    <!-- ✗ -->
```

### GSAP

Always import from `../../scripts/gsap.ts` (not directly from `gsap`). DrawSVGPlugin is available — import from `gsap/DrawSVGPlugin` and register with `gsap.registerPlugin()`. Always guard with:

```ts
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
```

Use `document.querySelectorAll()` always — Astro deduplicates `<script>` blocks so a single script serves all instances of a component on the page.

### Variant pattern — BEM modifier classes

```html
<section class="testimonials--dark">  <!-- ✅ BEM modifier -->
<section data-variant="dark">         <!-- ✗ data- is for JS hooks only -->
```

---

## SectionHeader Component

`src/components/ui/SectionHeader/SectionHeader.astro`

Props: `eyebrow`, `heading`, `headingEmphasis?`, `headingColor?`, `eyebrowColor?`, `ruleColor?`, `level?` (1|2|3), `gsapAttr?`

Used on every section that has a heading. The `eyebrowColor` and `ruleColor` props accept token names as strings (e.g. `"--color-accent-on-light"`).

---

## Pages Status

| Page | Status |
|---|---|
| Homepage (`/`) | Built — Hero, ServiceGrid (preview), Testimonial, CTA |
| Services index (`/services`) | Built — ServiceGrid (full, 8 cards) |
| Service detail (`/services/[slug]`) | Built — 8 pages via dynamic route |
| About (`/about`) | Built |
| Contact (`/contact`) | Built — form logic complete, do not touch |
| Thank you | Built |
| Legal pages | Built (privacy, terms, accessibility, complaints, cookie policy, disclaimer) |

---

## Design Tone

Premium Irish solicitor — authoritative and warm. Think Michelin-starred restaurant run by people who genuinely care. Not cold corporate. Not approachable casual. Reference studios: Obys Agency, Garden Eight, The Line Studio. Visual quality is the primary deliverable — a component that builds but looks mediocre is a failure.

---

## Do Not Touch

- `src/features/contact-form/` — form logic is complete
- `src/styles/` — token and CSS system files are finalised
- Any existing passing tests
