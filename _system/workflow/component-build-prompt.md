# Per-Session Component Build Prompt

A reusable prompt template to paste at the start of any new component-build session. Fill in the bracketed sections before running.

The prompt encodes the project's non-negotiables (file-read order, three-layer layout, tokens only, no raw values, no card borders, etc.) so they don't have to be repeated each session.

> **Background reading (human, not Claude):** `_system/research/directing-claude-on-components.md` explains why the layout-concept formula works, with worked examples (ServiceCard, TrustStrip). Read it once; you won't need to re-read each session.

---

## Quality bar

Every component must pass this test before it's considered done:

> Would a potential client — stressed, facing a significant legal decision — feel they are in expert, expensive, trustworthy hands before reading a single word?

The visual impression comes first. Technical correctness is the floor, not the ceiling.

---

## The prompt

Copy everything below this line, fill in the four bracketed sections, paste into Claude.

---

Your primary job is to design something visually exceptional. The code is how you express the design. Not the other way around.

Read these files in this exact order before writing any code:

1. `view .claude/skills/frontend-design/SKILL.md`
2. `view _system/reference/layout.md`
3. `view _system/reference/component-direction.md`
4. `view src/config/firm.ts`
5. `view src/config/nav.ts`
6. `view [ADD OTHER RELEVANT CONFIG FILES HERE]`
7. `view src/styles/tokens.css`
8. `view src/styles/themes/theme-cream-navy.css`

After reading the skill file, commit to this question before touching any code:

> "What is the most beautiful thing I can build within these constraints?"

After reading the layout reference, apply the three-layer structure to every component without exception:

- **Outer element** — full-width background + vertical padding
- **Inner element** — `max-width` + `margin-inline: auto` + responsive gutters (use `wrapper` / `wrapper--wide` / `wrapper--narrow`)
- **Content** — the actual component markup

You are building **[SESSION NAME]** for a premium Irish solicitor website.

**Components this session:**
[list each component by name]

**Content source:**
[list the relevant config files the components will read from]

**Layout concepts:**
[Paste the specific layout concept for each component here. Use the concepts from `_system/reference/component-direction.md` or write new ones following the same formula:
- Structure in plain English
- Each element: font-family token, font-size token, colour token
- Hover behaviour
- GSAP instruction if needed]

**Rules:**

- Read config files before building — no placeholder content
- CSS in `<style>` block inside `.astro` — no sibling `.css` files
- GSAP in sibling `.gsap.ts` only for animated components
- No raw values anywhere — tokens only
- Three-layer layout on every component — no exceptions
- No card borders or box shadows unless explicitly specified
- Import existing `Button`, `Section`, `Container` where needed
- After building, wire into the relevant page
- Run `npm run build` to confirm no errors

Do not begin writing code until you have read all files and committed to a design direction for each component.
