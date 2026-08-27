import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work by Abhishek Pun — e-commerce, task management, and content tools.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary">PORTFOLIO</p>
          <h1 className="font-serif text-4xl font-semibold">Projects</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">A curated set — more on GitHub.</p>
        </div>
      </div>
      <Projects />
    </div>
  );
}
