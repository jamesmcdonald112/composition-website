# Modern CSS Nesting

Native CSS nesting landed in all modern browsers in 2023. No preprocessor needed — it works directly in `<style>` blocks in Astro.

---

## The `&` Parent Selector

`&` refers to the current selector. Use it for pseudo-classes, modifiers, and states.

```css
.button {
    color: blue;

    &:hover {
        color: red;        /* compiles to: .button:hover */
    }

    &:focus-visible {
        outline: 2px solid blue;   /* .button:focus-visible */
    }

    &.active {
        color: green;      /* .button.active */
    }
}
```

---

## BEM Modifiers

`&` with a double-dash gives you BEM modifiers without repeating the block name:

```css
.cta-link {
    background: navy;

    &--primary {
        background: amber;   /* .cta-link--primary */
    }

    &--outline {
        background: none;    /* .cta-link--outline */
    }
}
```

---

## Descendant Nesting

```css
.card {
    background: white;

    .title {
        font-size: 1.5rem;   /* .card .title */
    }

    & .content {
        padding: 1rem;       /* .card .content (explicit & is the same) */
    }
}
```

---

## Media Query Nesting

Write the breakpoint inside the selector rather than repeating the selector inside a top-level media query. This is the pattern used throughout this project:

```css
.component {
    padding: var(--space-md);   /* mobile first */

    @media (min-width: 768px) {
        padding: var(--space-xl);
    }

    @media (min-width: 1024px) {
        padding: var(--space-2xl);
    }
}
```

---

## Nesting Inside a Parent Selector

Components in this project use a pattern where a child element responds to the parent's state using nesting:

```css
.sc__image-veil {
    opacity: 1;

    .sc:hover & {
        opacity: 0;   /* when .sc is hovered, target .sc__image-veil */
    }
}
```

The `&` at the end means "this element" — so `.sc:hover &` reads as "when the ancestor .sc is hovered, apply these styles to me." This avoids repeating the full selector elsewhere.

---

## Hover States — Real Example from ThankYou.astro

```css
.thank-you__cta {
    color: var(--color-fg-default);
    border: 1px solid var(--color-border-default);
    transition:
        color var(--duration-fast) var(--ease-out),
        border-color var(--duration-fast) var(--ease-out);

    &:hover {
        color: var(--color-fg-accent);
        border-color: var(--color-border-accent);
    }
}
```

No need for a separate `.thank-you__cta:hover { }` rule — the hover lives inside the selector it belongs to.

---

## Component Tokens as Local Variables

CSS custom properties can be scoped to a component and used for internal calculations:

```css
.service-process {
    --sp-circle: 2.75rem;
    --sp-line-x: calc(var(--sp-circle) / 2);

    .service-process__list::before {
        inset-inline-start: var(--sp-line-x);
    }
}
```

These `--sp-*` variables are not global design tokens — they're local to the component and make internal geometry readable.

---

## Best Practices

- **Mobile-first**: write base styles, then nest `@media (min-width: N)` inside the selector
- **Max 3 levels deep** — beyond that, readability degrades
- **Use `&` for pseudo-classes and states**, not for descendant elements (prefer flat BEM for those)
- **Never nest for the sake of it** — flat selectors are easier to scan when the relationship is obvious from the class name
