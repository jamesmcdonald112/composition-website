// Shared types for the LegalPageContent component and the legal-page configs
// that feed into it (e.g. accessibility, complaints, privacy, disclaimer).
//
// Why this file exists:
//   The LegalPageContent component renders a small set of structured fields
//   (title, intro, list of sections, etc.). Every legal-page config in
//   src/config/legal/ must produce data in that exact shape. Defining the
//   shape here once means every config can declare itself with
//   `: LegalPageContent` to get autocomplete + typo-checking in the editor.
//
// How to use it in a new legal-page config:
//   import type { LegalPageContent } from "../../components/ui/LegalPageContent/LegalPageContent.types";
//
//   export const myLegalPageContent: LegalPageContent = {
//     seo: { title: "...", description: "...", canonicalPath: "..." },
//     title: "...",
//     sections: [...],
//   };

export interface LegalPageSection {
	heading: string;
	body?: string;
	list?: readonly string[];
	footer?: string;
	afterListBody?: string;
	afterListItems?: readonly string[];
}

export interface LegalPageContent {
	seo: {
		title: string;
		description: string;
		canonicalPath: string;
	};
	title: string;
	intro?: string;
	sections: readonly LegalPageSection[];
	reviewDate?: string;
	footerNote?: string;
}
