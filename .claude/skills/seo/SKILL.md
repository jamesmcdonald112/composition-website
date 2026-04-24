# SEO Skill — Mary Molloy Solicitor

Distilled from `.claude/skills/seo/research/seo-research.md`.
Apply this skill whenever writing, reviewing, or configuring any page, config file, or component that affects search visibility.
Run alongside `.claude/skills/copy/SKILL.md` and `.claude/skills/irish-legal-compliance/SKILL.md`.

---

## THE FUNDAMENTAL RULE

Google rewards content written for people that happens to be easy to find — not content written for search engines that happens to be readable. Every SEO decision must improve the experience for a stressed, time-poor client arriving from search, not just improve rankings.

---

## HOW GOOGLE SEES THIS SITE

**This is YMYL content.** Legal services are "Your Money or Your Life" — inaccurate or misleading legal information can cause serious harm. Google holds YMYL content to the highest E-E-A-T standards. This is not optional. Every page must meet these standards or it will not rank.

**This is local search.** The commercial queries that bring clients — "conveyancing solicitor Kilkenny", "family law solicitor near me" — are local intent queries. AI Overviews appear in only 0.01% of local keywords (September 2025). Traditional organic search and the Google Local Pack are the dominant channels. Local SEO is the priority.

**The 2024-2025 algorithm landscape:**
- March 2024: Helpful content folded into core algorithm — content written to attract clicks is demoted; content genuinely useful to people is rewarded
- August 2024: Smaller specialist firms gained ranking advantages over large content-farm sites; a local PI firm moved page 3 → page 1
- Nov-Dec 2024: Back-to-back updates; trustworthiness became the single most weighted E-E-A-T signal
- July 2025: Instagram content now indexed in Google Search

---

## E-E-A-T — WHAT IT MEANS IN PRACTICE

Every piece of content must demonstrate all four pillars:

| Pillar | What it means | How to show it |
|---|---|---|
| **Experience** | First-hand practice in the area | "I handle [X] matters regularly in Kilkenny" — specific, verifiable |
| **Expertise** | Verifiable qualifications | Name, LLB, admission year, Law Society membership on every page |
| **Authoritativeness** | Recognition by others | Law Society directory listing, local press mentions, professional citations |
| **Trustworthiness** | The most important pillar | Clear contact info, physical address, Eircode, Law Society verification, GDPR-compliant privacy policy |

**Required attribution block on every service page:**
```
Written by Mary Molloy, Solicitor
LLB [University], Admitted [Year], Law Society of Ireland
Specialist in [Practice Area]
Last reviewed: [Month Year]

Questions about your [practice area] matter? Contact Mary directly at [phone/email]
```

This block is not just an SEO signal — it is also an AEO signal (see AI Search section). The same content that earns Google E-E-A-T credit makes the page more likely to be cited by ChatGPT and Perplexity.

**Content freshness:** Update every service page at least every 6-12 months. Outdated content damages trust and rankings. Change the "last reviewed" date when you do.

---

## ON-PAGE SEO — EXACT RULES

### Title Tags
- Length: 50-70 characters (Google shortens 61% of titles exceeding this)
- Primary keyword within the first 40 characters
- One unique title per page — no duplicates
- Do not stuff keywords — one clear topic per title
- Include location where relevant: "Conveyancing Solicitor Kilkenny | Mary Molloy"

### Meta Descriptions
- Length: 145-160 characters (desktop shows ~160, mobile shows less)
- Does not directly affect rankings — affects click-through rate
- Write as one or two plain sentences that answer "is this for me?" — who this is, where they are, what they handle
- Include primary keyword naturally
- End with a soft call to action where appropriate
- **No taglines, no fragment constructions, no punchy closing phrases** — these read as marketing copy, not descriptions. A meta description is not a strapline.
- **Do not repeat what the page title already says** — add the next piece of information the searcher needs
- ❌ "Plain advice, no handoffs." — fragment, tagline format
- ❌ "Mary practises alongside her sons Nicholas and Richard O'Shea — property, wills, family law and more." — awkward mid-sentence surname drop, reads like a list
- ✅ "Mary Molloy Solicitor has practised in Kilkenny since 1979. A family firm handling property, wills, family law, personal injury and private client matters."

### Heading Hierarchy
- **H1:** One per page. Natural language. Contains primary keyword. Not stuffed.
- **H2:** Main sections. Descriptive — never vague labels like "Introduction" or "More information"
- **H3:** Subsections within an H2. Never skip levels (no H3 directly after H1)
- Headings are semantic signals — they tell Google what the page is about
- For FAQ content: write H2/H3 headings as questions clients actually ask in conversation (also captures voice search)

### URLs
- Under 60 characters (CTR drops 15% above this threshold)
- Hyphens between words, lowercase only, no special characters
- Include primary keyword: `/services/conveyancing-solicitor-kilkenny`
- Hierarchical: `/services/[practice-area]`
- HTTPS required — both a security signal and a ranking factor

### Images
- All images: descriptive filename (`mary-molloy-solicitor-kilkenny.webp` not `IMG0023.webp`)
- Alt text: 60-90 characters (outperforms "use all 125 characters" by 34% in Google Images impressions)
- Format: WebP — reduces file size 30-80% vs JPEG/PNG without quality loss
- Lazy load images below the fold

### Internal Links
- Contextual links in body copy carry more weight than footer or sidebar links
- Use descriptive anchor text — never "click here" or "read more"
- Service pages should link to related service pages and the contact page
- Every new blog post or FAQ should link to at least one service page

---

## SCHEMA MARKUP — REQUIRED

Use both LocalBusiness and LegalService — they are not alternatives; LegalService extends LocalBusiness.

**On the homepage and contact page — LocalBusiness:**
```json
{
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Mary Molloy Solicitor",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Kilkenny",
    "addressRegion": "County Kilkenny",
    "postalCode": "[Eircode]",
    "addressCountry": "IE"
  },
  "telephone": "[Phone]",
  "url": "[URL]"
}
```

**On each service/practice area page — LegalService:**
Add `areaServed`, `serviceType`, and practice area specifics to the base schema.

**On FAQ sections — FAQPage schema**

**On the about page — Person schema** (Mary's name, qualifications, Law Society membership)

**On all pages — BreadcrumbList schema**

Schema markup produces rich snippets in search results. Pages with review or product schema experience an average 35% boost in click-through rate (Search Engine Journal 2025).

---

## LOCAL SEO — THE PRIORITY CHANNEL

### The Three Ranking Factors (Google Local Pack)

| Factor | Weight | What drives it |
|---|---|---|
| **Relevance** | ~25% | GBP categories, keywords on the website, service descriptions |
| **Proximity** | ~15% | Physical distance from searcher — can't be changed, but Eircode precision helps |
| **Prominence** | ~60% | Reviews, backlinks, NAP consistency, site authority |

85% of local searches result in map views. 42% of local searches result in Google Map Pack clicks. This is where clients find solicitors.

### Google Business Profile

A fully completed GBP gains 2.7x more trust from potential clients. Complete every field.

**Categories:** Primary = "Solicitor". Secondary = Google's American terminology — "Real Estate Attorney" for conveyancing, "Family Law Attorney" for family law, "Personal Injury Attorney" for PI. Up to nine categories total.

**Description:** 750 characters. Lead with what you do, where you are, and who you serve. Include Eircode. Reference the local court where relevant ("within walking distance of Kilkenny District Court" reinforces genuine local presence to Google).

**Firm name consistency:** The name on the GBP must match the Law Society of Ireland listing exactly — including "Solicitor" vs "Solicitors". Mismatches cause rejection.

**GBP Posts:** Post weekly or bi-weekly. Include images. Keep content timely and relevant to practice areas.

**Q&A Section:** Proactively seed your own questions and answers. Targets long-tail keywords naturally. Feeds into "People Also Ask" results.

**Photos:** Add professional office photos and team photos. Update quarterly. Visual completeness raises trust score.

### NAP Consistency

Name, Address, Phone must be identical across every directory — including punctuation and abbreviations. "123 Main St." vs "123 Main Street" counts as an inconsistency.

**Priority directories for Irish solicitors (in order):**
1. Law Society of Ireland Find a Solicitor (essential — most trusted signal)
2. Solicitors Directory Ireland
3. Golden Pages
4. Local chamber of commerce
5. Tuugo.ie, Cylex.ie, Irish Business Info

Audit NAP consistency quarterly. Tools: BrightLocal, Moz Local, Whitespark.

**Eircode:** Always include the full Eircode. This is an Irish-specific local targeting signal that improves precision beyond county-level matching. Include it in: GBP, schema markup, Contact page, footer.

### Reviews

Reviews are the single most important prominence signal (~10-15% of local ranking weight). Review recency is a tiebreaker — steady fresh reviews outperform an old burst.

**Ethical review request process:**
1. Email the satisfied client personally after case closes — make it clearly not mass-produced
2. Wait a few weeks, then send a personalised review request with a direct link
3. Integrate into standard closing procedures — make it a habit, not a campaign

**Never:** incentivise reviews, request fake reviews, or ask friends/colleagues. Google detects this; consequences are severe.

**Responding to reviews:** Respond to every review — positive and negative. For negative reviews: respond professionally and generically. Never include case-specific details, client identification, or outcomes — this is a data protection requirement as much as a PR one.

**Stat:** A 5-star rating can boost clicks from the Local Pack by 25%. Reviews older than three months are considered less relevant by 73% of consumers.

---

## KEYWORD STRATEGY

### The Irish Solicitor Keyword Reality

Even low-volume Irish keywords (200-500 monthly searches) are highly valuable — less competition, high intent, ready-to-hire clients. Do not chase high-volume generic terms.

**Long-tail keywords convert at 2.5x the rate of generic short-tail terms.**

### Keyword Mapping

One primary keyword per page. 3-5 closely related long-tail variations per page. This prevents keyword cannibalization (two pages competing for the same query).

**Practice area example — Conveyancing:**
- Primary: `conveyancing solicitor Kilkenny`
- Secondary: `house purchase solicitor Kilkenny`, `property transfer solicitor South East Ireland`, `buying a house solicitor Kilkenny`

### Search Intent — Prioritise in This Order

1. **Transactional/Local intent** — "conveyancing solicitor Kilkenny", "hire family law solicitor Carlow" — these bring clients ready to hire
2. **Informational intent** — "how long does probate take in Ireland", "what does divorce cost in Ireland" — builds authority and captures early-stage research
3. **Navigational intent** — "Mary Molloy solicitor" — already aware, lower volume

### Location Modifiers to Use

- Kilkenny (primary)
- South East Ireland / Leinster (regional)
- Carlow, Waterford, Tipperary (neighbouring counties)
- "near me" (voice and mobile search — do not force it, but FAQ content should answer it)

### Keyword Stuffing — What to Avoid

No keyword density target — Google uses natural language processing. Write naturally. The rule: if it reads awkwardly to a human, Google knows. Keyword stuffing is a spam policy violation since March 2024.

---

## CONTENT STRATEGY

### What to Write

Every service page needs minimum 1,000 words of expert-authored content. Follow the structure from the copy skill (Hook → Solution → Process → Proof → CTA).

**High-value content areas by practice area:**

| Practice area | Content topics that rank |
|---|---|
| Conveyancing | "Buying a house in Ireland step by step", "Kilkenny property purchase process", "What does a conveyancing solicitor do?" |
| Family law | "Divorce in Ireland: the legal process", "Child custody law Ireland", "Separation vs divorce: what's the difference?" |
| Personal injury | "What to do after a road accident in Ireland", "How long do I have to make a personal injury claim?" — note: Track 2 compliance required |
| Wills & probate | "How to make a will in Ireland", "Probate: what is it and how long does it take?" |
| Employment law | "Unfair dismissal Ireland: your rights", "Redundancy entitlements Ireland" — Track 3 compliance required |

### Hub-and-Spoke Model

Each practice area = one hub page (the main service page) surrounded by spoke pages (FAQ answers, blog posts, guides). All spokes link back to the hub. This builds topical authority and distributes internal PageRank to the most important pages.

### AI Content — The Rules

AI tools can assist with outlines, drafts, and research. But:
- Every published piece must be reviewed and enriched by Mary
- Add personal language ("I handle", "in my experience")
- Verify all legal statements for accuracy
- Add local knowledge that AI cannot have (Kilkenny-specific procedures, court experience)
- Generic AI content without human expertise signals is penalised since March 2024

### Content Freshness

Update service pages every 6-12 months. Update the "last reviewed" date. Stale content signals an inactive site and damages rankings. Google has explicitly prioritised freshness since the 2024 updates.

---

## TECHNICAL SEO — CHECKLIST

### Essentials (must be in place before any content work matters)

- [ ] HTTPS active (ranking signal + trust signal)
- [ ] XML sitemap submitted to Google Search Console — only indexable URLs included
- [ ] robots.txt configured — do NOT block CSS or JavaScript needed for rendering
- [ ] Core Web Vitals passing at 75th percentile: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1
- [ ] Mobile-first: all content, meta tags, structured data identical on mobile and desktop
- [ ] No noindex tags on pages that should rank
- [ ] Canonical tags on any pages with duplicate or near-duplicate content
- [ ] Structured data validated (use Google's Rich Results Test)

### Core Web Vitals in Detail

| Metric | Good | Needs work | Poor |
|---|---|---|---|
| LCP (loading) | ≤2.5s | 2.6-4.0s | >4.0s |
| INP (responsiveness) | ≤200ms | 201-500ms | >500ms |
| CLS (stability) | ≤0.1 | 0.1-0.25 | >0.25 |

All three must pass at the 75th percentile of real user data. INP replaced FID in March 2024 — it measures responsiveness across all interactions, not just the first.

**For this Astro site:** Check CWV in Google Search Console → Core Web Vitals report. Images and GSAP animations are the most likely sources of LCP and CLS issues.

---

## AI SEARCH AND AEO

### The Situation

- 77.67% of broad legal search queries trigger AI Overviews
- 60% of users who get an AI answer never click through to a website
- 28% of consumers now use ChatGPT to research lawyers

**However:** AI Overviews appear in only 0.01% of local keywords. The commercial queries that bring clients are still served by traditional search results. Local SEO remains the priority — but content that also works for AI citation is a free bonus.

### What Makes Content Get Cited by AI

The answer-first format — AI systems extract the direct answer at the top:

```markdown
## [Question as clients ask it, e.g. "How long does it take to buy a house in Ireland?"]

**In short:** [2-3 sentence direct answer]

[Detailed explanation follows]

[Local context: Kilkenny/South East specifics]

[Professional attribution: Written by Mary Molloy, Solicitor, [Year] experience]
```

The attribution block at the end of each answer signals to AI systems that this content comes from a verified practitioner — not a content farm.

**Conversational language gets cited more.** A page titled "What Happens If You're Made Redundant in Ireland?" written in plain English outperforms dense legal prose for AI citation. This directly reinforces the copy skill's plain language rule — it is simultaneously a trust signal, a copy quality standard, and an AEO signal.

---

## VOICE SEARCH

20% of all searches are now voice-based. Voice queries average 4.2 words longer than typed searches and contain more emotional context.

### Irish Legal Voice Query Examples

**Conveyancing:**
- "Find a conveyancing solicitor in Kilkenny"
- "How long does house purchase take in Ireland?"
- "What fees do I pay when buying a house in Ireland?"

**Family law:**
- "Who is the best divorce solicitor in Carlow?" — note: do not write content targeting "best"; use "experienced" or "specialist"
- "How much does divorce cost in Ireland?"
- "What are my rights in separation in Ireland?"

**Personal injury (Track 2 — cost warning required):**
- "What should I do after a car accident in Ireland?"
- "How long do I have to claim personal injury in Ireland?"

### Optimise For Voice

Write FAQ answers in the quick-answer format:
```markdown
**Quick Answer:** [2-3 sentence direct response]

**More detail:** [Comprehensive explanation]

**In Kilkenny/Ireland:** [Local specifics]

**Next step:** [Soft CTA]
```

Use this format for every FAQ entry. It captures voice search, featured snippets, and AI citation simultaneously.

---

## MEASURING SEO

### What to Track

**Weekly:**
- Local pack rankings (use Local Falcon geo-grid or BrightLocal)
- Google Business Profile views and actions

**Monthly:**
- Google Search Console: impressions, clicks, CTR, average position, crawl errors
- Organic sessions (GA4)
- Conversions: contact form submissions, phone call clicks

**Quarterly:**
- Content audit — identify pages that have dropped in rankings
- NAP consistency audit across all directories
- Core Web Vitals pass/fail
- Competitor analysis — what are Kilkenny/South East competitors ranking for?

### What Counts as a Conversion

For this site, track these events in GA4:
- Contact form submission
- Phone number click (especially mobile)
- "Book consultation" or similar CTA click
- GBP direction request (tracked via GBP insights, not GA4)

Vanity traffic — rankings and sessions without conversions — is not the goal. A page ranking #1 that sends zero enquiries needs either better copy or a more relevant keyword.

### Realistic Timeline

- Months 1-3: Technical foundations, GBP optimisation — no significant ranking movement expected
- Months 4-6: Content development — early movement on long-tail keywords
- Months 7-12: Authority building — meaningful results in Local Pack
- Year 2+: Compounding returns, market leadership consolidation

**SEO delivers 526% ROI over three years when properly executed.** It is infrastructure, not a campaign.

---

## COMMON MISTAKES — DO NOT DO THESE

| Mistake | Why it hurts |
|---|---|
| Targeting "solicitor" or "conveyancing" nationally | Impossible to rank; wrong intent; no conversions |
| GBP profile incomplete or unclaimed | Loses 2.7x trust; cannot appear in Local Pack |
| NAP inconsistency across directories | Confuses Google; actively harms local rankings |
| Publishing AI content without human review | March 2024 spam policy — penalties apply |
| No attribution on service pages | Fails E-E-A-T; YMYL content without expertise signals will not rank |
| "Set and forget" SEO | Google updates constantly; competitors keep optimising |
| Thin service pages (<500 words) | YMYL content needs depth; thin content is filtered out |
| No review request process | Reviews are 10-15% of local ranking weight — leaving it to chance is leaving rankings on the table |
| Blocking CSS/JS in robots.txt | Prevents Google from rendering and evaluating the page |
| Ignoring Core Web Vitals | Technical threshold — failing CWV suppresses rankings regardless of content quality |

---

## COMPLIANCE INTERACTION

Several SEO content types intersect with Irish legal advertising regulations:

- **FAQs** — content is fine; do not include success rate claims (Reg 8) or compensation amounts in PI FAQs (Reg 6C)
- **Blog posts** — if they cover contentious business or PI topics, cost warning required (Reg 7/Track 3)
- **GBP description** — subject to same advertising rules as the website; no "no win no fee", no success rates
- **Social media profiles** — linked profiles are the solicitor's advertising responsibility under Reg 9; check for prohibited claims before linking

Run the compliance skill against all content before publishing.

---

## REFERENCE

Full SEO research with sources: `.claude/skills/seo/research/seo-research.md`
Copywriting rules: `.claude/skills/copy/SKILL.md`
Compliance rules: `.claude/skills/irish-legal-compliance/SKILL.md`
