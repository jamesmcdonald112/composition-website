export const thankYouContent = {
	seo: {
		title: "Thank you",
		description: "Thank you for your enquiry.",
	},
	heading: "Message received",
	body: "Thank you for writing. Alex will read your message and reply personally, usually within a few days.",
	href: "/",
} as const;

export type ThankYouContent = typeof thankYouContent;
