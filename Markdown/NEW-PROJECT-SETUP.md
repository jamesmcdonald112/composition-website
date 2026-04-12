# New Project Setup Checklist

Steps required when starting a new project from this template.
Do these before testing the contact form end-to-end.

---

## 1. Add ClientRouter to BaseLayout

Astro's view transitions router must be in `<head>` so the session
flash (PRG pattern) works correctly after form submission.

In `src/layouts/BaseLayout.astro`, add the import and render it:

```astro
---
import { ClientRouter } from "astro:transitions";
// ... other imports
---

<!doctype html>
<html lang="en-IE">
  <head>
    <ClientRouter />
    <meta charset="UTF-8" />
    <!-- rest of head -->
```

Without this, form submissions that use `data-astro-reload` will fail
to restore the action result from the session flash, causing a 400.

---

## 2. Add data-astro-reload to the contact form

The contact form must opt out of client-side navigation so the session
cookie is sent correctly on the POST → redirect → GET cycle.

In `src/components/contact/ContactForm.astro` (or wherever the form
lives), add `data-astro-reload` to the `<form>` tag:

```astro
<form action={actions.contact} method="POST" novalidate data-astro-reload>
```

Without this, `ClientRouter` intercepts the redirect and the session
flash is lost, resulting in a blank or incorrect page after submit.

---

## 3. Add the middleware

The middleware handles the PRG (Post/Redirect/Get) pattern — it
intercepts form POSTs, runs the action, stores the result in the
session as a flash, then redirects. On the GET it restores the result
so `Astro.getActionResult()` works.

File: `src/middleware/index.ts` — copy from this project verbatim.

Also ensure the actions registry exists:

File: `src/actions/index.ts`:
```ts
import { contact } from "../features/contact-form/actions/contact";

export const server = {
  contact,
};
```

---

## 4. Set environment variables

Create a `.env` file in the project root (never commit this):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
```

The Astro config declares this as a required server secret — the build
will fail without it.

---

## 5. Update deliverContact.ts

In `src/features/contact-form/service/deliverContact.ts`, replace the
two placeholder values:

```ts
// FROM must be a domain verified in your Resend account.
// During development, "onboarding@resend.dev" works but only sends to
// your Resend-registered email address.
const FROM = "onboarding@resend.dev";          // ← change for production

// TO is the address that receives the contact form submissions.
const TO = "client@theirdomain.ie";            // ← replace this
```

---

## 6. Update the firm config

In `src/config/firm.ts`, replace all placeholder values:

- `email` — the firm's public email address
- `siteUrl` — the live domain once deployed
- Any `TODO` comments in the file

---

## 7. Test the form end-to-end

1. Fill in all fields with valid data
2. Submit — should redirect and show success state (or /thank-you)
3. Check the TO inbox for the email
4. Submit with missing fields — should redirect back and show inline errors
5. Check the server logs if email does not arrive — Resend will log
   delivery failures

---

## Notes

- The session driver is set to `"memory"` in `astro.config.mjs` — this
  works in dev and on Netlify SSR but is not persistent across restarts.
  It is fine for the PRG flash pattern (TTL is 60 seconds).
- The honeypot field (`name="website"`) silently drops bot submissions —
  do not remove it.
