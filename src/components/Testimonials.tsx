"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Daniel Bejarano",
    role: "CEO, Dojo Coding",
    content:
      "Como empresa de tecnología, necesitábamos un equipo que entendiera nuestra visión. Lux Media no solo lo logró, sino que elevó nuestra presencia digital a otro nivel. La cobertura del hackathon generó más de 50,000 impresiones.",
    avatar: "DB",
    highlight: "+50K impresiones en un evento",
    featured: true,
  },
  {
    id: 2,
    name: "Dr. Diego Mena",
    role: "Oftalmólogo, Oftalmologica Mena",
    content:
      "Las campañas de Meta Ads han traído 8-12 pacientes nuevos cada mes. La calidad del contenido refleja exactamente la excelencia que quiero transmitir. Estamos viendo un retorno de 4.2x en publicidad.",
    avatar: "DM",
    highlight: "4.2x ROAS en Meta Ads",
    featured: true,
  },
  {
    id: 3,
    name: "Eric Lonnis",
    role: "Director, Deporte+",
    content:
      "Trabajar con Lux Media ha sido clave para posicionar nuestra marca. En 3 meses duplicamos nuestro engagement y triplicamos el alcance en Instagram.",
    avatar: "EL",
    highlight: "+200% engagement en 3 meses",
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

function TestimonialCard({ testimonial, index, featured = false }: { testimonial: typeof testimonials[0]; index: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-6 md:p-8 rounded-2xl bg-[var(--card-bg)] border transition-all duration-300 ${
        featured
          ? "border-[var(--accent)]/30 hover:border-[var(--accent)]/50"
          : "border-[var(--card-border)] hover:border-[var(--accent)]/20"
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 left-6">
          <span className="bg-[var(--accent)] text-black text-xs font-semibold px-3 py-1 rounded-full">
            Destacado
          </span>
        </div>
      )}

      {/* Quote icon */}
      <div className="text-[var(--accent)]/20 mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Highlight */}
      <p className="text-[var(--accent)] font-medium text-sm mb-3">
        {testimonial.highlight}
      </p>

      {/* Content */}
      <p className="text-gray-300 mb-6 leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const otherTestimonials = testimonials.filter((t) => !t.featured);
  const mobileTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

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
            Clientes que <span className="gradient-text">confían</span> en nosotros
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            No lo decimos nosotros. Lo dicen ellos.
          </p>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          {/* Featured testimonials - larger */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} featured />
            ))}
          </div>

          {/* Other testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index + featuredTestimonials.length} />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-4">
          {mobileTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} featured={testimonial.featured} />
          ))}

          {!showAll && testimonials.length > 3 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setShowAll(true)}
              className="w-full py-4 mt-4 rounded-xl border border-[var(--card-border)] text-gray-400 hover:text-white hover:border-[var(--accent)]/30 transition-colors flex items-center justify-center gap-2"
            >
              Ver más testimonios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
