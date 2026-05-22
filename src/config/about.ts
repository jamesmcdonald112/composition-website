/**
 * About-page content.
 *
 * The About page is the credibility anchor of the site. It is composed of:
 *   1. PageHero — eyebrow, italic-emphasis title, subtitle, background image.
 *   2. Article  — the narrative biography (from `bio.full`) rendered as
 *                 chapters in a long-form article, with a pull-quote from
 *                 Alex in the right column (sticky on desktop).
 *   3. BiographyCv — the structured CV from `alex.ts`, set as small-caps
 *                 conservatoire-programme sections.
 *   4. CTAPanel — book a consultation.
 *
 * This file holds page-level copy that doesn't belong in `bio.ts` or
 * `alex.ts`: the hero, the pull-quote, the CV section intro, and the CTA.
 */
import alexPortrait from "../assets/images/alexander-pozdnyakov-portrait.webp";
import aboutImage from "../assets/images/antique-score-on-desk-hero.webp";
import { studio } from "./studio";

export const aboutPageContent = {
	seo: {
		title: `About | ${studio.name}`,
		description: `${studio.teacher} — composer and teacher. Conservatoire training in harmony, counterpoint, fugue, orchestration, and composition, taught from Montréal.`,
		canonicalPath: "/about",
	},

	hero: {
		eyebrow: "About",
		title: [
			{ text: "A composer's training, " },
			{ text: "passed on", em: true },
		],
		subtitle:
			"Alexander Pozdnyakov is a Russian-Canadian composer based in Montréal. He has taught harmony, counterpoint, orchestration, and composition at conservatoire level since 1996 — first at the Gnesin Russian Academy of Music in Moscow, then at the Université de Montréal.",
		image: aboutImage,
		imageAlt: "An antique musical score open on a wooden writing desk.",
		imageFocus: "center 40%",
	},

	// ── Trust strip ───────────────────────────────────────────────────────────
	// Sits between hero and article — the 30-second version of the case for
	// skim-readers before they commit to the long-form biography. Four
	// non-overlapping stats (single-word labels for the tight stat row), four
	// short paragraphs that compress the article's case.
	trustStrip: {
		eyebrow: "The teaching record",
		title: [
			{ text: "Conservatoire training, " },
			{ text: "taught at conservatoire level", em: true },
		],
		paragraphs: [
			`Alexander Pozdnyakov trained at the Gnesin Russian Academy of Music in Moscow under Tigran Chernoff, then completed his Master's and Doctorate at the Université de Montréal under Alan Belkin. He has taught at conservatoire level since ${studio.established}.`,
			"The curriculum the studio teaches — harmony, counterpoint, chorale writing, fugue, form, orchestration, and original composition — is the curriculum a conservatoire student would work through, taught one student at a time and at the pace each student needs.",
			"His own catalogue runs from chamber miniatures to full orchestra: a symphony, three concertos, a string quartet, chamber and vocal works performed across Europe, Asia, and the Americas. Fifteen competition wins and scholarships across his career, including the UNESCO Jubilee Scholarship and the personal Myaskovsky Scholarship of the Rostropovich Fund.",
			"Every exercise you submit is read and answered with detailed individual feedback. That is the part that takes the time; it is also the part that separates the studio from a self-paced course.",
		],
		stats: [
			{ label: "Teaching", value: `Since ${studio.established}` },
			{ label: "Recognition", value: "15 awards" },
			{ label: "Degree", value: "Doctor of Music" },
			{ label: "Lineage", value: "Chernoff · Belkin" },
		],
	},

	// ── Article section ───────────────────────────────────────────────────────
	// Eyebrow / title / intro for the long-form biography. The body is the
	// chapters in `bio.full`, rendered as headings + paragraphs by BlockList.
	article: {
		eyebrow: "Biography",
		title: [
			{ text: "Penza, Moscow, " },
			{ text: "Montréal", em: true },
		],
		intro:
			"The biography below is the long version — written for someone considering studying composition seriously and wanting to know whom they would be studying with.",

		// The pull-quote anchors the right column on desktop. Written in
		// Alex's voice — a single line that captures the teaching position
		// rather than the credentials. Edit freely; this is editorial copy,
		// not a literal quotation from a printed source.
		// TODO (alex): replace with a sentence that genuinely sounds like
		// you. Anything that lands as marketing — out.
		pullQuote: {
			text: "Composition is a craft before it is an art. The craft is teachable; the art is what each composer eventually does with the craft they have learned.",
			attribution: {
				name: studio.teacher,
				role: "Composer, teacher",
				photo: alexPortrait,
			},
		},
	},

	// ── Curriculum vitae section ──────────────────────────────────────────────
	// Header for the structured-CV block that follows the article. The
	// section labels themselves (Education, Teaching, Awards, etc) live on
	// the BiographyCv component so they stay co-located with the data.
	cv: {
		eyebrow: "Curriculum vitae",
		title: "The record, in full",
		intro:
			"For readers who want the structured detail — education, teaching positions, awards, works, performances, publications, and professional activity.",
	},

	// ── Closing CTA ───────────────────────────────────────────────────────────
	cta: {
		title: "Considering composition study?",
		body: "Book a free introductory consultation. We'll talk about your background, what you want to write, and whether the studio is the right fit.",
	},
} as const;

export type AboutPageContent = typeof aboutPageContent;
