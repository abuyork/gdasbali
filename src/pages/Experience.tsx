import { Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { CONTENT_PAGES } from '@/data/contentPages'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const EXPERIENCES = [
  '/experience/wedding',
  '/experience/vip-concierge',
  '/experience/nyepi',
].map((path) => ({ path, ...CONTENT_PAGES[path] }))

export function Experience() {
  const seo = seoFor('/experience')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Experience', path: '/experience' },
        ])}
      />
      <PageHero
        eyebrow="Experience"
        title="Experiences"
        subtitle="Beyond the stay — weddings, bespoke concierge journeys and the sacred stillness of Nyepi."
        image="https://gdasbali.com/wp-content/uploads/2025/03/GdasLandscape-1024x681.jpg"
        imageAlt="Guests sharing a cultural experience at GDAS Bali in Ubud"
      />
      <Section>
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={exp.path} delay={i * 100}>
                <li>
                  <Link
                    to={exp.path}
                    className="group flex h-full flex-col border border-line bg-surface"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.imageAlt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h2 className="font-display text-h3">{exp.title}</h2>
                      <p className="mt-3 flex-1 text-sm text-ink-soft text-pretty">
                        {exp.subtitle}
                      </p>
                      <span className="link-underline mt-5 inline-block self-start text-sm text-clay">
                        Discover
                      </span>
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
