# Cookie Banner Copy — Reusable Playbook

_The reusable template for writing compliant Cookiebot banner copy on any solicitor, barrister, or professional-services site. Capability-based by default — write once, no maintenance as tools are added or removed._

---

## The governing principle

**Describe each consent category by what it is capable of doing, not by what specific tools are active today.**

The DPC's "clear and comprehensive information" test (Reg 5(3)(b), guidance note April 2020 p.10) requires the user to understand **what they are consenting to** before they click. That means the purposes of each category must be plain. It does *not* require every third-party platform to be named in the banner itself — specific platform names are satisfied by the Cookie Declaration on `/cookie-policy`, which Cookiebot populates automatically from its domain scan.

This matters because sites change. A solicitor site that launches with no ads may add Google Ads retargeting six months later, drop it a year after that, add a Meta pixel for a conference campaign, then remove it again. If the banner copy names specific platforms, it has to be rewritten every time those tools toggle — and any missed update is a transparency breach.

**Capability-based wording avoids this entirely.** The banner describes what the category *can do*; the consent mechanism itself gates whether anything fires; the Cookie Declaration on `/cookie-policy` carries the specific, always-current list of which cookies are actually present.

---

## Two strategies — pick one per client

### Strategy A — Capability-based (recommended default)

Describe each category by its general purpose and capability. Do not name specific platforms in the banner. The Cookie Declaration (`/cookie-policy`) lists every actual cookie with its provider.

**Pros:** write once, no maintenance burden. Works across add/remove cycles for analytics and advertising tools without any copy changes. One banner copy per client, forever.
**Cons:** slightly less specific than naming platforms. Users who want the detail have to open the Cookie Declaration.
**Compliance:** satisfies Reg 5(3)(b) because purposes are disclosed. The specific-platforms expectation is carried by the Cookie Declaration, not the banner.
**Best for:** most clients. Especially clients who run intermittent ad campaigns or change analytics tools.

### Strategy B — State-specific (only if the client has strong reasons)

Tailor the copy to the current state — name specific platforms, include negative disclosures like "we do not run ads." Rewrite whenever state changes.

**Pros:** maximally specific on any given day. Stronger transparency story for the most conservative audit.
**Cons:** every change to the site's tool stack requires a copy update, a compliance screenshot, and admin work. Miss an update and the banner is materially inaccurate.
**Compliance:** equally compliant — just more specific. The cost is operational, not legal.
**Best for:** clients with a stable, long-term tool stack who are unlikely to add or remove analytics/ad platforms for years at a time.

**Default to Strategy A unless the client has a specific reason to pick Strategy B.** The rest of this playbook uses Strategy A. Strategy B wording is kept at the end of each section as an alternative.

---

## The decision checklist — fill this in for every new client site

Before writing banner copy for a new client, answer these questions. With capability-based wording most answers only drive the Cookie Declaration content (which Cookiebot generates from its scan), not the banner copy itself.

### Site inventory

1. **Run a fresh Cookiebot scan on the production domain.** This populates the Cookie Declaration automatically. No banner edits needed for the declaration — it self-updates as you add or remove tools and re-scan.
2. **Which categories can the site use?** For a capability-based banner, each category either applies or doesn't. Use this simpler test: *"could this category ever apply to this site?"*
   - Necessary — always applies.
   - Statistics — applies if analytics is or might be enabled.
   - Preferences — applies only if the site offers persistent user preferences (dark mode, language, saved filters).
   - Marketing — applies if the site runs or might run advertising, retargeting, or social-media trackers.
3. **Categories that will never apply** can be marked "not used" in the banner introduction for that category — Cookiebot still shows the category label but the text tells the user nothing will be set regardless of their choice.

### Client jurisdiction

4. **Where is the client operating from?**
   - Ireland → primary law is S.I. No. 336/2011 + GDPR
   - UK → PECR + UK GDPR
   - Multi-jurisdictional → name the primary jurisdiction but acknowledge others

5. **What regulated profession (if any)?**
   - Solicitor → LSRA advertising regulations apply alongside DPC rules
   - Barrister → Bar of Ireland Code of Conduct applies
   - Medical practice → Medical Council guidelines
   - Unregulated business → DPC rules only

---

## Field-by-field template (Strategy A — capability-based)

Below are the exact Cookiebot admin fields, with a template for each. Bracketed placeholders `[LIKE_THIS]` indicate content that must be tailored per client. Everything else is a stable copy that does not need to be rewritten when tools change.

### Dialog heading

```
Cookies on this website
```

**Why:** Neutral and factual. Doesn't pre-frame the decision. Works for any site.

---

### Dialog body text (Strategy A — capability-based)

```
We use cookies to keep this website working, to understand how visitors use it, and — if you agree — to support marketing or advertising. You are in control: you can accept all cookies, deny non-essential cookies, or view details to decide category by category. You can change or withdraw your consent at any time from the Cookie Declaration linked in the footer.
```

**Why this approach:**
- **"To keep this website working"** covers strictly-necessary cookies.
- **"To understand how visitors use it"** covers statistics if enabled.
- **"If you agree, to support marketing or advertising"** covers the marketing category conditionally. If marketing is never enabled, no marketing cookies fire — the user's choice and Cookiebot's auto-blocking handle that.
- **"You are in control"** signals agency and makes the three options feel empowering rather than bureaucratic.
- **Three options named** — matches the button layout.
- **Withdrawal statement** — satisfies Reg 5(3)(a) read with GDPR Article 7(3).

**Key property:** this copy needs no editing when the site adds or removes advertising, analytics, or marketing tools. The Cookie Declaration carries the specifics.

**Strategy B alternative (state-specific, requires updating on tool changes):**

```
We use a small number of cookies to keep this website working and, if you agree, to help us understand how visitors use it. We do not share your information with advertising companies or run ads on this site.

You can accept all cookies, deny non-essential cookies, or view details to decide category by category. You can change or withdraw your consent at any time from the Cookie Declaration linked in the footer.
```

Use Strategy B only if the client explicitly wants the negative disclosure and commits to updating the copy when things change.

---

### Button text fields

| Field | Value | Notes |
|---|---|---|
| **Decline button text** | `Deny` | Short, unambiguous. Do not use "Reject" (adversarial) or "Close" (ambiguous). |
| **Accept button text** | `Allow all` | Matches the compliant two-equal-button layout. |
| **Text in [OK] button** | `OK` | Not used in two-button layout but keep default. |
| **Text in [Allow all] button** | `Allow all` | Redundant but Cookiebot uses this field in some layouts. |
| **Text in [Allow selection] button** | `Allow selection` | Used if the client switches to a three-button layout. |
| **Text in [Show details] button** | `Show details` | Default is fine. |
| **Text in [Hide details] button** | `Hide details` | Default is fine. |
| **Text in [Customize] button** | `Customise` | Change to Irish/British spelling. |

---

### General cookie introduction (shown on the "About" tab of the banner)

```
Cookies are small text files saved to your device by websites you visit. They can make a site work properly, remember your choices, or help the site owner understand how the site is being used.

Irish law (S.I. No. 336/2011 — the ePrivacy Regulations — and the General Data Protection Regulation) requires us to get your consent before setting any cookie that is not strictly necessary to run this site.

This website is operated from [CITY, COUNTRY, e.g. "Kilkenny, Ireland"]. The sections below describe each category of cookie this site may use. The Cookie Declaration at the bottom of this page lists every specific cookie currently set on this site — that declaration is kept up to date automatically, so it always reflects what is really being set.

You can change or withdraw your consent at any time from the Cookie Declaration at the bottom of this page.

To learn how we handle your personal data more broadly, see our Privacy Policy.
```

**Why:**
- **Explicit reference to Irish law by name** — demonstrates jurisdictional awareness. Swap for UK PECR if the client is UK-based.
- **"Operated from [City, Country]"** — establishes governing law. Critical for regulated professions.
- **"The Cookie Declaration … is kept up to date automatically"** — points the user to the always-current source rather than relying on the banner copy being current.

---

### Necessary cookies introduction

```
Necessary cookies are required to make the website work properly. They record your cookie consent choice, support secure page loading and form submissions, and in some cases remember one-time dismissals of introductory elements so they do not replay on every page. These cookies do not track you and are exempt from the consent requirement under Regulation 5(5) of S.I. No. 336/2011.
```

**Why:**
- Describes the purpose generically — works whether the site has an intro animation, a contact form, or neither.
- Cites the statute (Reg 5(5)) so the exemption is visibly grounded.
- "Do not track you" — separates them cleanly from analytics and marketing.

---

### Statistics cookies introduction

```
Statistics cookies help us understand how visitors use this site in aggregate — which pages are viewed, how visitors arrive, and what devices they use. The data is anonymised and is not used to identify you individually or to target advertising at you. These cookies are only set if you consent, and only while they are switched on for this site. If statistics are not currently enabled, no cookies in this category will be set even if you accept this category.
```

**Why:**
- Describes purpose without naming a specific analytics tool — Cookiebot's declaration will list the actual tool if present.
- **"Only set if you consent, and only while they are switched on"** is the critical adaptive phrase — covers the case where statistics are disabled entirely. If the site has no analytics at all, this paragraph is still accurate because no cookie will fire regardless.
- **"Identify you individually or target advertising at you"** explicitly disclaims the two biggest misuses of analytics data.

---

### Preferences cookies introduction

```
Preference cookies remember choices that affect how the site looks or behaves — such as a light or dark mode setting, a language choice, or a dismissed notification. They do not track you across other websites. Any specific preference cookies currently in use are listed in the Cookie Declaration at the bottom of this page.
```

**Why:**
- Describes the capability of the category. If the site doesn't currently use preferences, no cookies fire. If it adds one later (dark mode toggle, language picker), the copy still applies.
- The "currently in use" cue in the Cookie Declaration line tells the user where the current specifics live.

---

### Marketing cookies introduction

```
Marketing cookies can be used to support advertising — for example, to show relevant content on other websites you visit, measure the effectiveness of advertising campaigns, or track which pages lead to enquiries. They can track you across other websites. These cookies are only set if you consent, and only while marketing is active on this site. If no marketing activity is currently running, no cookies in this category will be set even if you accept this category.
```

**Why:**
- **Honest about what marketing cookies do** — "can track you across other websites" is plain-English required for meaningful consent.
- **"Only set if you consent, and only while marketing is active"** is the future-proof clause. If the site is not running ads today, the statement remains accurate. If the site runs a campaign six months from now, the same text still applies because consent still gates every cookie.
- **No "we do not run ads" absolute disclaimer** — this is deliberate. Making that claim means rewriting every time a campaign starts. Capability-based wording sidesteps the problem.

---

### Unclassified cookies introduction

```
Unclassified cookies are cookies that have not yet been categorised. If any appear on this site, they will be reviewed and reclassified — or removed if they are no longer required.
```

**Why:** Cookiebot occasionally picks up unclassified cookies on first scan. This text commits to reviewing them rather than leaving them unclassified, which itself is a compliance issue.

---

## The pre-launch checklist for every client site

Before the site goes live:

- [ ] Cookiebot scan has been run against the **production domain** (not the preview URL).
- [ ] Every field in this playbook has been filled in with client-specific content — no Cookiebot defaults remain.
- [ ] City/country has been inserted into the General cookie introduction.
- [ ] Jurisdiction-specific law references are correct (Ireland → S.I. 336/2011; UK → PECR).
- [ ] All button text fields are set (even if unused in the current layout — covers future layout changes).
- [ ] Cookiebot admin settings are correct: Explicit consent, All visitors, two-equal-button layout, 6-month expiry, no page-scroll-or-refresh as consent, no close icon on banner.
- [ ] The client's Privacy Policy page reflects the same categories and purposes described in this banner.

---

## What still requires maintenance under Strategy A

Capability-based wording removes most ongoing copy maintenance, but these events still trigger a review:

| Change on the site | Banner fields to update |
|---|---|
| Jurisdiction change (firm moves / expands into a new country) | General cookie introduction (update law references and city/country). |
| Site category added that was previously disclaimed as "not used" | Remove the "not used" disclaimer from the relevant category introduction. |
| DPC or equivalent regulator publishes updated guidance | Re-review all category introductions against the new guidance. |

Compare to Strategy B which also requires updates on every tool change — Strategy A cuts that entirely.

---

## What this playbook is not

A substitute for reading the DPC guidance at `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`. A substitute for a qualified data protection advisor on complex sites. A substitute for running a fresh Cookiebot scan on every client's production domain — the scan is the source of truth for what cookies actually exist; this playbook tells you how to describe the *categories* those cookies belong to.

_Last reviewed: April 2026. Re-verify against the latest DPC guidance annually._
