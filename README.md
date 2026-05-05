# Mary Molloy Solicitor — Website

Astro website for Mary Molloy Solicitor.

---

## Development

```bash
npm run dev        # start dev server
npm run build      # production build
npm run test       # run tests
npm run test:watch # run tests in watch mode
```

---

## Adding New Pages

When creating a new content page (e.g. a new service, a landing page), add structured data so Google can index the business correctly:

```astro
import { getLawFirmStructuredData } from "../config/structured-data";
const structuredData = getLawFirmStructuredData();
```

Then pass it to `BaseLayout`:

```astro
<BaseLayout ... structuredData={structuredData}>
```

You don't need this on legal/policy pages (privacy, terms, cookie policy, etc.) — only on real content pages.

---

## Google Reviews (reusable for any client)

> ⚠️ **Do not use this on Irish solicitor sites.** Auto-fetching Google reviews breaches **Regulation 5(a)(i) of S.I. No. 644/2020** (Legal Services Regulation Act 2015 Advertising Regulations). Every testimonial published by a solicitor requires **signed written consent from that individual reviewer before it goes live** — the Google Places API cannot verify consent, so every auto-pulled review is a standing violation. Also not suitable for barristers (Bar of Ireland Code of Conduct prohibits testimonials) or medical practices (Medical Council guidelines on testimonials). Only use this feature for non-regulated businesses (restaurants, tradespeople, retail, hospitality).

The testimonials section fetches reviews from the Google Places API (New) and caches them server-side so the API is only called once per day regardless of traffic.

### What you need per client

1. **Google Cloud project** — create one per client at console.cloud.google.com (use your own Google account, not the client's). Enable the **Places API (New)**.
2. **API key** — create under APIs & Services → Credentials. Restrict it to Places API only.
3. **Place ID** — find it at developers.google.com/maps/documentation/places/web-service/place-id by searching the business name. No login required.
4. **Environment variable** — add `GOOGLE_PLACES_API_KEY` to Netlify/Vercel environment variables. Never commit it to the repo.

### Pricing
Free up to 10,000 requests/month. With 24hr caching, a typical client site uses ~30 requests/month — well within the free tier.

### Review filtering
Reviews can be excluded by author name via `googleReviews.excludeAuthors` in `src/config/firm.ts`. **When reusing for a new client, check this array is empty (`[]`) or remove it entirely** — filters set for one client should never carry over to another.

### Reusing for a new client
1. Create a new Google Cloud project for the client
2. Enable Places API (New) and generate a new API key
3. Find the client's Place ID
4. Set `GOOGLE_PLACES_API_KEY` in the new site's environment variables
5. Set the Place ID in the site config (see `src/config/firm.ts`)
6. Update `address.googleMapsProfileHref` in `src/config/firm.ts` — this is the direct Google Maps listing URL used by the "See all reviews" link. Find it by searching the firm name on Google Maps, opening their profile, and copying the URL from the browser address bar.

### If the client is a regulated profession — the compliant alternative

If the client is a solicitor, barrister, or medical practice and they want to showcase reviews, the only compliant route is to approach individual reviewers in writing, obtain signed consent for the exact quote and placement, strip any case-outcome or "free consultation" language, and hand-publish the approved text. Store each signed consent for 12 months minimum.

Everything below is the detailed Regulation 5 requirement set for solicitors — if the client is a solicitor, this is the process.

#### Consent requirements (Reg 5, S.I. No. 644/2020)

- The client must be shown **exactly** how their testimonial will appear — the precise wording, location on the site, and context — before it goes live
- Consent must specifically cover promotional use on the website
- If the testimonial mentions case details, outcomes, or results, the written consent must explicitly cover those specifics
- You cannot exaggerate your role in any case referenced

#### Consent process

1. Prepare a screenshot or mockup showing exactly how the testimonial will appear on the site
2. Show this to the client and obtain written signed consent approving that specific use
3. Store the signed consent form for a minimum of 12 months — the LSRA can request it at any time
4. If the testimonial includes case specifics, the consent form must explicitly state that those details may be used for promotional purposes

#### Google Business reviews — republishing

Republishing a Google review on your own website is a republication and requires consent:

- Any review that mentions case details or outcomes — **get written permission before featuring it**
- Generic reviews with no case specifics may qualify as publicly available information but written consent is still the safest approach
- The LSRA can investigate testimonial use without consent as a compliance violation

#### What to record in the consent form

| Field | What to include |
|---|---|
| Client name | Full name as it will appear (or confirm anonymised) |
| Date signed | Date consent was given |
| What was approved | Exact testimonial text, where it will appear, in what context |
| Duration | How long you have permission to use it |

#### Violation risk

Featuring testimonials without proper written consent can result in an LSRA investigation under Regulation 5. The burden of proof is on the solicitor to demonstrate consent was obtained.

> See also: `legal-compliance/legal-services-regulation-act/website-content-review-checklist.md` — Regulation 5 section.

---

## Legal Compliance — Cost Warning (Regulation 6, S.I. No. 644/2020)

Under Regulation 6 of the Legal Services Regulation Act 2015 (Advertising) Regulations 2020, any page that references **personal injuries or contentious business** must include a clear cost warning referencing Section 149 of the Act.

The `<LegalCostWarning />` component (`src/components/ui/LegalCostWarning/LegalCostWarning.astro`) handles this automatically.

### Belt-and-braces approach — warning on every service page + sitewide footer notice

Regulation 6 only **requires** the warning on pages referencing personal injuries or contentious business. In practice, this site ships it on **every service page** (including the non-contentious ones — property, wills, leases) *and* runs a separate `<FooterLegalNotice />` component in the sitewide footer (`src/components/footer/FooterLegalNotice.astro`, content in `src/config/legal/legal-cost-notice.ts`).

The reasoning: anything on the site can end up in front of a court or the LSRA if a complaint is lodged, and the boundary between contentious and non-contentious work is not always clean (a wills page can lead to a contested probate; a property page can lead to a boundary dispute). Over-disclosing costs nothing; under-disclosing is a statutory breach. When in doubt, show the warning.

**Pages where the warning is strictly required by Reg 6:**

| Page | Reason |
|---|---|
| `src/pages/services/personal-injury-litigation.astro` | Personal injuries + litigation |
| `src/pages/services/road-traffic-accidents.astro` | Motor accidents = personal injuries under Reg 4(c) |
| `src/pages/services/employment-law.astro` | Contentious employment disputes |
| `src/pages/services/debt-collection.astro` | Court proceedings / contentious business |
| `src/pages/services/family-and-childcare-law.astro` | Contested family proceedings |

Place `<LegalCostWarning />` directly after `<ServiceArticle>` and before `<ServiceProcess>` on each page. The sitewide footer notice is already wired into the main layout — nothing to add per-page for that.

**Also prohibited on all pages** (Reg 6(b)): "no win no fee", "no foal no fee", "free first consultation", or any phrase that implies the service will cost the client nothing.

---

## Legal Compliance — ePrivacy & Data Protection (S.I. No. 336/2011 + GDPR)

The compliance audit trail for cookie consent, contact-form processing, data security, retention, and the privacy-policy contents lives in `legal-compliance/`. Read these in order if you need to verify any compliance claim:

1. **`legal-compliance/cookies/dpc-guidance-walkthrough.md`** — DPC's April 2020 guidance walked section-by-section, with verbatim quotes, plain-English explanation, and a verification step against the live site for every requirement.
2. **`legal-compliance/cookies/edpb-2023-compliance-evidence.md`** — same exercise for the EU regulator's 2023 Cookie Banner Taskforce Report.
3. **`legal-compliance/cookies/reg-5-compliance-evidence.md`** — same exercise for S.I. 336/2011 Regulation 5 (the operative Irish statute).
4. **`legal-compliance/gdpr/walkthrough.md`** — full GDPR walkthrough: every Recital (1–173) and every Article (1–99) triaged, with full entries for the operative ones cross-referenced to the privacy policy section, RoPA activity, and processor DPA that handles each.
5. **`legal-compliance/gdpr/privacy-policy-draft.md`** — the published privacy policy, plain English, ~3,000 words.
6. **`legal-compliance/gdpr/record-of-processing-activities.md`** — the firm's Article 30 RoPA, three website-side activities documented under the seven mandatory headings.
7. **`legal-compliance/processor-agreements/`** — the three executed Article 28(3) DPAs: Cookiebot, Resend, Vercel.
8. **`legal-compliance/legal-services-regulation-act/website-content-review-checklist.md`** — the plain-English checklist that walks each LSRA Reg 4–11 rule with examples.

Source PDFs live alongside each walkthrough (DPC guidance, EDPB report, S.I. 336/2011, the GDPR text, the EU ePrivacy Directive, the LSRA Regulations).

If you're reviewing this site against the law for the first time, start with item 1 (the DPC walkthrough). It's the most efficient entry point and points at every other relevant file.

---

## Colour Tooling — colorjs.io

`colorjs.io` is installed as a dependency. Use it to verify WCAG contrast ratios when adding or changing colours in theme files.

```ts
import Color from "colorjs.io";

const fg = new Color("oklch(0.25 0.068 256)"); // e.g. navy-900
const bg = new Color("oklch(0.97 0.012 70)");  // e.g. stone-100
const contrast = fg.contrast(bg, "WCAG21");     // → 14.79 (AAA pass)
```

Run a quick check as a one-off script: `npx tsx check-contrast.ts`

All theme files are in `src/styles/themes/`. Required minimums: 4.5:1 for normal text (AA), 3:1 for large text or UI components.

---

## Going Live — Security Headers

Browsers support a set of HTTP response headers that protect users from common attacks. These should be added to `netlify.toml` before the site goes live. They are free, require no code changes, and Lighthouse will flag their absence.

### Why each one matters

**X-Frame-Options (XFO)**
Prevents your site from being embedded inside an `<iframe>` on another website. Without it, an attacker can overlay your site invisibly and trick users into clicking things they didn't intend to — known as clickjacking. A user could think they're clicking your contact form but actually clicking something on the attacker's page underneath.

**X-Content-Type-Options**
Stops the browser from guessing the file type of a response. Without it, a browser might execute a file as a script even if the server said it was an image. A simple one-liner that closes a real attack vector.

**Referrer-Policy**
Controls what URL information is sent when a user clicks a link to another site. Without it, the full URL of the page they were on (including any query strings) is sent to the destination site. Setting this to `strict-origin-when-cross-origin` sends only the domain name, not the full path.

**Permissions-Policy**
Tells the browser which device features your site is allowed to use. Since this site doesn't use the camera, microphone, or geolocation, you can explicitly disable them — so even if a malicious script were somehow injected, it couldn't access them.

**COOP (Cross-Origin-Opener-Policy)**
Prevents other websites from getting a reference to your browser window if your site is opened via a popup or link. Closes a class of cross-site attacks where a malicious page can interact with yours.

**HSTS (Strict-Transport-Security)**
Forces the browser to always use HTTPS for your domain, even if someone types `http://`. After the first visit, the browser will refuse to connect over plain HTTP. This only works if the site is on HTTPS (which Netlify/Vercel handle automatically).

### How to add them

In `netlify.toml`, add a `[[headers]]` block:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Cross-Origin-Opener-Policy = "same-origin"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

### CSP (Content Security Policy) — add last

CSP is the most powerful header but also the most complex. It tells the browser exactly which sources are allowed to load scripts, styles, fonts, and images. Any source not listed is blocked — this stops injected malicious scripts from running.

The reason to add it last: you need to know every third-party resource the site loads (Google Fonts, Google Analytics, GTM, Facebook Pixel, Resend etc.) before writing the policy, otherwise you will break things. Add CSP once the cookie consent and tracking setup is complete and you know exactly what's on the page.

A starting point once you know your external services:

```toml
Content-Security-Policy = "default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self';"
```

Adjust the allowed sources to match whatever is actually on the page. Test thoroughly after adding — a wrong CSP will silently break scripts and styles.

---

## Legal Compliance — Record Keeping (Regulation 11(f), S.I. No. 644/2020)

**Must be completed on launch day — not optional.**

The solicitor is legally required to keep records of all advertising for 12 months from the latest date of publication, producible to the LSRA on request. The website is an advertisement under Irish law.

### What to do on launch

**Screenshots — use the compliance script:**

The script at `scripts/compliance-screenshot.ts` automatically scans every page in `src/pages/` (excluding dev pages) and saves full-page screenshots to a dated compliance folder. Any new pages added to the project are picked up automatically.

```bash
# 1. Start the dev server (or point it at the live URL by editing BASE_URL in the script)
npm run dev

# 2. Install Playwright (one-time)
npx playwright install chromium --with-deps

# 3. Run the screenshot script — the label becomes part of the folder name
npx tsx scripts/compliance-screenshot.ts launch
# → saves to legal-compliance/compliance-records/YYYY-MM-launch/screenshots/

# For annual reviews:
npx tsx scripts/compliance-screenshot.ts annual-review
# → saves to legal-compliance/compliance-records/YYYY-MM-annual-review/screenshots/
```

**Then complete the compliance record:**
1. Copy `legal-compliance/legal-services-regulation-act/website-content-review-checklist.md` into the launch folder
2. Save all testimonial consent forms to `legal-compliance/compliance-records/YYYY-MM-launch/consents/`
3. Save any content instructions received from the solicitor (emails, messages, briefs) into `legal-compliance/compliance-records/YYYY-MM-launch/instructions.md`

### After any content change

Run the full screenshot script every time something changes — even a single component edit can affect every page, so always screenshot the whole site:

```bash
# Make sure the dev server is running first
npm run dev

# Run with a descriptive label — it becomes part of the folder name
npx tsx scripts/compliance-screenshot.ts 2026-05-updated-homepage
# → saves to legal-compliance/compliance-records/2026-05-2026-05-updated-homepage/screenshots/
```

Also paste any written instructions that triggered the change into the `instructions.md` file in that folder, with a date.

### What the script captures

- **Every page** in `src/pages/` except `dev/` pages — automatically discovered, no config needed
- **Intro overlay** — captured mid-animation on the first page load, then the script waits for it to complete before continuing
- **Scroll-triggered animations** — the script scrolls to the bottom of each page to fire all GSAP scroll animations, waits for them to settle, then scrolls back to top before screenshotting
- **Full-page screenshots** at 1440px wide

### Ongoing after launch

- **After any content change:** re-screenshot affected pages, paste any new instructions into `instructions.md` with a date
- **Every 6 months:** re-audit all external links for compliance
- **Every 12 months:** full content review + new screenshot set in a new dated folder

### Folder structure

```
legal-compliance/
  compliance-records/
    YYYY-MM-launch/
      screenshots/        ← full-page screenshots of every live page
      instructions.md     ← content instructions from the solicitor, dated
      consents/           ← signed testimonial and solicitor co-mention consent forms
    YYYY-MM-annual-review/
      ...
```

GitHub tracks code history but the LSRA needs the finished output as visitors see it — screenshots are the compliance record, GitHub is the audit trail.

> Full compliance guidance: `legal-compliance/legal-services-regulation-act/website-content-review-checklist.md`

---

## Client Content Review — Process

Before launch, all website text must be reviewed and approved by the client. The process is:

1. Create a dedicated folder in Google Drive for the client (e.g. `Mary Molloy Solicitor — Website Review`)
2. Export each config file as a readable markdown file — these are saved to `legal-compliance/content-review/`
3. Upload the markdown files to the Google Drive folder
4. Share the folder with the client and ask them to read through each file, noting any changes they want made
5. Log all requested changes and what was updated in the **Review notes** section at the bottom of each file
6. Keep the completed review files as part of the compliance record alongside the screenshots

The review files cover: firm details, team bios and credentials, the about page, the home page, all service pages, testimonials, and the contact page.

---

## Per-Client Compliance Setup — Reusable Checklist

This section is the reusable instruction set for setting up GDPR / ePrivacy / LSRA compliance on **any** Irish solicitor site built from this template. Everything below is the standing process; per-client pending items live in each client's `legal-compliance/content-review/_pending-items-across-pages.md`.

### A. During build — establish processor relationships

Every solicitor's-firm website using this template will have these three processor relationships. For each, the executed Data Processing Addendum (DPA) must be filed locally so the firm can satisfy GDPR Article 28(3) and respond to Article 15(1)(c) / 13(1)(f) requests.

**1. Cookiebot DPA** (cookie consent management)
- Source: Cookiebot Manager → Settings → DPA, or `cookiebot.com/en/legal/dpa/`.
- File at: `legal-compliance/processor-agreements/cookiebot-dpa-YYYY-MM.pdf`.

**2. Email-delivery provider DPA** (e.g. Resend for the contact form)
- Source: provider's legal-documents page (e.g. `resend.com/legal/dpa`).
- File at: `legal-compliance/processor-agreements/[provider]-dpa-YYYY-MM-DD.pdf`.
- Confirm the third-country transfer mechanism (EU Standard Contractual Clauses or EU–US Data Privacy Framework adequacy decision). Note which DPA section names the safeguard.

**3. Hosting provider DPA** (e.g. Vercel, Netlify, etc.)
- Source: hosting provider's legal-documents page (e.g. `vercel.com/legal/dpa`).
- File at: `legal-compliance/processor-agreements/[provider]-dpa-YYYY-MM-DD.pdf`.
- Same: confirm third-country mechanism + which section names it.

**Verification for each DPA:** confirm it covers all eight Article 28(3) clauses. Checklist in `legal-compliance/processor-agreements/README.md`.

### B. During build — Article 30 RoPA (website slice)

GDPR Article 30 requires every controller to maintain a written Record of Processing Activities. The under-250-employees carve-out in Article 30(5) does **not** apply to a solicitor's firm because the processing is not occasional and may include special-category data (health in PI, criminal allegations in family law).

The website-slice RoPA is the same shape for every solicitor client and lives at `legal-compliance/gdpr/record-of-processing-activities.md`. Three website processing activities to document under the seven Article 30(1)(a)–(g) headings:

1. Cookie consent records (Cookiebot)
2. Contact-form submissions (email-delivery provider)
3. Server access logs (hosting provider)

Confirm with the firm:
- Their preferred retention period for non-matter contact-form messages (typical pattern: 30–90 days)
- Their data-protection point of contact name (often the principal solicitor herself)
- The hosting provider that will be active in production

### C. During build — shared compliance Google Drive folder

When a visitor exercises an Article 15(1)(c) / 13(1)(f) right and asks for a copy of the international-transfer safeguard, the **firm** must respond within one month (Article 12(3)). If the only copy of the DPA lives on the website manager's laptop, the firm cannot respond when the website manager is unavailable. So the firm's office needs its own access.

**Three locations, three purposes:**
- `legal-compliance/processor-agreements/` (this repo) — frozen-in-time audit trail, never delete; git history is the legal evidence.
- Website manager's master Google Drive folder — working copies; manage updates here first.
- Shared **"[Firm Name] — Compliance — Processor Agreements"** Google Drive folder — what the firm or its staff opens when a visitor asks.

**Setup steps (~30 minutes):**
1. Create the Google Drive folder named "[Firm Name] — Compliance — Processor Agreements" and share with the firm's confirmed email address.
2. Copy the three current DPAs in.
3. Add a one-page README inside the Drive folder explaining: which file to send for which provider, which section names the safeguard, and the wording of a short covering email to a requesting visitor.
4. Reference the shared folder location in the firm's operational notes (not the public-site README).
5. Whenever a DPA is updated by a processor: replace the file in **all three** locations on the same day; commit the new repo version with the date in the filename; do not silently overwrite.

### D. Pre-launch — production-cutover checklist

Run these in order before flipping DNS to the production domain. Total ~30–45 minutes.

**Cookiebot production swap:**
- [ ] Replace the development CBID in `src/layouts/BaseLayout.astro` and `src/pages/cookie-policy.astro` with the firm's production CBID.
- [ ] Re-apply the **1-month consent-expiry** setting in the production Cookiebot dashboard (the path is in `legal-compliance/cookies/client-onboarding-checklist.md`).
- [ ] Re-enter the Cookie Declaration / Privacy Policy URL fields in the production dashboard.

**Domain swap:**
- [ ] Update `siteUrl` in `src/config/firm.ts` from the staging URL (e.g. `https://test-XXX.netlify.app/`) to the production domain. This value is baked into canonical URLs, the sitemap, Open Graph metadata, and structured data — leaving it on the staging URL after production deploy silently destroys SEO. **Five-second edit, must happen before the production build.**

**External-links audit (LSRA Reg 9):**
- [ ] Audit the live site against the disclaimer's Section 5 commitment. Confirm there are no:
  - Directory-listing or review-aggregator links (e.g. Solicitors.ie listings)
  - Press articles linked that name the firm
  - Referral / partner website links
  - Google Business Profile link (use a Google Maps **address-search** URL for directions instead — not the business profile)
- [ ] Run through every "Verification" block in `legal-compliance/cookies/dpc-guidance-walkthrough.md` against the live production site.

**Compliance screenshots (Reg 11(f)):**
- [ ] Run dated compliance screenshots:
  ```bash
  npx tsx scripts/compliance-screenshot.ts launch
  ```

### E. Post-launch — Reg 11(f) record-keeping

Reg 11(f) of S.I. 644/2020 requires the firm to keep a **12-month-rolling dated record of every advertisement** — which includes the website. The compliance-screenshot script handles this:

```bash
npx tsx scripts/compliance-screenshot.ts <descriptive-label>
```

Screenshots save to `legal-compliance/compliance-records/<YYYY-MM-label>/screenshots/`. Re-run **after any visible content change** so the rolling-12-month record stays current.

### F. Standing — third-party-widget trigger checklist

If anyone (the firm, the website manager, a future developer) wants to add a third-party widget to the site, the steps below **must** be completed before it ships to production. Triggers include:

- Facebook Like button or any social-sharing button
- Embedded YouTube, Vimeo, or any third-party video iframe
- Embedded Google Maps, OpenStreetMap, or any third-party map iframe
- Google Analytics, Hotjar, Microsoft Clarity, Plausible, Fathom, or any analytics provider
- Meta Pixel, Google Ads conversion / remarketing tag, LinkedIn Insight Tag, TikTok pixel, or any advertising pixel
- Stripe, PayPal, Worldpay, Realex, or any online payment processor
- Disqus, Intercom, Crisp, Tawk.to, or any third-party chat / comments widget
- A new font loaded from `fonts.googleapis.com` (use `@fontsource` instead)
- Any new processor (replacing the current Cookiebot, email, or hosting provider)

**Step 0 — Sensitivity gate (apply BEFORE the rest):**
- Run the Phase 0 triage in `legal-compliance/cookies/client-onboarding-checklist.md`.
- If the client is **sensitive-topic** (family law, personal injury, criminal defence, mental health, immigration, etc.) AND the trigger is a **tracker / advertising pixel / analytics tool**: **refuse**. Hand the client `_business/sensitive-topic-tracking-client-faq.md` and `_business/google-ads-for-sensitive-topic-clients.md`.
- If the client is **not sensitive-topic** OR the trigger is a non-tracker third party (Maps embed, payment processor, replacement processor): proceed.

**The seven steps that must be completed before the widget ships:**

1. **Written assessment** — paragraph in the RoPA describing the data flow plus the *Fashion ID* CJEU joint-controllership analysis. Joint-controller assessments belong in `legal-compliance/joint-controller-assessments/[vendor].md`.
2. **Article 26 joint-controller arrangement** — find and accept the vendor's published joint-controller addendum in their dashboard. If the vendor does not publish one, the widget cannot lawfully ship under EU law.
3. **Privacy policy disclosure** — add the vendor under Article 13(1)(e) categories of recipients, with the Article 26(2) "essence of the arrangement" included.
4. **Consent gating** — tag the embed with `data-cookieconsent="marketing"` (or the relevant category) so Cookiebot blocks it until consent. Verify in DevTools Network panel that the third-party request does not fire before consent is given.
5. **Article 30 RoPA update** — add a new processing-activity row covering all seven Article 30(1)(a)–(g) headings.
6. **Section 24 DPIA** — for any analytics, profiling, advertising-pixel, session-recording, or dataset-linking tool. Cite the DPC's mandatory-DPIA list. Skip only if the trigger is a payment processor or non-tracking embed (Maps / video) — even then, document the no-DPIA conclusion.
7. **Section 25 special-category check** — confirm the vendor's sensitive-information policy and confirm that the site's content does not flow Article 9 inferences to the vendor. For sensitive-topic clients this gate is failed by definition (see Step 0).

**Skip any one of the seven and the consent is not valid, the data flow is unlawful, or both.**

**Realistic time estimate:** ~one full working day per widget for non-sensitive clients (Step 22 paperwork ~2–4 hours + DPIA ~4–8 hours + Section 25 check ~30 minutes + RoPA + privacy policy update). For sensitive-topic clients: don't measure the time, the answer is no for trackers.

### G. Standing — testimonials process (when the firm is ready)

Real testimonials are a separate workstream that can run after launch. Process for any client:

1. The firm identifies clients to ask for a testimonial.
2. **Prepare a screenshot or mockup** showing exactly how the testimonial will appear on the live site — wording, location, surrounding context. Show this to the client before publication.
3. The client signs a written consent form covering the exact wording, the location of publication, and (if the testimonial mentions case details or outcomes) the specific case-detail content.
4. The wording is reviewed under LSRA Reg 4(a)(iv) for any superlatives that should be toned down, with the client's agreement (quotes can't be unilaterally rewritten).
5. The signed consent form is filed at `legal-compliance/compliance-records/YYYY-MM-launch/consents/`.

Full procedure with statutory anchors: `legal-compliance/testimonials/testimonials-and-quotes-consent.md`.

**Why this matters (Reg 5(a)(i)):** every named-person testimonial published by an Irish solicitor requires prior written consent. The LSRA can investigate testimonial use without consent as a compliance violation; the burden of proof is on the solicitor.

**Whose responsibility:** the firm gathers testimonials and obtains consent; the website manager handles the wording review and publication.

---

## TODO — Before Launch

Items waiting on Mary (firm email, solicitor credentials, complaints procedure, fixed-fee conveyancing, bios sign-off, Duke / Michelle question) are tracked in `legal-compliance/content-review/_pending-items-across-pages.md` — that's the single document Mary fills in before launch.

Pre-launch operational tasks (Cookiebot CBID swap, production-domain swap, link audit, compliance screenshots) are documented in the **"Per-Client Compliance Setup — Reusable Checklist"** section above (Sections D and E).

What remains here is the small set of pre-launch tasks that aren't already covered in either of the above:

- [ ] **Favicon colour** — confirm the favicon colour matches the final brand accent before launch. The SVG is at `public/images/favicon/favicon.svg`. The `fill` value should match `--accent-500` in `src/styles/tokens.css`. Currently set to `hsl(20 70% 46%)` (copper).

- [ ] **Shared compliance Google Drive folder for the firm** — create a folder named "[Firm Name] — Compliance — Processor Agreements" shared with the firm's confirmed email; copy the three executed DPAs in (`cookiebot-dpa-2022-01.pdf`, `resend-dpa-2026-05-03.pdf`, `vercel-dpa-2026-05-03.pdf`); add a one-page README inside the folder noting which DPA section names each safeguard (Cookiebot §3.4 — EU/EEA processing; Resend §6.2 — EU SCCs; Vercel §12.1 — EU SCCs). The firm needs its own access so it can respond to a visitor's Article 13(1)(f) / 15(1)(c) request within Article 12(3)'s one-month window without depending on the website manager. ~30 minutes once the firm email is confirmed.

- [ ] **Verify two regulation citations** — two pages cite Irish statutes I deliberately avoided asserting specific figures for, because the figures are volatile and I couldn't verify them from a primary source:
  - `services/debt-collection.astro` references the **European Communities (Late Payment in Commercial Transactions) Regulations 2012** (S.I. 580/2012) as the current consolidated instrument. Confirm against `irishstatutebook.ie` that this has not been amended or superseded since.
  - `services/leases-and-tenancy-agreements.astro` deliberately does **not** quote specific notice periods, RPZ rent caps, or registration cycles, because the Residential Tenancies Act 2004 has been amended seven times (2009, 2012, 2015, 2019, 2021, 2022, 2024). The page is durable as-is. If specific figures are wanted, verify against a consolidated source first.

- [ ] **OG images** — create and add a default Open Graph image. Currently using placeholder/default values. The default image is set in `firm.seo.defaultOgImage` (`src/config/firm.ts`) and should be placed in `public/images/open-graph/`. A single good default image is fine for all pages — per-page OG images are optional and can be passed via the `ogImage` and `ogImageAlt` props on `BaseLayout` if you ever want a specific image for a particular page (e.g. a services page).

- [ ] **Cookie consent — write Playwright tests** to verify the banner loads before any non-essential scripts can run. Tests to cover:
  - On first visit (no `CookieConsent` cookie): banner is visible before the user interacts
  - On first visit: no Statistics or Marketing cookies are set before the user clicks Accept
  - On first visit: clicking Deny sets no non-essential cookies
  - On first visit: clicking Accept All sets the `CookieConsent` cookie with the correct consent state
  - On return visit (after consent given): banner does not appear again
  - On the `/cookie-policy` page: the cookie declaration table renders and lists at least the `CookieConsent` and `intro-seen` cookies
  - On the `/cookie-policy` page: "Change your consent" and "Withdraw your consent" links are present and functional
  
  These tests are a legal safeguard — if the DPC ever investigates, passing tests demonstrate that the site was verified to obtain consent before firing any tracking.

---

## Going Live — Cookie Consent & Tracking Setup

The site will need cookie consent management for GDPR compliance if running Google or Facebook ads.

> **Note — Google Consent Mode (GCM):** When Google Analytics or Google Ads are added, enable Google Consent Mode in the Cookiebot dashboard under **Implementation → Google Consent Mode**. This tells Google how to adjust its data modelling based on whether the user consented. It is not needed until tracking is added — skip it until then.

### What you need

Two tools working together:

- **Google Tag Manager (GTM)** — fires tracking scripts (Google Analytics, Facebook Pixel etc.). Free, no limits.
- **Cookiebot** — shows the consent banner, stores whether the user consented. Free up to 100 pages (more than enough for this site).

They work as a pair: Cookiebot captures consent, GTM only fires tags when Cookiebot confirms the user has agreed. You cannot use one without the other — GTM alone would fire tracking immediately (GDPR violation), Cookiebot alone has nothing to manage.

### Cookies this site will likely need consent for

- `_ga`, `_gid`, `_gcl_au` — Google Analytics / Google Ads
- `_fbp`, `_fbc` — Facebook Pixel
- Session/functional cookies — these are usually exempt from consent

### Account ownership — Cookiebot (read this first)

**Every client needs their own Cookiebot account. This is non-negotiable.**

Three reasons:

1. **Legal** — the consent records (who agreed, when, to what) belong to the data controller. That is the client, not you. Under GDPR, if the DPC audits Mary, she must produce those records. They need to be in her account, not yours.
2. **Practical** — Cookiebot's free plan allows 1 domain per account. You will hit that limit immediately if you try to manage all clients from one account.
3. **Business** — if a client leaves you or switches developer, their compliance records stay with them. You do not want to be holding a client's GDPR records after the relationship ends.

**Standard process for every new client:**

1. During development — use your own Cookiebot account with a development domain. This is fine.
2. Before launch — ask the client to sign up for a free account at [cookiebot.com](https://www.cookiebot.com) using their own email address.
3. They add their live domain and run the scan.
4. They send you their `data-cbid` from the dashboard.
5. You update the one line in `BaseLayout.astro`:
   ```astro
   data-cbid="PASTE-CLIENT-CBID-HERE"
   ```
6. Commit and push. Their banner now reports to their account. Done.

**Client onboarding — what to ask for:**

- **Team access (admin)** — ask the client to go to **Settings → Team** in their Cookiebot dashboard and invite `james@jamesmcdonald.dev` with admin access. This lets you configure the banner and fix issues without sharing their password.
- **Scan report recipient** — ask them to add `james@jamesmcdonald.dev` under **Cookies and Trackers → Scan report recipients**. This emails you whenever a scan runs so you can catch new cookies or tracking scripts that need categorising.
- **CMP script (`data-cbid`)** — once their account is set up, go to **Implementation → CMP** in their dashboard. Copy the `data-cbid` value and update it in `BaseLayout.astro` (see Step 2 in the Cookiebot setup section below). This is the consent banner script — it must use their CBID, not yours.
- **Cookie Declaration script** — go to **Implementation → Cookie Declaration** in their dashboard. Copy the full script tag and replace the existing script in `src/pages/cookie-policy.astro`. The page already has a development version of this script with a TODO comment marking it for replacement — swap the entire script tag with the one from the client's dashboard. It must use their CBID so it reads from their account's scan results.

Add this to your client onboarding checklist alongside domain access and Resend credentials — it is a standard pre-launch step on every project.

### Account setup — GTM/GA4

Both services require their own account per domain. The recommended handoff process:

1. Client creates a **Google account** (or uses an existing one)
2. Client signs up for **Cookiebot** at [cookiebot.com](https://www.cookiebot.com)
3. Developer logs in to both accounts to configure everything
4. Client adds developer as a **GTM/GA4 user** with admin access (cleaner than sharing passwords — developer uses their own Google account)
5. Once setup is complete, developer is removed as a user; Cookiebot credentials are handed back and password changed

### Setup steps

1. **Cookiebot** — add the domain, copy the script tag it provides
2. **GTM** — create a container, add the Cookiebot tag via the built-in GTM template (no code needed), then add Google Analytics and Facebook Pixel as tags set to fire on Cookiebot consent
3. Add the **GTM snippet** to the site's `<head>` — this is the only code change required

Once GTM is in place, all future tracking changes are made in the GTM dashboard, not in the codebase.

---

## Environment Variables (Vercel)

Add these in Vercel → Project Settings → Environment Variables before deploying:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key from resend.com — used by the contact form to send emails |
| `GOOGLE_PLACES_API_KEY` | Yes (for reviews) | API key from Google Cloud Console — used to fetch Google reviews |

Never commit these to the repo. Both keys must be set for their respective features to work in production.

---

## Going Live — Switch Adapter to Vercel

The site currently uses `@astrojs/netlify` as a temporary adapter during development. Before going live on Vercel, swap it out:

1. Uninstall the Netlify adapter:
   ```bash
   npm uninstall @astrojs/netlify
   ```

2. Install the Vercel adapter:
   ```bash
   npx astro add vercel
   ```

3. In `astro.config.mjs`, replace:
   ```js
   import netlify from "@astrojs/netlify";
   adapter: netlify(),
   ```
   with:
   ```js
   import vercel from "@astrojs/vercel";
   adapter: vercel(),
   ```

---

## Going Live — Email Setup (Resend)

The contact form uses [Resend](https://resend.com) to send emails. During development it runs in **sandbox mode**, which only allows sending to the email address you signed up to Resend with.

Before going live you must verify a domain so that emails can be delivered to any recipient (e.g. the solicitor's work inbox).

### Steps

1. **Log in to Resend** at [resend.com](https://resend.com)

2. **Add your domain**
   - Go to **Domains → Add Domain**
   - Enter the domain the site will be hosted on (e.g. `marymolloy.ie`)

3. **Add the DNS records**
   - Resend will show you a set of DNS records (MX, TXT, DKIM)
   - Add these in your domain registrar (e.g. Cloudflare, GoDaddy, Namecheap)
   - Click **Verify** in Resend once they're added — DNS can take up to 24 hours to propagate but is usually much faster

4. **Update `deliverContact.ts`**

   Open `src/features/contact-form/service/deliverContact.ts` and update these two lines:

   ```ts
   const FROM = "contact@marymolloy.ie"; // must use your verified domain
   const TO = "info@marymolloy.ie";      // the solicitor's actual email
   ```

5. **Set the production API key**

   Make sure the `RESEND_API_KEY` environment variable is set in your hosting platform (e.g. Netlify, Vercel) using the API key from your Resend account.

Once the domain is verified and these values are updated, the contact form will deliver directly to the solicitor's inbox.

---

## Contact Form — Spam Protection

The form currently has two layers of protection:

- **Honeypot field** — a hidden input that bots tend to fill in; submissions with it filled are silently discarded
- **Zod validation** — all fields are validated server-side before the email is sent

This is sufficient for a low-traffic site. If the client reports a spam problem in the future, the recommended next step is **rate limiting** via [Upstash Redis](https://upstash.com) (free tier covers thousands of requests per day, works with Vercel). This would limit submissions per IP to e.g. 3 per hour.

---

## Testing Structured Data

After adding or changing structured data, validate it with Google's Rich Results Test:

1. Run the site locally: `npm run dev`
2. Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
3. Enter your local URL or paste the page HTML directly
4. Google will validate the JSON-LD and highlight any errors

Alternatively, use the [Schema.org Validator](https://validator.schema.org) to paste the raw JSON output directly.

---

## Testing & Auditing Tools

A reference for the best tools to audit the site after launch. None of these require code changes — they test the live URL.

### Performance

**Lighthouse** (built into Chrome DevTools)
The go-to tool for a quick overall score. Open Chrome DevTools → Lighthouse tab → run on any page. Tests Performance, Accessibility, Best Practices, and SEO in one go. Good for checking individual pages. Run it in incognito mode to avoid browser extensions skewing the results.

**WebPageTest** (webpagetest.org)
More detailed than Lighthouse. Tests on real devices and connections, shows a waterfall of every request, and measures how the page looks at each 100ms interval. Best used to diagnose specific performance bottlenecks. Tests one page at a time.

**Google PageSpeed Insights** (pagespeed.web.dev)
Runs Lighthouse remotely on Google's servers and also shows real-user data (Core Web Vitals) from Chrome users who have visited the page. Useful once the site has enough real traffic.

### SEO & Crawling

**Screaming Frog** (screamingfrog.co.uk)
Crawls the entire site at once — checks every page for broken links, missing meta tags, duplicate titles, missing alt text, redirect chains, and more. The free version covers up to 500 URLs which is more than enough for this site. Run it after any major content changes.

**Google Search Console** (search.google.com/search-console)
The authoritative source for how Google sees the site. Submit the sitemap, monitor for crawl errors, check which pages are indexed, and see real search query data. Set this up as soon as the site goes live on the real domain.

### Accessibility

**axe DevTools** (Chrome/Firefox extension — deque.com/axe)
More thorough than Lighthouse for accessibility. Flags WCAG violations Lighthouse misses and gives more actionable guidance. Free version covers most common issues.

**VoiceOver** (built into Mac — `Cmd+F5` to toggle)
The actual screen reader used by most Irish and UK screen reader users on desktop. Tab through the site, especially the contact form and navigation, to check that everything makes sense when read aloud.

### Using AI for Audits

Claude Code (this tool) and similar AI assistants can be useful for:
- Reviewing components for accessibility issues before deploying
- Checking that new colour combinations pass WCAG contrast ratios
- Auditing new pages for missing structured data, meta tags, or semantic HTML issues
- Reviewing security headers or configuration changes

The most effective approach is to paste specific components or pages and ask targeted questions — e.g. "does this component have any accessibility issues?" or "will this colour combination pass WCAG AA contrast on this background?" AI tools work best as a first pass before running the automated tools above.

---

# Accessibility Statement

An accessibility statement page is included as part of the standard legal pages.

## How it is generated
- The content is generated with the [W3C Accessibility Statement Generator](https://www.w3.org/WAI/planning/statements/generator/#create).
- The statement aligns with WCAG 2.1 Level AA guidance.

## Dynamic firm details
- Contact details (phone, address, contact form link) are populated from the firm configuration file.

## Default feedback channels
- Public phone number
- Office address
- Website contact form (choose **General Enquiry**)

## Important
⚠️ If the firm wants to publish a public email address, add that address to the statement and confirm the preferred accessibility contact method before launch.

## Accessibility audit — do this after launch

The statement currently says the conformance status has not been formally evaluated. After launch, run a full audit and update the statement accordingly.

**How to audit:**

1. **WAVE** — go to [wave.webaim.org](https://wave.webaim.org/) and enter the live URL. It will flag errors (red), alerts (yellow), and structural issues across the page. **WAVE tests one page at a time** — you must run it separately for every page on the site. Pages to test: `/`, `/about`, `/contact`, `/services`, each individual service page, `/cookie-policy`, `/privacy`, `/accessibility`, `/disclaimer`, `/terms`, `/complaints`. Focus on clearing all **errors** (red) first — alerts (yellow) are informational and do not always indicate a real barrier.
2. **axe DevTools** — install the free Chrome/Firefox extension from [deque.com/axe](https://www.deque.com/axe/). Open DevTools → axe tab → Analyse Page. More thorough than Lighthouse for accessibility-specific issues.
3. **Keyboard navigation** — tab through every page without a mouse. Every interactive element (links, buttons, form fields) must be reachable and have a visible focus indicator.
4. **VoiceOver** — on Mac, press `Cmd + F5` to toggle. Tab through the site and check that the screen reader reads everything in a logical order and all images have meaningful alt text.

**After the audit — update the statement:**

Open `legal-compliance/accessibility/accessibility-statement_2026-01-11.md` and update the **Conformance status** section:

- If no issues found: change to `"fully conformant with WCAG 2.1 level AA"`
- If minor issues remain: change to `"partially conformant with WCAG 2.1 level AA"` and list each known issue below the status line, e.g.:
  - "Some older PDF documents linked from the site may not fully meet accessibility standards."
  - "The contact form does not yet have a visible focus indicator on the submit button."
- Update the **Date** line at the bottom with the new review date.

Then rebuild the `/accessibility` page with the updated content from the statement file.
