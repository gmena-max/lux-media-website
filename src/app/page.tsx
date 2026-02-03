import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SwipeableServices from "@/components/SwipeableServices";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <SwipeableServices />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
