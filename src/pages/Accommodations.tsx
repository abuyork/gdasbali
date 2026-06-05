import { Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { ROOMS } from '@/data/rooms'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function Accommodations() {
  const seo = seoFor('/accommodations')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Accommodations', path: '/accommodations' },
        ])}
      />
      <PageHero
        eyebrow="Stay With Us"
        title="Accommodations"
        subtitle="Hand-carved by Balinese artisans of Mas, each room and villa is named for a healing herb of Ubud."
        image={ROOMS[0].gallery[0]?.src ?? ''}
        imageAlt="Interior of a GDAS Bali Grand Deluxe room with hand-carved wood detailing"
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12">
            {ROOMS.map((room, i) => (
              <Reveal key={room.slug}>
                <article
                  className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
                    i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
                  }`}
                >
                <figure className="overflow-hidden border border-line">
                  <img
                    src={room.gallery[0]?.src}
                    alt={room.gallery[0]?.alt ?? room.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </figure>
                <div>
                  <h2 className="font-display text-h2 md:text-h1">{room.title}</h2>
                  <p className="mt-5 text-ink-soft leading-relaxed text-pretty">
                    {room.summary}
                  </p>
                  {room.variants.length > 0 && (
                    <ul className="mt-6 space-y-1.5 text-sm text-ink-soft">
                      {room.variants.map((v) => (
                        <li key={v.slug}>
                          <Link
                            to={`/accommodations/${room.slug}/${v.slug}`}
                            className="link-underline"
                          >
                            {v.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-8">
                    <Button to={`/accommodations/${room.slug}`}>View Details</Button>
                  </div>
                </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
