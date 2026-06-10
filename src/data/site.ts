import type { FeaturedLink, Img, NavGroup, NavLink } from './types'

/** Canonical production origin — update when the real domain is set. */
export const SITE_URL = 'https://gdasbali.com'

export const BRAND = {
  name: 'GDAS Bali',
  legalName: 'GDAS Bali Health and Wellness Resort',
  tagline: 'Holistic Wellness Resort in Ubud',
  logo: {
    src: '/wp/2023/02/logo-GDAS-bali-big.png',
    alt: 'GDAS Bali logo',
  } satisfies Img,
}

export const CONTACT = {
  address: 'Jl. Cempaka Mas, Ubud, Gianyar, Bali 80571',
  mapUrl: 'https://goo.gl/maps/hF3HpPFzGgDMmGXj6',
  phone: '+62 361 908 3131',
  phoneHref: 'tel:+623619083131',
  email: 'hello@gdasbali.com',
  emailHref: 'mailto:hello@gdasbali.com',
}

/** External booking / engine endpoints (kept outbound, never internal routes). */
export const BOOKING = {
  /** Header "Book Now" — STAAH booking engine. */
  engine: 'https://staahmax.staah.net/be/index_be?propertyId=NjI5Mg==&individual=true',
  /** Direct-booking-benefits CTA — Swiftbook. */
  direct:
    'https://www.swiftbook.io/inst/#home?propertyId=243MjQSMlyESyRXSrk3NTk=&JDRN=Y',
  /** Health Suite / retreat WhatsApp enquiry. */
  whatsapp: 'https://wa.me/628113906144',
}

export const SOCIAL: NavLink[] = [
  { label: 'Instagram', to: 'https://www.instagram.com/gdasbali/', external: true },
  { label: 'Facebook', to: 'https://www.facebook.com/gdasbali', external: true },
  { label: 'LinkedIn', to: 'https://www.linkedin.com/company/76246736/', external: true },
  { label: 'Pinterest', to: 'https://id.pinterest.com/gdasbali/_created/', external: true },
  { label: 'TikTok', to: 'https://www.tiktok.com/@gdasbali', external: true },
]

/*
 * Primary navigation — per the June 2026 Réntlyn restructure spec:
 * 4 top-level items (Rooms · Experiences · Offers · Book now).
 * The logo links home; there is no "Home" text tab.
 */

/** ROOMS — strictly room types (pool/lounge imagery lives on the room pages). */
export const ROOMS_LINKS: NavLink[] = [
  { label: 'Grand Deluxe', to: '/accommodations/grand-deluxe' },
  { label: 'Prestige Pool Villa', to: '/accommodations/prestige-pool-villa' },
]

/** EXPERIENCES mega-menu — featured cards (best-selling wellness services). */
export const EXPERIENCES_FEATURED: FeaturedLink[] = [
  {
    label: 'Biohacking Lab', // renamed from "Health Suite"; URL unchanged
    to: '/health-suite',
    descriptor: 'Cryotherapy, red light, IV & stem cell therapy',
    icon: 'biohacking',
  },
  {
    label: 'The Bali Eden',
    to: 'https://thebalieden.com/',
    external: true,
    descriptor: 'Spa, gym & wellness centre',
    icon: 'eden',
  },
]

/** EXPERIENCES mega-menu — four labelled category columns. */
export const EXPERIENCES_GROUPS: NavGroup[] = [
  {
    heading: 'Wellness',
    links: [
      { label: 'Wellness facilities', to: '/facilities/wellness-facilities' },
      { label: 'Yoga shala', to: '/facilities/yoga-shala' },
      { label: 'Hot yoga studio', to: '/facilities/hot-yoga-studio' },
    ],
  },
  {
    heading: 'Retreats',
    links: [
      { label: 'Signature retreat', to: '/retreat/signature' },
      {
        label: 'Journey of self restoration',
        to: '/retreat/signature/journey-of-self-restoration',
      },
      { label: "Tarzan's Jungle Retreat", to: '/retreat/tarzans-jungle-retreat' },
      { label: 'Host your retreat', to: '/retreat/host-your-retreat' },
    ],
  },
  {
    heading: 'Dining',
    links: [
      { label: 'Tangi restaurant', to: '/dining' },
      // Spice of Eden has no dedicated page yet — lives as a section on /dining.
      { label: 'Spice of Eden', to: '/dining#spice-of-eden' },
    ],
  },
  {
    heading: 'Occasions',
    links: [
      { label: 'Wedding', to: '/experience/wedding' },
      { label: 'VIP concierge', to: '/experience/vip-concierge' },
      { label: 'Nyepi – Balinese New Year', to: '/experience/nyepi' },
    ],
  },
]

/** OFFERS — single highlighted conversion link (not a dropdown). */
export const OFFERS_LINK: NavLink = { label: 'Offers', to: '/offers' }

/** Footer "More Information" column. Pages demoted from the main nav stay live here. */
export const FOOTER_LINKS: NavLink[] = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Swimming Pool', to: '/facilities/swimming-pool' },
  { label: 'The Garden Lounge', to: '/facilities/garden-lounge' },
  { label: 'Library', to: '/facilities/library' },
  { label: 'Gift Shop', to: '/facilities/gift-shop' },
  { label: 'Events', to: '/events' },
  { label: 'Activities', to: '/activities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'General Policy', to: '/general-policy' },
  { label: 'Awards', to: '/awards' },
  { label: 'Press Release', to: '/press-release' },
  { label: 'Blog', to: 'https://gdasbali.com/blog', external: true },
]

/** Accreditation badges shown across the site. */
export const TRUST_BADGES: { img: Img; href?: string }[] = [
  {
    img: {
      src: '/wp/elementor/thumbs/logo-small-luxury-hotels-q4juhpwfrfjk8pusbicugr4fm7a9rrzbvwbtw72942.png',
      alt: 'Small Luxury Hotels of the World — member',
    },
  },
  {
    img: {
      src: '/wp/elementor/thumbs/logo-smith-q4juhl79nyi4jpbm0hi8pf09tw21bvnit3sclgky90.png',
      alt: 'Mr & Mrs Smith — featured hotel',
    },
  },
  {
    img: {
      src: '',
      alt: 'Tripadvisor — read GDAS Bali reviews',
    },
    href: 'https://www.tripadvisor.com/Hotel_Review-g297701-d23721693-Reviews-Gdas_Bali_Health_And_Wellness_Resort-Ubud_Gianyar_Regency_Bali.html',
  },
]
