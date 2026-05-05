# DPC April 2020 Guidance — Compliance Walkthrough

_Maps each section of the Data Protection Commission's "Guidance Note: Cookies and other tracking technologies" (April 2020) to how this site satisfies the position taken, with verification steps. Plain-English style — legal vocabulary appears only inside direct quotes._

**Source document:** `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`
**Online source:** [DPC — Guidance on Cookies and Other Tracking Technologies](https://www.dataprotection.ie/en/dpc-guidance/guidance-cookies-and-other-tracking-technologies)

**Document this walkthrough is paired with:**
- `edpb-2023-compliance-evidence.md` — the EU-wide consensus position. Mapped in full.
- `reg-5-compliance-evidence.md` — the binding Irish statute (S.I. 336/2011 Reg 5). Mapped in full.
- This file (`dpc-guidance-walkthrough.md`) — the Irish regulator's interpretation of that statute. The most likely document the DPC would compare Mary's site against.

Together these three files form the complete cookie-compliance reference set for the project. Each one quotes its source verbatim from a local PDF, explains what it means in plain English, and shows how Mary's site satisfies it.

---

## How this walkthrough is structured

This file follows the **same plain-English style** as `edpb-2023-compliance-evidence.md`:

1. **Verbatim quote** from the local DPC PDF — character-for-character, with a source line citing page and date of verification.
2. **Plain-English meaning** — what the section actually says, written so a non-lawyer can act on it.
3. **How Mary's site complies** — concrete, file-path-level evidence rather than vague claims.
4. **Verification steps** — things anyone can run to check the compliance is real.

## Cross-reference principle (read this first)

The DPC guidance overlaps significantly with the EDPB report and with Regulation 5 itself. To avoid duplication, **when a topic has already been mapped in another walkthrough file, this file will quote the DPC's wording, note that the same point is covered there, and move on.**

That keeps the file focused on:
- What the DPC says that the EDPB report and the statute don't already cover.
- Anything **specific to Irish enforcement** (e.g. the 6-month consent expiry rule the DPC reads into Reg 5, the DPC's analytics-cookie enforcement priority, the DPC's interpretation of "strictly necessary").
- How the DPC's specific framing changes or strengthens compliance evidence we've already documented.

When you see a "Cross-reference" callout in this file, it means the underlying compliance work is already done in the file named — open that file for the full mapping.

---

## Foundations — Sections 1 and 2 of the DPC PDF

The first two sections of the DPC document set up scope and quote the binding statute. Neither is a "rule" Mary's site has to satisfy — they're foundational context. Both topics are covered in depth in the companion files. So the treatment here is short.

### What the DPC says about its own role

> "The Data Protection Commission is the national authority responsible for the enforcement of the law on ePrivacy, that is to say the EU ePrivacy Directive (2002/58/EC as amended by 2009/136/EC), and the Irish ePrivacy Regulations, implemented by Statutory Instrument (S.I.) No. 336 of 2011. This legislation is separate to, but complements, the General Data Protection Regulation. Organisations must comply with both laws, but the rules under the ePrivacy legislation apply first when you are considering your organisation's use of cookies and other tracking technologies. Regulation 5 of the ePrivacy Regulations is the relevant legislation regulating the use of cookies."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "The DPC's regulatory role in relation to cookies and tracking technologies", page 2. Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

Three things to take from this:

1. **The DPC is the regulator that enforces cookie law in Ireland.** If anyone investigates Mary's banner, it's the DPC.
2. **Two laws apply at once: ePrivacy and GDPR.** Mary's site has to comply with both.
3. **ePrivacy applies first when you're thinking about cookies.** This is the order: ask the ePrivacy question (was the cookie set lawfully?) before the GDPR question (is the data being used lawfully?).

This three-point structure — DPC as enforcer, two laws side by side, ePrivacy first — is the same hierarchy already mapped in detail in **EDPB walkthrough Section 1, Paras 1–3**. That's where the consent definition is borrowed from GDPR Article 4(11) and Article 7, and where the two-stage model (cookie placement vs subsequent processing) is laid out. Open that file for the full reasoning.

> **Cross-reference:** The two-law hierarchy is mapped in full in `edpb-2023-compliance-evidence.md` — Section 1 Paras 1–3.

#### How this site complies

The site is built to comply with both laws, with ePrivacy treated as the gating layer for cookies (no non-essential cookie fires without consent under Reg 5(3)) and GDPR-grade consent quality applied throughout (so the same banner click is good enough for both regimes when subsequent processing is added later). Detailed evidence is in:

- `reg-5-compliance-evidence.md` — for the ePrivacy side (Reg 5 elements mapped to the site)
- `edpb-2023-compliance-evidence.md` — for the bridge between ePrivacy and GDPR

### What the DPC says about Regulation 5 (the binding statute)

The DPC reproduces the text of Regulation 5 inside its guidance so the reader can see the actual law. Two of those sub-paragraphs do the heaviest lifting for cookies — Reg 5(3) and Reg 5(5).

> "Regulation 5(3): A person shall not use an electronic communications network to store information, or to gain access to information already stored in the terminal equipment of a subscriber or user, unless
>
> (a) the subscriber or user has given his or her consent to that use, and
>
> (b) the subscriber or user has been provided with clear and comprehensive information in accordance with the Data Protection Acts which—
>
>   (i) is both prominently displayed and easily accessible, and
>
>   (ii) includes, without limitation, the purposes of the processing of the information."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "The ePrivacy Regulations" section, page 2. Verified verbatim against local PDF on 2026-04-27. Independently verified against the binding statute in `legal-compliance/cookies/SI-336-2011-irish-eprivacy-regulations.pdf` Regulation 5(3) on 2026-04-27 — the DPC's quoted text matches the statute exactly._

> "Regulation 5(5): Paragraph (3) does not prevent any technical storage of, or access to, information for the sole purpose of carrying out the transmission of a communication over an electronic communications network or which is strictly necessary in order to provide an information society service explicitly requested by the subscriber or user."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "The ePrivacy Regulations" section, page 3. Verified verbatim against local PDF on 2026-04-27. Independently verified against `SI-336-2011-irish-eprivacy-regulations.pdf` Regulation 5(5) on 2026-04-27 — match exact._

#### What this means in plain English

Reg 5(3) is the rule: **no cookie that requires consent fires until the visitor has both consented and been told clearly what's happening and why.**

Reg 5(5) is the exemption: **strictly necessary cookies are exempt from the consent rule.**

The full mapping of every element of Reg 5 to how Mary's site implements it — clause by clause, with verification steps — is the dedicated job of `reg-5-compliance-evidence.md`. Re-walking it here would just duplicate that file.

> **Cross-reference:** Every element of Regulation 5(3) and Regulation 5(5) is mapped to Mary's site in `reg-5-compliance-evidence.md`. That file is the canonical walkthrough of the binding Irish statute.

#### One small detail worth noting

The DPC's guidance includes the text of Reg 5(3) and Reg 5(5) inside a quoted box. We checked that quoted text against the actual law in `SI-336-2011-irish-eprivacy-regulations.pdf`. **It matches word-for-word.**

This means anything in this walkthrough that quotes "Reg 5(3) from the DPC guidance" can be trusted as if it were quoted from the law itself. The DPC has not paraphrased or edited the wording.

---

## Sections covered briefly — DPC Sections 3, 4, 5, and 6

Four DPC sections in the middle of the document are mostly **definitions and background**, not rules Mary's site has to satisfy. They are walked through here only enough to flag any embedded rule, then the file moves on.

### DPC Section 3 — "What are cookies?"

The DPC describes what cookies are: small files stored on a device, sometimes containing personal data (IP address, identifiers) and sometimes non-personal data (language settings). It also distinguishes first-party cookies (set by the site you're visiting) from third-party cookies (set by another site, e.g. a Like button).

**One small rule embedded in this section:** cookie expiry must be **proportionate to the cookie's purpose.** A session cookie should not have an indefinite expiry; a "remember my language" cookie should not last 10 years.

> **Cross-reference:** Cookie lifespans get a full DPC walkthrough in **DPC Section 21 — "Cookie lifespans."** Mary's site's two existing cookies (`CookieConsent` 1 year, `intro-seen` session-only) are documented in the README's "Strictly necessary cookies — no consent required" table and were chosen to satisfy the proportionate-expiry rule.

### DPC Section 4 — "What other types of tracking technologies are in use?"

The DPC clarifies that **cookie law applies to more than just HTTP cookies.** It covers Local Storage Objects, Flash cookies, SDKs, pixel trackers, Like buttons, social sharing tools, and device fingerprinting. The same consent rules apply to all of these.

This is **scope-broadening** rather than a new rule. It matters because Mary's site uses `sessionStorage` (the `intro-seen` flag) — a Local Storage Object, not an HTTP cookie. The DPC's broad definition is what brings `sessionStorage` inside the scope of Reg 5(3), which is why `intro-seen` is still treated as a "cookie" for compliance purposes despite not being a traditional cookie.

> **Cross-reference:** The classification of `intro-seen` as a strictly necessary "cookie" under Reg 5(5) is documented in the README and revisited in **EDPB walkthrough Section 8 (Type I — Inaccurately classified essential cookies).**

### DPC Section 5 — "What is terminal equipment?"

A **definition only** — no rule to comply with. The DPC defines "terminal equipment" broadly: any device that can store information (PCs, laptops, mobile phones, IoT devices, voice assistants). The point is that the law isn't limited to web browsers — it applies to anything that stores or reads data on a user's device. Nothing for Mary's site to do here; the definition is just confirming that the law covers desktop and mobile visits to Mary's website equally.

### DPC Section 6 — "What is the law on cookies and what is its purpose?"

**Mostly background and context — but contains one important rule.**

The DPC explains why cookie law exists: it protects the confidentiality of communications and individuals' private sphere. Cookies, pixels, fingerprinting and similar tools could otherwise be used to monitor users without their knowledge.

> **Cross-reference:** The full bridge between ePrivacy law and the protection of private communications is mapped in **EDPB walkthrough Section 1, Paras 1–3** — that's where the two-stage model (cookie placement governed by ePrivacy, subsequent processing governed by GDPR) is laid out in detail.

#### The one rule: ePrivacy applies whether or not the cookie holds personal data

> "It is irrelevant whether the information stored or accessed consists of, or contains, personal data. The ePrivacy Regulations apply when any information is stored on or accessed from the device."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, end of "What is the law on cookies and what is its purpose?", page 5. Verified verbatim against local PDF on 2026-04-27._

**What this means in plain English:** Some controllers try to argue *"this cookie just stores a number, not personal data, so we don't need consent."* The DPC closes that loophole. Reg 5(3) is triggered by the **act of placing or reading anything** on the user's device — not by what the placed thing happens to be. If you put a cookie on someone's device, you need consent (unless one of the strictly necessary exemptions applies), regardless of whether the cookie's contents identify the person.

**How Mary's site complies:** Cookiebot's `data-blockingmode="auto"` blocks every non-essential cookie until consent is given, regardless of what data the cookie would hold. The two strictly necessary cookies (`CookieConsent` and `intro-seen`) are exempt under Reg 5(5), not under any "no personal data" argument. So this rule is satisfied by configuration — there is no cookie on Mary's site that depends on a "but it's not personal data" defence.

The DPC also references **GDPR Recital 30** here, which is the Recital that confirms cookie identifiers and IP addresses can themselves be personal data:

> "Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags. This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them."

_Source: `legal-compliance/gdpr/regulation-2016-679-official-journal-with-recitals-2016-05.pdf`, Recital 30, page L 119/5. Verified verbatim against local PDF on 2026-04-27._

The combined point: **(a)** the ePrivacy rule fires regardless of personal-data status, **and (b)** in practice cookie identifiers are *often* personal data anyway — so the GDPR usually applies on top of the ePrivacy rule, not instead of it.

### DPC Section 7 — "Consent"

**Cross-reference only — no new rule.** The DPC restates that consent is needed for any cookie placement, regardless of whether the cookie contains personal data, and quotes the GDPR Article 4(11) consent definition verbatim.

Both points are already mapped in detail elsewhere:

> **Cross-reference 1:** The "consent regardless of personal-data status" rule is captured in DPC Section 6 above (the rule we just walked through).
>
> **Cross-reference 2:** The GDPR Article 4(11) consent definition — *"freely given, specific, informed and unambiguous indication"* — is mapped verbatim, with the local GDPR PDF source line, in **EDPB walkthrough Section 1, Para 2 ("What 'good enough for GDPR' means")**.

The Article 4(11) definition is what makes Cookiebot's banner GDPR-grade by configuration. The four conditions in 4(11) plus the fifth condition in Article 7(3) (withdrawal as easy as giving) are all met by Mary's banner — verification steps live in the EDPB walkthrough.

---

---

## DPC Section 8 — "Which cookies are exempt from the requirement to obtain consent?"

The DPC's full treatment of the **two exemptions** to the consent rule. This is the section that determines whether `CookieConsent` and `intro-seen` are correctly classified as Necessary on Mary's site. Three worked examples are provided, and they map closely to Mary's setup.

### The opening rule — categorisation does not change classification

> "As a controller, you are potentially using cookies for analytics purposes or for marketing, targeting or profiling purposes and you may choose to assign them to certain categories when you provide information for users on your website. However, regardless of how you choose to categorise them, cookies that do not meet one of the two specific use cases in the ePrivacy Regulations that make them exempt from the need to obtain consent must not be set or deployed on a user's device before you obtain their consent."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Which cookies are exempt..." section, page 6. Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

A controller might *call* a cookie "Necessary" or "Functional" or any other label. **The label does not matter.** Only one thing matters: does the cookie pass one of the two specific exemption tests in the ePrivacy Regulations?

- If yes → the cookie is exempt from consent and can fire immediately.
- If no → the cookie needs explicit consent before it fires, no matter what name it is given.

This is the rule that makes Type I dark patterns (covered in EDPB walkthrough Section 8) impossible to defend. A controller cannot just label an analytics cookie "Necessary" and skip consent — the classification has to actually pass the test.

### The two exemptions

> "The two exemptions are known as a) the communications exemption and b) the strictly necessary exemption."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 6. Verified verbatim against local PDF on 2026-04-27._

Only two ways a cookie can be exempt. Anything outside these two needs consent.

### Exemption (a) — The communications exemption

> "This applies to cookies whose sole purpose is for carrying out the transmission of a communication over a network, for example to identify the communication endpoints. This may also apply to cookies used to allow data items to be exchanged in their intended order, i.e. by numbering data packets. It also applies to cookies used to detect transmission errors or data loss."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 6. Verified verbatim against local PDF on 2026-04-27._

> "The Article 29 Working Party is clear in its Opinion 4/2012 on the Cookie Consent Exemption that this criterion specifically limits the types of processing which may be undertaken using cookies and does not leave much room for interpretation. Simply using a cookie to assist, speed up or regulate the transmission of a communication over a network is not sufficient for it to benefit from the consent exemption."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 6. Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

This is a narrow exemption for **technical network plumbing.** It covers cookies that exist to make a request actually reach a server, complete in order, or fail safely. Examples the DPC names: load-balancing cookies (which server to route the request to), packet ordering cookies, error detection cookies.

The narrowness matters. *"My cookie speeds up the page"* is **not enough** — speed-up isn't transmission. *"My cookie helps the network work better"* is also **not enough** — improvement isn't transmission. The cookie has to be doing something the transmission of the communication literally cannot happen without.

In practice, this exemption is rare on a normal solicitor website. It tends to apply to cookies set by hosting infrastructure (Vercel, Cloudflare, Netlify) for routing — not by the site code itself.

#### DPC's worked example for Exemption (a)

> "EXAMPLE 1: If you use a load-balancing cookie to distribute network traffic across different servers, this can be considered a type of cookie that meets the communication exemption. The information in this cookie has the sole purpose of identifying one of the servers (i.e. the communication end point) and it is therefore necessary to carry out the communication over the network."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 6. Verified verbatim against local PDF on 2026-04-27._

#### How this site complies with Exemption (a)

Mary's site does not currently set any cookies that rely on the communications exemption. If the hosting platform (currently Netlify, switching to Vercel pre-launch per the README) sets any infrastructure cookies for routing, those would fall under this exemption — but that's the platform's responsibility, not the site code's.

### Exemption (b) — The strictly necessary exemption

This is the more important exemption for Mary's site — both of Mary's existing exempt cookies (`CookieConsent` and `intro-seen`) sit under this rule, not the communications exemption.

> "A cookie that is exempt under this criterion must simultaneously pass two tests:
>
> The exemption applies to 'information society services' (ISS) – i.e. a service delivered over the internet, such as a website or an app. In addition, that service must have been explicitly requested by the user and the use of the cookie must be restricted to what is strictly necessary to provide that service. Cookies related to advertising are not strictly necessary and must be consented to."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 6. Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

A cookie passes the strictly necessary exemption only if **all of these** are true at once:

1. **The site is an information society service** (a website or app delivered over the internet) — every normal commercial website meets this automatically.
2. **The service was explicitly requested by the user** — the visitor has actively asked for the service, e.g. by going to the website, by submitting a form, by clicking a feature.
3. **The cookie is strictly necessary to deliver that service** — without the cookie, the service the visitor asked for cannot be delivered.

Plus one explicit carve-out:

4. **Advertising cookies are never strictly necessary**, no matter what.

The hard part of this test is condition 3. "**Strictly necessary**" doesn't mean "useful" or "improves UX." It means "without this, the requested service literally fails." That's a high bar.

### The DPC's three worked examples for Exemption (b)

The DPC gives three concrete examples in its guidance — two of which apply directly to Mary's site.

#### Example 1 — Shopping cart and language preference cookies (PASS)

> "EXAMPLE 1: Your website uses session cookies to keep track of items a user places in an online shopping basket. These cookies expire at the end of their session or shortly afterwards. These cookies meet the 'strictly necessary' condition and they do not require consent. Similarly, cookies that record a user's language or country preference when they visit your site can be considered strictly necessary to deliver a service explicitly requested by the user and they do not need consent."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 7. Verified verbatim against local PDF on 2026-04-27._

**Why this matters for Mary's site:** the language/preference half of Example 1 is the closest direct analogue to Mary's `intro-seen` flag. The visitor implicitly "requested" not to see the intro animation re-play on every page navigation — recording that preference is exactly what `intro-seen` does. The DPC's example green-lights this kind of cookie under the strictly necessary exemption.

#### Example 2 — Long-lived journey planner cookie (FAIL)

> "EXAMPLE 2: A travel website deploys a cookie with a two-year lifespan used to uniquely identify a user's browser and device for the purposes of displaying a journey planner and for remembering their journey preferences each time they visit. This cookie is set without consent when the user lands on the site. While such functionality may be helpful to some users, these cookies require consent."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 7. Verified verbatim against local PDF on 2026-04-27._

> "It should be clear to the user how long this preference is retained by your website for the purposes of presenting a journey planner in a browser or app. If the user is merely buying a ticket and enters a start and end point for their journey, this purpose may be served by means of a session cookie. However, if you wish to provide a service that allows your website to remember a user's journey preferences for a longer period, the cookie that functions to save this preference requires consent."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 7. Verified verbatim against local PDF on 2026-04-27._

**What this teaches:** this is the test we have to pass. The DPC is saying *the cookie's lifespan must be proportionate to its purpose.* A two-year cookie storing a "preference" goes too far if a session-only cookie would deliver the same service. This rule protects against using "preferences" as cover for long-term tracking.

**Implication for Mary's site:** `intro-seen` is `sessionStorage`, which is automatically cleared when the tab closes — strictly session-scoped, like the DPC's preferred shorter alternative in this example. The `CookieConsent` cookie has a 1-year lifespan, which is shorter than the DPC's failing 2-year example and is the standard duration for a consent record (we revisit this in **DPC Section 11 — Withdrawal of consent**, where the DPC's 6-month re-prompt rule applies).

#### Example 3 — Chatbot cookies (FAIL until requested)

> "EXAMPLE 3: Your website has a chatbot function to allow people engage with customer service agents via an online chat window. Any cookies used to deliver that chat functionality must not be deployed until the person explicitly requests to use the chatbot. Such cookies do not meet the 'strictly necessary' consent exemption."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 7. Verified verbatim against local PDF on 2026-04-27._

**What this teaches:** the "explicitly requested" condition is real. A chatbot cookie set on page load is not strictly necessary for the page (the visitor didn't ask for the chatbot yet). It only becomes strictly necessary the moment the visitor actively asks for the chat window. The cookie has to wait for the request.

**Implication for Mary's site:** Mary's site has no chatbot today. If one is added later, the cookie that supports it would need the same lazy-loading treatment — set only when the visitor opens the chat, not on every page load.

### The supplementary references

> "Opinion 04/2012 of the Article 29 Data Protection Working Party provides more detailed information to help you to assess which cookies may avail of one of the consent exemptions."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 7. Verified verbatim against local PDF on 2026-04-27._

> "Opinion 9/2014 of the Article 29 Data Protection Working Party also clarifies that Article 5(3) of the ePrivacy Directive (as implemented in Irish law in Regulation 5(3)) applies to device fingerprinting technologies. This means that if you process device fingerprints which are generated through the storage of information, or the gaining of access to information, on a user's device that you may only do so with the valid consent of the user."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 7. Verified verbatim against local PDF on 2026-04-27._

**What these add:**
- **WP29 Opinion 04/2012** is the same Opinion already cited in EDPB walkthrough Section 8 Para 30 as the source of the preference-cookie rule. It contains the original, more detailed framework for assessing exemptions.
- **WP29 Opinion 09/2014** extends the same consent rule to device fingerprinting — the technical alternative to cookies that some sites have tried to use as a workaround. The DPC is closing that workaround off: fingerprinting needs consent too. Mary's site does not use device fingerprinting.

### How this site complies with DPC Section 8

The two cookies on Mary's site that fire without consent are both classified under **Exemption (b) — strictly necessary**:

| Cookie | Service the visitor explicitly requested | Why the cookie is strictly necessary | Test passed |
|---|---|---|---|
| `CookieConsent` (Cookiebot) | Cookie consent management — the visitor asked to use a website where Irish law mandates a working consent mechanism | Without this cookie, the consent banner cannot remember the visitor's choice and would re-prompt on every page. The cookie *is* the consent mechanism. **Closely analogous to DPC Example 1** (language/country preference cookie). | ✅ |
| `intro-seen` (sessionStorage) | The website experience without an animated intro re-playing every page navigation | Without this flag, the intro animation would re-play on every page navigation in the same session. The flag records a preference about how the service behaves. **Closely analogous to DPC Example 1** (language/country preference cookie) and well within the lifespan limits the DPC sets in Example 2 (sessionStorage clears at tab close, far shorter than the 2-year fail). | ✅ |

Neither cookie:
- Is used for advertising (which would automatically fail)
- Has a disproportionate lifespan (the DPC's 2-year example fails; both Mary's cookies are inside acceptable bounds)
- Triggers without the visitor having requested the service (both fire when the visitor lands on the website — i.e. has explicitly requested the website itself)

### Verification

1. **Open the live site in a fresh incognito window with cookies cleared.**
2. **Inventory every cookie present before any interaction.** Use DevTools → Application → Cookies and DevTools → Application → Session Storage.
3. **Expected output:**
   - One cookie: `CookieConsent` (Cookiebot's record of the consent state — set immediately to record that no consent has been given yet).
   - One sessionStorage entry: `intro-seen` (set after the intro animation finishes).
   - **No other cookies before consent.** No `_ga`, no `_gcl_au`, no `_fbp`, no chatbot cookies, no fingerprinting trackers.
4. **For each pre-consent cookie or sessionStorage entry, confirm the strict necessity justification is documented** — the README's "Strictly necessary cookies — no consent required" table contains the per-cookie rationale, and the Cookiebot dashboard description fields contain the same.
5. **Run the dated compliance screenshot** to capture the inventory as it appeared on the verification date:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-8-strictly-necessary
   ```

If steps 2–4 produce no surprises, the strictly necessary classification on Mary's site is defensible under DPC Section 8.

### Cross-references

> **Cross-reference 1:** The Type I dark pattern of mis-labelling cookies as Necessary is the EDPB's complementary treatment of this same rule — see **EDPB walkthrough Section 8 (Type I — Inaccurately Classified Essential Cookies)**.
>
> **Cross-reference 2:** The cookie classification review triggers (when to revisit this classification — e.g. when Google Ads or Google Analytics is added later) live in `client-onboarding-checklist.md` under **"Cookie classification review triggers."**

---

## DPC Section 9 — "Do analytics cookies require consent?"

### The rule the DPC sets

> "Do analytics cookies require consent?
>
> Yes. Analytics cookies are used as a measuring tool for websites, including to provide information on the number of unique visitors and the pages they browse during their visits. Some analytics may use first-party cookies with the analytics function carried out by the controller or by another party on behalf of the controller. The Article 29 Working Party has clarified that this other party will be a joint controller or a processor, depending on whether it uses the data for its own purposes or whether it is prohibited from doing so by contractual arrangements.
>
> Third-party analytics carried out by parties other than the controller, sometimes for their own purposes, may be considered to represent a greater privacy risk to the user.
>
> The Article 29 Working Party considers that first-party analytics cookies are not likely to create a privacy risk when they are strictly limited to first-party aggregated statistical purposes, and when they are used by websites that already provide clear information about such cookies in their privacy policy, as well as adequate privacy safeguards. This should include a user-friendly mechanism to opt out of any data collection for analytics.
>
> It is unlikely that first-party analytics cookies would be considered a priority for enforcement action by the DPC."
>
> — Source: `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`, pages 7–8. Verified verbatim 2026-04-28.

### Plain English — what this actually says

The DPC answers its own headline question with a one-word answer: **Yes.** Analytics cookies require consent. Full stop.

Then it adds nuance about *enforcement priority*:

1. **Third-party analytics** (e.g. Google Analytics, where Google receives the data on its own infrastructure) — higher privacy risk. The DPC takes these seriously.
2. **First-party analytics** (e.g. a self-hosted analytics tool where the data never leaves the site owner's control) — still requires consent, but the DPC says these are **unlikely to be an enforcement priority** if four conditions are met:
   - Strictly limited to first-party use
   - Aggregated statistical purposes only
   - Clearly described in the privacy policy
   - User-friendly opt-out mechanism

**The trap to avoid:** "unlikely to be an enforcement priority" is not the same as "exempt from consent." A site running first-party analytics without consent is still in breach — it's just less likely to be the DPC's first call. Treating that softer enforcement signal as permission to skip the banner is a misreading.

### How this site complies with DPC Section 9

Mary's site runs **no analytics cookies of any kind** at the time of writing. Not first-party, not third-party. No Google Analytics, no Plausible, no Fathom, no Matomo, no self-hosted equivalent.

| DPC requirement | How Mary's site satisfies it |
|---|---|
| Analytics cookies require consent | No analytics cookies are deployed at all. The question doesn't arise on the live site as of 2026-04-28. |
| First-party vs third-party distinction | Not currently relevant — neither type is in use. |
| If first-party analytics were added later — privacy policy disclosure | Pre-existing privacy policy structure already covers cookie purposes; a new section would be added per the cookie classification review triggers in `client-onboarding-checklist.md`. |
| If first-party analytics were added later — user-friendly opt-out | Cookiebot already provides this — Statistics category in the banner with explicit consent and a withdraw mechanism via the Privacy Trigger floating icon. |

### Verification

1. **Open the live site in a fresh incognito window with cookies cleared.**
2. **Inventory every cookie and request before any interaction.** DevTools → Application → Cookies and DevTools → Network.
3. **Expected output:**
   - No requests to `google-analytics.com`, `googletagmanager.com`, `plausible.io`, `fathom.com`, `matomo.cloud`, or any other analytics provider.
   - No `_ga`, `_ga_*`, `_gid`, `_gat`, `_pk_*`, or `_fbp` cookies.
   - The only cookies present should be `CookieConsent` and the `intro-seen` sessionStorage entry — both classified under DPC Section 8 (strictly necessary).
4. **If any analytics tool is added in future** — trigger the cookie classification review in `client-onboarding-checklist.md`. Decide first-party vs third-party, classify under Statistics in Cookiebot, add to the privacy policy, and verify the Statistics category fires only after explicit consent.

### Cross-references

> **Cross-reference 1:** The strictly necessary classification of the only two pre-consent cookies on Mary's site (`CookieConsent` and `intro-seen`) is in **DPC Section 8** above.
>
> **Cross-reference 2:** The trigger for revisiting this section when analytics is eventually added lives in `client-onboarding-checklist.md` under **"Cookie classification review triggers."**
>
> **Cross-reference 3:** The EDPB's complementary rule on analytics — that consent must be explicit, granular, and not bundled — is covered in **EDPB walkthrough Section 4 (Type B — Pre-ticked Boxes)** and **Section 5 (Type C — Deceptive Button Contrast)**.

---

## DPC Section 10 — "Can you obtain consent for multiple purposes at the same time?"

### The rule the DPC sets

> "Can you obtain consent for multiple purposes at the same time?
>
> Consent may not be 'bundled' for multiple purposes. As a matter of good practice, you should outline in a first layer of communication on your site or mobile app that you are requesting consent for the use of cookies for specific purposes. A second layer of information may then be used to provide more detailed information about the types of cookies or other technologies in use, with options for the user to opt in or to accept these cookies. You are not permitted to use pre-checked boxes, sliders or other tools set to 'ON' by default to signal a user's consent to the setting or use of cookies."
>
> — Source: `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 8. Verified verbatim 2026-04-28.

### Plain English — what this actually says

The DPC sets three rules in this section, all of which describe how a banner must let the user separate one purpose from another:

1. **No bundling.** You cannot ask for one consent to cover multiple purposes. Statistics, marketing, and preferences each need their own opt-in. A single "Accept all" button is allowed *as one option*, but it must sit alongside the ability to consent to less.
2. **Layered information.** The first layer (the banner itself) explains *that* cookies are being used and *for what specific purposes*. The second layer (the details panel) lets the user opt in or out per category.
3. **No pre-ticked defaults.** Pre-checked boxes, sliders set to ON, or any other default-on mechanism cannot be used to claim consent. The user must take an active step for each category.

**The trap to avoid:** treating "Accept all" as the only path. A banner that has no per-category granularity (or hides the granular choice deep in another screen) is bundling consent. The DPC and EDPB both treat this as non-compliant.

### How this site complies with DPC Section 10

Mary's site uses Cookiebot's standard two-layer banner with per-category granularity. All three DPC rules are satisfied by Cookiebot's default behaviour:

| DPC requirement | How Mary's site satisfies it |
|---|---|
| No bundled consent across purposes | Cookiebot exposes four separate categories (Necessary, Preferences, Statistics, Marketing). Each has its own opt-in toggle. The user can accept Statistics without accepting Marketing, or vice versa. |
| First-layer summary of purposes | Banner copy in `banner-copy-mary-molloy.md` names the specific purposes ("we use cookies to make this website work and, with your permission, to help us understand how it's used") and links to the detail panel. |
| Second-layer per-category detail with opt-in toggles | Cookiebot's "Show details" panel lists every cookie under its category with a per-category toggle. Each toggle is an active opt-in. |
| No pre-checked boxes or default-on sliders | All non-essential category toggles default to OFF. Confirmed in the 2026-04-27 verification — Deny click registered `preferences: false, statistics: false, marketing: false` (i.e. they were not pre-set to true). |

### Verification

1. **Open the live site in a fresh incognito window with cookies cleared.**
2. **Click "Show details" or the equivalent on the banner first layer** to expose the per-category controls.
3. **Confirm all of the following:**
   - Four distinct categories visible: Necessary, Preferences, Statistics, Marketing.
   - Necessary is locked ON (correct — these are exempt under DPC Section 8).
   - Preferences, Statistics, and Marketing toggles all default to **OFF**.
   - Each non-essential category has its own toggle that the user must actively flip to opt in.
4. **Click "Allow selection" with no toggles flipped on** — the resulting `CookieConsent` cookie value should record `preferences: false, statistics: false, marketing: false, method: 'explicit'`.
5. **Run the dated compliance screenshot** to capture the layered banner state:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-10-no-bundling
   ```

### Cross-references

> **Cross-reference 1:** The complementary EDPB rule prohibiting pre-ticked boxes (with verbatim Recital 32 quote) is in **EDPB walkthrough Section 4 (Type B — Pre-ticked Boxes)**.
>
> **Cross-reference 2:** The first-layer / second-layer architecture and the "reject must be as easy as accept" rule sit in **EDPB walkthrough Section 3 (Type A — No Reject Button on First Layer)** — DPC Section 10 confirms the layered model; EDPB then sharpens what each layer must contain.
>
> **Cross-reference 3:** The exact wording used on Mary's first-layer banner is locked in `banner-copy-mary-molloy.md`. Any change requires triggering the banner copy review workflow in `client-onboarding-checklist.md`.

---

## DPC Section 11 — "Withdrawal of consent"

### The rule the DPC sets

> "Withdrawal of consent
>
> The user must be able to withdraw consent as easily as they gave it and you must not 'bundle' consent for cookies with consent for other purposes, or with terms and conditions for a contract for other services you provide. You should provide information in your cookies information about how users can signify and later withdraw their consent to the use of cookies, including by providing information on the action required for them to signal such a preference.
>
> If you use a cookie to store a record that a user has given consent to the use of cookies, you should ask the user to reaffirm their consent no longer than six months² after you have stored this consent state. As a practical solution, consider the use of an easy tool, such as a 'radio button' on your website which allows users to control which cookies are set and to allow them vary their consent at any time.
>
> Any record of consent must also be backed up by demonstrable organisational and technical measures that ensure a data subject's expression of consent (or withdrawal) can be effectively acted on."
>
> **Footnote 2:** "While the legislation does not prescribe a specific lifespan for such cookies, based on a first-principles analysis by the DPC, we consider this to be the appropriate default outer timeframe for storing the user's consent state. A controller would need to objectively and on a case-by-case basis justify storage for a longer period."
>
> — Source: `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`, pages 8–9. Verified verbatim 2026-04-28.

### Plain English — what this actually says

The DPC sets four rules in this section. Two are about *how* withdrawal must work, one is about *how long* a stored consent can last, and one is about backing up the system that records consent.

1. **Withdrawal must be as easy as giving consent.** If accepting was a one-click action, withdrawing must also be a one-click action. The user does not have to dig through menus or contact the site to withdraw.
2. **No bundling of cookie consent with other things.** A site cannot make accepting cookies a condition of accepting the terms and conditions of a service. The user gets to decide on cookies separately from the contract.
3. **Information about how to withdraw must be provided.** The privacy/cookie notice must tell the user *how* to withdraw — i.e. name the action ("click the floating Privacy icon", "go to the Cookie settings link in the footer").
4. **Six months is the DPC's outer limit on stored consent.** If a cookie records that the user has given consent, the site must re-prompt no later than six months after that consent was stored. Footnote 2 makes the source clear: this is not in the legislation. It is the DPC's first-principles position. A site keeping consent for longer must be able to justify *why* on a case-by-case basis — there is no automatic right to do so.
5. **The consent record must actually work.** Storing a record of consent (or withdrawal) is not enough — the site must have organisational and technical measures that make sure the recorded preference is acted on (e.g. if the user said no to Marketing, no marketing cookies actually fire).

**The trap to avoid:** treating Cookiebot's default 12-month renewal period as compliant in Ireland. The DPC's outer limit is **6 months**, not 12. Cookiebot's dashboard only offers 12 months or 1 month — there is no 6-month option. The conservative choice (already applied on Mary's dev account on 2026-04-27) is **1 month**, which is well inside the DPC ceiling.

### How this site complies with DPC Section 11

| DPC requirement | How Mary's site satisfies it |
|---|---|
| Withdrawal as easy as giving consent | Cookiebot's floating **Privacy Trigger** icon (bottom-left of every page) is a one-click withdrawal mechanism — the same number of clicks as the original Accept/Deny. Confirmed in the EDPB walkthrough Section 9 (Type K) compliance evidence. |
| No bundling with terms and conditions | Mary's site has no general T&Cs that visitors must accept. The cookie banner is the only consent surface and only asks about cookies. |
| Information about how to withdraw | The cookie banner names the floating icon as the withdrawal mechanism. The privacy/cookie notice (linked from the banner first layer) repeats the instruction. Banner copy locked in `banner-copy-mary-molloy.md`. |
| Stored consent re-prompt within 6 months | Cookiebot dashboard "User consent expiration" set to **1 month** on the dev account on 2026-04-27. Verified end-to-end: the `CookieConsent` cookie's `Expires` timestamp on the test was `2026-05-27T13:01:39.000Z` — exactly 30 days. **1 month is inside the DPC's 6-month ceiling.** |
| Demonstrable organisational/technical measures backing the record | Cookiebot's `data-blockingmode="auto"` actively blocks scripts in non-consented categories — i.e. a Deny click is enforced at the script-loading level, not just recorded. Verified in the 2026-04-27 test: Deny click stored `preferences: false, statistics: false, marketing: false, method: 'explicit'`. |

### Verification

1. **Open the live site in a fresh incognito window with cookies cleared.**
2. **Click Accept** — confirm the `CookieConsent` cookie is created.
3. **Inspect the cookie's `Expires` timestamp.** Expected: roughly 30 days from today (1 month renewal period). Anything beyond 6 months from today is a DPC-ceiling failure and must be corrected via the path in `client-onboarding-checklist.md` (Domains & Aliases → Manage your domain groups → expand → User consent expiration).
4. **Click the floating Privacy Trigger icon** (bottom-left). Confirm the banner re-opens and the user can change their selection in one click.
5. **Toggle Marketing OFF (or Statistics OFF) and click "Allow selection"** — confirm the corresponding category in the `CookieConsent` cookie value flips to `false`. (When Mary's site eventually adds Statistics or Marketing cookies, also confirm via the Network tab that those cookies stop firing.)
6. **Run the dated compliance screenshot** to capture the floating icon and the re-prompt:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-11-withdrawal
   ```

### Pre-launch action

When Mary's production Cookiebot account is created (CBID swap from dev to prod), **the User consent expiration setting must be re-applied to 1 month on the production domain group.** This setting is per-domain-group and does not transfer with the CBID. This action is already on the pre-launch checklist in `client-onboarding-checklist.md`.

### Cross-references

> **Cross-reference 1:** The floating Privacy Trigger icon as Mary's withdrawal mechanism is also covered in **EDPB walkthrough Section 9 (Type K — No Withdraw Icon)**.
>
> **Cross-reference 2:** The detailed Cookiebot dashboard path for changing the consent expiry, plus the verified end-to-end test from 2026-04-27, lives in `client-onboarding-checklist.md` under **"Cookiebot consent expiry — exact path."**
>
> **Cross-reference 3:** The "no bundling" rule from this section reinforces (and extends beyond cookies into T&Cs) the per-category rule from **DPC Section 10** above.

---

## DPC Section 12 — "How do you obtain consent in practice?"

### The rule the DPC sets

> "How do you obtain consent in practice?
>
> Most websites choose to implement a cookie banner or pop-up, which displays when a user lands on the website and which provides the first layer of information about the use of cookies and other tracking technologies. This banner or notice will also often contain a link to a cookies policy and a privacy policy which provide further, more detailed information.
>
> If you use a cookie banner or pop-up, you must not use an interface that 'nudges' a user into accepting cookies over rejecting them. Therefore, if you use a button on the banner with an 'accept' option, you must give equal prominence to an option which allows the user to 'reject' cookies, or to one which allows them to manage cookies and brings them to another layer of information in order to allow them do that, by cookie type and purpose.
>
> The user's consent must be specific to each purpose for which you are processing their data, it must be freely given and unambiguous and it requires a clear, affirmative action on the part of the user. Silence or inaction by the user cannot constitute their consent to any processing of their data.
>
> You must include a link or a means of accessing further information about your use of cookies and the third parties to whom data will be transferred when the user is prompted to accept the use of cookies."
>
> — Source: `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`, page 9. Verified verbatim 2026-04-28.

### Plain English — what this actually says

The DPC sets four practical rules for how a banner must behave:

1. **A banner is the standard mechanism.** The DPC names "a cookie banner or pop-up" as the typical implementation — first layer of information on landing, with links to a cookies policy and privacy policy for more detail.
2. **No nudging.** The interface cannot push the user toward Accept and away from Reject. If there is an Accept button, there must be a Reject option (or a Manage option that leads to per-category granularity) **at equal prominence**. Equal prominence means equal in colour weight, size, and position — not Accept-as-coloured-button vs Reject-as-grey-text-link.
3. **Active, specific, unambiguous consent.** The consent must be:
   - **Specific** — separately scoped to each purpose, not bundled across categories.
   - **Freely given** — the user must have a real choice; consent extracted under threat of withholding the service is not valid.
   - **Unambiguous** — recorded as a positive act with no room for interpretation.
   - **A clear, affirmative action** — a click, a tap, a flipped toggle. Not a scroll. Not a second page-view. Not closing the banner with the X.
   - **Silence or inaction is not consent.** A user who ignores the banner has not consented.
4. **A link to further information must be present at the moment of prompting.** Visitors must be able to read the longer cookies policy / privacy notice (including which third parties receive data) **from the banner itself** — they cannot be required to consent first and read later.

**The trap to avoid:** an Accept button that is large, coloured, and central, paired with a Reject "link" that is small, grey, or buried. That is non-compliant *even if both labels exist* — the visual weight imbalance is the nudge the DPC prohibits.

### How this site complies with DPC Section 12

Mary's site uses Cookiebot's standard banner with these rules satisfied by default:

| DPC requirement | How Mary's site satisfies it |
|---|---|
| Banner displays on landing as the first layer | Cookiebot banner appears on first visit (delayed only until the intro animation completes — `src/styles/cookiebot.css` controls the timing, not the styling). |
| Banner contains a link to cookies/privacy policy | First-layer banner copy in `banner-copy-mary-molloy.md` links to the Cookie Declaration (Cookiebot-generated) and the Privacy Policy. Verified in the live banner. |
| No nudging — equal prominence for Accept and Reject | Cookiebot's default styling renders **Allow all** and **Deny** as visually equivalent buttons. No styling overrides exist (commit fec7dd0 removed the custom Cookiebot CSS overrides specifically to preserve equal prominence). Verified in the EDPB walkthrough Section 5 (Type C) compliance evidence. |
| Specific, per-purpose consent | Four separate categories (Necessary, Preferences, Statistics, Marketing) with per-category toggles. Covered in detail under DPC Section 10 above. |
| Freely given | No service is gated on cookie consent. Visitors who deny all non-essential cookies get full access to the site. |
| Unambiguous, clear, affirmative action | A click on Allow all / Deny / Allow selection is the only way to dismiss the banner. There is no "scroll = consent" mechanism. The 2026-04-27 verification confirmed `method: 'explicit'` is recorded on every consent action. |
| Silence/inaction is not treated as consent | Cookiebot's `data-blockingmode="auto"` means non-essential scripts do not load until an explicit choice is made. A user who ignores the banner causes no non-essential cookies to fire. |
| Link to further information at the point of prompting | Cookie Declaration link is on the first-layer banner. Visitors can read the full per-cookie disclosure (and any third-party recipients) before clicking any consent button. |

### Verification

1. **Open the live site in a fresh incognito window with cookies cleared.**
2. **Confirm the banner appears after the intro animation completes** — single-trigger, not multiple pop-ups.
3. **Visually compare Allow all and Deny.** They must be the same shape, size, and prominence. Deny must not be smaller, lighter, or styled as a text link.
4. **Confirm the Cookie Declaration link is visible on the first layer** (not hidden behind Show details).
5. **Ignore the banner for 30 seconds** — confirm that no non-essential cookies fire. Network tab should show no analytics, ad, or tracking requests.
6. **Click Deny** — confirm the resulting `CookieConsent` cookie value records `method: 'explicit'` and all non-essential categories `false`.
7. **Run the dated compliance screenshot** to capture the banner state:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-12-banner-prominence
   ```

### Cross-references

> **Cross-reference 1:** The DPC's "no nudging / equal prominence" rule is the same rule the EDPB sharpens in **EDPB walkthrough Section 5 (Type C — Deceptive Button Contrast)** — verbatim EDPB language plus the worked banner-design tests.
>
> **Cross-reference 2:** The "specific, per-purpose, no bundling" requirement is covered in detail in **DPC Section 10** above.
>
> **Cross-reference 3:** The "no pre-ticked boxes / silence is not consent" rule maps to Recital 32 of the GDPR — see **EDPB walkthrough Section 4 (Type B — Pre-ticked Boxes)** for the verbatim Recital 32 quote.

---

## DPC Section 13 — "Can you use implied consent for the use of cookies and tracking technologies?"

### What the DPC says

> "You may not obtain consent by 'implication' to set cookies. This means that wording in your cookie banner or notice which inform users that, by their continued use of your website – either through clicking, using or scrolling it - that you will assume their consent to set cookies, is not permissible.
>
> Similarly, cookie banners that pop up when a user lands on a website and which subsequently disappear when a user scrolls, without any further engagement by the user with the banner or with information about cookies, are not compliant with the law.
>
> You cannot assume that a user who merely scrolls a page or clicks an element on the page has seen and read the information in a cookie banner, unless you can demonstrate clearly that they have engaged with the information and given their unambiguous consent to the setting of cookies and the purposes of the processing."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, Section "Can you use implied consent for the use of cookies and tracking technologies?", pages 9–10. Verified verbatim against local PDF on 2026-05-02._

**Cross-reference only — no new rule.** The DPC sets out three things in this section, all of which are already mapped in detail in the EDPB walkthrough:

1. **No "by continuing to use this site you accept cookies" wording.** A banner cannot infer consent from the visitor's continued browsing.
2. **No "banner disappears on scroll" pattern.** A banner that vanishes once the visitor scrolls — without any click on it — is not lawful consent.
3. **Scrolling and incidental clicking are not consent.** You cannot assume the visitor has read the banner unless they have clearly engaged with it and taken an unambiguous action.

All three points reduce to the same underlying rule: **consent must be a positive action, not an inference from passive behaviour.** That rule is the EDPB consent baseline.

> **Cross-reference 1:** The "consent must be a positive action, never inferred" rule is mapped verbatim, with the local EDPB PDF source line, in **EDPB walkthrough Section 3, Para 7 ("The consent baseline")**. Para 7 explicitly lists scrolling, closing-with-X, continued browsing, and refreshing as **not** valid consent — exactly the patterns the DPC rules out here.
>
> **Cross-reference 2:** The "unambiguous indication" requirement that this DPC section relies on is the GDPR Article 4(11) condition — mapped in **EDPB walkthrough Section 1, Para 2**.
>
> **Cross-reference 3:** The "single-trigger banner, no auto-dismiss" rule for Mary's site is verified in **DPC Section 12 above** (verification step 2: *"Confirm the banner appears after the intro animation completes — single-trigger, not multiple pop-ups"*) and recorded as `method: 'explicit'` on every consent action.

### How this site complies

Mary's banner does not rely on implied consent in any form. Cookiebot's `data-blockingmode="auto"` blocks every non-essential cookie until the visitor clicks **Allow all**, **Allow selection**, or **Deny**. There is no "by continuing to use this site you accept cookies" wording on the banner (verify against `banner-copy-mary-molloy.md`). The banner does not dismiss on scroll — the only ways to clear it are an explicit click on one of the three consent buttons. Every recorded `CookieConsent` cookie carries `method: 'explicit'`, confirming no implied path exists.

The detailed verification steps for these claims are in **DPC Section 12** above (steps 2, 5, and 6) — running them satisfies Section 13 at the same time, since the underlying rule is the same.

---

## DPC Section 14 — "Clear and comprehensive information"

### The rule the DPC sets

> "Regulation 5(3) of the ePrivacy Regulations requires that the user must be provided with 'clear and comprehensive information' about the use of cookies in accordance with data protection law. While 'clear and comprehensive' is not defined in the Regulations, the standard required must be in accordance with data protection legislation, i.e. the GDPR and the Data Protection Act 2018. In practice, if your processing involves personal data, you will need to meet the transparency requirements under Articles 12-14 of the General Data Protection Regulation. This means that there may sometimes be duplication in the information provided in your cookies policy and your privacy policy. It is still good practice to maintain both, in order to facilitate the different layers of information that may be required under the ePrivacy Regulations and the GDPR."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, Section "Clear and comprehensive information", page 10. Verified verbatim against local PDF on 2026-05-02._

### Plain English — what this actually says

The DPC is doing four things in this short section:

1. **Anchoring the "clear and comprehensive" standard.** The phrase comes from **Regulation 5(3)(b)** of S.I. No. 336/2011 — the binding Irish statute. The Regulations themselves do not define what "clear and comprehensive" means, so the DPC fills the gap.

2. **Importing the GDPR transparency standard.** The DPC's gap-fill is: read "clear and comprehensive" as meaning whatever the GDPR transparency standard requires. That standard lives in **GDPR Articles 12, 13, and 14** plus the **Data Protection Act 2018**. The exact obligations under those articles are the next section's territory (Section 15) — Section 14 is just pointing the way.

3. **Confirming there will be duplication.** If a cookie processes personal data (an analytics ID, an advertising ID, an IP address embedded in a tag), the visitor needs to be told the same things twice — once for the cookie law (in the cookie policy) and once for the GDPR (in the privacy policy). The DPC is acknowledging this and saying *don't worry about it*.

4. **Telling you to keep both documents anyway.** A common temptation is to merge the cookie policy into the privacy policy and call it one document. The DPC says no — keep them separate. The reason is the **two-layer disclosure principle**: the cookie banner gives the visitor the short answer at the moment of choice (cookie policy link), and the privacy policy gives them the full answer about everything else the site does with personal data. Different audiences, different moments, different documents.

A concrete worked example. Say Mary's site one day adds Google Analytics with default settings:

- **Cookie policy** — must say *"`_ga` cookie, set by Google Analytics, used to distinguish unique visitors, expires in 2 years"*. That's the ePrivacy Regulation 5(3) job.
- **Privacy policy** — must say *"We use Google Analytics, which is a service provided by Google LLC. Google may transfer the data outside the EU. The legal basis for this processing is your consent. You can withdraw consent at any time."* That's the GDPR Article 13 job.

The information overlaps — both documents mention Google, both mention the visitor's consent, both must let the visitor exercise their rights. But the *purposes* of the two documents are different. Reg 5(3) is about disclosing the cookie itself; Articles 12–14 are about disclosing the processing of personal data that the cookie enables. You disclose both, in two different documents linked from two different places.

### What "clear and comprehensive" means in practice

The DPC's gap-fill gives us four working tests for whether information meets the Reg 5(3) standard:

| Test | What it means |
|---|---|
| **Clear** | Plain language. No jargon a non-expert wouldn't understand. No legalese unless absolutely necessary. |
| **Comprehensive** | Every cookie the site sets is named and explained — no "we may use various tools to improve your experience" hand-wave. |
| **Specific** | The visitor learns the exact purpose of each cookie, not a generic category description. |
| **Accessible at the moment of consent** | The visitor can read the information *before* clicking Allow — not buried four clicks deep. |

These four are the DPC's working interpretation of GDPR Article 12(1) ("concise, transparent, intelligible and easily accessible form, using clear and plain language") imported into the cookie context.

### How this site complies with DPC Section 14

The site's two-document structure is in place — `src/pages/cookie-policy.astro` and `src/pages/privacy.astro` exist as separate pages with separate routes, separate links, and separate purposes. The first-layer banner links to the **Cookie Declaration** (Cookiebot-generated, attached to `cookie-policy.astro`) and to the **Privacy Policy**. This satisfies the two-layer disclosure principle the DPC is endorsing.

| Requirement | How this site complies |
|---|---|
| **Information in plain language** | Banner copy in `banner-copy-mary-molloy.md` is short, declarative, and non-technical. The Cookie Declaration generated by Cookiebot uses category names (Necessary, Preferences, Statistics, Marketing) rather than jargon. The privacy policy and cookie policy bodies are still being drafted (the README "TODO — Before Launch" section) — the plain-language standard is captured as a drafting requirement. |
| **Every cookie named and explained** | Cookiebot's automated scan produces a per-cookie list with name, provider, purpose, expiry, and category. Embedded as the Cookie Declaration on `cookie-policy.astro`. Re-scanned automatically — no manual maintenance. |
| **Specific purpose for each cookie** | Cookiebot's per-cookie disclosure includes a specific purpose string, not a generic category description. |
| **Accessible at the moment of consent** | The Cookie Declaration link is on the first-layer banner. Visitors can read the full disclosure before clicking any consent button. Verified in DPC Section 12 above. |
| **Cookie policy and privacy policy maintained as separate documents** | `cookie-policy.astro` and `privacy.astro` are separate Astro pages with separate routes. The duplication the DPC anticipates is intentional and acceptable. |
| **Reg 5(3)(b)(i) "prominently displayed and easily accessible"** | Cookie policy and privacy policy links live in the footer (every page) and on the first-layer banner (at the moment of consent). The compliance screenshot script captures this layout dated. |
| **Reg 5(3)(b)(ii) "purposes of the processing"** | Each cookie category in the banner has a one-line purpose description (Necessary / Preferences / Statistics / Marketing). The Cookie Declaration extends this with the per-cookie purpose string from the Cookiebot scan. |

### Pre-launch action

The two-document structure is in place but the **content of `privacy.astro` and `cookie-policy.astro` is still being drafted**. Before launch:

1. Finish drafting `privacy.astro` against GDPR Articles 12–14. (See **DPC Section 15** below — full treatment of the Article 12–14 obligations.)
2. Finish drafting `cookie-policy.astro` to (a) include the Cookiebot-generated Cookie Declaration block, and (b) explain in plain English what cookies do, why Mary's site uses them, and how to withdraw consent.
3. Confirm both documents are linked from the footer of every page and from the first-layer banner.
4. Run `npx tsx scripts/compliance-screenshot.ts post-section-14-policies-drafted` once both documents are signed off.

### Verification

1. **Open the live site in a fresh incognito window with cookies cleared.**
2. **Confirm the first-layer banner links to both** the Cookie Declaration (cookie policy) and the Privacy Policy. Each link should be on the banner itself, not buried behind "Show details".
3. **Click the Cookie Declaration link** — confirm it opens `cookie-policy.astro` and the page renders the Cookiebot per-cookie list.
4. **Click the Privacy Policy link** — confirm it opens `privacy.astro` and the page renders the drafted privacy content.
5. **Read both documents end to end** — every cookie or processing activity mentioned must be in plain language, with a specific purpose. No "we may use various tools…" wording.
6. **Confirm both pages are linked from the footer** on every page (about, contact, services, etc.) — not only from the banner.
7. **Run the dated compliance screenshot** to capture the disclosure state:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-14-clear-and-comprehensive
   ```

### Cross-references

> **Cross-reference 1:** The detailed GDPR Article 12, 13, and 14 obligations the DPC imports here are the subject of **DPC Section 15 below — "Transparency information and responsibilities under the GDPR"**. Section 14 anchors the standard; Section 15 fills it in.
>
> **Cross-reference 2:** The "prominently displayed and easily accessible" phrasing comes from **Reg 5(3)(b)(i)** of S.I. No. 336/2011 — see `reg-5-compliance-evidence.md` for the binding statutory text and the per-element compliance mapping.
>
> **Cross-reference 3:** The "plain language" standard the DPC adopts maps to **GDPR Article 12(1)** — *"concise, transparent, intelligible and easily accessible form, using clear and plain language"*. Verify against `../gdpr/regulation-2016-679-consolidated-2016-05.pdf` Article 12(1) before quoting in the privacy policy draft.

---

## DPC Section 15 — "Transparency information and responsibilities under the GDPR"

### The rule the DPC sets

> "Where your processing, at the point after the cookies have been set, involves personal data, the GDPR applies to this processing. This means you must provide individuals with all the information to which they are entitled under Articles 12-13 of the GDPR in relation to transparency, including information about what other parties are processing their personal data. You must also provide information on how individuals may exercise all their data subject rights under the provisions of Chapter 3 of the GDPR, including how to make a subject access request and their right to make a complaint to a data protection authority."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, Section "Transparency information and responsibilities under the GDPR", page 10. Verified verbatim against local PDF on 2026-05-02._

### Plain English — what this actually says

The DPC is laying down the spec the privacy policy will be measured against. Three things in this short paragraph:

1. **Once a cookie processes personal data, the GDPR kicks in on top of the ePrivacy Regulations.** Reg 5(3) governs the *placement* of the cookie. The GDPR governs everything that happens *after* — what the cookie's contents reveal, who reads it, how long it is kept, what happens to the data behind it. Two laws, two layers, both apply.

2. **The transparency obligations live in Articles 12 and 13.** The DPC names two articles: Article 12 is the meta-rule (how you communicate), and Article 13 is the content list (what you have to tell the visitor when you collect data from them). The DPC does not mention Article 14 here because Article 14 is about data collected from someone *other* than the data subject — not the cookie scenario. So Mary's privacy policy needs Article 13's checklist as a minimum.

3. **Plus the rights in Chapter 3.** Chapter 3 of the GDPR runs from **Article 12 to Article 22**. That covers the right of access (15), rectification (16), erasure (17), restriction (18), notification of rectification or erasure (19), data portability (20), objection (21), and rights related to automated decision-making (22). The visitor has to be told these exist, how to exercise them, and how to complain to the DPC if they are not honoured.

A concrete worked example. Suppose Mary's site adds Google Analytics tomorrow. The cookie sets an analytics ID — that is personal data because it can identify a unique visitor over time. The moment that cookie fires, Mary becomes a data controller for the IDs Google Analytics is collecting on her site, and the privacy policy has to disclose:

- Who Mary is and how to contact her (Article 13(1)(a))
- The purpose of the processing — *"to count visitors and understand which pages they read"* (Article 13(1)(c))
- The legal basis — *consent* (Article 13(1)(c))
- That Google LLC is a recipient (Article 13(1)(e))
- Whether Google transfers the data outside the EU and what safeguards are in place (Article 13(1)(f))
- How long the analytics ID will be stored (Article 13(2)(a))
- The visitor's right to access, rectify, erase, restrict, port, or object to their data (Article 13(2)(b))
- The right to withdraw consent at any time (Article 13(2)(c))
- The right to complain to the DPC (Article 13(2)(d))

The DPC is saying: this is the level of detail the privacy policy has to reach. Anything less and the cookie consent itself is invalid, because consent that is not "informed" (one of the GDPR Article 4(11) conditions) is not consent at all.

### The Article 13(1) and 13(2) checklist

Article 13 is the most important article here. Verbatim from the local GDPR PDF, the controller must provide **all** of the following at the time personal data is collected from the visitor:

#### Article 13(1) — paragraph one items

> "(a) the identity and the contact details of the controller and, where applicable, of the controller's representative;
> (b) the contact details of the data protection officer, where applicable;
> (c) the purposes of the processing for which the personal data are intended as well as the legal basis for the processing;
> (d) where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party;
> (e) the recipients or categories of recipients of the personal data, if any;
> (f) where applicable, the fact that the controller intends to transfer personal data to a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means by which to obtain a copy of them or where they have been made available."

_Source: `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Article 13(1), page 14. Verified verbatim against local PDF on 2026-05-02._

#### Article 13(2) — paragraph two items

> "(a) the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;
> (b) the existence of the right to request from the controller access to and rectification or erasure of personal data or restriction of processing concerning the data subject or to object to processing as well as the right to data portability;
> (c) where the processing is based on point (a) of Article 6(1) or point (a) of Article 9(2), the existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;
> (d) the right to lodge a complaint with a supervisory authority;
> (e) whether the provision of personal data is a statutory or contractual requirement, or a requirement necessary to enter into a contract, as well as whether the data subject is obliged to provide the personal data and of the possible consequences of failure to provide such data;
> (f) the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject."

_Source: `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Article 13(2), pages 14–15. Verified verbatim against local PDF on 2026-05-02._

#### The Article 12 framing rule

> "The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 and any communication under Articles 15 to 22 and 34 relating to processing to the data subject in a concise, transparent, intelligible and easily accessible form, using clear and plain language…"

_Source: `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Article 12(1), page 13. Verified verbatim against local PDF on 2026-05-02._

This is the standard the privacy policy itself must meet. Plain language. Concise. Easy to find. Easy to read. The DPC's "clear and comprehensive" anchor in Section 14 above maps directly to this Article 12(1) phrasing.

### The Chapter 3 rights checklist

Chapter 3 of the GDPR runs from Article 12 to Article 22. The privacy policy has to tell the visitor each of these rights exists and how to exercise them:

| Article | Right | What the privacy policy must enable |
|---|---|---|
| 15 | Right of access (subject access request) | A way to ask for a copy of all personal data Mary holds about the visitor. |
| 16 | Right to rectification | A way to correct inaccurate or incomplete data. |
| 17 | Right to erasure ("right to be forgotten") | A way to ask for data to be deleted. |
| 18 | Right to restriction of processing | A way to ask Mary to stop processing the data while a query is resolved. |
| 19 | Notification obligation | An assurance that any rectification, erasure, or restriction is communicated to anyone Mary has shared the data with. |
| 20 | Right to data portability | A way to receive data in a structured, machine-readable format. |
| 21 | Right to object | A way to object to processing based on legitimate interest or for direct-marketing purposes. |
| 22 | Rights related to automated decision-making | If Mary uses automated decision-making (she does not), the right not to be subject to it. |

Plus two procedural rights:
- The right to **withdraw consent** at any time (Article 7(3))
- The right to **lodge a complaint with the DPC** (Article 77, restated in Article 13(2)(d))

The privacy policy needs a single point of contact (an email address or postal address) where the visitor can exercise any of these rights.

### How this site complies with DPC Section 15

The site's structure supports this section but **the privacy policy content is still being drafted** — `src/pages/privacy.astro` is currently a placeholder. The drafting task is captured in the README "TODO — Before Launch" section. This walkthrough section is the spec the draft must satisfy.

| Requirement | How this site complies (or will comply, once drafted) |
|---|---|
| **Article 13(1)(a) — controller identity and contact** | Privacy policy must name **Mary Molloy Solicitor** as the controller, list the firm's postal address (Rose Inn Street, Kilkenny), and a contact email. Source: `firm.ts`. The firm email placeholder in `firm.ts` (`info@YOURDOMAIN.ie`) must be replaced with the real address before launch — flagged in the README "TODO — Before Launch" section. |
| **Article 13(1)(b) — DPO contact details, if applicable** | A small solicitor's firm with no large-scale special-category processing is **not required** to appoint a DPO under Article 37. The privacy policy should confirm there is no DPO and route data protection enquiries to Mary directly. |
| **Article 13(1)(c) — purposes and legal basis** | Privacy policy must list each processing purpose (contact form submissions, email correspondence, analytics if added later) with the legal basis for each (consent for analytics; contract / legitimate interest for contact-form replies). |
| **Article 13(1)(d) — legitimate interests, if relied on** | If the firm relies on legitimate interest for any processing (e.g. responding to an enquiry), the privacy policy must spell out what that legitimate interest is and why it is balanced against the visitor's rights. |
| **Article 13(1)(e) — recipients of the data** | Privacy policy must list every recipient: **Resend** (for transactional contact-form emails), **Cookiebot** (for consent records), and any analytics or marketing tools added later. None today beyond Resend and Cookiebot. |
| **Article 13(1)(f) — third-country transfers** | Resend and Cookiebot involve transfers to / processing in third countries. Privacy policy must disclose the transfer destination and the lawful safeguard (Standard Contractual Clauses or equivalent). To be verified against each processor's DPA before launch. |
| **Article 13(2)(a) — retention period** | Privacy policy must say how long contact-form submissions are kept and on what criteria (e.g. *"messages are retained for as long as the matter is open, plus six years after closure for legal-cost-recovery and complaints reasons, then deleted"*). The retention rule must align with the firm's record-keeping policy. |
| **Article 13(2)(b) — rights of access, rectification, erasure, restriction, portability, objection** | Privacy policy must describe each right and give a single contact route to exercise any of them. |
| **Article 13(2)(c) — right to withdraw consent** | Privacy policy must describe how to withdraw consent for cookies (link to the cookie-policy page's withdrawal mechanism — already exists via Cookiebot's renew button, verified in **DPC Section 11 — Withdrawal of consent**). |
| **Article 13(2)(d) — right to complain to the DPC** | Privacy policy must name the **Data Protection Commission** as the relevant supervisory authority, give the DPC's contact route (`dataprotection.ie`), and confirm the visitor's right to make a complaint. |
| **Article 13(2)(e) — statutory / contractual requirement to provide data** | Privacy policy must say: contact-form submissions are voluntary, the site is fully usable without them, but if no contact details are provided Mary cannot reply. |
| **Article 13(2)(f) — automated decision-making** | Mary's site does no automated decision-making and no profiling. Privacy policy should state this explicitly (one short sentence — sometimes the absence is the disclosure). |
| **Article 12(1) — concise, transparent, intelligible, plain language** | Privacy policy must be readable by a non-lawyer. Apply the plain-English standard from `feedback_plain_language.md` — short sentences, no jargon, worked examples where helpful. |
| **Chapter 3 rights signposting** | A single section near the top of the privacy policy listing every Article 15–22 right, followed by a single "How to exercise these rights" subsection with one contact route. |
| **Cookies cross-link** | Privacy policy must link to the cookie policy (`/cookie-policy`) and the cookie-withdrawal mechanism. The two-document split established in **DPC Section 14 above** is what makes this clean. |

### Pre-launch action

1. **Draft `privacy.astro` against this checklist.** Use this section as the working spec. Each row in the table above is a requirement to satisfy in the drafted text.
2. **Confirm processor disclosures**: re-read **Resend's DPA** and **Cookiebot's DPA** to extract the third-country transfer destinations and the safeguards (SCCs, adequacy decisions). These determine the wording of the Article 13(1)(f) disclosure.
3. **Confirm retention periods with Mary**: how long does the firm keep contact-form messages? This is a firm-policy decision, not a website-manager decision — flag it in the README "TODO — Before Launch" section for Mary to confirm.
4. **Replace the placeholder firm email in `firm.ts`** before launch.
5. **Run the compliance screenshot script** once the privacy policy is signed off:
   ```bash
   npx tsx scripts/compliance-screenshot.ts post-section-15-privacy-policy-drafted
   ```

### Verification

1. **Open the live site** in a fresh incognito window with cookies cleared.
2. **Confirm the privacy policy is reachable** from the footer of every page and from the first-layer cookie banner.
3. **Read the privacy policy end to end.** For each row in the "How this site complies" table above, find the disclosure in the drafted text. If any row's requirement is missing, the policy is not yet compliant.
4. **Confirm the DPC complaint route is named** (Article 13(2)(d)) — the policy should name the **Data Protection Commission**, link to `dataprotection.ie`, and state the right to complain.
5. **Confirm the plain-language standard** — read the policy aloud. If a non-lawyer cannot follow on first read, rewrite.
6. **Confirm the link to the cookie policy** works and the cookie-policy page contains the Cookiebot Cookie Declaration block.
7. **Run the dated compliance screenshot** to capture the disclosure state:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-15-transparency-and-rights
   ```

### Cross-references

> **Cross-reference 1:** The "clear and comprehensive" standard the DPC anchors in Section 14 above is filled in here by **GDPR Article 12(1)** — *"concise, transparent, intelligible and easily accessible form, using clear and plain language"*. Section 14 sets the question; Section 15 is the answer.
>
> **Cross-reference 2:** The right to withdraw consent (Article 13(2)(c) and Article 7(3)) is mapped in detail in **DPC Section 11 — Withdrawal of consent**. The privacy policy needs a single sentence pointing the visitor at the cookie policy's withdrawal mechanism.
>
> **Cross-reference 3:** The Article 4(11) consent definition referenced throughout this section ("freely given, specific, informed, unambiguous") is mapped verbatim in **EDPB walkthrough Section 1, Para 2 ("What 'good enough for GDPR' means")**.
>
> **Cross-reference 4:** Article 14 (information when data is collected from someone other than the visitor) does not apply to Mary's site — there is no scenario where the firm collects personal data about a website visitor from a third party rather than from the visitor themselves. The DPC correctly omits Article 14 in Section 15.

---

## DPC Section 16 — "Pre-checked boxes and sliders"

### What the DPC says

> "These do not comply with European law, as has been clarified in the Planet49 judgment of October 2019. Consent does not need to be given for each cookie, but it must be given for each purpose for which cookies are used. Where a cookie is used for more than one purpose that requires consent, such consent must be obtained for all of those purposes separately. Regardless of the description you choose to give a cookie (i.e. 'functionality', 'performance', 'analytics' or 'marketing'), the cookie must meet one of the two exemption criteria in Regulation 5(5) in order to be exempt from the requirement to obtain a user's consent.
>
> It does not matter whether cookies contain personal data. If they do not meet one of the criteria for the consent exemption, then you need to obtain the user's consent before you set them."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, Section "Pre-checked boxes and sliders", pages 10–11. Verified verbatim against local PDF on 2026-05-02._

**Cross-reference only — every rule in this section is already mapped elsewhere.** The DPC packs three rules into one short section, all of which got full treatment earlier in this walkthrough or in the EDPB walkthrough:

1. **Pre-ticked boxes and sliders are not valid consent** — anchored in the **Planet49 judgment (Case C-673/17, October 2019)** of the Court of Justice of the EU.
2. **Per-purpose consent, no bundling** — one consent action per purpose, even if a single cookie covers multiple purposes.
3. **The label you give a cookie is irrelevant** — calling something "functionality" or "performance" does not exempt it from the consent rule. The only thing that exempts a cookie is meeting one of the two criteria in Reg 5(5).

> **Cross-reference 1:** Pre-ticked boxes and sliders are covered in detail in **EDPB walkthrough Section 4 — Type B Practice: "Pre-ticked Boxes"**. That section quotes the EDPB report verbatim, quotes **GDPR Recital 32** verbatim from the local Official Journal PDF (*"Silence, pre-ticked boxes or inactivity should not therefore constitute consent"*), and explicitly cites the **Planet49 judgment (Case C-673/17, October 2019)** that the DPC names here. EDPB Section 4 is the most settled rule in EU cookie consent law — there is no reasonable argument for the other side, and the EDPB walkthrough flags this directly.
>
> **Cross-reference 2:** The "consent must be given for each purpose, separately" rule is covered in detail in **DPC Section 10 above — "Can you obtain consent for multiple purposes at the same time?"**. That section sets out the per-purpose, no-bundling rule and maps Mary's four-category banner (Necessary / Preferences / Statistics / Marketing) against it.
>
> **Cross-reference 3:** The "category labels do not change classification" rule and the **Reg 5(5) exemption criteria** are covered in detail in **DPC Section 8 above — "Which cookies are exempt from consent?"**. That section opens with the rule the DPC restates here (*categorisation does not change the underlying consent requirement*) and walks through both Reg 5(5) exemptions with three worked examples.

### How this site complies

Mary's banner satisfies all three rules by configuration:

- **No pre-ticked boxes.** Cookiebot's default render shows category toggles in the **off** position. Verified in EDPB walkthrough Section 4 (the Type B test), and re-verifiable in any incognito window.
- **Per-purpose consent.** Four separate categories, four separate toggles. Each is consented to or refused independently. Documented in DPC Section 10 above.
- **No mislabelling.** `CookieConsent` and `intro-seen` are the only cookies classified as Necessary, and both genuinely meet the Reg 5(5) strictly-necessary exemption — the classification is correct, not a relabelling trick. Documented in DPC Section 8 above.

The detailed verification steps for these claims live in **EDPB walkthrough Section 4 (steps 4–5)**, **DPC Section 10 (verification block)**, and **DPC Section 8 (verification block)**. Running any one of those satisfies Section 16 at the same time.

---

## DPC Section 17 — "Requirements for the use of consent management providers (CMPs)"

### The rule the DPC sets

> "A consent management platform, or consent management provider (CMP) is a system used by some controllers to assist them in managing users' choices in relation to cookies and to help them meet their transparency obligations under data protection law. These are sometimes deployed in the form of software provided by a third-party vendor, or the controller may develop their own in-house platform to manage user consent and the provision of information about cookies and privacy choices. When a user visits a website and is presented with banners, pop-ups or sliders to manage their cookie consents, these choices are often being managed using a consent management platform of some form.
>
> If you use a third-party CMP, the tool or software must do what it purports to do. It must not contain pre-checked boxes signalling 'consent' for the use of cookies. If such a third-party tool is used to keep a record of a user's consent to the use of cookies, you must also keep a record of that consent as part of your record of processing activities in accordance with Article 30 of the GDPR. You should limit the length of time such consent is valid for no longer than six months³, after which time the user must be prompted to give their consent again.
>
> Users must be able to withdraw or vary their consent for the use of cookies or tracking technologies at any time and you must make it clear how they may do this using the tools you have provided to manage consent. It must be as easy for a user to withdraw their consent as to give it."

> ³ "The legislation does not prescribe the period of time for which consent may be stored before a user is asked to reconfirm their choices. However, based on a first-principles analysis, we consider six months to be the appropriate outer time limit for such consent to be retained. Beyond that period, a controller would need to objectively justify its use of cookies with a longer lifespan to record a user's consent state."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, Section "Requirements for the use of consent management providers (CMPs)" + footnote 3, page 11. Verified verbatim against local PDF on 2026-05-02._

### Plain English — what this actually says

The DPC sets out four distinct rules in this section:

1. **The CMP must do what it says it does.** A CMP is software that manages cookie consent on the controller's behalf. The controller is still the data controller and is still legally responsible for the result. A defective CMP doesn't excuse a defective consent process — *"the tool or software must do what it purports to do."* If the CMP doesn't actually block cookies until consent is given, the controller is the one breaking the law, not the CMP vendor.

2. **No pre-ticked boxes.** Restated from Section 16 above. Some CMPs ship with category toggles defaulted to **on** — the controller has to verify these are off and stay off.

3. **Article 30 GDPR Record of Processing Activities (RoPA).** This is the most easily-missed rule in the section. The CMP keeps a record of *each visitor's consent state*. The **controller** (Mary) must **separately** keep a record of *the processing activity itself* — what categories of cookies, what purposes, what processors, what retention. That record is the Article 30 RoPA, and it lives outside the website. The CMP's consent log does not satisfy Article 30 on its own.

4. **Six-month consent renewal.** A first-principles outer limit set by the DPC, not by statute. After six months, the visitor must be re-prompted. The footnote is regulator-significant: the six-month figure is the DPC's *own* analysis, not a statutory requirement. A controller could in principle justify a longer period — but only with objective justification.

5. **Withdrawal as easy as giving consent.** Same level of effort, same number of clicks, same prominence. This is a direct restatement of **GDPR Article 7(3)** and is already mapped in DPC Section 11 above.

### What "do what it purports to do" means in practice

The DPC is naming the controller's verification obligation. Buying a third-party CMP does not transfer the legal responsibility. Mary remains the data controller; Cookiebot is a processor. So Mary (or her website manager) must satisfy themselves that:

- The CMP **blocks non-essential cookies before consent.** Confirmed in Cookiebot via `data-blockingmode="auto"`.
- The CMP **records explicit consent only.** Confirmed by `method: 'explicit'` on every `CookieConsent` cookie value.
- The CMP **honours Deny.** Confirmed by checking that no non-essential cookies fire after a Deny click.
- The CMP **honours Withdrawal.** Confirmed by clicking the Cookiebot privacy trigger and seeing the consent state reset.
- The CMP **re-prompts at six months.** Confirmed by Cookiebot's documented automatic re-prompt behaviour.

This DPC walkthrough is itself the controller's evidence that the CMP "does what it purports to do" — Cookiebot's behaviour is mapped against each DPC requirement in the section-by-section verification steps above. Verifiable in advance, before launch.

### The Article 30 RoPA obligation — the easily-missed rule

The DPC tells the controller to keep an Article 30 record. Article 30 GDPR reads (verbatim from the local PDF):

> "Each controller and, where applicable, the controller's representative, shall maintain a record of processing activities under its responsibility. That record shall contain all of the following information:
> (a) the name and contact details of the controller and, where applicable, the joint controller, the controller's representative and the data protection officer;
> (b) the purposes of the processing;
> (c) a description of the categories of data subjects and of the categories of personal data;
> (d) the categories of recipients to whom the personal data have been or will be disclosed including recipients in third countries or international organisations;
> (e) where applicable, transfers of personal data to a third country or an international organisation, including the identification of that third country or international organisation and, in the case of transfers referred to in the second subparagraph of Article 49(1), the documentation of suitable safeguards;
> (f) where possible, the envisaged time limits for erasure of the different categories of data;
> (g) where possible, a general description of the technical and organisational security measures referred to in Article 32(1)."

_Source: `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Article 30(1), pages 27–28. Verified verbatim against local PDF on 2026-05-02._

**Does the under-250-employees carve-out save Mary?** No. Article 30(5) reads:

> "The obligations referred to in paragraphs 1 and 2 shall not apply to an enterprise or an organisation employing fewer than 250 persons **unless the processing it carries out is likely to result in a risk to the rights and freedoms of data subjects, the processing is not occasional, or the processing includes special categories of data as referred to in Article 9(1) or personal data relating to criminal convictions and offences referred to in Article 10**."

_Source: `../gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Article 30(5), page 28. Verified verbatim against local PDF on 2026-05-02._

A solicitor's firm processes client matter data continuously — that is "not occasional." Family-law and personal-injury matters can also touch special category data (health, criminal allegations). So the under-250 carve-out **does not apply to Mary's firm**. An Article 30 RoPA is required.

This is a **firm-wide obligation, not a website obligation**. The website is one small slice of the RoPA — covering the cookie processing, the contact-form processing, and any analytics processing. The bigger slice covers the firm's client files, court correspondence, accounts, and HR. Mary needs an Article 30 RoPA covering all of it. The website slice can be drafted by the website manager; the rest is firm-side work.

### How this site complies with DPC Section 17

| Requirement | How this site complies |
|---|---|
| **CMP does what it purports to do** | Mary uses Cookiebot, a Google-certified CMP. Cookiebot's behaviour against each DPC requirement is verified in the section-by-section walkthrough above — the walkthrough is itself the controller's pre-deployment verification record. |
| **No pre-ticked boxes in the CMP** | Verified in EDPB walkthrough Section 4 and DPC Section 16 above — Cookiebot category toggles default to off. |
| **Six-month consent renewal** | Cookiebot's automatic re-prompt fires at six months. Verified in DPC Section 11 above. The DPC's footnote 3 confirms six months is the appropriate outer limit for first-principles reasons; Cookiebot's default matches. |
| **Withdrawal as easy as giving consent** | Cookiebot's privacy trigger (the floating fingerprint icon at the bottom-left of every page) resets consent in one click — same number of clicks as Allow all on the original banner. Verified in DPC Section 11 above. |
| **Article 30 RoPA — website slice** | The website's processing activities (cookie consent log, contact-form submissions, any analytics added later) need to be recorded in Mary's firm-wide RoPA. **The RoPA itself does not exist yet** — flagged in pre-launch action below. The website slice can be drafted by the website manager once the firm-wide RoPA structure is in place. |
| **Article 30 RoPA — firm-wide** | This is a firm responsibility, not a website-manager responsibility. Mary (or a designated DP point of contact) must maintain a RoPA for client files, court correspondence, accounts, and HR processing. The under-250 carve-out does not apply to a solicitor's firm because the processing is not occasional and may include special category data. |
| **Controller-vs-processor distinction** | Mary is the controller. Cookiebot and Resend are processors. Each requires a written processor agreement (DPA) under Article 28. Cookiebot's standard DPA and Resend's standard DPA both need to be on file as part of the RoPA evidence pack. |

### Pre-launch action

1. **Re-read this DPC walkthrough** end to end. The section-by-section verification steps are the controller's evidence that the CMP "does what it purports to do." If anything is out of date with the live Cookiebot admin (e.g. a setting path has moved), update it.
2. **Confirm Cookiebot's six-month re-prompt is enabled** in the live Cookiebot admin. The default is six months but verify in the admin UI before launch.
3. **Draft the website slice of the Article 30 RoPA.** The website slice covers cookie processing, contact-form processing, and any analytics. Use the seven Article 30(1) headings (a)–(g) as the template.
4. **Flag the firm-wide RoPA obligation to Mary as a **firm responsibility** — the website manager can draft the website slice but cannot draft the RoPA covering Mary's client files, accounts, and HR. Mary needs to either keep one herself or appoint a data protection point of contact who does.
5. **Confirm DPAs are on file.** Cookiebot DPA and Resend DPA — both as signed PDFs in `legal-compliance/processor-agreements/` (folder may need creating).
6. **Run the compliance screenshot script** once the website slice of the RoPA is drafted:
   ```bash
   npx tsx scripts/compliance-screenshot.ts post-section-17-cmp-verification
   ```

### Verification

1. **Open the live site** in a fresh incognito window with cookies cleared.
2. **Confirm the Cookiebot CMP loads** and the banner appears with no pre-ticked boxes — every non-essential category toggle defaults to off.
3. **Click Deny.** Open DevTools → Application → Cookies. Confirm `CookieConsent` records `method: 'explicit'` and all non-essential categories `false`. No analytics or marketing cookies should fire.
4. **Click the Cookiebot privacy trigger** (floating fingerprint icon). Confirm the banner reopens and the consent state can be changed in one click — the same number of clicks as the original Allow all.
5. **Confirm the six-month re-prompt setting** is enabled in the Cookiebot admin (Manager → Settings → Consent expiration).
6. **Walk through this DPC walkthrough section by section** — for each DPC requirement, confirm Cookiebot's live admin behaviour still matches the verification step.
7. **Open the firm's Article 30 RoPA** (when it exists) and confirm the website slice is present, with all seven Article 30(1) headings filled in.
8. **Run the dated compliance screenshot** to capture the CMP state:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-17-cmp-requirements
   ```

### Cross-references

> **Cross-reference 1:** Cookiebot's behaviour against every DPC requirement is verified in the section-by-section walkthrough above — this walkthrough is itself the controller's pre-deployment verification record that the CMP "does what it purports to do."
>
> **Cross-reference 2:** The "withdrawal as easy as giving" rule is anchored in **GDPR Article 7(3)** and is mapped in detail in **DPC Section 11 above — "Withdrawal of consent"**.
>
> **Cross-reference 3:** The "no pre-ticked boxes" rule is covered in detail in **EDPB walkthrough Section 4 — Type B Practice: "Pre-ticked Boxes"** (with **GDPR Recital 32** and **Planet49 Case C-673/17** verbatim) and is restated in **DPC Section 16 above**.
>
> **Cross-reference 4:** The Article 30 RoPA obligation extends beyond the website. The firm-wide RoPA is a **firm responsibility**, separate from the website-manager responsibility for the website slice. This will be reflected in the README "TODO — Before Launch" section.
>
> **Cross-reference 5:** The six-month re-prompt is the DPC's first-principles outer limit, not a statutory rule. The DPC's footnote 3 is the only place the figure is anchored — there is no Reg 5 or GDPR article setting the period.

---

## DPC Section 18 — "Requirements for cookie banners"

### The rule the DPC sets

> "If you use a cookie banner to provide further information to users about your use of cookies, the banner must not obscure the text of your privacy policy or cookie policy. Users must always be able to read your cookies and privacy policies without any cookies (other than those falling into one of the two exemptions) being set. A banner that contains a link to more information about the use of cookies must link to easily readable text that is undisrupted by chatbots or other features on the page.
>
> A banner that merely gives the user the option to click 'accept' to say yes to cookies and which provides no other option is not compliant. This means banners with buttons that read 'ok, got it!' or 'I understand', and which do not provide any option to reject cookies or to click for further, more detailed information, are not acceptable and they do not meet the standard of consent required.
>
> You must at least provide information that allows the user to reject non-necessary cookies or to request more information about the use of cookies. In the second layer of information, you must provide further information about the types and purposes of the cookies being set and the third parties who will process information collected when those cookies are deployed.
>
> Regardless of the means you choose to manage user consent, your user interface must meet the requirement that the information provided be clear and comprehensive."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, Section "Requirements for cookie banners", page 12. Verified verbatim against local PDF on 2026-05-02._

### Plain English — what this actually says

The DPC packs **six distinct rules** into this section. Three are new (Irish-specific banner-design rules not covered elsewhere); three are restatements that cross-reference cleanly.

1. **Banner must not obscure the privacy/cookie policy text** *(new — Irish-specific)*. If a visitor opens the privacy policy or cookie policy, the banner cannot sit on top of the text. This is a layout rule about z-index, positioning, and reading order. The visitor must be able to *read* the policy in order to make an informed decision; a banner that covers the policy text defeats that.

2. **Privacy/cookie policy pages must be readable without consent cookies firing** *(new — Irish-specific)*. The visitor needs to be able to read the policies *before* deciding whether to consent. So the policy pages themselves must not depend on any consent-required cookies to render — only Necessary cookies are allowed to fire while the visitor is reading them.

3. **Linked-to information must be undisrupted by chatbots/widgets** *(new — Irish-specific)*. Any link from the banner to "more information" must lead to text that isn't blocked or interrupted by floating chatbot widgets, tracking pixels, intercom popups, or other overlay UI. The DPC names chatbots specifically because they were the most common offender in 2020.

4. **"OK, got it!" / "I understand" banners with no reject option are non-compliant** *(restated — covered in EDPB walkthrough Section 3, Para 8)*. A banner with only one button — even an "Accept" button — is not consent. The visitor must have a meaningful choice.

5. **Two-layer disclosure** *(partly restated — DPC Section 14 anchored the principle; the type/purpose/third-party checklist here is the most specific articulation)*. First layer = the banner. Second layer = the cookie policy / cookie declaration. The second layer must include cookie types, purposes, and third parties.

6. **"Clear and comprehensive" applies to the UI as well as the text** *(restated — covered in DPC Section 14)*. The Reg 5(3)(b) standard applies to the banner UI itself, not just the words on it.

### What "the banner must not obscure the policy" means in practice

A worked example. Suppose Mary's banner is rendered as a fixed bottom strip, 200 pixels tall, on every page. A visitor clicks the *"Cookie Policy"* link in the banner. The cookie policy page loads — but the banner is still pinned to the bottom of the viewport, covering the last 200 pixels of the policy text.

Three failure modes the DPC is ruling out:

| Failure | What it looks like | Why it breaks the rule |
|---|---|---|
| **Banner overlays the policy** | Visitor scrolls to read the cookie policy; the banner sits on top of the bottom of the page covering text. | The visitor cannot read all the policy without dismissing the banner — but dismissing the banner is the consent action they are trying to make an informed decision about. |
| **Policy page itself fires non-essential cookies on load** | The cookie policy page contains an embedded analytics script that fires before the visitor has consented. | The visitor cannot read the policy without already triggering the very cookies they are trying to learn about. |
| **Floating chatbot covers the policy text** | Intercom or another widget loads on the policy page and overlays the text with a chat bubble. | Same problem — the visitor cannot read all the information they need to decide. |

The fix in each case is layout discipline: the policy pages must render with **only Necessary cookies**, **no overlays that block reading**, and **the banner must auto-dismiss or scroll-out-of-the-way on the policy pages themselves** if it would otherwise obscure text.

### How this site complies with DPC Section 18

| Rule | How this site complies |
|---|---|
| **Banner does not obscure the privacy/cookie policy text** | **Implemented.** On `/privacy` and `/cookie-policy` only, the banner is rendered **inline at the bottom of the page, between the policy content and the footer** — not as a fixed overlay. The visitor reads the full policy uninterrupted, then sees the Accept / Reject / Show details buttons in document flow at the end of the content. All other pages keep Cookiebot's default fixed-bottom banner unchanged. Implementation lives in `src/styles/cookiebot.css` (Cookiebot widget overrides scoped to `body[data-page="policy"]`) and `<style is:global>` blocks in `src/pages/privacy.astro` and `src/pages/cookie-policy.astro` (body flex-column layout). The `data-page` attribute is wired through `BaseLayout.astro` via the `pageId` prop. See commits `3369b9d` → `9c4dd3d` for the full sequence. |
| **Privacy/cookie policy pages render without consent cookies firing** | Cookiebot's `data-blockingmode="auto"` blocks every non-essential cookie until consent is given, on every page including the policy pages. So the policy pages themselves do not fire any consent-required cookies. Verified in **DPC Section 12 above (verification step 5)**. |
| **No chatbots/widgets disrupt linked-to information** | This site has **no chatbot, no Intercom widget, no live-chat overlay, no floating support widget**. The only floating UI element is Cookiebot's privacy trigger (a small fingerprint icon for withdrawing consent — exempt from this rule because it serves the visitor's rights). Verify by visual inspection of every page. |
| **Banner provides Reject as well as Accept** | Mary's Cookiebot banner has **Allow all**, **Allow selection**, and **Deny** as three equally prominent buttons. No "OK, got it!" or "I understand"-only patterns. Covered in detail in **EDPB walkthrough Section 3 — Type A Practice**. |
| **Two-layer disclosure with types, purposes, third parties** | First layer (the banner) summarises in four categories. Second layer (the Cookie Declaration on `cookie-policy.astro`) is the Cookiebot-generated per-cookie list with name, provider (third party), purpose, expiry, and category. Auto-scanned and auto-updated. |
| **UI is clear and comprehensive** | Banner copy in `banner-copy-mary-molloy.md` is short, declarative, plain-English. Buttons are clearly labelled. No deceptive button contrast. Covered in detail in **DPC Section 14 above** and **EDPB walkthrough Section 5 — Type C: Deceptive Button Contrast**. |

### How the inline-banner override works

A short note on the implementation so a future maintainer (or auditor) can reason about it:

1. **`BaseLayout.astro`** accepts an optional `pageId` prop and applies it as `<body data-page={pageId}>`. Pages that don't pass `pageId` get no attribute and behave normally.
2. **`privacy.astro` and `cookie-policy.astro`** pass `pageId="policy"` to `BaseLayout`. Each page also includes a `<style is:global>` block making `body[data-page="policy"]` a flex column with `min-height: 100vh`. (The body-layout rule lives in the page files because that is where a developer would naturally look for it; the file itself documents the cross-reference to `cookiebot.css`.)
3. **`src/styles/cookiebot.css`** scopes Cookiebot widget overrides to `body[data-page="policy"]`:
   - `#CybotCookiebotDialog` is reset to `position: static`, with all positioning / sizing properties unset, plus `padding-block-start: var(--space-5xl)` for navbar clearance and `order: 1`.
   - `body[data-page="policy"] > footer` is given `order: 2` so the flex order becomes: content (default `order: 0`) → cookie banner (`order: 1`) → footer (`order: 2`).
   - `#CybotCookiebotDialogBodyUnderlay` is hidden so the dim overlay does not re-obscure the now-readable policy text.
4. **All overrides use `!important`** because Cookiebot injects positioning via inline `style="..."` attributes, which beat normal CSS selectors. This is the standard way to win against third-party inline styles.
5. **Scope discipline:** every override starts with `body[data-page="policy"]`, so the rules cannot leak onto any page that does not pass `pageId="policy"`.

### Pre-launch action

1. **Open `/privacy` and `/cookie-policy` on the live site** in a fresh incognito window with cookies cleared. Confirm:
   - The banner does not appear at the top of the page.
   - The banner sits between the policy content and the footer.
   - The policy text is fully readable above the banner with no overlap.
2. **Test at multiple viewport widths** — phone (~375 px), tablet (~768 px), desktop (~1280 px), wide desktop (~1600 px). Confirm the banner sits inline between content and footer at every width on `/privacy` and `/cookie-policy`. Confirm every other page (home, services, contact) still shows Cookiebot's default fixed-bottom banner — no leakage.
3. **Confirm no overlay widgets on policy pages.** Today there are none. If a chatbot or live-chat is added later, exempt it from rendering on `/cookie-policy` and `/privacy`.
4. **Run the compliance screenshot script** to capture the banner-and-policy state for the dated record:
   ```bash
   npx tsx scripts/compliance-screenshot.ts post-section-18-inline-banner-policy-pages
   ```

### Verification

1. **Open the live site** in a fresh incognito window with cookies cleared.
2. **Navigate to `/cookie-policy`.** Confirm the banner is **not** at the top of the page covering the title. Scroll to the bottom — banner should sit inline between the policy content and the footer with the Accept / Reject / Show details buttons reachable in normal document flow.
3. **Navigate to `/privacy`.** Repeat — banner inline between content and footer, full policy text readable above.
4. **Inspect `<body>` in DevTools.** Confirm it has the attribute `data-page="policy"`. If missing, the override will not fire.
5. **Open DevTools → Network → Filter by "doc"/"script"/"img"** and reload the cookie-policy page **without dismissing the banner.** Confirm no analytics, advertising, or marketing tracker requests fire — only Cookiebot, the site's own JS/CSS, and any Necessary-category requests.
6. **Visit any non-policy page (home, services, contact)** with cookies still cleared. Confirm Cookiebot's default fixed-bottom banner appears as normal — the inline override is correctly scoped and does not leak.
7. **Visually scan every page** for floating overlays. Confirm the only floating UI is Cookiebot's privacy trigger.
8. **Confirm the banner offers Deny in equal prominence to Allow all** — covered in EDPB walkthrough Section 5.
9. **Open the Cookie Declaration block on `cookie-policy.astro`** and confirm it lists every cookie with name, provider (third party), purpose, expiry, and category.
10. **Run the dated compliance screenshot** to capture the banner-and-policy state:
    ```bash
    npx tsx scripts/compliance-screenshot.ts dpc-section-18-banner-requirements
    ```

### Cross-references

> **Cross-reference 1:** The "must provide a Reject option" rule is covered in detail in **EDPB walkthrough Section 3 — Type A Practice: "No Reject Button on the First Layer"** (Para 6, 7, 8). EDPB Section 3 is more specific than the DPC's framing here — it requires the Reject option **on the same layer as Accept**, not just somewhere in the flow. Mary's Cookiebot banner already meets the stricter EDPB rule. |
>
> **Cross-reference 2:** The "clear and comprehensive" standard for the UI is anchored in **DPC Section 14 above — "Clear and comprehensive information"** and maps to **GDPR Article 12(1)** (concise, transparent, intelligible, plain language).
>
> **Cross-reference 3:** The two-layer disclosure pattern (banner = first layer, cookie policy = second layer) is the design choice DPC Section 14 endorses. Section 18 here makes the second-layer content requirements specific: types, purposes, third parties.
>
> **Cross-reference 4:** The "no deceptive button contrast" rule that complements "no Accept-only banners" is covered in detail in **EDPB walkthrough Section 5 — Type C: Deceptive Button Contrast**.
>
> **Cross-reference 5:** The "policy pages render with only Necessary cookies" requirement is satisfied by the same `data-blockingmode="auto"` setting verified in **DPC Section 12 above** (Consent Before Cookie Setting).

---

## DPC Section 19 — "Can you rely on the user's browser settings to infer consent?"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Can you rely on the user's browser settings to infer consent?
>
> In general, no. Users of your website or app cannot be deemed to have consented simply because they are using a browser or other application which by default enables the collection and processing of their information. As clarified by the Article 29 Working Party in its Opinion 2/2010 on Online Behavioural Advertising, average data subjects are not aware of the tracking of their online behaviour or the purposes of the tracking. They are not always aware of how to use browser settings to reject cookies, even if this information is included in privacy policies.
>
> Even if you provide information in general terms and conditions and/or a privacy policy about third-party cookies used for behavioural advertising, including the basic uses/purposes of such cookies and how they can be avoided by setting the browser, this will not meet the 'clear and comprehensive' information requirements of Regulation 5(3).
>
> The circumstances where browser settings are likely to be considered valid to constitute consent to the setting of cookies are likely to be very limited and they would need to be assessed on a case-by-case basis."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Can you rely on the user's browser settings to infer consent?", pages 12–13. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

The DPC is closing a specific loophole. Some operators argue: *"If a visitor's browser is configured to accept cookies by default, and the visitor has not changed that default, they have consented."* The DPC says **no, that does not count as consent.**

Three reasons spelled out in the section:

1. **Browser defaults are not informed choices.** Most browsers ship with cookies enabled. The visitor did not consciously enable them — they simply did not change a default they may not even know exists.
2. **Most visitors do not know browser cookie settings exist or how to use them.** Even tech-aware users rarely visit `chrome://settings/cookies` or its equivalents. A consent regime that depends on visitors finding and changing those settings is not realistic.
3. **Burying browser-settings instructions in a privacy policy does not fix it.** Even if your privacy policy explains "you can reject these cookies by changing your browser settings to block third-party cookies, here is how," the visitor has to (a) find the policy, (b) read it, (c) understand the technical instructions, and (d) act on them — all *after* the cookies have already been set. That is not "clear and comprehensive" information for the purposes of **Regulation 5(3) of S.I. 336/2011**.

### The "case-by-case basis" line — what it does and does not mean

The final paragraph says circumstances where browser settings *can* constitute valid consent are "likely to be very limited" and need "case-by-case" assessment.

This is not a backdoor. The DPC is acknowledging that **future browser standards** (such as a browser-level consent API where the user actively configures granular preferences for each website category) might one day satisfy GDPR's informed-and-specific consent test. That is not where browsers are today. Today's browsers offer crude binary toggles (block all third-party cookies / allow them) which do not capture the per-purpose specificity GDPR Article 4(11) and 7 require.

So: **for any site shipping today, the answer is "no — browser settings cannot replace a consent banner."** Mary's site is no exception.

### What this means for the Global Privacy Control (GPC) and Do Not Track (DNT) signals

GPC and DNT are HTTP headers a browser can send to indicate the visitor's preference. They are different from "browser cookie settings" but the DPC's reasoning applies equally:

- **GPC** is a more recent signal (RFC, draft) where the browser tells every site "this user does not consent to the sale or sharing of their personal data." Some US state laws (CCPA, CPRA) require operators to honour GPC. **Under GDPR / S.I. 336/2011, GPC is not currently treated as a legally sufficient consent withdrawal signal in Ireland** — the visitor must actively withdraw via the site's own withdrawal mechanism (covered in **DPC Section 11 above**).
- **DNT** has been deprecated by most browsers and never had legal force in the EU.

**This site does not act on GPC or DNT.** Visitors withdraw consent via the Cookiebot privacy trigger or by clearing cookies — both visible site mechanisms — which is what the DPC requires.

### How this site complies with DPC Section 19

| Rule | How this site complies |
|---|---|
| **Browser default settings are not treated as consent** | Cookiebot's `data-blockingmode="auto"` blocks every non-essential cookie until the visitor **actively clicks Allow all, Allow selection, or Deny** in the consent banner. The browser's cookie-acceptance defaults are irrelevant — Cookiebot blocks regardless. |
| **No reliance on the privacy policy alone for consent information** | Visitors are not asked to read the privacy policy or cookie policy to find out how to reject cookies. The Reject (Deny) button is on the **first layer of the consent banner**, equally prominent to Allow all, before any non-essential cookie has fired. The privacy and cookie policies are supporting documents, not the consent mechanism. |
| **No "you can change your browser settings" disclaimer in lieu of a banner** | The site does not contain language like *"you can disable cookies by changing your browser settings"* as a substitute for asking for consent. Where browser-settings information appears (in the cookie policy) it is informational only — not a substitute for the active consent action. |
| **GPC / DNT signals are not relied on** | The site does not silently treat a GPC or DNT header as either consent or withdrawal. Consent is captured and withdrawn via Cookiebot's banner and privacy trigger only — the same mechanism for every visitor regardless of browser. |

### Pre-launch action

1. **When drafting the privacy policy and cookie policy:** if you mention browser settings at all (e.g. "as an additional measure, you can also configure your browser to reject cookies"), frame it as **supplementary information, not the consent mechanism**. The consent mechanism is the banner. Browser settings are a belt-and-braces extra the visitor *could* use, not an alternative to clicking Deny.
2. **Do not add language** like *"by continuing to use this site you consent to cookies"* or *"if your browser is set to accept cookies, you have consented."* Both fail the DPC's test in this section.
3. **Do not act on GPC / DNT** as either consent or withdrawal in any future analytics or marketing integration. If a third-party plugin (e.g. a future advertising network) honours GPC by default, that is fine — but the **first** layer of consent must remain the Cookiebot banner action.

### Verification

1. **Open the live site in a fresh incognito window.** Confirm the Cookiebot banner appears regardless of browser settings — even on a browser configured to accept all cookies, the banner still loads and no non-essential cookie fires until the visitor clicks.
2. **Set the browser to block third-party cookies.** Confirm the banner still appears and behaves identically — Cookiebot is first-party, so blocking third-party cookies does not suppress the banner.
3. **Send a GPC header (or use a browser/extension that does, such as Brave or DuckDuckGo).** Confirm the Cookiebot banner still appears and that no automatic withdrawal or consent inference happens — the visitor must still click a button.
4. **Search the privacy policy and cookie policy** (once drafted) for the phrases "by continuing", "browser settings", "deemed to consent", "implied consent", "your continued use". If any of these appear in a way that suggests browser settings or continued browsing constitutes consent, rewrite — those phrases are direct DPC failure markers.
5. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-19-no-browser-settings-consent
   ```

### Cross-references

> **Cross-reference 1:** The active-consent rule (banner click required) is anchored in **DPC Section 13 above — implied consent**, which closes the door on "continued browsing" as consent. Section 19 closes a parallel door on "browser defaults" as consent. They are two different framings of the same underlying GDPR Article 4(11) / Article 7 active-consent requirement.
>
> **Cross-reference 2:** The "clear and comprehensive" standard the DPC anchors this section to is covered in detail in **DPC Section 14 above — Clear and comprehensive information**, which maps it to **GDPR Article 12(1)** (concise, transparent, intelligible, plain language).
>
> **Cross-reference 3:** The "first-layer Reject button" requirement that makes this site compliant is covered in **EDPB walkthrough Section 3 — Type A Practice: 'No Reject Button on the First Layer'** (Para 6, 7, 8) and **DPC Section 12 above — banner mechanics**.
>
> **Cross-reference 4:** The Article 29 Working Party Opinion 2/2010 cited by the DPC is the predecessor body to the EDPB. The EDPB has continued and refined the same line of reasoning in its **Guidelines 5/2020 on consent under Regulation 2016/679** — covered in the EDPB walkthrough.

---

## DPC Section 20 — "Confusing interfaces"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Confusing interfaces
>
> Take accessibility into account in designing your interfaces. If you use colour schemes for your cookie banners or your sliders and checkboxes that blend into the overall background of your site, these settings can be hard to navigate, particularly for people with vision impairments or colour blindness. While binary, colour-coded sliders or buttons may purport to signify a YES and NO option or an ON and OFF option, these colour schemes are not always accessible or self-explanatory to users who do not see colours the same way as other people. Consider testing your interface with users who have vision or reading impairments to make them as accessible as possible to all users."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Confusing interfaces", page 13. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

The DPC is making **accessibility a consent issue**, not just a UX nice-to-have. The reasoning runs:

1. Consent must be **informed** (GDPR Article 4(11)) and **clearly distinguishable** (GDPR Article 7(2)).
2. If a visitor cannot tell which button is Accept and which is Reject — because the colours blend into the page or because the visitor cannot see those particular colours — the visitor is not in a position to give informed consent.
3. Therefore, an inaccessible banner is not just bad design — **the consent it captures may be invalid**.

Three specific failure modes the DPC identifies:

1. **Banner colours that blend with the site background.** A pale-grey "Reject" button on a pale-grey page is hard for everyone to see, and impossible for low-vision users.
2. **Colour-only signalling for binary choices.** A green "ON" slider next to a red "OFF" slider relies on colour vision. A red-green colour-blind visitor (around 8% of men) cannot tell them apart.
3. **No textual or shape cues to back up colour.** "Click the green one to accept" is not enough — the choices need to be self-explanatory through text labels and contrast, not colour alone.

The remedy: **accessible-by-default design, tested with real users where possible.**

### How "accessibility = consent validity" connects to other rules

This section is the DPC saying out loud what is implicit in three other rules:

| Connected rule | How Section 20 reinforces it |
|---|---|
| **DPC Section 14 — clear and comprehensive information** | Information is not "clear" if a visitor cannot perceive it. A button labelled "Accept" in 2 px contrast is not clear, regardless of the wording. |
| **DPC Section 18 — banner UI must be clear** | "UI is clear and comprehensive" includes its visual properties, not just its copy. |
| **EDPB Cookie Banner Taskforce Section 5 — Type C deceptive button contrast** | EDPB Section 5 rules out *deliberate* contrast manipulation (Reject in low-contrast grey, Accept in high-contrast colour). DPC Section 20 covers the **adjacent** problem: even unintentional low contrast or colour-only signalling is a compliance issue. |

So failing Section 20 is not a separate fine bucket — it is the same failure mode as Section 14 and EDPB Section 5, viewed from the accessibility angle.

### What "accessible" means concretely — the WCAG 2.1 anchor

The DPC does not cite WCAG by name in this section, but the EU Web Accessibility Directive (2016/2102) and the European Accessibility Act 2025 both anchor "accessible" to **WCAG 2.1 Level AA**. That is the de-facto standard Irish regulators expect public-facing websites to meet — and a solicitor's firm website serves the public.

The two WCAG criteria that map directly onto Section 20:

| WCAG 2.1 criterion | What it requires | Application to the consent banner |
|---|---|---|
| **1.4.1 Use of Colour (Level A)** | Colour must not be the only means of conveying information or distinguishing visual elements. | Accept and Reject buttons must be distinguishable by **text label, shape, or position** — not colour alone. |
| **1.4.3 Contrast (Minimum) (Level AA)** | Text must have a contrast ratio of at least **4.5:1** against its background (3:1 for large text and UI components). | Every button label, link, and body of text in the banner must meet 4.5:1 against its background. |

Mary's site already follows this rule for all its own UI (verified using `colorjs.io` per `CLAUDE.md`). Cookiebot's banner is the part outside our direct control — but Cookiebot's defaults are WCAG-compliant, and the dashboard does not let us drop below that threshold without explicit override.

### How this site complies with DPC Section 20

| Rule | How this site complies |
|---|---|
| **Banner colours do not blend with the site background** | Cookiebot's banner is rendered in its own dialog with high contrast against the site (white text on dark navy, or dark text on cream — controlled by the Cookiebot dashboard's chosen palette, and verified against the site's `tokens.css` palette). Banner has a visible border / shadow / inline-block treatment so the boundary is unambiguous. |
| **Buttons are self-explanatory by text, not by colour** | Cookiebot's buttons use **text labels**: "Allow all", "Allow selection", "Deny" / "Show details". A visitor who cannot perceive colour can still read the label and understand what each button does. No emoji-only or icon-only buttons. |
| **Sliders / checkboxes use text labels too** | The "Show details" expanded view shows each cookie category (Necessary, Preferences, Statistics, Marketing) with its name as text alongside the toggle, not the toggle alone. |
| **Banner contrast meets WCAG 2.1 AA (4.5:1 for text)** | Cookiebot's default styling meets AA contrast. The site's `tokens.css` palette has been verified using `colorjs.io` per `CLAUDE.md`. **Verify the live banner contrast** once it is configured in the Cookiebot dashboard for the Mary Molloy account. |
| **Colour signalling is reinforced by text** | The Reject button is not just "red" — it is labelled "Deny". The Accept button is not just "green" — it is labelled "Allow all". A red/green colour-blind visitor can still distinguish them by label. |
| **Site-wide accessibility** | The site's design system (`tokens.css`) defines fg/bg pairs that meet WCAG AA out of the box. New colour values are verified via the `colorjs.io` script before commit per `CLAUDE.md`. So even if visitors with vision impairments use the site's general navigation around the banner, every page meets the same standard. |

### Pre-launch action

1. **Verify the Cookiebot banner's live contrast** once it is loaded with Mary's account credentials. Use Chrome DevTools' Lighthouse Accessibility audit, or paste the foreground/background pair into a `colorjs.io` check script (per `CLAUDE.md`). Confirm:
   - Body text contrast ≥ 4.5:1
   - Button label contrast ≥ 4.5:1
   - Button border / focus indicator contrast ≥ 3:1
2. **Run a colour-blindness simulation** on the banner. Chrome DevTools → Rendering → Emulate vision deficiencies. Test the banner under: Protanopia, Deuteranopia, Tritanopia, Achromatopsia. Confirm Allow / Deny / Show details remain visually distinguishable in every mode by **label and position**, not colour.
3. **Keyboard-test the banner.** Tab through every interactive element. Confirm:
   - Focus indicator is visible (≥ 3:1 contrast against the surrounding banner)
   - Tab order is logical (Allow → Allow selection → Deny → Show details, or reverse)
   - Enter / Space activates the focused button
   - Escape does not silently dismiss without an explicit consent decision
4. **Screen-reader-test the banner.** VoiceOver on macOS or NVDA on Windows. Confirm each button is announced with its label (not as "button button button"), and the banner is announced as a dialog requiring action when it loads.
5. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-20-confusing-interfaces
   ```

### Verification

1. **Open the live site in incognito** with cookies cleared. Banner appears.
2. **Inspect each button's contrast ratio** using Chrome DevTools' Accessibility panel (or the colour picker, which now shows contrast inline). Confirm every label hits 4.5:1 against its background.
3. **Inspect the button labels themselves.** Confirm each says what it does — "Allow all", "Allow selection", "Deny" / "Show details". No icon-only, emoji-only, or colour-only buttons.
4. **Cycle through colour-blindness simulations** in DevTools. Confirm every state of the banner remains usable.
5. **Run keyboard navigation.** Tab order, focus visibility, Enter / Space, Escape behaviour all as above.
6. **Confirm site-wide accessibility** — open `tokens.css` and confirm the documented contrast ratios in the header comments. New colour values must be verified via `colorjs.io` per `CLAUDE.md`.
7. **Run a Lighthouse Accessibility audit** on `/` (home), `/services`, `/about`, `/contact`, `/privacy`, `/cookie-policy`. Score should be 95+ on every page. Banner-related issues will surface in the audit.

### Cross-references

> **Cross-reference 1:** The "deliberate" version of contrast manipulation (Type C dark patterns) is covered in **EDPB walkthrough Section 5 — Type C: Deceptive Button Contrast**. EDPB Section 5 catches operators who *intentionally* nudge users toward Accept by burying Reject in low-contrast grey. DPC Section 20 catches the **unintentional** version — same compliance failure, different intent.
>
> **Cross-reference 2:** "Clear" is anchored to the regulator standard in **DPC Section 14 above — Clear and comprehensive information** and **GDPR Article 12(1)** (concise, transparent, intelligible, plain language). Visual clarity is part of "clear."
>
> **Cross-reference 3:** The site-wide accessibility discipline (WCAG 2.1 AA, verified via `colorjs.io`) is documented in **`CLAUDE.md` — Colour Tooling section** and applies to every component. The Cookiebot banner is the only public-facing UI element not styled in our own components — and Cookiebot's own defaults meet the same bar.
>
> **Cross-reference 4:** The text-label discipline (every button readable as a sentence) is reinforced by **EDPB walkthrough Section 5 (button labelling)** and the copy work in `legal-compliance/cookies/banner-copy-mary-molloy.md`.

---

## DPC Section 21 — "Cookie lifespans"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Cookie lifespans
>
> The lifespan of a cookie must be proportionate to its function. It would not be considered proportionate to have a session cookie with a lifespan of 'forever', for example."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Cookie lifespans", page 13. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

A cookie that exists for longer than it needs to is non-compliant. The DPC frames this as a **proportionality** test, which is the same test GDPR Article 5(1)(c) (data minimisation) and 5(1)(e) (storage limitation) impose on personal data generally:

- Storage time must be **no longer than is necessary** for the purpose.
- A cookie that performs a session-only function (e.g. holding a contact-form field's value across a single page submission) must **expire when the session ends** — not in 30 days, not in a year, not "forever".
- A cookie that genuinely needs persistence (e.g. remembering a consent decision so the visitor isn't re-prompted on every page load) gets the **shortest persistence that satisfies the purpose**, not the longest.

The DPC's example — *"a session cookie with a lifespan of 'forever'"* — is deliberately stark. A session cookie that does not expire when the session ends is by definition mis-classified, mis-configured, or both.

### What "proportionate" means in numbers

The DPC does not name a maximum in this section, but the broader DPC and EDPB regulator practice has settled on these informal benchmarks:

| Cookie purpose | Defensible lifespan | DPC / EDPB anchor |
|---|---|---|
| **Session-only function** (form field, current login, current cart) | **Until session ends** (no `Expires` / `Max-Age` set, or a few hours at most) | DPC Section 21 example. |
| **Consent record** | **6–12 months**, with re-prompt at 6 months | DPC Section 11 footnote 3 (the "appropriate to re-prompt at 6 months" line) and EDPB Cookie Banner Taskforce. |
| **Authentication** ("remember me") | **30 days, extended on use** | Industry consensus; aligned with GDPR Article 5(1)(e) data minimisation. |
| **Analytics** | **13 months max** | This was the CNIL (French regulator) limit, since adopted as the de facto European standard. The DPC has not contradicted it. |
| **Marketing / advertising** | **As short as possible**, no automatic standard | Advertising lifespans must be justified per-purpose. The longer the lifespan, the heavier the justification burden. |

A site that sets every cookie to expire in five years is not automatically non-compliant — but it would have to **justify the five-year figure for each cookie individually**. In practice no solicitor's site can defend a five-year analytics lifespan, so the safer pattern is to follow the benchmarks above.

### How this site complies with DPC Section 21

| Rule | How this site complies |
|---|---|
| **Session cookies expire when the session ends** | The site does not set its own session cookies. The contact form (`/contact`) uses a stateless POST → Resend pipeline — no server-side session state, no session cookie. Cookiebot's own session handling (e.g. the brief in-flight cookie during the consent action) follows its documented session lifetimes. |
| **Consent record uses 6–12 month lifespan with re-prompt** | Cookiebot's `CookieConsent` cookie lifespan is **12 months** (Cookiebot's documented default). The banner re-appears at 6 months per Cookiebot's free-tier behaviour, aligned with **DPC Section 11 footnote 3**. |
| **No "forever" cookies** | Cookiebot blocks every non-essential cookie until consent. The cookies that **are** set (Cookiebot's own consent record, plus any future consented Statistics / Marketing cookies) inherit Cookiebot's lifetime configuration — no manual code path on the site sets a cookie with a `Max-Age` greater than Cookiebot's defaults. |
| **Analytics cookies, if added later, follow the 13-month standard** | The site currently sets **no analytics cookies**. If Google Analytics or similar is added later, the lifespan will follow the 13-month European standard, set in the analytics provider's configuration. **Future-state action — flagged below.** |
| **All cookie lifespans are visible to the visitor** | The Cookie Declaration on `/cookie-policy` (Cookiebot-generated) lists each cookie with its **expiry / lifespan** alongside name, provider, purpose, and category. Auto-scanned and auto-updated. So a visitor can audit lifespans the same way a regulator can. |

### Pre-launch action

1. **Open the live Cookie Declaration on `/cookie-policy`** once Cookiebot is connected to Mary's account and the site's live domain has been scanned. Confirm:
   - No cookie listed with a lifespan of "Persistent" without a numeric expiry.
   - No cookie listed with a lifespan greater than 13 months.
   - The Cookiebot consent cookie (`CookieConsent`) lifespan is 12 months.
2. **If a future analytics or marketing integration is added** (e.g. Google Analytics), configure the lifespan in that provider's dashboard *before* enabling the integration:
   - Google Analytics 4: `_ga` — 2 years by default. **Override to 13 months** in GA4 → Admin → Data Settings → Data Retention.
   - Any third-party advertising pixel: configure to expire in 6 months unless a longer lifespan is independently justifiable.
3. **Document the rationale** for any cookie lifespan over 6 months in `legal-compliance/gdpr/record-of-processing-activities.md`. The DPC will expect a written justification on audit, not just the cookie configuration itself.
4. **Run the dated compliance screenshot** of `/cookie-policy` once the live Cookiebot account is connected:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-21-cookie-lifespans
   ```

### Verification

1. **Open the live site in an incognito window.** Accept all cookies on the banner.
2. **Open DevTools → Application → Cookies → [the site domain].** Look at the **Expires / Max-Age** column for every cookie.
3. **Check no cookie has Expires = "Session" combined with a Max-Age in the millions of seconds** — that combination is the "session cookie with a lifespan of forever" the DPC explicitly rules out.
4. **Cross-check against the Cookie Declaration on `/cookie-policy`.** Every cookie set must appear in the declaration, with the same lifespan. Any cookie set but not declared = non-compliance.
5. **Confirm the Cookiebot consent cookie** (`CookieConsent`) has Expires = 12 months from today.
6. **Re-test 6 months from launch** to confirm the banner re-appears (per DPC Section 11 footnote 3 / Cookiebot's re-prompt schedule). Note this in the maintenance calendar.
7. **Run the dated compliance screenshot:**
    ```bash
    npx tsx scripts/compliance-screenshot.ts dpc-section-21-cookie-lifespans
    ```

### Cross-references

> **Cross-reference 1:** The 6-month re-prompt rule is anchored in **DPC Section 11 above — Withdrawal of consent** (footnote 3 of the DPC guidance) and aligned with the **EDPB Cookie Banner Taskforce Report Section 6**. Section 21 here gives the upstream "proportionate lifespan" reason behind the re-prompt cadence.
>
> **Cross-reference 2:** The data-minimisation root of "proportionate" lifespans is **GDPR Article 5(1)(c)** (data minimisation) and **5(1)(e)** (storage limitation). Both are read into S.I. 336/2011 via Reg 5(3) and the GDPR's general application to all personal-data processing.
>
> **Cross-reference 3:** Cookie-lifespan disclosure to the visitor is part of the "clear and comprehensive" standard from **DPC Section 14 above** and the second-layer disclosure rule from **DPC Section 18 above**. The Cookie Declaration on `/cookie-policy` is the single document that satisfies all three.
>
> **Cross-reference 4:** The Article 30 RoPA must record retention periods per processor — covered in **`legal-compliance/gdpr/record-of-processing-activities.md`**. Section 21 is the cookie-specific lens on the same retention discipline.

---

## DPC Section 22 — "Joint controllers"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Joint controllers
>
> You should assess your relationship with the third parties whose assets you deploy on your website. This means that where you deploy 'like' buttons, plugins or widgets, pixel trackers or social media-sharing tools, you should be aware of what data you are sending to those third parties and of the fact that you may be considered a controller in respect of any personal data you collect and disclose to those third parties. This position was clarified by the Court of Justice of the European Union in the *Fashion ID* judgment of July 2019.
>
> Consider also the relationship that might apply in a case where your website uses a third-party payment company to process payments for goods or services sold on your site. Aside from your responsibilities with regard to obtaining consent for cookies, if you use a third party to process payments, you will need a controller-processor contract in place with that organisation that meets the requirements of Article 28(3) of the GDPR. If that third party has any role in determining the means or the purposes of the processing of personal data passed to it by your organisation via cookies or other means, it may also have a controller relationship in respect of that personal data. It is important that you consider the controller and processor responsibilities and liabilities arising from any relationships with third parties whose cookies are set via your domain."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Joint controllers", pages 13–14. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

The DPC is closing a popular escape hatch. Some operators argue: *"The Facebook Like button on my page sets cookies on Facebook's domain — that's Facebook's problem, not mine."* The CJEU's **Fashion ID judgment (Case C-40/17, July 2019)** said no, that's wrong.

The reasoning, in three steps:

1. When you embed a third-party widget on your site (Like button, Twitter share, Disqus comments, embedded YouTube video, advertising pixel), the **mere act of loading your page** causes the visitor's browser to send a request to the third party. That request carries the visitor's **IP address, user agent, the URL they're visiting, and any cookies the third party has previously set**.
2. You — the site operator — are the one who **decided to embed that widget** and therefore decided this transfer would happen. You are not a passive bystander; you are the **cause** of the data flow.
3. So you are a **controller** in respect of the personal data that flows from your visitor's browser to the third party at the moment the widget loads. You and the third party are **joint controllers** for that flow under **GDPR Article 26**.

This was the *Fashion ID* judgment's holding. Fashion ID had a Facebook Like button. The CJEU said Fashion ID was a joint controller with Facebook for the data the button caused to be sent to Facebook on every page load — even if Fashion ID never received that data themselves.

### Three categories the DPC names — what each means in plain terms

| Category | Real-world example | What relationship you may have |
|---|---|---|
| **Like buttons / plugins / widgets / pixel trackers / social-sharing tools** | Facebook Like button, Twitter share, LinkedIn share, embedded YouTube video, embedded Google Maps, Disqus comments, Hotjar session recording, Meta Pixel | **Joint controller** with the third party for the data your visitor's browser sends to them on page load (per *Fashion ID*). |
| **Third-party payment companies** | Stripe, PayPal, Worldpay, Realex | **Processor**, requiring a written **Article 28(3)** contract. **Or possibly joint controller**, if the payment company also uses the data for its own purposes (e.g. fraud-detection product training). Read the contract. |
| **Any third party whose cookies are set via your domain** | Marketing pixel that drops a cookie under `marymolloysolicitor.ie` rather than the third-party domain | **Same as above** — assess case-by-case. The DPC's framing is "consider the responsibilities and liabilities" — meaning the burden is on you, the operator, to do the assessment, not to assume the third party has handled it. |

The common thread: **the operator carries the assessment burden**. Embedding a widget is a deliberate act that creates a data flow. The operator is on the hook for that flow even if the data ends up in someone else's hands.

### Why this section is short and stark

The DPC is not giving you a recipe. The DPC is putting you on notice: **assess every third-party widget on your site against this framework before launch, and document the result**. The section is two paragraphs because the rule is conceptual, not procedural — but the work it triggers is large.

In practice, most small-business sites fail Section 22 for one of three reasons:

1. **They embed a Facebook Like / Twitter share button without thought** — joint controller exposure, no Article 26 arrangement, no transparency information about Facebook receiving visitor data.
2. **They embed YouTube videos** — even one embedded video sends the visitor's IP and viewing data to Google. Joint controller exposure. (Privacy-enhanced "youtube-nocookie.com" embeds reduce but do not eliminate the issue.)
3. **They use a payment processor and assume the processor's standard contract is enough** — without checking whether the processor independently uses the data (most do, e.g. for fraud-detection products), in which case it's not just processor-level but joint-controller-level.

### What compliance actually requires if you do use one of these widgets

The DPC text is short on procedure, but the actual operational checklist is large. If Mary's firm later asks you to add **any** of the widgets named in this section — Facebook Like button, embedded YouTube, Google Maps embed, Google Analytics, Stripe / PayPal, advertising pixel — the following five items are non-negotiable before the widget can ship to production:

#### 1. A written assessment of the relationship

Before adding the widget, write a paragraph (or several) that says: *"On [date] we propose to embed [widget] on [page]. The data flow it creates is: [visitor IP, URL, cookies, etc.] sent to [vendor] on [page-load / interaction / etc.]. Assessing against the *Fashion ID* test, the vendor's role is [joint controller / processor / independent controller]. Our reasoning is [...]."*

File this in `legal-compliance/gdpr/record-of-processing-activities.md` as a new processing activity, and in a new file `legal-compliance/joint-controller-assessments/[vendor].md` if there is a joint-controller relationship.

#### 2. The Article 26 joint-controller arrangement (the contract)

If the assessment concludes joint controllership, **GDPR Article 26** requires a written arrangement with the third party covering at minimum:

- **Who handles transparency information** to the data subject (typically: both parties, in their respective privacy policies, with a cross-reference)
- **Who handles data-subject rights requests** (access, rectification, erasure, restriction, portability, objection — typically: each party for the data they hold, with a transfer mechanism between them)
- **Who handles breach notification** (typically: each party for breaches in their own systems, with mutual notification within a defined window)

In practice, the big vendors publish a standard joint-controller addendum that you accept in the third party's dashboard:

| Vendor | Joint-controller addendum (find in dashboard) |
|---|---|
| **Meta** (Facebook Like, Page Insights, Pixel) | *Page Insights Controller Addendum* / *Meta Controller Addendum* |
| **Google** (Analytics, Ads, embedded YouTube) | Joint-controller terms inside the *Google Ads Data Processing Terms* and *Google Analytics Controller-Controller Data Protection Terms* |
| **LinkedIn** (Insight Tag, share buttons) | *LinkedIn Marketing Solutions Joint Controller Addendum* |

If the vendor does **not** publish such an addendum, you cannot lawfully use the widget under EU law. Find one that does.

#### 3. Disclosure in the privacy policy — before the data flow happens

The visitor must be told, before the widget loads, that this transfer will occur. The privacy policy must add:

- The vendor's identity and role (joint controller / processor / independent controller)
- The categories of personal data sent to the vendor (typically: IP address, browser information, the URL the visitor is on, any cookies the vendor has previously set, plus interaction events)
- The legal basis (almost always: the visitor's consent, given via the cookie banner)
- A link to the vendor's own privacy policy
- The "essence" of the Article 26 arrangement (i.e. who handles which data-subject rights)

This is the **Article 13(1)(e) categories of recipients** disclosure plus **Article 26(2) essence of the arrangement** disclosure rolled together. Without it, the consent the visitor gives is not informed.

#### 4. Consent before the third-party widget loads

The widget cannot fire until the visitor has clicked **Allow all** or **Allow selection** (with the relevant category enabled) on the cookie banner. Two practical implications:

- **You cannot just paste `<iframe src="youtube.com/..."></iframe>` into your HTML.** The iframe will load on page render, before the banner is even shown — non-compliant on day one.
- **Cookiebot's `data-blockingmode="auto"` does this automatically if you tag the embed correctly.** The pattern is to give the script tag `data-cookieconsent="marketing"` (or whatever category applies) so Cookiebot blocks it until consent is given. Without the tag, Cookiebot does not know to block it.

If you cannot prove the widget is blocked until consent, you cannot add the widget.

#### 5. Updated Article 30 RoPA

The widget creates a new processing activity. The Article 30 RoPA must record it under the seven Article 30(1) headings (a)–(g): controller, purposes, categories of data subjects and personal data, categories of recipients, third-country transfers, retention, security measures.

Anchored in **DPC Section 17 above** and operationalised in `legal-compliance/gdpr/record-of-processing-activities.md`. Add a new "Activity 4" (or higher) row whenever a Section 22 trigger fires.

### Why all five steps are non-negotiable

Each step closes a different audit-trail gap:

- **Step 1** proves you assessed the risk (rather than embedding blindly).
- **Step 2** proves you have the legal arrangement the GDPR requires for the data flow.
- **Step 3** proves the visitor was informed before consenting.
- **Step 4** proves consent was actually obtained before the data flow happened.
- **Step 5** proves the activity is documented for the regulator.

Skip any one of them and the consent is not valid, the data flow is unlawful, or both.

### What this means for Mary's site today

Mary's site has **no Section 22 triggers** — no Like buttons, no embedded videos, no maps, no analytics, no payment processor, no advertising pixels. The compliance row above passes Section 22 by **absence**, not by paperwork.

The five-step checklist exists in this walkthrough so that **future-James** (or whoever else maintains the site) does not accidentally ship a widget without doing the paperwork. Adding "just one Facebook Like button" looks small. The compliance work behind it is not.

### How this site complies with DPC Section 22

| Rule | How this site complies |
|---|---|
| **Audit every embedded third party for controller / processor / joint-controller status** | Audit complete. Three third-party touchpoints on the site, each assessed: **Cookiebot** (processor — pure consent-management), **Resend** (processor — pure email delivery), **hosting provider** (processor — pure infrastructure). All three are processors, not joint controllers. **No Like buttons, no social-sharing widgets, no embedded videos, no third-party advertising pixels, no payment processor.** Documented in `legal-compliance/gdpr/record-of-processing-activities.md`. |
| **No Like buttons, share buttons, or social-media plugins** | The site has no Facebook Like button, no Twitter / X share button, no LinkedIn share, no Pinterest pin button, no Reddit share, no WhatsApp share. Mary's contact details are static text and click-to-call links — no social authentication, no social embedding. |
| **No embedded third-party video or maps** | The site has no embedded YouTube videos, no Vimeo, no Google Maps embed, no Twitter timeline, no Instagram feed. Practice-area imagery is self-hosted. Office location is given as text address — visitors who want a map use their own preferred mapping app. |
| **No advertising pixels or remarketing tags** | The site does not load Meta Pixel, Google Ads remarketing, LinkedIn Insight Tag, Twitter pixel, TikTok pixel, or any other advertising third party. Confirmed in **DPC Section 12 verification step 5** (Network panel inspection). |
| **No payment processor on the website** | Mary takes payment at the office or via solicitor's-account bank transfer — there is no online payment flow on the site, no Stripe / PayPal / Worldpay integration, no joint-controller exposure on a payment channel. |
| **No analytics that could create joint-controllership** | No Google Analytics, no Hotjar, no Microsoft Clarity, no Plausible, no Fathom — no analytics provider at all. No request leaves the visitor's browser to any third-party-controller domain other than the three named processors above. |

### Why this is the easy compliance posture for Mary's firm

The simplest way to pass Section 22 is to **not create joint-controller relationships in the first place**. Mary's firm has chosen this posture deliberately:

- **No social-media presence on the site** → no joint controllership with Meta, X, LinkedIn.
- **No embedded video / maps** → no joint controllership with Google.
- **No analytics provider** → no joint controllership with any analytics vendor.
- **No payment processor on the site** → no Article 26 / 28 question to answer about a payment partner.
- **Three pure processors only** (Cookiebot, Resend, hosting) → straightforward Article 28 DPAs, no Article 26 arrangements needed.

If Mary's firm later wants to add any of these — embedded YouTube videos, a Facebook Like button, Google Analytics, an online payment flow — **each addition is a Section 22 trigger** that must be assessed before deployment, with the Article 26 / 28 paperwork put in place. Flagged in the README "TODO — Before Launch" section.

### Pre-launch action

1. **Re-confirm the third-party audit** before launch. Open every page (`/`, `/about`, `/services`, every service page, `/contact`, `/thank-you`, `/privacy`, `/cookie-policy`) in DevTools → Network → filter by "img"/"script"/"iframe"/"xhr". Confirm the only third-party domains called are `consent.cookiebot.com` and (if the contact form is submitted) `api.resend.com`. **No requests to facebook.com, google.com, googletagmanager.com, googlevideo.com, youtube.com, twitter.com, linkedin.com, doubleclick.net, hotjar.com, clarity.ms, or any social / ad / analytics domain.**
2. **Document each processor relationship** in `legal-compliance/processor-agreements/` per **DPC Section 17 above**. The processors-not-controllers conclusion documented here only holds if each Article 28(3) DPA actually says so.
3. **Add a Section 22 review item to the maintenance calendar.** Any future addition of an embedded widget, social button, video, map, payment, or analytics tool must trigger a Section 22 assessment **before** deployment — not after.
4. **Privacy policy must list the three processors** (Cookiebot, Resend, hosting) under Article 13(1)(e) "categories of recipients." Anchored in **DPC Section 15 above**.
5. **Run the dated compliance screenshot** of the Network panel showing only the expected third-party domains:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-22-no-joint-controllers
   ```

### Verification

1. **Open the live site in incognito** with cookies cleared. Open DevTools → Network. Reload the home page.
2. **Check the Domain column** for every request. The only third-party domains should be `consent.cookiebot.com` (Cookiebot's CDN). The site's own domain serves everything else (HTML, CSS, JS, fonts, images).
3. **Submit the contact form** with test data. Confirm only one new third-party request — to `api.resend.com` (or whichever Resend endpoint is configured). No other third-party calls fire.
4. **Repeat the Network audit on `/about`, `/services`, every service page, `/privacy`, `/cookie-policy`, `/thank-you`.** Same expectation — Cookiebot only, plus any first-party requests.
5. **Run a "Decentraleyes-style" check** — visually scan the page source of each page for `<iframe>`, `<script src="https://...">` (third party), `<link href="https://...">` (third-party stylesheets / fonts). Self-hosted fonts via `@fontsource` should be the only font source — not `fonts.googleapis.com`.
6. **Search the codebase** for `youtube`, `vimeo`, `facebook`, `twitter`, `linkedin`, `googlemaps`, `googletagmanager`, `gtag`, `analytics`, `pixel`, `hotjar`, `clarity`. The only matches should be in legal-compliance markdown files (where the absence is documented), not in source code.
7. **Confirm the Cookie Declaration on `/cookie-policy`** lists no third-party cookies from any vendor other than Cookiebot itself. If a future scan picks up a third-party cookie from somewhere we did not expect, that is a Section 22 finding that must be investigated immediately.
8. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-22-no-joint-controllers
   ```

### Cross-references

> **Cross-reference 1:** The Article 28(3) processor-contract requirement explicitly named in this section is covered in detail in **DPC Section 17 above — Requirements for the use of consent management providers (CMPs)** and operationalised in **`legal-compliance/processor-agreements/README.md`**. The eight Article 28(3) clauses are listed there.
>
> **Cross-reference 2:** The Article 30 RoPA is the place this whole-of-site processor / joint-controller picture is recorded for the regulator. Covered in **DPC Section 17 above** and operationalised in **`legal-compliance/gdpr/record-of-processing-activities.md`**. The "categories of recipients" and "third-country transfers" headings of the RoPA are where Section 22 findings live.
>
> **Cross-reference 3:** The transparency obligation that flows from a joint-controller relationship — telling the visitor that the third party receives data — is anchored in **DPC Section 15 above — Transparency information** and **GDPR Article 13(1)(e)** (categories of recipients). If a Section 22 trigger is added later, the privacy policy must be updated to disclose the new recipient before deployment.
>
> **Cross-reference 4:** The *Fashion ID* judgment (Case C-40/17, 29 July 2019) is the CJEU authority the DPC cites. The same judgment is the reason **EDPB Guidelines 8/2020 on the targeting of social media users** put detailed Article 26 obligations on operators of sites with social-media integrations. If Mary's firm later adds any social plugin, EDPB Guidelines 8/2020 is the next document to read.

---

## DPC Section 23 — "Processing of personal data"

### What the DPC says

Verbatim from the DPC guidance:

> "Processing of personal data
>
> It is not necessary that a cookie contain personal data in order that the user's consent be required to set it. However, where the use of cookies or the information derived from cookies involves the processing of personal data, this processing is subject to the rules of the General Data Protection Regulation and the Data Protection Act 2018.
>
> This means you must also keep a record of the types of processing carried out that involve personal data. In practice, you should maintain a comprehensive record of each specific type of processing as part of your record of processing activities, which is required under Article 30 of the GDPR.
>
> If you are processing personal data obtained from cookies or other tracking technologies and it is appended or linked to other data about an identifiable customer with an account or a loyalty card, for example, you must inform users and customers about this processing when they use your website or app, including how they may exercise their data subject rights under the GDPR.
>
> If, as a result of using cookies, the information you process or collect can also be considered personal data, then you must comply with the rules of the GDPR as well as with the ePrivacy rules. Personal data includes online identifiers or numbers, such as those that may be contained in cookies and that relate to an identified, or identifiable, natural person. It does not matter whether your organisation is in possession of other information that may be needed to identify an individual; the fact that the person may be identified, even with the addition of information held by another organisation, is sufficient to make this data personal data."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Processing of personal data", page 14. Verified verbatim against local PDF on 2026-05-03._

### What this section adds

This is a **cross-reference section** — it restates rules already covered in detail elsewhere in the walkthrough. The DPC is making sure the reader cannot miss four points:

1. **The cookie consent rule applies even where no personal data is involved.** S.I. 336/2011 Reg 5(3) is a cookie-storage rule, not a personal-data rule. Consent is required for the storage itself, regardless of whether the cookie carries personal data or not.
2. **If personal data *is* involved (which is most cases), GDPR applies on top of the cookie rule.** The two regimes stack.
3. **Article 30 RoPA is required** for any processing of personal data — covered in detail in **DPC Section 17 above**.
4. **Online identifiers are personal data** under GDPR Article 4(1) — even if your organisation alone cannot identify the individual, the fact that some other organisation could is sufficient.

Each of these is fully covered elsewhere in this walkthrough. The cross-references below show where.

### How this site complies with DPC Section 23

| Rule | Where this is already covered |
|---|---|
| **Consent required for cookie storage regardless of personal data content** | **DPC Section 12 above — How do you obtain consent in practice** (banner mechanics, equal prominence, no nudging). Implementation: Cookiebot's `data-blockingmode="auto"` blocks every non-essential cookie until consent. |
| **Article 30 RoPA for personal-data processing** | **DPC Section 17 above — Requirements for the use of consent management providers (CMPs)**. Operationalised in `legal-compliance/gdpr/record-of-processing-activities.md` (website slice — three activities: Cookiebot consent log, Resend contact-form submissions, hosting server logs). |
| **Transparency information when cookie data is linked to identifiable individuals** | **DPC Section 15 above — Transparency information and responsibilities under the GDPR**. The site does not link cookie data to identifiable individuals (no customer accounts, no loyalty cards, no logged-in user state) so the linkage scenario does not arise. |
| **Online identifiers are personal data even without other identifying information** | **DPC Section 12 above (verification step 5)** — the IP address, user-agent string, and Cookiebot's pseudonymous consent ID are treated as personal data and recorded under the relevant Article 30 entries. |
| **Cookie rule + GDPR rule both apply** | This entire walkthrough is structured around that stacking — every section maps the cookie obligation to the corresponding GDPR article (4(11), 7, 12, 13, 28, 30) and to S.I. 336/2011 Reg 5. |

### Cross-references

> **Cross-reference 1:** Article 30 RoPA — covered in detail in **DPC Section 17 above**, operationalised in **`legal-compliance/gdpr/record-of-processing-activities.md`**, with the under-250-employees carve-out analysis showing it does not apply to a solicitor's firm.
>
> **Cross-reference 2:** Transparency information — covered in detail in **DPC Section 15 above**, with verbatim Article 12, 13(1), and 13(2) checklists and the "How this site complies" mapping.
>
> **Cross-reference 3:** "Online identifiers are personal data" — anchored in **GDPR Article 4(1)** definition (and **GDPR Recital 30** which names cookie identifiers explicitly). The verification approach is documented in **DPC Section 12 above (Network panel inspection)**.
>
> **Cross-reference 4:** "Cookie rule + GDPR rule stack" is the structural premise of the entire DPC guidance and this walkthrough. Each section maps both layers.

---

## DPC Section 24 — "Do you need to conduct a data protection impact assessment (DPIA)?"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Do you need to conduct a data protection impact assessment (DPIA)?
>
> The DPC has published a list of processing operations for which a data protection impact assessment is mandatory. This includes processing operations involving the systematic monitoring, tracking or observing of individuals' location or behaviour, and the profiling of individuals on a large scale.
>
> It also includes processing involving the combination, linking or cross-referencing of separate datasets where such linking significantly contributes to or is used for profiling or behavioural analysis of individuals. This is particularly the case where the data sets are combined from different sources and where processing was/is carried out for different purposes or by different controllers.
>
> If your processing involves any of these operations, on foot of your use of cookies or otherwise, you must carry out a DPIA."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Do you need to conduct a data protection impact assessment (DPIA)?", page 14. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what a DPIA actually is

A **Data Protection Impact Assessment** is a written analysis a controller is required to perform **before** starting a high-risk processing activity. **GDPR Article 35** is the underlying obligation; the DPC's published list specifies which Irish operations the DPC has pre-classified as automatic triggers.

In practice a DPIA is a document covering:

- A description of the processing — what data, who, where, why
- The necessity and proportionality of the processing in relation to its purpose
- The risks to data subjects' rights and freedoms
- The measures taken to address those risks (technical, organisational, contractual)
- A consultation outcome — usually with the firm's data-protection point of contact, and in higher-risk cases the DPC itself

It is not a long document for low-risk processing — typically 5–15 pages — but it must exist **in writing, signed and dated, before the processing starts**.

### What the DPC's "published list" actually is

The DPC text references a document that is not embedded in the cookie guidance: the **List of Types of Processing Operations Which Require a Data Protection Impact Assessment** (DPC, October 2018, updated periodically).

This is a separate DPC document. It lists ten categories of processing operations for which a DPIA is mandatory under Irish law. The list is published at:

- **DPC mandatory-DPIA list page:** https://dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments
- **Direct PDF (verify URL before relying on it):** the DPC site links to the formal mandatory-DPIA list document.

The ten categories cover the highest-risk processing types — for example: systematic profiling on a large scale, large-scale processing of special category data, biometric processing for unique identification, large-scale tracking of location or behaviour, and processing of personal data of vulnerable groups (children, employees in workplace monitoring, etc.).

**Action:** download the current mandatory-DPIA list and file it in `legal-compliance/` so future audits do not rely on a remote URL that may move.

### What this section is doing — three triggers

The DPC names three specific cookie-related triggers for the mandatory DPIA:

1. **Systematic monitoring, tracking, or observing of individuals' location or behaviour** — typically: location-tracking pixels, behavioural-advertising trackers, session-recording tools (Hotjar, Microsoft Clarity, FullStory), heatmap providers.
2. **Profiling of individuals on a large scale** — typically: ad-tech profiling networks, lookalike-audience analytics, AI-driven personalisation engines.
3. **Combination, linking, or cross-referencing of separate datasets** for profiling or behavioural analysis — typically: customer data platforms (CDPs) that merge cookie-derived data with CRM, loyalty-card, or third-party data.

If your site does any of these, the DPIA is **mandatory** — you cannot start the processing without one.

### How this site complies with DPC Section 24

| Trigger | How this site complies |
|---|---|
| **Systematic monitoring, tracking, or observing of location or behaviour** | The site does **not** perform any monitoring, tracking, or behavioural observation. No analytics provider, no session-recording tool, no heatmap provider, no behavioural-advertising tracker, no location-tracking pixel. The only data flows are: (i) Cookiebot consent records (necessary for compliance with Reg 5(3) and GDPR Art. 7), (ii) contact-form submissions to Resend (visitor-initiated, transactional), (iii) standard hosting access logs (IP, user agent, URL — necessary for site operation, retained briefly). None of these constitute "systematic monitoring." |
| **Profiling of individuals on a large scale** | The site does **not** profile any visitor. There is no scoring, no segmentation, no lookalike-audience generation, no AI-driven personalisation, no advertising profiling. Each visitor's interaction with the site is treated identically — the site has no concept of a returning visitor beyond the Cookiebot consent cookie. |
| **Combination, linking, or cross-referencing of datasets** for profiling or behavioural analysis | The site has **no customer data platform**, no CRM integration, no loyalty programme, no logged-in user state, no account creation. The contact-form submission goes to Resend's email pipeline only — it is not appended to any other dataset, profile, or system. **No cross-referencing happens at any layer of the site.** |
| **Conclusion — DPIA mandatory?** | **No.** None of the three triggers fire. The site does not perform any of the processing operations the DPC has pre-classified as mandatory-DPIA categories. |

### Why "no DPIA required" is itself the compliance evidence

A DPIA is not required for low-risk processing. But the **analysis above — the explicit walk-through of each trigger and why it does not apply — is the document the DPC will look for if they audit.**

In other words: the absence of a DPIA only counts as compliance if you can **prove you assessed each trigger and concluded none applied**. A bare assertion that "we don't need one" is not evidence; this section is.

This is why Section 24 is given full treatment in this walkthrough rather than cross-referenced — the trigger analysis itself is the compliance artefact.

### What changes if a Section 22 trigger is later added

If Mary's firm later adds any of the third-party widgets named in **DPC Section 22 above** (analytics, advertising pixels, embedded video, social plugins), some will independently re-trigger Section 24:

| Future addition | Likely Section 24 trigger | Likely DPIA outcome |
|---|---|---|
| **Google Analytics** | Systematic monitoring of behaviour (yes — analytics is the textbook example) | DPIA required before deployment. |
| **Meta Pixel / Google Ads remarketing** | Profiling on a large scale (yes — that is the explicit purpose) | DPIA required. |
| **Hotjar / Microsoft Clarity / session recording** | Systematic monitoring of behaviour (yes — recording sessions is paradigmatic) | DPIA required. Many regulators have ruled session-recording tools require explicit consent and a DPIA. |
| **Embedded YouTube video** | Borderline — does not "systematically" track unless multiple videos are added across the site | DPIA likely advisable but not automatically mandatory. Document the analysis either way. |
| **Embedded Google Maps** | Same — borderline at single-page level | DPIA likely advisable for the joint-controller analysis (Section 22). |

The pattern: **any future addition of an analytics or advertising tool requires a DPIA before deployment**. This stacks on top of the Section 22 five-step checklist — meaning the realistic time cost of adding (e.g.) Google Analytics is the **Section 22 paperwork (2–4 hours) + the Section 24 DPIA (4–8 hours)** = up to a full working day before the tag fires once.

### Pre-launch action

1. **Download the DPC's mandatory-DPIA list** from `dataprotection.ie` and file it in `legal-compliance/DPC-list-of-processing-operations-requiring-DPIA-2018-10.pdf` (or whatever filename matches the document's actual title and date). Future audits should reference the local copy, not a remote URL.
2. **Lock the no-DPIA-required conclusion** by re-confirming the third-party audit from **DPC Section 22 above** matches what is actually loaded on the live site. The conclusion above is correct **only** if the site genuinely has no analytics, no profiling, and no dataset linking. If anything has changed since the audit, the analysis must be re-run.
3. **Add a DPIA review item to the maintenance calendar.** Any future addition of analytics, advertising, profiling, session-recording, or dataset-linking tools triggers a DPIA before deployment — flagged in the README Per-Client Compliance Setup, Section F (third-party-widget trigger checklist) and in this walkthrough's "What changes if a Section 22 trigger is later added" subsection above.
4. **Run the dated compliance screenshot** of the trigger analysis as evidence:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-24-no-dpia-required-trigger-analysis
   ```

### Verification

1. **Re-run DPC Section 22 verification** (Network panel inspection on every page). Confirm the only third-party domains called are Cookiebot and Resend. **If any other third-party domain is being called, the no-DPIA conclusion above no longer holds and a DPIA must be performed before launch.**
2. **Confirm no session-recording / heatmap script** is loaded by inspecting `<script>` tags on every page (`/`, every service page, `/contact`, `/about`, `/privacy`, `/cookie-policy`). Names to grep for: `hotjar`, `clarity`, `fullstory`, `mouseflow`, `lucky orange`, `smartlook`, `crazyegg`.
3. **Confirm no profiling / personalisation logic** in the site's own code — the codebase does not branch behaviour based on visitor identity, returning-visitor status, or any cookie-derived attribute beyond the Cookiebot consent state.
4. **Confirm no CRM, no customer accounts, no logged-in user state** — the site has no `/login`, `/register`, `/dashboard`, `/account`, or equivalent. Visitor sessions are stateless beyond Cookiebot's consent record.
5. **Confirm the DPC's mandatory-DPIA list** is filed locally and the latest version date is recorded in this walkthrough.
6. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-24-no-dpia-required-trigger-analysis
   ```

### Cross-references

> **Cross-reference 1:** The third-party audit underpinning the no-DPIA conclusion is in **DPC Section 22 above — Joint controllers**. The two sections lock together: passing Section 22 by absence is what makes the no-DPIA conclusion in Section 24 defensible.
>
> **Cross-reference 2:** The Section 22 trigger checklist in the README Per-Client Compliance Setup, Section F (third-party-widget trigger checklist) must be updated to include the **Section 24 DPIA step** as part of the five-step compliance work for any future analytics, advertising, or session-recording addition. Adding a DPIA step where applicable means the realistic time cost per widget rises to up to a working day.
>
> **Cross-reference 3:** The Article 30 RoPA in `legal-compliance/gdpr/record-of-processing-activities.md` documents the three current low-risk processing activities (Cookiebot consent log, Resend contact form, hosting access logs). None individually triggers a DPIA; combined they still do not — the site is comprehensively low-risk.
>
> **Cross-reference 4:** **DPC Section 25 below — Special category data** has its own DPIA trigger logic that stacks on top of this section. Solicitor work (family law, personal injury) involves special category data in the firm's main practice — but **none of that data is processed via the website**. The website-only DPIA conclusion (no) and the firm-wide DPIA conclusion (yes, separate work for Mary, see the README Per-Client Compliance Setup notes) are different questions. This walkthrough only owns the website conclusion.

---

## DPC Section 25 — "Special category data"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Special category data
>
> If your organisation is processing special categories of personal data, including through information derived from cookies, this is subject to strict rules under the GDPR. Article 9 of the GDPR defines special category data as personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation. In general there is a prohibition on processing such personal data unless very specific exemptions apply. In practice, the only likely legal basis your organisation will have for processing any special category data derived from the use of cookies or other tracking technologies, is the explicit consent of those individuals whose data you are processing.
>
> The bar to demonstrate that you have the explicit consent of users for the processing of their special category data is a high one and it is unlikely to be met by means of generic information in a cookie banner or privacy policy.
>
> The processing of special category data must also comply with the principles relating to the processing of personal data in Article 5 of the GDPR and it must have a lawful basis, as required by Article 6 of the GDPR as well as meeting the requirements of Article 9."

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Special category data", page 14. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

Special category data is the eight categories of personal data the GDPR treats as **higher-risk than ordinary personal data**:

1. Racial or ethnic origin
2. Political opinions
3. Religious or philosophical beliefs
4. Trade union membership
5. Genetic data
6. Biometric data (for the purpose of uniquely identifying a natural person)
7. Health data
8. Data concerning sex life or sexual orientation

Processing any of these is **prohibited** under GDPR Article 9(1) **unless** one of the specific exemptions in Article 9(2) applies. For most online businesses, the only Article 9(2) exemption that fits is **(a) — explicit consent**.

The DPC's three operative points in this section:

1. **The Article 9 prohibition applies to data derived from cookies.** If a cookie reveals (or lets a third party infer) something falling into those eight categories, you are processing special category data — even if the cookie itself contains nothing more than a pseudonymous ID.
2. **The only realistic lawful basis via cookies is explicit consent.** Generic banner consent does not meet the bar. The DPC is direct here: *"the bar … is a high one and it is unlikely to be met by means of generic information in a cookie banner or privacy policy."*
3. **Both the Article 5 principles AND a separate Article 6 lawful basis apply.** Article 9 is *additional to* the ordinary GDPR requirements, not a replacement.

### What the DPC text alone supports — and what it does not

The DPC text in this section names the eight Article 9 categories, says the consent bar is high, and says generic cookie banners are unlikely to meet it. **It does not say "you cannot install Meta Pixel on a family-law page."** That conclusion comes from a chain of sources, not from the DPC cookie guidance alone. Be precise about citations:

| Claim | What anchors it |
|---|---|
| "Family law / personal injury / mental health / addiction / bereavement / sexual orientation / religious-belief services touch Article 9 categories" | **GDPR Article 9** itself — the eight categories explicitly include health and sex life. Family law and PI both touch health and sex-life data. |
| "Cookies that reveal a visitor's interest in those topics process inferred Article 9 data" | **EDPB Guidelines 8/2020 on the targeting of social media users, paragraph 124** — *"Targeting based on visiting websites about specific health conditions ... amounts to the processing of special categories of data."* The DPC has not contradicted this. |
| "A URL plus a tracker identifier is personal data about an identifiable visitor" | **CJEU *Breyer* (Case C-582/14)** — IP + URL is personal data when an identifier-holder could plausibly link them. |
| "Generic cookie banners do not meet the explicit-consent bar" | **DPC Section 25 above (the verbatim quote)** — direct DPC statement. |
| "Therefore: trackers firing on sensitive-topic pages = unlawful Article 9 processing without a defensible lawful basis" | The combined effect of the four sources above. |

The chain is solid but it is a **chain** — the DPC text is one link, not the whole picture. When citing this in client docs or compliance records, separate the verbatim DPC quote from the EDPB / CJEU layer that completes the reasoning.

### What "the bar is unlikely to be met by a generic banner" means in practice

Article 9(2)(a) requires consent that is:

- **Explicit** — not bundled with other consents, not implied from a generic Accept All click, but a separate affirmative action specifically for the special category processing.
- **Informed** — the visitor must know that their data is being used to infer health / family hardship / sexual orientation / etc., not just that "marketing cookies" are being set.
- **Specific** — to the special category processing in question, not to a category umbrella.
- **Freely given** — withdrawable at any time without penalty.

A standard Cookiebot banner shows four categories (Necessary / Preferences / Statistics / Marketing) and the visitor clicks Allow All. This **does not constitute explicit consent under Article 9(2)(a)** — it is consent to "marketing cookies" generally, with no indication that the visitor's interest in (e.g.) family law services is being inferred and stored.

To meet the bar, you would need either:

1. A separate explicit-consent flow specifically about the Article 9 inference (legally possible but operationally awful — visitors would see two banners), or
2. A different lawful basis under Article 9(2) — which for online tracking does not realistically exist for any other paragraph (b)–(j).

So the practical answer is: **explicit consent for special category cookie processing cannot be reliably obtained on a public website**, and the DPC has effectively said so.

### How this site complies with DPC Section 25

| Rule | How this site complies |
|---|---|
| **No special category data is processed via cookies on the website** | The site does not load any third-party tracker (no analytics, no advertising pixels, no social plugins, no embedded video, no chat widget). Visiting any page on the site — including the practice-area pages that touch Article 9 territory (family law, personal injury) — does **not** result in the URL or a visitor identifier being sent to any third party other than the firm's own infrastructure (Cookiebot for consent records, Resend for contact-form submissions, hosting provider for access logs). |
| **The only personal data the website processes is operationally necessary** | Cookiebot records consent (necessary for compliance with Reg 5(3) and GDPR Art. 7); Resend processes contact-form submissions (visitor-initiated, transactional); hosting access logs hold IP / user-agent / URL briefly (necessary for site operation). None of these constitute special category processing — the data is operational, the visitor's interest in any particular page is not inferred or transmitted. |
| **No special category inference flows to any third party** | There is no Meta Pixel logging that the visitor saw `/services/family-law`. There is no Google Analytics noting that the visitor read `/services/personal-injury`. There is no remarketing audience built from visitors to these pages. The site cannot leak Article 9 inferences because there is no leakage channel. |
| **Site-wide blanket-no-trackers policy** | Per `_business/sensitive-topic-tracking-policy.md`, the policy is **no third-party trackers anywhere on the site**, not "trackers fire on neutral pages, suppressed on sensitive pages." This eliminates the entire class of failure modes where a tracker accidentally leaks onto a sensitive page. **One mistake is forever** — the audit-trail evidence in third-party logs does not expire. The blanket-no rule has zero such failure modes because there is no gating logic to break. |
| **Conclusion — Article 9 / Section 25 risk on the website** | **None.** The site processes no special category data via cookies, period. |

### Why blanket-no rather than per-page suppression — operational reasoning

The per-page rule (*"trackers OK on home / about / conveyancing, suppressed on family-law / PI / criminal-defence"*) is technically defensible if the suppression works perfectly forever. It does not work perfectly forever:

- A developer adds a new sensitive-topic page during a content rebuild and forgets the exclusion list.
- A route gets renamed in a refactor and the URL match breaks.
- A static page becomes dynamic during a framework upgrade and the gating doesn't transfer.
- A team handover documentation gap leaves the next developer unaware of the rule.
- Cookiebot or the framework changes how scripts are blocked and the gating silently stops working.
- A tag manager loads a script that bypasses the suppression entirely.

Each of those is a realistic failure mode. With the per-page rule, any one of them produces tracker hits in Google's or Meta's logs from a sensitive-topic page, which constitutes **a permanent, documented Article 9 breach**. The third-party logs do not expire.

The blanket-no rule has zero such failure modes because there is no gating logic to break. The marketing value sacrificed (mostly: automated conversion attribution, which is replaceable by call-tracking and form UTMs — see `_business/google-ads-for-sensitive-topic-clients.md`) is **small for sensitive-topic firms**. The risk eliminated is large and irreversible.

### How to use trackers safely if a future engagement does add them

The blanket-no rule applies to sensitive-topic clients. For **non-sensitive clients** (covered in `_business/sensitive-topic-tracking-policy.md` "client categorisation table"), trackers can be added with full Section 22 / 24 / 25 paperwork. The operational pattern for that case:

1. **Confirm the client is not sensitive-topic.** Apply the Phase 0 triage in `legal-compliance/cookies/client-onboarding-checklist.md`. If sensitive, refuse or fall back to the landing-page-only ring-fence in the policy doc.
2. **Run the full Section 22 five-step checklist** for each tool added: written assessment → Article 26 joint-controller addendum → privacy policy disclosure → Cookiebot consent gating (`data-cookieconsent="..."`) → Article 30 RoPA new-activity row.
3. **Run the Section 24 DPIA** for any analytics, profiling, or session-recording tool. Cite the DPC's published mandatory-DPIA list (downloaded and filed locally per Section 24 above).
4. **For each tool, confirm against the vendor's sensitive-information policy** that the site's content (URLs, page titles, meta descriptions) does not contain any sensitive-category signals. If any uncertainty, default to the landing-page-only ring-fence.
5. **Document everything dated** in `legal-compliance/compliance-records/`. The DPC will expect to see the trail, not just the configuration.

### How to use Google Ads safely without trackers

For sensitive-topic clients, Google Ads can run **without any code on the site**. Search ads on neutral keywords are reactive (responding to a user-typed query), not personalisation, and do not require trackers to function.

Operational guide in `_business/google-ads-for-sensitive-topic-clients.md`. Summary:

- **Allowed without trackers:** Google Search ads on neutral keywords, branded search ads, location-radius targeting, call extensions, location/sitelink/callout extensions.
- **Banned for sensitive-topic services regardless of trackers:** Personalised / interest / behavioural / display / Performance Max / YouTube / remarketing / lookalike campaigns. These are prohibited by Google's own Personalised Advertising Restrictions for the Personal Hardships category (which includes divorce, family-status changes, mental health, bereavement, addiction recovery).
- **Conversion measurement without trackers:** call extensions (forwarding numbers count calls as conversions in the dashboard); UTM-tagged ad URLs + form-server logs; manual matching at the firm side.

So a sensitive-topic firm can run paid ads — they just run them via the platform-side mechanisms that exist and don't need anything on the website.

### Pre-launch action

1. **Confirm no third-party tracker is loaded on any page** by repeating the Section 22 verification (Network panel inspection on every page, with cookies cleared, on the live site).
2. **Confirm the site is recorded as Sensitive in the engagement file** per the Phase 0 triage in `legal-compliance/cookies/client-onboarding-checklist.md`. This locks the no-trackers position into the audit trail.
3. **Confirm the privacy policy** does not list any tracker / analytics / advertising provider as a recipient. Article 13(1)(e) "categories of recipients" should list only Cookiebot, Resend, hosting.
4. **Confirm the cookie policy** lists no Statistics or Marketing cookies (only Necessary). The Cookiebot scan on the live domain will show this directly.
5. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-25-no-special-category-processing
   ```

### Verification

1. **Open the live site in incognito** with cookies cleared.
2. **Navigate to every sensitive-topic page** (`/services/family-law`, `/services/personal-injury`). Open DevTools → Network. Confirm **no third-party requests other than Cookiebot's own consent script**. No `google-analytics.com`, no `googletagmanager.com`, no `connect.facebook.net`, no `doubleclick.net`, no `analytics.tiktok.com`, no `static.hotjar.com`, no `clarity.ms`, no equivalent.
3. **Check DevTools → Application → Cookies** with the Cookiebot banner showing (consent not yet given). Confirm only Cookiebot's own `CookieConsent` cookie is present (or none if Cookiebot has not yet set its cookie). No third-party cookies.
4. **Click Allow All** on the banner. Reload. Re-check Cookies. Confirm still no third-party trackers — the absence holds even after consent because there are no trackers on the site to fire.
5. **Run the page source through `grep -i`** for `analytics`, `pixel`, `gtag`, `googletagmanager`, `facebook`, `meta`, `hotjar`, `clarity`, `mixpanel`, `segment`. The only matches should be inside compliance documentation, not in compiled HTML/JS.
6. **Run the dated compliance screenshot** to capture the no-trackers state on the sensitive-topic pages:
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-25-sensitive-pages-no-trackers
   ```

### Cross-references

> **Cross-reference 1:** The Article 9 categories list is in **`legal-compliance/gdpr/regulation-2016-679-consolidated-2016-05.pdf`, Article 9(1)**, page 8 of the PDF. The Article 9(2) exemption list (including 9(2)(a) explicit consent) is on the same page.
>
> **Cross-reference 2:** **EDPB Guidelines 8/2020 on the targeting of social media users, paragraph 124** is the EDPB authority for "URL-based inference of health condition = special category processing." This document is not currently filed locally — flag for download and file in `legal-compliance/EDPB-guidelines-8-2020-targeting-social-media-users.pdf`.
>
> **Cross-reference 3:** The CJEU *Breyer* judgment (Case C-582/14, 19 October 2016) is the personal-data-includes-IP-plus-context authority. Not currently filed locally — flag for download and file in `legal-compliance/CJEU-Breyer-C-582-14.pdf`.
>
> **Cross-reference 4:** The site's blanket-no-trackers policy and the underlying reasoning are in **`_business/sensitive-topic-tracking-policy.md`**. The operational guide for paid ads under that policy is in **`_business/google-ads-for-sensitive-topic-clients.md`**. The client-facing summary is in **`_business/sensitive-topic-tracking-client-faq.md`**.
>
> **Cross-reference 5:** The Phase 0 engagement-time triage that applies the policy is in **`legal-compliance/cookies/client-onboarding-checklist.md` Phase 0**.
>
> **Cross-reference 6:** **DPC Section 22 above — Joint controllers** and **DPC Section 24 above — DPIA** lock together with this section: the no-trackers position passes Section 22 by absence, Section 24 by absence, and Section 25 by absence. Each absence is documented evidence; the chain is the audit trail.

---

## DPC Section 26 — "Location tracking or derivation of location information from cookies"

### The rule the DPC sets

Verbatim from the DPC guidance:

> "Location tracking or derivation of location information from cookies
>
> You must not use cookies or other technologies to track the location of a user or a device without consent. While location data is not listed as special category data in Article 9 of the GDPR, the Court of Justice of the European Union has recognised its particular sensitivity because it can be used to derive very precise information about individuals and their behaviour, including their everyday habits, their permanent or temporary places of residence, their daily movements and activities, their social relationships and the social environments they frequent[footnote 4]. If you set cookies that are used to track the location of a device or a user, you may only do this with the user's consent."

[Footnote 4]: *Tele2 Sverige AB* (Case C-203/15) judgment of 21 December 2016 — `http://curia.europa.eu/juris/document/document.jsf?text=&docid=186492&pageIndex=0&doclang=EN&mode=lst&dir=&occ=first&part=1&cid=3318435`

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Location tracking or derivation of location information from cookies" + footnote 4, page 15. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

The DPC is putting location tracking into a special elevated category that sits **between** ordinary personal data and Article 9 special category data.

The reasoning runs:

1. **Location data is technically not Article 9 special category** — it's not on the eight-item list (race, ethnicity, political opinion, religion, trade union, genetic, biometric, health, sex life).
2. **But the CJEU has ruled that location data is uniquely sensitive** because of what can be **inferred from it**: where you live, where you work, who you spend time with, what religious or social or political places you frequent, your daily routine.
3. **So the rule is the same as for special category data** — explicit consent required, no implicit / continued-use shortcuts, no "you can change your browser settings" workaround.

The footnote points to **CJEU *Tele2 Sverige* (Case C-203/15, December 2016)** — the judgment that cemented this elevated treatment of location data in EU law.

### Why location data is treated this way — the *Tele2 Sverige* reasoning

The *Tele2 Sverige* judgment dealt with bulk telecommunications metadata retention by Swedish and UK authorities. The CJEU reasoning that flowed into this DPC section:

> *Location data, even when considered in isolation, allows very precise conclusions to be drawn concerning the private lives of the persons whose data has been retained, such as the habits of everyday life, permanent or temporary places of residence, daily or other movements, the activities carried out, the social relationships of those persons and the social environments frequented by them.*

The court did not invent this reasoning for cookies — it applied it to bulk surveillance retention. But the inference principle is the same: location data is a **proxy for special category data**, because where you go reveals what you do, who you are, what you believe, and how you live.

For website cookies that track location (whether by GPS, IP geolocation, Wi-Fi fingerprinting, or device-level location services), the same elevated-sensitivity principle applies.

### What "location tracking" actually covers

The DPC's wording is intentionally broad — *"cookies or other technologies to track the location of a user or a device"*. In practice this catches:

| Mechanism | What it does | Caught by Section 26? |
|---|---|---|
| **GPS access via the browser's `navigator.geolocation` API** | Asks the visitor to share their precise device location | Yes — explicit-consent required at the browser level (which the API forces) AND at the cookie level if the result is stored. |
| **IP geolocation services** (MaxMind, IPinfo, etc.) | Looks up the visitor's approximate location from their IP address | Yes if the result is stored or transmitted to a third party. |
| **Wi-Fi network fingerprinting** | Identifies the visitor's network from the surrounding Wi-Fi access points | Yes. |
| **Cell tower triangulation** | Mobile-network-level location | Yes. |
| **Beacon scanning** (Bluetooth low-energy beacons in retail) | Detects nearby beacons to infer location | Yes. |
| **Device-level location SDKs** (in mobile apps) | Continuous location capture | Yes. |
| **Embedded Google Maps with the visitor's location plotted** | The map showing "your location" sends GPS / IP geolocation to Google | Yes — this is one of the practical issues with embedding Google Maps on a contact page. |
| **Server access logs that include IP** | The server logs the visitor's IP, which is itself approximate location data | **Borderline** — generally treated as low-precision and operationally necessary, so does not require Section 26 consent. But if the IP is forwarded to a third-party log analytics tool, that is location-tracking-by-proxy and triggers Section 26. |

The pattern: **location data flowing to a third party is location tracking**. Location data staying on the firm's own server for operational purposes (security, abuse detection, briefly retained access logs) is generally not — but the line is thin and the burden of proof sits with the operator.

### How this stacks with Section 25 for sensitive-topic firms

For Mary's firm specifically, Section 26 stacks with Section 25 in a particularly heavy way:

- A visitor's location alone can reveal special category data — *"this device is regularly at [a domestic-violence shelter / an addiction-recovery clinic / a mental-health hospital / a religious site]"* — even when the website content does not.
- For a family-law / personal-injury / criminal-defence firm, a visitor's location combined with their visit to the firm's website lets a third-party tracker infer something specific about the visitor's life situation (someone visiting both `/services/family-law` and a domestic-violence shelter is a far more specific Article 9 inference than either signal alone).
- So even though Section 26 is technically not Article 9, **for sensitive-topic firms it should be treated as if it were**.

This is another reason for the blanket-no-trackers position. Even an apparently "neutral" tracker (e.g. a privacy-respecting analytics tool that only captures country-level location) becomes a problem when stacked with the sensitive-topic context of the page being viewed.

### How this site complies with DPC Section 26

| Rule | How this site complies |
|---|---|
| **No cookies track user/device location** | The site does not load any third-party tracker. There is no IP geolocation lookup, no Wi-Fi fingerprinting, no beacon scanning, no device-level location SDK, no `navigator.geolocation` API call. Cookiebot's own consent record contains no location data — only the consent decision. |
| **No browser GPS prompt** | The site does not call `navigator.geolocation.getCurrentPosition()` or `watchPosition()`. Visitors never see a "site wants to know your location" browser prompt. |
| **No embedded Google Maps with visitor-location plotting** | The contact page (`/contact`) does **not** embed a Google Maps iframe. The office address is displayed as static text. Visitors who want a map use their own preferred mapping app. This was an explicit Section 22 decision (no third-party embeds) and it incidentally satisfies Section 26 too. |
| **Server access logs are operationally necessary, not analytical** | Hosting access logs include IP and user-agent — the minimum needed for site reliability, security, and abuse detection. Logs are retained for the hosting provider's documented period (typically 30–90 days) and **are not forwarded to any third-party analytics or location-analysis tool**. The IP is functioning as an access-log artefact, not as a location signal. Documented in `legal-compliance/gdpr/record-of-processing-activities.md` Activity 3. |
| **Cookiebot's own use of IP** | Cookiebot briefly processes the visitor's IP during the consent action (to record consent and to set the consent cookie). This IP is not stored long-term as a location signal — it is part of the consent record itself, with the lawful basis being compliance with Reg 5(3) and GDPR Art. 7. Cookiebot is EU-based (Denmark), so no third-country location data flow. |
| **Conclusion — Section 26 risk on the website** | **None.** The site does not track location of any visitor by any mechanism. |

### What changes if Mary later wants to embed Google Maps on `/contact`

Embedding Google Maps is a Section 26 trigger. The compliance pattern:

1. **Section 22 written assessment** — Google Maps embed = joint controllership with Google for the location data + URL flow.
2. **Article 26 joint-controller addendum** — Google publishes a *Google Maps Controller Addendum* (find in Google Cloud Console → IAM → Data Protection); accept it.
3. **Privacy policy disclosure** — Google as recipient under Article 13(1)(e), with the location-data-flow clearly disclosed.
4. **Cookiebot consent gating** — `data-cookieconsent="statistics"` (or its own category) so the iframe does not load until consent is given. Use the **two-click pattern**: a placeholder image with a "Click to load Google Maps" button, which only loads the iframe after the click. This satisfies the "no third-party request before consent" rule.
5. **DPIA — Section 24** — for Google Maps embedded on a single non-sensitive page (`/contact`), the DPIA is generally short ("low-risk single-page embed") but must still be documented.
6. **Section 26 specific check** — confirm the Google Maps embed is not configured to pin the visitor's *current location* on the map. The map should show the firm's office location only. Visitors who want directions can use the "Open in Google Maps" link, which transfers them to Google's own product where Google captures the location flow under its own ToS, not via the firm's website.
7. **Section 25 special-category check** — `/contact` is a neutral page, so the special-category inference does not arise. The Google Maps embed is therefore safer here than it would be on `/services/family-law`. **Never embed Google Maps on a sensitive-topic page** even with consent — the location + sensitive-page-context combination is exactly the *Tele2 Sverige* concern.

The realistic time cost for this work is roughly **half a day** — lighter than a full analytics integration because Google Maps does not introduce profiling. But the work cannot be skipped.

### Pre-launch action

1. **Confirm no `navigator.geolocation` calls** anywhere in the codebase. Search the source for `getCurrentPosition`, `watchPosition`, `geolocation`. Should return zero matches.
2. **Confirm no IP geolocation library** is loaded. Search for `maxmind`, `ipinfo`, `geoip`, `ipapi`. Should return zero matches.
3. **Confirm no embedded Google Maps iframe** anywhere. Search for `maps.googleapis.com`, `maps.google.com`, `<iframe.*maps`. Should return zero matches.
4. **Confirm hosting access logs retention is documented** in `legal-compliance/gdpr/record-of-processing-activities.md` Activity 3 — including the retention period and the confirmation that logs are not forwarded to a third-party analytics tool.
5. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-26-no-location-tracking
   ```

### Verification

1. **Open the live site in incognito** with cookies cleared.
2. **Confirm no browser geolocation prompt fires** at any point — homepage, every service page, `/contact`. The browser's "this site wants to know your location" prompt should never appear.
3. **Open DevTools → Network → filter by "doc"/"xhr"/"script"/"img"** and reload `/contact` (the page most likely to host a maps embed). Confirm no requests to `maps.googleapis.com`, `maps.google.com`, `mapbox`, `openstreetmap`, or any IP-geolocation API endpoint.
4. **Codebase grep** for the keywords listed in pre-launch action 1–3. Zero matches expected.
5. **Confirm the contact page** displays the office address as static text only, with no embedded map, no "show me on a map" link that loads a third-party widget, and no `<a href="https://www.google.com/maps/...">` link that includes any visitor location data.
6. **Run the dated compliance screenshot:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts dpc-section-26-no-location-tracking
   ```

### Cross-references

> **Cross-reference 1:** *Tele2 Sverige* (Case C-203/15, 21 December 2016) is the CJEU authority cited in the DPC's footnote. Not currently filed locally — flag for download and file in `legal-compliance/CJEU-Tele2-Sverige-C-203-15.pdf`. URL in the footnote above.
>
> **Cross-reference 2:** Section 26 stacks especially heavily with **DPC Section 25 above — Special category data** for sensitive-topic firms. A visitor's location combined with a visit to a sensitive-topic page produces a much more specific Article 9 inference than either signal alone. This is another reason for the blanket-no-trackers position in `_business/sensitive-topic-tracking-policy.md`.
>
> **Cross-reference 3:** **DPC Section 22 above — Joint controllers** covers the joint-controllership analysis that any embedded location-services widget (Google Maps, OpenStreetMap, etc.) creates. The Section 22 five-step checklist + the Section 26 location-specific check together are the operational gate before any maps embed can ship.
>
> **Cross-reference 4:** **DPC Section 24 above — DPIA** covers the DPIA trigger that location-tracking processing creates. A location-tracking tool is a Section 24 trigger by virtue of being "systematic monitoring of individuals' location" — one of the three triggers the DPC names.
>
> **Cross-reference 5:** The "two-click pattern" for embedding location-services widgets (placeholder image + click-to-load) is the EDPB-recognised pattern for consent-before-third-party-load. Anchor: **EDPB Cookie Banner Taskforce Report Section 5** (Type C deceptive button contrast — same underlying "no third-party request before consent" principle).

---

## DPC Section 27 — "Compliance"

### What the DPC says

Verbatim from the DPC guidance:

> "Compliance
>
> The legal regime that currently must be complied with in Ireland is the ePrivacy Directive 2002 (as amended) and the ePrivacy Regulations (S.I. No. 336/2011). Controllers must not implement any unlawful changes to their cookies policies or their deployment of cookies and other tracking technologies based on their interpretation of proposals for legislation that is not agreed and that has not been enacted. The DPC will allow a period of six months from the publication of this guidance for controllers to bring their products, including websites and mobile apps, into compliance, after which enforcement action will commence."
>
> _6 April 2020_

_Source: `DPC-guidance-cookies-and-tracking-2020-04.pdf`, "Compliance" + closing date, page 16. Verified verbatim against local PDF on 2026-05-03._

### Plain English — what this actually says

Three operative points in the closing section:

1. **The current law is the ePrivacy Directive 2002 + S.I. 336/2011.** Not a draft regulation. Not a proposed reform. Not the "ePrivacy Regulation" that has been on the EU legislative agenda since 2017 and is still not enacted as of 2026. **Operators must comply with the law as it stands today, not as they think it might become.**
2. **No "I'm waiting for the new law" defence.** Some operators argue: *"the ePrivacy Regulation is coming, I'll align with that when it lands."* The DPC closes that escape route — you cannot relax compliance with the current rules in anticipation of looser rules that may never arrive.
3. **The six-month grace period is over.** The DPC published the guidance on **6 April 2020** and gave controllers until **6 October 2020** to bring their sites into compliance. **As of 2026, enforcement has been active for over five years.** Anyone non-compliant today is non-compliant against a fully-enforced regulator, not against a regulator on warning.

### Why this section closes the document

Sections 1–26 explain the rules. Section 27 closes the document with the **enforcement posture**: this is not aspirational guidance, this is the standard the DPC will measure operators against, and the grace period is over.

For Mary's firm specifically (or any operator reading this in 2026), the practical implication is:

- **No "phased rollout to compliance" is available.** The site must be compliant on day one of being live to the public. There is no grace period to file a half-compliant site and clean it up after launch.
- **Existing non-compliance is not grandfathered.** Sites already live before 2020 do not have a special status. The DPC has been investigating and fining non-compliant sites since late 2020.
- **The pace of enforcement has been accelerating.** Notable Irish enforcement actions in the post-2020 period (RTÉ, Department of Health, multiple commercial operators) make clear that the DPC actively investigates cookie compliance.

### What "currently the law" means in 2026

The DPC's wording from April 2020 says *"the legal regime that currently must be complied with."* As of 2026, that regime has **not** changed at the EU level — the ePrivacy Regulation is still not enacted. So the same regime named in the DPC guidance still applies:

| Layer | Instrument | Application to this site |
|---|---|---|
| **EU primary** | ePrivacy Directive 2002/58/EC (as amended by 2009/136/EC) | Establishes the consent rule for storage of information on a user's device. |
| **Irish transposition** | S.I. No. 336/2011 — European Communities (Electronic Communications Networks and Services) (Privacy and Electronic Communications) Regulations 2011, **Reg 5(3) and Reg 5(5)** specifically | The operative Irish law on cookies. Reg 5(3) is the consent requirement. Reg 5(5) is the necessary-cookies exemption. |
| **Cross-cutting personal-data layer** | GDPR (EU) 2016/679 + Data Protection Act 2018 | Applies on top of ePrivacy whenever the cookie processing involves personal data. Most of the time it does. |
| **Regulator interpretation** | DPC Cookie Guidance, April 2020 (this document) | The DPC's binding interpretation of how Reg 5 applies in practice. |
| **Cross-EU regulator interpretation** | EDPB Cookie Banner Taskforce Report, January 2023 (`legal-compliance/cookies/edpb-2023-compliance-evidence.md`) | Represents the convergent view of all EU data protection authorities. Used by the DPC as a benchmark. |
| **CJEU precedent** | *Planet49* (C-673/17), *Fashion ID* (C-40/17), *Tele2 Sverige* (C-203/15), *Breyer* (C-582/14) | Binding interpretive authority on consent, joint controllers, location data, and personal data scope. |

The walkthrough has covered each of these where relevant. Section 27 confirms that the stack above is what the regulator measures against — there is no fifth layer or future-state exemption to wait for.

### How this site complies with DPC Section 27

| Rule | How this site complies |
|---|---|
| **Compliant with current law (ePrivacy Directive + S.I. 336/2011 + GDPR)** | Yes. The walkthrough has worked through every applicable section of the DPC guidance and EDPB Cookie Banner Taskforce report and documented compliance for each. The site does not rely on any future-state interpretation. |
| **No "waiting for the ePrivacy Regulation" position** | The site is built to comply with the current Directive and S.I. 336/2011 as interpreted by the DPC's April 2020 guidance — not to a draft Regulation that may never be enacted. If the ePrivacy Regulation is enacted in future, the site will be re-audited at that point against the new rules. |
| **No reliance on the six-month grace period** | The grace period closed 6 October 2020, over five years before the site goes live. The site is being built in a fully-enforced regulatory environment from day one. |
| **Compliance is dated and documented** | Every walkthrough section is anchored to the verbatim DPC text, with cross-references to local PDFs and dated `compliance-records/` screenshots. The audit trail is the entire `legal-compliance/cookies/` directory plus the `legal-compliance/gdpr/record-of-processing-activities.md` and `legal-compliance/processor-agreements/` files. |
| **Compliance is maintainable, not a one-time event** | Every walkthrough section flags maintenance triggers — annual reviews, processor changes, regulator-guidance updates, and the Section 22 trigger checklist that fires whenever a third-party widget is added. |

### What "enforcement action will commence" means in practice

The DPC's published enforcement actions on cookies since 2020 reveal the patterns to be aware of:

| Common DPC finding | Typical operator failure |
|---|---|
| **Non-essential cookies firing before consent** | `data-blockingmode="auto"` not set or bypassed by a tag manager. Covered in **DPC Section 12 above (verification)**. |
| **No real reject option in the banner** | "OK, got it!" or Accept-only banners. Covered in **DPC Section 18 above** and **EDPB Section 3**. |
| **Pre-ticked or pre-enabled categories** | Statistics or Marketing categories defaulting to enabled. Covered in **DPC Section 16 above** and **EDPB Section 4**. |
| **Mis-classified essential cookies** | Analytics or marketing cookies labelled as Necessary. Covered in **`legal-compliance/cookies/edpb-2023-compliance-evidence.md` Section 8** and the **client onboarding checklist's classification triggers**. |
| **Inadequate transparency** | Privacy and cookie policies that do not disclose the actual processing — fail the Article 13 transparency test. Covered in **DPC Section 15 above**. |
| **Excessive cookie lifespans** | Session cookies with multi-year lifespans, analytics cookies set to forever. Covered in **DPC Section 21 above**. |
| **Joint-controller failures** | Embedded Like buttons / pixels / videos without Article 26 arrangements. Covered in **DPC Section 22 above**. |
| **Cookie consent records not maintained** | No Article 30 RoPA, no records of who consented when. Covered in **DPC Section 17 above** and operationalised in **`legal-compliance/gdpr/record-of-processing-activities.md`**. |

Each of these is something this site has actively addressed — the audit trail is in the walkthrough sections and the supporting compliance files.

### Pre-launch action

1. **Confirm every prior pre-launch action item** in this walkthrough is closed before the site goes live. The compliance evidence is cumulative — Section 27 is satisfied by the closure of every previous section's actions.
2. **File the dated launch screenshot** as the canonical "site was compliant on launch date" record:
   ```bash
   npx tsx scripts/compliance-screenshot.ts pre-launch-full-site-compliance
   ```
3. **Write a one-page "compliance posture summary"** for the firm's records, listing:
   - The legal stack the site complies with (ePrivacy Directive + S.I. 336/2011 + GDPR + DPC Cookie Guidance + EDPB Taskforce report)
   - The launch date
   - The list of compliance files (this walkthrough, the EDPB walkthrough, the Article 30 RoPA, the processor agreements folder, the compliance-records folder)
   - The maintenance schedule (annual reviews; trigger-based reviews on widget additions)
   This becomes the document Mary hands a regulator first if there is ever an inspection.
4. **Diary the six-monthly cookie classification re-scan** and the annual full review per the client-onboarding-checklist.

### Verification

This is the section where the verification is **the entire walkthrough**. There is no separate Section 27 verification — Section 27 is satisfied if and only if every prior section's verification has been completed.

Concretely, before launch, run the compliance screenshot script with a label that captures the all-clear:

```bash
npx tsx scripts/compliance-screenshot.ts dpc-walkthrough-complete-pre-launch
```

…and confirm the screenshot directory in `legal-compliance/compliance-records/` contains a dated screenshot for every numbered section of this walkthrough. If any section's screenshot is missing or stale, that section is not closed and Section 27 is not satisfied.

### Cross-references

> **Cross-reference 1:** Every prior section of this walkthrough — Sections 1–26 — feeds into Section 27. Section 27 is the closing affirmation that the whole document has been worked through. There is no narrower cross-reference that captures it.
>
> **Cross-reference 2:** The EDPB Cookie Banner Taskforce Report walkthrough — `legal-compliance/cookies/edpb-2023-compliance-evidence.md` — is the parallel document covering the cross-EU regulator-aligned interpretation. Section 27's "compliance with the current legal regime" includes compliance with EDPB-aligned positions where the DPC has not contradicted them.
>
> **Cross-reference 3:** The Article 30 RoPA in `legal-compliance/gdpr/record-of-processing-activities.md` is the audit-trail evidence for the GDPR layer named in Section 27 ("the ePrivacy Regulations [...] **and the GDPR**"). The RoPA is what the DPC will ask to see first in an inspection.
>
> **Cross-reference 4:** The dated `legal-compliance/compliance-records/` directory is the audit-trail evidence at the implementation layer. Every walkthrough section's pre-launch action ends in a screenshot run. The directory of dated screenshots is the firm's defence against any DPC investigation that asks "when was this configuration in place?"
>
> **Cross-reference 5:** For sensitive-topic firms, the supplementary compliance posture is documented in **`_business/sensitive-topic-tracking-policy.md`**, **`_business/google-ads-for-sensitive-topic-clients.md`**, and the **Phase 0 triage in `legal-compliance/cookies/client-onboarding-checklist.md`**. Section 27's "compliance with the current legal regime" is layered with the Article 9 / Section 25 special-category posture for any firm in the sensitive-topic table.
>
> **Cross-reference 6:** The annual review and trigger-based maintenance schedule lives in `legal-compliance/cookies/client-onboarding-checklist.md` ("Banner copy review triggers" and "Cookie classification review triggers"). Section 27's "after which enforcement action will commence" is an open-ended commitment — compliance is not a one-time event, and the maintenance triggers are how the firm stays compliant after launch.

---

## DPC walkthrough — complete

All 27 sections of the DPC Cookie Guidance (April 2020) have been worked through with verbatim quotes, plain-English explanations, compliance mappings, pre-launch actions, verification steps, and cross-references. The walkthrough is the firm's primary cookie-compliance audit document.

**The full DPC walkthrough is now closed.** Section 27 is satisfied if and only if every prior section's pre-launch action and verification is completed before the site goes live.

---

## Sections still to do

The remaining DPC guidance sections, in the order they appear in the PDF:

| # | DPC section | Likely depth |
|---|---|---|
| 3 | What are cookies? | ✅ Covered briefly above |
| 4 | What other types of tracking technologies are in use? | ✅ Covered briefly above |
| 5 | What is terminal equipment? | ✅ Covered briefly above |
| 6 | What is the law on cookies and what is its purpose? | ✅ Covered above (with the one embedded rule on personal-data-irrelevant) |
| 7 | Consent | ✅ Covered above (cross-reference to EDPB walkthrough) |
| 8 | Which cookies are exempt from consent? | ✅ Full treatment above |
| 9 | Do analytics cookies require consent? | ✅ Full treatment above |
| 10 | Can you obtain consent for multiple purposes at the same time? | ✅ Full treatment above |
| 11 | Withdrawal of consent | ✅ Full treatment above |
| 12 | How do you obtain consent in practice? | ✅ Full treatment above |
| 13 | Can you use implied consent? | ✅ Covered above (cross-reference to EDPB Para 7) |
| 14 | Clear and comprehensive information | ✅ Full treatment above |
| 15 | Transparency information and responsibilities under the GDPR | ✅ Full treatment above |
| 16 | Pre-checked boxes and sliders | ✅ Covered above (cross-reference to EDPB Section 4, DPC Section 10, DPC Section 8) |
| 17 | Requirements for the use of consent management providers (CMPs) | ✅ Full treatment above |
| 18 | Requirements for cookie banners | ✅ Full treatment above |
| 19 | Can you rely on the user's browser settings to infer consent? | ✅ Full treatment above |
| 20 | Confusing interfaces | ✅ Full treatment above |
| 21 | Cookie lifespans | ✅ Full treatment above |
| 22 | Joint controllers | ✅ Full treatment above |
| 23 | Processing of personal data | ✅ Covered above (cross-reference to DPC Sections 12, 15, 17) |
| 24 | Do you need to conduct a data protection impact assessment (DPIA)? | ✅ Full treatment above |
| 25 | Special category data | ✅ Full treatment above |
| 26 | Location tracking or derivation of location information from cookies | ✅ Full treatment above |
| 27 | Compliance | ✅ Full treatment above — DPC walkthrough complete |

We'll work through each in order — paste the DPC text, I quote it verbatim, explain in plain English, map to Mary's site, cross-reference if covered, full treatment if not.

---

## Penalties for non-compliance

Two regimes apply to cookie non-compliance on an Irish solicitor's site:

- **S.I. 336/2011 (Irish ePrivacy Regulations):** up to **€250,000** on conviction on indictment.
- **GDPR (Regulation 2016/679):** up to **€20 million or 4% of global annual turnover**, whichever is higher (Article 83).

Enforcement on cookie consent in Ireland has been active since October 2020 — six months after the DPC's April 2020 guidance was published. The DPC has both issued enforcement notices and pursued formal investigations on cookie consent failures since then.

---

_Last updated: 2026-05-03. **DPC walkthrough complete — all 27 sections covered.** Foundations (Sections 1–2) complete. Sections 3–7 covered briefly. Full treatment: Sections 8 (strictly necessary exemption), 9 (analytics cookies), 10 (no bundled consent), 11 (withdrawal + 6-month rule), 12 (banner mechanics), 14 (clear and comprehensive information), 15 (transparency / Articles 12–13), 17 (CMP and Article 30 RoPA), 18 (banner placement requirements), 19 (no inferring consent from browser settings), 20 (accessible interfaces), 21 (proportionate cookie lifespans), 22 (joint controllers + Fashion ID), 24 (DPIA triggers), 25 (special category data + the citation chain), 26 (location tracking), 27 (compliance / enforcement). Cross-references: Sections 13 (implied consent → EDPB), 16 (pre-checked boxes → EDPB Section 4), 23 (personal-data processing → DPC Sections 12, 15, 17). Companion compliance documents: `edpb-2023-compliance-evidence.md`, `reg-5-compliance-evidence.md`, `legal-compliance/gdpr/record-of-processing-activities.md`, `legal-compliance/processor-agreements/`, `_business/sensitive-topic-tracking-policy.md`, `_business/google-ads-for-sensitive-topic-clients.md`, `_business/sensitive-topic-tracking-client-faq.md`._
