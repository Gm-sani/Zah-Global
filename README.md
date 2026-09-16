# Zah Global Educational Consultant — Website

A production-ready React + Vite site built from the client's brand PDF,
covering: Hero, About, Why Choose Us, success stats, Study Destinations,
Partner Universities, Global Expansion, Services (incl. FBR & Tax),
Success Stories and a working Contact form.

## Stack
React 19 · Vite · Tailwind CSS · GSAP (+ ScrollTrigger) · lucide-react

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Notes for launch

- **Contact form** (`src/sections/Contact.jsx`): the submit handler is a
  working frontend interaction with loading/success states, but it doesn't
  send anywhere yet — wire the `handleSubmit` function to your backend, a
  serverless function, or a form service (Formspree, etc.) at the marked
  spot.
- **WhatsApp / phone / email** live in one place: `src/data/content.js`
  (`CONTACT` object) — update there and it updates everywhere.
- **QR code** in the closing banner (`src/sections/CtaBanner.jsx`) is a
  placeholder icon — swap it for a real QR image linking to your WhatsApp
  number.
- **Social links** in the footer (`src/components/Footer.jsx`) point to
  `#` — drop in your real Facebook/Instagram/YouTube URLs.
- Photos in `src/assets/` (logo, graduate hero shot, student group photo,
  consultation photo) were extracted directly from the supplied brand PDF.
  Destination and university cards use flag emoji + icons rather than
  stock photos — swap in real destination/campus photography if you have
  it.
- Reduced motion is respected: all GSAP entrance/scroll animations are
  skipped for users with `prefers-reduced-motion` enabled.
