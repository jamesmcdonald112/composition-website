# Pending items across all pages

This file tracks compliance items that affect multiple pages on the site, so individual page-review documents don't repeat them. Each item is dealt with in a single place — usually when its source config is audited — and removed from this list.

This is a working file for the website manager. It is not part of any client-facing review document.

---

## 1. Solicitor credentials — university and year of admission

**Affects:** every page (the credentials line displays in the article attribution block on service pages).

**Current state:** the site shows "LLB, Admitted to the Roll of Solicitors, Law Society of Ireland" for each of the three solicitors. The university and admission year are placeholder TODOs in `src/config/team.ts`.

**Required to confirm:**

| Solicitor | University | Year admitted |
|---|---|---|
| Mary Molloy | _to confirm_ | _to confirm_ |
| Nicholas O'Shea | _to confirm_ | _to confirm_ |
| Richard O'Shea | _to confirm_ | _to confirm_ |

**To do:** ask Mary / Nick / Richard for these details. Once confirmed, update `src/config/team.ts` and re-run the affected page reviews. This will be addressed when `team.ts` is audited.

---

## 2. Future client testimonial policy

**Affects:** any page that adds a client testimonial in future (currently no client testimonials are published on the site).

**Required:** when the firm wants to add a client testimonial, prior written consent under Reg 5(a)(i) must be obtained from each named client. The four points the consent letter must cover and the filing rule are in `legal-compliance/testimonials-and-quotes-consent.md`.

**To do:** no immediate action. When the first client testimonial is proposed, follow the consent procedure before adding it to `src/config/testimonials.ts`.

---

## 3. Firm email address — placeholder

**Affects:** every page that displays the firm contact email (footer, contact page, structured data).

**Current state:** `src/config/firm.ts` has `email: "info@YOURDOMAIN.ie"` as a placeholder.

**To do:** confirm the real firm email and replace the placeholder. This will be addressed when `firm.ts` is audited.

---

## How this file is used

When auditing a config, the website manager checks this file first. If a finding belongs here (cross-page, not specific to the page being audited) the page review references this file instead of repeating the item. When an item is resolved, the entry is moved to the bottom of this file under "Resolved" with a date.

---

## Resolved items

_None yet._

_Last updated: 2026-04-30._
