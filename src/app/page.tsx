import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SwipeableServices from "@/components/SwipeableServices";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--background)] aurora-bg">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ClientLogos />
      <SwipeableServices />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <CtaBanner
        title="Hagamos crecer tu marca"
        subtitle="Agenda una consulta gratuita. Conversemos sobre tus metas y cómo hacerlas realidad."
        buttonText="Agendar consulta"
        whatsappMessage="Hola, quiero agendar una consulta gratuita para mi marca."
      />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
