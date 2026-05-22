/**
 * Alexander Pozdnyakov — structured CV.
 *
 * This file is the source of truth for the *factual* side of Alex's record:
 * education, teaching posts, awards, works, performances, publications, and
 * professional activity. The narrative biography lives in `bio.ts` and is
 * presented as prose chapters; this file is presented as conservatoire-
 * programme tables (small-caps section labels, year-prefixed rows).
 *
 * Voice rules: never embellish. Use the institution's own name for the place.
 * Dates are years only unless the brief gives finer precision. Where the
 * source brief uses Russian or French names (e.g. "Penza", "Université de
 * Montréal", "Salle Claude-Champagne"), keep those forms — they're part of
 * the conservatoire register.
 *
 * Everything below is sourced from the project brief Alex provided. Anything
 * marked `TODO (alex):` needs his confirmation before launch.
 */

// ── Education ──────────────────────────────────────────────────────────────
// In reverse-chronological order (most recent first), as standard for a CV.

export interface EducationEntry {
	/** Years attended, e.g. "2006–2012". */
	years: string;
	/** Degree or qualification awarded. */
	qualification: string;
	/** Institution. */
	institution: string;
	/** Optional context — supervisor, field, distinction. */
	note?: string;
}

export const education: readonly EducationEntry[] = [
	{
		years: "2006–2012",
		qualification: "Doctor of Music in Composition",
		institution: "Université de Montréal",
		note: "Under Professor Alan Belkin",
	},
	{
		years: "2004–2006",
		qualification: "Master of Music in Composition",
		institution: "Université de Montréal",
		note: "Under Professor Alan Belkin",
	},
	{
		years: "1998–2002",
		qualification: "Doctorate in Philosophy (Aesthetics)",
		institution: "Moscow State University of Service",
		note: "Thesis: the problem of harmony in the philosophical-aesthetic conception of Leibniz",
	},
	{
		years: "1996–1998",
		qualification: "Professor's Assistance",
		institution: "Gnesin Russian Academy of Music, Moscow",
	},
	{
		years: "1991–1996",
		qualification: "Graduate Diploma — Composer and Teacher of Music Theory",
		institution: "Gnesin Russian Academy of Music, Moscow",
		note: "Composition class of Professor Tigran Chernoff, graduated with honours",
	},
	{
		years: "1988–1991",
		qualification: "Theory of Music and Composition",
		institution: "Penza Music College (Russia)",
	},
] as const;

// ── Teaching positions ─────────────────────────────────────────────────────

export interface TeachingPosition {
	years: string;
	role: string;
	institution: string;
	/** Optional one-line description of the principal duties. */
	note?: string;
}

export const teachingPositions: readonly TeachingPosition[] = [
	{
		years: "2007–2011",
		role: "Part-time lecturer",
		institution: "Faculty of Music, Université de Montréal",
		note: "Responsible for the courses Orchestration 1 and 2",
	},
	{
		years: "2004–2007",
		role: "Auxiliary, counterpoint class",
		institution: "Université de Montréal",
	},
	{
		years: "2001–2004",
		role: "Senior lecturer",
		institution: "Gnesin Russian Academy of Music, Moscow",
		note: "Music informatics (Finale, Cubase, Sound Forge); chair member of the entrance-examination jury for solfège and harmony",
	},
	{
		years: "1998–2002",
		role: "Professor of solfège, harmony and composition",
		institution: "Centre of Education №686, Moscow",
	},
] as const;

// ── Awards & scholarships ──────────────────────────────────────────────────
// Split into "major" (the prestigious lineage signals) and "other" (the full
// list, presented as a year-prefixed table). The split is editorial: it lets
// a reader catch the strongest signals in seven lines, then drill in.

export interface Award {
	year: string;
	title: string;
	/** Optional issuing body or context. */
	body?: string;
}

export const majorAwards: readonly Award[] = [
	{
		year: "2012",
		title: "Winner, New Generation Orchestra Competition (Romeo and Juliette)",
	},
	{
		year: "2009",
		title: "Winner, Orchestra Competition",
		body: "Université de Montréal",
	},
	{
		year: "2007–2008",
		title: "Winner, Clément-Morin Competition for choir",
	},
	{
		year: "1998",
		title: "Personal Myaskovsky Scholarship",
		body: "Rostropovich Fund",
	},
	{
		year: "1995",
		title:
			"UNESCO 50-Year Jubilee Scholarship for Outstanding Achievement in Creative Activity",
	},
	{
		year: "1993",
		title:
			"First Prize, First All-Russia Composer Competition — Young Composers of Russia",
	},
	{
		year: "1992",
		title: "Commission for the Piano Variations",
		body: "Ministry of Culture of Russia",
	},
] as const;

export const otherAwards: readonly Award[] = [
	{
		year: "2006",
		title:
			"Inscription in the List of Honour, Dean of the Faculty of Superior Studies",
	},
	{
		year: "2006",
		title: "Winner, Atelier of Contemporary Music, Montréal",
	},
	{
		year: "2005–2006",
		title: "Scholarship, Friends of the Arts Fund",
	},
	{
		year: "2004–2010",
		title: "Master's and Doctoral scholarships",
		body: "Université de Montréal",
	},
	{
		year: "2004–2005",
		title: "Scholarship, Friends of the Arts Fund",
	},
	{
		year: "2003",
		title: "Scholarship, Alexander Glazunov Fund",
		body: "Munich",
	},
	{
		year: "1996",
		title:
			"Second Prize, Composition Competition “Tribute to Boris Tchaikovsky”",
	},
	{
		year: "1988–1991",
		title: "Personal Scholarship, Penza Music Society",
	},
] as const;

// ── Works ──────────────────────────────────────────────────────────────────
// Grouped by genre. Each genre is a small section in the rendered CV.

export interface WorkGroup {
	/** Genre label — small-caps heading. */
	label: string;
	/** The works as a single comma-separated string, since titles read better
	 *  in prose than as bullets. Titles can include parenthetical scoring. */
	works: string;
}

export const works: readonly WorkGroup[] = [
	{
		label: "Orchestra",
		works:
			"Symphony · Partita · Concerto for Piano and Strings · Concerto for Oboe, Horn and Strings · Fujiyama (Concerto for two pianos and orchestra) · Signs of Zodiac · Symphony of Elements · On a Russian Theme · KOLOcall · Andante · Break-dance · Rhapsody on Jewish Themes",
	},
	{
		label: "Vocal",
		works:
			"Que Dieu Soit, for choir, organ and oboe (poem by Anne Hébert) · Kyrie, for choir a cappella · Three Songs for children's choir · Two men's trios · Vocal cycle for bass and piano (poems by Ishikawa Takuboku) · Five Songs for bass and piano (poems by Samuil Marshak) · Romance for soprano and piano (poem by Robert Burns)",
	},
	{
		label: "Piano",
		works:
			"Sonata · Slavic Sonata · Suita · Variations · Fantasy · Diptych · Impulses · Sketches · Two Preludes · Fairytales",
	},
	{
		label: "Chamber",
		works:
			"String Quartet · Brass Quintet · Five Fugues for three clarinets · Sonata for flute and clarinet · Sonata for bassoon solo · Fantasy for violin solo · Suite for oboe and harpsichord · Nocturnes for violin and clarinet · Canons for cello and percussions",
	},
] as const;

// ── Selected performances ──────────────────────────────────────────────────
// Year-prefixed entries. Most-recent first. Conductor and venue where given.

export interface Performance {
	year: string;
	/** Single rich line — work, conductor, venue, year etc. */
	description: string;
}

export const performances: readonly Performance[] = [
	{
		year: "2013",
		description:
			"Rhapsody on Jewish Themes — conductor Sylvia Tabor, Salle Claude-Champagne",
	},
	{
		year: "2013",
		description: "KOLOcall — conductor Sylvia Tabor, Salle Claude-Champagne",
	},
	{
		year: "2012",
		description:
			"Break-dance — conductor Boris Brott, The National Academy Orchestra of Canada, Hamilton",
	},
	{
		year: "2012",
		description: "Andante — conductor Alain Aubut, Orchestra New Generation",
	},
	{
		year: "2011",
		description: "KOLOcall — conductor Sylvia Tabor, Salle Claude-Champagne",
	},
	{
		year: "2010",
		description:
			"On a Russian Theme — Orchestra of Université de Montréal, conductor Alain Trudel, Salle Claude-Champagne",
	},
	{
		year: "2009",
		description:
			"Concert “Four Elements” — works of Alexander Pozdnyakov, conductor Airat Ichmouratov, Salle Claude-Champagne",
	},
	{
		year: "2008",
		description:
			"Signs of Zodiac — conductor Loraine Vaillancourt, Salle Claude-Champagne",
	},
	{
		year: "2007",
		description:
			"Concert of piano works by Alan Belkin and Alexander Pozdnyakov — performed by Tatiana Shevelev and Natalia Mirzoeva, Salle Claude-Champagne",
	},
	{
		year: "2006",
		description:
			"Slavic Sonata — performed by Natalia Mirzoeva, Salle Claude-Champagne",
	},
	{
		year: "2005",
		description:
			"Vocal cycle on poems by Ishikawa Takuboku — Festival of Contemporary Music, Big Hall of Petrozavodsk Conservatory, performed by Vladimir Morozov",
	},
	{
		year: "1991–2004",
		description:
			"Numerous performances in Moscow concert halls — Bolshoi Hall of the Moscow Conservatory, Bolshoi and Maly Halls of the Gnesin Academy, Concert Hall of the House of the Union of Composers of Russia, Concert Hall of the House of Science",
	},
	{
		year: "1990",
		description:
			"Concert of works by Alexander Pozdnyakov — Penza Music College Hall",
	},
] as const;

// ── Publications & theses ──────────────────────────────────────────────────

export interface Publication {
	year: string;
	citation: string;
}

export const publications: readonly Publication[] = [
	{
		year: "2002",
		citation:
			"Thesis: Problem of Harmony in the Philosophical-Aesthetic Conception of Leibniz (PhD)",
	},
	{
		year: "2001",
		citation:
			"Sources of the musical-aesthetic ideas of Leibniz, in *Philosophy and Music*, Russian Academy of Music, Moscow",
	},
	{
		year: "1999",
		citation:
			"Antonova O. & Pozdnyakov A., On the question of musical-mathematical research in Leibniz, Russian Academy of Music, Moscow",
	},
] as const;

// ── Professional activity ──────────────────────────────────────────────────
// The texture that doesn't fit elsewhere — competition juries, residencies,
// memberships, and the more unusual through-lines (Brail-music software,
// teaching at the Canadian "Chess and Math" association). These read as the
// portrait of a working composer-pedagogue rather than padding.

export interface Activity {
	years: string;
	description: string;
}

export const professionalActivity: readonly Activity[] = [
	{
		years: "Current",
		description:
			"Composer-in-residence with the Orchestre Interculturel de Montréal (OIM-MIO)",
	},
	{
		years: "Since 2013",
		description: "Member of the Union of Composers of Russia",
	},
	{
		years: "Since 2010",
		description:
			"Coordinator and jury member, Crescendo International Music Competition, New York",
	},
	{
		years: "Since 2010",
		description: "Professor, Canadian Association “Chess and Math”",
	},
	{
		years: "Since 2006",
		description:
			"Organiser of courses in Music, Philosophy, and Chess at the Russian School Gramota, Montréal",
	},
	{
		years: "1998–2002",
		description:
			"Workshops introducing the Allegro-Brail music-software hardware in the Netherlands, Costa Rica, Vietnam, and Malaysia",
	},
	{
		years: "1994–1998",
		description:
			"Research participant, project to transfer musical scores to Braille (Force Fund, the Netherlands) — co-developer of the Allegro-Brail software and hardware",
	},
	{
		years: "1993–2002",
		description:
			"Jury member, National Composers' Competition, Penza (Russia)",
	},
] as const;

// ── Languages ──────────────────────────────────────────────────────────────

export const languages: readonly string[] = ["French", "English", "Russian"] as const;

// ── Aggregate type for the whole CV ────────────────────────────────────────

export const alex = {
	education,
	teachingPositions,
	majorAwards,
	otherAwards,
	works,
	performances,
	publications,
	professionalActivity,
	languages,
} as const;

export type Alex = typeof alex;
