// biome-ignore lint/correctness/noUnusedImports: ScrollTrigger must be imported to register with GSAP
import { gsap, ScrollTrigger } from "../../../../scripts/gsap.ts";

export function initServiceCardsGrid(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const grids = document.querySelectorAll<HTMLElement>("[data-scg-grid]");

  grids.forEach((grid) => {
    const cards = grid.querySelectorAll<HTMLElement>("[data-scg-card]");
    if (!cards.length) return;

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
        once: true,
      },
    });
  });
}
