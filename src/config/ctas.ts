import { firm } from "./firm";

export const defaultCtaPanel = {
	eyebrow: "Get in touch",
	title: [
		{ text: "A clear assessment of your " },
		{ text: "legal matter", em: true },
	],
	body: "Get in touch with us in Kilkenny and we'll explain how the relevant area of law applies to the specific circumstances.",
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
