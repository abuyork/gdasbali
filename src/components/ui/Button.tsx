import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  /** Internal route or external URL. */
  to: string
  external?: boolean
  variant?: 'outline' | 'solid' | 'ondark' | 'clay'
  className?: string
}

const variants = {
  outline: 'btn',
  solid: 'btn btn-solid',
  ondark: 'btn btn-ondark',
  clay: 'btn btn-clay',
}

export function Button({
  children,
  to,
  external,
  variant = 'outline',
  className = '',
}: ButtonProps) {
  const cls = `${variants[variant]} ${className}`
  const isExternal = external || /^https?:|^tel:|^mailto:/.test(to)

  if (isExternal) {
    return (
      <a href={to} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  )
}
