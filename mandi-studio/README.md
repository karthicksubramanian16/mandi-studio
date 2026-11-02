# Mandi Studio Website (Version 1)

Premium, responsive, frontend-only site for **Mandi Studio**, Geethalaya Theatre Road, Sankarankovil, Tenkasi, Tamil Nadu.
Stack: React 18, Vite, JavaScript (ES6+), CSS3, Lucide React, Framer Motion. No backend or database.

## 1. Install
Requires Node.js 18+ (https://nodejs.org).
```bash
npm install
```

## 2. Run locally
```bash
cp .env.example .env.local     # then set your WhatsApp number
npm run dev                    # http://localhost:5173
npm run build                  # production build into /dist
npm run preview                # preview the build
```
**WhatsApp number:** set `VITE_WHATSAPP_NUMBER` in `.env.local` (and in Vercel) in international format, digits only, e.g. `91XXXXXXXXXX` (no `+`, spaces or leading zeros). Until it is set, every WhatsApp button safely falls back to the studio Instagram instead of a broken link.

## 3. Updating content
| What | File |
|---|---|
| Business name, address, Instagram, Maps links, WhatsApp number | `src/config/business.js` |
| Services | `src/data/services.js` |
| Frame catalogue (sizes, styles, orientation, price, image) | `src/data/frames.js` |
| Seasonal offers | `src/data/offers.js` |
| Portfolio images and categories | `src/data/portfolio.js` |
| WhatsApp message templates | `src/utils/whatsapp.js` |
| Colours and fonts | `src/styles/global.css` (`:root` variables) |

**Images:** drop your photos into `public/images/` (JPG/WebP, about 1600px wide, compressed) and update the `image` path in the data file. The `.svg` files there are placeholders. If an image fails to load, the site shows `/images/placeholder.svg`.

**Frames:** edit the `f(id, style, size, orientation, price)` rows. Use `price = null` for "Price on enquiry", or a number such as `450`. Add new sizes to `FRAME_SIZES` and styles to `FRAME_STYLES` so the filters pick them up. Custom sizes are handled by the always-visible "custom size" card. The site makes no stock claims.

**Seasonal offers:** open `src/data/offers.js`. For each offer set `title`, `description`, `image`, `startDate`, `endDate` (`YYYY-MM-DD`), optional `discount` (e.g. `"10% off"`) and optional `whatsappMessage`, then set `active: true`. An offer is shown only while `active` is true and today is between start and end dates (inclusive); inactive, future, expired and date-less offers are hidden automatically. The default entries are inactive templates, not real promotions. To add a new festival, copy a row and give it a new `id`. Redeploy after changes (dates are checked in the visitor's browser).

**Maps:** by default the map searches the supplied address (no coordinates are invented). For a precise pin, open Google Maps, find the studio, then paste the Share link into `mapsLink` and the Embed URL (the `src` of the iframe) into `mapsEmbedUrl`.

## 4. Upload to GitHub
```bash
git init
git add .
git commit -m "Mandi Studio website v1"
git branch -M main
git remote add origin https://github.com/<your-username>/mandi-studio.git
git push -u origin main
```
Create the empty repository on github.com first. `.env.local` and `node_modules` are git-ignored.

## 5. Deploy to Vercel
1. Sign in at https://vercel.com with GitHub and click **Add New > Project**.
2. Import the `mandi-studio` repository. Vercel detects Vite (build: `npm run build`, output: `dist`).
3. Under **Environment Variables** add `VITE_WHATSAPP_NUMBER`.
4. Click **Deploy**. Every `git push` to `main` redeploys automatically.

## 6. Custom domain
1. Buy a domain from any registrar.
2. In Vercel: **Project > Settings > Domains > Add** and enter the domain.
3. Add the DNS records Vercel shows (usually an `A` record for the root domain and a `CNAME` for `www`) at your registrar.
4. Wait for DNS to propagate; Vercel issues HTTPS automatically.

## Project structure
```
src/
  config/business.js     single source of business details
  data/                  services, frames, offers, portfolio
  utils/                 whatsapp.js (wa.me builder), offers.js (date filter)
  components/            WhatsAppButton, SafeImage, SectionHeading, FloatingWhatsApp
  sections/              Navbar, Hero, Services, Offers, Frames, Portfolio, About, WhyUs, Delivery, Contact, Footer
  styles/global.css
public/images/           placeholders to replace
```

## Notes and future upgrades
- No testimonials, prices, discounts, delivery coverage, phone numbers or coordinates are invented. Add real ones where indicated.
- Update the `<title>`, description and social image in `index.html` after you add your real hero photo and domain.
- Planned-friendly structure: data files can later be replaced by an owner dashboard/API, with payments and order management added on top.
