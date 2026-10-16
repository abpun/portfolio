"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const PULL = 0.3;

/** Lets its child drift toward the cursor and spring back on leave. */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current;
      if (!el || !contextSafe || prefersReducedMotion()) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });

      const move = contextSafe((e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * PULL);
        yTo((e.clientY - (r.top + r.height / 2)) * PULL);
      });
      const leave = contextSafe(() => {
        xTo(0);
        yTo(0);
      });

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
}
