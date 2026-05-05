# The `revert` Keyword

`revert` tells the browser to ignore your rule and fall back to whatever the next-lower-priority stylesheet says. It's the opposite of `unset` — instead of going back to the CSS spec default, it goes back to the *previous* author/UA stylesheet that was in effect.

## When to use it

When you've overridden a third-party widget's styles at one breakpoint and need to give them back at another. Especially useful with libraries like Cookiebot where you don't control (and shouldn't reimplement) the original property values.

## Worked example — the Cookiebot policy-page bug

On `/privacy` and `/cookie-policy`, mobile-only override of Cookiebot's full-screen modal:

```css
body[data-page="policy"] #CybotCookiebotDialog {
	position: static;
	inset: auto;
	width: 100%;
	max-width: none;
	height: auto;
	max-height: none;
	transform: none;
	box-shadow: none;

	@media (min-width: 768px) {
		position: revert;
		inset: revert;
		width: revert;
		max-width: revert;
		height: revert;
		max-height: revert;
		transform: revert;
		box-shadow: revert;
	}
}
```

On desktop, every property hands control back to Cookiebot's own library CSS — banner renders exactly as it would without our override.

## The bug `revert` solved

First attempt only restored `position: fixed` at the breakpoint and left the other seven overrides applying everywhere. The banner ended up fixed-positioned with no `inset`, no `transform`, no `width` — pinned to the top-left corner with zero height. Invisible on desktop.

Restoring **every** overridden property with `revert` fixes it without me having to know or copy Cookiebot's actual default values.

## `revert` vs `unset` vs `initial`

- **`initial`** — CSS spec default (e.g. `position: static`, `display: inline`). Almost never what you want.
- **`unset`** — inherited if the property inherits, otherwise `initial`. Still ignores other stylesheets.
- **`revert`** — falls back to the previous origin (user agent / library / theme). The right choice when undoing your own override of a third party.

## Browser support

Universal — Safari 9.1+, Chrome 84+, Firefox 67+. Safe to use without a fallback.
