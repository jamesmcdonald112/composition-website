import shieldExclamationIcon from "../../assets/icons/shieldExclamationIcon.svg?raw";
import image from "../../assets/images/new/lady-justice-and-gavel-on-desk.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const personalInjuryLitigation = {
	// --- Identity ---
	title: "Personal Injury / Litigation",
	slug: "personal-injury-litigation",
	href: "/services/personal-injury-litigation",
	icon: shieldExclamationIcon,
	image,
	imageClass: "object-[right_25%]",
	description:
		"We advise on personal injury matters — including workplace accidents, public liability, and road traffic injuries — and represent clients in civil litigation. We assess liability, manage the PIAB application, and act for clients in court where required.",
	// --- SEO ---
	seo: {
		title: `Personal Injury Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Personal injury solicitors in Kilkenny. We advise on workplace accidents, public liability claims, and road traffic injuries — including the conduct of PIAB applications and civil litigation in the Irish courts.",
		canonicalPath: "/services/personal-injury-litigation",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Personal Injury & " },
			{ text: "Litigation", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"We advise on personal injury and civil litigation matters in Kilkenny. We assess each case honestly, explain the process clearly, and act for our clients at every stage — from the initial assessment of liability through to the conduct of the PIAB application and court proceedings where they arise.",
	},
	// --- Mid-page CTA ---
	midCta: ["Honest advice on personal injury and civil disputes.", "Talk to us about your matter."],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "Get an " },
			{ text: "honest assessment", em: true },
			{ text: " of your claim" },
		],
		description:
			"Get in touch with us in Kilkenny. We'll assess liability and the available evidence, explain the PIAB process and the personal injury time limits, and set out the practical options from there.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "personal injury advice", em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Personal injury law in Ireland gives those harmed by another person's negligence a route to seek compensation through the Personal Injuries Assessment Board (PIAB) and, where necessary, the courts. The route is the same across most accident types — workplace, public liability, and road traffic — but the procedural rules and the evidence required vary. We advise clients in Kilkenny and the surrounding counties across the full range of personal injury matters.",
			"A claim's value is assessed against the Personal Injuries Guidelines published by the Judicial Council in 2021, which set out appropriate damages ranges for general damages by injury type. We assess each claim against those ranges, gather the medical evidence and documentation of any financial losses, and explain to the client what a reasonable outcome looks like under the Guidelines.",
			"Where a claim is strong, we say so. Where the merits do not justify proceeding, we say that too — clearly, and at the earliest stage we can. The aim is for the client to know where the claim stands before the time and cost of formal steps is committed.",
			"We advise on personal injury matters across the four main areas — workplace accidents, public liability, road traffic accidents, and civil litigation arising from injury or other civil wrongs. The same care and thoroughness applies to each, regardless of the size of the claim.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: String(firm.established) },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Litigation" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Personal Injury",
		title: [
			{ text: "How a " },
			{ text: "personal injury claim", em: true },
			{ text: " works in Ireland" },
		],
		intro:
			"Personal injury law in Ireland gives those harmed through the negligence of another person or organisation a route to seek compensation through the Personal Injuries Assessment Board (PIAB) and, where necessary, the courts. Knowing what is recoverable, how the PIAB process works, and what the procedural rules require at each stage makes the route from accident to resolution clearer. The article below sets that framework out in plain English.",
		quote: {
			text: "Suffering an injury can have a significant impact on every aspect of a persons life. Our role is to asses each case carefully and honestly, advising clients on the avenues available to them where they have suffered injury as a result of a third parties negligence.",
			solicitor: solicitors.richard,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "What you can claim for",
			},
			{
				type: "paragraph" as const,
				text: "A personal injury claim in Ireland covers two main categories of loss. General damages compensate for the pain, suffering, and loss of enjoyment of life caused by the injuries. Special damages cover the financial losses arising from the accident — medical expenses, physiotherapy and rehabilitation costs, loss of earnings during recovery, and travel costs to and from medical appointments. In cases of serious injury, future losses — including the cost of future medical treatment and the long-term impact on earning capacity — are also recoverable.",
			},
			{
				type: "paragraph" as const,
				text: "The level of general damages is guided by the Personal Injuries Guidelines published by the Judicial Council in 2021, which replaced the PIAB Book of Quantum. The Guidelines set out appropriate damages ranges for common injury types, and both PIAB and the courts use them as the starting point when assessing claims. We assess each claim against the Guidelines and explain how the injuries are likely to be valued.",
			},
			{
				type: "heading" as const,
				text: "The Personal Injuries Assessment Board (PIAB)",
			},
			{
				type: "paragraph" as const,
				text: "In Ireland, most personal injury claims must go through the Personal Injuries Assessment Board (PIAB) before court proceedings can be issued. PIAB is an independent statutory body that assesses personal injury claims based on the medical evidence and the financial losses submitted. PIAB may make an assessment that either side can accept or reject; in some cases PIAB declines to make an assessment at all. Where PIAB issues an authorisation, the claim can then proceed to court if the parties choose.",
			},
			{
				type: "paragraph" as const,
				text: "We submit PIAB applications on the client's behalf — gathering the medical evidence, completing the application, and responding to correspondence — and review any settlement offer made at any stage of the process. Where an offer reflects the value of the claim under the Personal Injuries Guidelines, we say so. Where it does not, we explain why.",
			},
			{
				type: "heading" as const,
				text: "Types of personal injury claims we handle",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Workplace accidents",
						text: "Employers in Ireland have a statutory duty to provide a safe place and system of work. We advise where workplace injuries arise from inadequate training, faulty equipment, unsafe premises, or a failure to follow health and safety regulations. We can also advise on any related employment law matter that arises from the accident.",
					},
					{
						label: "Public liability",
						text: "Occupiers of premises — shops, restaurants, public buildings, and private properties — owe a duty of care to visitors under the Occupiers' Liability Act 1995. We advise on public liability claims where injuries on premises arise from a hazard the occupier failed to address.",
					},
					{
						label: "Road traffic accidents",
						text: "Road traffic accident matters are subject to specific procedural rules and must go through PIAB before court proceedings can issue. We advise on liability, the PIAB application, dealings with insurers, and the conduct of the claim through to settlement or court if required. See our road traffic accidents page for fuller detail on the procedural rules and the MIBI scheme for uninsured drivers.",
					},
					{
						label: "Civil litigation",
						text: "Where a dispute cannot be resolved by agreement — whether it involves a breach of contract, a property dispute, or another civil wrong — court proceedings may be necessary. We advise on the merits of bringing or defending civil proceedings and act for clients through the litigation, including at trial.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Time limits for personal injury claims",
			},
			{
				type: "paragraph" as const,
				text: "Personal injury claims in Ireland are subject to a two-year time limit under the Statute of Limitations (Amendment) Act 1991. The clock runs from the date of the accident, or from the date the injured person first became aware of the injury (the 'date of knowledge'), whichever is later. Where the injured person was a minor at the time of the accident, time does not begin to run until they turn 18. Missing the time limit will generally end a claim regardless of its merits.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"A personal injury claim moves through a defined legal process in Ireland — assessment, evidence-gathering, PIAB application, and either settlement or court proceedings. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Initial assessment",
			description:
				"We review the circumstances of the accident, advise on the strength of the claim, and explain the process and the likely timeline. Where the merits do not justify proceeding, we say so at this stage.",
		},
		{
			title: "Medical evidence",
			description:
				"We advise on the medical evidence needed to support the claim and assist with gathering reports from the client's treating doctors and, where appropriate, from independent medical experts.",
		},
		{
			title: "PIAB application",
			description:
				"We submit the application to the Personal Injuries Assessment Board, manage all correspondence with PIAB and the respondent, and advise on any assessment made.",
		},
		{
			title: "Negotiation and settlement",
			description:
				"Where the claim moves into settlement discussions, we engage with the other party's insurers or solicitors. Any offer made is reviewed against the medical evidence, the documented financial losses, and the Personal Injuries Guidelines, and the client is advised on whether and how it reflects the value of the claim.",
		},
		{
			title: "Court proceedings",
			description:
				"Where the client wishes to proceed to court — either because settlement discussions have not produced a workable agreement, or for other reasons — we issue court proceedings on the client's instructions and act for the client through the litigation. We prepare the documentation and ensure the client is supported at each hearing.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is the time limit for a personal injury claim in Ireland?",
			answer:
				"The general time limit is two years from the date of the accident, or from the date the injured person first became aware of the injury (the 'date of knowledge'), whichever is later. Where the injured person was a minor at the time of the accident, time does not begin to run until they turn 18. The two-year limit is strictly applied — missing it will generally prevent a claim from being brought regardless of its merits.",
		},
		{
			question: "Is PIAB required before issuing court proceedings?",
			answer:
				"In most personal injury cases, yes. The Personal Injuries Assessment Board must be given the opportunity to assess a claim before court proceedings can be issued. PIAB may make an assessment that either side can accept or reject; in some cases PIAB declines to make an assessment at all. Where PIAB issues an authorisation, the claim can then proceed to court if the parties choose.",
		},
		{
			question: "How is the level of compensation determined?",
			answer:
				"The level of compensation depends on the nature and severity of the injuries, their impact on daily life and the ability to work, and the financial losses arising from the accident. The Personal Injuries Guidelines published by the Judicial Council in 2021 are the starting point for general damages — both PIAB and the courts use them when assessing claims. We assess each claim against the Guidelines and the documented losses, and give clients a realistic estimate based on the specific circumstances.",
		},
		{
			question: "What happens where a claimant was partly at fault?",
			answer:
				"A claim can still proceed where the claimant was partly responsible for the accident. Under Irish law, the principle of contributory negligence allows the courts to reduce a damages award by the percentage attributed to the claimant's own fault. For example, where a claimant is found to be 20% at fault, the award is reduced by 20%. We advise on how contributory negligence is likely to apply in the specific circumstances of a case.",
		},
		{
			question: "How are the costs of a personal injury claim handled?",
			answer:
				"We discuss our fees with each client at the outset, including the basis on which we charge and the way costs are likely to be handled in the matter. In personal injury proceedings, costs are a legitimate element of a claim and can be recoverable from the other side in many circumstances where proceedings are successful. Section 149 of the Legal Services Regulation Act 2015 — which is also reflected in the cost warning at the bottom of this page — sets out that an unsuccessful claimant may be liable for the other party's legal costs.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
