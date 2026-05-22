# Cookie compliance — reference library

A working reference for cookie consent compliance across European jurisdictions, plus the operational documents this project uses (or has used) to set up Cookiebot.

The active operational document is `banner-copy-playbook.md`. Everything else here is regulator source material or jurisdiction-specific case study.

---

## What's in this folder

### Operational

| File | What it is |
|---|---|
| **`banner-copy-playbook.md`** | The reusable, jurisdiction-neutral template for writing compliant Cookiebot banner copy. Field-by-field templates for every Cookiebot admin field (dialog heading, body, button text, category introductions). Capability-based copy so the wording survives changes in the site's tool stack without rewrites. Open this when configuring a Cookiebot dashboard. |

### EU-wide reference (applies in every EU jurisdiction, and as background anywhere)

| File | What it is |
|---|---|
| `EU-eprivacy-directive-2002-58-EC-consolidated-2009-12.pdf` | The EU ePrivacy Directive — the base text every EU member state transposes into national law. Article 5(3) is the cookie consent rule. |
| `EDPB-cookie-banner-taskforce-report-2023-01.pdf` | European Data Protection Board, January 2023. The agreed minimum threshold every EU regulator applies to cookie banner design (reject button on the first layer, equal prominence, no pre-ticked boxes, no deceptive patterns). One-time pre-launch skim — 11 pages. |
| `EDPB-guidelines-on-consent-2020-05.pdf` | EDPB Guidelines 05/2020 on consent under the GDPR. The authoritative source on what counts as valid consent (freely given, specific, informed, unambiguous, withdrawable). Cited by the cookie banner taskforce report. |

### Ireland-specific (case study; kept in case the site launches in Ireland)

| File | What it is |
|---|---|
| `SI-336-2011-irish-eprivacy-regulations.pdf` | The binding Irish statute — S.I. No. 336/2011. The Irish transposition of the ePrivacy Directive. Regulation 5 covers cookie consent; Regulation 13 covers email marketing. |
| `DPC-guidance-cookies-and-tracking-2020-04.pdf` | Ireland's Data Protection Commission, April 2020. The DPC's plain-English interpretation of S.I. 336/2011. The most likely document an Irish regulator would compare a site's behaviour against. |

---

## When to use what

**Configuring Cookiebot for this site** → `banner-copy-playbook.md` is the only document you need to open. Pick the multi-jurisdiction General introduction template since the studio's audience is international.

**Verifying banner design before launch** → skim `EDPB-cookie-banner-taskforce-report-2023-01.pdf` and check the banner against each rule.

**Researching a fresh consent question** → start with the EDPB consent guidelines, then the relevant national law (the Irish PDFs if Ireland is one of your target jurisdictions; otherwise research the local equivalent).

---

## Source URLs

Authoritative online copies of the regulator documents, in case the local PDFs need refreshing:

- [ePrivacy Directive 2002/58/EC (as amended by 2009/136/EC)](https://eur-lex.europa.eu/eli/dir/2002/58/oj)
- [GDPR — EUR-Lex authoritative text](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [EDPB Cookie Banner Taskforce Report (Jan 2023)](https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf)
- [EDPB Guidelines 05/2020 on consent](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-052020-consent-under-regulation-2016679_en)
- [S.I. No. 336/2011 (Irish Statute Book)](https://www.irishstatutebook.ie/eli/2011/si/336/)
- [Data Protection Commission (Ireland) — dataprotection.ie](https://www.dataprotection.ie)

Equivalents for other jurisdictions you may want bookmarks for:
- [Commission d'accès à l'information du Québec (CAI)](https://www.cai.gouv.qc.ca) — Québec Law 25 regulator
- [Office of the Privacy Commissioner of Canada (OPC)](https://www.priv.gc.ca) — federal PIPEDA regulator
- [Information Commissioner's Office (UK)](https://ico.org.uk)
- [CNIL (France)](https://www.cnil.fr)

---

## Maintenance

- **Annually** — check whether the EDPB has updated either of the two reference guidelines. Refresh local PDFs if so.
- **When the site adds or removes any tool that sets cookies** — update the live Cookiebot dashboard configuration following the change-control rules in `banner-copy-playbook.md`.
