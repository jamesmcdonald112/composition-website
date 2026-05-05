// The accessibility statement was generated using the W3C Accessibility
// Statement Generator Tool (https://www.w3.org/WAI/planning/statements/) and
// edited to reflect the firm's specifics and the findings of an automated
// audit (WAVE) of the live site.
//
// **Source-of-truth original markdown:**
// `legal-compliance/accessibility/accessibility-statement_2026-01-11.md`
//
// That file is the dated audit-trail copy. It demonstrates to a regulator
// that the statement was generated using the recommended W3C tool and was
// reviewed against an actual audit. **Keep both files in sync.** When this
// config is updated, the markdown source must also be updated, and the
// reviewDate field below must be bumped.

export const accessibilityPageContent = {
	seo: {
		title: "Accessibility Statement",
		description:
			"Accessibility statement for Mary Molloy Solicitor. We aim to meet WCAG 2.1 Level AA and welcome feedback on accessibility barriers.",
		canonicalPath: "/accessibility",
	},
	reviewDate: "May 2026",
	title: "Accessibility Statement for Mary Molloy Solicitor",
	intro: "This is an accessibility statement from Mary Molloy Solicitor.",
	sections: [
		{
			heading: "Measures to support accessibility",
			body: "Mary Molloy Solicitor takes the following measures to ensure accessibility of this website:",
			list: [
				"Assign clear accessibility goals and responsibilities.",
				"Accessibility is considered during design, development, and content updates.",
			],
		},
		{
			heading: "Conformance status",
			body: 'The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Mary Molloy Solicitor is partially conformant with WCAG 2.1 level AA. "Partially conformant" means that some parts of the content do not fully conform to the accessibility standard.',
		},
		{
			heading: "Known limitations",
			body: "The following minor issues have been identified via automated audit (WAVE, April 2026). None represent barriers to access — all are informational alerts rather than errors.",
			list: [
				"Intro animation text — the firm name displayed during the page loading animation is styled to appear large but is marked as a paragraph element rather than a heading. This element is hidden from screen readers via aria-hidden=\"true\" and is not perceivable by assistive technologies.",
				'Logo and "Home" navigation link — the site logo and the "Home" link in the navigation bar both link to the homepage. Each has a distinct accessible label ("Mary Molloy Solicitor — home" and "Home" respectively), so screen reader users hear different labels for each link. This is the standard pattern used by accessible sites.',
				"Phone number links — the phone number appears in both the desktop navigation bar and the mobile navigation (which is visually hidden on desktop). Both instances link to the same tel: URL. The desktop link has a distinct aria-label; the mobile link is not perceivable when hidden.",
			],
		},
		{
			heading: "Feedback",
			body: "We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:",
			list: [
				"Phone: +353 56 7765829",
				"Visitor address: 2 Rose Inn St, Dukesmeadows, Kilkenny, R95 W58D",
				"Postal address: 2 Rose Inn St, Dukesmeadows, Kilkenny, R95 W58D",
				'You may also submit accessibility feedback through our website contact form by selecting "General enquiry" and describing the accessibility issue.',
			],
			footer: "We aim to respond to accessibility feedback within 5 business days.",
		},
		{
			heading: "Compatibility with browsers and assistive technology",
			body: "This website is designed to be compatible with the following assistive technologies:",
			list: [
				"Modern web browsers (Chrome, Firefox, Safari, Edge) with screen readers such as NVDA, VoiceOver, or JAWS on current operating systems.",
			],
			afterListBody: "This website is not compatible with:",
			afterListItems: ["Browsers older than 3 major versions."],
		},
		{
			heading: "Technical specifications",
			body: "Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:",
			list: ["HTML", "WAI-ARIA", "CSS", "JavaScript"],
			footer: "These technologies are relied upon for conformance with the accessibility standards used.",
		},
		{
			heading: "Assessment approach",
			body: "Mary Molloy Solicitor assessed the accessibility of this website by the following approaches:",
			list: ["Self-evaluation"],
		},
		{
			heading: "Formal complaints",
			body: "If you are not satisfied with our response, you may contact us using the details above and we will review your concerns.",
		},
	],
	createdNote:
		"This statement was created on 10 February 2026 using the W3C Accessibility Statement Generator Tool.",
} as const;

export type AccessibilityPageContent = typeof accessibilityPageContent;
