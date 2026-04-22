import aboutImage from "../assets/images/new/kilkenny-river-from-castle.webp";
import { yearsInPractice } from "./firm";
import { solicitors } from "./team";

export const aboutPageContent = {
	seo: {
		title: "About Mary Molloy Solicitor | Kilkenny Law Firm Since 1979",
		description:
			"Mary Molloy Solicitor has practised in Kilkenny since 1979. A family firm handling property, wills, family law, personal injury and private client matters.",
		canonicalPath: "/about",
	},
	hero: {
		eyebrow: "About the firm",
		title: [
			{ text: "Helping Kilkenny Families " },
			{ text: "Since 1979", em: true },
		],
		subtitle:
			"Many of our clients are people we've known for years. Some we've helped through more than one chapter of their lives. That's been true since 1979, and it still matters to us.",
		image: aboutImage,
		imageAlt: "Kilkenny Castle and the River Nore, Kilkenny City",
	},
	trustStrip: {
		title: [
			{ text: "A family firm with " },
			{ text: `${yearsInPractice} years`, em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Mary Molloy has been practising law in Kilkenny since 1979. What started as a sole practice on Rose Inn Street is now a three-solicitor family firm. Mary's sons Nicholas and Richard practise alongside her, each with their own area of focus and the same approach the firm was built on.",
			`We work across property, wills and probate, family law, personal injury, and private client matters. After ${yearsInPractice} years, one thing hasn't changed: the cases that seem routine to a solicitor are rarely routine to the person going through them. That's worth remembering on every file.`,
			"People come to us at difficult moments. Buying a first home is exciting, but it's also the largest financial commitment most people ever make. Losing a parent means dealing with legal paperwork at the worst possible time. Going through a separation is hard enough without also trying to understand what the law says you're entitled to. We know that. We try to make our part of it as straightforward as possible.",
			"We're a small team. That means when you call, someone who knows your case answers. You'll always know who's handling your matter, and you'll hear from them directly when anything changes on your file.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Conveyancing" },
		],
	},
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "April 2026",
	},
	cta: {
		title: "Not sure where to start?",
		body: "That's fine. Tell us a little about your situation and we'll let you know whether we can help and what would be involved.",
	},
} as const;

export type AboutPageContent = typeof aboutPageContent;
