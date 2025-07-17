import { Button } from "../ui/button"

export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-indigo-600">Portfolio</div>
          <nav className="hidden space-x-8 md:flex">
            <a
              href="#about"
              className="text-gray-700 transition-colors hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 transition-colors hover:text-indigo-600"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 transition-colors hover:text-indigo-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 transition-colors hover:text-indigo-600"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Hire Me</Button>
        </div>
      </div>
    </header>
  )
}
