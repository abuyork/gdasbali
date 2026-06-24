import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHero } from '@/lib/hero'
import { BOOKING } from '@/data/site'
import { ROOMS } from '@/data/rooms'
import { YouTubeBackground } from '@/components/ui/YouTubeBackground'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const HERO_VIDEO_ID = '2e4uvropX_o'
const DINING_IMG = '/wp/2023/02/home-dining.jpg'

/**
 * DESIGN 2 — Ashton "monograph": full-bleed cinematic hero, centered
 * letterspaced serif, alternating 50/50 editorial spreads (no cards), a
 * monogram rest, and a single wine band. Motion is slow, opacity-only.
 */
export function HomeAshton() {
  const { setHasHero } = useHero()
  useLayoutEffect(() => {
    setHasHero(true)
    return () => setHasHero(false)
  }, [setHasHero])

  const grandDeluxe = ROOMS[0]

  return (
    <>
      {/* Hero — imagery + one line of type, nothing else */}
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-jungle">
        <YouTubeBackground videoId={HERO_VIDEO_ID} />
        <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
        <div className="animate-fade-up relative z-10 px-6 text-center text-white">
          <p className="eyebrow mb-6 text-white/70">Health &amp; Wellness · Ubud</p>
          <h1 className="font-display text-[3.25rem] leading-[1.06] tracking-[0.06em] md:text-[5rem]">
            GDAS Bali
          </h1>
          <p className="mx-auto mt-8 max-w-md text-white/80">
            A sanctuary of wellness and peace in the cultural heart of Bali.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/50">
          Scroll
        </div>
      </header>

      {/* Editorial statement — vast negative space */}
      <Section spacing="default">
        <Container width="narrow" className="py-10 text-center md:py-24">
          <Reveal direction="soft">
            <p className="font-display text-h2 leading-[1.2] tracking-[0.02em] text-balance md:text-[2.75rem]">
              Learn to let go and release. Embrace the area's healing energies and
              vibrate at higher frequencies for the wellness of mind, body, and spirit.
            </p>
            <p className="mx-auto mt-10 max-w-xl text-ink-soft leading-relaxed">
              Through a range of wellness programs accompanied by carefully curated vegan
              meals, we guide you in identifying root issues and set you on the path to
              holistic healing and mind-body rejuvenation.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Split spread 1 — Accommodation (text left, image right) */}
      <Spread
        eyebrow="Accommodation"
        title="Hand-carved by the artisans of Mas"
        body="Pillow-top king beds framed by hand-carved wood, sultry green-marble vanities, and outdoor terraces that open onto the paddy. Each building is named for a Balinese healing herb."
        to={`/accommodations/${grandDeluxe.slug}`}
        cta="View the rooms"
        image={grandDeluxe.gallery[0]?.src}
        imageAlt={grandDeluxe.gallery[0]?.alt ?? 'Grand Deluxe room'}
      />

      {/* Monogram rest */}
      <Section spacing="tight">
        <Container className="text-center">
          <Reveal direction="soft">
            <p className="font-display text-[3.5rem] leading-none tracking-[0.1em] text-ink">
              gd
            </p>
            <p className="eyebrow mt-4">Govinda Das · Servant of the Divine</p>
          </Reveal>
        </Container>
      </Section>

      {/* Split spread 2 — Dining (image left, text right) */}
      <Spread
        reverse
        eyebrow="Dining"
        title="Tangi Restaurant"
        body="Set in our tropical dining hall overlooking the lush jungle of Mas, Tangi offers world-class vegan soul food that nourishes both body and spirit."
        to="/dining"
        cta="More details"
        image={DINING_IMG}
        imageAlt="Plant-based vegan dishes at Tangi Restaurant"
      />

      {/* Wine band — a final tonal note */}
      <Section tone="jungle" spacing="default">
        <Container width="narrow" className="text-center">
          <Reveal direction="soft">
            <p className="eyebrow mb-6 text-clay">Begin your journey</p>
            <p className="font-display text-h2 leading-snug text-white md:text-[2.5rem]">
              Your destiny is a health-based experience for all who are ready to look within.
            </p>
            <a
              href={BOOKING.engine}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-10 inline-block text-sm uppercase tracking-[0.2em] text-white"
            >
              Reserve your stay
            </a>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}

function Spread({
  eyebrow,
  title,
  body,
  to,
  cta,
  image,
  imageAlt,
  reverse,
}: {
  eyebrow: string
  title: string
  body: string
  to: string
  cta: string
  image?: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <Section spacing="default">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <Reveal
          direction="soft"
          className={reverse ? 'md:order-2' : ''}
        >
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="font-display text-h1 leading-[1.1] tracking-[0.01em]">{title}</h2>
          <p className="mt-6 max-w-md text-ink-soft leading-relaxed">{body}</p>
          <Link
            to={to}
            className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em]"
          >
            {cta}
          </Link>
        </Reveal>
        <Reveal direction="soft" delay={150} className={reverse ? 'md:order-1' : ''}>
          <figure className="border border-ink/80">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
