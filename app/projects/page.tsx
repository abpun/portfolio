import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work by Abhishek Pun — e-commerce, task management, and content tools.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <Projects />;
}
