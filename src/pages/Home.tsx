import { Seo } from '@/lib/seo'
import { organizationJsonLd } from '@/lib/structuredData'
import { seoFor } from '@/data/seo'
import { useDesign } from '@/lib/useDesign'
import { HomeAshton } from './home/HomeAshton'
import { HomeOura } from './home/HomeOura'
import { HomeEvermade } from './home/HomeEvermade'

/**
 * The landing page is structurally different per design (not just re-skinned).
 * The switcher sets data-design on <html>; useDesign() reads it reactively and
 * we render the matching layout. Inner pages remain shared.
 */
export function Home() {
  const design = useDesign()
  const seo = seoFor('/')

  return (
    <>
      <Seo {...seo} jsonLd={organizationJsonLd} path="/" />
      {design === '1' ? (
        <HomeOura />
      ) : design === '3' ? (
        <HomeEvermade />
      ) : (
        <HomeAshton />
      )}
    </>
  )
}
