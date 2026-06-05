import { useParams } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { FACILITY_BY_SLUG } from '@/data/facilities'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Gallery } from '@/components/ui/Gallery'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { NotFound } from './NotFound'

export function FacilityPage() {
  const { slug = '' } = useParams()
  const facility = FACILITY_BY_SLUG[slug]
  if (!facility) return <NotFound />

  const path = `/facilities/${facility.slug}`
  return (
    <>
      <Seo
        title={facility.title}
        description={`${facility.title} at GDAS Bali — ${facility.summary}`}
        path={path}
        image={facility.gallery[0]?.src}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Facilities', path: '/facilities' },
          { name: facility.title, path },
        ])}
      />
      <PageHero
        eyebrow="Facilities"
        title={facility.title}
        subtitle={facility.summary}
        image={
          facility.gallery[0]?.src ??
          'https://gdasbali.com/wp-content/uploads/2025/03/GdasLandscape-1024x681.jpg'
        }
        imageAlt={facility.gallery[0]?.alt ?? facility.title}
      />
      <Section>
        <Container width="narrow">
          {facility.hours && (
            <div className="mb-10 border-y border-line py-4">
              <Eyebrow>Opening Hours</Eyebrow>
              <p className="mt-1 font-display text-h3">{facility.hours}</p>
            </div>
          )}
          {facility.body.map((para, i) => (
            <p key={i} className="mb-6 text-ink-soft leading-relaxed text-pretty last:mb-0">
              {para}
            </p>
          ))}
        </Container>
      </Section>
      {facility.gallery.length > 0 && (
        <Section tone="surface">
          <Container>
            <Gallery images={facility.gallery} />
          </Container>
        </Section>
      )}
    </>
  )
}
