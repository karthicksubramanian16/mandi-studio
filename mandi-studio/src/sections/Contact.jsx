import { MapPin, Instagram, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WhatsAppButton from '../components/WhatsAppButton';
import { business, mapsLink, mapsEmbed } from '../config/business';
import { messages } from '../utils/whatsapp';

export default function Contact() {
  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <div className="container contact">
        <div>
          <SectionHeading id="contact-title" title="Visit or Contact Us" />
          <address>
            <MapPin aria-hidden="true" />
            <span>{business.name}<br />{business.address.map((l) => <span key={l}>{l}<br /></span>)}</span>
          </address>
          <ul className="links">
            <li><a href={business.instagram.business} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" /> Studio Instagram</a></li>
            {business.instagram.showOwner && <li><a href={business.instagram.owner} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" /> Owner Instagram</a></li>}
            <li><a href={mapsLink} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} aria-hidden="true" /> Open in Google Maps</a></li>
          </ul>
          <WhatsAppButton message={messages.general()} label="Message on WhatsApp" />
        </div>
        <div className="map">
          <iframe title="Mandi Studio location on Google Maps" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}
