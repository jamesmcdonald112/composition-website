import { gsap } from "../../scripts/gsap.ts";

const intro = document.querySelector<HTMLElement>("[data-intro]");
if (!intro) throw new Error("Intro: [data-intro] not found");

if (sessionStorage.getItem("intro-seen")) {
	intro.remove();
	document.documentElement.classList.add("intro-done");
	document.dispatchEvent(new CustomEvent("intro:complete"));
} else {
	// Any truthy value works — we only care whether the key exists
	sessionStorage.setItem("intro-seen", "1");

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		intro.remove();
		document.documentElement.classList.add("intro-done");
		document.dispatchEvent(new CustomEvent("intro:complete"));
	} else {
		const overlay = intro.querySelector<HTMLElement>("[data-intro-overlay]");
		const mark = intro.querySelector<HTMLElement>("[data-intro-mark]");
		const rule = intro.querySelector<HTMLElement>("[data-intro-rule]");
		const name = intro.querySelector<HTMLElement>("[data-intro-name]");
		const sub = intro.querySelector<HTMLElement>("[data-intro-sub]");

		// Make animated elements visible before GSAP runs to prevent FOUC
		gsap.set([mark, name, sub], { visibility: "visible" });

		// Set initial positions
		gsap.set(mark, { y: 10, opacity: 0 });
		gsap.set(name, { y: 12, opacity: 0 });
		gsap.set(sub, { y: 8, opacity: 0 });

		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		// 1. Mark drops in
		tl.to(mark, { opacity: 1, y: 0, duration: 0.6 }, 0.2);

		// 2. Gold rule draws across
		tl.to(rule, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.1");

		// 3. Name rises in
		tl.to(name, { opacity: 1, y: 0, duration: 0.75 }, "-=0.3");

		// 4. Sub-line fades in
		tl.to(sub, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35");

		// 5. Hold
		tl.to({}, { duration: 0.7 });

		// 6. Content fades out
		tl.to([mark, name, sub, rule], {
			opacity: 0,
			duration: 0.35,
			stagger: 0.05,
		});

		// 7. Overlay sweeps upward off screen
		tl.to(
			overlay,
			{
				clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
				duration: 1.0,
				ease: "power4.inOut",
			},
			"-=0.05",
		);

		// 8. Remove from DOM and signal completion
		tl.call(() => {
			intro.remove();
			document.documentElement.classList.add("intro-done");
			document.dispatchEvent(new CustomEvent("intro:complete"));
		});
	}
}
