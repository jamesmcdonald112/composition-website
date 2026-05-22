// `href` is set to `javascript:void(0)` rather than `#` because the CTA
// is a JS-launched Cal.com modal. With `href="#"` the browser falls back
// to following the anchor on click (scrolling to the top of the page) if
// Cal.com hasn't intercepted in time. `javascript:void(0)` keeps the link
// styled and accessible as an anchor but neutralises the navigation.
export const booking = {
	label: "Book a free call",
	href: "javascript:void(0)",
	calLink: "jamesmcdonald112/introductory-composition-consultation",
	calNamespace: "introductory-composition-consultation",
	calConfig: JSON.stringify({
		layout: "month_view",
		useSlotsViewOnSmallScreen: "true",
	}),
} as const;
