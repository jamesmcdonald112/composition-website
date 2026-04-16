// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger must be imported to register itself with GSAP — it is never referenced directly but is required for scrollTrigger options to work
import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

// ── Entrance animation ─────────────────────────────────────────────────────

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

	// Header column — stagger fade up
	const headers = document.querySelectorAll<HTMLElement>("[data-sf-header]");

	headers.forEach((header) => {
		const eyebrow = header.querySelector<HTMLElement>("[data-animate='sf-eyebrow']");
		const heading = header.querySelector<HTMLElement>("[data-sf-heading]");
		const intro = header.querySelector<HTMLElement>("[data-sf-intro]");

		const els = [eyebrow, heading, intro].filter(Boolean);

		gsap.from(els, {
			y: 24,
			opacity: 0,
			duration: 0.8,
			stagger: 0.12,
			ease: "power2.out",
			scrollTrigger: {
				trigger: header,
				start: "top 80%",
				toggleActions: "play none none none",
			},
		});
	});

	// FAQ items — stagger in from below
	const lists = document.querySelectorAll<HTMLElement>("[data-sf-list]");

	lists.forEach((list) => {
		const items = list.querySelectorAll<HTMLElement>("[data-sf-item]");

		gsap.from(items, {
			y: 20,
			opacity: 0,
			duration: 0.7,
			stagger: 0.09,
			ease: "power2.out",
			scrollTrigger: {
				trigger: list,
				start: "top 78%",
				toggleActions: "play none none none",
			},
		});
	});

}

// ── Accordion interaction ──────────────────────────────────────────────────

function initAccordion() {
	const triggers = document.querySelectorAll<HTMLButtonElement>("[data-sf-trigger]");

	triggers.forEach((trigger) => {
		trigger.addEventListener("click", () => {
			const item = trigger.closest<HTMLElement>("[data-sf-item]");
			const answer = item?.querySelector<HTMLElement>("[data-sf-answer]");

			if (!item || !answer) return;

			const isOpen = item.classList.contains("service-faqs__item--open");

			// Close all open items in this list
			const list = item.closest<HTMLElement>("[data-sf-list]");
			list?.querySelectorAll<HTMLElement>("[data-sf-item]").forEach((otherItem) => {
				if (otherItem !== item) {
					closeItem(otherItem);
				}
			});

			if (isOpen) {
				closeItem(item);
			} else {
				openItem(item, answer);
			}
		});
	});
}

function openItem(item: HTMLElement, answer: HTMLElement) {
	item.classList.add("service-faqs__item--open");
	const trigger = item.querySelector<HTMLButtonElement>("[data-sf-trigger]");
	if (trigger) trigger.setAttribute("aria-expanded", "true");

	// Measure natural height
	answer.removeAttribute("hidden");
	answer.style.visibility = "visible";
	const fullHeight = answer.scrollHeight;
	answer.style.height = "0px";

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		answer.style.height = "";
		return;
	}

	gsap.to(answer, {
		height: fullHeight,
		duration: 0.5,
		ease: "power2.out",
		onComplete: () => {
			answer.style.height = "";
		},
	});
}

function closeItem(item: HTMLElement) {
	item.classList.remove("service-faqs__item--open");
	const trigger = item.querySelector<HTMLButtonElement>("[data-sf-trigger]");
	if (trigger) trigger.setAttribute("aria-expanded", "false");
	const answer = item.querySelector<HTMLElement>("[data-sf-answer]");
	if (!answer) return;

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		answer.setAttribute("hidden", "");
		answer.style.visibility = "hidden";
		answer.style.height = "0px";
		return;
	}

	gsap.to(answer, {
		height: 0,
		duration: 0.35,
		ease: "power2.in",
		onComplete: () => {
			answer.setAttribute("hidden", "");
			answer.style.visibility = "hidden";
			answer.style.height = "";
		},
	});
}

initAccordion();
