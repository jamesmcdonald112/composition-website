import buildingIcon from "../../assets/icons/buildingIcon.svg?raw";
import image from "../../assets/images/new/house-key-on-wooden-table.webp";
import richardImage from "../../assets/team/richard.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const leasesAndTenancyAgreements = {
	// --- Identity ---
	title: "Leases & Tenancy Agreements",
	slug: "leases-and-tenancy-agreements",
	href: "/services/leases-and-tenancy-agreements",
	icon: buildingIcon,
	image,
	imageClass: "object-right-bottom",
	description:
		"Landlord and tenant advice for clients in Kilkenny and the surrounding counties. We review and draft residential and commercial leases, advise on rights and obligations under the Residential Tenancies Acts and the Landlord and Tenant Acts, and represent landlords and tenants in Residential Tenancies Board proceedings.",
	// --- SEO ---
	seo: {
		title: `Lease & Tenancy Agreement Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Solicitors for landlords and tenants in Kilkenny. We review and draft residential and commercial leases, advise on rights and obligations under the Residential Tenancies Acts, and represent clients in Residential Tenancies Board disputes.",
		canonicalPath: "/services/leases-and-tenancy-agreements",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Leases & " },
			{ text: "Tenancy Agreements", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"Residential and commercial tenancies in Ireland are governed by the Residential Tenancies Acts 2004 to 2024 and the Landlord and Tenant Acts 1967 to 2022. We advise landlords and tenants in Kilkenny and the surrounding counties on lease drafting, rights and obligations under those statutes, and Residential Tenancies Board proceedings.",
	},
	// --- Mid-page CTA ---
	midCta: ["Lease and tenancy matters, handled with care.", "Get in touch when you're ready."],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "lease or tenancy matter", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. Whether the matter is reviewing a proposed lease, drafting a new tenancy agreement, advising on rights during an existing tenancy, or a Residential Tenancies Board dispute, we'll explain how the relevant law applies and the practical options for proceeding.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "landlord and tenant", em: true },
			{ text: " advice in Kilkenny" },
		],
		paragraphs: [
			"Irish landlord and tenant law sits across two main statutory frameworks — the Residential Tenancies Acts 2004 to 2024 (covering residential lettings) and the Landlord and Tenant Acts 1967 to 2022 (covering commercial tenancies). Both frameworks have been amended significantly in recent years, with changes to notice periods, rent review rules, and the framework for tenancies of unlimited duration.",
			"On the residential side, we draft and review tenancy agreements, advise on the Rent Pressure Zone rules and rent review procedure, and act for landlords and tenants in proceedings before the Residential Tenancies Board (RTB) — the statutory body that registers tenancies and adjudicates disputes.",
			"On the commercial side, we review and negotiate the substantive terms of business leases — the duration, the rent review mechanism, the break clauses, the repair and insurance allocation, the assignment and subletting provisions, and the statutory rights to renewal under the Landlord and Tenant (Amendment) Act 1980.",
			"Where a dispute arises, we advise on the route most appropriate to the matter — direct negotiation, mediation, RTB adjudication for residential tenancies, or court proceedings for commercial matters or where the RTB does not have jurisdiction. We act for clients through whichever route the matter follows.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Landlord & Tenant" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Landlord & Tenant",
		title: [
			{ text: "How " },
			{ text: "landlord and tenant law", em: true },
			{ text: " works in Ireland" },
		],
		intro:
			"Landlord and tenant law in Ireland sits across two main statutory frameworks — the Residential Tenancies Acts 2004 to 2024 (residential lettings) and the Landlord and Tenant Acts 1967 to 2022 (commercial tenancies). Knowing which framework applies, what the statute says about the rights and obligations of each side, and what the Residential Tenancies Board (RTB) procedure is for residential disputes makes the practical position clearer. The article below sets that framework out in plain English — first for landlords, then for tenants, with a separate section on commercial leases.",
		quote: {
			text: "Residential tenancies law in Ireland has been amended seven times since 2004 — most recently in 2024. Knowing which version of the statute applies to a tenancy, and which procedural steps the RTB requires, is the work of getting it right.",
			attribution: "Richard O'Shea, Solicitor",
			image: richardImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "A lease or tenancy agreement is a legally binding contract. The substantive terms — on rent, duration, permitted use, maintenance obligations, notice requirements, and termination — govern the relationship between the parties for the life of the tenancy. Where the agreement is ambiguous or omits important matters, the gaps are filled by the default rules in the relevant statute (the Residential Tenancies Acts 2004 to 2024 for residential, the Landlord and Tenant Acts 1967 to 2022 for commercial), which may not be what either party expected when they signed.",
			},
			{
				type: "paragraph" as const,
				text: "We act for both landlords and tenants. For landlords, we draft tenancy agreements that comply with the statutory framework, deal with the matters the statute leaves open, and reflect the specific letting arrangement. For tenants, we review proposed agreements and identify terms that conflict with the statutory protections available under the Residential Tenancies Acts. On commercial tenancy matters, we advise on the negotiable terms — break clauses, rent review mechanisms, repair obligations, the right to renew under the Landlord and Tenant (Amendment) Act 1980 — and on the long-term financial implications of each.",
			},
			{
				type: "heading" as const,
				text: "Key issues for landlords in Ireland",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Rent Pressure Zones",
						text: "Most urban and suburban areas in Ireland are designated Rent Pressure Zones (RPZs) under the Residential Tenancies Acts. In an RPZ, the rent that can be charged on a tenancy is capped — the precise calculation and review intervals are set by statute and have been amended several times in recent years (most recently by the Residential Tenancies (Amendment) Act 2024). We advise on whether an RPZ applies to a particular property and on what the current rules require.",
					},
					{
						label: "Terminating a tenancy",
						text: "A landlord can terminate a residential tenancy only on the specific grounds set out in the Residential Tenancies Acts — for example, the tenant being in breach, the property being sold, or the landlord requiring it for their own use. The required notice period scales with the length of the tenancy, with longer notice required for longer tenancies. The exact periods are set by statute and have been amended; the periods applicable in any specific case are confirmed at the time of termination. Errors in the notice procedure can render an otherwise valid termination unlawful.",
					},
					{
						label: "Rent arrears",
						text: "Where a tenant is in arrears, the landlord must follow the specific procedure under the Residential Tenancies Acts before the tenancy can be ended — including serving a warning notice and giving the tenant a 28-day period to remedy the breach. Failure to follow the procedure can result in the RTB finding against the landlord even where the underlying arrears are real.",
					},
					{
						label: "Registration with the RTB",
						text: "All landlords of residential tenancies are required by law to register the tenancy with the Residential Tenancies Board. The registration framework has changed under recent amendments and the precise registration cycle is set by statute. Failure to register can affect entitlement to claim tax relief on rental income and can result in financial penalties.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Key rights for tenants in Ireland",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Security of tenure",
						text: "After the first six months of a residential tenancy, a tenant acquires Part 4 protection under the Residential Tenancies Acts — meaning the tenancy can be ended only on specific grounds set out in the statute. For tenancies commencing on or after 11 June 2022, the Residential Tenancies (Amendment) Act 2021 introduced a tenancy of unlimited duration after the initial six months. For earlier tenancies, the Part 4 protections continue in cycles set by the legislation in force at the time the tenancy commenced. We advise tenants on which framework applies in their case.",
					},
					{
						label: "Written statement of terms",
						text: "Landlords are required by law to provide tenants with a written statement of the terms of the tenancy at the start of the tenancy. The statement must include the rent, the payment frequency, the duration, and other matters specified by statute. Where a tenant has not received one, we advise on the position.",
					},
					{
						label: "Deposit protection",
						text: "A landlord can deduct from a tenant's deposit only for unpaid rent or damage beyond normal wear and tear. A disputed deduction can be referred to the Residential Tenancies Board for adjudication. We advise tenants on whether a deduction is permissible and act for them in any RTB referral.",
					},
					{
						label: "Unlawful termination",
						text: "Where a tenant has been asked to leave without proper notice or without a valid statutory ground, the termination may be unlawful. The matter can be referred to the RTB. Where the RTB finds in favour of the tenant, it can direct the landlord to allow the tenant to return to the property or, where return is no longer practical, order damages.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Commercial leases",
			},
			{
				type: "paragraph" as const,
				text: "Commercial tenancies are governed by a different statutory framework — the Landlord and Tenant Acts 1967 to 2022 — and the rules differ significantly from those applying to residential tenancies. The Landlord and Tenant (Amendment) Act 1980 gives business tenants certain rights, including in some cases a right to a new tenancy at the end of the term. These statutory rights can be modified or, in some cases, contracted out of by agreement, and the substantive terms of commercial leases are generally heavily negotiated.",
			},
			{
				type: "paragraph" as const,
				text: "On a commercial lease review, we look at the key negotiable terms — the length of the term, the break clause provisions, the basis for rent review, the repair and insurance obligations, the permitted use of the premises, the conditions for assigning or subletting, and the application of the right to renew under the 1980 Act. The substance of these terms can have significant financial implications across the life of the lease.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"Lease and tenancy matters move through a defined sequence — review or drafting of the agreement, advice on rights and obligations during the tenancy, and dispute resolution where it arises. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Review of the agreement",
			description:
				"On a review (typically for a tenant or for a commercial-lease assignee), we read the agreement in full, identify terms that conflict with statute or that are unusually onerous, and advise the client on what to negotiate or seek clarification on before signing.",
		},
		{
			title: "Drafting and negotiation",
			description:
				"Where we are drafting the agreement (typically for a landlord), we prepare a clear, statute-compliant document tailored to the property and the letting arrangement. We negotiate amendments with the other side's solicitor where required.",
		},
		{
			title: "Advice during the tenancy",
			description:
				"We advise landlords and tenants on rights and obligations as they arise during the tenancy — notice procedures, rent review under the relevant statute, repair allocations, deposit deductions, and other practical questions — so that issues can be addressed properly under the statute rather than in a dispute.",
		},
		{
			title: "Dispute resolution",
			description:
				"Where a dispute arises, we advise on the most appropriate route given the matter — direct negotiation, RTB mediation or adjudication for residential matters, or court proceedings for commercial matters or where the RTB does not have jurisdiction. We act for the client through whichever route the matter follows.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Does a residential tenancy agreement have to be in writing in Ireland?",
			answer:
				"There is no strict legal requirement for a residential tenancy itself to be in a written lease, but the Residential Tenancies Acts require the landlord to provide the tenant with a written statement of the key terms of the tenancy at the start of the tenancy. A written tenancy agreement is strongly advisable in any event — it sets out the terms agreed between the parties and significantly reduces the scope for disputes about what was agreed.",
		},
		{
			question: "How much notice must a landlord give to end a residential tenancy?",
			answer:
				"Under the Residential Tenancies Acts, the required notice period scales with the length of the tenancy — longer notice is required for longer tenancies. The specific periods are set by statute and have been amended several times in recent years, so the period applicable in any specific case is confirmed against the current legislation at the time the notice is being served. The landlord must also have a valid legal ground for the termination, and the notice itself must comply with the formal requirements of the Acts.",
		},
		{
			question: "Can a landlord increase the rent at any time?",
			answer:
				"No. Rent reviews are regulated by the Residential Tenancies Acts. In Rent Pressure Zones (which cover most urban areas), the amount and frequency of rent reviews are capped — the precise calculation has been amended several times and the rules applicable in any specific case are confirmed at the time of review. Outside RPZs, different rules apply but the landlord must still follow the statutory rent-review procedure. We advise both landlords and tenants on whether a proposed rent change is compliant.",
		},
		{
			question: "What can a tenant do if a landlord refuses to return their deposit?",
			answer:
				"Where a landlord is withholding a deposit and the tenant believes the deduction is not justified, the dispute can be referred to the Residential Tenancies Board. The RTB operates an online dispute resolution service and can direct the return of a deposit where it finds in the tenant's favour. We advise tenants on whether a deduction is permissible and act for them in RTB proceedings.",
		},
		{
			question: "What is the Residential Tenancies Board?",
			answer:
				"The Residential Tenancies Board (RTB) is an independent statutory body that regulates the residential rental sector in Ireland under the Residential Tenancies Acts 2004 to 2024. It maintains the register of tenancies, operates a dispute resolution service for landlords and tenants, and can impose sanctions on landlords who breach the Acts. RTB dispute resolution is generally faster and less expensive than court proceedings.",
		},
		{
			question: "Is a solicitor recommended for a commercial lease review?",
			answer:
				"Yes. Commercial leases are detailed documents that can have significant financial implications across the life of the lease. Key terms — the rent review mechanism, the repair and insurance obligations, the break clause provisions, the assignment and subletting rights, and the application of the right to renew under the Landlord and Tenant (Amendment) Act 1980 — vary considerably from lease to lease and are usually negotiable. A solicitor's review identifies terms that may benefit from negotiation.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
