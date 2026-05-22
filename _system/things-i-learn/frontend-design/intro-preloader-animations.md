# Intro / Preloader Animation Components

## Umbrella Terms & Related Concepts

- **Preloader animations** — loading screens while content loads
- **Intro sequences** — brand presentation animations on site entry
- **Splash screens** — brief branded intro experiences
- **Loading overlays** — full-screen covering animations
- **Brand reveals** — animated logo/company name presentations
- **Onboarding animations** — first-visit user experience sequences

## How It's Built (Technical Pattern)

### 1. Fixed Overlay Structure

```css
position: fixed;
inset: 0;
z-index: 1000; /* Above everything */
```

### 2. Animation-Ready Initial States

Elements start hidden via CSS; GSAP makes them visible before animating to prevent FOUC.

```css
opacity: 0;
visibility: hidden;
```

In the animation script, before tweening:

```ts
gsap.set([mark, name, sub], { visibility: "visible" });
gsap.set(mark, { y: 10, opacity: 0 });
```

### 3. Clip-Path Wipe Technique

The overlay covers the full screen as a rectangle. GSAP collapses it to zero height — all four polygon points meet the top edge — which wipes it upward off screen like a blind being raised.

```css
/* Initial: full screen rectangle */
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
will-change: clip-path; /* GPU hint */
```

```ts
// GSAP animates to: top-edge line = invisible
tl.to(overlay, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  duration: 1.0,
  ease: "power4.inOut",
});
```

### 4. Semantic Token Usage

```css
background-color: var(--color-bg-brand);        /* overlay bg */
color: var(--color-fg-on-brand);                /* name text */
background: var(--color-fg-accent-on-brand);    /* rule / accent */
```

### 5. GSAP Integration Points

- Data attributes for targeting: `[data-intro]`, `[data-intro-overlay]`, `[data-intro-mark]`, `[data-intro-rule]`, `[data-intro-name]`, `[data-intro-sub]`
- Separate animation script: `intro.anim.ts` (module-level code, no export)
- Component script block is a bare `import "./intro.anim.ts"`
- Completion: `intro.remove()` called via `tl.call()` at the end of the timeline

### 6. Session Guard & Reduced Motion

Play once per session; skip entirely if user prefers reduced motion:

```ts
if (sessionStorage.getItem("intro-seen")) {
  intro.remove();
} else {
  sessionStorage.setItem("intro-seen", "1");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    intro.remove();
  } else {
    // run animation timeline
  }
}
```

### 7. Timeline Sequence (this project)

```
0.2s  — logo mark drops in (y: 10 → 0, fade in, 0.6s)
      — gold rule draws across left→right (scaleX 0→1, 0.9s, power2.inOut)
      — firm name rises in (y: 12 → 0, fade in, 0.75s)
      — sub-line fades in (y: 8 → 0, fade in, 0.55s)
0.7s  — hold
      — content fades out (staggered, 0.05s apart)
      — overlay sweeps upward (clip-path wipe, 1.0s, power4.inOut)
      — intro removed from DOM
```

## Component Reference (this project)

**`src/components/Intro/Intro.astro`** — markup + CSS
**`src/components/Intro/intro.anim.ts`** — GSAP timeline

Structure:

```html
<div data-intro class="intro">
  <div data-intro-overlay class="intro__overlay"></div>

  <div class="intro__stage">
    <img data-intro-mark class="intro__mark" />

    <div class="intro__rule-wrap">
      <div data-intro-rule class="intro__rule"></div>
    </div>

    <div class="intro__text">
      <p data-intro-name class="intro__name">Studio Name</p>
      <p data-intro-sub class="intro__sub">Tagline · Location</p>
    </div>
  </div>
</div>
```

CSS cleanup on completion:

```css
:global(.intro-done) [data-intro] {
  display: none !important;
}
```

## When to Use

- Portfolio / agency websites
- Law firms (professional brand establishment)
- Product launches
- Premium / luxury brands
- Any context where first-impression brand delivery matters

## Search Terms for More Examples

`CSS preloader animation`, `intro sequence web design`, `brand reveal animation`, `loading screen patterns`, `clip-path wipe effects`, `GSAP intro animations`
