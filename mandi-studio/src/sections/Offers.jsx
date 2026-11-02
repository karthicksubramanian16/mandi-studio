import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import WhatsAppButton from '../components/WhatsAppButton';
import { offers } from '../data/offers';
import { getVisibleOffers, formatDate } from '../utils/offers';
import { messages } from '../utils/whatsapp';

export default function Offers() {
  const visible = getVisibleOffers(offers);
  return (
    <section id="offers" className="section section-alt" aria-labelledby="offers-title">
      <div className="container">
        <SectionHeading id="offers-title" title="Special Offers" intro="Seasonal and festival offers appear here while they are running." />
        {visible.length === 0 ? (
          <div className="empty">
            <p>No offers are running right now. Message us to ask about upcoming festival and wedding season offers.</p>
            <WhatsAppButton message={messages.delivery('upcoming offers')} label="Ask about offers" variant="ghost" />
          </div>
        ) : (
          <div className="grid offers-grid">
            {visible.map((o) => (
              <article key={o.id} className="card offer">
                <SafeImage src={o.image} alt={`${o.title} offer`} width="1200" height="800" />
                <div className="card-body">
                  <p className="tag">{o.occasion}</p>
                  <h3>{o.title}</h3>
                  {o.discount && <p className="discount">{o.discount}</p>}
                  <p>{o.description}</p>
                  <p className="muted small">Valid {formatDate(o.startDate)} to {formatDate(o.endDate)}</p>
                  <WhatsAppButton message={messages.offer(o)} label="Claim on WhatsApp" />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
