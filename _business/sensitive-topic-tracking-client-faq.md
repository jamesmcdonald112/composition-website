# Why I Don't Install Google Analytics or Ad Pixels on Your Website

_For clients in regulated professions — solicitors, doctors, counsellors, debt advisers, and similar._

This document explains why I take a different approach to website tracking for regulated-profession clients than most web developers do. If you've worked with another developer who installed Google Analytics and Meta Pixel as standard, you may be wondering why I don't.

The short version: **for sites that handle sensitive topics, the legal risk and the contract risk outweigh the marketing benefit.** Once you understand the trade-offs, most clients in your position agree.

---

## Why this only matters for some businesses

For most websites — a coffee shop, a SaaS app, a tradesperson's site — Google Analytics and Meta Pixel are normal and useful. The legal questions still apply, but the risk is manageable.

For your business, it's different because **what your clients come to you for is sensitive**. Family law, personal injury, mental health, debt advice, addiction recovery — these are areas the law treats as **special category data** under GDPR (Article 9). The same is true for a doctor's practice, a counsellor, a recruitment specialist for healthcare roles.

When a tracker fires on a page on your site, it tells Google or Meta that a specific person (identified by their cookie or IP address) has just looked at that page. If that page is `/services/family-law` or `/personal-injury` or `/addiction-counselling`, the platform now has a record that this person has an interest in a sensitive area of life.

**Recording that data without explicit, informed consent is unlawful.** The Data Protection Commission's own guidance says the bar for that consent is so high it cannot be met by a generic cookie banner.

---

## "Can't we just turn the tracker off on the sensitive pages?"

Yes — technically. But there are two problems.

**The first problem is that one mistake is forever.** A single misconfigured deploy, a route renamed in a refactor, a new sensitive page added without updating the suppression list — any of these silently leaks a tracker onto a sensitive page. The data goes into Google's or Meta's logs. Those logs do not expire. A regulator inspecting two years from now can still find the breach.

**The second problem is that the marketing benefit is small for your business anyway.** The features the trackers exist to enable — retargeting, lookalike audiences, interest-based ads about sensitive services — are independently banned by Google's and Meta's own contracts. Google's Personalised Advertising Restrictions explicitly prohibit personalised ads about divorce, family hardship, mental health, bereavement, and similar. Meta has equivalent rules.

So you'd be paying the legal cost (DPIA, joint-controller paperwork, privacy policy revisions, ongoing compliance maintenance) for features the platforms won't let you use.

---

## "Can I still advertise?"

Yes — and you can do it well, without any trackers on your site.

**What still works without trackers:**

- **Google search ads on neutral keywords.** When someone types *"family solicitor Kilkenny"* into Google, your ad can still show. The Google Ads dashboard reports clicks and costs natively without anything on your site.
- **Branded search ads** (defending your firm's name against competitors).
- **Location-radius targeting** (showing your ads to people near your office).
- **Call extensions** — Google provides a forwarding number that masks your real number. Calls are counted as conversions in the dashboard.
- **Google Business Profile** — free, high-leverage for local visibility, no compliance overhead.
- **SEO** — well-written practice-area pages, directory citations, Google reviews. Compounds over time, doesn't carry tracker risk.

**What you give up:**

- Automated conversion tracking (which clicks led to which form submissions).
- Retargeting people who visited your site (largely banned for your services anyway).
- Vanity metrics (bounce rate, time on page, etc.) that don't translate into client decisions.

The conversion measurement gap is filled three ways:

1. **Call extensions in Google Ads** count phone-call conversions automatically.
2. **UTM-tagged ad URLs** (`?utm_source=google&utm_campaign=conveyancing`) let your contact form's own logs identify which campaign produced each enquiry — no tracker needed, all data stays on your server.
3. **Asking enquirers** *"how did you hear about us?"* — crude but accurate.

Combine all three and you get a complete picture of which marketing investments are paying back.

---

## "What do I lose without analytics?"

Honestly, less than you might think — for your specific business.

You lose:
- Vanity metrics (visitors, bounce rate, time on page).
- The ability to A/B test page variants automatically.
- Demographic insights about who visits your site.

For an e-commerce site, those metrics drive revenue decisions — should we change the checkout flow, which product images convert better, etc. For a solicitor's or doctor's site, the conversion event is "enquiry submitted" or "phone call received." You can count those without analytics. Everything else is information you don't actually act on.

You also gain:
- Faster page loads (no third-party scripts to download and execute).
- Better visitor privacy (no fingerprinting, no cross-site tracking).
- A cleaner privacy policy and cookie banner.
- Zero ongoing compliance maintenance for tracker DPAs and sub-processors.
- A competitive marketing message: *"we don't track our visitors"* is itself a trust signal in regulated professions.

---

## "What do I get instead?"

The marketing budget that would have funded analytics setup, DPIA, ongoing compliance, and personalised ad campaigns is better spent on:

1. **Google Business Profile** — free, but worth investing time in. Address, hours, photos, posts, and most importantly **reviews** from happy clients. Often produces more enquiries per month than a moderate Google Ads spend.

2. **SEO** — one well-written practice-area page per service, plus directory citations and reviews, builds organic visibility that compounds over years. Your site already has the foundation; building on it costs less than ongoing paid-ad spend.

3. **Search ads on neutral keywords** — for the practice areas where you want immediate visibility while SEO compounds. Search ads work fully without trackers.

4. **Content** — long-form FAQ articles answering the questions clients actually ask. Captures search traffic that paid ads are too expensive to bid on.

For most regulated-profession firms, this approach produces better long-term results than the GA-plus-Meta-Pixel approach — at lower cost and zero regulator risk.

---

## "Is this just you being cautious?"

It's a deliberate trade-off, not a default refusal. For a non-sensitive-topic business — a tradesperson, a coffee shop, a SaaS app — I'd install analytics and run the standard compliance work, and the trade-off would be different.

For your business, the maths is different because:

- The legal exposure is bigger (Article 9 special category data).
- The platform-side advertising features are banned for your services anyway.
- The marketing benefit of trackers is smaller for solicitor / medical / counselling work than for e-commerce.
- The audit-trail risk is permanent.

I take this position because I think it's the right one for your business specifically. If you'd prefer the standard approach despite the trade-off, I'm happy to talk through it — but I'd want you to understand the full picture first, which is what this document is for.

---

## Questions?

If anything in this document is unclear, or you want to talk through what marketing approach would work best for your firm, just send me a note. I keep the underlying compliance documentation up to date in case you ever need to demonstrate to a regulator how the site is configured.

---

_Last updated: 2026-05-03._
