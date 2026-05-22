# Pozdnyakov Composition Studio — Web Project

A small classical-music studio site for Alexander Pozdnyakov, composer (Montréal). Online composition tuition in the Russian conservatoire tradition, taught one student at a time.

## Stack
Astro 6, plain CSS, GSAP, TypeScript, Zod, Resend, Biome, Vitest, Playwright, colorjs.io

## Brand — Pozdnyakov Composition Studio

**Name:** Pozdnyakov Composition Studio
**Tagline:** Russian conservatoire training in harmony, counterpoint, fugue, orchestration, and composition.
**Positioning:** A serious studio for serious composers. Conservatoire tradition transplanted online. Master-apprentice model, assignment-based, individual feedback.
**Audience:** Conservatoire students, self-taught composers ready to commit, working composers wanting depth in a specific area. Not beginners. Not casual hobbyists.
**Voice register:** *Maestro and generous teacher.* Confident because the credentials are real (Doctor of Music, Université de Montréal; studied with Belkin and Chernoff; composer-in-residence with OIM-MIO). Warm because Alex actually loves teaching. Closer to a conservatoire professor writing to a future student than to a course-sales page.

The tradition framing — Russian conservatoire — should be present in the tagline, on the homepage, and on the Method page. Lead with it; don't hide it.

## Visual direction — editorial-classical

Warm cream paper (bone) background, deep ink foreground, vermilion as the single restrained accent. The active theme is `src/styles/themes/theme-inkwell-vermilion-bone.css`. Serif throughout. Refined display serif for headings (Newsreader, EB Garamond, or Cormorant); humanist serif for body. Small-caps for section labels. No sans-serif except where unavoidable for form inputs. Slow, deliberate motion. References: Stripe Press, Craig Mod's site, small European conservatoire sites, scholarly editions (Henle, Bärenreiter).

## Language Standard — British/International English

Use **British/International English** spelling: organise, recognise, colour, programme, analyse, centre, practise (verb) / practice (noun). Avoid US spellings (organize, color, program, analyze, center). Alex lives in Montréal where both forms appear; British/international is closer to the conservatoire register the site is going for.

For musical terminology, use the standard international forms: bar (not measure) by default — though "measure" is fine in pedagogical contexts where it is the established term. Quaver, crotchet, minim, semibreve in the British tradition; eighth-note, quarter-note, half-note, whole-note in the American — pick one consistently per page and don't mix.

## Colour Tooling — colorjs.io

`colorjs.io` is installed as a project dependency. Use it any time you need to verify WCAG contrast ratios when adding or changing colours in a theme file — especially before committing new primitive values.

**How to use — write a one-off script and run it with tsx:**

```ts
// check-contrast.ts
import Color from "colorjs.io";

const fg = new Color("oklch(0.22 0.02 270)"); // ink
const bg = new Color("oklch(0.97 0.012 85)"); // cream paper
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

**When to run it:** every time you set a new oklch value for any `fg-*` token in a theme file. All theme files in `src/styles/themes/` should document their verified contrast ratios in the header comment — keep these up to date.

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`

## Architecture
- Design tokens: `src/styles/tokens.css` (semantic) + `src/styles/themes/theme-*.css` (primitives)
- Components: `src/components/[category]/[name]/Name.astro` + optional `name.gsap.ts`
- Config: `src/config/` — read before building any component with content
- Styles: CSS in `<style>` block inside `.astro` files — NO sibling `.css` files

## Critical Rules
- No raw CSS values anywhere — tokens only
- Every section needs three layers: full-width shell → inner container (max-width + margin-inline: auto + responsive gutters) → content
- The inner container is always `<div class="component-name__inner wrapper wrapper--wide">` — never hand-roll max-width or margin-inline
- CSS class names follow BEM: `block__element--modifier` — e.g. `.studio-hero__title`, `.curriculum-path__movement`, `.programme-note__epigraph`
- Read `_system/reference/layout.md` before building any component
- Read `_system/reference/component-direction.md` before building any component
- Visual quality is the primary deliverable — if it looks mediocre, it is wrong
- Mobile-first: write base styles for mobile, then nest `@media (min-width: Npx)` inside the selector block for larger breakpoints
- Use `data-` attributes for JS hooks, not classes or IDs — e.g. `[data-curriculum-toggle]` not `#curriculum-toggle`

## Skills

For every component, page, or UI build task, load and follow:
`.claude/skills/frontend-design/SKILL.md`

For any content generation or copywriting task, apply skills in this order:
1. `.claude/skills/copy/SKILL.md` — voice, structure, page templates
2. `.claude/skills/ai-isms/SKILL.md` — voice quality and avoiding AI patterns

SEO is currently a stub at `.claude/skills/seo/SKILL.md` — the full strategy is TBD post-launch once channel/site traffic patterns are visible. Apply the stub's E-E-A-T and on-page basics for now.

## Design System Files
- Skill: `.claude/skills/frontend-design/SKILL.md`
- Layout rules: `_system/reference/layout.md`
- Component direction: `_system/reference/component-direction.md`
- Component build prompt: `_system/workflow/component-build-prompt.md` — paste at start of any new component-build session
- Theme creation: `_system/reference/theme-creation.md` — read before writing any theme file
- New-theme alias checklist: `_system/prompts/new-theme-checklist.md` — required role-aliases every theme must define
- Token chain audit: `_system/prompts/token-chain-audit.md` — diagnostic prompt when a theme looks visually broken

## Do Not Touch
- `src/features/contact-form/` — form logic is complete, style only
- `src/styles/tokens.css` (semantic role tokens) and the active theme file under `src/styles/themes/` (primitive values) — these are the design-system foundation. Add new tokens only via the same pattern; do not reassign existing ones.
- The `.wrapper` / layout primitives in `src/styles/global.css` and the related composition classes — these enforce the three-layer section pattern. Never hand-roll `max-width` or `margin-inline` on a section.
- Any existing passing tests

## Legacy Material

This codebase was adapted from a previous solicitor-site build. Most of the legacy material has been triaged; what remains:

- `src/pages/dev/` — design-iteration scratch pages. Disposable; delete before launch. Currently contains a stale `m.numeral` reference that produces ~80 `astro check` errors, all confined to this folder.
- Items still pending Alex's review (legal-page drafts, bio, CV facts, pricing, pull-quote placeholders) and his accounts (Cookiebot CBID, Resend domain, Cal.com event ownership, production site URL). See `README.md` Pre-launch checklist for the full list.

When in doubt: if a file or instruction references *solicitor*, *Mary*, *Molloy*, *Kilkenny*, *LSRA*, *DPC*, *Reg 11(f)*, *Law Society of Ireland*, or a solicitor-only practice area (family law, conveyancing, personal injury, wills, etc.), it is leftover from the original build and not part of the studio brief.
