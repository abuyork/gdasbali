import { createContext, useContext, useState, type ReactNode } from 'react'

/**
 * Tracks whether the current page renders a full-bleed PageHero. The Header uses
 * this to decide whether it may float transparently (over a dark hero) or must
 * stay solid (on a light page) — otherwise white nav text is invisible on the
 * parchment canvas.
 */
const HeroContext = createContext<{
  hasHero: boolean
  setHasHero: (v: boolean) => void
}>({ hasHero: false, setHasHero: () => {} })

export function HeroProvider({ children }: { children: ReactNode }) {
  const [hasHero, setHasHero] = useState(false)
  return (
    <HeroContext.Provider value={{ hasHero, setHasHero }}>
      {children}
    </HeroContext.Provider>
  )
}

export const useHero = () => useContext(HeroContext)
