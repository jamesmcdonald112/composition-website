# Complaints Procedure — Is It Legally Required on a Solicitor's Website?

**Research date:** 13 May 2026
**Question:** Under Irish law, must a solicitor's firm publish its internal complaints procedure on its public website?
**Short answer:** **No.** The legal obligation is to *have* a complaints procedure and *give it to the client at engagement* (in the Terms of Business / engagement pack), not to publish it online.

---

## Summary

After reviewing the Legal Services Regulation Act 2015, the Solicitors (Advertising) Regulations 2020, the EU Provision of Services Regulations 2010, the Law Society's Guide to Professional Conduct, and the LSRA's own guidance for practitioners, **no Irish statute, regulation, or regulator rule requires a solicitor's firm to publish its complaints procedure on its public website.**

The obligations that *do* exist are:

1. **Have a complaints procedure** (Law Society recommendation — Guide to Professional Conduct, Chapter 2)
2. **Communicate it to the client at engagement** — typically inside the firm's Terms of Business / engagement letter, alongside the Section 150 cost notice
3. **Attach written dispute-resolution information to the bill of costs** when the bill is issued (s.152(3) Legal Services Regulation Act 2015)
4. **Provide contact details for complaints** — by postal address, email, phone, or fax (Reg 23 of S.I. 533/2010). Mary's existing contact page already satisfies this.

**None of these require a public-facing webpage.**

---

## Recommendation

**Do not publish a complaints procedure on the website.** Specifically:

- Remove the existing empty `/complaints` page from the site
- Keep the complaints procedure inside the firm's Terms of Business / engagement pack (where it is legally meant to live)
- Mary's existing cost-dispute procedure document also belongs in the client engagement pack, not on the website
- The contact page (postal address + email + phone) already satisfies the EU Services Regulation requirement to make complaint contact details available

### Why removing it is the right call

1. **No legal requirement** to publish — confirmed across all relevant sources
2. **Adds compliance overhead** — every edit to a published page triggers a fresh screenshot + 12-month record-keeping obligation under Reg 11(f) of S.I. 644/2020
3. **Creates risk of wording drift** — if the website version ever diverges from the firm's actual engagement-pack version, a complainant could argue the published version is binding
4. **Industry practice** — most Irish sole-practitioner and small-firm solicitor websites do not publish a complaints procedure for exactly these reasons

---

## Sources Consulted (with verbatim quotes where applicable)

### 1. Legal Services Regulation Act 2015 — Part 6 (ss. 50–72)

**Source URL:** https://www.irishstatutebook.ie/eli/2015/act/65/enacted/en/html

Part 6 establishes the LSRA-led complaints regime. Complaints route *to the LSRA*, not to the firm. **No section in Part 6 requires firms to publish their procedure on a website.**

### 2. s.150 LSRA 2015 — The Section 150 Notice (cost information at engagement)

**Source URL:** https://www.irishstatutebook.ie/eli/2015/act/65/section/150/enacted/en/html

This is the statutory notice every client must receive at the start of a matter. It mandates **cost disclosure**. It does **not** require complaints procedure disclosure.

### 3. s.152(3) LSRA 2015 — Bill of costs

**Source URL:** https://www.irishstatutebook.ie/eli/2015/act/65/section/152/enacted/en/html

This is the only statute that requires written dispute-resolution information — and it requires it to be **attached to the bill of costs**, not published on a website.

### 4. Solicitors (Advertising) Regulations 2020 — S.I. No. 644/2020

**Source URL:** https://www.irishstatutebook.ie/eli/2020/si/644/made/en/print
**Local verified copy:** `legal-compliance/legal-services-regulation-act/legal-services-regulation-act-2015-advertising-regulations-2020.md`

Regulates what *may* appear in legal practitioner advertising. **Contains no requirement that a complaints procedure be published on a website.** Reg 11 covers identification of the responsible solicitor on advertising and record-keeping (Reg 11(f)) — not complaints publication.

### 5. EU Provision of Services Regulations — S.I. No. 533/2010, Reg 23

**Source URL:** https://www.irishstatutebook.ie/eli/2010/si/533/made/en/print

Reg 23 requires service providers to make available:

> "details of where a complaint, or a request for information, about the services of the provider can be sent"

and accepts as a valid format:

> "a postal address, a fax number or an electronic mailing address, together with a telephone number"

This is **not a website-publication requirement** — it is a duty to make contact details available, which Mary's existing contact page already satisfies.

### 6. Law Society of Ireland — Guide to Professional Conduct of Solicitors (4th edition), Chapter 2

**Source URL:** https://www.lawsociety.ie/globalassets/documents/committees/conduct-guide.pdf

The Guide states:

> "A solicitor should have a dispute-resolution procedure in place for dealing with complaints, which should be communicated to the client. The client should be advised of any actions that will be taken in relation to the matter that is the subject of a complaint."

And separately:

> "It is recommended that when a solicitor takes instructions, the client is provided with the firm's terms and conditions of business, including its complaints procedure."

**These are recommendations about client-facing communication via Terms of Business — not website publication.**

### 7. Law Society Practice Note — "Internal complaints procedure in solicitors' firms"

**Source URL:** https://www.lawsociety.ie/Solicitors/knowledge-base/Practice-Notes/Internal-complaints-procedure-in-solicitors-firms/

This is an advisory practice note for firms that wish to adopt a written procedure. The template's stated communication channel is:

> "Our firm's Terms and Conditions of Business document"

**No mention of website publication.** No statutory citation requiring it.

### 8. LSRA — "Complaints made to the Legal Services Regulatory Authority — Information for Legal Practitioners" (July 2025)

**Source URL:** https://www.lsra.ie/wp-content/uploads/2026/01/Information-Guide-for-Practitioners-July-2025.pdf

LSRA's own published guidance to solicitors on the complaints process. It explains the LSRA-led process and encourages informal resolution between firm and client. **It says nothing about firms having to publish a complaints procedure on a website.**

---

## What other Irish solicitor firms actually do

- **Some larger firms** (e.g. McKeever Rowan) publish a complaints page voluntarily for marketing/transparency reasons
- **Most sole-practitioner and small-firm Irish solicitor websites do not** — the procedure is included in the Terms of Business issued at engagement
- The professional consensus (as reflected in the Law Society Conduct Guide and the Law Society's own template practice note) is that **delivering the procedure via Terms of Business satisfies the obligation**

---

## What to do next

### On the website
- Delete `src/pages/complaints.astro`
- Delete `src/config/legal/complaints.ts`
- Remove the "Complaints" link from `src/config/nav.ts`
- Save a short note in `legal-compliance/legal-services-regulation-act/` recording the decision not to publish, and the sources above — this itself is a Reg 11(f) record (evidence that the regulations were considered)

### On the firm side (Mary's responsibility, not the website's)
- Confirm the firm's **Terms of Business / engagement letter** includes the complaints procedure
- Continue to issue the **Section 150 Notice** at engagement (cost information)
- Continue to attach **written dispute-resolution information to bills of costs** (s.152(3) requirement)
- Keep the **existing cost-dispute procedure document** in the client engagement pack — not on the website

### Suggested message to Mary

> Good news — I did some research before we put any work into drafting a general complaints procedure. Under Irish law, a solicitor's firm has to *have* a complaints procedure and *give it to the client* at engagement (it usually sits inside the Terms of Business alongside the Section 150 cost notice). But there's no legal requirement to publish it on the website.
>
> I checked Part 6 of the Legal Services Regulation Act 2015, the Solicitors (Advertising) Regulations 2020, the EU Services Regulations 2010, the Law Society's Guide to Professional Conduct, and the LSRA's own guidance for practitioners — none of them require website publication.
>
> Most sole-practitioner Irish solicitor websites don't publish one for exactly this reason — it adds compliance overhead (every edit has to be screenshotted and kept on file for 12 months under the advertising regulations) for no legal benefit.
>
> So my recommendation: don't draft a general complaints procedure for the website. Keep the existing cost-dispute document and your internal complaints procedure in your client engagement pack where they belong. I'll remove the empty `/complaints` page from the site.
>
> Sound good?

---

*Research compiled 13 May 2026. Sources verified live at time of writing. If relying on this more than 12 months later, re-check the Law Society Guide edition and any LSRA guidance updates.*
