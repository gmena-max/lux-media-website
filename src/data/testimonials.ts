export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  highlight: string;
  /** Which service page slugs this testimonial is relevant to */
  servicePages?: string[];
  /** Show on contact page */
  showOnContact?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daniel Bejarano",
    role: "CEO, DOJO Coding",
    content:
      "Lux Media no construyó DOJO — amplificó todo lo que somos. Esa es la diferencia entre una agencia y un partner real.",
    avatar: "DB",
    highlight: "Partner real",
    showOnContact: true,
  },
  {
    id: 2,
    name: "Dr. Diego Mena",
    role: "Oftalmólogo, Oftalmológica Mena",
    content:
      "Las campañas que me han hecho me han llenado la agenda de consultas constantemente.",
    avatar: "DM",
    highlight: "Agenda llena",
    servicePages: ["publicidad-meta"],
  },
  {
    id: 3,
    name: "Erick Lonnis",
    role: "Director, Deporte+",
    content:
      "Pasamos de cero presencia digital a 3 millones de vistas al mes. Los ratings del show también subieron.",
    avatar: "EL",
    highlight: "3M vistas/mes",
    servicePages: ["video-reels", "redes-sociales"],
  },
  {
    id: 4,
    name: "Dr. Arnoldo Steinvorth",
    role: "Ortodoncista",
    content:
      "Lux Media entiende cómo comunicar lo que hacemos con profesionalismo. Crearon toda mi presencia digital desde cero y ahora mis pacientes me encuentran en redes.",
    avatar: "AS",
    highlight: "De cero a presencia digital",
    servicePages: ["redes-sociales"],
  },
  {
    id: 5,
    name: "Juan Guerrero",
    role: "CEO, Blockchain Jungle",
    content:
      "Necesitábamos un equipo que aguantara el ritmo del evento tech más grande de Latinoamérica. Lux Media respondió con velocidad, calidad y consistencia.",
    avatar: "JG",
    highlight: "50+ piezas de contenido",
    servicePages: ["produccion-eventos"],
  },
];

export function getTestimonialsForService(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.servicePages?.includes(slug));
}

export function getContactTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.showOnContact);
}
