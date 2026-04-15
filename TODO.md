# TODO

## Blocking (must fix before launch)

- [ ] Add real firm email address — update `src/config/firm.ts` and `src/features/contact-form/service/deliverContact.ts`
- [ ] Verify Resend domain, add DNS records, update from/to addresses in the contact form (currently sends from `onboarding@resend.dev`)
- [ ] Set `RESEND_API_KEY` and `GOOGLE_PLACES_API_KEY` in Netlify dashboard → Site Settings → Environment Variables
- [ ] Update `siteUrl` in `src/config/firm.ts` from the test Netlify URL to the real production domain
- [ ] Write Privacy Policy page content (`src/pages/privacy.astro` is empty)
- [ ] Write Cookie Policy page content (`src/pages/cookie-policy.astro` is empty)
- [ ] Write Terms of Use page content (`src/pages/terms.astro` is empty)
- [ ] Write Accessibility Statement page content (`src/pages/accessibility.astro` is empty)
- [ ] Write Complaints Procedure page content (`src/pages/complaints.astro` is empty)
- [ ] Write Disclaimer page content (`src/pages/disclaimer.astro` is empty)

## High Priority

- [ ] Add cookie consent banner (required under GDPR if any analytics/tracking is added)
- [ ] Create `netlify.toml` with security headers (X-Frame-Options, HSTS, CSP etc.)

## Tidy Up

- [ ] Confirm with Mary whether fixed-fee conveyancing is offered — two TODOs in `src/config/home.ts` waiting on this
- [ ] Add sitemap — install `@astrojs/sitemap` integration so Google can index all pages
- [ ] Check favicon colour matches final gold brand accent (`public/images/favicon/favicon.svg`)
- [ ] Review default OG social sharing image — check how it looks when shared on WhatsApp/Facebook (`public/images/open-graph/og-default.webp`)

---

## Intro animation — logo click trigger

When building the navbar and footer components, wire up the logo link so clicking it replays the intro animation.

**How to do it:**
- Add `data-trigger-intro` to any `<a href="/">` logo link in the navbar and footer
- Add a small script (inline in the component or a shared util) that listens for clicks on `[data-trigger-intro]`, clears `sessionStorage.removeItem('intro-seen')`, then navigates to `/`
- The existing `sessionStorage` guard in `src/components/Intro/intro.anim.ts` will do the rest automatically on page load