import { Seo } from '@/lib/seo'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        noindex
      />
      <Section className="pt-40">
        <Container width="narrow" className="text-center">
          <p className="eyebrow mb-4">Error 404</p>
          <h1 className="font-display text-display">Lost in the jungle</h1>
          <p className="mt-6 text-ink-soft">
            The page you are looking for has wandered off the path.
          </p>
          <div className="mt-10">
            <Button to="/">Return Home</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
