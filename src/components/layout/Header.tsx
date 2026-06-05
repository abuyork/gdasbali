import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV, BRAND, BOOKING } from '@/data/site'
import { useHero } from '@/lib/hero'
import type { NavLink } from '@/data/types'

function TopLink({ item, onNavigate }: { item: NavLink; onNavigate?: () => void }) {
  const className =
    'nav-link inline-flex items-center gap-1 py-2 text-sm tracking-wide'
  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    )
  }
  return (
    <Link to={item.to} className={className} onClick={onNavigate}>
      {item.label}
    </Link>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { hasHero } = useHero()

  // Transparent over the hero, solid once scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on route change.
  useEffect(() => setMobileOpen(false), [location.pathname])

  // Float transparently only over a dark hero at the top of the page.
  const solid = scrolled || mobileOpen || !hasHero
  const bar = solid
    ? 'bg-canvas/95 text-ink border-line backdrop-blur supports-[backdrop-filter]:bg-canvas/80'
    : 'bg-transparent text-white border-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${bar}`}>
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="GDAS Bali — home">
          <img
            src={BRAND.logo.src}
            alt={BRAND.logo.alt}
            className={`h-10 w-auto md:h-12 ${solid ? 'brightness-0' : 'brightness-0 invert'}`}
            width={120}
            height={48}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <TopLink item={item} />
                <div className="invisible absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 translate-y-2 border border-line bg-canvas text-ink opacity-0 shadow-[0_18px_40px_-24px_rgba(43,40,35,0.45)] transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className="block px-5 py-2.5 text-sm hover:bg-surface"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <TopLink key={item.label} item={item} />
            ),
          )}
          <a
            href={BOOKING.engine}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${solid ? '' : 'btn-ondark'} py-2.5 px-5`}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-canvas px-6 pb-8 pt-2 text-ink lg:hidden"
        >
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-line/60 py-1">
              <TopLink item={item} onNavigate={() => setMobileOpen(false)} />
              {item.children && (
                <ul className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link
                        to={child.to}
                        className="block py-2 text-sm text-ink-soft"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a
            href={BOOKING.engine}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid mt-6 w-full justify-center"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  )
}
