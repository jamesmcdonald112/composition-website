# Cookiebot Setup Checklist

_Step-by-step runbook for configuring a Cookiebot instance on a site. Follow in order. Do not skip the pre-launch verification section — that is what turns a Cookiebot deployment from "configured" into "compliant"._

**Companion documents in this folder:**
- `banner-copy-playbook.md` — what to paste into each Cookiebot dashboard text field. Open this alongside the present file.
- The EU PDFs in this folder — regulator source material referenced throughout.

**Jurisdiction note.** This checklist uses Irish citations (`S.I. No. 336/2011`, `Reg 5`, `Reg 5(3)`, `Reg 5(5)`, the Data Protection Commission's April 2020 guidance) as **one worked example** of the rules an EU-jurisdiction Cookiebot deployment must satisfy. Every requirement in this document has a direct equivalent under each major regime: UK PECR + UK GDPR; French CNIL guidance; German TDDDG; Québec Law 25; EDPB-coordinated positions across the EU. When deploying in a different jurisdiction, swap the citation, not the requirement — the equal-prominence rule, the no-pre-ticked-boxes rule, the strictly-necessary exemption etc. are jurisdiction-neutral.

---

## Phase 1 — Cookiebot account setup

- [ ] Create a **separate Cookiebot account** owned by the site's data controller (not by the developer or agency). The consent records legally belong to the controller — they must live in the controller's account so the controller can produce them if challenged. Same reasoning under Law 25 Section 18.3, PIPEDA Principle 4.1.3, and GDPR Article 28(3).
- [ ] Verify domain ownership via Cookiebot's verification flow (usually a TXT DNS record or an HTML file upload).
- [ ] Generate the Cookiebot script ID (CBID) for the site.
- [ ] Add the CBID to the site's Cookiebot script tag in `src/layouts/BaseLayout.astro`. Replace any old CBID — do not leave multiple scripts loaded.
- [ ] Set `data-blockingmode="auto"` on the script tag.
- [ ] Deploy to a preview URL and confirm the banner appears.

---

## Phase 2 — Admin configuration

Work through every setting in the Cookiebot admin dashboard in this order. Do not leave defaults in place — some defaults are non-compliant.

### Consent type

- [ ] Set to **Explicit consent** (not implicit). Implicit consent is not lawful under the ePrivacy Directive (as transposed in each EU member state — e.g. S.I. 336/2011 in Ireland, the LIL in France, the TDDDG in Germany), under UK PECR, or under Québec Law 25's express-consent requirement for technological collection.

### Regional targeting

- [ ] Set to **All visitors**. Do not restrict to EU/EEA only — IP geolocation is unreliable and several regimes (Law 25, PIPEDA, GDPR Article 3(2)(a)) apply based on intent to serve residents of the jurisdiction, not on the visitor's IP.

### Dialog / banner layout

- [ ] Choose a layout that renders **Deny and Allow all as two equal buttons** side by side. The category-level "Allow selection" option should live inside a Details tab, not as a third equal button on the primary screen.
- [ ] Disable "Page scroll = consent" — scrolling is not valid consent under EDPB-coordinated guidance (mirrored by every national regulator that has addressed it: DPC, ICO, CNIL, CAI).
- [ ] Disable "Page refresh = consent" — same reason.
- [ ] Disable "Display close icon on banner" — close icons create ambiguous dismissal that cannot be counted as consent.

### Default checkbox state

- [ ] Preferences: unchecked
- [ ] Statistics: unchecked
- [ ] Marketing: unchecked

Pre-checked boxes are non-compliant (Planet49 CJEU ruling — directly binding across the EU; mirrored in UK ICO guidance post-Brexit; equivalent positions under Law 25 and PIPEDA).

### Consent expiry — set the renewal period

The recommended outer time limit for retaining a consent record sits around **6 months** in most regulator guidance (the Irish DPC's stated ceiling is the most-cited example; other EU and Canadian regulators have published similar shorter-is-better positions). Cookiebot's default is **12 months**, which exceeds those ceilings and would put the burden on the controller to justify the longer lifespan if challenged. Change it.

#### Where this setting lives in Cookiebot (the path is awkward — note exactly)

The setting is **not** on the per-cookie information page (where `CookieConsent` shows "Expiry (in days): 372" as a read-only value). That number is derived from the domain group setting, which is the actual editable control.

Steps (Cookiebot admin paths are stable but field names occasionally rename across UI updates):

1. Log into [`admin.cookiebot.com`](https://admin.cookiebot.com).
2. In the left sidebar, click **Domains & Aliases** → **Manage your domain groups** (or jump directly to [`https://admin.cookiebot.com/domain-groups`](https://admin.cookiebot.com/domain-groups)).
3. Find the domain group that contains the site.
4. Click the **`>`** arrow on the right of that row to **expand** the domain group panel inline.
5. Scroll down inside the expanded panel until you find the field labelled **"User consent expiration"** (Cookiebot may rename this to "Consent lifetime" or "Consent validity" in future UI updates — look for any consent-related field with a duration dropdown).
6. Open the dropdown. **As historically configured, the only options have been 12 months or 1 month.** There is no 6-month option in either case.
7. **Select `1 month`.** Reasoning: 12 months exceeds the recommended outer limit under every major guidance position the developer is aware of; 1 month is comfortably inside the bounds and is the only available compliant choice on the free tier. The minor UX cost (returning visitors more than a month later see the banner once) is acceptable.
8. **Save.** Cookiebot usually requires a manual save click — don't navigate away first.
9. **Wait 5–10 minutes** for the setting to propagate to the live banner.

#### Why the path is documented this exactly

This setting was awkward to find because:
- The per-cookie page in **Cookies and Trackers** shows the expiry as read-only (it's derived, not configurable from there).
- The setting itself is buried inside the **Domains & Aliases → Domain group** expansion panel, not in the top-level **Settings** menu where most consent-related settings live.
- Cookiebot has renamed this setting at least once across UI updates, so the label may differ from the path above. The location (inside the expanded domain group panel) is more stable than the field name.

If a future Cookiebot UI update moves the setting again, search the dashboard for *"renewal"*, *"expiration"*, *"lifetime"*, or *"validity"* — those are the terms Cookiebot has historically used.

#### Verification — confirm the change took effect

After saving and waiting 10 minutes:

1. Open the live site in a fresh incognito window (or clear all site data).
2. Click **Allow all** on the cookie banner.
3. Open **DevTools → Application → Cookies → [site domain]**.
4. Find the cookie named **`CookieConsent`**.
5. Look at the **"Expires / Max-Age"** column.
   - Should show roughly **30 days from today** if 1 month was selected → ✅ correct
   - If it shows roughly **365 days from today** → ❌ change didn't take, re-check the dashboard

#### Important — applies per Cookiebot account

This setting is per-domain-group, which means **per Cookiebot account**. Changing it in a development account does not change it in the production account. Pre-launch, after switching the `data-cbid` in `BaseLayout.astro` to the production CBID, this setting must be re-applied in the production account using the same path.

### Banner copy

- [ ] Apply the copy derived from `banner-copy-playbook.md`. Do not leave Cookiebot's default text — it over-discloses and creates transparency issues.
- [ ] Use the **multi-jurisdiction General introduction template** if the site's audience is international; the single-jurisdiction template only if the audience is overwhelmingly in one country.

### Banner copy — link URLs (Cookie Declaration and Privacy Policy)

The Cookiebot dashboard exposes per-link URL fields where you paste the destination of inline banner-copy links such as "Cookie Declaration" and "Privacy Policy." **These URL values do not transfer with the CBID** — they are stored against the dashboard account, not the script ID. They must be re-entered every time the site moves to a new Cookiebot account (e.g. dev → production).

**What to enter — root-relative paths (preferred):**
- Cookie Declaration link → `/cookie-policy`
- Privacy Policy link → `/privacy`

**Why root-relative:** the same value works on every domain the site is deployed to (preview, staging, production) without re-entry. The browser resolves the leading slash to whichever domain the visitor is currently on.

**Fallback if Cookiebot rejects the bare slash:** some Cookiebot dashboard versions validate the URL field and require `https://` at the start. If saving fails, paste the absolute URL for the current environment instead — and note that the URL must be **swapped at production launch**.

#### Pre-launch — swap the URL fields if absolute URLs were used

- [ ] **Re-enter both link URL fields in the production Cookiebot account** at the same time as the CBID swap. Use root-relative `/cookie-policy` and `/privacy` if the production dashboard accepts them; otherwise replace the dev URLs with absolute URLs against the production domain.
- [ ] **Verify on the live production domain** in a fresh incognito window: hover the "Cookie Declaration" and "Privacy Policy" links inside the Cookiebot Cookie Policy page (and inside the first-layer banner if the banner copy contains them). The browser status bar should show the correct production-domain URLs. Click each one to confirm it resolves to the expected page on the production site.

---

## Phase 3 — Cookie inventory

- [ ] Trigger a fresh **scan on the production domain** (not the preview URL). The scan is how Cookiebot populates the Cookie Declaration on `/cookie-policy`.
- [ ] Review every cookie returned by the scan.
- [ ] Reclassify any miscategorised cookies. Common mistakes:
  - Analytics cookies auto-classified as Necessary → move to Statistics.
  - Third-party social widget cookies classified as Preferences → move to Marketing.
  - Unclassified cookies should be either classified or removed; do not leave them unclassified indefinitely.
- [ ] Confirm the Cookie Declaration on `/cookie-policy` renders correctly with the scanned data.

---

## Phase 4 — Privacy Policy alignment

Cookiebot's banner is one half of compliance. The privacy policy is the other. Mismatches between the two will be flagged by any audit.

- [ ] Confirm the privacy policy lists the same cookie categories described in the banner.
- [ ] Confirm the privacy policy names the same third-party tools (analytics, advertising platforms, etc.) that the banner names.
- [ ] Confirm the privacy policy describes the legal basis for each category of processing (strictly-necessary cookies do not need a GDPR lawful basis; statistics/marketing need consent under Article 6(1)(a); equivalent positions under Law 25 and PIPEDA).
- [ ] Confirm the privacy policy explains how users can withdraw consent and links back to the Cookie Declaration.

---

## Phase 5 — Pre-launch verification (the critical section)

These three checks determine whether the site satisfies the cookie consent rule in any major jurisdiction (Reg 5(3) in Irish law; the equivalent ePrivacy-derived rule in every other EU member state; PECR Reg 6 in the UK; Law 25 Section 12; etc.). Run all three before sign-off.

### Check 1 — No non-essential cookies before consent

- [ ] Open the production site in a **fresh incognito window** (or Chrome → DevTools → Application → Storage → Clear site data first).
- [ ] Before clicking anything on the banner, open DevTools → Application tab → Cookies → select the site's domain.
- [ ] **Expected result:** only strictly-necessary cookies appear. Typically `CookieConsent` (Cookiebot's own) and any session token set by the server. No analytics, no marketing, no preferences cookies.
- [ ] **If other cookies appear:** the `data-blockingmode="auto"` attribute is missing or a script is bypassing Cookiebot. Investigate and fix before launch.

### Check 2 — Equal prominence between Deny and Allow all

- [ ] Visually inspect the banner. Deny and Allow all should be the same size, same font weight, same visual treatment.
- [ ] **If they are not equal:** check (a) any custom CSS in the project that might override Cookiebot, and (b) the Cookiebot admin layout setting. Fix in admin first; only add CSS overrides if the admin layout cannot be configured to equal prominence (and see `banner-copy-playbook.md` on why CSS overrides are a bad idea).

### Check 3 — Consent withdrawal is as easy as giving it

- [ ] Click "Allow all" on the banner.
- [ ] Visit `/cookie-policy`.
- [ ] Confirm a UI is visible that lets the user revoke consent for any category.
- [ ] Revoke statistics consent, reload the site, and verify the corresponding cookies are cleared and do not return on subsequent page loads.

---

## Red flags

Common failure modes — call any of these out immediately:

- **Request to "hide" or "minimise" the Deny button** — this is a dark pattern. Refuse. Cite the equal-prominence requirement (EDPB cookie banner report; mirrored by every national regulator that has addressed it).
- **Request to auto-accept cookies "for a smoother UX"** — this is illegal under every major regime (ePrivacy + GDPR in the EU/UK, Law 25 in Québec, equivalent positions under PIPEDA). Refuse.
- **A new tool added without notification** — chat widget, embed, pixel. The banner copy and privacy policy will go out of sync. Build a notification expectation into the engagement.
- **Privacy policy copy-pasted from another site** — usually indicates the underlying compliance work hasn't been done. Flag it and recommend a proper privacy policy review.
- **Cookiebot scan returns cookies from services that aren't supposed to be in use** — a previous developer may have left scripts in the codebase. Audit and clean up.

---

## After launch

- [ ] Diary a **re-audit 12 months after launch** and annually thereafter. Regulator guidance updates; new tools get added that you may not know about.
- [ ] Diary a **consent expiry verification at 6 months post-launch** — confirm that returning visitors are being re-prompted, which means the expiry setting is actually working.

---

## Banner copy review triggers

Capability-based wording (Strategy A in the playbook) is designed to survive most site changes without edits. However, four real-world events require a banner copy review and an updated set of paste-ready text in the Cookiebot admin.

| # | Trigger | What to update |
|---|---|---|
| 1 | **The site's controller moves or rebrands** | Any geographic reference inside the General cookie introduction (city, country) and in any text that names the controller |
| 2 | **The site begins serving residents of another jurisdiction** | The legal references in the General cookie introduction. Examples: Ireland → `S.I. No. 336/2011` and `GDPR`; UK → `PECR` and `UK GDPR`; France → `LIL` and `GDPR`; Québec → `Law 25` and `PIPEDA`. The multi-jurisdiction template in the playbook avoids most of these rewrites |
| 3 | **A consent category previously marked "not used" starts being used** | Replace the "not used" disclaimer for that category with the generic capability-based wording from `banner-copy-playbook.md` |
| 4 | **The applicable regulator publishes updated guidance** (DPC, ICO, CNIL, CAI, EDPB, etc.) | Walk through the new guidance against the existing copy. Update phrasing where the new interpretation requires clearer or different wording |

**Workflow when any trigger fires:**

1. Open the banner copy document (or work directly in the Cookiebot dashboard).
2. Update the affected blocks.
3. Paste the updated blocks into the Cookiebot admin dashboard.
4. Save dated evidence somewhere durable (versioned commit message, dated screenshot, separate audit trail folder) so future-you can show what the banner said on what date.

**What is not on this list (intentionally):** turning analytics on or off, starting or ending an ad campaign, adding or removing social embeds, swapping one analytics tool for another. Capability-based wording handles all of these with no copy changes — Cookiebot's automatic scan keeps the Cookie Declaration up to date with the actual cookies set.

> **However**, those same events DO require a separate review: the **Cookie classification review** below. Banner copy stays stable, but the cookies inventory and Necessary-category classification must be re-checked every time the tool stack changes.

---

## Cookie classification review triggers — when to revisit the Necessary category

Separate from banner copy review. This list governs **which cookies are classified as "Necessary" / "Strictly Necessary"** in the Cookiebot dashboard. The classification matters because Necessary cookies fire without consent under every major regime's strictly-necessary exemption (e.g. Reg 5(5) of S.I. 336/2011 in Ireland; Article 5(3) of the EU ePrivacy Directive as transposed locally; PECR Reg 6(4) in the UK; equivalent provisions in Law 25 / PIPEDA). A mis-classified cookie is set unlawfully.

### Examples of cookies that legitimately qualify as Necessary

The strictly-necessary exemption is narrow in every major regime. The cookie must be essential to delivering a service the visitor explicitly asked for, not just convenient for the site operator. Concrete examples that pass that test:

- **Session cookies for a secure logged-in area** — if the site offers a logged-in area (client portal, account dashboard), the session cookie that keeps users logged in is essential to the service they asked for.
- **Authentication cookies for restricted-access content** — same reasoning: a cookie that authorises a specific download for a specific user is delivering the service the user requested.
- **Cart / checkout cookies for an online payment system** — the cookies that hold the payment session are essential to the transaction.
- **Language / region preference cookies** where the site offers multiple languages.
- **The Cookiebot consent record itself** — paradoxically, the cookie that records the visitor's consent decision is necessary to honour that decision on subsequent page loads.

What does **not** qualify, even though site operators sometimes argue it does:

- Analytics cookies of any kind (including "first-party" / "self-hosted" analytics)
- "Performance" or "user experience improvement" cookies
- Anything that tracks behaviour across pages for the operator's benefit rather than the visitor's
- A/B testing cookies

The EDPB Cookie Banner Taskforce report addresses this directly in **Section 8 (Type I Practice — Inaccurately Classified Essential Cookies, Paras 26–30)**. The reasoning is binding across the EU and is mirrored in equivalent national guidance elsewhere.

| # | Trigger | What to update | Why |
|---|---|---|---|
| 1 | **Any analytics tool added** (Google Analytics, Plausible, Matomo, Hotjar, Mixpanel, etc.) | Run a fresh Cookiebot scan. Confirm new cookies are auto-classified as **Statistics**, not Necessary. | Analytics is for the operator's benefit, not the visitor's — fails the "ordinary meaning" test for Necessary. |
| 2 | **Any advertising tool added** (Google Ads, Meta Pixel, LinkedIn Insight, retargeting pixels, conversion tracking) | Run a fresh Cookiebot scan. Confirm new cookies are auto-classified as **Marketing**, not Necessary. If Cookiebot's dashboard shows a "Legitimate Interest" section for ad cookies, **disable it** (per EDPB Cookie Banner Taskforce Section 7 Para 24 — legitimate interest cannot be the legal basis for cookie placement). | Advertising cookies always require consent. Mis-labelling them as Necessary or running them under "legitimate interest" are both Section 7/8 dark patterns that regulators actively investigate. |
| 3 | **Any social media embed or share widget added** (Facebook Like, Twitter/X embed, LinkedIn share, YouTube/Vimeo embed) | Run a fresh Cookiebot scan. Confirm any tracking cookies set by the embed are classified as **Marketing**, not Necessary. Consider whether the embed should be wrapped in a consent-required loader. | Social embeds typically set tracking cookies that are not essential to the page's primary purpose. |
| 4 | **A new tool replaces an existing one** (e.g. GA4 → Plausible, Hotjar → Microsoft Clarity) | Re-run the same scan and inventory check. Confirm the new tool's cookies have the same classification as the tool they replaced, not a more lenient one. | Some tools market themselves as "no cookies" or "privacy-first" but still set local-storage items that count as tracking under ePrivacy law. |
| 5 | **An annual review** (every 12 months from launch) | Run a fresh Cookiebot scan even if the tool stack has not changed. Compare the new scan against the previous inventory. Investigate any new cookie. | Cookies change over time even when the tool list does not — EDPB Para 27 explicitly recognises this. |

**Workflow when any cookie classification trigger fires:**

1. **Open the Cookiebot dashboard → Cookies and Trackers → Run Scan.**
2. **Review every cookie returned by the scan**, especially any classified as Necessary that wasn't there before.
3. **For each cookie classified as Necessary, confirm a written justification exists** in the Cookiebot dashboard description field. The justification must explain why the cookie is essential to delivering a service the visitor asked for. *"Helps the site work better"* is not enough; *"records the visitor's consent choice so the banner does not re-appear on every page"* is enough.
4. **Update the privacy policy** if any new category becomes active that was previously dormant.

**The non-negotiable rule:** no analytics, advertising, profiling, retargeting, or social tracking cookie may ever be classified as Necessary. The Necessary category is reserved for cookies that fit the strict regulator interpretation (e.g. WP29 Opinion 04/2012 / EDPB Para 30 preference-cookie rule, or equivalent positions elsewhere), or that are required for fundamental site security and session management.

---

_Re-review against the latest applicable regulator guidance annually._
