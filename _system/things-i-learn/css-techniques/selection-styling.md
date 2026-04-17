# Text Selection Styling

`reset.css` includes a branded `::selection` rule:

```css
::selection {
  background-color: var(--color-bg-accent);
  color: var(--color-fg-default);
}
```

When a user drags to highlight text, the selection highlight uses amber-50 as the background and navy-900 as the text — matching the site's colour scheme instead of the browser default (blue).

Token usage is correct: `--color-bg-accent` for accent-tinted surfaces, `--color-fg-default` for primary readable text.
