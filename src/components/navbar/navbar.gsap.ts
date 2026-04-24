import { gsap } from "../../scripts/gsap";

// ── Scroll state ──────────────────────────────────────────────────────────────
const navbar = document.querySelector<HTMLElement>("#navbar");

if (navbar) {
	if (navbar.hasAttribute("data-navbar-solid")) {
		// Solid pages — lock to filled state, never go transparent
		navbar.classList.add("is-scrolled");
	} else {
		// Transparent pages — fill on scroll, clear at top
		const onScroll = () => {
			if (window.scrollY > 60) {
				navbar.classList.add("is-scrolled");
			} else {
				navbar.classList.remove("is-scrolled");
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
	}
}

// ── Navbar entrance animations ────────────────────────────────────────────────
const logo = document.querySelector<HTMLElement>("[data-navbar-logo]");
const desktopNavLinks = document.querySelectorAll<HTMLElement>("[data-navbar-nav-link]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion) {
	if (logo) {
		gsap.from(logo, {
			opacity: 0,
			duration: 1.0,
			ease: "power1.out",
			delay: 0.3,
		});
	}

	if (desktopNavLinks.length) {
		gsap.from(Array.from(desktopNavLinks), {
			opacity: 0,
			y: 12,
			duration: 0.8,
			ease: "power2.out",
			stagger: 0.1,
			delay: 0.35,
			onComplete: () => { gsap.set(desktopNavLinks, { clearProps: "transform" }); },
		});
	}
}

// ── CTA entrance + hover ──────────────────────────────────────────────────────
const cta = document.querySelector<HTMLAnchorElement>("[data-navbar-cta]");

if (cta) {
	if (!reducedMotion) {
		gsap.from(cta, {
			opacity: 0,
			x: 16,
			duration: 0.7,
			ease: "power3.out",
			delay: 0.5,
			onComplete: () => { gsap.set(cta, { clearProps: "transform" }); },
		});
	}

	cta.addEventListener("mouseenter", () => {
		gsap.to(cta, { scale: 1.02, duration: 0.2, ease: "power2.out" });
	});

	cta.addEventListener("mouseleave", () => {
		gsap.to(cta, { scale: 1, duration: 0.2, ease: "power2.out" });
	});
}

// ── Mobile menu ───────────────────────────────────────────────────────────────
const toggle = document.querySelector<HTMLButtonElement>("[data-navbar-toggle]");
const dialog = document.querySelector<HTMLDialogElement>("[data-nav-mobile]");
const closeBtn = document.querySelector<HTMLButtonElement>("[data-nav-mobile-close]");
const mobileNavLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-mobile-link]");

if (toggle && dialog) {
	// iOS Safari doesn't block background scroll on <dialog>.showModal(),
	// so lock the body scroll manually while the menu is open.
	const lockScroll = () => {
		document.documentElement.classList.add("nav-mobile-open");
		document.body.style.overflow = "hidden";
	};

	const unlockScroll = () => {
		document.documentElement.classList.remove("nav-mobile-open");
		document.body.style.overflow = "";
	};

	const openMenu = () => {
		toggle.setAttribute("aria-expanded", "true");
		navbar?.classList.add("is-open");
		dialog.showModal();
		lockScroll();

		if (!reducedMotion) {
			gsap.fromTo(
				Array.from(mobileNavLinks),
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
		dialog.close();
		unlockScroll();
	};

	toggle.addEventListener("click", openMenu);
	closeBtn?.addEventListener("click", closeMenu);

	for (const link of mobileNavLinks) {
		link.addEventListener("click", closeMenu);
	}

	dialog.addEventListener("click", (e) => {
		const rect = dialog.getBoundingClientRect();
		const clickedOutside =
			e.clientX < rect.left ||
			e.clientX > rect.right ||
			e.clientY < rect.top ||
			e.clientY > rect.bottom;
		if (clickedOutside) closeMenu();
	});

	dialog.addEventListener("close", () => {
		toggle.setAttribute("aria-expanded", "false");
		navbar?.classList.remove("is-open");
		unlockScroll();
	});
}
