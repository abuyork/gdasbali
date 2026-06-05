import { Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { RETREAT_PROGRAMS, SIGNATURE_INTRO } from '@/data/retreats'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function SignatureRetreat() {
  const seo = seoFor('/retreat/signature')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Signature Retreat', path: '/retreat/signature' },
        ])}
      />
      <PageHero
        eyebrow="GDAS Bali"
        title="Signature Retreat"
        subtitle={SIGNATURE_INTRO}
        image="https://gdasbali.com/wp-content/uploads/2025/03/GdasLandscape-1024x681.jpg"
        imageAlt="Tranquil retreat setting at GDAS Bali surrounded by jungle"
      />
      <Section>
        <Container>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {RETREAT_PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <li>
                <Link
                  to={`/retreat/signature/${p.slug}`}
                  className="group flex h-full flex-col border border-line bg-surface p-8 transition-colors duration-300 hover:bg-canvas"
                >
                  <h2 className="font-display text-h2">{p.title}</h2>
                  {p.duration && (
                    <p className="mt-2 text-xs uppercase tracking-wider text-clay">
                      {p.duration}
                    </p>
                  )}
                  <p className="mt-4 flex-1 text-ink-soft text-pretty">{p.intro}</p>
                  <span className="link-underline mt-6 inline-block self-start text-sm text-clay">
                    Discover More
                  </span>
                </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
