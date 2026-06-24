import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHero } from '@/lib/hero'
import { BOOKING } from '@/data/site'
import { ROOMS } from '@/data/rooms'
import { TREATMENTS } from '@/data/treatments'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { BookingWidget } from '@/components/layout/BookingWidget'

const HERO_IMG = '/wp/2025/03/GdasLandscape-1024x681.jpg'

const STATS = [
  { n: '7', label: 'Biohacking therapies' },
  { n: '100%', label: 'Plant-based cuisine' },
  { n: '2', label: 'Daily mindful movement' },
  { n: '∞', label: 'Healing energy of Ubud' },
]

/**
 * DESIGN 1 — Oura "product site": left-aligned hero with an overlay teaser card,
 * a check-availability bar, full-bleed product cards with overlay copy + ghost
 * pills, an interactive feature tab strip, and a stats band. Smooth fade-up.
 */
export function HomeOura() {
  const { setHasHero } = useHero()
  useLayoutEffect(() => {
    setHasHero(true)
    return () => setHasHero(false)
  }, [setHasHero])

  const [tab, setTab] = useState(0)
  const active = TREATMENTS[tab]
  const room = ROOMS[0]

  return (
    <>
      {/* Hero — left-aligned editorial headline + overlay teaser card */}
      <header className="relative flex min-h-[90vh] items-end overflow-hidden bg-jungle">
        <img
          src={HERO_IMG}
          alt="GDAS Bali resort among the rice paddies of Ubud"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30"
          aria-hidden="true"
        />
        <div className="animate-fade-up relative z-10 mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-6 pb-16 md:flex-row md:items-end md:justify-between md:px-10">
          <div className="max-w-2xl text-white">
            <p className="eyebrow mb-4 text-white/80">Holistic wellness · Ubud, Bali</p>
            <h1 className="font-display text-[3rem] leading-[1.02] md:text-display">
              Made for <em>well-being</em>.
            </h1>
            <p className="mt-6 max-w-md text-lead text-white/85">
              A health and wellness resort in the heart of Bali's cultural and spiritual hub.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to={BOOKING.engine} external variant="solid">
                Book your stay
              </Button>
              <Button to="/about-us" variant="ondark">
                Our story
              </Button>
            </div>
          </div>
          {/* Overlay teaser card */}
          <div className="w-full max-w-xs rounded-[var(--radius-card)] border border-white/15 bg-ink/70 p-5 text-white backdrop-blur">
            <p className="eyebrow text-white/70">Now welcoming guests</p>
            <p className="mt-2 font-display text-h3">{room.title}</p>
            <p className="mt-1 text-sm text-white/70">Hand-carved suites from the village of Mas.</p>
            <Link
              to={`/accommodations/${room.slug}`}
              className="link-underline mt-4 inline-block text-sm"
            >
              Explore →
            </Link>
          </div>
        </div>
      </header>

      <BookingWidget />

      {/* Product card grid — full-bleed photo cards with overlay copy */}
      <Section>
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">Stay with us</p>
            <h2 className="font-display text-h1">Accommodation</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROOMS.map((r, i) => (
              <Reveal key={r.slug} delay={i * 120}>
                <Link
                  to={`/accommodations/${r.slug}`}
                  className="group relative block overflow-hidden rounded-[var(--radius-card)]"
                >
                  <img
                    src={r.gallery[0]?.src}
                    alt={r.gallery[0]?.alt ?? r.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:aspect-[16/10]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 text-white">
                    <div>
                      <h3 className="font-display text-h2">{r.title}</h3>
                      <p className="mt-1 max-w-xs text-sm text-white/80">{r.summary}</p>
                    </div>
                    <span className="btn btn-ondark shrink-0">Explore</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature tab strip — Oura signature interaction */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <p className="eyebrow mb-3">The Biohacking Lab</p>
            <h2 className="font-display text-h1">Health features</h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
            {TREATMENTS.slice(0, 5).map((t, i) => (
              <button
                key={t.slug}
                type="button"
                onClick={() => setTab(i)}
                className={`-mb-px border-b-2 pb-3 text-sm transition-colors ${
                  i === tab
                    ? 'border-ink text-ink'
                    : 'border-transparent text-ink-soft hover:text-ink'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <figure
              key={active.slug}
              className="animate-fade-in overflow-hidden rounded-[var(--radius-card)] border border-line"
            >
              <img
                src={active.image.src}
                alt={active.image.alt}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div key={active.body}>
              <h3 className="font-display text-h2">{active.title}</h3>
              {active.duration && (
                <p className="eyebrow mt-2">{active.duration}</p>
              )}
              <p className="mt-5 text-ink-soft leading-relaxed">{active.body}</p>
              <div className="mt-8">
                <Button to="/health-suite">All therapies</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats band */}
      <Section tone="jungle" spacing="tight">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="text-center text-white">
                  <p className="font-display text-display leading-none">{s.n}</p>
                  <p className="mt-3 text-sm text-white/70">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
