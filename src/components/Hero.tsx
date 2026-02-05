"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/constants/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
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

      {/* Main content */}
      <div
        className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[60px]"
        style={{ padding: "120px 6% 60px" }}
      >
        {/* LEFT COLUMN */}
        <div className="flex-1 max-w-[620px] text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(212, 168, 67, 0.05)",
              border: "1px solid rgba(212, 168, 67, 0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-sm text-[#D4A843]">+15 marcas impulsadas en Costa Rica</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-extrabold mb-3"
            style={{
              fontSize: "clamp(38px, 4.8vw, 68px)",
              lineHeight: 1.06,
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
            className="font-light text-lg mb-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Contenido que atrae, pauta que convierte, estrategia que escala.
          </motion.p>

          {/* Services */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-sm font-light mb-3.5"
            style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.8px" }}
          >
            Redes sociales · <span className="font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Video profesional</span> · <span className="font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Meta Ads</span> · Desarrollo web · Eventos
          </motion.p>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-[13px] mb-9"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Resultados en 30 días
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Sin sorpresas
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Respuesta en 48h
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <a
              href={CONTACT.getWhatsAppUrl("Hola, quiero una consulta gratuita para mi marca.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-black rounded-[14px] transition-all hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #D4A843, #c49a35)",
                boxShadow: "0 4px 30px rgba(212,168,67,0.2)",
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-medium rounded-[14px] transition-all hover:border-white/20"
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
        </div>

        {/* RIGHT COLUMN - Glass phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden lg:block relative flex-shrink-0"
          style={{ width: "420px" }}
        >
          {/* Gold glow behind mockup */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Phone mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto"
            style={{ width: "280px" }}
          >
            <div
              className="relative p-5 pt-6 pb-7 rounded-[28px]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
              }}
            >
              {/* Gold gradient line at top */}
              <div
                className="absolute top-0 left-8 right-8 h-[1px]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)",
                }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#c49a35] flex items-center justify-center text-black font-bold text-sm">
                  L
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-semibold">luxmedia.cr</span>
                    <span className="w-3 h-3 rounded-full bg-[#D4A843] flex items-center justify-center">
                      <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>Marketing Digital</span>
                </div>
              </div>

              {/* Post area */}
              <div
                className="h-40 rounded-xl mb-4 flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-5xl">🎬</span>
              </div>

              {/* Engagement */}
              <p className="text-[11px] mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="font-semibold text-white">2,847</span> likes · <span className="font-semibold text-white">184</span> comments · <span className="font-semibold text-white">96</span> shares
              </p>

              {/* Caption */}
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                <span className="font-semibold text-white">luxmedia.cr</span> Resultados que hablan por sí solos. Otra campaña exitosa para...
              </p>
            </div>
          </motion.div>

          {/* Floating stat badge - top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -top-2 -right-4"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="px-4 py-3 rounded-[14px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p className="text-lg font-bold text-[#4ADE80]">+1.2K</p>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>seguidores / mes</p>
            </motion.div>
          </motion.div>

          {/* Floating stat badge - bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="absolute bottom-8 -left-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="px-4 py-3 rounded-[14px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <p className="text-lg font-bold text-[#D4A843]">+340%</p>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>engagement</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 max-w-[1280px] mx-auto px-[6%] mt-8"
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-5">
          {[
            { value: "1M+", label: "ALCANCE GENERADO" },
            { value: "4.2x", label: "ROAS PROMEDIO" },
            { value: "+200", label: "PIEZAS CREADAS" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-8 py-6 rounded-[14px] transition-all hover:-translate-y-0.5 cursor-default"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-4xl font-extrabold text-[#D4A843] mb-1">{stat.value}</p>
              <p
                className="text-[10px] uppercase"
                style={{ letterSpacing: "2px", color: "rgba(255,255,255,0.3)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
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
