// Shared content types for the GDAS Bali site.
// Every image carries authored `alt` text for accessibility + SEO.

export interface Img {
  src: string
  /** Descriptive alt text (authored — the source WP site had none). */
  alt: string
}

export interface NavLink {
  label: string
  /** Internal route path, or an absolute URL for external links. */
  to: string
  external?: boolean
  children?: NavLink[]
}

/** Featured card in the Experiences mega-menu. */
export interface FeaturedLink {
  label: string
  to: string
  external?: boolean
  /** One-line descriptor — required so side-by-side cards read distinctly. */
  descriptor: string
  /** Icon key rendered by the Header. */
  icon: 'biohacking' | 'eden'
}

/** Labelled column of links in the Experiences mega-menu. */
export interface NavGroup {
  heading: string
  links: NavLink[]
}

export interface RoomVariant {
  slug: string
  title: string
  view: string
  /** Short distinguishing line for the variant. */
  blurb: string
  gallery: Img[]
}

export interface Room {
  slug: string
  family: 'grand-deluxe' | 'prestige-pool-villa'
  title: string
  /** One-line summary for cards / meta description seed. */
  summary: string
  /** Ordered body paragraphs (verbatim). */
  body: string[]
  /** Named amenity groups, each a bullet list. */
  amenities: { heading: string; items: string[] }[]
  gallery: Img[]
  variants: RoomVariant[]
  bookUrl: string
}

export interface Facility {
  slug: string
  title: string
  summary: string
  body: string[]
  hours?: string
  gallery: Img[]
}

export interface Treatment {
  slug: string
  title: string
  duration?: string
  body: string
  image: Img
  bookUrl: string
}

export interface RetreatProgram {
  slug: string
  title: string
  duration: string
  intro: string
  inclusions: string[]
  bookUrl: string
}

export interface Offer {
  slug: string
  title: string
  summary: string
  highlight: string
  inclusions: string[]
  promoCode?: string
  terms?: string
  bookUrl: string
}

export interface SeoMeta {
  title: string
  description: string
}
