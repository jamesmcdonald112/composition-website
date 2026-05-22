# SEO Skill — Pozdnyakov Composition Studio

**Status: stub.** Full SEO strategy is TBD post-launch, once channel/site traffic patterns are visible. The solicitor-site SEO playbook this file used to contain does not transfer — composition-lesson SEO is a **niche-interest** game, not a **local-commercial** one. The strategy needs to be written against the right channels (YouTube → site funnel, topical authority on composition subjects, conservatoire-adjacent backlinks) once we have data, not guessed at in advance.

Use this stub as the working SEO rule set until the full skill is written.

---

## THE FUNDAMENTAL RULE

Google rewards content written for people that happens to be easy to find — not content written for search engines that happens to be readable. Every SEO decision must improve the experience for a serious composer arriving from search, not just improve rankings.

---

## WHAT IS DIFFERENT ABOUT THIS SITE

Three differences from a typical local-services SEO brief:

1. **The audience is global, not local.** The studio teaches online. Location-targeted keywords ("composition teacher Montreal") are mostly noise here. Topic and intent matter; geography does not.
2. **The primary funnel is YouTube → site, not Google → site.** People will discover Alex through the channel; the site exists to convert that interest into emails and bookings. SEO is a secondary channel for years, not a primary one.
3. **The competition is named experts and institutions** — Alan Belkin, ScoreClub, Berklee Online, conservatoire programmes — not content farms. The route to ranking is *topical authority and expert authorship*, not keyword volume.

These three facts should shape every SEO decision until we have data that says otherwise.

---

## E-E-A-T — THE ONE NON-NEGOTIABLE

Composition tuition is not strictly YMYL, but the same E-E-A-T standards apply because the field is dominated by named experts. Every substantive page must signal:

- **Experience:** Real, first-hand teaching reference. Years teaching at conservatoire level; specific repertoire taught; named institutions.
- **Expertise:** Verifiable qualifications. Doctor of Music (Université de Montréal); studied with Belkin and Chernoff; composer-in-residence with OIM-MIO.
- **Authoritativeness:** Recognition by others. Competition wins, performance venues, publication credits.
- **Trustworthiness:** Real contact information, a real human in the photo, a real biography that can be checked.

A short attribution block at the foot of substantive pages (Method, Curriculum modules, About) is enough — does not need to appear on every page.

---

## ON-PAGE — THE BASICS THAT MATTER

These rules are unchanged from any well-built editorial site:

- **One H1 per page**, natural language, contains the page's primary topic.
- **Descriptive title tags** (50-70 characters), one per page, no duplicates.
- **Meta descriptions as descriptions, not taglines** (145-160 characters). Sentence form, not fragments.
- **Hierarchical heading structure** — never skip levels (no H3 directly after H1).
- **Descriptive image filenames** (`alexander-pozdnyakov-portrait.webp`, not `IMG_0023.webp`).
- **Alt text on every image** (60-90 characters), describing the image's content and purpose.
- **WebP for images** where possible.
- **Internal links use descriptive anchor text** — never "click here" or "read more."
- **HTTPS everywhere.**
- **One canonical URL per piece of content.**

---

## SCHEMA MARKUP — MINIMAL FOR NOW

Until we have a clearer picture of how the studio shows up in search, use:

- **Person schema** on the About page — Alexander Pozdnyakov, qualifications, affiliations.
- **WebSite schema** site-wide — name, URL, sameAs links to YouTube and any other authoritative profiles.
- **BreadcrumbList schema** on all pages.

Skip LocalBusiness, FAQ, Course, and other heavier schemas until there is a real reason to add them. Adding schema speculatively creates maintenance burden without a measurable benefit.

---

## CONTENT STRATEGY — DEFER

A real content strategy depends on:

- Where the audience actually lands (YouTube, Google, referrals from named teachers)
- What queries serious composers actually run
- Where Belkin / ScoreClub / Berklee leave gaps
- What Alex is actually willing to write at length about

None of this is knowable before launch. **Do not generate "SEO content" — blog posts, FAQ pages, keyword-driven articles — until we can see what the audience is doing.** The risk of producing wrong content now is bigger than the cost of waiting.

The exception: deep curriculum-module pages on the site itself. Each of the eight modules deserves a substantial, expert-authored page (1,000+ words) because:

- They are useful to a serious composer evaluating the studio
- They demonstrate E-E-A-T for the studio as a whole
- They are durable content — the syllabus does not change weekly
- They give Google a clear topical-authority signal in composition pedagogy

Treat module pages as the SEO investment for the first year.

---

## TECHNICAL — JUST THE ESSENTIALS

- HTTPS active (already covered by Vercel)
- XML sitemap (Astro integration already configured)
- robots.txt (do not block CSS or JavaScript)
- Core Web Vitals passing at 75th percentile (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1)
- Mobile-first content parity

---

## WHAT NOT TO DO BEFORE THE FULL SKILL IS WRITTEN

- Do not chase keywords. The audience is too niche and the competition too credentialled for keyword-volume thinking to work.
- Do not write speculative blog posts. Generic AI content has been demoted hard since the March 2024 update; thin "composition tips" articles will harm the site, not help it.
- Do not optimise for "best composition teacher" type queries. The serious composer audience does not search this way; the people who do are not the target.
- Do not add aggressive schema markup or rich-result hacks. Premature optimisation here looks spammy.
- Do not assume the solicitor-site SEO playbook (local pack, GBP, NAP consistency, review velocity) applies. None of it does.

---

## WHEN TO WRITE THE FULL SKILL

Trigger the full SEO skill rewrite when **any** of these is true:

- The site has been live for three months and Search Console has meaningful impression data
- The YouTube channel has converted a measurable number of viewers into email subscribers
- A clear keyword pattern emerges in the queries Search Console reports
- A competitor study reveals specific topic gaps worth filling

Until then, this stub is the rule.

---

## REFERENCE

Copywriting rules: `.claude/skills/copy/SKILL.md`
Voice rules: `.claude/skills/ai-isms/SKILL.md`
