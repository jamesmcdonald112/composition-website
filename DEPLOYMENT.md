# Deployment

This site moves from **Netlify** to **Vercel** before launch. The plan below is the order to do it in, what changes in the code, and what to do once the real domain comes through.

## Why Vercel

The deciding factor is region pinning. Vercel lets you select **Dublin (`dub1`)** as the SSR region from the dashboard, which keeps the contact-form processing on infrastructure inside the EU. That matters for two reasons:

- The contact form processes personal data (name, phone, email, message) and the privacy policy commits the firm to keeping that processing inside the EU/EEA.
- Resend (the email-sending service) has an EU region; pairing an EU SSR runtime with the EU Resend region keeps the data flow inside one jurisdiction without an Article 46 transfer mechanism.

Netlify has EU edge locations too, but the region selection is less explicit and the SSR runtime can fall back to US regions depending on the plan.

## Order of operations

### 1. Swap the Astro adapter

Currently the project uses `@astrojs/netlify`. The Vercel adapter is `@astrojs/vercel`.

```bash
npm uninstall @astrojs/netlify
npm install @astrojs/vercel
```

Then in `astro.config.mjs`:

```diff
-import netlify from "@astrojs/netlify";
+import vercel from "@astrojs/vercel";
 import sitemap from "@astrojs/sitemap";
 import { defineConfig, envField } from "astro/config";
 import { firm } from "./src/config/firm.ts";

 export default defineConfig({
   site: firm.siteUrl,
-  adapter: netlify(),
+  adapter: vercel({
+    webAnalytics: { enabled: false },
+  }),
   output: "server",
   integrations: [sitemap()],
   ...
 });
```

The header comment block at the top of `astro.config.mjs` mentions Netlify Blobs as the session driver — that comment needs updating too, since Vercel uses a different session backend (Vercel KV, or you can leave Astro's default in-memory store for now).

After the swap, run `npm run build` locally to confirm it produces a `.vercel/` output directory and no errors.

### 2. Set up the Vercel project

- Sign in at vercel.com (GitHub OAuth using the same account that owns the repo).
- **Add New… → Project → Import** the `mary-molloy-solicitor` GitHub repo.
- Framework preset: **Astro** (auto-detected).
- Root directory: leave as repo root.
- Build command: `npm run build` (auto).
- Output directory: leave default — the Vercel adapter writes to `.vercel/output`.
- **Region: Dublin (`dub1`)** — set this in Project Settings → Functions → Region. This is the single most important step for EU data residency.

### 3. Environment variables

Two server-only secrets currently live in `.env`. Add them in Vercel under **Settings → Environment Variables**, scoped to `Production` and `Preview`:

| Name | Where it's used |
|---|---|
| `RESEND_API_KEY` | Contact form submission |
| `GOOGLE_PLACES_API_KEY` | Google reviews block |

When pasting the Resend key, double-check it's the same key the Netlify deploy is using — otherwise the contact form will silently fail in production. The key value is in the Resend dashboard at resend.com → API Keys.

### 4. Update `firm.siteUrl`

`src/config/firm.ts` line 2 currently points at the Netlify staging URL:

```ts
siteUrl: "https://splendorous-tiramisu-3c7f26.netlify.app/",
```

Change this to the **eventual real domain** (e.g. `https://marymolloy.ie`) before the first production deploy on Vercel. The sitemap, `robots.txt`, and any canonical/OG tags read from this single value, so getting it right up-front means no second deploy after DNS cutover.

It's fine for the value to point at a domain that doesn't yet resolve — search engines won't crawl it until the DNS is live, and the Vercel preview deployment still works at its `*.vercel.app` URL during the gap.

### 5. First production deploy

Push to `main` or click **Deploy** in the Vercel dashboard. Vercel will:

- Build the site in roughly 60–90 seconds.
- Issue a default URL like `mary-molloy-solicitor.vercel.app`.
- Run the SSR functions in Dublin.

Click through the deployed site on the `*.vercel.app` URL and confirm:

- The home page renders.
- The contact form submits successfully (use a real email address you can check) — this verifies `RESEND_API_KEY` is wired up.
- The cookie banner loads (Cookiebot script tag is in the head).
- `/sitemap-index.xml` returns XML with the right hostname.
- `/robots.txt` returns the right hostname.

### 6. Domain cutover (when Mary signs off and the domain is purchased)

In Vercel: **Settings → Domains → Add**.

Enter the apex domain (e.g. `marymolloy.ie`). Vercel shows two DNS records to set at the registrar:

- An **A record** at the apex pointing to Vercel's IP, OR an **ALIAS/ANAME** if the registrar supports it.
- A **CNAME** at `www` pointing to `cname.vercel-dns.com`.

Set those at whichever registrar Mary buys the domain through (commonly Blacknight or Letshost in Ireland). DNS propagation typically takes 15 minutes to a few hours. Once it resolves, Vercel auto-provisions a Let's Encrypt TLS certificate within minutes — HTTPS turns on with no extra config.

In Vercel's domain settings, set the apex (`marymolloy.ie`) as the canonical and have `www.marymolloy.ie` redirect to it (or the other way round, depending on Mary's preference — pick one and stick with it; mixing causes duplicate-content SEO issues).

### 7. Tear down Netlify

Once the Vercel deploy is verified working on the real domain:

- Netlify dashboard → Site Settings → **Delete site**. This stops any chance of the staging URL serving stale content or appearing in search results.
- The `splendorous-tiramisu-3c7f26.netlify.app` URL goes away within minutes.

### 8. Take fresh compliance screenshots

This is required, not optional. Reg 11(f) of S.I. 644/2020 requires the firm to keep dated records of all advertising — that means the **production** site, not the staging URL.

```bash
npx tsx scripts/compliance-screenshot.ts launch
```

The label `launch` (or whatever you choose) gets stamped on the folder name in `legal-compliance/compliance-records/`, alongside the date. Keep this folder in version control.

## Things to verify after launch

A short post-launch checklist — work through this in the first 24 hours:

- [ ] Contact form submission lands in the firm's inbox.
- [ ] Cookie banner appears for first-time visitors and the consent state persists across pages.
- [ ] No mixed-content warnings (everything served over HTTPS).
- [ ] `/sitemap-index.xml` reachable at the real domain.
- [ ] `/robots.txt` shows the right `Sitemap:` line and `Disallow: /thank-you` and `Disallow: /dev/`.
- [ ] Submit the sitemap to Google Search Console once DNS is live.
- [ ] Check Vercel Functions logs for any 500s in the first day or two.

## What stays the same

- The repo. Same GitHub repo, same `main` branch, same commit history.
- All env-var names. `RESEND_API_KEY` and `GOOGLE_PLACES_API_KEY` keep their names; only the dashboard they live in changes.
- All the application code. The adapter swap is the only code-level change.
- All the legal-compliance records and audit trails.
- The Cookiebot account, Resend account, and Google Cloud project (Places API).

## Rolling back

If anything goes wrong on Vercel and the firm needs the site back up urgently:

- The Netlify deploy stays live until you actively delete it. Don't tear it down until the Vercel deploy is verified.
- Reverting the adapter is one commit (`git revert <swap-commit>`) and a redeploy on Netlify.
- DNS rollback (pointing the domain back at Netlify) takes the same 15-minutes-to-a-few-hours as the original cutover.

This is why the order matters: get Vercel fully verified at the real domain **before** deleting the Netlify site.
