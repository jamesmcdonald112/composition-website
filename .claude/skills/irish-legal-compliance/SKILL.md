# Irish Legal Compliance Review Skill

Based on S.I. No. 644/2020 — Legal Services Regulation Act 2015 (Advertising) Regulations 2020.
Run alongside `.claude/skills/copy/SKILL.md` and `.claude/skills/ai-isms/SKILL.md` — apply this skill last, as a filter pass after copy quality is established.

**If unsure about any regulation or requirement, reference these sources in order:**
1. `legal-compliance/website-content-review-checklist.md` — plain-English explanations and examples for each rule
2. `legal-compliance/Legal Services Regulation Act 2015 (Advertising) Regulations 2020.md` — exact text of the regulations as enacted
3. Official online source: https://www.irishstatutebook.ie/eli/2020/si/644/made/en/print

---

## REG 4 — LIMITATIONS ON ALL ADVERTISING

### 4(a)(i) — Disrepute
**Applies to:** Every page and config file.

**Test:** Would a senior Law Society member find this embarrassing or harmful to trust in solicitors generally?

**Flag:**
- Combative or aggressive tone framing legal work as a fight
- Sensationalist or hustle-style language
- Casual slang on serious subject matter (accidents, bereavement, family breakdown)

**Violation examples:**
- "Injured and fed up? Let's fight back."
- Anything implying legal services are a product to be hustled

### 4(a)(ii) — Bad Taste
**Applies to:** Every page and config file.

**Test:** Would this copy appear in a quality national newspaper without causing offence?

**Flag:**
- Dark humour or jokes about accidents, injuries, or death
- Graphic descriptions of injury scenarios used as a hook
- Flippant tone on sensitive subject matter (wills, bereavement, family breakdown)

**Violation examples:**
- Humorous copy that makes light of road traffic accidents or workplace injuries
- Flippant language on a wills or estate administration page

### 4(a)(iii) — Attacks on Other Solicitors
**Applies to:** Every page and config file.

**Flag:**
- "unlike other firms..."
- "where other solicitors fail..."
- Any comparison that positions a named or unnamed competitor negatively

**Violation examples:**
- "Other firms charge hidden fees — we don't."
- "Where other solicitors give up, we keep fighting."

### 4(a)(iv) — False or Misleading Statements
**Applies to:** Every page and config file.

**Flag:**
- "expert in..." — unless a formal specialist accreditation is held
- "leading solicitor", "top-rated", "best" — unverifiable superlatives
- "guaranteed result" or any implied certainty about outcomes
- Any statistic or claim that cannot be verified

**Violation examples:**
- "Kilkenny's leading personal injury solicitor" — unprovable
- "We guarantee the best outcome for your case" — false certainty
- "Over 100 cases handled" — only a violation if the actual number is lower

### 4(a)(vi) — Encouragement to Make Personal Injury Claims
**Applies to:** Every page and config file — especially personal injury, road traffic, and employment content.

**Note:** Listing personal injury as a service area is allowed. Soliciting people to make a claim is not. This applies equally to all specific terms — "motor accidents", "workplace accidents", "public place accidents" — not just the phrase "personal injuries".

**Flag these phrases:**
- "Have you been injured?"
- "You may be entitled to compensation"
- "you may have a claim"
- "find out if you can claim"
- "accident wasn't your fault"
- "been in an accident?"
- "hurt at work?"
- "don't suffer in silence"
- "get the compensation you deserve"
- "you could be owed money"

**Violation examples:**
- "Have you been injured at work? You may be entitled to compensation — contact us today."
- "Road traffic accident? Find out if you have a claim."
- "Don't suffer in silence — you may have a right to compensation."

**Compliant alternative:**
- "We advise on personal injury matters, including road traffic accidents and workplace incidents."

---

## REG 5 — CLIENT REFERENCES AND TESTIMONIALS

### 5(a)(i) — Prior Written Consent Required
**Applies to:** Any content referencing a specific client, case, or transaction.

**Flag:**
- Named client quotes
- Any quote attributable to a specific person
- Case references that identify a client even without naming them ("a Kilkenny woman who...")
- Google Business reviews republished on the site
- Any mention of a specific case outcome

**Violation examples:**
- Publishing a Google review on the site without written permission from that reviewer
- "We helped John win his employment case" — even with name changed, if identifiable
- Quoting a client's relief at winning without their written consent

### 5(a)(ii) — No Exaggeration of the Solicitor's Role
**Applies to:** Any content describing involvement in a case or transaction.

**Flag:**
- Claims of sole credit for outcomes involving other parties or counsel
- Routine matters described as exceptional achievements
- "We won..." when outcome was a settlement or involved a barrister

**Violation examples:**
- "Mary single-handedly secured our family home" — if other solicitors or counsel were involved
- Taking full credit for a court outcome primarily secured by a barrister

### 5(b) — Exemptions from Consent Requirement
These do **not** require consent — do not flag them:
- Publicly available information (e.g. a court judgment already on public record)
- The bare fact that Mary acted in proceedings (e.g. "We acted in this case")

**Exception:** Both exemptions are void if using the information would compromise a duty of confidentiality.

---

## REG 6 — PERSONAL INJURY AND CONTENTIOUS BUSINESS

### 6(a) — Cost Warning — Presence Check
**Applies to:** Any page mentioning personal injuries, road traffic accidents, workplace accidents, medical negligence, employment disputes, debt collection, family court, litigation, arbitration, or mediation.

**Check:** Confirm `<LegalCostWarning />` is present in the site-wide footer. For any new service page covering the above content types, confirm the warning also appears inline on that page.

**Required warning text:**
> "In personal injury and litigation matters, if your case is unsuccessful you may be liable for the other party's legal costs. See Section 149 of the Legal Services Regulation Act 2015."

**Flag:** Any page covering the above content types where the warning is absent.

### 6(b) — "No Win No Fee" Ban
**Applies to:** Personal injury content only — any page referencing personal injuries, road traffic accidents, workplace accidents, or similar.

**Flag these phrases:**
- "no win no fee"
- "no foal no fee"
- "free first consultation"
- "free of charge"
- "at no cost"
- "without charge"
- "costs nothing"
- "nothing to pay"
- "only pay if you win"
- "pay nothing unless successful"
- Any phrase implying personal injury services cost the client nothing

**Violation examples:**
- "We handle your personal injury case on a no win no fee basis."
- "Free first consultation for road traffic accident claims."
- "Only pay if your claim is successful."

### 6(c) — Compensation Amounts — PIAB Citation Only
**Applies to:** All advertising.

**Flag — prohibited (invented or implied figures):**
- Any Euro amount (€) not attributed to the PIAB Book of Quantum
- "up to €X", "average award of €X", "typical payout", "you could receive €X"
- "Based on our experience, you could get €X"
- "We typically secure €X for similar cases"

**Permitted — PIAB-cited figures with clear attribution:**
- "According to the PIAB Book of Quantum, [injury] ranges from €X to €X"
- Any official PIAB range, clearly attributed

**Reference:** https://www.injuries.ie/eng/forms-guides/book-of-quantum.pdf
**Local copy:** `legal-compliance/book-of-quantum.pdf`

**Violation examples:**
- "Road traffic accident victims can receive up to €50,000."
- "We typically secure €25,000–€50,000 for similar cases."

---

## REG 7 — CONTENTIOUS BUSINESS COST RISK

### 7 — No Risk-Free Litigation Claims
**Applies to:** Any page mentioning contentious business — employment disputes, debt collection, family court, litigation, arbitration, mediation, personal injury.

**Flag:**
- "worry-free"
- "risk-free"
- "no risk"
- "nothing to lose"
- "without risk"
- "guaranteed"
- "no financial exposure"
- "fully protected"
- "no hidden costs" (in litigation contexts)
- "we absorb all the risk"
- "you won't be out of pocket"

**Narrow exception:** Only permitted to say there is no cost risk if that actually represents the legal position in that specific type of proceeding — this is rare.

**Violation examples:**
- "Pursue your employment claim worry-free."
- "We take on your debt collection case with no risk to you."
- "Nothing to lose — contact us about your tribunal claim."

---

## REG 8 — SUCCESS RATE CLAIMS

### 8 — No Success Rate Claims
**Applies to:** Every page and config file — absolute ban, no exceptions.

**Important:** The ban applies even if the statistic is true and verifiable. A proven 90% win rate still cannot be published.

**Flag:**
- "success rate"
- "win rate"
- "% of cases"
- "undefeated"
- "consistently win"
- "track record of success"
- "successful outcomes"
- "we win cases"
- "proven track record"
- "results-driven"
- "outcome-focused"
- "X cases won" / "X successful claims" (trust-strip stats)
- Any percentage or statistic implying winning frequency

**Violation examples:**
- "We have a 94% success rate in personal injury cases." — prohibited even if true
- "Undefeated in employment tribunal claims."
- "We consistently win cases for our clients."

**Compliant alternatives:**
- "Extensive experience in personal injury litigation."
- "We handle complex employment law matters."
- "Specialist knowledge in road traffic accident claims."

---

## REG 9 — EXTERNAL LINKS

### 9 — Responsibility for Linked Content
**Applies to:** Any external link on the site.

**Rule:** If a linked page can reasonably be construed as promoting the firm, the solicitor is personally responsible for that content — as if they published it. Responsibility persists even if the linked page changes after the link was added.

**Flag — links to audit before publishing:**
- Social media profiles (LinkedIn, Facebook, Instagram, X/Twitter)
- Google Business profile
- News articles mentioning the firm
- Legal directories or member listing pages
- Partner or referral websites
- Any third-party page referencing the firm by name

**For each flagged link, check the linked page against:**
- Reg 8 — success rate claims
- Reg 6(b) — "no win no fee" language
- Reg 5 — client references without consent
- Reg 4(a)(vi) — injury claim encouragement

**Safe links — do not flag:**
- gov.ie, Courts Service, LSRA, Law Society of Ireland
- irishstatutebook.ie
- Purely informational resources with no promotional content about the firm

**Google Business profile — do not link to it from the site.** Reviewers cannot be controlled, so any link creates a permanent liability. The profile functions independently via Google Search without a site link. To feature reviews on the site, written consent must be obtained from each reviewer individually and any case outcome language removed.

**Get Directions link — use a Google Maps address search only**, not a link to the business listing or profile. A pure address search is navigational — the user must actively choose to click through to the business profile. That click is their action, not a link you published. Linking directly to the business listing (which shows the reviews panel) is a grey area and should be avoided.

**Ongoing:** Re-audit all external links every 6 months.

---

## REG 10 — EDUCATIONAL CONTENT EXEMPTION

### 10 — Educational Content — Exemption Check
**Rule:** Genuine educational content (articles, books, blog posts, media interviews) is exempt from all advertising regulations. Flag any educational content and run the three-question check below — if the exemption fails, all other regulations apply.

**Three-question check:**
1. Is it genuinely informational rather than promotional?
2. Is any part of it paid for or sponsored?
3. Has it been published repeatedly in substantially the same form across multiple platforms?

If question 1 is no, or question 2 or 3 is yes — treat it as an advertisement and apply all regulations.

**Flag and check these content types:**
- Blog posts or legal articles on the site
- Media interviews or podcast appearances linked from the site
- Books or guides distributed by the firm
- Any content described as "educational" or "informational"

**Exemption fails — violation examples:**
- Free distribution of a legal guide primarily to attract personal injury clients — Reg 10(b)
- A paid newspaper article or sponsored podcast segment — paid placement strips exemption
- The same article republished across the website, a legal directory, and LinkedIn — repeated republication — Reg 10(c)

**Exemption holds — compliant examples:**
- An unpaid article in a legal journal explaining changes to employment law
- An unpaid radio interview explaining new rental legislation
- A book sold commercially on a legal topic

---

## REG 11 — COMPLIANCE RESPONSIBILITIES

### 11(a) — Firm Identity — Presence Check
**Applies to:** Every page.

**Check:** The firm name must be clearly visible on every page — header, footer, or both. No page should be able to stand alone as an advertisement without identifying who published it.

**Flag:** Any page where the firm name is absent or unclear.

### 11(b) — Personal Responsibility
Compliance cannot be delegated. The solicitor is personally liable for every piece of content on the site regardless of who wrote or built it. When flagging violations, do not soften the finding because the content was written by a developer, copywriter, or third party.

### 11(c) — Mentioning Another Solicitor Requires Written Consent
**Flag:** Any named reference to another solicitor or firm — referral arrangements, collaborations, "in association with" language, or any co-marketing. Prior written consent from that solicitor is required before publishing.

### 11(f) — Record Keeping — 12 Months Mandatory
Three categories of record must be kept for at least 12 months from the latest date of publication and produced to the LSRA on request:

1. **Copy of every advertisement** — dated screenshots of every live page
2. **Written instructions for publication** — briefs given to developers, copywriters, or agencies
3. **Consent records** — client consents (Reg 5(a)(i)) and solicitor consents (Reg 11(c))

**Note:** The 12 months runs from the latest date of publication. While a page is still live, the clock has not stopped — a current screenshot must be on file.

### 11(e) — Partnership Liability
**Note:** In any firm with more than one solicitor, every partner is personally liable for all advertising compliance — not just the partner who approved the content. If reviewing content for a partnership, flag this: all partners must sign off, not just one. Not applicable to sole practitioners.
**Flag:** Any named reference to another solicitor or firm — referral arrangements, collaborations, "in association with" language, or any co-marketing. Prior written consent from that solicitor is required before publishing.
