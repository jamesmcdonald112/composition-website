import { describe, expect, it } from "vitest";
import { contactSchema } from "../schema/contact.schema";

const validInput = {
	name: "John Smith",
	email: "john@example.com",
	message: "I need help with a work issue.",
	website: "",
};

describe("contactSchema", () => {
	describe("name", () => {
		it("accepts a valid name", () => {
			const result = contactSchema.safeParse(validInput);
			expect(result.success).toBe(true);
		});

		it("rejects a name shorter than 2 characters", () => {
			const result = contactSchema.safeParse({ ...validInput, name: "A" });
			expect(result.success).toBe(false);
			expect(result.error?.issues[0].message).toBe(
				"Name must be at least 2 characters.",
			);
		});

		it("rejects a name longer than 100 characters", () => {
			const result = contactSchema.safeParse({
				...validInput,
				name: "A".repeat(101),
			});
			expect(result.success).toBe(false);
			expect(result.error?.issues[0].message).toBe(
				"Name must be 100 characters or fewer.",
			);
		});

		it("trims whitespace from name", () => {
			const result = contactSchema.safeParse({
				...validInput,
				name: "  John Smith  ",
			});
			expect(result.success).toBe(true);
			if (result.success) expect(result.data.name).toBe("John Smith");
		});
	});

	describe("email", () => {
		it("accepts a valid email address", () => {
			const result = contactSchema.safeParse(validInput);
			expect(result.success).toBe(true);
		});

		it("rejects an empty email", () => {
			const result = contactSchema.safeParse({ ...validInput, email: "" });
			expect(result.success).toBe(false);
			expect(result.error?.issues[0].message).toBe("Email is required.");
		});

		it("rejects an invalid email format", () => {
			const result = contactSchema.safeParse({
				...validInput,
				email: "not-an-email",
			});
			expect(result.success).toBe(false);
			expect(result.error?.issues[0].message).toBe(
				"Enter a valid email address.",
			);
		});

		it("trims whitespace from email", () => {
			const result = contactSchema.safeParse({
				...validInput,
				email: "  john@example.com  ",
			});
			expect(result.success).toBe(true);
			if (result.success) expect(result.data.email).toBe("john@example.com");
		});
	});

	describe("message", () => {
		it("defaults to an empty string when omitted", () => {
			const { message: _m, ...withoutMessage } = validInput;
			const result = contactSchema.safeParse(withoutMessage);
			expect(result.success).toBe(true);
			if (result.success) expect(result.data.message).toBe("");
		});

		it("accepts a message up to 2000 characters", () => {
			const result = contactSchema.safeParse({
				...validInput,
				message: "A".repeat(2000),
			});
			expect(result.success).toBe(true);
		});

		it("rejects a message longer than 2000 characters", () => {
			const result = contactSchema.safeParse({
				...validInput,
				message: "A".repeat(2001),
			});
			expect(result.success).toBe(false);
			expect(result.error?.issues[0].message).toBe(
				"Message must be 2000 characters or fewer.",
			);
		});
	});

	describe("website (honeypot)", () => {
		it("accepts an empty honeypot field", () => {
			const result = contactSchema.safeParse({ ...validInput, website: "" });
			expect(result.success).toBe(true);
		});

		it("accepts a null honeypot field and normalises to empty string", () => {
			const result = contactSchema.safeParse({
				...validInput,
				website: null,
			});
			expect(result.success).toBe(true);
			if (result.success) expect(result.data.website).toBe("");
		});

		it("passes through a filled honeypot value (rejection is handled at action level)", () => {
			const result = contactSchema.safeParse({
				...validInput,
				website: "http://spam.example.com",
			});
			expect(result.success).toBe(true);
			if (result.success)
				expect(result.data.website).toBe("http://spam.example.com");
		});
	});
});
