"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMarquee } from "@/hooks/useMarquee";

const testimonials = [
  {
    id: 1,
    name: "Daniel Bejarano",
    role: "CEO, DOJO Coding",
    content:
      "Lux Media no construyó DOJO — amplificó todo lo que somos. Esa es la diferencia entre una agencia y un partner real.",
    avatar: "DB",
    highlight: "Partner real",
  },
  {
    id: 2,
    name: "Dr. Diego Mena",
    role: "Oftalmólogo, Oftalmológica Mena",
    content:
      "Las campañas que me han hecho me han llenado la agenda de consultas constantemente.",
    avatar: "DM",
    highlight: "Agenda llena",
  },
  {
    id: 3,
    name: "Erick Lonnis",
    role: "Director, Deporte+",
    content:
      "Pasamos de cero presencia digital a 3 millones de vistas al mes. Los ratings del show también subieron.",
    avatar: "EL",
    highlight: "3M vistas/mes",
  },
  {
    id: 4,
    name: "Dr. Arnoldo Steinvorth",
    role: "Ortodoncista",
    content:
      "Lux Media entiende cómo comunicar lo que hacemos con profesionalismo. Crearon toda mi presencia digital desde cero y ahora mis pacientes me encuentran en redes.",
    avatar: "AS",
    highlight: "De cero a presencia digital",
  },
  {
    id: 5,
    name: "Juan Guerrero",
    role: "CEO, Blockchain Jungle",
    content:
      "Necesitábamos un equipo que aguantara el ritmo del evento tech más grande de Latinoamérica. Lux Media respondió con velocidad, calidad y consistencia.",
    avatar: "JG",
    highlight: "50+ piezas de contenido",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="w-[280px] md:w-[350px] flex-shrink-0 p-4 md:p-6 rounded-2xl glass-card glass-card-hover">
      {/* Highlight badge */}
      <div className="inline-block bg-[rgba(245,181,26,0.12)] border border-[rgba(245,181,26,0.25)] text-[var(--accent)] text-sm font-medium px-3 py-1 rounded-full mb-4">
        {testimonial.highlight}
      </div>

      {/* Quote */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold text-sm ring-2 ring-[rgba(245,181,26,0.3)]">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const {
    containerRef,
    trackRef,
    handleMouseEnter,
    handleMouseLeave,
    nudgeLeft,
    nudgeRight,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useMarquee({ speed: 50, nudgeDistance: 374 });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent-light)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Clientes que <span className="gradient-text">confían</span> en
            nosotros
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No lo decimos nosotros. Lo dicen ellos.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div
        ref={containerRef}
        className="relative group marquee-mask"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Arrow buttons — desktop only, show on hover */}
        <button
          onClick={nudgeLeft}
          aria-label="Ver anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-[var(--card-border)] text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nudgeRight}
          aria-label="Ver siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-[var(--card-border)] text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrolling track — 3x duplication for seamless loop */}
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6 will-change-transform">
            {[0, 1, 2].map((setIndex) =>
              testimonials.map((testimonial) => (
                <TestimonialCard
                  key={`${testimonial.id}-${setIndex}`}
                  testimonial={testimonial}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
