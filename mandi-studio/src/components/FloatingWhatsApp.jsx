import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, messages } from '../utils/whatsapp';
import { business } from '../config/business';
export default function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(messages.general()) || business.instagram.business;
  return (
    <a className="fab" href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat with Mandi Studio on WhatsApp">
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
