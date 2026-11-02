import { MotionConfig } from 'framer-motion';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Offers from './sections/Offers';
import Frames from './sections/Frames';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import WhyUs from './sections/WhyUs';
import Delivery from './sections/Delivery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><Services /><Offers /><Frames /><Portfolio /><About /><WhyUs /><Delivery /><Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  );
}
