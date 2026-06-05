import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto max-w-[46rem]' : ''
  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-h2 md:text-h1 text-balance">{title}</h2>
      {lead && (
        <p className="mt-6 text-lead text-ink-soft leading-relaxed text-pretty">{lead}</p>
      )}
    </div>
  )
}
