import homeModernIcon from "../assets/icons/homeModernIcon.svg?raw";
import propertyImage from "../assets/images/new/house-key-and-figurine.webp";
import { firm, yearsInPractice } from "./firm";
import { solicitors } from "./team";

export const homePageContent = {
	seo: {
		title: firm.companyName,
		description: `Solicitors in Kilkenny since ${firm.established}. We advise on conveyancing, wills and probate, family law, personal injury, employment law, leases and tenancies, and debt recovery — for clients across County Kilkenny and the surrounding counties.`,
		canonicalPath: "/",
	},

	hero: {
		eyebrow: "Solicitors in Kilkenny",
		title: "Solicitors for Buying & Selling Property",
		titleEmphasis: "Buying & Selling",
		// TODO: Update subtitle once fee structure is confirmed with Mary.
		// If fixed-fee conveyancing is offered, add a line here.
		subtitle:
			`Conveyancing matters handled in Kilkenny since ${firm.established} — alongside wills and probate, family law, personal injury, employment law, leases and tenancies, and debt recovery.`,
		ctas: {
			primary: { label: "Our services", href: "/services" },
			secondary: { label: "Get in touch", href: "/contact" },
		},
	},

	featuredService: {
		eyebrow: "Conveyancing in Kilkenny",
		card: {
			tag: "Buying & Selling Property",
			title: "Conveyancing in Kilkenny",
			body: "We act on residential conveyancing — contract review, investigation of title at the Property Registration Authority, planning and building control checks, dealings with mortgage lenders, payment of stamp duty under the Stamp Duties Consolidation Act 1999, and registration of ownership.",
			points: [
				"Contracts reviewed in full before signing",
				"Title investigated at the Property Registration Authority",
				"Planning and Building Regulations compliance checks",
				"Mortgage and lender requirements handled",
				"Stamp duty calculated and filed with Revenue",
				"Ownership registered after completion",
			],
			cta: { label: "More on conveyancing", href: "/services/buying-and-selling-property" },
			icon: homeModernIcon,
			image: propertyImage,
		},
		aside: {
			title: [{ text: "Property handled with " }, { text: "care", em: true }],
			intro:
				"On a residential conveyance, the firm acts on the title investigation, the contractual stage, the lender requirements where there is a mortgage, completion, and the post-completion steps with the Property Registration Authority and Revenue.",
			keyPoints: [
				{
					heading: "Contracts reviewed in full",
					body: "We read the contract in full and raise pre-contract and requisition enquiries with the seller's solicitor where needed before contracts are signed.",
				},
				{
					heading: "Title investigated against the PRA",
					body: "We investigate the title at the Property Registration Authority — confirming the seller's ownership, identifying any judgment mortgages or registered burdens, and checking that the boundaries match the ground.",
				},
				{
					heading: "Lender and stamp-duty work handled",
					body: "We act for the lender on a mortgage transaction, manage the drawdown of funds in time for completion, and calculate and file the stamp duty return with the Revenue Commissioners.",
				},
				{
					heading: "Costs discussed at the outset",
					// TODO: update if fixed-fee conveyancing is confirmed
					body: "We discuss our fees with each client at the outset, including the basis on which we charge and the third-party outlays (Land Registry fees, search fees, stamp duty) involved in the matter.",
				},
			],
		},
	},

	supportingServices: {
		eyebrow: "Other services",
		title: [{ text: "Other " }, { text: "practice areas", em: true }, { text: " at the firm" }],
		intro:
			"Beyond conveyancing, the firm advises on wills and probate, family and childcare law, personal injury and litigation, road traffic accidents, employment law, leases and tenancies, and debt recovery — for clients across Kilkenny and the surrounding counties.",
	},

	trustStrip: {
		eyebrow: "About the practice",
		title: `A family practice in Kilkenny since ${firm.established}`,
		paragraphs: [
			`Mary Molloy Solicitor has practised continuously on Rose Inn Street, Kilkenny since ${firm.established}. The firm is a family practice — Mary Molloy is the principal solicitor; her sons Nicholas O'Shea and Richard O'Shea are also solicitors at the firm.`,
			"The firm acts for clients across County Kilkenny and the surrounding counties on residential and commercial conveyancing, wills and probate, family law, personal injury and civil litigation, road traffic accidents, employment law, leases and tenancies, and debt recovery.",
			"Conveyancing is the largest area of the firm's practice, but the work covers each of the eight practice areas listed above. The legal and procedural rules differ by area; the underlying approach to client work — clarity about the law, careful preparation, and respect for the people involved — does not.",
			"All solicitors at the firm are admitted to the Roll of Solicitors of Ireland and regulated by the Law Society of Ireland and the Legal Services Regulatory Authority.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: String(firm.established) },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Conveyancing" },
		],
	},
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;

export type HomePageContent = typeof homePageContent;
