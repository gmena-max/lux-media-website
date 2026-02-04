"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      layout
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Loading skeleton / Fallback background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--card-border)] transition-opacity duration-300 ${
          imageLoaded && !imageError ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Animated shimmer effect for loading state */}
        {!imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        )}
      </div>

      {/* Actual image */}
      {!imageError && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      {/* Overlay - always visible but more opaque on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/50 transition-all duration-300" />

      {/* Content on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className="text-[var(--accent)] text-sm font-medium mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>

      {/* Project title visible by default */}
      <div className="absolute inset-0 flex items-center justify-center text-center p-4 group-hover:opacity-0 transition-opacity">
        <div>
          <p className="text-white font-medium mb-1 drop-shadow-lg">{project.title}</p>
          <span className="text-xs text-gray-300 drop-shadow-lg">{project.category}</span>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--accent)]/30 transition-colors" />
    </motion.div>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dojo Coding Hackathon",
    category: "Eventos",
    image: "/portfolio/dojo-hackathon.jpg",
    description: "Cobertura completa con drones, fotografía y video del hackathon más importante de Costa Rica.",
  },
  {
    id: 2,
    title: "Deporte+ (Teletica)",
    category: "Social Media",
    image: "/portfolio/deporte-plus.jpg",
    description: "Gestión de redes sociales y contenido para el programa deportivo de Teletica.",
  },
  {
    id: 3,
    title: "Oftalmologica Mena",
    category: "Campañas",
    image: "/portfolio/oftalmologica.jpg",
    description: "Campañas de Meta Ads, gestión de redes y contenido para clínica oftalmológica.",
  },
  {
    id: 4,
    title: "Blockchain Jungle",
    category: "Eventos",
    image: "/portfolio/blockchain-jungle.jpg",
    description: "Videos, gráficos y grabación on-site para el evento blockchain más grande de Centroamérica.",
  },
  {
    id: 5,
    title: "StartNet Nosara",
    category: "Social Media",
    image: "/portfolio/startnet-nosara.jpg",
    description: "2 semanas de creación de contenido on-site para comunidad tech en Nosara.",
  },
  {
    id: 6,
    title: "Dra. Silvia Araya",
    category: "Campañas",
    image: "/portfolio/dra-araya.jpg",
    description: "Campaña especial de Día de las Madres con Meta Ads que generó un alto ROI.",
  },
];

export default function Portfolio() {
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
