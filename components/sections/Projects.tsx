"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS, repoUrl, type Project } from "@/lib/userInfo";
import { useReveal } from "@/components/motion/useReveal";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { SectionHeading } from "./SectionHeading";

const PREVIEW_TINTS = [
  "from-primary/35 via-leaf/20 to-card",
  "from-accent/40 via-primary/10 to-card",
  "from-sky/30 via-leaf/15 to-card",
];
const DRAG_THRESHOLD = 6;

export default function Projects() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useReveal(root);

  const onScroll = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 1;
    if (progress.current) gsap.to(progress.current, { scaleX: Math.max(ratio, 0.08), duration: 0.3, overwrite: true });
    setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("resize", onScroll);
    return () => window.removeEventListener("resize", onScroll);
  }, [onScroll]);

  const go = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>("[data-slide]");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const left = el.scrollLeft + direction * (card.offsetWidth + gap);
    el.scrollTo({ left, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  // Mouse drag-to-scroll; touch and trackpads already scroll natively.
  const drag = useRef({ active: false, moved: false, x: 0, left: 0 });
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { active: true, moved: false, x: e.clientX, left: track.current.scrollLeft };
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = track.current;
    if (!drag.current.active || !el) return;
    const dx = e.clientX - drag.current.x;
    if (!drag.current.moved && Math.abs(dx) < DRAG_THRESHOLD) return;
    if (!drag.current.moved) {
      drag.current.moved = true;
      el.setPointerCapture(e.pointerId);
      el.style.scrollSnapType = "none";
    }
    el.scrollLeft = drag.current.left - dx;
  };
  const endDrag = () => {
    const el = track.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    el.style.scrollSnapType = "";
  };
  const swallowClickAfterDrag = (e: ReactMouseEvent) => {
    if (!drag.current.moved) return;
    e.preventDefault();
    e.stopPropagation();
    drag.current.moved = false;
  };

  return (
    <section ref={root} id="projects" className="overflow-hidden bg-muted/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          label="Selected work"
          title="Things I've built"
          intro={
            <>
              Seven projects from my GitHub, from election data to realtime chat. Drag, swipe or use the arrows to browse.
            </>
          }
        />
      </div>

      <div
        ref={track}
        data-reveal
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={swallowClickAfterDrag}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        className="flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scroll-px-4 px-4 pb-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))] [scrollbar-width:none] active:cursor-grabbing sm:px-6 lg:px-[max(2rem,calc((100vw_-_72rem)/2_+_2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.repo} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-border">
          <div ref={progress} className="h-full w-full origin-left scale-x-[0.08] rounded-full bg-primary" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => go(-1)} disabled={edges.start} aria-label="Previous project">
            <ArrowLeft />
          </Button>
          <Button size="icon" onClick={() => go(1)} disabled={edges.end} aria-label="Next project">
            <ArrowRight />
          </Button>
        </div>
        <Link href="https://github.com/abpun" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">
          All repos <ArrowUpRight className="inline h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const href = project.isPrivate ? undefined : repoUrl(project.repo);

  return (
    <article
      data-slide
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${project.title}`}
      className="group relative flex w-[85vw] max-w-[26rem] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-card transition-shadow duration-500 hover:shadow-warm sm:w-[24rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${PREVIEW_TINTS[index % PREVIEW_TINTS.length]} transition-transform duration-700 ease-out group-hover:scale-105`}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <span className="font-mono text-xs text-foreground/70">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="font-mono text-sm text-foreground/80">abpun/{project.repo}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-semibold leading-tight">
          {href ? (
            <Link href={href} draggable={false} className="after:absolute after:inset-0 focus-visible:outline-none">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4 border-t pt-5 text-sm">
          {href ? (
            <span className="flex items-center gap-1.5 font-medium text-primary">
              <Github className="h-4 w-4" /> View code
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Lock className="h-4 w-4" /> Private repo
            </span>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              draggable={false}
              className="relative z-10 ml-auto flex items-center gap-1 text-muted-foreground hover:text-foreground"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
