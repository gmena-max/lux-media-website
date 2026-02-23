"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

const stats = [
  { target: 20, suffix: "M+", label: "alcance generado" },
  { target: 500, suffix: "K", label: "audiencia semanal — Deporte+" },
] as const;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function AnimatedNumber({
  target,
  suffix,
  label,
  reducedMotion,
}: {
  target: number;
  suffix: string;
  label: string;
  reducedMotion: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  const showFinal = reducedMotion || !isInView;

  return (
    <div ref={ref} className="text-center px-8">
      <span className="gradient-text gold-glow text-6xl md:text-8xl font-bold font-display tabular-nums">
        {showFinal ? target : display}
        {suffix}
      </span>
      <p className="text-[var(--foreground)]/60 text-sm md:text-base mt-3 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function ResultsTicker() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-14 md:py-20 bg-[var(--background)] relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[200px] bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <p className="text-center text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle mb-12">
          Resultados reales
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedNumber
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                reducedMotion={reducedMotion}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
