import briefcaseIcon from "../../assets/icons/briefcaseIcon.svg?raw";
import image from "../../assets/images/new/person-signing-document-at-desk.webp";
import nicholasImage from "../../assets/team/nicholas.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const employmentLaw = {
	// --- Identity ---
	title: "Employment Law",
	slug: "employment-law",
	href: "/services/employment-law",
	icon: briefcaseIcon,
	image,
	imageClass: "object-bottom",
	description:
		"Employment law advice for employees and employers in Kilkenny and the surrounding counties. We advise on unfair dismissal, redundancy, workplace discrimination, working time, payment of wages, and employment contracts, and represent clients at the Workplace Relations Commission.",
	// --- SEO ---
	seo: {
		title: `Employment Law Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Employment law solicitors in Kilkenny. We advise employees and employers on unfair dismissal, redundancy, discrimination, workplace rights, and the conduct of complaints to the Workplace Relations Commission.",
		canonicalPath: "/services/employment-law",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Employment " },
			{ text: "Law", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"Employment law in Ireland sits across the Unfair Dismissals Acts, the Employment Equality Acts, the Redundancy Payments Acts, and the Organisation of Working Time Act, with most disputes resolved through the Workplace Relations Commission. We advise employees and employers in Kilkenny on the practical operation of those rights and on the conduct of WRC proceedings.",
	},
	// --- Mid-page CTA ---
	midCta: [
		"Employment law matters, handled with care.",
		"Talk to us about your situation.",
	],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "employment law matter", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. Whether you're an employee considering a complaint or an employer responding to one, we'll explain how the relevant statute applies and set out the practical options.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "employment law advice", em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Employment law in Ireland is governed by a tightly defined body of legislation — primarily the Unfair Dismissals Acts, the Employment Equality Acts, the Redundancy Payments Acts, the Organisation of Working Time Act, and the Payment of Wages Act. Most disputes are decided by the Workplace Relations Commission (WRC), with appeals to the Labour Court. We advise employees and employers in Kilkenny on the practical operation of these statutes.",
			"For employees, that usually means assessing whether a dismissal was unfair, whether a redundancy was genuine, whether a workplace issue amounts to discrimination or harassment, or whether wages have been unlawfully deducted. We review the contract, the procedures followed, and the relevant correspondence, and explain in plain English what the law says about each point.",
			"For employers, it usually means setting up compliant employment contracts, disciplinary and grievance procedures, and performance-management frameworks before disputes arise — and managing dismissals, redundancies, and performance issues correctly when they do. Following the right procedure is both a legal requirement and the fairest way to handle a difficult situation.",
			"Where a matter cannot be resolved by agreement, we prepare and present complaints (or responses) to the Workplace Relations Commission, including the gathering of supporting documentation and representation at the WRC adjudication hearing. The WRC process is generally less formal than court but the time limits are strict and the preparation required is significant.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: String(firm.established) },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Employment Law" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Employment Law",
		title: [
			{ text: "How Irish " },
			{ text: "employment law", em: true },
			{ text: " works" },
		],
		intro:
			"Irish employment law sits across a defined body of statutes and is administered primarily through the Workplace Relations Commission. Knowing which statute applies, what the threshold tests are, and how the WRC process works makes the route from issue to resolution clearer. The article below sets that framework out in plain English.",
		quote: {
			text: "Employment law has tighter deadlines than most people expect. The WRC's six-month rule is one of the most common reasons that otherwise good claims cannot be pursued — and it runs from the date of the act complained of, not from the end of any internal grievance process.",
			attribution: "Nicholas O'Shea, Solicitor",
			image: nicholasImage,
		},
		blocks: [
			{
				type: "paragraph" as const,
				text: "The Workplace Relations Commission (WRC) is the statutory body responsible for adjudicating complaints under Irish employment legislation. A WRC adjudicator can order reinstatement, re-engagement, or financial compensation of up to two years' remuneration in unfair dismissal cases. The same two-year maximum applies in discrimination cases. The WRC process is less formal than litigation in court, but the procedural rules — particularly the six-month time limit for most complaints — are strict, and the preparation required for a hearing is significant.",
			},
			{
				type: "heading" as const,
				text: "Key employment rights for employees",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Unfair dismissal",
						text: "An employee with at least 12 months' continuous service has the right not to be unfairly dismissed under the Unfair Dismissals Acts. A dismissal can be unfair either because the reason given is not a fair one or because the employer did not follow fair procedures. Common procedural failures include not giving the employee an opportunity to respond to allegations, not conducting a fair investigation, or failing to provide a right of appeal. An employer who cannot show both a fair reason and a fair procedure risks an adverse WRC finding.",
					},
					{
						label: "Constructive dismissal",
						text: "Constructive dismissal occurs where an employee is effectively forced to resign because of the employer's conduct. Examples include a significant unilateral reduction in pay, a demotion without justification, serious workplace bullying, or a fundamental change to the employee's role. The threshold is high — the employer's conduct must amount to a breach of contract or make it unreasonable for the employee to remain. Legal advice before resigning is strongly recommended, as constructive dismissal claims turn on the precise sequence of events leading to the resignation.",
					},
					{
						label: "Redundancy",
						text: "A genuine redundancy arises where a role no longer exists due to business closure, restructuring, or reduced need for particular work. An employee with two or more years' continuous service is entitled to a statutory redundancy payment calculated at two weeks' pay per year of service plus one additional week, subject to a statutory weekly earnings cap. Employers cannot use redundancy to disguise the dismissal of an employee for other reasons — that is a sham redundancy and is unlawful under the Redundancy Payments Acts.",
					},
					{
						label: "Discrimination",
						text: "The Employment Equality Acts 1998 to 2015 prohibit discrimination in employment on nine grounds: gender, civil status, family status, age, disability, sexual orientation, race, religion, and membership of the Traveller community. Discrimination includes direct discrimination, indirect discrimination, harassment (including sexual harassment), and victimisation for making a complaint. Successful discrimination claims can result in compensation of up to two years' remuneration.",
					},
					{
						label: "Working time and rest breaks",
						text: "The Organisation of Working Time Act 1997 sets out maximum working hours (48 hours per week averaged over a reference period), rest breaks, annual leave (four working weeks per year), and public holiday entitlements. Breaches can be referred to the WRC.",
					},
					{
						label: "Payment of wages",
						text: "The Payment of Wages Act 1991 prohibits unlawful deductions from wages. Where an employer reduces pay without agreement, or makes deductions not authorised under the contract, that may be an unlawful deduction that can be referred to the WRC.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Advice for employers",
			},
			{
				type: "paragraph" as const,
				text: "For employers, the cost of getting a dismissal or redundancy wrong can be significant — WRC awards, legal costs, and the disruption of contested proceedings all add up. We advise businesses on putting in place clear, compliant employment contracts, disciplinary and grievance procedures, and performance-management frameworks before issues arise.",
			},
			{
				type: "paragraph" as const,
				text: "Where a disciplinary or redundancy process is required, we advise on how to manage it in line with the relevant statute and case law — appropriate notice, a genuine opportunity to respond, a fair investigation, and a right of appeal. Following the correct procedure is both a legal requirement and the fairest way to handle a difficult situation. It is also, in practical terms, what an adjudicator looks at first.",
			},
			{
				type: "heading" as const,
				text: "Time limits for WRC complaints",
			},
			{
				type: "paragraph" as const,
				text: "Most WRC complaints must be submitted within six months of the date of the act complained of. In exceptional circumstances, that period can be extended to twelve months where the claimant can show reasonable cause for the delay. The six-month rule is applied strictly — missing it will generally end a claim regardless of its merits. The deadline runs from the date of the act complained of, not from the date of any internal grievance or appeal outcome, so internal processes do not pause the clock.",
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"Employment law matters typically move through a defined sequence — assessment, internal procedure where appropriate, and a complaint or response at the WRC. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Initial consultation",
			description:
				"We review the employment situation — the contract, the relevant correspondence, and the circumstances of the dismissal or dispute — and advise the client honestly on whether there is a viable claim, what process applies, and what steps to take next.",
		},
		{
			title: "Internal grievance and appeal",
			description:
				"Where a dismissal or disciplinary decision has been made, we advise on whether internal grievance or appeal procedures should be exhausted first. Pursuing internal routes is often a prerequisite for WRC claims and can sometimes lead to a resolution without formal proceedings.",
		},
		{
			title: "WRC complaint",
			description:
				"We prepare and submit the complaint to the Workplace Relations Commission, gather the necessary supporting evidence and documentation, and represent the client at the WRC adjudication hearing. We advise on the strengths and weaknesses of the case throughout.",
		},
		{
			title: "Appeal and enforcement",
			description:
				"Where the WRC issues a decision, we advise on what the decision means in practical terms, on whether an appeal to the Labour Court is appropriate, and on the steps available to enforce the decision if the other party does not comply.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is constructive dismissal in Irish law?",
			answer:
				"Constructive dismissal occurs where an employee is forced to resign because the employer's conduct has made it unreasonable to remain in the job. It can arise from a fundamental breach of contract by the employer — such as a significant unilateral pay cut, demotion without justification, persistent bullying, or a failure to address serious workplace issues. The threshold is high: the employer's conduct must be serious enough that no reasonable employee would be expected to remain. As with ordinary unfair dismissal, an employee generally needs 12 months' continuous service to bring a claim. Legal advice before resigning is strongly recommended, as constructive dismissal claims turn on the precise sequence of events leading to the resignation.",
		},
		{
			question: "How long does an employee have to make a WRC complaint?",
			answer:
				"Most WRC complaints must be submitted within six months of the date of the act complained of — for example, the date of dismissal. The deadline can be extended to twelve months in exceptional circumstances where there is reasonable cause for the delay. The six-month rule is strictly enforced, and it is one of the most common reasons that otherwise valid claims cannot be pursued. The clock is not paused by internal grievance or appeal procedures.",
		},
		{
			question: "Who is entitled to statutory redundancy pay?",
			answer:
				"An employee with at least two years' continuous service whose role has been genuinely made redundant is entitled to a statutory redundancy payment under the Redundancy Payments Acts. The payment is calculated at two weeks' pay per year of service plus one additional week, subject to a statutory weekly earnings cap. The employer is obliged to pay; where the employer cannot or will not, a claim can be made through the Social Insurance Fund.",
		},
		{
			question: "Can an employer change a contract without the employee's agreement?",
			answer:
				"An employer cannot generally make significant unilateral changes to the core terms of employment — such as reducing pay, changing working hours, or substantially altering the role — without the employee's agreement. Doing so may amount to a breach of contract and could form the basis of a constructive dismissal claim or a complaint to the WRC. Where the employer has business reasons for a change, those reasons usually need to be raised through a consultation process rather than imposed.",
		},
		{
			question: "What does the WRC process involve?",
			answer:
				"The Workplace Relations Commission adjudicates complaints under Irish employment legislation. Once a complaint is submitted, it is assigned to a WRC adjudicator who schedules a hearing. Both parties are given the opportunity to present their case in writing and orally at the hearing. The adjudicator issues a written decision, which can be appealed to the Labour Court. The WRC process is generally less formal and faster than court, but the procedural rules and time limits apply throughout.",
		},
		{
			question: "What should an employer do on receiving a WRC complaint?",
			answer:
				"WRC complaints have strict response deadlines, and the way an employer engages with the process from the outset matters. We advise employers on how to respond, what documentation to gather, and how to present the case at hearing. We also advise on whether the matter can be resolved by agreement before a hearing takes place.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
