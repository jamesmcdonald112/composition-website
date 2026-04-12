import { gsap } from "../../scripts/gsap.ts";

export function initThankYouAnimation() {
	const icon = document.querySelector("[data-thank-you-icon]");
	const items = document.querySelectorAll("[data-thank-you-animate]");

	if (!icon || !items.length) return;

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const tl = gsap.timeline({ delay: 0.15 });

	// Icon: scale up from slightly small, fade in — settles with presence
	tl.fromTo(
		icon,
		{ opacity: 0, scale: 0.7 },
		{ opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
	);

	// Text elements: cascade up in sequence, unhurried
	tl.fromTo(
		items,
		{ opacity: 0, y: 22 },
		{ opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.13 },
		"-=0.4",
	);
}
