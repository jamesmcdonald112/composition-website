/*
  TeacherIntro — scroll-triggered reveal.

  Portrait slides in from the left + slight fade; body children
  (eyebrow → title → paragraphs → link) stagger in to the right,
  delayed slightly so the portrait lands first.
  Reduced-motion users skip the animation entirely.
*/
import { gsap, ScrollTrigger } from "../../../scripts/gsap";

export function initTeacherIntro(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const sections = document.querySelectorAll<HTMLElement>("[data-teacher-intro]");

	sections.forEach((section) => {
		const portrait = section.querySelector<HTMLElement>(
			"[data-teacher-intro-portrait]",
		);
		const body = section.querySelector("[data-teacher-intro-body]");
		const bodyChildren = body ? Array.from(body.children) : [];

		// Reveal containers so the from() animation has visible elements to work
		// against (otherwise they flash at their final position before animating).
		if (portrait) gsap.set(portrait, { autoAlpha: 1 });
		if (body) gsap.set(body, { autoAlpha: 1 });

		ScrollTrigger.create({
			trigger: section,
			start: "top 75%",
			once: true,
			onEnter: () => {
				if (portrait) {
					gsap.from(portrait, {
						x: -32,
						opacity: 0,
						duration: 0.95,
						ease: "power2.out",
					});
				}

				if (bodyChildren.length) {
					gsap.from(bodyChildren, {
						y: 24,
						opacity: 0,
						duration: 0.85,
						ease: "power2.out",
						stagger: 0.08,
						delay: 0.25,
					});
				}
			},
		});
	});
}
