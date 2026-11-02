import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import { portfolio, portfolioCategories } from '../data/portfolio';

export default function Portfolio() {
  const [cat, setCat] = useState('All');
  const [active, setActive] = useState(null);
  const shown = portfolio.filter((p) => cat === 'All' || p.category === cat);
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);
  return (
    <section id="portfolio" className="section section-alt" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionHeading id="portfolio-title" title="Portfolio" intro="A look at our work across photography, drone, frames, banners and editing." />
        <div className="chips center" role="group" aria-label="Portfolio category">
          {['All', ...portfolioCategories].map((c) => <button key={c} className={`chip ${cat === c ? 'on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <motion.div layout className="gallery">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.button layout key={p.id} className="tile" onClick={() => setActive(p)} aria-label={`Open ${p.title}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SafeImage src={p.image} alt={p.title} width="1200" height="800" />
                <span className="tile-cap">{p.category}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <button className="lightbox-close" aria-label="Close image" autoFocus onClick={() => setActive(null)}><X /></button>
            <SafeImage src={active.image} alt={active.title} eager onClick={(e) => e.stopPropagation()} />
            <p>{active.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
