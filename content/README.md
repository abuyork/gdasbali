# GDAS Bali — Content & Layout Source-of-Truth

Scraped from the live WordPress site **https://gdasbali.com/** (June 2026) to rebuild as a
**React + Vite + TypeScript** site. Each `.md` file holds one page's exact verbatim text,
section-by-section layout notes, image URLs, and CTA links. **This folder is the content
contract** — copy text from here, do not paraphrase.

> Brand: GDAS Bali — a holistic health & wellness resort in Ubud, Bali. Vegan dining,
> yoga, biohacking health suite, signature retreats. Quiet-luxury / editorial tone.

---

## 1. Site map → React routes

Proposed route structure for the rebuild (clean trailing-slash-free paths):

| Route | Content file | Notes |
|-------|-------------|-------|
| `/` | `home.md` | Hero, booking widget, health-suite teaser, accommodation, dining, retreats, benefits, trust badges |
| **Accommodations** | | parent index can list the two room families |
| `/accommodations/grand-deluxe` | `accommodations/grand-deluxe.md` | 3 variant sub-pages below |
| `/accommodations/grand-deluxe/with-balcony` | `accommodations/grand-deluxe-with-balcony.md` | shares body copy w/ parent |
| `/accommodations/grand-deluxe/terrace-garden-view` | `accommodations/grand-deluxe-terrace-garden-view.md` | |
| `/accommodations/grand-deluxe/terrace-paddy-view` | `accommodations/grand-deluxe-terrace-paddy-view.md` | |
| `/accommodations/prestige-pool-villa` | `accommodations/prestige-pool-villa.md` | 2 variant sub-pages below |
| `/accommodations/prestige-pool-villa/garden-view` | `accommodations/prestige-pool-villa-garden-view.md` | |
| `/accommodations/prestige-pool-villa/paddy-view` | `accommodations/prestige-pool-villa-paddy-view.md` | |
| **Facilities** | | |
| `/facilities/swimming-pool` | `facilities/swimming-pool.md` | hours, cabana note |
| `/facilities/garden-lounge` | `facilities/garden-lounge.md` | events space, sales@ CTA |
| `/facilities/library` | `facilities/library.md` | hours 08:00–20:00 |
| `/facilities/yoga-shala` | `facilities/yoga-shala.md` | hours 07:00–17:00 |
| `/facilities/hot-yoga-studio` | `facilities/hot-yoga-studio.md` | hours 06:00–20:00 |
| `/facilities/gift-shop` | `facilities/gift-shop.md` | |
| `/facilities/wellness-facilities` | `facilities/wellness-facilities.md` | gym, saunas, steam, contrast pool |
| `/facilities/teacher-room` | `facilities/teacher-room.md` | single paragraph |
| `/dining` | `dining.md` | Tangi Restaurant, vegan |
| `/health-suite` | `health-suite.md` | 7 biohacking treatments (cryo, Live O2, salt, IV drip…) |
| **Experience** | | |
| `/experience/wedding` | `experiences/wedding.md` | 3 wedding packages |
| `/experience/vip-concierge` | `experiences/vip-concierge.md` | |
| `/experience/nyepi` | `experiences/nyepi-balinese-new-year.md` | |
| **Retreat** | | |
| `/retreat/signature` | `retreats/signature-retreat.md` | hub: 5 wellness program cards |
| `/retreat/signature/balance-mind` | `retreats/balance-mind.md` | 27 inclusions, 6/10-night |
| `/retreat/signature/body-balance` | `retreats/body-balance.md` | 24 inclusions |
| `/retreat/signature/detox` | `retreats/detox.md` | 24 inclusions |
| `/retreat/signature/sleep-well` | `retreats/sleep-well.md` | 26 inclusions |
| `/retreat/signature/journey-of-self-restoration` | `retreats/journey-of-self-restoration.md` | 8 theme blocks |
| `/retreat/host-your-retreat` | `retreats/host-your-retreat.md` | application form |
| `/retreat/tarzans-jungle-retreat` | `retreats/tarzans-jungle-retreat.md` | **has real pricing** (IDR) |
| `/retreat/group-retreat` | `retreats/group-retreat.md` | |
| `/retreat/writers-retreat` | `retreats/writers-retreat.md` | dated event |
| `/retreat/yoga-teacher-immersive` | `retreats/yoga-teacher-immersive.md` | dated event |
| `/retreat/4-nights-gdr-oasis` | `retreats/4-nights-gdr-oasis.md` | dated event |
| `/retreat/eat-pray-heal` | `retreats/eat-pray-heal.md` | dated event |
| `/retreat/rejuvenating-the-spirit` | `retreats/rejuvenating-the-spirit-deepak-chopra.md` | full day-by-day timetable |
| `/retreat/sol-reset` | `retreats/sol-reset-004.md` | dated event |
| `/retreat/joy-of-life-and-living` | `retreats/joy-of-life-and-living.md` | dated event |
| `/retreat/soulblazing` | `retreats/yoga.md` | ⚠️ live URL is `/yoga/` but content is the SoulBlazing retreat |
| **Offers** | | |
| `/offers` | `offers/offers.md` | 2 promos |
| `/offers/early-bird` | `offers/early-bird.md` | up to 35% off |
| `/offers/secret` | `offers/secret.md` | promo code SECRET, +10% |
| **Info / legal** | | |
| `/about-us` | `info/about-us.md` | vision/mission, CSR |
| `/activities` | `info/activities.md` | 9 activities |
| `/awards` | `info/awards.md` | 2023 + 2024 awards |
| `/contact-us` | `info/contact-us.md` | contact form |
| `/gallery` | `info/gallery.md` | 35 image URLs |
| `/events` | `info/event.md` | events list |
| `/press-release` | `info/press-release.md` | 7 press cards |
| `/general-policy` | `info/general-policy.md` | full legal text (23 sections) |
| `/privacy-policy` | `info/privacy-policy.md` | full legal text (7 sections) |

**External links (keep as outbound, not internal routes):**
- The Bali Eden → `https://thebalieden.com/`
- Blog → `https://gdasbali.com/blog` (not rebuilt this pass)
- Booking engine "Book Now" (header) → `https://staahmax.staah.net/be/index_be?propertyId=NjI5Mg==&individual=true`
- Direct-booking benefits CTA → swiftbook.io booking URLs
- Many retreat CTAs → WhatsApp (`https://wa.me/628113906144`, `wa.link/...`) and `balidavi.com`

---

## 2. Global components (build once, reuse everywhere)

Every page shares the same chrome. Build these as shared layout components:

### `<Header>` / primary nav
Logo left (`logo-GDAS-bali-big.png`, alt "Logo GDAS Bali") + dropdown menus + "Book Now" button.
Menu tree (see `home.md` "Global Navigation"):
`Home · Accommodations▾ · Facilities▾ · The Bali Eden(ext) · Offers · Experience▾ · Retreat▾ · Health Suite · Dining · [Book Now]`

### `<BookingWidget>` ("Check Availability")
Fields: `CHECK IN*`, `CHECK OUT*`, `PROMO CODE`, button `BOOK NOW`. Appears on home; likely reusable.

### `<TrustBadges>` row
Small Luxury Hotels logo + Smith (Mr & Mrs Smith) logo + TripAdvisor badge. Appears on most pages.

### `<Footer>`
Three columns + social + copyright (see `home.md` "Global Footer"):
- **Contact:** Jl. Cempaka Mas, Ubud, Gianyar, Bali 80571 · +62 361 908 3131 (`tel:+623619083131`) · hello@gdasbali.com
- **More Information:** About Us, Event, Activities, Gallery, Contact Us, Privacy Policy, General Policy, Awards, Press Release, Blog
- **Social:** Instagram `@gdasbali` · Facebook `/gdasbali` · LinkedIn · Pinterest · TikTok
- **Copyright:** "Copyright © 2026 GDAS Bali | Powered by bitri.id"

### Reusable content blocks (DRY candidates)
- **"What to Expect While in Bali"** boilerplate (Gdas Bali / Accommodation / Cuisine / The Bali Eden) repeats across many retreat pages → one `<WhatToExpect>` component.
- **Room-variant pages** share body copy with their parent — model rooms as data with per-variant title + gallery, render through one template.
- **Signature-retreat programs** (balance-mind, body-balance, detox, sleep-well) are the same template with a different inclusions list → one `<RetreatProgram>` component fed by data.
- **Dated retreat events** (writers, sol-reset, eat-pray-heal, etc.) share a facilitator/dates/price/inclusions shape → one `<RetreatEvent>` template + a data array.

---

## 3. Data-model suggestion for the React app

Rather than hardcoding JSX, drive these collections from typed data (e.g. `src/data/*.ts`):

```ts
type Room = { slug; family: 'grand-deluxe' | 'prestige-pool-villa'; title; view; body; gallery: string[] }
type RetreatProgram = { slug; title; duration; inclusions: string[]; cta: string }
type RetreatEvent = { slug; title; facilitator; dates; priceFrom; priceTo; currency; inclusions; cta }
type Treatment = { slug; title; body; image }     // health-suite biohacking items
type Facility = { slug; title; body; hours?; gallery: string[] }
type Offer = { slug; title; body; discount; promoCode?; inclusions: string[]; cta }
```

Legal pages (general-policy, privacy-policy) can render markdown directly.

---

## 4. Data-quality flags found during scrape (fix on rebuild)

- **`/yoga/` mislabeled** — the URL says yoga but the page is the "SoulBlazing Retreat". Give it an honest route.
- **Stale home-page retreat links** — home links to `pace-of-nature`, `facilitator-training`, `bali-2025-yoga-retreat` which are **not in the sitemap** (likely removed). Verify before linking; drop the dead ones.
- **Duplicate "Signature Retreat"** entry on the home retreat list (one has no URL).
- **`index.php` in URLs** — home accommodation/dining "Details" links use `/index.php/...`. Use clean routes instead.
- **Footer link mismatches** — footer "Event" → `/events/` (plural) but page is `/event/` (singular); "Blog" has no trailing slash. Normalize routing.
- **No meta descriptions anywhere** — none of the 50 pages expose one. **SEO opportunity:** author unique titles + meta descriptions per page in the rebuild (the user explicitly wants SEO + AI optimization).
- **Missing image alt text** — gallery/content images have no alt text in source. **Accessibility + SEO opportunity:** write descriptive alt text per image.
- **Noun Project attribution junk** glued onto two "What's Included" labels on journey-of-self-restoration — already stripped to "Colonic Hydrotherapy" and "Daily Yoga Classes".
- **Verbatim typos preserved** in Deepak Chopra timetable ("9:00 – 1:.00 AM", "Live 02", "Mama Bali") — clean these in the rebuild.

---

## 5. Best-practice rebuild checklist (per the brief: UI/UX, speed, SEO, AI optimization)

- **Routing:** React Router (or TanStack Router) with the clean paths in §1. 301-style redirects from old WP paths if SEO continuity matters.
- **SEO:** per-route `<title>` + meta description + Open Graph; JSON-LD structured data (`Hotel`, `Resort`, `LodgingBusiness`, `Event` for dated retreats, `BreadcrumbList`). Sitemap.xml + robots.txt. Semantic HTML5 landmarks.
- **AI optimization:** clean semantic markup, descriptive headings, structured data, accessible alt text — all feed LLM/answer-engine ingestion.
- **Performance:** Vite code-splitting per route, responsive `<img srcset>` + lazy-loading + modern formats (WebP/AVIF — re-export the WP JPEGs), preconnect to booking domains, defer the booking-widget iframe.
- **Accessibility:** alt text, focus states, keyboard-navigable dropdown menus, color contrast (esp. text over hero images).
- **Content layer:** keep the typed data model (§3) so content edits don't touch JSX.
- **Images:** all source URLs are under `gdasbali.com/wp-content/uploads/...` — download/re-host and optimize; don't hotlink the WP origin.

---

## 6. File inventory

50 page files: 1 home + 7 accommodations + 8 facilities + 1 dining + 1 health-suite +
3 experiences + 17 retreats + 3 offers + 9 info. See the folders alongside this README.
