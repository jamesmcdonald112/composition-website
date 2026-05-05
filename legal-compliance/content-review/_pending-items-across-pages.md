# Items We Need From You Before Launch

This is the one document you need to read and complete before the website goes live. Every other review file in this folder is detailed audit-trail material; this file is the only place where we need information back from you.

You can reply by:

- typing the answers directly under each question and saving it, or
- replying by email with the section numbers and your answers, or
- sending a single voice note covering the items in order.

Whatever's easiest. We'll fold the answers into the right places and let you know when each is in.

---

## Section A — Blocking items (must be resolved before the site can go live)

### 1. Firm email address

We've set the firm email to `info@marymolloy.ie`. Please confirm.

**Your answer:** `Confirmed: yes / no — preferred address: ____________________`

If the email mailbox is hosted with **Blacknight** (or wherever the firm's existing email lives), we don't need to change anything — the website host change doesn't affect email at all. We just need to know which email service is in use so we can confirm DNS records aren't accidentally disturbed during the website-domain cutover.

**Email provider for `info@marymolloy.ie`:** ____________________ _(e.g. Blacknight, Microsoft 365, Google Workspace)_

---

### 1a. Cookiebot account — small pre-launch task for Nick

The site uses **Cookiebot** to manage the cookie-consent banner. Under GDPR, the consent records (who agreed, when, to what) must legally belong to the firm — not to me. So the firm needs its own Cookiebot account before the site can launch on the production domain.

**This is a 5-minute job and only needs to happen once.**

What I need Nick (or whoever's easiest) to do:

1. Sign up for a free account at **cookiebot.com** using the firm's email address (`info@marymolloy.ie` or another firm email — not a personal one).
2. Add the production domain (`marymolloy.ie`) when prompted.
3. Once signed up, go to **Settings → Team** and invite **`james@jamesmcdonald.dev`** as an **admin**. This lets me configure the banner and respond to issues without needing the firm's password.
4. While there, go to **Cookies and Trackers → Scan report recipients** and add **`james@jamesmcdonald.dev`** as well — this emails me whenever Cookiebot detects a new cookie or tracker so I can categorise it correctly.

That's it. I'll handle the rest from my end (banner configuration, swapping the development CBID in the site code for the firm's production CBID before launch).

**Why the firm has to own the account, not me:** if the Data Protection Commission ever audits the firm, the firm has to produce its consent records. They have to be in the firm's account, not mine. This is a non-negotiable GDPR requirement, not a workflow preference.

**Your answer:**

- [ ] Cookiebot account created (date: ____________________)
- [ ] `james@jamesmcdonald.dev` added as admin
- [ ] `james@jamesmcdonald.dev` added as scan-report recipient

---

### 2. Privacy policy — three small confirmations

The privacy policy has been drafted in full (about 3,000 words, plain English). Before it can go live we need three short confirmations from you:

#### 2a. Data protection point of contact

When a visitor wants to exercise a data-protection right, who at the firm should they write to? Drafted as **Mary Molloy** by default. Please confirm, or name a different solicitor at the firm.

**Your answer:** `Data protection contact: ____________________`

#### 2b. Retention period for contact-form messages where no matter results

When a visitor submits the contact form but does not become a client, how long does the firm keep their email and message before deleting it?

The defensible range under GDPR is 30 to 90 days. Most small Irish solicitor's firms use 30 days.

- [ ] 30 days (recommended — shortest defensible period, easiest to operate)
- [ ] 60 days
- [ ] 90 days
- [ ] Other: ____________________

**Your answer:** ____________________

#### 2c. Read-through and sign-off

Please read the full privacy policy draft (we'll email you the rendered version). Then confirm you're happy for it to go live.

**Your answer:** `Sign-off: yes / not yet / changes requested: ____________________`

---

### 3. Solicitor credentials — recommended for Mary in particular

Every service page has a "Reviewed by" block at the bottom showing the named solicitor who has reviewed and approved that page's content. Filling this in properly gives a real signal of trust to visitors and **should give the page a small boost in Google search results**. Google's search ranking favours content that is clearly expert-reviewed, and a named solicitor (especially the firm's owner) reviewing the page is the strongest version of that signal.

The "Reviewed by" block can also be set to Nick or Richard for specific pages — for example if Nick's primary practice is family law, his name on the family-law page is appropriate. But Mary's presence on every page is the strongest signal because she is the firm's principal.

Below is the current placeholder for Mary. Please replace the TODOs with the real values, edit / remove anything you don't want shown, and add anything else you'd like to include.

```
Reviewed by
Mary Molloy
Principal Solicitor
LLB, Admitted to the Roll of Solicitors, Law Society of Ireland
University: TODO
Admitted: TODO (year)
Specialises in: Property, wills and probate, and private client matters
Last reviewed: April 2026
```

If Nick or Richard would like the same level of detail filled in for the pages that show their names, please add those below too. Otherwise leave blank and we'll use the default. **It would be no harm to have the details on file even if you don't want them shown right now** — that way, if anything changes in the future and you'd like the names added or expanded, I won't have to come back and ask for the information again.

| Solicitor | Details to display (replace placeholders, edit, or leave blank) |
|---|---|
| **Mary Molloy** (recommended — principal) | _replace TODOs in the block above_ |
| **Nicholas O'Shea** (optional) | ____________________ |
| **Richard O'Shea** (optional) | ____________________ |

---

## Section B — Content items

### 4. Fixed-fee conveyancing — display on the website?

On the home page there are two short copy placeholders waiting on this answer.

- [ ] **Yes** — the firm offers fixed-fee conveyancing **and we want it displayed on the website.** Please give the figure: ____________________ (and any terms — residential only, upper property-value limit, etc.)
- [ ] **No** — we don't want it displayed (whether or not the firm offers it).

---

### 5. Bios — read your own and add whatever you want

Each of you, please read your own short factual bio. The full bios live at **`legal-compliance/content-review/team.md`** (or I can email them to you if you'd prefer). Add anything you want included — practice-area specialisms, professional memberships, languages, anything. Keeping it short suits the design better, but include whatever feels right.

**Your additions:**

- Mary: ____________________
- Nicholas: ____________________
- Richard: ____________________

---

### 6. Who appears on the team page

Please confirm who you'd like featured on the team / about pages.

- **Duke** — currently included on the team page. Keep or remove?
- **Michelle** — would she like to be added?

If Michelle would like to be added, I just need:

1. The information she'd like displayed beside her photo (role, bio, anything else).
2. A photo of her, preferably matching the style of the other team photos.

If Michelle isn't sure, that's fine — I can mock her up on the test site (or send her a screenshot of how it would look) so she can see it before deciding. If she sees it and decides she'd rather not be on the site, I can remove her at any time.

**Your answer:**

- Duke: `Keep / remove: ____________________`
- Michelle: `Add / not sure — show me a mock first / leave off for now: ____________________`

---

## Section C — One firm-supplied document

### 7. Complaints procedure

Every Irish solicitor's firm has a written complaints procedure. The website needs a `/complaints` page that mirrors that document.

Please send a copy of the firm's existing complaints procedure document.

**Your answer:**

- [ ] I'll send the document — sending by ____________________

---

## Section D — Optional, ongoing items (no action needed today)

### 8. Real testimonials — when ready

The site doesn't currently show any client testimonials. To give you a sense of how they would look, I've included a screenshot of the **mock testimonials currently on the site as placeholders** — see `legal-compliance/content-review/_assets/testimonials-mockup.png`.

**The recommended way to gather real testimonials:**

1. Ask the client to leave a review on the firm's **Google Business Profile** first — this gives the firm a public, durable record of the review independent of the website.
2. Then ask them to sign a short document confirming they're happy for that same review (or a version of it) to be used on the website. LSRA Reg 5(a)(i) requires written consent for any named-person testimonial published by a solicitor.
3. Once consented, I'll take a screenshot showing exactly how the testimonial will appear on the live site and send it to the client for a final yes before it goes live.
4. I add the testimonial to the site.

There's no rush — the site works fine without testimonials. When you're ready to start gathering them, just let me know and I'll send the consent document.

---

## Resolved items

_(will be filled in as items come back)_
