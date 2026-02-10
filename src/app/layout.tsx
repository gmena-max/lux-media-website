import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Distinctive display font for headings
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxmediacr.com"),
  title: {
    default: "Lux Media | Agencia de Marketing Digital en Costa Rica",
    template: "%s | Lux Media",
  },
  description:
    "Agencia de marketing digital en Costa Rica. Especialistas en redes sociales, producción de video, Meta Ads, cobertura de eventos y creación de contenido. Hacemos crecer tu marca.",
  keywords: [
    "marketing digital Costa Rica",
    "agencia de marketing",
    "redes sociales",
    "producción de video",
    "Meta Ads",
    "Facebook Ads",
    "Instagram marketing",
    "creación de contenido",
    "branding",
    "San José Costa Rica",
  ],
  authors: [{ name: "Lux Media" }],
  creator: "Lux Media",
  publisher: "Lux Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lux Media | Agencia de Marketing Digital en Costa Rica",
    description:
      "Hacemos crecer tu marca con estrategias digitales que generan resultados. Redes sociales, video, Meta Ads y más.",
    url: "https://luxmediacr.com",
    siteName: "Lux Media",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lux Media - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Media | Agencia de Marketing Digital",
    description: "Hacemos crecer tu marca con estrategias digitales que generan resultados.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Go to https://search.google.com/search-console → Add Property → URL prefix →
    // luxmediacr.com → HTML tag method → copy the content="XXXX" value and paste it below:
    // google: "your-verification-code-here",
  },
};

// JSON-LD FAQ Schema for Google rich snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta trabajar con ustedes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada proyecto es diferente. Diseñamos planes según tus objetivos, canales y volumen de contenido. Escríbenos para una cotización personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo es el proceso de trabajo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Llamada inicial → propuesta → arranque → ejecución mensual con reportes y ajustes continuos. Nos adaptamos a tu ritmo y necesidades.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo veo resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contenido orgánico: 2-3 meses para tracción real. Pauta: resultados desde la primera semana. En tu consulta definimos metas claras con plazos concretos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Manejan la pauta o solo el contenido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ambos. Podemos crear solo contenido, solo pauta, o la estrategia completa. Tú decides qué necesitas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con empresas fuera de Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tenemos clientes en 6 países y creamos contenido en español, inglés y portugués.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué industrias manejan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deportes, salud, tecnología, eventos, gastronomía, e-commerce y más. Trabajar con industrias distintas nos da perspectiva fresca para cada proyecto.",
      },
    },
  ],
};

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Lux Media",
  description:
    "Agencia de marketing digital en Costa Rica especializada en redes sociales, producción de video, Meta Ads y creación de contenido.",
  url: "https://luxmediacr.com",
  logo: "https://luxmediacr.com/logo-full.png",
  image: "https://luxmediacr.com/og-image.png",
  telephone: "+506-8905-2828",
  email: "contacto@luxmediacr.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San José",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.9281",
    longitude: "-84.0907",
  },
  areaServed: {
    "@type": "Country",
    name: "Costa Rica",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/luxmedia.cr/",
    "https://www.facebook.com/luxmedia.cr",
    "https://www.linkedin.com/company/luxmedia-cr/",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Jeaustin Campos",
      jobTitle: "CEO",
    },
    {
      "@type": "Person",
      name: "Gabriel Mena",
      jobTitle: "COO",
    },
  ],
  knowsAbout: [
    "Marketing Digital",
    "Social Media Marketing",
    "Video Production",
    "Meta Ads",
    "Content Creation",
    "Branding",
    "Event Coverage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://luxmediacr.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido
        </a>
        {children}

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XKSDRLY742"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XKSDRLY742');
          `}
        </Script>
      </body>
    </html>
  );
}
