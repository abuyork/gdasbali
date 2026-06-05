import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  /** Surface tone. */
  tone?: 'canvas' | 'surface' | 'jungle'
  /** Vertical rhythm. */
  spacing?: 'default' | 'tight'
  id?: string
  className?: string
}

const tones = {
  canvas: 'bg-canvas text-ink',
  surface: 'bg-surface text-ink',
  jungle: 'bg-jungle text-canvas',
}

export function Section({
  children,
  tone = 'canvas',
  spacing = 'default',
  id,
  className = '',
}: SectionProps) {
  const pad = spacing === 'tight' ? 'py-16 md:py-20' : 'py-20 md:py-section'
  return (
    <section id={id} className={`${tones[tone]} ${pad} ${className}`}>
      {children}
    </section>
  )
}
