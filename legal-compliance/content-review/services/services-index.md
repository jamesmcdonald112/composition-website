# Services Index page
_Exported 2 May 2026 — source: `src/config/services/services-index.ts`_

This document is the full content of the Services Index page on the Mary Molloy Solicitor website — the page someone lands on when they click "Services" in the menu, and the page that lists all eight practice areas with cards. The wording has been audited against the Legal Services Regulation Act 2015 (Advertising) Regulations 2020.

Please read through and let me know if you would like anything changed.

The technical compliance summary at the end is for the website's records — you can skip it unless you want to read it.

---

## SEO

- **Page title:** Legal Services in Kilkenny | Mary Molloy Solicitor
- **Meta description:** Solicitors in Kilkenny since 1979. We advise on property conveyancing, wills and probate, family law, personal injury and litigation, road traffic accidents, leases and tenancies, employment law, and debt recovery.

---

## Hero

- **Eyebrow:** Legal Services in Kilkenny
- **Title:** Services

---

## Trust strip

- **Eyebrow:** Why clients choose us
- **Title:** A family practice in Kilkenny since 1979

**Paragraphs:**

> Mary Molloy Solicitor has practised continuously on Rose Inn Street, Kilkenny since 1979. The firm has acted for clients across County Kilkenny and the surrounding counties on property, wills, family, and litigation matters across more than four decades.

> The firm is a family practice. Mary Molloy is the principal solicitor; her sons Nicholas O'Shea and Richard O'Shea are also solicitors at the firm. All client matters are handled by qualified solicitors.

> Our work focuses on a defined set of practice areas across both the personal-client side (property, wills and probate, family law, personal injury) and the smaller-business and individual-disputes side (employment law, leases and tenancies, debt recovery). The legal and procedural rules differ by area; the underlying approach — clarity about the law, careful preparation, and respect for the people involved — does not.

> All solicitors at the firm are admitted to the Roll of Solicitors of Ireland and regulated by the Law Society of Ireland and the Legal Services Regulatory Authority.

### Stats

| Label | Value |
|---|---|
| Years in practice | 46+ |
| Established | 1979 |
| Local base | Kilkenny |
| Practice areas | 8 |

---

## Service cards

Eight cards rendered below the trust strip, in this order:

1. Buying & Selling Property
2. Wills & Estate Administration
3. Family & Childcare Law
4. Personal Injury / Litigation
5. Road Traffic Accidents
6. Leases & Tenancy Agreements
7. Employment Law
8. Debt Collection

Each card uses the service description from the corresponding service page (those have all been audited and rewritten as part of the eight individual service-page audits).

---

## Call to action

- **Title:** Get in touch

**Body:**

> Where the area of law that applies to a matter is not clear, an initial conversation often helps to identify it. Get in touch with us in Kilkenny and we'll explain how the relevant legal framework fits the specific circumstances.

---

# Technical compliance summary

_For the website's records. You can skip this unless you want to read it._

This page was rewritten in full from the previous version. As the landing page for all eight service pages, it sets the tone for the site as a whole. The rewrite removes the most direct Reg 4(a)(iii) breach found anywhere on the site, plus a Reg 8 frequency claim, two Reg 4(a)(iv) outcome promises, and the standard urgency / multi-firm / claimant-presuming issues found across the audit.

**Regulations reviewed:**

- **Reg 4(a)(i)** — likely to bring the profession into disrepute. The previous *"Not sure which service you need?"* CTA hook was rewritten in calm, descriptive language.
- **Reg 4(a)(ii)** — likely to be in bad taste. The previous hero subtitle listed *"dealing with a bereavement, going through a separation, facing a workplace dispute"* as marketing content — performing empathy with client distress on what is also a sales page. The list was removed; the rewrite names the eight practice areas neutrally.
- **Reg 4(a)(iii)** — likely to constitute an attack on another solicitor. **The most direct 4(a)(iii) breach found anywhere on the site was on this page:** *"Every client gets direct access to a qualified solicitor, not a call centre or a junior clerk"*. This is a comparative attack on other firms (firms that operate as call centres or that delegate to junior clerks). The rule prohibits any wording that positions a competitor negatively, even where the competitor is unnamed. **Removed entirely.** The replacement paragraph names the family-practice fact (Mary as principal, Nicholas and Richard as solicitors) without comparing the firm to others.
- **Reg 4(a)(iv)** — likely to be false or misleading. Two outcome promises and one superlative claim were removed:
  - *"You will always know where your matter stands, what is happening next, and what it will cost"* — *"always know what it will cost"* is impossible to guarantee in litigation matters.
  - *"Point you in the right direction"* (CTA) — implied outcome on consultation.
  - *"Experienced Kilkenny team"* / *"Experienced, personal legal advice in Kilkenny"* — *"experienced"* used twice as a superlative.
  Also one accuracy fix: *"members of the Law Society of Ireland and proud members of the Kilkenny legal community"* corrected to *"admitted to the Roll of Solicitors of Ireland and regulated by the Law Society of Ireland and the Legal Services Regulatory Authority"* — same fix as the wills, property, and leases pages.
- **Reg 4(a)(vi)** — likely to encourage a person to make a claim. The *"Not sure which service you need?"* CTA hook and the *"facing a workplace dispute"* claimant-presuming line in the hero subtitle were removed. The CTA *"no obligation, just clear advice"* phrasing — which sits in Reg 4(a)(vi) territory — was also dropped.
- **Reg 5(a)(i)** — consent to refer to a person. Mary Molloy is named as the firm's principal solicitor; her name and likeness on the firm's own website does not require separate consent (Category 1 in `legal-compliance/testimonials/testimonials-and-quotes-consent.md`). Nicholas O'Shea and Richard O'Shea are named as solicitors at the firm — covered by the firm-wide blanket consent forms they have signed. No content change required; no action item.
- **Reg 6(a)** — cost warning. Not directly applicable to the index page; the cost warning is rendered on the practice-area pages where contentious work is discussed.
- **Reg 6(b)** — no-win-no-fee ban. Not applicable; no fee-related wording.
- **Reg 6(c)** — referring to compensation amounts. Not applicable.
- **Reg 7** — claims of risk-free litigation. Not applicable.
- **Reg 8** — referring to specific success rates. The previous *"helped thousands of clients across the county"* was a frequency claim about firm volume. Removed and replaced with a calmer description of the firm's continuous practice across more than four decades.
- **Reg 11(f)** — record keeping. The firm retains dated screenshots of every page each time content changes, in `legal-compliance/compliance-records/`.

**One stat label updated** — *"Core focus: Conveyancing"* was slightly out of place on the services *index* page (since the firm's focus across the index is broader than just conveyancing). Replaced with *"Practice areas: 8"* — describes what the page is for and matches the actual scope of the firm.

**E-E-A-T improvements:**

- All eight practice areas anchored in the hero subtitle (a high-SEO position)
- The firm's continuous practice since 1979 anchored
- Mary Molloy, Nicholas O'Shea, and Richard O'Shea named explicitly in the trust strip — entity SEO
- Rose Inn Street, Kilkenny address fact preserved

**Skills applied:**

- `.claude/skills/copy/SKILL.md` — voice, plain-English structure, calm-authority register
- `.claude/skills/ai-isms/SKILL.md` — removed AI patterns; Irish/British English spelling and legal terminology applied
- `.claude/skills/irish-legal-compliance/SKILL.md` — full-rewrite mode, three AI re-reads, regulation-by-regulation pass

---

## Action items flowing through to the firm's compliance file

No page-specific action items. Mary, Nicholas, and Richard are all covered by the firm's adopted consent framework.
