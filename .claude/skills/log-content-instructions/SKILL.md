# Log Content Instructions Skill

Logs written instructions from the solicitor into the current compliance record, with a date stamp. Required under Reg 11(f) of S.I. No. 644/2020.

---

## WHEN TO APPLY THIS SKILL

Apply automatically whenever:
- The user pastes or quotes content received from Mary (text, email, WhatsApp message, phone note)
- The user says they've been told to change, add, or remove something on the site
- The user is about to make a content change based on an instruction from the solicitor

Do **not** wait to be asked. If you detect an incoming instruction from the solicitor, log it before acting on it.

---

## STEP 1 — IDENTIFY THE CURRENT INSTRUCTIONS FILE

The instructions file lives in the most recent compliance records folder:

```
legal-compliance/compliance-records/YYYY-MM-[label]/instructions.md
```

1. List `legal-compliance/compliance-records/` to find the most recent dated folder.
2. Open its `instructions.md`.
3. If no compliance records folder exists yet, tell the user: "No compliance records folder found — run `npx tsx scripts/compliance-screenshot.ts launch` first to create one."

---

## STEP 2 — FORMAT THE ENTRY

Each entry must include:

```markdown
**Date:** YYYY-MM-DD
**Source:** Email / WhatsApp / Phone call / Meeting note
**Instruction:**
> Paste the exact instruction here, verbatim if possible.
```

- **Date:** Today's date — always an absolute date, never "today" or "this morning".
- **Source:** Where the instruction came from. Ask the user if not clear from context.
- **Instruction:** The exact wording as received. If the user is paraphrasing, note that: `> [Paraphrased] Mary asked to...`

---

## STEP 3 — APPEND TO INSTRUCTIONS.MD

Append the new entry below the `<!-- Add entries below this line -->` comment.

Do not overwrite existing entries. Do not reformat existing entries.

---

## STEP 4 — CONFIRM TO THE USER

After writing, output one line:

```
Logged to legal-compliance/compliance-records/[folder]/instructions.md — [date], [source].
```

Then proceed with the content change as normal.

---

## EXAMPLE

User says: "Mary WhatsApped me — she wants the tagline on the homepage changed to 'Practical legal advice for Kilkenny and the South East'."

**Action:**
1. Find the most recent `instructions.md`.
2. Append:

```markdown
**Date:** 2026-04-21
**Source:** WhatsApp
**Instruction:**
> Change the homepage tagline to: "Practical legal advice for Kilkenny and the South East"
```

3. Confirm: `Logged to legal-compliance/compliance-records/2026-04-launch/instructions.md — 2026-04-21, WhatsApp.`
4. Make the change.

---

## WHY THIS MATTERS

Under Reg 11(f) of S.I. No. 644/2020, the solicitor must be able to produce written instructions for publication to the LSRA on request for 12 months. An email or WhatsApp screenshot satisfies this — but only if it is saved. This log is the fallback record in case the original message is lost or inaccessible.
