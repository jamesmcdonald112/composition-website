# Next-Project Improvements

Forward-looking flags for the next solicitor-website build. Each item is a concrete change to make at the start of the next project, distilled from process notes during this build.

The lessons that have already been absorbed into this project's active reference files (layout system in every prompt, component-direction formula, pre-design in chat, composition-classes-first, by-page vs by-component approach) are not repeated here — they're documented in `_system/reference/layout.md`, `_system/reference/component-direction.md`, and `_system/workflow/component-build-prompt.md`.

---

## 1. Wrapper class — drop the modifier system

**Current pattern:** `wrapper wrapper--wide` and `wrapper wrapper--narrow` give three max-widths (1152px / 1440px / 672px). The modifier adds an extra concept to remember and a class-name decision at every container.

**Next-project change:** define one fixed `max-width` on `.wrapper` and use it everywhere. No modifiers. Components that genuinely need a different width handle it inline (article body, contact form, legal text). One container width by default removes a class of confusion entirely.

---

## 2. Scroll-entrance animations — consolidate the duplicated pattern

**Current pattern:** every component implements its own fade-up + stagger ScrollTrigger logic in its `.gsap.ts` sibling. The same eight-line block is duplicated 15+ times across the codebase. When easing or duration values drift between components, the page feels inconsistent.

**Next-project change** — pick one of these two approaches at the start:

### Option A — Shared GSAP utility

A single `src/scripts/animations.ts` exporting `fadeInOnScroll(selector, options?)`. Each component calls it with its own `data-` attribute selector rather than re-implementing ScrollTrigger from scratch. Reduces boilerplate; keeps easing and duration values consistent across the site.

### Option B — CSS keyframe entrances

Define a `@keyframes fade-up` in `utilities.css` and an `.animate-on-scroll` utility class. Use **one** site-wide `IntersectionObserver` to add an `is-visible` class when the element enters the viewport, triggering the animation. No GSAP dependency for simple fades. GSAP stays reserved for complex/scrubbed animations (count-ups, draw-on effects, accordion height tweens).

**Recommendation:** Option B for simple section entrances (header, list stagger). Option A for anything that needs scrubbing, sequencing, or precise timing. **Decide which at the start of the next project, before any components are built.**

---

## 3. Single source of truth for typography and colour roles

**Current pattern:** heading sizes, eyebrow styles, body text, and colour roles are restated independently inside each component's `<style>` block. This creates drift — for example, the TrustStrip's heading was a different size to every other section `h2` on this project, only caught by manual audit.

**Next-project change:** define a small set of named typographic roles as utility classes (or CSS custom properties) at the global level, not inside individual components:

```css
/* e.g. in utilities.css or compositions.css */
.heading-section   { font-size: clamp(2xl, 3.5vw, 4xl); font-weight: light; ... }
.heading-display   { font-size: clamp(4xl, 5.5vw, 5xl); ... }
.eyebrow           { font-size: xs; letter-spacing: widest; text-transform: uppercase; ... }
.body-lead         { font-size: lg; line-height: relaxed; ... }
```

Each component then applies the class rather than restating every property. Colour roles (heading colour, muted text, accent text) follow the same pattern — one place to change, everything updates.

**Why this matters:** typography drift is invisible to spot-checks but obvious to a visitor — every section looking subtly different breaks the calm-authority register the design depends on. Catching it via global utility classes is much cheaper than catching it via manual audit per component.
