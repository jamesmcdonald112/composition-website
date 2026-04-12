// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger import registers the plugin as a side effect
import { gsap, ScrollTrigger } from "../../scripts/gsap.ts";

/* ─ Reduced motion guard ─────────────────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia(
	"(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
	document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
		el.style.visibility = "visible";
	});
	const em = document.querySelector<HTMLElement>('[data-animate="h-title-em"]');
	if (em) {
		em.style.clipPath = "none";
		em.style.color = "var(--color-accent-light)";
	}
} else {
	/* ─ Make visible before animating ─ */
	gsap.set(
		[
			'[data-animate="h-image"]',
			'[data-animate="h-eyebrow"]',
			'[data-animate="h-title"]',
			'[data-animate="h-rule"]',
			'[data-animate="h-subtitle"]',
			'[data-animate="h-ctas"]',
			'[data-animate="h-bottom"]',
		],
		{ visibility: "visible" },
	);

	/* ─ Entrance timeline ─ */
	const timeline = gsap.timeline({ delay: 0.2 });

	timeline
		// Image: start slightly zoomed, settle
		.fromTo(
			'[data-animate="h-image"]',
			{ scale: 1.08 },
			{ scale: 1, duration: 2.2, ease: "power2.out" },
		)

		// Wash: fade in from heavier to final opacity
		.fromTo(
			".hero-home__wash",
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: "power2.out" },
			0,
		)

		// Eyebrow slides in from left
		.fromTo(
			'[data-animate="h-eyebrow"]',
			{ opacity: 0, x: -20 },
			{ opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
			0.7,
		)

		// Title rises up
		.fromTo(
			'[data-animate="h-title"]',
			{ opacity: 0, y: 36 },
			{ opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
			0.85,
		)

		// "Buying & Selling" — wipes in left-to-right, white then blooms to gold
		.fromTo(
			'[data-animate="h-title-em"]',
			{ clipPath: "inset(0 100% 0 0)" },
			{ clipPath: "inset(0 0% 0 0)", duration: 1.0, ease: "power3.inOut" },
			1.05,
		)

		// Colour blooms from white to gold after the wipe completes
		.to(
			'[data-animate="h-title-em"]',
			{ color: "var(--color-accent-light)", duration: 1.2, ease: "power2.inOut" },
			2.2,
		)

		// Rule draws across
		.fromTo(
			'[data-animate="h-rule"]',
			{ scaleX: 0, transformOrigin: "left center" },
			{ scaleX: 1, duration: 0.8, ease: "power4.out" },
			1.1,
		)

		// Subtitle
		.fromTo(
			'[data-animate="h-subtitle"]',
			{ opacity: 0, y: 18 },
			{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
			1.25,
		)

		// CTAs
		.fromTo(
			'[data-animate="h-ctas"]',
			{ opacity: 0, y: 14 },
			{ opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
			1.45,
		)

		// Bottom bar
		.fromTo(
			'[data-animate="h-bottom"]',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.7, ease: "power2.out" },
			1.6,
		);

	/* ─ Scroll thumb animation (repeating) ─ */
	gsap.to(".scroll-indicator__thumb", {
		left: "110%",
		duration: 1.4,
		ease: "power2.inOut",
		repeat: -1,
		repeatDelay: 0.8,
		delay: 2.5,
	});

	/* ─ Scroll-driven depth effects ─ */
	const hero = document.querySelector(".hero-home") as HTMLElement;

	// Image parallax: moves slower than scroll = depth
	gsap.to('[data-animate="h-image"]', {
		yPercent: 18,
		ease: "none",
		scrollTrigger: {
			trigger: hero,
			start: "top top",
			end: "bottom top",
			scrub: 1,
		},
	});

	// Copy drifts up slightly (slower than image = layered depth)
	gsap.to(".hero-home__copy", {
		yPercent: -8,
		ease: "none",
		scrollTrigger: {
			trigger: hero,
			start: "top top",
			end: "bottom top",
			scrub: 1.5,
		},
	});

	// Wash gently lightens as you scroll
	gsap.fromTo(
		".hero-home__wash",
		{ opacity: 1 },
		{
			opacity: 0.6,
			ease: "none",
			scrollTrigger: {
				trigger: hero,
				start: "top top",
				end: "bottom top",
				scrub: 2,
			},
		},
	);

	// V-rule fades as you scroll past
	gsap.to(".hero-home__v-rule", {
		opacity: 0,
		ease: "none",
		scrollTrigger: {
			trigger: hero,
			start: "30% top",
			end: "bottom top",
			scrub: true,
		},
	});
}
