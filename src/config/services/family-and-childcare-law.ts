import homeIcon from "../../assets/icons/homeIcon.svg?raw";
import image from "../../assets/images/new/hands-holding-family-figurines.webp";
import nicholasImage from "../../assets/team/nicholas.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const familyAndChildcareLaw = {
	// --- Identity ---
	title: "Family & Childcare Law",
	slug: "family-and-childcare-law",
	href: "/services/family-and-childcare-law",
	icon: homeIcon,
	image,
	imageClass: "",
	description:
		"Family law advice for clients in Kilkenny and the surrounding counties. We advise on separation, divorce, guardianship, custody, access, maintenance, the family home, pensions, and childcare proceedings brought by Tusla.",
	// --- SEO ---
	seo: {
		title: `Family Law Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Family law solicitors in Kilkenny. We advise on judicial separation, divorce, guardianship, custody, access, the family home, pensions, maintenance, and Tusla childcare proceedings.",
		canonicalPath: "/services/family-and-childcare-law",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Family & " },
			{ text: "Childcare Law", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"Family law in Ireland covers separation, divorce, the rights of cohabitants, guardianship and access to children, maintenance, pensions, the family home, and childcare proceedings brought by Tusla. We advise clients on each of these areas, with the welfare of children as the legal touchstone where children are involved.",
	},
	// --- Mid-page CTA ---
	midCta: ["Family law matters, handled with care.", "Get in touch when you're ready."],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "family law matter", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. We'll talk through the situation in confidence and explain how the relevant areas of family law apply to it.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "family law advice", em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Family law in Ireland sits across a defined body of statutes — including the Family Law (Divorce) Act 1996, the Judicial Separation and Family Law Reform Act 1989, the Guardianship of Infants Act 1964, the Family Home Protection Act 1976, and the Civil Partnership and Certain Rights and Obligations of Cohabitants Act 2010. Most family proceedings are heard in the Circuit Family Court, with childcare proceedings heard in the District Court. We advise clients on each of these areas.",
			"There is more than one route through a family law matter. Some are resolved by agreement between the parties — sometimes through direct negotiation, sometimes through mediation — and made into a consent order by the court. Others require contested proceedings. We advise on which route fits the client's circumstances and act for clients through whichever they choose.",
			"Our work covers the full range of family law matters: judicial separation and divorce, the financial issues that arise from them (the family home, maintenance, and pensions in particular), guardianship and access in respect of children, the rights of cohabiting couples under the 2010 Act, and Tusla childcare proceedings. The legal and procedural rules differ by area; the underlying approach — clarity about the law, careful preparation, and respect for the people involved — does not.",
			"Where children are involved, the welfare of the child is the paramount consideration in any decision the court makes. The Guardianship of Infants Act 1964 sets out the factors the court takes into account, including the child's age, wishes (where they are old enough to express them), and relationships with each parent. We advise on how those statutory factors typically apply in practice.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Family Law" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Family Law",
		title: [
			{ text: "How " },
			{ text: "family law", em: true },
			{ text: " works in Ireland" },
		],
		intro:
			"Family law in Ireland covers a defined set of areas — separation and divorce, the financial issues that arise from a relationship breakdown, guardianship and access to children, the rights of cohabitants, and childcare proceedings brought by Tusla. Knowing which area applies, what the statute says, and what the procedural route looks like makes the path through a family matter clearer. The article below sets that framework out in plain English.",
		quote: {
			text: "Family law sits across a lot of separate areas — separation, divorce, children, finances, the family home, pensions. The first job in any matter is usually to work out which areas are actually in play, and which statute governs each one.",
			attribution: "Nicholas O'Shea, Solicitor",
			image: nicholasImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "A relationship breakdown typically involves a range of interconnected issues — the family home, maintenance, guardianship and access to children, pensions, and other financial assets. In Ireland, these can be resolved by agreement between the parties and made into a consent order by the court, or determined by the court following contested proceedings. Where the matter falls outside the marriage context, the rights of the parties are governed by the Civil Partnership and Certain Rights and Obligations of Cohabitants Act 2010.",
			},
			{
				type: "paragraph" as const,
				text: "Where children are involved, the welfare of the child is the paramount consideration in any decision the court makes — that is the test set by the Guardianship of Infants Act 1964. We advise on the legal framework for guardianship, custody, and access, on how the welfare-of-the-child test is applied in practice, and on the procedural route — by agreement or by application — that the client wishes to take.",
			},
			{
				type: "heading" as const,
				text: "Separation, divorce, and financial matters",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Judicial separation",
						text: "A judicial separation legally recognises that a couple is living apart and resolves financial and parenting arrangements without ending the marriage. There is no minimum period of separation required. It is an option for couples who do not yet meet the criteria for divorce, or who have religious or personal reasons for remaining married.",
					},
					{
						label: "Divorce",
						text: "In Ireland, the grounds for a divorce decree are set by the Family Law (Divorce) Act 1996 as amended. The parties must have lived apart for at least two of the previous three years (reduced from four of the previous five years by the Family Law Act 2019, following the 38th Amendment of the Constitution earlier that year). The court must be satisfied that proper provision has been made for all dependent family members before granting the decree. We advise on what 'proper provision' means in the specific circumstances of the matter.",
					},
					{
						label: "Cohabitation",
						text: "Cohabiting couples who qualify as 'qualified cohabitants' under the Civil Partnership and Certain Rights and Obligations of Cohabitants Act 2010 may apply to the court for financial relief following the breakdown of a long-term relationship. The remedies available are more limited than those for married couples — and the qualifying threshold for a 'qualified cohabitant' (length of relationship, dependency, and other factors) is itself a matter of legal assessment.",
					},
					{
						label: "The family home",
						text: "The family home is often the most significant asset in a separation. The Family Home Protection Act 1976 prevents one spouse from disposing of the family home without the written consent of the other. We advise on the available options — sale and division of proceeds, one party buying out the other, or a deferred transfer where children remain in the home — and on the financial and tax implications of each.",
					},
					{
						label: "Maintenance",
						text: "Either spouse can apply for maintenance from the other, and either parent can apply for maintenance for a dependent child. Maintenance can be agreed voluntarily or ordered by the court under the Family Law (Maintenance of Spouses and Children) Act 1976. We advise on appropriate levels of maintenance and on the steps available to enforce a maintenance order if payments are not being made.",
					},
					{
						label: "Pension adjustment orders",
						text: "Pensions are frequently among the most valuable assets in a family law matter and are often underestimated. A pension adjustment order — provided for under the Family Law Act 1995 and the Family Law (Divorce) Act 1996 — can direct that part of one party's pension entitlement be paid to the other on retirement or on the death of the pension holder. We advise on identifying and valuing pension assets and on seeking the appropriate order.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Guardianship, custody, and access",
			},
			{
				type: "paragraph" as const,
				text: "Guardianship, custody, and access are three distinct concepts that are often confused. Guardianship is the right and duty to make decisions about a child's upbringing — it is automatically held by a married couple and by the mother of a child born outside marriage. An unmarried father can acquire guardianship by agreement with the mother (formalised by statutory declaration) or by court order. Custody refers to where a child lives and who has day-to-day care of them. Access refers to the right of the non-custodial parent to spend time with the child.",
			},
			{
				type: "paragraph" as const,
				text: "Where parents cannot agree on these arrangements, the court makes orders based on the welfare of the child — the paramount consideration under the Guardianship of Infants Act 1964. The Act sets out the statutory factors the court takes into account, including the child's age, wishes (where they are old enough to express them), and relationship with each parent. We advise on how those factors apply in the specific circumstances of the matter and on the procedural route to the court.",
			},
			{
				type: "heading" as const,
				text: "Childcare proceedings",
			},
			{
				type: "paragraph" as const,
				text: "Childcare proceedings are brought by Tusla, the Child and Family Agency, under the Child Care Act 1991, where Tusla has concerns about the safety or welfare of a child. These are serious proceedings: the orders available include supervision orders, interim care orders, and full care orders, and a care order can result in a child being placed in the care of Tusla. The proceedings are heard in the District Court (with appeals to the Circuit Court), and they have their own procedural rules and short timelines. We act for parents and other parties in childcare proceedings, including at interim hearings.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"Family law matters move through a defined sequence — initial advice on the area of law that applies, negotiation or mediation where appropriate, court proceedings or consent orders, and any follow-up that arises. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Initial consultation",
			description:
				"We listen to the situation and explain which areas of family law apply — separation, divorce, guardianship, the family home, pensions, or another area — and what the procedural options are. We give a clear, honest assessment of where the matter stands legally and what the realistic next steps look like.",
		},
		{
			title: "Negotiation, mediation, or consent order",
			description:
				"Where the parties are willing to engage and there is a basis for agreement, we work towards resolving the financial and parenting issues by negotiation between solicitors or by mediation. Any agreement reached can be formalised as a consent order — a court order made by consent, with the same legal force as one made after a contested hearing.",
		},
		{
			title: "Court proceedings",
			description:
				"Where the client wishes to proceed by way of contested court proceedings — typically because agreement has not been reached, or because the matter is urgent (for example, an application for an interim order in childcare or guardianship proceedings) — we issue the necessary applications, gather evidence, and act for the client at all hearings, including in the Circuit Family Court or High Court.",
		},
		{
			title: "Orders and follow-up",
			description:
				"Once a court order or consent order is in place, we explain its terms and advise on compliance. We remain available to assist if questions arise about implementation, or if circumstances change — for example, where a maintenance variation, a guardianship application, or a contempt application becomes necessary later.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is the difference between judicial separation and divorce in Ireland?",
			answer:
				"A judicial separation legally recognises that a couple is living apart and resolves issues such as maintenance, property, and arrangements for children, but the parties remain legally married and cannot remarry. A divorce ends the marriage entirely. To apply for divorce in Ireland, the parties must have lived apart for at least two of the previous three years (the rule was reduced from four of the previous five years by the Family Law Act 2019, following the 38th Amendment of the Constitution earlier that year). Both routes resolve the same financial and parenting issues — the key difference is whether the marriage itself ends.",
		},
		{
			question: "Does every separation or divorce involve a contested court hearing?",
			answer:
				"No. Many couples reach agreement through negotiation between their solicitors or through mediation, and that agreement is formalised as a consent order — a court order made by consent rather than after a contested hearing. A consent order has the same legal force as an order made after a contested hearing. Whether a contested hearing is required depends on the circumstances of the matter and on the willingness of the parties to engage with the alternatives.",
		},
		{
			question: "How are arrangements for children decided?",
			answer:
				"Where parents cannot agree, the court makes orders under the Guardianship of Infants Act 1964 based on what is in the welfare of the child — the paramount consideration in family law decisions about children. The Act sets out the statutory factors the court takes into account, including the child's age, the child's wishes (where the child is old enough to express them), the child's relationship with each parent, and the need for stability.",
		},
		{
			question: "What rights does an unmarried father have in Ireland?",
			answer:
				"An unmarried father does not automatically have guardianship rights in Ireland. He has the right to apply for guardianship, custody, or access. Guardianship can be acquired by agreement with the mother — formalised by a statutory declaration — or, where agreement is not possible, by application to the court. We advise unmarried fathers on the steps to take to secure their parental rights and act for them in any application required.",
		},
		{
			question: "Is legal aid available for family law matters?",
			answer:
				"Yes. Legal aid is available for family law matters through the Legal Aid Board, subject to a means test and a contribution. Waiting times at Legal Aid Board offices vary by region. Fees and the basis on which the firm charges are discussed at the initial consultation.",
		},
		{
			question: "What happens to the family home when a couple separates?",
			answer:
				"The family home is one of the most significant issues in any separation or divorce. The options typically include selling the property and dividing the proceeds, one party buying out the other's share, or a deferred transfer — for example, where the sale or buyout is postponed until the youngest child reaches a certain age. The Family Home Protection Act 1976 prevents one spouse from disposing of the family home without the written consent of the other. The right approach depends on the financial position of both parties, whether there is a mortgage, and any considerations relating to children. We advise on the available options and their tax implications.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
