/*
  Pricing — scroll-triggered reveal.

  Mirrors CTAPanel's pattern: ScrollTrigger fires once at top-75%, header
  text staggers in, cards stagger in with a small offset, CTA reveals last.
  Reduced-motion users skip the animation entirely (CSS makes the
  visibility-hidden elements visible in that case — see Pricing.astro).
*/
import { gsap, ScrollTrigger } from "../../../scripts/gsap";

export function initPricing(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const sections = document.querySelectorAll<HTMLElement>("[data-pricing]");

	sections.forEach((section) => {
		const header = section.querySelector("[data-pricing-header]");
		const headerChildren = header ? Array.from(header.children) : [];
		const cards = section.querySelectorAll<HTMLElement>("[data-pricing-card]");
		const cta = section.querySelector<HTMLElement>("[data-pricing-cta]");

		// Make hidden elements visible the moment they enter the timeline —
		// the from() then handles the y/opacity reveal. Without this, the
		// hidden elements briefly flash at their final position before the
		// animation starts.
		gsap.set([...cards, cta].filter(Boolean), { autoAlpha: 1 });

		ScrollTrigger.create({
			trigger: section,
			start: "top 75%",
			once: true,
			onEnter: () => {
				if (headerChildren.length) {
					gsap.from(headerChildren, {
						y: 24,
						opacity: 0,
						duration: 0.85,
						ease: "power2.out",
						stagger: 0.08,
					});
				}

				if (cards.length) {
					gsap.from(cards, {
						y: 32,
						opacity: 0,
						duration: 0.95,
						ease: "power2.out",
						stagger: 0.12,
						delay: 0.25,
					});
				}

				if (cta) {
					gsap.from(cta, {
						y: 16,
						opacity: 0,
						duration: 0.7,
						ease: "power2.out",
						delay: 0.7,
					});
				}
			},
		});
	});
}
