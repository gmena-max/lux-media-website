import type { Metadata } from "next";
import { CONTACT } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Eliminación de Datos",
  description:
    "Solicite la eliminación de sus datos personales de los sistemas de Lux Media.",
  alternates: {
    canonical: "https://luxmediacr.com/data-deletion",
  },
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-display">
          Eliminación de <span className="gradient-text">Datos</span>
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 16 de marzo de 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Su Derecho a la Eliminación de Datos
            </h2>
            <p>
              Usted tiene derecho a solicitar la eliminación de todos los datos
              personales que Lux Media haya recopilado sobre usted. Esto incluye
              información recopilada a través de:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Formularios del sitio web (contacto y auditoría)</li>
              <li>Conversaciones por WhatsApp</li>
              <li>Mensajes de Instagram y Facebook</li>
              <li>Correo electrónico</li>
              <li>Chat del sitio web</li>
              <li>Nuestro sistema CRM (GoHighLevel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Cómo Solicitar la Eliminación
            </h2>
            <p>
              Para solicitar la eliminación de sus datos, contáctenos por
              cualquiera de estos medios:
            </p>

            <div className="space-y-4 mt-4">
              <a
                href={`mailto:${CONTACT.email}?subject=Solicitud de eliminación de datos&body=Solicito la eliminación de todos mis datos personales de los sistemas de Lux Media.%0A%0ANombre:%0AEmail:%0ATeléfono/WhatsApp:%0A%0AInformación adicional para identificar mis datos:`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">
                    Enviar solicitud por email
                  </p>
                  <p className="text-sm text-gray-500">{CONTACT.email}</p>
                </div>
              </a>

              <a
                href={CONTACT.getWhatsAppUrl(
                  "Hola, solicito la eliminación de todos mis datos personales de los sistemas de Lux Media."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-green-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">
                    Enviar solicitud por WhatsApp
                  </p>
                  <p className="text-sm text-gray-500">+506 7191-1587</p>
                </div>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Qué Incluye la Eliminación
            </h2>
            <p>Al procesar su solicitud, eliminaremos:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Su registro de contacto en nuestro CRM (GoHighLevel)
              </li>
              <li>
                Transcripciones de conversaciones almacenadas
              </li>
              <li>
                Datos de formularios (contacto y auditoría)
              </li>
              <li>
                Cualquier nota o información asociada a su perfil
              </li>
              <li>
                Datos de auditorías digitales realizadas
              </li>
            </ul>
            <p className="mt-4">
              <strong>Nota:</strong> No podemos eliminar mensajes enviados a
              través de plataformas de terceros (WhatsApp, Instagram, Facebook)
              ya que esas conversaciones están almacenadas en los servidores de
              Meta. Para eliminar esos mensajes, contacte directamente a Meta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Plazo de Procesamiento
            </h2>
            <p>
              Procesaremos su solicitud de eliminación dentro de{" "}
              <strong>30 días hábiles</strong> a partir de la recepción. Le
              confirmaremos por el mismo canal cuando la eliminación se haya
              completado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Excepciones
            </h2>
            <p>
              Podemos retener cierta información cuando sea requerido por ley o
              para cumplir con obligaciones legales, como:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Registros financieros y de facturación (requeridos por
                Hacienda/DGT de Costa Rica)
              </li>
              <li>
                Información necesaria para resolver disputas pendientes
              </li>
            </ul>
            <p className="mt-2">
              En estos casos, le informaremos qué datos se retienen y por qué.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              Información Adicional
            </h2>
            <p>
              Para más información sobre cómo manejamos sus datos, consulte
              nuestra{" "}
              <a
                href="/privacy"
                className="text-[var(--accent)] hover:underline"
              >
                Política de Privacidad
              </a>{" "}
              y nuestros{" "}
              <a
                href="/terms"
                className="text-[var(--accent)] hover:underline"
              >
                Términos de Servicio
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
