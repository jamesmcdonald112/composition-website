import { booking } from "./booking";

export const defaultCtaPanel = {
	eyebrow: "Get in touch",
	title: [
		{ text: "A free first call about your " },
		{ text: "composition study", em: true },
	],
	body: "Tell us a little about your background and what you'd like to work on. The first call is free — fifteen minutes by video, the right place to find out whether the studio is for you.",
} as const;

export const globalCtas = {
	booking,
	email: {
		label: "Contact Us",
		href: "/contact",
	},
} as const;
