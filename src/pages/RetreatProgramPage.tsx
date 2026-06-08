import { useParams, Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { PROGRAM_BY_SLUG } from '@/data/retreats'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { NotFound } from './NotFound'

export function RetreatProgramPage() {
  const { slug = '' } = useParams()
  const program = PROGRAM_BY_SLUG[slug]
  if (!program) return <NotFound />

  const path = `/retreat/signature/${program.slug}`
  return (
    <>
      <Seo
        title={`${program.title} Retreat`}
        description={`${program.title} — ${program.intro}`}
        path={path}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Signature Retreat', path: '/retreat/signature' },
          { name: program.title, path },
        ])}
      />
      <PageHero
        eyebrow="Signature Retreat"
        title={program.title}
        subtitle={program.intro}
        image="/wp/2025/03/GdasLandscape-1024x681.jpg"
        imageAlt={`${program.title} signature retreat at GDAS Bali`}
      />
      <Section>
        <Container width="narrow">
          {program.duration && (
            <p className="mb-10 border-y border-line py-4 text-center text-sm uppercase tracking-wider text-clay">
              {program.duration}
            </p>
          )}
          <h2 className="font-display text-h2">What's Included</h2>
          <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {program.inclusions.map((item) => (
              <li
                key={item}
                className="border-b border-line/60 pb-3 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button to={program.bookUrl} external variant="solid">
              Enquire Now
            </Button>
            <Link to="/retreat/signature" className="btn">
              All Retreats
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
