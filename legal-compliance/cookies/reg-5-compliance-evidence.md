# Regulation 5(3) Compliance Evidence — Cookie Consent

_Maps each requirement of Regulation 5(3) of S.I. No. 336/2011 (the Irish ePrivacy Regulations) to how this site satisfies it, and how to verify each point yourself._

**Source law:** [S.I. No. 336/2011 — Irish ePrivacy Regulations](https://www.irishstatutebook.ie/eli/2011/si/336/)
**Regulator guidance:** `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`
**Detailed compliance walkthrough:** `legal-compliance/cookies/dpc-guidance-walkthrough.md`

---

## The full text of Regulation 5(3)

> **Regulation 5(3):** "A person shall not use an electronic communications network to store information, or to gain access to information already stored in the terminal equipment of a subscriber or user, unless
>
> (a) the subscriber or user has given his or her consent to that use, and
>
> (b) the subscriber or user has been provided with clear and comprehensive information in accordance with the Data Protection Acts which—
>
>   (i) is both prominently displayed and easily accessible, and
>
>   (ii) includes, without limitation, the purposes of the processing of the information."

## In plain English

You cannot set a cookie, or read a cookie already set, on a visitor's device **unless both of these are true**:

1. **(a)** They have **consented**.
2. **(b)** They have been **clearly informed**, in an obvious way, **including why** you are processing their data.

Everything below is the breakdown of each element of the rule, and how this site meets it.

---

## Requirement-by-requirement breakdown

### Element 1 — "A person shall not … store information … or … gain access to information already stored"

**What the law means:**
This covers setting a new cookie on a visitor's browser, **and** reading a cookie that's already there. Both actions are regulated.

**What this site does:**
The site uses cookies for three purposes:
- **Strictly necessary** — session management, Cookiebot's own consent record, the `intro-seen` sessionStorage flag. These fire without consent (exempt under Reg 5(5) — see below).
- **Analytics** — only if the visitor opts in via the Cookiebot banner.
- **Preferences / marketing** — not currently used, but Cookiebot is configured to require consent for these if ever added.

**How this is implemented:**
The Cookiebot script is loaded in `src/layouts/BaseLayout.astro` with `data-blockingmode="auto"`. In auto-blocking mode, Cookiebot intercepts any third-party script tag that would set a non-essential cookie and prevents it from executing until the visitor consents.

```html
<script
  is:inline
  id="Cookiebot"
  src="https://consent.cookiebot.com/uc.js"
  data-cbid="292ce5a8-ad47-4072-bf60-aebbe085521d"
  data-blockingmode="auto"
  type="text/javascript"></script>
```

**How to verify yourself:**
1. Open the site in a **fresh incognito window** (so no prior consent state exists).
2. Open DevTools → Application tab → Cookies → select the site's domain.
3. Confirm that **only strictly-necessary cookies** are listed before you click anything on the banner. Expected names: `CookieConsent` (Cookiebot's own), plus any session token — nothing from analytics or marketing providers.
4. Click Deny on the banner. Reload the page. Confirm no analytics cookies appeared.
5. Click Allow all. Reload. Confirm analytics cookies now appear (once GA4 or similar is enabled).

---

### Element 2(a) — "the subscriber or user has given his or her consent to that use"

**What the law means:**
Consent must be a **clear affirmative action** — a click on "Allow all" or a toggle actively switched on. The DPC guidance (p.9–10) is explicit that the following do **not** count as consent:

- Continuing to scroll the page
- Closing or dismissing the banner without clicking a choice
- Pre-checked boxes or sliders set to ON by default
- Inferring consent from browser settings

Consent must also be **as easy to withdraw as to give** (Reg 5(3)(a) read with GDPR Article 7(3)).

**What this site does:**
The Cookiebot banner presents **two equal buttons** as the primary consent choice:

- **Deny** — rejects all non-essential cookies
- **Allow all** — accepts all categories

Both buttons are visually identical: same size, same border, same font weight, same position — satisfying the DPC's equal-prominence requirement. The granular per-category selector lives in the "Details" tab at the top of the dialog, accessible with one click for users who want finer control without cluttering the primary decision.

All non-essential category toggles (Preferences, Statistics, Marketing) default to OFF — the user must actively toggle them on. The "Necessary" category is always on and cannot be disabled, which is correct because those cookies are exempt under Reg 5(5).

Consent can be withdrawn at any time via the Cookie Declaration embedded on `/cookie-policy` — this gives the user a full list of cookies currently allowed and toggles to revoke each category.

**Consent type is set to "Explicit"** in Cookiebot admin. Implicit consent (treating scroll or dismissal as agreement) is not permitted under Reg 5 and has been explicitly disabled.

**How to verify yourself:**
1. Open the banner in a fresh incognito window. Confirm the Deny and Allow all buttons are visually identical.
2. Open the "Details" tab. Confirm that Preferences, Statistics, and Marketing are all unchecked by default.
3. Click "Deny". Reload. Confirm no analytics cookies are set.
4. Visit `/cookie-policy`. Confirm a category-level toggle UI is visible that lets you revoke consent for any category you previously allowed.
5. Revoke a category, reload the site, confirm those cookies are cleared and do not return.

**Prior compliance gap — now resolved:**

An earlier version of this site shipped a custom stylesheet (`src/styles/cookiebot.css`) that restyled the Deny button as a muted underlined text link while Accept was a solid amber button. This created an unequal-prominence pattern that would have breached the DPC equal-prominence requirement.

The stylesheet was removed in commit `fec7dd0` (April 2026). The banner now uses Cookiebot's default two-equal-button styling, which is compliant out of the box. The Cookiebot admin dashboard is now the single source of truth for banner appearance — no CSS overrides fight against admin settings.

---

### Element 2(b) — "provided with clear and comprehensive information"

**What the law means:**
The user must be told what cookies the site uses and what they do. The information must be written plainly — not buried in legal jargon — and accessible before consent is given.

**What this site does:**
Two layers of information, following the DPC's recommended layered architecture:

- **Layer 1 — the banner itself.** Contains a short plain-language description of cookie usage, visible above the Deny / Allow all buttons. A "Details" tab on the same dialog surfaces a per-category breakdown of what each cookie category does. An "About" tab provides background on what cookies are and how to manage them.
- **Layer 2 — `/cookie-policy`.** A full page with an auto-populated Cookie Declaration (via Cookiebot's `cd.js` script) listing every cookie currently in use, its purpose, its provider, and its expiry.

The Cookie Declaration script is embedded at `src/pages/cookie-policy.astro` line 25 and is automatically updated by Cookiebot every time the domain is re-scanned, so the list stays in sync with reality.

**Known follow-up — banner copy accuracy:**

The banner currently displays Cookiebot's default template text referencing "personalised content and ads", "social media features", and "advertising partners" — content that is not accurate for this site (it does not run ads, does not embed social media features, and does not share data with advertising partners). Under the DPC's "clear and comprehensive" test (guidance p.10), generic copy that overstates the scope of processing is itself a transparency issue.

**Action:** update the banner copy in Cookiebot admin → *Dialog texts* to reflect the actual processing on this site. Proposed honest replacement is tracked separately — see TODO list.

**How to verify yourself:**
1. Read the text on the banner itself. Confirm it accurately describes cookie use on this specific site (not a generic template).
2. Click the "Details" tab on the banner. Confirm per-category descriptions are visible.
3. Visit `/cookie-policy`. Confirm a table appears listing each cookie, with columns for Name, Provider, Purpose, and Expiry.
4. Confirm the information is in English and uses non-technical language where possible.

---

### Element 2(b)(i) — "prominently displayed and easily accessible"

**What the law means:**
The information cannot be hidden three pages deep or in fine-print. It must be visible at the point of consent.

**What this site does:**
The banner appears as a prominent modal dialog when the user first visits. The banner cannot be ignored — the user must engage with it to dismiss it, and dismissal without an explicit choice is not treated as consent (explicit consent mode is enabled in Cookiebot admin).

A persistent link to the cookie policy also lives in the site footer, so visitors can review or change consent at any time after the initial visit.

**Intro animation interaction — verified compliant:**

The banner is intentionally delayed from appearing until after the site's intro animation completes (the `html.intro-done` class is set by `intro.anim.ts`). This is a UX decision to avoid the banner colliding with the entrance animation.

**Why this is still compliant:** Cookiebot's `data-blockingmode="auto"` blocks all non-essential cookies from firing during the delay window. No cookies are set before the user has had the opportunity to consent. The prominence requirement under Reg 5(3)(b)(i) is about visibility at the point of consent — not about appearing in the first millisecond after page load.

**How to verify yourself:**
1. Load the site in a fresh incognito window. Time how long it takes the banner to appear (should be no more than a few seconds after the intro completes).
2. Confirm the banner is visually dominant when it appears — not hidden in a corner or behind other elements.
3. After clicking any choice, scroll to the footer. Confirm a visible link to `/cookie-policy` is present, allowing the user to revisit their decision.
4. During the intro animation (before `html.intro-done` is set), open DevTools → Application → Cookies. Confirm that only strictly-necessary cookies appear — no analytics, preferences, or marketing cookies should be present before the user clicks a consent choice.

---

### Element 2(b)(ii) — "includes … the purposes of the processing of the information"

**What the law means:**
You have to tell users **why** each cookie exists — not just list its name. "Analytics" is acceptable category-level language, but the policy should describe what the analytics are used for (measuring traffic, identifying popular pages, etc.).

**What this site does:**
The Cookie Declaration on `/cookie-policy` — generated by Cookiebot's `cd.js` — includes a "Purpose" column for every cookie, populated from Cookiebot's own scan of the domain. The declaration categorises cookies into Necessary, Preferences, Statistics, and Marketing, with each category having its own purpose description at the top of its table.

The "Details" tab inside the banner itself also shows each category with a plain-English description of what cookies in that category do, so users can see purpose information before clicking Deny or Allow all.

**How to verify yourself:**
1. Visit `/cookie-policy`.
2. Confirm each cookie listed has a stated purpose — not just a name.
3. Confirm each **category** (Necessary, Statistics, etc.) has a description explaining what kind of processing those cookies perform.
4. On the banner itself, click "Details" and confirm the same category-level purpose information is visible before the consent choice is made.

---

## Also satisfying Reg 5(4) — 6-month consent re-prompt

**What the law means:**
The DPC guidance (p.8–9) states that consent should not be stored indefinitely. The DPC's stated default outer limit is **6 months** — after that, the user should be re-prompted. This is shorter than many other EU jurisdictions.

**What this site does:**
Cookiebot stores the user's consent record in a cookie called `CookieConsent`. The expiry of this cookie determines when the user is re-prompted.

**How to verify yourself:**
1. Log into the Cookiebot admin console (Mary's account).
2. Navigate to **Settings → Your consent solution → Consent expiry**.
3. Confirm the expiry is set to **6 months** (the default may be 12 months in some regions — change if so).
4. After changing, visit the site in a fresh incognito window, accept cookies, and inspect the `CookieConsent` cookie in DevTools. Its "Expires" timestamp should be ~180 days from today.

---

## Exemption — Reg 5(5) "strictly necessary"

**What the law means:**
Cookies whose sole purpose is (a) carrying out a communication over the network, or (b) strictly necessary to deliver a service the user explicitly requested, are **exempt from the consent requirement** entirely.

**What this site relies on this for:**
- **`CookieConsent`** — the cookie that records the user's consent choice. Cannot obtain consent to store a consent cookie, so this is exempt.
- **Session tokens** — if any are used by the contact form for CSRF protection or similar.
- **`intro-seen` sessionStorage** — flags whether the intro has played so it doesn't replay on every navigation. This is arguably "strictly necessary to deliver a service explicitly requested" — the user has implicitly asked to see the site, not to watch the intro every time.

**How to verify yourself:**
Visit `/cookie-policy`. Under the "Necessary" category, confirm each listed cookie genuinely falls into one of the two exemption categories. If anything analytics-flavoured is listed as Necessary, that is a classification error — re-categorise it in Cookiebot's admin under **Cookies → Reclassify**.

---

## Admin-side settings — confirmed state

The following Cookiebot admin settings were verified during the April 2026 review:

| Setting | Value | Why |
|---|---|---|
| Consent type | **Explicit** | Implicit consent is not permitted under Reg 5 (DPC guidance p.9). |
| Show to | **All visitors** | Irish law applies regardless of visitor location; geolocation is unreliable and risks leaving Irish/UK visitors unprotected. |
| Buttons template | **Two equal buttons (Deny / Allow all)** | Satisfies the DPC equal-prominence requirement (guidance p.9). |
| Default checkbox state | **All unchecked** (Preferences, Statistics, Marketing) | Pre-checked boxes do not constitute valid consent (Planet49 CJEU ruling, DPC guidance p.10). |
| Page scroll = consent | **Disabled** | Scrolling does not constitute consent (DPC guidance p.9). |
| Page refresh = consent | **Disabled** | Refreshing does not constitute consent (same source). |
| Display close icon on banner | **Disabled** | Close icons on cookie banners are considered dark patterns — users interpret X as "dismiss" not "consent", creating ambiguity. |

---

## Pre-launch checklist — the three checks that matter

If all three pass, the site satisfies the operative part of Reg 5(3):

- [ ] **Check 1 — No non-essential cookies before consent.** Fresh incognito → DevTools → Application → Cookies. Only `CookieConsent` + session tokens should appear before any click.
- [x] **Check 2 — Deny button has equal visual prominence to Allow all.** Resolved by removing custom CSS and using Cookiebot's default two-equal-button layout (commit `fec7dd0`, April 2026).
- [ ] **Check 3 — Consent expires after 6 months.** Cookiebot admin → Settings → Consent expiry = 6 months.

If any of these three fails, Reg 5(3) is not satisfied and the site should not be considered compliant.

---

## Remaining TODO for full compliance

- [ ] Update banner copy in Cookiebot admin → *Dialog texts* to accurately describe this site's actual processing (no ads, no social media features, no advertising partner sharing). Generic default copy overstates scope of processing and is a minor transparency issue under Reg 5(3)(b).
- [ ] Verify Cookiebot consent expiry is set to 6 months (not 12). Check Cookiebot admin → Settings → Consent expiry.
- [ ] Re-scan the production domain once it goes live (currently scanning the Netlify preview `splendorous-tiramisu-3c7f26.netlify.app`). The Cookie Declaration needs to reflect cookies on the live `.ie` domain.

---

## What this document is not

This is a developer-written mapping of code to statute. It is **not** legal advice and does not substitute for review by a qualified data protection solicitor or DPO. The DPC is the statutory authority and can take enforcement action regardless of the good-faith analysis in this document. For the canonical interpretation of Reg 5(3), read the DPC guidance note directly at `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`.

_Last reviewed: April 2026. Re-verify before launch and again annually._
