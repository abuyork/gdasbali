import { useLocation } from 'react-router-dom'
import { SITE_URL } from '@/data/site'

interface SeoProps {
  title: string
  description: string
  /** Absolute image URL for social cards. */
  image?: string
  /** Override canonical path; defaults to the current location. */
  path?: string
  /** JSON-LD structured-data object(s). */
  jsonLd?: object | object[]
  /** Set true on legal / thin pages you don't want indexed. */
  noindex?: boolean
}

const DEFAULT_OG_IMAGE =
  '/wp/2025/03/GdasLandscape-1024x681.jpg'

/**
 * Per-page metadata. React 19 hoists <title>/<meta>/<link> rendered here into
 * <head>, so no react-helmet is needed.
 */
export function Seo({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  path,
  jsonLd,
  noindex,
}: SeoProps) {
  const location = useLocation()
  const canonical = SITE_URL + (path ?? location.pathname)
  const fullTitle = title.includes('GDAS Bali') ? title : `${title} — GDAS Bali`
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []
  // Crawlers need absolute image URLs; proxied media is served from our origin.
  const ogImage = image.startsWith('/') ? SITE_URL + image : image

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="GDAS Bali" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  )
}
