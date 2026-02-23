"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { CONTACT } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";
import type { Service } from "@/data/services";

interface ServicePageContentProps {
  service: Service;
  relatedServices: Service[];
}

export default function ServicePageContent({
  service,
  relatedServices,
}: ServicePageContentProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-4">
            {service.categoryLabel}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">
            {service.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>
        </motion.div>
      </section>

      {/* Pain Points */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
            ¿Tu negocio enfrenta esto?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={isMobile ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: isMobile ? 0 : index * 0.05,
                duration: 0.4,
              }}
              className="p-5 rounded-xl glass-card"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[rgba(245,181,26,0.2)]"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Nuestra solución
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {service.solution}
          </p>
        </motion.div>
      </section>

      {/* Deliverables */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
            Qué incluye
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
          {service.deliverables.map((item, index) => (
            <motion.div
              key={item}
              initial={isMobile ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: isMobile ? 0 : index * 0.03,
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

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <div className="space-y-2">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={isMobile ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: isMobile ? 0 : index * 0.05,
                  duration: 0.3,
                }}
                className="rounded-xl glass-card overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[var(--accent)] transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-8">
              Servicios relacionados
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((related, index) => (
              <motion.div
                key={related.slug}
                initial={isMobile ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: isMobile ? 0 : index * 0.05,
                  duration: 0.4,
                }}
              >
                <Link
                  href={`/servicios/${related.slug}`}
                  className="block p-5 rounded-xl glass-card glass-card-hover group h-full"
                >
                  <span className="text-xl mb-2 block">{related.icon}</span>
                  <h3 className="font-semibold text-white group-hover:text-[var(--accent)] transition-colors text-sm">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[var(--accent)] text-xs font-medium mt-2 group-hover:gap-2 transition-all">
                    Ver más
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
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
            {service.category === "growth"
              ? "¿Listo para llenar tu agenda?"
              : service.category === "content"
                ? "¿Listo para que tu marca se vea como cobra?"
                : "¿Listo para automatizar tu crecimiento?"}
          </h2>
          <p className="text-gray-400 mb-8">
            30 minutos de diagnóstico. Sin compromiso, sin humo — solo
            claridad sobre qué necesitás y cómo podemos ayudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={CONTACT.getWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  event_label: `Service - ${service.title}`,
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
              href="/contacto"
              onClick={() =>
                trackEvent("cta_click", {
                  event_label: `Service - ${service.title} - Escríbenos`,
                })
              }
              className="inline-flex items-center justify-center px-8 py-4 text-gray-400 hover:text-white transition-colors"
            >
              Escríbenos directo
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
