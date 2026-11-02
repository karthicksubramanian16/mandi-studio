import { business } from '../config/business';

export const normalizePhone = (raw) => String(raw || '').replace(/\D/g, '');
export const isWhatsAppConfigured = () => normalizePhone(business.whatsappNumber).length >= 8;

/** Returns a wa.me URL with an encoded message, or null when no number is configured. */
export function buildWhatsAppUrl(message = '') {
  const phone = normalizePhone(business.whatsappNumber);
  if (phone.length < 8) return null;
  return message ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : `https://wa.me/${phone}`;
}

const hello = `Hello ${business.name},`;
export const messages = {
  general: () => `${hello} I would like to make an enquiry.`,
  service: (name) => `${hello} I would like to enquire about: ${name}.`,
  frame: ({ name, size, style }) => `${hello} I would like to enquire about a photo frame.\nFrame: ${name}\nSize: ${size}${style ? `\nStyle: ${style}` : ''}\nPlease share the price and availability.`,
  customFrame: () => `${hello} I would like a custom-size photo frame.\nRequired size: \nPlease share the options and price.`,
  offer: (offer) => offer.whatsappMessage || `${hello} I would like to know more about the offer: ${offer.title}.`,
  delivery: (topic) => `${hello} I would like to ask about ${topic}.`,
};
