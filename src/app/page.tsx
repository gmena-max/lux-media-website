import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SwipeableServices from "@/components/SwipeableServices";
import CtaBanner from "@/components/CtaBanner";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <ClientLogos />
      <SwipeableServices />
      <CtaBanner
        subtitle="Agenda una consulta gratuita y descubre cómo podemos ayudarte"
        whatsappMessage="Hola, vi su sitio web y me gustaría agendar una consulta gratuita."
      />
      <Process />
      <Stats />
      <About />
      <Portfolio />
      <CtaBanner
        title="¿Te gustó lo que viste?"
        subtitle="Trabajemos juntos en tu próximo proyecto"
        buttonText="Cotiza tu proyecto"
        whatsappMessage="Hola, me interesa cotizar un proyecto con ustedes."
      />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
