/**
 * Pricing — homepage pricing block.
 *
 * Two offers: a private one-to-one lesson, and a per-exercise harmony
 * correction. Pricing sits on the homepage between the curriculum and
 * the teacher intro — answers "what does this cost" once the visitor
 * has seen what's taught, before they're asked to do anything.
 *
 * TODO (alex): confirm both numbers before launch. Lessons set at €75/hr
 * as agreed; harmony exercise correction set deliberately low at €10 to
 * encourage the homework-only on-ramp. Tune as the volume of submissions
 * shows what's sustainable.
 */
import type { Heading } from "../types/heading";

export interface PricingOffer {
	readonly name: string;
	readonly subtitle: string;
	readonly price: string;
	readonly priceFootnote?: string;
	readonly body: string;
	readonly bullets?: readonly string[];
}

export interface PricingContent {
	readonly eyebrow: string;
	readonly title: Heading;
	readonly intro: string;
	readonly footnote?: string;
	readonly offers: readonly PricingOffer[];
}

export const pricing: PricingContent = {
	eyebrow: "Pricing",
	title: [
		{ text: "Two ways " },
		{ text: "to study", em: true },
	],
	intro:
		"Two ways to study — a live one-to-one lesson, or a single exercise sent in for written feedback. Most students start with one and add the other as they go.",
	footnote:
		"The two combine freely. The free first call is the place to decide where to begin.",
	offers: [
		{
			name: "Private lesson",
			subtitle: "Live, one-to-one, by video call",
			price: "€75",
			priceFootnote: "per hour",
			body: "A live one-hour video call. We work through your music in real time — your questions, your writing, at the keyboard together.",
			bullets: [
				"One full hour, one student — no group, no shared lectures",
				"Tuition in any subject of the curriculum, paced to you",
				"Bring a piece in progress, an exercise, or a question",
				"Reviewed at the keyboard on both ends of the call",
				"Recording of the session available on request",
				"No subscription, no minimum number of lessons",
			],
		},
		{
			name: "Harmony exercise correction",
			subtitle: "Written feedback on a single exercise",
			price: "€10",
			priceFootnote: "per exercise",
			body: "Send a harmony exercise — a chorale, a figured bass, a four-voice study — and get it back annotated in Dorico, with corrections and notes. The simplest way to have a teacher hear what you've written.",
			bullets: [
				"Corrections marked directly on the score",
				"Reasoning written out for each correction",
				"Alternative solutions where they exist",
				"Returned within five working days",
				"No subscription, no minimum — send one and see",
				"Currently offered for harmony exercises",
			],
		},
	],
};
