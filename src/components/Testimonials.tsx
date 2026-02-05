"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Daniel Bejarano",
    role: "CEO, Dojo Coding",
    content:
      "Como empresa de tecnología, necesitábamos un equipo que entendiera nuestra visión. Lux Media no solo lo logró, sino que elevó nuestra presencia digital a otro nivel.",
    avatar: "DB",
    highlight: "Resultados excepcionales",
  },
  {
    id: 2,
    name: "Dr. Diego Mena",
    role: "Oftalmólogo, Oftalmologica Mena",
    content:
      "Las campañas que me han hecho me han llenado la agenda de consultas constantemente.",
    avatar: "DM",
    highlight: "4.2x ROAS en Meta Ads",
  },
  {
    id: 3,
    name: "Erick Lonnis",
    role: "Director, Deporte+",
    content:
      "Trabajar con Lux Media ha sido clave para posicionar nuestra marca. En 3 meses duplicamos nuestro engagement y triplicamos el alcance en Instagram.",
    avatar: "EL",
    highlight: "+200% engagement",
  },
  {
    id: 4,
    name: "Dr. Arnoldo Steinvorth",
    role: "Ortodoncista",
    content:
      "Lux Media transformó la imagen de mi práctica. Su equipo entiende perfectamente cómo comunicar profesionalismo. Pasamos de 500 a 3,000 seguidores en 4 meses.",
    avatar: "AS",
    highlight: "6x crecimiento en seguidores",
  },
  {
    id: 5,
    name: "Juan Guerrero",
    role: "CEO, Blockchain Jungle",
    content:
      "La cobertura del evento fue impecable. Entregaron contenido profesional en menos de 48 horas que usamos para promocionar los siguientes 3 meses.",
    avatar: "JG",
    highlight: "Contenido para 3+ meses",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="w-[300px] md:w-[350px] flex-shrink-0 p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors">
      {/* Highlight badge */}
      <div className="inline-block bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium px-3 py-1 rounded-full mb-4">
        {testimonial.highlight}
      </div>

      {/* Quote */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold text-sm">
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
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
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
      <div className="group overflow-hidden">
        <div className="flex gap-6 animate-marquee-testimonials">
          {allCards.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
