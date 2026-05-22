/**
 * The eight-module curriculum — the centre of gravity of the homepage and
 * the Curriculum page.
 *
 * Each module is one movement in a single programme of study. The numbering
 * matters: it tells the reader this is a path, not a menu.
 *
 * Voice rules (.claude/skills/copy/SKILL.md):
 *   - Roman numerals for the sequence (signals conservatoire lineage)
 *   - One-sentence definition + concrete "by the end you'll be able to" line
 *   - No marketing superlatives; no course-sales register
 *   - Specificity beats vague claims
 *
 * TODO (alex): every module description needs your review. I've written first
 * drafts in the conservatoire register. Edit anything that doesn't sound like
 * how you actually teach.
 */

export interface CurriculumModule {
	/** Short module name — one or two words. */
	name: string;
	/** Subtitle, descriptive — one short phrase. */
	subtitle: string;
	/** Body: one short paragraph describing what the module covers. */
	body: string;
	/** What the student will be able to do by the end. One sentence. */
	outcome: string;
}

export const curriculum: readonly CurriculumModule[] = [
	{
		name: "Harmony",
		subtitle: "The grammar of tonal music",
		body: "Triadic harmony, from figured bass to the chromatic writing of the late nineteenth century. Voice-leading, modulation, chorale writing, and the analysis of real scores from Corelli to Brahms — so harmony becomes something you hear, not a set of rules.",
		outcome:
			"You'll read figured bass fluently, harmonise a chorale in four parts, and hear the harmonic structure of any tonal score you open.",
	},
	{
		name: "Counterpoint",
		subtitle: "Independent voices in motion",
		body: "This is where most self-taught composers stall. We start with two voices in Fux's strict style, note against note, then work outwards to three and four, and on to free counterpoint. The aim is to hear each line as a melody in its own right.",
		outcome:
			"You'll write fluently in two, three, and four voices, and hear independent lines instead of stacked chords.",
	},
	{
		name: "Chorales",
		subtitle: "Bach's four-voice writing as the foundation",
		body: "The chorale sits at the centre of the whole tradition. We work closely through Bach's 371 chorales — analysing them, harmonising given melodies, writing your own in the style — until their logic becomes second nature.",
		outcome:
			"You'll harmonise a chorale melody in the Bach style with idiomatic voice-leading, cadences, and harmonic rhythm.",
	},
	{
		name: "Fugue",
		subtitle: "Strict imitative counterpoint",
		body: "The most demanding contrapuntal writing there is, and the most rewarding to get right. Subject and answer, countersubject, exposition, episode, stretto — studied through the Well-Tempered Clavier and the Art of Fugue, then written yourself.",
		outcome:
			"You'll write a complete three- or four-voice fugue with a coherent subject, a sound exposition, and episodes that mean something.",
	},
	{
		name: "Form and Analysis",
		subtitle: "How a piece is built",
		body: "How whole pieces hold together — binary, ternary, sonata, rondo, variation — studied by taking real works apart, from Haydn to Shostakovich. A little Schenkerian reduction where it makes the structure clearer.",
		outcome:
			"You'll see how any common-practice work is built, and write coherent movements in sonata, rondo, and variation form.",
	},
	{
		name: "Orchestration",
		subtitle: "Writing for the instruments of the orchestra",
		body: "The orchestra as a working instrument — what each section can do, how it sounds, how to write for it idiomatically. You'll read scores, weigh balance, and orchestrate piano works to hear what comes back.",
		outcome:
			"You'll orchestrate a Romantic piano work for full orchestra, writing idiomatically and using timbre to shape the structure.",
	},
	{
		name: "Composition",
		subtitle: "Your own voice, on the foundation of the craft",
		body: "Now the craft goes to work on your own music. Short forms first — a piano miniature, a song, a quartet movement — then larger ones as your instincts settle. Style is yours to find; the rigour underneath it is what we build.",
		outcome:
			"You'll finish several pieces in your own voice, with the technique to take on whatever you write next.",
	},
	{
		name: "Student Reviews",
		subtitle: "Detailed feedback on your written work",
		body: "Less a module than the thread running through all of them. Every exercise you write comes back marked — corrections, alternatives, and the reasoning behind each one. It's the slow part, and it's the part that teaches.",
		outcome:
			"Every exercise you write is read and answered. This is the substance of the studio.",
	},
] as const;

export type Curriculum = typeof curriculum;

/**
 * Pedagogical phases — the eight modules grouped 3 + 2 + 2 + 1 by how they
 * actually relate. Used by curriculum-page layouts that present the path
 * as a small number of phases rather than a flat list.
 *
 * Numbers (count of modules per phase): 3, 2, 2, 1.
 */
export interface CurriculumPhase {
	/** Display label for the phase. */
	label: string;
	/** Short prose description, one sentence. */
	intro: string;
	/** The modules in this phase, in curriculum order. */
	modules: readonly CurriculumModule[];
}

export const phases: readonly CurriculumPhase[] = [
	{
		label: "Foundations",
		intro:
			"The grammar of tonal writing. Harmony, counterpoint, and chorale-style four-voice writing — the language the rest of the curriculum is written in.",
		modules: curriculum.slice(0, 3), // I, II, III
	},
	{
		label: "Form and structure",
		intro:
			"From bar-by-bar craft to whole-movement architecture. Fugue, then the larger forms of common-practice composition.",
		modules: curriculum.slice(3, 5), // IV, V
	},
	{
		label: "Application",
		intro:
			"Putting the craft to work. Orchestrating for real instruments, then composing your own pieces with the technical foundation underneath.",
		modules: curriculum.slice(5, 7), // VI, VII
	},
	{
		label: "Throughout the path",
		intro:
			"Every exercise you write is read and answered with detailed individual feedback — the steady conversation that carries you through the whole curriculum.",
		modules: curriculum.slice(7, 8), // VIII
	},
] as const;

export type Phases = typeof phases;

/**
 * Convert a zero-based module index into an uppercase Roman numeral.
 * Used by curriculum components to derive the displayed numeral from the
 * module's position in `curriculum` — keeps the data and the visual
 * sequence in sync without storing the numeral on each entry.
 */
export function toRomanNumeral(index: number): string {
	const numerals = [
		"I",
		"II",
		"III",
		"IV",
		"V",
		"VI",
		"VII",
		"VIII",
		"IX",
		"X",
		"XI",
		"XII",
	];
	return numerals[index] ?? String(index + 1);
}

/**
 * Pair each phase with the absolute curriculum-wide index of its first
 * module, so a component iterating phase-by-phase can still produce a
 * single continuous I…VIII sequence across the cards.
 */
export const phasesWithOffsets: ReadonlyArray<{
	readonly phase: CurriculumPhase;
	readonly startIndex: number;
}> = phases.reduce<Array<{ phase: CurriculumPhase; startIndex: number }>>(
	(acc, phase) => {
		const last = acc[acc.length - 1];
		const startIndex = last ? last.startIndex + last.phase.modules.length : 0;
		acc.push({ phase, startIndex });
		return acc;
	},
	[],
);
