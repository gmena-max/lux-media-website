"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["Todos", "Branding", "Social Media", "Video", "Campañas"];

const projects = [
  {
    id: 1,
    title: "Campaña Digital Premium",
    category: "Campañas",
    image: "/portfolio/project-1.jpg",
    description: "Estrategia integral de marketing digital",
  },
  {
    id: 2,
    title: "Identidad de Marca",
    category: "Branding",
    image: "/portfolio/project-2.jpg",
    description: "Diseño de marca completo",
  },
  {
    id: 3,
    title: "Contenido Redes Sociales",
    category: "Social Media",
    image: "/portfolio/project-3.jpg",
    description: "Gestión de redes para restaurante",
  },
  {
    id: 4,
    title: "Video Corporativo",
    category: "Video",
    image: "/portfolio/project-4.jpg",
    description: "Producción audiovisual premium",
  },
  {
    id: 5,
    title: "Lanzamiento de Producto",
    category: "Campañas",
    image: "/portfolio/project-5.jpg",
    description: "Campaña de lanzamiento 360°",
  },
  {
    id: 6,
    title: "Rebranding Corporativo",
    category: "Branding",
    image: "/portfolio/project-6.jpg",
    description: "Renovación de imagen de marca",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portafolio" className="py-24 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Nuestro <span className="gradient-text">trabajo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada proyecto es una oportunidad para crear algo extraordinario.
            Conoce algunos de nuestros trabajos más destacados.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-black"
                  : "bg-[var(--background)] text-gray-400 hover:text-white border border-[var(--card-border)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              layout
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder background - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--card-border)]" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[var(--accent)] text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:opacity-0 transition-opacity">
                <span className="text-sm">Imagen del proyecto</span>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--accent)]/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
