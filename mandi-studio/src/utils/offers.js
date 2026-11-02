const parse = (d, end) => { const t = new Date(`${d}T${end ? '23:59:59' : '00:00:00'}`); return Number.isNaN(t.getTime()) ? null : t; };

/** Only offers that are active AND have valid dates AND today is within start..end (inclusive). */
export function getVisibleOffers(offers, now = new Date()) {
  return offers.filter((o) => {
    if (!o.active || !o.startDate || !o.endDate) return false;
    const s = parse(o.startDate, false), e = parse(o.endDate, true);
    return s && e && now >= s && now <= e;
  });
}
export const formatDate = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
