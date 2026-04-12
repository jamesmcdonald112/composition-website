# Template: Navbar — Transparent on Some Pages, Solid on Others

A navbar that starts transparent (fading over a dark hero) on some pages,
and is solid from the moment it appears on others (e.g. contact, about).
Works correctly with ClientRouter (View Transitions) — including when the
same page is navigated to multiple times.

---

## The Problem This Solves

A transparent navbar looks great over a dark hero on the homepage.
But on a page with a light background (like a contact page), transparent
means the navbar is invisible.

The naive fix — just make it solid — breaks the homepage.
The right fix — make it configurable per page, and make sure it
re-evaluates on every navigation.

---

## Why ClientRouter Makes This Hard

Astro module scripts (the `<script>` tags in `.astro` files) only run
**once** — on the very first hard page load. When ClientRouter navigates
between pages it does a soft DOM swap, not a full reload. The script
does not re-run.

This means:
- The solid/transparent check only fires on the first page visit
- Any scroll listeners set up on page 1 keep running on page 2
- Navigating to the same page a second time does nothing — the check
  never fires again

**The fix:** wrap all navbar logic in `astro:page-load`, which fires on
both hard loads and every ClientRouter soft navigation.

**The scroll listener problem:** if you add a scroll listener inside
`astro:page-load`, each navigation adds another one on top. After 5
navigations you have 5 scroll listeners all firing at once. Fix this by
storing a reference to the handler and removing the old one before
adding a new one.

---

## The Pattern

### 1 — Navbar component accepts a `solid` prop

```astro
---
// Navbar.astro
interface Props {
  solid?: boolean;
}
const { solid = false } = Astro.props;
---

<div class="navbar" id="navbar" data-navbar-solid={solid ? "" : undefined}>
  <!-- navbar content -->
</div>
```

`data-navbar-solid={solid ? "" : undefined}` — if `solid` is true, the
attribute is rendered in the HTML. If false, it is omitted entirely.
Astro omits attributes set to `undefined`. The value `""` is just the
smallest valid string — only the presence of the attribute matters, not
its value.

---

### 2 — BaseLayout passes it through

```astro
---
// BaseLayout.astro
interface BaseLayoutProps {
  solidNav?: boolean;
  // ... other props
}
const { solidNav = false } = Astro.props;
---

<Navbar solid={solidNav} />
```

---

### 3 — Pages opt in

```astro
---
// contact.astro
---
<BaseLayout solidNav>
  <!-- page content -->
</BaseLayout>
```

Any page without `solidNav` defaults to transparent.

---

### 4 — The script — all logic inside `astro:page-load`

```ts
// navbar.gsap.ts
import { gsap } from "../../scripts/gsap";

// Stored outside the listener so we can remove the old one
// before adding a new one on each navigation
let scrollHandler: (() => void) | null = null;

document.addEventListener("astro:page-load", () => {

  // Re-query every time — the DOM element may have changed
  const navbar = document.querySelector<HTMLElement>("#navbar");

  // Remove previous scroll listener before adding a new one
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }

  if (navbar) {
    if (navbar.hasAttribute("data-navbar-solid")) {
      // Solid pages — add is-scrolled immediately, never remove it
      navbar.classList.add("is-scrolled");
    } else {
      // Transparent pages — clear first, then set up scroll behaviour
      navbar.classList.remove("is-scrolled");

      scrollHandler = () => {
        if (window.scrollY > 60) {
          navbar.classList.add("is-scrolled");
        } else {
          navbar.classList.remove("is-scrolled");
        }
      };

      window.addEventListener("scroll", scrollHandler, { passive: true });
      scrollHandler(); // run once immediately to set initial state
    }
  }

  // CTA, mobile menu, other navbar logic follows here...
});
```

---

### 5 — CSS — two states

```css
.navbar {
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition:
    background var(--duration-slow) var(--ease-out),
    border-color var(--duration-slow) var(--ease-out);
}

.navbar.is-scrolled {
  background: var(--color-bg-brand);
  border-color: var(--color-border-brand);
}
```

---

## Why Each Decision Was Made

| Decision | Why |
|---|---|
| `data-navbar-solid` attribute on the element | The JS needs to know the page's intent after a soft navigation. A prop is Astro server-side only — the rendered HTML attribute is what persists into the client. |
| `undefined` to omit the attribute | Astro renders `undefined` props as nothing. Any string value renders the attribute. `""` is the smallest valid string. |
| `astro:page-load` wrapping all logic | Module scripts only run once. `astro:page-load` fires on both hard loads and ClientRouter navigations — the only reliable hook for per-page logic. |
| `scrollHandler` stored outside the listener | Without this, each navigation adds a new scroll listener. After several navigations you have many listeners all firing and conflicting. Storing and removing the old one keeps it to one at a time. |
| `navbar.classList.remove("is-scrolled")` before setting up scroll | When navigating from a solid page to a transparent page, `is-scrolled` may already be on the element. Removing it first ensures a clean state before the scroll listener takes over. |
| Re-query `#navbar` inside the listener | ClientRouter may replace the navbar element in the DOM. A reference cached on first load could point to a stale element. Re-querying each time guarantees the current element. |
