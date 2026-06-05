import type { Img, NavLink } from './types'

/** Canonical production origin — update when the real domain is set. */
export const SITE_URL = 'https://gdasbali.com'

export const BRAND = {
  name: 'GDAS Bali',
  legalName: 'GDAS Bali Health and Wellness Resort',
  tagline: 'Holistic Wellness Resort in Ubud',
  logo: {
    src: 'https://gdasbali.com/wp-content/uploads/2023/02/logo-GDAS-bali-big.png',
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

/** Primary navigation — mirrors the live site's menu tree with clean internal routes. */
export const NAV: NavLink[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Accommodations',
    to: '/accommodations',
    children: [
      { label: 'Grand Deluxe', to: '/accommodations/grand-deluxe' },
      {
        label: 'Grand Deluxe with Balcony',
        to: '/accommodations/grand-deluxe/with-balcony',
      },
      {
        label: 'Grand Deluxe Terrace Garden View',
        to: '/accommodations/grand-deluxe/terrace-garden-view',
      },
      {
        label: 'Grand Deluxe Terrace Paddy View',
        to: '/accommodations/grand-deluxe/terrace-paddy-view',
      },
      { label: 'Prestige Pool Villa', to: '/accommodations/prestige-pool-villa' },
      {
        label: 'Prestige Pool Villa Garden View',
        to: '/accommodations/prestige-pool-villa/garden-view',
      },
      {
        label: 'Prestige Pool Villa Paddy View',
        to: '/accommodations/prestige-pool-villa/paddy-view',
      },
    ],
  },
  {
    label: 'Facilities',
    to: '/facilities',
    children: [
      { label: 'Swimming Pool', to: '/facilities/swimming-pool' },
      { label: 'The Garden Lounge', to: '/facilities/garden-lounge' },
      { label: 'Library', to: '/facilities/library' },
      { label: 'Yoga Shala', to: '/facilities/yoga-shala' },
      { label: 'Hot Yoga Studio', to: '/facilities/hot-yoga-studio' },
      { label: 'Gift Shop', to: '/facilities/gift-shop' },
      { label: 'Wellness Facilities', to: '/facilities/wellness-facilities' },
    ],
  },
  { label: 'The Bali Eden', to: 'https://thebalieden.com/', external: true },
  { label: 'Offers', to: '/offers' },
  {
    label: 'Experience',
    to: '/experience',
    children: [
      { label: 'Wedding', to: '/experience/wedding' },
      { label: 'VIP Concierge', to: '/experience/vip-concierge' },
      { label: 'Nyepi – Balinese New Year', to: '/experience/nyepi' },
    ],
  },
  {
    label: 'Retreat',
    to: '/retreat/signature',
    children: [
      { label: 'Signature Retreat', to: '/retreat/signature' },
      { label: 'Host Your Retreat', to: '/retreat/host-your-retreat' },
      { label: "Tarzan's Jungle Retreat", to: '/retreat/tarzans-jungle-retreat' },
      {
        label: 'Journey of Self Restoration',
        to: '/retreat/signature/journey-of-self-restoration',
      },
    ],
  },
  { label: 'Health Suite', to: '/health-suite' },
  { label: 'Dining', to: '/dining' },
]

/** Footer "More Information" column. */
export const FOOTER_LINKS: NavLink[] = [
  { label: 'About Us', to: '/about-us' },
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
      src: 'https://gdasbali.com/wp-content/uploads/elementor/thumbs/logo-small-luxury-hotels-q4juhpwfrfjk8pusbicugr4fm7a9rrzbvwbtw72942.png',
      alt: 'Small Luxury Hotels of the World — member',
    },
  },
  {
    img: {
      src: 'https://gdasbali.com/wp-content/uploads/elementor/thumbs/logo-smith-q4juhl79nyi4jpbm0hi8pf09tw21bvnit3sclgky90.png',
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
