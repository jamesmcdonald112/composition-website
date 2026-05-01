# Team section content
_Exported 2 May 2026 — source: `src/config/team.ts`_

This document is the visible content of the team section that appears on the home page and the about page of the Mary Molloy Solicitor website. The wording has been audited against the Legal Services Regulation Act 2015 (Advertising) Regulations 2020.

Please read through and let me know if you would like anything changed. **In particular: Mary, Nicholas, and Richard should each confirm the bio under their own name reads accurately.**

The technical compliance summary at the end is for the website's records — you can skip it unless you want to read it.

---

## Section heading

- **Title:** Meet our team

---

## Section intro

> Mary Molloy Solicitor has practised continuously on Rose Inn Street, Kilkenny for over 46 years. The firm is a family practice — Mary is the principal solicitor; her sons Nicholas and Richard are also solicitors at the firm. All client matters are handled by qualified solicitors.

_The "46 years" figure is calculated automatically from the firm's establishment year (1979). It updates each January without manual edits._

---

## Team members

### 1. Mary Molloy — Principal Solicitor

**Bio:**

> Mary is the principal solicitor at the firm, which she founded in Kilkenny in 1979. Her practice covers property, wills and probate, and private client matters.

---

### 2. Nicholas O'Shea — Solicitor

**Bio:**

> Nicholas advises clients on property and private client matters at the firm, including conveyancing, wills and probate, and family law.

---

### 3. Richard O'Shea — Solicitor

**Bio:**

> Richard advises clients on buying and selling property, conveyancing, and probate matters at the firm.

---

### 4. Duke — Office Companion

**Bio:**

> Providing daily morale support to the team and a friendly welcome to visitors.

---

## Solicitor credentials (used in attribution blocks across the site)

Each solicitor's name, role, and qualifications are also displayed in the attribution block at the bottom of every content page they have signed off on. The current displayed credentials line is:

> "LLB, Admitted to the Roll of Solicitors, Law Society of Ireland"

**This is a placeholder.** The full version should include each solicitor's:

- Degree (LLB or other) — currently shown as LLB for all three; please confirm
- University attended — currently a placeholder (`TODO: University name`)
- Year of admission to the Roll of Solicitors — currently a placeholder (`TODO: Year`)

This applies to all three solicitors and is tracked separately in the cross-page items file (`legal-compliance/content-review/_pending-items-across-pages.md`). It is not a per-page audit item.

**Action items for each of you:**

- **Mary** — confirm your LLB, the university you attended, and your year of admission to the Roll of Solicitors. The website manager will update the configuration.
- **Nicholas** — confirm your LLB, university, and year of admission.
- **Richard** — confirm your LLB, university, and year of admission.

---

# Technical compliance summary

_For the website's records. You can skip this unless you want to read it._

The team section was originally written before the calm-authority register was settled across the audit, and contained the same outcome-promise / superlative phrasing pattern we cleared from the other pages. The rewrite removed:

**Reg 4(a)(iv) outcome promises and superlatives — section intro:**
- Previous: *"Established in 1979, our family-run solicitor practice has been serving clients across Kilkenny and surrounding areas for over 46 years. We provide clear, practical legal advice in property, probate and private client matters, with a strong focus on communication, personal service and keeping clients fully informed at every stage."*
- Issues: *"clear, practical legal advice"* (boilerplate), *"strong focus on communication, personal service"* (outcome promise), *"keeping clients fully informed at every stage"* (outcome promise — same phrase pattern removed from the home page aside).
- Rewritten to a calm, factual description of the firm's continuous practice and structure.

**Reg 4(a)(iv) — Mary's bio:**
- Previous: *"Mary leads the firm with over four decades of experience advising clients on property and private client matters throughout Kilkenny. She is known for her practical guidance, straightforward advice and personal approach to each case."*
- Issues: *"with over four decades of experience"* (superlative), *"known for her practical guidance, straightforward advice and personal approach"* (unverifiable reputational claim).
- Rewritten to a factual statement of Mary's role, the firm's founding, and her practice areas.

**Reg 4(a)(iv) — Nicholas's bio:**
- Previous: *"Nicholas works across property and private client matters, supporting clients with clear communication and efficient case progression. He focuses on responsiveness, clarity and maintaining consistent contact throughout the legal process."*
- Issues: *"clear communication and efficient case progression"* / *"focuses on responsiveness, clarity and maintaining consistent contact"* (outcome promises and performative virtue claims).
- Rewritten to a factual statement of Nicholas's practice areas at the firm.

**Reg 4(a)(iv) — Richard's bio:**
- Previous: *"Richard advises clients on buying and selling property, conveyancing and probate matters. He brings a steady, detail-focused approach to ensure each transaction progresses efficiently from first instruction to final completion."*
- Issues: *"to ensure each transaction progresses efficiently"* (outcome promise).
- Rewritten to a factual statement of Richard's practice areas.

**Duke's bio left untouched** — voice-true and not a compliance issue.

**Other regulations:**

- **Reg 4(a)(i)** — disrepute. No issues.
- **Reg 4(a)(ii)** — bad taste. No issues.
- **Reg 4(a)(iii)** — attacks on other solicitors. No comparative or critical wording.
- **Reg 4(a)(vi)** — encouragement to make a claim. Not directly applicable on the team section; no claim-making hooks appear.
- **Reg 5(a)(i)** — consent to refer to a person. Mary Molloy is named with photo and bio; as firm owner, separate consent is not required (Category 1 in `legal-compliance/testimonials-and-quotes-consent.md`). Nicholas O'Shea and Richard O'Shea are named with photos and bios — covered by the firm-wide blanket consent forms they have signed. Duke is named with photo — as a non-human family member, no consent framework applies. No content change required.
- **Reg 6** / **Reg 7** / **Reg 8** — not directly applicable on the team section.
- **Reg 11(f)** — record keeping. The firm retains dated screenshots of every page each time content changes, in `legal-compliance/compliance-records/`.

**Skills applied:**

- `.claude/skills/copy/SKILL.md` — voice, plain-English structure, calm-authority register
- `.claude/skills/ai-isms/SKILL.md` — removed AI patterns; Irish/British English spelling and legal terminology applied
- `.claude/skills/irish-legal-compliance/SKILL.md` — surgical-edit pass

---

## Action items flowing through to the firm's compliance file

- **Mary, Nicholas, and Richard** — each to confirm the bio under their own name reads accurately. (Bios are short and factual; no marketing claims to verify.)
- **Solicitor credentials** — Mary, Nicholas, and Richard each to confirm their degree, university, and year of admission to the Roll of Solicitors, so the attribution block placeholder can be updated. Tracked in `_pending-items-across-pages.md`.
- **Duke's photo** — no consent framework applies (he is a non-human family member). No action needed.
