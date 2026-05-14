import truckIcon from "../../assets/icons/truckIcon.svg?raw";
import image from "../../assets/images/new/aerial-view-of-country-road.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const roadTrafficAccidents = {
	// --- Identity ---
	title: "Road Traffic Accidents",
	slug: "road-traffic-accidents",
	href: "/services/road-traffic-accidents",
	icon: truckIcon,
	image,
	imageClass: "",
	description:
		"Road traffic accident claims handled in Kilkenny and the surrounding counties. We advise on liability, manage the PIAB application, deal with insurers on the client's behalf, and represent clients in court where required.",
	// --- SEO ---
	seo: {
		title: `Road Traffic Accident Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Road traffic accident solicitors in Kilkenny. We advise clients on liability, the PIAB process, dealings with insurers, and the conduct of personal injury claims arising from road traffic accidents.",
		canonicalPath: "/services/road-traffic-accidents",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Road Traffic " },
			{ text: "Accident Claims", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"Road traffic accidents are unsettling, and the legal process that follows is often unfamiliar. We advise clients in Kilkenny on liability, the PIAB application, and any dealings with insurers — explaining each step of the process in plain English.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Road traffic accident matters, handled with care.",
		"Talk to us about your claim.",
	],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "road traffic claim", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. We'll assess liability, review the medical evidence and the financial losses, and explain how the PIAB process and the personal injury time limits apply to the matter.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "A clear path through " },
			{ text: "your road traffic claim", em: true },
		],
		paragraphs: [
			"Most road traffic accident claims in Ireland follow the same basic route: assessment of liability, gathering of medical evidence, and an application to the Personal Injuries Assessment Board (PIAB). What happens after the PIAB stage depends on the assessment made and on whether either side wishes to take the matter further. We guide clients through each step, in plain English, so the process is clear from the start.",
			"A claim's value depends on the nature and extent of the injuries, the impact on daily life and earnings, and the financial losses arising from the accident. The Personal Injuries Guidelines published by the Judicial Council in 2021 set out appropriate ranges for general damages. We assess each claim against those ranges and advise clients on what a fair outcome looks like.",
			"Settlement offers can be made at various stages of a claim — sometimes before PIAB has assessed it, sometimes after. We review any offer against the medical evidence, the financial losses on file, and the Personal Injuries Guidelines, and explain to the client what the offer covers and what it leaves outstanding. If an offer is fair, we say so.",
			"We act for clients across Kilkenny and the surrounding counties on road traffic accident matters of every kind — from soft tissue and whiplash injuries to serious injury cases involving long-term care. Each claim receives the same care and thoroughness.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: String(firm.established) },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Road Traffic Claims" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Road Traffic Accidents",
		title: [
			{ text: "How a " },
			{ text: "road traffic claim", em: true },
			{ text: " works in Ireland" },
		],
		intro:
			"A road traffic accident claim in Ireland follows a defined legal process. Knowing what each stage involves, what evidence is needed, and how the Personal Injuries Assessment Board (PIAB) fits in makes the route from accident to resolution clearer. The article below sets that process out in plain English.",
		quote: {
			text: "Insurance companies deal with claims every day — most people don't. Getting legal advice early means the process is explained properly from the start, and any offer can be assessed against what the law actually allows.",
			solicitor: solicitors.nicholas,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "What evidence supports a road traffic claim",
			},
			{
				type: "paragraph" as const,
				text: "The strongest road traffic claims are built on evidence gathered at and around the time of the accident. The driver and vehicle details of the other party, photographs of the vehicles and the scene, witness names, and the Garda incident reference where reported are all useful. So is a contemporaneous medical record — many injuries, including whiplash and soft tissue damage, take days or weeks to become fully apparent, and a record made shortly after the accident anchors the medical timeline.",
			},
			{
				type: "paragraph" as const,
				text: "We advise clients on what evidence they have, what is missing, and what can be obtained later. Where evidence is incomplete, that is something to know about early — not on the day of a court hearing.",
			},
			{
				type: "heading" as const,
				text: "How compensation is calculated",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "General damages",
						text: "Compensation for the pain, suffering, and impact on quality of life caused by the injuries. The amount is assessed by reference to the Personal Injuries Guidelines published by the Judicial Council in 2021, which set out appropriate damages ranges for common injury types.",
					},
					{
						label: "Loss of earnings",
						text: "Where injuries prevent a claimant from working, or affect future earning capacity, that loss is recoverable. We gather payslips, medical evidence, and where appropriate reports from occupational or vocational experts to establish and value this element of a claim.",
					},
					{
						label: "Medical and rehabilitation costs",
						text: "The cost of GP visits, hospital treatment, physiotherapy, specialist appointments, prescribed medication, and any aids or adaptations required as a result of the injuries are all recoverable as special damages.",
					},
					{
						label: "Future losses",
						text: "In cases of serious injury, compensation can also include the cost of future medical treatment, ongoing care needs, and the long-term impact of the injury on earning capacity. Appropriate experts are engaged to establish and quantify these losses.",
					},
					{
						label: "Out-of-pocket expenses",
						text: "Travel costs to and from medical appointments, care provided by a family member or friend, and other reasonably incurred expenses can be claimed as part of a road traffic accident case.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "How PIAB fits in",
			},
			{
				type: "paragraph" as const,
				text: "Most road traffic accident claims in Ireland must go through the Personal Injuries Assessment Board (PIAB) before court proceedings can be issued. PIAB is an independent statutory body that assesses claims based on the medical evidence and financial losses submitted. PIAB may make an assessment that either side can accept or reject; in some cases PIAB declines to make an assessment at all. Where PIAB issues an authorisation, the claim can then proceed to court if the parties choose. The next step depends on the PIAB outcome and on the strength of the medical and liability evidence.",
			},
			{
				type: "paragraph" as const,
				text: "We submit PIAB applications on the client's behalf, including the supporting medical reports and the documentary evidence of any financial losses. We also review any settlement offer made — at any stage of the process — and advise the client on whether the offer reflects the value of the claim under the Personal Injuries Guidelines.",
			},
			{
				type: "heading" as const,
				text: "Uninsured drivers and the MIBI scheme",
			},
			{
				type: "paragraph" as const,
				text: "Where the driver responsible for an accident cannot be identified, or had no valid insurance, claims are made through the Motor Insurers' Bureau of Ireland (MIBI). The MIBI was established under an agreement with the Irish state and operates a compensation scheme for victims of uninsured and untraced drivers. The MIBI process differs from a standard PIAB claim — it has its own procedure, its own rules of evidence, and its own time limits. We advise on whether the MIBI scheme applies to a particular matter and conduct the claim under the MIBI procedure.",
			},
			{
				type: "heading" as const,
				text: "How long a road traffic claim takes",
			},
			{
				type: "paragraph" as const,
				text: "Most road traffic accident claims in Ireland are resolved in twelve to eighteen months where liability is clear and the injuries are well understood. Cases involving serious or long-term injuries take longer, because the full medical picture has to be established before a claim can be valued accurately. Settling too early — before the long-term effects of an injury are known — usually means accepting less than the claim is actually worth.",
			},
			{
				type: "heading" as const,
				text: "The time limit on a road traffic claim",
			},
			{
				type: "paragraph" as const,
				text: "Personal injury claims arising from road traffic accidents in Ireland are subject to a two-year time limit. The clock runs from the date of the accident, or from the date the injured person became aware of the injury (the 'date of knowledge'), whichever is later. Where the injured person was a minor at the time of the accident, time does not begin to run until they turn 18. Missing the time limit will generally end a claim, so early legal advice is the safe course.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"A road traffic accident claim has a defined legal process in Ireland. Here is how it progresses — and how we guide our clients through each stage.",
	process: [
		{
			title: "Initial consultation",
			description:
				"We review the circumstances of the accident, advise on liability, and explain how the claims process will run. We also advise on what evidence to gather and what steps to take in the early stages.",
		},
		{
			title: "Medical evidence",
			description:
				"We advise on the medical evidence needed to support the claim — GP records, consultant reports, and where appropriate independent medical experts. Thorough medical evidence is the foundation of every road traffic case.",
		},
		{
			title: "PIAB application",
			description:
				"We submit the application to the Personal Injuries Assessment Board, supported by medical reports and evidence of financial losses. We guide the client through the assessment process and advise on any award made.",
		},
		{
			title: "Insurer negotiations",
			description:
				"Where the client wishes to pursue settlement discussions with the other party's insurer — typically after PIAB has issued an authorisation, or where the matter falls outside the PIAB process — we handle the correspondence and conduct those discussions in light of the medical evidence and the Personal Injuries Guidelines.",
		},
		{
			title: "Court proceedings if needed",
			description:
				"Where the client wishes to proceed to court — either because settlement discussions have not produced a workable agreement, or for other reasons — we issue court proceedings on the client's instructions and act for the client at each stage of the litigation. We prepare the documentation and ensure the client is fully supported at every hearing.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is the time limit for a road traffic accident claim?",
			answer:
				"The general time limit for personal injury claims in Ireland — including road traffic accidents — is two years from the date of the accident or from the date the injured person became aware of the injury. Where the claimant was a minor at the time of the accident, time does not begin to run until they turn 18. Missing this deadline will generally prevent a claim from being brought.",
		},
		{
			question: "What if the other driver was uninsured or could not be identified?",
			answer:
				"Compensation for victims of uninsured or untraced drivers is paid through the Motor Insurers' Bureau of Ireland (MIBI). The MIBI scheme has its own procedure and its own conditions, and is separate from the standard PIAB process. We advise on whether the MIBI scheme applies and manage the claim on the client's behalf.",
		},
		{
			question: "What about an early settlement offer from an insurance company?",
			answer:
				"We advise reviewing any insurance company offer carefully before accepting it. Early offers are routinely made before the full extent of an injury is known and before the claimant has independent representation. An offer that seems reasonable at first glance can significantly undervalue a claim once future medical costs, loss of earnings, and other losses are properly established.",
		},
		{
			question: "How long does a road traffic accident claim take?",
			answer:
				"Claims involving clear liability and soft tissue injuries are often resolved within twelve to eighteen months. Cases involving serious or long-term injuries take longer, because the full medical picture has to be established before the claim can be accurately valued. Settling before the long-term effects are known usually means accepting less than the claim is worth.",
		},
		{
			question: "Is vehicle damage covered as well as personal injury?",
			answer:
				"Vehicle damage is treated as a separate claim from personal injury. A property damage claim is made against the other driver's motor insurer (or under the claimant's own policy) and does not go through PIAB. We advise on both aspects.",
		},
		{
			question: "What are the immediate steps after a road traffic accident?",
			answer:
				"Ensure everyone is safe and call emergency services if anyone is injured. Exchange details with the other driver — name, address, insurance details, and vehicle registration. Take photographs of the scene, the vehicles, and any visible injuries. Report the accident to An Garda Síochána if required. Seek medical attention as soon as possible. Take legal advice before giving any statement to an insurance company.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
