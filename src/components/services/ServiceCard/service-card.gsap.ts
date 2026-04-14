import { gsap, ScrollTrigger } from "../../../scripts/gsap.ts";

export function initServiceCards(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const cards = document.querySelectorAll<HTMLElement>("[data-sc]");

  cards.forEach((card) => {
    const image = card.querySelector<HTMLElement>("[data-sc-image]");

    if (!image) return;

    // ── Scroll parallax on image ─────────────────────────────
    // Image shifts upward as card scrolls into view — depth effect
    ScrollTrigger.create({
      trigger: card,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress; // 0 → 1
        gsap.set(image, {
          y: (progress - 0.5) * -30,
        });
      },
    });

    // ── Magnetic cursor pull ─────────────────────────────────
    // Card body drifts subtly toward the cursor — max 6px
    const moveX = gsap.quickTo(card, "x", { duration: 0.5, ease: "power2.out" });
    const moveY = gsap.quickTo(card, "y", { duration: 0.5, ease: "power2.out" });

    // Image counter-moves at half rate for parallax depth
    const imgMoveX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power2.out" });
    const imgMoveY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power2.out" });

    card.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;   // -0.5 → 0.5
      const dy = (e.clientY - cy) / rect.height;  // -0.5 → 0.5

      moveX(dx * 6);
      moveY(dy * 6);

      // Image shifts opposite direction — creates depth illusion
      imgMoveX(dx * -10);
      imgMoveY(dy * -10);
    });

    card.addEventListener("mouseleave", () => {
      moveX(0);
      moveY(0);
      imgMoveX(0);
      imgMoveY(0);
    });

    // ── Title word lift on hover ─────────────────────────────
    // Words rise 3px with a stagger — settles, does not bounce
  });
}
