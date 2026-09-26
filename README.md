# PB_IT_HUB

Premium technology / product engineering website.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_INQUIRY_API_URL` (optional form endpoint)
- Media CDN / backend URLs when ready

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Architecture notes

- Content is data-driven from `src/data`
- Media is resolved through `src/lib/media.ts`
- SEO helpers live in `src/lib/seo.ts`
- Design tokens are centralized in `src/styles/globals.css`
