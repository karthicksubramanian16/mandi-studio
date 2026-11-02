import { Instagram } from 'lucide-react';
import { business, navLinks } from '../config/business';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="brand">{business.name}</p>
          <p className="muted small">{business.address.join(', ')}</p>
        </div>
        <nav aria-label="Footer">{navLinks.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}</nav>
        <div className="social">
          <a href={business.instagram.business} target="_blank" rel="noopener noreferrer" aria-label="Mandi Studio on Instagram"><Instagram /></a>
          {business.instagram.showOwner && <a href={business.instagram.owner} target="_blank" rel="noopener noreferrer" aria-label="Owner on Instagram"><Instagram /><span>Owner</span></a>}
        </div>
      </div>
      <p className="copy">&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
    </footer>
  );
}
