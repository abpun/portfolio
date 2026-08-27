import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
            jobTitle: "Full Stack Developer",
            address: { "@type": "PostalAddress", addressLocality: "Butwal", addressCountry: "Nepal" },
            sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
            email: siteConfig.email,
          }),
        }}
      />
    </>
  );
}
