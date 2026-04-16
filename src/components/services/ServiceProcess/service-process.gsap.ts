import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

	// ── Left column — fade up on scroll ──────────────────────────────────
	const lefts = document.querySelectorAll<HTMLElement>("[data-sp-left]");

	lefts.forEach((left) => {
		const eyebrow = left.querySelector<HTMLElement>("[data-animate='sp-eyebrow']");
		const heading = left.querySelector<HTMLElement>("[data-sp-heading]");
		const description = left.querySelector<HTMLElement>("[data-sp-description]");

		const els = [eyebrow, heading, description].filter(Boolean);

		gsap.from(els, {
			y: 24,
			opacity: 0,
			duration: 0.8,
			stagger: 0.12,
			ease: "power2.out",
			scrollTrigger: {
				trigger: left,
				start: "top 80%",
				toggleActions: "play none none none",
			},
		});
	});

	// ── Step list ─────────────────────────────────────────────────────────
	const lists = document.querySelectorAll<HTMLElement>("[data-sp-list]");

	lists.forEach((list) => {
		const steps = list.querySelectorAll<HTMLElement>("[data-sp-step]");

		// Animate the vertical spine rule drawing downward
		gsap.fromTo(
			list,
			{ "--sp-spine-scale": 0 },
			{
				"--sp-spine-scale": 1,
				ease: "none",
				scrollTrigger: {
					trigger: list,
					start: "top 80%",
					end: "bottom 20%",
					scrub: 0.8,
				},
			}
		);

		// Stagger each step in from below
		gsap.from(steps, {
			y: 30,
			opacity: 0,
			duration: 0.9,
			stagger: 0.12,
			ease: "power2.out",
			scrollTrigger: {
				trigger: list,
				start: "top 75%",
				toggleActions: "play none none none",
			},
		});
	});

}
