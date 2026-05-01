export const thankYouContent = {
	seo: {
		title: "Thank you",
		description: "Thank you for your enquiry.",
	},
	heading: "Message received",
	body: "We'll review your message and respond in due course.",
	href: "/",
} as const;

export type ThankYouContent = typeof thankYouContent;
