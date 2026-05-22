/**
 * Alexander Pozdnyakov — biography content.
 *
 * Three lengths:
 *   - short:  one-paragraph compression for the homepage "teacher, lightly worn"
 *             section. ~3 sentences.
 *   - medium: a few paragraphs for component intros (e.g. the Method page header).
 *   - full:   the narrative biography for the About page. Prose, not bullets.
 *
 * Voice rules: see .claude/skills/copy/SKILL.md and .claude/skills/ai-isms/SKILL.md
 * — credentials lead, warmth shows in the teaching language, never marketing-speak.
 *
 * TODO (alex): review all three, edit voice where it doesn't sound like you,
 * confirm or correct any factual claim.
 */

export const bio = {
	// One-paragraph compression for the homepage. Names the credentials without
	// listing them like a CV. Ends with a discreet handoff to the full biography.
	short: [
		"Alexander Pozdnyakov is a Russian-Canadian composer based in Montréal. He holds a Doctor of Music in composition from the Université de Montréal, where he studied with Alan Belkin and taught orchestration for four consecutive years. He has been teaching composition, harmony, counterpoint, and orchestration at conservatoire level since 1996, and is composer-in-residence with the Orchestre Interculturel de Montréal.",
	],

	// A few short paragraphs for use as a page intro on Method, Curriculum, or About.
	medium: [
		"Alexander Pozdnyakov is a Russian-Canadian composer based in Montréal, and a member of the Union of Composers of Russia since 2013.",
		"He trained at the Gnesin Russian Academy of Music in Moscow under Tigran Chernoff, completed his Master's and Doctorate at the Université de Montréal under Alan Belkin, and has taught composition, harmony, counterpoint, and orchestration at conservatoire level since 1996 — first at the Gnesin Academy, then at the Université de Montréal.",
		"His music has been performed across Europe, Asia, and the Americas. He is composer-in-residence with the Orchestre Interculturel de Montréal.",
	],

	// Long-form biography for the About page. Narrative prose, presented as one
	// continuous reading rather than CV bullets. Each paragraph is a chapter.
	// The structured CV (`alex.ts`) follows underneath as the supporting
	// detail; this narrative is the human side.
	//
	// TODO (alex): every paragraph here is in your voice as best I could
	// reconstruct from the brief. Edit anything that doesn't sound like you,
	// and confirm or correct any factual claim.
	full: [
		{
			heading: "Penza and Moscow",
			paragraphs: [
				"Alexander Pozdnyakov was born in Penza, in central Russia, where he completed his early studies in piano at the School of Music and then in music theory at the College of Music. By the time he was eighteen he had decided that composition was what he wanted to do; in 1991 he entered the composition class of Professor Tigran Chernoff at the Gnesin Russian Academy of Music in Moscow.",
				"The training at the Gnesin Academy was strict in the way the Russian conservatoires have always been strict — first species counterpoint before free counterpoint, four-part chorale writing in the style of Bach before any larger form, fugue treated as a discipline of mind rather than as an academic exercise. He graduated with honours in 1996 and was kept on at the Academy as a teacher: a senior lecturer in music informatics, a member of the entrance-examination jury for solfège and harmony, and from 1998 a professor of solfège, harmony, and composition at the Centre of Education №686 in Moscow.",
				"During those years he also completed a doctorate in philosophy at Moscow State University of Service. The thesis examined the problem of harmony in the philosophical-aesthetic conception of Leibniz — the seventeenth-century mathematician who, before he was anything else, was a serious theorist of musical proportion. Two academic papers on Leibniz's musical-mathematical thought were published by the Russian Academy of Music in the years that followed.",
			],
		},
		{
			heading: "Montréal",
			paragraphs: [
				"In 2004 he moved to Montréal and entered the Université de Montréal, where he studied composition with Alan Belkin. He completed a Master's degree in 2006 and a Doctorate in Music in 2012. From 2007 to 2011 he taught orchestration at the Faculty of Music as a part-time lecturer, responsible for both the introductory and advanced courses; from 2004 to 2007 he had also worked as an auxiliary in the counterpoint class.",
				"The move from one conservatoire culture to another sharpened both. The Russian school he was trained in was uncompromising about technique and uncompromising about hearing; the Montréal years added a different kind of pragmatism — the French-Canadian habit of asking, after every technical exercise, what it is actually *for* in a finished piece. The combination is the foundation of how he teaches now.",
				"His music has been performed in concert halls across Europe, Asia, and the Americas, including the Salle Claude-Champagne in Montréal, the Bolshoi Hall of the Moscow Conservatory, the Gnesin Academy's Bolshoi and Maly Halls, and the Petrozavodsk Conservatory. He is composer-in-residence with the Orchestre Interculturel de Montréal, a member of the Union of Composers of Russia since 2013, and a coordinator and jury member of the Crescendo International Music Competition in New York since 2010.",
			],
		},
		{
			heading: "Compositions",
			paragraphs: [
				"His output runs from the chamber miniature to the full orchestra. The orchestral works include a Symphony, a Partita, three concertos (for piano, for two pianos and orchestra in the Fujiyama, and a triple concerto for oboe, horn, and strings), the Symphony of Elements, Signs of Zodiac, On a Russian Theme, KOLOcall, the Rhapsody on Jewish Themes, and the prize-winning Break-dance and Romeo and Juliette.",
				"The chamber and instrumental music includes a String Quartet, a Brass Quintet, Five Fugues for three clarinets, a Sonata for flute and clarinet, a Sonata for bassoon solo, a Fantasy for violin solo, the Suite for oboe and harpsichord, and Canons for cello and percussion. For piano: a Sonata, the Slavic Sonata, a Suita, Variations, a Fantasy, Diptych, Impulses, Sketches, Two Preludes, and Fairytales.",
				"His vocal works range from Que Dieu Soit, for choir, organ and oboe on a poem by Anne Hébert, through a Kyrie for unaccompanied choir, to song cycles on poems by Ishikawa Takuboku, Samuil Marshak, and Robert Burns. The full list is in the curriculum vitae below.",
			],
		},
		{
			heading: "Recognition",
			paragraphs: [
				"Among the larger awards: winner of the New Generation Orchestra Competition for Romeo and Juliette (2012); winner of the Orchestra Competition of the Université de Montréal (2009); winner of the Clément-Morin Competition for choir (2007–08); winner of the First All-Russia Composer Competition for Young Composers of Russia (1993); and the UNESCO 50-Year Jubilee Scholarship for Outstanding Achievement in Creative Activity (1995).",
				"Earlier in his career he held the personal Myaskovsky Scholarship of the Rostropovich Fund, a scholarship of the Alexander Glazunov Fund in Munich, and a commission from the Russian Ministry of Culture for the Piano Variations. The Master's and Doctoral scholarships at the Université de Montréal ran from 2004 through 2010.",
			],
		},
		{
			heading: "What I teach, and how",
			paragraphs: [
				"The studio teaches the curriculum a conservatoire student would work through: harmony, counterpoint, chorale writing in the Bach style, fugue, form and analysis, orchestration, and original composition — with detailed individual feedback running through all of it. It is a single programme of study, and the modules build on each other in the order a real conservatoire training would take them.",
				"The model is master and apprentice. One student at a time, taught online, paced to the student. You write; the work is read and answered; the corrections come back with the reasoning behind every change, alternative solutions where they exist, and the passage in the repertoire the principle is drawn from. This is the slow part, and the part that teaches.",
				"The studio is for composers who already write and want the craft underneath their music done properly — conservatoire students, self-taught composers ready to go deeper, working composers wanting real depth in a particular area. If you have decided composition is what you want to do, this is the place to build the technique that lets you do it well.",
			],
		},
		{
			heading: "Outside the music",
			paragraphs: [
				"Outside composition, Alex teaches chess for the Canadian Association \"Chess and Math\" and is a tournament player at the Chess Club of Montréal. In the 1990s he was a research participant in a Dutch-led project to transfer musical scores into Braille, and a co-developer of the Allegro-Brail score-reading software and hardware — work that took him to introductory workshops in the Netherlands, Costa Rica, Vietnam, and Malaysia. He speaks Russian, French, and English.",
			],
		},
	],
} as const;

export type Bio = typeof bio;
