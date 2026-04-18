import { gsap } from "../../../../scripts/gsap.ts";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	const cards = document.querySelectorAll<HTMLElement>("[data-sc]");

	cards.forEach((card) => {
		const moveX = gsap.quickTo(card, "x", {
			duration: 0.5,
			ease: "power2.out",
		});
		const moveY = gsap.quickTo(card, "y", {
			duration: 0.5,
			ease: "power2.out",
		});

		card.addEventListener("mouseenter", () => {
			gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" });
		});

		card.addEventListener("mousemove", (e: MouseEvent) => {
			const rect = card.getBoundingClientRect();
			const cx = rect.left + rect.width / 2;
			const cy = rect.top + rect.height / 2;
			const dx = (e.clientX - cx) / rect.width;
			const dy = (e.clientY - cy) / rect.height;

			moveX(dx * 6);
			moveY(dy * 6 - 6);
		});

		card.addEventListener("mouseleave", () => {
			moveX(0);
			moveY(0);
		});
	});
}
