import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Entrance "motion personality" — each design's landing page uses a different
 * one so the animation character differs, not just the colors:
 *   soft  → opacity-only, slow (Ashton: calm, editorial)
 *   up    → fade + lift (Oura: smooth, tactile)        [default]
 *   pop   → lift + scale with overshoot (Evermade: snappy, punk)
 *   left/right → directional slide
 */
type Direction = 'up' | 'left' | 'right' | 'none' | 'soft' | 'pop'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

const hidden: Record<Direction, string> = {
  up: 'opacity-0 translate-y-10',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
  none: 'opacity-0',
  soft: 'opacity-0',
  pop: 'opacity-0 translate-y-12 scale-[0.97]',
}

const motion: Record<Direction, string> = {
  up: 'duration-[800ms] ease-out',
  left: 'duration-[800ms] ease-out',
  right: 'duration-[800ms] ease-out',
  none: 'duration-[800ms] ease-out',
  soft: 'duration-[1200ms] ease-out',
  pop: 'duration-[650ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]',
}

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
      className={`transition-all ${motion[direction]} ${
        shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hidden[direction]
      } ${className}`}
    >
      {children}
    </div>
  )
}
