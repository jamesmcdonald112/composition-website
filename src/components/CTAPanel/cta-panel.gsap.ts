import { gsap, ScrollTrigger } from "../../scripts/gsap";

export function initCtaPanel(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const panels = document.querySelectorAll<HTMLElement>("[data-cta-panel]");

	panels.forEach((panel) => {
		const rule = panel.querySelector(".cta-panel__rule");
		const eyebrow = panel.querySelector(".cta-panel__eyebrow");
		const heading = panel.querySelector(".cta-panel__heading");
		const body = panel.querySelector(".cta-panel__body");
		const phone = panel.querySelector(".cta-panel__phone");
		const link = panel.querySelector(".cta-panel__contact-link");

		const textEls = [rule, eyebrow, heading, body].filter(Boolean);
		const actionEls = [phone, link].filter(Boolean);

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

				gsap.from(actionEls, {
					y: 20,
					opacity: 0,
					duration: 0.8,
					ease: "power2.out",
					stagger: 0.12,
					delay: 0.25,
				});
			},
		});
	});
}
