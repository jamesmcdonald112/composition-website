// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger import registers the plugin as a side effect
import { gsap, ScrollTrigger } from "../../scripts/gsap.ts";

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	document
		.querySelectorAll<HTMLElement>("[data-contact-panel]")
		.forEach((panel) => {
			const eyebrow = panel.querySelector<HTMLElement>(
				"[data-contact-panel-eyebrow]",
			);
			const heading = panel.querySelector<HTMLElement>(
				"[data-contact-panel-heading]",
			);
			const intro = panel.querySelector<HTMLElement>(
				"[data-contact-panel-intro]",
			);
			const divider = panel.querySelector<HTMLElement>(
				"[data-contact-panel-divider]",
			);
			const items = panel.querySelectorAll<HTMLElement>(
				"[data-contact-panel-item]",
			);

			const trigger = {
				trigger: panel,
				start: "top 82%",
			};

			/* ─ Eyebrow: slides in from left ─ */
			if (eyebrow) {
				gsap.fromTo(
					eyebrow,
					{ opacity: 0, x: -16 },
					{
						opacity: 1,
						x: 0,
						duration: 0.7,
						ease: "power3.out",
						scrollTrigger: trigger,
					},
				);
			}

			/* ─ Heading: rises up ─ */
			if (heading) {
				gsap.fromTo(
					heading,
					{ opacity: 0, y: 24 },
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
						ease: "power3.out",
						delay: 0.12,
						scrollTrigger: trigger,
					},
				);
			}

			/* ─ Intro: fades up after heading ─ */
			if (intro) {
				gsap.fromTo(
					intro,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power3.out",
						delay: 0.25,
						scrollTrigger: trigger,
					},
				);
			}

			/* ─ Divider: draws across ─ */
			if (divider) {
				gsap.fromTo(
					divider,
					{ scaleX: 0, transformOrigin: "left center" },
					{
						scaleX: 1,
						duration: 0.8,
						ease: "power2.out",
						delay: 0.38,
						scrollTrigger: trigger,
					},
				);
			}

			/* ─ Contact items: stagger up sequentially ─ */
			if (items.length) {
				gsap.fromTo(
					Array.from(items),
					{ opacity: 0, y: 22 },
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						ease: "power3.out",
						stagger: 0.1,
						delay: 0.5,
						scrollTrigger: trigger,
					},
				);
			}
		});
}
