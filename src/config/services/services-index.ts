import { buyingAndSellingProperty } from "./buying-and-selling-property";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";
import {
	debtCollection,
	employmentLaw,
	familyAndChildcareLaw,
	leasesAndTenancyAgreements,
	personalInjuryLitigation,
	roadTrafficAccidents,
	willsAndEstateAdministration,
} from ".";

// --- Services index page content (hero, cta) ---
export const servicesIndexContent = {
	seo: {
		title: `Legal Services in Kilkenny | ${firm.companyName}`,
		description:
			"Solicitors in Kilkenny offering property conveyancing, wills and probate, family law, personal injury, employment law, leases, and debt recovery. Contact us for clear, practical legal advice.",
		canonicalPath: "/services",
	},
	hero: {
		eyebrow: "Legal Services in Kilkenny",
		title: "Services",
		subtitle:
			"We provide clear, practical legal advice across a wide range of personal and business matters. Whether you are buying a home, dealing with a bereavement, going through a separation, or facing a workplace dispute, our experienced Kilkenny team is here to help.",
	},
	cta: {
		title: "Not sure which service you need?",
		body: "Our team in Kilkenny is happy to talk through your situation and point you in the right direction — no obligation, just clear advice on where to start.",
	},
	trustStrip: {
		eyebrow: "Why clients choose us",
		title: "Experienced, personal legal advice in Kilkenny",
		paragraphs: [
			`Mary Molloy Solicitor has been practising on Rose Inn Street, Kilkenny since 1979. Over ${yearsInPractice} years, we have helped thousands of clients across the county with property, family, and personal legal matters.`,
			"We are a family practice — Mary works alongside her sons Nicholas and Richard. Every client gets direct access to a qualified solicitor, not a call centre or a junior clerk.",
			"We keep our clients informed at every stage. You will always know where your matter stands, what is happening next, and what it will cost.",
			"All work is carried out by qualified solicitors. We are regulated by the Law Society of Ireland and proud members of the Kilkenny legal community.",
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
} as const;

// --- All services (used by ServiceCardsGrid on the services index page) ---
// Order here controls the order the cards appear on the page
export const allServices = [
	buyingAndSellingProperty,
	willsAndEstateAdministration,
	familyAndChildcareLaw,
	personalInjuryLitigation,
	roadTrafficAccidents,
	leasesAndTenancyAgreements,
	employmentLaw,
	debtCollection,
] as const;
