// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger must be imported to register with GSAP
import { gsap, ScrollTrigger } from "../../scripts/gsap";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion) {
	const header = document.querySelector<HTMLElement>("[data-testimonial-header]");
	const cards = document.querySelectorAll<HTMLElement>("[data-testimonial-card]");

	if (header) {
		gsap.from(header, {
			opacity: 0,
			y: 40,
			duration: 0.8,
			ease: "power3.out",
			scrollTrigger: {
				trigger: header,
				start: "top 78%",
			},
		});
	}

	if (cards.length) {
		gsap.from(Array.from(cards), {
			opacity: 0,
			duration: 0.7,
			stagger: 0.08,
			ease: "power3.out",
			scrollTrigger: {
				trigger: cards[0],
				start: "top 82%",
			},
		});
	}
}

void ScrollTrigger;
