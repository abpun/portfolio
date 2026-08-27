import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abhishek Pun — let's discuss your next project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-4">
      <Contact />
    </div>
  );
}
