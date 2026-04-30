import { yearsInPractice } from "./firm";

export const testimonialsSection = {
	eyebrow: "Client Testimonials",
	heading: [
		{ text: "What our " },
		{ text: "clients", em: true },
		{ text: " say" },
	],
	intro: `We have been helping families and individuals across Kilkenny for over ${yearsInPractice}\u00a0years. Here is what some of them have to say.`,
} as const;

export const testimonials = [
	{
		quote:
			"Mary guided us through a complicated sale and purchase at the same time. She was thorough, patient, and always available when we had questions. We could not have asked for more.",
		name: "Sinéad Brennan",
		location: "Kilkenny City",
		service: "Property Purchase & Sale",
	},
	{
		quote:
			"We used Mary Molloy for probate after losing our mother. The process was handled with great sensitivity and professionalism. Nothing was left unexplained.",
		name: "Declan Walsh",
		location: "Thomastown",
		service: "Wills & Probate",
	},
	{
		quote:
			"I was referred to Mary for a family law matter. From the first meeting I felt I was in safe hands. Clear, honest advice and no unnecessary delays.",
		name: "Aoife Dunne",
		location: "Callan",
		service: "Family Law",
	},
	{
		quote:
			"Nicholas handled our conveyancing and kept us informed at every step. Buying your first home is stressful enough — they made the legal side straightforward.",
		name: "Ciarán & Fiona Murphy",
		location: "Kilkenny City",
		service: "First Home Purchase",
	},
	{
		quote:
			"Excellent, professional service. Everything was dealt with efficiently and at a fair price. I would not hesitate to recommend Mary Molloy Solicitor.",
		name: "Patrick Tynan",
		location: "Graiguenamanagh",
		service: "Property Sale",
	},
	{
		quote:
			"I came to Mary with an employment dispute and she gave me clear, practical advice from the start. The matter was resolved and I felt supported throughout.",
		name: "Mairéad O'Brien",
		location: "Castlecomer",
		service: "Employment Law",
	},
] as const;

export type Testimonial = (typeof testimonials)[number];
