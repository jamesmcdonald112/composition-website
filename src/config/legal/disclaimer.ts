// Source-of-truth original markdown:
// `legal-compliance/disclaimer.md`
//
// Research and Stage 3 Law Society template comparison live in
// `legal-compliance/disclaimer-research-and-audit-trail.md`. The Reg 9
// (LSRA 2020 Advertising Regulations) rationale for Section 5's external-links
// policy lives there too. Keep markdown and TS in sync — when this config
// changes, the markdown must be updated and the reviewDate bumped.
//
// Reuse: this disclaimer is firm-agnostic apart from the firm name. The
// content is built from a `firm` argument so the same disclaimer config can
// render correctly for any Irish solicitor's firm — pass that firm's
// `firm.companyName` and the document interpolates it into the relevant
// sections. The Irish statutory anchors (Statute of Limitations 1957, Civil
// Liability and Courts Act 2004, AML Act 2010, LSRA 2020 Regulations,
// Copyright and Related Rights Act 2000) apply equally to any Irish firm.

import { firm } from "../firm";

export const disclaimerPageContent = {
	seo: {
		title: "Disclaimer",
		description: `Website disclaimer for ${firm.companyName}. The information on this site is general and not legal advice; reading it does not create a solicitor-client relationship.`,
		canonicalPath: "/disclaimer",
	},
	reviewDate: "May 2026",
	title: "Website Disclaimer",
	intro:
		"This page sets out the basis on which information is published on this website. By using the site you are taken to have read and accepted this disclaimer.",
	sections: [
		{
			heading: "1. The information on this site is general, not legal advice",
			body: "The content of this website is published for general information purposes only. It is not a substitute for professional legal advice. Every case turns on its own facts, and the law changes. You should not act, or refrain from acting, on the basis of anything you read on this site without first taking proper legal advice from a solicitor about your specific situation.",
			afterListBody:
				"If you are dealing with a legal issue, please contact us — or another solicitor of your choosing — to arrange an appointment so that your circumstances can be considered properly.",
		},
		{
			heading:
				"2. No solicitor-client relationship is created by use of this site",
			body: `Reading this website, contacting us through the contact form, or sending us an email does not create a solicitor-client relationship between you and ${firm.companyName}. A solicitor-client relationship is created only when:`,
			list: [
				"the firm has confirmed that it is willing to act for you;",
				"a written letter of engagement (or equivalent retainer) is in place between you and the firm;",
				"and any necessary client identification under the Criminal Justice (Money Laundering and Terrorist Financing) Act 2010 has been completed.",
			],
			afterListBody:
				"Until those steps are complete, the firm is not acting for you, no advice given through the site or in pre-engagement correspondence may be relied upon as advice given in a retainer, and the firm has no duty to take any step on your behalf — including no duty to lodge proceedings or take any other step before a limitation period or other deadline expires.",
			footer:
				"If your matter is time-sensitive — for example, a personal injuries claim subject to the two-year limitation period under the Civil Liability and Courts Act 2004, or a contract or tort claim subject to the six-year period under the Statute of Limitations 1957 — you must take advice promptly and not assume that sending us a contact-form message stops time running.",
		},
		{
			heading: "3. Confidentiality of pre-engagement communications",
			body: "Any information you send to the firm before a retainer is in place is treated confidentially in the ordinary course of professional handling. However, solicitor-client privilege applies only once a solicitor-client relationship exists (see Section 2 above). Until then, communications attract the firm's professional duty of confidentiality but do not enjoy the legal privilege that protects later, retained-relationship communications. If your communication is sensitive, we recommend that you do not include detailed factual content in a contact-form message until you have an engagement letter in place.",
			afterListBody:
				"This point is also covered in our Privacy Policy, Section 8.",
		},
		{
			heading: "4. Accuracy and currency of content",
			body: "We take care to make sure that the information on this site is accurate and up to date at the date of publication. However:",
			list: [
				"the law changes — what was correct when an article or page was written may not still be correct today;",
				"summaries are simplified — anything written here is necessarily a summary of a more detailed area of law and may omit qualifications, exceptions, and case-by-case nuances that would matter in your situation;",
				"no warranty — we make no representation or warranty, express or implied, that the content of this site is accurate, complete, current, or fit for any particular purpose.",
			],
			afterListBody:
				"Any reliance you place on the content of this site is therefore strictly at your own risk. To the fullest extent permitted by Irish law, we accept no liability for any loss or damage — including, without limitation, indirect or consequential loss or damage — suffered by anyone who relies on the content of this site. This exclusion does not apply to liability that cannot lawfully be excluded — in particular, liability for fraud, fraudulent misrepresentation, or for death or personal injury caused by negligence.",
			footer:
				"Every effort is made to keep the website running smoothly. However, we accept no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.",
		},
		{
			heading: "5. Links to external websites",
			body: "This site contains a small number of links to external websites operated by third parties. The destinations are limited to informational and regulatory sources — for example, the Law Society of Ireland, the Legal Services Regulatory Authority, the Data Protection Commission, the Courts Service of Ireland, the Irish Statute Book, and Google Maps for directions to the office. The firm chooses these destinations carefully and audits each link before publication. The firm does not link to:",
			list: [
				"directory listings, review sites, or aggregator pages that promote the firm;",
				"press articles that name the firm;",
				"referral or partner websites that promote the firm;",
				"the firm's own Google Business Profile.",
			],
			afterListBody:
				"This is a deliberate choice driven by Regulation 9 of the Legal Services Regulation Act 2015 (Advertising) Regulations 2020, which deems a solicitor personally responsible for content on any external page linked from the solicitor's website that can reasonably be construed as promoting the solicitor.",
			footer:
				"We provide the informational links for convenience only. We do not endorse the content of any external site, and we accept no responsibility for the accuracy, content, privacy practices, or availability of any external site you reach through a link from this site, except to the extent the firm cannot lawfully exclude such responsibility under the LSRA Regulations or otherwise. When you follow such a link you leave our site, and your use of the destination site is subject to that site's own terms.",
		},
		{
			heading: "6. Use of the site",
			body: "This site is provided for personal, non-commercial use. You may read the pages, save them for your own reference, and share links to specific pages. You may not:",
			list: [
				"copy, republish, or distribute substantial parts of the site's content for commercial purposes without our written permission;",
				"use any automated tool to harvest, scrape, or extract content or data from the site;",
				"attempt to gain unauthorised access to any part of the site or its underlying systems;",
				"use the site in any way that breaches Irish law or that could damage, disable, or impair the site's operation for other users.",
			],
			afterListBody:
				"We reserve the right to suspend access to the site if we reasonably believe these conditions have been breached.",
		},
		{
			heading: "7. Intellectual property",
			body: `All content on this site — including text, images, page layout, and design — is owned by ${firm.companyName} or used with permission, and is protected by trade mark, copyright, and other intellectual property laws. The firm name "${firm.companyName}" and any associated identifiers are protected. None of this content may be reproduced without our prior written consent. Nothing on this site grants you any right or licence to use any of the content, name, or marks except for the personal-use purposes set out in Section 6.`,
		},
		{
			heading: "8. The site may change without notice",
			body: 'We may change, add to, remove from, or discontinue any part of this website at any time and without notice. We may also change this disclaimer from time to time. The "Last reviewed" date at the foot of this page shows when it was last revised. Please check this page periodically.',
		},
		{
			heading: "9. Governing law and jurisdiction",
			body: "This disclaimer, your use of this site, and any dispute arising out of or in connection with either of them is governed by the laws of Ireland. The courts of Ireland have exclusive jurisdiction over any such dispute.",
		},
		{
			heading: "10. Contact",
			// TODO: the firm email is rendered on the contact page, which already
			// reads from `src/config/firm.ts`. Once Mary confirms `info@marymolloy.ie`
			// (tracked in `src/config/firm.ts`), the contact page will display it
			// automatically and this section needs no change.
			body: "If you have any question about this disclaimer, please contact the firm at the address on the contact page, or by email to the address shown there.",
		},
	],
} as const;

export type DisclaimerPageContent = typeof disclaimerPageContent;
