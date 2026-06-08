# GDAS Bali — React + Vite + TS

A rebuild of [gdasbali.com](https://gdasbali.com) (holistic wellness resort, Ubud) as a
fast, accessible, SEO-optimised single-page app. Editorial / quiet-luxury design language
adapted from the Ashton Bespoke reference, with a Bali-appropriate palette.

## Stack
- **Vite 6** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (`@theme` design tokens in `src/styles/theme.css`)
- **React Router 7** (declarative routing)
- **React 19 native document metadata** for per-route `<title>`/`<meta>`/JSON-LD (no helmet)

## Commands
```bash
pnpm install      # install deps
pnpm dev          # dev server (http://localhost:5173)
pnpm build        # typecheck + production build → dist/
pnpm preview      # serve the production build
pnpm typecheck    # tsc only
```

## Project structure
```
src/
  styles/theme.css        Design tokens (colors, type, spacing) + base + component classes
  lib/
    seo.tsx               <Seo> — per-route title/meta/OG/JSON-LD (React 19 hoisting)
    structuredData.ts     Organization / Breadcrumb / Event JSON-LD builders
  data/                   Typed content layer (the source of truth — edit here, not JSX)
    types.ts              Shared interfaces
    site.ts               Brand, nav tree, footer, contact, social, booking URLs, trust badges
    seo.ts                Authored per-route titles + meta descriptions
    rooms.ts              Accommodations (Grand Deluxe + Prestige Pool Villa + variants)
    facilities.ts         Pools, shalas, sauna, etc. (with hours)
    treatments.ts         Health Suite biohacking treatments
    retreats.ts           Signature retreat programs
    offers.ts             Promotions & packages
    contentPages.ts       Authored copy for secondary/experience/legal routes
  components/
    layout/               Header (dropdown nav), Footer, BookingWidget, TrustBadges, Layout
    ui/                   Section, Container, PageHero, Gallery, Button, Eyebrow, SectionHeading
  pages/                  One component per route family (templates are data-driven)
  App.tsx                 Route table
public/                   favicon, robots.txt, sitemap.xml, _redirects (SPA fallback)
```

## Content
All copy is sourced verbatim from the live site and stored in `../content/*.md`
(see `content/README.md`). The typed files in `src/data/` carry the production content.

## SEO & AI optimisation
- Unique `<title>` + meta description per route (the source WP site had **none** — these are authored in `src/data/seo.ts`).
- Open Graph + Twitter card tags, canonical URLs.
- JSON-LD: `Resort`/Organization (home), `BreadcrumbList` (inner pages), `Event` builder ready for dated retreats.
- Every image has authored, descriptive **alt text** (the source had none) — accessibility + image SEO.
- `robots.txt` + `sitemap.xml`, semantic HTML5 landmarks, skip-link, visible focus states.

## Editing content
Change copy/images by editing `src/data/*.ts` — pages render from data, so you rarely touch JSX.
Add a room/facility/treatment/offer = add an object to the relevant array.

## Media / images
The resort's WordPress host **blocks cross-domain hotlinking**, so referencing
`gdasbali.com/wp-content/...` directly makes images invisible on any other domain
(incl. Netlify). All media is therefore referenced as **same-origin `/wp/*` paths**
and served via a proxy:
- **Local dev & preview:** `vite.config.ts` proxies `/wp` → `gdasbali.com/wp-content/uploads`.
- **Production (Netlify):** `public/_redirects` proxies `/wp/*` server-side.
- Test locally with `pnpm dev` (or `pnpm preview`) — the proxy is active there.

**To fully self-host** (recommended for production — no runtime dependency on the
WP host): run `node scripts/localize-media.mjs` on a machine with network access.
It downloads every referenced image into `public/wp/`. Commit that folder and redeploy —
Netlify serves the static files directly (the proxy stays as a fallback). Then
optimise to WebP/AVIF + `srcset` as a follow-up.

> **SEO note:** set `SITE_URL` in `src/data/site.ts` to your real deployed origin so
> canonical URLs and absolute `og:image` tags are correct.

## To do (next passes)
- Self-host + optimise images (run `scripts/localize-media.mjs`, then convert to WebP/AVIF with `srcset`).
- Migrate full legal text (privacy / general policy) from `content/info/*.md`.
- Build out the remaining dated-retreat pages (writers, sol-reset, etc.) using the `Event` JSON-LD builder.
- Wire the booking widget / contact form to the real backend if desired.
- Add the blog (31 articles, skipped this pass).
