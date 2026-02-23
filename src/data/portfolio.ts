export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  result?: string;
  featured?: boolean;
  /** Full case study content — only Deporte+ and Dojo for now */
  caseStudy?: {
    metaTitle: string;
    metaDescription: string;
    overview: string;
    challenge: string;
    approach: string[];
    results: { metric: string; description: string }[];
    testimonial?: { quote: string; author: string; role: string };
    services: string[];
  };
}

export const projects: CaseStudy[] = [
  {
    slug: "dojo-coding-hackathon",
    title: "Dojo Coding Hackathon",
    client: "Dojo Coding",
    category: "Eventos",
    image: "/portfolio/dojo-hackathon.jpg",
    description:
      "El hackathon más grande de Costa Rica. Producción completa: drones, fotografía y video profesional.",
    result: "+300K impresiones",
    featured: true,
    caseStudy: {
      metaTitle: "Dojo Coding Hackathon — Caso de Estudio",
      metaDescription:
        "Producción audiovisual completa para el hackathon más grande de Costa Rica. Drones, fotografía, video y cobertura en redes sociales.",
      overview:
        "Dojo Coding es la comunidad de desarrollo más activa de Costa Rica. Para su hackathon anual — el más grande del país — necesitaban cobertura profesional que capturara la energía del evento y amplificara su alcance digital.",
      challenge:
        "El evento sucede en un solo día, con múltiples actividades simultáneas. El reto: capturar todo en tiempo real, producir contenido durante el evento para redes sociales, y entregar un aftermovie profesional que sirviera como herramienta de marketing para futuras ediciones.",
      approach: [
        "Equipo de producción con drones, cámaras y fotógrafos desplegados en zonas estratégicas",
        "Contenido en vivo para Instagram Stories y reels durante el evento",
        "Aftermovie profesional con edición cinematográfica",
        "Cobertura fotográfica completa para patrocinadores y prensa",
      ],
      results: [
        {
          metric: "+300K impresiones",
          description: "Alcance combinado en redes sociales durante y después del evento",
        },
        {
          metric: "Aftermovie entregado en 5 días",
          description: "Video profesional listo para promoción de la siguiente edición",
        },
        {
          metric: "+500 fotos profesionales",
          description: "Galería completa entregada a organizadores y patrocinadores",
        },
      ],
      services: ["Producción Audiovisual", "Drones", "Fotografía", "Social Media"],
    },
  },
  {
    slug: "deporte-plus",
    title: "Deporte+ (Teletica)",
    client: "Deporte+",
    category: "Contenido & Redes",
    image: "/portfolio/deporte-plus.jpg",
    description:
      "El programa deportivo de Teletica. Producción audiovisual, podcasts, reels y gestión completa de redes.",
    result: "+20M impresiones",
    featured: true,
    caseStudy: {
      metaTitle: "Deporte+ (Teletica) — Caso de Estudio",
      metaDescription:
        "Gestión completa de redes sociales y producción audiovisual para Deporte+, el programa deportivo de Teletica con 500K+ televidentes semanales.",
      overview:
        "Deporte+ es el programa deportivo insignia de Teletica, con más de 500K televidentes cada domingo. Lux Media gestiona toda su presencia digital: desde la producción de contenido hasta la estrategia de crecimiento en redes sociales.",
      challenge:
        "Convertir una audiencia televisiva masiva en una comunidad digital activa. El contenido deportivo es altamente competitivo y temporal — necesitaban velocidad de publicación, calidad de producción y una estrategia que mantuviera el engagement entre transmisiones.",
      approach: [
        "Gestión completa de redes sociales: Instagram, Facebook, TikTok y YouTube",
        "Producción de podcasts semanales con figuras del deporte costarricense",
        "Reels y clips optimizados para cada plataforma desde el contenido televisivo",
        "Estrategia de contenido entre transmisiones para mantener engagement",
      ],
      results: [
        {
          metric: "+20M impresiones",
          description: "Alcance acumulado en redes sociales",
        },
        {
          metric: "Comunidad digital activa",
          description: "Engagement constante entre transmisiones dominicales",
        },
        {
          metric: "Contenido multiplataforma",
          description: "Presencia optimizada en Instagram, Facebook, TikTok y YouTube",
        },
      ],
      testimonial: {
        quote:
          "Lux Media transformó nuestra presencia digital. Pasamos de solo tener TV a tener una comunidad activa en todas las plataformas.",
        author: "Erick Lonnis",
        role: "Director, Deporte+",
      },
      services: ["Redes Sociales", "Video & Reels", "Podcasts", "Estrategia Digital"],
    },
  },
  {
    slug: "oftalmologica-mena",
    title: "Oftalmologica Mena",
    client: "Oftalmologica Mena",
    category: "Publicidad Digital",
    image: "/portfolio/oftalmologica.jpg",
    description:
      "Clínica oftalmológica líder. Campañas de Meta Ads que convierten en citas reales vía WhatsApp.",
    result: "+Pacientes vía WhatsApp",
  },
  {
    slug: "blockchain-jungle",
    title: "Blockchain Jungle",
    client: "Blockchain Jungle",
    category: "Eventos",
    image: "/portfolio/blockchain-jungle.jpg",
    description:
      "El evento blockchain más grande de Centroamérica. Concepto creativo, producción audiovisual y contenido on-site.",
    result: "+1M alcance",
  },
  {
    slug: "starknet-nosara",
    title: "StarkNet Nosara",
    client: "StarkNet",
    category: "Social Media",
    image: "/portfolio/startnet-nosara.jpg",
    description:
      "Comunidad tech internacional en Nosara. Contenido multiplataforma: podcasts, YouTube, reels, drones y aftermovie.",
    result: "+40 piezas de contenido",
  },
  {
    slug: "jokers-of-neon",
    title: "Jokers of Neon",
    client: "Jokers of Neon",
    category: "Campañas Digitales",
    image: "/portfolio/jokers-of-neon.jpg",
    description:
      "Juego móvil en iOS y Android. Campaña de lanzamiento con estrategia digital y dirección creativa.",
    result: "+1.2K descargas en lanzamiento",
  },
];

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudies(): CaseStudy[] {
  return projects.filter((p) => p.caseStudy);
}

export function getAllProjectSlugs(): string[] {
  return projects.filter((p) => p.caseStudy).map((p) => p.slug);
}
