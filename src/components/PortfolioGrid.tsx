"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAEElEQVR4nGMQEeKDIwacHAAv9wJxNLhVpwAAAABJRU5ErkJggg==";

export default function PortfolioGrid() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
          Portafolio
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">
          Nuestro trabajo
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Proyectos reales con resultados medibles. Cada marca tiene una
          historia — estas son algunas que hemos ayudado a contar.
        </p>
      </motion.div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={isMobile ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: isMobile ? 0 : index * 0.05,
              duration: 0.4,
            }}
          >
            {project.caseStudy ? (
              <Link
                href={`/portafolio/${project.slug}`}
                className="group block rounded-2xl overflow-hidden border border-[rgba(245,181,26,0.1)] hover:border-[rgba(245,181,26,0.25)] hover:shadow-[0_0_20px_rgba(245,181,26,0.08)] transition-all duration-300"
              >
                <ProjectCard project={project} />
              </Link>
            ) : (
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <ProjectCard project={project} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--card-border)] transition-opacity duration-300 ${
            imageLoaded && !imageError ? "opacity-0" : "opacity-100"
          }`}
        />
        {!imageError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        <span className="absolute bottom-3 left-3 text-[var(--accent)] text-xs font-medium uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="p-5 bg-[var(--background)]">
        <h3 className="font-bold text-white text-lg mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          {project.result && (
            <span className="inline-flex items-center gap-1.5 text-[var(--accent)] text-sm font-medium">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clipRule="evenodd"
                />
              </svg>
              {project.result}
            </span>
          )}
          {project.caseStudy && (
            <span className="inline-flex items-center gap-1 text-[var(--accent)] text-sm font-medium group-hover:gap-2 transition-all">
              Ver caso
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </>
  );
}
