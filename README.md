# Nick Solicitors — Website

Astro website for Nick Solicitors.

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

The testimonials section fetches reviews from the Google Places API (New) and caches them server-side so the API is only called once per day regardless of traffic.

### What you need per client

1. **Google Cloud project** — create one per client at console.cloud.google.com (use your own Google account, not the client's). Enable the **Places API (New)**.
2. **API key** — create under APIs & Services → Credentials. Restrict it to Places API only.
3. **Place ID** — find it at developers.google.com/maps/documentation/places/web-service/place-id by searching the business name. No login required.
4. **Environment variable** — add `GOOGLE_PLACES_API_KEY` to Netlify/Vercel environment variables. Never commit it to the repo.

### Pricing
Free up to 10,000 requests/month. With 24hr caching, a typical client site uses ~30 requests/month — well within the free tier.

### Legal note — testimonials on solicitor sites

Solicitor advertising in Ireland is regulated by S.I. No. 644/2020, not the Law Society. Testimonials require written client consent under Regulation 5 before appearing on the website — including Google reviews republished on the site.

See the **Client Testimonial Consent** section below for the full consent process, record-keeping requirements, and violation risks.

---

## Legal Compliance — Cost Warning (Regulation 6, S.I. No. 644/2020)

Under Regulation 6 of the Legal Services Regulation Act 2015 (Advertising) Regulations 2020, any page that references **personal injuries or contentious business** must include a clear cost warning referencing Section 149 of the Act.

The `<LegalCostWarning />` component (`src/components/ui/LegalCostWarning/LegalCostWarning.astro`) handles this automatically. It **must** be present on the following pages:

| Page | Reason |
|---|---|
| `src/pages/services/personal-injury-litigation.astro` | Personal injuries + litigation |
| `src/pages/services/road-traffic-accidents.astro` | Motor accidents = personal injuries under Reg 4(c) |
| `src/pages/services/employment-law.astro` | Contentious employment disputes |
| `src/pages/services/debt-collection.astro` | Court proceedings / contentious business |
| `src/pages/services/family-and-childcare-law.astro` | Contested family proceedings |

**Does not apply to:** buying/selling property, wills and estate administration, leases and tenancy agreements — these are non-contentious.

Place `<LegalCostWarning />` directly after `<ServiceArticle>` and before `<ServiceProcess>` on each affected page.

**Also prohibited on all pages** (Reg 6(b)): "no win no fee", "no foal no fee", "free first consultation", or any phrase that implies the service will cost the client nothing.

---

## Legal Compliance — Client Testimonial Consent (Regulation 5, S.I. No. 644/2020)

Before featuring **any** client testimonial on the website, written consent from the client is legally required under Regulation 5 of the Legal Services Regulation Act 2015 (Advertising) Regulations 2020.

### Consent requirements

- The client must be shown **exactly** how their testimonial will appear — the precise wording, location on the site, and context — before it goes live
- Consent must specifically cover promotional use on the website
- If the testimonial mentions case details, outcomes, or results, the written consent must explicitly cover those specifics
- You cannot exaggerate your role in any case referenced

### Consent process

1. Prepare a screenshot or mockup showing exactly how the testimonial will appear on the site
2. Show this to the client and obtain written signed consent approving that specific use
3. Store the signed consent form for a minimum of 12 months — the LSRA can request it at any time
4. If the testimonial includes case specifics, the consent form must explicitly state that those details may be used for promotional purposes

### Google Business reviews

Republishing a Google review on your own website is a republication and requires consent:

- Any review that mentions case details or outcomes — **get written permission before featuring it**
- Generic reviews with no case specifics may qualify as publicly available information but written consent is still the safest approach
- The LSRA can investigate testimonial use without consent as a compliance violation

### What to record in the consent form

| Field | What to include |
|---|---|
| Client name | Full name as it will appear (or confirm anonymised) |
| Date signed | Date consent was given |
| What was approved | Exact testimonial text, where it will appear, in what context |
| Duration | How long you have permission to use it |

### Violation risk

Featuring testimonials without proper written consent can result in an LSRA investigation under Regulation 5. The burden of proof is on the solicitor to demonstrate consent was obtained.

> See also: `legal-compliance/website-content-review-checklist.md` — Regulation 5 section.

---

### Review filtering
Reviews can be excluded by author name via `googleReviews.excludeAuthors` in `src/config/firm.ts`. **When reusing for a new client, check this array is empty (`[]`) or remove it entirely** — filters set for one client should never carry over to another.

### Reusing for a new client
1. Create a new Google Cloud project for the client
2. Enable Places API (New) and generate a new API key
3. Find the client's Place ID
4. Set `GOOGLE_PLACES_API_KEY` in the new site's environment variables
5. Set the Place ID in the site config (see `src/config/firm.ts`)
6. Update `address.googleMapsProfileHref` in `src/config/firm.ts` — this is the direct Google Maps listing URL used by the "See all reviews" link. Find it by searching the firm name on Google Maps, opening their profile, and copying the URL from the browser address bar.

---

## Legal Compliance — ePrivacy & Data Protection (S.I. No. 336/2011 + GDPR)

This section covers the implementation requirements for cookie consent, contact form compliance, data security, and data retention under Irish ePrivacy law and GDPR. It is written for developers, not solicitors — the focus is on what to build, not legal theory.

**Key legal references:**
- [S.I. No. 336/2011 — Irish ePrivacy Regulations (full text)](https://www.irishstatutebook.ie/eli/2011/si/336/)
- [GDPR Articles 6 & 7 — lawful basis and consent requirements](https://gdpr-info.eu/art-6-gdpr/)
- [DPC — Guidance on Cookies and Other Tracking Technologies](https://www.dataprotection.ie/en/dpc-guidance/guidance-cookies-and-other-tracking-technologies)
- [DPC — How do I make a privacy policy?](https://www.dataprotection.ie/en/faqs/responsibilities-data-controllers/how-do-i-make-privacy-policy)

---

### 1. Cookie Consent (S.I. No. 336/2011, Regulation 5)

#### What the law requires

Regulation 5 of S.I. No. 336/2011 requires prior informed consent before setting any cookie that is not strictly necessary. Strictly necessary cookies (session management, security tokens) are exempt. Everything else — analytics, preferences, marketing — requires explicit opt-in consent before the cookie fires.

The exact statutory text (for reference and audit purposes):

> **Regulation 5(3):** "A person shall not use an electronic communications network to store information, or to gain access to information already stored in the terminal equipment of a subscriber or user, unless (a) the subscriber or user has given his or her consent to that use, and (b) the subscriber or user has been provided with clear and comprehensive information..."

> **Regulation 5(5):** "Paragraph (3) does not prevent any technical storage of, or access to, information for the sole purpose of carrying out the transmission of a communication over an electronic communications network or which is strictly necessary in order to provide an information society service explicitly requested by the subscriber or user."

Regulation 5(5) is the legal basis for strictly necessary cookies being exempt from the consent requirement. Regulation 5(3) is why everything else needs explicit opt-in before it fires.

Irish-specific rule: **consent expires after 6 months** and must be re-prompted. This is the shortest consent validity period in the EU.

#### What counts as valid consent (GDPR Article 7)
- A clear affirmative action (ticking a box, clicking "Accept") — not inferred from scrolling or continued browsing
- Granular — users must be able to accept analytics without accepting marketing
- As easy to decline as to accept — the reject button must be equally prominent
- Freely given — no cookie walls forcing acceptance to access the site
- Withdrawable at any time

#### Cookiebot setup — step by step

Cookiebot is the recommended tool. It auto-scans the site, categorises cookies, generates the cookie policy page content, handles the 6-month renewal, and produces a compliant banner. Free for sites under 100 pages.

**Step 1 — Create a Cookiebot account**
Sign up at [cookiebot.com](https://www.cookiebot.com). Add the site's domain. Cookiebot will scan it and list all cookies detected.

Configure the account with these settings — each one is required for Irish legal compliance:

| Setting | Value | Reason |
|---|---|---|
| Consent method | Explicit consent | Required by S.I. No. 336/2011 Reg 5(3) — implied consent is not valid |
| Button layout | Reject all / Selection / Allow all | DPC equal prominence requirement — reject must be as easy as accept |
| Geographic scope | EU and EEA | Applies Irish/EU law to all visitors |
| Implementation | Manual (auto-blocking enabled) | Auto-blocking prevents non-essential scripts firing before consent without needing to tag each script individually |

**Production domain switch:** Cookiebot is initially configured on a test domain during development. Before client launch, update the domain in the Cookiebot dashboard to the live production domain. The CBID in `BaseLayout.astro` stays the same — only the domain setting in the dashboard changes.

**Step 2 — Add the consent script to `BaseLayout.astro`**

This must be the **first script in `<head>`** — before any analytics or other scripts. Cookiebot's auto-blocking mode will prevent other scripts from firing until consent is given.

```astro
<head>
  <script
    is:inline
    id="Cookiebot"
    src="https://consent.cookiebot.com/uc.js"
    data-cbid="YOUR-COOKIEBOT-ID"
    data-blockingmode="auto"
    type="text/javascript"
  ></script>
  <!-- all other head content below -->
```

Replace `YOUR-COOKIEBOT-ID` with the CBID from your Cookiebot dashboard. The `data-blockingmode="auto"` attribute tells Cookiebot to automatically block non-essential scripts until the user consents — no manual tagging of individual scripts needed.

**Step 3 — Add the cookie declaration to `/cookie-policy`**

The cookie declaration is a live auto-updating table of all cookies on the site. Embed it on the cookie policy page:

```astro
<script
  is:inline
  id="CookieDeclaration"
  src="https://consent.cookiebot.com/YOUR-COOKIEBOT-ID/cd.js"
  type="text/javascript"
  async
></script>
```

**Step 4 — Add a "Manage preferences" button**

Users must be able to withdraw or change consent at any time. Add this button to the cookie policy page (and optionally the footer):

```html
<button type="button" onclick="Cookiebot.renew()">
  Manage cookie preferences
</button>
```

**Step 5 — Configure consent categories in the Cookiebot dashboard**

In the Cookiebot dashboard, review the auto-detected cookies and assign each to the correct category:
- **Necessary** — session cookies, CSRF tokens, Cookiebot's own consent cookie
- **Preferences** — cookies that remember user choices
- **Statistics** — Google Analytics, any analytics tool
- **Marketing** — advertising pixels, retargeting

**Step 6 — Test before launch**

- Clear cookies and visit the site — the banner should appear immediately
- Click "Decline" — verify no analytics or marketing cookies are set
- Click "Accept all" — verify analytics fires
- Return to the site — banner should not appear again until 6 months have passed
- Visit `/cookie-policy` — verify the declaration table renders correctly

#### Strictly necessary cookies — no consent required

These cookies are exempt from the consent requirement under Regulation 5(5) of S.I. No. 336/2011:

| Cookie | Purpose |
|---|---|
| Session/auth cookies | Keeping users logged in (not applicable to this site — no login) |
| CSRF tokens | Form security (the contact form uses these) |
| Cookie consent record | Cookiebot's own consent record cookie (`CookieConsent`) |
| Load balancer cookies | Routing requests to the correct server |

---

### 2. Contact Form & Email Compliance (S.I. No. 336/2011, Regulation 13)

#### What the law requires

Regulation 13 prohibits sending unsolicited electronic communications for direct marketing without prior consent. For a solicitor's contact form, this applies if the form is used to send any follow-up marketing material beyond responding to the specific enquiry.

**Responding to a contact form submission is not marketing** — it is fulfilling the purpose for which the data was given. No additional consent is needed to reply to an enquiry.

**Sending a newsletter or follow-up promotional email requires separate explicit consent.**

#### Contact form — what to include

The contact form at `src/features/contact-form/` currently collects name, phone, email, service type, and message. No changes are needed for basic enquiry handling. If a newsletter or mailing list is ever added:

1. Add a clearly labelled **opt-in checkbox** — unchecked by default
2. The checkbox label must specify exactly what the person is signing up for
3. Store a record of when and how consent was given
4. Every marketing email must include an unsubscribe link

**Example opt-in checkbox (if a newsletter is ever added):**

```html
<label>
  <input type="checkbox" name="marketing-consent" value="yes" />
  I would like to receive occasional updates and legal news from
  Mary Molloy Solicitor by email. I can unsubscribe at any time.
</label>
```

Do not pre-check this box. Do not bundle marketing consent with the enquiry submission.

#### Current contact form — no marketing consent needed

The current form sends a one-time enquiry. The legal basis for processing the submitted data is **legitimate interests** (GDPR Article 6(1)(f)) — responding to an enquiry the person initiated. No consent checkbox is required for the enquiry itself.

The Privacy Policy must state this lawful basis and the data retention period for enquiry data (see section 4 below).

---

### 3. Data Security (S.I. No. 336/2011, Regulation 4 + GDPR Article 32)

#### What the law requires

Regulation 4 requires providers to take appropriate technical and organisational measures to safeguard the security of their services. GDPR Article 32 requires appropriate security measures relative to the risk. For a solicitor's website, the relevant risks are: interception of contact form data, unauthorised access to form submissions, and exposure of client enquiry details.

#### Security checklist — hosting & deployment

- [ ] **HTTPS enforced** — Vercel/Netlify provide this automatically. Verify HSTS is set in response headers (see the Security Headers section of this README)
- [ ] **Environment variables** — `RESEND_API_KEY` and `GOOGLE_PLACES_API_KEY` must be set in the hosting platform, never committed to the repository
- [ ] **Contact form validation** — all fields are validated server-side via Zod before the email is sent (already implemented in `src/features/contact-form/`)
- [ ] **Honeypot field** — the contact form includes a hidden honeypot field to block basic spam bots (already implemented)
- [ ] **No client data in logs** — verify that form submission content (names, email addresses, enquiry details) is not written to server logs or error tracking services
- [ ] **Resend — email in transit** — Resend transmits emails over TLS. Verify the `FROM` and `TO` addresses in `src/features/contact-form/service/deliverContact.ts` use the firm's own domain once verified
- [ ] **Dependencies audited** — run `npm audit` before launch and resolve any high/critical vulnerabilities
- [ ] **Security headers** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP, HSTS (see Security Headers section)

#### Resend — what data leaves the server

When the contact form is submitted, the following data is sent to Resend's API to deliver the email: the submitter's name, email address, phone number, and message. Resend is a US-based processor. This transfer is covered under the EU–US Data Privacy Framework (Resend participates in this framework). The Privacy Policy must disclose Resend as a data processor and acknowledge the US transfer.

---

### 4. Data Retention (S.I. No. 336/2011, Regulation 6 + GDPR Article 5(1)(e))

#### What the law requires

GDPR Article 5(1)(e) requires that personal data is kept no longer than necessary for the purpose it was collected. There is no single fixed retention period — it depends on the purpose. The Privacy Policy must state the retention period (or the criteria used to determine it) for each category of data.

#### Retention periods for this site

| Data type | Where held | Retention period | Reason |
|---|---|---|---|
| Contact form submissions | Resend delivery logs | 30 days (Resend default) | Delivery confirmation only — the email is delivered to the firm's inbox, which is the record |
| Contact form submissions | Firm's email inbox | At the firm's discretion — recommend 1 year if no matter opened, 7 years if a matter is opened | Standard file retention for solicitors |
| Google Analytics data | Google (if enabled) | 14 months maximum (configure in GA4 settings) | GA4 default is 14 months; reduce to 2 months if only session data is needed |
| Cookie consent records | Cookiebot | 12 months | Cookiebot stores proof of consent for audit purposes |
| AML identity verification | Firm's files | 5 years minimum from end of business relationship | Criminal Justice (Money Laundering and Terrorist Financing) Acts 2010–2021 |

#### Configuring GA4 data retention

In Google Analytics 4, go to **Admin → Data Settings → Data Retention** and set the user and event data retention to **14 months** (the minimum available). This must be done before the site goes live if GA4 is used.

#### Analytics anonymisation

If using Google Analytics, enable IP anonymisation. In GA4 this is on by default. For any other analytics tool, verify that IP addresses are anonymised before data leaves the user's browser — this reduces the privacy risk and the sensitivity of the data being collected.

#### Form data lifecycle

```
User submits form
       ↓
Server-side Zod validation (no data stored at this point)
       ↓
Resend API call → email delivered to firm inbox
       ↓
Resend log retained 30 days (delivery record only)
       ↓
Firm inbox — retained per firm's email retention policy
       ↓
If matter opened → retained on client file (7 years recommended)
If no matter opened → delete after 12 months
```

The Privacy Policy must document this lifecycle in plain English for data subjects.

**This project is already compliant with Regulation 6 by design.** The contact form at `src/features/contact-form/service/deliverContact.ts` sends the submission directly through Resend and discards it — there is no database, no server-side log, and no persistent storage of form data. Once Resend delivers the email to the firm's inbox, the only remaining copy is in that inbox, which is the firm's responsibility to manage. Resend's own delivery logs are deleted automatically after 30 days. No developer action is required to achieve data retention compliance for the contact form.

---

### 5. Privacy Policy — required elements checklist

The Privacy Policy at `/privacy` must cover the following. These map directly to GDPR Articles 13 & 14 and the DPC's guidance for Irish SMEs.

- [ ] Identity and contact details of the data controller (the solicitor's name, address)
- [ ] Lawful basis for processing each category of data (enquiries = legitimate interests; AML checks = legal obligation)
- [ ] What data is collected (name, email, phone, enquiry content; analytics data if applicable)
- [ ] Who data is shared with (Resend for email delivery; Google if GA4 is used)
- [ ] International transfers and safeguards (Resend = US transfer covered by EU–US DPF)
- [ ] Retention periods for each data category (see table above)
- [ ] All data subject rights (access, rectification, erasure, portability, objection, restriction)
- [ ] Right to withdraw consent (for any consent-based processing)
- [ ] Right to complain to the DPC ([dataprotection.ie](https://www.dataprotection.ie))
- [ ] AML retention notice — right to erasure does not apply during the 5-year AML retention period
- [ ] Legal professional privilege notice — access requests may be refused for privileged material
- [ ] No automated decision-making statement (if true — state it explicitly)

**DPC template:** [GDPR Checklist & Templates for SMEs (Word)](https://www.dataprotection.ie/sites/default/files/uploads/2019-04/GDPR-Checklist-Templates-for-SMEs-Downloadable-1.docx) — the most authoritative free starting point for an Irish firm.

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
1. Copy `legal-compliance/website-content-review-checklist.md` into the launch folder
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

> Full compliance guidance: `legal-compliance/website-content-review-checklist.md`

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

## TODO — Before Launch

> When the project is finished, delete `TODO.md` from the root.
> When the project is finished, delete `Markdown/things-i-learned/` — these are personal learning notes for during development only.



- [ ] **Delete `src/sections/`** — this folder was used for the mock/placeholder layout only and will likely not be needed once the real homepage is built.

- [ ] **Solicitor credentials** — the attribution card on the About page (and any future service pages) displays each solicitor's degree, university, year of admission, and specialism for Google E-E-A-T. The following are still placeholders in `src/config/team.ts` and need to be confirmed with Mary:
  - University name (for Mary, Nicholas, and Richard)
  - Year admitted to the Roll of Solicitors (for Mary, Nicholas, and Richard)
  Once confirmed, update the `university` and `admissionYear` fields for each solicitor in `src/config/team.ts`.

- [ ] **Firm email address** — replace the placeholder `email` value in `src/config/firm.ts` with the real firm email address.
- [ ] **Favicon colour** — confirm the favicon colour matches the final brand accent before launch. The SVG is at `public/images/favicon/favicon.svg`. The `fill` value should match `--accent-500` in `src/styles/tokens.css`. Currently set to `hsl(20 70% 46%)` (copper).

- [ ] **OG images** — create and add a default Open Graph image. Currently using placeholder/default values. The default image is set in `firm.seo.defaultOgImage` (`src/config/firm.ts`) and should be placed in `public/images/open-graph/`. A single good default image is fine for all pages — per-page OG images are optional and can be passed via the `ogImage` and `ogImageAlt` props on `BaseLayout` if you ever want a specific image for a particular page (e.g. a services page).

---

## Going Live — Cookie Consent & Tracking Setup

The site will need cookie consent management for GDPR compliance if running Google or Facebook ads.

### What you need

Two tools working together:

- **Google Tag Manager (GTM)** — fires tracking scripts (Google Analytics, Facebook Pixel etc.). Free, no limits.
- **Cookiebot** — shows the consent banner, stores whether the user consented. Free up to 100 pages (more than enough for this site).

They work as a pair: Cookiebot captures consent, GTM only fires tags when Cookiebot confirms the user has agreed. You cannot use one without the other — GTM alone would fire tracking immediately (GDPR violation), Cookiebot alone has nothing to manage.

### Cookies this site will likely need consent for

- `_ga`, `_gid`, `_gcl_au` — Google Analytics / Google Ads
- `_fbp`, `_fbc` — Facebook Pixel
- Session/functional cookies — these are usually exempt from consent

### Account ownership — Cookiebot

**Each client must own their own Cookiebot account.** Cookiebot's free plan covers 1 domain. If you are building sites for multiple clients, you cannot use your own Cookiebot account — each client needs theirs.

**Handover process for this project:**

1. Ask Mary to sign up for a free account at [cookiebot.com](https://www.cookiebot.com) using her own email address
2. She adds her live domain (e.g. `marymolloy.ie`) to her account
3. She runs the domain scan — Cookiebot will detect all cookies on the site
4. She sends you the new `data-cbid` value from her dashboard
5. You update the one line in `BaseLayout.astro`:
   ```astro
   data-cbid="PASTE-NEW-CBID-HERE"
   ```
6. Commit and push — done. The banner will now report to her account.

**As a developer running multiple client sites:** use your own Cookiebot account during development only, then hand over to the client before launch. Do not leave a development CBID live in production — the consent records will be in your account, not theirs.

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
   - Enter the domain the site will be hosted on (e.g. `nicksolicitors.ie`)

3. **Add the DNS records**
   - Resend will show you a set of DNS records (MX, TXT, DKIM)
   - Add these in your domain registrar (e.g. Cloudflare, GoDaddy, Namecheap)
   - Click **Verify** in Resend once they're added — DNS can take up to 24 hours to propagate but is usually much faster

4. **Update `deliverContact.ts`**

   Open `src/features/contact-form/service/deliverContact.ts` and update these two lines:

   ```ts
   const FROM = "contact@nicksolicitors.ie"; // must use your verified domain
   const TO = "nick@nicksolicitors.ie";       // the solicitor's actual email
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
