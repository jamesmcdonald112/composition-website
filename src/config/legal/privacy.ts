// Privacy-policy content for Pozdnyakov Composition Studio.
//
// Jurisdiction stack:
//   - Primary: Québec Law 25 (Act respecting the protection of personal
//     information in the private sector, as amended in 2022) + Canadian PIPEDA.
//   - Worldwide overlay: EU GDPR + UK GDPR, because the studio offers online
//     tuition to students in the EU/UK.
//
// Article 27 EU representative: not appointed. The studio is a single-person
// micro-enterprise; the prose acknowledges this and gives a direct contact
// route instead.
//
// TODO (alex): review the contact name, the data-protection contact email,
// and the retention periods. The placeholder values below are sensible
// defaults — confirm or adjust before launch.
//
// IMPORTANT — the intro asserts no analytics, no advertising trackers, no
// visitor profiling, and no data sharing beyond the processors listed in
// "Who else sees your data". If any of those is ever added (Google Analytics,
// Plausible, Meta Pixel, server-side tracking, CRM integration), this policy
// MUST be updated before the change goes live.

import type { LegalPageContent } from "../../components/ui/LegalPageContent/LegalPageContent.types";
import { studio } from "../studio";

// ── Per-studio configuration ───────────────────────────────────────────────

const lastUpdated = "18 May 2026";
const dpContactName = studio.teacher; // Alex is the data-protection contact
const dpContactEmail = studio.email.primary;
const nonEnrolledEnquiryRetentionDays = 90;
const cookieConsentRetention = "1 month";

// Processors (sub-processors that handle personal data on the studio's behalf).
// If any changes — provider swap, new provider — update both this list and
// the "Who else sees your data" section's prose.
const cookieConsent = {
	name: "Cookiebot",
	legalEntity: "Usercentrics A/S",
	country: "Denmark",
} as const;

const emailDelivery = {
	name: "Resend",
	legalEntity: "Resend, Inc.",
	country: "United States",
} as const;

const hosting = {
	name: "Vercel",
	legalEntity: "Vercel Inc.",
	country: "United States",
} as const;

const scheduling = {
	name: "Cal.com",
	legalEntity: "Cal.com, Inc.",
	country: "United States",
} as const;

// ── Page content ──────────────────────────────────────────────────────────

export const privacyPageContent: LegalPageContent = {
	seo: {
		title: "Privacy Policy",
		description: `Privacy policy for ${studio.name}. What personal information the studio collects when you use this website, why, how it is looked after, and your rights.`,
		canonicalPath: "/privacy",
	},
	reviewDate: lastUpdated,
	title: "Privacy Policy",
	intro: [
		`${studio.name} ("the studio", "we", "us") operates this website at ${new URL(studio.siteUrl).host}. This Privacy Policy explains in plain language what personal information the studio collects when you use the site, why, how it is looked after, and what your rights are.`,
		`The studio is a one-person teaching practice run by ${studio.teacher} from ${studio.location.city}, ${studio.location.country}. Students are taught online and come from any country. The studio has therefore designed this site to collect as little personal information as possible, and not to share it with anyone beyond the small number of service providers named below.`,
		"We do not run any analytics tools. We do not run any advertising trackers. We do not profile our visitors. We do not sell, rent, trade, or share your information for marketing purposes.",
		"The full detail is below. If anything is unclear, the contact route is in Section 2.",
	],
	sections: [
		{
			heading: "1. Who we are",
			blocks: [
				{
					type: "paragraph",
					text: `${studio.name} is a sole-trader teaching practice run by ${studio.teacher} from ${studio.location.city}, ${studio.location.country}. The studio teaches composition, harmony, counterpoint, fugue, orchestration, and related conservatoire subjects, one student at a time, online.`,
				},
				{
					type: "paragraph",
					text: 'When this notice refers to "the controller" of your personal information, it means the studio — the studio decides what personal information is collected on this website, for what purposes, and how. That is a defined role under Québec\'s Law 25 (Section 1), under Canada\'s Personal Information Protection and Electronic Documents Act ("PIPEDA"), and — for visitors based in the European Union or United Kingdom — under Article 4(7) of the General Data Protection Regulation ("GDPR") and its UK equivalent.',
				},
			],
		},
		{
			heading: "2. How to contact us about your personal information",
			blocks: [
				{
					type: "paragraph",
					text: "If you want to ask a question about how the studio handles your personal information, or to exercise any of your rights (see Section 7), please write to us at the address below.",
				},
				{
					type: "paragraph",
					text: `Person responsible for the protection of personal information: ${dpContactName}.`,
				},
				{
					type: "paragraph",
					text: `Email: ${dpContactEmail}.`,
				},
				{
					type: "paragraph",
					text: "This is the contact point named under Section 8 of Québec Law 25 and the equivalent contact-point obligations under PIPEDA, the GDPR, and the UK GDPR. As a single-person studio we are not required to appoint a Data Protection Officer in the GDPR sense (Article 37 GDPR sets the conditions and none apply to a practice of this size); the contact above is the right person to write to.",
				},
				{
					type: "paragraph",
					text: "We have not appointed an EU representative under Article 27 of the GDPR. The studio is a single-person micro-enterprise that offers online tuition globally; we accept enquiries directly from any country, and EU- or UK-based visitors should use the same contact route as everyone else.",
				},
			],
		},
		{
			heading: "3. What personal information we collect, and why",
			body: "The website performs four discrete processing activities. Each is described in plain language so you know exactly what happens.",
		},
		{
			heading: "3a. Cookie-consent records",
			blocks: [
				{
					type: "paragraph",
					text: `When you visit the site, our cookie banner asks whether you want to allow non-essential cookies. Whichever choice you make, our cookie-management provider (${cookieConsent.name}, run by ${cookieConsent.legalEntity} in ${cookieConsent.country}) stores a small record of your decision so that we can demonstrate to a regulator that you gave or refused consent, and so the banner does not have to ask you again on every page.`,
				},
				{
					type: "paragraph",
					text: "The record contains a random consent ID, a timestamp, your IP address (briefly, at the moment you click), and which categories of cookies you allowed.",
				},
				{
					type: "paragraph",
					text: "Lawful basis / authority to process: compliance with a legal obligation — Québec Law 25 Section 12 (requirement to obtain consent for the collection of personal information by technological means); GDPR Article 6(1)(c) read with Article 7(1) (the obligation to be able to demonstrate consent).",
				},
			],
		},
		{
			heading: "3b. Contact-form submissions",
			blocks: [
				{
					type: "paragraph",
					text: `If you fill in the contact form, we receive the name, email address, and message you submit. The form is sent through our email-delivery provider (${emailDelivery.name}, run by ${emailDelivery.legalEntity} in ${emailDelivery.country} — see Section 5 about international transfers) and arrives in the studio inbox. We use the information for one purpose only: to read your enquiry and reply.`,
				},
				{
					type: "paragraph",
					text: "Lawful basis / authority to process: under Québec Law 25 and PIPEDA, the basis is your express consent (you typed the message and clicked Send) combined with the purposes-of-collection requirement; under the GDPR and UK GDPR, the basis is Article 6(1)(b) — taking steps at your request before entering into a contract — as your enquiry may lead to enrolment.",
				},
				{
					type: "paragraph",
					text: "You are not obliged to submit the form. If you choose not to, the only consequence is that we cannot reply. There is no penalty.",
				},
			],
		},
		{
			heading: "3c. Lead-magnet (free-guide) sign-ups",
			blocks: [
				{
					type: "paragraph",
					text: `If you request the studio's free guide by giving us your first name and email address, we send you the guide and (if you tick the optional opt-in box) add you to the studio's email list. The email is sent through ${emailDelivery.name}. The opt-in box is unticked by default and is entirely optional — you can request the guide without joining the list.`,
				},
				{
					type: "paragraph",
					text: "Lawful basis / authority to process: your express consent for both the initial delivery of the guide and (separately) for the marketing opt-in if you tick it. You can withdraw consent at any time — every studio email contains a one-click unsubscribe link, and you can also write to the contact in Section 2.",
				},
			],
		},
		{
			heading: "3d. Introductory-consultation bookings",
			blocks: [
				{
					type: "paragraph",
					text: `Booking a free introductory consultation opens our scheduling provider's widget (${scheduling.name}, run by ${scheduling.legalEntity} in ${scheduling.country}). When you book, ${scheduling.name} collects the name, email address, time zone, and any answers to questions you provide, in order to create the appointment and send confirmation emails to you and to the studio.`,
				},
				{
					type: "paragraph",
					text: `${scheduling.name} acts as a sub-processor for the studio — the booking data is collected on our behalf and to our instructions, governed by the contract on file. ${scheduling.name}'s own privacy notice describes what ${scheduling.name} does with the data and is available at cal.com/privacy. We recommend you read it before booking.`,
				},
				{
					type: "paragraph",
					text: "Lawful basis / authority to process: your express consent in submitting the booking, combined with the steps-before-contract basis (GDPR Article 6(1)(b)) for visitors in the EU/UK.",
				},
			],
		},
		{
			heading: "3e. Server access logs",
			blocks: [
				{
					type: "paragraph",
					text: "Like every website, our hosting provider keeps short-term access logs of who visits each page. The logs include your IP address, the type of browser, the URL visited, the time, and whether the page loaded successfully. We use these logs only for site reliability, security, and detecting attempts to abuse the site (for example, automated form-spam).",
				},
				{
					type: "paragraph",
					text: "Lawful basis / authority to process: legitimate interest in keeping the website operational and secure (GDPR Article 6(1)(f); equivalent recognised interests under Law 25 and PIPEDA). You have the right to object — see Section 7.",
				},
			],
		},
		{
			heading: "4. Who else sees your information",
			blocks: [
				{
					type: "paragraph",
					text: "The studio uses a small number of carefully chosen service providers. Each is bound by a written agreement that requires them to handle your data only on our instructions, keep it confidential, protect it with appropriate security, and return or delete it when our relationship with them ends. The agreements meet the contractual requirements set by Québec Law 25 (Section 18.3), PIPEDA (Principle 4.1.3), and Article 28(3) of the GDPR / UK GDPR.",
				},
				{
					type: "paragraph",
					text: "The service providers are:",
				},
				{
					type: "list",
					items: [
						`${cookieConsent.name} (${cookieConsent.legalEntity}, ${cookieConsent.country}) — cookie-consent management. Processes data in ${cookieConsent.country} (European Economic Area).`,
						`${emailDelivery.name} (${emailDelivery.legalEntity}, ${emailDelivery.country}) — email delivery for the contact form and lead-magnet guide. Processes data in the ${emailDelivery.country}.`,
						`${scheduling.name} (${scheduling.legalEntity}, ${scheduling.country}) — introductory-consultation scheduling. Processes data in the ${scheduling.country}.`,
						`${hosting.name} (${hosting.legalEntity}, ${hosting.country}) — website hosting and short-term access logs. Processes data in the ${hosting.country}.`,
					],
				},
				{
					type: "paragraph",
					text: "Beyond these providers, we do not share your information with anyone. In particular: we do not use Google Analytics, Plausible, Microsoft Clarity, Hotjar, Fathom, or any other website-analytics tool; we do not use Meta Pixel, Google Ads conversion tracking, LinkedIn Insight Tag, TikTok Pixel, or any advertising tracker; we do not embed any social-media widgets on our pages; we do not sell your information, share it for marketing purposes, or pass it to anyone for profiling; and we are not in any joint-controller arrangement with any third party (Article 26 GDPR). Each of the providers listed above is a pure sub-processor, working only on our instructions.",
				},
				{
					type: "paragraph",
					text: "Separately from the service-provider relationships above, the studio may have to disclose personal information where the law requires it — for example, a court order, a regulator's lawful information request, or a similar statutory route. In each such case, the basis is compliance with a legal obligation.",
				},
			],
		},
		{
			heading: "5. Transfers outside Québec, Canada, and the EEA / UK",
			blocks: [
				{
					type: "paragraph",
					text: `Three of our service providers — ${emailDelivery.name}, ${scheduling.name}, and ${hosting.name} — process data in the United States. The cookie-consent provider, ${cookieConsent.name}, processes data inside the European Economic Area.`,
				},
				{
					type: "paragraph",
					text: "For transfers outside Québec, we comply with Section 17 of Law 25 — before transferring personal information outside Québec we assess that it will receive equivalent protection, taking into account the sensitivity of the information, the purposes, the safeguards in place, and the legal regime of the recipient jurisdiction.",
				},
				{
					type: "paragraph",
					text: "For visitors in the EU or UK, we rely on the safeguards required by Articles 44–46 of the GDPR (and the corresponding UK GDPR provisions) for US-based transfers: the EU Standard Contractual Clauses adopted by Commission Decision 2021/914 of 4 June 2021, supplemented where applicable by the EU–US Data Privacy Framework adequacy decision 2023/1795. The Data Processing Addendums we hold with each US provider specify which mechanism applies.",
				},
				{
					type: "paragraph",
					text: "You have the right to a copy of the transfer safeguards we rely on. If you want one, contact us using the route in Section 2 and we will send you the relevant section of the relevant agreement.",
				},
			],
		},
		{
			heading: "6. How long we keep your information",
			blocks: [
				{
					type: "paragraph",
					text: "We keep personal information only for as long as we genuinely need it for the purpose it was collected. The specific retention periods are:",
				},
				{
					type: "list",
					items: [
						`Cookie-consent records (${cookieConsent.name}): ${cookieConsentRetention}. After that, your stored consent expires and the banner asks again.`,
						"Contact-form messages that lead to enrolment: kept for the duration of the teaching relationship plus two years after it ends, to support continuity (returning students, recommendations, queries about past work). Deleted thereafter.",
						`Contact-form messages that do not lead to enrolment: ${nonEnrolledEnquiryRetentionDays} days. After ${nonEnrolledEnquiryRetentionDays} days the message is deleted.`,
						`Lead-magnet email-list entries: until you unsubscribe. Unsubscription is one click in any studio email or a message to ${dpContactEmail}.`,
						`Introductory-consultation bookings (held by ${scheduling.name}): per ${scheduling.name}'s standard retention, which the studio reviews periodically. We do not retain a separate copy.`,
						`Server access logs: held by ${hosting.name} at the provider's standard retention (typically 30 to 90 days). The logs are not copied or retained by the studio.`,
					],
				},
				{
					type: "paragraph",
					text: 'These periods reflect what the GDPR calls "storage limitation" (Article 5(1)(e)), what PIPEDA calls "limiting retention" (Principle 4.5), and the equivalent retention-minimisation obligation under Québec Law 25.',
				},
			],
		},
		{
			heading: "7. Your rights",
			body: "The set of rights you have depends a little on where you live, but in practice the same core rights apply to every visitor: to know what we hold, to receive a copy, to correct mistakes, to ask for deletion, to limit our use of it, and to take your information elsewhere. The relevant statutory references are given so you can verify each right against the source.",
		},
		{
			heading: "7.1 Right to be informed",
			body: "You are reading this notice — its existence is the studio's compliance with the transparency obligations under Law 25 Section 8.2, PIPEDA Principle 4.8 (Openness), and GDPR Articles 13–14.",
		},
		{
			heading: "7.2 Right of access",
			blocks: [
				{
					type: "paragraph",
					text: "You can ask for a copy of the personal information we hold about you (Law 25 Section 27; PIPEDA Principle 4.9; GDPR Article 15). We will respond within 30 days of receiving your request, free of charge. Electronic requests will receive electronic responses unless you ask otherwise.",
				},
				{
					type: "paragraph",
					text: "If a single response would reveal another person's personal information, we may have to redact it before sending. The balancing rule comes from each of the regimes above.",
				},
			],
		},
		{
			heading: "7.3 Right to rectification",
			body: "If any personal information we hold about you is inaccurate or incomplete, you can ask us to correct or complete it (Law 25 Section 28; PIPEDA Principle 4.9.5; GDPR Article 16).",
		},
		{
			heading: "7.4 Right to erasure",
			blocks: [
				{
					type: "paragraph",
					text: "You can ask us to delete the personal information we hold about you. We will do so unless we have a continuing legal obligation to keep it (for example, an unfulfilled obligation to a tax authority or a record we are required to retain by law). The most common ground for not deleting on request would be the establishment, exercise, or defence of legal claims (GDPR Article 17(3)(e); equivalent under Law 25 and PIPEDA).",
				},
				{
					type: "paragraph",
					text: `If we erase, correct, or restrict information on your request, we will pass the change on to our service providers (${cookieConsent.name}, ${emailDelivery.name}, ${scheduling.name}, ${hosting.name}) so they do the same — as required by GDPR Article 19 — unless that turns out to be impossible or disproportionate.`,
				},
			],
		},
		{
			heading: "7.5 Right to restrict processing",
			body: 'You can ask us to "freeze" your information — keep it but not actively use it — in certain situations: while you contest its accuracy; while you object to processing; or where the processing is unlawful but you do not want erasure (GDPR Article 18; equivalent control routes under Law 25 and PIPEDA).',
		},
		{
			heading: "7.6 Right to data portability",
			body: "You can ask us to send you a structured, machine-readable copy of the personal information you provided to us, where the processing is based on consent or contract (Law 25 Section 27 introduced an equivalent right effective September 2024; GDPR Article 20). For this site, that means the contact-form data, lead-magnet sign-up, and any consultation-booking data you submitted yourself. The right does not extend to server access logs (basis: legitimate interest) or cookie-consent records (basis: legal obligation).",
		},
		{
			heading: "7.7 Right to object",
			blocks: [
				{
					type: "paragraph",
					text: "You have the right to object, on grounds relating to your particular situation, to processing carried out on the basis of legitimate interest (GDPR Article 21). On this site, the only such processing is the server access logs in Section 3e. If you object, we must stop processing your data in those logs unless we can show compelling legitimate grounds for continuing (for example, an active investigation into abuse of the site).",
				},
				{
					type: "paragraph",
					text: "If you ever join the studio's email list and want to leave it, you can withdraw consent at any time — every studio email has a one-click unsubscribe link, and we will not send further marketing once you have unsubscribed.",
				},
			],
		},
		{
			heading: "7.8 Rights regarding automated decision-making",
			body: "We do not carry out any automated decision-making or profiling that produces legal or similarly significant effects. Every enquiry is read by a human. GDPR Article 22 and the corresponding Law 25 / PIPEDA provisions do not arise here.",
		},
		{
			heading: "7.9 Right to withdraw consent",
			body: "Where you have given consent — for example, by clicking Allow on the cookie banner, or by ticking the optional marketing-opt-in box on the lead-magnet form — you can withdraw it at any time. For cookies: click the floating Privacy icon in the bottom-left of any page to reopen the banner. For the email list: one-click unsubscribe in any studio email. Withdrawal is as easy as giving consent, and there is no penalty for withdrawing.",
		},
		{
			heading: "7.10 How to exercise these rights",
			body: `Write to us using the route in Section 2 (email ${dpContactEmail}). State which right you are exercising and (where relevant) what you want done. We will respond within 30 days, free of charge. If the request is unusually complex or involves a large volume of data, we may extend that period and tell you why within the original 30 days.`,
		},
		{
			heading: "8. Your right to complain",
			blocks: [
				{
					type: "paragraph",
					text: "If you think the studio has mishandled your personal information, you have routes available to you depending on where you live. You can use any of them; you do not have to contact us first, but in practice raising the matter with us directly is usually the fastest way to resolve it.",
				},
				{
					type: "paragraph",
					text: 'Québec residents: the Commission d\'accès à l\'information du Québec ("CAI") is the supervisory authority. Contact via cai.gouv.qc.ca or by post to 525 boulevard René-Lévesque Est, Bureau 2.36, Québec (Québec) G1R 5S9, Canada.',
				},
				{
					type: "paragraph",
					text: "Other Canadian residents: the Office of the Privacy Commissioner of Canada is the federal supervisory authority. Contact via priv.gc.ca.",
				},
				{
					type: "paragraph",
					text: "EU residents: you may lodge a complaint with the supervisory authority of your habitual residence, your place of work, or the place of the alleged infringement (GDPR Article 77). A directory is at edpb.europa.eu/about-edpb/about-edpb/members_en.",
				},
				{
					type: "paragraph",
					text: "UK residents: the Information Commissioner's Office. Contact via ico.org.uk.",
				},
				{
					type: "paragraph",
					text: "Right to a judicial remedy: independently of any complaint to a regulator, you have the right to take court action against the studio under GDPR Article 79 (or the equivalent provision of your local law) if you believe a breach has occurred. You may bring the action in the Québec courts (where the studio is established) or, under GDPR Article 79(2), in the courts of your habitual residence.",
				},
			],
		},
		{
			heading: "9. Whether you have to give us your information",
			body: "You are not legally obliged to provide any personal information to use this website. You can read every page without giving us anything. The only consequence of not providing information is that we cannot do something for you that needed it — if you do not submit the contact form, we cannot reply; if you do not give an email address for the lead-magnet, we cannot send the guide. There is no penalty.",
		},
		{
			heading: "10. Children",
			body: "This website is not directed at children. We do not knowingly collect personal information from children. If you are a parent or guardian and you believe a child has submitted personal information through this site, please contact us using the route in Section 2 and we will erase the data. The studio's tuition is for adult composers and conservatoire-age students working within an institutional framework; the website assumes adult visitors.",
		},
		{
			heading: "11. How we keep your information secure",
			blocks: [
				{
					type: "paragraph",
					text: "We take the security of your personal information seriously. The technical and organisational measures we rely on include:",
				},
				{
					type: "list",
					items: [
						`In transit: every page on the website is served over TLS (HTTPS), so data is encrypted between your browser and our servers. The same applies to data sent to ${cookieConsent.name}, ${emailDelivery.name}, and ${scheduling.name}.`,
						`At rest: our hosting provider, ${emailDelivery.name}, ${scheduling.name}, and ${cookieConsent.name} all encrypt stored data at rest, as documented in the Data Processing Addendums we hold for each.`,
						"Access control: studio email accounts (where contact-form messages arrive) are protected by the email provider's authentication. Access is limited to the studio only.",
						`Sub-processor security: every service provider we use is bound by a written agreement that includes appropriate security commitments (GDPR Article 32 / Law 25 Section 10 / PIPEDA Principle 4.7).`,
						"Architectural design: the site is built to collect the minimum personal information needed (GDPR Article 25 — data protection by design and by default). There is no analytics layer, no tracking layer, and no third-party widgets beyond the named scheduling provider on the booking page.",
					],
				},
				{
					type: "paragraph",
					text: "If a personal-information breach affecting your data occurs, we will notify the relevant supervisory authority (the CAI in Québec, the Office of the Privacy Commissioner of Canada federally, the relevant EU / UK supervisory authority for EU / UK residents) within the timeframes required by each regime, and we will notify you directly without undue delay if the breach is likely to result in a high risk to your rights.",
				},
			],
		},
		{
			heading: "12. Cookies",
			blocks: [
				{
					type: "paragraph",
					text: "This Privacy Policy describes how we handle personal information in general. The specific list of cookies the site uses, what each cookie does, and how long each cookie lasts, is set out in our Cookie Policy at /cookie-policy — that page also lets you change or withdraw your consent at any time.",
				},
				{
					type: "paragraph",
					text: "The cookie banner that appears on first visit is the place where you choose which categories of cookies you allow. The floating Privacy icon in the bottom-left corner of every page is the place where you change or withdraw your consent later.",
				},
			],
		},
		{
			heading: "13. Links to other websites",
			body: "This site contains links to a small number of external websites — for example, the booking widget loads from cal.com, the lead-magnet PDF is hosted on this domain, and links in this policy point to regulator websites. When you click a link to another site, you leave our site and your information is then handled under the privacy policy of whichever site you arrive at, not this one. We have no control over the content or privacy practices of those external sites and accept no responsibility for them. We recommend reviewing the privacy policy of any site you visit.",
		},
		{
			heading: "14. Changes to this policy",
			body: 'We may update this Privacy Policy from time to time — for example, if we change a service provider, if a regulator publishes new guidance, or if the law changes. The "Last updated" date at the top of this notice always shows when the policy was last revised. If we make a change that materially affects how we handle your personal information, we will flag it visibly on the website.',
		},
	],
};

export type PrivacyPageContent = typeof privacyPageContent;
