"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Users,
  Zap,
  Target,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";

const differentiators = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "IA como herramienta, no como buzzword",
    description:
      "Usamos inteligencia artificial para crear más rápido, analizar en tiempo real y optimizar continuamente. No es un extra en la propuesta — es cómo trabajamos.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Pocas marcas, atención real",
    description:
      "Trabajamos con un número limitado de clientes para que cada cuenta reciba atención directa de los fundadores. Cero intermediarios, cero ruido.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Obsesión por el número que importa",
    description:
      "No medimos likes. Medimos leads, ventas y costo por adquisición. Si algo no genera retorno, lo ajustamos o lo matamos.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Todo bajo un mismo equipo",
    description:
      "Contenido, ads, web y automatización. Una estrategia coherente en vez de 4 proveedores que no se hablan entre sí.",
  },
];

const team = [
  {
    name: "Jeaustin Campos",
    role: "CEO & Director Creativo",
    initials: "JC",
    bio: "Estrategia creativa y dirección de cada cuenta. Produjo Deporte+ en Teletica (500K televidentes, +20M impresiones) — ahora aplica esa experiencia para hacer crecer tu marca.",
    linkedin: "https://www.linkedin.com/in/jeaustin-campos/",
    instagram: "https://www.instagram.com/jeaustincampos/",
  },
  {
    name: "Gabriel Mena",
    role: "Co-Fundador & CTO",
    initials: "GM",
    bio: "La tecnología detrás de cada resultado: Meta Ads, Google Ads, automatizaciones con IA y dashboards en tiempo real. Si se puede medir, se puede mejorar.",
    linkedin: "https://www.linkedin.com/in/gabriel-mena-cr/",
    instagram: "https://www.instagram.com/gabrielmena.cr/",
  },
];

const stats = [
  { value: "+20M", label: "Impresiones generadas (Deporte+ en Teletica)" },
  { value: "24h", label: "Tiempo de respuesta promedio" },
  { value: "4", label: "Industrias: salud, deportes, tech, educación" },
];

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="pb-16 md:pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
              Sobre Nosotros
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-display">
              Detrás de +20M impresiones y 500K televidentes cada domingo.
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Contenido, publicidad, automatización e inteligencia artificial — un equipo que hace todo,
              para que vos solo te preocupés por cerrar ventas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[var(--card-bg)] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={isMobile ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: isMobile ? 0 : index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[var(--accent)] font-display">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Cómo trabajamos
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Producimos Deporte+ en Teletica, gestionamos las campañas de clínicas que llenan su agenda por WhatsApp,
                  y cubrimos los eventos tech más grandes de la región.{" "}
                  <strong className="text-white">
                    Cada cliente trabaja directo con los fundadores — no con un ejecutivo de cuenta.
                  </strong>
                </p>
                <p>
                  Contenido, publicidad, web y automatización bajo un mismo equipo. Vos aprobás, nosotros ejecutamos y medimos todo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[rgba(245,181,26,0.2)]"
            >
              <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                &ldquo;Si le pagás a una agencia y no sabés exactamente cuántos clientes te generaron este mes, algo está mal.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold text-sm">
                  J&G
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    Jeaustin & Gabriel
                  </p>
                  <p className="text-gray-500 text-xs">Fundadores</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24 bg-[var(--card-bg)] relative overflow-hidden">
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
              Por qué Lux Media
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display">
              Lo que nos hace diferentes
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={isMobile ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{
                  delay: isMobile ? 0 : index * 0.05,
                  duration: 0.4,
                }}
                className="flex items-start gap-4 p-6 rounded-xl glass-card"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
              El Equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 font-display">
              Quiénes están detrás
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={isMobile ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: isMobile ? 0 : index * 0.1,
                  duration: 0.5,
                }}
                className="p-6 rounded-2xl glass-card text-center"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {member.name}
                </h3>
                <p className="text-[var(--accent)] text-sm font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-3 mt-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--accent)] hover:bg-white/10 transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--accent)] hover:bg-white/10 transition-colors"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--card-bg)] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              ¿Querés saber si somos el equipo correcto para tu marca?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              30 minutos de diagnóstico. Sin compromiso, sin humo — solo claridad sobre qué necesitás y cómo podemos ayudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={CONTACT.getWhatsAppUrl(
                  "Hola, quiero agendar un diagnóstico para mi marca."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    event_label: "About Page CTA",
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
                Agendar diagnóstico
              </motion.a>
              <Link
                href="/contacto"
                onClick={() =>
                  trackEvent("cta_click", {
                    event_label: "About Page - Escríbenos",
                  })
                }
                className="inline-flex items-center justify-center px-8 py-4 text-gray-400 hover:text-white transition-colors"
              >
                Escríbenos directo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
