# TODO

## Intro animation — logo click trigger

When building the navbar and footer components, wire up the logo link so clicking it replays the intro animation.

**How to do it:**
- Add `data-trigger-intro` to any `<a href="/">` logo link in the navbar and footer
- Add a small script (inline in the component or a shared util) that listens for clicks on `[data-trigger-intro]`, clears `sessionStorage.removeItem('intro-seen')`, then navigates to `/`
- The existing `sessionStorage` guard in `src/components/Intro/intro.anim.ts` will do the rest automatically on page load