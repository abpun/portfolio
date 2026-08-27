import type { Metadata } from "next";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";

export const metadata: Metadata = {
  title: "About",
  description: "About Abhishek Pun — full-stack developer from Butwal, Nepal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <TechStack />
    </>
  );
}
