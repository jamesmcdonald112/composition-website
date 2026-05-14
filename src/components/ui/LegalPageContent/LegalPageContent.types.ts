// Shared types for the LegalPageContent component and the legal-page configs
// that feed into it (e.g. accessibility, complaints, privacy, disclaimer).
//
// Section content model:
//   Each section has a heading plus its body content. For simple sections
//   that are just one paragraph, use the `body: string` shorthand. For
//   anything richer (mixed paragraphs and lists, in any order), use
//   `blocks: Block[]` — an ordered array of typed blocks. Only one of
//   `body` / `blocks` should be set per section.

export type LegalPageBlock =
	| { type: "paragraph"; text: string }
	| { type: "list"; items: readonly string[] };

export interface LegalPageSection {
	heading: string;
	body?: string;
	blocks?: readonly LegalPageBlock[];
}

export interface LegalPageContent {
	seo: {
		title: string;
		description: string;
		canonicalPath: string;
	};
	title: string;
	intro?: string | readonly string[];
	sections: readonly LegalPageSection[];
	reviewDate?: string;
	footerNote?: string;
}
