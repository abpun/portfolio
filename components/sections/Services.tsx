"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/userInfo";
import { useReveal } from "@/components/motion/useReveal";
import { SectionHeading } from "./SectionHeading";

export default function Services() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="services" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          label="Services"
          title="What I do best"
          intro="Small-team energy, senior-level execution. I plug into your workflow, take ownership, and ship."
        />

        <ul className="border-t">
          {SERVICES.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              className="group relative grid grid-cols-12 items-center gap-4 border-b py-7 transition-colors md:py-9"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-muted transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <span className="relative col-span-2 font-mono text-sm text-muted-foreground md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="relative col-span-10 flex items-center gap-4 font-serif text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-3xl">
                <service.icon className="h-6 w-6 shrink-0 text-primary" />
                {service.title}
              </h3>
              <p className="relative col-span-10 col-start-3 text-sm leading-relaxed text-muted-foreground md:col-span-5 md:col-start-auto">
                {service.description}
              </p>
              <ArrowUpRight className="relative col-span-1 hidden h-5 w-5 justify-self-end text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-primary md:block" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
