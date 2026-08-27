import {
  Mail,
  Code,
  Phone,
  Globe,
  MapPin,
  Database,
  Settings,
  TestTube,
  Smartphone,
} from "lucide-react"

export const SERVICES = [
  {
    icon: Globe,
    title: "UI Integration",
    description:
      "Pixel-perfect, responsive interfaces built with modern design systems and accessibility in mind.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Robust data modeling and optimization for scale — MongoDB, Postgres, and beyond.",
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    description:
      "Interactive, performant web apps with React, Next.js, and TypeScript.",
  },
  {
    icon: Code,
    title: "Backend Development",
    description:
      "Secure APIs and server architecture with Node.js — built to last.",
  },
  {
    icon: TestTube,
    title: "Testing & Debugging",
    description:
      "Tested, reliable releases with thoughtful QA and debugging workflows.",
  },
  {
    icon: Settings,
    title: "System Architecture",
    description:
      "Scalable, maintainable architecture for ambitious products.",
  },
]

export const TECH_STACKS = [
  { name: "React", percentage: 98, color: "bg-foreground" },
  { name: "Next.js", percentage: 95, color: "bg-foreground" },
  { name: "Node.js", percentage: 95, color: "bg-zinc-700" },
  { name: "TypeScript", percentage: 92, color: "bg-zinc-600" },
  { name: "Postgres", percentage: 88, color: "bg-zinc-700" },
  { name: "MongoDB", percentage: 90, color: "bg-foreground" },
]

export const PROJECTS = [
  {
    id: 1,
    status: "Completed",
    title: "E-Commerce Platform",
    image: "/api/placeholder/300/200",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "A full-stack e-commerce solution with fast checkout and inventory sync.",
    href: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative kanban with real-time updates and offline support.",
    image: "/api/placeholder/300/200",
    tags: ["Next.js", "Firebase", "Tailwind"],
    status: "In Progress",
    href: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Content Studio — Blog CMS",
    description: "MDX-powered editorial workflow for daily publishing at speed.",
    image: "/api/placeholder/300/200",
    tags: ["Next.js", "MDX", "Postgres"],
    status: "Completed",
    href: "#",
    github: "#",
  },
]

export const CONTACT_INFOS = [
  { label: "Phone", value: "+977 9818538822", icon: Phone },
  { label: "Email", value: "abhishek.pun.3@gmail.com", icon: Mail },
  { label: "Location", value: "Butwal, Nepal", icon: MapPin },
]
