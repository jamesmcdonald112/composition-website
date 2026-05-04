# Website Disclaimer — Research and Audit Trail

_The research, comparison work, and editorial reasoning behind the live disclaimer at `/disclaimer`. The published prose lives in `legal-compliance/disclaimer.md`; the rendering config lives in `src/config/legal/disclaimer.ts`._

_This file is the dated audit-trail copy. It exists so that a regulator (LSRA, Law Society, DPC) auditing the firm's compliance can see how the disclaimer was researched, what was lifted from the Law Society template, what was deliberately rejected, and what statutory anchors back each section._

---

## Drafting workflow used

The disclaimer was drafted in 2026-05-04 in three stages:

1. **Stage 1 — first draft** based on Irish solicitor's-website convention, the LSRA 2020 Advertising Regulations, common-law principles on the formation of a solicitor–client relationship, and contract/tort limits on liability exclusions.
2. **Stage 2 — research pass** — skipped; the Law Society template arrived first and was incorporated directly at Stage 3.
3. **Stage 3 — Law Society template comparison** — the official Law Society of Ireland template (`legal-compliance/law-society-of-ireland-website-disclaimer-template.docx`) was read end-to-end and compared section by section against Stage 1.

After Stage 3, an independent rewrite of Section 5 was triggered by the LSRA Regulation 9 question — see the dedicated section below.

---

## Section-by-section anchors

Each section of the live disclaimer is anchored in named law or named convention:

| Section | Purpose | Anchored in |
|---|---|---|
| 1 — General information | Defeats reliance arguments — the bedrock of every solicitor's-website disclaimer | Convention; common-law negligent-misstatement (Hedley Byrne v Heller principles applied to website publishing) |
| 2 — No solicitor–client relationship | The most important section; defeats any later "you advised me through your site" or "you should have lodged my proceedings before the limitation period expired" argument | Common-law retainer doctrine; Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 — client identification before retainer; Statute of Limitations 1957; Civil Liability and Courts Act 2004 (two-year personal injuries period) |
| 3 — Confidentiality vs privilege | Honest about the limit of privilege pre-engagement; cross-references Section 8 of the privacy policy | Article 90 GDPR; DPA 2018 Section 162; common-law on legal professional privilege |
| 4 — Accuracy and currency | The standard "no warranty" position, with the carve-out for liability that cannot be excluded | Common-law on liability exclusions; Sale of Goods and Supply of Services Act 1980 (limits on exclusions) |
| 5 — External links | Reg 9 LSRA 2020 — solicitor deemed responsible for promotional content on linked external pages | LSRA 2020 Reg 9; mirrors `legal-compliance/website-content-review-checklist.md` Reg 9 audit policy |
| 6 — Use of the site | Light acceptable-use restrictions — no scraping, no automated access | Convention |
| 7 — Intellectual property | Asserts ownership without making big claims | Copyright and Related Rights Act 2000 |
| 8 — Site may change | Lets us update the site without each change being a breach of representation | Convention |
| 9 — Governing law and jurisdiction | Anchors any dispute to Irish courts and Irish law | Standard for any Irish-firm website |
| 10 — Contact | Closes the document | Convention |

---

## Stage 3 — Law Society of Ireland template comparison

_Done 2026-05-04. Template filed at `legal-compliance/law-society-of-ireland-website-disclaimer-template.docx`._

### What the Law Society template contains

The Law Society's official template is a **single-page, six-paragraph** disclaimer (about 280 words). The six paragraphs cover:

1. **General information / not legal advice / no solicitor–client relationship** — three concepts in one paragraph.
2. **No warranty about accuracy or fitness** — broad "we endeavour to keep up to date but make no representations or warranties" language.
3. **Liability exclusion** — broad "in no event will we be liable for any loss or damage including indirect or consequential loss".
4. **External links** — no control over linked sites; inclusion is not endorsement; no third party may link **to** this site without written authorisation.
5. **IP** — content protected by trade mark, copyright, and other IP laws; no reproduction without prior written consent.
6. **Site availability** — no responsibility for the site being temporarily unavailable; "all information is subject to change without notice".

### Where the live disclaimer is stronger than the template

| What | Why ours is better |
|---|---|
| **Section 2 (no solicitor–client relationship)** is its own dedicated section | The template buries this in paragraph 1. Given that this section is the single most important defensive piece of the disclaimer, separating it improves both readability and legal weight. |
| **AML CDD trigger named** in Section 2 | Template doesn't mention AML at all. Naming the AML Act 2010 client identification step is honest about what creating a retainer actually requires. |
| **Limitation-period warning** in Section 2 | Template doesn't mention limitation periods. The line about the two-year personal-injuries period and the six-year contract/tort period is a real protection for the visitor and a real protection for the firm — if a visitor later argues the firm should have lodged proceedings before time expired, having a written warning on the site is useful evidence. |
| **Confidentiality vs privilege** (Section 3) | Template silent. Ours is honest about the limit of privilege pre-engagement and cross-references the privacy policy. |
| **"To the fullest extent permitted by Irish law"** carve-out for liability exclusion (Section 4) | Template's broad "in no event will we be liable" language is overreaching — under Irish law you cannot exclude liability for fraud, fraudulent misrepresentation, or for death/personal injury caused by negligence. A court reading the template's unqualified exclusion may strike it down entirely under the contra proferentem rule. The qualified version is what keeps the exclusion enforceable. |
| **Governing law and jurisdiction** (Section 9) | Template doesn't have one. Anchoring disputes to Irish courts and Irish law is standard and worth keeping. |

### What was lifted from the template

Two changes lifted from the template (applied):

1. ✅ **Section 4 (Accuracy and currency)** — added the sharper "any reliance you place on such information is therefore strictly at your own risk" phrase, and added the "every effort is made to keep the site running, no responsibility for temporary unavailability" line.
2. ✅ **Section 7 (Intellectual property)** — refined to use the template's "trade mark, copyright, and other intellectual property laws" wording and added "may not be reproduced without our prior written consent".

### What was considered and deliberately skipped

- ❌ **Section 5 inbound-linking restriction** — the template's "no links to this website may be included in any other website without our express written authorisation" line was considered. **Skipped because:** (a) linking to a public web page is not a tort in Ireland and the clause is largely unenforceable; (b) the risk it protects against (unwanted inbound links to a sole-practitioner solicitor's site) is theoretical; (c) it can confuse ordinary visitors who think they need permission to share a link; (d) it undercuts the firm's own SEO interest by appearing to forbid the legitimate inbound links the firm actively wants from the Law Society, LSRA, Courts Service, local directories, and press. If a specific inappropriate inbound link ever arises, the LSRA Reg 4 misleading-advertising rule gives the firm enough leverage on a one-off basis without needing a blanket clause.

- ❌ **Unqualified "in no event will we be liable for any loss or damage including indirect or consequential loss"** — overreaches under Irish law. The qualified version in Section 4 is safer.

---

## Independent rewrite of Section 5 — LSRA Regulation 9

The Law Society template's Section 4 (external links) and the Stage 1 first-draft equivalent both took the broad position that the firm accepts no responsibility for content on any external site. **This position does not survive LSRA Regulation 9.**

### Verbatim text of Reg 9

> "Where an advertisement published by or on behalf of a legal practitioner which is accessible electronically links to other information that is accessible electronically elsewhere, the legal practitioner shall be deemed for the purpose of compliance with these Regulations to be personally responsible for the publication of such other information insofar as such other information can reasonably be construed as intended to publicise or otherwise promote the legal practitioner."

_Source: `legal-compliance/Legal Services Regulation Act 2015 (Advertising) Regulations 2020.md`, Regulation 9._

### How the position differs from general law

Two separate legal frameworks apply to outbound links from a solicitor's website:

1. **General law (CJEU *Svensson* C-466/12, *GS Media* C-160/15; Irish defamation and consumer-protection law)** — a publisher is *not* automatically responsible for the content of sites they link to. The destination's own publisher is responsible. The two narrow exceptions are (a) knowingly linking to clearly unlawful content, and (b) wording that implies endorsement.

2. **LSRA 2020 Reg 9 (Irish solicitors specifically)** — Mary, **as a legal practitioner**, *is* deemed personally responsible for any linked content that "can reasonably be construed as intended to publicise or otherwise promote" her. This is a profession-specific rule that overrides the general position for solicitor's-website advertising.

So the disclaimer's general "no responsibility for any external site" sweep is broadly true under common law but **not true for Mary as a solicitor under Reg 9** for any link that promotes the firm.

### What the rewritten Section 5 does

The rewrite makes four moves:

1. States the firm only links to **informational/regulatory sources** (Law Society, LSRA, DPC, Courts Service, Irish Statute Book, Google Maps for directions).
2. Names the categories the firm **does not** link to (directory listings, review sites, press articles that name the firm, referral partners, Google Business Profile).
3. Explains the Reg 9 reasoning explicitly so a regulator reading the disclaimer can see the firm understood the rule.
4. Carves "except to the extent the firm cannot lawfully exclude such responsibility under the LSRA Regulations or otherwise" into the disclaimer-of-responsibility sentence, so the exclusion does not overstate.

This is consistent with the existing audit-trail policy in `legal-compliance/website-content-review-checklist.md` Section "Reg 9 — You are responsible for linked external content".

### Operational consequence

Section 5 makes a **public commitment** about which external links the site contains. Before any go-live and at every six-month re-audit:

- Audit the live site against the Section 5 list.
- Confirm there are no directory listings linked, no Google Business Profile link, no press articles linked, no referral partner links.
- Confirm the Google Maps link is the **address-search** version per the existing checklist, not the business-profile version.

If any link on the live site doesn't match the policy, either remove the link or revise Section 5 — the disclaimer cannot say "we don't link to X" while the live site actually does.

---

## What is deliberately not in the disclaimer

- **No personal-injuries-specific disclaimer.** LSRA Reg 4(a)(vi) prohibits a legal practitioner's advertising from soliciting personal-injuries claims. The disclaimer doesn't restate that prohibition — the prohibition is what it is, and the disclaimer doesn't need to recite the law.
- **No fee/retainer language.** That belongs on the legal cost notice page (Section 149 LSRA), not here.
- **No complaints-procedure language.** That belongs on the complaints page (separate page; firm-supplied content).
- **No marketing or testimonials disclaimer.** The site has no testimonials yet; if it does later, a one-line "testimonials are published with the named client's written consent (Reg 5(a)(i))" addition is the right place.

---

## Pending items at first publication

| # | Where | What is pending | Resolution path |
|---|---|---|---|
| 1 | Last reviewed date | Set to "May 2026" at first publication | Re-bumped at every revision |
| 2 | Section 10 contact | Firm email pending Mary's confirmation of `info@marymolloy.ie` | Tracked in `src/config/firm.ts` and in the contact-page address; same pending value as in the privacy policy |

These two are shared with the privacy policy's pending items; the disclaimer is short and only adds these two.

---

## Audit-trail files this disclaimer references

- `src/config/legal/disclaimer.ts` — rendering config (translated from `legal-compliance/disclaimer.md`)
- `src/pages/disclaimer.astro` — page that imports the config and renders via `<LegalPageContent>`
- `src/config/firm.ts` — firm email pending (same `[PENDING MARY]` as privacy policy)
- `legal-compliance/disclaimer.md` — published source-of-truth markdown
- `legal-compliance/law-society-of-ireland-website-disclaimer-template.docx` — Law Society template used for Stage 3 comparison
- `legal-compliance/privacy-policy-draft.md` — Section 8 (privilege) cross-referenced in disclaimer Section 3
- `legal-compliance/Legal Services Regulation Act 2015 (Advertising) Regulations 2020.md` — content-restriction regime; **Reg 9 is the basis for Section 5**
- `legal-compliance/website-content-review-checklist.md` — existing Reg 9 audit policy, mirrored in disclaimer Section 5
- `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf` — Article 90 (professional secrecy)
- Statute of Limitations 1957 — six-year contract/tort limitation period in Section 2
- Civil Liability and Courts Act 2004 — two-year personal-injuries limitation period in Section 2
- Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 — AML CDD anchor in Section 2
- Sale of Goods and Supply of Services Act 1980 — limits on liability exclusions in Section 4
- Copyright and Related Rights Act 2000 — IP anchor in Section 7

---

## Reading time estimate

The published disclaimer is ~3–4 minutes to read. It is deliberately short — visitors don't read long disclaimers, and short disclaimers carry better at law than long ones (a court reads a clear short disclaimer as more obviously brought to the visitor's attention).

---

## Maintenance

- **Annually:** review the whole disclaimer against any LSRA / Law Society guidance updates and against any new processor or third-party additions to the site.
- **At every six-month link audit:** re-check the Section 5 commitment against the live site.
- **When law changes:** update the relevant section, bump the "Last reviewed" date in `legal-compliance/disclaimer.md` and `src/config/legal/disclaimer.ts`, run the compliance screenshot.
- **When a third-party widget is added to the site:** see DPC walkthrough Section 22 trigger checklist; the Section 5 commitment in this disclaimer may also need revision.
