// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger must be imported to register with GSAP
import { gsap, ScrollTrigger } from "../../scripts/gsap";

export function initCtaPanel(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const panels = document.querySelectorAll<HTMLElement>("[data-cta-panel]");

	panels.forEach((panel) => {
		const header = panel.querySelector("[data-section-header]");
		const headerChildren = header ? Array.from(header.children) : [];
		const body = panel.querySelector("[data-cta-body]");
		const actions = panel.querySelector("[data-cta-ctas]");

		const textEls = [...headerChildren, body].filter(Boolean);

		ScrollTrigger.create({
			trigger: panel,
			start: "top 75%",
			once: true,
			onEnter: () => {
				gsap.from(textEls, {
					y: 28,
					opacity: 0,
					duration: 0.9,
					ease: "power2.out",
					stagger: 0.1,
				});

				if (actions) {
					gsap.from(actions, {
						y: 20,
						opacity: 0,
						duration: 0.8,
						ease: "power2.out",
						delay: 0.35,
					});
				}
			},
		});
	});
}
