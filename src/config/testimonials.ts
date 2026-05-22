/*
  ⚠️  PLACEHOLDER CONTENT — FABRICATED TESTIMONIALS  ⚠️

  The six testimonials below are NOT real. They are illustrative
  examples written to show how a testimonials section reads on the
  site. They must be replaced with genuine, consented student quotes
  (or the section removed) before launch.

  See README.md "Pre-launch checklist" — do not ship these as real
  client quotes.
*/

import type { Heading } from "../types/heading";

export const testimonialsSection: {
	eyebrow: string;
	heading: Heading;
	intro: string;
} = {
	eyebrow: "From the studio",
	heading: [{ text: "What students " }, { text: "say", em: true }],
	intro:
		"A few words from composers who have worked through the curriculum one assignment at a time.",
};

export interface Testimonial {
	quote: string;
	name: string;
	/** Short context line — what the person does, and where. */
	role: string;
}

export const testimonials: readonly Testimonial[] = [
	{
		quote:
			"Alex never just corrects the notes. Every comment on a returned exercise explained why a voice-leading choice failed and what the older masters would have done instead. My counterpoint is unrecognisable from a year ago.",
		name: "Élise Tremblay",
		role: "Composition student, Montréal",
	},
	{
		quote:
			"I had taught myself harmony from books for years and hit a wall. Three months of weekly assignments with Alex did what the books could not — he heard the habit I could not hear in myself and named it.",
		name: "Daniel Okafor",
		role: "Self-taught composer, London",
	},
	{
		quote:
			"The fugue module is demanding in the best way. Alex expects real work and gives real feedback in return — pages of it, by hand on the score. It is the closest thing to a conservatoire tutorial I have found online.",
		name: "Sofia Marchetti",
		role: "Conservatoire student, Milan",
	},
	{
		quote:
			"What sets the studio apart is patience. Alex was happy to spend three lessons on a single orchestration problem until I genuinely understood it, rather than rushing me on to the next topic.",
		name: "Hannah Weiss",
		role: "Working composer, Berlin",
	},
	{
		quote:
			"I came wanting to write for string quartet and had no formal training. Alex built a path for me from first principles. The Russian conservatoire method is rigorous, but he makes the rigour feel like a gift.",
		name: "Marcus Bell",
		role: "Composition student, Toronto",
	},
	{
		quote:
			"Studying one student at a time is not a marketing line — you feel it. Alex remembered every piece I had submitted and pointed out when I was repeating an old mistake. That continuity is rare and it changed how I write.",
		name: "Yuki Tanaka",
		role: "Film composer, Vancouver",
	},
];
