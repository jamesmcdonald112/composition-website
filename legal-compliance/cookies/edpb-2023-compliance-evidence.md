# EDPB 2023 Cookie Banner Taskforce Report — Compliance Evidence

_Maps each finding of the European Data Protection Board's Cookie Banner Taskforce Report (adopted 17 January 2023) to how this site satisfies it, with verification steps._

**Source document:** `legal-compliance/cookies/EDPB-cookie-banner-taskforce-report-2023-01.pdf`
**Online source:** [EDPB Cookie Banner Taskforce Report (Jan 2023)](https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf)

**Companion files in this folder:**
- `reg-5-compliance-evidence.md` — same exercise for the Irish statute (S.I. 336/2011 Reg 5)
- `DPC-guidance-cookies-and-tracking-2020-04.pdf` — the DPC's April 2020 guidance, which we walk through separately
- `cookiebot-compliance-analysis.md` — detailed analysis of Cookiebot's capabilities against each rule

---

## What this report is and why we need to comply with it

The EDPB (European Data Protection Board) is the EU body that coordinates how all national data protection regulators — including Ireland's DPC — interpret EU privacy law. In January 2023, its Cookie Banner Taskforce published this report setting out a **minimum threshold** that all EU regulators agreed cookie banners must meet.

The DPC participated in the Taskforce and applies these positions when investigating cookie complaints in Ireland. So although the report is not itself law, **failing the rules in it would put the site at risk of a DPC investigation** — and following them is some of the strongest evidence of compliance you can produce.

The report is more recent (2023) than the DPC's main guidance document (2020), so it sharpens or updates a few specific banner-design rules that the older DPC PDF predates. That is why we treat it as a required pre-launch reference alongside the DPC guidance.

---

## Section 1 — Applicable Legal Framework

### Para 1

> "Where the complaints concern the placement or reading of cookies the delegations confirmed that the applicable framework is only the national law transposing the ePrivacy Directive to the placement of cookies."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 1, paragraph 1 (page 4). Verified verbatim against local PDF on 2026-04-25._

### What this means in plain English

When someone makes a **complaint about cookies** — specifically about a website setting cookies on their device or reading cookies that are already there — the law that decides whether the website did something wrong is **national law**. Specifically, the national law that each EU country wrote to implement the ePrivacy Directive.

It is **not** the GDPR. It is **not** the ePrivacy Directive itself directly. It is the national law that translates the ePrivacy Directive into the legal system of whatever country you are in.

### Why this matters

The EDPB is establishing an important hierarchy at the very start of the report:

1. **The ePrivacy Directive (2002/58/EC)** is an EU directive. Directives do not apply directly — every EU country has to pass their own law that implements it.
2. **In Ireland, that national law is S.I. No. 336/2011** — the European Communities (Electronic Communications Networks and Services) (Privacy and Electronic Communications) Regulations 2011.
3. So when a complaint comes in about a site setting a cookie, the question of "did this site break cookie law?" is answered by **S.I. 336/2011**, not by the ePrivacy Directive itself or by the GDPR.

This paragraph also closes a common loophole: some site operators have argued "we can rely on legitimate interest under GDPR Article 6 to set cookies without consent." The EDPB is shutting that down — for the act of setting the cookie itself, GDPR does not apply; only national ePrivacy law applies, and Irish ePrivacy law (S.I. 336/2011 Reg 5) requires consent.

The GDPR does come in later — for what happens *after* the cookie is set (the actual data processing). That is the subject of Para 2 of the report.

### What governs this site

| Question | Answer | Where to find it |
|---|---|---|
| What law governs cookie-setting on this site? | **S.I. No. 336/2011, Regulation 5** | [Irish Statute Book — S.I. 336/2011](https://www.irishstatutebook.ie/eli/2011/si/336/made/en/print) |
| Who interprets that law in Ireland? | The **Data Protection Commission (DPC)** | [dataprotection.ie](https://www.dataprotection.ie) |
| What is the DPC's interpretation? | Set out in their April 2020 guidance | `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf` |

### How this site complies

This site treats **S.I. 336/2011 Regulation 5** as the binding rule for setting or reading cookies. The detailed mapping of each element of Regulation 5 to the site's behaviour is documented in `legal-compliance/cookies/reg-5-compliance-evidence.md`.

In summary:

- **The cookie-setting layer is gated by Cookiebot.** The Cookiebot consent script is loaded in `src/layouts/BaseLayout.astro` with `data-blockingmode="auto"`. In auto-blocking mode, Cookiebot intercepts any third-party script tag that would set a non-essential cookie and prevents it from executing until the visitor has given explicit consent.
- **Strictly necessary cookies are exempt under Reg 5(5).** These (Cookiebot's own consent record cookie, the `intro-seen` sessionStorage flag, CSRF tokens) fire without consent because the law specifically allows this for cookies that are strictly necessary to provide the service the visitor requested.
- **No reliance on legitimate interest for cookie placement.** This site does not attempt to set any cookie under "legitimate interest" — every non-essential cookie either fires after explicit consent, or does not fire at all. This matches the EDPB's position in Para 24 of the same report (covered later in this file when we reach that section).

### Verification

To confirm the framework compliance is real, not just claimed:

1. **Open the live site in an incognito window with cookies cleared.**
2. **Open browser DevTools → Application tab → Cookies.** Before interacting with the banner, the only cookie that should appear is `CookieConsent` (Cookiebot's own record of the consent state). No analytics, marketing, or preference cookies.
3. **Check the network tab.** Any third-party script that would set non-essential cookies (e.g. Google Analytics) should be blocked by Cookiebot until consent is given. You can verify this by searching the network log for `googletagmanager.com` or similar — there should be no requests to those domains before consent.
4. **Re-run the same check after clicking Deny.** No non-essential cookies should appear.
5. **Re-run after clicking Allow all.** Only then should consented cookies appear (currently none — Mary's site does not have analytics or marketing scripts loaded yet).

If all five steps pass, the site's cookie-setting behaviour is in compliance with the national law that the EDPB names as the applicable framework.

---

### Para 2

> "Concerning the subsequent processing activities undertaken by the controller of data, meaning the processing which takes place after storing or gaining access to information stored in the terminal equipment of a user in accordance with Article 5(3) Directive 2002/58/EC (for example, the placement or reading of cookies), the delegations confirmed that the applicable framework is the GDPR (including to consent, even if given at the same moment of the placement of cookies, as far as this consent constitutes the legal basis of the subsequent processing), in line with the conclusions of EDPB Opinion 5/2019 on the interplay between the ePrivacy Directive and the GDPR."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 1, paragraph 2 (page 4). Verified verbatim against local PDF on 2026-04-25._

### What this means in plain English

Think of using cookies as **two separate steps**:

- **Step 1 — putting the cookie on the visitor's device.** This is what Para 1 was about. It is governed by Irish ePrivacy law (S.I. 336/2011 Reg 5).
- **Step 2 — using the data the cookie collects.** For example: showing the data on a Google Analytics dashboard, building a profile of the visitor, or using it to target ads. This is what Para 2 is about. It is governed by **GDPR**.

So:

| The action | The law that decides if it is allowed |
|---|---|
| Setting a cookie on a visitor's browser | Irish ePrivacy law (S.I. 336/2011 Reg 5) |
| Doing anything with the data afterwards | GDPR |

### A simple example

Say Mary's site adds Google Analytics tomorrow.

- The moment Google Analytics tries to **set its `_ga` cookie** on a visitor's device, that is **Step 1**. Irish ePrivacy law decides whether this is allowed. The visitor must give clear consent first.
- Once that cookie exists, Google Analytics starts **using it** to record page views, build session data, and send that data to Google. That is **Step 2**. GDPR decides whether this is allowed.

The same click of "Allow all" on the cookie banner has to be **good enough for both steps**. It has to be good enough for ePrivacy law (so the cookie can be set) and good enough for GDPR (so Google can actually use the data).

### What "good enough for GDPR" means

GDPR has a stricter idea of what counts as valid consent than ePrivacy law alone. There are two places in the GDPR that set the bar:

**Article 4(11)** defines consent as it must be when given:

> "'consent' of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her"

_Source: `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf`, Article 4(11). Verified verbatim on 2026-04-25._

So the four conditions in the definition itself are:

1. **Freely given** — the visitor must have a real choice, not feel forced
2. **Specific** — they must know what they are saying yes to
3. **Informed** — they must have been told clearly what is happening
4. **Unambiguous** — a real click (a "statement or clear affirmative action"), not "by browsing this site you agree"

**Article 7(3)** then adds a fifth condition about withdrawal:

> "It shall be as easy to withdraw as to give consent."

_Source: `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf`, Article 7(3). Verified verbatim on 2026-04-25._

So the full GDPR consent test for a cookie banner is:

5. **Withdrawable** — the visitor must be able to change their mind later, and pulling consent must be just as easy as giving it.

If the consent on the banner does not meet all five points above, then even if it was technically enough to set the cookie, it is **not enough to use the data afterwards** — and using the data anyway would be a GDPR breach.

### Why this matters for Mary's site

Two practical things follow:

**A — Right now, none of this applies in practice.** Mary's site has no analytics, no advertising tools, no profiling. No data is being collected from cookies, so there is no "Step 2." The two-step rule only kicks in once a tool like Google Analytics or Meta Pixel is added.

**B — The site is set up so it will be ready when any of those tools is added.** Cookiebot is already configured to give GDPR-grade consent: explicit opt-in, no pre-ticked boxes, equally easy to reject as accept, and consent can be withdrawn from `/cookie-policy`. So if Mary turns analytics on next month, the same banner click will be good enough for both Step 1 and Step 2 from day one.

### How this site complies — checklist

| What Para 2 requires | Status today | What we have to do |
|---|---|---|
| If a tool collects data from cookies, the consent must be GDPR-grade | **No tools collect data today.** No action needed yet. | When any analytics/marketing tool is added, verify the Cookiebot consent flow against the five GDPR points above. |
| Privacy Policy must list a GDPR lawful basis for the data use | **Not needed yet** — nothing is being processed. | When any tool is added, update the Privacy Policy to say *"We process this data on the basis of your consent (GDPR Art 6(1)(a))."* |
| Withdrawal must be as easy as consent | **Already in place.** Cookiebot shows a "Withdraw your consent" link on `/cookie-policy`. | Verify the link still works after every Cookiebot script update. |
| If data leaves the EU (e.g. to a US server), there must be GDPR safeguards | **Not happening today.** No data leaves the site. | If GA4 is added later (US transfer), add a clause to the Privacy Policy under the EU–US Data Privacy Framework. |

### How to verify

1. **Check that no analytics or marketing tools are running.** Open the codebase and search for tracking scripts:
   ```bash
   grep -r "google-analytics\|googletagmanager\|gtag\|fbq\|hotjar\|mixpanel" src/
   ```
   You should see no matches in actual code (only in documentation files).
2. **Check the live site in an incognito window.** Open DevTools → Network. Before clicking the banner, no requests should go to Google, Meta, or any analytics domain.
3. **Check the withdrawal link works.** Visit `/cookie-policy`, scroll to the "Withdraw your consent" link, click it. The `CookieConsent` cookie should reset and the banner should appear again on the next page.
4. **Save this as a pre-launch task.** When Mary asks for analytics or ads to be added, the task is: confirm the Cookiebot banner still hits all five GDPR consent points, and update the Privacy Policy with the new lawful basis and any international transfers.

If all four checks pass, the site satisfies Para 2.

---

### Para 3

> "In accordance with the ePrivacy framework, it was recalled that certain concepts from the GDPR (e.g. the conditions for valid consent and the right to information) are indispensable to assess whether there is an infringement of the national law transposing the ePrivacy Directive or not."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 1, paragraph 3 (page 4). Verified verbatim against local PDF on 2026-04-25. Footnote 3 of the report points readers to **EDPB Guidelines 05/2020 on consent under Regulation 2016/679** for the underlying definition — local copy at `EDPB-guidelines-on-consent-2020-05.pdf`._

### What this means in plain English

Para 1 said: cookie-setting is governed by Irish ePrivacy law (S.I. 336/2011).
Para 2 said: using the data afterwards is governed by GDPR.

Para 3 now says: **even when you are only judging Step 1 (was the cookie allowed to be set?), you still have to borrow some rules from the GDPR to do that.**

Why? Because Irish ePrivacy law uses words like "consent" and "information," but it does not itself fully spell out what those mean. The GDPR is the place where those words are properly defined. So when the DPC investigates whether a cookie was set lawfully, it reaches into the GDPR for two things:

1. **What counts as valid consent.** Defined in **GDPR Article 4(11)** (freely given, specific, informed, unambiguous) and **Article 7** (the conditions for consent — including Article 7(3) on withdrawal being as easy as giving). Together these are the "freely given, specific, informed, unambiguous, withdrawable" rule we covered in Para 2. _Verified verbatim against local copy `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf` on 2026-04-25._
2. **What information must be given to visitors.** Defined in **GDPR Articles 12, 13 and 14**. Visitors must be told who is collecting their data, what is being collected, why, how long it is kept, and who it is shared with. _Article numbers verified against local GDPR PDF on 2026-04-25; the specific wording of each article has not been quoted here — open the PDF to read the full text if needed._

### Why this matters

This paragraph closes a loophole. Some site operators have argued *"the GDPR doesn't apply to my cookie banner — cookies are an ePrivacy issue, so I can ignore the GDPR's strict consent rules."*

The EDPB is saying: **you cannot separate the two laws that cleanly.** Even when the question is only about ePrivacy law, the GDPR's standards still get pulled in to decide what counts as proper consent and what counts as proper information.

### A simple example

Imagine a banner on Mary's site that just says **"We use cookies. OK?"** with one button.

- On the surface, that *looks* like it satisfies Irish ePrivacy law — it asks for consent before setting cookies.
- But when you check it against the **GDPR's definition of consent**, it fails:
  - No option to refuse — so the consent is not freely given.
  - No information about which cookies or why — so the consent is not informed.
  - No way to withdraw it later — so it fails GDPR Article 7(3) ("It shall be as easy to withdraw as to give consent").
- Because the consent fails the GDPR's definition, **the cookie was set unlawfully under Irish ePrivacy law.**

Para 3 is what makes that conclusion possible. Without it, someone could argue *"the GDPR doesn't apply to the cookie itself, so its consent definition doesn't matter here."* Para 3 closes that argument off.

### How this site complies

Mary's banner already meets the GDPR-grade standards that Para 3 imports into ePrivacy compliance. Two requirements, both already in place:

| What Para 3 imports from the GDPR | How this site meets it |
|---|---|
| **Valid consent** (GDPR Art 4(11) + Art 7) — freely given, specific, informed, unambiguous (Art 4(11)), and as easy to withdraw as to give (Art 7(3)) | Cookiebot is set to explicit opt-in, granular per category, equally easy reject, and provides a "Withdraw your consent" link on `/cookie-policy`. No pre-ticked boxes anywhere. |
| **Right to information** (GDPR Art 12, 13, 14) — visitors must be told what cookies are set, why, how long for, and who receives the data | The Cookie Declaration on `/cookie-policy` is generated automatically by Cookiebot and lists every cookie, its purpose, its lifespan and its provider. Banner copy explaining each cookie category lives in `legal-compliance/cookies/banner-copy-mary-molloy.md`. |

### How to verify

1. **Check the consent flow against the GDPR five-point test.** Open the live banner and confirm:
   - Reject is as visible and easy to click as Accept (freely given)
   - Each category can be accepted or refused on its own (specific)
   - The visitor can read what each category does before deciding (informed)
   - Consent only registers on a real click, never on scrolling or page navigation (unambiguous)
   - Consent can be withdrawn from `/cookie-policy` at any time (withdrawable)

2. **Check the right to information.** Visit `/cookie-policy` and confirm the Cookie Declaration table shows for every cookie:
   - Its name
   - Its provider
   - Its purpose
   - Its lifespan
   If any cookie is missing this information, fix it in the Cookiebot dashboard before launch.

3. **Run the script that captures evidence of all of the above on a specific date:**
   ```bash
   npx tsx scripts/compliance-screenshot.ts edpb-para-3-verification
   ```
   This produces a dated screenshot record showing the banner and the cookie declaration as they appeared on the day of verification — useful evidence if the DPC ever asks how Mary satisfied Para 3.

If all three checks pass, the GDPR-grade quality bar that Para 3 imports into Irish ePrivacy law is being met.

---

_Last updated: 2026-04-25. Section 1 (Paras 1–3) complete. Remaining sections to be added as we walk through them._

---

## Section 2 — Application of the OSS

This section is jurisdictional, not behavioural. It does not change what we have to *do* on the banner — it tells us *who could come asking questions about it*. Two paragraphs, covered together because they are tightly related.

### Abbreviations used in this section

| Abbreviation | Stands for | Plain English |
|---|---|---|
| **OSS** | One-Stop-Shop | A GDPR mechanism where a single regulator handles complaints across the whole EU instead of every country's regulator opening parallel investigations |
| **SA** | Supervisory Authority | A national data protection regulator — DPC for Ireland, CNIL for France, BfDI for Germany, etc. |
| **CSA** | Concerned Supervisory Authority | A national regulator that has an interest in a specific complaint (e.g. because the complainant lives in their country) |

### Para 4

> "Delegations recalled that the OSS mechanism does not apply to issues that fall under the ePrivacy Directive."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 2, paragraph 4 (page 4). Verified verbatim against local PDF on 2026-04-25._

### Para 5

> "When the GDPR applies, the taskforce members favoured the position that article 4(23)(b) may apply but does not per se apply to complaints against website owners just because you can access the respective website from all Member States. The CSAs will be identified based on the factual elements to conclude on cross-border cases."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 2, paragraph 5 (page 4). Verified verbatim against local PDF on 2026-04-25._

### What this means in plain English

The GDPR has a useful efficiency mechanism called the **One-Stop-Shop**. Under OSS, if a company is based in one EU country but has customers across the EU, **one regulator** (called the "Lead Supervisory Authority") handles complaints against them. Other EU regulators get kept informed but the Lead drives the case.

Para 4 is saying: **the OSS does not apply to cookie complaints.**

Why? Because we already established in Para 1 that cookie-setting is governed by the **ePrivacy Directive** (in Ireland: S.I. 336/2011), not the GDPR. And the OSS is a GDPR mechanism. If GDPR doesn't apply to the issue, the OSS doesn't apply either.

Para 5 then deals with what happens **once you reach the GDPR side** of the two-stage model from Para 2 (i.e. the data-use phase, after the cookie has been set). It says **GDPR Article 4(23)(b)** — which defines "cross-border processing" — *might* apply, but it does not apply just because a website is reachable from every EU country.

The actual text of Article 4(23)(b), verified verbatim from the local GDPR PDF:

> "(23) 'cross-border processing' means either:
> (a) processing of personal data which takes place in the context of the activities of establishments in more than one Member State of a controller or processor in the Union where the controller or processor is established in more than one Member State; or
> **(b) processing of personal data which takes place in the context of the activities of a single establishment of a controller or processor in the Union but which substantially affects or is likely to substantially affect data subjects in more than one Member State.**"

_Source: `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf`, Article 4(23). Verified verbatim on 2026-04-25._

The bolded sub-paragraph (b) is the one Para 5 talks about. The key word is **"substantially."** A complainant has to show that the processing substantially affects people in multiple Member States — just being reachable from those countries is not enough.

### A simple example

Say someone in Germany visits Mary's site, doesn't like the cookie banner, and complains.

- **Under OSS for GDPR matters:** if it were a GDPR-only complaint, you would expect the DPC (where Mary is established) to handle it as Lead and the German regulator to be kept informed.
- **For cookie complaints (Para 4):** OSS does not apply at all. The German regulator can investigate Mary's banner directly under German ePrivacy law (TTDSG). The DPC has no special priority.
- **For the data-use side (Para 5):** even on the GDPR-governed half (e.g. how Google Analytics processes the data once consent is given), Article 4(23)(b) does not automatically kick in just because Mary's site is reachable in Germany. The German regulator would have to show the processing **substantially** affects German residents.

For a Kilkenny solicitor whose audience is 99% Irish, that "substantial" threshold is unlikely to be met. But the *theoretical* exposure is broader than just the DPC.

### Why the EDPB is making these points

Both paragraphs are closing off arguments that some site operators try to use:

- Para 4 closes: *"You can't investigate me, I'm based in Ireland, only the DPC has jurisdiction under OSS."* Wrong for cookies — OSS doesn't apply.
- Para 5 closes: *"You can't investigate me, my site is reachable everywhere so OSS must apply."* Wrong — reachability alone does not trigger Article 4(23)(b).

Together they confirm: **for cookie complaints, multiple EU regulators may have jurisdiction.** Site owners cannot route everything through their home regulator just because that is convenient.

### Why this matters for Mary's site

Practically: **the DPC is not the only regulator who could ever look at Mary's cookie banner.**

- Most likely, complaints from Irish residents go to the DPC (and stay there).
- But if a German, French, or Spanish resident visits Mary's site and complains to their own national regulator about the banner, that regulator could investigate directly under their country's ePrivacy law.
- This is **theoretical for a Kilkenny solicitor** — Mary's audience is overwhelmingly Irish, so a complaint from another EU country is extremely unlikely. But the rule means the bar Mary's banner has to meet is **"satisfy any reasonable EU regulator,"** not just **"satisfy the DPC."**

The good news: **the EDPB report we are walking through is itself the EU-wide consensus position.** Every EU regulator helped write it. So if Mary's banner satisfies the rules in this report, it satisfies any EU regulator — by design.

### How this affects what we do

**Nothing changes about implementation.** Section 2 is jurisdictional, not behavioural — it tells us *who could investigate*, not *what to do*. The actions to comply are all in the later sections (no reject button on the first layer, no pre-ticked boxes, deceptive button colours, etc.).

But it does reinforce one strategic point that was already implicit in our approach:

| Strategy | Why we already do this |
|---|---|
| Cross-check against EDPB consensus, not just DPC | Done — that is exactly what this `edpb-2023-compliance-evidence.md` file is for. |
| Use a CMP that is configured to EU-wide standards by default | Done — Cookiebot is set to explicit consent, no pre-ticked boxes, equally easy reject, and is widely deployed in EU regulated industries. |
| Keep dated screenshots of the banner | Done — `scripts/compliance-screenshot.ts` produces dated records under `legal-compliance/compliance-records/`. |
| Avoid relying on "we're Irish so only the DPC matters" | Done — the entire compliance set in `legal-compliance/cookies/` references DPC, EDPB, GDPR, and S.I. 336/2011. |

So Section 2 effectively confirms that the broader, multi-regulator-ready approach we are already taking is the right one.

### Verification

There is nothing to *test* on the live site for Section 2 — it is jurisdictional. The verification step here is documentary:

1. **Confirm the compliance set covers all four reference layers**, not just the DPC. Open `legal-compliance/cookies/README.md` — the "What's in this folder" table should list the DPC PDF, the EDPB report, the EDPB consent guidelines, and S.I. 336/2011. ✅
2. **Confirm the GDPR PDF is in the project** for any Article 4(23) verification: `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf`. ✅
3. **Confirm the compliance screenshot script captures evidence** in a format any EU regulator could review on request: `scripts/compliance-screenshot.ts`. ✅

If those three documentary points hold, Section 2 is satisfied — Mary's site is set up to be defensible to any reasonable EU regulator who might choose to look, not just the DPC.

---

_Last updated: 2026-04-25. Sections 1 (Paras 1–3) and 2 (Paras 4–5) complete. Remaining sections to be added as we walk through them._

---

## Section 3 — Type A Practice: "No Reject Button on the First Layer"

This is the most important banner-design rule in the whole report — and the one most cookie banners on the internet still fail. Three paragraphs in this section: Para 6 describes the problem, Para 7 restates the consent baseline, and Para 8 sets out the actual EDPB position.

### Terms used in this section

| Term | Plain English |
|---|---|
| **Controller** | The website owner. The legal term used by GDPR and ePrivacy law for the entity that decides what data is collected and why. For Mary's site, the controller is Mary's firm. |
| **Data subject** | The visitor — the person whose device the cookie would be set on. |
| **First layer** | The cookie banner itself when it first appears (not what you see after clicking "Settings" or "Show details"). |
| **Type A practice** | A label NOYB used for this specific complaint pattern. The EDPB inherited the labels from the complaints — the letter has no significance beyond that. |

### Para 6 — Description of the problem

> "It appears that some cookie banners displayed by several controllers contain a button to accept the storage of cookies and a button that allows the data subject to access further options, but without containing a button to reject the cookies."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 3, paragraph 6 (page 4). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Para 6 is just **describing the problem the EDPB is about to rule on.** It is not the ruling itself.

The pattern looks like this:

> Some cookie banners show **two buttons** when they first appear:
>
> 1. **"Accept"** — sets all cookies immediately.
> 2. **"Settings"** (or "Manage cookies," "Preferences," "Customise," etc.) — opens a second layer where the visitor can fine-tune their choices.
>
> But there is **no "Reject" button anywhere on the first layer.** To refuse cookies, the visitor has to click through to the second layer, find each category toggle, switch each one off individually, find a "Save" button, and click it. Five or six steps to refuse, one click to accept.

#### Why this is a problem

1. **It is not "as easy to refuse as to accept."** The asymmetry between one-click acceptance and multi-step refusal pushes visitors toward accepting just to make the banner go away. The EDPB position is that consent collected this way is not "freely given" in the GDPR sense.

2. **It nudges the consent rate artificially high.** Visitors don't refuse because the path is longer, not because they actually want to accept. That distorts the entire consent system.

### Para 7 — The consent baseline

> "As a preliminary remark, the task force members recalled that by default, no cookies which require consent can be set without a consent and that consent must be expressed by a positive action on the part of the user."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 3, paragraph 7 (page 5). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Before the EDPB makes any ruling on the no-reject-button problem, it reminds everyone of two ground rules that come before everything else:

1. **No consent-required cookies can fire without consent.** The default state of any visitor on any site is "no consent given." Until they take an action that signals consent, cookies that require consent (anything beyond strictly necessary) cannot be set.

2. **Consent must be a positive action.** A "positive action" means something the visitor actively does — clicking a button, ticking a box, dragging a slider. It is **not**:
   - Closing the banner with the X button
   - Continuing to browse the site
   - Scrolling down the page
   - Just being on the site for a long time
   - Refreshing the page

#### Why this paragraph is here

Para 7 is laying down the principle that Para 8 is about to apply. The EDPB is saying *"before we get into whether a reject button must be on the first layer, let's agree on the basics first: no cookies without consent, and consent must be a real action."*

This matters because some site operators have argued *"continuing to browse is consent"* or *"closing the banner is consent."* Para 7 closes those arguments. The visitor must do something positive — and that "something positive" is what Para 8 is about to define more precisely.

### Para 8 — The actual EDPB ruling

> "When authorities were asked whether they would consider that a banner which does not provide for accept and refuse/reject/not consent options on any layer with a consent button is an infringement of the ePrivacy Directive, a vast majority of authorities considered that the absence of refuse/reject/not consent options on any layer with a consent button of the cookie consent banner is not in line with the requirements for a valid consent and thus constitutes an infringement. Few authorities considered that they cannot retain an infringement in this case as article 5(3) of the ePrivacy Directive does not explicitly mentioned a 'reject option' to the deposit of cookies."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 3, paragraph 8 (page 5). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Para 8 is the actual EDPB position on no-reject-button banners. Two parts to it:

**The majority view (which most regulators including the DPC follow):**
A banner that has an **Accept** button but no **Reject / Refuse / Decline** option **on the same layer as the accept** is a breach of ePrivacy law. The reasoning is that without a reject option at the same prominence, the consent collected isn't "valid" — and any cookies set on the back of it were set unlawfully.

**The minority view (a small number of regulators):**
A few regulators noted that **Article 5(3) of the ePrivacy Directive doesn't literally use the word "reject."** It says cookies need consent. So if a banner technically obtains consent (by an Accept click), they argue the law is satisfied even without a Reject button.

#### What the split means in practice

This is one of the rare places in the report where the EDPB acknowledges regulators disagreed. **It does not change what we have to do** — for two reasons:

1. **The DPC sided with the majority.** The DPC's April 2020 guidance (in `legal-compliance/cookies/DPC-guidance-cookies-and-tracking-2020-04.pdf`) is explicit that consent must be "as easy to refuse as to accept" and that a Reject option is required at the same level as Accept. So in Ireland, the majority view applies.

2. **Other EU regulators could still investigate Mary's banner.** As we covered in Section 2 (Para 4), the OSS doesn't apply to cookie complaints — so a German or French regulator following the majority view could investigate even if Mary tried to rely on the minority view. The safe rule is: **build to the majority interpretation.**

### How this site complies

Mary's banner satisfies all three paragraphs of Section 3. Specifically:

| Requirement | How Mary's banner meets it |
|---|---|
| **Para 6** — A reject button must be on the first layer (not buried in a second layer) | Cookiebot is configured to show three buttons on the first layer: **Deny**, **Allow selection**, **Allow all**. The "Deny" button is the reject option, visible immediately when the banner appears. See `banner-copy-mary-molloy.md` lines 28–46. |
| **Para 7** — No consent-required cookies can fire without a positive consent action | The Cookiebot script is loaded with `data-blockingmode="auto"` in `src/layouts/BaseLayout.astro`. In auto-blocking mode, no third-party scripts run until the visitor clicks Allow all or Allow selection. Closing the banner, scrolling, or browsing does not trigger consent. |
| **Para 7** — Consent must be a positive action | Cookiebot is configured with **Page scroll = consent: disabled** and **Page refresh = consent: disabled** (per `client-onboarding-checklist.md` Phase 2). The only way to give consent is by clicking one of the consent buttons. |
| **Para 8** — The reject option must be at equal prominence to accept | Mary's banner shows Deny and Allow all as **two equal buttons** side by side on the first layer — same size, same font weight, same visual treatment. No CSS overrides demoting Deny (the previous demoted styling was removed in commit `fec7dd0` for exactly this reason). |

### How to verify

This is the most important banner test in the entire walkthrough — run all five steps before launch.

1. **Open the live site in a fresh incognito window** (or DevTools → Application → Storage → Clear site data).
2. **Wait for the intro overlay to finish, then for the cookie banner to appear.**
3. **Check the buttons visible on the first layer** before clicking anything, before opening "Show details" or "Settings."
   - **Expected:** three buttons — `[ Deny ]`, `[ Allow selection ]`, `[ Allow all ]`.
   - **If only Allow all and Settings appear:** the Cookiebot dialog layout is wrong. Fix it in the Cookiebot admin under **Configuration → Banner → Dialog layout**.
4. **Visually compare Deny against Allow all.** Same size? Same font weight? Same visual prominence? They should be siblings, not one styled as a button and the other as a link.
   - **If Deny is smaller or styled as a link:** check (a) any custom CSS that might override Cookiebot, and (b) the Cookiebot admin layout setting. The previous styling override that demoted Deny was removed in commit `fec7dd0` — make sure no new override has crept in.
5. **Click Deny and verify no non-essential cookies fire.** Open DevTools → Application → Cookies. Only `CookieConsent` should be present.

If all five checks pass, Mary's banner is not a Type A practice and satisfies Section 3 of the EDPB report.

### Why this section matters more than the others

Type A is the most-investigated cookie banner pattern in the EU. NOYB filed hundreds of complaints specifically targeting it, which is what triggered this entire EDPB taskforce in the first place. Multiple national regulators (CNIL in France, the Italian Garante, the Spanish AEPD) have issued public fines for banners failing this exact test.

So when we say "Mary's banner satisfies Section 3," that is not just a checkbox — it is the difference between a defensible cookie banner and one that would likely be the first thing a complaint targets.

The fact that Cookiebot's default layout *passes* this test is one of the strongest arguments for using Cookiebot in the first place. It is also why the "no custom CSS overriding Cookiebot's button prominence" rule (commit `fec7dd0`) is non-negotiable on this project.

---

_Last updated: 2026-04-25. Sections 1 (Paras 1–3), 2 (Paras 4–5), and 3 (Paras 6–8) complete. Remaining sections to be added as we walk through them._

---

## Section 4 — Type B Practice: "Pre-ticked Boxes"

The shortest section in the entire report. The rule is simple: **pre-ticked boxes are never valid consent.** Two paragraphs — one describing the problem, one giving the EDPB's flat ruling on it.

### Terms used in this section

| Term | Plain English |
|---|---|
| **Second layer** | The screen that appears after the visitor clicks "Settings" / "Show details" / "Customise" on the first banner. This is where each cookie category (Necessary, Statistics, Preferences, Marketing) usually has its own toggle or checkbox. |
| **Opt-in** | The visitor takes a positive action to agree. The opposite is "opt-out" — the visitor has to take action to refuse, and is otherwise assumed to have agreed. EU law requires opt-in for non-essential cookies. |

### Para 9 — Description of the problem

> "It appears that several controllers provide users with several options (typically, representing each category of cookies the controller wishes to store) with pre-ticked boxes on the second layer of the cookie banner (after the user clicked on the 'Settings' button of the first layer)."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 4, paragraph 9 (page 5). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Some banners look fine on the first layer — they show Accept, Reject, and Settings buttons. But when the visitor clicks **Settings** to fine-tune their choices, the second layer reveals checkboxes that are already ticked.

So the visitor sees something like this:

```
┌───────────────────────────────────────┐
│  Cookie preferences                   │
│                                       │
│  ☑ Necessary       (cannot disable)   │
│  ☑ Statistics                         │  ← already ticked
│  ☑ Preferences                        │  ← already ticked
│  ☑ Marketing                          │  ← already ticked
│                                       │
│           [ Save preferences ]        │
└───────────────────────────────────────┘
```

The visitor wanted to tune their consent, but the website has already pre-decided that they consent to everything. Unless the visitor manually unticks each box, every category counts as accepted when they click Save.

#### Why this is a problem

It is a soft version of the Type A no-reject-button problem. The visitor clicked Settings precisely *because* they wanted control — and the site has reduced that control to "untick three boxes individually before clicking Save," which is materially harder than "click one Accept button." Visitors who don't read carefully will save their preferences with everything still ticked, accepting consent they never positively gave.

This is the digital equivalent of a contract that says "by signing nothing, you agree." Silence is being treated as agreement.

### Para 10 — The EDPB ruling

> "The taskforce members confirmed that pre-ticked boxes to opt-in do not lead to valid consent as referred to either in the GDPR (see in particular recital 32 'Silence, pre-ticked boxes or inactivity should not therefore constitute consent.') or in Article 5(3) of the ePrivacy Directive."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 4, paragraph 10 (page 5). Verified verbatim against local PDF on 2026-04-25._

> **GDPR Recital 32 — independently verified.** The EDPB report quotes Recital 32 of the GDPR — "Silence, pre-ticked boxes or inactivity should not therefore constitute consent." This phrase has been independently verified verbatim against the local GDPR Official Journal PDF (`legal-compliance/GDPR-regulation-2016-679-official-journal-with-recitals-2016-05.pdf`, Recital 32, page L 119/6). Verified on 2026-04-25. The full Recital 32 reads:
>
> > "Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement. This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject's acceptance of the proposed processing of his or her personal data. **Silence, pre-ticked boxes or inactivity should not therefore constitute consent.** Consent should cover all processing activities carried out for the same purpose or purposes. When the processing has multiple purposes, consent should be given for all of them. If the data subject's consent is to be given following a request by electronic means, the request must be clear, concise and not unnecessarily disruptive to the use of the service for which it is provided."

#### What this means in plain English

Para 10 is the ruling and it is not soft. The EDPB confirms that pre-ticked boxes **do not produce valid consent.** Two reasons given:

1. **The GDPR itself says so.** Recital 32 explicitly lists pre-ticked boxes as one of the things that does not count as consent — alongside silence and inactivity.
2. **The ePrivacy Directive Article 5(3) says so.** That article requires consent before non-essential cookies can be set, and a pre-ticked box doesn't meet the standard for valid consent.

So this isn't a "best practice" or a "guidance suggestion" — it is the binding position under both the GDPR and ePrivacy law. A pre-ticked box equals **no consent at all** in the eyes of the regulator, even if the visitor hits Save without unticking it.

#### What "to opt-in" means in the ruling

The wording "pre-ticked boxes to opt-in" matters. The ruling targets pre-ticked boxes that are being used to record an **affirmative agreement** to non-essential cookies. It does not apply to:

- The Necessary / Strictly Necessary category — that category does not require consent at all (Reg 5(5) of S.I. 336/2011), so showing it as ticked-and-locked is fine.
- Settings unrelated to consent — for example, a "remember my preferences" checkbox in an unrelated form.

For every consent-required category (Statistics, Preferences, Marketing, anything else), the box must start **unticked**. The visitor must take a positive action to tick it before consent registers.

### How this site complies

Mary's banner satisfies Section 4 by configuration, and the configuration is documented in two places:

| Requirement | How Mary's banner meets it |
|---|---|
| **Para 9** — No pre-ticked boxes for consent-required categories on the second layer | Cookiebot is configured with **default unchecked state** for Statistics, Preferences, and Marketing. Documented in `client-onboarding-checklist.md` Phase 2 → "Default checkbox state." |
| **Para 10** — Consent must be a positive action, not silence or pre-ticked boxes | Same configuration. The visitor must individually tick each non-Necessary category before consent fires for that category. |
| The Necessary category appears ticked-and-locked | Acceptable — strictly necessary cookies are exempt from the consent requirement under Reg 5(5) of S.I. 336/2011, so showing them as already enabled is the correct UX. |

There is no per-page implementation needed for this — it is entirely a Cookiebot admin setting, set once at deployment.

### How to verify

1. **Open the live site in a fresh incognito window.**
2. **Wait for the cookie banner to appear.**
3. **Click "Allow selection"** (or "Show details" / "Customise" — whichever takes you to the second layer where the per-category checkboxes are).
4. **Inspect the checkbox state for each category** before clicking anything else:
   - **Necessary** — should appear ticked and disabled (cannot untick). ✅
   - **Statistics** — should appear **unticked**. ❌ if ticked.
   - **Preferences** — should appear **unticked**. ❌ if ticked.
   - **Marketing** — should appear **unticked**. ❌ if ticked.
5. **If any non-Necessary category appears ticked by default**, fix it in the Cookiebot dashboard:
   - Go to **Configuration → Banner → Default state**
   - Set **Statistics**, **Preferences**, and **Marketing** to **off**
   - Save
6. **Re-verify in a fresh incognito session** to confirm the fix is live.

If steps 4–5 pass on the live banner, Mary's banner is not a Type B practice and satisfies Section 4 of the EDPB report.

### Why this section is unusually short

Most sections of the EDPB report describe a problem, then explore edge cases, then carve out where regulators agreed and disagreed. Section 4 has none of that. There is no minority view. There is no nuance. There is no "case-by-case analysis required."

That tells you something: pre-ticked boxes are the most settled rule in EU cookie consent law. The Court of Justice of the EU ruled on it directly in **Case C-673/17 (Planet49 GmbH, October 2019)** — pre-ticked boxes are not valid consent, full stop. The EDPB is just restating Planet49 and Recital 32 here. There is no reasonable argument for the other side.

So if Mary's banner ever ended up in front of a DPC investigator, this is one rule that would never be in dispute — it would either be passing or failing, and the only acceptable answer is passing.

---

_Last updated: 2026-04-25. Sections 1 (Paras 1–3), 2 (Paras 4–5), 3 (Paras 6–8), and 4 (Paras 9–10) complete. Remaining sections to be added as we walk through them._

---

## Section 5 — Type C Practice: "Deceptive Link Design"

The biggest section so far — four paragraphs, with the EDPB stating two related rules:

1. **The reject option must be a button, not a buried text link.**
2. **The banner must not imply that accepting cookies is required to use the site.**

This section also gives two specific examples of designs that fail, plus the principle that those examples are non-exhaustive.

### Terms used in this section

| Term | Plain English |
|---|---|
| **Link Design** | Using a hyperlink (small underlined text inside body copy) instead of a styled button as the way to refuse cookies. |
| **First layer** | The cookie banner as it first appears (not the second-level settings screen). |
| **Non-exhaustive list** | The examples given are illustrative, not the only failures — other patterns that have the same effect would also fail. |

### Para 11 — Description of the problem

> "Deceptive 'Link Design' It appears that some cookie banners displayed by several controllers contain a link, not a button, as an option to reject the deposit of cookies (direct link to reject or link to a second layer where a user can reject the deposit of cookies)."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 5, paragraph 11 (page 5). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Some banners do technically include a way to refuse cookies — but they make it a **text link**, not a button. So the banner ends up looking like:

```
┌──────────────────────────────────────────────────┐
│  Cookies on this website                         │
│                                                  │
│  We use cookies for analytics and marketing.     │
│  You can refuse here or continue without         │
│  accepting cookies.                              │
│                                                  │
│                          [ Allow all ]           │
└──────────────────────────────────────────────────┘
```

The word "refuse" is a tiny underlined link inside a paragraph of text. The word "Accept" is a big filled button. To an ordinary visitor, the banner looks like it has one button. The link blends into the body copy and most people never see it.

#### Why this is a problem

It's the same root issue as the Type A no-reject-button problem from Section 3, but in disguise. Real consent requires the refuse option to look like a real, equally-prominent choice. If it looks like running text, the visitor's eye skips over it. The refuse path technically exists but functionally doesn't.

### Para 12 — What every banner must clearly tell the visitor

> "The taskforce members agreed that in any case, there should be a clear indication on what the banner is about, on the purpose of the consent being sought and on how to consent to cookies."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 5, paragraph 12 (page 5). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Every cookie banner must tell the visitor three things, clearly:

1. **What the banner is about** — that it concerns cookies and consent.
2. **Why consent is being asked for** — what the cookies will actually be used for (analytics, marketing, etc.).
3. **How to give or refuse consent** — the mechanism on the banner.

Translation: no vague "we use cookies, OK?" banners. The visitor must *understand* before they're asked to agree.

### Para 13 — The two prohibitions and the suggested good practice

> "The members agreed that for the consent to be valid, the user should be able to understand what they consent to and how to do so. In order for a valid consent to be freely given, the taskforce members agreed that in any case a website owner must not design cookie banners in a way that gives users the impression that they have to give a consent to access the website content, nor that clearly pushes the user to give consent (one way could be on the contrary to allow the continuation of the navigation without cookies from the first level in particular for example)."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 5, paragraph 13 (page 5). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Para 13 is the heart of Section 5. It contains **two prohibitions** and **one positive example** of good practice.

**Prohibition 1: The banner cannot make the visitor think they have to consent to use the site.**

Designs like *"Accept cookies to continue"* or *"By browsing this site you agree to cookies"* are out. Non-essential cookies should never be presented as the price of accessing the content. The only cookies that may be required to use the site are the strictly necessary ones — and those are exempt from the consent requirement entirely (Reg 5(5) of S.I. 336/2011), so they don't appear in the consent question at all.

**Prohibition 2: The banner cannot push the visitor toward consenting.**

Even if the banner doesn't *say* "you must accept," the design itself cannot nudge the visitor in that direction. This is the "dark pattern" issue: Allow all big and bright, Refuse buried in a paragraph or styled as a barely-visible link, etc.

**The positive example the EDPB suggests:**

The EDPB offers one explicit good practice — *"to allow the continuation of the navigation without cookies from the first level."* In plain English: **the banner should make it obvious that "do nothing / refuse / browse without cookies" is a real, equally-easy path.** Not a hidden link, not a settings panel, but a clear option visible on the first banner.

### Para 14 — Two specific examples of what fails

> "The taskforce members agreed that the following examples do not lead to valid consents (non-exhaustive list):
>
> - the only alternative action offered (other than granting consent) consists of a link behind wording such as 'refuse' or 'continue without accepting' embedded in a paragraph of text in the cookie banner, in the absence of sufficient visual support to draw an average user's attention to this alternative action;
>
> - the only alternative action offered (other than granting consent) consists of a link behind wording such as 'refuse' or 'continue without accepting' placed outside the cookie banner where the buttons to accept cookies are presented, in the absence of sufficient visual support to draw the users' attention to this alternative action outside the frame"

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 5, paragraph 14 (pages 5–6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Two specific patterns the EDPB explicitly rules out:

**Failure 1: Refuse link buried inside a paragraph of banner text.**

Example: *"We use cookies to improve your experience. To learn more or to **continue without accepting**, click here."*

The "continue without accepting" is a hyperlink inside body copy. The visitor's eye reads the paragraph as informational text. The only thing that *looks* like a button is "Allow all." Invalid.

**Failure 2: Refuse link placed outside the banner entirely.**

Example: a big banner overlay with only an "Allow all" button — and somewhere else on the page, *outside* the banner, there's a small "refuse cookies" link in the footer or off to the side. The visitor's attention is on the banner; the refuse option might as well not exist. Invalid.

#### Two phrases that matter

**"Non-exhaustive list."** The two examples are illustrative, not the only failures. Other dark patterns with the same effect (refuse hidden by colour contrast, refuse in tiny font, refuse only revealed after a hover, etc.) would also fail.

**"In the absence of sufficient visual support."** If a refuse link were styled to look genuinely as prominent as the accept button — for example, a large styled link visually identical to a button — it might pass. But the bar is **real visual prominence**, not "we technically included it." In practice, using an actual button element is by far the safer route than relying on a styled link to satisfy this test.

### How this site complies

Mary's banner satisfies every Section 5 rule. Verified against the live banner copy in `banner-copy-mary-molloy.md` and the Cookiebot dashboard configuration:

| Section 5 rule | How Mary's banner meets it |
|---|---|
| **Para 11** — Refuse must be a button, not a buried link | "Deny" is a styled button on the first layer of the banner, sitting next to "Allow all" — both rendered by Cookiebot as the same button element type. No text-link refuse anywhere. |
| **Para 12** — Banner must explain what it's about | Heading "Cookies on this website" + body text states the topic clearly. |
| **Para 12** — Banner must explain purpose | Body text: "We use cookies to keep this website working, to understand how visitors use it, and — if you agree — to support marketing or advertising." |
| **Para 12** — Banner must explain how to consent | Body text: "You can accept all cookies, deny non-essential cookies, or view details to decide category by category." |
| **Para 13** — Banner cannot imply consent is required to use the site | No "Accept to continue" framing anywhere. The visitor can click Deny and continue browsing immediately. The only required cookies are the strictly necessary ones, which don't appear in the consent question. |
| **Para 13** — Banner cannot push the visitor toward consent | Deny and Allow all are equal-prominence buttons. No CSS overrides demote Deny (the previous demotion was removed in commit `fec7dd0`). |
| **Para 13** — Visitor can continue without cookies from the first level | Clicking Deny on the first banner sets only strictly-necessary cookies; the visitor can use the site immediately. No second-layer click required. |
| **Para 14, Failure 1** — Refuse must not be a link buried in paragraph text | Deny is a button, never inline body copy. |
| **Para 14, Failure 2** — Refuse must not be placed outside the banner | Deny is on the banner itself, alongside the other action buttons. There is no "refuse cookies" link elsewhere on the page that the banner relies on. |

### How to verify

Run all five steps before launch and at any annual review:

1. **Open the live site in a fresh incognito window.**
2. **Wait for the cookie banner to appear.**
3. **Visually inspect the first layer of the banner:**
   - Is "Deny" a styled button (filled or outlined), not a text link? ✅ Required.
   - Is "Deny" the same size and visual weight as "Allow all"? ✅ Required.
   - Is "Deny" inside the banner frame, not somewhere else on the page? ✅ Required.
4. **Read the banner body text:**
   - Does it explain what cookies are and why consent is being asked? ✅ Required.
   - Does it explicitly tell the visitor they can deny or accept? ✅ Required.
   - Does it avoid any phrasing like "Accept to continue" or "By using this site you agree"? ✅ Required.
5. **Click Deny and verify the site still works:**
   - Does the banner close after clicking Deny? ✅ Required.
   - Can the visitor continue browsing the site without restriction? ✅ Required.
   - Open DevTools → Application → Cookies. Are only strictly-necessary cookies present (typically just `CookieConsent`)? ✅ Required.

If all five checks pass, Mary's banner does not exhibit the Type C practice and satisfies Section 5 of the EDPB report.

### Why this section is the most subjective

Sections 3 and 4 are binary — either the reject button is on the first layer or it isn't, either the boxes are pre-ticked or they aren't. Section 5 introduces **judgement**: at what point does a refuse link have *sufficient visual support* to count as a real button? When does design *push* a visitor toward consent versus simply *display* the options?

Two takeaways from the subjectivity:

- **The safe rule is: use real buttons, equal prominence.** Don't try to thread the needle with creatively-styled links and clever layouts. The visual-prominence test is judgemental, and a regulator's judgement may be stricter than yours. Use proper buttons, render Deny and Allow all as siblings, and there's nothing to argue about.
- **Cookiebot's default layout passes by design.** This is one of the strongest practical reasons to keep using Cookiebot's defaults rather than restyling them. The previous custom CSS that demoted "Decline" to an underlined text link (removed in commit `fec7dd0`) was the kind of thing Section 5 directly prohibits — keeping that revert in place is what makes Mary's banner pass.

---

_Last updated: 2026-04-25. Sections 1 (Paras 1–3), 2 (Paras 4–5), 3 (Paras 6–8), 4 (Paras 9–10), and 5 (Paras 11–14) complete. Remaining sections to be added as we walk through them._

---

## Section 6 — Type D & E Practices: "Deceptive Button Colours" & "Deceptive Button Contrast"

The most flexible section in the report — and counterintuitively, that flexibility is good news for Mary's site. Five paragraphs, with the EDPB making three connected points:

1. **No fixed colour or contrast standard can be imposed.** Regulators are not going to publish a "every reject button must be this exact colour or this exact contrast ratio" rule.
2. **But that creative freedom is bounded by judgement.** Each banner is assessed case-by-case against one test: are the colours and contrast misleading the visitor toward consenting?
3. **One specific extreme is named as automatically failing.** A reject button so low-contrast that the text is "unreadable to virtually any user" is automatic out — that's not creative design, that's hiding the option.

So: **creative freedom + case-by-case judgement + a small set of auto-fail patterns.**

### Terms used in this section

| Term | Plain English |
|---|---|
| **Type D practice** | The complaint about manipulative button **colours** — making Accept stand out by using a bright/saturated colour while Reject is dull. |
| **Type E practice** | The complaint about manipulative **contrast** — making Reject hard to see by using low contrast between text and button background. |
| **Manifestly contrary** | A pattern so obviously wrong that no case-by-case judgement is needed — the report names these as automatic failures. |
| **Case-by-case** | The opposite of a fixed rule. Each banner is judged individually on whether its specific colour/contrast choices are misleading the average user. |

### Para 15 — Description of the problem

> "It appears that the configuration of some cookie banners in terms of colours and contrasts of the buttons ('contrast ratio between the accept button and the background' – type D practice) could lead to a clear highlight of the 'accept all' button over the available options."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 6, paragraph 15 (page 6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Some banners use colour and contrast to **make the Accept button visually dominant** over the other options. The Accept button might be a bright bold colour with strong contrast; the Reject button might be grey-on-grey, low-contrast, hard to spot. Both buttons technically exist, but the visual hierarchy pushes the visitor's eye and click toward Accept.

This is the visual cousin of Section 5's deceptive link design. Section 5 was about **Reject styled as a link instead of a button**. Section 6 is about **both options being buttons, but Accept being made visually dominant through colour and contrast.**

### Para 16 — Procedural note

> "The taskforce members agreed to examine type D and E practices together as the issues are linked and raise similar points of discussion."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 6, paragraph 16 (page 6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

This is housekeeping. Types D (colours) and E (contrast) overlap so much in practice that the EDPB chose to handle them as one section rather than two. Nothing to comply with — it is just explaining why the section heading combines two complaint types.

### Para 17 — The two-sided rule (creative freedom + case-by-case judgement)

> "The taskforce members agreed that a general banner standard concerning colour and/or contrast cannot be imposed on data controllers. In order to assess the conformity of a banner, a case-by-case verification must be carried out in order to check that the contrast and colours used are not obviously misleading for the users and do not result in an unintended and, as such, invalid consent from them. As a result, it was also agreed that a case-by-case analysis would be necessary to address specific cases, although some examples of features manifestly contrary to the ePrivacy Directive provisions have been identified."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 6, paragraph 17 (page 6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Two parts to this paragraph, and there is a clear tension between them:

**Part 1: Creative freedom — no fixed rule.**
The EDPB explicitly refuses to set a uniform standard. They will not say *"the reject button must always be at least 50% as visually prominent as accept"* or *"the contrast ratio must be at least 4.5:1"*. Why not? Because cookie banners exist on every kind of site, with every kind of visual style. A black-and-white minimalist site, a colourful e-commerce site, and a grey-on-cream solicitor site all need different colour treatments. A blanket rule would be impossible to apply fairly across all of them.

**Part 2: But freedom is bounded by judgement — case-by-case.**
That freedom is not unlimited. Every banner is judged individually against a single test: **are the colours and contrast misleading?** "Misleading" meaning the visitor's eye is pushed toward Accept in a way that produces *"an unintended and, as such, invalid consent."*

The phrase "*manifestly contrary*" is doing important work too — it is saying that even though the test is judgemental, some patterns are **so obviously bad** that no judgement is required. Para 18 then names one of those patterns.

So the takeaway is precise: **creative freedom + case-by-case judgement + a small set of obvious-failure patterns.**

### Para 18 — One specific extreme that automatically fails

> "Based on concrete examples, the taskforce members took the view that at least this practice could be manifestly misleading for users:
>
> - an alternative action is offered (other than granting consent) in the form of a button where the contrast between the text and the button background is so minimal that the text is unreadable to virtually any user."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 6, paragraph 18 (page 6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

If the Reject button has text that is **functionally invisible** because of colour/contrast — light grey text on a slightly-different light-grey background, for example — that is **manifestly misleading**. The Reject button technically exists but the visitor cannot read what it says. Automatic fail, no judgement required.

This is the **floor of the case-by-case test.** Anything below this is automatically out. Anything above it is judged individually.

The phrase "**unreadable to virtually any user**" is the threshold. It is not "harder to read than Accept" — that alone might survive the case-by-case test. It is "unreadable" — invisible to almost everybody. The auto-fail bar is set deliberately extreme.

### Para 19 — Reaffirming the case-by-case rule

> "While the design choices above are considered problematic, the taskforce members reiterated that each specific cookie banner needs to be assessed on a case-by-case basis."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 6, paragraph 19 (page 6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

The EDPB closes the section by repeating the central rule one more time: **each banner is judged individually.** Even the auto-fail in Para 18 does not change that overall framework — Para 18 names *one* pattern that always fails, but every other colour/contrast question still gets the case-by-case treatment.

### Why this section is good news for Mary's site

Mary's site already takes WCAG contrast seriously, which means the case-by-case test in this section is a test we are already designed to pass.

Three points work in Mary's favour:

1. **There is a project-wide WCAG verification workflow.** The "Colour Tooling — colorjs.io" section in `CLAUDE.md` (lines 22–47) requires every new colour to be verified against WCAG 2.1 contrast thresholds before being committed. The repo even has documented one-off scripts (`check-contrast.ts`) showing how to verify any colour pair.
2. **Every active theme documents its verified contrast ratios.** The header comment of `src/styles/themes/theme-navy-amber-charcoal.css` lists every foreground/background pair with its measured contrast ratio. Examples from the active theme: `fg-default` on `bg-page` = 14.79:1 (AA PASS); `fg-interactive` (white) on `bg-interactive` (amber-500) = 4.56:1 (AA PASS). These ratios sit far above the "unreadable" threshold the EDPB uses to define automatic failure.
3. **Cookiebot's default Deny and Allow all buttons are styled as siblings.** Same size, same font weight, same button element type. Same colour palette applied through the four banner colour fields we mapped earlier (Background → `--color-surface`, Text → `--color-fg-level-1`, Highlight → `--color-interactive-bg`, Shade → `--color-brand-bg`). The buttons get equal-prominence styling by default, not by override.

All three together give the case-by-case test (Para 17) a strong evidence base, and place the live banner so far above the auto-fail floor (Para 18) that the floor isn't even relevant.

### How this site complies

Verified against `banner-copy-mary-molloy.md`, `theme-navy-amber-charcoal.css`, and the Cookiebot dashboard configuration:

| Section 6 rule | How Mary's banner meets it |
|---|---|
| **Para 15** — Accept button must not be visually dominant over reject options | Cookiebot renders Deny and Allow all as equal-prominence buttons of the same shape, size, font weight and styling. No CSS override demotes Deny — the previous demotion was removed in commit `fec7dd0`. |
| **Para 17** — Colours and contrast must not be misleading | The four banner colours (Background, Text, Highlight, Shade) all come from `theme-navy-amber-charcoal.css`, where every colour pair has been verified against WCAG 2.1 thresholds and the ratios are documented in the theme file's header comment. |
| **Para 17** — Banner is subject to case-by-case review | Compliance evidence is already in the project: this file (the EDPB walkthrough), `cookiebot-compliance-analysis.md` (the Cookiebot capability map), the documented theme contrast ratios, and the dated screenshots from `scripts/compliance-screenshot.ts`. |
| **Para 18** — Reject button text must not be unreadably low-contrast | Mary's interactive button text/background combination passes WCAG AA (4.56:1 measured for white text on amber-500), well above the "unreadable to virtually any user" threshold. |
| **Para 19** — No assumption that any banner pattern is automatically safe | Plan to re-run contrast verification annually using `check-contrast.ts`-style scripts whenever the theme changes, and include a banner screenshot in every dated compliance record. |

### How to verify

Run all five steps before launch and at any annual review:

1. **Read the active theme file's contrast documentation.**
   - Open `src/styles/themes/theme-navy-amber-charcoal.css`.
   - Confirm the header comment lists each foreground/background pair with a verified WCAG ratio.
   - Confirm `fg-interactive` on `bg-interactive` (the colours used by the banner buttons) is at or above **4.5:1** (WCAG AA for normal text).
2. **Re-verify with `colorjs.io` if any banner colour has changed.**
   - Use the workflow in `CLAUDE.md` lines 22–47 (write a one-off `check-contrast.ts`, run with `npx tsx`).
   - Update the theme file's header comment with any new ratios.
3. **Open the live site in a fresh incognito window.**
4. **Visually inspect the banner buttons:**
   - Are Deny and Allow all the same size, shape, and font weight? ✅ Required.
   - Is Deny clearly readable at arm's length? ✅ Required.
   - Does either button appear visually dominant over the other? ❌ If yes, fix.
5. **Run the dated compliance screenshot.** This produces a permanent visual record of how the banner looked on the date of verification — useful evidence if the case-by-case test is ever applied:
   ```bash
   npx tsx scripts/compliance-screenshot.ts edpb-section-6-verification
   ```

If steps 1–5 pass, Mary's banner satisfies Section 6 and would withstand the case-by-case test the EDPB describes.

### Why the flexibility cuts both ways

Section 6 is the most flexible in the entire report — but flexibility cuts both ways. The good side: a thoughtfully-styled banner with documented contrast ratios is easy to defend. The bad side: there is no fixed standard to point at, so the defence relies on the evidence the site can produce. This is why the project's existing contrast documentation matters so much — without it, the case-by-case test becomes "trust me, the colours look fine," which is much weaker.

The general lesson: **document contrast ratios as data, not as a vibe.** The theme file headers do this already. Keep them up to date and the Section 6 defence essentially writes itself.

---

_Last updated: 2026-04-25. Sections 1 (Paras 1–3), 2 (Paras 4–5), 3 (Paras 6–8), 4 (Paras 9–10), 5 (Paras 11–14), and 6 (Paras 15–19) complete. Remaining sections to be added as we walk through them._

---

## Section 7 — Type H Practice: "Legitimate Interest Claimed, List of Purposes"

This section targets a specific dark pattern where sites try to **bypass the consent requirement by pretending data processing runs under "legitimate interest" instead of consent.** Six paragraphs, with the EDPB making one decisive ruling: **you cannot claim legitimate interest as a legal basis for setting non-essential cookies, and a broken cookie consent invalidates all the data processing that flows from it.**

### Terms used in this section

| Term | Plain English |
|---|---|
| **Legitimate interest** | A legal basis for processing personal data under GDPR Article 6(1)(f). Allowed for some kinds of processing (e.g. fraud prevention) where the controller's interest objectively outweighs the visitor's rights. **Cannot be used** for setting non-essential cookies. |
| **Subsequent processing** | What happens with the data *after* the cookie has been set — analysis, profiling, ad targeting, etc. (See Para 2 of this report.) |
| **Read/write operation** | Setting a cookie on a visitor's device, or reading a cookie that's already there. |
| **First level / second level** | The first layer is the banner that appears on arrival. The second layer is the settings panel that opens when the visitor clicks Settings, Show details, or Customise. |

### Para 20 — Description of the problem (first layer)

> "It appears that some controllers put in place a banner which highlights the possibility of accepting the read/write operation at the first level (of the banner) but does not include an option to refuse at this level, which can lead the average user to believe that he has no possibility of objection to the deposit of cookies at all, and, incidentally, to the subsequent processing that results from them."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 7, paragraph 20 (page 6). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Some banners look like this when they first appear:

```
┌───────────────────────────────────────────────┐
│  We use cookies on this website               │
│                                               │
│                          [ Accept all ]       │
└───────────────────────────────────────────────┘
```

Just one button. No Reject. The visitor sees one option and feels like they have no real choice — exactly the Type A problem from Section 3, but now used as the **setup** for something worse on the second layer.

The phrase "the average user to believe that he has no possibility of objection" is doing the work here. The EDPB is calling out that the design is engineered to make the visitor feel powerless before they've even seen what they could refuse.

### Para 21 — The split that follows on the second layer

> "In addition, at the second level (of the banner), a distinction is made between the refusal given to read/write operations and the potential objection to further processing presented as falling within the legitimate interest of the data controller."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 7, paragraph 21 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

If the visitor clicks Settings to dig deeper, the second layer looks something like this:

```
┌───────────────────────────────────────────────────┐
│  Cookie preferences                               │
│                                                   │
│  Cookies (consent-based):                        │
│    ☐ Statistics                                   │
│    ☐ Marketing                                    │
│                                                   │
│  ─────────────────────────────────────────────    │
│                                                   │
│  Processing on legitimate interest:               │
│    ☑ Create a personalised content profile        │
│    ☑ Select personalised ads                      │
│    (You may object to these separately)           │
│                                                   │
│           [ Save preferences ]                    │
└───────────────────────────────────────────────────┘
```

The site has split data processing into **two separate buckets**:

1. **The cookie itself** — needs consent (the checkboxes at the top).
2. **What happens with the data the cookie collects** — which the site is claiming runs under *"legitimate interest"* (GDPR Article 6(1)(f)) and therefore doesn't need consent at all. The visitor is told they can "object" — but the burden is on them to take a separate action.

A visitor who refuses cookies thinks they've stopped everything. They haven't — the site is processing their data anyway under a different legal basis they didn't know about. They have to refuse twice, in two different places, to actually stop everything.

### Para 22 — What the EDPB observed in these cases

> "In those cases, it appears that:
>
> - The controller relied on legitimate interests under article 6(1)(f) GDPR for different processing activities as, for example, 'Create a personalised content profile' or 'Select personalised ads' whereas it could be considered that no overriding legitimate interest would exist for such processing activities.
> - The integration of this notion of legitimate interest for the subsequent processing 'in the deeper layers of the banner' could be considered as confusing for users who might think they have to refuse twice in order not to have their personal data processed."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 7, paragraph 22 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Two specific concerns:

**Concern 1: The processing activities being claimed under "legitimate interest" should not actually qualify for it.** GDPR Article 6(1)(f) (legitimate interest) is allowed only when the controller's interest objectively outweighs the visitor's privacy rights — and even then, only for processing the visitor would reasonably expect.

The examples named — *"Create a personalised content profile"* and *"Select personalised ads"* — are exactly the kinds of intrusive profiling activities where a court would say *"no, this needs consent, you cannot use legitimate interest for this."* Profiling people for targeted ads is not what legitimate interest was designed for.

**Concern 2: Splitting refusal across two places is confusing.** Even if legitimate interest were appropriate for the activity (it isn't), making the visitor refuse separately for the cookie and for the processing creates a pattern where most visitors will only do one — and the controller keeps doing the other regardless.

### Para 23 — The two-part test for lawfulness

> "The taskforce members agreed that whether the subsequent processing based on cookies is lawful requires to determine if:
>
> - the storage/gaining of access to information through cookies or similar technologies is done in compliance with Article 5(3) ePrivacy directive (and the national implementing rules).
> - any subsequent processing is done in compliance with the GDPR."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 7, paragraph 23 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

This paragraph sets up the Para 24 ruling. It's saying: **two questions have to be answered before subsequent data processing is lawful.** Both have to pass; failing either fails the whole thing.

| Question | The law that decides |
|---|---|
| Was the cookie placement lawful? | ePrivacy Directive Article 5(3) — and in Ireland, S.I. 336/2011 Reg 5 |
| Is what we're doing with the data lawful? | GDPR |

The two-stage model from Section 1 (Paras 1 and 2) is being restated here as the framework for Section 7's killer ruling.

### Para 24 — The killer ruling (this is the most important paragraph in Section 7)

> "In this regard, the taskforce members took the view that non-compliance found concerning Art. 5 (3) in the ePrivacy directive (in particular when no valid consent is obtained where required), means that the subsequent processing cannot be compliant with the GDPR. Also, the TF members confirmed that the legal basis for the placement/reading of cookies pursuant to Article 5 (3) cannot be the legitimate interests of the controller."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 7, paragraph 24 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English — two killer rulings in one paragraph

**Ruling 1: A broken cookie consent invalidates everything that flows from it.**

> "non-compliance found concerning Art. 5 (3) in the ePrivacy directive… means that the subsequent processing cannot be compliant with the GDPR."

**Plain English:** If the cookie was set unlawfully (no valid consent where required), then **anything you do with the data afterwards is also illegal**, no matter what legal basis you try to claim for it.

You cannot fix a broken cookie consent by saying *"OK, the cookie was bad, but the data we collected from it is processed under legitimate interest so that part's fine."* No — both parts fall together. A poisoned tree, poisoned fruit.

**Ruling 2: You cannot use "legitimate interest" to set non-essential cookies in the first place.**

> "the legal basis for the placement/reading of cookies pursuant to Article 5 (3) cannot be the legitimate interests of the controller."

**Plain English:** Cookies that need consent **need consent**. There is no alternative legal basis for that step. You cannot say *"we're setting this analytics cookie under legitimate interest, so we don't need to ask"*. The only acceptable legal basis for placing or reading non-essential cookies is **consent under Article 5(3)**.

### Para 25 — Placeholder for future discussion

> "The TF members agreed to resume discussions on this type of practice should they encounter concrete cases where further discussion would be necessary to ensure a consistent approach."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 7, paragraph 25 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

The EDPB will revisit Type H if specific cases bring up new questions. Nothing to comply with — it's a placeholder telling regulators "we'll come back to this if we need to." For us, the operational rules are entirely in Paras 20–24.

### How this site complies

Mary's site does not operate the Type H pattern at all. Three reasons:

| Section 7 concern | Why it doesn't apply to Mary's site |
|---|---|
| **Para 20** — First-layer banner with no Reject option | Mary's first-layer banner has Deny, Allow selection, and Allow all as three equal-prominence buttons. (See Section 3 verification — Mary's banner already passes Type A, which is the prerequisite this section abuses.) |
| **Para 21** — Second-layer split between consent-based and "legitimate interest" processing | Mary's Cookiebot configuration does not expose any "legitimate interest" tab or category. The four standard categories (Necessary, Statistics, Preferences, Marketing) all run under consent — there is no parallel "legitimate interest" track to refuse separately. |
| **Para 22** — Profiling activities like "personalised content profile" or "personalised ads" claimed under legitimate interest | Mary's site has no analytics, no advertising, no profiling, no personalisation. There is no processing activity to claim under any legal basis — there is nothing happening at all. |
| **Para 24, Ruling 1** — Broken cookie consent invalidates all subsequent processing | Mary's banner is set up so consent is GDPR-grade (Section 1 Para 3 confirmed this). When and if analytics is ever added, the consent that gates the cookie also gates the data use — they cannot come apart. |
| **Para 24, Ruling 2** — Legitimate interest cannot be the legal basis for setting non-essential cookies | Mary's site does not claim legitimate interest for any cookie placement. Every non-essential cookie either fires after explicit consent or does not fire at all. The two strictly necessary cookies (`CookieConsent` and `intro-seen`) are exempt under Reg 5(5) of S.I. 336/2011, not running under "legitimate interest." |

### Closing the cross-reference from Section 1

Back in **Section 1, Para 1**, this file made a forward reference to Para 24:

> "No reliance on legitimate interest for cookie placement. This site does not attempt to set any cookie under 'legitimate interest' — every non-essential cookie either fires after explicit consent, or does not fire at all. This matches the EDPB's position in Para 24 of the same report (covered later in this file when we reach that section)."

That cross-reference is now closed off. The verbatim Para 24 text and full context are both above, verified against the local PDF, and the compliance position stated in Section 1 is supported by the actual rule it referenced.

### How to verify

This section is mostly behavioural — it asks "is the site doing the dark pattern?" Three checks confirm Mary's site is not:

1. **Confirm no "legitimate interest" tab exists on the second layer of the banner.**
   - Open the live banner. Click Settings / Show details / Allow selection.
   - The second layer should show only the standard cookie categories (Necessary, Statistics, Preferences, Marketing).
   - **Expected:** no separate "Legitimate interest" or "Object to processing" section. ✅
   - **If a Legitimate Interest tab is present:** disable it in the Cookiebot admin under **Configuration → Banner → Show legitimate interest** (or equivalent — Cookiebot's UI may name this differently).

2. **Confirm the codebase does not call legitimate interest a legal basis for cookies.**
   ```bash
   grep -r -i "legitimate interest" src/ legal-compliance/
   ```
   The expected result is **no matches in actual code or banner copy**. References are acceptable only inside this walkthrough file (where we are explaining what the rule prohibits) and in the GDPR PDFs (where Article 6(1)(f) defines it).

3. **Confirm no analytics, marketing, or profiling tools are running.**
   ```bash
   grep -r "google-analytics\|googletagmanager\|gtag\|fbq\|hotjar\|mixpanel\|profiling" src/
   ```
   No matches in real code. (Same check we ran in Section 1 Para 2 — it stays passing.)

If all three checks pass, Mary's site does not exhibit the Type H pattern and satisfies Section 7 of the EDPB report.

### Why Section 7 matters even though Mary's site doesn't operate this pattern

Two reasons to take this section seriously even when the site is on the right side of every rule:

1. **Future-proofing.** If Mary or a future developer ever adds a tool that itself ships with a "legitimate interest" toggle (some advertising SDKs do), the dark pattern could appear without anyone deliberately enabling it. The verification checklist above is what catches that.

2. **The Para 24 ruling has teeth beyond Section 7.** "A broken cookie consent invalidates all subsequent processing" is a much broader principle than just the Type H pattern. It means the case for getting the consent UI right (Sections 3, 4, 5, 6) is not just about the cookie itself — it's about every downstream data use that depends on it. Section 7 is where the compounding effect of those rules is made explicit.

---

_Last updated: 2026-04-25. Sections 1 (Paras 1–3), 2 (Paras 4–5), 3 (Paras 6–8), 4 (Paras 9–10), 5 (Paras 11–14), 6 (Paras 15–19), and 7 (Paras 20–25) complete. Remaining sections to be added as we walk through them._

---

## Section 8 — Type I Practice: "Inaccurately Classified Essential Cookies"

This section targets a different dirty trick from Section 7: **mislabelling cookies as "strictly necessary" when they aren't, so the consent rule doesn't apply.** Five paragraphs. The EDPB's position: **the burden of proof is on the website owner** to demonstrate every cookie classified as essential really is essential.

### Why this section matters

Strictly necessary cookies are exempt from consent under **Reg 5(5) of S.I. 336/2011** and Article 5(3) of the ePrivacy Directive. So a cookie classified as Necessary fires immediately, with no banner consent required. That makes "Necessary" a tempting category to abuse — if a controller can stretch the definition, they can run analytics or marketing cookies without ever asking permission.

This section is the EDPB telling regulators (and controllers): **that game does not work, and we will check every claim.**

### Terms used in this section

| Term | Plain English |
|---|---|
| **Strictly necessary** | A cookie genuinely required to deliver the service the visitor asked for (logging in, securing the session, remembering a shopping cart, recording the consent choice itself). The bar is high — "the site needs this to do what the visitor came for." |
| **Essential** | Used interchangeably with "strictly necessary" in this report. Same legal meaning. |
| **WP29** | The Article 29 Working Party — the EU body that pre-dates the EDPB. WP29 was replaced by the EDPB in 2018, but its old opinions are still considered authoritative until updated. |
| **Connected vehicles guidelines** | EDPB Guidelines 01/2020 — referenced in the report's footnote 5. Covers data processing in cars but the cookie classification logic is general. |
| **ECJ C-597/19** | The Court of Justice of the European Union ruling in *Mircom International Content Management & Consulting v Telenet*. Cited for paragraph 118 on the burden of proof. |

### Para 26 — Description of the problem

> "It appears that some controllers classify as 'essential' or 'strictly necessary' cookies and processing operations which use personal data and serve purposes which would not be considered as 'strictly necessary' within the meaning of Article 5(3) ePrivacy Directive or the ordinary meaning of 'strictly necessary' or 'essential' under the GDPR."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 8, paragraph 26 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Some controllers misuse the "Necessary" label to bypass consent for cookies that should require it. Common abuses:

- **Analytics cookies labelled Necessary** — Google Analytics, Hotjar, Mixpanel are not strictly necessary for any site; they're for the operator's benefit, not the visitor's.
- **Marketing pixels labelled Necessary** — Meta Pixel, Google Ads tracking, retargeting cookies are never essential.
- **Preference cookies labelled Necessary** — sometimes valid (see Para 30), sometimes a stretch.
- **Session-cookies-with-extras labelled Necessary** — a session token is essential; that same cookie carrying a tracking ID alongside the session ID is not.

The phrase "**ordinary meaning of strictly necessary or essential**" is doing important work. The EDPB is saying *we use the everyday meaning of these words, not whatever creative interpretation the controller comes up with.* If a layperson would not consider a cookie essential to using the site, it is not essential.

### Para 27 — Why classification is hard in practice

> "Taskforce members agreed that the assessment of cookies to determine which ones are essential raises practical difficulties, in particular due to the fact that the features of cookies change regularly, which prevents the establishment of a stable and reliable list of such essential cookies."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 8, paragraph 27 (page 7). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

The EDPB acknowledges classification is hard for a reason that isn't anyone's fault: **cookies change.** A cookie that's purely functional today might pick up a tracking parameter next month when the underlying tool issues an update. So the EDPB cannot publish a definitive list of *"these cookies are essential, these aren't"* — the list would be out of date the moment it was printed.

This is why classification is judged **per cookie, per site, at a point in time** — not against a master list.

### Para 28 — The burden of proof is on the controller

> "The existence of tools to establish the list of cookies used by a website has been discussed, as well as the responsibility of website owners to maintain such lists, and to provide them to the competent authorities where requested and to demonstrate the « essentiality » of the cookies listed."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 8, paragraph 28 (pages 7–8). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

This is the most operationally important paragraph in Section 8. Three obligations on the website owner:

1. **Maintain a list of every cookie the site sets.** Not a vague "cookies are used" statement — an actual list, kept up to date.
2. **Provide that list to the regulator on request.** If the DPC ever audits Mary's site, she has to be able to produce the cookie inventory.
3. **Demonstrate the essentiality of every cookie classified as essential.** For each cookie marked Necessary, the controller has to be able to explain *why* it is necessary — not just assert that it is.

The footnote on this paragraph cites **ECJ C-597/19, paragraph 118**, which is the Court of Justice ruling that established this burden-of-proof principle: it is the controller's job to prove compliance, not the regulator's job to prove a breach.

### Para 29 — How regulators will actually assess this

> "On that point, it has been mentioned that specific tools exist and may be used to analyse a website and create a report that shows all the cookies that were placed when visiting the website. However, the only available tools do not allow to check the nature of the cookies but only to list the cookies placed in order to ask the website owner to provide documentation on their purposes. These tools are thus an additional help for the competent authorities to seek further clarifications and information from the website owners in addition to the information also provided on the website."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 8, paragraph 29 (page 8). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

Regulators have **scanning tools** (like the one Cookiebot uses internally, or browser-based scanners like Cookiepedia) that can list every cookie a site sets. But those tools cannot judge whether a cookie is essential — they just produce the list.

So the workflow when a regulator investigates is:

1. The regulator runs a scanner against the site.
2. The scanner produces a list of every cookie the site sets, with category labels as the controller has applied them.
3. The regulator asks the controller: *"You've classified these five cookies as Necessary. Justify each one."*
4. The controller has to produce documentation proving each Necessary classification is correct.

If the controller can't justify a classification, the cookie is reclassified — and any cookie that should have required consent but didn't get it was set unlawfully.

### Para 30 — One specific clarification: preference cookies

> "The opinion n°04/2012 on Cookie Consent Exemption of WP 29 has also been recalled in relation to the criteria mentioned to assess which cookies are essential, and in particular the fact that cookies allowing website owners to retain the preferences expressed by users, regarding a service, should be deemed essential."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 8, paragraph 30 (page 8). Verified verbatim against local PDF on 2026-04-25._

#### What this means in plain English

The EDPB cites **WP29 Opinion 04/2012** to clarify a specific case: **cookies that remember a visitor's stated preferences should count as essential.**

Examples that qualify as essential under this rule:

- A cookie that records *"the visitor has dismissed this banner"* so it doesn't reappear on every page.
- A cookie that records the visitor's chosen language on a multi-language site.
- A cookie that records the visitor's chosen accessibility settings (e.g. high-contrast mode).
- The Cookiebot consent record cookie itself — the visitor's choice "I accept / I deny" is a preference about how the site behaves.

These are essential because **the visitor expressed the preference, and the site needs the cookie to honour that preference.** Without the cookie, the visitor's stated choice is forgotten on every page load.

This is the rule that justifies labelling **`intro-seen`** (and Cookiebot's own `CookieConsent` cookie) as Necessary on Mary's site — both are recording a visitor preference about how the site should behave.

### How this site complies

Mary's site has only two cookies that fall into the consent-relevant scope today, and both are correctly classified as Necessary. The classification is documented and defensible.

| Cookie | Set by | What it does | Why it's Necessary | Documentation |
|---|---|---|---|---|
| `CookieConsent` | Cookiebot | Records the visitor's consent choice (accept/deny per category) | Without this cookie, the consent banner cannot remember the visitor's choice and would re-prompt on every page. The cookie *is* the consent mechanism — the site cannot deliver functional consent management without it. Para 30 explicitly covers this case (cookies that record visitor preferences). | Cookiebot dashboard documents this as Necessary by default; verified at every Cookiebot scan. |
| `intro-seen` | The site itself | A `sessionStorage` flag that records whether the visitor has seen the intro animation, so it doesn't replay on every page navigation in the same session | Without this flag, the intro animation would re-play on every page navigation, breaking the user experience. The flag records a "preference about how the service behaves" — exactly the case Para 30 names as essential. Note: `intro-seen` is `sessionStorage`, not a persistent HTTP cookie — it is cleared automatically when the tab closes. | README "Strictly necessary cookies — no consent required" section documents this in detail. The classification rationale is also written into the Cookiebot dashboard description for `intro-seen`. |

The README at `/README.md` already has a section explicitly titled **"Classifying `intro-seen` in Cookiebot"** (around line 305) which gives the exact wording to paste into the Cookiebot dashboard. That paragraph was written specifically to demonstrate essentiality the way Para 28 of this section requires.

### Why this section is good news for Mary — *today*

The Type I dark pattern — labelling analytics or marketing cookies as Necessary to bypass consent — relies on having those cookies in the first place. **As of 2026-04-27**, Mary's site has **no analytics, no marketing, no profiling**, so there is nothing to mis-classify. The Necessary category contains only the two cookies that genuinely belong there.

As of today, the compliance argument is the cleanest in the report: *"we have only two cookies in the Necessary category, both fall under WP29 Opinion 04/2012's preference-cookie rule cited in Para 30, and both are documented in the README and the Cookiebot dashboard."*

> **⚠️ This will change when Google Ads goes live.** Mary plans to run Google Ads in the future. When that happens, this section becomes the most important section to revisit. The "good news" framing above does **not** survive the addition of any analytics or advertising tool, and the cookies those tools introduce **must not** be classified as Necessary.
>
> **What to do when Google Ads (or any analytics/marketing tool) is added:** follow the workflow in the next sub-section ("What changes when analytics or marketing is ever added"). The same workflow is also recorded in `client-onboarding-checklist.md` under **"Cookie classification review triggers"** so it is part of the standard launch-and-update process, not just a note buried in this walkthrough.

### How to verify

Five-step verification — run before launch and at every annual review. The bar is *"can Mary produce documentation justifying every Necessary classification?"*

1. **Inventory every cookie the live site sets.**
   - Open the live site in a fresh incognito window with cookies cleared.
   - Open DevTools → Application → Cookies for the site domain.
   - Before clicking the banner, inventory every cookie present.
   - **Expected:** only `CookieConsent` (and possibly a session token if the server sets one).
2. **Run the Cookiebot scan and review the Necessary list.**
   - In the Cookiebot dashboard, go to **Cookies and Trackers**.
   - Filter for the Necessary category.
   - **Expected:** the list contains only `CookieConsent` and `intro-seen` (the latter classified as Necessary with the README-documented description).
3. **For every cookie in the Necessary list, confirm a written justification exists.**
   - Open the Cookiebot dashboard's description field for each Necessary cookie.
   - Confirm the description explains *why* the cookie is essential — referencing the service it supports.
   - **If any Necessary cookie has no justification:** add one before launch.
4. **Confirm no analytics/marketing cookies are mis-labelled.**
   - Filter the Cookiebot dashboard for Statistics, Marketing, Preferences.
   - **Expected:** zero cookies in any of these categories today (Mary's site has no such tools running).
   - **If a cookie unexpectedly appears in any category:** investigate immediately — a third-party tool may have been added without updating the documentation.
5. **Save the cookie inventory as compliance evidence.**
   - Run `npx tsx scripts/compliance-screenshot.ts edpb-section-8-cookie-inventory`.
   - The screenshot record is what Mary would produce if a regulator asks for the inventory under Para 28's burden-of-proof rule.

If all five steps pass, Mary's site satisfies Section 8.

### What changes when analytics or marketing is ever added

When Mary one day adds Google Analytics, a Meta Pixel, or any other tool, Section 8's rules become immediately relevant. The workflow:

1. **Run a Cookiebot scan after adding the tool.** Cookiebot will detect the new cookies and add them to the dashboard.
2. **Confirm the new cookies are auto-classified as Statistics or Marketing**, not Necessary. If Cookiebot's auto-classification is wrong (rare but possible), correct it manually in the dashboard.
3. **Never reclassify a Statistics or Marketing cookie as Necessary** unless there is a documented, defensible reason that fits Para 30's preference-cookie rule. Analytics is not a preference — it is the controller's interest.
4. **Update the cookie inventory documentation.** The README's "Strictly necessary cookies" section must continue to list only genuinely necessary cookies.
5. **Run a fresh compliance screenshot.**

This is exactly the kind of change the README's "Banner copy review triggers" section in `client-onboarding-checklist.md` is designed to catch.

---

_Last updated: 2026-04-27. Sections 1 (Paras 1–3), 2 (Paras 4–5), 3 (Paras 6–8), 4 (Paras 9–10), 5 (Paras 11–14), 6 (Paras 15–19), 7 (Paras 20–25), and 8 (Paras 26–30) complete. Section 9 (Paras 31–35, "No Withdraw Icon") still to do — that is the final section._

---

## Section 9 — Type K Practice: "No Withdraw Icon"

The final section. Five paragraphs covering **the right to withdraw consent and how that right has to be presented on the site.** The EDPB's position has the same flexibility-with-judgement shape as Section 6: there is no fixed "withdrawal icon" rule, but every withdrawal mechanism is judged against one hard standard — **withdrawing consent must be as easy as giving it.**

### Why this section matters even though Mary's site already has a withdrawal icon

The screenshot of Mary's site shows a small floating Cookiebot icon in the bottom-left corner — exactly the "small hovering and permanently visible icon" Para 32 describes. So the compliance answer is short. But Section 9 also sets out the legal basis for *why* withdrawal must be easy, which is important for two reasons: it locks in the consent rules from earlier sections, and it forces a continuous test ("as easy as giving") rather than a one-time check.

### Terms used in this section

| Term | Plain English |
|---|---|
| **Withdraw consent** | The visitor changes their mind after previously consenting. Their previous "yes" must be revocable — they can switch it back to "no" at any time. |
| **Hovering icon / floating icon** | A small button that stays visible at the same on-screen position regardless of how far the visitor scrolls. Often a small circle in the corner of the page. |
| **Cumulative conditions** | All conditions must be met simultaneously. If any one fails, the consent is invalid — even if the others are perfect. |
| **Standardized place** | A consistent, predictable location across all pages of the site (e.g. always in the footer, always in the same corner) — not buried somewhere different on each page. |

### Para 31 — Description of the problem

> "It appears that where controllers provide an option allowing to withdraw consent, different forms of options are displayed. In particular, some controllers have not chosen to use the possibility to show a small hovering and permanently visible icon on all pages of the website that allows data subjects to return to their privacy settings, where they can withdraw their consent."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 9, paragraph 31 (page 8). Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

Some sites do offer a way to withdraw consent — but make it hard to find. Examples of weak patterns:

- A link to "Manage cookies" buried at the bottom of the cookie policy page only.
- A withdrawal option only available by emailing the data controller.
- A withdrawal mechanism that requires multiple clicks through a settings menu unrelated to cookies.
- A withdrawal option that's there technically, but on the wrong page (e.g. only on the homepage, not on internal pages).

The EDPB notes that one **good** alternative — a small floating icon visible on every page — exists but is often not used. They are flagging this as a missed opportunity that some controllers ignore in favour of weaker patterns.

### Para 32 — The recommended pattern

> "Website owners should put in place easily accessible solutions allowing users to withdraw their consent at any time, such as an icon (small hovering and permanently visible icon) or a link placed on a visible and standardized place."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 9, paragraph 32 (page 8). Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

The EDPB names two patterns that count as "easily accessible":

1. **A small floating icon, permanently visible on every page.** A small circle in the corner of the screen that follows the visitor as they scroll. Click it → the cookie banner opens for re-consent.
2. **A link placed on a visible and standardised place.** Most commonly: a "Cookie settings" or "Manage cookies" link in the footer of every page. The visitor knows where to look because it's always in the same place.

Either pattern is acceptable. A site does not need both. The hard requirement is that the withdrawal mechanism is **easily accessible** — visible, predictable, and works from any page on the site.

### Para 33 — How ePrivacy law inherits GDPR's consent definition

> "The ePrivacy Directive's reference to consent in the GDPR includes both a reference to the definition of consent (article 4 of the GDPR) as well as to the conditions of it (article 7 of the GDPR)."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 9, paragraph 33 (page 8). Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

This is a legal-mechanics paragraph that locks in the bridge between the two laws.

When the ePrivacy Directive (and S.I. 336/2011 in Ireland) says *"consent"*, it doesn't define the word itself. Instead, it borrows the definition from the GDPR. And specifically, it borrows from **two** GDPR articles:

- **GDPR Article 4(11)** — the **definition** of consent. We covered this in Section 1 Para 3 — *"freely given, specific, informed and unambiguous indication"* + *"by a statement or by a clear affirmative action."*
- **GDPR Article 7** — the **conditions** for consent. This is the one that introduces things like the controller having to demonstrate consent was given (Art 7(1)) and — crucially for this section — the rule that withdrawal must be as easy as giving (Art 7(3)).

So Para 33 is reinforcing the bridge that Section 1 Para 3 first set up. Cookie consent under Irish law has to satisfy both the GDPR definition *and* the GDPR conditions — including Article 7(3)'s as-easy-to-withdraw rule.

### Para 34 — The three additional cumulative conditions

> "In addition to the requirements for the collection of consent to be valid in accordance with the GDPR and under Article 5(3) ePrivacy Directive, three additional cumulative conditions are mandatory (i) the possibility to withdraw consent, (ii) the ability to withdraw consent at any time, (iii) withdrawal of consent must be as easy as to give consent."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 9, paragraph 34 (page 8). Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

Para 34 is the substantive ruling. **All three conditions are mandatory and must be met simultaneously.** A site that meets two but not the third has no valid consent.

| Condition | What it means in practice |
|---|---|
| **(i) The possibility to withdraw consent** | A withdrawal mechanism must exist. There is no "you can't change your mind" option — the right to withdraw is non-negotiable. |
| **(ii) The ability to withdraw consent at any time** | The visitor can withdraw whenever they want, not just within a window. They can withdraw the day they consent, a year later, or five years later. |
| **(iii) Withdrawal must be as easy as giving consent** | The number of clicks, the visibility of the option, and the cognitive effort required to withdraw must be no greater than the equivalent for giving consent. If giving consent is one click on the banner, withdrawing must also be roughly one click — not buried four levels deep in a settings menu. |

The verbatim quote of GDPR Article 7(3), already in this file under Section 1 Para 2, is the source of condition (iii):

> "It shall be as easy to withdraw as to give consent."

_Verified earlier in this file from `legal-compliance/GDPR-regulation-2016-679-consolidated-2016-05.pdf`, Article 7(3)._

### Para 35 — The flexibility rule

> "However, website owners can only be imposed that easily accessible solutions are implemented and displayed once consent has been collected, but they cannot be imposed a specific withdrawal solution, and in particular to set up a hovering solution for the withdrawal of consent to the deposit of cookies and other trackers. A case-by-case analysis of the solution displayed to withdraw consent will always be necessary. In this analysis, it must be examined whether, as a result, the legal requirement that it is as easy to withdraw as to give consent is fulfilled."

_Source: `EDPB-cookie-banner-taskforce-report-2023-01.pdf`, Section 9, paragraph 35 (page 8). Verified verbatim against local PDF on 2026-04-27._

#### What this means in plain English

Three key points in this paragraph:

**Point 1: A site must implement an easily accessible solution.** This is mandatory. No site can claim "we didn't get round to it" or "we'll add it later" — once consent has been collected, the withdrawal mechanism must be in place.

**Point 2: But regulators cannot impose a specific solution.** The EDPB explicitly says regulators cannot force every site to use, for example, a hovering icon. The site owner gets to choose between the patterns named in Para 32 (icon or footer link) — or any other pattern that meets the as-easy-to-withdraw test.

**Point 3: Each solution is judged case-by-case against the as-easy test.** Whatever pattern the site chooses, regulators will assess it individually: does this specific implementation make withdrawal as easy as consent on this specific site? The flexibility comes with a continuous test, not a free pass.

This is the same shape as Section 6: **freedom of design + case-by-case judgement + a hard core requirement.** The hard core here is GDPR Art 7(3)'s as-easy rule.

### How this site complies

Mary's site implements **both** patterns named in Para 32 — a floating icon *and* a footer link — which is more than the minimum. Documented evidence:

| Section 9 requirement | How Mary's site meets it |
|---|---|
| **Para 32, pattern 1** — Small hovering and permanently visible icon | **Confirmed by visual evidence (screenshot 2026-04-27).** A small dark navy circle containing the Cookiebot icon sits in the bottom-left corner of every page. The screenshot shows it floating above the footer area near the firm address ("2 Rose Inn St, Kilkenny"). This is Cookiebot's standard "Privacy Trigger" feature, configured in the dashboard's **Privacy Trigger** settings. |
| **Para 32, pattern 2** — Link placed on a visible and standardised place | The Cookie Declaration on `/cookie-policy` includes a "Withdraw your consent" link generated automatically by Cookiebot. The cookie policy page itself is linked from the footer of every page, giving a second consistent route to withdrawal. |
| **Para 33** — ePrivacy consent inherits GDPR Article 4 + Article 7 | Already met across the rest of the site — the banner satisfies all five conditions of valid consent (Section 1 Para 2: freely given, specific, informed, unambiguous, withdrawable). |
| **Para 34 (i)** — Possibility to withdraw consent | Met — clicking the floating icon or the footer cookie policy link both lead to a working withdrawal mechanism. |
| **Para 34 (ii)** — Ability to withdraw at any time | Met — Cookiebot's withdrawal mechanism is available 24/7, not within any time window. |
| **Para 34 (iii)** — Withdrawal as easy as giving consent | **Met by design.** Giving consent is one click on the banner. Withdrawing is one click on the floating icon → re-displays the banner → one click on Deny. The total effort for withdrawal is the same order of magnitude as giving — both are surface-level interactions, no deep menu, no separate page. |
| **Para 35** — Easily accessible solution must be implemented once consent has been collected | Met — the floating icon appears on every page from the moment Cookiebot loads, regardless of whether consent has been given yet. |

### Specific evidence reviewed for this compliance check

| Evidence | What it shows | Date |
|---|---|---|
| Screenshot of Mary's site footer area showing the floating Cookiebot icon at bottom-left | Confirms the "small hovering and permanently visible icon" pattern from Para 32 is live on the site | 2026-04-27 |
| `src/pages/cookie-policy.astro` line 22–27 — Cookiebot Cookie Declaration script | Confirms the Cookie Declaration (which contains the "Withdraw your consent" link) is loaded on `/cookie-policy` | Verified during walkthrough |
| Cookiebot dashboard configuration — Privacy Trigger enabled | Confirms the floating icon is enabled in the Cookiebot admin (the icon would not appear without this setting) | Visible in `banner-copy-mary-molloy.md` lines 132–146 — Privacy Trigger fields |

### How to verify

Run all six steps before launch and at every annual review:

1. **Open the live site in a fresh incognito window.**
2. **Wait for the cookie banner to appear, then click Allow all to give consent.** The banner closes.
3. **Scroll to a different page on the site and confirm the floating icon is still visible.** It should appear in the bottom-left corner of every page, persistent above the footer.
4. **Click the floating icon.** The Cookiebot consent panel should re-open, allowing the visitor to withdraw or change their consent. If clicking does nothing, or only opens an unrelated settings page, the Privacy Trigger is mis-configured.
5. **From the same page, scroll to the footer and click the Cookie Policy link.** This should load `/cookie-policy`, and the Cookie Declaration should include a "Withdraw your consent" link.
6. **Click "Withdraw your consent" on the policy page.** The consent should reset; the banner should re-appear on the next page load. Confirm in DevTools → Application → Cookies that the `CookieConsent` cookie has been cleared or its value changed to reflect withdrawn state.

If all six steps pass, Mary's site satisfies Section 9.

### The "as easy" test, applied to this site

The hardest part of Section 9 is the GDPR Article 7(3) as-easy test, applied case-by-case under Para 35. The honest comparison for Mary's site:

| Action | Steps required |
|---|---|
| **Give consent** | (1) Banner appears on first visit. (2) Visitor clicks "Allow all." Total: **1 click on the banner**. |
| **Withdraw consent** | (1) Visitor clicks the floating icon (visible on any page, persistent). (2) Banner re-opens. (3) Visitor clicks "Deny." Total: **2 clicks, one of which is the same banner interaction.** |

The two paths are within one click of each other and both happen at the same level of the UI (no nested menus, no separate page navigation). This passes the as-easy test by any reasonable case-by-case analysis.

The footer link route — Cookie Policy → "Withdraw your consent" — is slightly slower than the floating icon (one extra page navigation), but it is the standard alternative pattern named in Para 32 itself, and exists as a backup for visitors who don't notice the floating icon. Having both routes available is more than the legal minimum.

---

## ✅ Walkthrough complete — all 35 paragraphs covered

All nine sections of the EDPB Cookie Banner Taskforce Report (Adopted 17 January 2023) are now mapped to how Mary's site satisfies each finding, with verbatim quotes verified against the local PDF, source citations, plain-English explanations, and verification steps anyone can run.

| Section | Paras | Status |
|---|---|---|
| 1. Applicable Legal Framework | 1–3 | ✅ |
| 2. Application of the OSS | 4–5 | ✅ |
| 3. Type A — No reject button on the first layer | 6–8 | ✅ |
| 4. Type B — Pre-ticked boxes | 9–10 | ✅ |
| 5. Type C — Deceptive link design | 11–14 | ✅ |
| 6. Type D & E — Deceptive button colours/contrast | 15–19 | ✅ |
| 7. Type H — Legitimate interest claimed | 20–25 | ✅ |
| 8. Type I — Inaccurately classified essential cookies | 26–30 | ✅ |
| 9. Type K — No withdraw icon | 31–35 | ✅ |

This file is now audit-ready as evidence that Mary's site has been measured against every position the EDPB has taken on cookie banner design. If the DPC ever investigates the site, this file is what we hand them — together with the dated screenshots produced by `scripts/compliance-screenshot.ts` and the cookie inventory documented in the Cookiebot dashboard.

---

_Last updated: 2026-04-27. All sections complete. The next compliance walkthrough to do is the DPC April 2020 guidance — see `Next steps after this walkthrough is finished` near the top of this file._

---

## Next steps after this walkthrough is finished

Once every section of the EDPB report has been quoted, interpreted and proven against this site, the remaining cookie-compliance reading list is:

1. **Walk through the DPC April 2020 guidance the same way** — quote-by-quote, into a new file `legal-compliance/cookies/dpc-guidance-walkthrough.md`. The DPC guidance is the regulator's plain-English interpretation and is the most likely document a DPC investigator would compare the site against.
2. **Read the binding Irish statute itself — S.I. No. 336/2011** at [irishstatutebook.ie/eli/2011/si/336/made/en/print](https://www.irishstatutebook.ie/eli/2011/si/336/made/en/print). Specifically Regulation 5 (cookie consent) and Regulation 13 (electronic marketing).
   - **Why read the statute last:** by this point you will already understand the framework from the regulator-side documents. The statute confirms that the EDPB and DPC interpretations match what the law actually says. If anything in the regulator guidance ever conflicted with the statute, the statute would win in court — so reading it last is the final sanity check.
   - **Cross-reference with `reg-5-compliance-evidence.md`** while reading. That file already maps each element of Regulation 5(3) to how the site complies, so you can verify the mapping is accurate.

When all three documents have been worked through, the cookie-compliance reference set is complete and audit-defensible.
