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
	//   3. Self-selection — names who the studio is for, in the language
	//      that audience uses about itself ("composers serious about
	//      writing", not "ambitious learners").
	//   4. Risk reversal — names the free introductory consultation and
	//      what it costs (nothing) so a first-time visitor sees the path
	//      to the next step before they've left this section.
	trustStrip: {
		eyebrow: "Why this studio",
		title: [
			{ text: "Russian conservatoire training " },
			{ text: "in composition", em: true },
			{ text: ", taught one student at a time, online from Montréal" },
		],
		paragraphs: [
			`Alexander Pozdnyakov trained at the Gnesin Russian Academy of Music in Moscow under Tigran Chernoff, then completed his Master's and Doctorate in composition at the Université de Montréal under Alan Belkin. He has taught composition, harmony, counterpoint, and orchestration at conservatoire level since ${studio.established} — first at the Gnesin Academy itself, then at the Université de Montréal — and is composer-in-residence with the Orchestre Interculturel de Montréal.`,
			"The studio teaches the full conservatoire curriculum, in order: harmony, counterpoint, four-part chorale writing in the style of Bach, fugue, form and analysis, orchestration, and original composition. Every exercise you submit is read in full and answered with detailed written feedback — corrections, the reasoning behind each correction, and the repertoire passage the principle is drawn from. That is the part of online composition study that most courses leave out, and it is the part that does the work.",
			"This is one-to-one online composition tuition for students who already write and want to improve — conservatoire-prep students, self-taught composers ready to commit, working composers wanting depth in a specific subject. It is not a beginners' course in music theory. The studio assumes you can already read music; what it adds is the second pair of ears that hears what you don't yet hear in your own writing.",
			"The introductory consultation is a fifteen-minute video call. It is free, and there is no obligation afterwards. Bring your background, your questions, and — if you have one — a recent piece of your writing. We'll figure out together where in the curriculum you would start and whether the studio is the right fit. If it isn't, the consultation is the right place to find that out.",
		],
		stats: [
			{ label: "Teaching", value: `Since ${studio.established}` },
			{ label: "Degree", value: "Doctor of Music" },
			{ label: "Format", value: "One-to-one" },
			{ label: "First call", value: "Free, 15 min" },
		],
	},

	curriculum: {
		eyebrow: "The training path",
		title: "Eight modules, one programme of study",
		intro:
			"The curriculum runs as a single sequence — harmony through to composition, with student-work review threaded through every module. Each module builds on the previous one. Read top to bottom.",
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
