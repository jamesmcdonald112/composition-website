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
		body: "Triadic harmony from figured bass through to the chromatic harmony of the late nineteenth century. Voice-leading, modulation, chorale writing in the style of Bach, and harmonic analysis of repertoire from Corelli to Brahms.",
		outcome:
			"By the end of the module you will read figured bass fluently, harmonise a chorale melody in four parts, and analyse harmonic structure in any tonal score.",
	},
	{
		name: "Counterpoint",
		subtitle: "Independent voices in motion",
		body: "Begins with the strict species counterpoint of Fux — two voices, note against note — and works outwards through three and four voices, free counterpoint, and the contrapuntal procedures of the Baroque.",
		outcome:
			"By the end of the module you will write fluently in two, three, and four voices, and hear independent voices as melodic lines rather than as harmonic verticals.",
	},
	{
		name: "Chorales",
		subtitle: "Bach's four-voice writing as the foundation",
		body: "The chorale as the central study object of the conservatoire tradition. Detailed work on Bach's 371 chorales — analysis, harmonisation of given melodies, and original chorale writing in the style.",
		outcome:
			"By the end of the module you will harmonise a chorale melody in the Bach style with idiomatic voice-leading, cadential patterns, and harmonic rhythm.",
	},
	{
		name: "Fugue",
		subtitle: "Strict imitative counterpoint",
		body: "The fugue as the highest discipline of contrapuntal writing. Subject and answer, countersubject, exposition, episode and stretto, examined through Bach's Well-Tempered Clavier and the Art of Fugue.",
		outcome:
			"By the end of the module you will write a complete three- or four-voice fugue with a coherent subject, a well-formed exposition, and structurally meaningful episodes and stretti.",
	},
	{
		name: "Form and Analysis",
		subtitle: "How a piece is built",
		body: "The forms of common-practice composition — binary, ternary, sonata, rondo, variation, fugue — studied through analysis of repertoire from Haydn through to Shostakovich. Schenkerian reduction introduced where it clarifies structure.",
		outcome:
			"By the end of the module you will analyse the formal structure of any common-practice work, and write coherent movements in sonata, rondo, and variation form.",
	},
	{
		name: "Orchestration",
		subtitle: "Writing for the instruments of the orchestra",
		body: "The orchestra as a working instrument — the ranges, transpositions, timbres, and idiomatic writing of strings, woodwinds, brass, and percussion. Score reading, instrumental balance, and the orchestration of piano works as a primary exercise.",
		outcome:
			"By the end of the module you will orchestrate a Romantic-era piano work for full orchestra with idiomatic part-writing, balanced voicing, and structural use of timbre.",
	},
	{
		name: "Composition",
		subtitle: "Your own voice, on the foundation of the craft",
		body: "Composition assignments shaped to your own direction. Short forms first — a piano miniature, a song, a string quartet movement — then larger forms as the craft consolidates. Style is not prescribed; the rigour of the underlying writing is.",
		outcome:
			"By the end of the module you will have completed several finished works in your own voice, with the technical foundation to take on any compositional problem ahead of you.",
	},
	{
		name: "Student Reviews",
		subtitle: "Detailed feedback on your written work",
		body: "Across every module, the work you write is reviewed individually. Each exercise comes back with detailed corrections, alternative solutions, and the reasoning behind every change — the part most online courses leave out.",
		outcome:
			"This is not a separate module so much as the substance of the studio. Every exercise you write is read and answered.",
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
			"Every exercise you write is read and answered with detailed individual feedback. This is what separates the studio from a self-paced course.",
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
