"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CONTACT } from "@/constants/contact";

const services = [
  {
    id: 1,
    title: "Redes Sociales",
    tagline: "De seguidores a clientes",
    description: "Tu competencia está publicando. Nosotros te ayudamos a destacar con contenido que genera engagement y conversiones.",
    benefits: [
      "Contenido estratégico que atrae a tu cliente ideal",
      "Gestión completa — tú te enfocas en tu negocio",
      "Reportes mensuales con métricas que importan",
    ],
    result: "+300% engagement promedio",
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    icon: "📱",
  },
  {
    id: 2,
    title: "Video & Reels",
    tagline: "3 segundos para convencer",
    description: "El video domina las redes. Creamos contenido que captura atención instantáneamente y cuenta tu historia.",
    benefits: [
      "Videos optimizados para cada plataforma",
      "Reels que generan shares y saves",
      "Edición profesional con turnaround rápido",
    ],
    result: "2x más alcance que fotos",
    gradient: "from-purple-500/30 via-pink-500/20 to-fuchsia-500/30",
    icon: "🎬",
  },
  {
    id: 3,
    title: "Meta Ads",
    tagline: "Cada colón cuenta",
    description: "Campañas de Facebook e Instagram diseñadas para generar leads y ventas reales, no solo métricas vacías.",
    benefits: [
      "Segmentación precisa a tu cliente ideal",
      "A/B testing para maximizar ROI",
      "Reportes claros de retorno de inversión",
    ],
    result: "3-5x ROAS promedio",
    gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/30",
    icon: "📊",
  },
  {
    id: 4,
    title: "Eventos",
    tagline: "Cada momento importa",
    description: "Cobertura profesional con drones, cámaras y equipo en sitio. Capturamos la esencia de tu evento.",
    benefits: [
      "Fotografía y video profesional",
      "Tomas aéreas con drones",
      "Contenido listo en 24-48 horas",
    ],
    result: "Contenido para 3+ meses",
    gradient: "from-emerald-500/30 via-green-500/20 to-lime-500/30",
    icon: "🎥",
  },
  {
    id: 5,
    title: "Branding",
    tagline: "Marca memorable",
    description: "Creamos la identidad visual que hace que tu marca sea reconocible y profesional en cada punto de contacto.",
    benefits: [
      "Logo que representa tu esencia",
      "Manual de marca completo",
      "Plantillas para consistencia total",
    ],
    result: "Identidad profesional completa",
    gradient: "from-rose-500/30 via-red-500/20 to-orange-500/30",
    icon: "✨",
  },
];

export default function SwipeableServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const constraintsRef = useRef(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAnimating]);

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === services.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? services.length - 1 : prev - 1;
    });
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      paginate(-1);
    } else if (info.offset.x < -threshold) {
      paginate(1);
    }
  };

  const currentService = services[currentIndex];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-[var(--background)]">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Todo lo que necesitas para <span className="gradient-text">crecer</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Soluciones completas de marketing digital. Un equipo, todos los servicios.
          </p>
        </motion.div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6" ref={constraintsRef}>
        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] cursor-grab active:cursor-grabbing"
          >
            {/* Left: Visual card */}
            <div className="relative order-2 lg:order-1">
              <motion.div
                className={`relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden bg-gradient-to-br ${currentService.gradient} border border-white/10`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Large emoji icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[120px] md:text-[150px] opacity-90 select-none">
                    {currentService.icon}
                  </span>
                </div>

                {/* Result badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-[var(--accent)] text-sm font-medium mb-1">Resultado típico</p>
                    <p className="text-white text-xl font-bold">{currentService.result}</p>
                  </div>
                </motion.div>

                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              {/* Service number indicator */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[var(--accent)] text-sm font-mono">
                  {String(currentService.id).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--accent)]/50 to-transparent" />
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[var(--accent)] font-medium mb-2"
              >
                {currentService.tagline}
              </motion.p>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {currentService.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                {currentService.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-4 mb-10">
                {currentService.benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--accent)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA for this service */}
              <motion.a
                href={CONTACT.getWhatsAppUrl(`Hola, me interesa el servicio de ${currentService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/10"
              >
                Cotizar {currentService.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-16">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/5 hover:border-[var(--accent)]/50 transition-all"
            aria-label="Previous service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress dots with active progress bar */}
          <div className="flex gap-2 items-center">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating || index === currentIndex) return;
                  if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }}
                className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                  index === currentIndex
                    ? "w-12 bg-white/10"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to service ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-[var(--accent)] rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`progress-${currentIndex}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/5 hover:border-[var(--accent)]/50 transition-all"
            aria-label="Next service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-gray-600 text-sm mt-4 lg:hidden">
          ← Desliza para ver más →
        </p>
      </div>
    </section>
  );
}
