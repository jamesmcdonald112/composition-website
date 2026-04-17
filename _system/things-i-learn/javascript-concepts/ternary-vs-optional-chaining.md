# Ternary Operator vs Optional Chaining

These two look similar but do completely different things.

---

## Ternary Operator `? :`

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

A shorthand if/else. Always needs both sides.

```ts
// if part.em is truthy, render <em>, otherwise render plain text
part.em ? <em class="section-header__em">{part.text}</em> : part.text
```

```ts
// equivalent long form
if (part.em) {
  return <em>{part.text}</em>;
} else {
  return part.text;
}
```

**Use when:** you need to choose between two values or outcomes.

---

## Optional Chaining `?.`

**Syntax:** `object?.property` or `object?.method()`

Safely reads a property without throwing if the object is `null` or `undefined`. Returns `undefined` instead of crashing.

```ts
const name = user?.profile?.name;  // undefined if user or profile is missing
const first = arr?.[0];            // undefined if arr is null/undefined
const result = obj?.method();      // doesn't call method if obj is undefined
```

**Use when:** a value might not exist and you want to avoid a runtime error.

---

## The Common Confusion

They both use `?` but are entirely separate operators:

```ts
// WRONG — mixing them up
part.em? ? <em>{part.text}</em> : part.text   // syntax error

// RIGHT — ternary: choosing between two outcomes
part.em ? <em>{part.text}</em> : part.text

// RIGHT — optional chaining: safe property access
part.em?.someNestedProperty
```

The `?` in a ternary is always followed by a space and a value. The `?.` in optional chaining is always attached to the object with no space.

---

## Real Example — SectionHeader.astro

```astro
{parts.map((part) => (
  part.em ? <em class="section-header__em">{part.text}</em> : part.text
))}
```

Here `part.em` is a boolean — if it's `true`, render an `<em>` tag; if `false` or `undefined`, render plain text. This is a ternary, not optional chaining, because we're choosing what to render, not safely reading a nested value.

---

## Quick Reference

| Operator | Symbol | Purpose | Returns |
|---|---|---|---|
| Ternary | `? :` | Choose between two values | one of the two values |
| Optional chaining | `?.` | Safe property access | value or `undefined` |
