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
			`Solicitors in Kilkenny since ${firm.established}. We advise on property conveyancing, wills and probate, family law, personal injury and litigation, road traffic accidents, leases and tenancies, employment law, and debt recovery.`,
		canonicalPath: "/services",
	},
	hero: {
		eyebrow: "Legal Services in Kilkenny",
		title: "Services",
	},
	cta: {
		title: "Get in touch",
		body: "Where the area of law that applies to a matter is not clear, an initial conversation often helps to identify it. Get in touch with us in Kilkenny and we'll explain how the relevant legal framework fits the specific circumstances.",
	},
	trustStrip: {
		eyebrow: "Why clients choose us",
		title: `A family practice in Kilkenny since ${firm.established}`,
		paragraphs: [
			`Mary Molloy Solicitor has practised continuously on Rose Inn Street, Kilkenny since ${firm.established}. The firm has acted for clients across County Kilkenny and the surrounding counties on property, wills, family, and litigation matters across more than four decades.`,
			"The firm is a family practice. Mary Molloy is the principal solicitor; her sons Nicholas O'Shea and Richard O'Shea are also solicitors at the firm. All client matters are handled by qualified solicitors.",
			"Our work focuses on a defined set of practice areas across both the personal-client side (property, wills and probate, family law, personal injury) and the smaller-business and individual-disputes side (employment law, leases and tenancies, debt recovery). The legal and procedural rules differ by area; the underlying approach — clarity about the law, careful preparation, and respect for the people involved — does not.",
			"All solicitors at the firm are admitted to the Roll of Solicitors of Ireland and regulated by the Law Society of Ireland and the Legal Services Regulatory Authority.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: String(firm.established) },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Practice areas", value: "8" },
		],
	},
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
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
