import SectionHeading from '../components/SectionHeading';
import WhatsAppButton from '../components/WhatsAppButton';
import { messages } from '../utils/whatsapp';

const steps = [
  { t: 'Message us', d: 'Tell us what you need: a frame size, a custom size, or the photo you want printed or edited.' },
  { t: 'Confirm the details', d: 'We confirm size, style, packaging and the price with you on WhatsApp.' },
  { t: 'Arrange delivery', d: 'Ask about delivery options and charges for your location. We confirm what is possible when you enquire.' },
];
const topics = [
  { label: 'Frame delivery', topic: 'frame delivery' },
  { label: 'Custom sizes', topic: 'a custom-size frame' },
  { label: 'Packaging', topic: 'packaging for my order' },
  { label: 'Delivery charges', topic: 'delivery charges' },
];
export default function Delivery() {
  return (
    <section id="delivery" className="section" aria-labelledby="delivery-title">
      <div className="container">
        <SectionHeading id="delivery-title" title="Online Delivery" intro="Order by message and ask us about delivery. Coverage and charges are confirmed by the studio for each enquiry." />
        <ol className="steps">
          {steps.map((s) => <li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>)}
        </ol>
        <div className="topics">
          {topics.map((x) => <WhatsAppButton key={x.label} variant="ghost" label={x.label} message={messages.delivery(x.topic)} />)}
        </div>
      </div>
    </section>
  );
}
