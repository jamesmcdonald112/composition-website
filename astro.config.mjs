// @ts-check
// ── ASTRO CONFIG ──────────────────────────────────────────────────────────────
// TEMPLATE: Solicitor website
// ADAPTER: Set the deployment adapter here (Netlify, Vercel, etc.)
// ENV: RESEND_API_KEY (contact form), GOOGLE_PLACES_API_KEY (reviews) — both server-only secrets
// SESSION: Netlify adapter auto-configures Netlify Blobs as the session driver — do not override
// VITE: No Tailwind. Plain CSS only. Do not add CSS framework plugins here.
// ──────────────────────────────────────────────────────────────────────────────
import netlify from "@astrojs/netlify";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	adapter: netlify(),
	output: "server",
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
			GOOGLE_PLACES_API_KEY: envField.string({ context: "server", access: "secret" }),
		},
	},
});
