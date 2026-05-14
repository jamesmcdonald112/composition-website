import { gsap } from "../../../scripts/gsap.ts";
import { initScrollIndicator } from "../../ui/ScrollIndicator/scroll-indicator.gsap.ts";

/* ─ Reduced motion guard ─────────────────────────────────────────────────── */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	const heroes = document.querySelectorAll("[data-service-hero]");

	heroes.forEach((hero) => {
		const eyebrow = hero.querySelector("[data-animate='service-hero-eyebrow']");
		const title = hero.querySelector("[data-service-hero-title]");
		const rule = hero.querySelector("[data-service-hero-rule]");
		const subtitle = hero.querySelector("[data-service-hero-subtitle]");
		const ctas = hero.querySelector("[data-service-hero-ctas]");
		const bottom = hero.querySelector("[data-service-hero-bottom]");

		if (!title) return;

		// Reveal elements — CSS keeps them hidden until GSAP is ready
		gsap.set([eyebrow, title, subtitle, ctas, bottom], {
			visibility: "visible",
		});

		const tl = gsap.timeline({ delay: 0.15 });

		tl.fromTo(
			eyebrow,
			{ opacity: 0, y: 12 },
			{ opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
			0,
		)
			.fromTo(
				title,
				{ opacity: 0, y: 28 },
				{ opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
				0.1,
			)
			.to(rule, { width: "48px", duration: 0.7, ease: "power2.out" }, 0.55)
			.fromTo(
				subtitle,
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
				0.65,
			)
			.fromTo(
				ctas,
				{ opacity: 0, y: 12 },
				{ opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
				0.82,
			)
			.to(bottom, { opacity: 1, duration: 0.6, ease: "power2.out" }, 1.0);
	});

	initScrollIndicator();
}
