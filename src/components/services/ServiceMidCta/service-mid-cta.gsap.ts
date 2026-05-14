// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger must be imported to register with GSAP
import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

export function initServiceMidCta(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const ctaBars = document.querySelectorAll("[data-service-mid-cta]");

	ctaBars.forEach((bar) => {
		const text = bar.querySelector("[data-svmc-text]");
		const actions = bar.querySelector("[data-svmc-actions]");

		if (!text) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: bar,
				start: "top 86%",
				once: true,
			},
		});

		tl.from(
			text,
			{ x: -20, opacity: 0, duration: 0.8, ease: "power2.out" },
			0,
		).from(
			actions,
			{ x: 20, opacity: 0, duration: 0.8, ease: "power2.out" },
			0.1,
		);
	});
}
