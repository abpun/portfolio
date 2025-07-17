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
      "Creating seamless user interfaces with modern design principles and responsive layouts.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Efficient database design and management for optimal performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Frontend Development",
    description:
      "Building interactive and dynamic web applications using latest technologies.",
  },
  {
    icon: Code,
    title: "Backend Development",
    description:
      "Robust server-side development with secure APIs and efficient data handling.",
  },
  {
    icon: TestTube,
    title: "Testing & Debugging",
    description:
      "Comprehensive testing strategies to ensure bug-free and reliable applications.",
  },
  {
    icon: Settings,
    title: "System Architecture",
    description:
      "Designing scalable and maintainable system architectures for complex applications.",
  },
]

export const TECH_STACKS = [
  { name: "React", percentage: 98, color: "bg-blue-500" },
  { name: "Vue.js", percentage: 90, color: "bg-green-500" },
  { name: "Node.js", percentage: 95, color: "bg-red-500" },
  { name: "MongoDB", percentage: 97, color: "bg-orange-500" },
  { name: "Postgres", percentage: 88, color: "bg-yellow-500" },
  { name: "GitHub", percentage: 100, color: "bg-gray-800" },
]

export const PROJECTS = [
  {
    id: 1,
    status: "Completed",
    title: "E-Commerce Platform",
    image: "/api/placeholder/300/200",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/api/placeholder/300/200",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    status: "In Progress",
  },
]

export const CONTACT_INFOS = [
  { label: "Phone", value: "+977 9818538822", icon: Phone },
  { label: "Email", value: "abhishek.pun.3@gmail.com", icon: Mail },
  { label: "Location", value: "Butwal, Nepal", icon: MapPin },
]
