import { firm } from "./firm";

export const defaultCtaPanel = {
	eyebrow: "Get in touch",
	title: [
		{ text: "Need legal advice you can " },
		{ text: "rely on", em: true },
		{ text: "?" },
	],
	body: "Our solicitors in Kilkenny are here to help. Call us or send a message and we will get back to you promptly.",
} as const;

export const globalCtas = {
	call: {
		label: firm.phone.display,
		href: `tel:${firm.phone.phoneHref}`,
	},
	email: {
		label: "Contact Us",
		href: "/contact",
	},
} as const;
