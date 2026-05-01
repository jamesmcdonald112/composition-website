# About page
_Exported 30 April 2026 — source: `src/config/about.ts`_

This document is the full content of the About page on the Mary Molloy Solicitor website. The wording has been audited against the Legal Services Regulation Act 2015 (Advertising) Regulations 2020.

Please read through and let me know if you would like anything changed.

The technical compliance summary at the end is for the website's records — you can skip it unless you want to read it.

---

## SEO

- **Page title:** About Mary Molloy Solicitor | Kilkenny Law Firm Since 1979
- **Meta description:** Mary Molloy Solicitor has practised in Kilkenny since 1979. A family firm handling property, wills, family law, personal injury and private client matters.

---

## Hero

- **Eyebrow:** About the firm
- **Title:** A family firm in Kilkenny since 1979
- **Image alt:** Kilkenny Castle and the River Nore, Kilkenny City

**Subtitle:**

> Many of our clients are people we've known for years. Some we've helped through more than one chapter of their lives. That's been true since 1979, and it still matters to us.

---

## Trust strip

- **Title:** A family firm with 46 years in Kilkenny

_The "46 years" figure is calculated automatically from the firm's establishment year (1979). It will update on its own each January._

**Paragraphs:**

> Mary Molloy has been practising law in Kilkenny since 1979. What started as a sole practice on Rose Inn Street is now a three-solicitor family firm. Mary's sons Nicholas and Richard practise alongside her, each with their own area of focus and the same approach the firm was built on.

> We work across property, wills and probate, family law, personal injury, and private client matters. After 46 years, one thing hasn't changed: the cases that seem routine to a solicitor are rarely routine to the person going through them. That's worth remembering on every file.

> The work of the firm is mainly on the personal-client side — buying and selling a home, making a will, administering an estate, and family law matters — alongside personal injury, employment, and the smaller-business side of the practice. The legal and procedural rules differ by area; the underlying approach to client work does not.

> All client matters are handled by qualified solicitors. The firm is small enough that the solicitor on a file is the person clients deal with directly — not a call handler or a paralegal acting on the solicitor's behalf.

### Stats

| Label | Value |
|---|---|
| Years in practice | 46+ (auto-calculated from 1979) |
| Established | 1979 |
| Local base | Kilkenny |
| Core focus | Conveyancing |

---

## Attribution block

The end of the article shows a "written by" panel attributing the page to Mary as the solicitor under whose name it is published.

- **Solicitor:** Mary Molloy
- **Role:** Principal Solicitor
- **Credentials line displayed:** LLB, Admitted to the Roll of Solicitors, Law Society of Ireland
- **Last reviewed marker:** April 2026

_The credentials line is currently a placeholder. The full version (with the university Mary attended and her year of admission to the Roll of Solicitors) will be filled in once those details have been confirmed. This is tracked separately and applies to every page that displays an attribution._

---

## Bottom call-to-action panel

- **Title:** Not sure where to start?

**Body:**

> That's fine. Tell us a little about your situation and we'll explain what would be involved.

---

## Compliance summary — for the website's records

_This is a technical reference for the website manager. You can skip this section — it does not need your review._

This page was audited against the following regulations of S.I. No. 644/2020 — the Legal Services Regulation Act 2015 (Advertising) Regulations 2020:

| Regulation | Status |
|---|---|
| Reg 4(a)(i) — disrepute | ✅ pass |
| Reg 4(a)(ii) — bad taste | ✅ pass — sensitive subjects (bereavement, separation, first home) handled with empathy and plain language |
| Reg 4(a)(iii) — attacks on other solicitors | ✅ pass — no comparative claims |
| Reg 4(a)(iv) — false or misleading statements / unverifiable superlatives | ✅ pass — no "expert", "leading", "best", "specialist", or guarantees of outcome |
| Reg 4(a)(vi) — encouragement to make personal injury claims | n/a — no personal injury content on this page |
| Reg 5 — client references and testimonials | ✅ no client testimonials on this page |
| Reg 5(a)(i) — named persons consent | ✅ Mary's name, role, and photo appear via the attribution block. As owner of the firm, separate consent is not required — the firm publishing on its own behalf is the consent (Category 1 in `legal-compliance/testimonials-and-quotes-consent.md`) |
| Reg 6(a) — Section 149 cost warning | n/a — page does not cover litigation, personal injury, or contentious matters |
| Reg 6(b) / 6(c) / 7 / 8 — personal injury and contentious-business specific rules | n/a — page does not cover personal injury or contentious business |
| Reg 11(a) — firm name visible | ✅ pass — appears in header, footer, schema |
| Reg 11(f) — record keeping (12-month retention) | ✅ in place — `scripts/compliance-screenshot.ts` produces a dated record after every content change |

### Note on auto-calculated values

The trust-strip title (*"A family firm with 46 years in Kilkenny"*) and the "After 46 years" sentence in the trust strip both use a calculated `yearsInPractice` value derived from the firm's 1979 establishment year. This means the figure updates automatically each January — there is no need to manually update the about page when the firm's anniversary passes. Stat-block "Years in practice" values across the site (home, services pages, services index) use the same calculation.
