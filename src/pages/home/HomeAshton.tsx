import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHero } from '@/lib/hero'
import { BOOKING } from '@/data/site'
import { ROOMS } from '@/data/rooms'
import { TREATMENTS } from '@/data/treatments'
import { YouTubeBackground } from '@/components/ui/YouTubeBackground'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

const HERO_VIDEO_ID = '2e4uvropX_o'

const STATS = [
  { n: '7', label: 'Biohacking therapies' },
  { n: '100%', label: 'Plant-based cuisine' },
  { n: '2', label: 'Daily mindful movement' },
  { n: '∞', label: 'Healing energy of Ubud' },
]

const BENEFITS = [
  'Daily mindful movement (yoga and meditation)',
  'Daily plant-based breakfast',
  'Daily afternoon tea',
  'Complimentary access to The Bali Eden',
  'Unlimited gym access',
]

// Vertical UGC review reels. Posters are placeholders — drop real vertical
// .mp4 files in `videoSrc` to make them play (see the <video> branch below).
const REVIEW_REELS = [
  {
    poster: '/wp/2023/02/grand-deluxe3.jpg',
    handle: '@wanderwell',
    caption: 'A week that reset everything',
    videoSrc: '',
  },
  {
    poster: '/wp/2023/11/prestige-pool-villas-13.jpg',
    handle: '@thequietescape',
    caption: 'Morning yoga over the paddy',
    videoSrc: '',
  },
  {
    poster: '/wp/2023/02/home-dining.jpg',
    handle: '@plantbased.travels',
    caption: 'Vegan soul food at Tangi',
    videoSrc: '',
  },
]

// Placeholder testimonials — replace with real guest reviews before launch.
const TESTIMONIALS = [
  {
    quote:
      'Seven days at GDAS reset something I didn’t know was broken. I left lighter — in body and in mind.',
    name: 'Amara L.',
    detail: 'Signature Retreat · Singapore',
  },
  {
    quote:
      'The most thoughtful wellness experience I’ve had in Bali. Every meal, every session, every detail considered.',
    name: 'Daniel R.',
    detail: 'Grand Deluxe · Sydney',
  },
  {
    quote:
      'Ubud’s healing energy is real here. I came for the yoga and stayed for the stillness.',
    name: 'Priya M.',
    detail: 'Prestige Pool Villa · London',
  },
]

/**
 * DESIGN 2 — Ashton "monograph", expanded per the manager's brief:
 * hero → statement → two uncropped room spreads → health-features tab strip →
 * stats → reviews (reels + testimonials) → direct-booking CTA.
 * Motion stays slow and opacity-only.
 */
export function HomeAshton() {
  const { setHasHero } = useHero()
  useLayoutEffect(() => {
    setHasHero(true)
    return () => setHasHero(false)
  }, [setHasHero])

  return (
    <>
      {/* Hero — imagery + one line of type */}
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

      {/* Editorial statement */}
      <Section>
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

      {/* Room spread 1 — Grand Deluxe (text left, photo right, uncropped) */}
      <RoomSpread
        eyebrow="Accommodation"
        title="Hand-carved by the artisans of Mas"
        body="Pillow-top king beds framed by hand-carved wood, sultry green-marble vanities, and outdoor terraces that open onto the paddy. Each building is named for a Balinese healing herb."
        to={`/accommodations/${ROOMS[0].slug}`}
        cta="View the rooms"
        image={ROOMS[0].gallery[0]?.src}
        imageAlt={ROOMS[0].gallery[0]?.alt ?? 'Grand Deluxe room'}
      />

      {/* Room spread 2 — Prestige Pool Villa (photo left, text right, uncropped) */}
      <RoomSpread
        reverse
        eyebrow="Accommodation"
        title="A private pool, framed by paddy"
        body="The Prestige Pool Villas wrap glass, wood and stone around a private pool, opening to uninterrupted garden and rice-field views. Space to breathe, all your own."
        to={`/accommodations/${ROOMS[1].slug}`}
        cta="View the villas"
        image={ROOMS[1].gallery[0]?.src}
        imageAlt={ROOMS[1].gallery[0]?.alt ?? 'Prestige Pool Villa'}
      />

      {/* Health features — interactive tab strip, Ashton-styled */}
      <HealthFeatures />

      {/* Stats — large serif numerals on parchment */}
      <Section tone="surface" spacing="default">
        <Container>
          <Reveal direction="soft">
            <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 text-center ${
                    i > 0 ? 'md:border-l md:border-line' : ''
                  }`}
                >
                  <p className="font-display text-[3.5rem] leading-none tracking-[0.02em] text-ink md:text-[4.5rem]">
                    {s.n}
                  </p>
                  <p className="eyebrow mt-4">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Reviews — vertical UGC reels + text testimonials */}
      <Section spacing="default">
        <Container>
          <Reveal direction="soft">
            <p className="eyebrow mb-4 text-center">Reviews</p>
            <h2 className="text-center font-display text-h1 tracking-[0.01em]">
              Stories from our guests
            </h2>
          </Reveal>

          {/* 3 vertical reels */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {REVIEW_REELS.map((r, i) => (
              <Reveal key={r.handle} direction="soft" delay={i * 120}>
                <figure className="group relative overflow-hidden border border-ink/80">
                  {r.videoSrc ? (
                    <video
                      className="aspect-[9/16] w-full object-cover"
                      src={r.videoSrc}
                      poster={r.poster}
                      muted
                      loop
                      playsInline
                      controls
                    />
                  ) : (
                    <>
                      <img
                        src={r.poster}
                        alt={`${r.caption} — guest reel`}
                        loading="lazy"
                        className="aspect-[9/16] w-full object-cover"
                      />
                      {/* play affordance (placeholder until real reels are added) */}
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                          ▶
                        </span>
                      </span>
                    </>
                  )}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-white">
                    <p className="text-sm">{r.caption}</p>
                    <p className="text-xs text-white/70">{r.handle}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* 3 text testimonials */}
          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} direction="soft" delay={i * 120} className="bg-canvas">
                <blockquote className="flex h-full flex-col justify-between p-8">
                  <p className="font-display text-h3 leading-snug text-ink">“{t.quote}”</p>
                  <footer className="mt-8">
                    <p className="text-sm text-ink">{t.name}</p>
                    <p className="eyebrow mt-1">{t.detail}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Direct booking benefits — full-bleed dark CTA (old-site section) */}
      <header className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <img
          src={ROOMS[0].gallery[0]?.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        <Container width="narrow" className="relative z-10 py-20 text-center text-white">
          <Reveal direction="soft">
            <h2 className="font-display text-h1 tracking-[0.06em] text-white">
              Direct Booking Benefits
            </h2>
            <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-white/85">
              {BENEFITS.join('  |  ')}
            </p>
            <p className="mt-6 text-sm italic text-white/60">
              (*terms and conditions apply)
            </p>
            <div className="mt-10">
              <Button to={BOOKING.direct} external variant="ondark">
                Book Now
              </Button>
            </div>
          </Reveal>
        </Container>
      </header>
    </>
  )
}

/* ---- Room spread: uncropped photo beside an editorial text column ---- */
function RoomSpread({
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
        <Reveal direction="soft" className={reverse ? 'md:order-2' : ''}>
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
          {/* Photo shown at natural aspect — never cropped */}
          <figure className="border border-ink/80">
            <img src={image} alt={imageAlt} loading="lazy" className="h-auto w-full" />
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}

/* ---- Health features tab strip (Ashton adaptation of the Oura block) ---- */
function HealthFeatures() {
  const [tab, setTab] = useState(0)
  const active = TREATMENTS[tab]
  return (
    <Section>
      <Container>
        <Reveal direction="soft">
          <p className="eyebrow mb-3">The Biohacking Lab</p>
          <h2 className="font-display text-h1 tracking-[0.01em]">Health features</h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
          {TREATMENTS.slice(0, 5).map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => setTab(i)}
              className={`-mb-px border-b-2 pb-3 text-sm tracking-[0.04em] transition-colors ${
                i === tab
                  ? 'border-ink text-ink'
                  : 'border-transparent text-ink-soft hover:text-ink'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <figure key={active.slug} className="animate-fade-in border border-ink/80">
            <img
              src={active.image.src}
              alt={active.image.alt}
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
          <div key={active.body}>
            <h3 className="font-display text-h2 tracking-[0.01em]">{active.title}</h3>
            {active.duration && <p className="eyebrow mt-3">{active.duration}</p>}
            <p className="mt-5 max-w-md text-ink-soft leading-relaxed">{active.body}</p>
            <Link
              to="/health-suite"
              className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em]"
            >
              All therapies
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
