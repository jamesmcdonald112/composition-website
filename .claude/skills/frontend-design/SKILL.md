---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces for the Pozdnyakov Composition Studio site. Loads design thinking, token constraints, and motion principles for every component build session.
---

This skill guides the creation of components for a serious classical-music studio website. The brief is **editorial-classical**: it should feel closer to a published score, a small European conservatoire site, or a literary monograph than to a SaaS landing page. Every component should make a serious composer feel they are looking at a real studio with a real curriculum — before reading a single word.

## Priority Order — Read This First

1. Visual quality — does it look exceptional?
2. Layout correctness — containers, spacing, max-widths applied?
3. Token compliance — are tokens used correctly?
4. Technical correctness — does it build?

If the visual quality is not exceptional, nothing else matters.
A component that builds but looks mediocre is a failure.
The code is how you express the design. Not the other way around.

Before writing a single line of code, ask:
What is the single most beautiful thing I can build within these constraints?
Commit to that answer. Then build it.

## Design Thinking — Do This Before Writing Code

Before touching any code, commit to answers for these four questions:

- **Purpose**: What job does this component do for a serious composer evaluating whether this studio is worth their time and money?
- **Tone**: This project lives at the intersection of *maestro* and *generous teacher*. Not academic-cold. Not creator-casual. Think: a small European conservatoire that takes its tradition seriously and its students personally. Confident without being grand. Warm without being chummy.
- **Constraints**: Astro 6, plain CSS in `<style>` blocks, GSAP for animation, token system already built — no raw values anywhere.
- **Differentiation**: What is the one thing about this component that will make a serious composer stop and notice the quality?

**CRITICAL**: The token system is your vocabulary. Your job is to compose it beautifully — not to invent new values. The creative work happens in layout, proportion, rhythm, and motion. Not in colour or typeface choices.

## The Visual Register — Editorial-Classical

The site should feel like a *published edition*, not a *web product*. Specific cues:

- **Typography does almost all the work.** Serifs throughout. A refined display serif (Newsreader, EB Garamond, Cormorant) for headings; a clean humanist serif for body. Small-caps for section labels. Avoid sans-serif except where unavoidable for form inputs.
- **Warm cream paper, deep ink, one restrained accent.** Manuscript-paper background. Fountain-pen-ink foreground. A single muted accent — burgundy or aged brass — used sparingly for links, key highlights, primary CTAs.
- **Generous whitespace, especially around headings.** The space around a phrase signals how much weight that phrase carries. Treat headings like they're set in a programme note.
- **Numbered sequences over icon grids.** When showing the curriculum or a process, use roman numerals (I, II, III) or paginated numbering. Avoid icon cards — they read SaaS, not studio.
- **Left-aligned long-form prose.** The site has things worth reading. Bios, programme-note-style descriptions, lesson outlines. Don't break them into bullet soup.
- **Single audio or video embed per page, framed simply.** When music is featured, it should feel like a recital programme, not a media carousel.

## Reference Studios — Apply Training Knowledge

Useful references for the editorial-classical register:

- **Craig Mod's writing site** (craigmod.com) — generous typographic respect for the reader; quiet long-form pages.
- **Stripe Press** (press.stripe.com) — modern serif editorial with restrained accent colour and confident layout.
- **Notation editions** (Henle, Bärenreiter websites) — quiet typographic confidence, scholarly framing without being austere.
- **The Line Studio** (thelinestudio.com) — professional-services restraint at award-winning standard. Still relevant as a *layout* reference even though their colour palette differs.
- **Small European conservatoires** (Conservatoire de Paris, Royal Academy of Music) — institutional but human; how a serious music school presents itself online.

Ask yourself: would this component be at home on one of these sites? If not, keep working.

## Token System — Read Before Designing

The project has a complete three-layer token system already built:

```
src/styles/tokens.css              ← semantic tokens (use these in components)
src/styles/themes/theme-*.css      ← primitives (do not use directly in components)
```

Rules:
- Every CSS value must be a token reference — `var(--token-name)`
- Define component-level tokens first inside the block selector, then use them
- Never use hex values, px values, or raw numbers directly in component styles
- The theme file handles colour — do not hardcode colours

## Spatial & Typographic Principles

- Generous space signals quality — when in doubt, add more breathing room
- Typography does the heavy lifting — composition before decoration
- Asymmetry feels considered; perfect symmetry reads as template
- One focal point per screen section — nothing competes for attention
- Left-align for authority; centre only for isolated, intentional statements (a single epigraph; the studio name in the masthead)
- Real photography always beats placeholder — check `src/assets/` and `public/`
- For numbered sequences (curriculum, lesson process), use roman numerals or hairline numerals set in the display serif — not icon badges

## Motion — GSAP Principles

The motion vocabulary is **slow and deliberate** — the visual equivalent of a conductor's downbeat. Nothing bouncy, nothing playful, nothing flashy. Everything settles.

```ts
// Always import from this path only
import { gsap, ScrollTrigger } from '../../scripts/gsap.ts';

// Always guard — first line of every animation function
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

// Entrance — unhurried, arriving from below
gsap.from(el, { y: 30, opacity: 0, duration: 0.9, ease: 'power2.out' });

// Stagger — sequential, never simultaneous
gsap.from(els, { y: 20, opacity: 0, stagger: 0.12, duration: 0.8 });
```

**Never:** bounce, spin, rotate, scale above 1.05, slide more than 60px, compete animations on the same element.

**Always:** if it feels quick, it is too quick. Everything settles, it does not arrive.

**Script deduplication:** Astro runs `<script>` blocks once per page even if a component is used multiple times. Always use `document.querySelectorAll()` to target all instances.

## File Structure — Non-Negotiable

```
src/components/[category]/[component-name]/
  ComponentName.astro     ← markup + <style> block + <script> if GSAP needed
  component-name.gsap.ts  ← only if component has animation
```

CSS lives in `<style>` inside the `.astro` file. Astro scopes it automatically.
Do not create sibling `.css` files.

## Layout Shell — Non-Negotiable

Every section component must follow this three-layer pattern:

```astro
<section class="component-name">                          <!-- full-width shell -->
  <div class="component-name__inner wrapper wrapper--wide"> <!-- inner container -->
    <!-- content -->
  </div>
</section>
```

- The shell (`<section>`) handles background colour, padding-block, and full-width effects
- The inner container always uses `.wrapper` or `.wrapper--wide` — never hand-roll `max-width`, `margin-inline`, or `padding-inline`
- Never skip this pattern. Not for "simple" sections. Not ever.

## Naming — Non-Negotiable

All CSS classes follow BEM: `block__element--modifier`

- Block = the component name: `.studio-hero`, `.curriculum-path`, `.programme-note`
- Element = a part of the block: `.studio-hero__title`, `.curriculum-path__movement`
- Modifier = a variant: `.curriculum-path--compact`, `.programme-note--epigraph`
- `data-` attributes are for JS/GSAP hooks only — never for styling

## What to Avoid

- Raw values of any kind — hex, px, named colours, unitless numbers
- Generic AI/SaaS patterns — feature cards with icon + heading + paragraph,
  centred hero with gradient overlay, pill buttons, stat-row grids,
  testimonial carousels, "trust badge" rows
- Anything that would look at home on a Squarespace music-teacher template
- Centring everything — left-align for authority
- Carousels and sliders
- Sans-serif headings — they break the editorial register
- Sketchy "handmade" decoration meant to signal artisanship —
  the typography is the craft, not stickers and scribbles
- Decorating instead of composing — if adding something does not
  improve the hierarchy, remove it
- Building what is expected — the expected version is always generic

## The Standard

A component is not done until you can answer yes to all of these:

1. Would a senior designer at Stripe Press, Garden Eight, or The Line
   Studio be satisfied with this? If not — what specifically is wrong?
2. Would this look at home on the website of a small European
   conservatoire or a serious classical-music publisher?
3. Is there one clear focal point? Does nothing compete with it?
4. Is the spacing generous enough to signal quality?
5. Does every value trace back to a token?
6. Is the layout system applied — shell → `.wrapper`/`.wrapper--wide` inner container → content, responsive gutters, correct max-width, section vertical spacing?
7. Is the reduced-motion guard in place on every animation?
8. Does it read from config — no hardcoded content?

If any answer is no, it is not done. Go back and fix it.
