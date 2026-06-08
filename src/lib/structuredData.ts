import { SITE_URL, BRAND, CONTACT, SOCIAL } from '@/data/site'

/** Organization / Resort JSON-LD — emitted site-wide on the home page. */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  '@id': `${SITE_URL}/#resort`,
  name: BRAND.legalName,
  alternateName: BRAND.name,
  url: SITE_URL,
  logo: SITE_URL + BRAND.logo.src,
  image: SITE_URL + '/wp/2025/03/GdasLandscape-1024x681.jpg',
  description:
    'A holistic health and wellness resort in Ubud, Bali — yoga, plant-based vegan dining, a biohacking health suite, and signature healing retreats.',
  telephone: CONTACT.phone,
  email: CONTACT.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Cempaka Mas',
    addressLocality: 'Ubud',
    addressRegion: 'Bali',
    postalCode: '80571',
    addressCountry: 'ID',
  },
  sameAs: SOCIAL.map((s) => s.to),
}

/** BreadcrumbList JSON-LD builder. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  }
}

/** Event JSON-LD builder for dated retreats. */
export function eventJsonLd(input: {
  name: string
  path: string
  description: string
  startDate?: string
  endDate?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: input.name,
    url: SITE_URL + input.path,
    description: input.description,
    ...(input.startDate ? { startDate: input.startDate } : {}),
    ...(input.endDate ? { endDate: input.endDate } : {}),
    ...(input.image ? { image: input.image } : {}),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: BRAND.legalName,
      address: CONTACT.address,
    },
    organizer: { '@type': 'Organization', name: BRAND.name, url: SITE_URL },
  }
}
