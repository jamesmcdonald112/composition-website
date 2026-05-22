/*
  LeadMagnet — scroll-triggered reveal.

  Mirrors the Pricing / CTAPanel pattern: ScrollTrigger fires once at
  top-75%, copy children stagger in, the form card reveals last with a
  small delay. Reduced-motion users skip the animation; the CSS in
  LeadMagnet.astro makes the hidden elements visible in that case.
*/
import { gsap, ScrollTrigger } from "../../../scripts/gsap";

export function initLeadMagnet(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const sections = document.querySelectorAll<HTMLElement>("[data-lead-magnet]");

	sections.forEach((section) => {
		const copy = section.querySelector<HTMLElement>("[data-lm-copy]");
		const copyChildren = copy ? Array.from(copy.children) : [];
		const form = section.querySelector<HTMLElement>("[data-lm-form]");

		gsap.set([copy, form].filter(Boolean), { autoAlpha: 1 });

		ScrollTrigger.create({
			trigger: section,
			start: "top 75%",
			once: true,
			onEnter: () => {
				if (copyChildren.length) {
					gsap.from(copyChildren, {
						y: 24,
						opacity: 0,
						duration: 0.85,
						ease: "power2.out",
						stagger: 0.08,
					});
				}

				if (form) {
					gsap.from(form, {
						y: 32,
						opacity: 0,
						duration: 0.95,
						ease: "power2.out",
						delay: 0.35,
					});
				}
			},
		});
	});
}
