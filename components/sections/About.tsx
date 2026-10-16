"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/components/motion/useReveal";
import { SectionHeading } from "./SectionHeading";

const STATS = [
  { value: 14, suffix: "+", label: "Products shipped" },
  { value: 5, suffix: "+", label: "Years building" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const PRINCIPLES = [
  { title: "Clarity over cleverness", body: "Readable code and obvious interfaces age better than tricks." },
  { title: "Performance is a feature", body: "Fast pages respect people's time, data plans and patience." },
  { title: "Sweat the small states", body: "Loading, empty and error states are where trust is earned." },
];

export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="about" className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="About" title="Builder by heart, pragmatist by trade." />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <p data-reveal className="text-lg leading-relaxed">
              I&apos;m a full-stack developer based in Butwal, Nepal. I started by shipping small tools for local
              businesses — inventory trackers, booking flows — and learned that performance and clarity beat cleverness
              every time.
            </p>
            <p data-reveal className="leading-relaxed text-muted-foreground">
              Today I work across the stack: design systems in React, APIs in Node, and data in Postgres and Mongo. I care
              about the tiny moments that make a product feel crafted, and about leaving codebases nicer than I found them.
            </p>

            <dl data-reveal className="grid grid-cols-3 gap-4 pt-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1 rounded-2xl border bg-card p-5">
                  <dt className="text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
                  <dd className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                    <span data-count={s.value}>{s.value}</span>
                    {s.suffix}
                  </dd>
                </div>
              ))}
            </dl>

            <div data-reveal className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download CV <ArrowUpRight />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>

          <ol className="space-y-4 lg:col-span-5">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} data-reveal className="flex gap-5 rounded-2xl border bg-card p-6">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
