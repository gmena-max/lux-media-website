"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/constants/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center"
      style={{
        background: "linear-gradient(180deg, #070707 0%, #0a0808 50%, #060606 100%)",
      }}
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - top left */}
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212, 168, 67, 0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Blob 2 - top right */}
        <motion.div
          className="absolute -top-20 -right-40 w-[650px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212, 168, 67, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Blob 3 - bottom left */}
        <motion.div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212, 168, 67, 0.18) 0%, transparent 70%)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Blob 4 - bottom right */}
        <motion.div
          className="absolute -bottom-32 right-0 w-[300px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212, 168, 67, 0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(0,0,0,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 100% 50% at 50% 100%, rgba(0,0,0,0.3) 0%, transparent 60%)
          `,
        }}
      />

      {/* Main content - centered */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center px-6 py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(212, 168, 67, 0.05)",
            border: "1px solid rgba(212, 168, 67, 0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-sm text-[#D4A843]">20+ marcas en 6 países</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-extrabold mb-6"
          style={{
            fontSize: "clamp(40px, 5.5vw, 72px)",
            lineHeight: 1.08,
          }}
        >
          <span className="text-white">Tu próximo cliente está en redes</span>
          <br />
          <span
            className="inline-block animate-shimmer-text"
            style={{
              background: "linear-gradient(135deg, #D4A843 0%, #f0d080 50%, #D4A843 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nosotros lo traemos
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-light text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Contenido + pauta + IA. Resultados que se miden.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <a
            href={CONTACT.getWhatsAppUrl("Hola, quiero una consulta gratuita para mi marca.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-black rounded-[14px] transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #D4A843, #c49a35)",
              boxShadow: "0 4px 30px rgba(212,168,67,0.25)",
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consulta gratuita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-[14px] transition-all hover:border-white/20"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Ver nuestro trabajo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {[
            { value: "2M+", label: "ALCANCE MENSUAL" },
            { value: "20+", label: "MARCAS" },
            { value: "500+", label: "PIEZAS CREADAS" },
            { value: "10+", label: "EVENTOS CUBIERTOS" },
            { value: "6", label: "PAÍSES" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-4 rounded-[12px] transition-all hover:-translate-y-0.5 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-2xl md:text-3xl font-extrabold text-[#D4A843] mb-0.5">{stat.value}</p>
              <p
                className="text-[9px] md:text-[10px] uppercase"
                style={{ letterSpacing: "1.5px", color: "rgba(255,255,255,0.35)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll</span>
          <div className="w-5 h-8 rounded-full flex justify-center pt-1.5" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-[#D4A843] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
