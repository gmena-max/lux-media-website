import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Lux Media. Cómo recopilamos, usamos y protegemos su información personal.",
  alternates: {
    canonical: "https://luxmediacr.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-display">
          Política de <span className="gradient-text">Privacidad</span>
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 16 de marzo de 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Información General
            </h2>
            <p>
              Lux Media (&quot;nosotros&quot;, &quot;nuestro&quot;) opera el
              sitio web luxmediacr.com y servicios relacionados, incluyendo
              integraciones con plataformas de mensajería como WhatsApp,
              Instagram, Facebook y correo electrónico. Esta política describe
              cómo recopilamos, usamos, almacenamos y protegemos su información
              personal.
            </p>
            <p>
              Sede: San José, Costa Rica. Contacto:{" "}
              <a
                href="mailto:gabriel@luxmediacr.com"
                className="text-[var(--accent)] hover:underline"
              >
                gabriel@luxmediacr.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Información que Recopilamos
            </h2>
            <h3 className="text-lg font-medium text-white mb-2">
              2.1 Información proporcionada directamente
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Nombre, correo electrónico, número de teléfono/WhatsApp
              </li>
              <li>Nombre del negocio e industria</li>
              <li>
                Canales digitales (Instagram, Facebook, sitio web, LinkedIn,
                Google Business Profile)
              </li>
              <li>Presupuesto aproximado de marketing</li>
              <li>Mensajes enviados a través de formularios, chat o WhatsApp</li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-2 mt-4">
              2.2 Información recopilada automáticamente
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Datos de uso del sitio web (páginas visitadas, tiempo en el
                sitio) vía Google Analytics
              </li>
              <li>Dirección IP y tipo de navegador</li>
              <li>Fuente de referencia (cómo llegó a nuestro sitio)</li>
            </ul>

            <h3 className="text-lg font-medium text-white mb-2 mt-4">
              2.3 Información de conversaciones automatizadas
            </h3>
            <p>
              Utilizamos asistentes de inteligencia artificial para responder
              mensajes en WhatsApp, Instagram, Facebook, correo electrónico y
              chat web. Las conversaciones con estos asistentes pueden ser:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Procesadas por modelos de lenguaje (IA) para generar respuestas
              </li>
              <li>Almacenadas como transcripciones en nuestro sistema CRM</li>
              <li>
                Utilizadas para mejorar la calidad del servicio
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Cómo Usamos su Información
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder a consultas y solicitudes de auditoría</li>
              <li>Calificar leads y agendar llamadas de descubrimiento</li>
              <li>Enviar propuestas, seguimientos y recordatorios</li>
              <li>
                Proporcionar servicios de marketing digital contratados
              </li>
              <li>
                Enviar contenido educativo y ofertas (solo con su
                consentimiento)
              </li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Analizar métricas del sitio web (Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Servicios de Terceros
            </h2>
            <p>
              Utilizamos los siguientes servicios que pueden procesar su
              información:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>GoHighLevel:</strong> CRM, gestión de contactos,
                calendario, comunicaciones
              </li>
              <li>
                <strong>ElevenLabs:</strong> Asistente de WhatsApp (texto, voz,
                notas de audio)
              </li>
              <li>
                <strong>Anthropic (Claude):</strong> Procesamiento de lenguaje
                natural para respuestas automatizadas
              </li>
              <li>
                <strong>n8n:</strong> Automatización de flujos de trabajo
              </li>
              <li>
                <strong>Google Analytics:</strong> Análisis de tráfico web
              </li>
              <li>
                <strong>Meta (WhatsApp Business API, Instagram, Facebook):</strong>{" "}
                Canales de comunicación
              </li>
            </ul>
            <p className="mt-2">
              Cada servicio tiene su propia política de privacidad. Le
              recomendamos revisarlas si tiene inquietudes específicas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Almacenamiento y Seguridad
            </h2>
            <p>
              Su información se almacena en servidores seguros proporcionados por
              nuestros proveedores de servicios (GoHighLevel, ElevenLabs,
              Google). Implementamos medidas de seguridad razonables para
              proteger contra acceso no autorizado, alteración o destrucción de
              datos.
            </p>
            <p className="mt-2">
              Conservamos su información mientras sea necesaria para los fines
              descritos en esta política, a menos que la ley exija un período de
              retención más largo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Sus Derechos
            </h2>
            <p>Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Acceso:</strong> Solicitar una copia de la información
                que tenemos sobre usted
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar la corrección de
                información inexacta
              </li>
              <li>
                <strong>Eliminación:</strong> Solicitar la eliminación de su
                información personal
              </li>
              <li>
                <strong>Oposición:</strong> Oponerse al procesamiento de su
                información para fines de marketing
              </li>
              <li>
                <strong>Portabilidad:</strong> Solicitar sus datos en un formato
                estructurado
              </li>
            </ul>
            <p className="mt-2">
              Para ejercer cualquiera de estos derechos, contáctenos en{" "}
              <a
                href="mailto:gabriel@luxmediacr.com"
                className="text-[var(--accent)] hover:underline"
              >
                gabriel@luxmediacr.com
              </a>{" "}
              o visite nuestra{" "}
              <a
                href="/data-deletion"
                className="text-[var(--accent)] hover:underline"
              >
                página de eliminación de datos
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Cookies y Tecnologías de Seguimiento
            </h2>
            <p>
              Nuestro sitio web utiliza Google Analytics (GA4) para recopilar
              datos de uso anónimos. Google Analytics utiliza cookies para
              identificar usuarios recurrentes. Puede desactivar las cookies en
              la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. Menores de Edad
            </h2>
            <p>
              Nuestros servicios están dirigidos a negocios y profesionales. No
              recopilamos intencionalmente información de menores de 18 años. Si
              cree que hemos recopilado información de un menor, contáctenos
              inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              9. Cambios a esta Política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política en cualquier
              momento. Los cambios se publicarán en esta página con la fecha de
              actualización. El uso continuado de nuestros servicios después de
              cualquier cambio constituye su aceptación de la política
              actualizada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              10. Contacto
            </h2>
            <p>
              Si tiene preguntas sobre esta política de privacidad, contáctenos:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:gabriel@luxmediacr.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  gabriel@luxmediacr.com
                </a>
              </li>
              <li>
                <strong>WhatsApp:</strong> +506 7191-1587
              </li>
              <li>
                <strong>Dirección:</strong> San José, Costa Rica
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
