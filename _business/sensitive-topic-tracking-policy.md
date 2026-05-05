# Sensitive-Topic Tracking Policy — Internal Working Document

_Drafted 2026-05-03. Internal policy — not client-facing._

This document is the source-of-truth answer to one question that comes up on almost every regulated-profession engagement:

> *"Can I install Google Analytics, Meta Pixel, or Google Ads conversion tracking on this site?"*

For sensitive-topic clients (solicitors, doctors, counsellors, debt advisers, etc.) the answer is **no — site-wide, no exceptions**, and this document explains why with citations strong enough to defend in writing to a client, a regulator, or a lawyer of your own.

---

## The headline position

**For sensitive-topic-profession sites, no trackers anywhere — not even on neutral pages.**

There is a more nuanced version of this rule that says *"trackers OK on neutral pages, suppressed on sensitive pages."* That nuanced version is technically correct and would pass audit if perfectly implemented. **It is not the position this policy takes**, for one reason that outweighs every technical argument:

> **One mistake is forever.** A single misconfigured deploy that leaks a tracker onto a sensitive page produces evidence in third-party access logs (Google's, Meta's) that does not expire and cannot be retracted. The audit-trail breach is permanent.

The blanket-no rule eliminates a whole class of failure modes that the per-page rule does not:

- A developer misroutes a page during a refactor and the suppression silently breaks.
- A framework upgrade changes how route matching works and the kill-switch stops firing.
- A new sensitive page is added and someone forgets to add it to the exclusion list.
- A third-party tag manager loads a script that bypasses the gating logic.
- A staging-vs-production config mismatch ships the wrong build.

Each of those is a realistic failure mode. With the per-page rule, any one of them is a permanent breach. With the blanket-no rule, none of them can fire because there is nothing to fail.

The marketing value lost by saying no to trackers is **small for sensitive-topic professions** (see below). The risk eliminated is **large and irreversible**. The arithmetic favours blanket-no.

---

## The two-question framing

There are two distinct compliance questions, and they have different answers and different sources. Conflating them is what causes most of the confusion.

| Question | Short answer | Source |
|---|---|---|
| **1. Can I track visitors on sensitive-topic pages?** | No. Firing a tracker on a page that reveals a special category creates an unlawful Article 9 processing event. | DPC Section 25 + EDPB Guidelines 8/2020 + GDPR Article 9 + CJEU *Breyer* |
| **2. Can I run *targeted* / personalised ads about sensitive-topic services?** | No, even with no trackers at all. The platforms' own ad policies prohibit it independently. | Meta Business Tools ToS + Google Personalised Advertising Policy |

The two restrictions stack. Both must be cleared for tracking + advertising to be lawful and contractually permitted. For sensitive-topic clients, **both restrictions bind** — and the operational risk of getting the suppression right per-page is severe enough that the prudent answer is no across the whole site.

---

## Question 1 — The tracking-side problem

### The citation chain

The reasoning that lands "no Meta Pixel on a family-law page" runs through five sources:

**1. GDPR Article 9 + Recital 51** — Special category data includes *"data revealing"* health, sex life, sexual orientation, religious belief, etc. The phrase "revealing" is broader than "explicitly stating" — inferred special category counts.

**2. DPC Section 25 (Cookie Guidance, April 2020)** — Verbatim: *"In practice, the only likely legal basis your organisation will have for processing any special category data derived from the use of cookies or other tracking technologies, is the explicit consent of those individuals whose data you are processing. The bar to demonstrate that you have the explicit consent of users for the processing of their special category data is a high one and it is unlikely to be met by means of generic information in a cookie banner or privacy policy."*

**3. EDPB Guidelines 8/2020 on the targeting of social media users, paragraph 124** — *"Targeting based on visiting websites about specific health conditions ... amounts to the processing of special categories of data."*

**4. CJEU *Breyer* (Case C-582/14)** — IP address combined with the URL the visitor is on **is personal data** when an identifier-holder could plausibly link them. So a tracker firing on `/services/family-law` and sending the URL alongside an identifier (cookie, IP, ad ID) creates a personal-data record about an identifiable visitor.

**5. Combined effect** — A tracker fires on `/services/family-law`. The URL plus the visitor's tracker identifier = personal data **revealing an Article 9 inference** (this person is interested in family law / has the health context the page implies). The DPC says the bar to lawfully process that data via cookies is high and unlikely to be met by a generic banner. So the tracker firing constitutes special category processing without a defensible lawful basis.

### What the chain does NOT say

It does not say *"the DPC explicitly bans Meta Pixel on family-law pages."* The DPC text is general, not vendor-specific. What lands the conclusion is the EDPB inference rule (#3) and *Breyer* (#4). When citing this in client docs, separate the DPC quote from the inferential layer.

### Why blanket-no rather than per-page suppression

The per-page rule (*"trackers fire on home / about / conveyancing, suppressed on family-law / PI / criminal-defence"*) is technically defensible if the suppression works perfectly forever. It does not work perfectly forever:

- A developer adds a new page touching a sensitive area and forgets the exclusion list.
- A route gets renamed in a refactor and the URL match breaks.
- A static page becomes dynamic during a rebuild and the gating doesn't transfer.
- A team handover documentation gap leaves the next developer unaware of the rule.
- Cookiebot or the framework changes how scripts are blocked and the gating silently stops working.

Any one of those produces tracker hits in Google's or Meta's logs from a sensitive-topic page. **Those logs do not expire.** A regulator inspecting two years later can still find the breach.

The blanket-no rule has zero such failure modes because there is no gating logic to break. The cost — losing automated conversion tracking — is small for sensitive-topic firms (see the marketing-value section below).

---

## Question 2 — The targeting-side problem

The platforms' own contracts prohibit advertising about sensitive topics regardless of whether you track anything. This restriction operates entirely independently of GDPR.

### Meta (Facebook / Instagram)

Meta's restrictions split across two policies:

- **Special Ad Categories** (Meta Business Help) — credit, employment, housing, social issues / elections / politics. Targeting is stripped down for ads in these categories.
- **Sensitive Information / Prohibited Content** (Business Tools Terms) — bans ads that "exploit personal attributes," including ads that imply or infer the viewer is in a sensitive personal situation.

Worked examples for solicitor work:

| Ad copy | Meta status |
|---|---|
| *"Going through a divorce? We can help."* | **Prohibited.** Implies the viewer is divorcing. |
| *"Family law solicitors in Kilkenny"* | Allowed. Doesn't imply anything about the viewer. |
| *"Injured at work? Claim what you're owed."* | **Prohibited.** Implies health condition. |
| *"Personal injury solicitors — free consultation"* | Allowed. Service ad, not viewer-targeting. |

### Google Ads

Google's **Personalised Advertising Restrictions** ban *personalised advertising* for these categories:

- Sexual interests (including dating)
- **Personal hardships** (divorce, separation, child custody, family-status changes, bereavement, mental health, addiction recovery)
- Identity and belief (race, religion, sexual orientation)
- Crime and tragedies
- Political content (in many regions)

Critically, **divorce and family-status changes sit inside Google's Personal Hardships category**, which means personalised / interest / behavioural / remarketing ads about family law services are banned by Google's own contract.

### What's still allowed — and works without trackers

| Mechanism | Sensitive-topic status | Needs trackers? |
|---|---|---|
| **Search ads on neutral keywords** (visitor types *"family solicitor Kilkenny"*) | Allowed. Reactive, not personalised. | No |
| **Branded search ads** (visitor types the firm's name) | Allowed. | No |
| **Location-radius targeting** (show ads to people physically in Kilkenny) | Allowed. Not personalisation by personal attribute. | No |
| **Personalised / interest / behavioural / remarketing ads** | **Banned by platform policy** for sensitive-topic services. | (irrelevant — banned) |
| **Lookalike audiences** built on past visitors / converters | **Banned by platform policy** for sensitive-topic services. | (irrelevant — banned) |

The ad mechanisms that **are** allowed all work without any code on the site. See `_business/google-ads-for-sensitive-topic-clients.md` for the operational guide.

---

## The synthesis — why blanket-no is net-positive for sensitive-topic clients

Combine Questions 1 and 2:

- **Tracking-side:** Trackers can't fire on sensitive-topic pages without breach. A blanket-no rule eliminates the entire class of "what if the suppression fails" failure modes.
- **Targeting-side:** Personalised / behavioural / retargeting ads about sensitive-topic services are banned by platform policy regardless of trackers.
- **Personalisation features the trackers exist to enable are largely the features the client is not allowed to use anyway** — even on neutral pages, the personalisation lift you get for solicitor work is small (the audience is usually keyword-driven, not interest-driven).

Installing trackers — even with perfect per-page suppression — is paying:
- Section 22 paperwork (joint-controller assessment, Article 26 addendum, privacy policy update)
- Section 24 DPIA
- Section 25 special-category exclusion logic
- Article 30 RoPA new-activity row
- Processor agreement filing
- Ongoing maintenance whenever DPAs, sub-processors, or guidance change

…in exchange for:
- Automated conversion tracking (replaceable by call tracking + form UTMs)
- Audience optimisation features (largely banned for the firm's main services anyway)
- Permanent audit-trail risk if any future failure leaks a tracker onto a sensitive page

The arithmetic is clear: **the marketing value lost by saying no to trackers is small for sensitive-topic firms; the risk eliminated is large and irreversible.** Blanket-no is the right answer.

---

## What you can still do without trackers

A sensitive-topic client who follows this policy can still:

1. **Run Google Ads campaigns** — search ads on neutral keywords for any practice area, brand campaigns, location-radius targeting. No site-side code. Click counts and CPC visible in the Google Ads dashboard.
2. **Measure conversions via call tracking** — Google Ads' built-in call extensions provide forwarding numbers; calls received = conversions counted.
3. **Measure conversions via form UTMs** — adding `?utm_source=google&utm_campaign=conveyancing` to ad URLs lets the form's own server-side logs identify which campaign produced each enquiry.
4. **Optimise SEO** — content, structure, GBP, citations, reviews. SEO compounds and doesn't carry the regulator-risk profile of trackers or paid ads.
5. **Optimise Google Business Profile** — local visibility, reviews, posts, photos. Free, high-leverage for local-services businesses.
6. **Manual marketing matching at the firm side** — Mary or Duke notes which channel each enquiry came from. Crude but accurate.

The operational details for each are in `_business/google-ads-for-sensitive-topic-clients.md`.

---

## The client categorisation table

The blanket policy *"no trackers, ever"* is right for sensitive-topic clients; it's wrong for non-sensitive clients.

| Client type | Trackers OK? | Personalised ads OK? | Default position |
|---|---|---|---|
| **Solicitor** (any practice area touching family / PI / criminal / immigration / debt) | No (site-wide) | No | No trackers; SEO + GBP + neutral search ads only |
| **Doctor / GP / clinic / counsellor / therapist / psychologist** | No (site-wide) | No | Same |
| **Addiction / mental health / disability / bereavement services** | No (site-wide) | No | Same |
| **Debt advice / insolvency / bankruptcy / financial-distress adviser** | No (site-wide) | No | Same |
| **Religious / political / advocacy organisation** | No (site-wide) | No | Same |
| **Recruitment for sensitive sectors (medical, legal, government)** | Borderline | No | Default no |
| **General business — trades, retail, hospitality, SaaS, e-commerce, B2B, professional services without sensitive-topic content** | Yes (with paperwork) | Yes (with paperwork) | Standard setup with full Section 22/24 work and a frank cost conversation |
| **Public-sector or regulated-finance** | Case-by-case | Case-by-case | Specialist legal review required first |

For non-sensitive clients, the Section 22 / 24 paperwork still applies and the cost conversation is still mandatory — but the regulator-risk profile is materially lower because the special-category problem doesn't fire.

---

## Decision logic — when you say no, when you say yes-with-conditions

```
Client requests analytics or paid ads
  │
  ├─ Is the client in the sensitive-topic table above?
  │     │
  │     ├─ YES → Refuse trackers (site-wide). Refuse personalised ads.
  │     │       Recommend: SEO + Google Business Profile + search-only Google Ads on neutral keywords.
  │     │       Hand the client the FAQ doc.
  │     │
  │     └─ NO  → Proceed to next gate.
  │
  ├─ Has the client read the cost conversation? (1 working day per tool of compliance work + ongoing maintenance)
  │     │
  │     ├─ NO  → Have the conversation first. Hand them the Section 22 trigger checklist.
  │     │
  │     └─ YES → Proceed to next gate.
  │
  ├─ Is the client willing to commission the DPIA, Article 26 addendum acceptance, RoPA update, and privacy policy revision?
  │     │
  │     ├─ NO  → Refuse. The legal work is non-negotiable.
  │     │
  │     └─ YES → Proceed with full Section 22 / 24 implementation.
```

The first gate is the load-bearing one. For sensitive-topic clients it terminates the conversation cleanly with a strong commercial alternative.

---

## When a sensitive-topic client insists on full tracking despite the recommendation

Some clients will push. Three honest options to give them, in order of preference:

**Option A (recommended) — accept the policy.**
No trackers. Search ads on neutral keywords. SEO and GBP. Manual conversion measurement. Move on.

**Option B (defensible compromise) — landing-page-only ring-fence.**
1. The main site has no trackers.
2. A single dedicated landing page (e.g. `/get-a-call-back-conveyancing`) is created for paid ad campaigns about non-sensitive services only.
3. The landing page's URL must be **non-sensitive** — a conveyancing or general-enquiry landing page is fine; a `/get-help-with-your-divorce` page is not.
4. The Pixel / Ads tag fires only on that landing page, gated by Cookiebot.
5. The DPIA, RoPA entry, and privacy policy revisions cover only that landing page.
6. The main site stays clean.

This is the only configuration that lets a sensitive-topic firm run conversion-tracked paid ads with retargeting **on non-sensitive services** without breaching either limb of the analysis above. It still cannot lawfully run them on family-law / PI / criminal-defence services.

**Option C — refuse the engagement for that piece of work.**
If the client wants tracked retargeting for sensitive-topic services, refuse. Document the refusal in writing. Move on. This is not a service you should sell at any price.

---

## Cross-references

- **Operational rules for sensitive-topic Google Ads campaigns:** `_business/google-ads-for-sensitive-topic-clients.md`
- **Client-facing summary of this policy:** `_business/sensitive-topic-tracking-client-faq.md`
- **Engagement-time triage to apply this policy:** `legal-compliance/cookies/client-onboarding-checklist.md` Phase 0
- **Underlying DPC reasoning:** `legal-compliance/cookies/dpc-guidance-walkthrough.md` Sections 22, 24, 25
- **The five-step Section 22 trigger checklist:** `_scratch-remaining-work.md` Section 5

---

_Last reviewed: 2026-05-03. Revisit when DPC, EDPB, Meta, or Google publish updated guidance on sensitive-category processing._
