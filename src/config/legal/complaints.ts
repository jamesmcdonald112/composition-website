// Complaints procedure content supplied by Nicholas O'Shea, May 2026.
// Source-of-truth original: `legal-compliance/legal-services-regulation-act/complaints-procedure-supplied-by-nick-2026-05-13.docx`
// Content is reproduced verbatim from the supplied document.

import type { LegalPageContent } from "../../components/ui/LegalPageContent/LegalPageContent.types";

export const complaintsPageContent = {
	seo: {
		title: "Complaints Procedure",
		description:
			"Complaints procedure for Mary Molloy Solicitor. How to raise a concern, our handling process, and your right to refer a matter to the Legal Services Regulatory Authority.",
		canonicalPath: "/complaints",
	},
	reviewDate: "May 2026",
	title: "Complaints Procedure",
	intro:
		"We are committed to providing an efficient and professional service to all clients. If at any stage you are dissatisfied with the legal services provided by this firm, we encourage you to raise the matter with us as soon as possible so that we may attempt to resolve your concerns promptly and fairly.",
	sections: [
		{
			heading: "Complaints Procedure",
			blocks: [
				{
					type: "paragraph",
					text: "If you are dissatisfied with the legal services provided by this firm, the following steps apply:",
				},
				{
					type: "list",
					items: [
						"In the first instance, you may contact the solicitor with conduct of your matter by telephone or in writing to discuss your concerns informally.",
						"If the matter is not resolved informally, you may submit a formal complaint in writing setting out the nature of your complaint and the resolution sought.",
						"Upon receipt of a formal complaint, we will acknowledge same promptly and will take all appropriate and reasonable steps to investigate and attempt to resolve the matter.",
						"Where appropriate, and with the agreement of all parties, the matter may be referred to mediation.",
						"If you remain dissatisfied following the conclusion of our internal complaints process, you may refer the matter to the Legal Services Regulatory Authority in accordance with the provisions of the Legal Services Regulation Act 2015. Legal Services Regulatory Authority. P.O. Box 12906, Dublin 7, Ireland",
					],
				},
			],
		},
		{
			heading: "Costs Dispute Resolution Procedure",
			blocks: [
				{
					type: "paragraph",
					text: "If you wish to dispute this bill of costs, or any part of it you can avail of the following procedure:",
				},
				{
					type: "list",
					items: [
						"You can contact us by telephone to discuss the matter with us informally.",
						"If you dispute our bill you are required, within 21 days of this bill being provided to you, to send us a statement in writing setting out the nature of the dispute.",
						"When we receive this statement, we shall take all appropriate and reasonable steps to attempt to resolve the dispute with you by informal means, which may include, with your consent, mediation.",
						"You may refer the dispute to mediation.",
						"You may refer the dispute to the Legal Costs Adjudicator for adjudication. 1st Floor, Merchants House, 27-30 Merchants Quay, Dublin 8, Ireland. Tel: +353 (0)1 888 6301",
						"If the bill of costs is reduced by less than 15 per cent, you shall be responsible for paying the costs of adjudication.",
					],
				},
				{
					type: "paragraph",
					text: "In the event our bill or any part of our bill remains unpaid by 30 days from date of bill of costs, we may make an application to have our bill adjudicated by the Legal Costs Adjudicator.",
				},
			],
		},
	],
} as const satisfies LegalPageContent;

export type ComplaintsPageContent = typeof complaintsPageContent;
