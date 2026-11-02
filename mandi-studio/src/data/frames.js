// Update this file to change the frame catalogue. price: a number (shown in INR) or null (shows "Price on enquiry").
// Nothing here claims stock; every card asks customers to confirm on WhatsApp.
export const FRAME_SIZES = ['4\u00D76', '5\u00D77', '8\u00D710', '12\u00D716', '16\u00D720'];
export const FRAME_STYLES = ['Classic Wood', 'Black Modern', 'Gold Edge', 'Floating Canvas'];
const img = { 'Classic Wood': '/images/frame-classic.svg', 'Black Modern': '/images/frame-black.svg', 'Gold Edge': '/images/frame-gold.svg', 'Floating Canvas': '/images/frame-canvas.svg' };
const f = (id, style, size, orientation, price = null) => ({ id, name: `${style} ${size}"`, style, size, orientation, price, image: img[style] });

export const frames = [
  f('classic-4x6', 'Classic Wood', '4\u00D76', 'Portrait'),
  f('classic-5x7', 'Classic Wood', '5\u00D77', 'Landscape'),
  f('black-8x10-p', 'Black Modern', '8\u00D710', 'Portrait'),
  f('black-8x10-l', 'Black Modern', '8\u00D710', 'Landscape'),
  f('gold-12x16-p', 'Gold Edge', '12\u00D716', 'Portrait'),
  f('gold-12x16-l', 'Gold Edge', '12\u00D716', 'Landscape'),
  f('canvas-16x20-p', 'Floating Canvas', '16\u00D720', 'Portrait'),
  f('canvas-16x20-l', 'Floating Canvas', '16\u00D720', 'Landscape'),
];
