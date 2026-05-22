// Disclaimer for Pozdnyakov Composition Studio.
//
// Scope: educational content + tuition outcomes. The studio teaches
// composition online; this disclaimer makes explicit what that means and
// does not promise. It is not a solicitor's disclaimer and does not need
// the LSRA / AML / limitation-period framing that the original (Mary
// Molloy) version carried.
//
// TODO (alex): review the contact email and the response time. Confirm
// governing-law jurisdiction (currently set to Québec).

import type { LegalPageContent } from "../../components/ui/LegalPageContent/LegalPageContent.types";
import { studio } from "../studio";

const lastReviewed = "18 May 2026";

export const disclaimerPageContent = {
	seo: {
		title: "Disclaimer",
		description: `Website disclaimer for ${studio.name}. The information on this site is for educational purposes; outcomes from tuition depend on individual student effort and circumstances.`,
		canonicalPath: "/disclaimer",
	},
	reviewDate: lastReviewed,
	title: "Website Disclaimer",
	intro: "This page sets out the basis on which the studio publishes content on this website and offers composition tuition through it. By using the site you are taken to have read and accepted this disclaimer.",
	sections: [
		{
			heading: "1. Educational content, not a guarantee of outcome",
			blocks: [
				{
					type: "paragraph",
					text: `The content of this website — including descriptions of the curriculum, the studio's teaching method, the teacher's background, and any free guides or sample materials — is published for general informational and educational purposes. It describes what the studio teaches and how, so that prospective students can make an informed decision about whether to enrol.`,
				},
				{
					type: "paragraph",
					text: "Composition is a craft that depends on sustained personal practice. The studio does not promise — and no website page should be read as promising — that following the curriculum, completing the exercises, or working with the teacher will produce any particular musical, academic, or professional outcome. In particular, the studio does not guarantee:",
				},
				{
					type: "list",
					items: [
						"admission to any conservatoire, university, or graduate programme;",
						"success in any competition, audition, jury, or examination;",
						"a career as a composer, teacher, or performing musician;",
						"any specific rate of progress in compositional skill, theoretical understanding, or technical fluency.",
					],
				},
				{
					type: "paragraph",
					text: "Outcomes depend on factors the studio does not control — most obviously the student's background, prior training, time available for sustained practice, persistence with feedback, and the wider circumstances in which they study and submit their work. Two students working through the same curriculum will arrive at different places; that is the nature of compositional study.",
				},
			],
		},
		{
			heading: "2. Feedback on student work is professional judgement",
			blocks: [
				{
					type: "paragraph",
					text: `Where the teacher comments on student work submitted for correction — whether harmony exercises, counterpoint, chorale settings, fugue, orchestration drafts, or original composition — the comments represent the teacher's considered professional judgement in the conservatoire tradition in which he was trained. They are an informed opinion, not an absolute pronouncement.`,
				},
				{
					type: "paragraph",
					text: "Compositional decisions often have more than one defensible answer. Where the teacher marks a passage with a suggested correction, that is the correction he would make and the reasoning he would give for it; another teacher in another tradition might suggest something different. Students are encouraged to engage with corrections critically, to ask why a change is suggested, and to bring their own questions to lessons rather than accepting feedback without thinking it through.",
				},
			],
		},
		{
			heading: "3. The studio is not a substitute for institutional study",
			blocks: [
				{
					type: "paragraph",
					text: `${studio.name} is a private one-person studio. Where students intend to apply to a conservatoire, university, or other institution, the studio can help build the technical foundation that such institutions expect — but the studio is not affiliated with any institution and cannot speak to any institution's specific admissions requirements. Students intending to apply somewhere should always check that institution's published requirements directly.`,
				},
				{
					type: "paragraph",
					text: "The studio does not award qualifications, diplomas, or transferable academic credit. A record of which modules a student has worked through can be provided on request, but it does not function as a formal academic transcript.",
				},
			],
		},
		{
			heading: "4. Accuracy and currency of content",
			blocks: [
				{
					type: "paragraph",
					text: "The studio takes care to make sure the information on this site is accurate at the date of publication. However:",
				},
				{
					type: "list",
					items: [
						"summaries are simplified — any description of the curriculum, of a musical tradition, or of a particular concept is necessarily a short summary and omits qualifications a longer treatment would include;",
						"the studio reserves the right to refine the curriculum, pricing, lesson format, or scheduling arrangements as the practice evolves;",
						"no warranty — the studio makes no representation or warranty, express or implied, that the content of this site is accurate, complete, current, or fit for any particular purpose.",
					],
				},
				{
					type: "paragraph",
					text: "Any reliance you place on the content of this site is at your own risk. To the fullest extent permitted by applicable law, the studio accepts no liability for any loss or damage suffered by anyone who relies on the content of this site. This exclusion does not apply to liability that cannot lawfully be excluded — for example, liability for fraud or for death or personal injury caused by negligence.",
				},
				{
					type: "paragraph",
					text: "Every effort is made to keep the website running smoothly. However, the studio accepts no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues outside the studio's control (hosting outages, scheduled maintenance, network failures, etc.).",
				},
			],
		},
		{
			heading: "5. Links to external websites",
			blocks: [
				{
					type: "paragraph",
					text: "This site links to a small number of external websites — for example, the scheduling provider for booking an introductory consultation (Cal.com), and any references to public musical resources, scores, or recordings. The studio does not control these sites and does not endorse the entirety of their content. When you follow such a link you leave the studio's site, and your use of the destination site is governed by that site's own terms and privacy policy.",
				},
				{
					type: "paragraph",
					text: "The studio accepts no responsibility for the accuracy, content, privacy practices, or availability of any external site reached through a link from this site.",
				},
			],
		},
		{
			heading: "6. Use of the site",
			blocks: [
				{
					type: "paragraph",
					text: "This site is provided for personal, non-commercial use. You may read the pages, save them for your own reference, and share links to specific pages. You may not:",
				},
				{
					type: "list",
					items: [
						"copy, republish, or redistribute substantial parts of the site's content for commercial purposes without the studio's written permission;",
						"use any automated tool to harvest, scrape, or extract content or data from the site;",
						"attempt to gain unauthorised access to any part of the site or its underlying systems;",
						"use the site in any way that breaches applicable law or that could damage, disable, or impair the site's operation for other users.",
					],
				},
				{
					type: "paragraph",
					text: "The studio reserves the right to suspend access if it reasonably believes these conditions have been breached.",
				},
			],
		},
		{
			heading: "7. Intellectual property",
			blocks: [
				{
					type: "paragraph",
					text: `All content on this site — including text, images, page layout, design, and any teaching materials, study guides, or sample exercises published or distributed by the studio — is owned by ${studio.name} (or its teacher) or used with permission, and is protected by copyright and other intellectual-property laws. None of this content may be reproduced, redistributed, or used to train any machine-learning model without the studio's prior written consent. The studio's name and any associated identifiers are likewise protected.`,
				},
				{
					type: "paragraph",
					text: "Where the studio provides teaching materials to enrolled students, those materials are licensed for the student's personal study and use. They may not be shared, redistributed, or used to teach others, whether for fee or not, without the studio's written permission.",
				},
				{
					type: "paragraph",
					text: "Work submitted to the studio by students for correction remains the student's intellectual property. The teacher's marked-up corrections and written feedback are the teacher's intellectual property; they are provided for the student's personal study and are not for redistribution.",
				},
			],
		},
		{
			heading: "8. The site may change without notice",
			body: 'The studio may change, add to, remove from, or discontinue any part of this website at any time without notice, and may update this disclaimer from time to time. The "Last reviewed" date at the foot of this page shows when it was last revised. Please check this page periodically — your continued use of the site after a change indicates your acceptance of the updated disclaimer.',
		},
		{
			heading: "9. Governing law",
			body: `This disclaimer, your use of this site, and any dispute arising out of or in connection with either is governed by the laws of the Province of Québec, Canada, and the federal laws of Canada applicable there. The courts of the Province of Québec have jurisdiction over any such dispute, without prejudice to any non-waivable rights you may have under the law of your habitual residence.`,
		},
		{
			heading: "10. Contact",
			body: `If you have any question about this disclaimer, please contact the studio by email at ${studio.email.primary}.`,
		},
	],
} as const satisfies LegalPageContent;

export type DisclaimerPageContent = typeof disclaimerPageContent;
