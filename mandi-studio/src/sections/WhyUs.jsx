import { Layers, Plane, MessageCircle, Ruler } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const points = [
  { icon: Layers, title: 'Everything in one studio', text: 'Photography, editing, frames and banners, so one conversation covers your whole project.' },
  { icon: Plane, title: 'Drone and ground coverage', text: 'Aerial and on-the-ground work for events, places and occasions.' },
  { icon: Ruler, title: 'Custom sizes', text: 'Need something outside the standard sizes? Ask us and we will discuss options.' },
  { icon: MessageCircle, title: 'Simple WhatsApp ordering', text: 'Send your idea, photo or size and talk to us directly. No forms to fill in.' },
];
export default function WhyUs() {
  return (
    <section className="section section-alt" aria-labelledby="why-title">
      <div className="container">
        <SectionHeading id="why-title" title="Why Choose Us" />
        <ul className="why">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title}><Icon size={28} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
