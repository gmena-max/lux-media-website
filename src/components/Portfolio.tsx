"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { CONTACT } from "@/constants/contact";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  result?: string;
  featured?: boolean;
}

function PortfolioCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer card-shine ${
        featured ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
    >
      {/* Loading skeleton */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--card-border)] transition-opacity duration-300 ${
          imageLoaded && !imageError ? "opacity-0" : "opacity-100"
        }`}
      >
        {!imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        )}
      </div>

      {/* Image */}
      {!imageError && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"}
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      {/* Gradient overlay — compact band at bottom to keep faces visible */}
      <div
        className="absolute inset-0 transition-opacity group-hover:opacity-100 opacity-95"
        style={{ background: "linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 35%, transparent 55%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {/* Category badge */}
        <span className="inline-block w-fit text-[var(--accent)] text-xs font-medium uppercase tracking-wider bg-[var(--accent)]/10 px-3 py-1 rounded-full mb-3">
          {project.category}
        </span>

        {/* Title */}
        <h3 className={`font-bold text-white mb-2 ${featured ? "text-2xl" : "text-lg"}`}>
          {project.title}
        </h3>

        {/* Description - always visible on all cards */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Result badge - if available */}
        {project.result && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mt-3 inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            {project.result}
          </motion.div>
        )}
      </div>

      {/* Hover border with gold glow */}
      <div className="absolute inset-0 rounded-2xl border border-[rgba(245,181,26,0.1)] group-hover:border-[rgba(245,181,26,0.25)] group-hover:shadow-[0_0_20px_rgba(245,181,26,0.08)] transition-all duration-300" />
    </motion.div>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dojo Coding Hackathon",
    category: "Eventos",
    image: "/portfolio/dojo-hackathon.jpg",
    description: "Cobertura completa con drones y fotografía profesional del hackathon más grande de Costa Rica.",
    result: "+50K impresiones",
    featured: true,
  },
  {
    id: 2,
    title: "Deporte+ (Teletica)",
    category: "Social Media",
    image: "/portfolio/deporte-plus.jpg",
    description: "Gestión de redes y contenido para el programa deportivo de Teletica.",
    result: "+200% engagement",
    featured: true,
  },
  {
    id: 3,
    title: "Oftalmologica Mena",
    category: "Meta Ads",
    image: "/portfolio/oftalmologica.jpg",
    description: "Campañas de Meta Ads que generan pacientes nuevos cada mes.",
    result: "4.2x ROAS",
  },
  {
    id: 4,
    title: "Blockchain Jungle",
    category: "Eventos",
    image: "/portfolio/blockchain-jungle.jpg",
    description: "Videos y contenido on-site para el evento blockchain más grande de Centroamérica.",
    result: "+100K alcance",
  },
  {
    id: 5,
    title: "StartNet Nosara",
    category: "Social Media",
    image: "/portfolio/startnet-nosara.jpg",
    description: "2 semanas de creación de contenido on-site para comunidad tech.",
  },
  {
    id: 6,
    title: "Dra. Silvia Araya",
    category: "Meta Ads",
    image: "/portfolio/dra-araya.jpg",
    description: "Campaña de Día de las Madres con alto retorno de inversión.",
    result: "5x ROAS",
  },
];

export default function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="portafolio" className="py-24 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Resultados que <span className="gradient-text">hablan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No solo creamos contenido bonito. Generamos resultados medibles para nuestros clientes.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} featured />
          ))}
        </div>

        {/* Regular projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regularProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index + featuredProjects.length} />
          ))}
        </div>

        {/* CTA after portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            ¿Quieres resultados como estos para tu marca?
          </p>
          <motion.a
            href={CONTACT.getWhatsAppUrl("Hola, vi su portafolio y me gustaría resultados similares para mi marca.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-8 py-4 rounded-full font-semibold hover:bg-[var(--accent-light)] transition-colors"
          >
            Quiero resultados así
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
