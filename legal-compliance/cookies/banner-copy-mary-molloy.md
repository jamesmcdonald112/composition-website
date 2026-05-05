# Cookie Banner Copy — Mary Molloy Solicitor

_The exact text to paste into each Cookiebot admin field for this site. Derived from `banner-copy-playbook.md` using Strategy A (capability-based wording) — write once, no maintenance as tools are added or removed._

**Why Strategy A for this site:** Mary's firm may want to run targeted campaigns (local SEO, Google Ads retargeting for property services, Meta campaigns around probate awareness) at different points. Strategy A means the banner copy does not need to change when a campaign starts or ends. Cookiebot's scan handles the specific-cookie disclosure on `/cookie-policy` automatically.

**Jurisdiction assumptions baked into this copy:**
- Operated from Kilkenny, Ireland
- Regulated profession: solicitor (LSRA advertising rules apply)
- Primary law: S.I. No. 336/2011 and GDPR

**If any of these change, consult `banner-copy-playbook.md` → "What still requires maintenance under Strategy A".**

---

## Paste-ready text for each Cookiebot admin field

### Dialog heading
```
Cookies on this website
```

### Dialog body text
```
We use cookies to keep this website working, to understand how visitors use it, and — if you agree — to support marketing or advertising. You are in control: you can accept all cookies, deny non-essential cookies, or view details to decide category by category. You can change or withdraw your consent at any time using the Privacy icon in the bottom-left corner of any page, or from our <a href="/cookie-policy">Cookie Declaration</a>.
```

**Note on the HTML anchor:** Cookiebot's banner copy fields accept HTML anchors. The anchor must be pasted into the dashboard exactly as shown above — if a copy/paste round-trip strips the `<a>` tag, re-paste from this file. Verify by opening the live banner and confirming "Cookie Declaration" renders as a real underlined link, not plain text.

### Decline button text
```
Deny
```

### Accept button text
```
Allow all
```

### Text in [OK] button
```
OK
```

### Text in [Allow all] button
```
Allow all
```

### Text in [Allow selection] button
```
Allow selection
```

### Text in [Show details] button
```
Show details
```

### Text in [Hide details] button
```
Hide details
```

### Text in [Customize] button
```
Customise
```

### General cookie introduction
```
Cookies are small text files saved to your device by websites you visit. They can make a site work properly, remember your choices, or help the site owner understand how the site is being used.

Irish law (S.I. No. 336/2011 — the ePrivacy Regulations — and the General Data Protection Regulation) requires us to get your consent before setting any cookie that is not strictly necessary to run this site.

The sections below describe each category of cookie this site may use. The Cookie Declaration at the bottom of this page lists every specific cookie currently set on this site — that declaration is kept up to date automatically, so it always reflects what is really being set.

You can change or withdraw your consent at any time using the Privacy icon in the bottom-left corner of any page, or from our <a href="/cookie-policy">Cookie Declaration</a>.

To learn how we handle your personal data more broadly, see our <a href="/privacy-policy">Privacy Policy</a>.
```

**Note on the HTML anchors:** Cookiebot's banner copy fields accept HTML anchors. Both anchors must be pasted into the dashboard exactly as shown above — if a copy/paste round-trip strips the `<a>` tags, re-paste from this file. Verify by opening `/cookie-policy` after pasting and confirming both "Cookie Declaration" and "Privacy Policy" render as real underlined links, not plain text.

### Necessary cookies category title
```
Necessary
```

### Necessary cookies introduction
```
Necessary cookies are required to make the website work properly. They record your cookie consent choice, support secure page loading and form submissions, and in some cases remember one-time dismissals of introductory elements so they do not replay on every page. These cookies do not track you and are exempt from the consent requirement under Regulation 5(5) of S.I. No. 336/2011.
```

### Statistics cookies category title
```
Statistics
```

### Statistics cookies introduction
```
Statistics cookies help us understand how visitors use this site in aggregate — which pages are viewed, how visitors arrive, and what devices they use. The data is anonymised and is not used to identify you individually or to target advertising at you. These cookies are only set if you consent, and only while they are switched on for this site. If statistics are not currently enabled, no cookies in this category will be set even if you accept this category.
```

### Preferences cookies category title
```
Preferences
```

### Preferences cookies introduction
```
Preference cookies remember choices that affect how the site looks or behaves — such as a light or dark mode setting, a language choice, or a dismissed notification. They do not track you across other websites. Any specific preference cookies currently in use are listed in the Cookie Declaration at the bottom of this page.
```

### Marketing cookies category title
```
Marketing
```

### Marketing cookies introduction
```
Marketing cookies can be used to support advertising — for example, to show relevant content on other websites you visit, measure the effectiveness of advertising campaigns, or track which pages lead to enquiries. They can track you across other websites. These cookies are only set if you consent, and only while marketing is active on this site. If no marketing activity is currently running, no cookies in this category will be set even if you accept this category.
```

### Unclassified cookies category title
```
Unclassified
```

### Unclassified cookies introduction
```
Unclassified cookies are cookies that have not yet been categorised. If any appear on this site, they will be reviewed and reclassified — or removed if they are no longer required.
```

### Privacy Trigger and in-policy labels

These remain at Cookiebot defaults — UI labels, not regulated content:

| Field | Value |
|---|---|
| Privacy Trigger | `Cookie settings` |
| Cookie settings (heading) | `Cookie settings` |
| Your current state | `Your current state` |
| Consent date | `Consent date` |
| Your consent ID | `Your consent ID` |
| Change your consent | `Change your consent` |
| Withdraw your consent | `Withdraw your consent` |
| Show details | `Show details` |
| Hide details | `Hide details` |

---

## When to revisit this file

The detailed list of trigger events that require a banner copy review lives in `client-onboarding-checklist.md` under **"Banner copy review triggers"** — that file is the single source of truth so the rules do not drift between this client-specific copy file and any future client copy file.

In short: **capability-based wording survives most site changes** (analytics on/off, ad campaigns starting and ending, swapping analytics tools, adding or removing social embeds — none of those require copy changes). The four cases that *do* require a review are firm relocation/rebrand, jurisdiction change, a category previously marked "not used" becoming used, and updated regulator guidance.

For Mary specifically, the live values that would change with each of those triggers are:

- **Geographic reference** — currently the General cookie introduction does not name a city. The firm's address is on the footer and About page. If a future copy revision adds a city reference inline, update it on relocation.
- **Legal references** — currently `S.I. No. 336/2011` and `General Data Protection Regulation` in the General cookie introduction. Update these if the firm begins practising outside Ireland.
- **Category status** — every category in this file uses generic capability-based wording, so no "not used" disclaimer is in place today. If you ever switch one to a state-specific disclaimer, note that here.

Every significant change to the site's tool stack should still trigger a compliance screenshot (`npx tsx scripts/compliance-screenshot.ts tool-change`) even if the banner copy itself is not being edited — the screenshot captures the Cookie Declaration as it appeared on the date of the change.

---

## Why this exists as a separate file

The playbook at `banner-copy-playbook.md` is the template. This file is the **output** of applying that template to Mary's specific site. Keeping them separate means:

1. You can reuse the playbook for the next client without editing it.
2. You have a dated record of exactly what Mary's banner said on any given date (useful as evidence if the DPC ever asks).
3. When Mary's site changes (firm relocation, new jurisdiction), you edit this file — the playbook stays stable as a template for other clients.

_Last updated: April 2026. Re-verify before launch and after any of the trigger events listed above._
