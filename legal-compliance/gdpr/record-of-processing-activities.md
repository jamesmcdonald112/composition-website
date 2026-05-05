# Article 30 GDPR — Record of Processing Activities (RoPA)

_Working file — drafted 2 May 2026 alongside DPC walkthrough Section 17._

This file holds everything needed to satisfy **GDPR Article 30** for Mary Molloy Solicitor. It is a working document, not a deliverable to Mary. The website manager drafts the **website slice** here. The **firm-wide slice** is Mary's responsibility and is not in this file — only flagged.

---

## What Article 30 actually requires

Verbatim from the local GDPR PDF:

> "Each controller and, where applicable, the controller's representative, shall maintain a record of processing activities under its responsibility. That record shall contain all of the following information:
> (a) the name and contact details of the controller and, where applicable, the joint controller, the controller's representative and the data protection officer;
> (b) the purposes of the processing;
> (c) a description of the categories of data subjects and of the categories of personal data;
> (d) the categories of recipients to whom the personal data have been or will be disclosed including recipients in third countries or international organisations;
> (e) where applicable, transfers of personal data to a third country or an international organisation, including the identification of that third country or international organisation and, in the case of transfers referred to in the second subparagraph of Article 49(1), the documentation of suitable safeguards;
> (f) where possible, the envisaged time limits for erasure of the different categories of data;
> (g) where possible, a general description of the technical and organisational security measures referred to in Article 32(1)."

_Source: `regulation-2016-679-consolidated-2016-05.pdf`, Article 30(1), pages 27–28. Verified verbatim against local PDF on 2026-05-02._

## Why the under-250 carve-out does not save Mary

Article 30(5) carves out organisations under 250 people **unless** the processing is *not occasional*, is *risky*, or involves *special category / criminal conviction data*.

A solicitor's firm processes client matters continuously (not occasional) and family-law / personal-injury matters touch special category data (health, criminal allegations). So the carve-out **does not apply** to Mary's firm. An Article 30 RoPA is required.

## Two slices

The RoPA covers everything the firm does with personal data. Two slices:

### Website slice (this file — website manager can draft)

Three processing activities the website performs:

1. **Cookie consent log** (Cookiebot)
2. **Contact-form submissions** (Resend)
3. **Server access logs** (hosting provider)

Drafted below — pending firm input on retention periods and the formal RoPA template Mary chooses.

### Firm-wide slice (Mary's responsibility — not in this file)

Everything else the firm does with personal data outside the website:

- Client matter files (court papers, medical reports, financial records, ID documents)
- Court correspondence
- Accounts and billing
- Wages / HR for Duke and any staff
- Old client records in storage
- Any third-party referrals (barristers, expert witnesses, search agents)

This is firm-side work. The website manager cannot draft it — does not know the firm's clients, staff, storage arrangements, insurer, bank, sub-processors. Mary either keeps the RoPA herself, appoints a data-protection point of contact internally, or pays a data protection consultant.

---

## Format — what counts as compliant

The DPC does **not** publish a downloadable RoPA template. Verified against the live DPC site (2026-05-04, "Know Your Obligations" → "Accountability obligation" page): the DPC sets out the obligation in narrative form and lists six plain-English questions a controller should be able to answer about each personal-data processing activity. There is no Excel or Word template offered for download.

What this means in practice: **any reasonable written record covering the seven Article 30(1)(a)–(g) headings is compliant.** Format is up to the controller. The DPC's six accountability questions (from the Accountability obligation page, verbatim) map onto the seven Article 30(1) headings as follows:

| DPC accountability question | Maps to Article 30(1) heading |
|---|---|
| "Why are you holding it?" | (b) Purposes of processing |
| "How did you obtain it?" | partially (c) Categories of data subjects + (b) Purpose context |
| "Why was it originally gathered?" | (b) Purposes of processing |
| "How long will you retain it?" | (f) Time limits for erasure |
| "How secure is it, both in terms of encryption and accessibility?" | (g) Technical and organisational security measures |
| "Do you ever share it with third parties and on what basis might you do so?" | (d) Categories of recipients + (e) Third-country transfers |

Article 30(1) headings (a) controller name + (c) categories of personal data are not covered by the DPC's six questions but are still required by the regulation, so the table format below uses the seven Article 30(1) headings as the canonical structure.

**This file is the firm's RoPA.** It satisfies the DPC's expectation of format. Mary either keeps this file as the working copy, or copies the structure into her preferred tool (Excel, Word, a notes app — whatever fits her workflow). The structure is what counts, not the file format.

**Source verification:** DPC live site, "Accountability obligation" page (under For Organisations → Know Your Obligations), retrieved 2026-05-04.

---

## Website slice — draft

_Drafted following the seven Article 30(1) headings. Pending Mary's confirmation of retention periods and formal RoPA inclusion._

### Activity 1 — Cookie consent records

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [Rose Inn Street, Kilkenny address from `firm.ts`]. No DPO required (Article 37 trigger not met). Day-to-day contact: [Mary or appointed DP point of contact]. |
| **(b) Purposes of processing** | (i) Compliance with Reg 5(3) of S.I. 336/2011 — recording cookie consent decisions. (ii) Compliance with GDPR Article 7(1) — proving consent was given. |
| **(c) Categories of data subjects and personal data** | Data subjects: website visitors. Personal data: pseudonymous consent ID (set by Cookiebot), IP address (briefly, during the consent action), timestamp, consent state per category (Necessary / Preferences / Statistics / Marketing). |
| **(d) Categories of recipients** | Usercentrics A/S (Cookiebot) — Havnegade 39, 1058 Copenhagen, Denmark. Processor relationship governed by Cookiebot DPA filed at `legal-compliance/processor-agreements/cookiebot-dpa-2022-01.pdf`. No further onward recipients. |
| **(e) Third-country transfers** | **No third-country transfer.** Cookiebot DPA Section 3.4 confirms processing takes place within the EU/EEA. |
| **(f) Retention period** | 1 month per the production-account setting (verified 2026-04-27 in dev account; to be re-applied to Mary's production Cookiebot account at launch). |
| **(g) Security measures** | Documented in Cookiebot DPA Annex 1 (Technical and Organisational Measures) — physical access control, system access control, transmission encryption, separation of data, availability/recovery, incident response, regular review. Source: `legal-compliance/processor-agreements/cookiebot-dpa-2022-01.pdf`. |

### Activity 2 — Contact-form submissions

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [Rose Inn Street, Kilkenny address]. No DPO required. Day-to-day contact: [Mary or appointed DP point of contact]. |
| **(b) Purposes of processing** | Responding to enquiries from prospective and existing clients. |
| **(c) Categories of data subjects and personal data** | Data subjects: prospective and existing clients. Personal data: name, email address, phone number (optional), free-text message which may contain any personal data the visitor chooses to disclose. |
| **(d) Categories of recipients** | Resend (processor — email delivery). Mary, Nicholas, Richard, Duke (recipients within the firm — depending on enquiry routing). |
| **(e) Third-country transfers** | Resend is US-based — **third-country transfer**. Lawful basis: [Standard Contractual Clauses / EU-US Data Privacy Framework adequacy decision — verify against the current Resend DPA]. |
| **(f) Retention period** | **PENDING MARY'S DECISION.** Typical solicitor's-firm pattern: as long as the matter is open, plus six years after closure (for legal-cost-recovery and Statute of Limitations 1957 reasons). Forms-only data where no matter results: typically 30–90 days, then deleted. |
| **(g) Security measures** | TLS in transit (Astro hosting + Resend). Encrypted storage at rest (Resend). Access limited to firm staff with email accounts. |

### Activity 3 — Server access logs (hosting provider)

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [Rose Inn Street, Kilkenny address]. No DPO required. Day-to-day contact: [Mary or appointed DP point of contact]. |
| **(b) Purposes of processing** | Site reliability, performance, security, abuse detection. |
| **(c) Categories of data subjects and personal data** | Data subjects: anyone visiting the website. Personal data: IP address, user agent, timestamp, request URL, response code. |
| **(d) Categories of recipients** | **Vercel Inc.** (production hosting target) — processor relationship governed by Vercel DPA filed at `legal-compliance/processor-agreements/vercel-dpa-2026-05-03.pdf`. **Note:** during dev / pre-launch the site is on **Netlify**; Vercel is the planned production deployment target. Update this row at the moment of production cutover and ensure the active processor's DPA is on file. |
| **(e) Third-country transfers** | **Yes — to the United States.** Vercel is US-based. Transfer governed by **EU Standard Contractual Clauses (Commission Decision 2021/914)** per Vercel DPA Section 12.1. Vercel does not claim EU–US Data Privacy Framework certification in the DPA, so SCCs are the sole safeguard. Vercel's DPA Section 12.2 also confirms (as of the DPA signature date) no requests received under Section 702 FISA or EO 12333. |
| **(f) Retention period** | Standard hosting access logs — typically 30–90 days at provider level. To be confirmed against Vercel's published log-retention policy at the moment of production deployment cutover. |
| **(g) Security measures** | TLS in transit, encrypted storage at rest, access restricted to Vercel personnel under Vercel DPA security commitments. Documented in Vercel DPA. |

---

## Firm-wide slice — fillable template

_The eight rows below are placeholders covering processing activities the firm performs **outside the website**. The website-side activities above are already drafted; this slice is for Mary (or a nominated person at the firm, or a data-protection consultant) to fill in. Each row uses the same seven Article 30(1) headings as the website slice. Prompts in italics show the kind of content that goes in each cell._

### Activity 4 — Client matter files

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. No DPO required (Article 37 trigger not met). Day-to-day contact: [Mary or nominated person]. |
| **(b) Purposes of processing** | _e.g. providing legal services to clients in the practice areas of [conveyancing / probate / family law / litigation / etc.]_ |
| **(c) Categories of data subjects and personal data** | _Data subjects: clients, opposing parties, witnesses, beneficiaries, dependants. Personal data: names, addresses, dates of birth, PPS numbers, family relationships, financial records, health records (special category — Article 9), criminal allegation data (special category — Article 10), court papers, ID documents, source-of-funds evidence._ |
| **(d) Categories of recipients** | _e.g. barristers briefed by the firm; expert witnesses; courts and the Personal Injuries Assessment Board; opposing solicitors; search agents; the Land Registry / Property Registration Authority; the Probate Office; client-side accountants where authorised by the client; insurance companies on the client's instructions._ |
| **(e) Third-country transfers** | _Typically: none. If any cloud-based case-management software the firm uses (e.g. Keyhouse, OSG, LEAP, etc.) processes outside the EEA, name the provider and the safeguard (SCCs / adequacy)._ |
| **(f) Retention period** | _Typical solicitor's-firm pattern: as long as the matter is open, plus six years after closure (Statute of Limitations 1957 + Law Society record-keeping rules). Some matter types longer (e.g. wills retained until proved; conveyancing files often kept twelve years for the deed limitation period under Section 11(5)(a))._ |
| **(g) Security measures** | _Paper files: locked filing cabinets, locked storage room, building alarm. Digital: passwords, encryption at rest if applicable, restricted access, secure email for sensitive correspondence. Physical destruction at end of retention via [shredding service / confidential waste contractor]._ |

### Activity 5 — Engagement letters and retainers

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Establishing the solicitor–client relationship; satisfying the Section 150 LSRA / Section 68 Solicitors (Amendment) Act 1994 information-on-charges obligation; AML CDD record._ |
| **(c) Categories of data subjects and personal data** | _Clients. Identification data, contact details, fee arrangements, copies of ID documents (driver's licence, passport, utility bills)._ |
| **(d) Categories of recipients** | _Typically internal-only; AML records may be disclosed to An Garda Síochána or the Financial Intelligence Unit on a statutory information request._ |
| **(e) Third-country transfers** | _None expected._ |
| **(f) Retention period** | _AML records: minimum five years from end of business relationship under Section 55 of the Criminal Justice (Money Laundering and Terrorist Financing) Act 2010. Engagement-letter retention generally aligned with the matter file (see Activity 4)._ |
| **(g) Security measures** | _Same as Activity 4._ |

### Activity 6 — Accounts and billing

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Issuing invoices, collecting fees, maintaining the firm's books and records, complying with Solicitors Accounts Regulations 2014, complying with Revenue obligations._ |
| **(c) Categories of data subjects and personal data** | _Clients. Names, addresses, fee details, payment records, bank account details where supplied._ |
| **(d) Categories of recipients** | _The firm's accountant / bookkeeper [name]; the firm's bank [name]; Revenue Commissioners (statutory information requests under the Taxes Consolidation Act 1997); the Law Society of Ireland's Reporting Accountant for the Solicitors Accounts Regulations annual report._ |
| **(e) Third-country transfers** | _Typically none. If the firm's accounting software (e.g. Sage, Xero, Quickbooks) hosts data outside the EEA, name the provider and the safeguard._ |
| **(f) Retention period** | _Six years (Section 886 Taxes Consolidation Act 1997 — minimum book-and-record retention for Revenue purposes). Solicitors Accounts Regulations may require longer for specific records._ |
| **(g) Security measures** | _Restricted access, password-protected accounting software, locked storage for paper records._ |

### Activity 7 — Wages and HR records

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Paying staff, complying with PAYE / PRSI / USC obligations to Revenue, complying with Working Time Act and Organisation of Working Time Act record-keeping requirements, employment-relationship management._ |
| **(c) Categories of data subjects and personal data** | _Employees (e.g. Duke and any other staff). Names, addresses, PPS numbers, bank account details, pay records, leave records, working-time records, performance records._ |
| **(d) Categories of recipients** | _Revenue Commissioners (PAYE returns); the firm's payroll provider [name, if any]; the firm's accountant; Department of Social Protection on statutory information requests._ |
| **(e) Third-country transfers** | _Typically none. If payroll software hosts data outside the EEA, name the provider and the safeguard._ |
| **(f) Retention period** | _PAYE records: six years (Taxes Consolidation Act 1997). Working-time records: minimum three years (Organisation of Working Time Act 1997 Section 25). Other HR records: typically duration of employment plus six years (general limitation period for employment-related claims)._ |
| **(g) Security measures** | _Restricted access; HR records held in a separate secure location from client-matter files._ |

### Activity 8 — Closed file storage

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Retaining closed matter files for the periods required by the Statute of Limitations 1957, the Law Society's record-keeping rules, AML obligations, and to defend any later claim or appeal._ |
| **(c) Categories of data subjects and personal data** | _Same categories as Activity 4 — closed-matter files contain the same data as live matters but are no longer actively processed._ |
| **(d) Categories of recipients** | _If a third-party storage provider is used: [name, address]. Otherwise: internal storage only._ |
| **(e) Third-country transfers** | _None unless a third-party storage provider hosts outside the EEA._ |
| **(f) Retention period** | _Six years post-closure as default (see Activity 4 retention notes); some categories longer (deed-related: twelve years; wills: until proved). At end of retention, secure destruction via [shredding service / confidential waste contractor]._ |
| **(g) Security measures** | _Locked storage; restricted access list; if off-site storage, the storage provider's DPA on file._ |

### Activity 9 — Court correspondence

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Conducting court proceedings on behalf of clients._ |
| **(c) Categories of data subjects and personal data** | _Clients, opposing parties, witnesses, court officers. The data is whatever appears on court papers, pleadings, and correspondence — typically including names, addresses, and the substance of the dispute._ |
| **(d) Categories of recipients** | _Courts Service of Ireland; opposing solicitors; barristers briefed; expert witnesses; the Personal Injuries Assessment Board where applicable._ |
| **(e) Third-country transfers** | _None expected._ |
| **(f) Retention period** | _Aligned with the relevant matter file (see Activity 4)._ |
| **(g) Security measures** | _Same as Activity 4. Court papers handled with the additional confidentiality obligations attaching to legal proceedings._ |

### Activity 10 — Third-party referrals (barristers, experts, search agents)

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Briefing barristers, instructing expert witnesses, instructing search agents, and otherwise referring matters to third parties as required to advance a client's matter._ |
| **(c) Categories of data subjects and personal data** | _Whatever data is necessary to brief the third party — typically client names, opposing-party names, the substance of the matter, and any specialist reports (medical, financial)._ |
| **(d) Categories of recipients** | _Named barristers (e.g. [list of barristers the firm regularly briefs]); medical experts, accounting experts, surveyors; search agents (Land Registry, judgment search providers, etc.)._ |
| **(e) Third-country transfers** | _None expected — Irish referrals are EEA-internal._ |
| **(f) Retention period** | _Briefing material aligned with the relevant matter file (see Activity 4); copies held by the third party are governed by their own retention rules._ |
| **(g) Security measures** | _Briefing material delivered by secure email or hand. Each third party operates under their own professional confidentiality obligations (barristers under Bar of Ireland Code of Conduct; medical experts under Medical Council guidance; etc.)._ |

### Activity 11 — Anti-money-laundering CDD records

| Article 30(1) heading | Entry |
|---|---|
| **(a) Controller and DPO contact** | Mary Molloy Solicitor, [address]. |
| **(b) Purposes of processing** | _Customer Due Diligence under the Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 (as amended) — Sections 33 (CDD) and 35 (enhanced CDD)._ |
| **(c) Categories of data subjects and personal data** | _Clients and (where relevant) beneficial owners of corporate clients. Identification data, copies of ID documents, source-of-funds evidence, source-of-wealth evidence where required, beneficial-ownership information._ |
| **(d) Categories of recipients** | _On a statutory information request: An Garda Síochána, the Financial Intelligence Unit, Revenue Commissioners. Otherwise internal-only._ |
| **(e) Third-country transfers** | _None expected._ |
| **(f) Retention period** | _Five years from the end of the business relationship (Section 55 Criminal Justice (Money Laundering and Terrorist Financing) Act 2010)._ |
| **(g) Security measures** | _Same as Activity 4. AML records may be held in a dedicated section of the matter file or separately, depending on the firm's practice._ |

---

## Status

| Slice | Status | Owner |
|---|---|---|
| Website slice — Activity 1 (cookie consent) | ✏️ First draft above | Website manager |
| Website slice — Activity 2 (contact form) | ✏️ First draft above (retention pending Mary) | Website manager + Mary |
| Website slice — Activity 3 (server logs) | ✏️ First draft above (hosting details pending) | Website manager |
| Firm-wide slice — Activity 4 (client matter files) | 📋 Template ready, prompts in italics; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 5 (engagement letters) | 📋 Template ready; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 6 (accounts and billing) | 📋 Template ready; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 7 (wages / HR) | 📋 Template ready; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 8 (closed file storage) | 📋 Template ready; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 9 (court correspondence) | 📋 Template ready; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 10 (third-party referrals) | 📋 Template ready; awaiting Mary's input | Mary |
| Firm-wide slice — Activity 11 (AML CDD records) | 📋 Template ready; awaiting Mary's input | Mary |
| Processor agreements (DPAs) on file | ✅ Cookiebot, Resend, Vercel filed | Website manager |
| RoPA format chosen | ✅ This file is the firm's RoPA (DPC accepts any reasonable format covering Article 30(1)(a)–(g)) | Website manager |

## Resources

- **DPC "Accountability obligation" guidance** (the live narrative guidance the format above is built against): visit `https://www.dataprotection.ie/en/organisations`, click "Know Your Obligations", click "Accountability obligation". Verified live 2026-05-04.
- **DPC "Controller and Processor relationships" guidance** (Article 28 DPA contracts — already covered separately by the three DPAs on file): same navigation root, click "Controller and Processor relationships". Verified live 2026-05-04.
- **DPC small-business GDPR guidance root:** `https://www.dataprotection.ie/en/organisations`
- **Local GDPR PDF (Article 30 verbatim):** `legal-compliance/gdpr/regulation-2016-679-consolidated-2016-05.pdf`, pages 27–28
- **Local DPC walkthrough Section 17 (where this obligation was identified):** `legal-compliance/cookies/dpc-guidance-walkthrough.md`
- **Processor agreements folder (DPAs filed here):** `legal-compliance/processor-agreements/`
- **Article 28 GDPR (processor contract requirements):** `legal-compliance/gdpr/regulation-2016-679-consolidated-2016-05.pdf`, pages 23–25

## Maintenance

- **Annually:** review every entry above. Any new processor or new processing activity since the last review must be added.
- **When a processor changes:** update the corresponding activity row immediately, file the new DPA, run the compliance screenshot.
- **Before launch:** confirm the website slice is incorporated into Mary's firm-wide RoPA.
- **When any third-party widget is added to the site** (Like button, embedded YouTube, Google Maps, Google Analytics, Stripe, advertising pixel, chat widget, third-party font, etc.) — this is a **DPC Section 22 trigger**. Add a new processing-activity row to this file covering all seven Article 30(1)(a)–(g) headings, and complete the full five-step checklist in `_scratch-remaining-work.md` Section 5 ("Section 22 third-party-widget trigger checklist") **before** the widget ships to production. The five steps are: written assessment → Article 26 joint-controller arrangement → privacy policy disclosure → consent gating → this RoPA update. Do not skip any — see `legal-compliance/cookies/dpc-guidance-walkthrough.md` Section 22 for the reasoning.

---

_This file is the website-manager working version. The authoritative RoPA is whatever Mary keeps as the firm's record (DPC template recommended)._
