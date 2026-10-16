"use client";

import { useRef } from "react";
import { TECH_STACKS } from "@/lib/userInfo";
import { useReveal } from "@/components/motion/useReveal";
import { SectionHeading } from "./SectionHeading";

export default function TechStack() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          label="Stack"
          title="Daily drivers"
          intro="Tools I reach for every day, chosen for speed, developer experience and long-term maintainability."
        />

        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {TECH_STACKS.map((tech) => (
            <div key={tech.name} data-reveal>
              <div className="mb-3 flex items-baseline justify-between">
                <span className="font-serif text-xl font-semibold">{tech.name}</span>
                <span className="font-mono text-sm text-muted-foreground">
                  <span data-count={tech.percentage}>{tech.percentage}</span>%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  data-bar={tech.percentage}
                  className={`h-full w-full origin-left rounded-full ${tech.color}`}
                  style={{ transform: `scaleX(${tech.percentage / 100})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
