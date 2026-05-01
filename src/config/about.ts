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
			{ text: "A family firm in Kilkenny " },
			{ text: "since 1979", em: true },
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
			"The work of the firm is mainly on the personal-client side — buying and selling a home, making a will, administering an estate, and family law matters — alongside personal injury, employment, and the smaller-business side of the practice. The legal and procedural rules differ by area; the underlying approach to client work does not.",
			"All client matters are handled by qualified solicitors. The firm is small enough that the solicitor on a file is the person clients deal with directly — not a call handler or a paralegal acting on the solicitor's behalf.",
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
		body: "That's fine. Tell us a little about your situation and we'll explain what would be involved.",
	},
} as const;

export type AboutPageContent = typeof aboutPageContent;
