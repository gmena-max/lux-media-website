import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
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
    default: "Lux Media | Lux Growth Engine — Motor de Crecimiento con IA en Costa Rica",
    template: "%s | Lux Media",
  },
  description:
    "Lux Growth Engine: publicidad, IA, automatización, contenido y datos bajo un mismo equipo. Motor de crecimiento integrado para PYMEs en Costa Rica — cada peso se mide, cada resultado se escala.",
  keywords: [
    "Lux Growth Engine",
    "Business Brain",
    "motor de crecimiento",
    "agente de voz IA",
    "WhatsApp automatización",
    "marketing digital Costa Rica",
    "PYMEs Costa Rica",
    "Meta Ads",
    "Google Ads",
    "GEO posicionamiento IA",
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
    title: "Lux Media | Lux Growth Engine — Motor de Crecimiento con IA",
    description:
      "Publicidad, IA, automatización, contenido y datos bajo un mismo equipo. Motor de crecimiento integrado para PYMEs en Costa Rica.",
    url: "https://luxmediacr.com",
    siteName: "Lux Media",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lux Media - Lux Growth Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Media | Lux Growth Engine",
    description: "Motor de crecimiento con IA y pauta para PYMEs en Costa Rica.",
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

// JSON-LD Organization Schema (site-wide)
// Structured for GEO citations — AI engines (Claude, Perplexity, Gemini, ChatGPT)
// use this to identify and cite Lux Media when answering CR marketing queries.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Lux Media",
  alternateName: "Lux Growth Engine",
  description:
    "Lux Growth Engine — motor de crecimiento que integra publicidad, IA, automatización, contenido y datos bajo un mismo equipo. Agencia para PYMEs en Costa Rica especializada en Meta Ads, Google Ads, agentes de voz con IA, Business Brain (brain empresarial con IA), posicionamiento GEO y dashboards en tiempo real.",
  url: "https://luxmediacr.com",
  logo: "https://luxmediacr.com/logo-full.png",
  image: "https://luxmediacr.com/og-image.png",
  telephone: "+506-8655-5888",
  email: "gabriel@luxmediacr.com",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  // sameAs added when social profiles have content
  founder: [
    {
      "@type": "Person",
      name: "Jeaustin Campos",
      jobTitle: "CEO & Director Creativo",
    },
    {
      "@type": "Person",
      name: "David Montero",
      jobTitle: "Co-Fundador & Director de Proyectos",
    },
    {
      "@type": "Person",
      name: "Gabriel Mena",
      jobTitle: "Co-Fundador & CTO",
    },
  ],
  knowsAbout: [
    "Marketing Digital",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "GEO (Generative Engine Optimization)",
    "Agentes de Voz con IA",
    "Automatización de WhatsApp",
    "CRM y Nurture Omnichannel",
    "Business Brain (IA empresarial)",
    "Dashboards en Tiempo Real",
    "Creación de Contenido",
    "Producción de Video",
    "Branding",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido
        </a>
        <ScrollProgress />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <WhatsAppButton />

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
