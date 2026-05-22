export const contactPageContent = {
	seo: {
		title: "Contact",
		description:
			"Contact Pozdnyakov Composition Studio to arrange a free introductory composition consultation.",
		canonicalPath: "/contact",
	},
	title: "Get in touch",
	intro:
		"Tell us a little about your musical background and what you want to work on. The introductory consultation is free and the right place to find out whether the studio is the right fit.",
} as const;

export type ContactPageContent = typeof contactPageContent;
