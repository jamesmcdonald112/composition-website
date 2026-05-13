/* ── ASTRO ACTIONS REGISTRY ────────────────────────────────────────────────────
   Exports all server actions. Astro reads this file automatically.
   Each action is defined in its own file and imported here.
   CONNECTED TO: form components; success redirect handled in src/pages/contact.astro.
   ────────────────────────────────────────────────────────────────────────────── */
import { contact } from "../features/contact-form/actions/contact";

export const server = {
	contact,
};
