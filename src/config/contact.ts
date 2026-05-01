export const contactPageContent = {
	seo: {
		title: "Contact",
		description:
			"Contact Mary Molloy Solicitor in Kilkenny to arrange a legal consultation.",
		canonicalPath: "/contact",
	},
	title: "Get in touch",
	intro:
		"Get in touch with us in Kilkenny to discuss the matter in confidence. We'll explain how the relevant area of law applies to the specific circumstances and what the practical options are.",
} as const;

export type ContactPageContent = typeof contactPageContent;
