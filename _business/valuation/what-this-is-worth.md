# What This Is Worth — Valuation Analysis

**Document type:** Plain-language valuation and pricing breakdown  
**Audience:** External reviewer, potential investor, or AI valuation model  
**Date:** 22 April 2026  
**Author:** James McDonald

---

## How to Read This Document

There are three things being valued here and they are not the same thing:

1. **The current deliverable** — the Mary Molloy Solicitor website as it stands today
2. **The system** — the reusable codebase, design system, AI workflow, and compliance infrastructure
3. **The business opportunity** — what this system is worth as a deployed product for multiple clients

Each has a different value and a different buyer. This document covers all three, then gives pricing in three models: one-off purchase, subscription/rental, and one fee with ongoing maintenance included.

---

## Part 1 — The Current Deliverable (Mary Molloy's Website Alone)

### What exists right now

A near-production Irish solicitor website with:
- 15 fully built pages, 4 more with content outstanding
- 8 complete service pages with long-form content, process steps, FAQs, CTAs
- 19 animated components with scroll-triggered GSAP animations
- A complete, tested contact form with Irish phone validation and PRG pattern
- Legal compliance infrastructure (Cookiebot, mandatory cost warnings on 5 pages, compliance screenshot tooling)
- Full SEO layer (structured data, canonical URLs, OG tags, E-E-A-T signals)
- A three-layer design token system with 4 fully verified colour themes
- Accessibility implementation beyond checkbox compliance
- A custom AI workflow system (6 specialist skills) for consistent quality on future changes
- Extensive developer documentation and research

### What this would cost to commission from an agency

**Irish agency market rate for a comparable build:** €5,000–€7,500 (Solicitorswebsites.ie, Red Studio, Nua, and similar). This is for a WordPress build of comparable page count with no animation work, no custom design system, no compliance infrastructure, and no AI workflow.

**What a premium agency would charge for this spec** — Astro, full GSAP animation suite, custom design system, legal compliance infrastructure, tested contact form, 8 full-content service pages, E-E-A-T implementation, Google Reviews integration — is realistically **€12,000–€18,000** from a boutique agency that could even do it. Most Irish agencies cannot deliver this spec at all. The UK benchmark (Conscious Solutions, the largest law firm web agency) charges £14,500 for a bespoke build and their product is WordPress-based, not Astro, and does not include the animation depth or compliance infrastructure built here.

### What it would cost to replicate this from scratch

This is a more honest number for valuation purposes. The system represents:

- **Research** — Irish legal advertising regulations (S.I. 644/2020), YMYL/E-E-A-T SEO strategy, Irish solicitor copywriting methodology, market analysis, competitor pricing, cookie compliance law. Documented in `_business/`, `_system/`, and `legal-compliance/`. This research is not generic — it is sector-specific and has been applied to every component of the build.
- **Design system** — three-layer token architecture, 4 verified colour themes with WCAG contrast ratios calculated and documented. This alone represents significant design systems work.
- **AI workflow** — 6 specialist skills files encoding Irish legal copywriting, LSRA compliance, premium web design standards, local SEO, and anti-AI-isms detection. Research-backed, domain-specific, applied across every content task.
- **Component library** — 19 animated components and ~25 structural components, all following consistent architecture.
- **Content architecture** — 8 complete service page configs (each containing full article, process steps, FAQs, trust items, CTAs), all in a type-safe, config-driven system.
- **Compliance tooling** — Playwright-based screenshot script, compliance records infrastructure, Cookiebot integration.
- **Contact form** — schema, validation, delivery, PRG pattern, session handling, tests, animation.
- **Documentation** — CLAUDE.md, README, `_system/`, `_business/`, TODO.md.

**Honest estimate of total hours invested:** The breadth of what is here — not just code but research, design system, AI workflow, compliance infrastructure, documentation — suggests a total investment in the range of 200–350 hours. At a professional developer rate of €75–€100/hour, that is €15,000–€35,000 of effort.

**This is not the market rate estimate (what an agency would charge). This is the replacement cost estimate (what it would take to rebuild it from zero).**

### Quality assessment of the current deliverable

| Area | Honest rating | Notes |
|---|---|---|
| Tech stack choices | Top level | Modern, correct, no legacy baggage |
| Design system | Top level | Three-layer token architecture; theme-swappable in one line |
| Animation system | Top level | 19 components; session-gated intro; `prefers-reduced-motion` correct |
| Content architecture | Top level | 100% config-driven; zero hardcoded content |
| Contact form | Top level | Complete, tested, production-ready |
| Legal compliance infrastructure | Top level | Unusually thorough; regulatory knowledge embedded in code |
| AI workflow system | Top level | Productised capability; consistent and enforceable across sessions |
| SEO technical layer | Strong | Structured data, E-E-A-T, full OG tags; sitemap and robots.txt outstanding |
| Accessibility | Strong | Substantive work; WAVE-checked; reduced motion correct |
| Unit test coverage | Good | Contact form well-covered; Playwright test suite not yet written |
| Legal page content | In progress | 4 pages outstanding (privacy, terms, complaints, accessibility statement) |

**The site is not finished, but it is not partially built either.** The core is complete and production-quality. What remains is content (legal pages) and deployment configuration. These are well-defined, low-risk tasks estimated at 2–4 working days.

---

## Part 2 — The System (The Reusable Product)

The single biggest factor in this project's value is not the Mary Molloy website. It is what the system behind it can produce.

### What the system is

A fully configured, documented, and AI-workflow-enabled product for building premium Irish solicitor websites, consisting of:

- **Astro 6 codebase** with a complete component library (44 components), all reusable across deployments
- **Design system** with 4 verified themes — any theme activates in one line of code; everything else is unchanged
- **Config-driven content architecture** — all site content is TypeScript config files; a second deployment requires editing config files, not touching components
- **AI workflow system** — 6 specialist skills that enforce Irish legal copywriting, LSRA compliance review, premium design standards, and local SEO on every content task, for every client
- **Legal compliance infrastructure** — Cookiebot integration, cost warning component, screenshot compliance tooling — all reusable with no modification per client
- **Research corpus** — market research, regulatory analysis, SEO strategy, copywriting methodology, competitor pricing — all documented and available to inform future deployments
- **Developer documentation** — CLAUDE.md, LAYOUT-REFERENCE.md, COMPONENT-DIRECTION-GUIDE.md, THEME-CREATION-GUIDE.md — enough to hand off or collaborate with another developer

### What a second deployment looks like

For a second Irish solicitor firm with a similar service mix:

| Task | Time estimate |
|---|---|
| Update `firm.ts` (name, phone, address, email, hours) | 10 minutes — everything cascades from here |
| Change theme import line | 5 minutes |
| Write 8 service page configs (with AI assistance from the skills) | 1–2 days (the primary work) |
| Update team credentials and photos | 30 minutes |
| Update testimonials | 15 minutes |
| Write legal pages (from first-deployment templates) | 2–4 hours (substantially templatable by second deployment) |
| Deployment configuration (domain, hosting, Resend, Google Places) | 1–2 hours |
| Compliance screenshot run | 15 minutes |

**Total: 2–3 working days for a full second deployment at the same quality standard.**

This is the commercial case. The first deployment took the most time because the system had to be built. Every subsequent deployment pays dividends on that investment.

### What makes the system difficult to replicate

A competitor could see the Mary Molloy website and attempt to reverse-engineer the approach. What they cannot easily replicate:

- **The regulatory knowledge** — the LSRA compliance implementation is grounded in actual statute. The `irish-legal-compliance` skill file contains a regulation-by-regulation breakdown. The `legal-compliance/` folder contains the full text of S.I. 644/2020. This took research time, not just development time.
- **The AI workflow** — the 6 skills files encode domain expertise that took research and iteration to produce. The `ai-isms` skill (21 signals of AI-generated writing) and the `copy` skill (emotional state mapping by service area, The Irish Times test) are not generic prompts.
- **The design system** — the three-layer token architecture with oklch colour space and WCAG-verified themes is not something that gets built by accident. It represents deliberate design systems thinking.
- **The documented process** — CLAUDE.md, the layout reference, the component direction guide, the theme creation guide — this knowledge infrastructure is what makes consistent replication possible. Without it, a developer restarting would have to rediscover and re-document all the same decisions.

---

## Part 3 — What Someone Is Likely to Pay

This section gives honest price ranges for three buyer types and three pricing models.

### Buyer type 1: A solicitor firm (the direct client)

A solicitor firm buying or renting this website. They are paying for the website, not the system.

**What they know:** Their current site is probably a mediocre WordPress build that cost €3,500–€5,000 four years ago. They have no idea about LSRA compliance issues on their site. They pay €50–€150/month to their current agency for "maintenance" which mostly means plugin updates.

**What they care about:** Does it look professional? Will it bring in business? Is it legal? Can they get hold of someone when they need a change made?

**Their willingness to pay:** Research across Irish and UK markets (Conscious Solutions, Ctrl Alt Elite, Solicitorsite.ie, Solicitorswebsites.ie) places Irish solicitor willingness to pay at €150–€350/month for an all-inclusive premium subscription. One-off build market rate is €5,000–€7,500 in Ireland.

---

### Buyer type 2: A developer or small agency (buying the system to deploy for their own clients)

Someone who sees the business model and wants to buy the system to deploy it for Irish solicitor clients. They are paying for the codebase, the AI workflow, the compliance knowledge, and the 2–3 day deployment time.

**What they know:** They understand the technical value. They can see that this is an unusually well-built product with a genuine competitive advantage in a niche with 2,000+ potential clients.

**Their willingness to pay:** Depends entirely on how they model the return. At €240/month average per client, 10 clients = €28,800/year recurring. 20 clients = €57,600/year. A buyer who believes they can acquire 10 clients in year one would rationally pay 1–2× annual revenue for the system, or €28,800–€57,600. A buyer who can see 20 clients in two years might pay €100,000+.

---

### Buyer type 3: A digital agency diversifying into legal (buying the system as a product line)

A larger agency that wants to add an Irish legal website product to their offering. They are paying for time-to-market, the regulatory knowledge they don't have, and the avoided cost of building the system themselves.

**What they know:** They can assess the replacement cost. 300 hours at a junior developer rate is €22,500. At a senior rate it is €45,000. The research, domain knowledge, and AI workflow are harder to value but equally hard to replicate quickly.

**Their willingness to pay:** €30,000–€80,000 depending on the deal structure (licence vs outright purchase vs revenue share).

---

## Part 4 — Pricing in Three Models

### Model A — One-Off Purchase (outright sale of the website)

This is selling the Mary Molloy website as a one-off completed deliverable, not including the system or future deployments.

**Honest range:** €7,500–€14,000

**Why the lower end (€7,500):** This is above the Irish agency market rate for a comparable page count but acknowledges that much of the premium value (design system, AI workflow, compliance infrastructure) is invisible to a client who just wants a website. At this price the buyer gets a premium, well-built solicitor website with ongoing maintenance optionally purchased separately.

**Why the upper end (€14,000):** Justifiable if the client understands what they are getting — the animation depth, the legal compliance infrastructure, the E-E-A-T work, the config-driven content system that makes future changes fast. The UK benchmark (Conscious Solutions) charges £14,500 for a bespoke build of lesser technical sophistication.

**Where the number likely lands in practice:** €8,000–€10,000. The Irish market is not yet mature enough to support UK-equivalent pricing without significant client education. Mary's site, as client one, would likely have been in the €6,500–€8,000 range given the relationship and the templating intent.

**What gets included at this price:**
- Complete site as described in the project valuation brief
- 30-day post-launch support
- Handover documentation (README already exists)
- One compliance screenshot run on launch

**What is extra:**
- Ongoing hosting (€45–€60/month)
- Content changes after the 30-day period
- Future compliance reviews

---

### Model B — Subscription / Rental (ongoing fee, no upfront purchase)

This is the model recommended by the market research. The client pays monthly; the developer retains code ownership; the site comes down if they stop paying.

Based on the pricing framework already developed in `_business/market-research-and-pricing-strategy.md`:

| Tier | Monthly | Annual (2 months free) | Best for |
|---|---|---|---|
| **Standard** | **€199/month** | **€1,990/year** | Solo practitioners, small firms — everything needed to be live, legal, and functional |
| **Professional** | **€279/month** | **€2,790/year** | Established practices — adds 2 content changes/month, priority support, monthly GSC report |
| **Premium** | **€349/month** | **€3,490/year** | Multi-lawyer firms — adds 4 content changes/month, quarterly compliance audit, 1 new service page/quarter |

**What Standard includes:** Hosting, SSL, uptime monitoring, all legal pages, LSRA cost warning, contact form with spam protection, Google Reviews integration, structured data, sitemap, 8 service pages, annual compliance review call.

**Why these numbers are right:**

- The Irish floor (Solicitorsite.ie) is ~€150/month for a template product with no design investment and likely no genuine compliance work
- The UK standard (Ctrl Alt Elite) is £79/month for a template product; £200–£300/month for a premium Conscious Solutions build
- At €199/month (Standard), the client pays €2,388/year — against an Irish agency one-off of €5,500–€7,500, the subscription becomes cheaper than a new one-off build at month 23–37. This is the correct break-even framing for the sales conversation
- Solicitors understand retainer-based billing. The psychological fit is better than for most professional service buyers
- €199/month is less than one hour of a Kilkenny solicitor's time. That framing matters in the sales conversation

**The minimum term:** 12 months, then rolling monthly with 30 days written notice. This is standard in the market and fair — it mirrors how solicitors structure their own client engagements.

**What happens if they cancel:** Site down within 30 days of final payment. Their content (text, logo, photos) returned as a zip file. This is in the contract and should be explained clearly upfront — solicitors will read and think about the contract more than most clients.

**Client lifetime value (LTV) at 36 months average:**

| Tier | Monthly | 36-month LTV |
|---|---|---|
| Standard | €199 | €7,164 |
| Professional | €279 | €10,044 |
| Premium | €349 | €12,564 |
| **Average (blend)** | **€240** | **€8,640** |

At 10 clients: **€86,400 in 3-year LTV** from a 10-client base.  
At 20 clients: **€172,800 in 3-year LTV.**

**Revenue per client month once live:** approximately 1–2 hours of work for content changes and support. Operating margin is 85–90% after year one.

---

### Model C — One Fee With Maintenance Included

This is a middle path: a single upfront fee that covers the build plus a defined maintenance period, after which the client either renews or takes over.

**Structure:**

| Package | All-in price | What is covered | Duration |
|---|---|---|---|
| **Starter** | **€2,500/year** | Build (standard spec) + hosting + SSL + 1 content change/month + annual compliance review | 12 months minimum |
| **Professional** | **€3,500/year** | Build + hosting + SSL + 2 content changes/month + semi-annual compliance review + priority support | 12 months minimum |
| **Premium** | **€4,500/year** | Build + hosting + SSL + 4 content changes/month + quarterly compliance audit + 1 new page/quarter + WhatsApp support | 12 months minimum |

**Why this model exists:**

Some clients — particularly older or more conservative solicitors — resist the idea of never owning their website. The all-in annual fee feels more like a professional service retainer (which they understand and use themselves) than a SaaS subscription. It also avoids the "what happens to my site if I stop paying" conversation upfront, replacing it with "what happens when we renew."

**The tradeoff:** This model generates less revenue than a pure subscription (€2,500/year vs €199 × 12 = €2,388, which is almost identical at the entry level — but the annual fee model is paid upfront as a lump sum, which is better for cash flow). At the Professional level, €3,500/year vs €279 × 12 = €3,348 — again close but with the lump-sum timing advantage.

**Renewal mechanics:** At the end of year one, the client renews at a slightly reduced rate (the build cost is already recovered). A sensible renewal structure:

| Package | Year 1 (build included) | Year 2+ (maintenance only) |
|---|---|---|
| Starter | €2,500 | €1,500/year |
| Professional | €3,500 | €2,400/year |
| Premium | €4,500 | €3,200/year |

This creates a genuine incentive to renew (price drops meaningfully in year 2) while still generating healthy recurring revenue.

---

## Part 5 — Valuing the System as a Product

This is the number that matters most for an external investor or acquirer.

### The inputs

| Factor | Value |
|---|---|
| Market size | ~2,000 Irish solicitor practices, the majority with mediocre websites |
| Competitive gap | No Irish provider building at this quality level with compliance built in |
| Current regulatory risk | S.I. 644/2020 came into force December 2020; most sites are non-compliant; LSRA actively monitors |
| Deployment time (second client) | 2–3 working days at current system maturity |
| Revenue per client | €199–€349/month (€2,388–€4,188/year) |
| Operating margin once live | 85–90% |
| Expected churn in this sector | Low — solicitors rarely switch providers when a site is working and compliant |
| LTV per client (36 months average) | ~€8,640 |
| Customer acquisition cost (targeted outreach) | Estimated €500–€1,000 |
| LTV:CAC ratio | 8.6:1 to 17.3:1 (excellent; target is 3:1) |

### Revenue model projections

At an average of €240/month across a blended client base:

| Clients | Monthly ARR | Annual ARR | 3-Year cumulative LTV |
|---|---|---|---|
| 5 | €1,200 | €14,400 | €43,200 |
| 10 | €2,400 | €28,800 | €86,400 |
| 20 | €4,800 | €57,600 | €172,800 |
| 30 | €7,200 | €86,400 | €259,200 |

At 20 clients, this is a **€57,600/year recurring revenue business running on approximately 30–40 hours of work per month.** That is a gross margin north of 80% and a business that can be run by one person with the AI-assisted workflow already built.

### What the system is worth as a standalone acquisition

**If the system is sold before any second deployment (current state):**

The fair value range is the replacement cost plus a premium for the regulatory knowledge and AI workflow:

- Replacement cost (code + research + documentation): €30,000–€50,000 conservative
- Premium for the compliance knowledge, AI workflow, and market position: €10,000–€20,000
- **Total: €40,000–€70,000**

This assumes a buyer who understands what they are acquiring and can deploy it. A buyer who does not understand the technical depth would negotiate lower. A buyer who can immediately identify 5 target clients would pay higher.

**If the system is sold after 5 clients are live:**

At 5 clients generating €14,400/year in ARR, a SaaS-style multiple of 3–5× ARR gives:

- At 3× ARR: **€43,200**
- At 5× ARR: **€72,000**

These multiples are conservative for a niche SaaS product with low churn and a large addressable market. A buyer who can scale to 20 clients quickly would model much higher.

**If the system is sold after 10 clients are live:**

At €28,800/year ARR:
- At 3× ARR: **€86,400**
- At 5× ARR: **€144,000**

At this scale the business is demonstrably working: 10 clients across different firms proves the model, reduces buyer risk, and justifies higher multiples.

---

## Part 6 — Summary of Valuations

### Current deliverable (Mary Molloy website, near-production)

| Model | Price | Notes |
|---|---|---|
| One-off purchase | **€7,500–€12,000** | Fair market range; €8,000–€10,000 most likely in the Irish market |
| Subscription (ongoing rental) | **€199–€349/month** | No upfront fee; 12-month minimum; code stays with developer |
| All-in annual fee with maintenance | **€2,500–€4,500/year** (Year 1) | Lump sum; includes build, hosting, content changes, compliance review |

### The system (reusable product, valued independently of any single client)

| Scenario | Valuation range | Basis |
|---|---|---|
| Pre-revenue (current state, before second deployment) | **€40,000–€70,000** | Replacement cost + regulatory knowledge premium |
| After 5 clients live | **€43,000–€72,000** | 3–5× ARR (€14,400) |
| After 10 clients live | **€86,000–€144,000** | 3–5× ARR (€28,800) |
| After 20 clients live | **€172,000–€288,000** | 3–5× ARR (€57,600) |

### The honest assessment

**What this is not:** An already-profitable business. It is one client, near launch, with a strong system behind it.

**What this is:** A pre-revenue product at a late stage of development, with a documented market, a clear competitive advantage, a proven technical foundation, an unusual regulatory knowledge position, and a plausible path to €57,600/year ARR within 12–18 months of active selling.

The system's value at this stage is almost entirely in its potential, not its current revenue. The work that has been done is not building a website — it is building a product that happens to have a website as its current output. The compliance knowledge, the AI workflow, the design system, and the deployment architecture are the durable assets. The first client is the proof of concept.

**What a second deployment proves:** If a second solicitor firm's site is live at the same quality standard in 2–3 working days, the system's value argument is no longer theoretical. That proof of concept changes the valuation conversation significantly.

---

## Appendix — Key Market Research Sources

These are the primary external sources that informed the pricing analysis. Full research and competitor data is in `_business/market-research-and-pricing-strategy.md`.

| Source | Finding |
|---|---|
| Conscious Solutions (UK, 300+ law firm clients) | Bespoke build: £14,500. Monthly operating: £200–£300. Validates the premium end of the market. |
| Ctrl Alt Elite (UK subscription model) | Standard plan: £79/month. Proves subscription model works for law firm sites. |
| Fly High Web (UK law firm maintenance) | £45–£145/month for WordPress upkeep. Maintenance floor benchmark. |
| Solicitorswebsites.ie (Irish) | Typical build: €5,000–€7,500. Maintenance: €50–€200/month. Irish market baseline. |
| Solicitorsite.ie (Irish subscription) | ~€150/month. The only Irish subscription product found. Likely template-based. Website was returning 403 at research time. |
| Marksystem.ie (Irish WaaS) | €75–€145/month for generic SME product. Generic Irish floor. |
| LSRA (lsra.ie) | Actively monitors solicitor websites. No prior approval or vetting service. S.I. 644/2020 compliance is entirely self-managed. |
| Irish solicitor hourly rates (2026) | Dublin: €250–€450/hour. Regional (Kilkenny): €150–€280/hour. Contextualises €199/month as less than one hour of client billing. |
