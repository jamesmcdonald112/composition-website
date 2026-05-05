import documentTextIcon from "../../assets/icons/documentTextIcon.svg?raw";
import image from "../../assets/images/new/envelope-with-wax-seal.webp";
import maryImage from "../../assets/team/maryFull.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const willsAndEstateAdministration = {
	// --- Identity ---
	title: "Wills & Estate Administration",
	slug: "wills-and-estate-administration",
	href: "/services/wills-and-estate-administration",
	icon: documentTextIcon,
	image,
	imageClass: "",
	description:
		"Wills, probate, and estate administration for clients in Kilkenny and the surrounding counties. We draft wills and act for executors and administrators in applications to the Probate Office and in the administration of the estate.",
	// --- SEO ---
	seo: {
		title: `Wills & Probate Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Wills and probate solicitors in Kilkenny. We advise on the drafting of wills and the administration of estates from grant of probate to final distribution.",
		canonicalPath: "/services/wills-and-estate-administration",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Wills & " },
			{ text: "Estate Administration", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"We advise on the making of wills and the administration of estates following bereavement — including applications for grants of probate or letters of administration to the Probate Office of the High Court.",
	},
	// --- Mid-page CTA ---
	midCta: ["Wills and probate, handled with care.", "Get in touch when you're ready."],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "wills or probate matter", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. Whether the matter is drafting or updating a will or administering an estate after a bereavement, we'll explain how the relevant law applies in the specific circumstances.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "wills and probate", em: true },
			{ text: " advice in Kilkenny" },
		],
		paragraphs: [
			"Wills, probate, and estate administration are governed by a defined body of Irish statute and procedure — primarily the Succession Act 1965 (intestacy, the legal right share, Section 117 applications) and the Capital Acquisitions Tax Consolidation Act 2003 (the tax position of inheritances). We advise clients on each of these areas.",
			"On the wills side of the practice, we draft wills that comply with the execution formalities under the Succession Act 1965, advise on the appointment of executors and guardians for minor children, and consider the Capital Acquisitions Tax position of the gifts and inheritances proposed.",
			"On the probate side, we act for executors and administrators in applications to the Probate Office of the High Court for grants of probate (where there is a will) or letters of administration (where there is not). We deal with the Probate Office, the Revenue Commissioners, and financial institutions on the client's behalf, and conduct the distribution of the estate in accordance with the will or the rules of intestacy.",
			"All wills, probate, and estate administration work at the firm is carried out by solicitors admitted to the Roll of Solicitors of Ireland and regulated by the Law Society of Ireland and the Legal Services Regulatory Authority. The firm has practised in Kilkenny continuously since 1979.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Wills & Probate" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Wills & Probate",
		title: [
			{ text: "How wills and " },
			{ text: "estate administration", em: true },
			{ text: " work in Ireland" },
		],
		intro:
			"Irish law on wills and estates sits across a defined body of statute — primarily the Succession Act 1965 (the rules on wills and intestacy) and the Capital Acquisitions Tax Consolidation Act 2003 (the tax position of inheritances). Knowing how a valid will is made, how an estate is administered after a bereavement, and how the tax rules apply makes the practical position clearer. The article below sets that framework out in plain English.",
		quote: {
			text: "A will is a precise legal document. The execution formalities under the Succession Act 1965 are strict — and a will that doesn't meet them is no will at all. The point of taking advice early is to make sure each clause does what it is meant to, and that the document will hold up when it has to.",
			attribution: "Mary Molloy, Principal Solicitor",
			image: maryImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "Where a person dies without a valid will, the estate is distributed under the intestacy rules of the Succession Act 1965 — a fixed statutory order of priority. The intestacy rules give the estate to the surviving spouse or civil partner and the children in fixed shares; an unmarried partner has no automatic entitlement, and a step-child who has not been legally adopted has no entitlement either. The intestacy rules apply equally regardless of what the deceased may have wished.",
			},
			{
				type: "paragraph" as const,
				text: "When drafting a will, we take the time to understand the testator's circumstances — family structure, the nature and value of the assets, and any specific concerns (such as providing for a child with additional needs, making provision for a partner outside of marriage, or structuring gifts to take account of the Capital Acquisitions Tax position). The aim is a will that is precisely drafted, properly executed, and clear in its instructions.",
			},
			{
				type: "heading" as const,
				text: "What a well-drafted will covers",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Who inherits",
						text: "A will sets out who receives the testator's assets and in what shares — whether that is a spouse or civil partner, children, siblings, other family members, friends, or a charity. Specific gifts (a particular item to a particular person) and a residuary gift (whatever remains after specific gifts and debts) can both be made.",
					},
					{
						label: "Appointment of executor",
						text: "The executor is the person responsible for administering the estate after death — gathering assets, paying debts, and distributing what remains. Choosing the right person and confirming they are willing to act is an important part of making a will.",
					},
					{
						label: "Guardianship of children",
						text: "Where the testator has children under 18, the will is the place to nominate who they wish to act as guardian if both parents were to die. Without a nomination, the matter is decided by the court.",
					},
					{
						label: "Trusts for young beneficiaries",
						text: "Where assets are being left to children or grandchildren, a testamentary trust can ensure the assets are managed by trustees until the beneficiary is old enough to receive them outright.",
					},
					{
						label: "Tax planning",
						text: "We consider the Capital Acquisitions Tax position of the proposed gifts and inheritances and advise on how to structure the estate plan in light of the relevant Group A, B, and C thresholds and any reliefs that apply (such as agricultural relief or business relief).",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Estate administration after bereavement",
			},
			{
				type: "paragraph" as const,
				text: "When a person dies, the estate generally cannot be distributed until a grant of probate (where there is a will) or a grant of letters of administration (where there is no will) has been obtained from the Probate Office of the High Court. The administration involves a number of steps — gathering information about the assets and liabilities, filing the relevant Revenue forms, lodging the application with the Probate Office, and distributing the estate in accordance with the will or the rules of intestacy.",
			},
			{
				type: "paragraph" as const,
				text: "We act for executors and administrators throughout this process. We deal with the Probate Office, the Revenue Commissioners, and financial institutions, keep beneficiaries informed of progress at appropriate stages, and conduct the distribution of the estate in the correct order under the will or the intestacy rules. Where a property is to be sold or transferred as part of the estate, we handle the conveyancing alongside the probate work.",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Succession Act rights",
						text: "A surviving spouse or civil partner has a legal right share of the estate that cannot be removed by the will: one half of the estate where the deceased left no children, and one third where there are. Children who feel they have not been adequately provided for can apply to court under Section 117 of the Succession Act 1965 for further provision out of the estate. We advise executors on these obligations and on how they apply in the specific circumstances of the estate.",
					},
					{
						label: "Capital Acquisitions Tax",
						text: "Inheritances above certain thresholds are subject to Capital Acquisitions Tax (CAT). The tax-free threshold depends on the relationship between the deceased and the beneficiary — Group A applies to children, Group B to other close relatives, and Group C to all others. Both the rate and the thresholds are set by Finance Act and updated periodically, so the figures applying in any specific case are confirmed at the time the inheritance is taxable. Reliefs such as agricultural relief and business relief may also apply. We advise on the CAT position of the estate and of each beneficiary and ensure the correct returns are filed with Revenue.",
					},
					{
						label: "Insolvent estates",
						text: "Where the deceased's debts exceed their assets, the estate is insolvent. Debts must then be paid in a specific statutory order of priority before any distribution to beneficiaries. We advise executors on managing this process correctly and on protecting themselves from personal liability for misapplied funds.",
					},
					{
						label: "Contentious estates",
						text: "Where disputes arise between beneficiaries, or where the validity of the will is challenged (on the grounds of testamentary capacity, undue influence, or improper execution), we advise on the options available and act for clients in proceedings before the courts.",
					},
				],
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"Wills and estate administration each move through a defined sequence — initial consultation and instructions, drafting or application, review and execution, and the conduct of the matter through to its conclusion. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Initial consultation",
			description:
				"We meet with the client to understand the family situation, the assets, and any specific instructions. For a will, we explain the execution formalities and the practical considerations; for estate administration, we identify what information is needed for the application to the Probate Office.",
		},
		{
			title: "Drafting or application",
			description:
				"For wills, we draft a will reflecting the instructions — including the appointment of executors, any trusts for younger beneficiaries, specific gifts, and the residuary estate, with the Capital Acquisitions Tax position considered. For estate administration, we prepare the Probate Office application and the relevant Revenue forms.",
		},
		{
			title: "Review and execution",
			description:
				"The client reviews the draft. For wills, the document is signed and witnessed in compliance with the strict execution formalities under the Succession Act 1965 — a will not properly executed is not valid. For grants of probate, the application is lodged with the Probate Office of the High Court.",
		},
		{
			title: "Administration and follow-up",
			description:
				"Where the matter is an estate administration, once the grant issues we proceed with the gathering of assets, the satisfaction of debts and Revenue obligations, and the distribution of the estate to beneficiaries in the correct order. We remain available afterwards if questions arise about the estate.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Is a solicitor required to make a will in Ireland?",
			answer:
				"There is no legal requirement to use a solicitor, but it is strongly advisable. Section 78 of the Succession Act 1965 sets out strict execution formalities — the will must be in writing, signed by the testator (or by another person in the testator's presence and at the testator's direction), and witnessed by two witnesses present at the same time. The witnesses must not be beneficiaries (or spouses or civil partners of beneficiaries), or any gift to them is void. A poorly worded or incorrectly executed will can be challenged or declared invalid, which can cause serious difficulties for the family. A solicitor ensures the will is precisely drafted, legally sound, and properly executed.",
		},
		{
			question: "What happens where a person dies without a will in Ireland?",
			answer:
				"Where a person dies without a valid will, they die intestate, and the estate is distributed under the intestacy rules of the Succession Act 1965. Under those rules, the estate goes to the surviving spouse or civil partner and the children in fixed statutory shares. An unmarried partner has no entitlement under the intestacy rules, regardless of how long the relationship lasted. Step-children who have not been legally adopted likewise have no entitlement. The intestacy rules can produce outcomes that bear little relation to what the deceased may have wished.",
		},
		{
			question: "How long does probate take in Ireland?",
			answer:
				"The timeline for obtaining a grant of probate depends on the complexity of the estate, the speed at which the required documentation can be gathered, and the current workload at the Probate Office. For a straightforward estate where the necessary information is readily available, the process commonly takes between four and six months from the date of instruction. More complex estates — those involving property, business interests, foreign assets, or disputes between beneficiaries — can take considerably longer.",
		},
		{
			question: "What is the legal right share of a surviving spouse or civil partner?",
			answer:
				"Under the Succession Act 1965, a surviving spouse or civil partner has a legal right share of the deceased's estate that cannot be removed by will. The legal right share is one half of the estate where the deceased left no children, and one third where the deceased left children. The surviving spouse or civil partner must elect to take the legal right share within six months of the grant of probate, or within one year of the deceased's death (whichever is later). We advise executors and beneficiaries on how the legal right share affects the administration of the estate.",
		},
		{
			question: "Can a will be challenged in Ireland?",
			answer:
				"Yes. A will can be challenged on a number of grounds, including that the testator lacked testamentary capacity at the time of making it, that the testator was subject to undue influence, or that the will was not properly executed under the formalities of the Succession Act 1965. Children who feel inadequately provided for can also make an application under Section 117 of the Succession Act for further provision out of the estate. Properly drafted wills, with contemporaneous evidence of the testator's capacity and the circumstances of execution, are harder to challenge successfully.",
		},
		{
			question: "What is Capital Acquisitions Tax and when does it apply?",
			answer:
				"Capital Acquisitions Tax (CAT) is the tax on gifts and inheritances in Ireland, governed by the Capital Acquisitions Tax Consolidation Act 2003. The tax applies to inheritances above the relevant tax-free threshold. The threshold depends on the relationship between the deceased (or donor) and the beneficiary — Group A applies to children, Group B to other close relatives such as siblings and nieces/nephews, and Group C to all others. Both the rate and the thresholds are set by Finance Act and are updated periodically, so the figures applying in any specific case are confirmed at the time the inheritance is taxable. Reliefs such as agricultural relief and business relief may also reduce the CAT position. We advise on the tax position of the estate and of each beneficiary.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
