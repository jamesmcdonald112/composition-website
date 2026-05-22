/*
  CurriculumPath — scroll-triggered reveal.

  The section header (eyebrow → title → rule → intro) staggers in once when
  the section's top reaches 75% of the viewport.

  Each phase has its OWN ScrollTrigger so the phase head (rule row + intro)
  and the phase's cards reveal as the visitor scrolls past that phase — long
  scrolling content shouldn't reveal all 8 cards at once.

  Reduced-motion users skip every animation entirely.
*/
import { gsap, ScrollTrigger } from "../../../scripts/gsap";

export function initCurriculumPath(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const sections = document.querySelectorAll<HTMLElement>(
		"[data-curriculum-path]",
	);

	sections.forEach((section) => {
		// ── Section header (one trigger, runs once on section enter) ─────────
		const header = section.querySelector("[data-curriculum-path-header]");
		const headerChildren = header ? Array.from(header.children) : [];

		if (headerChildren.length) {
			gsap.set(header as Element, { autoAlpha: 1 });
			ScrollTrigger.create({
				trigger: section,
				start: "top 75%",
				once: true,
				onEnter: () => {
					gsap.from(headerChildren, {
						y: 24,
						opacity: 0,
						duration: 0.85,
						ease: "power2.out",
						stagger: 0.08,
					});
				},
			});
		}

		// ── Each phase (one trigger per phase, runs once on phase enter) ─────
		const phases = section.querySelectorAll<HTMLElement>(
			"[data-curriculum-path-phase]",
		);

		phases.forEach((phase) => {
			const phaseHead = phase.querySelector("[data-curriculum-path-phase-head]");
			const phaseHeadChildren = phaseHead ? Array.from(phaseHead.children) : [];
			const cards = phase.querySelectorAll<HTMLElement>(
				"[data-curriculum-path-card]",
			);

			gsap.set(phase, { autoAlpha: 1 });

			ScrollTrigger.create({
				trigger: phase,
				start: "top 80%",
				once: true,
				onEnter: () => {
					if (phaseHeadChildren.length) {
						gsap.from(phaseHeadChildren, {
							y: 18,
							opacity: 0,
							duration: 0.75,
							ease: "power2.out",
							stagger: 0.07,
						});
					}

					if (cards.length) {
						gsap.from(cards, {
							y: 28,
							opacity: 0,
							duration: 0.85,
							ease: "power2.out",
							stagger: 0.1,
							delay: 0.2,
						});
					}
				},
			});
		});
	});
}
