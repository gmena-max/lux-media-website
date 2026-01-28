"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Clientes Satisfechos" },
  { value: "200+", label: "Proyectos Completados" },
  { value: "5M+", label: "Alcance Generado" },
  { value: "3", label: "Años de Experiencia" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovación",
    description: "Siempre a la vanguardia de las tendencias digitales.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Calidad",
    description: "Cada detalle importa en todo lo que hacemos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Compromiso",
    description: "Tu éxito es nuestro principal objetivo.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Somos <span className="gradient-text">Lux Media</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Somos una agencia de marketing digital con sede en Costa Rica,
              especializada en crear experiencias de marca memorables. Nuestro
              equipo combina creatividad, estrategia y tecnología para llevar tu
              negocio al siguiente nivel.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Creemos en el poder de las historias bien contadas y en la
              importancia de construir conexiones auténticas entre las marcas y
              su audiencia. Cada proyecto que emprendemos es una oportunidad
              para crear algo extraordinario.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{value.title}</h3>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] text-center glow"
                >
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional visual element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[var(--accent)]/20"
            >
              <p className="text-lg text-gray-300 italic">
                &ldquo;Nuestra misión es transformar la visión de nuestros
                clientes en experiencias digitales que inspiran y generan
                resultados.&rdquo;
              </p>
              <p className="text-[var(--accent)] mt-4 font-medium">
                — Equipo Lux Media
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
