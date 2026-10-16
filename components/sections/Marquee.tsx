"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const ITEMS = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Tailwind", "Three.js", "GSAP", "Docker"];
const SECONDS_PER_LOOP = 30;

/** Endless tech ribbon; speeds up with scroll velocity, then eases back. */
export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const loop = gsap.to("[data-track]", { xPercent: -50, ease: "none", duration: SECONDS_PER_LOOP, repeat: -1 });
      gsap.to(loop, {
        timeScale: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 400, 4);
            gsap.to(loop, { timeScale: boost, duration: 0.2, overwrite: true });
            gsap.to(loop, { timeScale: 1, duration: 1.2, delay: 0.2 });
          },
        },
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="overflow-hidden border-y bg-secondary py-5 text-secondary-foreground">
      <div data-track className="flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-10 px-5 font-serif text-2xl sm:text-3xl">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
