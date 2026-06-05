import { Seo } from '@/lib/seo'
import { CONTENT_PAGES } from '@/data/contentPages'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { NotFound } from './NotFound'

/** Generic renderer for authored secondary pages, keyed by route path. */
export function ContentPage({ pageKey }: { pageKey: string }) {
  const data = CONTENT_PAGES[pageKey]
  if (!data) return <NotFound />

  return (
    <>
      <Seo
        title={data.seo.title}
        description={data.seo.description}
        path={pageKey}
        image={data.image}
        noindex={data.noindex}
      />
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
        imageAlt={data.imageAlt}
      />
      <Section>
        <Container width="narrow">
          {data.intro?.map((para, i) => (
            <p key={i} className="mb-6 text-ink-soft leading-relaxed text-pretty last:mb-0">
              {para}
            </p>
          ))}

          {data.sections?.map((section, i) => (
            <div key={i} className="mt-12">
              {section.heading && (
                <h2 className="font-display text-h2">{section.heading}</h2>
              )}
              {section.body?.map((para, j) => (
                <p key={j} className="mt-5 text-ink-soft leading-relaxed text-pretty">
                  {para}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
                  {section.bullets.map((item) => (
                    <li key={item} className="border-b border-line/60 pb-2.5">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {data.cta && (
            <div className="mt-12">
              <Button to={data.cta.to} external variant="solid">
                {data.cta.label}
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
