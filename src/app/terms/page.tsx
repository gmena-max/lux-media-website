import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Términos y condiciones de uso de los servicios de Lux Media.",
  alternates: {
    canonical: "https://luxmediacr.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-display">
          Términos de <span className="gradient-text">Servicio</span>
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 16 de marzo de 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder y utilizar el sitio web luxmediacr.com, los servicios de
              mensajería automatizada (WhatsApp, Instagram, Facebook, correo
              electrónico, chat web), y cualquier otro servicio proporcionado por
              Lux Media, usted acepta estar sujeto a estos términos y
              condiciones.
            </p>
            <p className="mt-2">
              Si no está de acuerdo con estos términos, por favor no utilice
              nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Descripción de los Servicios
            </h2>
            <p>Lux Media proporciona los siguientes servicios:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gestión de redes sociales y creación de contenido</li>
              <li>
                Gestión de campañas publicitarias (Meta Ads, Google Ads)
              </li>
              <li>Producción de video profesional</li>
              <li>Desarrollo web</li>
              <li>Consultoría y estrategia de marketing digital</li>
              <li>
                Configuración de CRM y automatización (GoHighLevel, chatbots IA)
              </li>
              <li>Auditorías digitales gratuitas</li>
              <li>
                Asistentes virtuales con inteligencia artificial en canales de
                mensajería
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Interacción con Asistentes de IA
            </h2>
            <p>
              Al interactuar con nuestros asistentes de inteligencia artificial
              (en WhatsApp, Instagram, Facebook, correo electrónico o chat web),
              usted reconoce que:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Está comunicándose con un sistema automatizado, no con una
                persona
              </li>
              <li>
                Las respuestas son generadas por inteligencia artificial y
                pueden no ser perfectas
              </li>
              <li>
                Las conversaciones pueden ser almacenadas y revisadas para
                mejorar el servicio
              </li>
              <li>
                Puede solicitar hablar con una persona en cualquier momento
              </li>
              <li>
                Los asistentes de IA no proporcionan asesoría legal, financiera
                o médica
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Uso del Sitio Web
            </h2>
            <p>Usted se compromete a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Proporcionar información veraz y precisa en los formularios
              </li>
              <li>
                No utilizar el sitio web para fines ilegales o no autorizados
              </li>
              <li>
                No intentar acceder a áreas restringidas del sitio o sus
                sistemas
              </li>
              <li>
                No enviar contenido ofensivo, difamatorio o ilegal a través de
                nuestros canales de comunicación
              </li>
              <li>
                No utilizar bots, scripts u otros medios automatizados para
                interactuar con el sitio (excepto navegadores estándar)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Auditoría Digital Gratuita
            </h2>
            <p>
              La auditoría digital gratuita es un análisis de la presencia
              digital pública de su negocio. Al solicitarla:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Acepta que analicemos los canales digitales públicos que nos
                proporciona
              </li>
              <li>
                Entiende que la auditoría es informativa y no constituye un
                contrato de servicios
              </li>
              <li>
                La auditoría es suya — puede utilizarla con o sin contratar
                nuestros servicios
              </li>
              <li>
                El tiempo de entrega estimado es de 24 horas, sujeto a
                disponibilidad
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Servicios Contratados
            </h2>
            <p>
              Los servicios de marketing digital contratados se rigen por un
              acuerdo separado entre Lux Media y el cliente. Estos términos
              generales no sustituyen los acuerdos específicos de servicio.
            </p>
            <p className="mt-2">Términos generales de servicio:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Compromiso mínimo: 3 meses para servicios recurrentes</li>
              <li>
                Facturación: mensual, con pago dentro de los primeros 5 días del
                mes
              </li>
              <li>
                Cancelación: con 30 días de anticipación por escrito
              </li>
              <li>
                Gasto publicitario: pagado directamente por el cliente a
                Meta/Google, separado de los honorarios de gestión
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Propiedad Intelectual
            </h2>
            <p>
              El contenido del sitio web luxmediacr.com, incluyendo pero no
              limitado a textos, gráficos, logos, íconos, imágenes y software,
              es propiedad de Lux Media o sus licenciantes y está protegido por
              las leyes de propiedad intelectual.
            </p>
            <p className="mt-2">
              El contenido creado para clientes como parte de servicios
              contratados se rige por el acuerdo de servicio correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. Limitación de Responsabilidad
            </h2>
            <p>
              Lux Media no garantiza resultados específicos de marketing. Los
              resultados dependen de múltiples factores, incluyendo el mercado,
              la competencia, el presupuesto publicitario y la calidad del
              producto o servicio del cliente.
            </p>
            <p className="mt-2">
              Lux Media no será responsable por daños indirectos, incidentales o
              consecuentes derivados del uso de nuestros servicios o sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              9. Privacidad
            </h2>
            <p>
              El uso de su información personal se rige por nuestra{" "}
              <a
                href="/privacy"
                className="text-[var(--accent)] hover:underline"
              >
                Política de Privacidad
              </a>
              . Al utilizar nuestros servicios, acepta las prácticas descritas
              en dicha política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              10. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Los cambios entrarán en vigor al ser publicados en esta
              página. El uso continuado de nuestros servicios constituye la
              aceptación de los términos actualizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              11. Legislación Aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes de la República de Costa
              Rica. Cualquier disputa se resolverá ante los tribunales
              competentes de San José, Costa Rica.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              12. Contacto
            </h2>
            <p>
              Para preguntas sobre estos términos:
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
