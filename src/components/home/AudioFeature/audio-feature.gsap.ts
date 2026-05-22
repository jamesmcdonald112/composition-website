/*
  AudioFeature — scroll-triggered reveal + consent-gated embed handling.

  Reveal: mirrors Pricing's pattern — ScrollTrigger fires once at top-75%,
  header children stagger in, then the figure (iframe frame + caption) fades
  up. Quiet and short — the video should not compete with itself.
  Reduced-motion users skip the animation entirely.

  Consent: in production the iframe is Cookiebot-gated and a fallback panel
  (link out to YouTube) covers it until marketing consent is granted. When
  consent is present the section gets the --consented modifier, which hides
  the fallback and reveals the now-loaded iframe.
*/
import { gsap, ScrollTrigger } from "../../../scripts/gsap";

interface CookiebotApi {
	consent?: { marketing?: boolean };
}

/* Add the --consented modifier once marketing consent is granted, so the CSS
   hides the YouTube-link fallback. Runs on load and on Cookiebot's consent
   events; if Cookiebot is absent (dev), the fallback isn't rendered anyway. */
function syncConsentState(): void {
	const apply = (): void => {
		const cookiebot = (window as unknown as { Cookiebot?: CookiebotApi })
			.Cookiebot;
		if (!cookiebot?.consent?.marketing) return;
		for (const section of document.querySelectorAll("[data-audio-feature]")) {
			section.classList.add("audio-feature--consented");
		}
	};

	apply();
	window.addEventListener("CookiebotOnAccept", apply);
	window.addEventListener("CookiebotOnConsentReady", apply);
}

export function initAudioFeature(): void {
	syncConsentState();

	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const sections = document.querySelectorAll<HTMLElement>("[data-audio-feature]");

	sections.forEach((section) => {
		// SectionHeader is a shared component — the gsapAttr prop adds
		// data-section-header="audio-feature-header" to its <header> root.
		const header = section.querySelector(
			'[data-section-header="audio-feature-header"]',
		);
		const headerChildren = header ? Array.from(header.children) : [];
		const figure = section.querySelector<HTMLElement>("[data-audio-feature-figure]");

		// Reveal the figure container ahead of the from() so it doesn't flash
		// at its final position before the animation starts.
		if (figure) {
			gsap.set(figure, { autoAlpha: 1 });
		}

		ScrollTrigger.create({
			trigger: section,
			start: "top 75%",
			once: true,
			onEnter: () => {
				if (headerChildren.length) {
					gsap.from(headerChildren, {
						y: 24,
						opacity: 0,
						duration: 0.85,
						ease: "power2.out",
						stagger: 0.08,
					});
				}

				if (figure) {
					gsap.from(figure, {
						y: 28,
						opacity: 0,
						duration: 0.95,
						ease: "power2.out",
						delay: 0.3,
					});
				}
			},
		});
	});
}
