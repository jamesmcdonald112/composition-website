import { z } from "astro/zod";
import { CONTACT_FIELD_LIMITS } from "../config/contact-field-limits";

export const contactSchema = z.object({
	name: z
		.string()
		.nullable()
		.transform((v) => v ?? "")
		.pipe(
			z
				.string()
				.trim()
				.min(
					CONTACT_FIELD_LIMITS.name.min,
					`Name must be at least ${CONTACT_FIELD_LIMITS.name.min} characters.`,
				)
				.max(
					CONTACT_FIELD_LIMITS.name.max,
					`Name must be ${CONTACT_FIELD_LIMITS.name.max} characters or fewer.`,
				),
		),
	email: z
		.string()
		.nullable()
		.transform((v) => v ?? "")
		.pipe(
			z
				.string()
				.trim()
				.superRefine((val, ctx) => {
					if (val.length === 0) {
						ctx.addIssue({
							code: "custom",
							message: "Email is required.",
							fatal: true,
						});
						return z.NEVER;
					}
					const result = z.string().email().safeParse(val);
					if (!result.success) {
						ctx.addIssue({
							code: "custom",
							message: "Enter a valid email address.",
						});
					}
				}),
		),
	message: z
		.string()
		.nullable()
		.optional()
		.transform((v) => v ?? "")
		.pipe(
			z
				.string()
				.trim()
				.max(
					CONTACT_FIELD_LIMITS.message.max,
					`Message must be ${CONTACT_FIELD_LIMITS.message.max} characters or fewer.`,
				),
		),

	// Honeypot (bots fill it)
	website: z
		.string()
		.trim()
		.optional()
		.nullable()
		.transform((v) => v ?? ""),
});

export type ContactInput = z.infer<typeof contactSchema>;
