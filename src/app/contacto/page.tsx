import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agendá tu diagnóstico gratuito. 30 minutos, cero compromiso — solo claridad sobre qué necesita tu marca para crecer.",
  alternates: {
    canonical: "https://luxmediacr.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40">
      <Contact />
    </main>
  );
}
