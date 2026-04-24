# Safari iOS — Flex Gap Unreliable with SVG Icons

Safari iOS has inconsistent `gap` support on `inline-flex` containers, especially when containing SVGs or replaced elements. The icon appears closer to the text than the gap value suggests.

**Fix:** Replace `gap` on the flex parent with `margin-inline-end` on the icon element directly. This is the most reliable solution across all browsers and iOS versions.

```css
/* ❌ Unreliable on Safari iOS */
.cta-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
}

/* ✅ Reliable across all browsers */
.cta-link {
    display: inline-flex;
    align-items: center;
}

.cta-link__icon {
    margin-inline-end: var(--space-sm); /* push icon away from following text */
}
```

For trailing icons (e.g. arrows after text), use `margin-inline-start` instead.

**Also apply:** `line-height: 0` on the icon span to prevent Safari adding baseline whitespace below the SVG.

**Applies to:** Any `inline-flex` container with an SVG icon adjacent to text — CTAs, navbar links, buttons.
