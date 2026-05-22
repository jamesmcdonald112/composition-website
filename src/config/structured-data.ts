import { studio } from "./studio";

/**
 * Schema.org structured data for the Pozdnyakov Composition Studio.
 *
 * Two entities tied to the same site:
 *  - EducationalOrganization — the studio as a teaching institution
 *  - Person — Alexander Pozdnyakov as the composer and teacher
 *
 * Deliberately omitted: PostalAddress, OpeningHoursSpecification, areaServed.
 * The studio is online-only with no public office and no scheduled hours;
 * emitting placeholder values would mislead search engines.
 */
export function getStructuredData() {
	const siteUrl = new URL("/", studio.siteUrl).toString();
	const imageUrl = new URL(studio.seo.defaultOgImage, studio.siteUrl).toString();
	const sameAs = studio.socialLinks.map((link) => link.href).filter(Boolean);

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "EducationalOrganization",
				"@id": `${siteUrl}#studio`,
				name: studio.name,
				url: siteUrl,
				image: imageUrl,
				founder: { "@id": `${siteUrl}#teacher` },
				...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
			},
			{
				"@type": "Person",
				"@id": `${siteUrl}#teacher`,
				name: studio.teacher,
				jobTitle: "Composer and teacher of composition",
				url: siteUrl,
				image: imageUrl,
				worksFor: { "@id": `${siteUrl}#studio` },
				...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
			},
		],
	};
}
