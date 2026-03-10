"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT, EMAILJS } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";

const CHANNELS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    name: "Sitio Web",
    description: "Velocidad, SEO, CTAs, mobile",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    name: "Instagram",
    description: "Perfil, contenido, engagement",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    name: "Facebook",
    description: "Página, reseñas, engagement",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
    name: "Google Business",
    description: "Reseñas, fotos, visibilidad local",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    name: "LinkedIn",
    description: "Perfil empresa, contenido B2B",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    name: "WhatsApp Business",
    description: "Perfil, catálogo, auto-respuestas",
  },
];

const BUDGET_OPTIONS = [
  "Menos de $500/mes",
  "$500 - $1,000/mes",
  "$1,000 - $2,000/mes",
  "Más de $2,000/mes",
  "No estoy seguro",
];

export default function AuditoriaPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    instagram: "",
    whatsapp: "",
    website_url: "",
    facebook: "",
    gbp: "",
    linkedin: "",
    budget: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Honeypot check
    if (formData.honeypot) {
      setIsSubmitting(false);
      setSubmitStatus("success");
      return;
    }

    try {
      // Send EmailJS form email
      const emailPromise = emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current!,
        EMAILJS.publicKey
      );

      await emailPromise;

      trackEvent("generate_lead", {
        event_category: "Audit",
        event_label: "Audit Request Form",
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        business: "",
        instagram: "",
        whatsapp: "",
        website_url: "",
        facebook: "",
        gbp: "",
        linkedin: "",
        budget: "",
        honeypot: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[rgba(17,17,17,0.85)] border border-[var(--card-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[rgba(245,181,26,0.4)] focus:shadow-[0_0_0_3px_rgba(245,181,26,0.1)] transition-all";

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
          Gratis &middot; Sin compromiso
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 font-display">
          Auditoría de tu{" "}
          <span className="gradient-text">presencia digital</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Analizamos todos tus canales digitales y te damos una puntuación de 0 a
          60 con 5 acciones concretas que podés implementar esta semana.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left — What you get */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-6">
            Qué incluye la auditoría
          </h2>

          <div className="space-y-4 mb-10">
            {CHANNELS.map((channel) => (
              <div
                key={channel.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                  {channel.icon}
                </div>
                <div>
                  <p className="font-medium text-white">{channel.name}</p>
                  <p className="text-sm text-gray-500">{channel.description}</p>
                </div>
                <span className="ml-auto text-sm text-gray-500 shrink-0">
                  /10
                </span>
              </div>
            ))}
          </div>

          {/* What you get summary */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(245, 181, 26, 0.05)",
              border: "1px solid rgba(245, 181, 26, 0.15)",
            }}
          >
            <h3 className="font-semibold text-white mb-3">
              Al final recibís:
            </h3>
            <ul className="space-y-2">
              {[
                "Puntuación total de 0 a 60",
                "Análisis detallado por canal",
                "5 acciones concretas para esta semana",
                "Recomendaciones personalizadas",
                "Sin compromiso — es tuyo, la uses con nosotros o no",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitStatus === "success" ? (
            <div className="p-8 rounded-2xl glass-card text-center" style={{ borderColor: "rgba(245,181,26,0.15)" }}>
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[var(--accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Solicitud recibida
              </h3>
              <p className="text-gray-400 mb-6">
                Vamos a analizar tu presencia digital y te enviamos la auditoría
                en las próximas 24 horas por WhatsApp.
              </p>
              <p className="text-sm text-gray-500">
                Si querés agendar una consulta para revisar los resultados
                juntos:
              </p>
              <a
                href={CONTACT.getWhatsAppUrl(
                  "Hola, ya solicité mi auditoría gratuita y me gustaría agendar una consulta para revisar los resultados."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    event_label: "Audit Success - WhatsApp Consulta",
                  })
                }
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[var(--accent)] text-black font-semibold rounded-xl hover:bg-[var(--accent-light)] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribinos por WhatsApp
              </a>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl glass-card"
              style={{ borderColor: "rgba(245,181,26,0.15)" }}
            >
              <h2 className="text-xl font-semibold mb-2">
                Solicitá tu auditoría
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Completá el formulario y te la enviamos en 24 horas.
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Gabriel Mena"
                />
              </div>

              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nombre del negocio
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Mi Empresa S.A."
                />
              </div>

              <div>
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Instagram del negocio
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="@tuempresa"
                />
              </div>

              <div>
                <label
                  htmlFor="website_url"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Sitio web (si tiene)
                </label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  value={formData.website_url}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="www.tuempresa.com"
                />
              </div>

              {/* Optional channels — collapsible section */}
              <details className="group">
                <summary className="cursor-pointer text-sm text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors select-none">
                  + Agregar más canales (Facebook, Google, LinkedIn)
                </summary>
                <div className="space-y-5 mt-5">
                  <div>
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Página de Facebook
                    </label>
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      value={formData.facebook}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="facebook.com/tuempresa"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gbp"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nombre en Google Business Profile
                    </label>
                    <input
                      type="text"
                      id="gbp"
                      name="gbp"
                      value={formData.gbp}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Mi Empresa, San José"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      LinkedIn (empresa o personal)
                    </label>
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="linkedin.com/company/tuempresa"
                    />
                  </div>
                </div>
              </details>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  WhatsApp (para enviar la auditoría)
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="+506 8888-8888"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Presupuesto mensual aproximado
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="" disabled>
                    Seleccioná un rango
                  </option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
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
                {isSubmitting
                  ? "Enviando..."
                  : "Solicitar auditoría gratuita"}
              </button>

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center text-sm"
                >
                  Error al enviar. Intentá por{" "}
                  <a
                    href={CONTACT.getWhatsAppUrl(
                      "Hola, quiero solicitar la auditoría gratuita de mi presencia digital."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    WhatsApp
                  </a>
                  .
                </motion.p>
              )}

              <p className="text-xs text-gray-600 text-center">
                Sin compromiso. La auditoría es tuya — la uses con nosotros o
                no.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
