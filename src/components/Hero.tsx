"use client";

import { motion } from "framer-motion";

export default function Hero() {
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 60}%`, // Keep stars in upper portion (space area)
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background image with rotation + zoom */}
      <motion.div
        className="absolute inset-[-20%] w-[140%] h-[140%]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
          }}
          animate={{
            backgroundPosition: ["50% 50%", "55% 48%", "50% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: "20%", left: "10%" }}
          animate={{
            x: [0, 300],
            y: [0, 150],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "easeOut",
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-[1px] bg-gradient-to-l from-white to-transparent" />
        </motion.div>

        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ top: "15%", left: "70%" }}
          animate={{
            x: [0, 200],
            y: [0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 12,
            delay: 5,
            ease: "easeOut",
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-l from-white to-transparent" />
        </motion.div>
      </div>

      {/* City lights glow pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 80%, rgba(245, 181, 26, 0.3) 0%, transparent 50%)",
          }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Atmospheric glow at horizon */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-cyan-400/5 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-2 text-[var(--accent)]"
        >
          Lux
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent max-w-md mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 tracking-[0.3em] font-light uppercase"
        >
          All in one marketing vision
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
