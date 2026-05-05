# Off-Boarding Note — Read Before Handover

This file lists everything in the project that is **developer-personal** (mine — James) rather than project deliverable (Mary's). Before this codebase is handed over to Mary, archived to a long-term storage location, or transferred to another developer, walk this list and remove or relocate everything below.

Everything **NOT** in this list is project deliverable and should stay.

---

## 1. Files / folders to delete outright before handover

These are working scratch files that have no value once the project ships:

- `_scratch-remaining-work.md` — running TODO map; superseded by the README's "Per-Client Compliance Setup" section once launched
- `Z_left-off.txt` — session continuity note for resuming Claude conversations
- `questions.txt` — running list of questions to ask Mary; once resolved, no value
- `possible.md` — already deleted, but if it reappears, delete
- `TODO.md` — note already says "delete on launch" at the top
- `_scratch-questions-answers.md` (if present) — review-round Q&A reasoning trail; superseded by the live config files
- `src/pages/dev/` — 21 design-iteration scratch pages (variants, v2/v3/v4, team-cards-N, etc.) used during the visual build. **Must be deleted** before production launch and before re-using this codebase as a template for a new client. The pages are publicly accessible at `/dev/[slug]` if URLs are guessed.

---

## 2. Folders to relocate to your personal dev journal, NOT delete

These contain reusable knowledge that belongs to **you** as a developer, across projects:

### `_system/things-i-learn/`

Portable technical learning notes — tricky CSS, Astro patterns, JavaScript concepts you discovered during the build. Not Mary-specific.

**Destination:** copy to `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/dev-journal/` (or wherever your dev journal lives). Then delete from this project.

Files include:
- `astro-patterns/dynamic-html-tags.md`
- `astro-patterns/class-list.md`
- `css-techniques/revert-keyword.md`
- `css-techniques/selection-styling.md`
- `css-techniques/safari-ios-flex-gap-svg.md`
- `css-techniques/form-input-font-size-ios-zoom.md`
- `css-techniques/modern-css-nesting.md`
- `frontend-design/intro-preloader-animations.md`
- `javascript-concepts/ternary-vs-optional-chaining.md`

### `_system/research/next-project-improvements.md`

Forward-looking flags for the next solicitor build (wrapper class simplification, scroll-animation consolidation, typography roles as utilities). Mary doesn't need to read it; you do, when you start the next site.

**Destination:** dev-journal alongside `things-i-learn`.

### `_system/research/directing-claude-on-components.md`

Lessons-learned on how to prompt Claude effectively for visual work. Cross-project knowledge.

**Destination:** dev-journal.

### `_system/research/session-size-tradeoff.md`

Notes on how many components to build per Claude session. Cross-project knowledge.

**Destination:** dev-journal.

### `_system/research/ai-website-building.md`

Early-project research on AI-assisted website building. Cross-project knowledge.

**Destination:** dev-journal.

### `Markdown/things-i-learned/` (if present at project root)

Looks like an older copy of the same kind of knowledge. Check whether content overlaps with `_system/things-i-learn/`; relocate the unique parts to dev-journal; delete the rest.

---

## 3. Folders to delete (developer-personal, no reuse value)

### `.claude/`

Claude Code configuration: skills, slash commands, settings. Personal to my development setup. Mary doesn't need it; the next developer will configure their own.

```
.claude/settings.local.json
.claude/skills/   (irish-legal-compliance, copy, ai-isms, frontend-design, seo, etc.)
```

**Destination:** delete on handover. The skills are reusable across my projects but they live in my own dotfiles, not in the deliverable codebase.

### `CLAUDE.md` (project root)

Instructions for Claude when running on this project — file paths, conventions, "read this before that". Useful while I'm building, irrelevant after handover.

**Destination:** delete on handover.

### `_business/`

My commercial-side files: subscription model, pricing strategy, valuation, content-marketing series ideas. Mary should never see these.

```
_business/Deep Financial & Business Model Analysis.md
_business/content-marketing-cookie-compliance-series.md
_business/google-ads-for-sensitive-topic-clients.md
_business/market-research-and-pricing-strategy.md
_business/sensitive-topic-tracking-client-faq.md
_business/sensitive-topic-tracking-policy.md
_business/subscription-model.md
_business/valuation/project-valuation-brief.md
_business/valuation/what-this-is-worth.md
```

**Destination:** move to your personal business folder (Drive, Notion, wherever). **Definitely delete from this project before handover.**

Note: `sensitive-topic-tracking-policy.md` is referenced from the disclaimer's research file as the reasoning behind the no-trackers architecture. If that cross-reference breaks on handover, that's fine — Mary doesn't need to read the business policy; the disclaimer she ships with stands on its own.

### `Markdown/` (project root, if present)

Older notes folder. Check contents:
- `Markdown/AI-PROMPT-REFERENCE.md`
- `Markdown/ARCHITECTURE.md`
- `Markdown/NEW-PROJECT-SETUP.md`
- `Markdown/REFERENCES.md`
- `Markdown/STYLE-GUIDE.md`
- `Markdown/new-project-templates/`
- `Markdown/things-i-learned/` (older version of the `_system/things-i-learn/` folder)

These look like project-history notes from earlier in the build. Most likely all developer-personal. **Audit each, then delete.**

### `new-configs/`

Working folder during a config refactor. If empty or contains only test scratch, delete.

---

## 4. _system/ — what stays vs what moves

After running the relocations in section 2, the `_system/` folder should contain:

- `_system/prompts/new-theme-checklist.md` ✅ keep — operational tool for theme work
- `_system/prompts/token-chain-audit.md` ✅ keep — diagnostic tool for theme issues
- `_system/reference/layout.md` ✅ keep — referenced by CLAUDE.md, but CLAUDE.md is being deleted, so... see note below
- `_system/reference/component-direction.md` ✅ keep — same
- `_system/reference/theme-creation.md` ✅ keep — same
- `_system/workflow/component-build-prompt.md` ✅ keep — same
- `_system/workflow/design-prompt.md` ⚠️ review — older workflow doc, may be redundant
- `_system/research/token-decisions.md` ✅ keep — token-decision audit trail (Mary or future developer benefits from "why is this token this value")
- `_system/research/design-system-stage-3.md` ⚠️ review — older Stage 3 brief; may be redundant

**The note about CLAUDE.md being deleted:** the `_system/reference/` files are read by Claude Code via CLAUDE.md instructions. Once CLAUDE.md is deleted, those reference files are orphaned — a future human reading them gets the rules but no automatic loading. **That's fine** — they remain useful as design-system documentation a human can read manually. They don't need Claude to be valuable.

If the project is being handed to **another developer who uses Claude Code**, leave `CLAUDE.md` in place — they'll benefit from it.

If the project is being handed to **Mary** or archived as a static deliverable, delete `CLAUDE.md`.

---

## 5. Files Mary genuinely needs (do NOT delete)

Just to make the boundary explicit:

- `README.md` — Mary's reference for the codebase
- `legal-compliance/` (entire folder) — audit trail of every compliance decision; Mary keeps this for LSRA / DPC / Law Society inspections
- `src/` — the website itself
- `public/` — static assets
- `package.json`, `tsconfig.json`, `astro.config.mjs`, `biome.json`, `cspell.json`, `vitest.config.ts` — build/tooling configs
- `scripts/` — utility scripts including the compliance-screenshot script
- `_system/reference/`, `_system/workflow/`, `_system/prompts/`, the keep-list items in `_system/research/` — design-system documentation

---

## 6. Suggested handover sequence

1. **Commit everything in your working tree** — final state preserved in git history.
2. **Run the off-boarding** — work through sections 1–4 above.
3. **Do a final `git status`** — confirm only the deletions/relocations show.
4. **Commit the off-boarding** as a single commit: `chore: off-board developer-personal artefacts ahead of handover`.
5. **Then run the GitHub-history scrub — see Section 7 below.** This is the load-bearing step.
6. **Optionally** delete this `OFFBOARDING.md` file in a final commit, or leave it as a record of what was removed and why.
7. **Hand the codebase over** — push to a new remote, or tar+ship, depending on Mary's setup.

---

## 7. GitHub history — the deletions in sections 1, 2, 3 are NOT enough on their own

**This is critical.** Running `rm` and `git commit` removes a file from the **future** of the repo — but every previous commit still contains the deleted content. Anyone with clone access can run `git log -p -- _business/` and read every deleted file in full. For files like:

- `_business/Deep Financial & Business Model Analysis.md`
- `_business/market-research-and-pricing-strategy.md`
- `_business/subscription-model.md`
- `_business/valuation/project-valuation-brief.md`
- `_business/valuation/what-this-is-worth.md`
- `_scratch-remaining-work.md`
- `Z_left-off.txt`

…the financial, pricing, valuation, and session-continuity content is **permanently visible to anyone who clones the repo** unless git history itself is rewritten.

### The scrub procedure

The standard tool for this is `git filter-repo` (the official replacement for the deprecated `git filter-branch`). One-time install:

```bash
brew install git-filter-repo
```

Then, after committing the deletions in step 4 above, run from the project root:

```bash
# Make a backup first — git filter-repo is destructive and irreversible
git clone --mirror . ../mary-molloy-solicitor.backup.git

# Remove specific paths from ALL history
git filter-repo --invert-paths \
  --path _business/ \
  --path _scratch-remaining-work.md \
  --path _scratch-questions-answers.md \
  --path Z_left-off.txt \
  --path questions.txt \
  --path TODO.md \
  --path possible.md \
  --path Markdown/ \
  --path new-configs/ \
  --path .claude/ \
  --path CLAUDE.md \
  --path _system/things-i-learn/ \
  --path _system/research/next-project-improvements.md \
  --path _system/research/directing-claude-on-components.md \
  --path _system/research/session-size-tradeoff.md \
  --path _system/research/ai-website-building.md \
  --path OFFBOARDING.md
```

Then force-push to the remote to overwrite the cloud history:

```bash
git remote add origin <new-remote-url>
git push --force --all
git push --force --tags
```

### If the project is already on GitHub under your account

Contact GitHub support **after** the force-push to ask them to **purge stale views and refs** — even after a force-push, GitHub keeps a window of "orphan refs" reachable via direct commit-SHA URLs for ~90 days. For sensitive content, asking GitHub to purge immediately is the only way to be truly clean.

GitHub support form: `https://support.github.com/contact/private-information`

### Belt-and-braces alternative — start a fresh repo

If the history is dense enough that filter-repo feels risky, the cleanest end state is:

1. Copy the cleaned working tree to a new folder
2. `cd` into it and run `rm -rf .git`
3. `git init` and make one fresh commit with the final state
4. Push to a new remote — no history exists, nothing to scrub

This loses the audit-trail of how the project was built, but gives Mary (or whoever) a clean repo with zero developer-personal content in any commit.

### Which to choose

- **`git filter-repo`** — preserves the legitimate project history (privacy policy iterations, disclaimer drafts, compliance-screenshot runs), removes only the developer-personal paths. Better if Mary or a future regulator might want to see "when did the privacy policy first go live?" or "what was the cookie banner wording in May 2026?"
- **Fresh repo** — cleanest possible state, no history to scrub. Better if Mary doesn't care about the history and you don't want the risk of mis-listing a path in `--path`.

For Mary's site, **`git filter-repo` is the right call** because the legitimate compliance-screenshot timeline matters for LSRA / DPC inspection trails. But verify with her preference before doing it — once it's done, it's done.

---

_Last updated: 2026-05-05._
