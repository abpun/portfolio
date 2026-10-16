"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/userInfo";
import { useReveal } from "@/components/motion/useReveal";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";

const PREVIEW_TINTS = [
  "from-primary/30 via-accent/20 to-card",
  "from-secondary/40 via-leaf/20 to-card",
  "from-sky/30 via-primary/10 to-card",
];

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          { yPercent: 8, ease: "none", scrollTrigger: { trigger: el.parentElement, scrub: true } },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="projects" className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="Selected work"
          title="Things I've built"
          intro={
            <>
              A few projects I&apos;m proud of. More experiments live on{" "}
              <Link href="/projects" className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                the projects page
              </Link>
              .
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              data-reveal
              className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-shadow duration-500 hover:shadow-warm ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/10]"}`}>
                <div data-parallax className="absolute -inset-y-[10%] inset-x-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${PREVIEW_TINTS[i % PREVIEW_TINTS.length]} transition-transform duration-700 ease-out group-hover:scale-105`}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-end justify-between p-6 md:p-8">
                  <span className="font-mono text-sm text-foreground/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground shadow-paper transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold leading-tight">
                    <Link href={project.href} className="after:absolute after:inset-0 focus-visible:outline-none">
                      {project.title}
                    </Link>
                  </h3>
                  <Badge variant={project.status === "Completed" ? "muted" : "default"} className="shrink-0">
                    {project.status}
                  </Badge>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                  <Link
                    href={project.github}
                    className="relative z-10 ml-auto flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" /> Code
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
