import { gsap } from "../../scripts/gsap";

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	// Nothing — browser will render final state immediately
} else {
	document.querySelectorAll<HTMLElement>("[data-contact-panel]").forEach((panel) => {
		const eyebrow = panel.querySelector<HTMLElement>("[data-contact-panel-eyebrow]");
		const heading = panel.querySelector<HTMLElement>("[data-contact-panel-heading]");
		const intro = panel.querySelector<HTMLElement>("[data-contact-panel-intro]");
		const divider = panel.querySelector<HTMLElement>("[data-contact-panel-divider]");
		const items = panel.querySelectorAll<HTMLElement>("[data-contact-panel-item]");

		const tl = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.1 });

		if (eyebrow) {
			tl.from(eyebrow, { y: 16, opacity: 0, duration: 0.7 });
		}

		if (heading) {
			tl.from(heading, { y: 24, opacity: 0, duration: 1.0 }, "-=0.5");
		}

		if (intro) {
			tl.from(intro, { y: 20, opacity: 0, duration: 0.9 }, "-=0.7");
		}

		if (divider) {
			tl.from(divider, { scaleX: 0, opacity: 0, duration: 0.7, transformOrigin: "left center" }, "-=0.5");
		}

		if (items.length) {
			tl.from(
				Array.from(items),
				{ y: 20, opacity: 0, duration: 0.8, stagger: 0.12 },
				"-=0.6",
			);
		}

		tl.eventCallback("onComplete", () => {
			gsap.set([eyebrow, heading, intro, divider, ...Array.from(items)], {
				clearProps: "transform",
			});
		});
	});
}
