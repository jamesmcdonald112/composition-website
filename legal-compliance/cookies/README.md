# Cookie Compliance

All cookie-related documentation, evidence, setup playbooks, and regulator source material for this project.

---

## What's in this folder

| File | Purpose | When to read it |
|---|---|---|
| `DPC-guidance-cookies-and-tracking-2020-04.pdf` | The Data Protection Commission's official guidance on cookies and tracking technologies (April 2020). The regulator's plain-English interpretation of S.I. No. 336/2011. | **Start here** if you are trying to understand Irish cookie law. 45 minutes well spent. |
| `EDPB-cookie-banner-taskforce-report-2023-01.pdf` | The European Data Protection Board's January 2023 report on cookie banner design. Sharpens specific banner rules (reject button on the first layer, equal prominence, no pre-ticked boxes, no deceptive patterns) that post-date the DPC's 2020 guidance. Used by all EU regulators including the DPC. | One-time pre-launch skim — 11 pages. Verify Mary's banner against each rule in it before going live. Do not rely on the DPC PDF alone for banner design rules. |
| `SI-336-2011-irish-eprivacy-regulations.pdf` | The actual Irish statute — S.I. No. 336/2011. The binding legal text on cookies and electronic marketing in Ireland. Regulation 5 covers cookie consent; Regulation 13 covers email marketing. | When you need to verify what the law itself says (not just the regulator's interpretation). Open this when checking any specific Reg 5 wording in `reg-5-compliance-evidence.md` or in the EDPB walkthrough. |
| `EDPB-guidelines-on-consent-2020-05.pdf` | EDPB Guidelines 05/2020 on consent under Regulation 2016/679. The deepest authoritative source on what counts as valid consent (freely given, specific, informed, unambiguous, withdrawable). Cited by the EDPB cookie banner report. | When verifying any claim about valid GDPR consent — particularly the five conditions imported into ePrivacy compliance via Para 3 of the EDPB cookie banner report. |
| `reg-5-compliance-evidence.md` | Maps each element of Regulation 5(3) to how this specific site satisfies it, with verification steps. | When someone asks *"is this site compliant?"* or *"how do you know?"*. |
| `banner-copy-playbook.md` | The **reusable template** for writing compliant banner copy on any client site. Includes a decision checklist and field-by-field templates for no-ads sites and ads-active sites. | When setting up Cookiebot for a new client. |
| `banner-copy-mary-molloy.md` | The **paste-ready copy** currently live on this site. Applied from the playbook with site-specific values filled in. | When updating this site's Cookiebot admin, or when auditing what the banner says today. |
| `client-onboarding-checklist.md` | Step-by-step runbook for deploying Cookiebot on a new client site. Covers account setup, admin configuration, cookie inventory, privacy policy alignment, and pre-launch verification. | When onboarding the next client. |

---

## If you only have 10 minutes

Read these in this order:

1. `reg-5-compliance-evidence.md` — gives you the current compliance state of this site.
2. `banner-copy-mary-molloy.md` — shows you what the banner currently says.
3. Skim the `DPC-guidance-cookies-and-tracking-2020-04.pdf` table of contents to know what's in it if you need to go deeper later.
4. Skim the `EDPB-cookie-banner-taskforce-report-2023-01.pdf` summary section — the 2023 EU-wide banner design rules that the DPC PDF predates.

## If you're onboarding a new client

Read in this order:

1. `client-onboarding-checklist.md` — the step-by-step.
2. `banner-copy-playbook.md` — the reusable template.
3. Copy `banner-copy-mary-molloy.md` → `banner-copy-[NEW_CLIENT].md` as your starting point, then fill in the new client's specifics following the playbook's decision checklist.

## If you're preparing for a DPC audit or compliance review

1. `reg-5-compliance-evidence.md` — the mapping of rule to site.
2. `banner-copy-mary-molloy.md` — evidence of what was being disclosed on which date.
3. The dated screenshots in `../compliance-records/` — visual evidence of the banner as it appeared on audit dates.
4. `DPC-guidance-cookies-and-tracking-2020-04.pdf` — the exact interpretation you were working from.
5. `EDPB-cookie-banner-taskforce-report-2023-01.pdf` — the EU-wide banner design rules referenced when verifying Mary's banner before launch.

---

## Source law reference

Local PDFs (preferred — verifiable, audit-ready):

- **Primary Irish law:** `SI-336-2011-irish-eprivacy-regulations.pdf` (this folder) — the binding Irish statute that transposes the ePrivacy Directive
- **EU ePrivacy Directive — consolidated 2002 + 2009:** `EU-eprivacy-directive-2002-58-EC-consolidated-2009-12.pdf` (this folder — the EU directive that S.I. 336/2011 transposes; the 2009 amendments are already merged in, so this is the current operative text including the cookie consent rule in Article 5(3))
- **GDPR — official journal version with all 173 recitals:** `../gdpr/regulation-2016-679-official-journal-with-recitals-2016-05.pdf` (one folder up — preferred when citing recitals; the EDPB cookie banner report cites Recitals 32, 42, 43, 47)
- **GDPR — consolidated articles only:** `../gdpr/regulation-2016-679-consolidated-2016-05.pdf` (one folder up — articles only, post-2018 corrigendum applied; preferred when citing binding article numbers)

Online sources (for fresh copies if the local PDFs need updating):

- [S.I. No. 336/2011 — European Communities (Electronic Communications Networks and Services)(Privacy and Electronic Communications) Regulations 2011](https://www.irishstatutebook.ie/eli/2011/si/336/)
- [ePrivacy Directive 2002/58/EC](https://eur-lex.europa.eu/eli/dir/2002/58/oj) (as amended by 2009/136/EC) — the EU directive that S.I. 336/2011 transposes
- [GDPR — EUR-Lex authoritative text](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [Data Protection Commission (DPC) — dataprotection.ie](https://www.dataprotection.ie) — the Irish regulator

---

## Maintenance

- **Annually:** re-verify every file in this folder. Check whether the DPC has published updated guidance and whether the local PDF is still the current version.
- **When Cookiebot updates its admin UI:** walk through `client-onboarding-checklist.md` and correct any settings path that has moved.
- **When any cookie-setting tool is added or removed on this site:** update `banner-copy-mary-molloy.md` (and the live Cookiebot admin values) using the change-control rules in `banner-copy-playbook.md`. Run the compliance screenshot script immediately afterwards.

_Last reviewed: April 2026._
