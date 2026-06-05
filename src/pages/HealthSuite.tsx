import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { TREATMENTS, HEALTH_SUITE_INTRO } from '@/data/treatments'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function HealthSuite() {
  const seo = seoFor('/health-suite')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Health Suite', path: '/health-suite' },
        ])}
      />
      <PageHero
        eyebrow="Biohacking"
        title="Health Suite"
        subtitle={HEALTH_SUITE_INTRO}
        image={TREATMENTS[0].image.src}
        imageAlt={TREATMENTS[0].image.alt}
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-16">
            {TREATMENTS.map((t, i) => (
              <Reveal key={t.slug}>
                <article
                  id={t.slug}
                  className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
                    i % 2 === 1 ? 'md:[&>figure]:order-2' : ''
                  }`}
                >
                  <figure className="overflow-hidden border border-line">
                    <img
                      src={t.image.src}
                      alt={t.image.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </figure>
                  <div>
                    <Eyebrow className="mb-3">
                      {t.duration ? t.duration : 'Biohacking'}
                    </Eyebrow>
                    <h2 className="font-display text-h2">{t.title}</h2>
                    <p className="mt-5 text-ink-soft leading-relaxed text-pretty">{t.body}</p>
                    <div className="mt-8">
                      <Button to={t.bookUrl} external>
                        Book Now
                      </Button>
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
