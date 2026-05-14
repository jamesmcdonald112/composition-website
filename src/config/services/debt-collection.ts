import banknotesIcon from "../../assets/icons/banknotesIcon.svg?raw";
import image from "../../assets/images/new/calculator-and-finances.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const debtCollection = {
	// --- Identity ---
	title: "Debt Collection",
	slug: "debt-collection",
	href: "/services/debt-collection",
	icon: banknotesIcon,
	image,
	imageClass: "object-[80%_60%]",
	description:
		"Debt recovery for businesses and individuals in Kilkenny and the surrounding counties. We advise on the appropriate route for the matter — solicitor's letters of demand, negotiated settlement, court proceedings, and enforcement of any judgment obtained.",
	// --- SEO ---
	seo: {
		title: `Debt Recovery Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Debt recovery solicitors in Kilkenny. We advise businesses and individuals on outstanding debts — assessing the matter, drafting letters of demand, and acting on the route the client wishes to take.",
		canonicalPath: "/services/debt-collection",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Debt " },
			{ text: "Recovery", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"Debt recovery in Ireland follows a defined sequence — a formal solicitor's letter, court proceedings where the debt remains unpaid and the client wishes to proceed, and enforcement of any judgment obtained. We advise businesses and individuals in Kilkenny on each stage of that process and on what is proportionate given the size of the debt.",
	},
	// --- Mid-page CTA ---
	midCta: ["Debt recovery, handled with care.", "Talk to us about the matter."],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "debt recovery matter", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. We'll assess the debt against the relevant court jurisdictions and the limitation period, and advise on the most appropriate next step — which may be a letter of demand, a negotiated approach, or another route depending on the circumstances.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "debt recovery advice", em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Debt recovery in Ireland is governed by two main bodies of law — the general law of contract under which most debts arise, and the procedural rules of the courts in which judgment is sought (the District Court, Circuit Court, and High Court, depending on the size of the debt). We advise businesses and individuals in Kilkenny on each stage of the recovery process.",
			"A formal solicitor's letter of demand is usually the first step. The letter sets out the amount owed, the basis on which it is owed, and the consequences of non-payment — including that legal proceedings will follow if the debt is not discharged within a specified period. The letter is the formal pre-action notice on which any subsequent court proceedings rest.",
			"Where the debt is not paid following the letter, the next step depends on the circumstances — the size of the debt, whether it is disputed, and the client's instructions on whether to proceed. We advise on the appropriate court for the claim, the procedural route within that court, and the cost implications of each.",
			"Where judgment is obtained, a range of enforcement options applies — registration of a judgment mortgage, sheriff enforcement, instalment orders, examination of the debtor, or insolvency proceedings. We advise on which routes are likely to be effective given the debtor's financial position and the size of the debt.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: String(firm.established) },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Debt Recovery" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Debt Recovery",
		title: [
			{ text: "How " },
			{ text: "debt recovery", em: true },
			{ text: " works in Ireland" },
		],
		intro:
			"Debt recovery in Ireland follows a defined legal process — a formal solicitor's letter of demand, court proceedings in the appropriate court if the debt remains unpaid, and enforcement of any judgment obtained. Knowing how the process is structured, what the court jurisdictions are, and what enforcement options apply makes the route from unpaid debt to recovery clearer. The article below sets that framework out in plain English.",
		quote: {
			text: "No two debtor situations are the same. Some debts are recoverable in days, some take years, and some cannot be recovered at all once the debtor's circumstances are properly understood. Knowing which is which early is what saves time and money.",
			solicitor: solicitors.richard,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "A solicitor's letter of demand serves a specific legal function. It formally puts the debtor on notice of the debt, the basis on which it is owed, and the consequences of non-payment. It establishes a written record that legal proceedings will follow if the debt is not discharged within the period specified — and that record is what subsequent court applications rest on. Whether the letter prompts payment, prompts a dispute, or is ignored is a separate question; the legal value of the formal notice is the same in each case.",
			},
			{
				type: "paragraph" as const,
				text: "Where the client wishes to proceed beyond the demand letter, we advise on the appropriate court for the claim. The choice of court depends on the size of the debt: the District Court handles smaller claims, the Circuit Court mid-range claims, and the High Court the largest. The specific monetary thresholds are set by statute and updated periodically. For undisputed debts, judgment can often be sought through a summary procedure — a faster procedural route that does not require a contested hearing. Once judgment is obtained, the enforcement options described below become available.",
			},
			{
				type: "heading" as const,
				text: "Enforcement options after judgment",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Judgment mortgage",
						text: "A court judgment can be registered as a mortgage against any property owned by the debtor in Ireland. This secures the debt against the property: the debtor cannot sell or refinance without discharging what is owed. Where the debtor owns property, this is one of the most effective enforcement tools.",
					},
					{
						label: "Sheriff enforcement",
						text: "A County Registrar or Sheriff can be instructed to seize goods belonging to the debtor up to the value of the judgment. This is a practical option where the debtor has moveable assets but is unwilling to pay voluntarily.",
					},
					{
						label: "Instalment orders",
						text: "Where a debtor has limited means, the court can order payment by instalments over a period of time. Failure to comply with an instalment order is a serious matter and can lead to further enforcement action.",
					},
					{
						label: "Examination of the debtor",
						text: "The court can compel a debtor to attend and be examined about their financial circumstances and assets. This is useful where the debtor's assets are not known and we need to identify what enforcement options are available.",
					},
					{
						label: "Insolvency proceedings",
						text: "Where a debtor — whether an individual or a company — is genuinely unable to pay, we advise on whether bankruptcy proceedings (for individuals) or winding-up proceedings (for companies) are appropriate, and what they are likely to mean for the realistic prospect of recovery.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Commercial debt recovery",
			},
			{
				type: "paragraph" as const,
				text: "For businesses pursuing commercial debts, the European Communities (Late Payment in Commercial Transactions) Regulations 2012 (which superseded the 2002 Regulations and which implement the EU Late Payment Directive 2011/7/EU) give creditors the right to claim statutory interest on overdue invoices in business-to-business transactions, without needing a specific contractual provision. The creditor is also entitled to claim a fixed sum towards recovery costs. We advise businesses on these entitlements as part of the recovery process.",
			},
			{
				type: "paragraph" as const,
				text: "The cost of legal action is always proportionate to the amount of the debt. For smaller debts, a demand letter and a District Court application is often the more cost-effective route. For larger or more complex commercial debts — particularly those involving disputes about liability or quantum — we advise on the most appropriate route to take given the size of the debt, the nature of the dispute, and the debtor's financial position.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"Debt recovery moves through a defined sequence in Ireland — formal demand, court proceedings where the client wishes to proceed, judgment, and enforcement. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Letter of demand",
			description:
				"We issue a formal solicitor's letter to the debtor setting out the amount owed, the basis on which it is owed, and a clear deadline for payment. The letter establishes the formal written record on which any subsequent court proceedings rest.",
		},
		{
			title: "Court proceedings",
			description:
				"Where the client wishes to proceed to court — typically because the debt has not been paid following the letter, or for other reasons — we issue proceedings in the appropriate court based on the size of the debt. For undisputed debts, judgment can often be sought through a summary procedure that does not require a contested hearing.",
		},
		{
			title: "Judgment",
			description:
				"Where judgment is obtained, it is a formal court order confirming that the debt is owed. Judgment opens up the enforcement options described in the article above and can be registered as a judgment mortgage against any property the debtor owns in Ireland.",
		},
		{
			title: "Enforcement",
			description:
				"We advise on the most appropriate enforcement route given the debtor's circumstances — judgment mortgage registration, sheriff enforcement, instalment orders, examination of the debtor, or insolvency proceedings — and act on the route the client instructs us to pursue.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "How much does it cost to pursue a debt through the courts in Ireland?",
			answer:
				"Court fees vary depending on the size of the debt and the court involved. We discuss the likely costs at the outset, including the basis on which we charge and the cost-proportionality issues that apply for smaller debts. Where judgment is obtained in the creditor's favour, the court may order the debtor to pay the creditor's legal costs.",
		},
		{
			question: "What if the debtor says they cannot pay?",
			answer:
				"Even where a debtor claims to have no money, the position is worth assessing. Assets may exist that are not immediately apparent — property, vehicles, or business interests. An instalment arrangement may be achievable. Where a debtor is genuinely insolvent, we advise on whether bankruptcy proceedings (for individuals) or winding-up proceedings (for companies) are appropriate, and on what they are likely to mean for the prospect of recovery.",
		},
		{
			question: "Is there a time limit for pursuing a debt in Ireland?",
			answer:
				"Yes. Under the Statute of Limitations 1957, the general limitation period for contract debts in Ireland is six years from the date the debt became due. After that period, the debt may become statute-barred and unenforceable through the courts. The clock can be reset in certain circumstances — for example, by a written acknowledgement of the debt by the debtor, or by part-payment.",
		},
		{
			question: "Can interest be claimed on an unpaid debt?",
			answer:
				"It depends on the contract and the type of debt. Where the contract includes a term providing for interest on late payments, that interest is recoverable. For business-to-business debts in particular, the European Communities (Late Payment in Commercial Transactions) Regulations 2012 entitle the creditor to statutory interest without needing a specific contractual provision, together with a fixed sum towards recovery costs. We advise on what interest is recoverable in the specific circumstances.",
		},
		{
			question: "What is the difference between the District, Circuit, and High Court for debt claims?",
			answer:
				"In Ireland, the court in which a debt claim is brought depends on the amount owed: the District Court handles smaller claims, the Circuit Court handles mid-range claims, and the High Court handles the largest. The specific monetary thresholds are set by statute and updated periodically. The choice of court affects the court fees, the speed of the process, and the procedural rules that apply. We advise on the most appropriate court for the claim.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
