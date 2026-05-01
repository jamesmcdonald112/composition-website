import shieldExclamationIcon from "../../assets/icons/shieldExclamationIcon.svg?raw";
import image from "../../assets/images/new/lady-justice-and-gavel-on-desk.webp";
import richardImage from "../../assets/team/richard.webp";
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
			"Where an injury has occurred or a civil dispute has arisen, early legal advice is essential. Get in touch with us in Kilkenny to discuss the matter and find out where things stand.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Straightforward advice on " },
			{ text: "personal injury claims", em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Personal injury claims can feel daunting if you have never been through one before. We explain how the process works in plain, straightforward terms and give you a realistic view of your claim from the very first meeting.",
			"We handle all aspects of your claim — gathering medical evidence, dealing with PIAB, negotiating with insurers, and, where necessary, issuing and pursuing court proceedings. You focus on your recovery; we take care of the legal side.",
			"We approach every case with honesty. If we do not believe a claim is strong enough to pursue, we will say so clearly rather than give you false hope. That approach means our clients always know where they stand.",
			"Our litigation team advises on all types of personal injury claims — workplace accidents, public liability, road traffic injuries, and general civil disputes. We bring the same care and thoroughness to every case, regardless of its size.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Litigation" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Personal Injury",
		title: [
			{ text: "Understanding your " },
			{ text: "right to compensation", em: true },
		],
		intro:
			"Personal injury law in Ireland gives those harmed through the negligence of another person or organisation a route to seek compensation through PIAB and, where necessary, the courts. Knowing what is recoverable, how the process works, and what to expect at each stage makes a real difference to how a matter progresses. The article below sets that process out in plain English.",
		quote: {
			text: "We always give clients an honest assessment from the start — including if we think a claim is unlikely to succeed. People deserve straight answers, not false hope.",
			attribution: "Richard O'Shea, Solicitor",
			image: richardImage,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "What you can claim for",
			},
			{
				type: "paragraph" as const,
				text: "A personal injury claim in Ireland covers two main categories of loss. General damages compensate for the pain, suffering, and loss of enjoyment of life caused by your injuries. Special damages cover your actual out-of-pocket losses — medical expenses, physiotherapy and rehabilitation costs, loss of earnings while you were unable to work, and travel costs associated with medical appointments. In serious cases, future losses — including future medical treatment and the long-term impact on your earning capacity — are also recoverable.",
			},
			{
				type: "paragraph" as const,
				text: "The level of general damages for common injury types is guided by the Personal Injuries Guidelines published by the Judicial Council, which replaced the Book of Quantum in 2021. These guidelines set out the range of damages appropriate for particular injuries, and courts and PIAB use them as a starting point when assessing claims. We advise you on where your injuries are likely to fall within these ranges and what a fair settlement looks like.",
			},
			{
				type: "heading" as const,
				text: "The Personal Injuries Assessment Board (PIAB)",
			},
			{
				type: "paragraph" as const,
				text: "In Ireland, most personal injury claims must go through the Personal Injuries Assessment Board (PIAB) before court proceedings can be issued. PIAB is an independent body that assesses personal injury claims and makes an award without the need for litigation. If both parties accept the PIAB award, the matter is resolved without the cost and delay of court proceedings. If either party rejects the award, PIAB issues an authorisation allowing the claimant to bring court proceedings.",
			},
			{
				type: "paragraph" as const,
				text: "We manage the PIAB process on your behalf from start to finish — gathering the medical evidence, completing the application, responding to correspondence, and advising you on whether any award made is fair given the nature and extent of your injuries. We never advise you to accept an offer without fully explaining what we think it is worth and why.",
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
						text: "Employers in Ireland have a statutory duty to provide a safe place and system of work. We advise where workplace injuries arise from inadequate training, faulty equipment, unsafe premises, or a failure to follow health and safety regulations. We can advise on both the personal injury matter and any related employment law rights.",
					},
					{
						label: "Public liability",
						text: "Occupiers of premises — shops, restaurants, public buildings, and private properties — owe a duty of care to visitors under the Occupiers' Liability Act 1995. We advise on public liability matters where injuries on premises arise from a hazard the occupier failed to address.",
					},
					{
						label: "Road traffic accidents",
						text: "Road traffic accident matters are subject to specific procedural rules and must go through PIAB before proceedings can issue. We advise on road traffic injury claims, including how the PIAB process applies and what claimants can recover. See our separate road traffic accidents page for more detail.",
					},
					{
						label: "Civil litigation",
						text: "Where a dispute cannot be resolved by negotiation — whether it involves a breach of contract, a property dispute, or another civil wrong — court proceedings may be necessary. We advise on the merits of bringing or defending civil proceedings and represent clients through all stages of litigation up to and including trial.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Time limits for personal injury claims",
			},
			{
				type: "paragraph" as const,
				text: "In Ireland, the general time limit for making a personal injury claim is two years from the date of the accident or from the date you first became aware of the injury (known as the 'date of knowledge'). This is known as the statute of limitations. Where the injured person is a minor, time does not begin to run until they turn 18. Missing the time limit is generally fatal to a claim — it is one of the most important reasons to take legal advice as soon as possible after an accident.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"A personal injury claim has a defined legal process in Ireland. Here is how we manage it for you — clearly, carefully, and without unnecessary delay.",
	process: [
		{
			title: "Initial assessment",
			description:
				"We review the circumstances of your injury and give you an honest assessment of the strength of your claim, the likely process, and what you can realistically expect in terms of outcome and timeline.",
		},
		{
			title: "Medical evidence",
			description:
				"We advise on what medical evidence you will need to support your claim and help you gather reports from your treating doctors and, where appropriate, from independent medical experts.",
		},
		{
			title: "PIAB application",
			description:
				"We submit your application to the Personal Injuries Assessment Board, manage all correspondence with PIAB and the respondent, and advise you on any assessment made.",
		},
		{
			title: "Negotiation and settlement",
			description:
				"Many claims are resolved by agreement before trial. We negotiate with the other side's insurers or solicitors to achieve the best possible outcome, and we advise you clearly and honestly on any offers made.",
		},
		{
			title: "Court proceedings",
			description:
				"If a fair settlement cannot be reached, we issue court proceedings and represent you through all stages of the litigation, up to and including trial. We prepare you fully for every step and keep you informed throughout.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is the time limit for a personal injury claim in Ireland?",
			answer:
				"The general time limit is two years from the date of the accident or from the date the injured person became aware of the injury. There are limited exceptions — for example, where the injured person is under 18, time does not begin to run until they reach adulthood. The two-year limit is strictly applied and missing it generally prevents a claim from being brought, so early legal advice is important.",
		},
		{
			question: "Is PIAB required before issuing court proceedings?",
			answer:
				"In most personal injury cases, yes. The Personal Injuries Assessment Board must be given the opportunity to assess a claim before court proceedings can be issued. PIAB makes an assessment of damages. If both parties accept it, the matter is resolved without litigation. If either party rejects it, PIAB issues an authorisation and the claimant can then proceed to court. We manage the entire PIAB process on behalf of our clients.",
		},
		{
			question: "How is the level of compensation determined?",
			answer:
				"The level of compensation depends on the nature and severity of the injuries, their impact on daily life and ability to work, and the financial losses suffered. The Personal Injuries Guidelines, used by the courts as a guide to appropriate levels of general damages, are the starting point. We give clients a realistic estimate based on their specific circumstances. We do not promise outcomes, but we do give an honest assessment.",
		},
		{
			question: "What happens if a claimant was partly at fault?",
			answer:
				"A claim can still proceed even where the claimant was partly responsible for the accident. Under Irish law, the principle of contributory negligence allows the courts to reduce a damages award by the percentage attributed to the claimant's own fault. For example, where a claimant is 20% at fault, the award is reduced by 20%. We advise on how contributory negligence is likely to apply in each specific case.",
		},
		{
			question: "How are the costs of a personal injury claim handled?",
			answer:
				"We discuss our fees with each client at the outset. In personal injury matters, costs are a legitimate element of a claim and can be recovered from the other side in many circumstances where proceedings are successful. We explain the costs position clearly before any decisions are made.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "April 2026",
	},
} as const;
