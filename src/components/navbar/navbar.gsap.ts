import { gsap } from "../../scripts/gsap";

// ── Scroll state ───────────────────────────────────────────────────────────
const navbar = document.querySelector<HTMLElement>("#navbar");

if (navbar) {
	const handleScroll = () => {
		if (window.scrollY > 60) {
			navbar.classList.add("is-scrolled");
		} else {
			navbar.classList.remove("is-scrolled");
		}
	};

	window.addEventListener("scroll", handleScroll, { passive: true });
	handleScroll();
}

// ── Mobile menu ────────────────────────────────────────────────────────────
const toggle = document.querySelector<HTMLButtonElement>("#navbar-toggle");
const dialog = document.querySelector<HTMLDialogElement>("#nav-mobile");
const closeBtn = document.querySelector<HTMLButtonElement>("#nav-mobile-close");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-mobile__link");

if (toggle && dialog) {
	const reducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	const openMenu = () => {
		toggle.setAttribute("aria-expanded", "true");
		navbar?.classList.add("is-open");
		dialog.showModal(); // browser handles focus trap, Escape, scroll lock

		if (!reducedMotion) {
			gsap.fromTo(
				Array.from(navLinks),
				{ y: 40, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.08,
					duration: 0.7,
					ease: "power3.out",
					delay: 0.1,
				},
			);
		}
	};

	const closeMenu = () => {
		toggle.setAttribute("aria-expanded", "false");
		navbar?.classList.remove("is-open");
		dialog.close(); // browser restores focus to toggle automatically
	};

	toggle.addEventListener("click", openMenu);
	closeBtn?.addEventListener("click", closeMenu);

	// Close on nav link click
	for (const link of navLinks) {
		link.addEventListener("click", closeMenu);
	}

	// Close when clicking the ::backdrop (click lands on the dialog element
	// outside its content bounds when showModal is used)
	dialog.addEventListener("click", (e) => {
		const rect = dialog.getBoundingClientRect();
		const clickedOutside =
			e.clientX < rect.left ||
			e.clientX > rect.right ||
			e.clientY < rect.top ||
			e.clientY > rect.bottom;
		if (clickedOutside) closeMenu();
	});

	// Sync aria-expanded when browser closes via Escape key
	dialog.addEventListener("close", () => {
		toggle.setAttribute("aria-expanded", "false");
		navbar?.classList.remove("is-open");
	});
}
