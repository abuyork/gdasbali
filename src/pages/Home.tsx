import { Seo } from '@/lib/seo'
import { organizationJsonLd } from '@/lib/structuredData'
import { seoFor } from '@/data/seo'
import { HomeAshton } from './home/HomeAshton'

export function Home() {
  const seo = seoFor('/')
  return (
    <>
      <Seo {...seo} jsonLd={organizationJsonLd} path="/" />
      <HomeAshton />
    </>
  )
}
