"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT, EMAILJS } from "@/constants/contact";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // Honeypot field - should remain empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      setIsSubmitting(false);
      setSubmitStatus("success"); // Fake success to fool bots
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS.publicKey === "YOUR_PUBLIC_KEY") {
      // Fallback: Open email client with pre-filled message
      const subject = encodeURIComponent(`Contacto desde web: ${formData.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      );
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      return;
    }

    try {
      // Send email via EmailJS
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current!,
        EMAILJS.publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
      setErrorMessage("Error al enviar. Por favor intenta por WhatsApp.");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-[var(--accent)]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 font-display">
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Déjanos un mensaje o contáctanos por WhatsApp.
            Respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              {/* Honeypot field - hidden from users, catches bots */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-black py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  {errorMessage}
                </motion.p>
              )}

              {/* Trust badges - doubt removers */}
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "rgba(74, 222, 128, 0.08)",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                  }}
                >
                  <svg className="w-4 h-4 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Resultados en 30 días</span>
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "rgba(74, 222, 128, 0.08)",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                  }}
                >
                  <svg className="w-4 h-4 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Sin sorpresas</span>
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                  style={{
                    background: "rgba(74, 222, 128, 0.08)",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                  }}
                >
                  <svg className="w-4 h-4 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Respuesta en 48h</span>
                </span>
              </div>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)]">
              <h3 className="text-xl font-semibold mb-6">
                Otras formas de contactarnos
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={CONTACT.getWhatsAppUrl("Hola, me interesa conocer más sobre sus servicios.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] border border-[var(--card-border)] hover:border-green-500/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">WhatsApp</p>
                    <p className="text-sm text-gray-500">
                      Respuesta inmediata
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-500">{CONTACT.email}</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--background)] border border-[var(--card-border)]">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Ubicación</p>
                    <p className="text-sm text-gray-500">{CONTACT.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
