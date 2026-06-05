// Authored content for the remaining routes (experiences, secondary retreats,
// info & legal pages). Rendered by <ContentPage>. Copy is drawn from the scraped
// source where available; meta descriptions are authored fresh for SEO.

export interface ContentSection {
  heading?: string
  body?: string[]
  bullets?: string[]
}

export interface ContentPageData {
  eyebrow: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
  intro?: string[]
  sections?: ContentSection[]
  cta?: { label: string; to: string }
  seo: { title: string; description: string }
  noindex?: boolean
}

const HERO = 'https://gdasbali.com/wp-content/uploads/2025/03/GdasLandscape-1024x681.jpg'
const WA = 'https://wa.me/628113906144'

export const CONTENT_PAGES: Record<string, ContentPageData> = {
  '/retreat/tarzans-jungle-retreat': {
    eyebrow: 'Retreat',
    title: "Tarzan's Jungle Retreat — A Wild Awakening",
    subtitle:
      "Awaken your spirit and reconnect with your primal nature in this immersive retreat led by Tariq \"Tarzan\" Spears.",
    image: 'https://gdasbali.com/wp-content/uploads/2025/11/V-2-scaled.jpg',
    imageAlt: "Lush jungle setting of Tarzan's Jungle Retreat at GDAS Bali",
    intro: [
      "Set amidst the lush beauty of Bali, Tarzan's Jungle merges luxury wellness with raw adventure — blending movement, endurance training, and holistic rituals designed to strengthen the body and expand the mind. Guided by nature's rhythm, each day invites transformation, balance, and self-mastery.",
    ],
    sections: [
      {
        heading: 'Pricing',
        bullets: [
          'Sharing Room: IDR 20,685,000 — Twin single bed (1–2 people)',
          'Private Room: IDR 33,500,000 — Double bed (1 person only)',
          'Private Couples Room: IDR 41,380,000 — Double bed (2 people)',
        ],
      },
      {
        heading: 'About the Retreat',
        body: [
          "Tarzan's Jungle is a sanctuary for transformation—a place where luxury meets purpose. Set deep in tropical silence, the retreat invites guests to strengthen the body, awaken the spirit, and reconnect with nature's rhythm through plant-based cuisine, mindful movement, meditation, and adventure.",
        ],
      },
      {
        heading: 'Physical & Endurance Expectations',
        body: [
          'This retreat is designed for growth, challenge, and transformation. Guests will train outdoors, explore jungle trails, and move through dynamic sessions designed to strengthen the body and expand mental resilience.',
        ],
        bullets: [
          'Guided hikes and outdoor movement',
          'Strength, mobility, and breath-focused workouts',
          'Immersion in nature, from ocean to forest',
          'Recovery experiences including grounding rituals and plant-based nourishment',
        ],
      },
    ],
    cta: { label: 'Discover More', to: 'https://wa.link/iigdpd' },
    seo: {
      title: "Tarzan's Jungle Retreat — A Wild Awakening",
      description:
        "An immersive luxury-meets-adventure wellness retreat in Bali led by Tariq \"Tarzan\" Spears — movement, endurance training, plant-based nourishment and holistic ritual.",
    },
  },

  '/retreat/host-your-retreat': {
    eyebrow: 'Retreat',
    title: 'Host Your Retreat',
    subtitle:
      'Bring your community to Ubud and let GDAS Bali hold the space for your personal growth journey.',
    image: HERO,
    imageAlt: 'Open-air yoga shala ready for a hosted retreat at GDAS Bali',
    intro: [
      'Whether you are a yoga teacher, wellness facilitator, or wellbeing brand, GDAS Bali offers a fully supported setting for your retreat — accommodation, plant-based dining, yoga shalas and wellness facilities, all woven through the jungle of Mas.',
      'Tell us about your vision and our team will tailor a programme, dates and pricing to suit your group.',
    ],
    cta: { label: 'Enquire to Host', to: WA },
    seo: {
      title: 'Host Your Retreat at GDAS Bali',
      description:
        'Host your yoga or wellness retreat at GDAS Bali in Ubud — supported by accommodation, plant-based dining, yoga shalas and a full wellness team.',
    },
  },

  '/retreat/signature/journey-of-self-restoration': {
    eyebrow: 'Signature Retreat',
    title: 'Journey of Self Restoration',
    subtitle:
      'A guided path back to yourself through Usadha Bali healing, mindful movement and plant-based nourishment.',
    image: HERO,
    imageAlt: 'Peaceful Usadha Bali healing setting at GDAS Bali',
    intro: [
      'The Journey of Self Restoration brings together the pillars of GDAS Bali wellness — yoga and meditation, healing rituals, nourishing cuisine and rest — into one restorative arc designed to help you release what no longer serves you and return home renewed.',
    ],
    cta: { label: 'Enquire Now', to: WA },
    seo: {
      title: 'Journey of Self Restoration — Signature Retreat',
      description:
        'A restorative signature retreat at GDAS Bali blending Usadha Bali healing, yoga, meditation and plant-based nourishment in the heart of Ubud.',
    },
  },

  '/experience/wedding': {
    eyebrow: 'Experience',
    title: 'Weddings at GDAS Bali',
    subtitle: 'Say "I do" amid the sacred jungle of Mas, Ubud.',
    image: HERO,
    imageAlt: 'Jungle wedding setting at GDAS Bali in Ubud',
    intro: [
      'Celebrate your union in one of Bali\'s most serene wellness sanctuaries. From an intimate chapel ceremony to a holistic celebration for loved ones, our team curates every detail — flowers, cuisine, ritual and rest — so you can be fully present for the moment.',
    ],
    cta: { label: 'Plan Your Wedding', to: WA },
    seo: {
      title: 'Weddings at GDAS Bali — Ubud Jungle Ceremonies',
      description:
        'Hold your wedding at GDAS Bali, a holistic wellness resort in Ubud. Intimate jungle ceremonies, curated packages and a sacred chapel setting.',
    },
  },

  '/experience/vip-concierge': {
    eyebrow: 'Experience',
    title: 'VIP Concierge',
    subtitle: 'Every detail of your Ubud stay, considered and cared for.',
    image: HERO,
    imageAlt: 'Private VIP concierge experience at GDAS Bali',
    intro: [
      'Our VIP Concierge curates a seamless, personalised journey — private airport transfers, bespoke wellness programmes, exclusive dining and any special request — so your only task is to arrive and unwind.',
    ],
    cta: { label: 'Speak to Concierge', to: WA },
    seo: {
      title: 'VIP Concierge — Tailored Wellness Journeys',
      description:
        'GDAS Bali VIP Concierge curates private transfers, bespoke wellness programmes and seamless personalised service for your Ubud stay.',
    },
  },

  '/experience/nyepi': {
    eyebrow: 'Experience',
    title: 'Nyepi — Balinese New Year',
    subtitle: 'Spend the Day of Silence in stillness and reflection.',
    image: HERO,
    imageAlt: 'Quiet resort grounds during Nyepi, the Balinese Day of Silence',
    intro: [
      'Nyepi, the Balinese Day of Silence, is a rare invitation to truly pause. At GDAS Bali you can experience this sacred day of reflection, fasting and stillness within the calm of the resort — a profound reset for mind, body and spirit.',
    ],
    cta: { label: 'Enquire About Nyepi', to: WA },
    seo: {
      title: 'Nyepi — Experience the Balinese New Year at GDAS Bali',
      description:
        'Spend Nyepi, the Balinese Day of Silence, at GDAS Bali in Ubud — a rare chance to slow down, reflect and reset in stillness.',
    },
  },

  '/activities': {
    eyebrow: 'The Resort',
    title: 'Activities',
    subtitle: 'Yoga, healing rituals and Balinese culture — woven into every day.',
    image: HERO,
    imageAlt: 'Guests practising yoga at sunrise at GDAS Bali',
    intro: [
      'From sunrise yoga and meditation to sound healing, Balinese purification rituals and cultural excursions, life at GDAS Bali invites you to move, learn and reconnect at your own pace. Speak with our team to build the days that suit your intentions.',
    ],
    cta: { label: 'Enquire About Activities', to: WA },
    seo: {
      title: 'Activities — Yoga, Healing Rituals & Bali Culture',
      description:
        'Explore wellness activities at GDAS Bali — sunrise yoga, meditation, sound healing, Balinese purification rituals and cultural experiences in Ubud.',
    },
  },

  '/gallery': {
    eyebrow: 'The Resort',
    title: 'Gallery',
    subtitle: 'A glimpse of GDAS Bali — jungle, villas, water and light.',
    image: HERO,
    imageAlt: 'Scenic view across the GDAS Bali resort and surrounding jungle',
    intro: [
      'Explore GDAS Bali through imagery — hand-carved villas, swimming pools, yoga shalas, plant-based cuisine and the lush landscape of Mas, Ubud. A full gallery migrates here from the resort archive.',
    ],
    seo: {
      title: 'Gallery — GDAS Bali in Pictures',
      description:
        'Explore GDAS Bali through imagery — villas, pools, yoga shalas, plant-based cuisine and the lush jungle of Mas, Ubud.',
    },
  },

  '/awards': {
    eyebrow: 'Recognition',
    title: 'Awards',
    subtitle: 'Recognised among the finest wellness destinations in the world.',
    image: HERO,
    imageAlt: 'GDAS Bali, an award-winning wellness resort in Ubud',
    intro: [
      'GDAS Bali Health and Wellness Resort and Tangi Restaurant have been honoured at the World Luxury Hotel Awards and beyond, and the resort is a proud member of Small Luxury Hotels of the World. Full award details migrate here from the resort archive.',
    ],
    seo: {
      title: 'Awards & Recognition — GDAS Bali',
      description:
        'GDAS Bali and Tangi Restaurant are recognised at the World Luxury Hotel Awards and as a member of Small Luxury Hotels of the World.',
    },
  },

  '/press-release': {
    eyebrow: 'Newsroom',
    title: 'Press Releases',
    subtitle: 'News and milestones from GDAS Bali.',
    image: HERO,
    imageAlt: 'GDAS Bali resort featured in the press',
    intro: [
      'The latest news from GDAS Bali — award wins, new wellness experiences and the resort\'s journey as a leading Ubud wellness destination. Full press archive migrates here.',
    ],
    seo: {
      title: 'Press Releases & News — GDAS Bali',
      description:
        'The latest news from GDAS Bali — award wins, new wellness experiences and the resort\'s journey as a leading Ubud wellness destination.',
    },
  },

  '/events': {
    eyebrow: "What's On",
    title: 'Events',
    subtitle: 'Retreats, workshops and cultural gatherings.',
    image: HERO,
    imageAlt: 'An event gathering at GDAS Bali',
    intro: [
      'Discover upcoming retreats, workshops and cultural events at GDAS Bali — immersive wellness experiences in the heart of Ubud. Check back for our seasonal calendar.',
    ],
    cta: { label: 'Enquire About Events', to: WA },
    seo: {
      title: 'Events at GDAS Bali',
      description:
        'Upcoming retreats, workshops and cultural events at GDAS Bali — immersive wellness experiences in the heart of Ubud.',
    },
  },

  '/privacy-policy': {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    image: HERO,
    imageAlt: 'GDAS Bali resort',
    intro: [
      'This page describes how GDAS Bali collects, uses and protects your personal information. The full policy text migrates here from the resort archive (see content/info/privacy-policy.md).',
    ],
    seo: {
      title: 'Privacy Policy — GDAS Bali',
      description: 'How GDAS Bali collects, uses and protects your personal information.',
    },
  },

  '/general-policy': {
    eyebrow: 'Legal',
    title: 'General Policy',
    image: HERO,
    imageAlt: 'GDAS Bali resort',
    intro: [
      'Booking, cancellation, check-in and resort policies for GDAS Bali. The full policy text migrates here from the resort archive (see content/info/general-policy.md).',
    ],
    seo: {
      title: 'General Policy — GDAS Bali',
      description: 'Booking, cancellation, check-in and resort policies for GDAS Bali.',
    },
  },
}
