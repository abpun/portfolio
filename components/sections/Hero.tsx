"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const TerrainCanvas = dynamic(() => import("@/components/three/TerrainCanvas"), { ssr: false });

const STATS = [
  { value: 14, suffix: "+", label: "Products shipped" },
  { value: 5, suffix: " yrs", label: "Building for the web" },
  { value: 20, suffix: "+", label: "Happy clients" },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      const title = SplitText.create("[data-hero-title]", { type: "words,lines", mask: "lines" });
      tl.from("[data-hero-eyebrow]", { autoAlpha: 0, y: 16, duration: 0.8 })
        .from(title.words, { yPercent: 120, duration: 1.2, stagger: 0.04 }, "-=0.5")
        .from("[data-hero-fade]", { autoAlpha: 0, y: 24, duration: 1, stagger: 0.1 }, "-=0.8")
        .from("[data-hero-canvas]", { autoAlpha: 0, duration: 2, ease: "power2.out" }, 0.2);

      gsap.to("[data-hero-scroll]", { y: 6, repeat: -1, yoyo: true, duration: 1.2, ease: "sine.inOut" });
      gsap.to("[data-hero-content]", {
        yPercent: -12,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div data-hero-canvas className="absolute inset-x-0 bottom-0 h-[60%]">
        <TerrainCanvas />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background/10" />
      </div>

      <div data-hero-content className="relative mx-auto w-full max-w-6xl py-16">
        <div data-hero-eyebrow className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-xs font-medium backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
          </span>
          Available for new projects — Q4 2026
        </div>

        <h1
          data-hero-title
          className="max-w-4xl font-serif text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.2rem]"
        >
          Full-stack developer crafting digital products that <em className="font-normal text-primary">feel human.</em>
        </h1>

        <p data-hero-fade className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I&apos;m <span className="font-medium text-foreground">Abhishek Pun</span>. I help teams in Nepal and beyond ship
          fast, accessible web apps with React, Next.js and thoughtful design.
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a project <ArrowUpRight />
              </Link>
            </Button>
          </Magnetic>
          <Button asChild variant="outline" size="lg">
            <Link href="/#projects">View selected work</Link>
          </Button>
        </div>

        <dl data-hero-fade className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t pt-8">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold sm:text-4xl">
                {s.value}
                <span className="text-primary">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> Butwal, Nepal — remote worldwide
          </span>
          <Link href="/#services" className="flex items-center gap-2 hover:text-foreground">
            <ArrowDown data-hero-scroll className="h-4 w-4" /> Scroll to explore
          </Link>
        </div>
      </div>
    </section>
  );
}
