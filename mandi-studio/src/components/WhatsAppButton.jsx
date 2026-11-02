import { MessageCircle, Instagram } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { business } from '../config/business';

/** Reusable enquiry button. Without a configured number it falls back to Instagram instead of a broken link. */
export default function WhatsAppButton({ message, label = 'Enquire on WhatsApp', variant = 'gold', className = '' }) {
  const url = buildWhatsAppUrl(message);
  const cls = `btn btn-${variant} ${className}`;
  if (!url) {
    return (
      <a className={cls} href={business.instagram.business} target="_blank" rel="noopener noreferrer" title="WhatsApp number not set yet. Message us on Instagram.">
        <Instagram size={18} aria-hidden="true" /> Message on Instagram
      </a>
    );
  }
  return (
    <a className={cls} href={url} target="_blank" rel="noopener noreferrer">
      <MessageCircle size={18} aria-hidden="true" /> {label}
    </a>
  );
}
