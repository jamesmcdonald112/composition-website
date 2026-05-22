// @ts-check
// ── ASTRO CONFIG ──────────────────────────────────────────────────────────────
// PROJECT: Pozdnyakov Composition Studio
// ADAPTER: Vercel.
// ENV: RESEND_API_KEY (contact form) — server-only secret.
// VITE: No Tailwind. Plain CSS only. Do not add CSS framework plugins here.
// SITEMAP: @astrojs/sitemap reads the `site` value below to generate canonical
//   URLs in /sitemap-index.xml. Update `siteUrl` in src/config/studio.ts and
//   the sitemap will follow automatically.
// ──────────────────────────────────────────────────────────────────────────────

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig, envField } from "astro/config";
import { studio } from "./src/config/studio.ts";

// https://astro.build/config
export default defineConfig({
	site: studio.siteUrl,
	adapter: vercel({
		webAnalytics: { enabled: false },
	}),
	output: "server",
	integrations: [mdx(), sitemap()],
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
		},
	},
});
