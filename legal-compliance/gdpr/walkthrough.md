# GDPR Walkthrough — Compliance Audit Trail

_Maps each part of GDPR (Regulation (EU) 2016/679) to whether it applies to Mary Molloy Solicitor's website, and where it is handled if so. Plain-English style — legal vocabulary appears only inside direct quotes._

_Rebuilt 2026-05-04 after the original was deleted in a cleanup pass. Source PDFs unchanged; every quoted citation re-verified against the local PDFs at this rebuild date._

**Source documents:**
- `legal-compliance/gdpr/regulation-2016-679-consolidated-2016-05.pdf` — consolidated regulation text (Articles)
- `legal-compliance/gdpr/regulation-2016-679-official-journal-with-recitals-2016-05.pdf` — Official Journal version (Recitals + Articles)

**Companion compliance documents this walkthrough cross-references:**
- `legal-compliance/cookies/dpc-guidance-walkthrough.md` — DPC April 2020 cookie guidance, all 27 sections
- `legal-compliance/cookies/edpb-2023-compliance-evidence.md` — EDPB Cookie Banner Taskforce Report
- `legal-compliance/cookies/reg-5-compliance-evidence.md` — S.I. 336/2011 Reg 5 evidence
- `legal-compliance/gdpr/record-of-processing-activities.md` — Article 30 Record of Processing Activities
- `legal-compliance/gdpr/privacy-policy-draft.md` — the drafted privacy policy
- `legal-compliance/processor-agreements/` — DPAs (Cookiebot, Resend, Vercel)
- `_business/sensitive-topic-tracking-policy.md` — site-wide blanket-no-trackers policy

---

## How this walkthrough is structured

Each Recital and each Article gets one of three treatments:

- **❌ Does not apply** — listed in the Not-Applicable Index below with a one-line reason. The Index is the audit-trail proof that the firm considered each provision and rejected it for a stated reason.
- **✅ Applies — covered elsewhere** — short entry, cross-reference to the file or section that handles it.
- **✅ Applies — full entry** — verbatim quote from the local PDF + plain-English summary + cross-reference to where it lands in the privacy policy or RoPA.

---

## Not-Applicable Index — Recitals

_Each entry: Recital number — one-line reason._

| # | Reason |
|---|---|
| 1 | Statement of the fundamental right to data protection — scene-setting, no operational obligation. |
| 2 | Scene-setting on the regulation's policy objectives. |
| 3 | Reference to predecessor Directive 95/46/EC — historical context. |
| 4 | Proportionality with other fundamental rights — no specific operational hook. |
| 5 | Scene-setting on cross-border data flows. |
| 6 | Scene-setting on the digital economy and need for stronger protection. |
| 7 | Scene-setting on legal certainty for natural persons and economic operators. |
| 8 | Member State derogation framework — no Member State derogation applies to Mary's site. |
| 9 | Recap of Directive 95/46/EC's failure modes — historical context. |
| 10 | Member-State sector-specific laws — Mary's site is not in a derogation sector. |
| 11 | Need for strengthened rights and equivalent sanctions — scene-setting. |
| 12 | TFEU Article 16(2) legislative mandate — institutional scene-setting. |
| 13 | Internal-market harmonisation rationale — scene-setting. The under-250-employee carve-out for record-keeping is the only operational hook here, and **it does not apply** to Mary's firm — see Article 30(5) and `record-of-processing-activities.md`. |
| 14 | Personal data of legal persons (companies) is excluded from GDPR — confirms our analysis but no further action. |
| 15 | Tech-neutral application + filing-system scope rule — no manual filing system on the website. |
| 16 | National security carve-out — Mary's firm is not a national-security authority. |
| 17 | EU institutions covered by separate Regulation (EC) 45/2001 — Mary's firm is not an EU institution. |
| 18 | Personal/household activity carve-out — Mary's firm is a commercial activity, the carve-out does not apply. |
| 19 | Law-enforcement processing covered by Directive (EU) 2016/680 — Mary's firm is not a law enforcement authority. |
| 20 | Courts acting in their judicial capacity — Mary's firm is a solicitor's firm, not a court. |
| 21 | Without prejudice to the e-Commerce Directive 2000/31/EC — no operational impact for the privacy policy. |
| 22 | Establishment-based application — Mary's firm is established in Ireland; GDPR clearly applies. Confirmation only. |
| 23 | Extra-territorial application to non-EU controllers offering goods/services in the EU — Mary is established in the EU, so this clarifies scope for non-EU operators, not for us. |
| 24 | Extra-territorial application to non-EU controllers monitoring EU behaviour — same as Recital 23. |
| 25 | GDPR applying via public international law (diplomatic missions) — Mary's firm is not a diplomatic mission. |
| 27 | GDPR does not apply to deceased persons — Mary's website does not process deceased persons' data. |
| 28 | Pseudonymisation as a risk-reduction measure — no operational obligation, just an available technique. |
| 29 | Encouragement to use pseudonymisation — no operational obligation. |
| 31 | Public authorities receiving data for inquiries are not "recipients" for transparency purposes — Mary's firm is not a public authority. |
| 33 | Consent for scientific research — Mary's firm does not conduct scientific research. |
| 34 | Definition of genetic data — Mary's firm does not process genetic data on the website. |
| 36 | Main-establishment rules for multi-establishment controllers — Mary's firm has a single establishment in Kilkenny. |
| 37 | Group-of-undertakings definition — Mary's firm is a single legal entity, not part of a group. |
| 38 | Children's data protection — the website is not directed at children; further treatment in privacy policy Section 11 with statutory anchor (DPA 2018 Section 31, Article 8 GDPR digital age of consent). |
| 41 | "Legal basis or legislative measure" need not be a parliamentary act — definitional, not operational. |
| 43 | Imbalance-of-power consent rule (e.g. public authorities) — Mary's firm is not a public authority. |
| 45 | Legal-obligation / public-interest / official-authority lawful basis specification rules — Mary's firm has no public-authority processing on the website. |
| 46 | Vital-interest lawful basis (Article 6(1)(d)) — Mary's website does not engage in life-or-death processing. |
| 48 | Legitimate-interest data sharing within a group of undertakings — Mary's firm is not part of a group. |
| 50 | Further processing compatibility test — Mary's website processes data only for the purpose it was collected; no secondary purposes. |
| 52 | Public-interest derogations from the Article 9 prohibition (employment law, social protection, public health) — none apply to Mary's website. |
| 53 | Health-purpose processing rules (national health-care systems, professional secrecy in medical contexts) — Mary is a solicitor, not a health-care provider. |
| 54 | Public-health-interest processing without consent — does not apply to Mary's website. |
| 55 | Religious-association processing on grounds of public interest — does not apply. |
| 56 | Political-party electoral processing — does not apply. |
| 57 | Controller has no obligation to acquire additional identification data just to satisfy GDPR — confirmation only; Mary's site collects only what's needed and does not seek extra identifiers. |
| 62 | Exemptions from the duty to inform — Mary's site collects data directly from the visitor and informs them at the point of collection, so no exemption is needed. |
| 64 | Identity verification before responding to a data-subject request — operational guidance, not separate privacy-policy content. |
| 66 | Erasure-extension to other controllers who hold copies of the data publicly — Mary's website does not publish personal data, so no downstream controllers exist to notify. |
| 67 | Methods of restricting processing — internal operational guidance, not visitor-facing privacy-policy content. |
| 71 | Right not to be subject to solely-automated decisions — Mary's website performs no automated decision-making (named in privacy policy Section 7.8). Recital 71's safeguards are therefore not triggered. |
| 72 | Profiling general rules + EDPB guidance route — confirms EDPB authority; no operational obligation not already covered. |
| 73 | Member State restrictions on rights — Ireland's restrictions (e.g. DPA 2018) are referenced where they apply (Section 162 in privilege paragraph); no general restriction at issue. |
| 74 | Responsibility and liability of the controller — operationalised through Articles 5(2) (accountability) and 24. Captured by the firm's overall compliance posture. |
| 75 | Risk-to-rights-and-freedoms enumeration — informational underpinning for Article 32; relevant to risk thinking but not a separate privacy-policy section. |
| 76 | Risk-evaluation guidance — same as Recital 75. |
| 77 | Best-practice guidance routes (codes of conduct, certifications, EDPB guidelines, DPO indications) — Mary's firm relies on the regulator-published guidance she is already following (DPC, EDPB) rather than formal codes/certifications. |

### Recitals that get a full entry below

Recitals 26, 30, 32, 35, 39, 40, 42, 44, 47, 49, 51, 58, 59, 60, 61, 63, 65, 68, 69, 70, 78, 79, 80 receive full treatment because they are operationally cited in the privacy policy or the RoPA.

---

## Full entries — Recitals

### Recital 26 — Online identifiers as personal data; pseudonymous data still in scope

> "The principles of data protection should apply to any information concerning an identified or identifiable natural person. Personal data which have undergone pseudonymisation, which could be attributed to a natural person by the use of additional information should be considered to be information on an identifiable natural person. To determine whether a natural person is identifiable, account should be taken of all the means reasonably likely to be used, such as singling out, either by the controller or by another person to identify the natural person directly or indirectly. […] The principles of data protection should therefore not apply to anonymous information, namely information which does not relate to an identified or identifiable natural person or to personal data rendered anonymous in such a manner that the data subject is not or no longer identifiable."

_Source: `regulation-2016-679-official-journal-with-recitals-2016-05.pdf`, Recital 26, page 5._

**Plain-English:** if a piece of data could be linked back to a person (even with extra information), GDPR applies. Anonymous data is out of scope.

**Operational use on Mary's site:**
- IP addresses in server access logs — personal data per CJEU *Breyer* (C-582/14) reading of this recital.
- Cookiebot consent ID — pseudonymous but personal data per this recital.
- User-agent + URL combinations — personal data when combined with IP.

**Cross-reference:** RoPA Activities 1 (cookie consent) and 3 (server logs); privacy policy Section 3.

### Recital 30 — Online identifiers explicitly named

> "Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags. This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them."

_Source: same PDF, Recital 30, page 6._

**Plain-English:** IP addresses, cookie IDs, and other online identifiers can identify a person — they are personal data.

**Cross-reference:** anchors the *Breyer* CJEU judgment cited in DPC walkthrough Section 23 + Section 25. RoPA Activities 1 and 3.

### Recital 32 — Consent must be a clear affirmative act

> "Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement. This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject's acceptance of the proposed processing of his or her personal data. Silence, pre-ticked boxes or inactivity should not therefore constitute consent."

_Source: same PDF, Recital 32, page 6._

**Plain-English:** consent must be active. Silence, pre-ticked boxes, or just continuing to use a site does not count.

**Cross-reference:** anchors Cookiebot's "no pre-ticked boxes" configuration; DPC walkthrough Section 5; EDPB Cookie Banner Taskforce Report. Privacy policy Section 7.9 (right to withdraw).

### Recital 35 — Personal data concerning health (Article 9)

> "Personal data concerning health should include all data pertaining to the health status of a data subject which reveal information relating to the past, current or future physical or mental health status of the data subject."

_Source: same PDF, Recital 35, page 6._

**Cross-reference:** Article 9 special-category data. Mary's firm processes health data in client matter files (medical reports in personal injury matters); this is firm-side, not website-side. RoPA Activity 4. The website itself does not collect health data.

### Recital 39 — Transparency principle (anchors Article 5(1)(a))

> "Any processing of personal data should be lawful and fair. It should be transparent to natural persons that personal data concerning them are collected, used, consulted or otherwise processed and to what extent the personal data are or will be processed. The principle of transparency requires that any information and communication relating to the processing of those personal data be easily accessible and easy to understand, and that clear and plain language be used. […] Personal data should be adequate, relevant and limited to what is necessary for the purposes for which they are processed. […] In order to ensure that the personal data are not kept longer than necessary, time limits should be established by the controller for erasure or for a periodic review."

_Source: same PDF, Recital 39, page 7._

**Plain-English:** be open and clear about what data you collect, why, for how long. Use plain language. Don't keep more than you need.

**Cross-reference:** anchors the privacy policy's overall plain-English approach + Article 5(1)(a)/(c)/(e). Privacy policy Sections 3, 6, intro.

### Recital 40 — Lawful processing requires a basis under Article 6

> "In order for processing to be lawful, personal data should be processed on the basis of the consent of the data subject concerned or some other legitimate basis, laid down by law, either in this Regulation or in other Union or Member State law as referred to in this Regulation, including the necessity for compliance with the legal obligation to which the controller is subject or the necessity for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract."

_Source: same PDF, Recitals 40, page 7–8._

**Plain-English:** every processing activity needs one of the lawful bases in Article 6.

**Cross-reference:** anchors Article 6 lawful-basis structure. Privacy policy Section 3 — names a specific Article 6(1) basis for each of the three website processing activities.

### Recital 42 — Consent freely given; demonstrability

> "Where processing is based on the data subject's consent, the controller should be able to demonstrate that the data subject has given consent to the processing operation. […] For consent to be informed, the data subject should be aware at least of the identity of the controller and the purposes of the processing for which the personal data are intended. Consent should not be regarded as freely given if the data subject has no genuine or free choice or is unable to refuse or withdraw consent without detriment."

_Source: same PDF, Recital 42, page 8._

**Cross-reference:** anchors the Cookiebot consent log — the firm must be able to demonstrate that consent was given. RoPA Activity 1.

### Recital 44 — Pre-contractual processing

> "Processing should be lawful where it is necessary in the context of a contract or the intention to enter into a contract."

_Source: same PDF, Recital 44, page 8._

**Plain-English:** when someone is asking about engaging the firm, that's pre-contractual — Article 6(1)(b) covers it.

**Cross-reference:** anchors Article 6(1)(b) for the contact-form processing. Privacy policy Section 3(b) — "taking steps at your request before entering into a contract."

### Recital 47 — Legitimate interest basis

> "The legitimate interests of a controller, including those of a controller to which the personal data may be disclosed, or of a third party, may provide a legal basis for processing, provided that the interests or the fundamental rights and freedoms of the data subject are not overriding, taking into consideration the reasonable expectations of data subjects based on their relationship with the controller. Such legitimate interest could exist for example where there is a relevant and appropriate relationship between the data subject and the controller in situations such as where the data subject is a client or in the service of the controller. […] The processing of personal data strictly necessary for the purposes of preventing fraud also constitutes a legitimate interest of the data controller concerned. The processing of personal data for direct marketing purposes may be regarded as carried out for a legitimate interest."

_Source: same PDF, Recital 47, page 9._

**Cross-reference:** anchors Article 6(1)(f) for server access logs (security/abuse detection). Privacy policy Section 3(c). Mary's firm does **not** rely on this for direct marketing — see Section 7.7 of the privacy policy and `_business/sensitive-topic-tracking-policy.md`.

### Recital 49 — Network and information security as legitimate interest

> "The processing of personal data to the extent strictly necessary and proportionate for the purposes of ensuring network and information security, i.e. the ability of a network or an information system to resist, at a given level of confidence, accidental events or unlawful or malicious actions that compromise the availability, authenticity, integrity and confidentiality of stored or transmitted personal data, and the security of the related services offered by, or accessible via, those networks and systems, by public authorities, by computer emergency response teams (CERTs), computer security incident response teams (CSIRTs), by providers of electronic communications networks and services and by providers of security technologies and services, constitutes a legitimate interest of the data controller concerned. This could, for example, include preventing unauthorised access to electronic communications networks and malicious code distribution and stopping 'denial of service' attacks and damage to computer and electronic communication systems."

_Source: same PDF, Recital 49, page 9._

**Cross-reference:** the second leg of Article 6(1)(f) anchor for server access logs. Privacy policy Section 3(c).

### Recital 51 — Special-category data merits specific protection

> "Personal data which are, by their nature, particularly sensitive in relation to fundamental rights and freedoms merit specific protection as the context of their processing could create significant risks to the fundamental rights and freedoms."

_Source: same PDF, Recital 51, page 10._

**Cross-reference:** anchors Article 9. The website does not collect special-category data; the firm-side does (health data in PI matters; criminal allegation data in family-law matters). RoPA Activity 4.

### Recital 58 — Transparency to the public (plain language for online services)

> "The principle of transparency requires that any information addressed to the public or to the data subject be concise, easily accessible and easy to understand, and that clear and plain language and, additionally, where appropriate, visualisation be used. Such information could be provided in electronic form, for example, when addressed to the public, through a website. This is of particular relevance in situations where the proliferation of actors and the technological complexity of practice make it difficult for the data subject to know and understand whether, by whom and for what purpose personal data relating to him or her are being collected, such as in the case of online advertising. Given that children merit specific protection, any information and communication, where processing is addressed to a child, should be in such a clear and plain language that the child can easily understand."

_Source: same PDF, Recital 58, page 11._

**Cross-reference:** anchors the plain-English drafting requirement. Privacy policy intro and structure.

### Recital 59 — Mechanisms for data-subject rights (electronic submission, free of charge, one-month response)

> "Modalities should be provided for facilitating the exercise of the data subject's rights under this Regulation, including mechanisms to request and, if applicable, obtain, free of charge, in particular, access to and rectification or erasure of personal data and the exercise of the right to object. The controller should also provide means for requests to be made electronically, especially where personal data are processed by electronic means. The controller should be obliged to respond to requests from the data subject without undue delay and at the latest within one month and to give reasons where the controller does not intend to comply with any such requests."

_Source: same PDF, Recital 59, page 11._

**Cross-reference:** anchors Article 12(3) one-month response and Article 12(5) free-of-charge default. Privacy policy Section 7 — "How to exercise these rights".

### Recital 60 — Information to be given at time of collection (Article 13)

> "The principles of fair and transparent processing require that the data subject be informed of the existence of the processing operation and its purposes. The controller should provide the data subject with any further information necessary to ensure fair and transparent processing taking into account the specific circumstances and context in which the personal data are processed. Furthermore, the data subject should be informed of the existence of profiling and the consequences of such profiling. Where the personal data are collected from the data subject, the data subject should also be informed whether he or she is obliged to provide the personal data and of the consequences, where he or she does not provide such data."

_Source: same PDF, Recital 60, page 12._

**Cross-reference:** anchors Article 13(2)(e). Privacy policy Section 10 — "Whether you have to give us your data".

### Recital 61 — Information at the point of collection

> "The information in relation to the processing of personal data relating to the data subject should be given to him or her at the time of collection from the data subject, or, where the personal data are obtained from another source, within a reasonable period, depending on the circumstances of the case."

_Source: same PDF, Recital 61, page 12._

**Cross-reference:** anchors the contact-form privacy-policy disclosure (the line we added: "We will use the details you provide to respond to your enquiry. See our Privacy Policy…"). `src/features/contact-form/components/ContactForm.astro`.

### Recital 63 — Right of access (scope and limit)

> "A data subject should have the right of access to personal data which have been collected concerning him or her, and to exercise that right easily and at reasonable intervals, in order to be aware of, and verify, the lawfulness of the processing. […] That right should not adversely affect the rights or freedoms of others, including trade secrets or intellectual property […]. However, the result of those considerations should not be a refusal to provide all information to the data subject."

_Source: same PDF, Recital 63, pages 12–13._

**Cross-reference:** anchors Article 15. Privacy policy Section 7.2 — including the redaction-of-others'-data point (Article 15(4)).

### Recital 65 — Right to erasure and its limits

> "A data subject should have the right to have personal data concerning him or her rectified and a 'right to be forgotten' where the retention of such data infringes this Regulation or Union or Member State law to which the controller is subject. […] However, the further retention of the personal data should be lawful where it is necessary, for exercising the right of freedom of expression and information, for compliance with a legal obligation, for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, on the grounds of public interest in the area of public health, for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, or for the establishment, exercise or defence of legal claims."

_Source: same PDF, Recital 65, page 13._

**Cross-reference:** anchors Article 17(3)(b) and (e) carve-outs — the "we cannot delete client matter files on request" reasoning. Privacy policy Section 7.4.

### Recital 68 — Data portability (narrow scope)

> "To further strengthen the control over his or her own data, where the processing of personal data is carried out by automated means, the data subject should also be allowed to receive personal data concerning him or her which he or she has provided to a controller in a structured, commonly used, machine-readable and interoperable format, and to transmit it to another controller. […] That right should apply where the data subject provided the personal data on the basis of his or her consent or the processing is necessary for the performance of a contract. It should not apply where processing is based on a legal ground other than consent or contract."

_Source: same PDF, Recital 68, page 13._

**Cross-reference:** anchors Article 20 narrow scope. Privacy policy Section 7.6 — only contact-form data is portable; server logs (legitimate interest) and cookie consent records (legal obligation) are not.

### Recital 69 — Right to object (legitimate-interest burden-shift)

> "Where personal data might lawfully be processed because processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, or on grounds of the legitimate interests of a controller or a third party, a data subject should, nevertheless, be entitled to object to the processing of any personal data relating to his or her particular situation. It should be for the controller to demonstrate that its compelling legitimate interest overrides the interests or the fundamental rights and freedoms of the data subject."

_Source: same PDF, Recital 69, page 13._

**Cross-reference:** anchors Article 21(1) and the burden-shift onto the firm for legitimate-interest objections. Privacy policy Section 7.7.

### Recital 70 — Right to object to direct marketing (absolute)

> "Where personal data are processed for the purposes of direct marketing, the data subject should have the right to object to such processing, including profiling to the extent that it is related to such direct marketing, whether with regard to initial or further processing, at any time and free of charge. That right should be explicitly brought to the attention of the data subject and presented clearly and separately from any other information."

_Source: same PDF, Recital 70, page 13._

**Cross-reference:** anchors Article 21(2)–(4). Mary's firm does not carry out direct marketing — the privacy policy states this explicitly in Section 7.7 and presents the right-to-object paragraph separately as Article 21(4) requires.

### Recital 78 — Data protection by design and by default

> "The protection of the rights and freedoms of natural persons with regard to the processing of personal data require that appropriate technical and organisational measures be taken to ensure that the requirements of this Regulation are met. In order to be able to demonstrate compliance with this Regulation, the controller should adopt internal policies and implement measures which meet in particular the principles of data protection by design and data protection by default. Such measures could consist, inter alia, of minimising the processing of personal data, pseudonymising personal data as soon as possible, transparency with regard to the functions and processing of personal data, enabling the data subject to monitor the data processing, enabling the controller to create and improve security features."

_Source: same PDF, Recital 78, page 15._

**Cross-reference:** anchors Article 25. Privacy policy Section 12 — "Architectural design: the site is built to collect the minimum personal data needed". The blanket-no-trackers position in `_business/sensitive-topic-tracking-policy.md` is a Recital 78 / Article 25 implementation.

### Recital 79 — Allocation of responsibilities (controller/processor/joint)

> "The protection of the rights and freedoms of data subjects as well as the responsibility and liability of controllers and processors, also in relation to the monitoring by and measures of supervisory authorities, requires a clear allocation of the responsibilities under this Regulation, including where a controller determines the purposes and means of the processing jointly with other controllers or where a processing operation is carried out on behalf of a controller."

_Source: same PDF, Recital 79, page 15._

**Cross-reference:** anchors Article 26 (joint controllers) and Article 28 (processors). Privacy policy Section 4 — "We are not in any joint-controller arrangement with any third party".

### Recital 80 — Representative for non-EU controllers

_Pertains to non-EU controllers; Mary's firm is established in Ireland, so this does not apply._

---

## Not-Applicable Index — Recitals 81–173

| # | Reason |
|---|---|
| 81 | Processor obligations — operationalised through Article 28; Mary's three processor DPAs are on file. |
| 82 | RoPA obligation — operationalised through Article 30; covered in `record-of-processing-activities.md`. |
| 83 | Security risk evaluation — operationalised through Article 32; covered in privacy policy Section 12. |
| 84 | DPIA obligation — operationalised through Article 35; not triggered by Mary's website (small-firm individual lawyer carve-out per Recital 91). |
| 85 | Personal data breach — operationalised through Article 33; named in privacy policy Section 12. |
| 86 | Communication of breach to data subject — operationalised through Article 34; named in privacy policy Section 12. |
| 87 | Breach detection rules — internal operational guidance, not visitor-facing. |
| 88 | Format of breach notifications — internal operational guidance. |
| 89 | Replacement of indiscriminate notification regime by risk-based DPIA — historical context for Article 35. |
| 90 | DPIA detailed assessment — Mary's website processing does not meet the high-risk threshold. |
| 91 | **Large-scale carve-out for individual lawyers** — see full entry below. Load-bearing for both DPO (Article 37) and DPIA (Article 35) analysis. |
| 92 | Industry-wide DPIAs — not relevant to a single solicitor's firm. |
| 93 | Member-State-law DPIA mandates — none apply to Mary's firm. |
| 94 | Prior consultation with supervisory authority — only triggered if a DPIA shows unmitigable high risk; not the case here. |
| 95 | Processor assistance with DPIAs — operational; covered in DPAs. |
| 96 | Consultation on legislative measures — not applicable to Mary's firm. |
| 97 | DPO appointment grounds — see full entry below; combined with Article 37. |
| 98 | Codes of conduct — Mary's firm relies on regulator guidance directly, not formal codes. |
| 99 | Code-of-conduct consultation procedure — not applicable. |
| 100 | Certification mechanisms — not pursued by Mary's firm. |
| 101 | International transfers — see full entry below; load-bearing for Article 44 / 46 / 49 transfers. |
| 102 | International agreements between EU and third countries — institutional. |
| 103 | Adequacy decisions framework — operationalised through Article 45; Resend relies on EU-US DPF adequacy + SCCs. |
| 104 | Criteria the Commission applies for adequacy — see full entry below; load-bearing. |
| 105 | Council of Europe Convention 108 — institutional. |
| 106 | Adequacy decision monitoring — institutional. |
| 107 | Adequacy decision revocation — institutional. |
| 108 | Appropriate safeguards (SCCs, BCRs) — see full entry below. |
| 109 | SCCs supplementation — operational; covered in DPAs. |
| 110 | Binding corporate rules — Mary's firm not part of a group. |
| 111 | Article 49(1)(a) explicit consent for occasional transfers — Mary uses Article 46 SCCs as the route, not Article 49 derogations. |
| 112 | Public-interest derogations from transfer rules — none apply. |
| 113 | Compelling-legitimate-interest derogation for transfers — Mary uses SCCs route, not this derogation. |
| 114 | Enforceable rights for transferees — see full entry below; load-bearing for Article 46 framework. |
| 115 | Foreign judgments and disclosure orders — see full entry below; relevant to Article 48. |
| 116 | Cross-border supervisory cooperation — institutional. |
| 117 | Establishment of supervisory authorities — institutional. |
| 118 | Independence of supervisory authorities — institutional. |
| 119 | Multiple supervisory authorities in a Member State — Ireland has a single DPC. |
| 120 | Supervisory authority resourcing — institutional. |
| 121 | Member State rules on supervisory authority membership — institutional. |
| 122 | Competence of each supervisory authority — institutional. |
| 123 | Supervisory authority cooperation — institutional. |
| 124 | Lead-authority / one-stop-shop mechanism — Mary's firm has a single establishment in Ireland; the Irish DPC is the only supervisory authority. |
| 125 | Lead-authority binding decisions — institutional. |
| 126 | Joint decisions — institutional. |
| 127 | Local-case competence — institutional. |
| 128 | One-stop-shop carve-out for public-interest processing — not applicable. |
| 129 | Supervisory authority powers (sanctions, investigations) — institutional. |
| 130 | Cooperation between lead and complaint authorities — institutional. |
| 131 | Local-only infringements handling — institutional. |
| 132 | Awareness-raising activities — institutional (DPC's outreach). |
| 133 | Supervisory authority mutual assistance — institutional. |
| 134 | Joint operations — institutional. |
| 135 | EDPB consistency mechanism — institutional. |
| 136 | EDPB binding decisions in disputes — institutional. |
| 137 | Provisional measures by supervisory authorities — institutional. |
| 138 | Mandatory consistency mechanism cases — institutional. |
| 139 | EDPB establishment — institutional. |
| 140 | EDPB secretariat — institutional. |
| 141 | Right to lodge a complaint — see full entry below; load-bearing for privacy policy Section 9.1. |
| 142 | Representation by NGOs — Article 80 framework; visitors can mandate a privacy NGO. Not normally spelt out in a small-firm privacy policy. |
| 143 | Annulment proceedings against EDPB — institutional. |
| 144 | Court-of-court coordination — institutional. |
| 145 | Forum choice for proceedings — see full entry below; relevant to Article 79(2). |
| 146 | Compensation — see full entry below; load-bearing for privacy policy Section 9.3. |
| 147 | Specific jurisdiction rules in the Regulation override Brussels I — institutional. |
| 148 | Administrative fines — regulator-side; institutional. |
| 149 | Member State criminal penalties — institutional. |
| 150 | Administrative fine harmonisation — institutional. |
| 151 | Denmark/Estonia fine adaptation — institutional. |
| 152 | Member State penalty backstop — institutional. |
| 153 | Freedom-of-expression/journalism reconciliation — Mary's firm is not a journalistic publisher. |
| 154 | Public access to documents — Mary's firm is not a public authority. |
| 155 | Employment-context Member State rules — Mary's firm-side HR processing is governed by Member State employment law plus GDPR; covered in RoPA Activity 7 (firm-wide slice). |
| 156 | Archiving / scientific / historical / statistical purposes — Mary's firm performs none of these. |
| 157 | Registry-based research — not applicable. |
| 158 | Archiving processing — not applicable to Mary's firm. |
| 159 | Scientific research processing — not applicable. |
| 160 | Historical research processing — not applicable. |
| 161 | Clinical trial consent — not applicable. |
| 162 | Statistical purposes — not applicable. |
| 163 | EU/Member State statistical authorities — not applicable. |
| 164 | **Professional secrecy preservation** — load-bearing for solicitor–client privilege paragraph in privacy policy Section 8. See full entry below. |
| 165 | Constitutional status of churches and religious associations — not applicable. |
| 166 | Delegated acts framework — institutional. |
| 167 | Implementing acts framework — institutional. |
| 168 | Examination procedure for implementing acts — institutional. |
| 169 | Urgent implementing acts — institutional. |
| 170 | Subsidiarity principle — institutional. |
| 171 | Repeal of Directive 95/46/EC — historical / transitional. |
| 172 | EDPS consultation on the draft regulation — historical. |
| 173 | Relationship with Directive 2002/58/EC (ePrivacy) — confirms that the ePrivacy Directive (and Irish S.I. 336/2011 implementing it) applies to cookies. Cross-reference: `legal-compliance/cookies/dpc-guidance-walkthrough.md` and `legal-compliance/cookies/reg-5-compliance-evidence.md`. |

---

## Full entries — Recitals 81–173 (operative ones only)

### Recital 91 — Individual-lawyer carve-out from "large-scale" processing

> "This should in particular apply to large-scale processing operations which aim to process a considerable amount of personal data at regional, national or supranational level and which could affect a large number of data subjects and which are likely to result in a high risk […]. The processing of personal data should not be considered to be on a large scale if the processing concerns personal data from patients or clients by an individual physician, other health care professional or lawyer. In such cases, a data protection impact assessment should not be mandatory."

_Source: `regulation-2016-679-official-journal-with-recitals-2016-05.pdf`, Recital 91, page 18._

**Plain-English:** an individual solicitor processing personal data from her clients is **not** "large-scale" processing for GDPR purposes. This is the explicit carve-out for individual lawyers.

**Cross-reference:** anchors two conclusions for Mary's firm:
- **No DPIA mandatory** under Article 35.
- **No DPO mandatory** under Article 37 (the "large-scale" trigger does not fire because of this recital).

Privacy policy Section 2 names this — "Recital 91 says that processing of client personal data by an individual lawyer is not considered 'large-scale' for these purposes."

### Recital 101 — International transfers principle

> "Flows of personal data to and from countries outside the Union and international organisations are necessary for the expansion of international trade and international cooperation. […] However, when personal data are transferred from the Union to controllers, processors or other recipients in third countries or to international organisations, the level of protection of natural persons ensured in the Union by this Regulation should not be undermined, including in cases of onward transfers of personal data from the third country or international organisation to controllers, processors in the same or another third country or international organisation."

_Source: same PDF, Recital 101, page 19._

**Cross-reference:** anchors Article 44 (general principle) and the privacy policy's Section 5 (transfers outside the EEA). Onward-transfer commitment also covers Resend/Vercel sub-processors via the SCC framework.

### Recital 104 — Adequacy decision criteria

> "In line with the fundamental values on which the Union is founded, in particular the protection of human rights, the Commission should, in its assessment of the third country, or of a territory or specified sector within a third country, take into account how a particular third country respects the rule of law, access to justice as well as international human rights norms and standards and its general and sectoral law, including legislation concerning public security, defence and national security as well as public order and criminal law. […] The third country should offer guarantees ensuring an adequate level of protection essentially equivalent to that ensured within the Union."

_Source: same PDF, Recital 104, pages 19–20._

**Cross-reference:** anchors Article 45 — the basis for the EU–US Data Privacy Framework adequacy decision (Commission Implementing Decision 2023/1795). Privacy policy Section 5.

### Recital 108 — Appropriate safeguards (SCCs)

> "In the absence of an adequacy decision, the controller or processor should take measures to compensate for the lack of data protection in a third country by way of appropriate safeguards for the data subject. Such appropriate safeguards may consist of making use of binding corporate rules, standard data protection clauses adopted by the Commission, standard data protection clauses adopted by a supervisory authority or contractual clauses authorised by a supervisory authority. Those safeguards should ensure compliance with data protection requirements and the rights of the data subjects appropriate to processing within the Union, including the availability of enforceable data subject rights and of effective legal remedies."

_Source: same PDF, Recital 108, page 20._

**Cross-reference:** anchors Article 46 — the basis for the EU Standard Contractual Clauses (Commission Decision 2021/914). Privacy policy Section 5 — Resend uses SCCs + DPF stacked; Vercel uses SCCs as the sole safeguard.

### Recital 114 — Continuing rights for transferred data

> "In any case, where the Commission has taken no decision on the adequate level of data protection in a third country, the controller or processor should make use of solutions that provide data subjects with enforceable and effective rights as regards the processing of their data in the Union once those data have been transferred so that that they will continue to benefit from fundamental rights and safeguards."

_Source: same PDF, Recital 114, page 21._

**Cross-reference:** anchors the visitor's right to a copy of the transfer safeguard. Privacy policy Section 5: "You have the right to a copy of the safeguards we rely on."

### Recital 115 — Foreign judgments and disclosure orders

> "Some third countries adopt laws, regulations and other legal acts which purport to directly regulate the processing activities of natural and legal persons under the jurisdiction of the Member States. […] The extraterritorial application of those laws, regulations and other legal acts may be in breach of international law and may impede the attainment of the protection of natural persons ensured in the Union by this Regulation. Transfers should only be allowed where the conditions of this Regulation for a transfer to third countries are met."

_Source: same PDF, Recital 115, page 22._

**Cross-reference:** anchors Article 48 — third-country authority requests must be backed by an international agreement. Vercel DPA Section 12.2 confirms (as of DPA signature date) no requests received under Section 702 FISA or EO 12333. Privacy policy Section 5 indirect.

### Recital 141 — Right to lodge a complaint

> "Every data subject should have the right to lodge a complaint with a single supervisory authority, in particular in the Member State of his or her habitual residence, and the right to an effective judicial remedy in accordance with Article 47 of the Charter if the data subject considers that his or her rights under this Regulation are infringed or where the supervisory authority does not act on a complaint, partially or wholly rejects or dismisses a complaint or does not act where such action is necessary to protect the rights of the data subject."

_Source: same PDF, Recital 141, pages 25–26._

**Cross-reference:** anchors Article 77 (right to complain) + Article 79 (right to judicial remedy). Privacy policy Section 9.

### Recital 146 — Compensation for damage

> "The controller or processor should compensate any damage which a person may suffer as a result of processing that infringes this Regulation. The controller or processor should be exempt from liability if it proves that it is not in any way responsible for the damage. The concept of damage should be broadly interpreted in the light of the case-law of the Court of Justice in a manner which fully reflects the objectives of this Regulation. […] Data subjects should receive full and effective compensation for the damage they have suffered. Where controllers or processors are involved in the same processing, each controller or processor should be held liable for the entire damage."

_Source: same PDF, Recital 146, page 27._

**Cross-reference:** anchors Article 82 — compensation right. Privacy policy Section 9.3 — "Damage is interpreted broadly under EU law and includes both material damage (financial loss) and non-material damage (distress, reputational harm)."

### Recital 164 — Professional-secrecy preservation

> "As regards the powers of the supervisory authorities to obtain from the controller or processor access to personal data and access to their premises, Member States may adopt by law, within the limits of this Regulation, specific rules in order to safeguard the professional or other equivalent secrecy obligations, in so far as necessary to reconcile the right to the protection of personal data with an obligation of professional secrecy. This is without prejudice to existing Member State obligations to adopt rules on professional secrecy where required by Union law."

_Source: same PDF, Recital 164, page 30._

**Cross-reference:** anchors Article 90 — Member-State professional-secrecy rules. Ireland implements this through DPA 2018 Section 162 (preserves solicitor–client privilege against DPC compulsion). Privacy policy Section 8 — the privilege paragraph.

### Recital 173 — Relationship with ePrivacy Directive

> "This Regulation should apply to all matters concerning the protection of fundamental rights and freedoms vis-à-vis the processing of personal data which are not subject to specific obligations with the same objective set out in Directive 2002/58/EC of the European Parliament and of the Council, including the obligations on the controller and the rights of natural persons. In order to clarify the relationship between this Regulation and Directive 2002/58/EC, that Directive should be amended accordingly. Once this Regulation is adopted, Directive 2002/58/EC should be reviewed in particular in order to ensure consistency with this Regulation."

_Source: same PDF, Recital 173, page 31._

**Cross-reference:** confirms that the ePrivacy Directive 2002/58/EC (and S.I. 336/2011 implementing it in Ireland) governs cookies and similar technologies. The DPC walkthrough and the Reg 5 evidence file are the operational record. `legal-compliance/cookies/dpc-guidance-walkthrough.md` and `legal-compliance/cookies/reg-5-compliance-evidence.md`.

---

## Articles — Index of treatment

The 99 GDPR Articles are grouped by Chapter. Most are either institutional (regulator-side) or covered by a privacy-policy section. The Index below lists all Articles with one-line treatment; full entries follow for the operationally-cited Articles.

### Chapter I — General provisions (Articles 1–4)

| Article | Treatment |
|---|---|
| 1 | Subject matter and objectives — confirms GDPR's scope; no operational obligation. |
| 2 | Material scope — Mary's firm is a controller processing personal data by automated means; clearly in scope. |
| 3 | Territorial scope — Mary's firm is established in Ireland; clearly in scope. |
| 4 | Definitions — full entry below for the definitions Mary's privacy policy relies on. |

### Chapter II — Principles (Articles 5–11)

| Article | Treatment |
|---|---|
| 5 | Principles relating to processing — full entry below; operative for the privacy policy's overall framing. |
| 6 | Lawfulness of processing — full entry below; the three lawful bases on Mary's site. |
| 7 | Conditions for consent — full entry below; relevant for the cookie banner and privacy policy Section 7.9. |
| 8 | Children's consent (information society services) — Mary's site is not directed at children; privacy policy Section 11 names the DPA 2018 Section 31 age of 16. |
| 9 | Special-category data — website does not collect; firm-side does (RoPA Activity 4). Brief entry below. |
| 10 | Criminal-conviction data — website does not collect; firm-side does (criminal allegation in family-law matters). |
| 11 | Processing not requiring identification — Mary's site does not deliberately process unidentifiable data; not relevant. |

### Chapter III — Rights of the data subject (Articles 12–23)

| Article | Treatment |
|---|---|
| 12 | Transparent information and modalities — full entry below; anchors privacy policy Sections 7 and 9. |
| 13 | Information to be provided where personal data are collected from the data subject — full entry below; anchors the privacy policy's whole structure. |
| 14 | Information where data not collected from the data subject — Mary's site collects directly from the visitor; not relevant. |
| 15 | Right of access — full entry below; privacy policy Section 7.2. |
| 16 | Right to rectification — full entry below; privacy policy Section 7.3. |
| 17 | Right to erasure — full entry below; privacy policy Section 7.4 with Article 17(3) carve-outs. |
| 18 | Right to restriction — full entry below; privacy policy Section 7.5. |
| 19 | Notification obligation regarding rectification/erasure/restriction — full entry below; privacy policy Section 7.4 closing. |
| 20 | Right to data portability — full entry below; privacy policy Section 7.6. |
| 21 | Right to object — full entry below; privacy policy Section 7.7. |
| 22 | Automated decision-making — Mary's site does no ADM; privacy policy Section 7.8 names this. |
| 23 | Restrictions by Member State law — Ireland's DPA 2018 restrictions where they apply (Section 162 in privilege paragraph); no general restriction at issue here. |

### Chapter IV — Controller and processor (Articles 24–43)

| Article | Treatment |
|---|---|
| 24 | Responsibility of the controller — operationalised through Articles 5(2) accountability + Article 25 + Article 32. |
| 25 | Data protection by design and by default — full entry below; privacy policy Section 12. |
| 26 | Joint controllers — Mary's firm has no joint-controller arrangements; privacy policy Section 4 names this. |
| 27 | Representatives of non-EU controllers — Mary's firm is established in the EU; not applicable. |
| 28 | Processors — full entry below; the basis for the three DPAs on file. |
| 29 | Processing under controller's authority — operational, contained within Article 28 DPAs. |
| 30 | Records of processing activities — full entry below; covered in `record-of-processing-activities.md`. |
| 31 | Cooperation with the supervisory authority — operational; the firm will cooperate with the DPC if asked. |
| 32 | Security of processing — full entry below; privacy policy Section 12. |
| 33 | Notification of personal data breach to the DPC — full entry below; privacy policy Section 12. |
| 34 | Communication of personal data breach to the data subject — full entry below; privacy policy Section 12. |
| 35 | Data Protection Impact Assessment — not triggered for Mary's site (Recital 91 carve-out). |
| 36 | Prior consultation — only triggered if a DPIA shows unmitigable high risk; not the case here. |
| 37 | Designation of a Data Protection Officer — full entry below; not required for Mary's firm. |
| 38 | Position of the DPO — not relevant; no DPO appointed. |
| 39 | Tasks of the DPO — not relevant. |
| 40 | Codes of conduct — Mary's firm relies on regulator guidance directly. |
| 41 | Monitoring of approved codes of conduct — institutional. |
| 42 | Certification — Mary's firm not pursuing formal certification. |
| 43 | Certification bodies — institutional. |

### Chapter V — Transfers to third countries (Articles 44–50)

| Article | Treatment |
|---|---|
| 44 | General principle for transfers — full entry below; privacy policy Section 5. |
| 45 | Transfers on the basis of an adequacy decision — full entry below; covers EU–US Data Privacy Framework for Resend. |
| 46 | Transfers subject to appropriate safeguards — full entry below; covers EU SCCs for Resend and Vercel. |
| 47 | Binding corporate rules — Mary's firm not part of a group; not applicable. |
| 48 | Transfers or disclosures not authorised by Union law — relevant boundary on third-country compelled disclosures. Brief entry below. |
| 49 | Derogations for specific situations — Mary uses Article 46 SCCs route, not Article 49 derogations. |
| 50 | International cooperation for protection of personal data — institutional. |

### Chapter VI — Independent supervisory authorities (Articles 51–59)

All institutional / regulator-side. Listed in the Not-Applicable Index for the Articles section:

| 51–59 | Establishment, competence, tasks, and powers of supervisory authorities. Mary's firm is supervised by the Irish DPC; no per-Article operational obligation arises for the website. |

### Chapter VII — Cooperation and consistency (Articles 60–76)

All institutional. Listed in the Not-Applicable Index for the Articles section:

| 60–76 | Cooperation procedures, the one-stop-shop mechanism, the EDPB's role and decisions. Institutional / regulator-side. Mary's firm is single-establishment in Ireland, so the lead-authority complexity does not arise. |

### Chapter VIII — Remedies, liability and penalties (Articles 77–84)

| Article | Treatment |
|---|---|
| 77 | Right to lodge a complaint with a supervisory authority — full entry below; privacy policy Section 9.1. |
| 78 | Right to an effective judicial remedy against a supervisory authority — institutional. |
| 79 | Right to an effective judicial remedy against a controller or processor — full entry below; privacy policy Section 9.2. |
| 80 | Representation of data subjects — Mary's firm's privacy policy does not list this option; visitors retain the right via Article 80(1) but it's not normally spelt out in a small-firm policy. |
| 81 | Suspension of proceedings — institutional. |
| 82 | Right to compensation — full entry below; privacy policy Section 9.3. |
| 83 | Administrative fines — regulator-side; not visitor-facing privacy-policy content. |
| 84 | Member State penalties — institutional (Ireland's penalty regime sits in DPA 2018). |

### Chapter IX — Specific processing situations (Articles 85–91)

| Article | Treatment |
|---|---|
| 85 | Processing and freedom of expression / journalism — Mary's firm is not a journalistic publisher. |
| 86 | Processing and public access to documents — Mary's firm is not a public authority. |
| 87 | National identification numbers — Mary's firm does not process PPS numbers via the website. |
| 88 | Employment context — covered in firm-side RoPA Activity 7. |
| 89 | Archiving / scientific / historical / statistical purposes — Mary's firm performs none of these. |
| 90 | Obligations of secrecy — full entry below; the GDPR-side anchor for solicitor–client privilege in privacy policy Section 8. |
| 91 | Existing data protection rules of churches and religious associations — not applicable. |

### Chapter X — Delegated acts and implementing acts (Articles 92–93)

Both institutional. Not applicable to Mary's firm directly.

### Chapter XI — Final provisions (Articles 94–99)

| Article | Treatment |
|---|---|
| 94 | Repeal of Directive 95/46/EC — historical / transitional. |
| 95 | Relationship with Directive 2002/58/EC (ePrivacy) — confirms ePrivacy / S.I. 336/2011 governs cookies. |
| 96 | Existing-international-agreements transitional rule — institutional. |
| 97 | Commission reports — institutional. |
| 98 | Review of related EU acts — institutional. |
| 99 | Entry into force and application — historical (25 May 2018). |

---

## Full entries — Articles

### Article 4 — Definitions (selected)

> "(1) 'personal data' means any information relating to an identified or identifiable natural person ('data subject'); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;
>
> (2) 'processing' means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;
>
> (5) 'pseudonymisation' means the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information […];
>
> (7) 'controller' means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data;
>
> (8) 'processor' means a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller;
>
> (11) 'consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her;
>
> (12) 'personal data breach' means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed."

_Source: `regulation-2016-679-consolidated-2016-05.pdf`, Article 4, pages 3–4 (also in the Official Journal version)._

**Cross-reference:** these definitions anchor the privacy policy's vocabulary. Section 1 (controller); Section 4 (processor); Section 7.9 (consent); Section 12 (personal data breach).

### Article 5 — Principles relating to processing of personal data

> "1. Personal data shall be:
> (a) processed lawfully, fairly and in a transparent manner in relation to the data subject ('lawfulness, fairness and transparency');
> (b) collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes […] ('purpose limitation');
> (c) adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed ('data minimisation');
> (d) accurate and, where necessary, kept up to date […] ('accuracy');
> (e) kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed […] ('storage limitation');
> (f) processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures ('integrity and confidentiality').
> 2. The controller shall be responsible for, and be able to demonstrate compliance with, paragraph 1 ('accountability')."

_Source: same consolidated PDF, Article 5._

**Cross-reference:** every limb anchors a privacy-policy section:
- 5(1)(a) transparency — anchors the policy's plain-English style.
- 5(1)(c) data minimisation — anchors the no-trackers, minimum-data architecture.
- 5(1)(e) storage limitation — anchors the retention periods in Section 6.
- 5(1)(f) integrity and confidentiality — anchors Section 12.
- 5(2) accountability — operationalised through the privacy policy itself, the RoPA, and the DPAs on file.

### Article 6 — Lawfulness of processing

> "1. Processing shall be lawful only if and to the extent that at least one of the following applies:
> (a) the data subject has given consent to the processing of his or her personal data for one or more specific purposes;
> (b) processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract;
> (c) processing is necessary for compliance with a legal obligation to which the controller is subject;
> (d) processing is necessary in order to protect the vital interests of the data subject or of another natural person;
> (e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;
> (f) processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data, in particular where the data subject is a child.
> Point (f) of the first subparagraph shall not apply to processing carried out by public authorities in the performance of their tasks."

_Source: same consolidated PDF, Article 6._

**Cross-reference:** the three website processing activities in privacy policy Section 3 each name an Article 6(1) basis:
- (a) Cookie consent records → 6(1)(c) legal obligation (Reg 5(3) S.I. 336/2011 + Article 7(1) GDPR).
- (b) Contact-form submissions → 6(1)(b) pre-contractual measures.
- (c) Server access logs → 6(1)(f) legitimate interest.

Mary's firm does **not** rely on 6(1)(a) consent for any operational website processing other than non-essential cookies (the consent for which is recorded under 6(1)(c)). 6(1)(d), (e) do not apply.

### Article 7 — Conditions for consent

> "1. Where processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to processing of his or her personal data.
> 2. If the data subject's consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters […].
> 3. The data subject shall have the right to withdraw his or her consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. […] It shall be as easy to withdraw as to give consent.
> 4. When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract."

_Source: same consolidated PDF, Article 7._

**Cross-reference:** anchors the cookie banner architecture (Cookiebot logs the consent record under 7(1); 7(3) is the basis for the floating Privacy icon allowing one-click withdrawal). Privacy policy Section 7.9.

### Article 9 — Processing of special categories of personal data

Article 9 prohibits processing of special-category data (racial origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, sex life or sexual orientation) except under specific conditions in 9(2)(a)–(j).

**Cross-reference:** Mary's website does not collect special-category data. The firm side does, in client matter files (health data in personal injury matters; potentially sex life / sexual orientation in family law). Article 9(2)(f) — processing necessary for the establishment, exercise or defence of legal claims — is the lawful basis the firm relies on for special-category processing in matter files. Covered in RoPA Activity 4 (firm-wide slice).

### Article 12 — Transparent information, communication and modalities

> "1. The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 and any communication under Articles 15 to 22 and 34 relating to processing to the data subject in a concise, transparent, intelligible and easily accessible form, using clear and plain language […].
> 3. The controller shall provide information on action taken on a request under Articles 15 to 22 to the data subject without undue delay and in any event within one month of receipt of the request. That period may be extended by two further months where necessary, taking into account the complexity and number of the requests. […]
> 5. Information provided under Articles 13 and 14 and any communication and any actions taken under Articles 15 to 22 and 34 shall be provided free of charge. Where requests from a data subject are manifestly unfounded or excessive, in particular because of their repetitive character, the controller may either: (a) charge a reasonable fee […]; or (b) refuse to act on the request. The controller shall bear the burden of demonstrating the manifestly unfounded or excessive character of the request."

_Source: same consolidated PDF, Article 12._

**Cross-reference:** anchors privacy policy Section 7 — the one-month response under 12(3); the free-of-charge default under 12(5) (the privacy policy uses the simplified "free of charge" line, not the manifestly-unfounded carve-out, per the editorial decision in `_scratch-questions-answers.md`).

### Article 13 — Information to be provided where personal data are collected from the data subject

Article 13(1) and 13(2) list the mandatory contents of a privacy notice when data is collected from the data subject. The Article 13 contents map onto privacy policy sections as follows:

- 13(1)(a) controller identity → Section 1
- 13(1)(b) DP contact → Section 2
- 13(1)(c) purposes + lawful basis → Section 3
- 13(1)(d) legitimate-interest balance (where applicable) → Section 3(c)
- 13(1)(e) recipients → Section 4
- 13(1)(f) third-country transfers → Section 5
- 13(2)(a) retention periods → Section 6
- 13(2)(b) data-subject rights → Section 7
- 13(2)(c) right to withdraw consent → Section 7.9
- 13(2)(d) right to complain to DPC → Section 9
- 13(2)(e) whether providing data is required → Section 10
- 13(2)(f) automated decision-making → Section 7.8

**Cross-reference:** the privacy policy is the firm's compliance with Article 13. Each section maps to an Article 13 sub-paragraph above.

### Article 15 — Right of access

> "1. The data subject shall have the right to obtain from the controller confirmation as to whether or not personal data concerning him or her are being processed, and, where that is the case, access to the personal data and the following information: [purposes; categories of personal data; recipients; retention; data-subject rights; right to complain; source if not from the data subject; existence of automated decision-making].
> 3. The controller shall provide a copy of the personal data undergoing processing. For any further copies requested by the data subject, the controller may charge a reasonable fee based on administrative costs. […]
> 4. The right to obtain a copy referred to in paragraph 3 shall not adversely affect the rights and freedoms of others."

_Source: same consolidated PDF, Article 15._

**Cross-reference:** anchors privacy policy Section 7.2. The 15(4) rights-of-others limit underwrites the firm's ability to redact other people's personal data from a response (relevant in family-law matter files).

### Article 16 — Right to rectification

> "The data subject shall have the right to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement."

_Source: same consolidated PDF, Article 16._

**Cross-reference:** anchors privacy policy Section 7.3.

### Article 17 — Right to erasure ('right to be forgotten')

> "1. The data subject shall have the right to obtain from the controller the erasure of personal data concerning him or her without undue delay and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies: [purposes no longer require; consent withdrawn; objection sustained; unlawful processing; legal obligation to erase; child-data offered information-society services].
>
> 3. Paragraphs 1 and 2 shall not apply to the extent that processing is necessary:
> (a) for exercising the right of freedom of expression and information;
> (b) for compliance with a legal obligation which requires processing by Union or Member State law to which the controller is subject or for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;
> (c) for reasons of public interest in the area of public health […];
> (d) for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes […];
> (e) for the establishment, exercise or defence of legal claims."

_Source: same consolidated PDF, Article 17._

**Cross-reference:** anchors privacy policy Section 7.4. The 17(3)(b) and 17(3)(e) carve-outs are the basis for the "we cannot delete client matter files on request" reasoning — Law Society retention rules + Statute of Limitations 1957 + AML Act 2010 fall under 17(3)(b); closed-matter retention against possible appeals falls under 17(3)(e).

### Article 18 — Right to restriction of processing

> "1. The data subject shall have the right to obtain from the controller restriction of processing where one of the following applies: [accuracy contested; processing unlawful but data subject opposes erasure; controller no longer needs data but data subject needs it for legal claims; objection pending verification of legitimate grounds]."

_Source: same consolidated PDF, Article 18._

**Cross-reference:** anchors privacy policy Section 7.5.

### Article 19 — Notification obligation regarding rectification, erasure or restriction

> "The controller shall communicate any rectification or erasure of personal data or restriction of processing carried out in accordance with Article 16, Article 17(1) and Article 18 to each recipient to whom the personal data have been disclosed, unless this proves impossible or involves disproportionate effort."

_Source: same consolidated PDF, Article 19._

**Cross-reference:** anchors privacy policy Section 7.4 closing — "if we erase, restrict, or correct data on your request, we will pass the change on to our service providers (Cookiebot, Resend, hosting)".

### Article 20 — Right to data portability

> "1. The data subject shall have the right to receive the personal data concerning him or her, which he or she has provided to a controller, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, where:
> (a) the processing is based on consent pursuant to point (a) of Article 6(1) or point (a) of Article 9(2) or on a contract pursuant to point (b) of Article 6(1); and
> (b) the processing is carried out by automated means."

_Source: same consolidated PDF, Article 20._

**Cross-reference:** anchors privacy policy Section 7.6 — narrow scope (consent or contract bases only). On Mary's site this means contact-form data only (6(1)(b) pre-contractual). Server access logs (6(1)(f)) and cookie consent records (6(1)(c)) are out of scope of Article 20.

### Article 21 — Right to object

> "1. The data subject shall have the right to object, on grounds relating to his or her particular situation, at any time to processing of personal data concerning him or her which is based on point (e) or (f) of Article 6(1), including profiling based on those provisions. The controller shall no longer process the personal data unless the controller demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defence of legal claims.
> 2. Where personal data are processed for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing, which includes profiling to the extent that it is related to such direct marketing.
> 3. Where the data subject objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.
> 4. At the latest at the time of the first communication with the data subject, the right referred to in paragraphs 1 and 2 shall be explicitly brought to the attention of the data subject and shall be presented clearly and separately from any other information."

_Source: same consolidated PDF, Article 21._

**Cross-reference:** anchors privacy policy Section 7.7. The 21(4) presentation rule is why Section 7.7 has its own paragraph break and is presented "as its own paragraph, separately from the others, because Article 21(4) of the GDPR explicitly requires it." Mary's firm does not carry out direct marketing — 21(2) does not arise.

### Article 25 — Data protection by design and by default

> "1. Taking into account the state of the art, the cost of implementation and the nature, scope, context and purposes of processing as well as the risks of varying likelihood and severity for rights and freedoms of natural persons posed by the processing, the controller shall, both at the time of the determination of the means for processing and at the time of the processing itself, implement appropriate technical and organisational measures, such as pseudonymisation, which are designed to implement data-protection principles, such as data minimisation, in an effective manner and to integrate the necessary safeguards into the processing in order to meet the requirements of this Regulation and protect the rights of data subjects.
> 2. The controller shall implement appropriate technical and organisational measures for ensuring that, by default, only personal data which are necessary for each specific purpose of the processing are processed."

_Source: same consolidated PDF, Article 25._

**Cross-reference:** anchors the no-trackers, minimum-data architectural choice. Privacy policy Section 12 — "Architectural design: the site is built to collect the minimum personal data needed (Article 25 GDPR — data protection by design and by default)." `_business/sensitive-topic-tracking-policy.md` is the policy-level expression.

### Article 28 — Processor

> "1. Where processing is to be carried out on behalf of a controller, the controller shall use only processors providing sufficient guarantees to implement appropriate technical and organisational measures in such a manner that processing will meet the requirements of this Regulation and ensure the protection of the rights of the data subject.
> 3. Processing by a processor shall be governed by a contract or other legal act under Union or Member State law, that is binding on the processor with regard to the controller and that sets out the subject-matter and duration of the processing, the nature and purpose of the processing, the type of personal data and categories of data subjects and the obligations and rights of the controller. That contract or other legal act shall stipulate, in particular, that the processor:
> (a) processes the personal data only on documented instructions from the controller […];
> (b) ensures that persons authorised to process the personal data have committed themselves to confidentiality […];
> (c) takes all measures required pursuant to Article 32;
> (d) respects the conditions referred to in paragraphs 2 and 4 for engaging another processor;
> (e) taking into account the nature of the processing, assists the controller […] in fulfilling its obligation to respond to requests for exercising the data subject's rights laid down in Chapter III;
> (f) assists the controller in ensuring compliance with the obligations pursuant to Articles 32 to 36 […];
> (g) at the choice of the controller, deletes or returns all the personal data to the controller after the end of the provision of services relating to processing […];
> (h) makes available to the controller all information necessary to demonstrate compliance with the obligations laid down in this Article […]."

_Source: same consolidated PDF, Article 28._

**Cross-reference:** anchors the three DPAs on file at `legal-compliance/processor-agreements/` — Cookiebot, Resend, Vercel. Each DPA covers all eight Article 28(3)(a)–(h) clauses. Privacy policy Section 4 — "Each is bound by a written contract that meets Article 28(3) of the GDPR".

### Article 30 — Records of processing activities

Article 30(1) sets out the seven mandatory headings for the RoPA: (a) controller details, (b) purposes, (c) categories of data subjects + personal data, (d) recipients, (e) third-country transfers, (f) retention periods, (g) security measures.

Article 30(5) provides an under-250-employees carve-out **except** where processing is not occasional, may include special-category data, or is risky. The carve-out **does not apply** to Mary's firm because the processing is not occasional and may include special-category data (firm-side health and criminal-allegation data).

**Cross-reference:** `record-of-processing-activities.md` is the firm's RoPA. Eleven activities documented (three website + eight firm-wide). Law Society of Ireland Template 2 (filed at `legal-compliance/gdpr/law-society-of-ireland-ropa-template-controller.docx`) is the alternative artefact Mary may use.

### Article 32 — Security of processing

> "1. Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, the controller and the processor shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including inter alia as appropriate:
> (a) the pseudonymisation and encryption of personal data;
> (b) the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;
> (c) the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident;
> (d) a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for ensuring the security of the processing."

_Source: same consolidated PDF, Article 32._

**Cross-reference:** anchors privacy policy Section 12. The TLS-in-transit, encryption-at-rest, processor-DPA framework is the firm's Article 32 implementation.

### Article 33 — Notification of a personal data breach to the supervisory authority

> "1. In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where the notification to the supervisory authority is not made within 72 hours, it shall be accompanied by reasons for the delay."

_Source: same consolidated PDF, Article 33._

**Cross-reference:** anchors the 72-hour DPC-notification commitment in privacy policy Section 12.

### Article 34 — Communication of a personal data breach to the data subject

> "1. When the personal data breach is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall communicate the personal data breach to the data subject without undue delay."

_Source: same consolidated PDF, Article 34._

**Cross-reference:** anchors the visitor-notification commitment in privacy policy Section 12.

### Article 37 — Designation of the data protection officer

> "1. The controller and the processor shall designate a data protection officer in any case where:
> (a) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity;
> (b) the core activities of the controller or the processor consist of processing operations which, by virtue of their nature, their scope and/or their purposes, require regular and systematic monitoring of data subjects on a large scale; or
> (c) the core activities of the controller or the processor consist of processing on a large scale of special categories of data pursuant to Article 9 or personal data relating to criminal convictions and offences referred to in Article 10."

_Source: same consolidated PDF, Article 37._

**Cross-reference:** none of the three triggers fire for Mary's firm. (a) not a public authority; (b) not large-scale regular and systematic monitoring; (c) not large-scale special-category processing — Recital 91 explicitly excludes individual-lawyer processing from "large-scale". Privacy policy Section 2 — "We are not required to appoint a Data Protection Officer (DPO) and we have not appointed one. Article 37 of the GDPR sets out three situations where a DPO is mandatory […] None apply to a small Irish solicitor's firm of our type."

### Article 44 — General principle for transfers

> "Any transfer of personal data which are undergoing processing or are intended for processing after transfer to a third country or to an international organisation shall take place only if, subject to the other provisions of this Regulation, the conditions laid down in this Chapter are complied with by the controller and processor, including for onward transfers of personal data from the third country or an international organisation to another third country or to another international organisation. All provisions in this Chapter shall be applied in order to ensure that the level of protection of natural persons guaranteed by this Regulation is not undermined."

_Source: same consolidated PDF, Article 44._

**Cross-reference:** anchors privacy policy Section 5 framing. Onward-transfer commitment also covers Resend's and Vercel's sub-processors.

### Article 45 — Transfers on the basis of an adequacy decision

> "1. A transfer of personal data to a third country or an international organisation may take place where the Commission has decided that the third country, a territory or one or more specified sectors within that third country, or the international organisation in question ensures an adequate level of protection. Such a transfer shall not require any specific authorisation."

_Source: same consolidated PDF, Article 45._

**Cross-reference:** anchors the EU–US Data Privacy Framework (Commission Implementing Decision 2023/1795) — the framework Resend self-certifies under. Privacy policy Section 5.

### Article 46 — Transfers subject to appropriate safeguards

> "1. In the absence of a decision pursuant to Article 45(3), a controller or processor may transfer personal data to a third country or an international organisation only if the controller or processor has provided appropriate safeguards, and on condition that enforceable data subject rights and effective legal remedies for data subjects are available.
> 2. The appropriate safeguards referred to in paragraph 1 may be provided for, without requiring any specific authorisation from a supervisory authority, by:
> (c) standard data protection clauses adopted by the Commission in accordance with the examination procedure referred to in Article 93(2)."

_Source: same consolidated PDF, Article 46._

**Cross-reference:** anchors the EU Standard Contractual Clauses (Commission Decision 2021/914) — the safeguard Resend (Section 6.2 of its DPA) and Vercel (Section 12.1 of its DPA) both rely on. Privacy policy Section 5.

### Article 48 — Transfers or disclosures not authorised by Union law

> "Any judgment of a court or tribunal and any decision of an administrative authority of a third country requiring a controller or processor to transfer or disclose personal data may only be recognised or enforceable in any manner if based on an international agreement, such as a mutual legal assistance treaty, in force between the requesting third country and the Union or a Member State, without prejudice to other grounds for transfer pursuant to this Chapter."

_Source: same consolidated PDF, Article 48._

**Cross-reference:** the boundary on third-country compelled disclosures. Vercel DPA Section 12.2 includes a related representation about no Section 702 FISA / EO 12333 requests. Indirect anchor for privacy policy Section 5.

### Article 77 — Right to lodge a complaint with a supervisory authority

> "1. Without prejudice to any other administrative or judicial remedy, every data subject shall have the right to lodge a complaint with a supervisory authority, in particular in the Member State of his or her habitual residence, place of work or place of the alleged infringement if the data subject considers that the processing of personal data relating to him or her infringes this Regulation."

_Source: same consolidated PDF, Article 77._

**Cross-reference:** anchors privacy policy Section 9.1 — including the "or to the supervisory authority of your habitual residence or place of work" line for non-Irish visitors.

### Article 79 — Right to an effective judicial remedy against a controller or processor

> "1. Without prejudice to any available administrative or non-judicial remedy, including the right to lodge a complaint with a supervisory authority pursuant to Article 77, each data subject shall have the right to an effective judicial remedy where he or she considers that his or her rights under this Regulation have been infringed as a result of the processing of his or her personal data in non-compliance with this Regulation.
> 2. Proceedings against a controller or a processor shall be brought before the courts of the Member State where the controller or processor has an establishment. Alternatively, such proceedings may be brought before the courts of the Member State where the data subject has his or her habitual residence […]."

_Source: same consolidated PDF, Article 79._

**Cross-reference:** anchors privacy policy Section 9.2 — including the 79(2) forum-choice (Irish courts or visitor's habitual-residence courts).

### Article 82 — Right to compensation and liability

> "1. Any person who has suffered material or non-material damage as a result of an infringement of this Regulation shall have the right to receive compensation from the controller or processor for the damage suffered.
> 4. Where more than one controller or processor, or both a controller and a processor, are involved in the same processing and where they are, under paragraphs 2 and 3, responsible for any damage caused by processing, each controller or processor shall be held liable for the entire damage in order to ensure effective compensation of the data subject."

_Source: same consolidated PDF, Article 82._

**Cross-reference:** anchors privacy policy Section 9.3 — the broad reading of "damage" covering material and non-material harm, plus the joint-and-several liability framing.

### Article 90 — Obligations of secrecy

> "1. Member States may adopt specific rules to set out the powers of the supervisory authorities laid down in points (e) and (f) of Article 58(1) in relation to controllers or processors that are subject, under Union or Member State law or rules established by national competent bodies, to an obligation of professional secrecy or other equivalent obligations of secrecy where this is necessary and proportionate to reconcile the right to the protection of personal data with the obligation of secrecy. Those rules shall apply only with regard to personal data which the controller or processor has received as a result of or has obtained in an activity covered by that obligation of secrecy."

_Source: same consolidated PDF, Article 90._

**Cross-reference:** the GDPR-side anchor for solicitor–client privilege. Ireland implements this through DPA 2018 Section 162. Privacy policy Section 8 — the privilege paragraph.

---

## Summary — what the walkthrough covers

- **Recitals fully covered:** 26, 30, 32, 35, 39, 40, 42, 44, 47, 49, 51, 58, 59, 60, 61, 63, 65, 68, 69, 70, 78, 79, 91, 101, 104, 108, 114, 115, 141, 146, 164, 173 (32 of 173).
- **Articles fully covered:** 4, 5, 6, 7, 9 (brief), 12, 13, 15, 16, 17, 18, 19, 20, 21, 25, 28, 30, 32, 33, 34, 37, 44, 45, 46, 48, 77, 79, 82, 90 (29 of 99).
- **All other Recitals and Articles** are in the Not-Applicable Index above with a one-line reason.

This is the complete audit trail demonstrating that every part of GDPR was considered for Mary's website. Where a part applies, it is anchored either to a specific privacy-policy section, to the RoPA file, or to a processor DPA. Where it does not apply, the reason is stated.

---

_Last rebuilt 2026-05-04. Next review: alongside any privacy-policy revision or whenever a new processing activity is added to the website._
