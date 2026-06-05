// Exclusive offers and promotions at Gdas Bali.
// Inclusion bullets are copied verbatim from each offer page.
import type { Offer } from './types'

export const OFFERS_INTRO =
  'Gdas Bali offers a wide range of exclusive programs focusing on health, well-being, and mindful activities. Our wellness team can also tailor and personalize the program according to your needs.'

export const OFFERS: Offer[] = [
  {
    slug: 'regenerative-energy-wellbeing',
    title: 'REGENERATIVE ENERGY WELLBEING',
    summary:
      'Book directly with us to enjoy exclusive privileges designed to elevate your wellness journey.',
    highlight: 'Exclusive direct-booking privileges',
    inclusions: [
      'Available for all room categories, based on our Best Available Rate.',
    ],
    terms: 'Valid until 30 June 2026',
    bookUrl:
      'https://www.swiftbook.io/inst/#home?propertyId=922MjhD7YJ3LLNFIVm9FPFAMug4rfIVGidde3Wck3y9fCFR43bOQ3NTk=&JDRN=Y&_gl=1*1n2z0wo*_gcl_au*NDc0OTAyOTMxLjE3NzA2OTM5NDk.*_ga*ODYwNzk5OTcwLjE2OTMzNjUyMzI.*_ga_3KMPXBQ0NE*czE3NzU0Njc4MzIkbzM4NiRnMSR0MTc3NTQ2ODg4NiRqNTkkbDAkaDA.',
  },
  {
    slug: 'season-of-wellness',
    title: 'Season of Wellness',
    summary:
      'A series of curated experiences at Gdas Bali, from soothing spa rituals to exquisite dining and enriching activities.',
    highlight: 'A Series of Curated Experiences',
    inclusions: [
      'Explore exclusive promotions crafted to enhance your Gdas Bali experience. From soothing spa rituals to exquisite dining and enriching activities, something extraordinary awaits you',
    ],
    bookUrl: 'https://online.fliphtml5.com/qihkq/rywo/#p=1',
  },
  {
    slug: 'early-bird',
    title: 'Early Bird',
    summary:
      'Secure your reservation today and bask in the glory of up to 35% off our standard rates available on our official website.',
    highlight: 'Up to 35% off',
    inclusions: [
      'Daily plant-based breakfast',
      'Complimentary access to Titi Batu fitness club',
      '10 minutes welcome massage',
      'Complimentary participation in our mindful movement (yoga and meditation)',
      'One-time nutrition lunch (minimum stay 2-night)',
      'Return airport transfers (minimum stay 3-night)',
      'One-time 60 minutes spa treatment or Cryotheraphy (minimum stay 4-nights)',
      'Participation in daily resort activities',
      'Wi-fi internet in the room and hotel area',
    ],
    terms:
      'This offer is available for stays when booked 60 days in advance. To book the Early Bird Deal at Gdas Bali, click Book Now below or email reservations@gdasbali.com',
    bookUrl:
      'https://staahmax.staah.net/be/indexpackdetail?propertyId=NjI5Mg==&individual=true&fixp=NjI5MkBTUEM=',
  },
  {
    slug: 'secret',
    title: 'Secret',
    summary:
      'Secret deal unveiled! Exclusive rate lies in booking directly on our official website.',
    highlight: 'Extra 10% off',
    inclusions: [
      'Daily plant-based breakfast',
      '10 minutes welcome massage',
      'Complimentary participation in mindful movement (yoga and meditation)',
      'One-time nutrition lunch (minimum stay 2-night)',
      'Return airport transfers (minimum stay 3-night)',
      'One-time 60 minutes spa treatment or Cryotherapy (minimum stay 4-nights)',
      'Participation in daily resort activities',
      'Wi-fi internet in room and hotel area',
    ],
    promoCode: 'SECRET',
    terms:
      'To book the Secret Deal at Gdas Bali, click Book Now below or email reservations@gdasbali.com',
    bookUrl: 'https://booking.gdasbali.com//promocode?pc=R0RBSC9TRUNSRVQ=',
  },
]

export const OFFER_BY_SLUG = Object.fromEntries(
  OFFERS.map((o) => [o.slug, o]),
) as Record<string, Offer>
