/**
 * Studio configuration — single source of truth for studio identity,
 * curriculum, lessons, and resources. Every component should read from
 * here rather than hard-coding any of these values.
 *
 * Anything marked `TODO (alex):` needs Alex's review before launch.
 * Anything marked `TODO (james):` needs my action before launch.
 */

export const studio = {
	// Production site URL. Used as the base for canonical tags, OG image URLs,
	// the sitemap, robots.txt, and structured data.
	// TODO (james): swap to the production domain once it's chosen and pointed at Netlify.
	siteUrl: "https://pozdnyakov-studio.com/",

	name: "Pozdnyakov Composition Studio",
	shortName: "Pozdnyakov Studio",
	teacher: "Alexander Pozdnyakov",
	tagline: "Russian conservatoire training in harmony",

	// Lineage — Chernoff (Gnesin Academy, Moscow) → Belkin (Université de Montréal).
	// Used in the "teacher, lightly worn" section and on the About page.
	lineage: [
		"Tigran Chernoff (Gnesin Russian Academy of Music)",
		"Alan Belkin (Université de Montréal)",
	],

	// Location — Montréal. Shown in the hero bottom bar as a quiet credential
	// (online studio, taught from Montréal) rather than as a directions block.
	location: {
		city: "Montréal",
		country: "Canada",
		display: "Taught from Montréal",
	},

	// Public-facing contact details.
	// TODO (alex): confirm preferred public email address.
	email: {
		primary: "alex@pozdnyakov-studio.com",
		formTo: "alex@pozdnyakov-studio.com",
	},

	// Year the studio was established. Used for trust signals.
	// TODO (alex): pick a date. Options:
	//   1996 — first taught at conservatoire level (Gnesin Academy)
	//   2007 — first taught at Université de Montréal
	//   2026 — when the online studio launched
	established: 1996,

	socialLinks: [] as ReadonlyArray<{ label: string; href: string }>,
	// TODO (alex): YouTube channel link, any other public channels.
	// Example entry: { label: "YouTube", href: "https://www.youtube.com/..." }

	seo: {
		defaultTitle: "Pozdnyakov Composition Studio",
		defaultDescription:
			"Russian conservatoire training in harmony, counterpoint, fugue, orchestration, and composition. Online lessons and a structured curriculum for serious composers, taught by Alexander Pozdnyakov, Doctor of Music (Université de Montréal).",
		defaultOgImage: "/images/open-graph/og-default.webp",
		defaultOgImageAlt:
			"Pozdnyakov Composition Studio — composition training for serious composers",
	},
} as const;

// Years the studio has been teaching at conservatoire level. Conservative by
// one to avoid overstating before the anniversary month.
export const yearsTeaching = new Date().getFullYear() - studio.established - 1;
