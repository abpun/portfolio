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
  { name: "React", percentage: 98, color: "bg-sky" },
  { name: "Next.js", percentage: 95, color: "bg-secondary" },
  { name: "Node.js", percentage: 95, color: "bg-leaf" },
  { name: "TypeScript", percentage: 92, color: "bg-primary" },
  { name: "Postgres", percentage: 88, color: "bg-sky" },
  { name: "MongoDB", percentage: 90, color: "bg-accent" },
]

const GITHUB = "https://github.com/abpun"

export type Project = {
  repo: string
  title: string
  description: string
  tags: string[]
  isPrivate?: boolean
  demo?: string
}

export const PROJECTS: Project[] = [
  {
    repo: "test-databricks",
    title: "Databricks File Uploader",
    description:
      "Uploads files from the browser into Databricks Volumes through the Files API, with OAuth machine-to-machine auth kept on the server.",
    tags: ["React", "Express", "FastAPI", "Databricks"],
  },
  {
    repo: "ProportionalRepresentationNepal",
    title: "PR Results Nepal",
    description:
      "Live proportional-representation tally for Nepal's 2082 election, scraped from Election Commission data and served serverless.",
    tags: ["Node.js", "Express", "Puppeteer", "Vercel"],
    isPrivate: true,
  },
  {
    repo: "signarama",
    title: "Signarama",
    description:
      "Marketing site for a signage company: product categories, industry pages and a Markdown blog, built for SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
  },
  {
    repo: "TrailWithUs",
    title: "Trail With Us",
    description:
      "Travel and trekking agency site with guided tours, flight booking, insurance and personalised trip help.",
    tags: ["React", "Vite", "TanStack Query", "Tailwind"],
  },
  {
    repo: "ecommerce-web",
    title: "E-Commerce Platform",
    description:
      "Full-stack store with storefront, auth and admin dashboard, backed by a NestJS API with JWT and Cloudinary uploads.",
    tags: ["Next.js", "NestJS", "MongoDB", "Zustand"],
  },
  {
    repo: "quiz-game",
    title: "DigiQuiz",
    description:
      "Multiple-choice quiz game across categories with randomised questions, scoring and a leaderboard.",
    tags: ["React", "MUI", "Redux", "Express"],
    demo: "https://digiquiz.vercel.app",
  },
  {
    repo: "chat-backend",
    title: "Realtime Chat API",
    description:
      "Socket.io chat server with live presence and messaging, plus REST routes for users, posts and conversations.",
    tags: ["Node.js", "Socket.io", "Express", "MongoDB"],
    isPrivate: true,
  },
]

export const repoUrl = (repo: string) => `${GITHUB}/${repo}`

export const CONTACT_INFOS = [
  { label: "Phone", value: "+977 9818538822", icon: Phone },
  { label: "Email", value: "abhishek.pun.3@gmail.com", icon: Mail },
  { label: "Location", value: "Butwal, Nepal", icon: MapPin },
]
