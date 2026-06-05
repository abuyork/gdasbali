import { Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { FACILITIES } from '@/data/facilities'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

export function Facilities() {
  const seo = seoFor('/facilities')
  const hero = FACILITIES.find((f) => f.gallery.length > 0)?.gallery[0]
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Facilities', path: '/facilities' },
        ])}
      />
      <PageHero
        eyebrow="The Resort"
        title="Facilities"
        subtitle="Spaces to move, rest, and reconnect — pools, yoga shalas, saunas, a library and more, woven through the jungle of Mas."
        image={hero?.src ?? ''}
        imageAlt={hero?.alt ?? 'A wellness facility at GDAS Bali'}
      />
      <Section>
        <Container>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.slug} delay={(i % 3) * 90}>
                <li>
                <Link
                  to={`/facilities/${f.slug}`}
                  className="group flex h-full flex-col border border-line bg-surface"
                >
                  {f.gallery[0] ? (
                    <img
                      src={f.gallery[0].src}
                      alt={f.gallery[0].alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-jungle/5">
                      <span className="font-display text-h2 text-jungle/30">
                        {f.title}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-h3">{f.title}</h2>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{f.summary}</p>
                    {f.hours && (
                      <p className="mt-4 text-xs uppercase tracking-wider text-clay">
                        {f.hours}
                      </p>
                    )}
                  </div>
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
