# Processor Agreements (DPAs)

Signed Data Processing Addendums for every third-party processor handling personal data on Mary Molloy Solicitor's behalf.

Required under **GDPR Article 28(3)** — every controller-processor relationship must be governed by a written contract containing eight specified clauses.

---

## What goes in this folder

A signed PDF of each processor's DPA. File naming convention:

```
[processor-name]-dpa-YYYY-MM-DD.pdf
```

Date is the date the DPA version is effective (usually printed on the DPA itself — not the date you downloaded it).

---

## Processors required for the website

As of 2 May 2026, the website uses the following processors:

| Processor | What it processes | DPA on file? | Notes |
|---|---|---|---|
| **Cookiebot** (Cybot A/S, Denmark) | Cookie consent records | ❌ Not yet filed | EU-based — no third-country transfer. Get from Cookiebot Manager → Settings → DPA, or from `cookiebot.com/en/legal/dpa/`. |
| **Resend** (US) | Contact-form email delivery | ❌ Not yet filed | US-based — third-country transfer. Verify SCCs / EU-US Data Privacy Framework. Get from `resend.com/legal/dpa`. |
| **[Hosting provider]** | Server access logs | ❌ Not yet filed | Confirm the host being used and download their DPA. |

---

## What to check in each DPA

GDPR Article 28(3) requires the contract to contain all eight of the following. Confirm each is present before filing:

1. **Processing only on documented instructions** from the controller, including third-country transfers.
2. **Confidentiality** — staff handling the data are bound to confidentiality.
3. **Security measures** — Article 32 measures in place.
4. **Sub-processors** — only with prior authorisation; same obligations flow down.
5. **Rights assistance** — the processor helps the controller respond to data-subject requests.
6. **Breach notification, security, DPIA assistance** — the processor assists with these.
7. **Return or delete** all personal data at the end of the contract.
8. **Audit rights** — controller can audit, including via inspections.

For SaaS providers, these are non-negotiable boilerplate. The job here is to confirm they are present, not to negotiate.

---

## Annual review

Every twelve months:

1. Re-check each processor's published DPA — has the version date changed? If so, download the new one.
2. Review the sub-processor list for each — has the processor added new sub-processors? Some require positive notification (you may need to sign in to a notification preferences page).
3. Re-confirm the third-country transfer mechanism is still in force (e.g. EU-US Data Privacy Framework adequacy decision).
4. Update the table above.

---

## Cross-references

- **Article 30 RoPA — website slice:** `../gdpr/record-of-processing-activities.md`
- **Article 28 GDPR (processor contract requirements):** `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, pages 23–25
- **DPC walkthrough Section 17 (where the DPA filing obligation is anchored):** `../cookies/dpc-guidance-walkthrough.md`
