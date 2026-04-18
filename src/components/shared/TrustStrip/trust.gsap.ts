// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger must be imported to register with GSAP
import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	const sections = document.querySelectorAll("[data-service-trust]");

	sections.forEach((section) => {
		const text = section.querySelector("[data-svc-trust-text]");
		const stats = section.querySelectorAll(".svc-trust__stat");

		if (text) {
			gsap.from(text, {
				y: 30,
				opacity: 0,
				duration: 0.9,
				ease: "power2.out",
				scrollTrigger: {
					trigger: text,
					start: "top 82%",
					once: true,
				},
			});
		}

		if (stats.length) {
			gsap.from(stats, {
				y: 20,
				opacity: 0,
				stagger: 0.12,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: section.querySelector("[data-svc-trust-stats]"),
					start: "top 82%",
					once: true,
				},
			});
		}
	});
}
