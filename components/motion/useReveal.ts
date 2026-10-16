"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Scroll-driven entrances for a section, opt-in via data attributes:
 * [data-split] headings rise line by line, [data-reveal] items fade up in batches,
 * [data-count] numbers count up, [data-bar] widths fill to their data-bar value.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root || prefersReducedMotion()) return;

      root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1,
              ease: "expo.out",
              stagger: 0.08,
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }),
        });
      });

      const items = root.querySelectorAll<HTMLElement>("[data-reveal]");
      gsap.set(items, { autoAlpha: 0, y: 32 });
      ScrollTrigger.batch(items, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }),
      });

      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toString();
          },
        });
      });

      root.querySelectorAll<HTMLElement>("[data-bar]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: Number(el.dataset.bar) / 100,
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          },
        );
      });
    },
    { scope },
  );
}
