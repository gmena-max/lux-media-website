export type ServiceCategory = "growth" | "content" | "technology";

export interface ServiceFAQ {
  question: string;
  answer: string;
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
  deliverables: string[];
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  relatedSlugs: string[];
  icon: string;
  customComponent?: string;
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  growth: "Growth",
  content: "Content",
  technology: "Technology",
};

export const services: Service[] = [
  // ─── GROWTH ───────────────────────────────────────────────
  {
    slug: "publicidad-meta",
    title: "Meta Ads (Facebook + Instagram)",
    category: "growth",
    categoryLabel: "Growth",
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
          "Mínimo $300-500/mes en pauta para resultados consistentes. En la consulta de diagnóstico definimos el presupuesto exacto según tu industria y objetivos.",
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
    categoryLabel: "Growth",
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
    relatedSlugs: ["publicidad-meta", "seo", "desarrollo-web"],
  },
  {
    slug: "seo",
    title: "SEO & Posicionamiento",
    category: "growth",
    categoryLabel: "Growth",
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
    relatedSlugs: ["publicidad-google", "desarrollo-web", "crm-ventas"],
  },
  {
    slug: "crm-ventas",
    title: "CRM & Automatización de Ventas",
    category: "growth",
    categoryLabel: "Growth",
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
    relatedSlugs: ["chatbots-ia", "automatizacion-ia", "publicidad-meta"],
  },

  // ─── CONTENT ──────────────────────────────────────────────
  {
    slug: "redes-sociales",
    title: "Redes Sociales",
    category: "content",
    categoryLabel: "Content",
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
    categoryLabel: "Content",
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
    categoryLabel: "Content",
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
    categoryLabel: "Content",
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
    slug: "automatizacion-ia",
    title: "IA & Automatización",
    category: "technology",
    categoryLabel: "Technology",
    metaTitle: "IA & Automatización — Más rápido, más inteligente",
    metaDescription:
      "Automatización de marketing con IA. Flujos que eliminan trabajo manual, contenido acelerado y optimización en tiempo real. Tu competencia ya lo usa.",
    shortDescription:
      "Lo que tu equipo hace en horas, una automatización lo hace en segundos. IA aplicada a marketing.",
    icon: "🤖",
    painPoints: [
      {
        title: "Procesos manuales que consumen horas",
        description:
          "Tu equipo pasa tiempo en tareas repetitivas que una automatización hace en segundos.",
      },
      {
        title: "Producción de contenido lenta",
        description:
          "Crear contenido toma días cuando con IA puede tomar horas. Tu competencia ya lo está usando.",
      },
      {
        title: "Decisiones sin datos",
        description:
          "No tenés dashboards ni métricas automatizadas. Tomás decisiones a ciegas.",
      },
    ],
    solution:
      "Implementamos IA y automatizaciones en tu flujo de marketing: generación de contenido acelerada, reportes automáticos, optimización de campañas con machine learning y flujos que eliminan trabajo manual.",
    deliverables: [
      "Auditoría de procesos automatizables",
      "Flujos de automatización (Zapier, Make, n8n)",
      "Generación de contenido asistida por IA",
      "Reportes automáticos de rendimiento",
      "Optimización de campañas con IA",
      "Integración de herramientas y plataformas",
      "Capacitación en herramientas de IA",
    ],
    faqs: [
      {
        question: "¿La IA reemplaza al equipo creativo?",
        answer:
          "No. La IA acelera el proceso y genera borradores, pero la dirección creativa, el tono y la estrategia siguen siendo humanos. Es un copiloto, no un piloto.",
      },
      {
        question: "¿Qué herramientas de IA usan?",
        answer:
          "ChatGPT, Claude, Midjourney, herramientas de automatización (Make, Zapier), y modelos propios según la necesidad. Usamos lo que mejor funcione para cada caso.",
      },
    ],
    whatsappMessage: "Hola, me interesa automatización con IA para mi marketing. Vi su sitio web.",
    relatedSlugs: ["chatbots-ia", "dashboards", "crm-ventas"],
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    category: "technology",
    categoryLabel: "Technology",
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
          "Una landing page arranca desde $800. Un sitio multi-página desde $2,000. El precio depende de la complejidad y funcionalidades. Cotizamos según tu proyecto.",
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
    slug: "chatbots-ia",
    title: "Chatbots de Ventas con IA",
    category: "technology",
    categoryLabel: "Technology",
    metaTitle: "Chatbots IA — Vendé 24/7 sin contratar personal",
    metaDescription:
      "Chatbots de ventas con IA para WhatsApp e Instagram. Atención 24/7, calificación de leads automática. Cada mensaje contestado en segundos.",
    shortDescription:
      "Cero leads perdidos. Chatbots de ventas con IA entrenados para tu negocio — atienden, califican y cierran 24/7.",
    icon: "💬",
    painPoints: [
      {
        title: "Leads que escriben y no los atendés a tiempo",
        description:
          "Llegan mensajes a las 10pm y los contestás al día siguiente. Para entonces, ya le compraron a otro.",
      },
      {
        title: "Respondés las mismas preguntas todo el día",
        description:
          "Precio, horario, disponibilidad — las mismas preguntas 20 veces al día. Tiempo muerto.",
      },
      {
        title: "No podés escalar la atención",
        description:
          "Más leads = más mensajes = más estrés. No podés contratar gente solo para responder WhatsApps.",
      },
    ],
    solution:
      "Chatbot de IA entrenado con tu información que atiende WhatsApp e Instagram 24/7. Responde preguntas frecuentes, califica leads y los pasa listos para cerrar.",
    deliverables: [
      "Chatbot de IA configurado para tu negocio",
      "Entrenamiento con tu información, productos y precios",
      "Integración con WhatsApp Business API",
      "Integración con Instagram DMs",
      "Flujos de calificación y escalamiento",
      "Panel de control y métricas de conversación",
      "Ajustes y optimización continua",
    ],
    faqs: [
      {
        question: "¿El chatbot suena robótico?",
        answer:
          "Usamos modelos de inteligencia artificial entrenados con tu tono y estilo. Las conversaciones son naturales. Si el bot no puede resolver algo, escala a un humano.",
      },
      {
        question: "¿Funciona con mi WhatsApp actual?",
        answer:
          "Usamos WhatsApp Business API, que es la versión oficial para empresas. Podemos integrar con tu número existente o configurar uno nuevo.",
      },
    ],
    whatsappMessage: "Hola, me interesa un chatbot de ventas con IA para mi negocio. Vi su sitio web.",
    relatedSlugs: ["crm-ventas", "automatizacion-ia", "publicidad-meta"],
  },
  {
    slug: "dashboards",
    title: "Dashboards en Tiempo Real",
    category: "technology",
    categoryLabel: "Technology",
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
    relatedSlugs: ["automatizacion-ia", "publicidad-meta", "publicidad-google"],
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
