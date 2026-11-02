import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import { business } from '../config/business';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about">
        <SafeImage src="/images/about.svg" alt="Mandi Studio photography studio" width="1200" height="800" />
        <div>
          <SectionHeading id="about-title" title="About Mandi Studio" />
          <p>{business.name} is a photography and creative services studio on Geethalaya Theatre Road in Sankarankovil, Tenkasi. We bring together photography, drone coverage, photo editing, banner design and printing, and photo framing under one name.</p>
          <p>Whether it is a family portrait, an event, a shop banner or a framed memory for your wall, tell us what you have in mind and we will help you shape it.</p>
        </div>
      </div>
    </section>
  );
}
