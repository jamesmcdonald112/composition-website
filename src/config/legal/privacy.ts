// Privacy-policy content for Mary Molloy Solicitor.
//
// Source-of-truth markdown: `legal-compliance/gdpr/privacy-policy.md`. When
// the per-firm values below change (lastUpdated, dpContactName, hosting, etc.)
// the markdown must be updated too.
//
// Reuse: the prose lives in the buildPrivacyPolicyContent() builder at the
// bottom of this file. To reuse for another Irish solicitor's firm, copy this
// file into the new project and change the values inside the
// buildPrivacyPolicyContent({ ... }) call below. The builder is firm-agnostic;
// Irish statutory anchors (GDPR, S.I. 336/2011, Data Protection Act 2018,
// Statute of Limitations 1957, etc.) apply equally to any Irish firm.

import type { LegalPageContent } from "../../components/ui/LegalPageContent/LegalPageContent.types";
import { firm } from "../firm";

// ── Per-firm configuration ─────────────────────────────────────────────────

export const privacyPageContent = buildPrivacyPolicyContent({
	firm,
	lastUpdated: "13 May 2026",
	dpContactName: "Mary Molloy",
	nonMatterRetentionDays: 90,
	// Cookiebot consent-record retention. Must match the "User consent
	// expiration" value in the firm's production Cookiebot dashboard.
	// See: legal-compliance/cookies/client-onboarding-checklist.md.
	// Cookiebot's free tier offers only "12 months" or "1 month"; we use
	// "1 month" because it's the only option inside the DPC's 6-month
	// ceiling. If the dashboard setting ever changes, update this value
	// — privacy policy and dashboard must agree.
	cookieConsentRetention: "1 month",
	cookieConsent: {
		name: "Cookiebot",
		legalEntity: "Usercentrics A/S",
		country: "Denmark",
	},
	emailDelivery: {
		name: "Resend",
		legalEntity: "Plus Five Five Inc.",
		country: "United States",
	},
	hosting: {
		name: "Vercel",
		legalEntity: "Vercel Inc.",
		country: "United States",
	},
});

export type PrivacyPageContent = typeof privacyPageContent;

// ── Reusable builder (firm-agnostic prose) ─────────────────────────────────

interface Processor {
	name: string;
	legalEntity: string;
	country: string;
}

interface PrivacyPolicyOptions {
	firm: typeof firm;
	lastUpdated: string;
	dpContactName: string;
	nonMatterRetentionDays: number;
	cookieConsentRetention: string;
	cookieConsent: Processor;
	emailDelivery: Processor;
	hosting: Processor;
}

function buildPrivacyPolicyContent(opts: PrivacyPolicyOptions) {
	const {
		firm,
		lastUpdated,
		dpContactName,
		nonMatterRetentionDays,
		cookieConsentRetention,
		cookieConsent,
		emailDelivery,
		hosting,
	} = opts;

	const fullAddress = `${firm.address.line1}, ${firm.address.city}, ${firm.address.eircode}, ${firm.address.country}`;

	return {
		seo: {
			title: "Privacy Policy",
			description: `Privacy policy for ${firm.companyName}. What personal data the firm collects when you use this website, why we collect it, how we look after it, and your rights under the GDPR.`,
			canonicalPath: "/privacy",
		},
		reviewDate: lastUpdated,
		title: "Privacy Policy",
		intro: [
			`${firm.companyName} ("the firm", "we", "us") runs this website at ${new URL(firm.siteUrl).host}. This Privacy Policy explains in plain language what personal data the firm collects when you use the site, why we collect it, how we look after it, and what your rights are.`,
			// IMPORTANT: the next paragraph asserts no analytics, no advertising
			// trackers, no visitor profiling, and no data sharing beyond the
			// processors listed in Section 4. If any of those are ever added
			// (Google Analytics, Plausible, Meta Pixel, server-side tracking,
			// a CRM/marketing integration, etc.) this paragraph MUST be
			// rewritten or removed before the change goes live. A privacy
			// notice that misrepresents what is collected is treated more
			// severely by the DPC than no statement at all. The matching
			// claim is repeated in Section 4 — keep both in sync.
			`We are a ${firm.county} solicitor's firm, and we have built this website to collect the absolute minimum personal data we need in order to keep the site running and to respond to anyone who contacts us. We do not run any analytics tools. We do not run any advertising trackers. We do not profile our visitors. We do not share your information with anyone other than the small number of service providers named below, who are bound by written contracts to handle your data only on our instructions.`,
			"The full detail is below. If anything is unclear, you can contact us using the route given in Section 2.",
		],
		sections: [
			{
				heading: "1. Who we are",
				blocks: [
					{
						type: "paragraph",
						text: `The firm is ${firm.companyName}, a sole practice based at ${fullAddress}. The principal solicitor is ${firm.principalSolicitor}. The firm is regulated by the Legal Services Regulatory Authority of Ireland and is a member of the Law Society of Ireland.`,
					},
					{
						type: "paragraph",
						text: `When this notice refers to "the controller" of your personal data, it means ${firm.companyName} — the firm decides what personal data is processed on this website, why, and how. That is a defined role under data protection law (Article 4(7) of the General Data Protection Regulation).`,
					},
				],
			},
			{
				heading: "2. How to contact us about your personal data",
				blocks: [
					{
						type: "paragraph",
						text: "If you want to ask a question about how we handle your personal data, or to exercise any of your rights under data protection law (see Section 7), please write to us at the firm's address above, or through the contact page on our website.",
					},
					{
						type: "paragraph",
						text: `The named contact for data protection matters at the firm is ${dpContactName}.`,
					},
					{
						type: "paragraph",
						text: `We are not required to appoint a Data Protection Officer (DPO) and we have not appointed one. Article 37 of the GDPR sets out three situations where a DPO is mandatory — public-authority processing, large-scale regular and systematic monitoring, or large-scale special-category processing. None apply to a small Irish solicitor's firm of our type. Recital 91 of the GDPR confirms that processing of client personal data by an individual lawyer is not considered "large-scale" for these purposes. So the named contact above is the right person to write to about your data — there is no DPO behind them.`,
					},
				],
			},
			{
				heading: "3. What personal data we collect, and why",
				body: "The website performs three separate processing activities. Each is described in plain language here so you know exactly what happens.",
			},
			{
				heading: "3a. Cookie consent records",
				blocks: [
					{
						type: "paragraph",
						text: `When you visit the site, our cookie banner asks you whether you want to allow non-essential cookies. Whichever choice you make, our cookie management provider (${cookieConsent.name}, run by ${cookieConsent.legalEntity} in ${cookieConsent.country}) stores a small record of your decision so that we can prove to a regulator that you gave consent (or refused it), as required by Irish law, and avoid asking you the same question on every page.`,
					},
					{
						type: "paragraph",
						text: "The record contains a random consent ID, a timestamp, your IP address (briefly, during the moment you click), and which categories of cookies you allowed.",
					},
					{
						type: "paragraph",
						text: "Lawful basis: Article 6(1)(c) of the GDPR — compliance with a legal obligation. Specifically, Regulation 5(3) of S.I. No. 336/2011 (the Irish ePrivacy Regulations) and Article 7(1) of the GDPR require us to keep a record of consent.",
					},
				],
			},
			{
				heading: "3b. Contact-form submissions",
				blocks: [
					{
						type: "paragraph",
						text: `If you fill in the contact form on our website, we receive your name, email address, phone number, and the message you write. We use that information for one purpose only: to read your enquiry and reply to you. The submission is sent through our email-delivery provider (${emailDelivery.name}, run by ${emailDelivery.legalEntity} in ${emailDelivery.country} — see Section 5 about international transfers) and lands in the firm's inbox.`,
					},
					{
						type: "paragraph",
						text: 'Lawful basis: Article 6(1)(b) of the GDPR — taking steps at your request before entering into a contract. Recital 44 of the GDPR explicitly names this as the basis for "intention to enter into a contract" — which is exactly what a solicitor\'s enquiry is.',
					},
					{
						type: "paragraph",
						text: "You are not obliged to submit the form. If you choose not to, the only consequence is that we cannot reply to you. There is no penalty.",
					},
				],
			},
			{
				heading: "3c. Server access logs",
				blocks: [
					{
						type: "paragraph",
						text: "Like every website, our hosting provider keeps short-term access logs of who visits each page. The logs include your IP address, the type of browser you are using, the URL you visited, the time, and whether the page loaded successfully. We use these logs only for site reliability, security, and detecting attempts to abuse the site (for example, automated form-spam attempts).",
					},
					{
						type: "paragraph",
						text: "Lawful basis: Article 6(1)(f) of the GDPR — legitimate interest. The firm has a legitimate interest in keeping the website running and free from abuse, which is balanced against your reasonable expectations as a visitor (every website logs basic request information; it is the minimum necessary to operate). Recital 47 and Recital 49 of the GDPR explicitly recognise network security and abuse prevention as legitimate interests.",
					},
					{
						type: "paragraph",
						text: "You have the right to object to processing carried out under legitimate interest — see Section 7 below.",
					},
				],
			},
			{
				heading: "4. Who else sees your data",
				blocks: [
					{
						type: "paragraph",
						text: "We use a very small number of carefully chosen service providers. Each is bound by a written contract that meets Article 28(3) of the GDPR — meaning they can only handle your data on our instructions, must keep it confidential, must protect it with appropriate security, and must return or delete it when our relationship with them ends.",
					},
					{ type: "paragraph", text: "The service providers are:" },
					{
						type: "list",
						items: [
							`${cookieConsent.name} (${cookieConsent.legalEntity}, ${cookieConsent.country}) — cookie consent management. Processes data in ${cookieConsent.country}. Contract on file.`,
							`${emailDelivery.name} (${emailDelivery.legalEntity}, ${emailDelivery.country}) — email delivery for the contact form. Processes data in the ${emailDelivery.country}. Contract on file.`,
							`${hosting.name} (${hosting.legalEntity}, ${hosting.country}) — website hosting and short-term access logs. Processes data in the ${hosting.country}. Contract on file.`,
						],
					},
					// IMPORTANT: the next paragraph enumerates specific
					// analytics/advertising tools we explicitly do NOT use
					// (Google Analytics, Hotjar, Meta Pixel, etc.) and
					// asserts there is no joint-controller arrangement
					// (Article 26 GDPR). If any such tool is ever added, or
					// a partnership is formed that could be a joint-
					// controller arrangement, this paragraph MUST be
					// updated before that change goes live. The intro
					// contains the matching short-form claim — keep both in
					// sync.
					{
						type: "paragraph",
						text: "We do not share your data with anyone else. In particular: we do not use Google Analytics, Microsoft Clarity, Hotjar, Plausible, Fathom, or any other website-analytics tool; we do not use Meta Pixel, Google Ads conversion tracking, LinkedIn Insight Tag, TikTok Pixel, or any advertising tracker; we do not embed any social-media widgets, video players, or maps from third parties on our pages; we do not sell your data, share it for marketing purposes, or pass it to anyone for profiling; and we are not in any joint-controller arrangement with any third party (Article 26 of the GDPR). Each of the providers above is a pure processor, working only on our instructions.",
					},
					{
						type: "paragraph",
						text: "This minimal-data architecture is a deliberate choice for a solicitor's firm. It means there is no chance that your visit to a sensitive practice-area page (for example, a family-law page) is shared with an advertising network or used to profile you.",
					},
					{
						type: "paragraph",
						text: "Separately from the service-provider relationships above, the firm may have to disclose personal data where the law requires it. For website-collected personal data this is unlikely to arise, but for completeness the routes are: a court order or statutory request (for example, a court order for production of documents, or a request from An Garda Síochána under a statutory power); anti-money-laundering and counter-terrorist-financing reporting under the Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 (as amended), which requires solicitors in defined circumstances to report suspicions to the Financial Intelligence Unit and to Revenue; statutory information requests from the Revenue Commissioners under the Taxes Consolidation Act 1997 and related legislation; and regulatory inspection by the Law Society of Ireland (and, for advertising compliance, by the Legal Services Regulatory Authority).",
					},
					{
						type: "paragraph",
						text: "In each of these cases, the lawful basis is Article 6(1)(c) of the GDPR — compliance with a legal obligation. Where the disclosure relates to a client matter rather than to website-collected data, solicitor–client privilege continues to apply (see Section 8).",
					},
				],
			},
			{
				heading: "5. Transfers outside the EEA",
				blocks: [
					{
						type: "paragraph",
						text: `Two of our service providers — ${emailDelivery.name} and ${hosting.name} — process data in the United States. The United States is outside the European Economic Area, and EU law treats it as a "third country" for data protection purposes.`,
					},
					{
						type: "paragraph",
						text: `We rely on the following safeguards, as required by Articles 44–46 of the GDPR. ${emailDelivery.name}'s Data Processing Addendum (Section 6.2) puts every EU-to-US transfer under the EU Standard Contractual Clauses adopted by the European Commission in Decision 2021/914 of 4 June 2021. In addition, ${emailDelivery.name} is self-certified under the EU–US Data Privacy Framework (the Commission adequacy decision 2023/1795, in force since 10 July 2023). The two safeguards stack — either alone would be sufficient under EU law, and ${emailDelivery.name} has both. ${hosting.name}'s Data Processing Addendum (Section 12.1) puts every EU-to-US transfer under the same EU Standard Contractual Clauses (Commission Decision 2021/914). ${hosting.name} does not rely on the EU–US Data Privacy Framework; the SCCs are the sole safeguard, and they are sufficient.`,
					},
					{
						type: "paragraph",
						text: "Both providers' Data Processing Addendums extend the same protection to any sub-processors they may use on their side, so the safeguard covers onward transfers as well as the direct transfer.",
					},
					{
						type: "paragraph",
						text: "You have the right to a copy of the safeguards we rely on. If you want one, contact us using the route in Section 2 and we will send you the relevant DPA section.",
					},
				],
			},
			{
				heading: "6. How long we keep your data",
				blocks: [
					{
						type: "paragraph",
						text: "We keep personal data only for as long as we genuinely need it for the purpose it was collected. The specific retention periods are:",
					},
					{
						type: "list",
						items: [
							`Cookie consent records (${cookieConsent.name}): ${cookieConsentRetention}. After that, your stored consent expires and the banner asks again. This is shorter than the GDPR-recommended outer limit of 6 months and is the shortest option ${cookieConsent.name} allows on our plan. It is set deliberately to minimise the time your consent record exists.`,
							"Contact-form messages (where the enquiry leads to a matter): for as long as the matter is open, plus six years after the matter closes. The six-year period is the standard solicitor's-firm retention pattern, anchored in the Statute of Limitations 1957 (which sets the maximum period in which most claims can be brought) and in the Law Society of Ireland's record-keeping rules for solicitors.",
							`Contact-form messages (where the enquiry does not lead to a matter): ${nonMatterRetentionDays} days. After ${nonMatterRetentionDays} days the message is deleted.`,
							"Server access logs: held by our hosting provider at the provider's standard retention (typically 30 to 90 days). The logs are not copied to any analytics tool, are not enriched with any other data, and are not retained by the firm beyond the provider's window.",
						],
					},
					{
						type: "paragraph",
						text: 'These periods reflect what GDPR Article 5(1)(e) calls "storage limitation" — keeping data no longer than is necessary.',
					},
				],
			},
			{
				heading: "7. Your rights",
				body: "You have the following rights over the personal data we hold about you under the GDPR. The relevant Articles are named in brackets after each right.",
			},
			{
				heading: "7.1 The right to be informed",
				body: "You are reading this notice, which is itself the firm's compliance with Articles 13(1) and 13(2) of the GDPR — the obligation to tell you what we do with your data.",
			},
			{
				heading: "7.2 The right of access (Article 15)",
				blocks: [
					{
						type: "paragraph",
						text: "You can ask us for a copy of the personal data we hold about you. We will provide it within one month, free of charge. If you make the request electronically, we will provide the response electronically (in a commonly used format) unless you ask us to use another format.",
					},
					{
						type: "paragraph",
						text: "If a single response would reveal another person's personal data — for example, in a family-law matter where the file mentions a spouse — we may have to redact that other person's information first. This is a balancing rule built into Article 15(4) of the GDPR; it does not stop us responding to your request, but the response will be confined to your data.",
					},
				],
			},
			{
				heading: "7.3 The right to rectification (Article 16)",
				body: "If any personal data we hold about you is inaccurate, you can ask us to correct it. If something is incomplete and that is relevant to the purpose of the processing, you can ask us to complete it — including by providing a supplementary statement.",
			},
			{
				heading: "7.4 The right to erasure (Article 17)",
				blocks: [
					{
						type: "paragraph",
						text: "You can ask us to delete the personal data we hold about you. We will do so unless one of the limited exceptions in Article 17(3) applies. For a solicitor's firm, the most relevant exceptions are compliance with a legal obligation (Article 17(3)(b)) — solicitors are required by Law Society rules and by the Statute of Limitations 1957 to keep client matter files for set minimum periods, and we also keep records as required by anti-money-laundering law (the Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 and related regulations), so we cannot delete records covered by those obligations on request — and establishment, exercise, or defence of legal claims (Article 17(3)(e)) — closed matter files may need to be retained against possible appeals or claims.",
					},
					{
						type: "paragraph",
						text: `Outside those carve-outs, we will delete on request. If we erase, restrict, or correct data on your request, we will pass the change on to our service providers (${cookieConsent.name}, ${emailDelivery.name}, hosting) so they do the same — as required by Article 19 of the GDPR — unless that turns out to be impossible or disproportionate.`,
					},
				],
			},
			{
				heading: "7.5 The right to restrict processing (Article 18)",
				body: 'You can ask us to "freeze" your data — keep it but not actively process it — in certain situations: while you contest its accuracy; while you object to processing; or where the processing is unlawful but you do not want erasure.',
			},
			{
				heading: "7.6 The right to data portability (Article 20)",
				body: "You can ask us to send you a structured, machine-readable copy of the personal data you provided to us, where the lawful basis is consent or contract. For this site, that means only the contact-form data you submitted yourself. The right does not extend to server access logs (lawful basis: legitimate interest) or to cookie consent records (lawful basis: legal obligation), because Article 20 itself limits portability to consent-based or contract-based processing.",
			},
			{
				heading: "7.7 The right to object (Article 21)",
				blocks: [
					{
						type: "paragraph",
						text: "This right is presented as its own paragraph, separately from the others, because Article 21(4) of the GDPR explicitly requires it.",
					},
					{
						type: "paragraph",
						text: "You have the right to object, on grounds relating to your particular situation, to processing carried out on the basis of legitimate interest. On this site, the only such processing is the server access logs in Section 3c. If you object, we must stop processing your data in those logs unless we can demonstrate compelling legitimate grounds for continuing — for example, an active investigation into abuse of the site.",
					},
					{
						type: "paragraph",
						text: "We do not carry out any direct marketing, so the absolute right to object to direct marketing under Article 21(2) does not arise here.",
					},
				],
			},
			{
				heading: "7.8 Rights about automated decision-making (Article 22)",
				body: "We do not carry out any automated decision-making or profiling that produces legal or similarly significant effects. Every contact-form enquiry is read by a human at the firm. So Article 22 does not arise on this website.",
			},
			{
				heading: "7.9 The right to withdraw consent (Article 7(3))",
				body: "Where you have given consent — for example, by clicking Allow all or Allow selection on the cookie banner — you can withdraw it at any time. Click the Privacy icon in the bottom-left corner of any page; the cookie banner reopens and you can change or revoke any category. Withdrawal is as easy as giving consent (Article 7(3) of the GDPR requires this), and there is no penalty for withdrawing.",
			},
			{
				heading: "7.10 How to exercise these rights",
				body: "Write to us using the route in Section 2 (by post to the firm's address, or through the contact page). State which right you are exercising and (where relevant) what you want done. We will respond within one month, as required by Article 12(3) of the GDPR, free of charge. If your request is unusually complex or involves a large volume of data, we may extend that period by up to two further months, but we will tell you why within the original month.",
			},
			{
				heading: "8. Solicitor–client privilege",
				blocks: [
					{
						type: "paragraph",
						text: "If you have engaged the firm as a client, communications between you and the firm in connection with that engagement are protected by solicitor–client privilege under Irish law. The Data Protection Commission's powers to compel disclosure of personal data do not override that privilege — Section 162 of the Data Protection Act 2018 expressly preserves it. Article 90 of the GDPR also recognises Member States' professional-secrecy rules.",
					},
					{
						type: "paragraph",
						text: "This protection applies once a solicitor–client relationship exists between you and the firm. It does not automatically extend to a website-only enquiry that has not yet led to an engagement — for example, an unanswered contact-form message is not yet privileged. If you want any communication to attract privilege, the right time to clarify that is at the start of an engagement, not on the website.",
					},
				],
			},
			{
				heading: "9. Your right to complain or take action",
				body: "If you think we have handled your personal data in breach of the GDPR, you have three separate routes available to you. You can use any one of them, or combine them.",
			},
			{
				heading: "9.1 Complain to the Data Protection Commission",
				blocks: [
					{
						type: "paragraph",
						text: "The Data Protection Commission (\"DPC\") is Ireland's data-protection regulator. The most efficient way to lodge a complaint is through the DPC's online contact form, which the DPC itself recommends as the primary route: www.dataprotection.ie/en/contact/how-contact-us.",
					},
					{
						type: "paragraph",
						text: "If you would prefer to lodge a complaint by post, the DPC's headquarters is Data Protection Commission, 6 Pembroke Row, Dublin 2, D02 X963, Ireland. The DPC does not accept complaints by phone and does not operate a public counter. There is no fee for lodging a complaint.",
					},
					{
						type: "paragraph",
						text: "Article 77 of the GDPR also allows you to complain to the supervisory authority of your habitual residence or your place of work — so if you live outside Ireland, you can complain to your own country's data-protection regulator instead.",
					},
				],
			},
			{
				heading: "9.2 Bring a court action against the firm",
				body: "You also have the right to take the firm to court directly for a GDPR breach (Article 79 of the GDPR), independently of any complaint to the DPC. Under Article 79(2), you can choose to bring the action either in the Irish courts (where the firm is established) or in the courts of your habitual residence.",
			},
			{
				heading: "9.3 Claim compensation",
				body: 'If you have suffered damage as a result of a GDPR breach, you can claim compensation under Article 82 of the GDPR. "Damage" is interpreted broadly under EU law and includes both material damage (financial loss) and non-material damage (distress, reputational harm). Where more than one organisation is involved in the same processing, each can be held liable for the full damage to make sure you are fully compensated.',
			},
			{
				heading: "10. Whether you have to give us your data",
				body: "You are not legally obliged to provide any personal data to use this website. You can read every page without giving us any information. The only consequence of not giving us information is that we cannot do something for you that needed it — for example, if you do not submit the contact form, we cannot reply to you. There is no penalty.",
			},
			{
				heading: "11. Children",
				body: "This website is not directed at children. We do not knowingly collect personal data from children under the age of 16 — the digital age of consent in Ireland set by Section 31 of the Data Protection Act 2018 (the Member State option allowed by Article 8(1) of the GDPR). If you are a parent or guardian and you believe a child has submitted personal data through this site, please contact us using the route in Section 2 and we will erase the data.",
			},
			{
				heading: "12. How we keep your data secure",
				blocks: [
					{
						type: "paragraph",
						text: "We take the security of your personal data seriously. The technical and organisational measures we rely on include:",
					},
					{
						type: "list",
						items: [
							`In transit: every page on the website is served over TLS (HTTPS), so your data is encrypted between your browser and our servers. The same applies to data sent to ${cookieConsent.name} and to ${emailDelivery.name}.`,
							`At rest: our hosting provider, ${emailDelivery.name}, and ${cookieConsent.name} all encrypt stored data at rest, as documented in the Data Processing Addendum we hold for each.`,
							"Access control: the firm's email accounts (where contact-form messages arrive) are protected by the firm's email provider's authentication. Access is limited to the small number of firm staff who handle enquiries.",
							"Processor security: every service provider we use is bound by an Article 28(3) contract that includes Article 32 GDPR security commitments. We hold each contract on file (see Section 4 above).",
							"Architectural design: the site is built to collect the minimum personal data needed (Article 25 GDPR — data protection by design and by default). There is no analytics layer, no tracking layer, and no third-party widgets.",
						],
					},
					{
						type: "paragraph",
						text: "If a personal data breach affecting your data occurs, we will notify the Data Protection Commission within 72 hours of becoming aware of it, unless the breach is unlikely to result in a risk to your rights and freedoms (Article 33 of the GDPR). We will also notify you directly, without undue delay, if the breach is likely to result in a high risk to your rights and freedoms (Article 34 of the GDPR), and tell you what the breach was and what you can do to protect yourself.",
					},
				],
			},
			{
				heading: "13. Cookies",
				blocks: [
					{
						type: "paragraph",
						text: "This Privacy Policy describes how we handle personal data in general. The specific list of cookies the site uses, what each cookie does, and how long each cookie lasts, is set out in our Cookie Policy at /cookie-policy — that page also lets you change or withdraw your consent at any time.",
					},
					{
						type: "paragraph",
						text: "The cookie banner that appears on first visit is the place where you choose which categories of cookies you allow. The floating Privacy icon in the bottom-left corner of every page is the place where you change or withdraw your consent later.",
					},
				],
			},
			{
				heading: "14. Links to other websites",
				body: "This site contains links to a small number of external websites — for example, the Law Society of Ireland, the Legal Services Regulatory Authority, the Data Protection Commission, and Google Maps for directions to the office. When you click such a link, you leave our site and your information is then handled under the privacy policy of whichever site you arrive at, not this one. We have no control over the content or privacy practices of those external sites and accept no responsibility for them. We recommend that you review the privacy policy of any site you visit.",
			},
			{
				heading: "15. Changes to this policy",
				blocks: [
					{
						type: "paragraph",
						text: 'We may update this Privacy Policy from time to time — for example, if we change a service provider, if a regulator publishes new guidance, or if the law itself changes. The "Last updated" date at the top of this notice always shows when the policy was last revised. If we make a change that materially affects how we handle your personal data, we will flag it visibly on the website.',
					},
				],
			},
		],
	} satisfies LegalPageContent;
}
