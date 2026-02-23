"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects as allProjects } from "@/data/portfolio";

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAEElEQVR4nGMQEeKDIwacHAAv9wJxNLhVpwAAAABJRU5ErkJggg==";

type Project = (typeof allProjects)[number];

function CardContent({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {/* Image area */}
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
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
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}

        <span className="absolute bottom-3 left-3 text-[var(--accent)] text-xs font-medium uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Text area */}
      <div className="p-4 bg-[var(--background)] flex-1">
        <h3 className={`font-bold text-white mb-1 ${featured ? "text-xl" : "text-base"}`}>
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          {project.result && (
            <span className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              {project.result}
            </span>
          )}
          {project.caseStudy && (
            <span className="inline-flex items-center gap-1 text-[var(--accent)] text-xs font-medium group-hover:gap-2 transition-all">
              Ver caso <ArrowRight className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

function PortfolioCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);

  const cardClasses = `group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
    project.caseStudy
      ? "border-[rgba(245,181,26,0.1)] hover:border-[rgba(245,181,26,0.25)] hover:shadow-[0_0_20px_rgba(245,181,26,0.08)]"
      : "border-white/5"
  }`;

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: isMobile ? 0 : index * 0.05, duration: 0.4 }}
    >
      {project.caseStudy ? (
        <Link href={`/portafolio/${project.slug}`} className={cardClasses}>
          <CardContent project={project} featured={featured} />
        </Link>
      ) : (
        <div className={cardClasses}>
          <CardContent project={project} featured={featured} />
        </div>
      )}
    </motion.div>
  );
}

const projects = allProjects;

export default function Portfolio() {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="portafolio" className="py-12 md:py-24 bg-[var(--card-bg)] relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index} featured />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regularProjects.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index + featuredProjects.length} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all"
          >
            Ver todo el portafolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
