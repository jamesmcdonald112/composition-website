// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger import registers the plugin as a side effect
import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

const form = document.querySelector(".contact-form") as HTMLElement;

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && form) {
	const header = form.querySelector<HTMLElement>('[data-cf-animate="header"]');
	const rows = form.querySelectorAll<HTMLElement>('[data-cf-animate="row"]');
	const bottom = form.querySelector<HTMLElement>('[data-cf-animate="bottom"]');

	const trigger = {
		trigger: form,
		start: "top 82%",
	};

	/* ─ Header: eyebrow draws in from left, heading rises ─ */
	if (header) {
		const eyebrow = header.querySelector(".contact-form__eyebrow");
		const heading = header.querySelector(".contact-form__heading");

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
	}

	/* ─ Form rows: stagger up sequentially ─ */
	if (rows.length) {
		gsap.fromTo(
			rows,
			{ opacity: 0, y: 22 },
			{
				opacity: 1,
				y: 0,
				duration: 0.7,
				ease: "power3.out",
				stagger: 0.1,
				delay: 0.3,
				scrollTrigger: trigger,
			},
		);
	}

	/* ─ Bottom row: fades up last ─ */
	if (bottom) {
		gsap.fromTo(
			bottom,
			{ opacity: 0, y: 16 },
			{
				opacity: 1,
				y: 0,
				duration: 0.7,
				ease: "power2.out",
				delay: 0.72,
				scrollTrigger: trigger,
			},
		);
	}
}
