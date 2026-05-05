// @ts-check
// ── ASTRO CONFIG ──────────────────────────────────────────────────────────────
// TEMPLATE: Solicitor website
// ADAPTER: Set the deployment adapter here (Netlify, Vercel, etc.)
// ENV: RESEND_API_KEY (contact form), GOOGLE_PLACES_API_KEY (reviews) — both server-only secrets
// SESSION: Netlify adapter auto-configures Netlify Blobs as the session driver — do not override
// VITE: No Tailwind. Plain CSS only. Do not add CSS framework plugins here.
// SITEMAP: @astrojs/sitemap reads the `site` value below to generate canonical
//   URLs in /sitemap-index.xml. To reuse this template for a new client, update
//   `siteUrl` in src/config/firm.ts and the sitemap will follow automatically.
// ──────────────────────────────────────────────────────────────────────────────
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import { firm } from "./src/config/firm.ts";

// https://astro.build/config
export default defineConfig({
	site: firm.siteUrl,
	adapter: netlify(),
	output: "server",
	integrations: [sitemap()],
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
			GOOGLE_PLACES_API_KEY: envField.string({ context: "server", access: "secret" }),
		},
	},
});
