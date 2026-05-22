export const contactPageContent = {
	seo: {
		title: "Contact",
		description:
			"Contact Pozdnyakov Composition Studio to arrange a free introductory composition consultation.",
		canonicalPath: "/contact",
	},
	title: "Get in touch",
	intro:
		"Tell us a little about your musical background and the music you want to write. The first call is free — a good place to find out whether the studio is right for you.",
} as const;

export type ContactPageContent = typeof contactPageContent;
