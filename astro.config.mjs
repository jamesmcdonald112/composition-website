// @ts-check
// ── ASTRO CONFIG ──────────────────────────────────────────────────────────────
// PROJECT: Pozdnyakov Composition Studio
// ADAPTER: Netlify.
// ENV: RESEND_API_KEY (contact form) — server-only secret.
// VITE: No Tailwind. Plain CSS only. Do not add CSS framework plugins here.
// SITEMAP: @astrojs/sitemap reads the `site` value below to generate canonical
//   URLs in /sitemap-index.xml. Update `siteUrl` in src/config/studio.ts and
//   the sitemap will follow automatically.
// HEADERS: Security headers (incl. CSP) live in netlify.toml at the project root.
// ──────────────────────────────────────────────────────────────────────────────

import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";
import { studio } from "./src/config/studio.ts";

// https://astro.build/config
export default defineConfig({
	site: studio.siteUrl,
	adapter: netlify(),
	output: "server",
	integrations: [mdx(), sitemap()],
	env: {
		schema: {
			RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
		},
	},
});
