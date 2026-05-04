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
- **IP addresses in server access logs** — personal data per CJEU *Breyer* (C-582/14) reading of this recital. The CJEU held that an IP address is personal data even when only a third party (the ISP) holds the additional information needed to identify the visitor, so long as the controller has a "legal means" of obtaining that information. For Mary's firm, that legal means exists — court order — so IPs in the hosting provider's logs are personal data.
- **Cookiebot consent ID** — pseudonymous but personal data per this recital. Even though the ID alone reveals nothing, Cookiebot can attribute it to the visitor's IP at the moment of consent.
- **User-agent + URL combinations** — personal data when combined with IP, because the combination can "single out" a visitor across sessions.

**Cross-references — backwards:** none (Recital 26 is upstream of the operative provisions).

**Cross-references — forwards:**
- **Article 4(1)** (definition of personal data) — Recital 26 is the interpretive backstop for the Article 4(1) phrase "directly or indirectly".
- **Article 4(5)** (definition of pseudonymisation) — Recital 26 confirms pseudonymous data is still within scope.
- **Article 11** (processing not requiring identification) — the boundary case where Recital 26 stops applying.

**Cross-references — sideways:** Recital 30 (online identifiers explicitly named); Recital 28 + 29 (pseudonymisation as a risk-reduction measure but not a scope-exit).

**Cross-references — down:**
- RoPA Activities 1 (cookie consent) and 3 (server logs) at `legal-compliance/gdpr/record-of-processing-activities.md` — both rely on Recital 26 to classify their data as personal data.
- Privacy policy Section 3 at `legal-compliance/gdpr/privacy-policy-draft.md` — the "what we collect, and why" section names IP, consent ID, and user-agent as personal data on the strength of this recital.

**Cross-references — out:**
- DPC walkthrough Section 23 (Processing of personal data) at `legal-compliance/cookies/dpc-guidance-walkthrough.md` — relies on this recital and *Breyer*.
- DPC walkthrough Section 25 (special-category implications of online identifiers).
- CJEU **Breyer v Bundesrepublik Deutschland**, Case C-582/14, judgment of 19 October 2016 — the leading authority on IP addresses as personal data.

### Recital 30 — Online identifiers explicitly named

> "Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags. This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them."

_Source: same PDF, Recital 30, page 6._

**Plain-English:** IP addresses, cookie IDs, and other online identifiers can identify a person — they are personal data.

**Why it matters for Mary's site:** the recital is the explicit textual basis for treating cookie identifiers and IP addresses as personal data. Without Recital 30 there would be a circular argument that "we don't process personal data because we only have a random ID" — Recital 30 closes that loophole.

**Cross-references — backwards:** Recital 26 (the broader test for identifiability).

**Cross-references — forwards:**
- **Article 4(1)** — the operative definition the recital interprets.
- **Article 6(1)(c)** — combined with Reg 5(3) S.I. 336/2011, this is the lawful basis Cookiebot consent records rely on.
- **Article 6(1)(f)** — the lawful basis server logs rely on.

**Cross-references — sideways:** Recital 32 (consent for cookies); Recital 47 (legitimate interest); Recital 49 (network security).

**Cross-references — down:**
- RoPA Activities 1 and 3.
- Privacy policy Section 3(a) (cookie consent records) and 3(c) (server access logs).
- Cookie policy at `/cookie-policy` — the specific cookies the site uses.

**Cross-references — out:**
- CJEU *Breyer* C-582/14 — the case is anchored in this recital plus Recital 26.
- DPC walkthrough Section 23 + 25.
- EDPB Cookie Banner Taskforce Report (`legal-compliance/cookies/edpb-2023-compliance-evidence.md`) — applies Recital 30 to consent banner architecture.

### Recital 30 — Online identifiers explicitly named

> "Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags. This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them."

_Source: same PDF, Recital 30, page 6._

**Plain-English:** IP addresses, cookie IDs, and other online identifiers can identify a person — they are personal data.

**Cross-reference:** anchors the *Breyer* CJEU judgment cited in DPC walkthrough Section 23 + Section 25. RoPA Activities 1 and 3.

### Recital 32 — Consent must be a clear affirmative act

> "Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement. This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject's acceptance of the proposed processing of his or her personal data. Silence, pre-ticked boxes or inactivity should not therefore constitute consent."

_Source: same PDF, Recital 32, page 6._

**Plain-English:** consent must be active. Silence, pre-ticked boxes, or just continuing to use a site does not count.

**Why it matters for Mary's site:** the cookie banner architecture lives or dies on this recital. If pre-ticked boxes were allowed, the whole "Reject All" infrastructure would be ornamental. Recital 32 is what makes "Reject All" load-bearing.

**Cross-references — backwards:** Recitals 42 (consent freely given), 43 (imbalance of power); Article 4(11) (definition of consent).

**Cross-references — forwards:**
- **Article 7(1)** — the operative provision requiring demonstrability of consent.
- **Article 7(3)** — withdrawal must be as easy as consent.
- **Article 4(11)** — definition of consent.

**Cross-references — sideways:** Recital 42 (informed consent); Recital 70 (right to object to direct marketing must be presented separately).

**Cross-references — down:**
- Cookiebot configuration — `data-blockingmode="auto"` in `src/layouts/BaseLayout.astro`. Cookiebot ships with no pre-ticked non-essential boxes.
- RoPA Activity 1 — the consent log itself is the firm's demonstrability evidence.
- Privacy policy Section 7.9 (right to withdraw consent).

**Cross-references — out:**
- DPC walkthrough Section 5 (validity of consent) and Section 6 (no pre-ticked boxes).
- EDPB Cookie Banner Taskforce Report (`legal-compliance/cookies/edpb-2023-compliance-evidence.md`) Sections 4 and 7 — convergent regulator position.
- CJEU **Planet49 GmbH v Bundesverband der Verbraucherzentralen**, Case C-673/17, judgment of 1 October 2019 — pre-ticked checkbox not valid consent.
- S.I. 336/2011 Reg 5(3) — Irish ePrivacy implementation requires consent for non-essential cookies.

### Recital 35 — Personal data concerning health (Article 9)

> "Personal data concerning health should include all data pertaining to the health status of a data subject which reveal information relating to the past, current or future physical or mental health status of the data subject. This includes information about the natural person collected in the course of the registration for, or the provision of, health care services […]; information derived from the testing or examination of a body part or bodily substance, including from genetic data and biological samples; and any information on, for example, a disease, disability, disease risk, medical history, clinical treatment or the physiological or biomedical state of the data subject independent of its source, for example from a physician or other health professional, a hospital, a medical device or an in vitro diagnostic test."

_Source: same PDF, Recital 35, page 6._

**Plain-English:** "health data" is read broadly. Anything revealing past, current, or future physical or mental health is special-category.

**Why it matters for Mary's firm:** the scope of "health data" affects the personal-injury practice area significantly. Medical reports, GP letters, A&E records, physiotherapy notes — all clearly health data. Less obvious items like a client's account of an accident that mentions injuries also fall in. The firm must treat this whole category as Article 9 special-category data.

**Cross-references — backwards:** Recital 51 (special categories merit specific protection).

**Cross-references — forwards:**
- **Article 9(1)** — the prohibition on processing special-category data.
- **Article 9(2)(f)** — the exception for legal claims, which is the lawful basis Mary's firm relies on for health data in personal injury matters.

**Cross-references — sideways:** Recitals 53 (health-purpose processing), 54 (public-health interest).

**Cross-references — down:**
- RoPA Activity 4 (client matter files) at `record-of-processing-activities.md` — names health data as a category processed by the firm side.
- Privacy policy — does not name this on the visitor-facing side because the website does not collect health data; firm-side processing is governed separately.

**Cross-references — out:** Recital 91 (individual-lawyer carve-out from "large-scale" processing — important boundary).

### Recital 39 — Transparency, fairness, lawfulness, minimisation, storage limitation

> "Any processing of personal data should be lawful and fair. It should be transparent to natural persons that personal data concerning them are collected, used, consulted or otherwise processed and to what extent the personal data are or will be processed. The principle of transparency requires that any information and communication relating to the processing of those personal data be easily accessible and easy to understand, and that clear and plain language be used. That principle concerns, in particular, information to the data subjects on the identity of the controller and the purposes of the processing and further information to ensure fair and transparent processing in respect of the natural persons concerned and their right to obtain confirmation and communication of personal data concerning them which are being processed. […] Personal data should be adequate, relevant and limited to what is necessary for the purposes for which they are processed. […] In order to ensure that the personal data are not kept longer than necessary, time limits should be established by the controller for erasure or for a periodic review."

_Source: same PDF, Recital 39, page 7._

**Plain-English:** be open and clear about what data you collect, why, for how long. Use plain language. Don't keep more than you need.

**Why it matters for Mary's site:** Recital 39 is the foundation of every privacy-policy drafting decision the firm makes — short sentences over long ones, plain English over legal vocabulary, specific retention periods over vague "as long as necessary".

**Cross-references — backwards:** Recital 13 (consistent transparency standard across the EU).

**Cross-references — forwards:**
- **Article 5(1)(a)** — lawfulness, fairness, transparency.
- **Article 5(1)(c)** — data minimisation.
- **Article 5(1)(e)** — storage limitation.
- **Article 12(1)** — communication in clear and plain language.
- **Article 13** — information to be provided.

**Cross-references — sideways:** Recital 58 (concise/easily accessible/easy to understand language); Recital 60 (specific information requirements).

**Cross-references — down:**
- Privacy policy intro and overall structure at `privacy-policy-draft.md` — written in short sentences, no legal vocabulary outside quotes.
- Privacy policy Section 3 (purposes named per activity).
- Privacy policy Section 6 (retention periods named per activity).
- Memory entry `feedback_plain_language.md` — captures the firm's plain-English drafting standard.

**Cross-references — out:** DPC walkthrough Sections 4 and 13 (transparency at point of collection).

### Recital 40 — Lawfulness requires a basis under Article 6

> "In order for processing to be lawful, personal data should be processed on the basis of the consent of the data subject concerned or some other legitimate basis, laid down by law, either in this Regulation or in other Union or Member State law as referred to in this Regulation, including the necessity for compliance with the legal obligation to which the controller is subject or the necessity for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract."

_Source: same PDF, Recital 40, pages 7–8._

**Plain-English:** every processing activity needs one of the lawful bases in Article 6.

**Why it matters for Mary's site:** the privacy policy must name a specific Article 6 basis for each of the three website processing activities. "We process data because we need to" is not a lawful basis. The firm has done the analysis and named (c), (b), and (f) — see down-references.

**Cross-references — backwards:** Recital 39 (the broader lawfulness principle); Recitals 1–7 (overall regulatory aims).

**Cross-references — forwards:**
- **Article 5(1)(a)** — lawfulness as a principle.
- **Article 6(1)** — the six lawful-basis options.

**Cross-references — sideways:** Recitals 42 (consent), 44 (pre-contractual), 45 (legal-obligation/public-interest), 46 (vital-interest), 47 (legitimate-interest) — all elaborate specific Article 6(1) limbs.

**Cross-references — down:**
- Privacy policy Section 3 — names an Article 6(1) basis per activity:
  - 3(a) Cookie consent records → Article 6(1)(c).
  - 3(b) Contact-form submissions → Article 6(1)(b).
  - 3(c) Server access logs → Article 6(1)(f).
- RoPA — the same lawful bases recorded in the (b) Purposes column for each activity.

### Recital 42 — Consent freely given, demonstrability, withdrawability

> "Where processing is based on the data subject's consent, the controller should be able to demonstrate that the data subject has given consent to the processing operation. In particular in the context of a written declaration on another matter, safeguards should ensure that the data subject is aware of the fact that and the extent to which consent is given. […] For consent to be informed, the data subject should be aware at least of the identity of the controller and the purposes of the processing for which the personal data are intended. Consent should not be regarded as freely given if the data subject has no genuine or free choice or is unable to refuse or withdraw consent without detriment."

_Source: same PDF, Recital 42, page 8._

**Plain-English:** the firm must be able to prove consent was given. The data subject must understand who is processing their data and why. Refusing or withdrawing must not penalise them.

**Cross-references — backwards:** Recital 32 (clear affirmative act); Recital 43 (imbalance of power).

**Cross-references — forwards:**
- **Article 7(1)** — burden of proof on the controller to demonstrate consent.
- **Article 7(3)** — right to withdraw, as easy as giving.
- **Article 7(4)** — bundled consent considered when assessing free-givenness.

**Cross-references — down:**
- Cookiebot consent log — RoPA Activity 1; the demonstrability evidence.
- Floating Privacy icon (Cookiebot) — the withdrawal mechanism the privacy policy Section 7.9 names.

**Cross-references — out:** DPC walkthrough Section 5 (validity of consent); EDPB Cookie Banner Taskforce Report Sections 5–7 (operational consequences).

### Recital 44 — Pre-contractual processing

> "Processing should be lawful where it is necessary in the context of a contract or the intention to enter into a contract."

_Source: same PDF, Recital 44, page 8._

**Plain-English:** when someone is asking about engaging the firm, that's pre-contractual — Article 6(1)(b) covers it.

**Why it matters for Mary's site:** the contact form's lawful basis is **not consent**. It is Article 6(1)(b) pre-contractual. This matters because Article 7's high consent bar (demonstrability, withdrawability, no detriment) does not apply — the visitor sending an enquiry is not "consenting" in the GDPR sense; they are taking steps at their request prior to entering into a contract. Treating it as consent would be the wrong characterisation.

**Cross-references — backwards:** Recital 40 (the broader lawful-basis framework).

**Cross-references — forwards:**
- **Article 6(1)(b)** — the operative provision: "processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract".

**Cross-references — sideways:** Recital 42 (consent — explicitly NOT the basis here).

**Cross-references — down:**
- Privacy policy Section 3(b) — "Lawful basis: Article 6(1)(b) of the GDPR — taking steps at your request before entering into a contract. Recital 44 of the GDPR explicitly names this as the basis for 'intention to enter into a contract' — which is exactly what a solicitor's enquiry is."
- Contact form privacy disclosure at `src/features/contact-form/components/ContactForm.astro` — the line "We will use the details you provide to respond to your enquiry" is the Article 13(1) information delivered at the point of collection (Recital 61).

### Recital 47 — Legitimate-interest basis (with the direct-marketing carve-out)

> "The legitimate interests of a controller, including those of a controller to which the personal data may be disclosed, or of a third party, may provide a legal basis for processing, provided that the interests or the fundamental rights and freedoms of the data subject are not overriding, taking into consideration the reasonable expectations of data subjects based on their relationship with the controller. Such legitimate interest could exist for example where there is a relevant and appropriate relationship between the data subject and the controller in situations such as where the data subject is a client or in the service of the controller. At any rate the existence of a legitimate interest would need careful assessment including whether a data subject can reasonably expect at the time and in the context of the collection of the personal data that processing for that purpose may take place. […] The processing of personal data strictly necessary for the purposes of preventing fraud also constitutes a legitimate interest of the data controller concerned. The processing of personal data for direct marketing purposes may be regarded as carried out for a legitimate interest."

_Source: same PDF, Recital 47, page 9._

**Plain-English:** if the firm has a real, identifiable interest in processing data, and the visitor's rights don't override that interest, the firm can rely on Article 6(1)(f). The recital expressly names fraud-prevention and direct marketing as legitimate-interest examples.

**Why it matters for Mary's site:** the server access logs rely on Article 6(1)(f) and Recital 47 — the firm has a legitimate interest in keeping the site available, free from abuse, and free from automated form-spam attempts. Recital 47 also names direct marketing as a possible legitimate interest, but Mary's firm has chosen **not** to do direct marketing — see `_business/sensitive-topic-tracking-policy.md` for the architectural reason.

**Cross-references — backwards:** Recital 40 (lawfulness framework).

**Cross-references — forwards:**
- **Article 6(1)(f)** — the operative provision.
- **Article 21(1)** — the right to object to legitimate-interest processing on grounds related to the visitor's particular situation.
- **Article 21(2)** — the absolute right to object to direct marketing (which doesn't apply on Mary's site because there is no direct marketing).

**Cross-references — sideways:** Recital 49 (network and information security as legitimate interest — second leg for the server-logs analysis); Recital 69 (burden-shift on objection); Recital 70 (right to object to direct marketing).

**Cross-references — down:**
- Privacy policy Section 3(c) — "The firm has a legitimate interest in keeping the website running and free from abuse, which is balanced against your reasonable expectations as a visitor".
- Privacy policy Section 7.7 — the right to object framing.
- `_business/sensitive-topic-tracking-policy.md` — the architectural decision not to do direct marketing on a solicitor's site.

### Recital 49 — Network and information security as legitimate interest

> "The processing of personal data to the extent strictly necessary and proportionate for the purposes of ensuring network and information security, i.e. the ability of a network or an information system to resist, at a given level of confidence, accidental events or unlawful or malicious actions that compromise the availability, authenticity, integrity and confidentiality of stored or transmitted personal data, and the security of the related services offered by, or accessible via, those networks and systems, by public authorities, by computer emergency response teams (CERTs), computer security incident response teams (CSIRTs), by providers of electronic communications networks and services and by providers of security technologies and services, constitutes a legitimate interest of the data controller concerned. This could, for example, include preventing unauthorised access to electronic communications networks and malicious code distribution and stopping 'denial of service' attacks and damage to computer and electronic communication systems."

_Source: same PDF, Recital 49, page 9._

**Plain-English:** processing data to keep your network secure (preventing intrusions, malware, denial-of-service attacks) is explicitly a legitimate interest under Article 6(1)(f).

**Why it matters for Mary's site:** the server access logs need a security justification beyond simply "we want them". Recital 49 provides that justification — the logs detect failed login attempts, automated form-spam, abusive traffic patterns. This is the second leg of the Article 6(1)(f) analysis (Recital 47 is the first leg).

**Cross-references — backwards:** Recital 47 (broader legitimate-interest framework).

**Cross-references — forwards:**
- **Article 6(1)(f)** — operative basis.
- **Article 32** — security of processing (the security measures themselves).

**Cross-references — sideways:** Recital 75 (security-risk enumeration); Recitals 83, 78 (technical and organisational measures).

**Cross-references — down:**
- Privacy policy Section 3(c) — server access logs.
- RoPA Activity 3 — security purposes named.

### Recital 51 — Special-category data merits specific protection

> "Personal data which are, by their nature, particularly sensitive in relation to fundamental rights and freedoms merit specific protection as the context of their processing could create significant risks to the fundamental rights and freedoms. Those personal data should include personal data revealing racial or ethnic origin, whereby the use of the term 'racial origin' in this Regulation does not imply an acceptance by the Union of theories which attempt to determine the existence of separate human races. The processing of photographs should not systematically be considered to be processing of special categories of personal data as they are covered by the definition of biometric data only when processed through a specific technical means allowing the unique identification or authentication of a natural person."

_Source: same PDF, Recital 51, page 10._

**Plain-English:** certain categories of data — race, ethnicity, political opinions, religion, trade union membership, genetic data, biometric data, health data, sex life or sexual orientation — get extra protection under Article 9.

**Why it matters for Mary's firm:** the website does **not** collect special-category data. The firm-side does (medical reports in personal injury; potentially sex-life/orientation in family-law). The recital is the conceptual foundation for Article 9's prohibition-with-exceptions structure.

**Cross-references — backwards:** Recital 10 (general framework for sensitive data); Recital 75 (risks enumeration).

**Cross-references — forwards:**
- **Article 9(1)** — the prohibition.
- **Article 9(2)(f)** — the exception relied on for legal claims (the firm's basis for processing health data in PI matters).

**Cross-references — down:**
- RoPA Activity 4 (client matter files) — names special-category data as a category processed by the firm side.
- Privacy policy intro — silent on special-category data because the website does not collect any.

### Recital 58 — Transparency to the public (plain language for online services)

> "The principle of transparency requires that any information addressed to the public or to the data subject be concise, easily accessible and easy to understand, and that clear and plain language and, additionally, where appropriate, visualisation be used. Such information could be provided in electronic form, for example, when addressed to the public, through a website. This is of particular relevance in situations where the proliferation of actors and the technological complexity of practice make it difficult for the data subject to know and understand whether, by whom and for what purpose personal data relating to him or her are being collected, such as in the case of online advertising. Given that children merit specific protection, any information and communication, where processing is addressed to a child, should be in such a clear and plain language that the child can easily understand."

_Source: same PDF, Recital 58, page 11._

**Plain-English:** information from a controller must be concise, accessible, and in plain language. Visualisation is permitted (e.g. icons). For child-directed processing, the language must be clearer still.

**Why it matters for Mary's site:** the privacy policy is written for a layperson reading on a phone in 10 minutes, not for a lawyer with a textbook. Recital 58 is the textual basis for that drafting choice.

**Cross-references — backwards:** Recitals 39 (transparency principle); 60 (specific information); 61 (point of collection).

**Cross-references — forwards:**
- **Article 12(1)** — operative provision requiring clear and plain language.
- **Article 13** — information to be provided.

**Cross-references — sideways:** Recital 39 (broader transparency principle).

**Cross-references — down:**
- Privacy policy intro and structure — short sentences, no legal vocabulary outside quotes.
- Memory entry `feedback_plain_language.md` — captures the firm's drafting standard.

### Recital 59 — Modalities for exercising data-subject rights

> "Modalities should be provided for facilitating the exercise of the data subject's rights under this Regulation, including mechanisms to request and, if applicable, obtain, free of charge, in particular, access to and rectification or erasure of personal data and the exercise of the right to object. The controller should also provide means for requests to be made electronically, especially where personal data are processed by electronic means. The controller should be obliged to respond to requests from the data subject without undue delay and at the latest within one month and to give reasons where the controller does not intend to comply with any such requests."

_Source: same PDF, Recital 59, page 11._

**Plain-English:** the firm must (a) accept rights requests by email as well as by post; (b) respond free of charge; (c) respond within one month; (d) give reasons if it refuses.

**Why it matters for Mary's site:** the privacy policy explicitly invites email requests ("write to us at the address in Section 2, by post or by email") and commits to the one-month response window. The free-of-charge default is captured in Section 7.2 and Section 7's "How to exercise these rights" closing paragraph. Recital 59 is the textual basis for all four of those choices.

**Cross-references — backwards:** Recital 60 (information at collection — separate from rights-exercise modalities).

**Cross-references — forwards:**
- **Article 12(2)** — controller shall facilitate the exercise of data-subject rights.
- **Article 12(3)** — one-month response, extendable by two months for complex cases.
- **Article 12(5)** — free-of-charge default; manifestly-unfounded carve-out.

**Cross-references — sideways:** Recital 64 (identity verification); Articles 15–22 (the rights themselves).

**Cross-references — down:**
- Privacy policy Section 7 ("How to exercise these rights") — "Write to us at the address in Section 2, by post or by email."
- Privacy policy Section 2 — names the contact methods including email.

### Recital 60 — Information requirements at collection

> "The principles of fair and transparent processing require that the data subject be informed of the existence of the processing operation and its purposes. The controller should provide the data subject with any further information necessary to ensure fair and transparent processing taking into account the specific circumstances and context in which the personal data are processed. Furthermore, the data subject should be informed of the existence of profiling and the consequences of such profiling. Where the personal data are collected from the data subject, the data subject should also be informed whether he or she is obliged to provide the personal data and of the consequences, where he or she does not provide such data."

_Source: same PDF, Recital 60, page 12._

**Plain-English:** tell the visitor what's happening with their data, why, and what happens if they don't provide it.

**Why it matters for Mary's site:** Recital 60 anchors Article 13(2)(e) — the "whether providing data is required" disclosure. The privacy policy Section 10 says: "You are not legally obliged to provide any personal data to use this website. […] The only consequence of not giving us information is that we cannot do something for you that needed it — for example, if you do not submit the contact form, we cannot reply to you. There is no penalty."

**Cross-references — backwards:** Recital 39 (transparency principle); Recital 58 (plain language).

**Cross-references — forwards:**
- **Article 13(1)** — mandatory information to be provided at collection.
- **Article 13(2)(e)** — whether providing data is required.
- **Article 13(2)(f)** — automated decision-making (not relevant — Mary's site does none).

**Cross-references — down:**
- Privacy policy Section 10 — Article 13(2)(e) compliance.
- Privacy policy Section 7.8 — automated decision-making not used; Article 13(2)(f) compliance.

### Recital 61 — Information at the point of collection

> "The information in relation to the processing of personal data relating to the data subject should be given to him or her at the time of collection from the data subject, or, where the personal data are obtained from another source, within a reasonable period, depending on the circumstances of the case. Where personal data can be legitimately disclosed to another recipient, the data subject should be informed when the personal data are first disclosed to the recipient."

_Source: same PDF, Recital 61, page 12._

**Plain-English:** information must be given at the moment data is collected — not buried in a privacy policy the visitor never reads.

**Why it matters for Mary's site:** the contact form has a privacy-policy disclosure line directly above the submit button — that's the firm's compliance with Recital 61. The line was added on 2026-05-04 specifically to satisfy this recital plus Article 13(1). Without that line, a visitor sending the form would not be informed at the point of collection — they would only encounter the privacy policy if they navigated to it separately. Recital 61 makes that compliance gap explicit.

**Cross-references — backwards:** Recital 39 (transparency).

**Cross-references — forwards:**
- **Article 13(1)** — operative obligation, "where personal data relating to a data subject are collected from the data subject, the controller shall, at the time when personal data are obtained, provide the data subject with all of the following information…"
- **Article 13(3)** — further information at the time of further processing.

**Cross-references — down:**
- `src/features/contact-form/components/ContactForm.astro` — the disclosure line "We will use the details you provide to respond to your enquiry. See our Privacy Policy for how we handle your information." This is the Recital 61 / Article 13(1) information delivery.
- Privacy policy intro and Section 3 — the fuller information the link points to.

**Cross-references — out:** DPC walkthrough Sections 13 and 15 (transparency at point of collection).

### Recital 63 — Right of access (scope and limit)

> "A data subject should have the right of access to personal data which have been collected concerning him or her, and to exercise that right easily and at reasonable intervals, in order to be aware of, and verify, the lawfulness of the processing. This includes the right for data subjects to have access to data concerning their health […]. Every data subject should therefore have the right to know and obtain communication in particular with regard to the purposes for which the personal data are processed, where possible the period for which the personal data are processed, the recipients of the personal data, the logic involved in any automatic personal data processing and, at least when based on profiling, the consequences of such processing. […] That right should not adversely affect the rights or freedoms of others, including trade secrets or intellectual property and in particular the copyright protecting the software. However, the result of those considerations should not be a refusal to provide all information to the data subject."

_Source: same PDF, Recital 63, pages 12–13._

**Plain-English:** people can ask for a copy of the data the firm holds about them. Their right doesn't override other people's rights — but the firm can't use "other people's rights" as a blanket excuse to refuse the whole request.

**Why it matters for Mary's firm:** in a solicitor's-firm context, an access request can touch a matter file that mentions other people (a spouse in family law, an opposing party in litigation, a witness, a medical professional). Recital 63 plus Article 15(4) is what allows the firm to **redact** other people's information from the response without **refusing** the response. The firm's position is: redact, don't refuse.

**Cross-references — backwards:** Recital 39 (transparency); Recital 11 (strengthened rights).

**Cross-references — forwards:**
- **Article 15(1)** — operative right of access.
- **Article 15(3)** — copy of personal data; further-copies fee.
- **Article 15(4)** — limit where rights and freedoms of others are affected.

**Cross-references — sideways:** Recital 64 (identity verification); Recital 65 (right to rectification and erasure).

**Cross-references — down:**
- Privacy policy Section 7.2 — "If a single response would reveal another person's personal data — for example, in a family-law matter where the file mentions a spouse — we may have to redact that other person's information first."
- RoPA Activity 4 — client matter files (the most common location of multi-party data).

### Recital 65 — Right to erasure and its limits

> "A data subject should have the right to have personal data concerning him or her rectified and a 'right to be forgotten' where the retention of such data infringes this Regulation or Union or Member State law to which the controller is subject. In particular, a data subject should have the right to have his or her personal data erased and no longer processed where the personal data are no longer necessary in relation to the purposes for which they are collected or otherwise processed, where a data subject has withdrawn his or her consent or objects to the processing of personal data concerning him or her, or where the processing of his or her personal data does not otherwise comply with this Regulation. […] However, the further retention of the personal data should be lawful where it is necessary, for exercising the right of freedom of expression and information, for compliance with a legal obligation, for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, on the grounds of public interest in the area of public health, for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, or for the establishment, exercise or defence of legal claims."

_Source: same PDF, Recital 65, page 13._

**Plain-English:** people can ask to be forgotten — but the firm can keep records it has a legal obligation to keep, and can keep records it needs to defend itself in legal claims.

**Why it matters for Mary's firm:** this is the single most important recital for solicitor's-firm retention policy. Without the Recital 65 / Article 17(3)(b) and (e) carve-outs, a former client could ask for their entire matter file to be deleted, and the firm would have to comply — which would breach Law Society retention rules and leave the firm undefended in any later professional-negligence claim. The carve-outs are what allow Mary's firm to honestly say to a client "we cannot delete your closed matter file for X years because we have a legal obligation to retain it."

**Cross-references — backwards:** Recital 11 (strengthened rights); Recital 39 (data minimisation).

**Cross-references — forwards:**
- **Article 17(1)** — operative right to erasure.
- **Article 17(3)(b)** — compliance with a legal obligation.
- **Article 17(3)(e)** — establishment, exercise or defence of legal claims.

**Cross-references — sideways:** Recital 66 (downstream-controller notification — not relevant to Mary's site as no public publication).

**Cross-references — down:**
- Privacy policy Section 7.4 — "We will do so unless one of the limited exceptions in Article 17(3) applies. For a solicitor's firm, the most relevant exceptions are: Compliance with a legal obligation (Article 17(3)(b)) […] Establishment, exercise, or defence of legal claims (Article 17(3)(e))".
- RoPA Activity 4 — closed matter files retention rationale.

**Cross-references — out:**
- Statute of Limitations 1957 — six-year period for most claims.
- Civil Liability and Courts Act 2004 — two-year period for personal injury.
- Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 Section 55 — five-year minimum AML record retention.
- Law Society of Ireland record-keeping rules.

### Recital 68 — Right to data portability (narrow scope)

> "To further strengthen the control over his or her own data, where the processing of personal data is carried out by automated means, the data subject should also be allowed to receive personal data concerning him or her which he or she has provided to a controller in a structured, commonly used, machine-readable and interoperable format, and to transmit it to another controller. Data controllers should be encouraged to develop interoperable formats that enable data portability. That right should also apply where the data subject provided the personal data on the basis of his or her consent or the processing is necessary for the performance of a contract. It should not apply where processing is based on a legal ground other than consent or contract. By its very nature, that right should not be exercised against controllers processing personal data in the exercise of their public duties. […] Where, in a certain set of personal data, more than one data subject is concerned, the right to receive the personal data should be without prejudice to the rights and freedoms of other data subjects in accordance with this Regulation."

_Source: same PDF, Recital 68, page 13._

**Plain-English:** people can ask for the data they gave to the firm, in a portable format, but only if the firm is processing it under consent or contract — not under other lawful bases.

**Why it matters for Mary's site:** Recital 68 is the source of Article 20's narrow scope. On Mary's site:
- **Contact-form data** — Article 6(1)(b) pre-contractual contract → portable.
- **Server access logs** — Article 6(1)(f) legitimate interest → NOT portable.
- **Cookie consent records** — Article 6(1)(c) legal obligation → NOT portable.

The privacy policy explains this narrowing in plain English so visitors don't make a request expecting more than the law gives them.

**Cross-references — backwards:** Recital 11 (strengthened rights).

**Cross-references — forwards:**
- **Article 20(1)** — operative right of portability.
- **Article 20(3)** — exclusion for public-interest / official-authority processing.
- **Article 20(4)** — rights of others.

**Cross-references — down:** Privacy policy Section 7.6 — names the narrowing explicitly.

### Recital 69 — Right to object (legitimate-interest burden-shift)

> "Where personal data might lawfully be processed because processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, or on grounds of the legitimate interests of a controller or a third party, a data subject should, nevertheless, be entitled to object to the processing of any personal data relating to his or her particular situation. It should be for the controller to demonstrate that its compelling legitimate interest overrides the interests or the fundamental rights and freedoms of the data subject."

_Source: same PDF, Recital 69, page 13._

**Plain-English:** if the firm is processing data under "legitimate interest", a person can object — and the firm has to prove the firm's interest overrides theirs, not the other way round.

**Why it matters for Mary's site:** server access logs are the only Article 6(1)(f) processing on the site. If a visitor objects, the firm must either stop logging that visitor or demonstrate (in writing) that its legitimate interest in security and abuse prevention overrides the visitor's particular situation. The burden is on the firm — visitors don't have to prove their case; the firm has to prove its.

**Cross-references — backwards:** Recital 47 (legitimate interest); Recital 49 (network security).

**Cross-references — forwards:**
- **Article 21(1)** — operative right to object on grounds of particular situation.
- **Article 21(6)** — same right against scientific/historical/statistical processing (not relevant to Mary's site).

**Cross-references — sideways:** Recital 70 (right to object to direct marketing — different and absolute).

**Cross-references — down:**
- Privacy policy Section 7.7 — "If you object, we must stop processing your data in those logs unless we can demonstrate compelling legitimate grounds for continuing — for example, an active investigation into abuse of the site."

### Recital 70 — Right to object to direct marketing (absolute)

> "Where personal data are processed for the purposes of direct marketing, the data subject should have the right to object to such processing, including profiling to the extent that it is related to such direct marketing, whether with regard to initial or further processing, at any time and free of charge. That right should be explicitly brought to the attention of the data subject and presented clearly and separately from any other information."

_Source: same PDF, Recital 70, page 13._

**Plain-English:** if the firm is doing direct marketing, the visitor's right to object is absolute (no balancing test) and must be presented separately from other information.

**Why it matters for Mary's site:** Mary's firm does **not** carry out direct marketing — no newsletter, no email list, no retargeting, no customer-match audiences. So Article 21(2) does not arise. But the privacy policy still has a paragraph explicitly stating that fact, presented separately as Article 21(4) requires for the (non-arising) right.

**Cross-references — backwards:** Recital 11 (strengthened rights).

**Cross-references — forwards:**
- **Article 21(2)** — absolute right to object to direct marketing.
- **Article 21(3)** — once objected, no further direct-marketing processing.
- **Article 21(4)** — right must be presented separately.

**Cross-references — sideways:** Recital 47 (direct marketing as legitimate interest); Recital 69 (general right to object).

**Cross-references — down:**
- Privacy policy Section 7.7 — paragraph explicitly stating no direct marketing, presented separately as 21(4) requires.
- `_business/sensitive-topic-tracking-policy.md` — the operational policy that explains why a sensitive-topic solicitor's firm doesn't do direct marketing.

### Recital 78 — Data protection by design and by default

> "The protection of the rights and freedoms of natural persons with regard to the processing of personal data require that appropriate technical and organisational measures be taken to ensure that the requirements of this Regulation are met. In order to be able to demonstrate compliance with this Regulation, the controller should adopt internal policies and implement measures which meet in particular the principles of data protection by design and data protection by default. Such measures could consist, inter alia, of minimising the processing of personal data, pseudonymising personal data as soon as possible, transparency with regard to the functions and processing of personal data, enabling the data subject to monitor the data processing, enabling the controller to create and improve security features. When developing, designing, selecting and using applications, services and products that are based on the processing of personal data or process personal data to fulfil their task, producers of the products, services and applications should be encouraged to take into account the right to data protection when developing and designing such products, services and applications and, with due regard to the state of the art, to make sure that controllers and processors are able to fulfil their data protection obligations. The principles of data protection by design and by default should also be taken into consideration in the context of public tenders."

_Source: same PDF, Recital 78, page 15._

**Plain-English:** build privacy into the architecture — don't bolt it on. Default to minimal data collection.

**Why it matters for Mary's site:** the firm's no-trackers / no-analytics / no-third-party-widgets architecture is a Recital 78 / Article 25 implementation. Every architectural decision the firm has made is anchored here:
- No Google Analytics → minimisation.
- No Meta Pixel / Google Ads tracking → minimisation + sensitive-topic risk avoidance.
- Cookie banner with auto-blocking → consent-by-design.
- Contact form with no required fields beyond the strictly necessary → minimisation.

**Cross-references — backwards:** Recital 39 (data minimisation principle).

**Cross-references — forwards:**
- **Article 25(1)** — data protection by design.
- **Article 25(2)** — data protection by default.
- **Article 5(1)(c)** — data minimisation.

**Cross-references — sideways:** Recitals 28 and 29 (pseudonymisation as a measure).

**Cross-references — down:**
- Privacy policy Section 12 — "Architectural design: the site is built to collect the minimum personal data needed (Article 25 GDPR — data protection by design and by default). There is no analytics layer, no tracking layer, and no third-party widgets."
- `_business/sensitive-topic-tracking-policy.md` — the architectural decision-making rationale.

### Recital 79 — Allocation of responsibilities (controller / processor / joint controllers)

> "The protection of the rights and freedoms of data subjects as well as the responsibility and liability of controllers and processors, also in relation to the monitoring by and measures of supervisory authorities, requires a clear allocation of the responsibilities under this Regulation, including where a controller determines the purposes and means of the processing jointly with other controllers or where a processing operation is carried out on behalf of a controller."

_Source: same PDF, Recital 79, page 15._

**Plain-English:** every party in the data flow needs to know who is responsible for what.

**Why it matters for Mary's site:** the firm is the controller; Cookiebot, Resend, and Vercel are processors. The firm is **not** in any joint-controller arrangement. The privacy policy makes that allocation explicit so visitors know who to address rights requests to (the firm, not the processors).

**Cross-references — backwards:** Recital 13 (consistent application).

**Cross-references — forwards:**
- **Article 4(7)** — definition of controller.
- **Article 4(8)** — definition of processor.
- **Article 26** — joint controllers.
- **Article 28** — processors.

**Cross-references — down:**
- Privacy policy Section 1 — controller identified.
- Privacy policy Section 4 — processors named, no joint controllers.
- Three DPAs at `legal-compliance/processor-agreements/` — Article 28(3) compliance.

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

> "This should in particular apply to large-scale processing operations which aim to process a considerable amount of personal data at regional, national or supranational level and which could affect a large number of data subjects and which are likely to result in a high risk, for example, on account of their sensitivity, where in accordance with the achieved state of technological knowledge a new technology is used on a large scale as well as to other processing operations which result in a high risk to the rights and freedoms of data subjects, in particular where those operations render it more difficult for data subjects to exercise their rights. […] The processing of personal data should not be considered to be on a large scale if the processing concerns personal data from patients or clients by an individual physician, other health care professional or lawyer. In such cases, a data protection impact assessment should not be mandatory."

_Source: `regulation-2016-679-official-journal-with-recitals-2016-05.pdf`, Recital 91, page 18._

**Plain-English:** an individual solicitor processing personal data from her clients is **not** "large-scale" processing for GDPR purposes. This is the explicit carve-out for individual lawyers.

**Why it matters for Mary's firm:** Recital 91 is the single most important recital for the firm's overall compliance posture. Without it, Mary would arguably be triggered into:
- A mandatory DPIA under Article 35 (because she processes special-category data — health in PI, criminal allegations in family law).
- A mandatory DPO under Article 37(1)(c) (because special-category data is a core activity).

Recital 91 closes both doors. The Recital explicitly says individual-lawyer processing is **not** large-scale, so the "large-scale" trigger in both Article 35 and Article 37 does not fire. This is a Commission-drafted carve-out; it is not a self-serving interpretation by the firm.

**Cross-references — backwards:** Recitals 75 and 76 (risk evaluation); Recital 90 (DPIA detailed assessment).

**Cross-references — forwards:**
- **Article 35** — DPIA obligation; not triggered for Mary's site.
- **Article 37(1)(c)** — DPO obligation; not triggered.
- **Article 9** — special-category data; the carve-out is what allows lawful firm-side processing without DPIA.

**Cross-references — sideways:** Recital 97 (DPO appointment grounds).

**Cross-references — down:**
- Privacy policy Section 2 — names this carve-out: "Article 37 of the GDPR sets out three situations where a DPO is mandatory […] The European Commission's own explanatory text alongside the GDPR confirms this: Recital 91 says that processing of client personal data by an individual lawyer is not considered 'large-scale' for these purposes."
- RoPA Activity 4 — health and criminal-allegation data noted as Article 9 / 10 special-category, with Recital 91 implicit in the "no DPIA required" stance.

**Cross-references — out:** DPC walkthrough Section 17 (Article 30 + DPO + DPIA combined analysis).

### Recital 101 — International transfers — general principle

> "Flows of personal data to and from countries outside the Union and international organisations are necessary for the expansion of international trade and international cooperation. The increase in such flows has raised new challenges and concerns with regard to the protection of personal data. However, when personal data are transferred from the Union to controllers, processors or other recipients in third countries or to international organisations, the level of protection of natural persons ensured in the Union by this Regulation should not be undermined, including in cases of onward transfers of personal data from the third country or international organisation to controllers, processors in the same or another third country or international organisation. In any event, transfers to third countries and international organisations may only be carried out in full compliance with this Regulation. A transfer could take place only if, subject to the other provisions of this Regulation, the conditions laid down in the provisions of this Regulation relating to the transfer of personal data to third countries or international organisations are complied with by the controller or processor."

_Source: same PDF, Recital 101, page 19._

**Plain-English:** when data leaves the EU, the protection it had inside the EU must follow it — including any onward transfers from the third country to other places.

**Why it matters for Mary's site:** the firm has two third-country transfers (Resend in the US for contact-form messages; Vercel in the US for hosting). Recital 101 is the umbrella principle that requires both transfers to maintain EU-level protection through the entire chain — including Resend's and Vercel's own sub-processors. The chosen safeguards (SCCs + DPF for Resend; SCCs for Vercel) include onward-transfer commitments that satisfy this recital.

**Cross-references — backwards:** Recital 6 (cross-border flows); Recital 13 (consistent EU-wide protection).

**Cross-references — forwards:**
- **Article 44** — operative general principle for transfers.
- **Article 45** — adequacy decisions.
- **Article 46** — appropriate safeguards.
- **Article 49** — derogations (not used by Mary's firm).

**Cross-references — sideways:** Recitals 102 (international agreements), 103 (adequacy decisions framework), 104 (adequacy criteria), 108 (SCCs), 114 (continuing rights).

**Cross-references — down:**
- Privacy policy Section 5 — "Both providers' Data Processing Addendums extend the same protection to any sub-processors they may use on their side, so the safeguard covers onward transfers as well as the direct transfer."
- Resend DPA Section 6 + sub-processor list at `legal-compliance/processor-agreements/resend-dpa-2026-05-03.pdf`.
- Vercel DPA Section 12 at `legal-compliance/processor-agreements/vercel-dpa-2026-05-03.pdf`.

### Recital 104 — Adequacy decision criteria

> "In line with the fundamental values on which the Union is founded, in particular the protection of human rights, the Commission should, in its assessment of the third country, or of a territory or specified sector within a third country, take into account how a particular third country respects the rule of law, access to justice as well as international human rights norms and standards and its general and sectoral law, including legislation concerning public security, defence and national security as well as public order and criminal law. The adoption of an adequacy decision with regard to a territory or a specified sector in a third country should take into account clear and objective criteria, such as specific processing activities and the scope of applicable legal standards and legislation in force in the third country. The third country should offer guarantees ensuring an adequate level of protection essentially equivalent to that ensured within the Union, in particular where personal data are processed in one or several specific sectors. In particular, the third country should ensure effective independent data protection supervision and should provide for cooperation mechanisms with the Member States' data protection authorities, and the data subjects should be provided with effective and enforceable rights and effective administrative and judicial redress."

_Source: same PDF, Recital 104, pages 19–20._

**Plain-English:** for the EU to declare a country "adequate" for data transfers, the country must offer essentially equivalent protection, including independent data-protection oversight and effective remedies for individuals.

**Why it matters for Mary's site:** the EU–US Data Privacy Framework (Commission Implementing Decision 2023/1795) is the live adequacy decision Resend self-certifies under. Recital 104 is the criteria framework the Commission applied. Knowing this lets the firm honestly say "the transfer is governed by an EU-level adequacy decision, which the Commission adopted under the criteria set out in Recital 104 of the GDPR."

**Cross-references — backwards:** Recital 101 (general principle).

**Cross-references — forwards:**
- **Article 45(1)** — operative adequacy decision basis.
- **Article 45(2)** — assessment criteria.
- **Article 45(3)** — Commission decisions.

**Cross-references — sideways:** Recital 105 (international commitments); Recital 106 (monitoring); Recital 107 (revocation).

**Cross-references — down:**
- Privacy policy Section 5 — Resend safeguard names the Data Privacy Framework.
- Resend DPA Section 6.7 + 7.3 — DPF self-certification.

**Cross-references — out:** Commission Implementing Decision (EU) 2023/1795 of 10 July 2023 — the EU–US DPF adequacy decision itself.

### Recital 108 — Appropriate safeguards (SCCs)

> "In the absence of an adequacy decision, the controller or processor should take measures to compensate for the lack of data protection in a third country by way of appropriate safeguards for the data subject. Such appropriate safeguards may consist of making use of binding corporate rules, standard data protection clauses adopted by the Commission, standard data protection clauses adopted by a supervisory authority or contractual clauses authorised by a supervisory authority. Those safeguards should ensure compliance with data protection requirements and the rights of the data subjects appropriate to processing within the Union, including the availability of enforceable data subject rights and of effective legal remedies, including to obtain effective administrative or judicial redress and to claim compensation, in the Union or in a third country. They should relate in particular to compliance with the general principles relating to personal data processing, the principles of data protection by design and by default. Transfers may also be carried out by public authorities or bodies with public authorities or bodies in third countries or with international organisations with corresponding duties or functions, including on the basis of provisions to be inserted into administrative arrangements, such as a memorandum of understanding, providing for enforceable and effective rights for data subjects."

_Source: same PDF, Recital 108, page 20._

**Plain-English:** if there's no adequacy decision, the firm must put a contractual safeguard in place — usually the Standard Contractual Clauses adopted by the Commission.

**Why it matters for Mary's site:** the EU SCCs (Commission Decision 2021/914 of 4 June 2021) are the operative safeguard for both Resend and Vercel transfers. Recital 108 is the textual basis. Resend uses SCCs **plus** the EU–US DPF (stacking the two safeguards). Vercel uses SCCs alone (no DPF claim). Both are sufficient.

**Cross-references — backwards:** Recital 101 (general principle); Recital 104 (adequacy criteria).

**Cross-references — forwards:**
- **Article 46(1)** — operative requirement for appropriate safeguards.
- **Article 46(2)(c)** — SCCs adopted by the Commission.
- **Article 46(2)(d)** — SCCs adopted by a supervisory authority.

**Cross-references — sideways:** Recital 109 (SCC supplementation); Recital 110 (binding corporate rules — not relevant to Mary's firm).

**Cross-references — down:**
- Privacy policy Section 5 — names SCCs explicitly: "Commission Decision 2021/914 of 4 June 2021".
- Resend DPA Section 6.2 — SCCs incorporated.
- Vercel DPA Section 12.1 — SCCs incorporated.

**Cross-references — out:** Commission Decision (EU) 2021/914 — the SCCs themselves, in particular Module 2 (Controller to Processor) which is what Resend and Vercel use.

### Recital 114 — Continuing rights for transferred data

> "In any case, where the Commission has taken no decision on the adequate level of data protection in a third country, the controller or processor should make use of solutions that provide data subjects with enforceable and effective rights as regards the processing of their data in the Union once those data have been transferred so that that they will continue to benefit from fundamental rights and safeguards."

_Source: same PDF, Recital 114, page 21._

**Plain-English:** once data leaves the EU, the visitor's GDPR rights still travel with it. The safeguard the firm chose must give the visitor enforceable rights against the recipient.

**Why it matters for Mary's site:** the privacy policy gives visitors the right to request a copy of the safeguard. That's not a courtesy — it's Article 13(1)(f) plus Article 15(1)(c) in operation, anchored in Recital 114. The firm has already prepared the operational answer: extract Section 6.2 of the Resend DPA or Section 12.1 of the Vercel DPA and email it to the requester.

**Cross-references — backwards:** Recital 101 (continuity of EU-level protection); Recital 108 (SCCs framework).

**Cross-references — forwards:**
- **Article 13(1)(f)** — information about transfers, including the safeguard reference.
- **Article 15(1)(c)** — right of access, including recipients.
- **Article 15(2)** — right to be informed of safeguards for third-country transfers.
- **Article 46** — appropriate safeguards.

**Cross-references — down:**
- Privacy policy Section 5 closing paragraph — "You have the right to a copy of the safeguards we rely on. If you want one, contact us at the address in Section 2 and we will send you the relevant DPA section by email."
- Operational answer documented in `_scratch-questions-answers.md` Q1.

### Recital 115 — Foreign judgments and disclosure orders

> "Some third countries adopt laws, regulations and other legal acts which purport to directly regulate the processing activities of natural and legal persons under the jurisdiction of the Member States. This may include judgments of courts or tribunals or decisions of administrative authorities in third countries requiring a controller or processor to transfer or disclose personal data, and which are not based on an international agreement, such as a mutual legal assistance treaty, in force between the requesting third country and the Union or a Member State. The extraterritorial application of those laws, regulations and other legal acts may be in breach of international law and may impede the attainment of the protection of natural persons ensured in the Union by this Regulation. Transfers should only be allowed where the conditions of this Regulation for a transfer to third countries are met. This may be the case, inter alia, where disclosure is necessary for an important ground of public interest recognised in Union or Member State law to which the controller is subject."

_Source: same PDF, Recital 115, page 22._

**Plain-English:** if a US court orders Resend or Vercel to hand over data, the order is only enforceable under EU law if it's grounded in a mutual legal-assistance treaty. Otherwise the EU-side controller (Mary's firm) can resist the disclosure.

**Why it matters for Mary's site:** Vercel's DPA Section 12.2 includes a representation that, as of the DPA signature date, no requests have been received under Section 702 FISA or EO 12333. This is the boundary clause the recital underwrites. If Vercel later receives such a request, the DPA requires Vercel to challenge or refuse it where lawfully possible.

**Cross-references — backwards:** Recital 101 (general principle).

**Cross-references — forwards:**
- **Article 48** — operative provision: third-country judgments enforceable only via international agreement.

**Cross-references — down:** Vercel DPA Section 12.2 representation.

### Recital 141 — Right to lodge a complaint with a supervisory authority

> "Every data subject should have the right to lodge a complaint with a single supervisory authority, in particular in the Member State of his or her habitual residence, and the right to an effective judicial remedy in accordance with Article 47 of the Charter if the data subject considers that his or her rights under this Regulation are infringed or where the supervisory authority does not act on a complaint, partially or wholly rejects or dismisses a complaint or does not act where such action is necessary to protect the rights of the data subject. The investigation following a complaint should be carried out, subject to judicial review, to the extent that is appropriate in the specific case. The supervisory authority should inform the data subject of the progress and the outcome of the complaint within a reasonable period. If the case requires further investigation or coordination with another supervisory authority, intermediate information should be given to the data subject. In order to facilitate the submission of complaints, each supervisory authority should take measures such as providing a complaint submission form which can also be completed electronically, without excluding other means of communication."

_Source: same PDF, Recital 141, pages 25–26._

**Plain-English:** every visitor can lodge a complaint with the DPC (or another EU DPA where applicable). The DPA must take it seriously, investigate, and report back. Visitors also have a separate right to go to court.

**Why it matters for Mary's site:** the privacy policy lists three routes (DPC complaint, court action, compensation). Recital 141 is the textual basis for the DPC complaint route. The DPC's preferred submission form is at `https://www.dataprotection.ie/en/contact/how-contact-us` (verified 2026-05-04).

**Cross-references — backwards:** Recital 11 (strengthened rights).

**Cross-references — forwards:**
- **Article 77** — operative right to lodge complaint.
- **Article 78** — judicial remedy against a supervisory authority.
- **Article 79** — judicial remedy against a controller.

**Cross-references — sideways:** Recital 142 (representation by NGOs); Recital 145 (forum choice); Recital 146 (compensation).

**Cross-references — down:**
- Privacy policy Section 9.1 — DPC complaint route, with verified live address (6 Pembroke Row, Dublin 2, D02 X963) and online submission link.

### Recital 146 — Compensation

> "The controller or processor should compensate any damage which a person may suffer as a result of processing that infringes this Regulation. The controller or processor should be exempt from liability if it proves that it is not in any way responsible for the damage. The concept of damage should be broadly interpreted in the light of the case-law of the Court of Justice in a manner which fully reflects the objectives of this Regulation. This is without prejudice to any claims for damage deriving from the violation of other rules in Union or Member State law. Processing that infringes this Regulation also includes processing that infringes delegated and implementing acts adopted in accordance with this Regulation and Member State law specifying rules of this Regulation. Data subjects should receive full and effective compensation for the damage they have suffered. Where controllers or processors are involved in the same processing, each controller or processor should be held liable for the entire damage. However, where they are joined to the same judicial proceedings, in accordance with Member State law, compensation may be apportioned according to the responsibility of each controller or processor for the damage caused by the processing, provided that full and effective compensation of the data subject who suffered the damage is ensured."

_Source: same PDF, Recital 146, page 27._

**Plain-English:** if the firm breaches GDPR and the visitor suffers harm, they can claim compensation. "Harm" is read broadly — money loss, distress, reputational damage all count.

**Why it matters for Mary's site:** the privacy policy names this as one of the three routes (Section 9.3) and explicitly describes the broad reading: "'Damage' is interpreted broadly under EU law and includes both material damage (financial loss) and non-material damage (distress, reputational harm)."

**Cross-references — backwards:** Recital 141 (general right to remedies).

**Cross-references — forwards:**
- **Article 82(1)** — operative right to compensation.
- **Article 82(4)** — joint and several liability.

**Cross-references — sideways:** Recital 145 (forum choice).

**Cross-references — down:** Privacy policy Section 9.3.

**Cross-references — out:** CJEU **UI v Österreichische Post AG**, Case C-300/21, judgment of 4 May 2023 — established that mere breach of GDPR is not enough; the data subject must show actual damage, but the threshold is low.

### Recital 164 — Professional-secrecy preservation

> "As regards the powers of the supervisory authorities to obtain from the controller or processor access to personal data and access to their premises, Member States may adopt by law, within the limits of this Regulation, specific rules in order to safeguard the professional or other equivalent secrecy obligations, in so far as necessary to reconcile the right to the protection of personal data with an obligation of professional secrecy. This is without prejudice to existing Member State obligations to adopt rules on professional secrecy where required by Union law."

_Source: same PDF, Recital 164, page 30._

**Plain-English:** Member States can pass laws preserving professional-secrecy obligations even when the supervisory authority would otherwise be entitled to compel disclosure. Ireland has done this for solicitors via DPA 2018 Section 162.

**Why it matters for Mary's firm:** without Recital 164 / Article 90 / DPA 2018 Section 162, the DPC could in principle compel Mary to disclose privileged solicitor–client communications during a data-protection investigation. Section 162 says the DPC cannot do that — privilege is preserved against the DPC's compulsory powers. The privacy policy Section 8 makes this explicit.

**Cross-references — backwards:** Recital 11 (strengthened rights including professional duties).

**Cross-references — forwards:**
- **Article 90** — operative provision: Member State rules on professional secrecy.

**Cross-references — sideways:** Recital 173 (relationship with ePrivacy Directive — separate).

**Cross-references — down:**
- Privacy policy Section 8 — privilege paragraph.
- Disclaimer Section 3 — pre-engagement confidentiality boundary.

**Cross-references — out:**
- Data Protection Act 2018 (Ireland), Section 162 — implementation.
- Common-law on legal professional privilege (Ireland).

### Recital 173 — Relationship with the ePrivacy Directive

> "This Regulation should apply to all matters concerning the protection of fundamental rights and freedoms vis-à-vis the processing of personal data which are not subject to specific obligations with the same objective set out in Directive 2002/58/EC of the European Parliament and of the Council, including the obligations on the controller and the rights of natural persons. In order to clarify the relationship between this Regulation and Directive 2002/58/EC, that Directive should be amended accordingly. Once this Regulation is adopted, Directive 2002/58/EC should be reviewed in particular in order to ensure consistency with this Regulation."

_Source: same PDF, Recital 173, page 31._

**Plain-English:** the ePrivacy Directive 2002/58/EC continues to apply alongside GDPR. For cookies, ePrivacy is the lex specialis — that's where the consent rule for cookies actually lives.

**Why it matters for Mary's site:** S.I. 336/2011 (the Irish ePrivacy Regulations) implements Directive 2002/58/EC. Reg 5(3) of S.I. 336/2011 is the operative source of the cookie consent obligation, **not** GDPR Article 7 — although Article 7 is what defines what "consent" looks like.

**Cross-references — forwards:**
- **Article 95** — explicit confirmation that ePrivacy Directive obligations are not duplicated by GDPR.

**Cross-references — out:**
- Directive 2002/58/EC (the ePrivacy Directive).
- S.I. 336/2011 (Irish ePrivacy Regulations).
- DPC walkthrough at `legal-compliance/cookies/dpc-guidance-walkthrough.md`.
- `legal-compliance/cookies/reg-5-compliance-evidence.md` — operational compliance evidence.

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

**Cross-references — backwards:** Recitals 26, 30 (personal data and online identifiers); Recital 32, 42 (consent); Recital 79 (controller / processor allocation); Recital 85 (personal data breach).

**Cross-references — forwards:** every operative Article in the regulation uses these definitions. Particularly:
- 4(1) personal data → Article 2 (material scope); Article 5 (principles).
- 4(7) controller → Article 24 (responsibilities); Article 26 (joint controllers).
- 4(8) processor → Article 28 (processor obligations).
- 4(11) consent → Article 7 (conditions for consent); Article 6(1)(a).
- 4(12) personal data breach → Article 33 (DPC notification); Article 34 (data subject notification).

**Cross-references — down:**
- Privacy policy Section 1 — controller identified.
- Privacy policy Section 4 — processors named.
- Privacy policy Section 7.9 — consent and withdrawal.
- Privacy policy Section 12 — personal data breach commitments.

**Cross-references — out:** CJEU **Breyer** C-582/14 (definition of personal data — IP addresses); CJEU **Planet49** C-673/17 (definition of consent — pre-ticked boxes invalid).

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

**Plain-English:** Article 5 sets out the seven principles every controller must follow. The principles are not optional; they are the framing under which the rest of GDPR operates.

**Why it matters for Mary's site:** Article 5 is the framework against which any future processing decision is checked. When the firm considers a new tool, the question is: does it satisfy each of (a)–(f), and can the firm demonstrate it under (2)?

**Cross-references — backwards:** Recitals 39 (transparency, minimisation, storage limitation), 26 (personal data scope), 28 (pseudonymisation).

**Cross-references — forwards:**
- 5(1)(a) → Article 6 (lawfulness), Article 12 (transparency obligations), Article 13 (information at collection).
- 5(1)(b) purpose limitation → Article 6(4) (further-processing compatibility).
- 5(1)(c) data minimisation → Article 25 (data protection by design and by default).
- 5(1)(d) accuracy → Article 16 (right to rectification).
- 5(1)(e) storage limitation → Article 17 (right to erasure); Article 13(2)(a) (retention disclosure).
- 5(1)(f) integrity and confidentiality → Article 32 (security of processing).
- 5(2) accountability → Article 24 (controller responsibility), Article 30 (RoPA), Article 35 (DPIA).

**Cross-references — sideways:** Article 6 (lawfulness — every processing activity must satisfy 5(1)(a) AND meet an Article 6 basis).

**Cross-references — down:**
- Privacy policy intro and overall plain-English style — 5(1)(a) compliance.
- Privacy policy Section 3 — purposes named per activity (5(1)(b)).
- Privacy policy Section 12 + no-trackers architecture — 5(1)(c) compliance.
- Privacy policy Section 6 — retention periods named per activity (5(1)(e)).
- Privacy policy Section 12 — TLS, encryption, processor DPAs (5(1)(f)).
- RoPA at `record-of-processing-activities.md` — the firm's 5(2) accountability evidence.
- Three DPAs on file — also 5(2) evidence.

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

**Plain-English:** every processing activity needs at least one of six lawful bases. Without a basis, the processing is unlawful.

**Why it matters for Mary's site:** the privacy policy must name a specific Article 6(1) basis for each processing activity. The three activities on Mary's site each rely on a different basis — that's not unusual; it reflects the different reasons for each.

**Cross-references — backwards:** Recitals 40 (lawful processing), 42 (consent), 44 (pre-contractual), 47 (legitimate interest).

**Cross-references — forwards:**
- 6(1)(a) → Article 7 (consent conditions).
- 6(1)(b) → Article 4(11) (definition of consent — distinguished); Recital 44 (pre-contractual).
- 6(1)(c) → Member State law (in Mary's case Reg 5(3) S.I. 336/2011 for cookie consent records, and AML Act 2010 for retention).
- 6(1)(f) → Article 21(1) (right to object); Recitals 47, 49 (legitimate interest scope).

**Cross-references — sideways:** Article 9 (special-category data — additional basis required); Article 13(1)(c) (lawful basis must be disclosed in privacy notice).

**Cross-references — down:**
- Privacy policy Section 3 — names an Article 6(1) basis per activity:
  - 3(a) Cookie consent records → 6(1)(c) legal obligation (Reg 5(3) S.I. 336/2011 + Article 7(1) GDPR).
  - 3(b) Contact-form submissions → 6(1)(b) pre-contractual measures.
  - 3(c) Server access logs → 6(1)(f) legitimate interest.
- RoPA Activities 1, 2, 3 — same lawful bases recorded.

**Cross-references — out:** S.I. 336/2011 Reg 5(3) — the operative source of the cookie consent obligation.

Mary's firm does **not** rely on 6(1)(a) consent for any operational website processing other than non-essential cookies (the consent for which is recorded under 6(1)(c)). 6(1)(d) (vital interests) and 6(1)(e) (public-interest task) do not apply.

### Article 7 — Conditions for consent

> "1. Where processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to processing of his or her personal data.
> 2. If the data subject's consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters […].
> 3. The data subject shall have the right to withdraw his or her consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. […] It shall be as easy to withdraw as to give consent.
> 4. When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract."

_Source: same consolidated PDF, Article 7._

**Plain-English:** if the firm relies on consent, the consent must be (a) demonstrable, (b) clearly distinguishable from other matters, (c) withdrawable as easily as it was given, and (d) freely given (not bundled with unrelated requirements).

**Why it matters for Mary's site:** Article 7 governs the cookie banner. Cookiebot's architecture is built around it — the consent log under 7(1), the clear distinction under 7(2), the floating Privacy icon under 7(3), and the absence of bundled consent under 7(4).

**Cross-references — backwards:** Recitals 32 (clear affirmative act), 42 (freely given, demonstrable), 43 (imbalance of power), 70 (right to object — separately presented).

**Cross-references — forwards:**
- **Article 4(11)** — definition of consent.
- **Article 6(1)(a)** — consent as lawful basis.
- **Article 8** — children's consent.
- **Article 13(2)(c)** — right-to-withdraw must be disclosed in privacy notice.
- **Article 17(1)(b)** — withdrawal triggers erasure right.

**Cross-references — sideways:** Article 21 (right to object — different from withdrawal of consent).

**Cross-references — down:**
- Cookiebot configuration — `data-blockingmode="auto"` in `src/layouts/BaseLayout.astro`. Cookiebot logs each consent decision (7(1)) and provides the floating Privacy icon for withdrawal (7(3)).
- RoPA Activity 1 — the consent log itself.
- Privacy policy Section 7.9 — withdrawal mechanism named.

**Cross-references — out:**
- DPC walkthrough Sections 5, 6, 8 (validity of consent, no pre-ticked, withdrawal).
- EDPB Cookie Banner Taskforce Report Sections 4–7.
- CJEU **Planet49** C-673/17 — pre-ticked checkbox not valid consent.
- CJEU **Orange Romania** C-61/19 — burden of proof on the controller for valid consent.

### Article 9 — Processing of special categories of personal data

Article 9 prohibits processing of special-category data (racial origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, sex life or sexual orientation) except under specific conditions in 9(2)(a)–(j).

**Plain-English:** processing certain sensitive categories of data (health, sex life, criminal allegations, religious beliefs, racial or ethnic origin, biometric data, genetic data, political opinions, trade union membership) is prohibited unless one of the exceptions in 9(2) applies.

**Why it matters for Mary's firm:** the website collects no special-category data. The firm-side does — client matter files contain health data (PI matters, medical history), criminal allegation data (family-law and litigation), and occasionally sex life / sexual orientation data (family-law). The lawful basis the firm relies on for that processing is **Article 9(2)(f) — establishment, exercise or defence of legal claims**, plus (where relevant) **9(2)(c)** vital interests.

**Cross-references — backwards:** Recitals 35 (health data scope), 51 (special categories merit specific protection), 52 (public-interest derogations), 53 (health-purpose processing).

**Cross-references — forwards:**
- **Article 9(2)(f)** — legal claims exception (the firm's primary basis for special-category data).
- **Article 10** — criminal-conviction data (separate, narrower regime).
- **Article 17(3)(e)** — erasure carve-out for legal claims (linked).
- **Article 30** — RoPA must record special-category processing.

**Cross-references — sideways:** Article 35 (DPIA — would be triggered by large-scale special-category processing, but Recital 91 carve-out closes that for individual lawyers).

**Cross-references — down:**
- RoPA Activity 4 — client matter files; names health data and criminal allegation data as Article 9 / 10 categories.
- Privacy policy — silent on special-category data (the website doesn't collect any); the firm-side processing is governed separately.
- Recital 91 — the carve-out that means individual-lawyer processing of these categories is not "large-scale".

### Article 12 — Transparent information, communication and modalities

> "1. The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 and any communication under Articles 15 to 22 and 34 relating to processing to the data subject in a concise, transparent, intelligible and easily accessible form, using clear and plain language […].
> 3. The controller shall provide information on action taken on a request under Articles 15 to 22 to the data subject without undue delay and in any event within one month of receipt of the request. That period may be extended by two further months where necessary, taking into account the complexity and number of the requests. […]
> 5. Information provided under Articles 13 and 14 and any communication and any actions taken under Articles 15 to 22 and 34 shall be provided free of charge. Where requests from a data subject are manifestly unfounded or excessive, in particular because of their repetitive character, the controller may either: (a) charge a reasonable fee […]; or (b) refuse to act on the request. The controller shall bear the burden of demonstrating the manifestly unfounded or excessive character of the request."

_Source: same consolidated PDF, Article 12._

**Plain-English:** when the firm communicates with a data subject — at the point of collection (Article 13/14), in response to a rights request (Articles 15–22), or about a breach (Article 34) — the communication must be concise, clear, and in plain language. Responses must be within one month, free of charge, in the same form as the request where possible.

**Why it matters for Mary's site:** Article 12 is the procedural framework around every visitor-facing data-protection interaction the firm has. The privacy policy itself is an Article 12(1) communication; rights-request responses are Article 12(2)–(3) communications; the breach-notification commitment is an Article 12(1) communication if it ever fires.

**Cross-references — backwards:** Recitals 39, 58 (transparency and plain language); Recital 59 (modalities for rights exercise); Recital 60 (point of collection).

**Cross-references — forwards:**
- Article 13 (information at collection — Article 12(1) framing applies).
- Articles 15–22 (rights — Article 12(3) one-month response applies).
- Article 34 (breach communication — Article 12(1) framing applies).

**Cross-references — sideways:** Article 7 (consent — distinct, but uses the same plain-language standard).

**Cross-references — down:**
- Privacy policy intro and structure — plain-English drafting per 12(1).
- Privacy policy Section 7 — one-month response per 12(3); free of charge per 12(5). The firm chose to drop the manifestly-unfounded carve-out from the visitor-facing text per the editorial decision in `_scratch-questions-answers.md` Q4 — Article 13 doesn't require the firm to advertise the carve-out.

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

**Plain-English:** Article 13 lists the mandatory contents of a privacy notice. Every privacy policy ever written for an Irish website is shaped by it.

**Why it matters for Mary's site:** Article 13 IS the privacy policy. Each section of `privacy-policy-draft.md` maps onto an Article 13 sub-paragraph; together they constitute the firm's compliance.

**Cross-references — backwards:** Recitals 39 (transparency), 58 (plain language), 60 (information requirements), 61 (point of collection), 62 (exemptions where data subject already informed).

**Cross-references — forwards:**
- **Article 12** — the framing rules for how Article 13 information is communicated.
- **Article 14** — the parallel rule for data not collected from the data subject (not relevant — Mary's site collects directly).
- **Article 21(4)** — right-to-object information must be presented separately.
- **Articles 15–22** — the rights Article 13(2)(b) refers to.

**Cross-references — sideways:** Article 26(2) (joint controllers must inform); Article 28 (processor relationships disclosed via Article 13(1)(e)).

**Cross-references — down:** the privacy policy is the firm's Article 13 compliance. Section-by-section mapping above.

**Cross-references — out:** DPC walkthrough Section 15 (Article 13 contents — verbatim Article 13 spec extracted from the local PDF).

### Article 15 — Right of access

> "1. The data subject shall have the right to obtain from the controller confirmation as to whether or not personal data concerning him or her are being processed, and, where that is the case, access to the personal data and the following information: [purposes; categories of personal data; recipients; retention; data-subject rights; right to complain; source if not from the data subject; existence of automated decision-making].
> 3. The controller shall provide a copy of the personal data undergoing processing. For any further copies requested by the data subject, the controller may charge a reasonable fee based on administrative costs. […]
> 4. The right to obtain a copy referred to in paragraph 3 shall not adversely affect the rights and freedoms of others."

_Source: same consolidated PDF, Article 15._

**Plain-English:** the visitor can ask the firm whether it holds data about them, get a copy of that data, and get information about how it's being processed (purposes, recipients, retention, rights, source).

**Why it matters for Mary's site:** Article 15 is the most-used data-subject right in practice. For Mary's firm in particular, access requests are likely to touch matter files mentioning multiple parties — the 15(4) rights-of-others limit is what allows the firm to redact rather than refuse.

**Cross-references — backwards:** Recital 63 (right of access scope and limit); Recital 64 (identity verification).

**Cross-references — forwards:**
- **Article 12** — one-month response, free of charge.
- **Article 16** — rectification right (often follows access).
- **Article 17** — erasure right.
- **Article 20** — data portability (similar but narrower).

**Cross-references — sideways:** Article 9 (special-category data — appears in access responses for matter files).

**Cross-references — down:**
- Privacy policy Section 7.2 — names the right and the redaction-of-others'-data point.
- RoPA Activity 4 — matter files (the most likely location of multi-party data needing 15(4) treatment).

### Article 16 — Right to rectification

> "The data subject shall have the right to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement."

_Source: same consolidated PDF, Article 16._

**Plain-English:** the visitor can ask the firm to fix wrong data or fill in incomplete data.

**Why it matters for Mary's site:** rectification requests are rare on a small website — the only first-party data the website holds is the contact-form submission, which the visitor controls at the moment of submission. Firm-side files are a different question.

**Cross-references — backwards:** Recitals 39 (accuracy principle), 65 (rectification framing).

**Cross-references — forwards:**
- **Article 5(1)(d)** — accuracy principle (the substantive obligation rectification enforces).
- **Article 12** — response procedure.
- **Article 19** — notification to processors of any rectification.

**Cross-references — down:** Privacy policy Section 7.3.

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

**Plain-English:** the visitor can ask the firm to delete their data. The firm has to do it unless one of the carve-outs in 17(3) applies. For a solicitor's firm, the carve-outs do significant work — they are why the firm cannot simply delete a closed matter file on demand.

**Why it matters for Mary's firm:** without the 17(3)(b) and (e) carve-outs, a former client could ask for their entire matter file to be deleted, and the firm would have to comply — breaching Law Society retention rules and leaving the firm undefended in any later professional-negligence claim. Article 17(3) is the door that lets the firm honestly say "we cannot delete this for X years."

**Cross-references — backwards:** Recital 65 (right to erasure scope and limits); Recital 66 (downstream-controller notification — not relevant for Mary's site).

**Cross-references — forwards:**
- **Article 6** — when a lawful basis is consent and the consent is withdrawn, 17(1)(b) erasure may follow (subject to 17(3) carve-outs).
- **Article 19** — the firm must propagate the erasure to processors (Cookiebot, Resend, hosting).
- **Article 21** — when an objection is sustained, 17(1)(c) erasure may follow.

**Cross-references — sideways:** Article 18 (restriction — sometimes the right thing instead of erasure when the carve-outs apply).

**Cross-references — down:**
- Privacy policy Section 7.4 — names the 17(3)(b) and (e) carve-outs explicitly.
- RoPA Activity 4 — closed-matter retention rationale.

**Cross-references — out:**
- Statute of Limitations 1957 — six-year period.
- Civil Liability and Courts Act 2004 — two-year period for personal injury.
- Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 Section 55 — five-year minimum AML record retention.
- Law Society of Ireland record-keeping rules.

### Article 18 — Right to restriction of processing

> "1. The data subject shall have the right to obtain from the controller restriction of processing where one of the following applies: [accuracy contested; processing unlawful but data subject opposes erasure; controller no longer needs data but data subject needs it for legal claims; objection pending verification of legitimate grounds]."

_Source: same consolidated PDF, Article 18._

**Plain-English:** the visitor can ask the firm to "freeze" their data — keep it but not actively process it — in a few specific situations. Useful when erasure is too much but continued processing is too much.

**Why it matters for Mary's site:** restriction is the natural fallback when erasure is blocked by 17(3). Example: a former client asks for erasure of their matter file; the firm refuses under 17(3)(b); the client can ask for restriction instead, freezing the file unless one of the limited 18(2) processing reasons applies (consent, legal claims, others' rights, public interest).

**Cross-references — backwards:** Recital 67 (methods of restricting processing — operational guidance).

**Cross-references — forwards:**
- **Article 17** — restriction often follows where erasure is blocked.
- **Article 19** — restriction must be communicated to processors.

**Cross-references — down:** Privacy policy Section 7.5.

### Article 19 — Notification obligation regarding rectification, erasure or restriction

> "The controller shall communicate any rectification or erasure of personal data or restriction of processing carried out in accordance with Article 16, Article 17(1) and Article 18 to each recipient to whom the personal data have been disclosed, unless this proves impossible or involves disproportionate effort."

_Source: same consolidated PDF, Article 19._

**Plain-English:** when the firm changes data on a visitor's request (rectification, erasure, restriction), the firm has to tell its processors so they make the same change — unless that's impossible or disproportionate.

**Why it matters for Mary's site:** if a visitor exercises Article 16, 17, or 18 against the firm, the firm has three processors that may need to be notified: Cookiebot (consent records), Resend (contact-form messages), and Vercel (server logs). Article 19 means the firm cannot just update its own records and call the rights request done.

**Cross-references — backwards:** Recital 66 (downstream-controller notification — broader; Article 19 is the firm-to-its-processor version).

**Cross-references — forwards:**
- **Articles 16, 17, 18** — the rights that trigger Article 19.
- **Article 28** — the processor relationships through which the notification flows.

**Cross-references — down:**
- Privacy policy Section 7.4 closing — "if we erase, restrict, or correct data on your request, we will pass the change on to our service providers (Cookiebot, Resend, hosting)".
- Three DPAs at `legal-compliance/processor-agreements/` — each commits the processor to assisting with rights requests under Article 28(3)(e).

### Article 20 — Right to data portability

> "1. The data subject shall have the right to receive the personal data concerning him or her, which he or she has provided to a controller, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, where:
> (a) the processing is based on consent pursuant to point (a) of Article 6(1) or point (a) of Article 9(2) or on a contract pursuant to point (b) of Article 6(1); and
> (b) the processing is carried out by automated means."

_Source: same consolidated PDF, Article 20._

**Plain-English:** the visitor can ask for a portable copy of the data they gave the firm, in a structured machine-readable format, where the lawful basis is consent or contract.

**Why it matters for Mary's site:** Article 20 is narrower than visitors usually expect. The privacy policy spells out the narrowing so visitors don't make a request expecting more than the law gives them. On Mary's site:
- Contact-form data → portable (6(1)(b) contract).
- Server access logs → NOT portable (6(1)(f) legitimate interest).
- Cookie consent records → NOT portable (6(1)(c) legal obligation).

**Cross-references — backwards:** Recital 68 (narrow scope explained).

**Cross-references — forwards:**
- **Article 6(1)(a)** and **6(1)(b)** — the only two lawful bases that trigger portability.
- **Article 15** — right of access is broader; portability is a subset.

**Cross-references — sideways:** Article 16 (rectification — broader; doesn't depend on lawful basis).

**Cross-references — down:** Privacy policy Section 7.6 — names the narrowing explicitly.

### Article 21 — Right to object

> "1. The data subject shall have the right to object, on grounds relating to his or her particular situation, at any time to processing of personal data concerning him or her which is based on point (e) or (f) of Article 6(1), including profiling based on those provisions. The controller shall no longer process the personal data unless the controller demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defence of legal claims.
> 2. Where personal data are processed for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing, which includes profiling to the extent that it is related to such direct marketing.
> 3. Where the data subject objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.
> 4. At the latest at the time of the first communication with the data subject, the right referred to in paragraphs 1 and 2 shall be explicitly brought to the attention of the data subject and shall be presented clearly and separately from any other information."

_Source: same consolidated PDF, Article 21._

**Plain-English:** the visitor can object to legitimate-interest processing, with the firm bearing the burden of proving its interest overrides theirs (21(1)). The visitor can object absolutely to direct marketing (21(2)). Both rights must be presented separately and clearly to the visitor (21(4)).

**Why it matters for Mary's site:** the only legitimate-interest processing on the site is server access logs (Article 6(1)(f)). If a visitor objects, the firm has to either stop processing their data in the logs or demonstrate compelling legitimate grounds. Mary's firm does **not** carry out direct marketing — 21(2) does not arise — but the policy still presents the right separately as 21(4) requires.

**Cross-references — backwards:** Recitals 69 (legitimate-interest burden-shift), 70 (direct-marketing absolute right + presentation rule).

**Cross-references — forwards:**
- **Article 6(1)(f)** — the lawful basis 21(1) operates against.
- **Article 17(1)(c)** — sustained objection triggers erasure right.
- **Article 13(2)(b)** — right to object must be disclosed in privacy notice.

**Cross-references — sideways:** Article 22 (automated decision-making — separate but related set of rights).

**Cross-references — down:**
- Privacy policy Section 7.7 — its own paragraph break per 21(4); explicit "no direct marketing" statement.
- `_business/sensitive-topic-tracking-policy.md` — the architectural decision not to do direct marketing.

### Article 25 — Data protection by design and by default

> "1. Taking into account the state of the art, the cost of implementation and the nature, scope, context and purposes of processing as well as the risks of varying likelihood and severity for rights and freedoms of natural persons posed by the processing, the controller shall, both at the time of the determination of the means for processing and at the time of the processing itself, implement appropriate technical and organisational measures, such as pseudonymisation, which are designed to implement data-protection principles, such as data minimisation, in an effective manner and to integrate the necessary safeguards into the processing in order to meet the requirements of this Regulation and protect the rights of data subjects.
> 2. The controller shall implement appropriate technical and organisational measures for ensuring that, by default, only personal data which are necessary for each specific purpose of the processing are processed."

_Source: same consolidated PDF, Article 25._

**Plain-English:** privacy must be baked into the system from the start. By default, only the data needed for the specific purpose should be processed.

**Why it matters for Mary's site:** every architectural decision the firm has made flows from Article 25 — no analytics, no tracking pixels, no third-party widgets, no marketing automation. The firm could lawfully run a more data-hungry stack (with the appropriate Article 6 bases and consents) but has chosen not to. Article 25 is the textual basis for that choice.

**Cross-references — backwards:** Recitals 78 (data protection by design), 28, 29 (pseudonymisation).

**Cross-references — forwards:**
- **Article 5(1)(c)** — data minimisation principle (Article 25 operationalises it).
- **Article 32** — security of processing (related but distinct).
- **Article 35** — DPIA (a Article 25 implementation tool).

**Cross-references — down:**
- Privacy policy Section 12 — explicit reference to Article 25.
- `_business/sensitive-topic-tracking-policy.md` — the architectural decision-making rationale.
- Cookiebot configuration — auto-blocking of non-essential scripts.

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

**Plain-English:** when the firm uses a third-party service that processes personal data on the firm's behalf, the relationship has to be governed by a written contract that covers eight specific clauses listed in 28(3)(a)–(h).

**Why it matters for Mary's site:** the firm has three processors (Cookiebot, Resend, Vercel). Each requires an Article 28(3)-compliant DPA on file — not optional, and the absence of one would be an enforcement risk independent of any other compliance failure.

**Cross-references — backwards:** Recitals 79 (allocation of responsibilities), 81 (processor obligations).

**Cross-references — forwards:**
- **Article 4(8)** — definition of processor.
- **Article 26** — joint controllers (distinct relationship).
- **Article 32** — Article 28(3)(c) requires Article 32 measures.
- **Article 33** — Article 28(3)(f) requires processor breach assistance.

**Cross-references — sideways:** Article 30(2) (processors keep their own RoPA — not Mary's concern as controller).

**Cross-references — down:**
- Three DPAs at `legal-compliance/processor-agreements/`:
  - `cookiebot-dpa-2022-01.pdf` — Usercentrics A/S, EU.
  - `resend-dpa-2026-05-03.pdf` — Plus Five Five Inc., US, SCCs + DPF.
  - `vercel-dpa-2026-05-03.pdf` — Vercel Inc., US, SCCs only.
- Each DPA covers all eight Article 28(3)(a)–(h) clauses (verified during file review).
- Privacy policy Section 4 — names the processors and the Article 28(3) framing.
- RoPA Activities 1, 2, 3 — name the processor and reference the DPA.

**Cross-references — out:** DPC walkthrough Section 17 (controller-processor contract requirements).

### Article 30 — Records of processing activities

Article 30(1) sets out the seven mandatory headings for the RoPA: (a) controller details, (b) purposes, (c) categories of data subjects + personal data, (d) recipients, (e) third-country transfers, (f) retention periods, (g) security measures.

Article 30(5) provides an under-250-employees carve-out **except** where processing is not occasional, may include special-category data, or is risky. The carve-out **does not apply** to Mary's firm because the processing is not occasional and may include special-category data (firm-side health and criminal-allegation data).

**Plain-English:** the firm must maintain a written record of its processing activities, covering seven specific headings.

**Why it matters for Mary's firm:** Article 30(5)'s under-250-employees carve-out doesn't help — the firm processes special-category data (PI health data; family-law allegation data) and the processing is not occasional. So the firm needs a full RoPA.

**Cross-references — backwards:** Recital 13 (under-250 carve-out + its limits), Recital 82 (RoPA cooperation duty).

**Cross-references — forwards:**
- **Article 5(2)** — accountability principle (Article 30 operationalises it).
- **Article 30(2)** — processor's RoPA (separate from controller's).
- **Article 30(4)** — RoPA must be made available to the supervisory authority on request.

**Cross-references — sideways:** Article 28 (processor relationships recorded in 30(1)(d)); Article 32 (security measures recorded in 30(1)(g)).

**Cross-references — down:**
- `record-of-processing-activities.md` — the firm's RoPA. Eleven activities documented (three website + eight firm-wide-template).
- `law-society-of-ireland-ropa-template-controller.docx` — alternative artefact Mary may use instead of (or alongside) the in-project markdown.

**Cross-references — out:**
- DPC walkthrough Section 17 — Article 30 obligation analysis.
- DPC accountability obligation page (verified live 2026-05-04) — narrative guidance the firm follows.

### Article 32 — Security of processing

> "1. Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, the controller and the processor shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including inter alia as appropriate:
> (a) the pseudonymisation and encryption of personal data;
> (b) the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;
> (c) the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident;
> (d) a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for ensuring the security of the processing."

_Source: same consolidated PDF, Article 32._

**Plain-English:** the firm must have technical and organisational measures appropriate to the risk. The four examples in 32(1)(a)–(d) — encryption, ongoing CIA, restoration after incidents, regular testing — are non-exhaustive but representative.

**Why it matters for Mary's site:** the firm's Article 32 implementation is layered:
- **In transit** — TLS on every page and form submission.
- **At rest** — provider-side encryption (Cookiebot, Resend, Vercel all encrypt).
- **Access control** — firm email accounts, restricted access.
- **Processor security** — every processor under Article 28(3) DPA with security commitments.
- **Architectural** — minimum data collection (Article 25 design).

**Cross-references — backwards:** Recitals 39 (integrity and confidentiality), 49 (network security as legitimate interest), 75 (risk to rights), 78 (data protection by design), 83 (security risk evaluation).

**Cross-references — forwards:**
- **Article 5(1)(f)** — integrity and confidentiality principle.
- **Article 25** — data protection by design (related layer).
- **Article 33** — breach notification (security failure triggers).
- **Article 28(3)(c)** — processor must implement Article 32 measures.

**Cross-references — down:**
- Privacy policy Section 12 — names the measures.
- Three DPAs at `legal-compliance/processor-agreements/` — each documents processor-side security measures.

### Article 33 — Notification of a personal data breach to the supervisory authority

> "1. In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons. Where the notification to the supervisory authority is not made within 72 hours, it shall be accompanied by reasons for the delay."

_Source: same consolidated PDF, Article 33._

**Plain-English:** if a personal data breach happens, the firm must notify the DPC within 72 hours unless the breach is unlikely to result in a risk to anyone's rights or freedoms.

**Why it matters for Mary's site:** the privacy policy commits to the 72-hour window. Operationally this means the firm needs a process — who detects the breach, who decides whether the risk threshold is met, who lodges the notification with the DPC.

**Cross-references — backwards:** Recitals 85 (breach notification — without undue delay, 72 hours), 87 (breach detection), 88 (breach format).

**Cross-references — forwards:**
- **Article 4(12)** — definition of personal data breach.
- **Article 32** — security measures the breach defeats.
- **Article 34** — visitor notification when high-risk.

**Cross-references — sideways:** Article 28(3)(f) (processor must assist with breach notifications).

**Cross-references — down:**
- Privacy policy Section 12 — 72-hour DPC notification commitment.
- DPC contact page at `https://www.dataprotection.ie/en/contact/how-contact-us` — the breach-notification submission route.

### Article 34 — Communication of a personal data breach to the data subject

> "1. When the personal data breach is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall communicate the personal data breach to the data subject without undue delay."

_Source: same consolidated PDF, Article 34._

**Plain-English:** if a breach is high-risk to the visitor specifically, the firm must also tell the visitor directly — describing the breach and what they can do to mitigate the impact.

**Why it matters for Mary's site:** the high-risk threshold is what triggers visitor-side notification on top of DPC-side notification. Whether a breach is "high-risk" is a judgement call; the firm has to be ready to make it quickly.

**Cross-references — backwards:** Recital 86 (communication to data subject); Recital 87 (assessment of risk).

**Cross-references — forwards:**
- **Article 33** — DPC notification (parallel obligation).
- **Article 32** — security measures the breach defeats.
- **Article 12** — communication standard (clear, plain language).

**Cross-references — down:** Privacy policy Section 12 — visitor-side notification commitment when high-risk.

### Article 37 — Designation of the data protection officer

> "1. The controller and the processor shall designate a data protection officer in any case where:
> (a) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity;
> (b) the core activities of the controller or the processor consist of processing operations which, by virtue of their nature, their scope and/or their purposes, require regular and systematic monitoring of data subjects on a large scale; or
> (c) the core activities of the controller or the processor consist of processing on a large scale of special categories of data pursuant to Article 9 or personal data relating to criminal convictions and offences referred to in Article 10."

_Source: same consolidated PDF, Article 37._

**Plain-English:** a Data Protection Officer is mandatory in three situations: public authorities, large-scale regular monitoring, or large-scale special-category processing. Outside those three, a DPO is voluntary.

**Why it matters for Mary's firm:** none of the three triggers fire — (a) not a public authority; (b) not large-scale monitoring; (c) not large-scale special-category processing because Recital 91 explicitly excludes individual-lawyer processing from "large-scale". The firm has not appointed a DPO. The named contact for data-protection matters is Mary herself (or whoever the firm nominates).

**Cross-references — backwards:** Recitals 91 (individual-lawyer carve-out), 97 (DPO grounds).

**Cross-references — forwards:**
- **Article 38** — DPO position (not relevant — no DPO).
- **Article 39** — DPO tasks (not relevant).
- **Article 13(1)(b)** — DPO contact must be disclosed in privacy notice if appointed; otherwise the controller's contact suffices.

**Cross-references — down:**
- Privacy policy Section 2 — explicit reasoning: "We are not required to appoint a Data Protection Officer (DPO) and we have not appointed one. […] Recital 91 says that processing of client personal data by an individual lawyer is not considered 'large-scale' for these purposes."

### Article 44 — General principle for transfers

> "Any transfer of personal data which are undergoing processing or are intended for processing after transfer to a third country or to an international organisation shall take place only if, subject to the other provisions of this Regulation, the conditions laid down in this Chapter are complied with by the controller and processor, including for onward transfers of personal data from the third country or an international organisation to another third country or to another international organisation. All provisions in this Chapter shall be applied in order to ensure that the level of protection of natural persons guaranteed by this Regulation is not undermined."

_Source: same consolidated PDF, Article 44._

**Plain-English:** all transfers of personal data outside the EU/EEA are governed by Chapter V's framework. Onward transfers from the third country to elsewhere are also covered.

**Why it matters for Mary's site:** the umbrella principle — Resend (US) and Vercel (US) transfers must satisfy Chapter V end-to-end, including any sub-processor onward transfers.

**Cross-references — backwards:** Recital 101 (general principle).

**Cross-references — forwards:**
- **Article 45** — adequacy decisions.
- **Article 46** — appropriate safeguards (SCCs).
- **Article 49** — derogations (not used by Mary).

**Cross-references — down:**
- Privacy policy Section 5 — names both transfers and the safeguards.
- Resend DPA Section 6 — sub-processor onward-transfer framework.
- Vercel DPA Section 12 — same.

### Article 45 — Transfers on the basis of an adequacy decision

> "1. A transfer of personal data to a third country or an international organisation may take place where the Commission has decided that the third country, a territory or one or more specified sectors within that third country, or the international organisation in question ensures an adequate level of protection. Such a transfer shall not require any specific authorisation."

_Source: same consolidated PDF, Article 45._

**Plain-English:** if the Commission has decided a third country provides "adequate" protection, transfers there don't need extra safeguards.

**Why it matters for Mary's site:** Resend is self-certified under the EU–US Data Privacy Framework (Commission Implementing Decision 2023/1795). That gives Resend a Article 45 adequacy basis on top of the SCCs. Either alone would be sufficient; both together make the safeguard especially robust.

**Cross-references — backwards:** Recital 104 (adequacy criteria), 105–107 (monitoring and revocation).

**Cross-references — forwards:**
- **Article 44** — general principle (adequacy is one route).
- **Article 46** — alternative safeguards if no adequacy decision.

**Cross-references — down:**
- Privacy policy Section 5 — names DPF.
- Resend DPA Sections 6.7, 7.3 — DPF self-certification.

**Cross-references — out:** Commission Implementing Decision (EU) 2023/1795 — the operative adequacy decision.

### Article 46 — Transfers subject to appropriate safeguards

> "1. In the absence of a decision pursuant to Article 45(3), a controller or processor may transfer personal data to a third country or an international organisation only if the controller or processor has provided appropriate safeguards, and on condition that enforceable data subject rights and effective legal remedies for data subjects are available.
> 2. The appropriate safeguards referred to in paragraph 1 may be provided for, without requiring any specific authorisation from a supervisory authority, by:
> (c) standard data protection clauses adopted by the Commission in accordance with the examination procedure referred to in Article 93(2)."

_Source: same consolidated PDF, Article 46._

**Plain-English:** without an adequacy decision, transfers need a contractual safeguard — most commonly the Commission's Standard Contractual Clauses (SCCs).

**Why it matters for Mary's site:** the EU SCCs (Commission Decision 2021/914 of 4 June 2021) are the operative safeguard for both transfers. Resend uses SCCs **plus** DPF (stacked safeguards). Vercel uses SCCs alone (no DPF claim).

**Cross-references — backwards:** Recital 108 (appropriate safeguards), Recitals 109 (SCC supplementation), 110 (binding corporate rules).

**Cross-references — forwards:**
- **Article 44** — general principle.
- **Article 45** — alternative if adequacy decision exists.
- **Article 49** — derogations route (not used).

**Cross-references — down:**
- Privacy policy Section 5 — names SCCs explicitly.
- Resend DPA Section 6.2 — SCCs incorporated.
- Vercel DPA Section 12.1 — SCCs incorporated.

**Cross-references — out:**
- Commission Decision (EU) 2021/914 of 4 June 2021 — the SCCs themselves.
- CJEU **Schrems II** (Case C-311/18, 16 July 2020) — the case that invalidated Privacy Shield and required SCCs to be supplemented with case-by-case transfer impact assessments. The current EU–US DPF (post-Schrems II) plus SCCs is the regulator-accepted post-Schrems II configuration.

### Article 48 — Transfers or disclosures not authorised by Union law

> "Any judgment of a court or tribunal and any decision of an administrative authority of a third country requiring a controller or processor to transfer or disclose personal data may only be recognised or enforceable in any manner if based on an international agreement, such as a mutual legal assistance treaty, in force between the requesting third country and the Union or a Member State, without prejudice to other grounds for transfer pursuant to this Chapter."

_Source: same consolidated PDF, Article 48._

**Plain-English:** if a third-country court orders Resend or Vercel to hand over data, the order is enforceable in the EU only if there's a mutual legal-assistance treaty backing it.

**Why it matters for Mary's site:** Vercel's DPA Section 12.2 contains a representation that, as of the DPA signature date, no requests under Section 702 FISA or EO 12333 have been received. If they later are, the DPA requires Vercel to challenge the request where lawfully possible. Article 48 is the textual basis.

**Cross-references — backwards:** Recital 115 (foreign judgments and disclosure orders).

**Cross-references — forwards:**
- **Article 46** — appropriate safeguards (SCCs include US-government-access representations as a Schrems II response).
- **Article 49** — derogations (not used).

**Cross-references — down:** Vercel DPA Section 12.2 representation.

**Cross-references — out:** CJEU **Schrems II** C-311/18 — the case driving the heightened post-Privacy Shield safeguards including this kind of clause.

### Article 77 — Right to lodge a complaint with a supervisory authority

> "1. Without prejudice to any other administrative or judicial remedy, every data subject shall have the right to lodge a complaint with a supervisory authority, in particular in the Member State of his or her habitual residence, place of work or place of the alleged infringement if the data subject considers that the processing of personal data relating to him or her infringes this Regulation."

_Source: same consolidated PDF, Article 77._

**Plain-English:** every visitor can complain to a supervisory authority (the DPC for Ireland), and visitors based outside Ireland can complain to their own country's DPA instead.

**Why it matters for Mary's site:** the privacy policy gives the DPC's verified live address (6 Pembroke Row, Dublin 2, D02 X963), the online complaint form URL, and notes that visitors based outside Ireland can complain to their habitual-residence DPA. Article 77 is the textual basis.

**Cross-references — backwards:** Recital 141 (right to lodge complaint).

**Cross-references — forwards:**
- **Article 78** — judicial remedy against a supervisory authority.
- **Article 79** — judicial remedy against the firm directly.
- **Article 80** — representation by NGOs (visitors can mandate one).

**Cross-references — down:** Privacy policy Section 9.1.

**Cross-references — out:** DPC contact page at `https://www.dataprotection.ie/en/contact/how-contact-us` — verified live 2026-05-04.

### Article 79 — Right to an effective judicial remedy against a controller or processor

> "1. Without prejudice to any available administrative or non-judicial remedy, including the right to lodge a complaint with a supervisory authority pursuant to Article 77, each data subject shall have the right to an effective judicial remedy where he or she considers that his or her rights under this Regulation have been infringed as a result of the processing of his or her personal data in non-compliance with this Regulation.
> 2. Proceedings against a controller or a processor shall be brought before the courts of the Member State where the controller or processor has an establishment. Alternatively, such proceedings may be brought before the courts of the Member State where the data subject has his or her habitual residence […]."

_Source: same consolidated PDF, Article 79._

**Plain-English:** the visitor can take the firm to court directly, independently of (or alongside) any DPC complaint. They can choose Irish courts or their own country's courts.

**Why it matters for Mary's site:** the privacy policy presents this as a separate route from the DPC complaint and the compensation claim — visitors don't have to exhaust the DPC route before going to court.

**Cross-references — backwards:** Recital 141 (right to judicial remedy).

**Cross-references — forwards:**
- **Article 77** — DPC complaint (parallel route).
- **Article 78** — remedy against supervisory authority.
- **Article 82** — compensation (linked).

**Cross-references — sideways:** Recital 145 (forum choice).

**Cross-references — down:** Privacy policy Section 9.2.

### Article 82 — Right to compensation and liability

> "1. Any person who has suffered material or non-material damage as a result of an infringement of this Regulation shall have the right to receive compensation from the controller or processor for the damage suffered.
> 4. Where more than one controller or processor, or both a controller and a processor, are involved in the same processing and where they are, under paragraphs 2 and 3, responsible for any damage caused by processing, each controller or processor shall be held liable for the entire damage in order to ensure effective compensation of the data subject."

_Source: same consolidated PDF, Article 82._

**Plain-English:** if the visitor has suffered damage from a GDPR breach, they can claim compensation. "Damage" is read broadly — money loss, distress, reputational harm all count.

**Why it matters for Mary's site:** the privacy policy names this as one of the three routes (Section 9.3) and explicitly describes the broad reading. The joint-and-several liability framing under 82(4) means the visitor doesn't have to pursue every controller and processor separately.

**Cross-references — backwards:** Recital 146 (compensation framing).

**Cross-references — forwards:**
- **Article 77** — complaint route (alternative).
- **Article 79** — court route (linked).

**Cross-references — sideways:** Article 83 (administrative fines — separate; this is regulator-side).

**Cross-references — down:** Privacy policy Section 9.3.

**Cross-references — out:** CJEU **UI v Österreichische Post AG** C-300/21 — visitor must show actual damage; threshold low but non-zero.

### Article 90 — Obligations of secrecy

> "1. Member States may adopt specific rules to set out the powers of the supervisory authorities laid down in points (e) and (f) of Article 58(1) in relation to controllers or processors that are subject, under Union or Member State law or rules established by national competent bodies, to an obligation of professional secrecy or other equivalent obligations of secrecy where this is necessary and proportionate to reconcile the right to the protection of personal data with the obligation of secrecy. Those rules shall apply only with regard to personal data which the controller or processor has received as a result of or has obtained in an activity covered by that obligation of secrecy."

_Source: same consolidated PDF, Article 90._

**Plain-English:** Member States can pass laws preserving professional-secrecy obligations (like solicitor–client privilege) even where the supervisory authority would otherwise be entitled to compel disclosure. Ireland has done this for solicitors via DPA 2018 Section 162.

**Why it matters for Mary's firm:** without Article 90 / Recital 164 / DPA 2018 Section 162, the DPC could in principle compel Mary to disclose privileged communications during a data-protection investigation. The Irish implementation closes that door — privilege is preserved against DPC compulsion.

**Cross-references — backwards:** Recital 164 (professional-secrecy preservation).

**Cross-references — forwards:**
- **Article 58** — supervisory authority powers (which Article 90 carves out for privileged data).

**Cross-references — sideways:** Article 23 (Member State restrictions framework).

**Cross-references — down:**
- Privacy policy Section 8 — the privilege paragraph.
- Disclaimer Section 3 — pre-engagement confidentiality boundary.

**Cross-references — out:**
- **Data Protection Act 2018 (Ireland), Section 162** — Irish implementation.
- Common-law on legal professional privilege (Ireland).

---

## Summary — what the walkthrough covers

- **Recitals fully covered:** 26, 30, 32, 35, 39, 40, 42, 44, 47, 49, 51, 58, 59, 60, 61, 63, 65, 68, 69, 70, 78, 79, 91, 101, 104, 108, 114, 115, 141, 146, 164, 173 (32 of 173).
- **Articles fully covered:** 4, 5, 6, 7, 9 (brief), 12, 13, 15, 16, 17, 18, 19, 20, 21, 25, 28, 30, 32, 33, 34, 37, 44, 45, 46, 48, 77, 79, 82, 90 (29 of 99).
- **All other Recitals and Articles** are in the Not-Applicable Index above with a one-line reason.

This is the complete audit trail demonstrating that every part of GDPR was considered for Mary's website. Where a part applies, it is anchored either to a specific privacy-policy section, to the RoPA file, or to a processor DPA. Where it does not apply, the reason is stated.

---

_Last rebuilt 2026-05-04. Next review: alongside any privacy-policy revision or whenever a new processing activity is added to the website._
