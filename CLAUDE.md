# Mary Molloy Solicitor — Web Project

## Stack
Astro 6, plain CSS, GSAP, TypeScript, Zod, Resend, Biome, Vitest, Playwright, colorjs.io

## Language Standard — Irish/British English

All content generated for this project must use **Irish/British English** spelling and conventions. This is non-negotiable — the client is an Irish solicitor practising in Kilkenny.

**Spelling:** recognise, organise, practise (verb), practice (noun), colour, labour, honour, analyse, anonymise, finalise, centre, licence (noun), license (verb), judgement, programme, travelled, cancelled, jewellery.

**Never use American English spelling:** recognize, organize, labor, color, analyze, finalize, center, judgment (US legal form), program, traveled, canceled, jewelry.

**Irish legal terminology — always use the Irish term:**
- solicitor (not attorney or lawyer)
- legal proceedings or action (not lawsuit)
- lodging (not filing, when referring to court documents)
- property or conveyancing (not real estate)
- mobile (not cell phone)
- barrister (not attorney or counsel, when referring to the Irish Bar)

**Cross-reference:** `.claude/skills/ai-isms/SKILL.md` has the full Irish solicitor terminology list under "Irish English vs American legal terminology."

---

## Colour Tooling — colorjs.io
`colorjs.io` is installed as a project dependency. Use it any time you need to verify WCAG contrast ratios when adding or changing colours in a theme file — especially before committing new primitive values.

**How to use — write a one-off script and run it with tsx:**

```ts
// check-contrast.ts
import Color from "colorjs.io";

const fg = new Color("oklch(0.25 0.068 256)"); // paste the oklch value from the theme file
const bg = new Color("oklch(0.97 0.012 70)");  // paste the background oklch value
const ratio = fg.contrast(bg, "WCAG21");

console.log(`${ratio.toFixed(2)}:1`); // needs 4.5+ for AA text, 3.0+ for UI/icons
```

Run it without any build step:
```bash
npx tsx check-contrast.ts
```

**WCAG thresholds:**
- 4.5:1 — AA normal text (body copy, headings, labels)
- 3.0:1 — AA large text or UI components (borders, icons)
- 7.0:1 — AAA (aim for this on critical text)

**When to run it:** every time you set a new oklch value for any `fg-*` token in a theme file. All theme files in `src/styles/themes/` document their verified contrast ratios in the header comment — keep these up to date.

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
- Read `_system/reference/layout.md` before building any component
- Read `_system/reference/component-direction.md` before building any component
- Visual quality is the primary deliverable — if it looks mediocre, it is wrong
- Mobile-first: write base styles for mobile, then nest `@media (min-width: Npx)` inside the selector block for larger breakpoints
- Use `data-` attributes for JS hooks, not classes or IDs — e.g. `[data-navbar-toggle]` not `#navbar-toggle`

## Skills
For every component, page, or UI build task, load and follow:
`.claude/skills/frontend-design/SKILL.md`

For any content generation or copywriting task, apply skills in this order:
1. `.claude/skills/copy/SKILL.md` — voice, structure, quality
2. `.claude/skills/ai-isms/SKILL.md` — human writing patterns
3. `.claude/skills/irish-legal-compliance/SKILL.md` — compliance filter, applied last

## Compliance Screenshots — Run After Any Content Change

After completing any task that changes visible page content, remind the user to run the compliance screenshot script:

```bash
npx tsx scripts/compliance-screenshot.ts [label]
```

This is a legal requirement under Reg 11(f) of S.I. No. 644/2020 — the solicitor must keep dated records of all advertising. The script screenshots every page automatically and saves them to `legal-compliance/compliance-records/`.

Always remind the user even for small changes — a component edit can affect every page.

## Do Not Touch
- `src/features/contact-form/` — form logic is complete, style only
- `src/styles/` — token and CSS system files are finalised
- Any existing passing tests

## Design System Files
- Skill: `.claude/skills/frontend-design/SKILL.md`
- Layout rules: `_system/reference/layout.md`
- Component direction: `_system/reference/component-direction.md`
- Component build prompt: `_system/workflow/component-build-prompt.md` — paste at start of any new component-build session
- Theme creation: `_system/reference/theme-creation.md` — read before writing any theme file
- New-theme alias checklist: `_system/prompts/new-theme-checklist.md` — required role-aliases every theme must define
- Token chain audit: `_system/prompts/token-chain-audit.md` — diagnostic prompt when a theme looks visually broken
