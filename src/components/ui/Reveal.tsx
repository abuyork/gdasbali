import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms. */
  delay?: number
  /** Entrance direction. */
  direction?: Direction
  className?: string
}

const hidden: Record<Direction, string> = {
  up: 'translate-y-10 opacity-0',
  left: '-translate-x-10 opacity-0',
  right: 'translate-x-10 opacity-0',
  none: 'opacity-0',
}

/**
 * Fades + moves its children into view on scroll (IntersectionObserver).
 * Respects prefers-reduced-motion by rendering immediately.
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[800ms] ease-out ${
        shown ? 'translate-x-0 translate-y-0 opacity-100' : hidden[direction]
      } ${className}`}
    >
      {children}
    </div>
  )
}
