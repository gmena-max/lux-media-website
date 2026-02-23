"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

// Show a curated selection of services — one from each category
const featuredSlugs = [
  "publicidad-meta",
  "redes-sociales",
  "chatbots-ia",
  "seo",
  "video-reels",
  "desarrollo-web",
];

const featuredServices = featuredSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean);

export default function ServicesPreview() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="servicios" className="py-16 md:py-24 relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Lo que hacemos por{" "}
            <span className="gradient-text">tu marca</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Estrategia, contenido, publicidad y tecnología — bajo un mismo equipo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service!.slug}
              initial={isMobile ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: isMobile ? 0 : index * 0.05,
                duration: 0.4,
              }}
            >
              <Link
                href={`/servicios/${service!.slug}`}
                className="block p-5 rounded-xl glass-card glass-card-hover group h-full transition-all duration-300"
              >
                <span className="text-2xl mb-2 block">{service!.icon}</span>
                <h3 className="font-semibold text-white group-hover:text-[var(--accent)] transition-colors font-display">
                  {service!.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">
                  {service!.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-[var(--accent)] text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  Ver más
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
          >
            Ver todos los servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
