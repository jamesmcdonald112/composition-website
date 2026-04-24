/**
 * Compliance screenshot script — Regulation 11(f), S.I. No. 644/2020
 *
 * Scans src/pages/ and takes a full-page screenshot of every page,
 * saving them to a dated folder in legal-compliance/compliance-records/.
 *
 * Usage:
 *   1. Start the dev server:  npm run dev
 *   2. Install Playwright:    npx playwright install chromium --with-deps
 *   3. Run this script:       npx tsx compliance-screenshot.ts [label]
 *
 * The optional label is appended to the folder name, e.g:
 *   npx tsx compliance-screenshot.ts launch
 *   → legal-compliance/compliance-records/2026-04-launch/screenshots/
 *
 * Pages inside src/pages/dev/ are excluded automatically.
 */

import { chromium } from "playwright";
import { mkdir, readdir, stat } from "fs/promises";
import { join, relative } from "path";

const BASE_URL = "http://localhost:4321";
const PAGES_DIR = join(process.cwd(), "src", "pages");

async function collectPages(dir: string): Promise<string[]> {
	const entries = await readdir(dir);
	const paths: string[] = [];

	for (const entry of entries) {
		const full = join(dir, entry);
		const info = await stat(full);

		if (info.isDirectory()) {
			if (entry === "dev") continue; // skip dev pages
			paths.push(...(await collectPages(full)));
		} else if (entry.endsWith(".astro")) {
			paths.push(full);
		}
	}

	return paths;
}

function fileToUrl(filePath: string): string {
	const rel = relative(PAGES_DIR, filePath)
		.replace(/\.astro$/, "")
		.replace(/\\/g, "/");

	if (rel === "index") return "/";
	if (rel.endsWith("/index")) return `/${rel.replace(/\/index$/, "")}`;
	return `/${rel}`;
}

const date = new Date().toISOString().slice(0, 7); // YYYY-MM
const label = process.argv[2] ?? "screenshot";
const outputDir = join(
	process.cwd(),
	"legal-compliance",
	"compliance-records",
	`${date}-${label}`,
	"screenshots"
);

async function run() {
	const files = await collectPages(PAGES_DIR);
	const pages = files.map((f) => ({
		name: relative(PAGES_DIR, f).replace(/\.astro$/, "").replace(/\//g, "-"),
		url: fileToUrl(f),
	}));

	await mkdir(outputDir, { recursive: true });

	const browser = await chromium.launch();
	const page = await browser.newPage();
	await page.setViewportSize({ width: 1440, height: 900 });

	console.log(`Saving screenshots to: ${outputDir}\n`);

	let firstPage = true;

	for (const { name, url } of pages) {
		try {
			await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle" });

			if (firstPage) {
				// Step 1: Screenshot the intro overlay while it is playing.
				// The intro starts immediately on page load — capture it at ~1s
				// when the mark, name, and sub-line are all visible mid-animation.
				await page.waitForTimeout(1000);
				await page.screenshot({
					path: join(outputDir, `${name}-intro-overlay.png`),
					fullPage: false, // viewport only — overlay covers the screen
				});
				console.log(`✓  ${url} (intro overlay captured)`);

				// Step 2: Wait for the intro to fully complete and remove itself.
				// Total intro duration is ~4.5s — wait 5s to be safe.
				await page.waitForTimeout(4000);
				firstPage = false;
			}

			// Scroll to bottom to trigger all scroll-based GSAP animations,
			// then wait for them to settle before screenshotting.
			await page.evaluate(() =>
				window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" })
			);
			await page.waitForTimeout(2000);

			// Scroll back to top so the screenshot shows the page from the beginning.
			await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
			await page.waitForTimeout(500);

			await page.screenshot({ path: join(outputDir, `${name}.png`), fullPage: true });
			console.log(`✓  ${url}`);
		} catch (err) {
			console.error(`✗  ${url} — ${err}`);
		}
	}

	await browser.close();
	console.log(`\nDone. ${pages.length} pages screenshotted.`);
}

run();
