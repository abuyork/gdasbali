import type { Treatment } from './types'
import { BOOKING } from './site'

const BOOK = 'https://wa.link/r3pvpt'

/** Health Suite — biohacking treatments (verbatim copy from the live site). */
export const TREATMENTS: Treatment[] = [
  {
    slug: 'cryotherapy',
    title: 'Cryotherapy',
    duration: '3 minutes',
    body: 'In just three minutes, expose your body to ultra-low temperatures between -200°F to -300°F. This treatment helps reduce inflammation, speed recovery, increase energy, and promote anti-aging and overall vitality.',
    image: {
      src: '/wp/2025/10/Cyrotherapy-1024x683.jpg',
      alt: 'Guest entering the GDAS Bali whole-body cryotherapy chamber',
    },
    bookUrl: BOOK,
  },
  {
    slug: 'red-light-therapy',
    title: 'Red Light Therapy',
    duration: '30 minutes',
    body: 'Using gentle near-infrared light, this 30-minute treatment reduces inflammation, smooths fine lines and scars, boosts collagen, and supports healing, better sleep, and brain function—enhancing overall wellbeing.',
    image: {
      src: '/wp/2025/10/Redlight-1024x768.jpg',
      alt: 'Red light therapy panel glowing in a GDAS Bali treatment room',
    },
    bookUrl: BOOK,
  },
  {
    slug: 'salt-therapy',
    title: 'Salt Therapy',
    body: 'Experience the healing benefits of Salt Therapy in our cozy chamber. Cleanse your airways, alleviate respiratory issues, and rejuvenate your skin with every breath.',
    image: {
      src: '/wp/2024/09/biohacking-salt-therapy-1024x682.jpg',
      alt: 'Salt-walled halotherapy chamber at the GDAS Bali Health Suite',
    },
    bookUrl: BOOK,
  },
  {
    slug: 'live-o2',
    title: 'Live O2',
    body: 'Experience the power of high oxygen levels while exercising. Breathe high levels of oxygen for enhanced detoxification and improved cellular function for optimal performance and well-being.',
    image: {
      src: '/wp/2024/09/biohacking-live-O2-1024x682.jpg',
      alt: 'Live O2 oxygen-training setup with mask and exercise bike',
    },
    bookUrl: BOOK,
  },
  {
    slug: 'colonic-hydrotherapy',
    title: 'Colonic Hydrotherapy',
    duration: '60 minutes',
    body: 'A 60-minute treatment that gently flushes out toxins, gas, and waste from the colon to relieve bloating, constipation, and IBS. It supports better digestion, nutrient absorption, and leaves you feeling light and refreshed.',
    image: {
      src: '/wp/2025/10/Colonic-1024x768.jpg',
      alt: 'Calm, clinical colonic hydrotherapy treatment room at GDAS Bali',
    },
    bookUrl: BOOK,
  },
  {
    slug: 'stem-cell-therapy',
    title: 'Stem Cell Therapy',
    body: 'Mesenchymal Stem Cells (MSC) are administered intravenously after medical screening to repair and rejuvenate the body at a cellular level. Treatments are repeated every 3–4 months, with maintenance sessions every 6–12 months for lasting vitality and recovery.',
    image: {
      src: '/wp/2025/10/Steam-Cell-1024x683.jpg',
      alt: 'Stem cell therapy administered intravenously under medical supervision',
    },
    bookUrl: BOOK,
  },
  {
    slug: 'iv-drip',
    title: 'IV Drip',
    body: 'Boost your health instantly with IV Drip therapy! Delivering essential nutrients directly to your body, IV Drips enhance immune function, fight oxidative stress, promote anti-aging, rehydrate, and boost energy. Enjoy radiant skin, improved healing, and overall vitality.',
    image: {
      src: '/wp/2024/09/biohacking-IV-drip-1024x682.jpg',
      alt: 'IV drip vitamin infusion bag hanging in the GDAS Bali Health Suite',
    },
    bookUrl: BOOK,
  },
]

export const HEALTH_SUITE_INTRO =
  'Our Health Suite brings advanced biohacking to the heart of Ubud — a curated set of science-backed therapies designed to reduce inflammation, accelerate recovery, and restore vitality at the cellular level.'

export const HEALTH_SUITE_BOOK = BOOKING.whatsapp
