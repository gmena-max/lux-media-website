"use client";

import { motion } from "framer-motion";

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
    <div className="w-[300px] md:w-[350px] flex-shrink-0 p-6 rounded-2xl glass-card glass-card-hover">
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
  // Duplicate for seamless loop
  const allCards = [...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[var(--accent-light)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
      <div className="group overflow-hidden marquee-mask">
        <div className="flex gap-6 animate-marquee-testimonials">
          {allCards.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
