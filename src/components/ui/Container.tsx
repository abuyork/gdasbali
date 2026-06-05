import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  /** narrow = prose width; default = content width; wide = near-full. */
  width?: 'narrow' | 'default' | 'wide'
  className?: string
}

const widths = {
  narrow: 'max-w-[46rem]',
  default: 'max-w-6xl',
  wide: 'max-w-[88rem]',
}

export function Container({ children, width = 'default', className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 md:px-10 ${widths[width]} ${className}`}>
      {children}
    </div>
  )
}
