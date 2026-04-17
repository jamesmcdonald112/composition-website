# Mary Molloy Solicitor — Web Project

## Stack
Astro 6, plain CSS, GSAP, TypeScript, Zod, Resend, Biome, Vitest, Playwright, colorjs.io

## Colour Tooling — colorjs.io
`colorjs.io` is available as a dependency. Use it when you need to:
- Verify WCAG contrast ratios between two token values before committing a colour
- Convert between colour spaces (oklch ↔ srgb ↔ hex)
- Calculate perceptually-uniform colour scales

```ts
import Color from "colorjs.io";
const fg = new Color("oklch(0.25 0.068 256)"); // navy-900
const bg = new Color("oklch(0.97 0.012 70)");  // stone-100
const contrast = fg.contrast(bg, "WCAG21");     // → 14.79
```

Run contrast checks in a one-off `.ts` script via `npx tsx script.ts` — no build step needed.

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`

## Architecture
- Design tokens: `src/styles/tokens.css` (semantic) + `src/styles/themes/theme-cream-navy.css` (primitives)
- Components: `src/components/[category]/[name]/Name.astro` + optional `name.gsap.ts`
- Config: `src/config/` — read before building any component with content
- Styles: CSS in `<style>` block inside `.astro` files — NO sibling `.css` files

## Critical Rules
- No raw CSS values anywhere — tokens only
- Every section needs three layers: full-width shell → inner container (max-width + margin-inline: auto + responsive gutters) → content
- The inner container is always `<div class="component-name__inner wrapper wrapper--wide">` — never hand-roll max-width or margin-inline
- CSS class names follow BEM: `block__element--modifier` — e.g. `.service-hero__title`, `.cta-panel__inner`, `.quote-card__text`
- Read `_system/LAYOUT-REFERENCE.md` before building any component
- Read `_system/COMPONENT-DIRECTION-GUIDE.md` before building any component
- Visual quality is the primary deliverable — if it looks mediocre, it is wrong
- Mobile-first: write base styles for mobile, then nest `@media (min-width: Npx)` inside the selector block for larger breakpoints
- Use `data-` attributes for JS hooks, not classes or IDs — e.g. `[data-navbar-toggle]` not `#navbar-toggle`

## Skills
For every component, page, or UI build task, load and follow:
`.claude/skills/frontend-design/SKILL.md`

## Do Not Touch
- `src/features/contact-form/` — form logic is complete, style only
- `src/styles/` — token and CSS system files are finalised
- Any existing passing tests

## Design System Files
- Skill: `.claude/skills/frontend-design/SKILL.md`
- Layout rules: `_system/LAYOUT-REFERENCE.md`
- Component direction: `_system/COMPONENT-DIRECTION-GUIDE.md`
- Design brief: `_system/STAGE-3-DESIGN-BRIEF.md`
- Theme creation: `_system/THEME-CREATION-GUIDE.md` — read before writing any theme file
