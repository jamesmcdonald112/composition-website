# Token Chain Audit Prompt

Use this prompt any time a theme looks
visually broken to diagnose exactly which
tokens are resolving to unexpected values.

Paste this into Claude Code:

---

Read CLAUDE.md first.

There are visual issues on the site.
Do not guess — investigate first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — CHECK WHAT THEME IS ACTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Read src/styles/global.css and report
exactly which theme file is imported.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — TRACE THE BROKEN TOKENS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In the active theme file trace these
token chains and report every step:

1. --color-bg-brand
2. --color-bg-surface
3. --color-fg-on-brand
4. --color-fg-interactive

For each one report:
  - What tokens.css says it resolves to
  - What the theme file says that resolves to
  - What the final hex value is
  - Whether that makes sense visually
  - Pass/fail for WCAG AA if it is a
    text/background pair

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — CHECK FOR MISSING ALIASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In the active theme file confirm that
every role alias referenced in tokens.css
actually exists. These are the required
aliases every theme file must define:

  --color-on-brand
  --color-on-brand-muted
  --color-on-brand-subtle
  --color-surface
  --color-interactive-fg
  --color-interactive-fg-hover

Report any that are missing or that
resolve to an unexpected value.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — FULL ALIAS CHECK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

List every var(--color-*) reference in
tokens.css that is NOT one of:
  --color-brand-*
  --color-accent-*
  --color-tertiary-*
  --color-neutral-*
  --color-absolute-*

Confirm each one exists in the active
theme file. Report any missing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 — FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Fix any missing or broken aliases.
Run npm run build.
Report exactly what was wrong and
what was fixed.

---

Do not change any files.
Write the audit report only.
Then list fixes needed.
Wait for confirmation before fixing.
