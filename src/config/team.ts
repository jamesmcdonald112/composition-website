import teamSectionBackground from "../assets/images/pages/property/team.webp";
// import dukePhoto from "../assets/team/duke.webp"; // Duke removed 2026-05-05 — see commented-out entry below
import maryPhoto from "../assets/team/mary.webp";
import nicholasPhoto from "../assets/team/nicholas.webp";
import richardPhoto from "../assets/team/richard.webp";
import { firm, yearsInPractice } from "./firm";

export const solicitors = {
	mary: {
		name: "Mary Molloy",
		role: "Principal Solicitor",
		photo: maryPhoto,
		university: "University College Dublin",
		credentials:
			"Admitted to the Roll of Solicitors 1980, Law Society of Ireland",
	},
	nicholas: {
		name: "Nicholas O'Shea",
		role: "Solicitor",
		photo: nicholasPhoto,
		university: "TODO: University name",
		credentials:
			"Admitted to the Roll of Solicitors, Law Society of Ireland", // TODO: add admission year once confirmed
	},
	richard: {
		name: "Richard O'Shea",
		role: "Solicitor",
		photo: richardPhoto,
		university: "TODO: University name",
		credentials:
			"Admitted to the Roll of Solicitors, Law Society of Ireland", // TODO: add admission year once confirmed
	},
} as const;

export type Solicitor = (typeof solicitors)[keyof typeof solicitors];

// ── Team section content ──────────────────────────────────────────────────────

export const teamSectionContent = {
	title: "Meet our team",
	backgroundImage: teamSectionBackground,
	intro: `Mary Molloy Solicitor has practised continuously on Rose Inn Street, Kilkenny for over ${yearsInPractice} years. The firm is a family practice — Mary is the principal solicitor; her sons Nicholas and Richard are also solicitors at the firm. All client matters are handled by qualified solicitors.`,
	members: [
		{
			name: solicitors.mary.name,
			role: solicitors.mary.role,
			bio: `Mary is the principal solicitor at the firm, which she founded in Kilkenny in ${firm.established}. Her practice covers property, wills and probate, and private client matters.`,
			photo: maryPhoto,
		},
		{
			name: solicitors.nicholas.name,
			role: solicitors.nicholas.role,
			bio: "Nicholas advises clients on property and private client matters at the firm, including conveyancing, wills and probate, and personal injury claims.",
			photo: nicholasPhoto,
		},
		{
			name: solicitors.richard.name,
			role: solicitors.richard.role,
			bio: "Richard O’Shea has extensive experience in Family Law, Litigation and Employment Law, providing clear, practical legal advice and representation.",
			photo: richardPhoto,
		},
		// Duke removed from the team page on the firm's request (2026-05-05).
		// Kept as a commented-out block in case the firm decides to add him
		// back later — the photo asset (`duke.webp`) is still in the repo and
		// the import at the top of this file is preserved.
		// {
		// 	name: "Duke",
		// 	role: "Office Companion",
		// 	bio: "Providing daily morale support to the team and a friendly welcome to visitors.",
		// 	photo: dukePhoto,
		// },
	],
} as const;

export type TeamSectionContent = typeof teamSectionContent;
