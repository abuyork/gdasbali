import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const COMMITMENTS = [
  {
    heading: 'Our Social Commitment',
    intro:
      'We always work to improve and identify our business impacts on employees, contractors in our value chain, customers, and the local community.',
    items: [
      'We always reserve 4 complimentary mats in any of our yoga classes to reach those in our local community who otherwise would not be able to attend.',
      'We prioritize local caterers for employee lunches, taking intentional steps to shrink our carbon footprint, embracing sustainability.',
      'We deliver essential food packages to local orphanages every six months, weaving a tapestry of support for those who need it most.',
      'We regularly contribute to local communities as they carry out social and religious activities, fostering connections.',
    ],
  },
  {
    heading: 'Our Economic Commitment',
    intro:
      'To build the economy of Bali post-pandemic, and promote fair trade, fair wages, and equal opportunities.',
    items: [
      "We prioritize hiring locally with fair wages, treating our team as an extended family guided by the principles of 'People-Service-Rewards.'",
      'We proudly employ individuals with disabilities from local orphanages, creating a workplace that champions compassion and opportunity.',
      'Empowering Balinese women is at our core. Through English and financial courses, we provide equal opportunities, contributing to the growth and strength of our community.',
    ],
  },
  {
    heading: 'Our Environmental Commitment',
    intro: '',
    items: [
      'Reduce plastic waste: reusable shampoo, conditioner, and soap dispensers. We also provide glass bottles and tote bags in each room.',
      'Our in-room amenities are maximizing the use of natural products and are made with eco-friendly materials (bamboo, wood, stones, rattan, pandan leaves, and organic herbs aromatherapy).',
      'We plant rare herbal Balinese plants in the resort and The Bali Eden.',
      'We also work with Banjar Kumbuh to plant medicinal trees and herbs around the village.',
    ],
  },
]

export function About() {
  const seo = seoFor('/about-us')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' },
        ])}
      />
      <PageHero
        eyebrow="About GDAS Bali"
        title="Health leads to happiness."
        image="/wp/2025/03/GdasLandscape-1024x681.jpg"
        imageAlt="The GDAS Bali landscape surrounded by jungle and rice terraces in Mas, Ubud"
      />

      <Section>
        <Container width="narrow">
          <p className="mb-6 text-ink-soft leading-relaxed text-pretty">
            Gdas Bali health and wellness resort is built by, and for, those who wish to
            experience the finest of Bali. It is inspired by one of our founders and investors;
            Russell Simmons's healthy vegetarian lifestyle and is often called Bali as a
            Disneyland for yoga and vegan food. He wants to develop a space where a healthy
            lifestyle is accessible and based on respected Balinese ancient literature; Usadha
            Bali's lontar.
          </p>
          <p className="text-ink-soft leading-relaxed text-pretty">
            Gdas stands for govinda das, meaning "a servant of the divine". Being a servant means
            being a teacher, sharing what we know and love with the world. We believe that we are
            all leaders and we must work together to make positive change in the world but it is
            only when we take care of ourselves first and foremost that we have more to offer to
            the world around us too. We lead with the yogic philosophy of Dharma — the highest
            duty of every business and every individual to take care of the universe we all live
            in.
          </p>
        </Container>
      </Section>

      <Section tone="jungle">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-clay mb-4">Vision</p>
              <p className="font-display text-h3 leading-snug">
                To be a premier luxury destination in the world that leads to wellbeing of our
                discerning guests and communities.
              </p>
            </div>
            <div>
              <p className="eyebrow text-clay mb-4">Mission</p>
              <p className="font-display text-h3 leading-snug">
                Delivering unique and personalized experience, through holistic wellness and
                contributing to sustainability.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Corporate Social Responsibility"
            title="We are servants of the divine."
            lead="In Gdas we recognize the practice of yoga goes beyond the mat — it is a daily practice in all things we do and a commitment to our people, community, and planet."
          />
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
            {COMMITMENTS.map((c) => (
              <div key={c.heading}>
                <h3 className="border-b border-line pb-3 font-display text-h3">{c.heading}</h3>
                {c.intro && <p className="mt-4 text-sm text-ink-soft">{c.intro}</p>}
                <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                  {c.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
