import { useParams, Link } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { OFFERS, OFFER_BY_SLUG, OFFERS_INTRO } from '@/data/offers'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { NotFound } from './NotFound'

const HERO = 'https://gdasbali.com/wp-content/uploads/2025/03/GdasLandscape-1024x681.jpg'

export function Offers() {
  const { slug } = useParams()
  if (slug) {
    const offer = OFFER_BY_SLUG[slug]
    if (!offer) return <NotFound />
    const path = `/offers/${offer.slug}`
    return (
      <>
        <Seo
          title={offer.title}
          description={offer.summary}
          path={path}
          jsonLd={breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Offers', path: '/offers' },
            { name: offer.title, path },
          ])}
        />
        <PageHero
          eyebrow="Special Offer"
          title={offer.title}
          subtitle={offer.highlight}
          image={HERO}
          imageAlt={`${offer.title} — wellness offer at GDAS Bali`}
        />
        <Section>
          <Container width="narrow">
            <p className="text-ink-soft leading-relaxed text-pretty">{offer.summary}</p>
            {offer.inclusions.length > 0 && (
              <>
                <h2 className="mt-10 font-display text-h2">What's Included</h2>
                <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                  {offer.inclusions.map((item) => (
                    <li key={item} className="border-b border-line/60 pb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {offer.promoCode && (
              <p className="mt-8 inline-block border border-dashed border-clay px-5 py-3 font-display text-h3 text-clay">
                Promo code: {offer.promoCode}
              </p>
            )}
            {offer.terms && <p className="mt-6 text-xs text-ink-soft">{offer.terms}</p>}
            <div className="mt-10">
              <Button to={offer.bookUrl} external variant="solid">
                Book This Offer
              </Button>
            </div>
          </Container>
        </Section>
      </>
    )
  }

  const seo = seoFor('/offers')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Offers', path: '/offers' },
        ])}
      />
      <PageHero
        eyebrow="Save More"
        title="Offers & Packages"
        subtitle={OFFERS_INTRO}
        image={HERO}
        imageAlt="GDAS Bali resort grounds — wellness offers and packages"
      />
      <Section>
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.slug} delay={(i % 2) * 100}>
                <li>
                <Link
                  to={`/offers/${offer.slug}`}
                  className="group flex h-full flex-col border border-line bg-surface p-8 transition-colors duration-300 hover:bg-canvas"
                >
                  <Eyebrow className="mb-3">{offer.highlight}</Eyebrow>
                  <h2 className="font-display text-h2">{offer.title}</h2>
                  <p className="mt-4 flex-1 text-ink-soft text-pretty">{offer.summary}</p>
                  <span className="link-underline mt-6 inline-block self-start text-sm text-clay">
                    View Offer
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
