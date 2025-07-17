import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import Contact from "@/components/sections/Contact"
import Projects from "@/components/sections/Projects"
import Services from "@/components/sections/Services"
import TechStack from "@/components/sections/TechStack"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
