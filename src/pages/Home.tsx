import { Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { organizationJsonLd } from '@/lib/structuredData'
import { seoFor } from '@/data/seo'
import { BOOKING } from '@/data/site'
import { ROOMS } from '@/data/rooms'
import { TREATMENTS } from '@/data/treatments'
import { RETREAT_PROGRAMS } from '@/data/retreats'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { BookingWidget } from '@/components/layout/BookingWidget'

const HERO_IMG =
  '/wp/2025/03/GdasLandscape-1024x681.jpg'
// Hero background video — same YouTube source as the original WP site.
const HERO_VIDEO_ID = '2e4uvropX_o'
const DINING_IMG = '/wp/2023/02/home-dining.jpg'

const BENEFITS = [
  'Daily mindful movement (yoga and meditation)',
  'Daily plant-based breakfast',
  'Daily afternoon tea',
  'Complimentary access to The Bali Eden',
  'Unlimited gym access',
]

export function Home() {
  const seo = seoFor('/')
  return (
    <>
      <Seo {...seo} jsonLd={organizationJsonLd} path="/" />

      <PageHero
        size="full"
        eyebrow="Welcome to"
        title="GDAS Bali"
        subtitle="A health and wellness resort in the heart of Bali's cultural and spiritual hub, Ubud."
        image={HERO_IMG}
        imageAlt="Aerial view of GDAS Bali resort set among the jungle and rice paddies of Mas, Ubud"
        videoId={HERO_VIDEO_ID}
      >
        <Button to={BOOKING.engine} external variant="ondark">
          Book Your Stay
        </Button>
      </PageHero>

      <BookingWidget />

      {/* Welcome statement */}
      <Section>
        <Container width="narrow" className="text-center">
          <Reveal>
            <Eyebrow className="mb-5">A Sanctuary of Wellness</Eyebrow>
            <p className="font-display text-h3 md:text-h2 leading-snug text-balance">
              Learn to let go and release in our sanctuary of wellness and peace.
            </p>
            <p className="mt-8 text-ink-soft leading-relaxed text-pretty">
              Embrace the area's healing energies and vibrate at higher frequencies for the
              wellness of the mind, body, and spirit. With the help of our accredited and
              experienced instructors and through a range of wellness programs accompanied by
              carefully curated vegan meals, we'll guide you in identifying root issues and set
              you on the path to holistic healing and mind-body rejuvenation. Begin your journey
              today.
            </p>
            <div className="mt-10">
              <Button to="/about-us">Our Story</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Health Suite teaser */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Biohacking"
              title="Health Suite"
              lead="Science-backed therapies to reduce inflammation, speed recovery, and restore vitality."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TREATMENTS.slice(0, 4).map((t, i) => (
              <Reveal key={t.slug} delay={i * 90}>
                <li className="h-full border border-line bg-canvas">
                  <div className="overflow-hidden">
                    <img
                      src={t.image.src}
                      alt={t.image.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-h3">{t.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm text-ink-soft">{t.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Button to="/health-suite">Explore the Health Suite</Button>
          </div>
        </Container>
      </Section>

      {/* Accommodation */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="GDAS Bali" title="Accommodation" align="center" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROOMS.map((room, i) => (
              <Reveal key={room.slug} delay={i * 100}>
                <Link
                  to={`/accommodations/${room.slug}`}
                  className="group block h-full border border-line bg-surface"
                >
                  <div className="overflow-hidden">
                    <img
                      src={room.gallery[0]?.src}
                      alt={room.gallery[0]?.alt ?? room.title}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-h2">{room.title}</h3>
                    <p className="mt-3 text-ink-soft text-pretty">{room.summary}</p>
                    <span className="link-underline mt-5 inline-block text-sm tracking-wide text-clay">
                      View Details
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Dining */}
      <Section tone="surface">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal direction="left">
              <Eyebrow className="mb-4">Dining</Eyebrow>
              <h2 className="font-display text-h2 md:text-h1">Tangi Restaurant</h2>
              <p className="mt-6 text-ink-soft leading-relaxed text-pretty">
                Set in our tropical dining hall with a striking view of Mas' lush jungle, Tangi
                Restaurant offers world-class vegan soul food that will nourish your body and
                soul.
              </p>
              <div className="mt-8">
                <Button to="/dining">More Details</Button>
              </div>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <figure className="overflow-hidden border border-line">
                <img
                  src={DINING_IMG}
                  alt="Plant-based vegan dishes plated at Tangi Restaurant, GDAS Bali"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </figure>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Retreat teaser */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="GDAS Bali"
              title="Signature Retreats"
              lead="Immersive healing journeys rooted in Usadha Bali tradition — choose the path that meets you where you are."
            />
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {RETREAT_PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <li className="h-full">
                  <Link
                    to={`/retreat/signature/${p.slug}`}
                    className="flex h-full flex-col justify-between border border-line p-6 transition-colors duration-300 hover:bg-surface"
                  >
                    <h3 className="font-display text-h3">{p.title}</h3>
                    <span className="link-underline mt-6 inline-block self-start text-sm text-clay">
                      Discover
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Button to="/retreat/signature">All Retreats</Button>
          </div>
        </Container>
      </Section>

      {/* Direct booking benefits */}
      <Section tone="jungle" spacing="tight">
        <Container className="text-center">
          <Reveal>
            <Eyebrow className="mb-5 text-clay">Direct Booking Benefits</Eyebrow>
            <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-h3">
              {BENEFITS.map((b, i) => (
                <li key={b} className="flex items-center gap-3">
                  {i > 0 && <span className="text-clay">·</span>}
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-canvas/60">(*terms and conditions apply)</p>
            <div className="mt-10">
              <Button to={BOOKING.direct} external variant="ondark">
                Book Now
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
