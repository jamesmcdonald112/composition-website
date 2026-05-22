// The visible content of /cookie-policy is rendered entirely by the Cookiebot
// `cd.js` script embedded in `src/pages/cookie-policy.astro`. The text shown
// to visitors — banner copy, general cookie introduction, category descriptions,
// per-cookie inventory table, change-consent / withdraw-consent controls — is
// configured in the Cookiebot dashboard, not in this file.
//
// To change what visitors see on /cookie-policy, edit the text directly in
// the Cookiebot dashboard — do not add prose to this config.
//
// This file therefore exists only to provide the page's SEO title and meta
// description in the same shape as every other page config on the site.

export const cookiePolicyPageContent = {
	seo: {
		title: "Cookie Policy",
		description:
			"Cookie policy explaining how cookies and similar technologies are used on this website.",
		canonicalPath: "/cookie-policy",
	},
} as const;
