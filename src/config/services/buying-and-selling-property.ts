import homeModernIcon from "../../assets/icons/homeModernIcon.svg?raw";
import image from "../../assets/images/new/house-key-and-figurine.webp";
import maryImage from "../../assets/team/mary.webp";
import { firm, yearsInPractice } from "../firm";
import { solicitors } from "../team";

export const buyingAndSellingProperty = {
	// --- Identity ---
	title: "Buying & Selling Property",
	slug: "buying-and-selling-property",
	href: "/services/buying-and-selling-property",
	icon: homeModernIcon,
	image,
	imageClass: "object-[center_80%]",
	description:
		"Residential conveyancing for buyers and sellers in Kilkenny and the surrounding counties. We act on contract review, title investigation, planning compliance, mortgage and lender requirements, stamp duty, completion, and Land Registry registration.",
	// --- SEO ---
	seo: {
		title: `Property Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Property solicitors in Kilkenny. We advise on residential conveyancing — contract review, title investigation, planning compliance, lender requirements, stamp duty, and Land Registry registration.",
		canonicalPath: "/services/buying-and-selling-property",
	},
	// --- Hero ---
	hero: {
		title: [
			{ text: "Buying & Selling " },
			{ text: "Property", em: true },
			{ text: " in Kilkenny" },
		],
		subtitle:
			"Conveyancing in Ireland involves a defined sequence of steps — investigation of title, contract review, dealings with mortgage lenders, stamp duty, completion, and Land Registry registration. We act for buyers, sellers, and lenders in residential property transactions in Kilkenny and the surrounding counties.",
	},
	// --- Mid-page CTA ---
	midCta: ["Conveyancing, handled with care.", "Get in touch when you're ready."],
	// --- Bottom CTA ---
	cta: {
		title: [
			{ text: "A clear assessment of your " },
			{ text: "conveyancing matter", em: true },
		],
		description:
			"Get in touch with us in Kilkenny. Whether the matter is buying a first home, moving home, an investment purchase, or selling, we'll explain how the conveyancing process applies to the specific transaction.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: [
			{ text: "Practical " },
			{ text: "conveyancing advice", em: true },
			{ text: " in Kilkenny" },
		],
		paragraphs: [
			"Conveyancing in Ireland is governed by a defined body of statute and procedure — the Land and Conveyancing Law Reform Act 2009, the Registration of Title Act 1964 (under which the Property Registration Authority maintains the Register of Titles), the Stamp Duties Consolidation Act 1999, and the planning and building control framework. We advise buyers and sellers in Kilkenny on each stage of the conveyancing process.",
			"On a purchase, our work includes reviewing the contract, investigating the title at the Property Registration Authority, raising pre-contract and requisition enquiries with the seller's solicitor, checking planning permission and certificates of compliance for any works on the property, and acting on the lender's behalf where there is a mortgage. On a sale, we prepare the contracts and supporting documentation, respond to the buyer's solicitor's enquiries, and arrange for any existing mortgage to be discharged on completion.",
			"On completion, we handle the transfer of funds, the payment of stamp duty under the Stamp Duties Consolidation Act 1999, and the registration of ownership with the Property Registration Authority. Where the property is unregistered title, we advise on conversion to registered title as part of the transaction.",
			"All conveyancing work at the firm is carried out by solicitors admitted to the Roll of Solicitors of Ireland and regulated by the Law Society of Ireland and the Legal Services Regulatory Authority. The firm has practised in Kilkenny continuously since 1979, and is based on Rose Inn Street in Kilkenny City.",
		],
		stats: [
			{ label: "Years in practice", value: `${yearsInPractice}+` },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Conveyancing" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Conveyancing",
		title: [
			{ text: "How " },
			{ text: "conveyancing", em: true },
			{ text: " works in Ireland" },
		],
		intro:
			"Conveyancing is the legal process of transferring ownership of property in Ireland. It involves contract review, investigation of title at the Property Registration Authority, planning and building control checks, dealings with mortgage lenders, payment of stamp duty under the Stamp Duties Consolidation Act 1999, and registration of ownership. The article below sets that framework out in plain English — first for buyers, then for sellers, with a note for first-time buyers and a checklist of what to have ready before instructing a solicitor.",
		quote: {
			text: "Most conveyancing problems show up in the contract or the title — not on the day of completion. The earlier the issues are identified, the more options there are to resolve them properly.",
			attribution: "Mary Molloy, Principal Solicitor",
			image: maryImage,
		},
		blocks: [
			{
				type: "heading" as const,
				text: "Buying a property",
			},
			{
				type: "paragraph" as const,
				text: "On a purchase, the solicitor's work goes well beyond witnessing the buyer's signature on a contract. We carry out a full investigation of the title to confirm that the seller has the right to sell, that there are no undisclosed rights or burdens affecting the property, and that the planning and building control position is in order. We raise enquiries with the seller's solicitor on any points that need clarification, and we advise the client clearly on the answers before contracts are signed.",
			},
			{
				type: "paragraph" as const,
				text: "Where the purchase involves a mortgage, we also act for the lender — reviewing the loan offer, confirming the property meets the lender's requirements, and managing the drawdown of funds. We handle stamp duty, registration with the Property Registration Authority, and the post-completion steps so that ownership is properly recorded and the title is in order.",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Contract review",
						text: "We read the contract in full, explain its terms, and raise any issues with the seller's solicitor before contracts are signed.",
					},
					{
						label: "Title investigation",
						text: "We investigate the title to the property — confirming that the seller owns it outright, that there are no judgment mortgages or other registered burdens, and that the boundaries match what is on the ground.",
					},
					{
						label: "Planning and compliance",
						text: "We check that any extensions, conversions, or structures on the property have the necessary planning permissions and certificates of compliance with the Building Regulations.",
					},
					{
						label: "Mortgage and lender requirements",
						text: "Where there is a mortgage, we liaise with the lender, review the loan offer, and manage the drawdown of mortgage funds in time for completion.",
					},
					{
						label: "Stamp duty",
						text: "Stamp duty is payable by the buyer to the Revenue Commissioners under the Stamp Duties Consolidation Act 1999. The rates and bands are set by Finance Act and updated periodically, so the rate applying in any specific case is confirmed at the time the matter is closing. We calculate the stamp duty, file the return with Revenue, and arrange payment as part of the conveyancing.",
					},
					{
						label: "Land Registry registration",
						text: "We register the ownership with the Property Registration Authority so that the title is properly recorded.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "Selling a property",
			},
			{
				type: "paragraph" as const,
				text: "On a sale, we prepare the contracts and supporting documentation early in the process so that the file is ready when a buyer is found. We respond to the buyer's solicitor's pre-contract and requisition enquiries promptly, address any title issues that arise, and conduct the matter through to completion and the release of the sale proceeds.",
			},
			{
				type: "paragraph" as const,
				text: "Where there is an existing mortgage on the property, we obtain a redemption figure from the lender, arrange for it to be discharged on completion, and arrange the release of the title deeds. Where the property has been recently extended or altered, we advise early on what planning and compliance documentation will need to be in order — addressing this at the start of the matter avoids delays later.",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "Contracts and documentation",
						text: "We prepare the contracts for sale and the supporting documentation, including copies of the title, planning documents, and relevant certificates of compliance.",
					},
					{
						label: "Responding to enquiries",
						text: "We deal with the buyer's solicitor's pre-contract and requisition queries.",
					},
					{
						label: "Mortgage discharge",
						text: "Where the property is mortgaged, we obtain a redemption figure, arrange for the mortgage to be paid off on completion, and ensure the title deeds are released to the buyer's solicitor.",
					},
					{
						label: "Completion and closing",
						text: "We manage the transfer of ownership documentation and the release of the sale proceeds, and confirm that the matter has been properly closed.",
					},
					{
						label: "Capital Gains Tax flag",
						text: "Where the property being sold is not the seller's principal private residence, a Capital Gains Tax (CGT) liability may arise on the sale. CGT is a separate tax matter and is generally handled by the seller's accountant. We flag the issue early and signpost to appropriate tax advice.",
					},
				],
			},
			{
				type: "heading" as const,
				text: "First-time buyers",
			},
			{
				type: "paragraph" as const,
				text: "First-time buyers in Ireland may have access to two schemes that affect the deposit and the legal title to the property. The Help to Buy scheme (administered by the Revenue Commissioners) allows eligible first-time buyers to claim a tax rebate towards the deposit on a new build. The cap and qualifying criteria are set by Finance Act and updated periodically, so the figures applying in any specific case are confirmed at the time of application.",
			},
			{
				type: "paragraph" as const,
				text: "The First Home Scheme is a separate equity-share scheme operated by the State, designed to bridge the gap between an applicant's mortgage and the price of an eligible new build. The scheme takes an equity stake in the property in exchange for the contribution. Where it applies, this affects the legal title and the long-term position of the property — we advise on those implications as part of the conveyancing.",
			},
			{
				type: "heading" as const,
				text: "What to have ready before instructing a solicitor",
			},
			{
				type: "list" as const,
				items: [
					{
						label: "For buyers",
						text: "Photo ID and proof of address (passport or driving licence), mortgage approval in principle, details of the deposit and its source (required for anti-money laundering purposes under the Criminal Justice (Money Laundering and Terrorist Financing) Acts), the buyer's PPS number, and the name and contact details of the estate agent.",
					},
					{
						label: "For sellers",
						text: "Photo ID and proof of address, the title deeds or folio number where available, details of the mortgage lender and account number, any planning permissions or certificates of compliance for works carried out on the property, and a valid Building Energy Rating (BER) certificate (required by law before marketing a property for sale or rent).",
					},
				],
			},
		],
	},
	// --- Process steps ---
	processDescription:
		"Conveyancing moves through a defined sequence of stages — instruction, identity and documentation, contract stage, mortgage and finance, exchange, completion, and registration. Here is how we manage each stage for our clients.",
	process: [
		{
			title: "Instruction",
			description:
				"We open the file, confirm the client's details, explain the likely timeline, and identify the documents we will need from the client. Many clients instruct a solicitor before an offer is accepted; the file can sit on standby until contracts are issued.",
		},
		{
			title: "Identity and documentation",
			description:
				"We carry out the identity and anti-money laundering checks required under the Criminal Justice (Money Laundering and Terrorist Financing) Acts and gather the core documents needed to begin legal work — title information from a seller, deposit-source documentation from a buyer.",
		},
		{
			title: "Contract stage",
			description:
				"On a purchase, we review the contract and title documents in full and raise pre-contract and requisition enquiries with the seller's solicitor. On a sale, we prepare the contracts and supporting documentation and respond to the buyer's solicitor's queries.",
		},
		{
			title: "Mortgage and finance",
			description:
				"Where there is a mortgage, we review the loan offer, confirm the property meets the lender's requirements, and arrange the drawdown of mortgage funds in time for completion.",
		},
		{
			title: "Exchange and signing",
			description:
				"Once the contractual queries are resolved and the lender's requirements (where applicable) are met, contracts are signed and exchanged. The transaction becomes legally binding at this point and a closing date is fixed.",
		},
		{
			title: "Completion",
			description:
				"On the agreed completion date, we manage the closing documentation and the transfer of funds, and confirm that ownership has passed correctly.",
		},
		{
			title: "Registration and post-completion",
			description:
				"We attend to the stamp duty return, registration with the Property Registration Authority, and the other post-completion steps, and confirm to the client when the matter is fully closed.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Is a solicitor required to buy or sell property in Ireland?",
			answer:
				"In practice, yes. A solicitor is required to carry out conveyancing in Ireland — registration of property purchases with the Property Registration Authority cannot be completed without a solicitor's involvement. A mortgage lender will also require a solicitor to act for the lender (typically the same solicitor who acts for the buyer).",
		},
		{
			question: "When should a solicitor be instructed?",
			answer:
				"It is common to instruct a solicitor at or before the point an offer is accepted, so that the file can be prepared and documentation gathered. Earlier instruction tends to produce a smoother process once contracts are issued, because the firm's identity and money-laundering checks have already been completed.",
		},
		{
			question: "How long does conveyancing take in Ireland?",
			answer:
				"The typical timeline from instruction to completion is eight to twelve weeks for a straightforward transaction, though this varies significantly depending on the complexity of the title, how quickly the parties respond, and whether issues arise during the process. New builds can take longer depending on the stage of construction at the time of contract.",
		},
		{
			question: "What is stamp duty and how is it calculated?",
			answer:
				"Stamp duty is a tax paid by the buyer to the Revenue Commissioners on the purchase of a property, governed by the Stamp Duties Consolidation Act 1999. The rates and bands applicable to residential property are set by Finance Act and updated periodically, so the rate applying in any specific transaction is confirmed at the time the matter is closing. We calculate the stamp duty payable, file the return with Revenue, and arrange payment as part of the conveyancing.",
		},
		{
			question: "What is title investigation and why does it matter?",
			answer:
				"Title investigation is the solicitor's review of the legal ownership of the property. We confirm that the seller has good marketable title — meaning that the seller owns the property and is entitled to sell it — that there are no outstanding mortgages, judgment mortgages, or registered burdens, and that the planning and building control position is in order. A thorough title investigation establishes whether there are legal problems that affect the value of the property or the buyer's ability to take clear title.",
		},
		{
			question: "What happens if an issue arises during conveyancing?",
			answer:
				"Issues do arise during conveyancing — a title defect, a planning irregularity, an issue with the boundary, or a problem with documentation. Our role is to identify the issue, advise the client on its significance, and work with the other side to resolve it. In some cases, an issue will be resolved by clarification or by an indemnity; in others, it may affect the price or the terms; in some, the parties may not be able to agree a way forward, and the matter will not complete. We advise the client honestly at each stage.",
		},
		{
			question: "Is a BER certificate required to sell a property?",
			answer:
				"Yes. A Building Energy Rating (BER) certificate is required by law before a property can be marketed for sale or for rent in Ireland (under the European Communities (Energy Performance of Buildings) Regulations). A valid BER certificate must be in place before the contracts for sale are issued. Where one is not available, an assessment must be carried out by a registered BER assessor.",
		},
		{
			question: "What is the difference between registered and unregistered title?",
			answer:
				"Most properties in Ireland are now registered with the Property Registration Authority (PRA) — ownership is established by reference to the entry on the Register of Titles maintained under the Registration of Title Act 1964. Older properties may still have unregistered title, where ownership is proved by the chain of title deeds. Both are legally valid, but unregistered title requires a more detailed investigation, and conversion to registered title is generally advised as part of the transaction where the property is being sold or mortgaged.",
		},
		{
			question: "Can the firm act for clients who are not based in Kilkenny?",
			answer:
				"Yes. The firm acts for clients across County Kilkenny and the surrounding counties, and regularly assists clients based elsewhere in Ireland or abroad. Most of the conveyancing process can be conducted by phone, email, and secure document exchange, with attendance in person required only at specific points (such as the signing of contracts and the deed of transfer).",
		},
		{
			question: "What are the costs of conveyancing?",
			answer:
				"Conveyancing costs are made up of professional fees and outlays. Outlays are third-party costs — Land Registry fees, search fees, stamp duty, and similar — and are fixed by the relevant authority or by statute. Professional fees vary depending on the complexity of the transaction. We discuss our fees with each client at the outset, including the basis on which we charge.",
		},
	],
	attribution: {
		solicitor: solicitors.mary,
		reviewDate: "May 2026",
	},
} as const;
