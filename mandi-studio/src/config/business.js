// ONE place for all business details. Edit here; the whole site updates.
export const business = {
  name: 'Mandi Studio',
  tagline: 'Every Frame Tells a Story.',
  // International format, digits only (e.g. 91XXXXXXXXXX). Set via .env.local (VITE_WHATSAPP_NUMBER) or type it here.
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  address: ['Geethalaya Theatre Road', 'Sankarankovil, Tenkasi', 'Tamil Nadu, India'],
  instagram: {
    business: 'https://www.instagram.com/mandi_media/',
    owner: 'https://www.instagram.com/sankar_cvv/',
    showOwner: true,
  },
  // Optional: paste exact links from Google Maps (Share > Copy link / Embed a map). Leave '' to search by address.
  mapsLink: '',
  mapsEmbedUrl: '',
  currency: '\u20B9',
};

const query = encodeURIComponent(['Mandi Studio', ...business.address].join(', '));
export const mapsLink = business.mapsLink || `https://www.google.com/maps/search/?api=1&query=${query}`;
export const mapsEmbed = business.mapsEmbedUrl || `https://www.google.com/maps?q=${query}&output=embed`;
export const navLinks = [
  { id: 'services', label: 'Services' }, { id: 'offers', label: 'Offers' }, { id: 'frames', label: 'Frames' },
  { id: 'portfolio', label: 'Portfolio' }, { id: 'about', label: 'About' }, { id: 'delivery', label: 'Delivery' },
  { id: 'contact', label: 'Contact' },
];
