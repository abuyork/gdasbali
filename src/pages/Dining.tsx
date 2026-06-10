import { Seo } from '@/lib/seo'
import { seoFor } from '@/data/seo'
import { breadcrumbJsonLd } from '@/lib/structuredData'
import { PageHero } from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const CHOPE =
  'https://www.chope.co/bali-restaurants/restaurant/tangi-restaurant-gdas-bali-healt-and-resort-wellness-resort-ubud?source=chope.com.sg'
const MENU = 'https://drive.google.com/file/d/1MOXxfqO-WxAVCiUzjGZdM-duzZ7llSsu/view?usp=sharing'

const CHEFS = [
  {
    role: 'Executive Chef',
    name: 'Chef Gede Susila Yadnya',
    image: '/wp/2023/02/chef-Gede-Susila-Yadnya.jpg',
    alt: 'Portrait of Executive Chef Gede Susila Yadnya of Tangi Restaurant',
    body: 'Chef Gede Susila Yadnya hails from Singaraja region in North Bali. He boasts a rich culinary journey spanning over 25 years, taking him to Paris, Cairo, Seychelles, and back to his homeland, Indonesia. His illustrious career includes Banyan Tree Hotels and Resort Bintan Island, Angsana Resort & Spa Bintan Island, Hilton Resort & Spa Maldives, Lemuria Resort Praline Seychelles, Kamala Asian Bar and Dining Cairo, Lilin Indonesian Restaurant Potato Head Beach Club, and Clean Canteen Seminyak. Then, he decided to express himself in a new world of plant-based food by joining Gdas Bali Health and Wellness Resort.',
  },
  {
    role: 'Chef de Cuisine',
    name: 'Ida Bagus Putu Wisaskara',
    image: '/wp/2023/02/chef-Ida-Bagus-Putu-Wisaskara.jpg',
    alt: 'Portrait of Chef de Cuisine Ida Bagus Putu Wisaskara of Tangi Restaurant',
    body: 'Ida Bagus Putu Wisaskara has six years of experience in the FnB industry and has been trained since he was young. For him, cooking is not simply serving good food but taking heart and energy to make an unforgettable taste of the food. Under Chef Gede’s guide, he’s ready to conquer the world of vegan cuisine.',
  },
]

export function Dining() {
  const seo = seoFor('/dining')
  return (
    <>
      <Seo
        {...seo}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Dining', path: '/dining' },
        ])}
      />
      <PageHero
        eyebrow="Dining"
        title="Tangi Restaurant"
        subtitle="World-class vegan soul food that nourishes both body and spirit, overlooking the lush jungle of Mas, Ubud."
        image="/wp/2023/02/tangi-restaurant-lumpia-matah.jpg"
        imageAlt="Lumpia matah, a plant-based dish served at Tangi Restaurant, GDAS Bali"
      >
        <Button to={CHOPE} external variant="ondark">
          Book a Table
        </Button>
      </PageHero>

      <Section>
        <Container width="narrow">
          <p className="mb-6 text-ink-soft leading-relaxed text-pretty">
            Set in our tropical dining hall overlooking Mas – Ubud's lush jungle, Tangi
            Restaurant offers world-class vegan soul food that nourishes both body and spirit.
            Derived from a traditional medicinal herb in Usadha, Tangi, with its unique blend of
            organic compounds and nutrients, adds an intriguing touch to our cuisine, delivering
            health benefits in every delectable bite.
          </p>
          <p className="mb-6 text-ink-soft leading-relaxed text-pretty">
            Tangi was chosen to pay homage to the historical event happening in Mas, where it is
            said that Dhang Hyang Niratha, a great saint of Balinese Hinduism, planted a sacred
            stick in Taman Pule temple, which flourished into the golden-flowered Crepe Myrtle
            tree, inspiring the village's name, 'Mas.'
          </p>
          <p className="text-ink-soft leading-relaxed text-pretty">
            Thus, our locally sourced, carefully crafted dishes not only promise an unforgettable
            experience through authentic plant-based dining, but also aim to become a restaurant
            where everyone can reconnect themselves by indulging in food provided by nature.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={MENU} external>
              View Our Menu
            </Button>
            <Button to={CHOPE} external variant="solid">
              Book Now
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container width="narrow" className="text-center">
          <SectionHeading
            align="center"
            title="Our menu represents our past, our present, and our future."
          />
          <p className="mt-8 text-ink-soft leading-relaxed text-pretty">
            Indulge without feeling guilty with our healthy and mouth-watering dishes. A dining
            concept that integrates healthy vegan recipes that represent the long-standing
            tradition of Balinese from the past, present, and future. We pride ourselves on using
            locally sourced produce of herbs and vegetarian mostly from our garden in a
            combination of imported ingredients. Included in the dining experience such as loloh,
            jamu, herbal teas, piduh salad allows you to experience the concept of the finest of
            Bali, like being transported back to how Balinese ancestors lived a healthy
            lifestyle.
          </p>
        </Container>
      </Section>

      {/* Spice of Eden — nav links here (/dining#spice-of-eden) until it gets its own page */}
      <Section id="spice-of-eden" tone="jungle" spacing="tight">
        <Container width="narrow" className="text-center">
          <p className="eyebrow mb-4">Coming to GDAS Bali</p>
          <h2 className="font-display text-h2">Spice of Eden</h2>
          <p className="mx-auto mt-5 max-w-xl text-canvas/85 text-pretty">
            A new dining experience is taking shape at the resort. Menu and opening details
            will be announced soon — contact our team to be the first to know.
          </p>
          <div className="mt-8">
            <Button to="mailto:hello@gdasbali.com" external variant="ondark">
              Ask About Spice of Eden
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-12 text-center font-display text-h2">Meet Our Chefs</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {CHEFS.map((chef) => (
              <article key={chef.name} className="border border-line bg-surface">
                <img
                  src={chef.image}
                  alt={chef.alt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-8">
                  <p className="eyebrow mb-2">{chef.role}</p>
                  <h3 className="font-display text-h3">{chef.name}</h3>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">{chef.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
