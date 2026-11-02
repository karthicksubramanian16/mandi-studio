// Add or edit offers here. An offer shows ONLY when active is true AND today is between startDate and endDate (YYYY-MM-DD, inclusive).
// Fields: id, occasion, title, description, image, startDate, endDate, active, discount (optional text, e.g. "10% off"), whatsappMessage (optional).
// The entries below are inactive templates. Fill in real details and set active: true. Nothing here is a real promotion.
const t = (id, occasion) => ({ id, occasion, title: `${occasion} Special`, description: `Add your ${occasion} offer details here.`, image: '/images/offer-default.svg', startDate: '', endDate: '', active: false, discount: '', whatsappMessage: '' });
export const offers = [t('diwali', 'Diwali'), t('pongal', 'Pongal'), t('tamil-new-year', 'Tamil New Year'), t('new-year', 'New Year'), t('wedding-season', 'Wedding Season'), t('custom', 'Custom')];
