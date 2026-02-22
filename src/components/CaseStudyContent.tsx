"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import { CONTACT } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";
import type { CaseStudy } from "@/data/portfolio";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAEElEQVR4nGMQEeKDIwacHAAv9wJxNLhVpwAAAABJRU5ErkJggg==";

export default function CaseStudyContent({
  project,
}: {
  project: CaseStudy;
}) {
  const [isMobile, setIsMobile] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const cs = project.caseStudy!;

  return (
    <div className="space-y-14 md:space-y-20">
      {/* Hero */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-4">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative aspect-[16/9] rounded-2xl overflow-hidden"
      >
        {!imageError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        )}
      </motion.div>

      {/* Services tags */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2"
      >
        {cs.services.map((service) => (
          <span
            key={service}
            className="px-3 py-1.5 rounded-full text-sm text-gray-400 bg-white/5 border border-white/10"
          >
            {service}
          </span>
        ))}
      </motion.div>

      {/* Overview */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            El proyecto
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {cs.overview}
          </p>
        </motion.div>
      </section>

      {/* Challenge */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            El reto
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {cs.challenge}
          </p>
        </motion.div>
      </section>

      {/* Approach */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
            Nuestro enfoque
          </h2>
        </motion.div>

        <div className="space-y-3">
          {cs.approach.map((item, index) => (
            <motion.div
              key={item}
              initial={isMobile ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: isMobile ? 0 : index * 0.05,
                duration: 0.3,
              }}
              className="flex items-start gap-3 p-3"
            >
              <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
              </div>
              <span className="text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
            Resultados
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {cs.results.map((result, index) => (
            <motion.div
              key={result.metric}
              initial={isMobile ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: isMobile ? 0 : index * 0.08,
                duration: 0.4,
              }}
              className="p-5 rounded-xl glass-card text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[var(--accent)] mb-2">
                {result.metric}
              </div>
              <p className="text-sm text-gray-400">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[rgba(245,181,26,0.2)]"
          >
            <Quote className="w-8 h-8 text-[var(--accent)]/40 mb-4" />
            <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4 italic">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-white">
                {cs.testimonial.author}
              </p>
              <p className="text-sm text-gray-400">{cs.testimonial.role}</p>
            </div>
          </motion.div>
        </section>
      )}

      {/* CTA */}
      <section className="text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            ¿Listo para ver resultados así?
          </h2>
          <p className="text-gray-400 mb-8">
            30 minutos de diagnóstico. Sin compromiso, sin humo — solo claridad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={CONTACT.getWhatsAppUrl(
                `Hola, vi el caso de ${project.client} y me interesa algo similar para mi marca. Vi su sitio web.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  event_label: `Case Study - ${project.title}`,
                })
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar consulta gratuita
            </motion.a>
            <Link
              href="/portafolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-400 hover:text-white transition-colors"
            >
              Ver más proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
