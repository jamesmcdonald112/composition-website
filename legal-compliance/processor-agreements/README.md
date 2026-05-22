# Processor Agreements (DPAs)

Signed Data Processing Addendums for every third-party processor that handles personal data on the studio's behalf.

The contractual basis for these agreements is GDPR Article 28(3) (for EU/UK visitors), Law 25 Section 18.3 (for Québec residents), and PIPEDA Principle 4.1.3 (for other Canadian residents). All three regimes require the controller-to-processor relationship to be governed by a written contract containing the same core obligations.

---

## What goes in this folder

A signed PDF of each processor's published DPA. File naming convention:

```
[processor-name]-dpa-YYYY-MM-DD.pdf
```

Date is the date the DPA version is effective (usually printed on the DPA itself — not the date you downloaded it).

---

## Processors currently used by the site

| Processor | Legal entity | Region | What it processes | DPA on file? |
|---|---|---|---|---|
| **Cookiebot** | Cybot A/S (now Usercentrics A/S) | Denmark (EEA) | Cookie consent records | ✅ `cookiebot-dpa-2022-01.pdf` |
| **Resend** | Resend, Inc. | United States | Contact-form email delivery + lead-magnet email | ✅ `resend-dpa-2026-05-03.pdf` |
| **Vercel** | Vercel Inc. | United States | Website hosting + short-term server access logs + SSR function execution | ✅ `vercel-dpa-2026-05-03.pdf` |
| **Cal.com** | Cal.com, Inc. | United States | Introductory-consultation booking widget (name, email, time zone, any answers provided at booking) | ❌ **Not yet filed** — download from `cal.com/legal/dpa` |

The studio's privacy policy in `src/config/legal/privacy.ts` names each of these processors and links them to specific data flows. **Keep the table above and the privacy policy in sync.** If a processor is added, removed, or swapped, update both at the same time.

---

## What to check in each DPA

Whether the DPA was signed under GDPR Article 28(3), Law 25 Section 18.3, or PIPEDA Principle 4.1.3, the substantive contract requirements are nearly identical. Confirm each of the following is present before filing:

1. **Processing only on documented instructions** from the controller — including any third-country transfers.
2. **Confidentiality** — staff handling the data are bound to confidentiality.
3. **Security measures** — appropriate technical and organisational measures (Article 32 GDPR / equivalent obligations under Law 25 Section 10 / PIPEDA Principle 4.7).
4. **Sub-processors** — only engaged with prior authorisation; the same obligations flow down to them.
5. **Rights assistance** — the processor helps the controller respond to data-subject access, rectification, erasure, and similar requests.
6. **Breach notification + security + DPIA assistance** — the processor assists the controller with these.
7. **Return or delete** all personal data at the end of the contract, at the controller's choice.
8. **Audit rights** — the controller can audit the processor, including by inspection (in practice, satisfied by published SOC 2 / ISO 27001 reports for SaaS providers).

For SaaS providers like the four in the table, these clauses are non-negotiable boilerplate. The job is to confirm they are present and to file the signed version, not to negotiate.

### Third-country transfer mechanism

For any processor outside the EEA / UK / a country with an adequacy decision, the DPA must additionally specify the safeguard relied upon for the international transfer (GDPR Articles 44–46; UK GDPR equivalents; Law 25 Section 17 transfer-assessment obligation). The two common safeguards:

- **EU Standard Contractual Clauses (SCCs)** — Commission Decision 2021/914 of 4 June 2021. The default for US-based processors.
- **EU–US Data Privacy Framework adequacy decision** — Commission Decision 2023/1795, in force since 10 July 2023. A processor that is self-certified under the DPF can rely on it instead of (or alongside) SCCs.

When checking a US-processor DPA, note which mechanism is named and in which section. The studio's privacy policy references these mechanisms collectively; keep a note here if any DPA names a different mechanism so the policy can be updated.

---

## Annual review

Every twelve months:

1. Re-check each processor's published DPA — has the version date changed? If so, download the new one and replace the file in this folder.
2. Review the sub-processor list for each — has the processor added new sub-processors? Some require positive notification.
3. Re-confirm the third-country transfer mechanism is still in force.
4. Update the table above if any processor has changed.
5. Confirm the privacy policy in `src/config/legal/privacy.ts` still matches.

---

## Cross-references

- **GDPR — Article 28 (processor contract requirements):** `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Articles 28–29
- **GDPR — Articles 44–46 (international transfers):** same PDF
- **EU Standard Contractual Clauses (Commission Decision 2021/914):** [eur-lex.europa.eu/eli/dec_impl/2021/914/oj](https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj)
- **EU–US Data Privacy Framework (Commission Decision 2023/1795):** [eur-lex.europa.eu/eli/dec_impl/2023/1795/oj](https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj)
