import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import SafeImage from '../components/SafeImage';
import WhatsAppButton from '../components/WhatsAppButton';
import { business } from '../config/business';
import { messages } from '../utils/whatsapp';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <SafeImage className="hero-bg" src="/images/hero.svg" alt="" eager width="1200" height="800" fetchpriority="high" />
      <div className="hero-shade" />
      <span className="vf vf-tl" aria-hidden="true" /><span className="vf vf-tr" aria-hidden="true" />
      <span className="vf vf-bl" aria-hidden="true" /><span className="vf vf-br" aria-hidden="true" />
      <motion.div className="container hero-content" variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="hero-kicker">{business.name}, Sankarankovil</motion.p>
        <motion.h1 id="hero-title" variants={item}>{business.tagline}</motion.h1>
        <motion.p variants={item} className="hero-sub">Photography, photo frames, editing, banners and drone work, all from one studio.</motion.p>
        <motion.div variants={item} className="hero-cta">
          <WhatsAppButton message={messages.general()} label="Start on WhatsApp" />
          <a className="btn btn-ghost" href="#portfolio">View portfolio</a>
        </motion.div>
      </motion.div>
      <a className="scroll-hint" href="#services" aria-label="Scroll to services"><ArrowDown size={20} /></a>
    </section>
  );
}
