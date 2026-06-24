import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHero } from '@/lib/hero'
import { BOOKING } from '@/data/site'
import { TREATMENTS } from '@/data/treatments'
import { RETREAT_PROGRAMS } from '@/data/retreats'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

const HERO_IMG = '/wp/2025/03/GdasLandscape-1024x681.jpg'
const TAGS = [
  'WELLNESS',
  'VEGAN',
  'YOGA',
  'BIOHACKING',
  'RETREATS',
  'UBUD',
  'HEALING',
  'NYEPI',
]

/**
 * DESIGN 3 — Evermade "zine": maroon stage with an oversized serif watermark
 * behind a framed photo, a scrolling tag marquee, a 3-column tag-card grid, an
 * oversized centered statement, and a maroon retreat band. Snappy pop motion.
 */
export function HomeEvermade() {
  const { setHasHero } = useHero()
  useLayoutEffect(() => {
    setHasHero(true)
    return () => setHasHero(false)
  }, [setHasHero])

  return (
    <>
      {/* Hero — maroon poster with giant watermark type behind a framed photo */}
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-jungle pt-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[18%] select-none text-center font-display leading-none text-clay/20"
          style={{ fontSize: 'clamp(5rem, 22vw, 18rem)' }}
        >
          GDAS BALI
        </span>
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="eyebrow mb-5 text-clay">Holistic wellness resort · Est. Ubud</p>
          <div className="mx-auto mb-7 w-full max-w-md overflow-hidden rounded-[var(--radius-card)] border-2 border-clay">
            <img
              src={HERO_IMG}
              alt="GDAS Bali resort among the rice paddies of Ubud"
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <h1 className="font-display text-[3rem] leading-[1] text-white md:text-display">
            GDAS <em>Bali</em>
          </h1>
          <div className="mt-8 flex justify-center gap-3">
            <Button to={BOOKING.engine} external variant="clay">
              Book now
            </Button>
            <Button to="/about-us" variant="ondark">
              Our story →
            </Button>
          </div>
        </div>
      </header>

      {/* Tag marquee */}
      <div className="overflow-hidden border-y border-line bg-surface py-4">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...TAGS, ...TAGS].map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm uppercase tracking-[0.04em] text-ink"
            >
              <span className="text-clay">#</span> {t}
              <span className="ml-8 text-clay">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3-column zine cards — treatments with mono tags */}
      <Section>
        <Container>
          <Reveal direction="pop">
            <p className="eyebrow mb-3">The Biohacking Lab</p>
            <h2 className="font-display text-h1 md:text-[3.25rem]">
              Science-backed therapies, zine-bright.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.slice(0, 6).map((t, i) => (
              <Reveal key={t.slug} direction="pop" delay={(i % 3) * 110}>
                <article className="h-full overflow-hidden rounded-[var(--radius-card)] border border-ink/15">
                  <img
                    src={t.image.src}
                    alt={t.image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Tag>{t.duration ?? 'Therapy'}</Tag>
                      <Tag>Recovery</Tag>
                    </div>
                    <h3 className="font-display text-h3">{t.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{t.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Oversized centered statement */}
      <Section tone="surface" spacing="default">
        <Container width="narrow" className="text-center">
          <Reveal direction="pop">
            <p className="eyebrow mb-6">A sanctuary of wellness</p>
            <p className="font-display text-[2.25rem] leading-[1.12] text-balance md:text-[3.25rem]">
              Learn to let go and release. Vibrate at higher frequencies for the wellness of
              mind, body, and spirit.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Maroon retreat band — pill-bordered list */}
      <Section tone="jungle" spacing="default">
        <Container>
          <Reveal direction="pop">
            <p className="eyebrow mb-3 text-clay">Signature retreats</p>
            <h2 className="font-display text-h1 text-white">Choose your journey</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {RETREAT_PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} direction="pop" delay={i * 80}>
                <Link
                  to={`/retreat/signature/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-clay px-5 py-2.5 font-mono text-sm uppercase tracking-[0.04em] text-clay transition-colors hover:bg-clay hover:text-white"
                >
                  {p.title} →
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Button to="/retreat/signature" variant="ondark">
              All retreats
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-clay px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.04em] text-clay">
      {children}
    </span>
  )
}
