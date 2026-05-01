import teamSectionBackground from "../assets/images/pages/property/team.webp";
import dukePhoto from "../assets/team/duke.webp";
import maryPhoto from "../assets/team/maryFull.webp";
import nicholasPhoto from "../assets/team/nicholas.webp";
import richardPhoto from "../assets/team/richard.webp";
import { yearsInPractice } from "./firm";
// ── Solicitor credential records ──────────────────────────────────────────────
// Used by AttributionBlock on every page. Fill in university and admissionYear
// once confirmed with Mary — placeholders marked with TODO.

export const solicitors = {
	mary: {
		name: "Mary Molloy",
		role: "Principal Solicitor",
		photo: maryPhoto,
		degree: "LLB", // TODO: confirm university name
		university: "TODO: University name",
		admissionYear: "TODO: Year",
		credentials: "LLB, Admitted to the Roll of Solicitors, Law Society of Ireland", // TODO: add university + year once confirmed
		specialism: "Property, wills and probate, and private client matters",
	},
	nicholas: {
		name: "Nicholas O'Shea",
		role: "Solicitor",
		photo: nicholasPhoto,
		degree: "LLB", // TODO: confirm university name
		university: "TODO: University name",
		admissionYear: "TODO: Year",
		credentials: "LLB, Admitted to the Roll of Solicitors, Law Society of Ireland", // TODO: add university + year once confirmed
		specialism: "Property, conveyancing, and private client matters",
	},
	richard: {
		name: "Richard O'Shea",
		role: "Solicitor",
		photo: richardPhoto,
		degree: "LLB", // TODO: confirm university name
		university: "TODO: University name",
		admissionYear: "TODO: Year",
		credentials: "LLB, Admitted to the Roll of Solicitors, Law Society of Ireland", // TODO: add university + year once confirmed
		specialism: "Property, conveyancing, and probate matters",
	},
} as const;

export type Solicitor = typeof solicitors[keyof typeof solicitors];

// ── Team section content ──────────────────────────────────────────────────────

export const teamSectionContent = {
	title: "Meet our team",
	backgroundImage: teamSectionBackground,
	intro: `Mary Molloy Solicitor has practised continuously on Rose Inn Street, Kilkenny for over ${yearsInPractice} years. The firm is a family practice — Mary is the principal solicitor; her sons Nicholas and Richard are also solicitors at the firm. All client matters are handled by qualified solicitors.`,
	members: [
		{
			name: solicitors.mary.name,
			role: solicitors.mary.role,
			bio: "Mary is the principal solicitor at the firm, which she founded in Kilkenny in 1979. Her practice covers property, wills and probate, and private client matters.",
			photo: maryPhoto,
		},
		{
			name: solicitors.nicholas.name,
			role: solicitors.nicholas.role,
			bio: "Nicholas advises clients on property and private client matters at the firm, including conveyancing, wills and probate, and family law.",
			photo: nicholasPhoto,
		},
		{
			name: solicitors.richard.name,
			role: solicitors.richard.role,
			bio: "Richard advises clients on buying and selling property, conveyancing, and probate matters at the firm.",
			photo: richardPhoto,
		},
		{
			name: "Duke",
			role: "Office Companion",
			bio: "Providing daily morale support to the team and a friendly welcome to visitors.",
			photo: dukePhoto,
		},
	],
} as const;

export type TeamSectionContent = typeof teamSectionContent;
