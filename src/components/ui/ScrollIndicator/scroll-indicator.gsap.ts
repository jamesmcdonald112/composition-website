import { gsap } from "../../../scripts/gsap.ts";

export function initScrollIndicator(
	container: Element | Document = document,
): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const thumbs = container.querySelectorAll(".scroll-indicator__thumb");

	thumbs.forEach((thumb) => {
		gsap.to(thumb, {
			left: "110%",
			duration: 1.4,
			ease: "power2.inOut",
			repeat: -1,
			repeatDelay: 0.8,
			delay: 2.5,
		});
	});
}
