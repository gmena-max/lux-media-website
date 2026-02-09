"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { CONTACT } from "@/constants/contact";

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAEElEQVR4nGMQEeKDIwacHAAv9wJxNLhVpwAAAABJRU5ErkJggg==";

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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[rgba(245,181,26,0.1)] hover:border-[rgba(245,181,26,0.25)] hover:shadow-[0_0_20px_rgba(245,181,26,0.08)] transition-all duration-300 flex flex-col"
    >
      {/* Image area */}
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        {/* Loading skeleton */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--card-border)] transition-opacity duration-300 ${
            imageLoaded && !imageError ? "opacity-0" : "opacity-100"
          }`}
        >
          {!imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent md:animate-shimmer" />
          )}
        </div>

        {!imageError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={`object-cover transition-all duration-700 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}

        {/* Category badge on image */}
        <span className="absolute bottom-3 left-3 text-[var(--accent)] text-xs font-medium uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Text area below image */}
      <div className="p-4 bg-[var(--background)] flex-1">
        <h3 className={`font-bold text-white mb-1 ${featured ? "text-xl" : "text-base"}`}>
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.result && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-2 inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            {project.result}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dojo Coding Hackathon",
    category: "Eventos",
    image: "/portfolio/dojo-hackathon.jpg",
    description: "El hackathon más grande de Costa Rica. Producción completa: drones, fotografía y video profesional.",
    result: "+300K impresiones",
    featured: true,
  },
  {
    id: 2,
    title: "Deporte+ (Teletica)",
    category: "Contenido & Redes",
    image: "/portfolio/deporte-plus.jpg",
    description: "El programa deportivo de Teletica. Producción audiovisual, podcasts, reels y gestión completa de redes.",
    result: "+20M impresiones",
    featured: true,
  },
  {
    id: 3,
    title: "Oftalmologica Mena",
    category: "Publicidad Digital",
    image: "/portfolio/oftalmologica.jpg",
    description: "Clínica oftalmológica líder. Campañas de Meta Ads que convierten en citas reales vía WhatsApp.",
    result: "+Pacientes vía WhatsApp",
  },
  {
    id: 4,
    title: "Blockchain Jungle",
    category: "Eventos",
    image: "/portfolio/blockchain-jungle.jpg",
    description: "El evento blockchain más grande de Centroamérica. Concepto creativo, producción audiovisual y contenido on-site.",
    result: "+1M alcance",
  },
  {
    id: 5,
    title: "StarkNet Nosara",
    category: "Social Media",
    image: "/portfolio/startnet-nosara.jpg",
    description: "Comunidad tech internacional en Nosara. Contenido multiplataforma: podcasts, YouTube, reels, drones y aftermovie.",
    result: "+40 piezas de contenido",
  },
  {
    id: 6,
    title: "Jokers of Neon",
    category: "Campañas Digitales",
    image: "/portfolio/jokers-of-neon.jpg",
    description: "Juego móvil en iOS y Android. Campaña de lanzamiento con estrategia digital y dirección creativa.",
    result: "+1.2K descargas en lanzamiento",
  },
];

export default function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="portafolio" className="py-12 md:py-24 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Background accent */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Resultados que <span className="gradient-text">impulsan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estrategia, creatividad y datos para hacer crecer tu marca.
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Tu marca puede ser la siguiente.
          </p>
          <motion.a
            href={CONTACT.getWhatsAppUrl("Hola, vi su portafolio y me gustaría agendar una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-8 py-4 rounded-full font-semibold hover:bg-[var(--accent-light)] transition-colors"
          >
            Agenda tu consulta gratuita
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
