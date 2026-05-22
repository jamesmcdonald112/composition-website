/**
 * Lead magnet — newsletter subscription with the free guide as welcome benefit.
 *
 * Restructured from "free PDF + optional marketing opt-in" to
 * "newsletter subscription, with the free guide as the welcome gift."
 *
 * Why the change: under GDPR Article 7(4) / Québec Law 25 / PIPEDA, a
 * service cannot be conditional on consent to processing that isn't
 * necessary for that service ("freely given" consent test). You cannot
 * bundle "you must accept marketing to get the PDF." You CAN, however,
 * offer the PDF as a benefit of a *separately marketed* newsletter
 * subscription — because in that framing, the visitor's signup IS the
 * consent for what they came for (the list), and the PDF is the welcome.
 *
 * Result: every successful form submission becomes a newsletter subscriber.
 * Visitors who only wanted a PDF without joining a list don't sign up
 * (which is correct — they shouldn't end up on the list against their will).
 *
 * TODOs:
 *   - TODO (james): produce the welcome-PDF and place at
 *     /public/resources/[filename]. The href below assumes that
 *     filename.
 *   - TODO (james): wire the form action to a Resend Audience.
 *     Single flow: validate → add to audience → send welcome email
 *     containing the PDF link. No conditional branching needed since
 *     there's no longer a separate opt-in checkbox.
 */

import type { Heading } from "../types/heading";

export interface LeadMagnetForm {
	readonly eyebrow: string;
	readonly heading: Heading;
	readonly body: string;
	readonly bullets: readonly string[];
	readonly nameLabel: string;
	readonly namePlaceholder: string;
	readonly emailLabel: string;
	readonly emailPlaceholder: string;
	readonly submitLabel: string;
	readonly trustNote: string;
}

export interface LeadMagnetContent {
	readonly title: string;
	readonly subtitle: string;
	readonly href: string;
	readonly form: LeadMagnetForm;
}

export const leadMagnet: LeadMagnetContent = {
	title: "Notes from the studio",
	subtitle:
		"Subscribe for occasional letters on harmony, counterpoint, and the craft of composition — and receive a free nine-page guide as a welcome.",
	href: "/resources/pozdnyakov-how-to-choose-a-composition-teacher.pdf",

	form: {
		eyebrow: "From the studio",
		heading: [
			{ text: "Notes from " },
			{ text: "the studio", em: true },
		],
		body: "Occasional letters from the studio — short essays on harmony, counterpoint, and the craft of composition, the odd piece of score study, and word of new lessons, recordings, and resources as they appear. As a welcome, you'll get a free nine-page guide on how to choose a composition teacher.",
		bullets: [
			"Six questions to ask any prospective composition teacher (in the welcome guide)",
			"New lessons, recordings, and resources as they become available",
			"Occasional writing on harmony, counterpoint, orchestration, and the craft",
		],
		nameLabel: "First name",
		namePlaceholder: "Alexander",
		emailLabel: "Email address",
		emailPlaceholder: "you@example.com",
		submitLabel: "Subscribe",
		trustNote:
			"Unsubscribe in one click. Your email is used only for what's described above — never sold, never shared.",
	},
} as const;
