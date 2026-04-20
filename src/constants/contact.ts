// Centralized contact information for Lux Media
// Update these values in one place and they'll propagate throughout the site

export const CONTACT = {
  // Primary WhatsApp number (Costa Rica)
  phone: "50671911587",

  // Formatted phone number for display
  phoneDisplay: "+506 7191-1587",

  // Primary email
  email: "gabriel@luxmediacr.com",

  // Physical location
  location: "San José, Costa Rica",

  // Google Calendar booking page — 30-min discovery call with Gabriel
  bookingUrl: "https://calendar.app.google/VaRjRi5Doyj187h79",

  // WhatsApp URL generator
  getWhatsAppUrl: (message?: string) => {
    const baseUrl = `https://wa.me/${CONTACT.phone}`;
    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
  },
} as const;

// EmailJS configuration
// You'll need to create an account at https://www.emailjs.com/
// Free tier: 200 emails/month
export const EMAILJS = {
  serviceId: "service_fne0p1e",
  templateId: "template_ekh8oaa",
  publicKey: "obYLKk_Gy-8jb8fdt",
} as const;
