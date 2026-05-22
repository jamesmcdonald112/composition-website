# Pozdnyakov Composition Studio — Website

Online composition tuition for serious composers, taught by Alexander Pozdnyakov (Doctor of Music, Université de Montréal) in the Russian conservatoire tradition.

A small classical-music studio site. Marketing pages + lead-magnet form + contact form + Cal.com-backed introductory consultation booking. No e-commerce, no logged-in area.

## Stack

Astro 6 · plain CSS · GSAP · TypeScript · Zod · Resend · Biome · Vitest · Playwright · colorjs.io

## Commands

```bash
npm run dev      # local dev server (http://localhost:4321)
npm run build    # production build
npm run test     # vitest unit tests
npm run lint     # biome
```

## File layout

```
src/
  components/    Astro components, grouped by area (about/, contact/, home/, navbar/, footer/, shared/, ui/)
                 plus top-level shared blocks (HeroHome/, CTAPanel/, Intro/)
  config/        Single source of truth for all site content
                 studio.ts            — identity, location, contact, lineage
                 home.ts              — homepage composition
                 about.ts             — about-page composition
                 alex/bio.ts          — biography prose (short / medium / full)
                 alex/cv.ts           — structured CV data (education, awards, works…)
                 curriculum.ts        — the eight curriculum modules
                 pricing.ts           — lesson + correction offers
                 booking.ts           — Cal.com link + modal config
                 lead-magnet.ts       — free-guide PDF + email-capture copy
                 contact.ts           — contact page copy
                 ctas.ts              — shared CTA panel copy
                 structured-data.ts   — JSON-LD for SEO
                 legal/*              — privacy / cookie / accessibility / disclaimer page configs
  features/
    contact-form/  Astro Actions form pipeline (Zod schema → Resend delivery). DO NOT modify the action/handler/test logic — style only.
  layouts/       BaseLayout.astro (HTML shell, meta, Cookiebot script tag)
  pages/         Routed pages — Astro file-based routing
  styles/        tokens.css (semantic) + themes/* (primitives) + cookiebot.css + reset/global
  assets/        Static images & icons (imported, not in /public)
```

## Architecture notes

- **Tokens, not raw values.** All styling reads from `src/styles/tokens.css` (semantic role tokens) which in turn read from a theme file in `src/styles/themes/` (primitive colour/size values). Never hard-code a colour or spacing value in a component.
- **Three-layer section pattern.** Every section is `full-width shell → inner container (.wrapper) → content`. The wrapper handles max-width, centering, and responsive gutters. Don't hand-roll any of those properties.
- **Content lives in `src/config/`.** Components are dumb — they take props, they don't fetch or hard-code copy. To change the wording on any page, find the relevant config file, not the component.
- **British/International English.** `organise`, `colour`, `programme`, `practise` (verb) / `practice` (noun). Studio language standard — see CLAUDE.md.

---

# Pre-launch checklist

Items required before the site can ship.

## Identity & accounts

- [ ] **Production site URL** — replace the `siteUrl` placeholder in `src/config/studio.ts` once the domain is chosen. This value flows into canonical URLs, sitemap, OG image URLs, robots.txt, and JSON-LD. Leaving it on the placeholder silently destroys SEO. **Five-second edit, must happen before the production build.**
- [ ] **Studio public email** — confirm `email.primary` and `email.formTo` in `src/config/studio.ts`. Currently placeholder.

## Cookiebot

- [ ] **Register the Cookiebot account** under a studio-owned email address (not a personal one). Cookiebot is the data processor for consent records; the studio is the data controller. The legal relationship must match the technical one — see **Why client-owned accounts matter** below.
- [ ] **Paste production CBID** into the Cookiebot script tag in `src/layouts/BaseLayout.astro` and any other `cbid=` references in the codebase. The current value is a `TODO (james):` placeholder.
- [ ] **Configure banner copy + privacy/cookie policy URLs** in the Cookiebot dashboard. The CSS overrides in `src/styles/cookiebot.css` style the banner; the *copy* lives in the Cookiebot dashboard. **Use the reusable cookie-banner-copy playbook** at `legal-compliance/cookies/banner-copy-playbook.md` — field-by-field templates for every Cookiebot admin field (dialog heading, body, category introductions, button text). Pick the multi-jurisdiction template for the General introduction since the studio reaches students worldwide.
- [ ] **Invite James as admin** in the Cookiebot dashboard so banner config and scan-result issues can be fixed without sharing passwords.

## Resend (contact form + lead magnet)

- [ ] **Register the Resend account** under a studio-owned email (same controller/processor logic).
- [ ] **Verify the sending domain** in the Resend dashboard. Resend will provide 3–4 DNS records (SPF, DKIM, DMARC, tracking) to add to the domain's DNS. Verification can take up to 24 hours but is usually much faster.
- [ ] **Replace the sandbox sender** — `FROM` in `src/features/contact-form/service/deliverContact.ts` is currently `onboarding@resend.dev` (Resend's shared test sender, restricted to production use by their terms). Change to a verified studio address (e.g. `noreply@pozdnyakov-studio.com`).
- [ ] **Free tier is sufficient.** 100 emails/day, 3,000/month — a studio contact form will use a tiny fraction.

## Cal.com (introductory consultation booking)

- [ ] **Event duration** — `src/config/booking.ts` advertises a 15-minute introductory call (per `home.ts` stats and the contact-form copy). Confirm the Cal.com event slot is set to 15 min, not the default 30.
- [ ] **Event ownership** — the booking link in `src/config/booking.ts` is currently `jamesmcdonald112/...` (James's Cal.com account). Bookings land in James's calendar, not Alex's. Either transfer the event to Alex's Cal.com account and update the slug, or accept that bookings forward manually.
- [ ] **Download the Cal.com DPA** from `cal.com/legal/dpa` and file at `legal-compliance/processor-agreements/cal-com-dpa-YYYY-MM-DD.pdf`. Named in the privacy policy as a sub-processor but the signed agreement is not yet on file. See `legal-compliance/processor-agreements/README.md` for what to check.

## Lead-magnet PDF

- [ ] **Produce the PDF** and place at `/public/resources/pozdnyakov-how-to-choose-a-composition-teacher.pdf` (the path `lead-magnet.ts` advertises).
- [ ] **Wire the lead-magnet form submit** to an API route or Resend audience endpoint (see TODO at the top of `src/config/lead-magnet.ts`).

## Hosting (Netlify)

The site deploys to Netlify as an Astro SSR app via the `@astrojs/netlify` adapter. Build config and security headers live in `netlify.toml` at the project root.

- [ ] **Register the Netlify account** under a studio-owned email (same controller/processor logic — Netlify processes form submissions server-side as a sub-processor named in the privacy policy).
- [ ] **Connect the Git repository** — Netlify builds on push. New site → Import from Git → select this repo. The build command (`npm run build`) is already set in `netlify.toml`; Netlify auto-detects the Astro adapter output, so no publish directory needs to be set manually.
- [ ] **Transfer the site** to the studio's Netlify team once it exists: **Site configuration → General → Transfer site**. Environment variables and deploy history move with it.
- [ ] **Add environment variables** — at minimum `RESEND_API_KEY` under Site configuration → Environment variables (scope: all deploy contexts, or Production + Deploy Previews).
- [ ] **Point the production domain** under Domain management. Add both `pozdnyakov-studio.com` and the `www` variant. Netlify provides the DNS records (CNAME or the apex A/ALIAS) to add at the registrar. **These are separate from the Resend DNS records** — Resend authorises sending email *from* the domain; Netlify points the *website* at the domain.
- [ ] **Function region** — Netlify Functions run in a US region by default (`us-east-2`). If the studio's privacy policy commits to processing inside a specific region, this is harder to control on Netlify than on some hosts; confirm the privacy-policy wording matches what Netlify actually offers on the studio's plan before launch.

## Legal pages

- [ ] **Review the legal-page drafts** at `/privacy`, `/cookie-policy`, `/accessibility`, `/disclaimer` (configs in `src/config/legal/*.ts`). Studio drafts are in place, covering Québec Law 25 + PIPEDA primary with GDPR/UK-GDPR as the worldwide overlay. Alex should read and approve before launch. The placeholder values flagged with `TODO (alex)` at the top of each file (contact email, response times, governing-law jurisdiction in the disclaimer) need confirmation.

## Content review (waiting on Alex)

- [ ] **Bio prose** in `src/config/alex/bio.ts` — six narrative chapters. Read and edit any sentence that does not sound like you.
- [ ] **Structured CV** in `src/config/alex/cv.ts` — verify every fact: dates, supervisor names, conductor names, venue names, the Leibniz thesis title, the Allegro-Brail / Braille-music project specifics.
- [ ] **Pricing** in `src/config/pricing.ts` — currently placeholder. Confirm currency (CAD / USD / EUR), the rate per lesson, the rate per homework correction, whether both offerings ship at launch or just lessons.
- [ ] **Pull-quote placeholders** — one each in `src/config/about.ts` and `src/config/method-page.ts` if either still has the maestro-register filler.
- [ ] **ContactPanel copy** in `src/config/contact.ts` — read once and confirm tone.
- [ ] **404 / 500 page bodies** — generic boilerplate from the previous build; rewrite in the studio voice.
- [ ] **Established year** — `studio.established` is currently 1996 (first taught at Gnesin). Alternatives: 2007 (first taught at Université de Montréal) or 2026 (when the online studio launched). Pick one.

## Brand & assets

**Logo and favicon are in place as deliberate placeholders.** A serif `АП` monogram in a circle for the main mark; a matching inkwell disc / vermilion stroke / vermilion `АП` for the favicon. They work and look coherent, but they're not designed brand identity. Commission a real mark when ready — the swap is a single file change in each of:

- `src/assets/logo/companyLogo.svg` — used by the navbar, footer, mobile menu, and intro animation
- `public/images/favicon/favicon.svg` — browser tab

Actual launch blockers in this category:

- [ ] **OG social-sharing image** at `public/images/open-graph/og-default.webp` — referenced from `studio.seo.defaultOgImage`. Design at 1200×630. Test rendering across Facebook, LinkedIn, X, WhatsApp using the tools in **Post-launch verification** below.
- [ ] **Hero image variety** — `antique-score-on-desk-hero.webp` is currently reused across PageHero on Home / About / Curriculum / Method. Source at least one second photograph so the same image is not reused on every interior page.

## Future integrations (post-launch)

Items the studio has decided it wants but that are not yet wired up. None of these block launch.

- [ ] **Google Reviews + Google Business Profile.** Once Alex has a verified Google Business Profile for the studio, embedding the review feed will require: (1) a Google Cloud project with the Places API enabled; (2) an API key stored in Netlify as `GOOGLE_PLACES_API_KEY` (all deploy contexts); (3) HTTP-referrer restrictions on the key set to the production domain (and any preview `*.netlify.app` host you want to allow). Free quota is generous for a low-traffic site.
- [ ] **`/lectures` hub page** — referenced in early planning. Worth building only when Alex has YouTube content to embed; an empty hub page is worse than no hub page.
- [ ] **Per-module curriculum sub-pages** — e.g. `/curriculum/harmony`, `/curriculum/counterpoint`. Each module gets a deep page with repertoire studied and sample exercises. Long-tail SEO play; not needed for launch.
- [ ] **`Course` structured data** — Schema.org `Course` entry per curriculum module, added to `src/config/structured-data.ts` once the per-module pages exist.
- [ ] **Replace the fabricated `TestimonialBlock` quotes — DO NOT SHIP AS REAL.** `TestimonialBlock` is live on the homepage, but the six testimonials in `src/config/testimonials.ts` are **fabricated placeholders** written only to demonstrate the section's look. They name invented students and must not go live as genuine client quotes. Before launch, either replace them with real, consented student quotes or remove the `<TestimonialBlock />` instance from `src/pages/index.astro`. The config file carries the same warning in a header comment.
- [ ] **Audio gallery on `/music`** — `AudioFeature` currently shows one YouTube embed on the homepage. Could grow into a small dedicated media page once Alex selects more pieces to feature.
- [ ] **Analytics decision** — currently no analytics. If/when Alex wants visitor data, choose between Netlify Analytics (server-side, no cookies, paid add-on) and Plausible (paid, more featureful). Either will require adding the new processor to the privacy policy and (for Plausible) configuring Cookiebot to gate it.
- [ ] **Per-page image-focus tuning** — `imageFocus` on each PageHero is currently a guess. Eyeball each page once content is final and adjust if the focal point is off.

## Security headers

Configured in `netlify.toml` at the project root: six baseline headers plus a CSP whitelisting the third parties the site loads (Cookiebot, Cal.com, YouTube). See **Security headers reference** below for the full list and why each one matters. **Before adding new third-party scripts** (analytics, fonts from a CDN, additional embeds), extend the matching CSP directive in `netlify.toml` or those resources will be silently blocked.

`CSP-AUDIT.md` at the project root is the portable audit guide — walks through how to verify the CSP empirically (DevTools → Console → look for `Refused to` errors after exercising every feature) and includes worked examples for common stacks. Re-run that audit whenever a new third party is added.

After deploy: scan the production URL via [securityheaders.com](https://securityheaders.com) — aim for an A rating.

- [ ] **Submit the production domain to the HSTS preload list** at [hstspreload.org](https://hstspreload.org) once the site has been live on HTTPS for at least a few weeks. The HSTS header in `netlify.toml` is currently *without* the `preload` directive — that keyword is a public commitment that takes months to reverse if submitted prematurely. Adding it back and submitting is the right move once you're confident the production domain will keep serving HTTPS indefinitely. Process: update `netlify.toml` to add `; preload` to the HSTS value, redeploy, then submit at hstspreload.org. ~5 min to do, but inclusion in the list takes weeks.

---

# Post-launch verification — first hour after DNS cutover

Run this checklist the moment the production domain resolves to the live Netlify deployment. Most of these can't be validated before launch because canonical URLs, OG tags, and the sitemap all reference the production domain — they only become meaningful once it's live.

Total time: ~20 minutes.

### Reachability

- Open the production URL in a fresh incognito window — confirms DNS, TLS, and that the site loads.
- Open the `www.` variant — confirms it redirects (or serves) correctly.
- Open one page of each type: home, about, contact, privacy, cookie-policy.
- Submit the contact form once with test data — confirms Resend is sending and the email lands at `studio.email.formTo`.
- Book a test slot via the Cal.com modal — confirms the booking integration works on the live URL.

### Crawler-facing files

- `[production-url]/robots.txt` returns 200 and points at the production sitemap.
- `[production-url]/sitemap-index.xml` returns 200 and lists the production URLs.
- `[production-url]/images/open-graph/og-default.webp` returns 200 (the OG image asset itself).

### Social preview cards — OG image rendering

Paste the production URL into each tool. First time, hit Scrape Again / Inspect to fetch fresh.

- **Facebook / Instagram / Meta:** [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/). Expected: image renders, no warnings, no 403.
- **LinkedIn:** [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/). Confirm the card shows the OG image (not "No image found").
- **X / Twitter:** paste into a draft tweet and check the preview card.
- **WhatsApp / iMessage / Slack:** paste into a chat. Each platform has its own cache so you may need to test from a fresh thread or device.
- **Generic OG snapshot:** [opengraph.xyz](https://www.opengraph.xyz/). Quick sanity check covering anything not above.

### Security and headers

- [securityheaders.com](https://securityheaders.com/) — scan production URL. Aim for an A rating.
- [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/) — TLS configuration scan. Netlify's default cert handling (Let's Encrypt) is already A-grade so this is a quick confirmation.

### Search engines

- Add the production domain to **[Google Search Console](https://search.google.com/search-console)**, verify (DNS TXT is most reliable), and submit `sitemap-index.xml` under Indexing → Sitemaps.
- Submit to **[Bing Webmaster Tools](https://www.bing.com/webmasters)** — same pattern.
- Run **URL Inspection** in Search Console on the home page + one content page — confirms Google can render and read the content. Use **Live Test → View Crawled Page → HTML** to verify Google sees content as a human would (catches JS-rendered content issues).
- Check **Settings → Crawling → robots.txt** in Search Console to confirm nothing important is blocked.

### Cookie banner end-to-end

- In a fresh incognito window: confirm the Cookiebot banner appears, that no Statistics or Marketing cookies are set before consent, and that the `CookieConsent` cookie's `Expires` matches the dashboard setting.
- On `/cookie-policy`: confirm the cookie-declaration table renders.
- Click the floating consent icon: confirm the banner reopens and consent can be changed.

If any of the above fails, fix it before walking away from launch.

---

# Reusable patterns (for future template work)

This section captures the project-agnostic patterns from this codebase that apply to any client website. Reusable on the next project; not specific to the studio.

## Why client-owned accounts matter

**Every third-party service must be registered under a client-owned email, not the developer's.** Cookiebot, Resend, Netlify, Cal.com, any analytics — all of it. Three reasons:

1. **Legal.** Most of these services process personal data (consent records, form submissions, server logs). The client is the data controller; the service is the processor. Records must sit in the client's account so the client can produce them if audited or asked under a GDPR Article 15 / PIPEDA / Law 25 access request.
2. **Practical.** The Data Processing Addendum (DPA) signed with each provider is structured as a client-to-provider agreement, not an agency-to-provider one. The legal relationship has to match the technical setup.
3. **Business.** If the client ever switches developer, their infrastructure (verified sending domain, hosting deployment, consent records, booking link) stays with them. They are not hostage to your account staying active and paid.

**Standard onboarding pattern for any new service:**

1. During development — use your own account with a development domain. Fine.
2. Before launch — ask the client to sign up for a free account using a client-owned email.
3. Client adds you as a team member with admin access (cleaner than sharing passwords; uses your own credentials).
4. You configure everything from your own logged-in session, swap any dev IDs (Cookiebot CBID, Resend domain, Netlify site) to the client's, then verify.
5. Document the handoff in the client's operational notes.

## Security headers reference

Configured in `netlify.toml` at the project root. Six baseline headers + a minimal CSP.

| Header | What it does | Why it matters |
|---|---|---|
| **X-Frame-Options** | Prevents the site being embedded in an `<iframe>` on another site. | Blocks clickjacking — an attacker overlays your site invisibly and tricks users into clicking. |
| **X-Content-Type-Options** | Stops the browser guessing the file type of a response. | Without it, a browser might execute a file as a script even if the server said it was an image. One-liner that closes a real attack vector. |
| **Referrer-Policy** | Controls what URL info is sent when a user clicks a link to another site. | Without it, the full URL (including query strings) is sent to the destination. `strict-origin-when-cross-origin` sends only the domain. |
| **Permissions-Policy** | Tells the browser which device features your site is allowed to use. | Explicitly disable camera, microphone, geolocation when the site doesn't need them — even if a malicious script were injected, it couldn't access them. |
| **COOP (Cross-Origin-Opener-Policy)** | Prevents other sites from holding a reference to your window when opened via popup or link. | Closes a class of cross-site attacks. |
| **HSTS (Strict-Transport-Security)** | Forces the browser to always use HTTPS for your domain. | After first visit, the browser refuses to connect over plain HTTP. Only works once the site serves correctly over HTTPS. |

**Active values** (in `netlify.toml`):

```txt
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Cross-Origin-Opener-Policy: same-origin
Strict-Transport-Security: max-age=63072000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' https://consent.cookiebot.com https://consentcdn.cookiebot.com https://app.cal.com https://cal.com; style-src 'self' 'unsafe-inline' https://consent.cookiebot.com https://app.cal.com; img-src 'self' data: https:; font-src 'self' data: https://app.cal.com; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://consent.cookiebot.com https://app.cal.com https://cal.com; connect-src 'self' https://consent.cookiebot.com https://consentcdn.cookiebot.com https://app.cal.com https://cal.com; form-action 'self'; base-uri 'self'; frame-ancestors 'none'
```

**CSP — when to extend.** CSP is the most powerful header but also the most complex. Any source not listed in the relevant directive is blocked. Before adding a new third-party script or embed, update the matching directive in `netlify.toml` — otherwise the resource silently fails. Common updates:

- **Analytics / tag managers** — usually need `script-src` and `connect-src`.
- **Cookie consent tools** — usually need `script-src`, `style-src`, and sometimes `connect-src`.
- **Booking / funnel embeds** (Cal.com, Calendly) — usually need `script-src`, `frame-src`, `img-src`, `connect-src`.
- **CDN-hosted fonts** — usually need `style-src` and `font-src`. Prefer `@fontsource` when possible to avoid third-party requests entirely.

After deploy: test with [securityheaders.com](https://securityheaders.com/), Lighthouse, and the DevTools Network panel.

## Adding a third-party widget — discipline

Before adding any new third-party script or embed (analytics, ad pixel, social widget, embedded video, chat widget, payment processor), work through these gates. Skip any one and you'll either break the site, miss a compliance obligation, or both.

1. **Written assessment** — paragraph somewhere in your project notes describing the data flow. What data is sent to whom, under what legal basis, for what purpose.
2. **Privacy policy update** — add the vendor under the "third parties we share data with" / "sub-processors" section, with what's shared and why.
3. **Consent gating** — if the vendor is a tracker/marketing tool, tag the embed with `data-cookieconsent="marketing"` (or the relevant Cookiebot category) so it's blocked until consent. Verify in DevTools Network panel that the third-party request does **not** fire before consent.
4. **CSP update** — extend the relevant directive in `netlify.toml` (see Security headers above).
5. **Test on the live URL** in a fresh incognito session — both the pre-consent and post-consent states.
6. **For sensitive-topic sites** (mental health, legal, medical, etc.): the calculus is different. Trackers can leak special-category inference data. Default to refusing trackers entirely on those sites and document the reason.

## Resend domain verification

The contact form uses [Resend](https://resend.com) to send email. During development it runs in **sandbox mode** — only allows sending to the email address the Resend account was registered with. Before going live you must verify a domain.

**Steps:**

1. Log in to Resend.
2. **Domains → Add Domain.** Enter the site's domain.
3. Add the DNS records Resend provides (SPF, DKIM, DMARC, optionally tracking) at the domain registrar. Click Verify in Resend once they're added. DNS propagation can take up to 24 hours but is usually faster.
4. Update `FROM` in `src/features/contact-form/service/deliverContact.ts` from `onboarding@resend.dev` to a verified address (e.g. `noreply@[client-domain]`). The `TO` is already driven from `studio.email.formTo`.
5. Set the production `RESEND_API_KEY` env var in Netlify (or whichever host). Never commit the key.
6. Send a test submission and confirm it arrives in the client's inbox (and not in spam).

**Why this can't stay on `onboarding@resend.dev` at launch:**

- It's Resend's shared test sender — thousands of accounts use it.
- Gmail / Outlook / corporate spam filters increasingly penalise emails where the FROM domain doesn't have aligned SPF/DKIM/DMARC for the actual sender.
- Resend's own terms restrict production use of the test sender.
- Once a domain is verified, the email looks like it came from the client (it did), passes spam filters, and is rate-limited per the client's account.

## Netlify site transfer

When the client's Netlify account is ready:

1. Client signs up at [netlify.com](https://netlify.com) with a client-owned email.
2. Client creates a team (Netlify auto-creates one on signup) and invites you as a team member with the appropriate role.
3. **Transfer the site:** Site configuration → General → Transfer site to the client's team. Environment variables and deploy history move with it.
4. **Verify env vars** transferred: Site configuration → Environment variables. Re-add `RESEND_API_KEY` if it did not copy.
5. **Point the domain:** Domain management. Add the apex and `www` variants. Netlify provides the CNAME (or apex A/ALIAS) record to add at the DNS registrar.
6. **Trigger a production deploy** from the client's team to confirm everything builds and serves correctly.
7. **Update the site's `siteUrl`** config so canonical URLs, sitemap, OG, and JSON-LD all reference the live domain.

**Function region.** Netlify Functions run in a US region by default. Region control is limited compared with some hosts; if the privacy policy commits to processing in a specific region (EU, Canada, etc.), confirm what the studio's Netlify plan actually offers and align the policy wording before launch.

## Adding new pages

When creating a new content page (a new service, a landing page), add structured data so search engines can index correctly:

```astro
---
import { getStructuredData } from "../config/structured-data";
const structuredData = getStructuredData();
---

<BaseLayout ... structuredData={structuredData}>
```

You don't need this on legal/policy pages (privacy, cookie-policy, accessibility, disclaimer, terms) — only on real content pages.

## Contact form — spam protection

Two layers in place:

- **Honeypot field** — a visually-hidden input that bots tend to fill. Submissions with it filled are silently dropped (the handler returns success so the bot moves on).
- **Zod validation** — all fields are validated server-side before the email is sent.

Sufficient for a low-traffic site. If spam becomes an issue, the recommended upgrade is **rate limiting** via [Upstash Redis](https://upstash.com) (free tier covers thousands of requests per day, works fine from a Netlify Function). Limit submissions to e.g. 3 per hour per IP.

## Testing & auditing tools

A reference for the best tools to audit the site after launch. None require code changes — they test the live URL.

### Performance

- **Lighthouse** (built into Chrome DevTools). Go-to for a quick overall score. Tests Performance, Accessibility, Best Practices, SEO in one go. Run in incognito to avoid extensions skewing results.
- **WebPageTest** ([webpagetest.org](https://webpagetest.org)). More detailed than Lighthouse. Tests on real devices and connections, shows a waterfall of every request. Best for diagnosing specific bottlenecks.
- **Google PageSpeed Insights** ([pagespeed.web.dev](https://pagespeed.web.dev)). Runs Lighthouse remotely + shows real-user Core Web Vitals from Chrome users. Useful once the site has real traffic.

### SEO & crawling

- **Screaming Frog** ([screamingfrog.co.uk](https://screamingfrog.co.uk)). Crawls the entire site at once — broken links, missing meta tags, duplicate titles, missing alt text, redirect chains. Free version covers 500 URLs (plenty for this site).
- **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)). The authoritative source for how Google sees the site. Submit sitemap, monitor crawl errors, check indexed pages, see real search query data. Set up the moment the site goes live.

### Accessibility

- **axe DevTools** (Chrome/Firefox extension — [deque.com/axe](https://deque.com/axe)). More thorough than Lighthouse for accessibility. Flags WCAG violations Lighthouse misses and gives actionable guidance.
- **WAVE** ([wave.webaim.org](https://wave.webaim.org)). Flags errors (red), alerts (yellow), and structural issues. Tests one page at a time — run separately for every page on the site.
- **Keyboard navigation.** Tab through every page without a mouse. Every interactive element must be reachable and have a visible focus indicator.
- **VoiceOver** (built into Mac, `Cmd+F5` to toggle). The screen reader most Mac users have. Tab through and check the order and alt text make sense aloud.

### Structured data

Validate JSON-LD with Google's [Rich Results Test](https://search.google.com/test/rich-results) or the [Schema.org Validator](https://validator.schema.org).

### Using AI for audits

Claude Code and similar assistants can be useful as a first pass for: reviewing components for accessibility issues, checking colour combinations against WCAG, auditing new pages for missing structured data / meta tags / semantic HTML, reviewing security headers or config changes. Targeted questions work better than open-ended ones — "does this component have any accessibility issues?" or "will this colour combination pass WCAG AA on this background?" before running the automated tools above.

---

## Where the old README went

The original README (~700 lines of solicitor-agency operational documentation: DPC compliance walkthroughs, LSRA Reg 11(f), firm-to-processor DPA patterns, Cookiebot/Resend/Vercel handover playbooks for a solicitor client) lives at `_archive/README-solicitor.md`. The reusable parts have been folded into this document; the original is kept as reference material for future regulated-profession client work.
