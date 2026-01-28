"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CEO, Restaurante Sabores",
    content:
      "Lux Media transformó por completo nuestra presencia digital. En solo 3 meses duplicamos nuestros seguidores y las reservas aumentaron un 40%. Su equipo es increíblemente profesional y creativo.",
    avatar: "MG",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director, Inmobiliaria Costa",
    content:
      "La calidad del contenido audiovisual que producen es excepcional. Los videos de nuestras propiedades se ven de lujo y han mejorado significativamente nuestras ventas.",
    avatar: "CR",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Fundadora, Boutique Elegance",
    content:
      "Trabajar con Lux Media ha sido una de las mejores decisiones para mi negocio. Su estrategia de redes sociales nos ha ayudado a conectar con clientes que antes no podíamos alcanzar.",
    avatar: "AM",
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    role: "Gerente, Hotel Paradise",
    content:
      "El equipo de Lux Media entiende perfectamente las necesidades del mercado costarricense. Sus campañas son efectivas y siempre superan nuestras expectativas.",
    avatar: "RS",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Lo que dicen{" "}
            <span className="gradient-text">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Testimonial cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/20 transition-colors"
            >
              {/* Quote icon */}
              <div className="text-[var(--accent)]/30 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

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
          ))}
        </div>

        {/* Testimonial cards - Mobile carousel */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)]"
          >
            <div className="text-[var(--accent)]/30 mb-4">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-white">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[var(--accent)]"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
