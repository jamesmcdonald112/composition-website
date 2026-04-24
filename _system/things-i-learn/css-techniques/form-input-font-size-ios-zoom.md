# Form Input Font Size — Prevent iOS Auto-Zoom

iOS Safari automatically zooms in on any form input with a font size below 16px. This happens on tap and is jarring for users.

**Fix:** Set `font-size` to at least `var(--font-size-base)` (16px) on all inputs, selects, and textareas on mobile. You can scale it down at larger breakpoints where zoom is not triggered.

```css
.form__input,
.form__select,
.form__textarea {
    font-size: var(--font-size-base); /* 16px — prevents iOS auto-zoom */

    @media (min-width: 768px) {
        font-size: var(--font-size-sm);
    }
}
```

**Why it happens:** iOS Safari zooms to make small text readable when a field is focused. The threshold is exactly 16px — anything below triggers it.

**Applies to:** `<input>`, `<select>`, `<textarea>` — all interactive form elements.
