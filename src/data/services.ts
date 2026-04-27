export type ServiceCategory = "growth" | "content" | "technology";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface DeliverableGroup {
  title: string;
  items: string[];
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  painPoints: { title: string; description: string }[];
  solution: string;
  /** Flat list of deliverables; always required (used for SEO schema + fallback). */
  deliverables: string[];
  /** Optional grouped view of deliverables; when present the service page renders groups instead of the flat list. */
  deliverableGroups?: DeliverableGroup[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  relatedSlugs: string[];
  icon: string;
  customComponent?: string;
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  growth: "Crecimiento",
  content: "Contenido",
  technology: "Tecnología",
};

export const services: Service[] = [
  // ─── GROWTH ───────────────────────────────────────────────
  {
    slug: "publicidad-meta",
    title: "Meta Ads (Facebook + Instagram)",
    category: "growth",
    categoryLabel: "Crecimiento",
    metaTitle: "Meta Ads — Más clientes desde Facebook e Instagram",
    metaDescription:
      "Campañas de Meta Ads con resultados desde la primera semana. Segmentación, creativos y optimización semanal. Cada colón invertido se mide.",
    shortDescription:
      "Más leads, más ventas, menos costo por adquisición — resultados medibles desde la primera semana.",
    icon: "📣",
    painPoints: [
      {
        title: "Tirás plata en pauta sin resultados",
        description:
          "Publicás anuncios pero no sabés si generan clientes o solo likes.",
      },
      {
        title: "No sabés a quién le estás hablando",
        description:
          "Sin segmentación clara, tu presupuesto se diluye en audiencias que nunca van a comprar.",
      },
      {
        title: "Creativos que no convierten",
        description:
          "Imágenes genéricas y copy débil = scroll infinito. Nadie se detiene.",
      },
    ],
    solution:
      "Diseñamos campañas con segmentación precisa, creativos que detienen el scroll, y optimización basada en datos reales. Cada colón invertido tiene un propósito medible.",
    deliverables: [
      "Estrategia de campañas por objetivo (leads, ventas, awareness)",
      "Creativos de alto rendimiento (imagen + video + carrusel)",
      "Segmentación de audiencias y lookalikes",
      "Configuración de Meta Pixel y eventos de conversión",
      "A/B testing continuo",
      "Reportes semanales con métricas clave",
      "Optimización de presupuesto en tiempo real",
    ],
    faqs: [
      {
        question: "¿Cuánto debo invertir en Meta Ads?",
        answer:
          "Depende de tu industria, mercado y objetivos. En la llamada de diagnóstico revisamos tu situación actual, definimos un presupuesto que tenga sentido para tu volumen de ventas, y te enviamos una propuesta con números exactos en 48 horas.",
      },
      {
        question: "¿Cuánto tardan en verse resultados?",
        answer:
          "Leads desde la primera semana. La optimización continua mejora el rendimiento cada semana que pasa — mes 3 es otra cosa.",
      },
      {
        question: "¿Manejan la inversión en pauta o solo la estrategia?",
        answer:
          "Todo. Estrategia, creativos, configuración técnica, optimización y reportes. Vos solo aprobás y cerrás ventas.",
      },
    ],
    whatsappMessage: "Hola, me interesa mejorar mis campañas de Meta Ads. Vi su sitio web.",
    relatedSlugs: ["publicidad-google", "redes-sociales", "video-reels"],
  },
  {
    slug: "publicidad-google",
    title: "Google Ads",
    category: "growth",
    categoryLabel: "Crecimiento",
    metaTitle: "Google Ads — Aparecé primero cuando te buscan",
    metaDescription:
      "Campañas de Google Ads que capturan demanda existente. Search, Display y YouTube Ads con tracking de conversiones y ROAS medible.",
    shortDescription:
      "Aparecer primero cuando tu cliente busca. Cada clic medido, cada lead rastreado.",
    icon: "🔍",
    painPoints: [
      {
        title: "Tu competencia aparece primero en Google",
        description:
          "Cuando alguien busca tu servicio, encuentra a otros antes que a vos.",
      },
      {
        title: "Campañas de Google sin retorno",
        description:
          "Invertís en Google Ads pero no sabés cuántos clientes reales generaste.",
      },
      {
        title: "Keywords genéricas que queman presupuesto",
        description:
          "Sin investigación de keywords, pagás por clics que nunca se convierten.",
      },
    ],
    solution:
      "Campañas de Google Ads con keywords de alta intención, landing pages optimizadas y tracking de conversiones. Sabés exactamente cuánto cuesta cada lead.",
    deliverables: [
      "Investigación de keywords de alta intención",
      "Estructura de campañas Search y Display",
      "Configuración de Google Tag Manager y conversiones",
      "Landing pages optimizadas para conversión",
      "Extensiones de anuncio y sitelinks",
      "Reportes de rendimiento y ROAS",
      "Optimización continua de pujas y keywords",
    ],
    faqs: [
      {
        question: "¿Google Ads o Meta Ads — cuál me conviene?",
        answer:
          "Google captura demanda existente (gente buscando). Meta genera demanda nueva (gente descubriendo). Lo ideal es combinar ambos. En tu consulta definimos la mezcla correcta.",
      },
      {
        question: "¿Necesito una landing page especial?",
        answer:
          "Sí. Enviar tráfico de Google a tu página general mata la conversión. Creamos landing pages específicas por campaña para maximizar resultados.",
      },
    ],
    whatsappMessage: "Hola, me interesa publicidad en Google Ads para mi negocio. Vi su sitio web.",
    relatedSlugs: ["posicionamiento-geo", "publicidad-meta", "seo"],
  },
  {
    slug: "seo",
    title: "SEO & Posicionamiento",
    category: "growth",
    categoryLabel: "Crecimiento",
    metaTitle: "SEO — Que te encuentren cuando te buscan",
    metaDescription:
      "Posicionamiento orgánico, Google Business Profile y gestión de reseñas. Tráfico calificado que llega sin pagar por cada clic.",
    shortDescription:
      "Dominá Google de punta a punta: SEO, keywords, Business Profile, reseñas, Analytics y Search Console. Orgánico + pagado, todo medido.",
    icon: "📈",
    painPoints: [
      {
        title: "No aparecés en Google",
        description:
          "Tus clientes potenciales buscan tus servicios y encuentran a la competencia.",
      },
      {
        title: "Reseñas negativas o inexistentes",
        description:
          "Sin reseñas, Google no te da visibilidad. Con reseñas negativas, perdés clientes antes de hablarles.",
      },
      {
        title: "Google Business Profile abandonado",
        description:
          "Tu perfil tiene información desactualizada, sin fotos y sin actividad.",
      },
    ],
    solution:
      "SEO técnico + contenido + Google Business Profile optimizado + estrategia de reseñas. Posicionamiento orgánico que genera tráfico calificado sin pagar por cada clic.",
    deliverables: [
      "Auditoría SEO técnica completa",
      "Optimización on-page (meta tags, estructura, velocidad)",
      "Google Business Profile optimizado",
      "Estrategia y gestión de reseñas de Google",
      "Schema markup / datos estructurados",
      "Monitoreo de posiciones y tráfico orgánico",
      "Reportes mensuales de rendimiento SEO",
    ],
    faqs: [
      {
        question: "¿Cuánto tarda el SEO en dar resultados?",
        answer:
          "SEO orgánico toma 3-6 meses para tracción real. Google Business Profile puede dar resultados en semanas. Es una inversión a largo plazo que reduce tu costo por lead.",
      },
      {
        question: "¿Incluyen gestión de reseñas de Google?",
        answer:
          "Sí. Implementamos un sistema para solicitar reseñas a clientes satisfechos y gestionamos respuestas a todas las reseñas, positivas y negativas.",
      },
    ],
    whatsappMessage: "Hola, me interesa mejorar el posicionamiento de mi negocio en Google. Vi su sitio web.",
    relatedSlugs: ["posicionamiento-geo", "publicidad-google", "desarrollo-web"],
  },
  {
    slug: "posicionamiento-geo",
    title: "Posicionamiento GEO",
    category: "growth",
    categoryLabel: "Crecimiento",
    metaTitle: "Posicionamiento GEO — Aparecé en ChatGPT, Claude, Perplexity y Gemini",
    metaDescription:
      "Tus clientes ya le preguntan a ChatGPT antes de buscar en Google. GEO posiciona tu marca como fuente citada por las IA. El nuevo canal orgánico.",
    shortDescription:
      "Cuando tu cliente le pregunta a ChatGPT, que tu marca sea la respuesta.",
    icon: "✨",
    painPoints: [
      {
        title: "Tus clientes ya no empiezan en Google",
        description:
          "Antes de buscar, preguntan a ChatGPT, Claude o Perplexity. Si la IA no te conoce, te saltearon sin darse cuenta.",
      },
      {
        title: "La IA menciona a tu competencia, no a vos",
        description:
          "Las empresas que publican contenido estructurado y citable terminan en las respuestas. Las que no, desaparecen del canal.",
      },
      {
        title: "Te están ganando un canal que ni sabías que existía",
        description:
          "Marcas en tu categoría ya están optimizando para aparecer en ChatGPT. Cada mes que esperás, construyen autoridad que luego es cara de alcanzar.",
      },
    ],
    solution:
      "GEO (Generative Engine Optimization) es aparecer en las respuestas de sistemas de IA generativa — ChatGPT, Claude, Perplexity, Gemini — cuando tus clientes preguntan. Es un canal paralelo al SEO, con sus propias reglas. Los LLMs citan fuentes con contenido estructurado, con autoridad, y con datos concretos sobre tu categoría. Nosotros construimos esa autoridad: contenido en español con el formato que los LLMs priorizan, schema data que te hace citable, y monitoreo mensual de en qué respuestas apareces. GEO complementa al SEO — no lo reemplaza.",
    deliverables: [
      "✨ Estrategia GEO adaptada a tu categoría y mercado",
      "📚 Artículos de alta autoridad en español (formato que los LLMs citan) — cantidad según plan",
      "🧩 Schema data + llms.txt + estructura de datos citable",
      "🗺️ Mapa de temas por industria — los subtópicos donde tu marca debe ser citada",
      "🔍 Monitoreo mensual de menciones en ChatGPT, Claude, Perplexity, Gemini",
      "📊 Reporte mensual de visibilidad + citaciones detectadas",
      "🔁 Ajustes mensuales según qué preguntas disparan citaciones",
      "🧭 Acompañamiento estratégico mensual — revisión de resultados y siguiente jugada",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre GEO y SEO?",
        answer:
          "SEO es aparecer en los resultados de Google Search. GEO es aparecer en las respuestas de sistemas de IA generativa: ChatGPT, Claude, Perplexity, Gemini. Son canales distintos. Google te lleva a páginas; los LLMs te dan respuestas directas que a veces citan tu marca. Hoy mucha gente resuelve sus dudas en la IA antes de llegar a buscar — si no estás ahí, ni siquiera existe el clic a Google.",
      },
      {
        question: "¿Cómo se mide el éxito en GEO?",
        answer:
          "Medimos tres cosas: citaciones detectadas en respuestas de IA (ChatGPT, Claude, Perplexity, Gemini), autoridad en el topic (cuántos temas dentro de tu categoría te mencionan), y tráfico proveniente de esos canales cuando es rastreable. No prometemos 'aparecer en ChatGPT la semana 3' — los LLMs no funcionan así. Medimos la curva de visibilidad mes a mes.",
      },
      {
        question: "¿Cuánto tarda hasta que aparezca en respuestas de IA?",
        answer:
          "Típicamente las primeras citaciones comienzan a verse en 3–6 meses. Los LLMs procesan información con rezago — necesitan indexar, validar fuentes, y repetir la cita en contextos parecidos antes de que aparezcas de forma estable. GEO + SEO combinados aceleran: la visibilidad en Google alimenta las citas en IA.",
      },
      {
        question: "¿Por qué ahora y no en un año?",
        answer:
          "Porque la autoridad en GEO es acumulativa y primera-en-ganar. Las marcas que publican contenido citable ahora se consolidan como fuente que los LLMs recuerdan. Un año después, esa autoridad ya está tomada — entrás a empujar contra empresas con 12 meses de ventaja. En GEO el early-mover compra autoridad barata; el late-mover la paga triple en volumen de contenido.",
      },
      {
        question: "¿A la IA le interesa Costa Rica?",
        answer:
          "Los LLMs responden en español y citan fuentes en español. No es un canal gringo. Cuando alguien en CR le pregunta a ChatGPT sobre un servicio local, la IA busca fuentes relevantes en español — y si tu marca publica contenido de autoridad en tu categoría, aparecés. El sesgo 'solo cosas de EE.UU.' se corrigió en los últimos 12–18 meses.",
      },
      {
        question: "¿Esto reemplaza mi inversión en Google Ads?",
        answer:
          "No. Google Ads es pago-por-clic (volumen ahora, ROI inmediato). GEO es orgánico (autoridad acumulativa, ROI sostenido). Recomendamos combinar: Ads te da leads mientras GEO construye la autoridad que el siguiente año te consigue leads sin pagar cada clic.",
      },
    ],
    whatsappMessage: "Hola, me interesa posicionamiento GEO para aparecer en ChatGPT. Vi su sitio web.",
    relatedSlugs: ["seo", "publicidad-google", "business-brain"],
  },
  {
    slug: "crm-ventas",
    title: "CRM & Automatización de Ventas",
    category: "growth",
    categoryLabel: "Crecimiento",
    metaTitle: "CRM & Ventas — Cerrá más ventas sin perder leads",
    metaDescription:
      "CRM configurado a tu proceso de ventas. Pipeline visual, seguimiento automático y métricas de conversión. Cada lead tiene su siguiente paso claro.",
    shortDescription:
      "Dejá de perder leads en el camino. Pipeline visual, seguimiento automático, más cierres.",
    icon: "🎯",
    painPoints: [
      {
        title: "Leads que se pierden en el camino",
        description:
          "Recibís consultas pero no tenés sistema para darles seguimiento. Se enfrían y se van.",
      },
      {
        title: "No sabés en qué etapa está cada prospecto",
        description:
          "Sin pipeline visual, tu equipo pierde oportunidades porque nadie sabe quién tiene que hacer qué.",
      },
      {
        title: "Seguimiento manual que consume horas",
        description:
          "Mandás WhatsApps uno por uno, copiás datos entre hojas de cálculo y no te da el tiempo.",
      },
    ],
    solution:
      "CRM configurado a tu proceso de ventas con automatizaciones que dan seguimiento por vos. Cada lead tiene su etapa, su responsable y su siguiente paso claro.",
    deliverables: [
      "Implementación y configuración de CRM",
      "Pipeline de ventas configurado por etapas",
      "Automatizaciones de seguimiento (email, WhatsApp)",
      "Integración con formularios web y redes sociales",
      "Dashboard de métricas de ventas",
      "Capacitación del equipo",
      "Soporte técnico continuo",
    ],
    faqs: [
      {
        question: "¿Qué CRM recomiendan?",
        answer:
          "Depende de tu negocio. Evaluamos opciones como Kommo, HubSpot o Pipedrive según tu volumen de leads, presupuesto y flujo de trabajo. Te recomendamos el que mejor se adapte.",
      },
      {
        question: "¿Se integra con WhatsApp?",
        answer:
          "Sí. Integramos WhatsApp Business API con tu CRM para que cada conversación quede registrada y con seguimiento automático.",
      },
    ],
    whatsappMessage: "Hola, me interesa implementar un CRM para mi equipo de ventas. Vi su sitio web.",
    relatedSlugs: ["business-brain", "publicidad-meta", "dashboards"],
  },

  // ─── CONTENT ──────────────────────────────────────────────
  {
    slug: "redes-sociales",
    title: "Redes Sociales",
    category: "content",
    categoryLabel: "Contenido",
    metaTitle: "Redes Sociales — Contenido que genera clientes",
    metaDescription:
      "Gestión de redes sociales con estrategia, contenido y comunidad. Instagram, Facebook, TikTok y LinkedIn — resultados medibles cada mes.",
    shortDescription:
      "De publicar sin rumbo a una comunidad que genera clientes. Estrategia + contenido + resultados.",
    icon: "📱",
    painPoints: [
      {
        title: "Publicás sin estrategia",
        description:
          "Subís contenido cuando te acordás, sin plan, sin coherencia, sin resultados.",
      },
      {
        title: "Crecimiento estancado",
        description:
          "Followers que no aumentan, engagement que cae, y no sabés por qué.",
      },
      {
        title: "No tenés tiempo para redes",
        description:
          "Manejar redes bien toma horas diarias que no tenés. Tu negocio necesita tu atención.",
      },
    ],
    solution:
      "Estrategia de contenido mensual con calendario editorial, producción de contenido (statics, carruseles, stories, reels), publicación optimizada y análisis de rendimiento.",
    deliverables: [
      "Estrategia de contenido mensual",
      "Calendario editorial con fechas de publicación",
      "Diseño de contenido (statics, carruseles, stories)",
      "Copywriting para cada pieza",
      "Publicación y programación en todas las plataformas",
      "Gestión de comunidad y respuesta a comentarios",
      "Reporte mensual de métricas y crecimiento",
    ],
    faqs: [
      {
        question: "¿En cuáles plataformas publican?",
        answer:
          "Instagram, Facebook, TikTok, LinkedIn y YouTube. Recomendamos enfocarse en 2-3 plataformas donde está tu audiencia, no en todas a la vez.",
      },
      {
        question: "¿Cuántas publicaciones al mes?",
        answer:
          "Depende del plan. El mínimo efectivo son 12-16 publicaciones/mes (3-4 por semana). Incluye mix de formatos: statics, carruseles, reels y stories.",
      },
    ],
    whatsappMessage: "Hola, me interesa gestión de redes sociales para mi marca. Vi su sitio web.",
    relatedSlugs: ["video-reels", "marca-identidad", "publicidad-meta"],
  },
  {
    slug: "video-reels",
    title: "Video & Reels",
    category: "content",
    categoryLabel: "Contenido",
    metaTitle: "Video & Reels — Dominá el algoritmo con video profesional",
    metaDescription:
      "Producción de video y reels que detienen el scroll. Concepto, grabación y edición optimizada para máximo alcance en cada plataforma.",
    shortDescription:
      "Video que detiene el scroll y vende. Concepto, grabación y edición — listo para cada plataforma.",
    icon: "🎬",
    painPoints: [
      {
        title: "Tu contenido no se ve profesional",
        description:
          "Videos grabados con celular sin guión, sin edición, sin branding. Se nota.",
      },
      {
        title: "Reels que nadie ve",
        description:
          "Publicás video pero no genera views ni engagement. El algoritmo te ignora.",
      },
      {
        title: "No tenés capacidad de producción",
        description:
          "Grabar, editar y publicar video toma tiempo y equipo que no tenés.",
      },
    ],
    solution:
      "Producción audiovisual completa: concepto creativo, guión, grabación con equipo profesional, edición optimizada para cada plataforma y formatos que el algoritmo prioriza.",
    deliverables: [
      "Conceptos creativos y guiones por video",
      "Grabación con equipo profesional",
      "Edición optimizada por plataforma (vertical, cuadrado, horizontal)",
      "Motion graphics y subtítulos",
      "Thumbnails diseñados",
      "Reels, shorts y contenido de formato corto",
      "Behind-the-scenes y contenido orgánico",
    ],
    faqs: [
      {
        question: "¿Cuántos videos producen al mes?",
        answer:
          "Depende del plan. El paquete base incluye 4-8 reels/mes. Para marcas que quieren dominar video, hacemos hasta 20+ piezas mensuales.",
      },
      {
        question: "¿Vienen a grabar o lo hacemos remoto?",
        answer:
          "Ambos. Hacemos sesiones de grabación presenciales (batching de contenido en un día) y también producimos con material que vos enviás.",
      },
    ],
    whatsappMessage: "Hola, me interesa producción de video y reels para mi marca. Vi su sitio web.",
    relatedSlugs: ["redes-sociales", "produccion-eventos", "marca-identidad"],
  },
  {
    slug: "marca-identidad",
    title: "Branding & Identidad",
    category: "content",
    categoryLabel: "Contenido",
    metaTitle: "Branding — Una marca que se ve como cobra",
    metaDescription:
      "Identidad visual que hace tu marca reconocible y profesional. Logo, paleta, tipografía y guía de marca — consistencia en cada punto de contacto.",
    shortDescription:
      "Una marca que se ve como cobra. Identidad visual que genera confianza desde el primer contacto.",
    icon: "✨",
    painPoints: [
      {
        title: "Tu marca no se ve profesional",
        description:
          "Logo viejo, colores inconsistentes, cada pieza se ve diferente. No generás confianza.",
      },
      {
        title: "No te diferenciás de la competencia",
        description:
          "Tu marca se ve igual a todas las demás. Nada la hace memorable.",
      },
      {
        title: "Sin guía de marca",
        description:
          "Cada diseñador que toca tu marca la interpreta diferente. No hay consistencia.",
      },
    ],
    solution:
      "Diseño de identidad visual completa que refleja los valores de tu marca y la hace reconocible en cada plataforma y punto de contacto.",
    deliverables: [
      "Diseño o rediseño de logotipo",
      "Paleta de colores y tipografías",
      "Guía de estilo de marca (brand book)",
      "Variaciones de logo (horizontal, vertical, icono)",
      "Templates para redes sociales",
      "Papelería corporativa digital",
      "Aplicación de marca en todos los canales",
    ],
    faqs: [
      {
        question: "¿Cuánto toma un proyecto de branding?",
        answer:
          "Un branding completo toma 2-4 semanas. Incluye investigación, propuestas, iteraciones y entrega final con brand book.",
      },
      {
        question: "¿Puedo actualizar mi logo sin cambiar toda la marca?",
        answer:
          "Sí. Hacemos refresh de marca (modernizar sin perder identidad) o rebranding completo según lo que necesités.",
      },
    ],
    whatsappMessage: "Hola, me interesa un proyecto de branding para mi marca. Vi su sitio web.",
    relatedSlugs: ["redes-sociales", "desarrollo-web", "video-reels"],
  },
  {
    slug: "produccion-eventos",
    title: "Producción de Eventos",
    category: "content",
    categoryLabel: "Contenido",
    metaTitle: "Eventos — Producción que maximiza tu inversión",
    metaDescription:
      "Producción y cobertura profesional de eventos. Drones, video, streaming y contenido para redes en tiempo real. Cada evento genera meses de contenido.",
    shortDescription:
      "Cada evento genera meses de contenido. Producción con drones, cámaras y equipo profesional.",
    icon: "🎪",
    painPoints: [
      {
        title: "Tu evento no se documenta bien",
        description:
          "Fotos con celular, sin cobertura profesional, sin contenido para después del evento.",
      },
      {
        title: "No maximizás el impacto del evento",
        description:
          "El evento pasa y no generaste contenido suficiente para capitalizar la inversión.",
      },
      {
        title: "Producción improvisada",
        description:
          "Sin plan de producción, el equipo llega sin saber qué capturar ni cómo contarlo.",
      },
    ],
    solution:
      "Producción completa de eventos: planeación, equipo en sitio (cámaras, drones, audio), cobertura en tiempo real para redes, y post-producción de todo el material.",
    deliverables: [
      "Plan de producción y shot list",
      "Equipo en sitio (fotógrafos, videógrafos, drones)",
      "Cobertura en tiempo real para redes sociales",
      "Aftermovie / video resumen del evento",
      "Galería de fotos editadas",
      "Contenido para redes post-evento (reels, carruseles)",
      "Streaming en vivo (cuando aplique)",
    ],
    faqs: [
      {
        question: "¿Con cuánta anticipación debo contratar?",
        answer:
          "Ideal: 3-4 semanas antes. Mínimo: 1 semana. Mientras antes, mejor planeamos la producción y el concepto creativo.",
      },
      {
        question: "¿Manejan eventos fuera de San José?",
        answer:
          "Sí. Hemos cubierto eventos en todo Costa Rica y en otros países de Centroamérica.",
      },
    ],
    whatsappMessage: "Hola, me interesa producción y cobertura para un evento. Vi su sitio web.",
    relatedSlugs: ["video-reels", "redes-sociales", "marca-identidad"],
  },

  // ─── TECHNOLOGY ───────────────────────────────────────────
  {
    slug: "business-brain",
    title: "Business Brain",
    category: "technology",
    categoryLabel: "Tecnología",
    metaTitle: "Business Brain — IA que conoce tu empresa y vende 24/7",
    metaDescription:
      "Business Brain: un cerebro AI entrenado con tu negocio que responde en WhatsApp, Instagram y Facebook, califica leads, agenda citas, nutre contactos y automatiza procesos — 24/7, en español.",
    shortDescription:
      "Un cerebro que aprende tu negocio y vende mientras vos dormís — 24/7, en WhatsApp, IG y FB.",
    icon: "🧠",
    painPoints: [
      {
        title: "Leads que te escriben fuera de horario",
        description:
          "Mensajes que llegan a las 10pm se contestan al día siguiente. Para entonces, ya compraron en otro lado.",
      },
      {
        title: "Tu equipo repite lo mismo 50 veces al día",
        description:
          "Precio, horario, disponibilidad, status de orden — horas muertas en tareas que una IA hace en segundos.",
      },
      {
        title: "Información atrapada en cabezas y carpetas",
        description:
          "Nadie encuentra el doc correcto. El CRM está desactualizado. Cada empleado nuevo pierde semanas aprendiendo lo mismo.",
      },
    ],
    solution:
      "Un Business Brain es un sistema de IA entrenado con la información de tu empresa — docs, precios, políticas, tono — y conectado a tus canales (WhatsApp, Instagram, Facebook), tu CRM y tu calendario. Responde clientes, califica leads, agenda citas, envía follow-ups y automatiza procesos repetitivos. Un solo cerebro que nunca duerme y que siempre sabe lo que tu empresa sabe.",
    deliverables: [
      "📱 WhatsApp AI — responde, califica leads, agenda citas, hace follow-up",
      "📷 Instagram DM — el mismo cerebro responde en IG automáticamente",
      "💬 Facebook Messenger — cobertura completa en redes Meta",
      "📋 CRM integrado — cada conversación guardada, pipeline por etapas",
      "🔁 Nurture + follow-up — secuencias automáticas para quienes no responden",
      "📢 Campañas masivas — envíos segmentados por canal y etapa del pipeline",
      "📚 Base de conocimiento — lee tus docs, precios, FAQs y políticas",
      "📅 Agenda automática — citas directo en Google Calendar",
      "🧑‍💼 Uso interno — tus empleados consultan al cerebro desde WhatsApp o Slack",
      "⚙️ Automatizaciones — procesos repetitivos que se ejecutan solos",
      "📊 Reportes mensuales — métricas de conversación, leads y conversión",
      "🔧 Tuning mensual — ajustes según lo que funciona en tu operación",
    ],
    deliverableGroups: [
      {
        title: "Canales 24/7",
        items: [
          "📱 WhatsApp AI — responde, califica leads, agenda citas, hace follow-up",
          "📷 Instagram DM — el mismo cerebro responde en IG automáticamente",
          "💬 Facebook Messenger — cobertura completa en redes Meta",
        ],
      },
      {
        title: "Inteligencia",
        items: [
          "📋 CRM integrado — cada conversación guardada, pipeline por etapas",
          "📚 Base de conocimiento — lee tus docs, precios, FAQs y políticas",
          "🧑‍💼 Uso interno — tus empleados consultan al cerebro desde WhatsApp o Slack",
        ],
      },
      {
        title: "Automatización",
        items: [
          "📅 Agenda automática — citas directo en Google Calendar",
          "🔁 Nurture + follow-up — secuencias automáticas para quienes no responden",
          "📢 Campañas masivas — envíos segmentados por canal y etapa del pipeline",
          "⚙️ Automatizaciones — procesos repetitivos que se ejecutan solos",
          "📊 Reportes mensuales — métricas de conversación, leads y conversión",
          "🔧 Tuning mensual — ajustes según lo que funciona en tu operación",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El Business Brain reemplaza a mi equipo?",
        answer:
          "No. El Brain maneja lo repetitivo (FAQs, calificación, citas, follow-ups) para que tu equipo se enfoque en cerrar ventas y atender lo complejo. Cuando algo sale del guion, escala a un humano.",
      },
      {
        question: "¿Qué tanta información necesita mi empresa para empezar?",
        answer:
          "Lo mínimo: tus productos/servicios, precios, FAQs, horarios y tono de marca. En la sesión de discovery te damos una lista puntual. Si no tenés todo documentado, parte del setup es estructurarlo.",
      },
      {
        question: "¿Se puede instalar por etapas?",
        answer:
          "Sí. Arrancás con el módulo de mayor impacto (típicamente WhatsApp + calendario + knowledge) y agregás módulos cada mes. No tenés que pagar por todo desde el día uno.",
      },
      {
        question: "¿Qué pasa si mi negocio cambia?",
        answer:
          "El Brain se actualiza mensualmente con la nueva información (precios, servicios, políticas). El mantenimiento incluye ese tuning.",
      },
      {
        question: "¿Funciona con mi WhatsApp actual?",
        answer:
          "Necesita migrar a WhatsApp Business Cloud API (la versión oficial para empresas con automatización). Coordinamos la migración durante el setup — es parte del trabajo.",
      },
      {
        question: "¿Business Brain también contesta llamadas por teléfono?",
        answer:
          "No directamente — Business Brain vive en WhatsApp, Instagram y Facebook Messenger. Si también necesitás contestar llamadas automáticamente, lo hacemos con Voice Agent, nuestro servicio hermano. Se pueden combinar: Voice Agent contesta el teléfono, Business Brain cubre los mensajes.",
      },
    ],
    whatsappMessage: "Hola, me interesa Business Brain para mi empresa. Vi su sitio web.",
    relatedSlugs: ["voice-agent", "crm-ventas", "dashboards"],
  },
  {
    slug: "voice-agent",
    title: "Voice Agent",
    category: "technology",
    categoryLabel: "Tecnología",
    metaTitle: "Voice Agent — Agente de voz con IA que contesta el teléfono 24/7 en Costa Rica",
    metaDescription:
      "Agente de voz con IA que contesta llamadas 24/7 en español, califica leads, agenda citas y confirma recordatorios. Sin perder clientes fuera de horario.",
    shortDescription:
      "Tu teléfono contestado 24/7 en español — califica leads y agenda citas mientras tu equipo vende.",
    icon: "☎️",
    painPoints: [
      {
        title: "Perdés llamadas fuera de horario",
        description:
          "Llamadas entrantes a las 7pm se contestan al día siguiente. Para cuando devolvés, el cliente ya buscó a otro proveedor.",
      },
      {
        title: "Tu equipo se quema contestando lo mismo",
        description:
          "Precio, horarios, ubicación, disponibilidad — repetido 30 veces al día. Cada vez que suena el teléfono, alguien deja de vender.",
      },
      {
        title: "Tus clientes cuelgan al oír el mensaje de voz",
        description:
          "'Deje su mensaje después del tono' es una puerta cerrada. Devolvés la llamada y ya no contestan — perdiste la venta antes de empezar.",
      },
    ],
    solution:
      "Un agente de voz con IA entrenado con la información de tu empresa — productos, precios, horarios, tono — que atiende tu teléfono en español latinoamericano 24/7. Responde preguntas frecuentes, califica leads según tus criterios, agenda citas directo en tu Google Calendar y te manda un resumen de cada llamada por WhatsApp. Ese mismo agente también llama de vuelta cuando toca: confirmar una cita, recordar un vencimiento, verificar un dato.",
    deliverables: [
      "☎️ Inbound 24/7 sin colas ni mensaje de voz",
      "🎯 Califica leads en tiempo real según tus criterios",
      "📅 Agenda citas directo en Google Calendar",
      "📲 Resumen de cada llamada al WhatsApp del dueño",
      "🔔 Llamadas salientes de confirmación y recordatorio",
      "👤 Transferencia a un humano cuando algo se sale del guion",
      "📚 Entrenado con tu información: productos, precios, FAQs, tono de marca",
      "📊 Reporte mensual de llamadas, motivos y conversión",
      "🔧 Tuning mensual según las llamadas reales que recibe",
    ],
    faqs: [
      {
        question: "¿Qué tan natural suena el acento en español?",
        answer:
          "Usamos voces con acento latinoamericano neutro, mexicano o colombiano según tu preferencia. La cadencia es humana — los clientes no sienten que están hablando con un robot. En la sesión de discovery te ponemos a escuchar ejemplos antes de comprometerte.",
      },
      {
        question: "¿Funciona con el número que ya tengo?",
        answer:
          "Sí. Conectamos con tu línea actual o te asignamos una nueva según lo que mejor funcione para tu operación. Eso lo coordinamos en la sesión de discovery, donde revisamos tu telefonía actual.",
      },
      {
        question: "¿Esto reemplaza a mi recepcionista?",
        answer:
          "No la reemplaza — la libera. El Voice Agent maneja lo repetitivo (precios, horarios, citas, preguntas frecuentes, mensajes fuera de horario) para que tu recepcionista o tu equipo se enfoquen en lo que requiere criterio humano: atención al cliente real, ventas complejas, manejo de quejas.",
      },
      {
        question: "¿Qué pasa si el cliente pide hablar con un humano?",
        answer:
          "El agente reconoce cuando algo sale del guion y te transfiere la llamada al instante — o te manda el mensaje al WhatsApp si estás ocupado. Nunca deja a un cliente colgando.",
      },
      {
        question: "¿Qué pasa si el sistema falla?",
        answer:
          "Si el agente falla o hay un problema técnico, la llamada pasa directo a tu número de respaldo o a quien vos definás. Nunca se pierde una llamada por una caída del sistema. Monitoreamos 24/7 y el tuning mensual incluye revisión de cualquier incidente.",
      },
      {
        question: "¿Puede hacer llamadas salientes de confirmación o recordatorio?",
        answer:
          "Sí, para casos específicos — confirmar citas, recordar vencimientos, verificar datos de contacto. No lo usamos para campañas masivas de llamadas; para eso WhatsApp es más barato y menos intrusivo. El Voice Agent saliente es para los momentos donde una llamada cierra mejor que un mensaje.",
      },
    ],
    whatsappMessage: "Hola, me interesa un agente de voz con IA para mi empresa. Vi su sitio web.",
    relatedSlugs: ["business-brain", "crm-ventas", "publicidad-meta"],
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    category: "technology",
    categoryLabel: "Tecnología",
    metaTitle: "Desarrollo Web — Sitios que convierten visitantes en clientes",
    metaDescription:
      "Landing pages y sitios web que generan leads. Diseño moderno, velocidad sub-segundo y SEO incluido. No usamos WordPress ni templates genéricos.",
    shortDescription:
      "Sitios rápidos, modernos y diseñados para convertir visitantes en clientes. Cada página con un propósito claro.",
    icon: "💻",
    painPoints: [
      {
        title: "Tu sitio no genera clientes",
        description:
          "Tenés web pero nadie te contacta desde ahí. Es un folleto digital, no una máquina de leads.",
      },
      {
        title: "Sitio lento o desactualizado",
        description:
          "Carga lento, no se ve bien en celular, y la información está desactualizada.",
      },
      {
        title: "No tenés presencia digital",
        description:
          "Operás sin sitio web. Cuando alguien te busca en Google, no encontrás nada.",
      },
    ],
    solution:
      "Sitios web y landing pages construidos para convertir: diseño moderno, velocidad de carga sub-segundo, optimización SEO, y formularios conectados a tu CRM.",
    deliverables: [
      "Diseño UI/UX único para tu marca",
      "Desarrollo responsive (desktop + mobile)",
      "Optimización de velocidad (Core Web Vitals)",
      "SEO técnico y meta tags",
      "Formularios de contacto con integración",
      "SSL, hosting y dominio configurados",
      "Capacitación para actualizaciones básicas",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta un sitio web?",
        answer:
          "Depende del alcance: una landing page enfocada en una conversión, un sitio multi-página con blog y SEO, o un sitio completo con integraciones a CRM y dashboards son inversiones distintas. En la llamada de diagnóstico definimos alcance y te enviamos una propuesta con precio exacto en 48 horas.",
      },
      {
        question: "¿Con qué tecnología desarrollan?",
        answer:
          "Next.js, React, Tailwind CSS. Sitios ultra-rápidos, modernos y fáciles de mantener. No usamos WordPress ni templates genéricos.",
      },
    ],
    whatsappMessage: "Hola, me interesa desarrollo web para mi negocio. Vi su sitio web.",
    relatedSlugs: ["seo", "marca-identidad", "publicidad-google"],
  },
  {
    slug: "dashboards",
    title: "Dashboards en Tiempo Real",
    category: "technology",
    categoryLabel: "Tecnología",
    metaTitle: "Dashboards — Todos tus números en una sola pantalla (demo interactivo)",
    metaDescription:
      "Dashboard de marketing en tiempo real. Meta, Google, CRM y web centralizados. Probá el demo interactivo y ve exactamente qué funciona y qué no.",
    shortDescription:
      "Tu dashboard de marketing en una sola pantalla. Meta, Google, CRM y web — datos en tiempo real para decidir rápido. Probá el demo interactivo abajo.",
    icon: "📊",
    painPoints: [
      {
        title: "No sabés qué está funcionando",
        description:
          "Datos regados en 5 plataformas distintas. No tenés una vista unificada de tu marketing.",
      },
      {
        title: "Reportes manuales que nadie lee",
        description:
          "Tu agencia te manda PDFs largos una vez al mes. Para cuando los leés, los datos ya son viejos.",
      },
      {
        title: "Decisiones a ciegas",
        description:
          "Sin datos en tiempo real, no podés reaccionar rápido ni optimizar sobre la marcha.",
      },
    ],
    solution:
      "Dashboard centralizado que conecta todas tus plataformas (Meta, Google, CRM, web) en una sola vista. Métricas actualizadas en tiempo real para tomar decisiones rápidas y basadas en datos.",
    deliverables: [
      "Dashboard en Looker Studio configurado a tu negocio",
      "Conexión con todas tus plataformas de marketing",
      "KPIs definidos por objetivo de negocio",
      "Visualización de rendimiento de campañas",
      "Métricas de ROI y costo por lead",
      "Acceso compartido con tu equipo",
      "Actualizaciones automáticas en tiempo real",
    ],
    faqs: [
      {
        question: "¿Puedo ver el dashboard desde el celular?",
        answer:
          "Sí. Los dashboards son responsivos y accesibles desde cualquier dispositivo con internet. También podemos configurar alertas automáticas.",
      },
      {
        question: "¿Qué plataformas conectan al dashboard?",
        answer:
          "Meta Ads, Google Ads, Google Analytics, Instagram, Facebook, CRM, y cualquier plataforma con API. Todo centralizado en un solo lugar.",
      },
    ],
    whatsappMessage: "Hola, me interesa un dashboard de métricas para mi marketing. Vi su sitio web.",
    relatedSlugs: ["business-brain", "publicidad-meta", "publicidad-google"],
    customComponent: "DashboardDemo",
  },
];

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => s !== undefined);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
