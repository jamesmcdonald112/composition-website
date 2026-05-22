// Accessibility statement for Pozdnyakov Composition Studio.
//
// Structure follows the W3C Accessibility Statement Generator
// (https://www.w3.org/WAI/planning/statements/), kept as a recognisable
// shape that aligns with how regulators and audit tools expect these
// statements to read.
//
// Conformance status — currently "aim to meet WCAG 2.1 AA". The site has
// NOT been formally audited. When a full audit is run (see README →
// Pre-launch checklist and the audit tools in the README's Reusable
// patterns section), update the Conformance status block to either
// "fully conformant" or "partially conformant" and list any known
// limitations that remain.
//
// TODO (alex): review the contact email and the response time before
// launch.

import type { LegalPageContent } from "../../components/ui/LegalPageContent/LegalPageContent.types";
import { studio } from "../studio";

const lastReviewed = "18 May 2026";

export const accessibilityPageContent = {
	seo: {
		title: "Accessibility Statement",
		description: `Accessibility statement for ${studio.name}. We aim to meet WCAG 2.1 Level AA and welcome feedback on accessibility barriers.`,
		canonicalPath: "/accessibility",
	},
	reviewDate: lastReviewed,
	title: `Accessibility Statement for ${studio.name}`,
	intro: `This is the accessibility statement for ${studio.name}. The studio is committed to making this website usable by as many people as possible, including those who rely on assistive technologies.`,
	sections: [
		{
			heading: "Measures to support accessibility",
			blocks: [
				{
					type: "paragraph",
					text: `${studio.name} takes the following measures to support the accessibility of this website:`,
				},
				{
					type: "list",
					items: [
						"Accessibility is considered during design, development, and content updates — not added as an afterthought.",
						"The site uses semantic HTML so that content has meaning to assistive technologies, not just visual styling.",
						"Colour contrast is checked against the WCAG ratio thresholds whenever a colour change is made.",
						"Keyboard navigation is part of the basic build, not a separate concern.",
					],
				},
			],
		},
		{
			heading: "Conformance status",
			blocks: [
				{
					type: "paragraph",
					text: "The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. WCAG sets three levels of conformance: Level A, Level AA, and Level AAA.",
				},
				{
					type: "paragraph",
					text: `${studio.name} aims to meet WCAG 2.1 Level AA. The site has not yet been formally audited against the guidelines, so we are unable to assert full or partial conformance with confidence. Once a full audit has been carried out, this statement will be updated to record the audit result and to list any known limitations that remain.`,
				},
			],
		},
		{
			heading: "Feedback",
			blocks: [
				{
					type: "paragraph",
					text: "We welcome your feedback on the accessibility of this website. If you encounter an accessibility barrier — for example, content that does not work with your screen reader, a colour combination that is hard to read, or a form field that is hard to navigate — please let us know so we can address it.",
				},
				{
					type: "list",
					items: [
						`Email: ${studio.email.primary}`,
						"You may also submit accessibility feedback through our contact form at /contact — please describe the accessibility issue in the message field.",
					],
				},
				{
					type: "paragraph",
					text: "The studio aims to respond to accessibility feedback within seven days.",
				},
			],
		},
		{
			heading: "Compatibility with browsers and assistive technology",
			blocks: [
				{
					type: "paragraph",
					text: "This website is designed to be compatible with the following assistive technologies:",
				},
				{
					type: "list",
					items: [
						"Recent versions of modern web browsers (Chrome, Firefox, Safari, Edge) with screen readers such as NVDA, JAWS, VoiceOver, or TalkBack on current operating systems.",
					],
				},
				{
					type: "paragraph",
					text: "This website is not actively tested against browsers more than three major versions out of date.",
				},
			],
		},
		{
			heading: "Technical specifications",
			blocks: [
				{
					type: "paragraph",
					text: "Accessibility of this website relies on the following technologies to work with the combination of web browser and any assistive technologies installed on your device:",
				},
				{
					type: "list",
					items: ["HTML", "WAI-ARIA", "CSS", "JavaScript"],
				},
				{
					type: "paragraph",
					text: "These technologies are relied upon for conformance with the accessibility standards used.",
				},
			],
		},
		{
			heading: "Assessment approach",
			blocks: [
				{
					type: "paragraph",
					text: `${studio.name} has so far assessed the accessibility of this website by the following approaches:`,
				},
				{
					type: "list",
					items: [
						"Self-evaluation during development against the WCAG 2.1 Level AA criteria.",
					],
				},
				{
					type: "paragraph",
					text: "A formal independent audit has not yet been carried out. When one is, this section will be updated to describe the approach and the result.",
				},
			],
		},
		{
			heading: "Formal complaints",
			body: "If you are not satisfied with the studio's response to an accessibility report, you may contact us again using the email above. We will review your concerns. If you are based in a jurisdiction with a statutory accessibility regulator and wish to escalate further, you may also contact that regulator — for example, in the European Union, complaints can be raised with the national supervisory authority responsible for digital accessibility under the EU Web Accessibility Directive.",
		},
	],
	footerNote: `This statement was last reviewed on ${lastReviewed} and follows the structure of the W3C Accessibility Statement Generator tool.`,
} as const satisfies LegalPageContent;

export type AccessibilityPageContent = typeof accessibilityPageContent;
