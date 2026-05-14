// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger import registers the plugin as a side effect
import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	const sections = document.querySelectorAll<HTMLElement>(
		"[data-team-section]",
	);

	sections.forEach((section) => {
		const header = section.querySelector<HTMLElement>("[data-section-header]");
		const cards = section.querySelectorAll<HTMLElement>("[data-team-card]");

		if (header) {
			gsap.from(header, {
				opacity: 0,
				y: 30,
				duration: 0.9,
				ease: "power2.out",
				scrollTrigger: {
					trigger: header,
					start: "top 85%",
				},
			});
		}

		if (cards.length) {
			gsap.from(Array.from(cards), {
				opacity: 0,
				y: 40,
				duration: 0.8,
				ease: "power2.out",
				stagger: 0.12,
				scrollTrigger: {
					trigger: section,
					start: "top 75%",
				},
			});
		}
	});
}
