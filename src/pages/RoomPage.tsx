import { useParams, Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { ROOM_BY_SLUG } from '@/data/rooms'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Gallery } from '@/components/ui/Gallery'
import { Button } from '@/components/ui/Button'
import { NotFound } from './NotFound'

export function RoomPage({ slug }: { slug: string }) {
  const { variant } = useParams()
  const room = ROOM_BY_SLUG[slug]
  if (!room) return <NotFound />

  const activeVariant = variant
    ? room.variants.find((v) => v.slug === variant)
    : undefined
  if (variant && !activeVariant) return <NotFound />

  const title = activeVariant?.title ?? room.title
  const gallery = activeVariant?.gallery ?? room.gallery
  const basePath = `/accommodations/${room.slug}`
  const path = activeVariant ? `${basePath}/${activeVariant.slug}` : basePath

  return (
    <>
      <Seo
        title={title}
        description={`${title} at GDAS Bali — ${room.summary}`}
        path={path}
        image={gallery[0]?.src}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Accommodations', path: '/accommodations' },
          { name: room.title, path: basePath },
          ...(activeVariant ? [{ name: activeVariant.title, path }] : []),
        ])}
      />

      <PageHero
        eyebrow="Accommodations"
        title={title}
        subtitle={activeVariant?.blurb ?? room.summary}
        image={gallery[0]?.src ?? ''}
        imageAlt={gallery[0]?.alt ?? title}
      />

      {/* Variant switcher */}
      {room.variants.length > 0 && (
        <Section tone="surface" spacing="tight">
          <Container>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <Link
                to={basePath}
                className={`link-underline ${!activeVariant ? 'text-clay' : 'text-ink-soft'}`}
              >
                {room.title}
              </Link>
              {room.variants.map((v) => (
                <Link
                  key={v.slug}
                  to={`${basePath}/${v.slug}`}
                  className={`link-underline ${
                    activeVariant?.slug === v.slug ? 'text-clay' : 'text-ink-soft'
                  }`}
                >
                  {v.view || v.title}
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Description */}
      <Section>
        <Container width="narrow">
          {room.body.map((para, i) => (
            <p key={i} className="mb-6 text-ink-soft leading-relaxed text-pretty last:mb-0">
              {para}
            </p>
          ))}
        </Container>
      </Section>

      {/* Amenities */}
      <Section tone="surface">
        <Container>
          <h2 className="font-display text-h2">Room Details &amp; Amenities</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {room.amenities.map((group) => (
              <div key={group.heading}>
                <h3 className="border-b border-line pb-2 font-display text-h3">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button to={room.bookUrl} external variant="solid">
              Book This Room
            </Button>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section>
        <Container>
          <h2 className="mb-10 font-display text-h2">Gallery</h2>
          <Gallery images={gallery} />
        </Container>
      </Section>
    </>
  )
}
