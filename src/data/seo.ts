import type { SeoMeta } from './types'

/**
 * Authored per-route titles + meta descriptions.
 * The source WordPress site exposed NO meta descriptions — these are written
 * fresh for search + answer-engine optimisation (unique, ~150 chars, keyword-rich).
 */
export const SEO: Record<string, SeoMeta> = {
  '/': {
    title: 'GDAS Bali — Holistic Wellness Resort in Ubud',
    description:
      'A holistic health & wellness resort in the heart of Ubud, Bali. Yoga, plant-based vegan dining, a biohacking health suite, and signature healing retreats.',
  },
  '/about-us': {
    title: 'About GDAS Bali — Health Leads to Happiness',
    description:
      'Rooted in Usadha Bali healing wisdom, GDAS Bali is a wellness sanctuary in Mas, Ubud. Discover our story, vision, and commitment to people and planet.',
  },
  '/accommodations': {
    title: 'Accommodations — Grand Deluxe & Prestige Pool Villas',
    description:
      'Stay in hand-carved Grand Deluxe rooms or private Prestige Pool Villas, each crafted by Balinese artisans and named for healing herbs of Ubud.',
  },
  '/facilities': {
    title: 'Facilities — Pools, Yoga Shalas, Sauna & More',
    description:
      'Swimming pool, garden lounge, library, yoga shalas, hot yoga studio, saunas and a full wellness gym — every facility at GDAS Bali in Ubud.',
  },
  '/dining': {
    title: 'Tangi Restaurant — Plant-Based Vegan Dining in Ubud',
    description:
      'Tangi Restaurant serves world-class vegan soul food overlooking the jungle of Mas, Ubud — locally sourced, plant-based, and rooted in Balinese tradition.',
  },
  '/health-suite': {
    title: 'Biohacking Lab — Recovery & Longevity Therapies',
    description:
      'Cryotherapy, red light, salt therapy, Live O2, colonic hydrotherapy, stem cell and IV drips — science-backed therapies at the GDAS Bali Biohacking Lab.',
  },
  '/offers': {
    title: 'Offers & Wellness Packages',
    description:
      'Save on your Ubud wellness escape with early-bird rates, secret discounts and seasonal packages — book direct with GDAS Bali for the best value.',
  },
  '/retreat/signature': {
    title: 'Signature Retreat — Usadha Bali Healing Journeys',
    description:
      'Choose from Balance Mind, Body Balance, Detox and Sleep Well — signature wellness retreats blending yoga, nutrition and Usadha Bali healing in Ubud.',
  },
  '/experience': {
    title: 'Experiences — Weddings, Concierge & Nyepi',
    description:
      'Beyond the stay at GDAS Bali — intimate jungle weddings, a bespoke VIP concierge, and the sacred stillness of Nyepi, the Balinese Day of Silence.',
  },
  '/experience/wedding': {
    title: 'Weddings at GDAS Bali — Ubud Jungle Ceremonies',
    description:
      'Say "I do" amid the jungle of Ubud. GDAS Bali offers intimate, holistic wedding experiences with curated packages and a sacred chapel setting.',
  },
  '/experience/vip-concierge': {
    title: 'VIP Concierge — Tailored Wellness Journeys',
    description:
      'Our VIP Concierge curates every detail of your Ubud stay — private transfers, bespoke wellness programs and seamless, personalised service.',
  },
  '/experience/nyepi': {
    title: 'Nyepi — Experience the Balinese New Year',
    description:
      'Spend the Balinese Day of Silence at GDAS Bali. A rare chance to slow down, reflect and reset in stillness during Nyepi in Ubud.',
  },
  '/activities': {
    title: 'Activities — Yoga, Healing Rituals & Bali Culture',
    description:
      'From sunrise yoga and sound healing to Balinese purification rituals, explore the wellness activities and cultural experiences at GDAS Bali.',
  },
  '/gallery': {
    title: 'Gallery — GDAS Bali in Pictures',
    description:
      'Explore GDAS Bali through imagery — villas, pools, yoga shalas, plant-based cuisine and the lush jungle landscape of Mas, Ubud.',
  },
  '/awards': {
    title: 'Awards & Recognition',
    description:
      'GDAS Bali Health and Wellness Resort and Tangi Restaurant are recognised at the World Luxury Hotel Awards and beyond. See our accolades.',
  },
  '/press-release': {
    title: 'Press Releases & News',
    description:
      'The latest news from GDAS Bali — award wins, new wellness experiences and the resort’s journey as a leading Ubud wellness destination.',
  },
  '/events': {
    title: 'Events at GDAS Bali',
    description:
      'Discover upcoming retreats, workshops and cultural events at GDAS Bali — immersive wellness experiences in the heart of Ubud.',
  },
  '/contact-us': {
    title: 'Contact GDAS Bali',
    description:
      'Get in touch with GDAS Bali in Mas, Ubud. Call +62 361 908 3131, email hello@gdasbali.com, or send us a message to plan your wellness stay.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description: 'How GDAS Bali collects, uses and protects your personal information.',
  },
  '/general-policy': {
    title: 'General Policy',
    description: 'Booking, cancellation, check-in and resort policies for GDAS Bali.',
  },
}

/** Fallback used when a route has no explicit entry. */
export const SEO_DEFAULT: SeoMeta = SEO['/']

export function seoFor(path: string): SeoMeta {
  return SEO[path] ?? SEO_DEFAULT
}
