/*
  ROUTE: /robots.txt
  PURPOSE: Tells search-engine crawlers what they can crawl, and points them
    at the sitemap so they can discover every page on the site efficiently.
  REUSE: Reads studio.siteUrl so the sitemap URL stays in sync automatically
    when the site moves to its production domain.
*/
import type { APIRoute } from "astro";
import { studio } from "../config/studio";

export const GET: APIRoute = () => {
	const siteUrl = studio.siteUrl.replace(/\/$/, ""); // strip trailing slash for clean concatenation
	const body = `User-agent: *
Allow: /
Disallow: /thank-you
Disallow: /dev/

Sitemap: ${siteUrl}/sitemap-index.xml
`;

	return new Response(body, {
		headers: { "Content-Type": "text/plain" },
	});
};
