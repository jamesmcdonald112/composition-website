# Project Valuation Brief — Mary Molloy Solicitor Website

**Prepared for:** External valuation / AI assessment  
**Prepared by:** James McDonald, developer  
**Date:** 22 April 2026  
**Purpose:** To provide a complete, accurate account of what has been built, what remains, the quality standard achieved, and the commercial potential of the system as a replicable product for other solicitor firms.

---

## 1. What This Project Is

This is a bespoke, production-grade marketing website for Mary Molloy Solicitor, a practising Irish solicitor based in Kilkenny, Ireland. The site is built from scratch — no WordPress, no page builder, no theme — using a modern developer stack chosen specifically for performance, maintainability, and long-term commercial reusability.

The site is currently in pre-launch final-check phase. The core build is complete. The primary remaining work is filling in legal page content (privacy policy, terms, complaints procedure, accessibility statement) and confirming a small number of client-supplied details (email address, domain, admission year).

The project is not just a website — it is a **reusable system**. Every architectural decision has been made with the explicit intent of turning this into a product that can be deployed for additional Irish solicitor firms at a fraction of the original build cost.

---

## 2. Tech Stack

| Technology | Role | Version |
|---|---|---|
| **Astro 6** | Core framework — server-side rendering, routing, components | 6.1.5 |
| **GSAP 3** | Animation — scroll-triggered, entrance, loading overlay | 3.14.2 |
| **TypeScript** | Type safety throughout (config, schema, components, scripts) | 5.9.3 |
| **Zod** | Server-side form validation schema | 3.25.76 |
| **Resend** | Transactional email delivery for contact form | 6.9.4 |
| **libphonenumber-js** | Irish phone number parsing, E.164 normalisation | 1.12.38 |
| **Biome** | Linting and formatting (Rust-based, replaces ESLint + Prettier) | 2.3.13 |
| **Vitest** | Unit testing | 4.0.18 |
| **Playwright** | Browser automation (legal compliance screenshot script) | 1.59.1 |
| **colorjs.io** | WCAG contrast ratio verification during theme development | 0.6.1 |
| **Cormorant Garamond** | Self-hosted serif display font (headings, display text) | 5.2.11 |
| **DM Sans** | Self-hosted sans-serif font (body copy, navigation) | 5.2.8 |

**Deployment target:** Netlify (with @astrojs/netlify adapter). The README documents a straightforward swap to Vercel — adapter is the only platform-specific dependency.

**No JavaScript framework on the client.** No React, no Vue, no Svelte. Pure Astro components with GSAP and small inline scripts. This keeps bundle sizes minimal and pages fast.

### Stack quality assessment: **Top level**

These are current, well-maintained technologies chosen for the right reasons. Astro 6 in server output mode is the correct choice for a site that needs server-side form handling without a heavy client-side JavaScript footprint. GSAP is the professional standard for web animation. The stack has no legacy dependencies and no components that would need replacing within a two to three year horizon.

---

## 3. Pages Built

### Full-content production pages (8 service pages + core pages)

| Page | Route | Status |
|---|---|---|
| Homepage | `/` | Complete |
| About | `/about` | Complete |
| Contact | `/contact` | Complete |
| Thank You | `/thank-you` | Complete |
| Services Index | `/services` | Complete |
| Buying & Selling Property | `/services/buying-and-selling-property` | Complete |
| Wills & Estate Administration | `/services/wills-and-estate-administration` | Complete |
| Family & Childcare Law | `/services/family-and-childcare-law` | Complete |
| Personal Injury Litigation | `/services/personal-injury-litigation` | Complete |
| Road Traffic Accidents | `/services/road-traffic-accidents` | Complete |
| Leases & Tenancy Agreements | `/services/leases-and-tenancy-agreements` | Complete |
| Employment Law | `/services/employment-law` | Complete |
| Debt Collection | `/services/debt-collection` | Complete |
| Cookie Policy | `/cookie-policy` | Complete |
| Disclaimer | `/disclaimer` | Complete |

### Pages with route registered, content in progress

| Page | Route | Status |
|---|---|---|
| Accessibility Statement | `/accessibility` | Route exists, content needs writing |
| Complaints Procedure | `/complaints` | Route exists, content needs writing |
| Privacy Policy | `/privacy` | Route exists, content needs writing |
| Terms of Use | `/terms` | Route exists, content needs writing |

These four pages are the primary pre-launch gap. All routes are live, all page shells are built — only the text content is outstanding. For a new-client deployment, this content would be templated from the first deployment.

### Total: 19 registered routes — 15 fully complete

---

## 4. Component Architecture

### 19 components with paired GSAP animation files

Every major section of the site has its own carefully crafted entrance animation — scroll-triggered by default, with an immediate show fallback for users who have set `prefers-reduced-motion`. This is not decorative — it is a deliberate premium quality signal that distinguishes this from a typical small-firm solicitor website.

**Animated components:**
- Full-screen branded loading overlay (intro) — plays once per browser session, then is removed from the DOM
- Homepage hero — photograph, headline, CTAs
- Trust strip (credentials bar) — used on multiple pages
- Featured service panel (conveyancing highlight on homepage)
- Service cards grid — staggered card entrances
- Service hero (reused across all 8 service pages)
- Service article sections — long-form content with animated reveals
- Service FAQ accordion
- Service mid-page CTA banner
- Service process steps
- Testimonial block — staggered card entrances
- Team section
- CTA panel
- Footer
- Navigation bar (scroll-reveal, solid state)
- Contact panel
- Contact form fields
- Scroll indicator
- Thank you page entrance

**Static/structural components (no GSAP):**
- SkipLink (accessibility)
- BrandLogo
- Navbar + NavMobile
- CtaLink (with optional icon and ariaLabel)
- Eyebrow label
- SectionHeader (eyebrow + heading + intro)
- SectionRule (decorative)
- LegalCostWarning (regulatory compliance)
- AttributionBlock (solicitor credentials / E-E-A-T)
- SplitPage layout (two-column contact page)
- ServiceArticle sub-components (ArticleQuote, BlockList)
- RelatedServices
- TeamCard (native details/summary toggle)
- FooterLegalNotice

### Component architecture quality: **Top level**

Every component follows a consistent pattern: full-width shell → inner container (`.wrapper.wrapper--wide`) → content. BEM naming throughout. GSAP files co-located with their component. CSS in `<style>` blocks inside `.astro` files. No hand-rolled layout values anywhere — all spacing, colour, and sizing comes from the design token system.

---

## 5. Design System

This is the part of the project that most distinguishes it from typical solicitor websites, and the part that makes replication fast and predictable.

### Three-layer token architecture

**Layer 1 — Theme primitives** (in `src/styles/themes/`)  
Raw colour values in oklch colour space. Theme files map real colour values to named roles. WCAG contrast ratios are verified and documented inline for every foreground/background pairing using `colorjs.io`.

**Layer 2 — Semantic tokens** (in `src/styles/tokens.css`)  
Purpose-named CSS custom properties that reference the theme layer. Components never touch Layer 1 values — they only reference Layer 2 tokens like `--color-bg-surface`, `--color-fg-body`, `--color-fg-accent`.

**Layer 3 — Component CSS** (inside each `.astro` file's `<style>` block)  
Component-specific layout and typographic styles, written using Layer 2 tokens only. No raw CSS values anywhere in the component layer.

### Four verified themes

All four themes are fully built, verified for WCAG contrast compliance, and ready to activate by changing a single import line in `global.css`.

| Theme | Palette | Status |
|---|---|---|
| Navy, Amber, Charcoal | Deep navy + burnt amber + charcoal | **Active (current client)** |
| Navy, Gold, Green | Navy + warm gold + forest green | Ready — swap in one line |
| Midnight, Copper, Sage | Midnight + copper + sage | Ready — swap in one line |
| Oxford, Amber, Terracotta | Oxford + amber + terracotta | Ready — swap in one line |

For a new client deployment, the theme change is genuinely one line of code. Everything else (components, layout, tokens) works identically across all four themes because the entire system references semantic tokens, never raw values.

### Token coverage

The token system covers:
- 30+ colour tokens (backgrounds, foreground body/heading/muted/accent, borders, states)
- 11-stop typographic size scale (anchored at 16px base)
- 5 font weights, 6 line heights, 5 letter-spacing values
- 11-stop spacing scale (2xs through 6xl) plus 4 contextual spacer tokens
- 3 layout max-width tokens (672px, 1152px, 1440px)
- 7 border radius values
- 5 shadow elevations + 2 inset shadows + 2 branded coloured shadows
- 6 motion duration tokens + 6 named easing functions (with GSAP equivalents documented)

### CSS methodology: CUBE CSS, 7-layer load order

The CSS loads in a documented 7-layer sequence: reset → theme → tokens → compositions → utilities → blocks → exceptions. This is a professional CSS architecture methodology that prevents specificity conflicts and makes the system predictable to work with.

### Design system quality: **Top level**

This is sophisticated design systems work. The level of investment here — four themes, oklch colour space, verified contrast ratios, semantic token layering — is typically found in product companies, not small-firm solicitor websites. The investment is justified because it makes the templating ambition viable: without this system, adapting the design for a new client would require touching hundreds of values scattered across dozens of files. With this system, theme changes are one line, content changes are in config files, and layout is governed by enforced rules.

---

## 6. Content Architecture

All site content is stored as typed TypeScript objects in `src/config/`. Zero content is hardcoded into component or page files. This is the most important architectural decision for the replication ambition.

### What the config system controls

- **Firm data** (`firm.ts`): business name, URL, phone, address, eircode, Google Maps link, Place ID, office hours, calculated years in practice
- **SEO** (per page): title, description, canonicalPath, OG image
- **Hero content** (per page): headline, subheadline, CTAs
- **Service content** (per service, 8 files): complete article body text, process steps, FAQs, trust strip items, CTAs, related services — all in one file per service
- **Team records**: solicitor credentials with photo imports, bio, specialism, university, admission year
- **Testimonials**: 6 typed testimonial objects
- **Structured data**: auto-generated from `firm.ts` — zero manual maintenance
- **Legal notices**: single source of truth for the statutory cost warning text used across 5 pages and the footer

### Why this matters for templating

For a new client deployment, a developer would:
1. Edit `firm.ts` with the new firm's details — this cascades to SEO, footer, structured data, contact page, header
2. Edit the 8 service config files with the new firm's service content
3. Edit `team.ts` with the new solicitor's credentials and photograph
4. Edit `testimonials.ts` with the new firm's testimonials
5. Change the theme import line in `global.css`
6. Deploy

The component layer, animation layer, CSS system, contact form, review fetcher, and all tooling carry over unchanged. A non-developer with TypeScript guidance could theoretically handle much of the content editing.

---

## 7. Contact Form

The contact form is complete and marked Do Not Touch in the project rules — it is production-ready.

### What it does

- Validates: name (2–100 chars), email (format), phone (Irish number parsed via libphonenumber-js and normalised to E.164 `+353...` format), service (enum of 8 valid services), message (optional, max 2000 chars)
- Honeypot anti-spam field (invisible to users, catches bots)
- Post/Redirect/Get pattern via Astro sessions — prevents duplicate submission on browser refresh
- Stores form data in session on validation failure — repopulates all fields on error redirect (no data loss)
- Delivers via Resend API with formatted email to the solicitor
- Character counter on the message field
- Animated field entrances (GSAP)
- iOS auto-zoom prevention (16px minimum font size on mobile inputs)
- ARIA error messages with `role="alert"` and `aria-describedby` linking

### Unit test coverage

25+ test cases across schema validation and email delivery:
- Name length boundaries
- Email format
- Irish phone number normalisation (09X, 01, +353 formats)
- Service enum validation
- Message length limits
- Honeypot rejection
- Email delivery success and error paths

### Contact form quality: **Complete and top level**

---

## 8. SEO Implementation

### Technical SEO (complete)

- Unique `<title>` and `<meta name="description">` on every page, driven from config
- Canonical URLs on all pages
- Full Open Graph meta tags — site name, title, description, URL, type, locale (en_IE), image, dimensions, alt
- Twitter/X card meta tags
- Article metadata (published_time, modified_time, author, section, tags) on article-type pages
- `lang="en-IE"` on the HTML element
- `noIndex` support for dev/preview pages
- JSON-LD structured data: dual `LegalService` + `LocalBusiness` schema with `@graph`, address, phone, opening hours, areaServed — auto-generated from `firm.ts`

### E-E-A-T (Google's Experience, Expertise, Authoritativeness, Trustworthiness)

Solicitor websites are in Google's YMYL (Your Money or Your Life) category — they are held to a higher standard than typical sites. The E-E-A-T signals built into the site:

- **AttributionBlock** — a credentials card on the About page (and any service page it is placed on) with: solicitor name, role, qualifications, university, year of admission to the roll, specialism, and content review date. This is explicitly designed to signal author credibility to Google.
- **All 8 service pages** have complete, specific, authoritative long-form content — not generic copy
- **Testimonials** with name, location, and specific service referenced
- **Local Business** structured data with verified address and opening hours
- **`og:locale`** set to `en_IE`

### What is not yet done

- `@astrojs/sitemap` integration (one package install + one config line)
- `robots.txt` (one file in `/public`)
- Per-page Open Graph images (currently all pages share a default OG image)
- Google Search Console verification

### SEO quality: **Strong technical foundation, minor gaps remaining**

---

## 9. Accessibility

- Skip-to-main-content link (hidden, appears on keyboard focus)
- `<header role="banner">`, `<nav aria-label="Primary navigation">`, `<main id="main-content">`
- `aria-current="page"` on active nav links
- `aria-expanded` on FAQ accordion triggers
- `aria-describedby` on form fields linked to error messages
- `role="alert"` on error messages for live region announcement
- `aria-hidden="true"` on all decorative elements (hero overlays, animation artefacts)
- `aria-label` on ambiguous links (phone CTA in hero)
- Empty `alt=""` on team portrait image (name is visible as adjacent text — correct per WCAG)
- `prefers-reduced-motion` guard on every GSAP animation file — on reduced motion, intro removes itself immediately and still fires the `intro:complete` event (required for Cookiebot timing to work)
- iOS input zoom prevention (font-size ≥ 16px on all form inputs)
- WAVE audit has been run; known alerts documented in the accessibility statement

### Accessibility quality: **Substantive — goes well beyond checkbox compliance**

The reduced motion implementation is particularly thorough. Most implementations simply skip the animation; this one correctly handles the downstream consequences (Cookiebot banner timing depends on the intro:complete event).

---

## 10. Legal Compliance

This is unusual territory for a website project and represents a meaningful part of the total investment.

### Regulatory framework

The site is built to comply with **S.I. No. 644/2020 — Legal Services Regulation Act 2015 (Advertising) Regulations 2020**. The full text of the regulations is in the project as reference material.

### What is implemented

**LegalCostWarning component** — a mandatory cost warning for contentious/personal injury matters, required by Regulation 6. This single-source component is placed on 5 service pages (Family Law, Personal Injury, Road Traffic Accidents, Employment Law, Debt Collection) and in the footer. The statutory text is stored as a single config value — if the regulation changes, it is updated once and propagates everywhere.

**Cookiebot integration** — GDPR-compliant cookie consent management. Chosen after a documented analysis of Irish and EU cookie compliance requirements vs Cookiebot capabilities. The banner is suppressed during the intro animation (to prevent it flashing behind the overlay) and shown immediately on `intro:complete`. On reduced motion, the same timing works correctly.

**Compliance screenshot script** — a Playwright-based tool (`scripts/compliance-screenshot.ts`) that screenshots every page automatically and saves them to a dated folder in `legal-compliance/compliance-records/`. This is a legal requirement under Regulation 11(f) — solicitors must keep dated records of all advertising. The April 2026 launch compliance run has already been completed and is in the repository.

**Cookie Policy page** — complete, with the Cookiebot declaration script embedded.

**Disclaimer page** — complete.

**Legal cost notice in footer** — the mandatory notice that certain legal costs are the responsibility of the client appears in the footer on every page.

**Content review documentation** — `legal-compliance/content-review/` contains export files used for the solicitor to review and sign off on page content before publication.

**`legal-compliance/` folder** — contains: full regulations text, accessibility statement draft, Irish/EU cookie law analysis, website content review checklist, Book of Quantum reference PDF, and the compliance records.

### What is in progress

- Privacy Policy page — content needed
- Terms of Use page — content needed
- Accessibility Statement — content needed
- Complaints Procedure — content needed
- Testimonial consent forms — folder exists in compliance records, forms not yet collected from review sources

### Legal compliance quality: **Unusually thorough — the infrastructure is top level; content completion is the remaining work**

---

## 11. AI Workflow System

This is one of the project's most distinctive and commercially valuable features.

The project includes a custom set of AI skill files (`.claude/skills/`) that function as specialist knowledge loaded by the AI assistant (Claude Code) during specific types of task. These are not generic prompts — they are researched, domain-specific, and enforce constraints that would be difficult to communicate through conversation alone.

### The 6 skills

| Skill | Purpose |
|---|---|
| `frontend-design` | Premium solicitor UI design guidance. References Awwwards-calibre studios (Obys Agency, Akaru, The Line Studio). Enforces token-only CSS, GSAP motion principles, typographic hierarchy. Priority: visual quality first. |
| `copy` | Copywriting framework for an Irish solicitor audience. Identifies client emotional states by service area. Voice standard: "Professional but human. Authoritative but approachable." Enforces The Irish Times test for language register. |
| `ai-isms` | 21 signals that identify AI-generated writing. Banned word list. Read-aloud test. Applied to prevent detectable AI patterns in all client-facing copy. |
| `irish-legal-compliance` | Regulation-by-regulation compliance review based on S.I. No. 644/2020. Covers: Reg 4 (content limits), Reg 5 (testimonials), Reg 6 (cost warnings), Reg 11 (record-keeping). Applied as a final filter after copy quality is established. |
| `seo` | Local SEO strategy for a Kilkenny solicitor. E-E-A-T requirements, YMYL content guidance, on-page SEO rules, local pack optimisation. References 2024–2025 Google algorithm changes. |
| `log-content-instructions` | Process skill for logging solicitor content change instructions into the compliance record. |

### Why this matters

The skills encode the expertise required to deliver this product correctly — Irish legal copywriting, Irish advertising regulations, premium web design standards, local solicitor SEO — as reusable, loadable knowledge. For a new client deployment, the skills require minimal adjustment (primarily firm name, location, and service areas). The compliance skill references the same statutory instrument regardless of client.

This means the **quality of output from the AI-assisted workflow is consistent and enforceable**, not dependent on repeating instructions each session.

### AI workflow quality: **Top level — this is a productised capability, not ad hoc prompting**

---

## 12. Developer Documentation and Project Infrastructure

### CLAUDE.md — the AI assistant contract

The root `CLAUDE.md` is an unusual document. It is a binding instruction set for the AI assistant covering: mandatory language standard (Irish/British English with specific spelling rules), colour tooling workflow (with code examples), full architectural rules, CSS naming conventions, component structure requirements, skills loading protocol, and compliance screenshot reminder after every content change. It functions as both a developer style guide and an AI behaviour specification.

### `_system/` — design and architecture reference

Nine documented reference files covering: token system design, design system methodology, layout system rules, component building guide, design brief (Stage 3), theme creation guide, and GSAP/animation prompt engineering history (versioned across 3 stages of the build).

### `_business/` — research and business intelligence

Documented research on: copywriting methodology for Irish solicitors, AI-isms to avoid, local SEO strategy, legal page requirements, market research, pricing strategy, and a deep financial and business model analysis. This is the research that underpins the product decisions — it is preserved in the repository.

### README.md

Comprehensive developer handover documentation covering: development commands, environment variables, deployment steps (Netlify), Cookiebot account handover instructions, Google Places API key management, pre-launch checklist, post-launch steps, and security header configuration.

### TODO.md

Pre-launch checklist tracking what remains. Organised by category.

### Documentation quality: **Unusually thorough — this project is well-documented for handover and for replication**

---

## 13. Google Reviews Integration

A live review fetcher (`src/features/reviews/fetchReviews.ts`) pulls from the Google Places API (New) using the firm's Place ID:

- Module-level in-memory cache with a 24-hour TTL
- Filters to 4-star and above reviews with text content only
- Graceful degradation — returns empty array or stale cache on API failure, so the page never crashes
- Formats review dates to Irish locale (`en-IE`)

For a new client deployment, only the Place ID and API key change.

---

## 14. Quality Rating Summary

| Area | Rating | Notes |
|---|---|---|
| Tech stack | Top level | Modern, lean, correct choices for the use case |
| Design system | Top level | Professional design systems work — theme-swappable in one line |
| Component architecture | Top level | Consistent patterns, well-named, GSAP-paired, zero shortcuts |
| Animation system | Top level | 19 animated components, reduced motion correct, session-gated intro |
| Content architecture | Top level | 100% config-driven — zero hardcoded content |
| Contact form | Top level | Complete, tested, production-ready |
| Legal compliance infrastructure | Top level | Unusually thorough for a web project |
| AI workflow system | Top level | Productised, not ad hoc — enforces consistent quality |
| SEO technical layer | Strong | Structured data, E-E-A-T, OG tags — sitemap/robots.txt remain |
| Accessibility | Strong | Substantive work beyond checkbox compliance |
| Unit tests | Good | Contact form well-covered; Playwright test suite not yet written |
| Legal page content | In progress | 4 pages outstanding — the primary pre-launch gap |
| Dev/content documentation | Top level | CLAUDE.md + \_system/ + \_business/ is unusually thorough |

---

## 15. What Remains Before Launch

In roughly priority order:

1. **Legal page content** — Privacy Policy, Terms of Use, Complaints Procedure, Accessibility Statement. Routes and shells are built. These are the most substantive outstanding items.
2. **Solicitor credentials** — confirm university name and admission year for `team.ts` (used in AttributionBlock / E-E-A-T)
3. **Firm email** — update to the solicitor's practice email in `firm.ts` and `deliverContact.ts`; verify sending domain in Resend
4. **Sitemap** — install `@astrojs/sitemap`, add to `astro.config.mjs`
5. **Robots.txt** — create in `public/`
6. **Security headers** — create `netlify.toml` with X-Frame-Options, HSTS, CSP (values documented in README)
7. **Production environment variables** — set `RESEND_API_KEY` and `GOOGLE_PLACES_API_KEY` in Netlify dashboard
8. **Production siteUrl** — update in `firm.ts` once the domain is confirmed
9. **Testimonial consent forms** — collect from review sources for the compliance record
10. **Google Search Console verification** — post-launch step (requires live domain)
11. **Playwright test suite** — cookie consent tests documented as needed
12. **Per-page OG images** — nice to have, not blocking

**Estimated time to launch from current state:** 2–4 working days, primarily spent on legal page copywriting and deployment configuration.

---

## 16. Templating and Replication Potential

This is the commercial case for the project beyond the single client.

### What the template delivers to a second client

When the site is deployed for a second Irish solicitor, they receive:

- A premium, custom-looking website with four theme options, none of which look like a solicitor website template
- 8 service pages with complete content architecture (article, trust strip, process steps, FAQs, CTAs, related services)
- Full animated experience — 19 component-level animations with reduced motion support
- Complete contact form with Irish phone validation, anti-spam, PRG, email delivery
- Google Reviews integration (4-star filter, 24hr cache)
- Legal compliance infrastructure: Cookiebot, mandatory cost warnings, compliance screenshot tooling
- SEO technical layer: structured data, canonical URLs, OG tags, E-E-A-T signals
- Accessibility: skip link, ARIA, reduced motion, WAVE-checked
- AI workflow system: 6 specialist skills that enforce copy quality, compliance, and design standards for any future content changes

### What changes per client

| What changes | How complex |
|---|---|
| Firm details (name, phone, address, email, hours) | Edit one TypeScript file — 10 minutes |
| Theme colour scheme | Change one import line — 5 minutes |
| Service content (8 pages of copy) | Substantive — copywriting work, 1–3 days depending on brief quality |
| Team credentials and photos | Edit one config file, add photo files — 30 minutes |
| Testimonials | Edit one config file — 15 minutes |
| Legal page content | Templatable from first deployment — 2–4 hours for second client |
| Domain, hosting, email delivery | Deployment configuration — 1–2 hours |

### Estimated time for a second deployment (same service structure)

| Scenario | Estimated time |
|---|---|
| Same 8 services, new firm, templated content from client | 2–3 working days |
| Different service mix (add/remove 1–2 services) | 3–4 working days |
| New service area not on the site (e.g. immigration law) | 4–5 working days (new config, new page, new article) |
| Full bespoke brief (different homepage structure) | 6–10 working days |

The 2–3 day estimate for a standard second deployment is realistic. The configuration-driven architecture, theme system, and reusable component library are all built specifically to make this viable.

### What makes this different from a typical website product

Most website products for solicitors are WordPress themes, page builders, or white-label products. They look like solicitor website templates because they are. This system:

- Produces sites with no identifiable template fingerprint — each theme looks bespoke
- Is built on a modern framework with a performance profile that WordPress cannot match
- Has Irish advertising regulation compliance built in at the infrastructure level — not an afterthought
- Has an AI workflow that enforces quality and compliance for any future content changes
- Is maintained and extended by an AI-assisted developer workflow, which means the ongoing cost of content changes and updates is materially lower than a traditional agency model

---

## 17. Summary for Valuation

This project represents approximately [to be determined] hours of professional development work, research, and content production. The output is:

- A fully functioning, near-production Irish solicitor website with premium animation, complete legal compliance infrastructure, and a sophisticated design system
- A replicable product system capable of delivering a second deployment in 2–3 days
- An AI-assisted development workflow with specialist skills that enforce consistent quality across deployments
- A documented body of research covering Irish solicitor copywriting, SEO, legal advertising regulations, market positioning, and business model

The primary outstanding work (legal page content, deployment configuration) is well-defined, low-risk, and estimated at 2–4 working days.

The system is at a stage where a second client could be onboarded before the first site has launched, using the same codebase.
