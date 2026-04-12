// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger import registers the plugin as a side effect
import { gsap, ScrollTrigger } from "../../scripts/gsap.ts";

/* ─ Reduced motion guard ─────────────────────────────────────────────────── */
const footer = document.querySelector(".footer") as HTMLElement;

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && footer) {
	const brand = footer.querySelector<HTMLElement>(
		'[data-footer-animate="brand"]',
	);
	const cols = footer.querySelectorAll<HTMLElement>(
		'[data-footer-animate="col"]',
	);
	const bottom = footer.querySelector<HTMLElement>(
		'[data-footer-animate="bottom"]',
	);

	/* ─ Shared ScrollTrigger config ─ */
	const trigger = {
		trigger: footer,
		start: "top 88%",
	};

	/* ─ Brand block: slides up and fades in ─ */
	if (brand) {
		gsap.fromTo(
			brand,
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 0.9,
				ease: "power3.out",
				scrollTrigger: trigger,
			},
		);
	}

	/* ─ Nav columns: stagger in after brand ─ */
	if (cols.length) {
		gsap.fromTo(
			cols,
			{ opacity: 0, y: 28 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.12,
				delay: 0.18,
				scrollTrigger: trigger,
			},
		);
	}

	/* ─ Bottom bar: border draws across, then content fades up ─ */
	if (bottom) {
		/* The border-top draws left to right via clip-path */
		gsap.fromTo(
			bottom,
			{ clipPath: "inset(0 100% 0 0)" },
			{
				clipPath: "inset(0 0% 0 0)",
				duration: 0.9,
				ease: "power2.out",
				delay: 0.5,
				scrollTrigger: trigger,
				onComplete: () => {
					// Clean up clip-path so border renders correctly after animation
					(bottom as HTMLElement).style.clipPath = "none";
				},
			},
		);

		/* Content inside fades up after border finishes */
		gsap.fromTo(
			bottom.children,
			{ opacity: 0, y: 12 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.1,
				delay: 0.9,
				scrollTrigger: trigger,
			},
		);
	}
}
