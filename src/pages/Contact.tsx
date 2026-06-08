import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { CONTACT } from '@/data/site'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function Contact() {
  const seo = seoFor('/contact-us')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact-us' },
        ])}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We would love to help you plan your wellness journey in Ubud."
        image="/wp/2025/03/GdasLandscape-1024x681.jpg"
        imageAlt="GDAS Bali resort entrance amid tropical greenery in Mas, Ubud"
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            {/* Details */}
            <div>
              <Eyebrow className="mb-4">Resort</Eyebrow>
              <address className="space-y-5 not-italic text-lead">
                <p>
                  <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {CONTACT.address}
                  </a>
                </p>
                <p>
                  <a href={CONTACT.phoneHref} className="link-underline">
                    {CONTACT.phone}
                  </a>
                </p>
                <p>
                  <a href={CONTACT.emailHref} className="link-underline">
                    {CONTACT.email}
                  </a>
                </p>
              </address>
            </div>

            {/* Form */}
            <form
              className="grid grid-cols-1 gap-5"
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                window.location.href = `${CONTACT.emailHref}?subject=Website%20Enquiry&body=${encodeURIComponent(
                  `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
                )}`
              }}
            >
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Name</span>
                <input
                  name="name"
                  required
                  className="border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-clay"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-clay"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="border border-line bg-surface px-4 py-3 text-sm outline-none focus:border-clay"
                />
              </label>
              <button type="submit" className="btn btn-solid justify-center">
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
