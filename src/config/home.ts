/**
 * Homepage content for the Pozdnyakov Composition Studio.
 *
 * Composed from the studio.ts, alex/bio.ts, curriculum.ts, pricing.ts and
 * lead-magnet.ts configs.
 *
 * The homepage is a single quiet scroll, five movements:
 *   1. Hero               — name, tagline, primary CTA (free guide)
 *   2. Curriculum path    — the eight-module sequence
 *   3. Teacher, lightly worn — short bio compressing the pedigree
 *   4. A taste of the music — audio/video embed placeholder
 *   5. Free resource      — email capture for the PDF
 */

import { bio } from "./alex/bio";
import { booking } from "./booking";
import { curriculum } from "./curriculum";
import { leadMagnet } from "./lead-magnet";
import { studio } from "./studio";

export const homePageContent = {
	seo: {
		title: studio.name,
		description: studio.seo.defaultDescription,
		canonicalPath: "/",
	},

	hero: {
		eyebrow: "Studio",
		// The "emphasis" word renders in italic per HeroHome's titleEmphasis prop.
		// Splitting at "Composition" gives the studio name a quiet typographic
		// inflection without dramatising it.
		title: "Pozdnyakov Composition Studio",
		titleEmphasis: "Composition",
		subtitle:
			"Russian conservatoire training in harmony, counterpoint, fugue, orchestration, and composition — taught one student at a time, online from Montréal.",
		ctas: {
			primary: booking,
			secondary: { label: "See the curriculum", href: "#curriculum" },
		},
	},

	// ── Homepage trust strip ──────────────────────────────────────────────
	// Position: directly under the hero. First credibility moment on the
	// page; high SEO weight (heading + ~250 words of body); designed to
	// convert visitors who didn't yet know who Alex is.
	//
	// Conversion levers, paragraph by paragraph:
	//   1. Authority anchoring — names the lineage (Chernoff, Belkin) and
	//      the institutions. Searchers looking for "Belkin student" or
	//      "Gnesin composition" land on real specifics, not adjectives.
	//   2. Specificity over claims — names the curriculum subjects in the
	//      order they're taught. Carries SEO weight for the subject
	//      searches (harmony, counterpoint, fugue, orchestration) without
	//      reading as a keyword list.
	//   3. Self-selection — names who the studio is for in warm, aspirational
	//      terms ("composers who already write and want to go further"),
	//      not gatekeeping language ("not for beginners").
	//   4. Risk reversal — names the free introductory consultation and
	//      what it costs (nothing) so a first-time visitor sees the path
	//      to the next step before they've left this section.
	trustStrip: {
		eyebrow: "Why this studio",
		title: [
			{ text: "A composition studio, " },
			{ text: "not a course", em: true },
		],
		paragraphs: [
			`Alexander Pozdnyakov trained at the Gnesin Russian Academy of Music in Moscow and took his Doctorate in composition at the Université de Montréal under Alan Belkin. He has taught composition, harmony, counterpoint, and orchestration at conservatoire level since ${studio.established}, and is composer-in-residence with the Orchestre Interculturel de Montréal.`,
			"You work through the full curriculum in order — harmony, counterpoint, chorale writing, fugue, form, orchestration, and your own composition. Every exercise you send is read in full and answered: the corrections, the reasoning behind them, and the passage in the repertoire each principle comes from.",
			"It's one-to-one teaching, online, for composers who already write and want to go further. You bring the music you're working on; the studio brings the second pair of ears that hears what you don't yet hear in your own writing.",
			"The first step is a free fifteen-minute call. Bring your questions, your background, and a recent piece if you have one. We'll talk about where you'd start and whether the studio is right for you — and if it isn't, that's a good thing to find out early.",
		],
		stats: [
			{ label: "Teaching", value: `Since ${studio.established}` },
			{ label: "Degree", value: "Doctor of Music" },
			{ label: "Format", value: "One-to-one" },
			{ label: "First call", value: "Free, 15 min" },
		],
	},

	curriculum: {
		eyebrow: "The path of study",
		title: "Eight modules, one programme of study",
		intro:
			"One sequence, harmony through to composition, each module built on the one before. Your written work is reviewed at every stage. Read it top to bottom.",
		modules: curriculum,
	},

	teacher: {
		eyebrow: "The teacher",
		title: "Alexander Pozdnyakov",
		paragraphs: bio.short,
		linkLabel: "Full biography",
		linkHref: "/about",
	},

	music: {
		eyebrow: "A taste of the music",
		title: "Listen",
		youtubeId: "AxvV5wgrsKk" as string | null,
		caption: "Da Capo In Aeternum — Alexander Pozdnyakov",
		watchUrl: "https://youtu.be/AxvV5wgrsKk",
	},

	leadMagnet,
} as const;

export type HomePageContent = typeof homePageContent;
