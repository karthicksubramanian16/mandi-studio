import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Ruler, Truck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import WhatsAppButton from '../components/WhatsAppButton';
import { frames, FRAME_SIZES, FRAME_STYLES } from '../data/frames';
import { business } from '../config/business';
import { messages } from '../utils/whatsapp';

function Chips({ label, options, value, onChange }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      <span className="chips-label">{label}</span>
      {['All', ...options].map((o) => (
        <button key={o} className={`chip ${value === o ? 'on' : ''}`} aria-pressed={value === o} onClick={() => onChange(o)}>{o}</button>
      ))}
    </div>
  );
}

export default function Frames() {
  const [size, setSize] = useState('All');
  const [style, setStyle] = useState('All');
  const shown = useMemo(() => frames.filter((f) => (size === 'All' || f.size === size) && (style === 'All' || f.style === style)), [size, style]);
  return (
    <section id="frames" className="section" aria-labelledby="frames-title">
      <div className="container">
        <SectionHeading id="frames-title" title="Photo Frame Collection" intro="Browse by size and style, then ask us about price, availability and delivery." />
        <div className="filters">
          <Chips label="Size" options={FRAME_SIZES.map((s) => `${s}"`)} value={size === 'All' ? 'All' : `${size}"`} onChange={(v) => setSize(v === 'All' ? v : v.replace('"', ''))} />
          <Chips label="Style" options={FRAME_STYLES} value={style} onChange={setStyle} />
        </div>
        <p className="muted small" aria-live="polite">Showing {shown.length} frame{shown.length === 1 ? '' : 's'}. Sizes, styles and prices are confirmed by the studio when you enquire.</p>
        <motion.div layout className="grid frames-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((f) => (
              <motion.article layout key={f.id} className="card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
                <SafeImage src={f.image} alt={`${f.name}, ${f.orientation.toLowerCase()} photo frame`} width="1200" height="800" />
                <div className="card-body">
                  <h3>{f.name}</h3>
                  <p className="muted small">{f.style} / {f.size} inches / {f.orientation}</p>
                  <p className="price">{typeof f.price === 'number' ? `${business.currency}${f.price.toLocaleString('en-IN')}` : 'Price on enquiry'}</p>
                  <WhatsAppButton message={messages.frame(f)} label="Enquire about this frame" />
                  <WhatsAppButton variant="link" message={messages.delivery(`delivery for the ${f.name} frame`)} label="Ask about delivery" />
                </div>
              </motion.article>
            ))}
            <motion.article layout key="custom" className="card card-custom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="card-body">
                <Ruler size={32} aria-hidden="true" />
                <h3>Need a custom size?</h3>
                <p>Tell us the size you need and we will share the options, price and delivery details.</p>
                <WhatsAppButton message={messages.customFrame()} label="Enquire custom size" />
                <WhatsAppButton variant="link" message={messages.delivery('delivery and packaging for a custom frame')} label="Ask about delivery" />
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>
        {shown.length === 0 && <p className="empty">No frames match these filters. Try another combination or ask us about a custom size.</p>}
      </div>
    </section>
  );
}
