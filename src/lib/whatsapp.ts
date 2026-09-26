import { siteConfig } from "@/config/site";

const DEFAULT_WHATSAPP = "919780561684";

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Business WhatsApp number (digits only, country code included). */
export function getWhatsAppNumber() {
  return (
    digitsOnly(siteConfig.whatsapp || siteConfig.phone) || DEFAULT_WHATSAPP
  );
}

export function buildWhatsAppUrl(message: string, phone = getWhatsAppNumber()) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Navigate to WhatsApp with a prefilled message. */
export function openWhatsApp(message: string) {
  window.location.href = buildWhatsAppUrl(message);
}
