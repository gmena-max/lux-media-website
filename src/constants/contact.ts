// Centralized contact information for Lux Media
// Update these values in one place and they'll propagate throughout the site

export const CONTACT = {
  // Phone number in international format (Costa Rica)
  phone: "50689052828",

  // Formatted phone number for display
  phoneDisplay: "+506 8905-2828",

  // Primary email
  email: "contacto@luxmediacr.com",

  // Physical location
  location: "San José, Costa Rica",

  // WhatsApp URL generator
  getWhatsAppUrl: (message?: string) => {
    const baseUrl = `https://wa.me/${CONTACT.phone}`;
    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
  },
} as const;

export const SOCIAL = {
  instagram: "https://www.instagram.com/luxmedia.cr/",
  facebook: "https://www.facebook.com/luxmedia.cr",
  linkedin: "https://www.linkedin.com/company/luxmedia-cr/",
  // Add more as needed
} as const;

// EmailJS configuration
// You'll need to create an account at https://www.emailjs.com/
// Free tier: 200 emails/month
export const EMAILJS = {
  serviceId: "service_luxmedia", // Create this in EmailJS dashboard
  templateId: "template_contact", // Create this in EmailJS dashboard
  publicKey: "YOUR_PUBLIC_KEY", // Get this from EmailJS dashboard
} as const;
