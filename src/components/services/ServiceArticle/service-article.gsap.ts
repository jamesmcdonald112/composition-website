// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger import registers the plugin as a side effect
import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

/* ─ Reduced motion guard ─────────────────────────────────────────────────── */
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	// nothing to do — elements are visible by default
} else {
	const sections = document.querySelectorAll("[data-service-article]");

	sections.forEach((section) => {
		const eyebrow = section.querySelector("[data-animate='sa-eyebrow']");
		const title = section.querySelector("[data-sa-title]");
		const rule = section.querySelector("[data-sa-rule]");
		const intro = section.querySelector("[data-sa-intro]");
		const quote = section.querySelector("[data-sa-quote]");

		if (eyebrow && title) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: eyebrow,
					start: "top 84%",
					once: true,
				},
			});

			tl.from(eyebrow, { y: 16, opacity: 0, duration: 0.7, ease: "power2.out" }, 0)
				.from(title, { y: 24, opacity: 0, duration: 0.9, ease: "power2.out" }, 0.1)
				.to(rule, { width: "40px", duration: 0.6, ease: "power2.out" }, 0.5)
				.from(intro, { y: 18, opacity: 0, duration: 0.8, ease: "power2.out" }, 0.6);
		}

		if (quote) {
			gsap.from(quote, {
				y: 24,
				opacity: 0,
				duration: 0.9,
				ease: "power2.out",
				scrollTrigger: {
					trigger: quote,
					start: "top 84%",
					once: true,
				},
			});
		}

		// All blocks — headings, paragraphs, lists — stagger in as they enter
		const blocks = section.querySelectorAll("[data-sa-block]");
		if (blocks.length) {
			gsap.from(blocks, {
				y: 22,
				opacity: 0,
				stagger: 0.12,
				duration: 0.85,
				ease: "power3.out",
				scrollTrigger: {
					trigger: blocks[0],
					start: "top 86%",
					once: true,
				},
			});
		}
	});
}
