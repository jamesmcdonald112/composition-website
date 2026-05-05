// @ts-check
// ── ASTRO CONFIG ──────────────────────────────────────────────────────────────
// TEMPLATE: Solicitor website
// ADAPTER: Vercel — region pinned to Dublin (dub1) in the Vercel dashboard for
//   EU data residency. See DEPLOYMENT.md.
// ENV: RESEND_API_KEY (contact form), GOOGLE_PLACES_API_KEY (reviews) — both server-only secrets
// VITE: No Tailwind. Plain CSS only. Do not add CSS framework plugins here.
// SITEMAP: @astrojs/sitemap reads the `site` value below to generate canonical
//   URLs in /sitemap-index.xml. To reuse this template for a new client, update
//   `siteUrl` in src/config/firm.ts and the sitemap will follow automatically.
// ──────────────────────────────────────────────────────────────────────────────

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig, envField } from "astro/config";
import { firm } from "./src/config/firm.ts";

// https://astro.build/config
export default defineConfig({
	site: firm.siteUrl,
	adapter: vercel({
		webAnalytics: { enabled: false },
	}),
	output: "server",
	integrations: [sitemap()],
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
			GOOGLE_PLACES_API_KEY: envField.string({
				context: "server",
				access: "secret",
			}),
		},
	},
});
