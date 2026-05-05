# New Theme Checklist

Every new theme file must define all of
these role aliases in Section 2.
Missing any will cause invisible text
or broken surfaces.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIRED ALIASES — EVERY THEME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand family (50–900):
  --color-brand-50 through --color-brand-900

Brand background intent aliases
(controls navbar, hero, footer, CTA panels,
and decorative tints — theme decides which
scale step to use):
  --color-brand-bg
  --color-brand-bg-muted
  --color-brand-bg-subtle

  Dark themes typically use 900/700/100.
  Light/inverted themes use 100/200/300.

Accent family (50–900):
  --color-accent-50 through --color-accent-900

Tertiary family (50–900):
  --color-tertiary-50 through --color-tertiary-900

Neutral family (no 800 stop):
  --color-neutral-50, 100, 200, 300, 400,
  500, 600, 700, 900

Absolute:
  --color-absolute-white
  --color-absolute-black

On-brand text (light brand panels = dark text,
               dark brand panels = white text):
  --color-on-brand
  --color-on-brand-muted
  --color-on-brand-subtle

Surface and interactive:
  --color-surface
  --color-interactive-fg
  --color-interactive-fg-hover

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ON-BRAND DECISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the most common source of bugs.
Ask: are brand sections (navbar, hero,
footer) light or dark?

DARK brand sections (navy, midnight etc):
  --color-on-brand:
    var(--color-absolute-white);
  --color-on-brand-muted:
    color-mix(in oklch,
      var(--color-absolute-white) 80%, transparent);
  --color-on-brand-subtle:
    color-mix(in oklch,
      var(--color-absolute-white) 65%, transparent);

LIGHT brand sections (cream, off-white etc):
  --color-on-brand:
    var(--color-brand-900);
  --color-on-brand-muted:
    var(--color-brand-700);
  --color-on-brand-subtle:
    var(--color-brand-600);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SURFACE DECISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Light theme (standard):
  --color-surface: var(--color-absolute-white);

Dark theme:
  --color-surface: var(--color-neutral-700);
  (Use a defined stop — neutral has no 800.)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTIVE DECISION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Button text is almost always white
regardless of theme:
  --color-interactive-fg:       var(--color-absolute-white);
  --color-interactive-fg-hover: var(--color-absolute-white);

Exception: if button background is very
light, use dark text instead and verify
contrast passes AA (4.5:1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTRAST VERIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After writing the theme file always run:
  node scripts/verify-contrast.mjs

All 10 critical pairs must pass AA (4.5:1)
before the theme is considered complete.

Read _system/reference/theme-creation.md
for the full checklist and contrast pairs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TO SWITCH THEMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In src/styles/global.css change only
the theme import line. Nothing else
ever needs to change.
