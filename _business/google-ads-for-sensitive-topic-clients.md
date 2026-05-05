# Google Ads for Sensitive-Topic Clients — Operational Guide

_Drafted 2026-05-03. Internal operational guide — not client-facing._

This document explains how to run Google Ads (and similar paid-ad platforms) for clients whose practice or service includes sensitive-topic content, **without installing any trackers on the client's site**.

It is the operational counterpart to `_business/sensitive-topic-tracking-policy.md`, which is the policy "why." This is the "how."

---

## Premise — what we are working with

The blanket-no policy means:
- No Google Analytics on the site
- No Google Ads conversion tracking tag on the site
- No Meta Pixel, no Microsoft Clarity, no Hotjar, no remarketing pixel of any vendor
- No tag manager (GTM) — would just be a vehicle for the above

That removes:
- Automated conversion measurement
- Remarketing audiences
- Lookalike audiences
- Interest-based / behavioural targeting on visitors

**It does not remove the ability to run paid ads at all.** What follows is what you can still do, and how.

---

## What is allowed without trackers

### 1. Google Search ads on neutral keywords

These work entirely without site-side code. The flow:

- Visitor types a search query in Google.
- Your ad shows because you bid on the keyword.
- Visitor clicks → lands on the chosen page on the site.
- Google Ads dashboard records the click and the cost natively.

You do not need any tag, pixel, conversion code, or analytics on the site. The Google Ads dashboard's own click metrics are server-side at Google's end — they don't need anything on yours.

**What "neutral keywords" means:**
- Allowed: profession-and-location terms (*"family solicitor Kilkenny"*, *"personal injury solicitors Carlow"*), service descriptions (*"conveyancing solicitor"*, *"will writing service"*), brand terms (the firm's own name).
- Avoid: keywords that imply the searcher's situation (*"how do I get divorced fast"*, *"compensation for whiplash"*) — these may be flagged under Personal Hardships restrictions even for search ads in some configurations.

### 2. Branded search ads

The lowest-risk paid-ad form: bid on the firm's own name. Visitors searching directly for the firm see the ad above (or instead of) the organic result. Useful when competitors bid on your brand name or when you want guaranteed visibility for your own brand searches.

### 3. Location-radius targeting

Google Ads lets you constrain ad delivery to a geographic radius (e.g. "show ads to people physically within 25 km of Kilkenny"). This is **not personalisation by personal attribute** — it is targeting the ad at the right market. Allowed without trackers.

### 4. Negative keywords

Critical for sensitive-topic firms. Add negative keywords to suppress your ads on queries that would land in Personal Hardships territory:
- `-divorce` (if running general family-law ads)
- `-mental health` (if running general health-services ads)
- `-injury claim now` (if running general PI ads)

This prevents your ad from showing in the personal-hardship contexts the platform restricts anyway.

### 5. Ad-extension features that work without trackers

- **Call extensions** — Google provides a forwarding number that masks the firm's real number. Calls received via the extension are counted as conversions in the Google Ads dashboard. **This is the primary conversion signal you'll use** instead of pixel-based tracking.
- **Location extensions** — connects the ad to the firm's Google Business Profile. Visitor sees address, hours, directions inside the ad.
- **Sitelink extensions** — extra clickable links beneath the main ad text (Conveyancing / Probate / Contact).
- **Callout extensions** — short non-clickable benefit phrases (Free Consultation, 30 Years' Experience).

All five extension types operate platform-side. No site-side code required.

---

## What is banned for sensitive-topic services regardless of trackers

### Google's Personalised Advertising Restrictions

Personalised / interest / behavioural / remarketing ads are banned by Google's own contract for these categories:

- Sexual interests (including dating)
- Personal hardships (divorce, separation, child custody, family-status changes, bereavement, mental health, addiction recovery)
- Identity and belief (race, religion, sexual orientation)
- Crime and tragedies
- Political content (in many regions)

This means you cannot run:
- **Display network ads** for family-law / PI / criminal-defence services using interest targeting
- **YouTube ads** using interest or audience targeting on hardship topics
- **Performance Max campaigns** for hardship services (Performance Max relies on signals that are banned for these categories)
- **Remarketing campaigns** showing ads to people who visited the hardship pages
- **Lookalike / similar audience campaigns** built from past converters in hardship categories

Search ads on neutral keywords remain allowed because they are reactive (responding to a user-typed query), not personalisation.

### Meta Special Ad Categories

Meta restricts targeting for ads in:
- Credit
- Employment
- **Housing** (which can capture conveyancing in some interpretations — flag for legal review if the firm wants to run conveyancing ads on Meta)
- Social issues / elections / politics

Meta also bans ad copy that "exploits personal attributes" (implies the viewer's sensitive situation). Ad copy must be neutral.

---

## Conversion measurement without trackers

The single biggest concession the no-trackers position requires: **automated conversion attribution stops working**. Three workarounds, in order of accuracy:

### 1. Phone-call tracking via Google Ads call extensions

**How it works:** Google generates a forwarding number that appears in your ads. When a visitor calls that number, Google routes the call to the firm's real number and logs it as a conversion in the Google Ads dashboard.

**What you get:**
- Number of calls per ad / campaign / keyword
- Call duration (Google can be configured to count only calls over X seconds as conversions)
- Cost-per-call
- ROI on a per-campaign basis

**What you don't get:**
- Identity of the caller (Google does not share PII with the advertiser)
- Whether the call became a paying client (the firm tracks that internally)

**Setup:** in the Google Ads dashboard, enable call extensions on each campaign. No site-side code.

### 2. UTM-tagged ad URLs + form-submission logs

**How it works:** every ad URL gets a UTM tag identifying the campaign:
```
https://marymolloysolicitor.ie/contact?utm_source=google&utm_medium=cpc&utm_campaign=conveyancing-kilkenny
```
The contact form's server-side logs (not analytics — the form's own database / log file) record the UTM parameters with each submission. You can later query: *"how many enquiries last month had `utm_campaign=conveyancing-kilkenny`?"*

**What you get:**
- Form submissions attributed to specific campaigns
- Server-side, no client-side tracking, no third-party data flow
- Compatible with the no-trackers policy because the data stays on the firm's own server

**What you don't get:**
- Cross-device attribution (visitor clicks ad on phone, fills form on desktop later — UTM is lost)
- Bounce rate, time-on-page, scroll depth, all the other GA-style metrics

**Setup:** the contact form already logs submissions; just ensure the form captures the URL parameters at submission time. One small code change at the form-handler level.

### 3. Manual matching at the firm side

Mary or Duke notes which channel each enquiry came from when answering the phone or replying to the form. Two questions:
- *"How did you hear about us?"*
- *"Did you see one of our adverts?"*

Crude but accurate, and the only way to attribute conversions for clients who came via channels the UTM doesn't cover (referral, word of mouth, organic search to brand name).

Combine all three and you get a fairly complete picture of which marketing investments produce enquiries.

---

## Defensible Google Ads campaign structure for a sensitive-topic firm

Use a four-campaign structure as the default starting point:

### Campaign 1 — Brand defence

- **Keywords:** the firm's own name and variations (Mary Molloy Solicitor, Mary Molloy Kilkenny, Molloy Solicitors, etc.)
- **Match type:** exact + phrase
- **Negative keywords:** competitors' names
- **Daily budget:** small (€2–€5/day) — branded clicks are cheap
- **Purpose:** ensure visitors searching for the firm by name find the firm, not a competitor's ad

### Campaign 2 — Neutral profession + location

- **Keywords:** *"solicitor Kilkenny"*, *"solicitors near me"*, *"Kilkenny solicitors firm"*
- **Match type:** phrase + broad-match-modified
- **Negative keywords:** `-divorce -family law -personal injury -criminal -compensation` (steers ad away from hardship triggers; the firm's family-law and PI keywords get a separate, more carefully scoped campaign)
- **Daily budget:** medium (€10–€20/day)
- **Purpose:** capture local profession-search intent

### Campaign 3 — Specific service campaigns (one per service)

- One campaign per non-hardship service (conveyancing, wills, commercial, employment).
- **Keywords for conveyancing:** *"conveyancing solicitor Kilkenny"*, *"buying a house solicitor Kilkenny"*, *"property solicitor Kilkenny"*
- **Daily budget:** depends on margin (conveyancing has clear value, can support €15–€30/day)
- **Purpose:** capture service-specific searches with high intent

### Campaign 4 — Family law / PI (sensitive services)

- Run **only if** the firm wants visibility for these terms and accepts the constraint that personalisation is unavailable.
- **Keywords:** *"family law solicitor Kilkenny"*, *"divorce solicitor Kilkenny"* — specific service searches only.
- **Negative keywords:** `-cheap -fast -emergency -urgent` (filter out distress queries that may trigger Personal Hardships flagging).
- **Match type:** phrase only (avoid broad match — too easy to drift into hardship territory).
- **Ad copy:** rigorously neutral. *"Family law solicitors in Kilkenny — call for an appointment"* is fine; *"Need help with your divorce? Call us today"* is not.
- **Bidding:** manual CPC, not automated bidding (automated bidding uses signals that may be banned for hardship categories).
- **Daily budget:** small (€5–€10/day) — these searches are expensive per click and the campaign cannot use the optimisation features that make ad spend efficient.
- **Purpose:** baseline visibility for the firm's family-law / PI lines.

### What never to run

- **Performance Max campaigns** — they rely on signals that are banned for hardship services.
- **Display network campaigns with interest targeting** — banned for hardship services.
- **YouTube ads with interest targeting** — banned for hardship services.
- **Remarketing of any kind** — needs a Pixel, which the policy prohibits.
- **Lookalike / similar audience campaigns** — banned for hardship services and would need a tracker.

---

## Cost-per-click reality check (Irish solicitor keywords, 2025–2026)

These are rough orders of magnitude — they shift quarterly. Treat as planning numbers, not commitments.

| Keyword family | Approx CPC (Ireland, 2025–2026) | Note |
|---|---|---|
| Branded (firm's own name) | €0.20 – €1.00 | Cheap; mostly defending against competitors |
| *"solicitor Kilkenny"* / generic profession + location | €2 – €5 | Moderate |
| *"conveyancing solicitor"* | €4 – €8 | Higher because conveyancing has clear value per client |
| *"family law solicitor"* / *"divorce solicitor"* | €8 – €18 | Expensive; limited optimisation tools available |
| *"personal injury solicitor"* | €15 – €40+ | The most expensive solicitor keywords in Ireland |
| *"compensation lawyer"* / *"no win no fee"* | €25 – €60+ | Very high; PI claim-farms have driven prices up |

Without remarketing, lookalike audiences, or conversion-optimised bidding, the same campaign costs more per acquired client than it would with full tracking. Build that into the budget conversation with the client — if the answer is *"this won't pay back unless we track,"* the right answer is *"don't spend on paid ads — invest in SEO and GBP instead."*

---

## SEO + Google Business Profile — the higher-leverage alternative

For most sensitive-topic firms, paid ads are not the first marketing investment. SEO and Google Business Profile produce more enquiries per euro spent, do not carry the regulator-risk profile, and compound over time.

### SEO for solicitor sites

- One well-written practice-area page per service is worth more than many shallow pages.
- Local citations (legal directories, Yellow Pages, Yelp, Solicitors Directory Ireland) build the local-SEO foundation.
- Google reviews, especially on the firm's GBP, are the single biggest local-SEO signal.
- Long-form FAQ content captures long-tail search queries that paid ads are too expensive to bid on.

### Google Business Profile

- Free, no Section 22 trigger, no DPIA needed (the GBP is solicitor-side, not visitor-side).
- Address, hours, photos, reviews, posts.
- Google Maps presence handled automatically.
- Insights dashboard inside GBP shows search and direction queries — adequate marketing visibility for most firms.

A well-maintained GBP often produces more enquiries per month than a moderate Google Ads spend, for zero CPC and zero compliance work.

---

## Worked example — Mary Molloy Solicitor

This is the campaign structure that would be defensible for Mary's firm if she later wanted to add paid ads.

**Foundation work first (no ads needed):**
1. Optimise the Google Business Profile — verified, hours accurate, photos, regular posts, requesting reviews from happy clients.
2. SEO foundations — practice-area pages already written and live; submit sitemap; build directory citations.
3. Wait 3–6 months. Review whether organic enquiry volume needs supplementing.

**If paid ads are then justified:**

- **Campaign 1 — Brand defence** at €3/day. Keywords: *Mary Molloy Solicitor*, *Mary Molloy Kilkenny*, *Molloy Solicitors Kilkenny*.
- **Campaign 2 — Neutral profession** at €15/day. Keywords: *"solicitor Kilkenny"*, *"solicitors Kilkenny"*. Negative keywords: `-divorce -family -injury -criminal -compensation -trade union -accident -claim`.
- **Campaign 3a — Conveyancing** at €20/day. Keywords: *"conveyancing solicitor Kilkenny"*, *"property solicitor Kilkenny"*, *"buying a house solicitor Kilkenny"*.
- **Campaign 3b — Wills and probate** at €10/day. Keywords: *"wills solicitor Kilkenny"*, *"probate solicitor Kilkenny"*.
- **Campaign 4 — Family law (sensitive)** at €8/day. Keywords: *"family law solicitor Kilkenny"* phrase match only. Manual CPC. Negative keywords: `-cheap -fast -emergency -urgent -free`.
- **Campaign 4b — Personal injury (sensitive)** at €8/day. Keywords: *"personal injury solicitor Kilkenny"* phrase match only. Manual CPC. Negative keywords: `-no win no fee -instant -compensation calculator`.

**Total starting daily spend:** ~€64/day (~€1,950/month).

**Conversion measurement:**
- Call extensions enabled on every campaign.
- All ad URLs UTM-tagged.
- Contact form's server-side log captures UTM parameters with each submission.
- Mary or Duke asks every enquirer how they heard about the firm; notes the answer.

**No trackers on the site. No Pixel. No Analytics. No conversion tag.**

**Review monthly:**
- Calls received per campaign (from Google Ads dashboard call extension report)
- Form submissions per campaign (from form-server UTM logs)
- Cost-per-call and cost-per-form-submission
- Adjust budget allocation based on which campaigns actually convert

After 3 months you will have enough data to know which campaigns are paying back and which aren't. Cut the ones that aren't. Reinvest in SEO and GBP.

---

## Cross-references

- **Source-of-truth policy:** `_business/sensitive-topic-tracking-policy.md`
- **Client-facing FAQ:** `_business/sensitive-topic-tracking-client-faq.md`
- **Triage to apply this in onboarding:** `legal-compliance/cookies/client-onboarding-checklist.md` Phase 0
- **DPC Sections that anchor the policy:** `legal-compliance/cookies/dpc-guidance-walkthrough.md` Sections 22, 24, 25

---

_Last reviewed: 2026-05-03. Revisit when Google or Meta change their Personalised Advertising / Special Ad Categories policies._
