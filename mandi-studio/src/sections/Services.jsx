import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/services';
import { messages } from '../utils/whatsapp';

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" title="Our Services" intro="Five ways we can help you capture, create and display what matters." />
        <div className="service-list">
          {services.map((s) => (
            <article key={s.id} className="service">
              <SafeImage src={s.image} alt={`${s.name} at Mandi Studio`} width="1200" height="800" />
              <div className="service-body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <WhatsAppButton message={messages.service(s.name)} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
