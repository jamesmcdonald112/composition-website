# Cookiebot Client Onboarding Checklist

_Step-by-step runbook for setting up a new Cookiebot instance for a new client site. Follow in order. Do not skip the pre-launch verification section — that is what turns a Cookiebot deployment from "configured" into "compliant"._

---

## Phase 0 — Triage (do this first)

Before you set up Cookiebot at all, three triage questions decide what kind of site this is going to be — and which compliance posture applies. Answer these before any technical setup work.

### Triage Question 1 — Is this a sensitive-topic profession?

A "sensitive-topic profession" is any business whose practice or service involves Article 9 GDPR special category data — health, family hardship, sexual orientation, religious belief, criminal allegations, financial distress, or similar. The full list and the underlying reasoning are in `_business/sensitive-topic-tracking-policy.md`. Common examples:

- [ ] **Solicitor** (any practice area touching family / personal injury / criminal / immigration / debt) → **Sensitive**
- [ ] **Doctor / GP / clinic / counsellor / therapist / psychologist** → **Sensitive**
- [ ] **Addiction / mental health / disability / bereavement service** → **Sensitive**
- [ ] **Debt advice / insolvency / bankruptcy / financial-distress adviser** → **Sensitive**
- [ ] **Religious / political / advocacy organisation** → **Sensitive**
- [ ] **Recruitment for sensitive sectors** (medical, legal, government) → **Borderline — default to sensitive**
- [ ] **General business** (trades, retail, hospitality, SaaS, e-commerce, B2B, professional services without sensitive content) → **Not sensitive**
- [ ] **Public-sector / regulated-finance** → **Specialist legal review required first**

### Triage Question 2 — Does the client want analytics or paid ads?

- [ ] **No** → Cookiebot setup proceeds straight to Phase 1. Skip the rest of triage.
- [ ] **Yes — analytics only** → continue to Triage Question 3.
- [ ] **Yes — paid ads (Google Ads / Meta Ads / etc.)** → continue to Triage Question 3.
- [ ] **Yes — full retargeting / Pixel / GA4 stack** → continue to Triage Question 3.

### Triage Question 3 — Cross-reference Q1 and Q2

| Q1 result | Q2 result | What to do |
|---|---|---|
| **Sensitive** | No analytics, no ads | Standard Cookiebot setup, Necessary-only categories. Proceed to Phase 1. |
| **Sensitive** | Search ads only (no trackers) | Standard Cookiebot setup, Necessary-only categories. **Hand the client `_business/google-ads-for-sensitive-topic-clients.md`** for the operational ad guide. Proceed to Phase 1. |
| **Sensitive** | Wants trackers / personalised ads | **Refuse** trackers site-wide. Hand the client `_business/sensitive-topic-tracking-client-faq.md`. If they push back, walk them through `_business/sensitive-topic-tracking-policy.md` "When a sensitive-topic client insists" subsection. If they still insist on retargeting for sensitive services — refuse the engagement for that piece of work. Document the refusal in writing. |
| **Not sensitive** | No analytics, no ads | Standard Cookiebot setup, Necessary-only categories. Proceed to Phase 1. |
| **Not sensitive** | Wants trackers / ads | Have the cost conversation. Hand them `_scratch-remaining-work.md` Section 5 (Section 22 trigger checklist) so they understand the per-tool compliance work involved. Once accepted, proceed to Phase 1 with the appropriate categories enabled. |
| **Public-sector / regulated-finance** | Any | Pause. Specialist legal review required before any Cookiebot or tracker work. |

### Phase 0 deliverables (record these for the engagement file)

- [ ] Sensitivity classification recorded (Sensitive / Not sensitive / Specialist).
- [ ] Tracker decision recorded (None / Search ads only / Trackers approved with paperwork).
- [ ] If Sensitive + tracker decision is None or Search-ads-only — the client has received and acknowledged `_business/sensitive-topic-tracking-client-faq.md`.
- [ ] If trackers are approved — the client has received and acknowledged the cost-of-compliance conversation in `_scratch-remaining-work.md` Section 5.
- [ ] Decision filed in `legal-compliance/compliance-records/[client]-tracker-decision-YYYY-MM-DD.md`.

Once Phase 0 is closed, proceed to Phase 1.

---

## Phase 1 — Cookiebot account setup (per client)

- [ ] Create a **separate Cookiebot account** for this client (do not share accounts across clients). Use the client's email address as the account owner, even if you are the one setting it up — the consent records legally belong to the data controller, which is the client, not you.
- [ ] Verify domain ownership via Cookiebot's verification flow (usually a TXT DNS record or an HTML file upload).
- [ ] Generate the Cookiebot script ID (CBID) for this site.
- [ ] Add the CBID to the site's Cookiebot script tag in `src/layouts/BaseLayout.astro`. Replace the old CBID — do not leave multiple scripts loaded.
- [ ] Set `data-blockingmode="auto"` on the script tag.
- [ ] Deploy to a preview URL and confirm the banner appears.

---

## Phase 2 — Admin configuration

Work through every setting in the Cookiebot admin dashboard in this order. Do not leave defaults in place — some defaults are non-compliant.

### Consent type

- [ ] Set to **Explicit consent** (not implicit). Implicit consent is not lawful under Irish/EU ePrivacy rules.

### Regional targeting

- [ ] Set to **All visitors**. Do not restrict to EU/EEA only — Irish law applies regardless of visitor origin and IP geolocation is unreliable.

### Dialog / banner layout

- [ ] Choose a layout that renders **Deny and Allow all as two equal buttons** side by side. The category-level "Allow selection" option should live inside a Details tab, not as a third equal button on the primary screen.
- [ ] Disable "Page scroll = consent" — scrolling is not valid consent under DPC guidance.
- [ ] Disable "Page refresh = consent" — same reason.
- [ ] Disable "Display close icon on banner" — close icons create ambiguous dismissal that cannot be counted as consent.

### Default checkbox state

- [ ] Preferences: unchecked
- [ ] Statistics: unchecked
- [ ] Marketing: unchecked

Pre-checked boxes are non-compliant (Planet49 CJEU ruling, DPC guidance p.10).

### Consent expiry — set the renewal period

The DPC's stated outer time limit for retaining a consent record is **6 months**. Cookiebot's default is **12 months**, which exceeds that limit and would put the burden on the client to justify the longer lifespan if challenged. Change it.

#### Where this setting lives in Cookiebot (the path is awkward — note exactly)

The setting is **not** on the per-cookie information page (where `CookieConsent` shows "Expiry (in days): 372" as a read-only value). That number is derived from the domain group setting, which is the actual editable control.

Steps, exactly as found in the live admin (verified 2026-04-27):

1. Log into [`admin.cookiebot.com`](https://admin.cookiebot.com).
2. In the left sidebar, click **Domains & Aliases** → **Manage your domain groups** (or jump directly to [`https://admin.cookiebot.com/domain-groups`](https://admin.cookiebot.com/domain-groups)).
3. Find the domain group that contains the client's site (for the dev account this is the Netlify preview domain; for the production account this will be the client's live domain).
4. Click the **`>`** arrow on the right of that row to **expand** the domain group panel inline.
5. Scroll down inside the expanded panel until you find the field labelled **"User consent expiration"** (Cookiebot may rename this to "Consent lifetime" or "Consent validity" in future UI updates — look for any consent-related field with a duration dropdown).
6. Open the dropdown. **As of 2026-04-27 the only options are 12 months or 1 month.** There is no 6-month option, despite the DPC's recommended outer limit being 6 months.
7. **Select `1 month`.** Reasoning: 12 months exceeds the DPC's 6-month outer limit (against guidance, and would need objective justification if challenged); 1 month is comfortably inside the bounds and the only available compliant choice. The minor UX cost (returning visitors more than a month later see the banner once) is acceptable for a regulated profession site like a solicitor.
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
3. Open **DevTools → Application → Cookies → [client's domain]**.
4. Find the cookie named **`CookieConsent`**.
5. Look at the **"Expires / Max-Age"** column.
   - Should show roughly **30 days from today** if 1 month was selected → ✅ correct
   - If it shows roughly **365 days from today** → ❌ change didn't take, re-check the dashboard

#### Important — applies per Cookiebot account

This setting is per-domain-group, which means **per Cookiebot account**. Changing it on the development account does not change it on the client's production account. Pre-launch, after switching the `data-cbid` in `BaseLayout.astro` to the client's own production CBID, this setting must be re-applied in the client's account using the same path.

- [x] **Set consent expiry to 1 month in the Cookiebot dashboard via the path above (development account).** Verified end-to-end on 2026-04-27: dropdown changed from 12 months to 1 month, dashboard saved, propagation waited, fresh incognito session loaded, banner clicked, `CookieConsent` cookie inspected in DevTools. Result: cookie's `Expires` timestamp is `2026-05-27T13:01:39.000Z` (exactly 30 days from the test date), confirming the dropdown change writes a 30-day cookie not a 365-day one. Path documented above is correct as of that date.
- [ ] **Pre-launch: re-apply the same setting in the client's own Cookiebot account after CBID swap.** This setting is per Cookiebot account — what was verified above lives only in the development account. Mary's production account will start out at the 12-month default and must be changed to 1 month manually using the same path. Then re-verify with DevTools on the live production domain.
- [ ] **Re-verify with DevTools** that the `CookieConsent` cookie's "Expires" timestamp is approximately 30 days from the date of the production-account change.

#### Side-evidence captured during the 2026-04-27 verification

The DevTools cookie inspection during verification also confirmed two unrelated compliance points worth recording here, since the same single cookie inspection produced the evidence:

- **The Deny click registers correctly.** A click on Deny produced a cookie value of `preferences: false, statistics: false, marketing: false` — all optional categories refused. This matches what EDPB report Section 3 (Type A — no reject button on first layer) requires: the reject path actually has to result in non-essential cookies not firing.
- **The consent method is recorded as `explicit`.** The cookie value contains `method: 'explicit'`, confirming that the click was processed as a real positive action under DPC guidance (page 9 — implied consent is not allowed). EDPB Section 3 Para 7 specifically requires consent be expressed by a positive action on the part of the user.

This is incidental but useful — when the production account is verified later, the same single inspection re-produces all three pieces of evidence (expiry + Deny path + explicit method) at once.

### Banner copy

- [ ] Apply the per-client copy derived from `banner-copy-playbook.md`. Do not leave Cookiebot's default text — it over-discloses and will create transparency issues.
- [ ] Save the filled-in copy as a new `banner-copy-[CLIENT_NAME].md` file in `legal-compliance/cookies/`, mirroring the structure of `banner-copy-mary-molloy.md`.

### Banner copy — link URLs (Cookie Declaration and Privacy Policy)

The Cookiebot dashboard exposes per-link URL fields where you paste the destination of inline banner-copy links such as "Cookie Declaration" and "Privacy Policy." **These URL values do not transfer with the CBID** — they are stored against the dashboard account, not the script ID. They must be re-entered every time the site moves to a new Cookiebot account (e.g. dev → production).

**What to enter — root-relative paths (preferred):**
- Cookie Declaration link → `/cookie-policy`
- Privacy Policy link → `/privacy-policy`

**Why root-relative:** the same value works on both the Netlify dev domain (`splendorous-tiramisu-3c7f26.netlify.app`) and the production domain (e.g. `marymolloysolicitor.ie`) without re-entry. The browser resolves the leading slash to whichever domain the visitor is currently on.

**Fallback if Cookiebot rejects the bare slash:** some Cookiebot dashboard versions validate the URL field and require `https://` at the start. If saving fails, paste the absolute URL for the current environment instead — and note that the URL must be **swapped at production launch**:
- Dev: `https://splendorous-tiramisu-3c7f26.netlify.app/cookie-policy` and `/privacy-policy`
- Production: `https://[CLIENT-PROD-DOMAIN]/cookie-policy` and `/privacy-policy`

#### Pre-launch — swap the URL fields if absolute URLs were used

- [ ] **Re-enter both link URL fields in the production Cookiebot account** at the same time as the CBID swap. Use root-relative `/cookie-policy` and `/privacy-policy` if the production dashboard accepts them; otherwise replace the dev URLs with absolute URLs against the production domain.
- [ ] **Verify on the live production domain** in a fresh incognito window: hover the "Cookie Declaration" and "Privacy Policy" links inside the Cookiebot Cookie Policy page (and inside the first-layer banner if the banner copy contains them). The browser status bar should show the correct production-domain URLs. Click each one to confirm it resolves to the expected page on the production site.
- [ ] **Run a dated compliance screenshot** after the URL swap so the production-domain link state is recorded: `npx tsx scripts/compliance-screenshot.ts cookiebot-link-urls-prod-swap`.

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

Cookiebot's banner is one half of compliance. The client's Privacy Policy is the other. Mismatches between the two will be flagged by any audit.

- [ ] Confirm the Privacy Policy page lists the same cookie categories described in the banner.
- [ ] Confirm the Privacy Policy names the same third-party tools (GA4, advertising platforms, etc.) that the banner names.
- [ ] Confirm the Privacy Policy describes the legal basis for each category of processing (strictly-necessary cookies do not need a GDPR lawful basis; statistics/marketing need consent under Article 6(1)(a)).
- [ ] Confirm the Privacy Policy explains how users can withdraw consent and links back to the Cookie Declaration.

---

## Phase 5 — Pre-launch verification (the critical section)

These three checks determine whether the site satisfies Regulation 5(3). Run all three before sign-off.

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

## Phase 6 — Document the deployment

- [ ] Create `banner-copy-[CLIENT_NAME].md` in `legal-compliance/cookies/` with the exact copy used (see `banner-copy-mary-molloy.md` as a reference).
- [ ] Run the compliance screenshot script to capture a dated visual record: `npx tsx scripts/compliance-screenshot.ts cookiebot-launch`.
- [ ] Note the date of the Cookiebot scan and store a screenshot of the admin settings panel in the client's compliance records folder.

---

## Red flags to watch for during the engagement

Call out any of these to the client immediately — they are the common failure modes:

- **Client asks to "hide" or "minimise" the Deny button** — this is a dark pattern. Refuse. Explain the DPC's equal-prominence requirement.
- **Client asks to auto-accept cookies "for a smoother UX"** — this is illegal under Irish ePrivacy law. Refuse.
- **Client adds a new tool (chat widget, embed, pixel) without telling you** — the banner copy and Privacy Policy will go out of sync. Write this into your engagement terms: "the client will notify the developer within 7 days of adding any third-party tool to the site so consent disclosures can be updated."
- **Client's existing Privacy Policy is copy-pasted from another firm** — this is a much bigger compliance issue than cookies. Flag it and recommend a proper privacy policy review.
- **Cookiebot scan returns cookies from services the client claims not to use** — a previous developer may have left scripts in the codebase. Audit and clean up.

---

## After launch

- [ ] Diary a **re-audit 12 months after launch** and annually thereafter. DPC guidance may update; the client may have added new tools you do not know about.
- [ ] Diary a **consent expiry verification at 6 months post-launch** — confirm that returning visitors are being re-prompted, which means the expiry setting is actually working.

---

## Banner copy review triggers — when to revisit `banner-copy-[CLIENT].md`

Capability-based wording (Strategy A in the playbook) is designed to survive most site changes without edits. However, **four real-world events do require a banner copy review and an updated set of paste-ready text in the Cookiebot admin**. Notify the client of these triggers when handing off, and diary them yourself.

| # | Trigger | What to update in the banner copy | Who has to know |
|---|---|---|---|
| 1 | **Client's firm moves or rebrands** | Any geographic reference inside the General cookie introduction (city, country) and in any text that names the firm | Notify the client to update you within 30 days of any move or rebrand |
| 2 | **Client begins practising in another country** (or moves between jurisdictions) | The legal references in the General cookie introduction — for an Irish site this is `S.I. No. 336/2011` and `GDPR`. Different jurisdictions use different statutes (UK = PECR + UK GDPR; etc.) | Notify the client to inform you before any expansion to a new jurisdiction |
| 3 | **A consent category previously marked "not used" starts being used** | Replace the "not used" disclaimer for that category with the generic capability-based wording from `banner-copy-playbook.md` | Notify the client to inform you within 7 days of adding any new tool that triggers a category change (analytics, ads, social embeds, chat widgets) |
| 4 | **DPC publishes updated guidance** that changes the interpretation of S.I. 336/2011 Reg 5(3), or the EDPB releases new banner-design positions | Walk through the new guidance against the existing copy. Update phrasing where the new interpretation requires clearer or different wording | Diary an annual check of `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf` against the latest version on dataprotection.ie, and the EDPB report against the latest version on edpb.europa.eu |

**Workflow when any trigger fires:**

1. Open the client's `banner-copy-[CLIENT].md`.
2. Update the affected blocks.
3. Paste the updated blocks into the Cookiebot admin dashboard.
4. Run the compliance screenshot script with a descriptive label:
   ```bash
   npx tsx scripts/compliance-screenshot.ts banner-copy-update-[reason]
   ```
5. Save dated evidence in `legal-compliance/compliance-records/` so the audit trail shows when each version of the banner went live.

**What is not on this list (intentionally):** turning analytics on or off, starting or ending an ad campaign, adding or removing social embeds, swapping one analytics tool for another. Capability-based wording handles all of these with no copy changes — Cookiebot's automatic scan keeps the Cookie Declaration up to date with the actual cookies set.

> **However**, those same events DO require a separate review: the **Cookie classification review** below. Banner copy stays stable, but the cookies inventory and Necessary-category classification must be re-checked every time the tool stack changes.

---

## Cookie classification review triggers — when to revisit the Necessary category

Separate from banner copy review. This list governs **which cookies are classified as "Necessary" / "Strictly Necessary"** in the Cookiebot dashboard. The classification matters because Necessary cookies fire without consent under Reg 5(5) of S.I. 336/2011 — so a mis-classified cookie is set unlawfully.

### Examples of cookies that legitimately qualify as Necessary on a solicitor's-firm site

Reg 5(5) and the DPC guidance both define "strictly necessary" narrowly. The cookie must be essential to delivering a service the visitor explicitly asked for, not just convenient for the firm. Concrete examples that pass that test on a solicitor's site:

- **Session cookies for a secure client portal** — if the firm offers a logged-in area for clients to view documents, the session cookie that keeps them logged in is essential to the service they asked for.
- **Authentication cookies for document access** — same reasoning: a cookie that authorises a specific document download for a specific client is delivering the service the client requested.
- **Cart / checkout cookies for an online fee-payment system** — if the firm accepts fees online, the cookies that hold the payment session are essential to the transaction.
- **Language / region preference cookies** where the site offers multiple languages.
- **The Cookiebot consent record itself** — paradoxically, the cookie that records the visitor's consent decision is necessary to honour that decision on subsequent page loads.

What does **not** qualify, even though firms sometimes argue it does:

- Analytics cookies of any kind (including "first-party" / "self-hosted" analytics)
- "Performance" or "user experience improvement" cookies
- Anything that tracks behaviour across pages for the firm's benefit rather than the visitor's
- A/B testing cookies

The EDPB Cookie Banner Taskforce report addresses this directly in **Section 8 (Type I Practice — Inaccurately Classified Essential Cookies, Paras 26–30)**. See `edpb-2023-compliance-evidence.md` Section 8 for the verbatim rules and the burden-of-proof reasoning.

| # | Trigger | What to update | Why |
|---|---|---|---|
| 1 | **Any analytics tool added** (Google Analytics, Plausible, Matomo, Hotjar, Mixpanel, etc.) | Run a fresh Cookiebot scan. Confirm new cookies are auto-classified as **Statistics**, not Necessary. Update the cookie inventory in the README "Strictly necessary cookies" table to reflect the new state. | Analytics is for the controller's benefit, not the visitor's — fails the Para 26 "ordinary meaning" test for Necessary. |
| 2 | **Any advertising tool added** (Google Ads, Meta Pixel, LinkedIn Insight, retargeting pixels, conversion tracking) | Run a fresh Cookiebot scan. Confirm new cookies are auto-classified as **Marketing**, not Necessary. If Cookiebot's dashboard shows a "Legitimate Interest" section for ad cookies, **disable it** (per `edpb-2023-compliance-evidence.md` Section 7 Para 24 — legitimate interest cannot be the legal basis for cookie placement). | Advertising cookies always require consent. Mis-labelling them as Necessary or running them under "legitimate interest" are both Section 7/8 dark patterns the DPC actively investigates. |
| 3 | **Any social media embed or share widget added** (Facebook Like, Twitter/X embed, LinkedIn share, YouTube/Vimeo embed) | Run a fresh Cookiebot scan. Confirm any tracking cookies set by the embed are classified as **Marketing**, not Necessary. Consider whether the embed should be wrapped in a consent-required loader. | Social embeds typically set tracking cookies that are not essential to the page's primary purpose. |
| 4 | **A new tool replaces an existing one** (e.g. GA4 → Plausible, Hotjar → Microsoft Clarity) | Re-run the same scan and inventory check. Confirm the new tool's cookies have the same classification as the tool they replaced, not a more lenient one. | Some tools market themselves as "no cookies" or "privacy-first" but still set local-storage items that count as tracking under ePrivacy law. |
| 5 | **An annual review** (every 12 months from launch) | Run a fresh Cookiebot scan even if the tool stack has not changed. Compare the new scan against the previous inventory. Investigate any new cookie. | Cookies change over time even when the tool list does not — Para 27 of the EDPB report explicitly recognises this. |

**Workflow when any cookie classification trigger fires:**

1. **Open the Cookiebot dashboard → Cookies and Trackers → Run Scan.**
2. **Review every cookie returned by the scan**, especially any classified as Necessary that wasn't there before.
3. **For each cookie classified as Necessary, confirm a written justification exists** in the Cookiebot dashboard description field. The justification must explain why the cookie is essential to delivering a service the visitor asked for — referencing Para 30's preference-cookie rule if applicable. *"Helps the site work better"* is not enough; *"records the visitor's consent choice so the banner does not re-appear on every page"* is enough.
4. **Update `legal-compliance/cookies/banner-copy-[CLIENT].md`** if any new category becomes active that was previously dormant (e.g. Statistics was disclaimed as "not in use" and is now in use). Banner copy is usually capability-based and survives this — see banner copy triggers above for when wording does need to change.
5. **Update the README's "Strictly necessary cookies" inventory** to add or remove rows.
6. **Run the compliance screenshot script with a descriptive label:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts cookie-classification-review-[reason]
   ```
7. **Save dated evidence in `legal-compliance/compliance-records/`** so the audit trail shows when each version of the cookie inventory went live.

**The non-negotiable rule:** no analytics, advertising, profiling, retargeting, or social tracking cookie may ever be classified as Necessary. The Necessary category is reserved for cookies that fit the WP29 Opinion 04/2012 / EDPB Para 30 preference-cookie rule, or that are required for fundamental site security and session management.

**Notes for the future Mary's-site Google Ads launch:**

When Google Ads goes live on Mary's site (planned, no fixed date as of 2026-04-27), the cookies it will introduce typically include:

- `_gcl_au` — Google Ads conversion linker. Must be classified as **Marketing**.
- `_gcl_aw` — Google Ads click ID. Must be classified as **Marketing**.
- `_ga`, `_gid` — Google Analytics (often added at the same time). Must be classified as **Statistics**.
- `IDE`, `DSID`, `NID` — set by Google's domain itself for ad personalisation. Must be classified as **Marketing**.

Cookiebot's auto-classification handles all of these correctly by default. The check is to **confirm** the auto-classification, not to re-classify them manually. If any of these ever appears in the Necessary category, that is a configuration error and a Section 8 violation — investigate before launch.

---

_Last reviewed: April 2026. Update this checklist when Cookiebot's admin UI changes or when DPC guidance is revised._
