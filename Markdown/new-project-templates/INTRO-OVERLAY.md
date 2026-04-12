# Template: Intro Overlay

A full-screen intro/preloader that plays once per browser session.
Works with Astro + GSAP. Works with ClientRouter (View Transitions).

This template has no styling — it is pure structure and logic.
Add your own colours, fonts, logo, and animation content on top.

---

## What It Is

A fixed full-screen overlay that covers the page on first visit.
GSAP animates whatever content you put inside it, then wipes the
overlay off screen. On every subsequent page visit within the same
browser session it is hidden instantly — no flash, no replay.

---

## Files Required

```
src/
  components/
    intro/
      IntroOverlay.astro    ← markup, CSS shell, script import
      intro.anim.ts         ← GSAP animation logic
  layouts/
    BaseLayout.astro        ← requires one addition to <head>
```

---

## What to Add to Each File

### BaseLayout.astro — add to `<head>`

This must be the **first element in `<head>`** before any stylesheets.
Do not move it. Order is critical — it must run before any CSS paints.

```html
<script is:inline>
  if (sessionStorage.getItem('intro-seen')) {
    document.documentElement.classList.add('intro-done');
  }
  document.addEventListener('astro:after-swap', function() {
    if (sessionStorage.getItem('intro-seen')) {
      document.documentElement.classList.add('intro-done');
    }
  });
</script>
```

Then import and render the component in `<body>`:

```astro
---
import IntroOverlay from "../components/intro/IntroOverlay.astro";
---
<body>
  <IntroOverlay />
  <slot />
</body>
```

---

### IntroOverlay.astro

```astro
---
// No imports needed unless you're pulling in config or assets
---

<div data-intro class="intro">

  <div data-intro-overlay class="intro__overlay"></div>

  <div class="intro__stage">
    <!--
      Put your logo, firm name, rule, tagline etc here.
      Add data-intro-* attributes to anything GSAP will animate.
      Example:
        <img data-intro-mark ... />
        <p data-intro-name ...>Your Name</p>
        <p data-intro-sub ...>Your tagline</p>
    -->
  </div>

</div>

<style>
  /* Hides overlay instantly on return visits — do not remove */
  :global(.intro-done) [data-intro] {
    display: none !important;
  }

  /* Full screen fixed overlay — sits above everything */
  .intro {
    position: fixed;
    inset: 0;
    z-index: 1000;
    pointer-events: all;
  }

  /* The background that wipes off screen — add your colour here */
  .intro__overlay {
    position: absolute;
    inset: 0;
    background-color: /* your colour */;
    will-change: clip-path;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  /* Centres content over the overlay */
  .intro__stage {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  /*
    Add visibility: hidden to any element GSAP will animate.
    This prevents a flash of the element at its final state
    before GSAP applies starting values.
    Example:
      [data-intro-mark],
      [data-intro-name],
      [data-intro-sub] {
        opacity: 0;
        visibility: hidden;
      }
  */
</style>

<script>
  import "./intro.anim.ts";
</script>
```

---

### intro.anim.ts

```ts
import { gsap } from "../../scripts/gsap.ts";

const intro = document.querySelector<HTMLElement>("[data-intro]");
if (!intro) throw new Error("Intro: [data-intro] not found");

if (sessionStorage.getItem("intro-seen")) {
  // Already seen this session — remove instantly
  intro.remove();
} else {
  // Any truthy value works — we only care whether the key exists
  sessionStorage.setItem("intro-seen", "1");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    intro.remove();
  } else {
    const overlay = intro.querySelector<HTMLElement>("[data-intro-overlay]");
    // Query your animated elements here, e.g:
    // const mark = intro.querySelector<HTMLElement>("[data-intro-mark]");
    // const name = intro.querySelector<HTMLElement>("[data-intro-name]");

    // Set visibility visible before animating — prevents flash
    // gsap.set([mark, name], { visibility: "visible" });

    // Set starting positions
    // gsap.set(mark, { y: 10, opacity: 0 });
    // gsap.set(name, { y: 12, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Your animation here
    // tl.to(mark, { opacity: 1, y: 0, duration: 0.6 }, 0.2);
    // tl.to(name, { opacity: 1, y: 0, duration: 0.75 }, "-=0.3");

    // Hold
    // tl.to({}, { duration: 0.7 });

    // Fade content out
    // tl.to([mark, name], { opacity: 0, duration: 0.35, stagger: 0.05 });

    // Wipe overlay upward off screen — keep this
    tl.to(overlay, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.0,
      ease: "power4.inOut",
    });

    // Remove from DOM when done — keep this
    tl.call(() => intro.remove());
  }
}
```

---

## Rules — Do Not Break These

- The `is:inline` script must be the **first thing in `<head>`**
- Do **not** use `astro:page-load` in the animation script — it fires
  multiple times on pages with ClientRouter and breaks the animation
- Do **not** use `localStorage` — use `sessionStorage` so the intro
  replays when the browser is closed and reopened
- Add `visibility: hidden` to every element GSAP will animate — without
  it you get a flash at the final state before GSAP applies starting values
- The wipe `clipPath` animation and `intro.remove()` at the end are
  required — without them the overlay never clears
